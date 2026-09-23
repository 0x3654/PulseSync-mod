'use strict';
const { WebSocketServer } = require('ws');
const { Logger } = require('../../packages/logger/Logger.js');
const { throttle } = require('../utils.js');
const { PlayerActions } = require('../../types/playerActions.js');

const BRIDGE_PROTOCOL_VERSION = 1;
const DEFAULT_PORT = 49731;
const STATE_THROTTLE_MS = 150;
const MAX_PAYLOAD_BYTES = 1024 * 1024;

const playerActionNames = new Set(Object.values(PlayerActions));

// Bridge-specific actions that are handled in the main process itself.
const bridgeActions = new Set(['OPEN_DEEPLINK', 'DOWNLOAD_CURRENT_TRACK']);

// Split the composite entity id ("trackId:albumId", or "generative:..." for Vibe)
// into bare ids. Falls back to track.albums[0].id for the album.
const splitEntityId = (id) => {
    const raw = String(id ?? '');
    if (!raw) return { trackId: null, albumId: null };

    const parts = raw.split(':');
    const trackId = parts[0] || null;
    const albumId = parts.length > 1 && /^\d+$/.test(parts[1]) ? parts[1] : null;

    return { trackId, albumId };
};

const buildTrackURL = (trackId, albumId) => {
    if (!trackId || !/^\d+$/.test(trackId)) return null;
    if (!albumId) return null;

    return `https://music.yandex.ru/album/${albumId}/track/${trackId}`;
};

// Reduce a PLAYER_STATE payload to a compact, stable frame for WS clients.
const normalizePlayerState = (data) => {
    if (!data || !data.track) return null;

    const { trackId, albumId } = splitEntityId(data.track.id);
    const resolvedAlbumId = albumId ?? (data.track.albums?.[0]?.id ? String(data.track.albums[0].id) : null);

    return {
        status: data.status ?? null,
        isPlaying: data.isPlaying === true,
        title: data.track.title ?? '',
        version: data.track.version ?? null,
        artists: (data.track.artists ?? []).map((artist) => artist?.title ?? artist?.name).filter(Boolean),
        albumTitle: data.track.albums?.[0]?.title ?? null,
        trackId,
        albumId: resolvedAlbumId,
        trackURL: buildTrackURL(trackId, resolvedAlbumId),
        durationMs: data.track.durationMs ?? null,
        position: data.progress?.position ?? null,
        volume: typeof data.volume === 'number' ? data.volume : null,
        repeat: data.actionsStore?.repeat ?? 'none',
        shuffle: data.actionsStore?.shuffle === true,
        isLiked: data.actionsStore?.isLiked === true,
        isDisliked: data.actionsStore?.isDisliked === true,
        canMoveForward: data.canMoveForward === true,
        canMoveBackward: data.canMoveBackward === true,
        timestamp: Date.now(),
    };
};

// State keys whose change must bypass throttling and reach clients immediately.
const isSignificantChange = (previous, next) =>
    !previous ||
    previous.trackId !== next.trackId ||
    previous.status !== next.status ||
    previous.isLiked !== next.isLiked ||
    previous.isDisliked !== next.isDisliked ||
    previous.shuffle !== next.shuffle ||
    previous.repeat !== next.repeat;

/**
 * Local WebSocket control bridge for external integrations (e.g. DynamicNotch).
 *
 * Listens on 127.0.0.1 only, serves a single client at a time, pushes normalized
 * player state (throttled, with immediate flush on significant changes) and
 * accepts JSON commands:
 *   {"type":"command","id":"c1","action":"SET_VOLUME","value":0.53}
 *   {"type":"command","id":"c2","action":"addTrackToQueueById","args":["123",{"albumId":"987"}]}
 * PlayerActions are dispatched via PLAYER_ACTION; camelCase actions are passed
 * through to the renderer pulsesyncApi dispatcher (PULSESYNC_API).
 */
class LocalBridgeServer {
    constructor(options = {}) {
        this.logger = new Logger('LocalBridge');
        this.port = options.port ?? DEFAULT_PORT;
        this.sendPlayerAction = options.sendPlayerAction ?? (() => {});
        this.sendPulseSyncApi = options.sendPulseSyncApi ?? (() => {});
        this.sendOpenDeeplink = options.sendOpenDeeplink ?? (() => {});
        this.downloadCurrentTrack = options.downloadCurrentTrack ?? (() => {});

        this.server = null;
        this.client = null;
        this.lastState = null;
        this.lastSentFrame = null;
        this.throttledBroadcast = throttle(() => this.broadcastState(), STATE_THROTTLE_MS);
    }

    start() {
        if (this.server) return;

        const server = new WebSocketServer({
            host: '127.0.0.1',
            port: this.port,
            maxPayload: MAX_PAYLOAD_BYTES,
        });

        server.on('connection', (ws) => {
            // Single client slot: the newest connection wins.
            if (this.client && this.client.readyState === this.client.OPEN) {
                this.client.close(4000, 'Superseded by a new client');
            }
            this.client = ws;

            ws.on('message', (raw) => this.handleMessage(ws, raw));
            ws.on('close', () => {
                if (this.client === ws) this.client = null;
            });
            ws.on('error', (error) => this.logger.warn('Client error', error?.message));

            this.logger.info('Client connected');
            this.sendTo(ws, { type: 'hello', version: BRIDGE_PROTOCOL_VERSION, server: 'pulsesync-local-bridge' });
            if (this.lastState) {
                this.sendTo(ws, { type: 'state', state: this.lastState });
                this.lastSentFrame = this.lastState;
            }
        });

        server.on('error', (error) => {
            if (error?.code === 'EADDRINUSE') {
                this.logger.warn(`Port ${this.port} is busy, local bridge disabled`);
            } else {
                this.logger.error('Server error', error);
            }
            this.stopServer();
        });

        this.server = server;
        this.logger.info(`Listening on ws://127.0.0.1:${this.port}`);
    }

    stop() {
        this.stopServer();
        this.client = null;
        this.lastState = null;
        this.lastSentFrame = null;
    }

    updatePlayerState(data) {
        const state = normalizePlayerState(data);
        if (!state) return;

        const hadSignificantChange = isSignificantChange(this.lastState, state);
        this.lastState = state;

        if (!this.client || this.client.readyState !== this.client.OPEN) return;

        if (hadSignificantChange) {
            this.broadcastState();
        } else {
            this.throttledBroadcast();
        }
    }

    handleCommand(ws, message) {
        const { id, action, value, args } = message;
        let ok = false;

        try {
            if (playerActionNames.has(action)) {
                this.sendPlayerAction(action, value);
                ok = true;
            } else if (action === 'OPEN_DEEPLINK') {
                if (typeof value === 'string' && value.startsWith('/')) {
                    this.sendOpenDeeplink(value);
                    ok = true;
                }
            } else if (action === 'DOWNLOAD_CURRENT_TRACK') {
                const trackId = this.lastState?.trackId;
                if (trackId) {
                    this.downloadCurrentTrack(trackId);
                    ok = true;
                }
            } else if (typeof action === 'string' && /^[a-z][A-Za-z0-9]*$/.test(action)) {
                // Renderer pulsesyncApi passthrough (playTrackById, addTrackToQueueById, ...).
                const payload = {
                    action,
                    trackId: Array.isArray(args) ? args[0] : undefined,
                    albumId: Array.isArray(args) && args[1] && typeof args[1] === 'object' ? args[1].albumId : undefined,
                    options: Array.isArray(args) && args[1] && typeof args[1] === 'object' ? args[1] : undefined,
                    args,
                };
                this.sendPulseSyncApi(payload);
                ok = true;
            }
        } catch (error) {
            this.logger.error('Command failed', action, error);
        }

        this.sendTo(ws, { type: 'result', id: id ?? null, ok });
    }

    handleMessage(ws, raw) {
        let message;

        try {
            message = JSON.parse(String(raw));
        } catch {
            return;
        }

        if (message?.type !== 'command') return;

        this.logger.info('Command received', message.action);
        this.handleCommand(ws, message);
    }

    broadcastState() {
        if (!this.client || this.client.readyState !== this.client.OPEN || !this.lastState) return;

        // Skip identical frames (e.g. throttled progress ticks while paused).
        if (this.lastSentFrame) {
            const previous = { ...this.lastSentFrame, timestamp: 0 };
            const next = { ...this.lastState, timestamp: 0 };
            if (JSON.stringify(previous) === JSON.stringify(next)) return;
        }

        this.sendTo(this.client, { type: 'state', state: this.lastState });
        this.lastSentFrame = this.lastState;
    }

    sendTo(ws, payload) {
        if (ws.readyState !== ws.OPEN) return;

        try {
            ws.send(JSON.stringify(payload));
        } catch (error) {
            this.logger.warn('Send failed', error?.message);
        }
    }

    stopServer() {
        if (!this.server) return;

        try {
            this.server.close();
            for (const client of this.server.clients ?? []) {
                client.terminate();
            }
        } catch (error) {
            this.logger.warn('Close failed', error?.message);
        }

        this.server = null;
    }
}

module.exports = {
    LocalBridgeServer,
    DEFAULT_PORT,
    BRIDGE_PROTOCOL_VERSION,
};

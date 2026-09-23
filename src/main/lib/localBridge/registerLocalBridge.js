'use strict';
const { app } = require('electron');
const { Events } = require('../../types/events.js');
const { LocalBridgeServer, DEFAULT_PORT } = require('./LocalBridgeServer.js');
const { getModSettings } = require('../store.js');
const { throttle } = require('../utils.js');
const { Logger } = require('../../packages/logger/Logger.js');

const PROGRESS_BAR_THROTTLE_MS = 200;

/**
 * Start the local WebSocket control bridge (127.0.0.1) for external
 * integrations such as DynamicNotch. Reads modSettings.localBridge
 * ({ enabled: true, port: 49731 } by default) and stops with the app.
 */
function registerLocalBridge(options = {}) {
    const logger = new Logger('LocalBridge');
    const window = options.window;
    const trackDownloader = options.trackDownloader;

    const settings = getModSettings()?.localBridge ?? {};
    if (settings.enabled === false) {
        logger.info('Disabled by modSettings.localBridge.enabled');
        return null;
    }

    const port = Number.isFinite(Number(settings.port)) && Number(settings.port) > 0 ? Number(settings.port) : DEFAULT_PORT;

    const server = new LocalBridgeServer({
        port,
        sendPlayerAction: (action, value) => {
            window?.webContents?.send?.(Events.PLAYER_ACTION, action, value, Date.now());
        },
        sendPulseSyncApi: (payload) => {
            window?.webContents?.send?.(Events.PULSESYNC_API, payload);
        },
        sendOpenDeeplink: (pathname) => {
            window?.webContents?.send?.(Events.OPEN_DEEPLINK, pathname);
        },
        downloadCurrentTrack: async (trackId) => {
            // events.js is required lazily to avoid a require cycle at module init.
            const events = require('../../events.js');
            const toastID = `trackDownload|${trackId}`;
            const toastNonce = events.sendBasicToastCreate(window, toastID, 'Загрузка трека...', false);
            const callback = (progressRenderer, progressWindow) => {
                events.sendProgressBarChange(window, toastID, progressRenderer * 100, undefined, toastNonce);
                window.setProgressBar(progressWindow);
            };

            await trackDownloader.downloadSingleTrack(trackId, throttle(callback, PROGRESS_BAR_THROTTLE_MS));
            setTimeout(() => events.sendBasicToastDismiss(window, toastID, toastNonce), 2000);
        },
    });

    server.start();
    app.on('will-quit', () => server.stop());

    return server;
}

module.exports = {
    registerLocalBridge,
};

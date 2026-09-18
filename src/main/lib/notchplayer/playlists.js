'use strict';
// Плейлисты для меню нотча напрямую из API: ленивый загрузчик приложения на кражу не реагирует.
Object.defineProperty(exports, '__esModule', { value: true });

const { net } = require('electron');

const API = 'https://api.music.yandex.net';
const LIST_TTL_MS = 5 * 60 * 1000;

let authCache = null;
let uidCache = null;
let listCache = null;
let listCacheAt = 0;

const getAuth = async (webContents) => {
    if (authCache) return authCache;
    try {
        authCache = await webContents.executeJavaScript(
            `(localStorage.getItem('oauth') ? JSON.parse(localStorage.getItem('oauth')).value : null)`,
            true,
        );
    } catch {
        authCache = null;
    }
    return authCache;
};

const jsonFetch = async (url, auth, options = {}) => {
    const res = await net.fetch(url, {
        ...options,
        headers: { Authorization: 'OAuth ' + auth, 'Content-Type': 'application/json', ...(options.headers || {}) },
    });
    const json = await res.json().catch(() => null);
    if (!res.ok || (json && json.error)) throw new Error(json?.error?.message || `HTTP ${res.status}`);
    return json;
};

const getUid = async (auth) => {
    if (uidCache) return uidCache;
    const st = await jsonFetch(`${API}/account/about`, auth);
    const acc = st?.account ?? st?.result?.account ?? st?.result;
    uidCache = acc?.uid ?? null;
    if (!uidCache) throw new Error('about-ответ без uid: ' + JSON.stringify(st).slice(0, 120));
    return uidCache;
};

exports.getPlaylistMenuItems = async (webContents) => {
    if (listCache && Date.now() - listCacheAt < LIST_TTL_MS) return listCache;
    const auth = await getAuth(webContents);
    if (!auth) throw new Error('oauth-токен недоступен');
    const uid = await getUid(auth);
    const pl = await jsonFetch(`${API}/users/${uid}/playlists/list`, auth);
    const own = (pl?.result || []).filter((p) => !p.collective);
    listCache = own.map((p) => ({
        label: p.title,
        kind: 'pulse-playlist',
        uid,
        playlistKind: p.kind,
        revision: p.revision,
        at: p.trackCount ?? 0,
    }));
    listCacheAt = Date.now();
    return listCache;
};

exports.addTrackToPlaylist = async (webContents, item, track) => {
    const auth = await getAuth(webContents);
    if (!auth || !item?.uid) return { ok: false, reason: 'no auth' };
    // id бывает составным "trackId:albumId", альбом — из albums[0]
    const [trackId, compositeAlbumId] = String(track?.id ?? '').split(':');
    const albumId = compositeAlbumId ?? track?.albums?.[0]?.id;
    if (!trackId || !albumId) return { ok: false, reason: 'no track ids' };
    const diff = JSON.stringify([{ op: 'insert', at: item.at ?? 0, tracks: [{ id: Number(trackId), albumId: Number(albumId) }] }]);
    const form = new URLSearchParams({ revision: String(item.revision), diff });
    const json = await jsonFetch(`${API}/users/${item.uid}/playlists/${item.playlistKind}/change`, auth, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form.toString(),
    });
    // ревизия изменилась — кэш списка устарел
    listCache = null;
    return { ok: Boolean(json?.result?.revision) };
};

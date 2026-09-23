// Мини-преплоад: только musicDesktop для 5.120
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('musicDesktop', {
    runtime: {
        version: '5.120.0',
        branch: 'stable',
        platform: process.platform,
        deviceInfo: { manufacturer: '', model: '', uuid: '', os: process.platform, os_version: '', device_id: '', clid: 0 },
        deviceHostname: require('os').hostname(),
    },
    window: {
        minimize: () => ipcRenderer.send('desktop:window:minimize'),
        maximize: () => ipcRenderer.send('desktop:window:maximize'),
        close: () => ipcRenderer.send('desktop:window:close'),
    },
    app: {
        ready: (l) => ipcRenderer.send('desktop:application:ready', l),
        setTheme: (t) => ipcRenderer.send('desktop:application:theme', t),
        installUpdate: () => {},
        onUpdateAvailable: (cb) => {},
        onRefreshData: (cb) => {},
        onFirstLaunch: (cb) => {},
        onProbabilityBucket: (cb) => {},
        onLoadReleaseNotes: (cb) => {},
    },
    authorization: {
        getPassportLogin: () => Promise.resolve(null),
        getYandexUid: () => Promise.resolve(null),
        reportDiagnostic: () => {},
    },
    player: {
        reportState: (s) => ipcRenderer.send('desktop:player:state', s),
        onAction: (cb) => {},
    },
    navigation: { onOpenDeeplink: (cb) => {} },
    offline: {
        notifyTracksAvailabilityUpdated: () => {},
        notifyRepositoryMetaUpdated: () => {},
        onRefreshTracksAvailability: (cb) => {},
        onRefreshRepositoryMeta: (cb) => {},
    },
    files: { savePng: () => {} },
});

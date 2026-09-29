const electron = require('electron');
const path = require('path');
const fs = require('fs');

const store = require('../store.js');
const { Logger } = require('../../packages/logger/Logger.js');

const logger = new Logger('NotchPlayer');

const IS_DEV = false;

const PANEL_WIDTH = 360;
const PANEL_HEIGHT = 169;
const MENU_GAP = 6;
const MENU_MAX_HEIGHT = 520;

const pillSize = (mode, menuBarHeight) => ({
    width: mode === 'notch' ? 284 : 260,
    height: Math.min(mode === 'notch' ? 32 : 26, menuBarHeight),
});

/**
 * Notch-плеер: капсула в зоне меню-бара (в стиле DynamicNotch), по ховеру
 * разворачивается в панель управления. Окна — по настройке дисплея:
 * встроенный / основной / все мониторы.
 */
class NotchPlayer {
    constructor() {
        this.entries = []; // { window, display, mode, menuBarHeight, expanded, shrinkTimer }
        this.visible = false;
        this.rebuildTimer = null;
        this.onPlayerActionCallback = null;
        this.lastPlayerState = null;
        this.lastSettingsState = null;
        this.handleNotchPlayerEvents();
        // мониторы меняются (встроенный выключили, внешний воткнули) — пересобираем
        // окна, иначе остаются капсулы-призраки на несуществующих экранах.
        // screen нельзя трогать до app ready — подписываемся отложенно
        const watchDisplays = () => {
            const rebuild = () => {
                if (this.visible) this.createWindows();
            };
            electron.screen.on('display-added', rebuild);
            electron.screen.on('display-removed', rebuild);
            electron.screen.on('display-metrics-changed', rebuild);
        };
        if (electron.app.isReady()) watchDisplays();
        else electron.app.whenReady().then(watchDisplays);
    }

    get enabled() {
        return store.getModSettings()?.notchplayer?.enabled === true;
    }

    targetDisplays() {
        const all = electron.screen.getAllDisplays();
        const preference = store.getModSettings()?.notchplayer?.display ?? 'builtin';
        if (preference === 'all') return all;
        if (preference === 'primary') return [electron.screen.getPrimaryDisplay()];
        const internal = all.find((d) => d.internal);
        return [internal ?? electron.screen.getPrimaryDisplay()];
    }

    handleNotchPlayerEvents() {
        electron.ipcMain.on('NOTCHPLAYER_PLAYER_ACTION', (event, action, value) => {
            this.onPlayerActionCallback?.(action, value);
        });
        electron.ipcMain.on('NOTCHPLAYER_READY', (event) => {
            // окно могло потеряться из entries (перезагрузка рендерера и т.п.) —
            // восстанавливаем связь по фактическому окну отправителя
            let entry = this.entryBySender(event.sender);
            if (!entry) {
                const win = electron.BrowserWindow.fromWebContents(event.sender);
                const display = win ? electron.screen.getDisplayMatching(win.getBounds()) : null;
                if (!win || !display || win.isDestroyed()) return;
                entry = {
                    window: win,
                    display,
                    mode: display.internal ? 'notch' : 'island',
                    menuBarHeight: Math.max(0, display.workArea.y - display.bounds.y) || 25,
                    expanded: false,
                    shrinkTimer: null,
                };
                win.on('closed', () => {
                    clearTimeout(entry.shrinkTimer);
                    this.entries = this.entries.filter((e) => e !== entry);
                });
                this.entries.push(entry);
            }
            entry.window.webContents.send('NOTCHPLAYER_PLAYER_STATE', this.lastPlayerState);
            entry.window.webContents.send('NOTCHPLAYER_SETTINGS_STATE', this.lastSettingsState);
            entry.window.webContents.send('NOTCHPLAYER_MENU_ITEMS', this.lastMenuItems ?? []);
        });
        electron.ipcMain.on('NOTCHPLAYER_SET_MOUSE_EVENTS', (event, accept) => {
            const entry = this.entryBySender(event.sender);
            if (!entry || entry.window.isDestroyed()) return;
            entry.window.setIgnoreMouseEvents(accept === false, { forward: accept !== true });
        });
        electron.ipcMain.on('NOTCHPLAYER_EXPANDED', (event, expanded) => {
            const entry = this.entryBySender(event.sender);
            if (!entry || entry.window.isDestroyed()) return;
            entry.expanded = Boolean(expanded);
        });
        // Поле поиска в нотче требует клавиатуры: окно рождено focusable:false,
        // на время ввода делаем его key-окном, закрытие возвращает как было
        electron.ipcMain.on('NOTCHPLAYER_SEARCH_MODE', (event, active) => {
            const entry = this.entryBySender(event.sender);
            if (!entry || entry.window.isDestroyed()) return;
            entry.window.setFocusable(active === true);
            if (active === true) entry.window.focus();
        });
    }

    setMenuItems(items) {
        this.lastMenuItems = Array.isArray(items) ? items : [];
        for (const entry of this.entries) {
            if (entry.window.isDestroyed()) continue;
            entry.window.webContents?.send('NOTCHPLAYER_MENU_ITEMS', this.lastMenuItems);
        }
    }

    entryBySender(sender) {
        // 'closed' чистит entries асинхронно — часть может быть уже уничтожена,
        // а геттер webContents у мёртвого окна бросает исключение
        return this.entries.find((entry) => !entry.window.isDestroyed() && entry.window.webContents.id === sender.id);
    }

    // Окно не меняет размер вовсе: панель морфится CSS-ом, краденое меню живёт
    // в нижнем запасе (ресайзы давали артефакты); клики мимо форм проходят:
    // корень рендерера сжат до капсулы и шире — только пока открыто меню.
    
    boundsFor(display) {
        const size = { width: PANEL_WIDTH, height: PANEL_HEIGHT + MENU_GAP + MENU_MAX_HEIGHT };
        return {
            x: Math.round(display.bounds.x + (display.bounds.width - size.width) / 2),
            y: Math.round(display.bounds.y),
            width: size.width,
            height: size.height,
        };
    }

    resizeEntry(entry) {
        if (!entry.window || entry.window.isDestroyed()) return;
        const want = this.boundsFor(entry.display);
        const got = entry.window.getBounds();
        if (got.x !== want.x || got.y !== want.y || got.width !== want.width || got.height !== want.height) {
            entry.window.setBounds(want);
        }
    }

    createWindow(display) {
        const mode = display.internal ? 'notch' : 'island';
        const menuBarHeight = Math.max(0, display.workArea.y - display.bounds.y) || 25;
        const entry = { window: null, display, mode, menuBarHeight, expanded: false, shrinkTimer: null };

        const win = new electron.BrowserWindow({
            ...this.boundsFor(display),
            frame: false,
            transparent: true,
            hasShadow: false,
            // разрешает окну жить в зоне меню-бара (отключает constrainFrameRect)
            enableLargerThanScreen: true,
            resizable: false,
            minimizable: false,
            maximizable: false,
            fullscreenable: false,
            skipTaskbar: true,
            // пустой title — чтобы окно не появлялось в списке окон дока (правый клик)
            title: '',
            // macOS: skipTaskbar прячет приложение из дока, если это единственное окно —
            focusable: false,
            alwaysOnTop: true,
            visibleOnAllWorkspaces: true,
            backgroundColor: '#00000000',
            webPreferences: {
                devTools: true,
                webSecurity: true,
                nodeIntegration: false,
                contextIsolation: true,
                preload: path.join(__dirname, 'preload.js'),
            },
        });

        win.setAlwaysOnTop(true, 'screen-saver');
        // macOS: skipTaskbar на нотче прячет приложение из дока, когда основное окно
        // закрыто — восстанавливаем иконку явно (пока без настройки, всегда показываем)
        if (process.platform === 'darwin' && typeof electron.app.dock?.show === 'function') {
            try { electron.app.dock.show(); } catch {}
        }
        // visibleOnAllWorkspaces как опция конструктора не работает с transparent
        // на macOS — вызываем явно после показа окна
        win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
        // капсула не должна занимать слот в Mission Control / жесте «все окна»
        if (typeof win.setHiddenInMissionControl === 'function') {
            win.setHiddenInMissionControl(true);
        }
        win.on('closed', () => {
            clearTimeout(entry.shrinkTimer);
            this.entries = this.entries.filter((e) => e !== entry);
        });

        entry.window = win;
        this.entries.push(entry);

        const devUrl = 'http://localhost:5173/notch.html';
        const builtIndex = path.join(__dirname, '..', 'miniplayer', 'renderer', 'notch.html');
        const query = { mode, mbh: String(menuBarHeight) };

        // после загрузки: сбросить title (HTML может его перезаписать) и
        // повторно скрыть из списка окон дока
        win.once('ready-to-show', () => {
            try { win.setTitle(''); } catch {}
        });

        // loadFile/loadURL возвращают промис: окно могут снести во время загрузки
        // (быстрый тогл, смена дисплея) — реджект глушим, это ожидаемый сценарий
        if (IS_DEV) {
            win.loadURL(`${devUrl}?mode=${mode}&mbh=${menuBarHeight}`).catch(() => {});
        } else if (fs.existsSync(builtIndex)) {
            win.loadFile(builtIndex, { query }).catch(() => {});
        } else {
            win.destroy();
            return null;
        }

        win.once('ready-to-show', () => {
            // macOS может утопить окно под меню-бар — продавливаем позицию после показа
            this.resizeEntry(entry);
            win.showInactive();
            // клик-сквозь с форвардингом включаем после показа: в конструкторе он
            // ронял процесс нативно (~100мс после create)
            try { win.setIgnoreMouseEvents(true, { forward: true }); } catch {}
            setTimeout(() => this.resizeEntry(entry), 150);
        });

        return win;
    }

    createWindows() {
        // слипаем пересборки: быстрый тогл не устраивает create/destroy-шторм
        clearTimeout(this.rebuildTimer);
        this.rebuildTimer = setTimeout(() => {
            if (!this.visible) return;
            this.destroyWindows();
            for (const display of this.targetDisplays()) {
                this.createWindow(display);
            }
            logger.log(`created ${this.entries.length} window(s)`);
        }, 150);
    }

    destroyWindows() {
        clearTimeout(this.rebuildTimer);
        const doomed = this.entries;
        this.entries = [];
        for (const entry of doomed) {
            clearTimeout(entry.shrinkTimer);
            if (!entry.window || entry.window.isDestroyed()) continue;
            // нативные краши коррелируют с destroy прозрачного окна во время
            // композитинга — прячем и рвём загрузку, destroy отложенно
            try {
                entry.window.webContents.stop();
                entry.window.hide();
            } catch {}
            const win = entry.window;
            setTimeout(() => { if (!win.isDestroyed()) win.destroy(); }, 500);
        }
    }

    setVisible(visible) {
        if (visible === this.visible) return;
        this.visible = visible;
        store.set('modSettings.notchplayer.visible', visible);
        if (visible) this.createWindows();
        else this.destroyWindows();
    }

    restoreFromSettings() {
        if (this.enabled && store.getModSettings()?.notchplayer?.visible === true) {
            this.setVisible(true);
        }
    }

    onModSettingsChanged(key) {
        if (typeof key !== 'string' || !key.startsWith('modSettings.notchplayer')) return;
        if (key === 'modSettings.notchplayer.enabled') {
            if (!this.enabled) this.setVisible(false);
            return;
        }
        if (key === 'modSettings.notchplayer.display' && this.visible) {
            this.createWindows();
        }
    }

    updatePlayerState(data) {
        this.lastPlayerState = data;
        this.lastPlayerState.progress = data.progress.position;
        this.lastPlayerState.timestamp = Date.now();
        for (const entry of this.entries) {
            if (entry.window.isDestroyed()) continue;
            entry.window.webContents?.send('NOTCHPLAYER_PLAYER_STATE', this.lastPlayerState);
        }
    }

    // Лайк/дизлайк могут меняться без PLAYER_STATE-пуша (пауза) — мерджим и рассылаем
    updateLikeState(likeState) {
        const state = this.lastPlayerState;
        const trackId = likeState?.trackId;
        const sameTrack = !state?.track?.id || !trackId || String(state.track.id) === String(trackId);
        if (!state?.actionsStore || !sameTrack) return;
        const next = {
            ...state,
            actionsStore: {
                ...state.actionsStore,
                isLiked: likeState.isLiked === true,
                isDisliked: likeState.isDisliked === true,
            },
        };
        this.lastPlayerState = next;
        for (const entry of this.entries) {
            if (entry.window.isDestroyed()) continue;
            entry.window.webContents?.send('NOTCHPLAYER_PLAYER_STATE', next);
        }
    }

    updateSettingsState(data) {
        this.lastSettingsState = data;
        for (const entry of this.entries) {
            if (entry.window.isDestroyed()) continue;
            entry.window.webContents?.send('NOTCHPLAYER_SETTINGS_STATE', data);
        }
    }

    onPlayerAction(callback) {
        this.onPlayerActionCallback = callback;
    }

    toggle() {
        if (!this.enabled) return;
        this.setVisible(!this.visible);
    }

    destroy() {
        this.setVisible(false);
    }
}

exports.NotchPlayer = NotchPlayer;
exports.getNotchPlayer = (() => {
    let notchPlayer;
    return () => {
        if (!notchPlayer) {
            notchPlayer = new NotchPlayer();
        }
        return notchPlayer;
    };
})();

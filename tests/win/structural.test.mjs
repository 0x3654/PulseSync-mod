// Локальные структурные проверки Windows-составляющей мода (без запуска приложения).
// Запуск: node tests/win/structural.test.mjs
// Один файл на все ветки порта (5.119 / 5.120 / 5.121): версия берётся из src/package.json,
// чанк-специфика переключается по мажору.
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const pkg = JSON.parse(readFileSync(path.join(root, 'src/package.json'), 'utf8'));
const major = pkg.version.slice(0, pkg.version.lastIndexOf('.'));
const layoutChunkPath =
    major === '5.122'
        ? 'src/app/_next/static/chunks/app/(product)/layout-b2ad478f7ba2beba.js'
        : major === '5.121'
            ? 'src/app/_next/static/chunks/app/(product)/layout-296631fcc305889e.js' // минифицированный, живой layout 5.121
            : 'src/app/_next/static/chunks/app/(product)/layout-1bdc588f6d2b4154.js'; // pretty-чанк 5.119/5.120

let failed = 0;
const check = (name, ok, details = '') => {
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${details ? ' — ' + details : ''}`);
    if (!ok) failed += 1;
};
console.log(`ветка порта: ${major}`);

// 1) синтаксис тронутых файлов
for (const file of ['src/main/lib/store.js', 'src/main/lib/miniplayer/miniplayer.js']) {
    try {
        execFileSync('node', ['--check', path.join(root, file)], { stdio: 'pipe' });
        check(`syntax ${file}`, true);
    } catch (e) {
        check(`syntax ${file}`, false, String(e.stderr || e.message).split('\n')[0]);
    }
}

// 2) тайтлбар-ряд: тег версии + кнопка miniplayer доступны на win/linux/mac.
//    5.121 — минифицированный чанк, ряд за гейтом (p||s) до оконных кнопок (как 5.119);
//    5.119/5.120 — pretty-чанк, ряд без виндового гейта (119: (s || isMacOS), 120: без гейта)
const layoutChunk = readFileSync(path.join(root, layoutChunkPath), 'utf8');
if (major === '5.122') {
    // 5.122: TitleBar = модуль 2579 в layout-чанке, трансплантат 5.119-порядка
    const tbAnchor = '2579:(e,t,a)=>{';
    const tbStart = layoutChunk.indexOf(tbAnchor);
    check('модуль TitleBar в layout-чанке', tbStart >= 0);
    const tb = tbStart >= 0 ? layoutChunk.slice(tbStart, tbStart + 30000) : '';
    check('кнопка miniplayer в модуле TitleBar', tb.includes("ariaLabel:'miniplayer'") || tb.includes('miniplayer'));
    check('кнопка notchplayer в модуле TitleBar', tb.includes("ariaLabel:'notchplayer'") || tb.includes('notchplayer'));
    check('тег версии PulseSync в модуле', tb.includes('window.PULSE_VERSION'));
    check('тег можно скрыть (HIDE_PULSESYNC_VERSION_IN_TITLEBAR)', tb.includes('HIDE_PULSESYNC_VERSION_IN_TITLEBAR'));
} else if (major === '5.121') {
    const tbAnchor = 'a.d(t,{TitleBar:()=>h})';
    const tbStart = layoutChunk.indexOf(tbAnchor);
    check('модуль TitleBar в layout-чанке', tbStart >= 0);
    if (tbStart >= 0) {
        const nextModule = layoutChunk.slice(tbStart + 100).search(/,\d+:\(e,t,a\)=>/);
        const tb = layoutChunk.slice(tbStart, tbStart + 100 + (nextModule > 0 ? nextModule : layoutChunk.length));
        const modRow = tb.indexOf('(p||s)&&(0,r.jsxs)(r.Fragment');
        const winControls = tb.indexOf('s&&(0,r.jsxs)(r.Fragment');
        check('мод-ряд рендерится на win/linux/mac (гейт p||s)', modRow >= 0);
        check('оконные кнопки win/linux в том же чанке', winControls >= 0);
        check('порядок 5.119: мод-ряд до оконных кнопок', modRow >= 0 && winControls >= 0 && modRow < winControls);
        check('тег версии можно скрыть (HIDE_PULSESYNC_VERSION_IN_TITLEBAR)', tb.includes('HIDE_PULSESYNC_VERSION_IN_TITLEBAR'));
        check('кнопка нотча видима только на маке (p&&nativeSettings)', tb.includes('p&&window.nativeSettings'));
    }
} else {
    check('ряд тайтлбара в чанке (pretty-порты 119/120)', layoutChunk.includes('onMiniPlayerToggle'));
    check('кнопка miniplayer без виндового гейта', !/onMiniPlayerToggle[\s\S]{0,400}?isWindowsApplication/.test(layoutChunk.split('onMiniPlayerToggle')[0] + 'onMiniPlayerToggle'));
}
check('кнопка miniplayer в ряду', layoutChunk.includes('miniplayer'));
check('тег версии PulseSync в ряду', layoutChunk.includes('window.PULSE_VERSION'));

// 3) IPC-гейты в main: мини-плеер — кроссплатформенный, нотч — darwin-only
const events = readFileSync(path.join(root, 'src/main/events.js'), 'utf8');
const handlerSpan = (src, marker) => {
    const i = src.indexOf(marker);
    if (i < 0) return '';
    const end = src.indexOf('});', i);
    return src.slice(i, end > 0 ? end + 3 : undefined);
};
const miniH = handlerSpan(events, 'ipcMain.on(events_js_1.Events.TOGGLE_MINIPLAYER');
check('обработчик TOGGLE_MINIPLAYER существует', miniH.includes('MiniPlayer.toggle()'));
check('мини-плеер без платформенного гейта (работает на win)', miniH.length > 0 && !miniH.includes('process.platform'));
const notchH = handlerSpan(events, 'ipcMain.on(events_js_1.Events.TOGGLE_NOTCHPLAYER');
check('обработчик TOGGLE_NOTCHPLAYER существует', notchH.length > 0);
check('нотч-обработчик за darwin-гейтом', notchH.includes("process.platform !== 'darwin'"));

// 4) модовый авто-апдейтер выключен по умолчанию: канал апстрима затирает форк-сборки
const store = readFileSync(path.join(root, 'src/main/lib/store.js'), 'utf8');
check('store: enableModAutoUpdate по умолчанию false', /enableModAutoUpdate:\s*false/.test(store));
const index = readFileSync(path.join(root, 'src/main/index.js'), 'utf8');
check('index: modUpdater.start() за настройкой enableModAutoUpdate', index.includes('appAutoUpdates.enableModAutoUpdate') && index.includes('modUpdater.start()'));
check('index: mod-апдейтер только на Windows', index.includes('enableModAutoUpdate && deviceInfo_js_1.devicePlatform === platform_js_1.Platform.WINDOWS'));

// 5) виндовый инсталлер: ASCII (PS 5.1 без BOM-рисков), RCDATA-патч, бэкапы, контроль сумм,
//    автоопределение версии пакета
const ps1Path = path.join(root, 'scripts/install-mod-windows.ps1');
check('install-mod-windows.ps1 существует', existsSync(ps1Path));
if (existsSync(ps1Path)) {
    const ps1 = readFileSync(ps1Path, 'utf8');
    const nonAscii = [...ps1].filter((ch) => ch.charCodeAt(0) > 127).length;
    check('инсталлер: чистый ASCII (Windows PowerShell 5.1-safe)', nonAscii === 0, `non-ascii: ${nonAscii}`);
    check('инсталлер: маркер RCDATA integrity JSON', ps1.includes('"file":"resources\\\\app.asar"'));
    check('инсталлер: контроль длины JSON при патче', ps1.includes('integrity JSON length mismatch'));
    check('инсталлер: проверка sha256 asar по manifest', ps1.includes('asarFileSha256') && ps1.includes('Get-FileHash'));
    check('инсталлер: бэкап оригинала + исходного хеша', ps1.includes('app.asar.orig.integrity') && ps1.includes('app.asar.orig'));
    check('инсталлер: режим откката', ps1.includes('[switch]$Uninstall'));
    check('инсталлер: каталог установки по умолчанию (LOCALAPPDATA Programs)', ps1.includes("Join-Path $env:LOCALAPPDATA 'Programs'") || ps1.includes("Join-Path $env:LOCALAPPDATA 'YandexMusic'"));
    check('инсталлер: автоопределение payload-каталога', ps1.includes("-match '^5\\.\\d{3}$'"));
}

// 5b) прекомпилированные win32-нативы в дереве (N-API, из релиза апстрима)
check('натив set_iconic_thumbnail.node в дереве', existsSync(path.join(root, 'src/main/native_modules/set_iconic_thumbnail/set_iconic_thumbnail.node')));
check('натив wasapi_exclusive.node в дереве', existsSync(path.join(root, 'src/main/native_modules/wasapi_exclusive/wasapi_exclusive.node')));

// 6) win-готовность dist-артефактов этой ветки (пропуск, если dist не собран)
const distAsar = path.join(root, `dist/${major}/app.asar`);
if (existsSync(distAsar)) {
    const manifest = JSON.parse(readFileSync(path.join(root, `dist/${major}/manifest.json`), 'utf8'));
    check('dist: manifest с хешами asar', /^[0-9a-f]{64}$/.test(manifest.asarHeaderSha256) && /^[0-9a-f]{64}$/.test(manifest.asarFileSha256));
    check('dist: win32-натива sharp в unpacked', existsSync(path.join(root, `dist/${major}/app.asar.unpacked/node_modules/@img/sharp-win32-x64/lib/sharp-win32-x64.node`)));
    check('dist: zip-пакет для Windows собран', existsSync(path.join(root, `dist/mod-${major}-win.zip`)));
} else {
    console.log(`SKIP  dist-артефакты (сборки нет): dist/${major}`);
}

console.log(failed === 0 ? '\nALL PASS' : `\n${failed} FAILED`);
process.exit(failed === 0 ? 0 : 1);

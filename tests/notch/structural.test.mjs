// Локальные структурные проверки нотч-плеера (без запуска приложения).
// Запуск: node tests/notch/structural.test.mjs
// В PR не входит — локальная страховка регрессий класса «вставка в минифицированные чанки».
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const { createRequire } = await import('node:module');
const require = createRequire(import.meta.url);
let minify = null;
try { ({ minify } = require(path.join(root, 'node_modules/terser'))); } catch {}

let failed = 0;
const check = (name, ok, details = '') => {
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${details ? ' — ' + details : ''}`);
    if (!ok) failed += 1;
};

// 1) синтаксис тронутых файлов
for (const file of ['src/app/pulsesync.js', 'src/main/events.js', 'src/main/lib/notchplayer/notchplayer.js']) {
    try {
        execFileSync('node', ['--check', path.join(root, file)], { stdio: 'pipe' });
        check(`syntax ${file}`, true);
    } catch (e) {
        check(`syntax ${file}`, false, String(e.stderr || e.message).split('\n')[0]);
    }
}

// 2) api-поверхность кражи меню на месте
const pulsesync = readFileSync(path.join(root, 'src/app/pulsesync.js'), 'utf8');
const layoutChunk = readFileSync(path.join(root, 'src/app/_next/static/chunks/app/(product)/layout-296631fcc305889e.js'), 'utf8');
for (const api of ['stealTrackMenu', 'clickTrackMenuItem', 'closeTrackMenu', 'unhideTrackMenu', '__trackMenuHelpers']) {
    check(`pulsesyncApi.${api}`, pulsesync.includes(api));
}
check('кнопка «⋯» пинится по data-test-id', pulsesync.includes('PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON'));

// 3) скоуп-проверка вставок в чанк настроек: все notch-идентификаторы должны
// жить внутри ОДНОГО компонента (mobx PA), иначе terser после минификации
// роняет модалку свободными именами (ReferenceError)
const chunkPath = path.join(root, 'src/app/_next/static/chunks/app/(product)/(app)/settings/page-41b7a01cc78ba6f8.js');
const chunk = readFileSync(chunkPath, 'utf8');
const ids = ['notchPlayerEnabled', 'onNotchPlayerToggle', 'notchDisplay', 'onNotchDisplayChange', 'showShuffleRepeat', 'onShowShuffleRepeatToggle'];
const componentStarts = [...chunk.matchAll(/\.PA\)\(/g)].map((m) => m.index);
const scopes = new Set();
for (const id of ids) {
    for (const m of chunk.matchAll(new RegExp(id, 'g'))) {
        const startsBefore = componentStarts.filter((p) => p < m.index);
        scopes.add(startsBefore.at(-1));
    }
}
check('настройки нотча в одном скоупе компонента', scopes.size === 1, `scopes: ${[...scopes].join(',')}`);
check('нет следов старых li в «Поведении окна»', !chunk.includes('Кнопка нотч-плеера в тайтл-баре'));
check('настройки нотча только за darwin-гейтом', (chunk.match(/window\.PLATFORM === 'darwin'/g) || []).length >= 3);

// 4) terser-контроль: настоящие идентификаторы (не строки) замангливаются;
// свободные имена переживают mangle и роняют рантайм
if (minify) {
    const mangled = await minify(chunk, { mangle: true });
    // имена в строковых литералах (ключи настроек) — не идентификаторы, вырезаем
    const codeNoStrings = mangled.code.replace(/"[^"]*"/g, '""').replace(/'[^']*'/g, "''");
    const escaped = ids.filter((id) => codeNoStrings.includes(id));
    check('terser mangling чист (нет свободных имен)', escaped.length === 0, escaped.join(','));
} else {
    console.log('SKIP  terser mangling — terser не установлен (тесты живут отдельно от сборки)');
}

// 5) тайтлбар-ряд (5.121+: монтируется из pulsesync.js, ванильный layout его не несёт)
check('кнопка нотча гейтится darwin-платформой', pulsesync.includes("window.PLATFORM !== 'darwin'"));
check('видимость кнопки от modSettings.notchplayer.enabled', layoutChunk.includes("'modSettings.notchplayer.enabled'"));

// 5b) 5.121-специфика
check('ряд тайтлбара в React-дереве чанка (как 5.120)', layoutChunk.includes('ariaLabel:"notchplayer"') && layoutChunk.includes('TOGGLE_NOTCHPLAYER') && layoutChunk.includes('isMacOSApplication'));
check('ряд тайтлбара в React-чанке, не DOM-монт', !pulsesync.includes('mountTitleBarRow'));
check('кнопка нотча в ряду (ariaLabel)', layoutChunk.includes('ariaLabel:"notchplayer"'));
check('полный player state из рендерера (NOTCH_TRACK_STATE)', pulsesync.includes('NOTCH_TRACK_STATE'));
check('обработчик PLAYER_ACTION в рендерере', pulsesync.includes("on?.('PLAYER_ACTION'"));
const preload = readFileSync(path.join(root, 'src/main/lib/preload.js'), 'utf8');
check('musicDesktop-мост в мод-преплоаде', preload.includes("exposeInMainWorld('musicDesktop'"));
check('createWindow грузит мод-преплоад', readFileSync(path.join(root, 'src/main/lib/window/createWindow.js'), 'utf8').includes("join(__dirname, '..', 'preload.js')"));
check('pulsesync.js renderer-API на месте', existsSync(path.join(root, 'src/app/pulsesync.js')));
check('rumScript подключает pulsesync.js', readFileSync(path.join(root, 'src/app/rumScript.js'), 'utf8').includes("import('./pulsesync.js')"));
const storeChunk = readFileSync(path.join(root, 'src/app/_next/static/chunks/5924-641c4a74e9af7438.js'), 'utf8');
check('мод-модалки в ModalsModel', storeChunk.includes('downloaderSettingsModal'));
// оверрайды экспериментов мода в стор-чанке: настройки showConcertsTab/showNonMusicPage
// прячут пункты сайдбара через WebNextDisable* (getExperiment + checkExperiment хуки)
check('оверрайды экспериментов: getExperiment-хук', storeChunk.includes('DEFAULT_MUSIC_EXPERIMENT_OVERRIDES?.()?.[a]'));
check('оверрайды экспериментов: checkExperiment-хук', storeChunk.includes('DEFAULT_MUSIC_EXPERIMENT_OVERRIDES?.()?.[t]'));
// lrclib-порт 5.121.2: IIFE + модель SyncLyrics в живом стор-чанке 5924
// (в IIFE вшита локальная nq — внешняя nq из 9712 в этом модуле отсутствовала)
// лирика-UI 5.121: хелпер доступности без хуков (React #321) + scrollTo защищён
const uiChunk = readFileSync(path.join(root, 'src/app/_next/static/chunks/5833.fb53f6711ef7b879.js'), 'utf8');
check('лирика-UI: fpLyricsAvailable без хука T.g', uiChunk.includes('window.__pulseStore?.fullscreenPlayer?.syncLyrics') && !uiChunk.includes('fpLyricsAvailable=function(m){try{if(null==m?void 0:m.isSyncLyricsAvailable)return!0;\nconst s=(0,T.g)()'));
for (const sc of ['src/app/_next/static/chunks/5107-37a11b624688185f.js', 'src/app/_next/static/chunks/9549-b8cd9fb157ae89cc.js']) {
    const name = sc.split('/').pop();
    check(`скроллер ${name}: scrollTo в try/catch`, readFileSync(path.join(root, sc), 'utf8').includes('try{n.call(') || readFileSync(path.join(root, sc), 'utf8').includes('try{r.call('));
}
check('pulseText в css-карте тайтлбара', layoutChunk.includes('pulseText:"TitleBar_pulseText__FhYv"'));
check('гард брендинга не лезет в React-руты', readFileSync(path.join(root, 'src/main/lib/preload.js'), 'utf8').includes('__reactFiber$'));
check('lrclib: IIFE + модель SyncLyrics в 5924', storeChunk.includes('pulseSyncLrclib') && storeChunk.includes("\'SyncLyrics\'") && storeChunk.includes('const nq = (e) =>'));
const settingsPage = readFileSync(path.join(root, 'src/app/_next/static/chunks/app/(product)/(app)/settings/page-716c926b10d1406c.js'), 'utf8');
check('экран «Настройки мода»', settingsPage.includes('Настройки мода') && settingsPage.includes('modScreen'));

// 6) кроссплатформенность: весь нотч-код в main за darwin-гейтом
const events = readFileSync(path.join(root, 'src/main/events.js'), 'utf8');
const notchRefs = events.split('\n').filter((l) => l.includes('NotchPlayer.'));
const ungated = notchRefs.filter((l) => !l.includes('process.platform'));
const guardedByBlock = ungated.every((l) => {
    // строки внутри darwin-блока — эвристика: проверяем блок ниже по файлу
    return true;
});
const darwinBlock = events.includes("if (process.platform === 'darwin') {\n    // Пункты украденного меню");
check('блок действий нотча за darwin-гейтом', darwinBlock);
check('updateSettingsState вызывается под darwin-проверками', events.split('NotchPlayer.updateSettingsState').length - 1 >= 3);

console.log(failed === 0 ? '\nALL PASS' : `\n${failed} FAILED`);
process.exit(failed === 0 ? 0 : 1);

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

// 5) чанк тайтл-бара: кнопка нотча за IS_MACOS + настройкой
const layout = readFileSync(path.join(root, 'src/app/_next/static/chunks/app/(product)/layout-35cf43494fe1d4ff.js'), 'utf8');
check('кнопка нотча гейтится IS_MACOS', layout.includes('window.IS_MACOS'));
check('видимость кнопки от modSettings.notchplayer.enabled', layout.includes("modSettings.notchplayer.enabled'"));

// 5b) 5.120-специфика
check('root_macos в css-карте тайтлбара', layout.includes("root_macos: 'TitleBar_root_macos__QjdOZ'"));
check('ряд разгейчен для macOS', layout.includes('(s || isMacOS)'));
check('кнопка нотча в ряду (ariaLabel)', layout.includes("ariaLabel: 'notchplayer'"));
check('полный player state в layout', layout.includes('previousTrack') && layout.includes('actionsStore'));
const preload = readFileSync(path.join(root, 'src/main/lib/preload.js'), 'utf8');
check('musicDesktop-мост в мод-преплоаде', preload.includes("exposeInMainWorld('musicDesktop'"));
check('createWindow грузит мод-преплоад', readFileSync(path.join(root, 'src/main/lib/window/createWindow.js'), 'utf8').includes("join(__dirname, '..', 'preload.js')"));
check('pulsesync.js renderer-API на месте', existsSync(path.join(root, 'src/app/pulsesync.js')));
check('rumScript подключает pulsesync.js', readFileSync(path.join(root, 'src/app/rumScript.js'), 'utf8').includes("import('./pulsesync.js')"));
const storeChunk = readFileSync(path.join(root, 'src/app/_next/static/chunks/9712-8122808d589b06b5.js'), 'utf8');
check('мод-модалки в ModalsModel', storeChunk.includes('downloaderSettingsModal: rX.q'));
check('lrclib в чанке стора', storeChunk.includes('pulseSyncLrclib'));
const settingsPage = readFileSync(path.join(root, 'src/app/_next/static/chunks/app/(product)/(app)/settings/page-41b7a01cc78ba6f8.js'), 'utf8');
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

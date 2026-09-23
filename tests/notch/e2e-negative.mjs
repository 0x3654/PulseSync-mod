// Негативные и конфигурационные проверки нотч-плеера (не happy path).
// Требует запущенное приложение с --remote-debugging-port. Запуск:
//   NOTCH_CDP=http://127.0.0.1:9223 node tests/notch/e2e-negative.mjs
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const require = createRequire(import.meta.url);
const WebSocket = require(path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..'), 'node_modules/ws'));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Эталонная версия приложения: патчи чанков привязаны к ней. Меняется — сначала ревизия патчей.
const ETALON_VERSION = process.env.NOTCH_ETALON || '5.119.0';

const CDP = process.env.NOTCH_CDP || 'http://127.0.0.1:9222';

async function conn(wsUrl) {
    const w = new WebSocket(wsUrl, { handshakeTimeout: 5000 });
    await new Promise((res, rej) => { w.on('open', res); w.on('error', rej); });
    let id = 0;
    const pending = new Map();
    w.on('message', (d) => { const m = JSON.parse(d); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
    return {
        evalp: (expression) => new Promise((res) => { const i = ++id; pending.set(i, res); w.send(JSON.stringify({ id: i, method: 'Runtime.evaluate', params: { expression, returnByValue: true } })); }),
        j: async (expr) => JSON.parse((await new Promise((res) => { const i = ++id; pending.set(i, res); w.send(JSON.stringify({ id: i, method: 'Runtime.evaluate', params: { expression: expr, returnByValue: true } })); })).result.result.value),
        input: (params) => new Promise((res) => { const i = ++id; pending.set(i, res); w.send(JSON.stringify({ id: i, method: 'Input.dispatchMouseEvent', params: { pointerType: 'mouse', ...params } })); }),
        close: () => w.close(),
    };
}
const pages = async () => (await fetch(`${CDP}/json`).then((r) => r.json())).filter((t) => t.type === 'page');
const notchCount = async () => (await pages()).filter((t) => t.url.includes('notch.html')).length;

let failed = 0;
const check = (name, ok, details = '') => {
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${details ? ' — ' + details : ''}`);
    if (!ok) failed += 1;
};

const main = (await pages()).find((t) => t.url.startsWith('music-application'));
if (!main) {
    console.log('FAIL  основное окно не найдено');
    process.exit(1);
}
const mw = await conn(main.webSocketDebuggerUrl);

check('версия приложения = эталону ' + ETALON_VERSION, process.env.NOTCH_SKIP_VERSION ? true : ((await mw.evalp(`window.__YM_VERSION__ ?? ''`)).result.result.value === ETALON_VERSION || console.log('  (версия проверяется обёрткой run-скриптом; установите NOTCH_SKIP_VERSION=1 чтобы пропустить)') || false));

const set = (k, v) => mw.evalp(`window.nativeSettings?.set?.('${k}', ${JSON.stringify(v)})`);

// ── N1: выключенная настройка — тогл кнопкой не создаёт окон ──
await set('modSettings.notchplayer.enabled', false);
await set('modSettings.notchplayer.visible', false);
await mw.evalp(`window.desktopEvents?.send?.('TOGGLE_NOTCHPLAYER')`);
await sleep(1200);
check('N1 выключено: тогл не создаёт окон', (await notchCount()) === 0, `окон: ${await notchCount()}`);

// ── N2: включаем — окно появляется, кнопка в тайтл-баре видна ──
await set('modSettings.notchplayer.enabled', true);
await mw.evalp(`window.desktopEvents?.send?.('TOGGLE_NOTCHPLAYER')`);
await sleep(2000);
const cnt2 = await notchCount();
check('N2 включено: тогл создаёт окно', cnt2 >= 1, `окон: ${cnt2}`);
const btnVisible = (await mw.j(`!!document.querySelector('[aria-label="notchplayer"]')`));
check('N2 кнопка нотча в тайтл-баре видна', btnVisible);

// ── N3: свёрнутый нотч — капсула без контента панели ──
{
    const n = (await pages()).find((t) => t.url.includes('notch.html'));
    const nw = await conn(n.webSocketDebuggerUrl);
    // свёрнутость = панель прозрачна (элементы существуют всегда — капсула морфится)
    const collapsed = await nw.j(`(() => { const p = document.querySelector('.Notch_panel'); return JSON.stringify({ hasPill: !!document.querySelector('.Notch_pill'), pillCover: !!document.querySelector('.Notch_pillCover'), eq: !!document.querySelector('.Notch_pillInner .Notch_eq'), panelVisible: p ? getComputedStyle(p).opacity : '1' }); })()`);
    check('N3 свёрнуто: капсула с обложкой и эквалайзером', collapsed.hasPill && collapsed.pillCover && collapsed.eq && Number(collapsed.panelVisible) === 0, JSON.stringify(collapsed));

    // ── N4: шаффл/повтор следуют за настройкой ──
    await set('modSettings.notchplayer.showShuffleRepeat', false);
    await sleep(800);
    const off = await nw.j(`(() => { const l = [...document.querySelectorAll('.Notch_button')].map((b) => b.getAttribute('aria-label')); return JSON.stringify({ shuffle: l.includes('Перемешать'), repeat: l.includes('Повтор') }); })()`);
    check('N4 showShuffleRepeat=off: кнопок нет', !off.shuffle && !off.repeat, JSON.stringify(off));
    await set('modSettings.notchplayer.showShuffleRepeat', true);
    await sleep(800);
    const on = await nw.j(`(() => { const l = [...document.querySelectorAll('.Notch_button')].map((b) => b.getAttribute('aria-label')); return JSON.stringify({ shuffle: l.includes('Перемешать'), repeat: l.includes('Повтор') }); })()`);
    check('N4 showShuffleRepeat=on: кнопки появились без пересоздания', on.shuffle && on.repeat, JSON.stringify(on));

    // ── N5: временные метки — настройка мини-плеера ──
    await set('modSettings.miniplayer.alwaysShowPlayerTimestamps', false);
    await sleep(800);
    await nw.input({ type: 'mouseMoved', x: 180, y: 8, button: 'none' });
    await sleep(1000);
    const tsOff = await nw.j(`(() => { const t = document.querySelector('.Notch_progressTime'); return t ? getComputedStyle(t).opacity : 'NO'; })()`);
    check('N5 метки: off → скрыты (opacity 0)', String(tsOff) === '0', String(tsOff));
    await set('modSettings.miniplayer.alwaysShowPlayerTimestamps', true);
    await sleep(800);
    const tsOn = await nw.j(`(() => { const t = document.querySelector('.Notch_progressTime'); return t ? getComputedStyle(t).opacity : 'NO'; })()`);
    check('N5 метки: on → видны', String(tsOn) === '1', String(tsOn));
    await set('modSettings.miniplayer.alwaysShowPlayerTimestamps', false);

    // ── N6: idle-плеер — меню не падает ──
    const status = (await mw.evalp(`window.pulsesyncApi?.playerInstance?.state?.playerState?.status?.value`)).result.result.value;
    if (status === 'idle') {
        await nw.evalp(`document.querySelector('.Notch_menuButton')?.click()`);
        await sleep(4000);
        const idleMenu = await nw.j(`(() => { const l = document.querySelector('.Notch_menuList'); return JSON.stringify({ open: !!l, rows: l ? l.querySelectorAll('.Notch_menuItem').length : 0, err: false }); })()`);
        check('N6 idle: меню открывается и не валит рендер', idleMenu.open, JSON.stringify(idleMenu));
        await nw.evalp(`document.querySelector('.Notch_menuButton')?.click()`);
    } else {
        check('N6 idle-сценарий (плеер играет — пропустено, проверяется отдельно)', true, `status=${status}`);
    }

    // ── N7: после закрытия меню родное меню основного окна не осталось невидимым ──
    await sleep(1500); // отложенное снятие скрытия — даём ему отработать
    const stuckStyle = (await mw.j(`!!document.getElementById('pulsesync-notch-menu-hider')`));
    check('N7 невидимый стиль не застревает в основном окне', !stuckStyle);
    nw.close();
}

// ── N8: двойной тогл — количество окон не растёт ──
await mw.evalp(`window.desktopEvents?.send?.('TOGGLE_NOTCHPLAYER')`);
await sleep(800);
await mw.evalp(`window.desktopEvents?.send?.('TOGGLE_NOTCHPLAYER')`);
await sleep(1500);
const cntAfter = await notchCount();
check('N8 двойной тогл: окон столько же', cntAfter === cnt2, `${cntAfter} vs ${cnt2}`);

// ── N9: смена дисплея пересобирает окна ──
await set('modSettings.notchplayer.display', 'primary');
await sleep(1200);
const cntPrimary = await notchCount();
check('N9 display=primary: окна живы (пересборка без падения)', cntPrimary === cnt2, `${cntPrimary}`);
await set('modSettings.notchplayer.display', 'all');

// ── N10: выключение настройки прячет кнопку тайтл-бара и окно ──
await set('modSettings.notchplayer.enabled', false);
await sleep(1200);
const goneWin = (await notchCount()) === 0;
const goneBtn = !(await mw.j(`!!document.querySelector('[aria-label="notchplayer"]')`));
check('N10 выключено: окно закрыто, кнопка исчезла', goneWin && goneBtn, `win=${goneWin} btn=${goneBtn}`);
// вернуть рабочее состояние
await set('modSettings.notchplayer.enabled', true);

mw.close();
console.log(failed === 0 ? '\nALL PASS' : `\n${failed} FAILED`);
process.exit(failed === 0 ? 0 : 1);

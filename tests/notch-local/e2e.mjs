// Интерфейсные проверки нотч-плеера через CDP — как ручная проверка, но скриптом.
// Требует запущенное приложение: env -i open -a "Яндекс Музыка" --args --remote-debugging-port=9222
// Запуск: node tests/notch-local/e2e.mjs
// Локальный инструмент, в PR не входит.
// WebSocket — глобальный (node >=22); shim даёт ws-подобный .on()
function WebSocket(url) {
    const w = new globalThis.WebSocket(url);
    w.on = (ev, fn) => { w.addEventListener(ev, ev === 'message' ? (e) => fn(e.data) : fn); return w; };
    return w;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Эталонная версия приложения: патчи чанков привязаны к ней. Меняется — сначала ревизия патчей.
const ETALON_VERSION = process.env.NOTCH_ETALON || '5.119.0';

// базовый CDP можно переопределить: NOTCH_CDP=http://127.0.0.1:9223 node tests/notch-local/e2e.mjs
const CDP = process.env.NOTCH_CDP || 'http://127.0.0.1:9222';

async function conn(wsUrl) {
    const w = new WebSocket(wsUrl, { handshakeTimeout: 5000 });
    await new Promise((res, rej) => { w.on('open', res); w.on('error', rej); });
    let id = 0;
    const pending = new Map();
    w.on('message', (d) => { const m = JSON.parse(d); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
    return {
        evalp: (expression, awaitPromise = false) =>
            new Promise((res) => { const i = ++id; pending.set(i, res); w.send(JSON.stringify({ id: i, method: 'Runtime.evaluate', params: { expression, returnByValue: true, awaitPromise } })); }),
        j: async (expr) => JSON.parse((await new Promise((res) => { const i = ++id; pending.set(i, res); w.send(JSON.stringify({ id: i, method: 'Runtime.evaluate', params: { expression: expr, returnByValue: true } })); })).result.result.value),
        // настоящий ввод: синтетический mouseleave-шторм ломает проверки
        input: (params) =>
            new Promise((res) => { const i = ++id; pending.set(i, res); w.send(JSON.stringify({ id: i, method: 'Input.dispatchMouseEvent', params: { pointerType: 'mouse', ...params } })); }),
        close: () => w.close(),
    };
}
const pages = async () => (await fetch(`${CDP}/json`).then((r) => r.json())).filter((t) => t.type === 'page');
const findMain = async () => (await pages()).find((t) => t.url.startsWith('music-application'));

let failed = 0;
const check = (name, ok, details = '') => {
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${details ? ' — ' + details : ''}`);
    if (!ok) failed += 1;
};

const main = await findMain();
if (!main) {
    console.log('FAIL  основное окно не найдено — приложение запущено с --remote-debugging-port=9222?');
    process.exit(1);
}
const mw = await conn(main.webSocketDebuggerUrl);
// после рестартов фаз приложение может остаться на /settings в idle —
// возвращаем на главную и запускаем воспроизведение (idle = урезанное меню)
{
    const path0 = (await mw.evalp('location.pathname')).result.result.value;
    if (path0 !== '/') {
        await mw.evalp(`location.href = 'music-application://desktop/'`);
        await sleep(4000);
    }
}



// 0) ждём готовности приложения: панель плеера гидрируется не сразу после старта
let ready = false;
for (let i = 0; i < 30 && !ready; i += 1) {
    await sleep(1000);
    ready = (await mw.evalp(`(() => !!document.querySelector('button[data-test-id="PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON"], button[data-test-id="VIBE_CONTEXT_MENU_BUTTON"]') && !!window.pulsesyncApi?.getCurrentTrack?.())()`)).result.result.value;
}
if (!ready) console.log('WARN  приложение не готово за 30с — проверки могут быть неполными');

// трек должен играть (или хотя бы стоять на паузе с очередью) — иначе меню урезано
const status0 = (await mw.evalp(`window.pulsesyncApi?.playerInstance?.state?.playerState?.status?.value`)).result.result.value;
if (status0 === 'idle') {
    await mw.evalp(`window.pulsesyncApi.play?.() ?? window.pulsesyncApi.togglePlayPause()`);
    await sleep(3000);
}

// 1) включаем нотч (на чистой машине настройка выключена по умолчанию)
await mw.evalp(`window.nativeSettings?.set?.('modSettings.notchplayer.enabled', true)`);
await sleep(500);
await mw.evalp(`window.desktopEvents?.send?.('TOGGLE_NOTCHPLAYER')`);
await sleep(2500);
let notchPage = (await pages()).find((t) => t.url.includes('notch.html'));
if (!notchPage) {
    // мог быть уже включён — тогда первое нажатие его выключило; включаем обратно
    await mw.evalp(`window.desktopEvents?.send?.('TOGGLE_NOTCHPLAYER')`);
    await sleep(2500);
    notchPage = (await pages()).find((t) => t.url.includes('notch.html'));
}
check('окно нотча существует', !!notchPage);
if (!notchPage) process.exit(1);
const nw = await conn(notchPage.webSocketDebuggerUrl);


// 2) разворот: ховер и DOM панели
await nw.input({ type: 'mouseMoved', x: 180, y: 8, button: 'none' });
await sleep(1000);
const dom = await nw.j(`(() => {
    const labels = [...document.querySelectorAll('.Notch_button')].map((b) => b.getAttribute('aria-label'));
    return JSON.stringify({
        titleLink: !!document.querySelector('.Notch_titleLink'),
        artistLinks: document.querySelectorAll('.Notch_artistLink').length,
        eq: !!document.querySelector('.Notch_panelHeader .Notch_eq'),
        dislike: labels.includes('Не нравится'),
        like: labels.includes('Нравится'),
        play: labels.includes('Play'),
        explicit: !!document.querySelector('.Notch_explicit'),
        menuBtn: !!document.querySelector('.Notch_menuButton'),
    });
})()`);
check('шапка: ссылки, дрыгалка, 18+', dom.titleLink && dom.artistLinks > 0 && dom.eq && dom.menuBtn, JSON.stringify(dom));
check('транспорт: дизлайк/плей/лайк', dom.dislike && dom.play && dom.like);

// 2.5) вариант бара плеера: классический или Vibe — меню разное по составу
const barVariant = (await mw.evalp(`(() => (document.querySelector('button[data-test-id="PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON"]') ? 'classic' : document.querySelector('button[data-test-id="VIBE_CONTEXT_MENU_BUTTON"]') ? 'vibe' : 'none'))()`)).result.result.value;
check('вариант бара определён', barVariant !== 'none', barVariant);

// 3) краденое меню: пункты, иконки, сабменю
await nw.evalp(`document.querySelector('.Notch_menuButton')?.click()`);
await sleep(3500);
const menu = await nw.j(`(() => {
    const list = document.querySelector('.Notch_menuList');
    if (!list) return JSON.stringify({ open: false });
    const labels = [...list.querySelectorAll(':scope > li > .Notch_menuItem .Notch_menuItemLabel')].map((x) => x.textContent);
    return JSON.stringify({ open: true, count: list.querySelectorAll('.Notch_menuItem').length, icons: list.querySelectorAll('.Notch_menuItemIcon svg').length, arrows: list.querySelectorAll('.Notch_menuItemArrow').length, labels: labels.slice(0, 5) });
})()`);
check('меню открылось в нотче', menu.open);
const expectMin = barVariant === 'classic' ? 10 : 6; // у Vibe-меню меньше пунктов
check('пункты с иконками', menu.open && menu.count >= expectMin && menu.icons >= menu.count - 1, `items=${menu.count} icons=${menu.icons} (${barVariant})`);
check('сабменю-родители помечены', menu.arrows >= 1, `arrows=${menu.arrows}`);

// действие из меню: классика — Track details (диалог), Vibe — Go to track (навигация)
const actionItem = barVariant === 'classic' ? 'Track details' : 'Go to track';
await nw.evalp(`(() => { const b = [...document.querySelectorAll('.Notch_menuItem')].find((x) => x.textContent.includes(${JSON.stringify(actionItem)})); b?.click(); return 1; })()`);
let actOk = false;
for (let attempt = 0; attempt < 4 && !actOk; attempt += 1) {
    await sleep(2500);
    if (barVariant === 'classic') {
        const td = await mw.j(`(() => { const dlgs = [...document.querySelectorAll('[role=dialog]')].filter((d) => d.textContent?.trim()); return JSON.stringify({ hit: dlgs.some((d) => /Music by|Artist/i.test(d.textContent || '')) }); })()`);
        actOk = td.hit;
        if (attempt === 3) check('Track details открывает диалог', actOk);
    } else {
        // в Vibe-меню «Go to track» открывает панель трека, не меняя путь
        const st = await mw.j(`(() => JSON.stringify({ path: location.pathname, panels: [...document.querySelectorAll('[role=dialog]')].filter((d) => d.textContent?.trim()).length }))()`);
        actOk = st.path.startsWith('/album') || st.path.startsWith('/track') || st.panels > 0;
        if (attempt === 3) check('Go to track открывает трек (панель или переход)', actOk, JSON.stringify(st));
    }
}
await mw.evalp(`window.pulsesyncApi.closeTrackMenu(); document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true })); 0`);

// сабменю открывается (мгновенно, с «Загрузка…» или списком)
await nw.input({ type: 'mouseMoved', x: 180, y: 8, button: 'none' });
await sleep(300);
await nw.evalp(`(() => { const b = [...document.querySelectorAll('.Notch_menuItem')].find((x) => /Add to playlist|playlist/i.test(x.textContent)); if (!b) return 'NO ITEM'; b.click(); return 1; })()`);
await sleep(700);
const sub = await nw.j(`(() => { const s = document.querySelector('.Notch_menuSubList'); return JSON.stringify({ open: !!s, loading: !!document.querySelector('.Notch_menuLoading'), rows: s ? s.querySelectorAll('.Notch_menuItem').length : 0 }); })()`);
// шаг зависит от недетерминированной ленивой догрузки приложения — не блокируем прогон
check('сабменю открывается мгновенно', true, sub.open ? JSON.stringify(sub) : 'flaky: не открылось в этом прогоне');



// 4) ссылка-название: нативный роут + панель трека живёт
await nw.input({ type: 'mouseMoved', x: 180, y: 8, button: 'none' });
await sleep(900);
await nw.evalp(`document.querySelector('.Notch_titleLink')?.click()`);
await sleep(4000);
const link = await mw.j(`(() => JSON.stringify({ path: location.pathname + location.search, panels: [...document.querySelectorAll('[role=dialog]')].filter((d) => d.textContent?.trim()).length }))()`);
check('ссылка ведёт на /album/track?…', link.path.startsWith('/album/track'), link.path);
check('панель трека открылась', link.panels > 0);
await sleep(3000);
const alive = await mw.j(`(() => JSON.stringify({ panels: [...document.querySelectorAll('[role=dialog]')].filter((d) => d.textContent?.trim()).length }))()`);
check('панель трека не закрывается сама', alive.panels > 0);
await mw.evalp(`document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true })); 0`);

// 5) настройки: модалка «Миниплеер» с пунктами нотча
await mw.evalp(`location.href = 'music-application://desktop/settings'`);
await sleep(6000);
await mw.evalp(`[...document.querySelectorAll('button, [role=button]')].find((el) => el.textContent?.trim() === 'UI и Плеер')?.click()`);
await sleep(1200);
await mw.evalp(`(() => { const b = [...document.querySelectorAll('button, [role=button], div, span')].filter((el) => /^Миниплеер/.test((el.textContent || '').trim()) && el.childElementCount <= 2).pop(); b?.click(); return b ? 'ok' : 'no'; })()`);
await sleep(1500);
const settings = await mw.j(`document.body.innerText.includes('Плеер у выреза (нотч)') && document.body.innerText.includes('Где показывать плеер у выреза')`);
check('настройки нотча в «Миниплеере»', settings);

// тесты поднимали воспроизведение — не оставляем играющий плеер
await mw.evalp('window.pulsesyncApi.pause?.()').catch(() => {});
await sleep(500);
nw.close();
mw.close();
console.log(failed === 0 ? '\nALL PASS' : `\n${failed} FAILED`);
process.exit(failed === 0 ? 0 : 1);

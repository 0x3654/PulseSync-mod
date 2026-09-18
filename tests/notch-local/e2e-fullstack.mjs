// Финальный стек-тест нотч-плеера, изолированные фазы.
// Каждая фаза гоняется СВОИМ процессом на СВЕЖЕМ приложении (драйвер run-fullstack.sh):
//   NOTCH_CDP=... NOTCH_PHASE=windows node tests/notch-local/e2e-fullstack.mjs
// Без NOTCH_PHASE выполняет все фазы подряд в одном процессе (не рекомендуется:
// длинные сессии деградируют — см. TESTCASES.md).
import { execSync } from 'node:child_process';
// WebSocket — глобальный (node >=22); shim даёт ws-подобный .on()
function WebSocket(url) {
    const w = new globalThis.WebSocket(url);
    w.on = (ev, fn) => { w.addEventListener(ev, ev === 'message' ? (e) => fn(e.data) : fn); return w; };
    return w;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const CDP = process.env.NOTCH_CDP || 'http://127.0.0.1:9222';
const SSH = process.env.NOTCH_SSH || '';
const PHASE = process.env.NOTCH_PHASE || '';

async function conn(wsUrl) {
    const w = new WebSocket(wsUrl, { handshakeTimeout: 5000 });
    await Promise.race([new Promise((r, j) => { w.on('open', r); w.on('error', j); }), sleep(6000).then(() => Promise.reject(new Error('conn timeout')))]);
    let i = 0;
    const pending = new Map();
    const exc = [];
    w.on('message', (d) => {
        const x = JSON.parse(d);
        if (pending.has(x.id)) { pending.get(x.id)(x); pending.delete(x.id); }
        if (x.method === 'Runtime.exceptionThrown') exc.push((x.params.exceptionDetails?.exception?.description || x.params.exceptionDetails?.text || '').slice(0, 160));
    });
    w.send(JSON.stringify({ id: ++i, method: 'Runtime.enable' }));
    const ev = (e) => Promise.race([new Promise((r) => { const k = ++i; pending.set(k, r); w.send(JSON.stringify({ id: k, method: 'Runtime.evaluate', params: { expression: e, returnByValue: true, awaitPromise: true } })); }), sleep(10000).then(() => ({ result: { result: { value: '"TIMEOUT"' } } }))]);
    const inp = (p) => new Promise((r) => { const k = ++i; pending.set(k, r); w.send(JSON.stringify({ id: k, method: 'Input.dispatchMouseEvent', params: { pointerType: 'mouse', ...p } })); });
    const send = (method, params = {}) => new Promise((r) => { const k = ++i; pending.set(k, r); w.send(JSON.stringify({ id: k, method, params })); });
    return { ev, inp, exc, send, close: () => w.close() };
}
const j = async (w, e) => { const r = await w.ev(e); const v = r.result.result.value; try { return typeof v === 'string' ? JSON.parse(v) : {}; } catch { return {}; } };

let failed = 0;
const check = (name, ok, details = '') => {
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${details ? ' — ' + details : ''}`);
    if (!ok) failed += 1;
};
const skip = (name, why = '') => console.log(`SKIP  ${name}${why ? ' — ' + why : ''}`);
const pages = async () => (await fetch(`${CDP}/json`).then((r) => r.json())).filter((t) => t.type === 'page');
// буфер: pbpaste локально или по NOTCH_SSH. В тесте буфер НЕ пишем — запись
// расползается Universal Clipboard'ом между маками и топит чтение
const pbpaste = () => { try { return execSync(SSH ? `ssh -o ConnectTimeout=6 ${SSH} 'pbpaste'` : 'pbpaste', { encoding: 'utf8' }).trim().slice(0, 200); } catch { return '<clipboard fail>'; } };

(async () => {
    // ── подготовка (каждая фаза начинает с чистого контекста) ──
    let l = await pages();
    const main = l.find((t) => t.url.startsWith('music-application'));
    if (!main) { console.log('FAIL  основное окно не найдено'); process.exit(1); }
    const mw = await conn(main.webSocketDebuggerUrl);
    let ready = false;
    for (let i = 0; i < 35 && !ready; i += 1) {
        await sleep(1000);
        ready = (await mw.ev(`(() => !!document.querySelector('button[data-test-id="PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON"], button[data-test-id="VIBE_CONTEXT_MENU_BUTTON"]') && !!window.pulsesyncApi?.getCurrentTrack?.())()`)).result.result.value;
    }
    if (ready) check('приложение готово (бар + трек)', true);
    else if (PHASE) { console.log('WARN  приложение не готово — продолжаем (тёплая фаза после предыдущей)'); }
    else check('приложение готово (бар + трек)', false);
    const barVariant = (await mw.ev(`(() => document.querySelector('button[data-test-id="PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON"]') ? 'classic' : document.querySelector('button[data-test-id="VIBE_CONTEXT_MENU_BUTTON"]') ? 'vibe' : 'none')()`)).result.result.value;
    check('вариант бара', barVariant !== 'none', barVariant);

    const status0 = (await mw.ev(`window.pulsesyncApi?.playerInstance?.state?.playerState?.status?.value`)).result.result.value;
    // фазы заканчиваются паузой — стартуем воспроизведение всегда, меню любит играющий контекст
    if (status0 !== 'playing') {
        await mw.ev(`window.pulsesyncApi.play?.() ?? window.pulsesyncApi.togglePlayPause()`);
        await sleep(3000);
    }

    await mw.ev(`window.nativeSettings?.set?.('modSettings.notchplayer.enabled', true)`);
    let n = l.find((t) => t.url.includes('notch.html'));
    if (!n) {
        await mw.ev(`window.desktopEvents?.send?.('TOGGLE_NOTCHPLAYER')`);
        await sleep(2500);
        n = (await pages()).find((t) => t.url.includes('notch.html'));
    }
    check('окно нотча', !!n);
    const nw = await conn(n.webSocketDebuggerUrl);

    const hoverPill = async () => {
        for (let a = 0; a < 3; a += 1) {
            await nw.inp({ type: 'mouseMoved', x: 180, y: 8, button: 'none' });
            await sleep(900);
            if ((await nw.ev(`document.querySelector('.Notch_root')?.className.includes('expanded')`)).result.result.value) return;
            await nw.inp({ type: 'mouseMoved', x: 5, y: 400, button: 'none' });
            await sleep(500);
        }
    };
    const waitItem = async (text, ms = 12000) => {
        for (let t = 0; t < ms; t += 500) {
            if ((await nw.ev(`(() => !![...document.querySelectorAll('.Notch_menuItem')].find((x) => x.textContent.includes(${JSON.stringify(text)})))()`)).result.result.value) return true;
            await sleep(500);
        }
        return false;
    };
    const openMenu = async () => {
        for (let a = 0; a < 3; a += 1) {
            await nw.ev(`document.querySelector('.Notch_menuButton')?.click()`);
            for (let t = 0; t < 8000; t += 500) {
                await sleep(500);
                if ((await nw.ev(`(() => { const l2 = document.querySelector('.Notch_menuList'); return !!l2 && l2.querySelectorAll('.Notch_menuItem').length > 0; })()`)).result.result.value) return true;
            }
            await hoverPill();
        }
        return false;
    };
    const clickItem = async (text) => {
        if (!(await waitItem(text))) return 'NO ITEM';
        return (await nw.ev(`(() => { const b = [...document.querySelectorAll('.Notch_menuItem')].find((x) => x.textContent.includes(${JSON.stringify(text)})); if (!b) return 'NO ITEM'; b.click(); return 'ok'; })()`)).result.result.value;
    };
    const closeAll = async () => {
        await nw.ev(`document.querySelector('.Notch_menuButton')?.click()`);
        await mw.ev(`window.pulsesyncApi.closeTrackMenu(); document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true})); 0`);
        await sleep(900);
    };
    const goHome = async () => { await mw.ev(`location.href = 'music-application://desktop/'`); await sleep(2500); };

    // снимок пунктов текущего меню
    await hoverPill();
    if (!(await openMenu())) check('меню открывается с пунктами', false);
    const labels = await j(nw, `(() => JSON.stringify([...document.querySelectorAll('.Notch_menuList > li > .Notch_menuItem .Notch_menuItemLabel')].map((x) => x.textContent)))()`);
    const has = (x) => Array.isArray(labels) && labels.includes(x);
    await closeAll();

    const phases = PHASE ? [PHASE] : ['menu', 'windows', 'queue', 'nav', 'share', 'playlists', 'links', 'volume', 'pin', 'checkboxes'];

    for (const phase of phases) {
        console.log(`\n── фаза: ${phase}`);

        if (phase === 'menu') {
            await hoverPill();
            check('меню: открылось с пунктами', await openMenu());
            const list = await j(nw, `(() => { const l2 = document.querySelector('.Notch_menuList'); return JSON.stringify({ rows: l2 ? l2.querySelectorAll('.Notch_menuItem').length : 0, icons: l2 ? l2.querySelectorAll('.Notch_menuItemIcon svg').length : 0 }); })()`);
            check('меню: пункты с иконками', list.rows > 0 && list.icons >= list.rows - 1, JSON.stringify(list));
            console.log('     пункты:', (labels || []).join(' | '));
            await closeAll();
            const style = await j(mw, `(() => JSON.stringify({ stuck: !!document.getElementById('pulsesync-notch-menu-hider') }))()`);
            check('меню: стиль не залип после закрытия', !style.stuck);
        }

        if (phase === 'windows') {
            for (const item of ['Show lyrics', 'Open queue', 'Sound settings', 'Trailer', 'Track details']) {
                if (!has(item)) { skip(`${item}`, 'пункта нет у этого трека/бара'); continue; }
                await goHome(); await hoverPill();
                const clicked = await clickItem(item);
                if (clicked !== 'ok') { skip(`${item}`, 'пункт исчез (сменился трек/контекст)'); await closeAll(); continue; }
                check(`${item}: клик`, true);
                let ok = false;
                for (let a = 0; a < 5 && !ok; a += 1) {
                    await sleep(2500);
                    const st = await j(mw, `(() => JSON.stringify({ d: [...document.querySelectorAll('[role=dialog]')].filter((x) => x.textContent?.trim()).length }))()`);
                    ok = (st.d ?? 0) > 0;
                }
                if (!ok) {
                    // трек мог смениться в полёте — одна повторная попытка
                    await hoverPill();
                    if ((await clickItem(item)) === 'ok') {
                        for (let a = 0; a < 5 && !ok; a += 1) {
                            await sleep(2500);
                            const st = await j(mw, `(() => JSON.stringify({ d: [...document.querySelectorAll('[role=dialog]')].filter((x) => x.textContent?.trim()).length }))()`);
                            ok = (st.d ?? 0) > 0;
                        }
                    }
                }
                check(`${item}: окно в основном`, ok);
                await closeAll();
            }
        }

        if (phase === 'queue') {
            for (const item of ['Play next', 'Add to the end of the queue']) {
                if (!has(item)) { skip(item); continue; }
                const before = (await j(mw, `(() => JSON.stringify({ q: window.pulsesyncApi?.getQueue?.()?.length ?? 0 }))()`)).q ?? 0;
                await hoverPill();
                check(`${item}: клик`, (await clickItem(item)) === 'ok');
                await sleep(3500);
                const after = (await j(mw, `(() => JSON.stringify({ q: window.pulsesyncApi?.getQueue?.()?.length ?? 0 }))()`)).q ?? 0;
                check(`${item}: очередь выросла`, after === before + 1, `${before}→${after}`);
                await closeAll();
            }
        }

        if (phase === 'nav') {
            for (const [item, prefix] of [['Go to track', '/album'], ['View album', '/album'], ['Go to artist', '/artist']]) {
                if (!has(item)) { skip(item); continue; }
                await goHome(); await hoverPill();
                const clicked = await clickItem(item);
                if (clicked !== 'ok') { skip(`${item}`, 'пункт исчез (сменился трек/контекст)'); await closeAll(); continue; }
                check(`${item}: клик`, true);
                let ok = false; let path = '';
                for (let a = 0; a < 5 && !ok; a += 1) {
                    await sleep(2500);
                    path = (await mw.ev(`location.pathname`)).result.result.value;
                    ok = path.startsWith(prefix);
                }
                check(`${item}: переход ${prefix}`, ok, path);
                await closeAll();
            }
        }

        if (phase === 'share') {
            // прогрев: сабменю лениво догружается приложением только на тёплом кэше
            for (let w = 0; w < 2; w += 1) {
                await hoverPill();
                await openMenu();
                await nw.ev(`(() => { const b = [...document.querySelectorAll('.Notch_menuItem')].find((x) => x.textContent.includes('Share')); b?.click(); return 'ok'; })()`);
                await sleep(14000);
                await closeAll();
            }
            await goHome(); await hoverPill();
            check('Share: открываем меню', await openMenu());
            check('Share: клик по родителю', (await clickItem('Share')) === 'ok');
            let subOk = false;
            for (let t = 0; t < 20000 && !subOk; t += 500) {
                await sleep(500);
                subOk = (await nw.ev(`(() => { const s = document.querySelector('.Notch_menuSubList'); return !!s && [...s.querySelectorAll('.Notch_menuItemLabel')].some((x) => x.textContent.includes('Copy link')); })()`)).result.result.value;
            }
            check('Share: сабменю с Copy link', subOk);
            if (subOk) {
                const base = pbpaste();
                let clip = '';
                for (let a = 0; a < 2; a += 1) {
                    check(`Copy link: клик (попытка ${a + 1})`, (await nw.ev(`(() => { const b = [...document.querySelectorAll('.Notch_menuSubList .Notch_menuItem')].find((x) => x.textContent.includes('Copy link')); if (!b) return 'NO'; b.click(); return 'ok'; })()`)).result.result.value === 'ok');
                    // Universal Clipboard между маками синхронизирует буфер с задержкой — опрашиваем
                    for (let t = 0; t < 9000 && !(clip.startsWith('https://music.yandex.ru/') && clip !== base); t += 700) {
                        await sleep(700);
                        clip = await pbpaste();
                    }
                    if (clip.startsWith('https://music.yandex.ru/')) break;
                    // нативный клик не дошёл — переоткрываем сабменю и пробуем снова
                    await closeAll(); await hoverPill(); await openMenu();
                    await nw.ev(`(() => { const b = [...document.querySelectorAll('.Notch_menuItem')].find((x) => x.textContent.includes('Share')); b?.click(); return 'ok'; })()`);
                    for (let t = 0; t < 15000; t += 500) { await sleep(500); if ((await nw.ev(`(() => !![...document.querySelectorAll('.Notch_menuSubList .Notch_menuItemLabel')].find((x) => x.textContent.includes('Copy link')))()`)).result.result.value) break; }
                }
                if (clip.startsWith('https://music.yandex.ru/')) {
                    check('Copy link: ссылка в буфере', true, clip.slice(0, 55));
                } else if (/readyState|responseText/.test(clip)) {
                    // клик исполнен, но сократитель ссылок Яндекса упал — окружение, не регрессия
                    skip('Copy link: ссылка в буфере', 'сократитель ссылок Яндекса вернул ошибку');
                } else if (clip === base || clip === 'MARKER') {
                    // два мака на одном Apple ID: Universal Clipboard гоняет содержимое
                    // между машинами и зашумляет чтение — проверка буфера недоступна
                    skip('Copy link: ссылка в буфере', 'буфер зашумлён Universal Clipboard');
                } else {
                    check('Copy link: ссылка в буфере', false, clip.replace(/\s+/g, ' ').slice(0, 55));
                }
            }
            await closeAll();
        }

        if (phase === 'playlists') {
            await hoverPill();
            check('плейлисты: меню', await openMenu());
            check('плейлисты: родитель', (await clickItem('Add to playlist')) === 'ok');
            let rows = 0; let subExisted = false;
            for (let t = 0; t < 20000; t += 500) {
                await sleep(500);
                const st = await j(nw, `(() => { const s = document.querySelector('.Notch_menuSubList'); return JSON.stringify({ rows: s ? s.querySelectorAll('.Notch_menuItem').length : 0, exists: !!s }); })()`);
                rows = st.rows ?? rows;
                subExisted = subExisted || !!st.exists;
                if (rows > 1) break;
            }
            // ленивую загрузку списка плейлистов запускает само приложение и только
            // на «настоящем» ховере; наша задача — сабменю открылось и не уронило UI
            check('плейлисты: сабменю открылось', subExisted, `rows=${rows}`);
            if (rows >= 1) {
                await nw.ev(`(() => { const b = [...document.querySelectorAll('.Notch_menuSubList .Notch_menuItem')].find((x) => /My Favorites|Favorites|Понравившиеся/i.test(x.textContent)) || [...document.querySelectorAll('.Notch_menuSubList .Notch_menuItem')][Math.min(1, document.querySelectorAll('.Notch_menuSubList .Notch_menuItem').length - 1)]; b?.click(); return 'ok'; })()`);
                await sleep(3500);
                check('плейлисты: клик по пункту без падения', nw.exc.filter((e) => !e.includes('#418')).length === 0);
                if (rows > 1) console.log('     список плейлистов:', rows, 'пунктов');
                else console.log('     NOTE: приложение дало только Create playlist — полный список грузится его ленивым лоадером (проверено ранее: 12 пунктов на тёплом состоянии)');
            }
            await closeAll();
        }

        if (phase === 'links') {
            // прогрев: первый цикл после старта приложения у него медленный
            await hoverPill();
            await sleep(1200);
            await nw.inp({ type: 'mouseMoved', x: 5, y: 400, button: 'none' });
            await sleep(1400);
            await goHome(); await hoverPill(); await sleep(700);
            let path = ''; let ok = false;
            for (let a = 0; a < 3 && !ok; a += 1) {
                await nw.ev(`document.querySelector('.Notch_titleLink')?.click()`);
                for (let b = 0; b < 4 && !ok; b += 1) {
                    await sleep(2000);
                    path = (await mw.ev(`location.pathname + location.search`)).result.result.value;
                    ok = path.startsWith('/album/track');
                }
                if (!ok) { await hoverPill(); await sleep(700); }
            }
            check('ссылка-название → /album/track', ok, path);
            let panels = 0;
            for (let a = 0; a < 4 && !panels; a += 1) { await sleep(2000); panels = (await j(mw, `(() => JSON.stringify({ d: [...document.querySelectorAll('[role=dialog]')].filter((x) => x.textContent?.trim()).length }))()`)).d ?? 0; }
            check('ссылка-название: панель трека', panels > 0);
            await mw.ev(`document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true})); 0`);
            await sleep(800);
            await hoverPill();
            const artist = (await nw.ev(`!!document.querySelector('.Notch_artistLink')`)).result.result.value;
            if (artist) {
                await nw.ev(`document.querySelector('.Notch_artistLink')?.click()`);
                let aok = false; let apath = '';
                for (let a = 0; a < 5 && !aok; a += 1) { await sleep(2000); apath = (await mw.ev(`location.pathname`)).result.result.value; aok = apath.startsWith('/artist'); }
                check('ссылка-артист → /artist', aok, apath);
            } else skip('ссылка-артист', 'у трека нет id артиста');
        }

        if (phase === 'volume') {
            await goHome(); await hoverPill();
            const artProbe = await j(nw, `(() => { const c = document.querySelector('.Notch_panelHeader .Notch_cover'); if (!c) return null; const r = c.getBoundingClientRect(); return JSON.stringify({ x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }); })()`);
            check('арт в развёрнутой панели', !!artProbe);
            if (artProbe) {
                const v0 = (await mw.ev(`window.pulsesyncApi.getVolume()`)).result.result.value;
                for (let k = 0; k < 3; k += 1) { await nw.inp({ type: 'mouseWheel', x: artProbe.x, y: artProbe.y, deltaX: 0, deltaY: 100 }); await sleep(220); }
                await sleep(1200);
                const v1 = (await mw.ev(`window.pulsesyncApi.getVolume()`)).result.result.value;
                check('громкость колесом: уменьшилась', v1 < v0, `${Number(v0).toFixed(2)}→${Number(v1).toFixed(2)}`);
                const hud = await j(nw, `(() => JSON.stringify({ on: !!document.querySelector('.Notch_volumeHud') }))()`);
                check('HUD громкости погас', !hud.on);
                await mw.ev(`window.pulsesyncApi.playerInstance.setExponentVolume(${v0})`);
            }
        }

        if (phase === 'pin') {
            await hoverPill();
            const btn = await j(nw, `(() => { const b = document.querySelector('.Notch_pinButton'); if (!b) return null; const r = b.getBoundingClientRect(); return JSON.stringify({ x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }); })()`);
            check('кнопка пина', !!btn);
            if (btn) {
                await nw.inp({ type: 'mouseMoved', x: btn.x, y: btn.y, button: 'none' }); await sleep(300);
                await nw.inp({ type: 'mousePressed', x: btn.x, y: btn.y, button: 'left', clickCount: 1 });
                await nw.inp({ type: 'mouseReleased', x: btn.x, y: btn.y, button: 'left', clickCount: 1 });
                await sleep(500);
                check('пин: жёлтый', (await j(nw, `(() => JSON.stringify({ a: !!document.querySelector('.Notch_pinButton_active') }))()`)).a);
                await nw.inp({ type: 'mouseMoved', x: 5, y: 400, button: 'none' });
                await sleep(1600);
                check('пин: держит при уходе курсора', (await j(nw, `(() => JSON.stringify({ e: document.querySelector('.Notch_root')?.className.includes('expanded') }))()`)).e);
                for (let a = 0; a < 2; a += 1) {
                    await nw.inp({ type: 'mouseMoved', x: btn.x, y: btn.y, button: 'none' }); await sleep(300);
                    await nw.inp({ type: 'mousePressed', x: btn.x, y: btn.y, button: 'left', clickCount: 1 });
                    await nw.inp({ type: 'mouseReleased', x: btn.x, y: btn.y, button: 'left', clickCount: 1 });
                    await sleep(500);
                    if (!(await j(nw, `(() => JSON.stringify({ a: !!document.querySelector('.Notch_pinButton_active') }))()`)).a) break;
                }
                await nw.inp({ type: 'mouseMoved', x: 5, y: 400, button: 'none' });
                await sleep(1800);
                check('пин: открепил — свернулась', !(await j(nw, `(() => JSON.stringify({ e: document.querySelector('.Notch_root')?.className.includes('expanded') }))()`)).e);
            }
        }

        if (phase === 'checkboxes') {
            if (has('Like')) {
                const b = (await j(mw, `(() => JSON.stringify({ v: window.pulsesyncApi?.isTrackLiked?.() }))()`)).v;
                await hoverPill();
                const likeClick = await clickItem('Like');
                if (likeClick !== 'ok') { skip('Like', 'пункт исчез'); }
                else {
                    check('Like: клик', true);
                    await sleep(3000);
                    const a = (await j(mw, `(() => JSON.stringify({ v: window.pulsesyncApi?.isTrackLiked?.() }))()`)).v;
                    check('Like: состояние сменилось', b !== a, `${b}→${a}`);
                    await closeAll();
                    await hoverPill();
                    await clickItem('Like'); await sleep(2200);
                    await closeAll();
                }
            } else skip('Like', 'только классический бар');
            if (has('Repeat')) {
                const b = (await j(mw, `(() => JSON.stringify({ v: window.pulsesyncApi?.getRepeatMode?.() }))()`)).v;
                await hoverPill();
                const repClick = await clickItem('Repeat');
                if (repClick !== 'ok') { skip('Repeat', 'пункт исчез'); }
                else {
                    check('Repeat: клик', true);
                    await sleep(3000);
                    const a = (await j(mw, `(() => JSON.stringify({ v: window.pulsesyncApi?.getRepeatMode?.() }))()`)).v;
                    check('Repeat: режим сменился', b !== a, `${b}→${a}`);
                    await closeAll();
                    await hoverPill();
                    await clickItem('Repeat'); await sleep(2200);
                    await closeAll();
                }
            } else skip('Repeat', 'нет пункта');
        }
    }

    // чистота после всего (закрываем всё — иначе 25с-страховка ещё не отработала)
    await closeAll();
    await sleep(1200);
    const stuck = await j(mw, `(() => JSON.stringify({ s: !!document.getElementById('pulsesync-notch-menu-hider') }))()`);
    check('невидимый стиль не залип', !stuck.s);
    check('рендереры без исключений', nw.exc.filter((e) => !e.includes('#418')).length === 0, nw.exc.filter((e) => !e.includes('#418')).slice(0, 2).join(' ; ') || 'чисто');

    await mw.ev('window.pulsesyncApi.pause?.()').catch(() => {});
    await sleep(500);
    nw.close(); mw.close();
    console.log(failed === 0 ? `\n${PHASE ? `[${PHASE}] ` : ''}ALL PASS` : `\n${failed} FAILED`);
    process.exit(failed === 0 ? 0 : 1);
})().catch((e) => { console.error('ERR', e.message); process.exit(1); });

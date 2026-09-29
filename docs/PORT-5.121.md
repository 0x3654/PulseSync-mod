# Порт мода на Яндекс Музыку 5.121.2 (moro/dev121) — что изменилось против 5.120

Дата: 2026-09-25. Ветка `moro/dev121` (от moro/dev120 + swap app-дерева на ваниль 5.121.2).

## Главные отличия 5.121.2

1. **Pretty-принтер тулсета ломает чанки 5.121.2** (React hydration error → белый экран
   «Что-то пошло не так»). Чанки брать PURE из ванильной поставки, править только
   точечными вставками в минифицированный код. Pretty → patch → re-minify тоже не работает.
2. **Структура роутов ушла вглубь**: `(product)/(app)/layout-*.js` — тонкие обёртки;
   продукт-лэйаут переехал в общий чанк `6104-*.js` (там `isMacOSApplication`,
   `PreserveTitleBar`, `navbar_application_macos` — ваниль получила macOS-стили навбара).
3. **Module ID webpack стабильны между сборками** — модуль 72306 (страница настроек)
   один и тот же в 5.120/5.121.2, все 83 импорта мод-модуля разрешаются в реестре 5.121.2
   без маппинга (проверено скриптом по `git ls-tree 96d83b9a`).
4. **Дерево чанков — смесь эпох**: непереписанные чанки сохраняют старые имена/mtimes.
   Реестр валидных модулей строить по коммиту свапа, а не по датам файлов.

## Архитектура мода: renderer-first (главное изменение)

Мод-врезки в layout-чанке 5.120 (инстанс плеера, PLAYER_ACTION, тайтлбар-ряд) в 5.121.2
НЕ переносились в чанк — вместо этого всё живёт в `src/app/pulsesync.js` (main world,
грузится через rumScript). Причины: чанк-патчи 5.121.2 хрупки (п.1), а renderer-side код
версионо-устойчив.

### 1. Захват инстанса плеера — обход React-fiber (без чанк-патча)

`acquirePlayerInstance()` в pulsesync.js:
- якорь: первая кнопка С ключом `__reactFiber$` (смонтированный нами тайтлбар-ряд
  тоже состоит из button — без фильтра проба тычет в нашу кнопку и умирает!);
- подъём по `fiber.return` до корня, обход дерева;
- кандидат = объект с `.state.queueState` + `.state.playerState` (глубина ≤ 3 из
  `fiber.memoizedProps.value` — контекст-провайдер);
- в дереве есть пустые саб-плееры (`ctx.audioAdvertPlayback`) — берём кандидата
  с непустой очередью (`currentEntity.value` или `entityList.value.length > 0`);
- ретраи каждые 2с без капа: очередь может появиться когда угодно.

Проверка вживую (CDP): инстанс находится, `getCurrentTrack()` возвращает полный meta
(title/artists[{id,name}]/albums[{id,title}]/coverUri/durationMs/contentWarning).

### 2. Полный стейт нотча — NOTCH_TRACK_STATE

Ванильный PLAYER_STATE несёт только `{isPlaying, canMove*}` — трека/прогресса нет.
`executeJavaScript` из main на этом окне НЕ РАБОТАЕТ (промис молча не резолвится,
catch {} глотал — логи после await не печатались вообще). Вместо него:
- pulsesync.js раз в секунду читает стор: meta трека, `playerState.progress.value`
  (объект `{position, duration}` В СЕКУНДАХ), `exponentVolume` (не volume — тот бывает 0);
- шлёт `desktopEvents.send('NOTCH_TRACK_STATE', {isPlaying, track, progress, volume})`
  при изменении (позиция тикает → ~1/сек при игре);
- events.js мержит в NotchPlayer и дополняет data в PLAYER_STATE-хендлере.

Составной id трека `trackId:albumId` — нотч режет его для переходов.

### 3. Обработчик PLAYER_ACTION — в pulsesync.js

`registerPlayerActionHandler()`: транспорт (togglePause/move*), repeat/shuffle,
лайки (api.likeTrack/unlike/dislike/undislike), громкость
(`setExponentVolume`; 0..1, >1 трактуем как проценты), `setProgress` (секунды).
Dedupe по nonce как в 5.120.

### 4. Тайтлбар-ряд — DOM-монт из pulsesync.js

`mountTitleBarRow()`: css тайтлбара (`d084d0ca53c0fc5a.css`) по-прежнему грузится
index.html 5.121.2 — хэши классов (`TitleBar_root_macos__QjdOZ` и т.д.) валидны.
Ряд = fixed-строка top:0 (drag-зона из css, кнопки no-drag), pulseText + кнопки
`miniplayer`/`notchplayer` (SVG-иконки скопированы из 5.120-чанка). Гейты:
`window.PLATFORM === 'darwin'` + `nativeSettings.get('modSettings.notchplayer.enabled')`
(sync-getter из мод-преплоада), реакция на NATIVE_STORE_UPDATE.

### 5. Страница настроек — трансплантация модуля 72306

Модуль SettingsPage (200KB, мод-версия 5.120 из `page-41b7a01c…`) вставлен целиком
в ваниль `page-716c926b…` (16KB-модуль) babel-спанами (`/tmp/settings-port.mjs`
методика: parse → property span → replace). Модалки в стор-чанке 5924 уже портированы.

## Версии

- `src/package.json`: `"version"` (app.getVersion), `buildInfo.VERSION` (window.VERSION),
  `modification.realYMVersion` (HOST_VERSION) — все три → 5.121.2.
- Тесты: `NOTCH_ETALON=5.121.2` (env, дефолт в скриптах остаётся 5.120).

## Известные хвосты

- Structural-тест проверяет новую реализацию (pulsesync-монты), но старые чанк-файлы
  5.120 (layout-1bdc, layout-35cf) лежат в дереве мёртвым грузом — почистить при
  следящем свопе.
- `dist/mod-5.121.tar.gz` — собрать prepare-dist.sh после зелёных тестов.
- Моро не выравниваем (ююзер: только при фулл-релизе).

# Порт мода на Яндекс Музыку 5.120 (moro/dev120) — полный расклад

Дата: 2026-09-17. Ветка `moro/dev120` (от `moro/dev` + swap app-дерева на ваниль 5.120).
Этот же процесс — шаблон для следующего релиза ЯМ (5.121+).

## Что меняет 5.120 (vs 5.119)

1. **Ванильный preload** (root `preload.js`) появился в asar и гейтит себя:
   `classifyRendererUrl(location) === APPLICATION` + `isDesktopRuntimeInfo(sendSync('desktop:bootstrap'))`.
   Main-процесс ванили собирается в один `index.js` (модульной структуры main/ нет — она наша).
2. **Каналы IPC**: рендерер говорит только через `window.musicDesktop` (ванильные
   `desktop:*`-каналы). `PLAYER_STATE` ванили несёт ТОЛЬКО `{isPlaying, canMoveBackward,
   canMoveForward}` — трека/прогресса в канале больше нет; полный стейт собирает наша врезка.
3. **Сборка чанков**: имена/состав чанков другие; webpack module ID для одинаковых файлов
   совпадают между сборками; prettifier 5.120 оборачивает sequence-выражения в двойные скобки
   `((e.mode = …), …)` — якоря переносов брать с ними.
4. **intl-словарь**: часть ключей выпилена (`settings.import-media*`) — форматтер рисует
   ключ как есть. Проверять все `t({id:…})` на живость ключа в словаре 5.120.
5. **DI-токены** (`r(70204)`): `tw` → `V4`; `oo` жив. Поля/буквы модулей смещаются.

## Карта переносов (119 → 120)

| Что | 119 | 120 |
|---|---|---|
| Тайтлбар-ряд/layout | `layout-1bdc588f6d2b4154.js` | `layout-35cf43494fe1d4ff.js` |
| Гейт PreserveTitleBar (6775) | `6775-41ebe340f0ed1437.js` | `6104-a4f38eb3b1cedff2.js` |
| Стор-чанк (модалки/lrclib) | `9385-cd7f93216e42b9e6.js` (модуль 75170) | `9712-8122808d589b06b5.js` (модуль 54783) |
| Страница настроек | `page-6117f4b40a8d56cd.js` (модуль 19094) | `page-41b7a01cc78ba6f8.js` (модуль 72306) |
| Тайтлбар css | `d084d0ca53c0fc5a.css` | тот же файл (хэши классов совпали) |

Буквенный маппинг внутри стор-чанка (119→120): `nZ→oi` (FullscreenPlayer), `nM→nY` (enum),
`nQ→oa` (SyncLyrics), `nj→n3`, `rw→rX` (modal-фабрика), `R→C` (sonata runtime),
`ev→eI` (loadingState), `n$→n5` (в 120 стал `n5(config, trackId, format)`), `nH→n8`.

Мёртвые импорты 120-билда (в settings-модуле): `r(39472).H` → `window.VERSION`;
разделитель `r(3435)` → `r(29130)`; футер `r(58054)` → `r(97841)`; `twC: C.tw` → `C.V4`.

## Методика (проверенная)

- **Мелкие правки** — точечные текстовые замены по устойчивым якорям (строковые литералы,
  имена моделей вроде `'ModalsModel'`, `'SyncLyricsLine'`).
- **Целый модуль** (когда в 119 переписан весь компонент, как SettingsPage): вырезать модуль,
  обернуть `var __m = (e,t,r) => {…};`, прогнать babel (`@babel/parser`+`traverse`+`generator`
  из node_modules репо), вернуть chunk-формат `NNNNN: (e,t,r) => {…},`, заменить span в 120.
  Свободные переменные смотреть babel'ом (scope-aware) — regex по буквам врёт из-за shadowing.
- **adaptive-patch тулсета** для 119→120 НЕ годится: 89/98 легло, но 27 чанков сломались
  синтаксически (вставки в чужой контекст). Не использовать, откат проверен.
- **Проверка полей**: собрать `r.d(t, {…})`-экспорты всех модулей 120 в кэш и сверить каждое
  `X.field` перенесённого кода с экспортами модуля `r(ID)` (скрипт `tests/notch/…` — см. git
  историю; идея в `/tmp/verify_fields.mjs` сессии).
- После КАЖДОЙ правки чанков: `node --check` по всем `src/app/_next/static/chunks/**/*.js`
  (pretty-принтер тулсета и ручные вставки умеют ломать синтаксис).
- Деплой на тестовую машину: `bash scripts/deploy-citrus.sh`.

## Сделано в dev120 (этапы-коммиты)

1. `3329d0aa` — мост: createWindow → мод-преплоад; `musicDesktop` в `src/main/lib/preload.js`
   (каналы замаплены на Events мода); bootstrap/auth-хендлеры верхним уровнем в events.js;
   гвард `data.progress` (ваниль шлёт `{}` при init); чанк 8035 восстановлен из pure
   (pretty-принтер сломал). Полный player state — врезка в layout (sonata-стор, троттл 400мс).
2. `fd16f6da` — кнопки нотча к краям панели (CSS).
3. `2bbc6bdc` — тайтлбар-ряд: разгейт `(s || isMacOS)`, root_macos, Windows-кнопки `s&&`,
   double-click off; pulseText + кнопки mini/notch добавлены с нуля (ваниль 5.120 их не несёт);
   баннер-css.
4. Settings: модуль 19094 → 72306 (babel); ключ к оживлению — **15 мод-модалок в ModalsModel**
   (`downloaderSettingsModal: rX.q` … после `clearMemoryModal` в 9712).
5. lrclib: `pulseSyncLrclib` IIFE (+716 строк) + SyncLyrics/FullscreenPlayer-хунки в 9712
   (включая фикс autoHide из `44eeeeb4`).
6. Экран «Настройки мода»: верхний пункт, внутри всё дерево; шапочная «Вернуться назад» в
   мод-экране = шаг назад (capture-перехват по aria-label); ваниль-секции скрыты на мод-экране;
   импорт-медиа перенесён в мод обычным ec-пунктом (ключ локали мёртв).
7. Кража меню нотча: `src/app/pulsesync.js` (124KB) + `import('./pulsesync.js')` в rumScript.js +
   pulsesyncApi-IIFE в layout (лайки, PLAYER_ACTION). `realYMVersion` → 5.120.0.
8. Тесты: эталон 5.120.0; structural дополнен 120-чеками; e2e локаль-инвариантен и ходит через
   мод-экран. Trio: structural ALL PASS, e2e ALL PASS, negative ALL PASS.

## Остатки

- ~95 мелких renderer-патчей 119 (vibe/ugc/experiments/поиск; дифф `6a1072ac..moro/dev` по
  src/app минус перенесённое) — по необходимости.
- Локаль-мелочи: сырые ключи intl в перенесённых секциях (проверять на живой странице).
- Моро не выровнен (юзер: только при фулл-релизе).
- Автообновление мода/ffmpeg/yt-dlp на 120 не проверено.

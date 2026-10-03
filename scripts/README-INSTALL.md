# Установка мода: один флоу, две платформы, три версии клиента

Поддерживаемые версии Яндекс Музыки: **5.119.x / 5.120.x / 5.121.x** (ветки
`moro/dev119` / `moro/dev120` / `moro/dev121`). Артефакты одни и те же для
обеих платформ — сборка кроссплатформенная (см. «Как мы патчим»).

## Сборка артефактов (мак)

```bash
bash scripts/release-dist.sh            # все три версии
bash scripts/release-dist.sh 5.121.2    # одна версия
```

Даёт:
- `dist/<major>/{app.asar, app.asar.unpacked.tar.gz, manifest.json}` — mac-флоу;
- `dist/mod-<major>.tar.gz` — mac-инсталлер качает его сам (или из ветки);
- `dist/mod-<major>-win.zip` — виндовый пакет: `install-mod-windows.ps1` +
  `README-WIN.md` + `<major>/` с артефактами.

В asar вшиты прекомпилированные N-API нативы `set_iconic_thumbnail` и
`wasapi_exclusive` (виндовые таскбар-превью и WASAPI-вывод; взяты из релиза
апстрима, Electron грузит .node прямо из asar — unpacked не требуется).

## Установка

### Windows (PowerShell)

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\install-mod-windows.ps1
# нестандартный путь клиента: -InstallDir "C:\...\YandexMusic"
```

Сам находит клиент (`%LOCALAPPDATA%\Programs\YandexMusic` + реестр), сам
определяет версию пакета (`.\5.119 | .\5.120 | .\5.121` — если их несколько,
уточни `-Payload <dir>`), проверяет, что версия клиента соответствует пакету.

### macOS

```bash
bash scripts/install-mod.sh            # /Applications/Яндекс Музыка.app
bash scripts/install-mod.sh --app=<путь к .app>
```

Артефакты берёт из `dist/`, при отсутствии — скачивает `mod-<major>.tar.gz`
из ветки порта.

## Что делает установка (обе платформы)

1. определяет версию клиента и состояние (ваниль / мод);
2. **ваниль → бэкапит оригиналы**: `app.asar.orig`, исходный integrity-хеш
   (win: `app.asar.orig.integrity`; mac: `app.asar.orig.sha256`),
   существующий `app.asar.unpacked.orig`; мод → обновляет поверх, бэкапы не трогает;
3. подменяет `resources/app.asar` (+ unpacked с win32-sharp), проверяет sha256 по manifest.json;
4. **патчит integrity-хеш asar-заголовка**:
   - win: единственный RCDATA-JSON внутри «Яндекс Музыка.exe»
     `[{"file":"resources\\app.asar","alg":"SHA256","value":"<hex>"}]` —
     замена value той же длины байт;
   - mac: `ElectronAsarIntegrity` в Info.plist + ad-hoc codesign;
5. мод → мод: просто обновляет asar и хеш, откат сохраняется.

## Откат

```powershell
powershell ... -File .\install-mod-windows.ps1 -Uninstall
```
```bash
bash scripts/install-mod.sh --uninstall
```

Возвращает ванильный asar/unpacked и исходный integrity-хеш.

## Обновление на новую версию ЯМ

Клиент должен быть обновлён вручную (авто-обновления в форке выключены по
умолчанию именно поэтому), затем ставится пакет нового порта. Порты новых
версий — по мере выхода (см. docs/PORT-5.121.md для методики).

## Тесты

```bash
node tests/win/structural.test.mjs        # виндовые инварианты (версионно-зависимый)
NOTCH_ETALON=5.121.2 node tests/notch/structural.test.mjs   # мак-нотч
```

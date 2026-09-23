#!/bin/bash
# Единый инсталлер мода PulseSync-mod в чистый (или уже патченный) клиент Яндекс Музыки.
#
# Поведение:
#   1. определяет платформу и версию установленного клиента ЯМ;
#   2. версия 5.119.x → артефакты ветки moro/dev119, 5.120.x → moro/dev120,
#      любое другое → остановка с перечнем поддерживаемых;
#   3. определяет, чистый клиент или уже с модом (маркер PulseSync в asar):
#        чистый  → бэкап оригиналов (.orig) и установка;
#        с модом → обновление поверх, оригинальные бэкапы не трогаем;
#   4. подмена asar + unpacked, ElectronAsarIntegrity в Info.plist, ad-hoc подпись.
#
# Использование:
#   bash scripts/install-mod.sh [--dist=<dir>] [--app=<path>] [--uninstall] [--keep-running]
#     --dist=<dir>   каталог с артефактами: <dir>/5.119.0/{app.asar,app.asar.unpacked}
#                    (по умолчанию <repo>/dist)
#     --app=<path>   путь к .app (по умолчанию /Applications/Яндекс Музыка.app)
#     --uninstall    откат к оригиналу (app.asar.orig), мод удаляется
#     --keep-running не убивать запущенный ЯМ (сами остановите перед сменой asar)
set -u

SUPPORTED_119="5.119"
SUPPORTED_120="5.120"
DIST_DEFAULT="$(cd "$(dirname "$0")/.." && pwd)/dist"
APP_DEFAULT_MAC="/Applications/Яндекс Музыка.app"

DIST="$DIST_DEFAULT"
APP=""
UNINSTALL=0
KEEP_RUNNING=0
for arg in "$@"; do
    case "$arg" in
        --dist=*) DIST="${arg#--dist=}" ;;
        --app=*) APP="${arg#--app=}" ;;
        --uninstall) UNINSTALL=1 ;;
        --keep-running) KEEP_RUNNING=1 ;;
        *) echo "неизвестный аргумент: $arg"; exit 2 ;;
    esac
done

fail() { echo "ОШИБКА: $*" >&2; exit 1; }
info() { echo "── $*"; }

# ── платформа ──
OS="$(uname -s)"
case "$OS" in
    Darwin) ;;
    *) fail "платформа «$OS»: авто-установка пока только для macOS. Windows — отдельный путь (exe hash swap), в разработке." ;;
esac

APP="${APP:-$APP_DEFAULT_MAC}"
[ -d "$APP" ] || fail "клиент Яндекс Музыки не найден: $APP (укажите --app=<путь к .app>)"
RES="$APP/Contents/Resources"
ASAR="$RES/app.asar"
UNP="$RES/app.asar.unpacked"
ORIG="$RES/app.asar.orig"
UNP_ORIG="$RES/app.asar.unpacked.orig"
PLIST="$APP/Contents/Info.plist"

# ── откат ──
if [ "$UNINSTALL" -eq 1 ]; then
    info "откат мода → оригинальный клиент"
    [ -f "$ORIG" ] || fail "оригинал $ORIG не найден — откатывать нечего (мод ставился без бэкапа?)"
    if [ "$KEEP_RUNNING" -eq 0 ]; then
        pkill -x "Яндекс Музыка" 2>/dev/null && sleep 2
    fi
    cp "$ORIG" "$ASAR" || fail "не удалось вернуть app.asar.orig"
    if [ -d "$UNP_ORIG" ]; then
        rm -rf "$UNP"
        mv "$UNP_ORIG" "$UNP"
    elif [ -d "$UNP" ]; then
        # оригинального unpacked не бэкапилось — вероятно, мод его принёс целиком
        rm -rf "$UNP"
    fi
    [ -f "$ORIG.sha256" ] || fail "нет $ORIG.sha256 — хэш оригинала неизвестен, integrity не восстановить (переустановите клиент ЯМ)"
    HASH="$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["asarHeaderSha256"])' "$ORIG.sha256" 2>/dev/null)" \
        || fail "не удалось прочитать хэш оригинала"
    PLIST="$PLIST" HASH="$HASH" python3 - <<'EOF'
import os, plistlib
with open(os.environ['PLIST'], 'rb') as f: pl = plistlib.load(f)
pl['ElectronAsarIntegrity']['Resources/app.asar']['hash'] = os.environ['HASH']
with open(os.environ['PLIST'], 'wb') as f: plistlib.dump(pl, f)
EOF
    xattr -cr "$APP" 2>/dev/null || true
    codesign --force --deep --sign - "$APP" >/dev/null 2>&1 || true
    info "готово: клиент возвращён к оригиналу"
    exit 0
fi

# ── версия клиента ──
VER="$(defaults read "$PLIST" CFBundleShortVersionString 2>/dev/null)" || fail "не прочитана версия клиента"
info "клиент: $APP — версия $VER"

case "$VER" in
    $SUPPORTED_119*) BRANCH="moro/dev119" ;;
    $SUPPORTED_120*) BRANCH="moro/dev120" ;;
    *) fail "версия клиента $VER не поддерживается. Подходят только $SUPPORTED_119.x (ветка moro/dev119) и $SUPPORTED_120.x (ветка moro/dev120). Обновите клиент или дождитесь порта." ;;
esac
MAJORMINOR="${VER%.*}"
SRC="$DIST/$MAJORMINOR"
# сценарий «без клона репо»: curl -fsSL install-mod.sh | bash — артефакты лежат
# прямо в dev-ветках (dist/mod-<major>.tar.gz), оттуда и качаются raw-ссылкой
RAW_BASE="https://raw.githubusercontent.com/0x3654/PulseSync-mod"
case "$MAJORMINOR" in
    5.119) DEF_URL="$RAW_BASE/moro/dev119/dist" ;;
    *)     DEF_URL="$RAW_BASE/moro/dev120/dist" ;;
esac
BASE_URL="${MOD_DIST_URL:-$DEF_URL}"
if [ ! -f "$SRC/app.asar" ] && [ ! -f "$DIST/mod-$MAJORMINOR.tar.gz" ]; then
    info "артефактов нет локально — скачиваю $BASE_URL/mod-$MAJORMINOR.tar.gz"
    mkdir -p "$DIST"
    curl -fsSL --max-time 600 -o "$DIST/mod-$MAJORMINOR.tar.gz" "$BASE_URL/mod-$MAJORMINOR.tar.gz" \
        || fail "не скачался mod-$MAJORMINOR.tar.gz с $BASE_URL (соберите локально: scripts/prepare-dist.sh)"
fi
if [ ! -f "$SRC/app.asar" ] && [ -f "$DIST/mod-$MAJORMINOR.tar.gz" ]; then
    TMPB="$(mktemp -d)"
    tar -C "$TMPB" -xzf "$DIST/mod-$MAJORMINOR.tar.gz" || fail "не распаковался релизный архив"
    mkdir -p "$DIST"
    mv "$TMPB/$MAJORMINOR" "$SRC" || fail "нет каталога $MAJORMINOR в архиве"
    rm -rf "$TMPB"
fi
[ -f "$SRC/app.asar" ] || fail "артефакты не найдены: $SRC/app.asar (соберите: scripts/prepare-dist.sh, или задайте MOD_DIST_URL=<базовый URL>)"
if [ ! -d "$SRC/app.asar.unpacked" ] && [ -f "$SRC/app.asar.unpacked.tar.gz" ]; then
    tar -C "$SRC" -xzf "$SRC/app.asar.unpacked.tar.gz" || fail "не распаковался app.asar.unpacked.tar.gz"
fi
[ -d "$SRC/app.asar.unpacked" ] || fail "артефакты не найдены: $SRC/app.asar.unpacked"
info "артефакты: $SRC (ветка $BRANCH)"

# ── чистый или с модом ──
if grep -aq "PulseSync" "$ASAR" 2>/dev/null; then
    STATE="mod"
else
    STATE="vanilla"
fi
info "текущее состояние asar: $STATE"

if [ "$STATE" = "vanilla" ]; then
    if [ -f "$ORIG" ]; then
        info "найден старый бэкап $ORIG — оставляем его как оригинал"
    else
        info "бэкап оригинала → app.asar.orig"
        cp "$ASAR" "$ORIG" || fail "не удалось забэкапить оригинальный asar"
        [ -d "$UNP" ] && { mv "$UNP" "$UNP_ORIG" || fail "не удалось забэкапить unpacked"; }
        PLIST_H="$(python3 -c 'import plistlib,sys;print(plistlib.load(open(sys.argv[1],"rb"))["ElectronAsarIntegrity"]["Resources/app.asar"]["hash"])' "$PLIST" 2>/dev/null)" || PLIST_H=""
        if [ -n "$PLIST_H" ]; then
            printf '{\n  "asarHeaderSha256": "%s",\n  "asarFileSha256": "%s"\n}\n' "$PLIST_H" "$(shasum -a 256 "$ORIG" | awk '{print $1}')" > "$ORIG.sha256"
        fi
    fi
else
    [ -f "$ORIG" ] || info "мод уже стоит, оригинального бэкапа нет — ставим поверх (откат будет невозможен)"
fi

# ── установка ──
if [ "$KEEP_RUNNING" -eq 0 ]; then
    pkill -x "Яндекс Музыка" 2>/dev/null && sleep 2
fi
pgrep -x "Яндекс Музыка" >/dev/null && fail "клиент запущен — остановите его (asar нельзя менять на лету)"

cp "$SRC/app.asar" "$ASAR" || fail "не удалось скопировать app.asar"
FILE_EXPECT="$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["asarFileSha256"])' "$SRC/manifest.json" 2>/dev/null)" || fail "нет $SRC/manifest.json"
FILE_GOT="$(shasum -a 256 "$ASAR" | awk '{print $1}')"
[ "$FILE_GOT" = "$FILE_EXPECT" ] || fail "целостность: sha256 app.asar не совпал с manifest ($FILE_GOT ≠ $FILE_EXPECT)"
rm -rf "$UNP"
cp -R "$SRC/app.asar.unpacked" "$UNP" || fail "не удалось скопировать app.asar.unpacked"

HASH="$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["asarHeaderSha256"])' "$SRC/manifest.json" 2>/dev/null)" \
    || fail "не удалось прочитать хэш из manifest"
info "integrity: $HASH"
PLIST="$PLIST" HASH="$HASH" python3 - <<'EOF'
import os, plistlib
with open(os.environ['PLIST'], 'rb') as f: pl = plistlib.load(f)
pl['ElectronAsarIntegrity']['Resources/app.asar']['hash'] = os.environ['HASH']
with open(os.environ['PLIST'], 'wb') as f: plistlib.dump(pl, f)
EOF
xattr -cr "$APP" 2>/dev/null || true
codesign --force --deep --sign - "$APP" >/dev/null 2>&1 || true
info "готово: мод установлен ($STATE → mod, ветка $BRANCH). Откат: bash scripts/install-mod.sh --uninstall"

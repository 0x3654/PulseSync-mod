#!/bin/bash
# Запуск всех проверок нотча с верификацией версии приложения.
# Эталон меняется — правь ETALON ниже и патчи чанков.
set -e
ETALON="${NOTCH_ETALON:-5.120.0}"
HOST="${NOTCH_SSH:-}"
APP_PATH="${NOTCH_APP:-/Applications/Яндекс Музыка.app}"

if [ -n "$HOST" ]; then
    VER=$(ssh "$HOST" "defaults read '$APP_PATH/Contents/Info.plist' CFBundleShortVersionString" 2>/dev/null)
else
    VER=$(defaults read "$APP_PATH/Contents/Info.plist" CFBundleShortVersionString 2>/dev/null)
fi
echo "версия приложения на $HOST: $VER (эталон $ETALON)"
if [ "$VER" != "$ETALON" ]; then
    echo "ОТКАЗ: версия не совпадает с эталоном — патчи чанков привязаны к $ETALON. Обнови приложение или эталон+патчи."
    exit 1
fi

cd "$(dirname "$0")/../.."
node tests/notch/structural.test.mjs
# дефолт — локальное приложение с CDP-портом; удалённый стенд через NOTCH_CDP/NOTCH_SSH
NOTCH_CDP="${NOTCH_CDP:-http://127.0.0.1:9222}"
if ! curl -s -m 3 "$NOTCH_CDP/json" >/dev/null 2>&1; then
    echo "CDP $NOTCH_CDP не отвечает — запусти приложение: open -a 'Яндекс Музыка' --args --remote-debugging-port=9222"
    exit 1
fi
for suite in e2e e2e-negative; do
    NOTCH_CDP="$NOTCH_CDP" node "tests/notch-local/$suite.mjs"
done

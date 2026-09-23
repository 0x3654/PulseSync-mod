#!/bin/bash
# Запуск всех проверок нотча с верификацией версии приложения.
# Эталон меняется — правь ETALON ниже и патчи чанков.
set -e
ETALON="${NOTCH_ETALON:-5.119.0}"
HOST="${NOTCH_CDP_HOST:-${NOTCH_SSH:-$USER@localhost}}"
APP_PATH="${NOTCH_APP:-/Applications/Яндекс Музыка.app}"

VER=$(ssh "$HOST" "defaults read '$APP_PATH/Contents/Info.plist' CFBundleShortVersionString" 2>/dev/null)
echo "версия приложения на $HOST: $VER (эталон $ETALON)"
if [ "$VER" != "$ETALON" ]; then
    echo "ОТКАЗ: версия не совпадает с эталоном — патчи чанков привязаны к $ETALON. Обнови приложение или эталон+патчи."
    exit 1
fi

cd "$(dirname "$0")/../.."
node tests/notch/structural.test.mjs
for suite in e2e e2e-negative; do
    if [ -z "$NOTCH_CDP" ]; then
        echo "запусти с NOTCH_CDP=http://127.0.0.1:9223 (туннель: ssh -f -N -L 9223:127.0.0.1:9222 $HOST)"
        exit 1
    fi
    NOTCH_CDP="$NOTCH_CDP" node "tests/notch/$suite.mjs"
done

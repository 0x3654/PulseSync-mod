#!/bin/bash
# Драйвер стек-теста: каждая фаза — свой процесс на свежем приложении.
# Использование: bash tests/notch-local/run-fullstack.sh [фаза ...]
set -u
HOST="${NOTCH_SSH:-}"
APP="${NOTCH_APP:-/Applications/Яндекс Музыка.app}"
CDP_URL="${NOTCH_CDP:-http://127.0.0.1:9222}"
cd "$(dirname "$0")/../.."

restart_app() {
    if [ -n "$HOST" ]; then
    ssh -o ConnectTimeout=10 "$HOST" "pkill -9 -f 'Яндекс Музыка' 2>/dev/null; sleep 2; open -a '$APP' --args --remote-debugging-port=9222" >/dev/null 2>&1
else
    pkill -9 -f "Яндекс Музыка" 2>/dev/null; sleep 2
    open -a "$APP" --args --remote-debugging-port=9222
fi
    sleep 15
}

PHASES=("$@")
[ ${#PHASES[@]} -eq 0 ] && PHASES=(menu windows queue nav share playlists links volume pin checkboxes)

TOTAL_FAIL=0
for phase in "${PHASES[@]}"; do
    echo "═══════ фаза: $phase ═══════"
    # share/playlists зависят от тёплого кэша ленивого лоадера — без рестарта
    if [ "$phase" = "playlists" ]; then
        echo "(без рестарта: тёплое приложение после share)"
    else
        restart_app
    fi
    if NOTCH_CDP="$CDP_URL" NOTCH_SSH="$HOST" NOTCH_PHASE="$phase" node tests/notch-local/e2e-fullstack.mjs; then
        echo "[$phase] OK"
    else
        # живое приложение меняет треки/тайминги — одной повторной попытки достаточно
        echo "[$phase] первая попытка не прошла, повтор на свежем приложении..."
        restart_app
        if NOTCH_CDP="$CDP_URL" NOTCH_SSH="$HOST" NOTCH_PHASE="$phase" node tests/notch-local/e2e-fullstack.mjs; then
            echo "[$phase] OK (со второй попытки)"
        else
            echo "[$phase] FAILED"
            TOTAL_FAIL=$((TOTAL_FAIL + 1))
        fi
    fi
done

echo
[ "$TOTAL_FAIL" -eq 0 ] && echo "FULL STACK: ALL PASS (${#PHASES[@]} фаз)" || echo "FULL STACK: $TOTAL_FAIL фаз провалено"
exit "$TOTAL_FAIL"

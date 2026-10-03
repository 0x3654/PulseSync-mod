#!/bin/bash
# Единая сборка релизных артефактов мода для всех поддерживаемых версий ЯМ.
# Готовит dist/<major>/ (mac-флоу install-mod.sh) и dist/mod-<major>-win.zip (win-флоу install-mod-windows.ps1).
# Использование: bash scripts/release-dist.sh [all|5.119.0|5.120.0|5.121.2|5.122.0]
set -eu

cd "$(dirname "$0")/.."
TARGET="${1:-all}"

bash scripts/prepare-dist.sh "$TARGET"

if [ "$TARGET" = "all" ]; then
    for M in 5.119 5.120 5.121 5.122; do bash scripts/package-win.sh "$M"; done
else
    bash scripts/package-win.sh "${TARGET%.*}"
fi

echo "── релизные артефакты:"
ls -1 dist/mod-*.tar.gz dist/mod-*-win.zip 2>/dev/null

#!/bin/bash
# Сборка Windows-пакета мода: dist/mod-<major>-win.zip {install-mod-windows.ps1, README-WIN.md, <major>/{app.asar, app.asar.unpacked, manifest.json}}.
# Использование: bash scripts/package-win.sh [5.121]
set -eu

cd "$(dirname "$0")/.."
REPO="$(pwd)"
MAJOR="${1:-5.121}"
[ -f "dist/$MAJOR/app.asar" ] || { echo "нет dist/$MAJOR/app.asar — сначала scripts/prepare-dist.sh $MAJOR"; exit 1; }
[ -f "dist/$MAJOR/manifest.json" ] || { echo "нет dist/$MAJOR/manifest.json"; exit 1; }
[ -f scripts/install-mod-windows.ps1 ] || { echo "нет scripts/install-mod-windows.ps1"; exit 1; }

STAGE_PARENT="$(mktemp -d)"
trap 'rm -rf "$STAGE_PARENT"' EXIT
STAGE="$STAGE_PARENT/mod-$MAJOR-win"
mkdir -p "$STAGE/$MAJOR"
cp scripts/install-mod-windows.ps1 scripts/README-WIN.md "$STAGE/"
cp -R "dist/$MAJOR/app.asar" "dist/$MAJOR/app.asar.unpacked" "dist/$MAJOR/manifest.json" "$STAGE/$MAJOR/"

OUT="$REPO/dist/mod-$MAJOR-win.zip"
rm -f "$OUT"
(cd "$STAGE_PARENT" && zip -qr "$OUT" "mod-$MAJOR-win")
echo "── готово: $OUT ($(du -h "$OUT" | cut -f1))"

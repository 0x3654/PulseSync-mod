#!/bin/bash
# Сборка релизных артефактов мода в dist/<версия ЯМ>/{app.asar,app.asar.unpacked}.
# Использование: bash scripts/prepare-dist.sh [5.119.0|5.120.0|all]
# Ветки: 5.119.x → moro/dev119, 5.120.x → moro/dev120 (сборка через временный git worktree).
set -eu

cd "$(dirname "$0")/.."
REPO="$(pwd)"
DIST="$REPO/dist"

TARGETS=("${@:-all}")
[ ${#TARGETS[@]} -eq 1 ] && [ "${TARGETS[0]}" = "all" ] && TARGETS=(5.119.0 5.120.0)

branch_for() {
    case "$1" in
        5.119.*) echo "moro/dev119" ;;
        5.120.*) echo "moro/dev120" ;;
        *) echo "" ;;
    esac
}

for target in "${TARGETS[@]}"; do
    major="${target%.*}"            # 5.119 / 5.120
    branch="$(branch_for "$target")"
    [ -n "$branch" ] || { echo "неизвестная цель $target (поддержка: 5.119.x, 5.120.x)"; exit 2; }

    if [ "$branch" = "$(git branch --show-current)" ]; then
        echo "── [$target] сборка из текущей ветки $branch"
        WORK="$REPO"
        BUILT=0
    else
        echo "── [$target] сборка из ветки $branch (worktree)"
        WORK="$REPO/.wt-dist-$$"
        git worktree add --detach "$WORK" "$branch"
        # сборке нужны node_modules: линкуем из основного дерева
        [ -d "$REPO/node_modules" ] && ln -s "$REPO/node_modules" "$WORK/node_modules"
        [ -d "$REPO/miniplayer/node_modules" ] && mkdir -p "$WORK/miniplayer" && ln -s "$REPO/miniplayer/node_modules" "$WORK/miniplayer/node_modules"
        BUILT=1
    fi

    (cd "$WORK/miniplayer" && npm run build) >/dev/null
    (cd "$WORK" && node toolset.js build -m --modernize) >/dev/null 2>&1 || (cd "$WORK" && node toolset.js build -m --modernize)

    OUT="$DIST/$major"
    mkdir -p "$OUT"
    rm -rf "$OUT/app.asar" "$OUT/app.asar.unpacked"
    cp "$WORK/builds/latest/app.asar" "$OUT/app.asar"
    cp -R "$WORK/builds/latest/app.asar.unpacked" "$OUT/app.asar.unpacked"
    HASH="$(node -e 'const a=require("@electron/asar"),c=require("crypto");console.log(c.createHash("sha256").update(a.getRawHeader(process.argv[1]).headerString).digest("hex"))' "$OUT/app.asar")"
    FILE_SHA="$(shasum -a 256 "$OUT/app.asar" | awk '{print $1}')"
    printf '{\n  "ymVersion": "%s",\n  "branch": "%s",\n  "asarHeaderSha256": "%s",\n  "asarFileSha256": "%s",\n  "builtAt": "%s"\n}\n' "$target" "$branch" "$HASH" "$FILE_SHA" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" > "$OUT/manifest.json"

    tar -C "$OUT" -czf "$OUT/app.asar.unpacked.tar.gz" app.asar.unpacked
    # единый релизный архив: dist/<major>/mod-<major>.tar.gz {app.asar, app.asar.unpacked.tar.gz, manifest.json}
    TMPB="$(mktemp -d)"
    mkdir -p "$TMPB/$major"
    cp "$OUT/app.asar" "$OUT/app.asar.unpacked.tar.gz" "$OUT/manifest.json" "$TMPB/$major/"
    tar -C "$TMPB" -czf "$DIST/mod-$major.tar.gz" "$major"
    rm -rf "$TMPB"
    if [ "$BUILT" -eq 1 ]; then
        rm -f "$WORK/node_modules" "$WORK/miniplayer/node_modules"
        git worktree remove --force "$WORK"
    fi
    echo "   → $OUT (sha256 заголовка: $HASH)"
done

echo "── готово: $DIST"

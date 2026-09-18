#!/bin/bash
# Общий деплой мода на ОБЕ машины: одна сборка → moro (/Applications) + citrus (/Applications).
# Использование: bash scripts/deploy-mod.sh [--no-build]
# Требует: туннель не нужен; ssh m@citrus; на цитрусе /tmp/citrus_install.sh (хэш обновляется отсюда).
set -e
cd "$(dirname "$0")/.."

if [ "$1" != "--no-build" ]; then
    echo "── сборка мода"
        (cd miniplayer && npm run build) >/dev/null
    node toolset.js build -m --modernize
fi

H=$(node -e "const a=require('@electron/asar'),c=require('crypto');console.log(c.createHash('sha256').update(a.getRawHeader('builds/latest/app.asar').headerString).digest('hex'))")
echo "── integrity: $H"

# ── moro ──
APP="/Applications/Яндекс Музыка.app"
# подмена asar под работающим приложением = FATAL asar_file_validator
# (ленивые стрим-читы по пути ловят чужие блоки) — сначала выходим
pkill -x "Яндекс Музыка" 2>/dev/null || true; sleep 2
cp builds/latest/app.asar "$APP/Contents/Resources/app.asar"
rm -rf "$APP/Contents/Resources/app.asar.unpacked"
cp -R builds/latest/app.asar.unpacked "$APP/Contents/Resources/app.asar.unpacked"
HASH="$H" python3 - <<'EOF'
import os, plistlib
p = '/Applications/Яндекс Музыка.app/Contents/Info.plist'
with open(p,'rb') as f: pl = plistlib.load(f)
pl['ElectronAsarIntegrity']['Resources/app.asar']['hash'] = os.environ['HASH']
with open(p,'wb') as f: plistlib.dump(pl, f)
EOF
xattr -cr "$APP" 2>/dev/null || true
codesign --force --deep --sign - "$APP" >/dev/null 2>&1
# open после переподписи молча душит LS — поднимаем бинарник напрямую в чистом env
(cd "$APP/Contents/MacOS" && env -i HOME="$HOME" PATH=/usr/bin:/bin nohup "./Яндекс Музыка" --remote-debugging-port=9222 > /tmp/ym_moro_stderr.log 2>&1 < /dev/null &)
echo "moro: задеплоено, приложение перезапущено (asar нельзя менять на лету)"

# ── citrus ──
HASH="$H" python3 - <<'EOF'
import os, re
s = open('/tmp/citrus_install.sh').read()
s = re.sub(r'h = "[0-9a-f]{64}"', 'h = "%s"' % os.environ['HASH'], s)
open('/tmp/citrus_install.sh', 'w').write(s)
EOF
tar -C builds/latest -czf /tmp/deploy-unpacked.tgz app.asar.unpacked
scp -q builds/latest/app.asar m@citrus:/tmp/notch_app.asar
scp -q /tmp/deploy-unpacked.tgz /tmp/citrus_install.sh m@citrus:/tmp/
ssh m@citrus 'cd /tmp && rm -rf app.asar.unpacked notch_app.asar.unpacked && tar -xzf deploy-unpacked.tgz && mv app.asar.unpacked notch_app.asar.unpacked && pkill -9 -f "Яндекс Музыка" 2>/dev/null; sleep 2; bash /tmp/citrus_install.sh' 2>&1 | tail -1
echo "citrus: задеплоено"
echo "── готово: обе машины на одной сборке $H"

#!/bin/bash
# Точечный деплой мода ТОЛЬКО на citrus (moro не трогаем — работает юзер).
# Одна сборка локально → /Applications на citrus. asar нельзя менять под работающим приложением.
set -e
cd "$(dirname "$0")/.."

if [ "$1" != "--no-build" ]; then
    (cd miniplayer && npm run build) >/dev/null
    node toolset.js build -m --modernize
fi

H=$(node -e "const a=require('@electron/asar'),c=require('crypto');console.log(c.createHash('sha256').update(a.getRawHeader('builds/latest/app.asar').headerString).digest('hex'))")
echo "── integrity: $H"

HASH="$H" python3 - <<'EOF'
import os, re
s = open('/tmp/citrus_install.sh').read()
s = re.sub(r'h = "[0-9a-f]{64}"', 'h = "%s"' % os.environ['HASH'], s)
open('/tmp/citrus_install.sh', 'w').write(s)
EOF
tar -C builds/latest -czf /tmp/deploy-unpacked.tgz app.asar.unpacked
scp -q builds/latest/app.asar ${NOTCH_SSH:-$USER@localhost}:/tmp/notch_app.asar
scp -q /tmp/deploy-unpacked.tgz /tmp/citrus_install.sh ${NOTCH_SSH:-$USER@localhost}:/tmp/
ssh ${NOTCH_SSH:-$USER@localhost} 'cd /tmp && rm -rf app.asar.unpacked notch_app.asar.unpacked && tar -xzf deploy-unpacked.tgz && mv app.asar.unpacked notch_app.asar.unpacked && pkill -9 -f "Яндекс Музыка" 2>/dev/null; sleep 2; bash /tmp/citrus_install.sh' 2>&1 | tail -1
echo "── citrus задеплоен: $H"

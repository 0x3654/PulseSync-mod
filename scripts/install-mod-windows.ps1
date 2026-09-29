# PulseSync-mod installer for Yandex Music (Windows), client 5.119.x / 5.120.x / 5.121.x.
# One package per client version: the payload dir (.\5.119 | .\5.120 | .\5.121) sits
# next to this script and is auto-detected when there is exactly one.
#
# What it does:
#   1. locates the installed Yandex Music client (or use -InstallDir);
#   2. vanilla client -> backs up originals (app.asar.orig + integrity hash),
#      modded client -> updates in place, backups are kept;
#   3. swaps resources\app.asar + app.asar.unpacked from the payload dir,
#      verifies sha256 against manifest.json;
#   4. patches the asar integrity hash inside the main exe (RCDATA JSON,
#      in-place, same byte length).
#
# Usage (from the unpacked mod package folder):
#   powershell -NoProfile -ExecutionPolicy Bypass -File .\install-mod-windows.ps1
#   powershell ... -File .\install-mod-windows.ps1 -InstallDir "C:\Users\you\AppData\Local\YandexMusic"
#   powershell ... -File .\install-mod-windows.ps1 -Uninstall
param(
    [string]$InstallDir = '',
    [string]$Payload = '',   # payload dir next to this script (e.g. 5.119); auto-detected when omitted
    [switch]$Uninstall,
    [switch]$KeepRunning
)

$ErrorActionPreference = 'Stop'

function Fail([string]$msg) { Write-Host "ERROR: $msg" -ForegroundColor Red; exit 1 }
function Info([string]$msg) { Write-Host "-- $msg" }

$Latin1 = [Text.Encoding]::GetEncoding(28591)
$Marker = '"file":"resources\\app.asar"'

# ---- locate install dir ----------------------------------------------------
if (-not $InstallDir) {
    $candidates = @()
    if ($env:LOCALAPPDATA) {
        $candidates += (Join-Path (Join-Path $env:LOCALAPPDATA 'Programs') 'YandexMusic')
        $candidates += (Join-Path $env:LOCALAPPDATA 'YandexMusic')
        $candidates += (Join-Path (Join-Path $env:LOCALAPPDATA 'Programs') 'yandex-music')
    }
    foreach ($root in @('HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall',
                        'HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall',
                        'HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall')) {
        if (Test-Path $root) {
            foreach ($k in Get-ChildItem $root -ErrorAction SilentlyContinue) {
                $p = Get-ItemProperty $k.PSPath -ErrorAction SilentlyContinue
                if ($p.DisplayName -and $p.InstallLocation -and ($p.DisplayName -like '*Yandex*')) {
                    $candidates += [string]$p.InstallLocation
                }
            }
        }
    }
    foreach ($c in $candidates) {
        if ($c -and (Test-Path (Join-Path $c 'resources\app.asar'))) { $InstallDir = $c; break }
    }
}
if (-not $InstallDir -or -not (Test-Path (Join-Path $InstallDir 'resources\app.asar'))) {
    Fail "Yandex Music install dir not found. Pass -InstallDir <path> (the folder that contains 'resources\app.asar')."
}
$Res = Join-Path $InstallDir 'resources'
$Asar = Join-Path $Res 'app.asar'
$Unp = Join-Path $Res 'app.asar.unpacked'
$Orig = Join-Path $Res 'app.asar.orig'
$OrigUnp = Join-Path $Res 'app.asar.unpacked.orig'
$OrigIntegrity = Join-Path $Res 'app.asar.orig.integrity'
Info ("install dir: " + $InstallDir)

# ---- main exe = largest *.exe in the install dir root ----------------------
$Exe = $null
$exeSize = 0
foreach ($f in (Get-ChildItem -Path $InstallDir -Filter '*.exe' -File -ErrorAction SilentlyContinue)) {
    if ($f.Length -gt $exeSize) { $exeSize = $f.Length; $Exe = $f.FullName }
}
if (-not $Exe) { Fail ("main exe not found in " + $InstallDir) }
Info ("main exe: " + $Exe)

# ---- read embedded asar integrity JSON -------------------------------------
$exeRaw = [IO.File]::ReadAllBytes($Exe)
if ($exeRaw.Length -gt 1500000000) { Fail "exe too large for 32-bit PowerShell, run a 64-bit shell" }
$exeStr = $Latin1.GetString($exeRaw)
$mi = $exeStr.IndexOf($Marker)
if ($mi -lt 0) { Fail "asar integrity marker not found in exe (unsupported client build?)" }
$start = $exeStr.LastIndexOf('[', $mi)
$end = $exeStr.IndexOf(']', $mi)
if ($start -lt 0 -or $end -lt 0) { Fail "integrity JSON bounds not found in exe" }
$json = $exeStr.Substring($start, $end - $start + 1)
$entry = $null
foreach ($e in ($json | ConvertFrom-Json)) {
    if ($e.file -eq 'resources\app.asar') { $entry = $e }
}
if (-not $entry) { Fail "integrity entry for resources\app.asar not found in exe" }
$OldHash = ([string]$entry.value).ToLower()
$exeStr = $null
$exeRaw = $null
Info ("current asar integrity hash: " + $OldHash)

function Stop-YmProcesses {
    if ($KeepRunning) { return }
    $procs = Get-Process -ErrorAction SilentlyContinue |
        Where-Object { $_.Path -and $_.Path.StartsWith($InstallDir, [StringComparison]::OrdinalIgnoreCase) }
    if ($procs) {
        $procs | Stop-Process -Force
        Start-Sleep -Seconds 2
    }
}

# In-place replace of the hash value inside the integrity JSON span.
# The new value is 64 hex chars like the old one, so byte length is preserved.
function Patch-ExeHash([string]$NewHash) {
    $raw = [IO.File]::ReadAllBytes($Exe)
    $s = $Latin1.GetString($raw)
    $i = $s.IndexOf($Marker)
    if ($i -lt 0) { Fail "asar integrity marker not found in exe" }
    $st = $s.LastIndexOf('[', $i)
    $en = $s.IndexOf(']', $i)
    if ($st -lt 0 -or $en -lt 0) { Fail "integrity JSON bounds not found in exe" }
    $j = $s.Substring($st, $en - $st + 1)
    $m = [regex]::Match($j, '"value"\s*:\s*"([0-9a-fA-F]{64})"')
    if (-not $m.Success) { Fail "hash field not found in integrity JSON" }
    $oldLit = $m.Value
    $newLit = '"value":"' + $NewHash.ToLower() + '"'
    if ($newLit.Length -ne $oldLit.Length) { Fail "integrity JSON length mismatch, refusing to patch" }
    $j2 = $j.Replace($oldLit, $newLit)
    $bytes = $Latin1.GetBytes($j2)
    $fs = [IO.File]::Open($Exe, 'Open', 'ReadWrite', 'None')
    try {
        $fs.Seek($st, 'Begin') | Out-Null
        $fs.Write($bytes, 0, $bytes.Length)
    } finally { $fs.Close() }
}

# ---- uninstall -------------------------------------------------------------
if ($Uninstall) {
    Info "rolling back to the original client"
    if (-not (Test-Path $Orig)) { Fail ("original backup not found: " + $Orig) }
    if (-not (Test-Path $OrigIntegrity)) { Fail ("original integrity hash not found: " + $OrigIntegrity + " - reinstall the Yandex Music client") }
    $RestoreHash = (Get-Content $OrigIntegrity -Raw).Trim()
    Stop-YmProcesses
    Copy-Item $Orig $Asar -Force
    if (Test-Path $OrigUnp) {
        if (Test-Path $Unp) { Remove-Item $Unp -Recurse -Force }
        Move-Item $OrigUnp $Unp
    } elseif (Test-Path $Unp) {
        Remove-Item $Unp -Recurse -Force
    }
    Patch-ExeHash $RestoreHash
    Info "done: client restored to the original state"
    exit 0
}

# ---- payload (dir named 5.1xx next to this script, one per package) --------
if (-not $Payload) {
    $found = @(Get-ChildItem -Path $PSScriptRoot -Directory -ErrorAction SilentlyContinue |
        Where-Object { $_.Name -match '^5\.\d{3}$' -and (Test-Path (Join-Path $_.FullName 'app.asar')) })
    if ($found.Count -eq 1) { $Payload = $found[0].Name }
    elseif ($found.Count -gt 1) { Fail ("multiple payload dirs (" + (($found | ForEach-Object { $_.Name }) -join ', ') + "), pass -Payload <dir>") }
}
if (-not $Payload) { Fail "payload dir not found next to this script (expected .\5.1xx\app.asar)" }
$PayloadName = $Payload
$PayloadDir = Join-Path $PSScriptRoot $Payload
$PayloadAsar = Join-Path $PayloadDir 'app.asar'
$PayloadUnpacked = Join-Path $PayloadDir 'app.asar.unpacked'
$PayloadManifest = Join-Path $PayloadDir 'manifest.json'
if (-not (Test-Path $PayloadAsar)) { Fail ("payload not found: " + $PayloadAsar + " (run this script from the unpacked mod package)") }
if (-not (Test-Path $PayloadUnpacked)) { Fail ("payload not found: " + $PayloadUnpacked) }
$manifest = Get-Content $PayloadManifest -Raw | ConvertFrom-Json
Info ("payload: " + $PayloadDir + " (" + $manifest.branch + ", ym " + $manifest.ymVersion + ")")

# ---- client version + mod state --------------------------------------------
$asarRaw = [IO.File]::ReadAllBytes($Asar)
$asarStr = $Latin1.GetString($asarRaw)
$IsMod = $asarStr.Contains('PulseSync')
# app version: root package.json anchor, then mod-only realYMVersion, then vanilla buildInfo bundle
$verMatch = [regex]::Match($asarStr, '"name":\s*"YandexMusic",\s*"version":\s*"(5\.\d+\.\d+)"')
if (-not $verMatch.Success) { $verMatch = [regex]::Match($asarStr, 'realYMVersion":\s*"(5\.\d+\.\d+)"') }
if (-not $verMatch.Success) { $verMatch = [regex]::Match($asarStr, 'VERSION:\s*"(5\.\d+\.\d+)"') }
$Ver = ''
if ($verMatch.Success) { $Ver = $verMatch.Groups[1].Value }
$asarStr = $null
$asarRaw = $null
if (-not $verMatch.Success) { Fail "cannot detect installed client version" }
Info ("client version: " + $Ver + ", state: " + $(if ($IsMod) { 'mod' } else { 'vanilla' }))
if ($Ver -notlike ($PayloadName + '.*')) {
    Fail ("client " + $Ver + " is not supported by this package (needs " + $PayloadName + ".x)")
}

# ---- backups (vanilla only, keep existing ones on update) ------------------
if (-not $IsMod) {
    if (Test-Path $Orig) {
        Info "existing original backup kept"
    } else {
        Copy-Item $Asar $Orig -Force
        Set-Content -Path $OrigIntegrity -Value $OldHash -NoNewline -Encoding Ascii
        if (Test-Path $Unp) { Move-Item $Unp $OrigUnp }
        Info "original backed up (app.asar.orig + integrity hash)"
    }
} elseif (-not (Test-Path $Orig)) {
    Info "mod already installed, no original backup present - update only, rollback will need a client reinstall"
}

# ---- install ---------------------------------------------------------------
Stop-YmProcesses
Copy-Item $PayloadAsar $Asar -Force
$sha = (Get-FileHash -Path $Asar -Algorithm SHA256).Hash.ToLower()
if ($sha -ne $manifest.asarFileSha256) { Fail ("app.asar sha256 mismatch after copy: " + $sha) }
if (Test-Path $Unp) { Remove-Item $Unp -Recurse -Force }
Copy-Item $PayloadUnpacked $Unp -Recurse -Force
Patch-ExeHash $manifest.asarHeaderSha256
Info ("done: mod installed (" + $(if ($IsMod) { 'mod -> mod' } else { 'vanilla -> mod' }) + ", " + $manifest.branch + ").")
Info ("rollback: powershell -NoProfile -ExecutionPolicy Bypass -File .\install-mod-windows.ps1 -Uninstall")

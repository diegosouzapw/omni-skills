# 🛡️ Security Validation and Distribution (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Säkerhetsskanning, arkivgenerering, valfri signering och distributionspaketering för alla publicerade färdigheter.**---

## 📊 Status

| Funktion | Stat |
|:--------|:------|
| ✅ Statisk säkerhetsskanner | Alltid aktiverad |
| ✅ Klassificering av metadata per färdighet | Implementerad |
| ✅ Arkiv per färdighet (zip/tar.gz) | Implementerad |
| ✅ SHA-256 kontrollsummanifest | Implementerad |
| ✅ CI-skannergrind på frigöringsetiketter | Implementerad |
| ✅ npm publicera arbetsflöde från verifierad tarball | Implementerad |
| ⚙️ ClamAV-skanning | Valfri berikare |
| ⚙️ VirusTotal hash-sökning | Valfri berikare |
| ✅ Fristående signering | Implementerad |
| ✅ CI-påtvingad signering | Implementerad på release-taggar |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Skannar alla färdigheter under validering:

| Mål | Vad som skannas |
|:-------|:------------------------|
| 📝 `SKILL.md` | Huvudsaklig färdighetsinnehåll |
| 📄 Markdown/textfiler | Paketerade referenser och dokument |
| ⚙️ Manus | Paketerade automatiseringsskript |

**Regelfamiljer:**

| Regel | Exempel |
|:-----|:--------|
| 🎭**Snabb injektion**| Exfiltrationsmönster, instruktioner åsidosätter |
| 💣**Destruktiva kommandon**| `rm -rf`, `format`, `del /s` |
| 🔑**Privilegeupptrappning**| `sudo`, `chmod 777`, setuid mönster |
| 📂**Suspekta vägar**| `/etc/shadow`, `~/.ssh`, autentiseringsfiler |
| ⚠️**Riskiga primitiver**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Kräver "clamscan" i "PATH".
- Söker igenom paketerade filer efter känd skadlig programvara
- Resultat registrerade i skicklighetsmetadata---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Endast hash-sökning**— ingen filuppladdning under normal validering
- Okända filer förblir endast lokala
- Håller bygget**deterministisk**och CI-oberoende### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Stric release gate:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Det här steget läser genererade `skills/*/metadata.json` och misslyckas om nödvändiga skannrar inte körde eller rapporterade upptäckter.---

## 📊 Security Output Shape

Säkerhetsdata sänds ut i alla färdigheters metadata:```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

> Det här blocket sprids till manifest och katalogvyer, vilket gör det möjligt för CLI, API och MCP att**filtrera och rangordna efter säkerhetspoäng**.---

## 📦 Archive Outputs

Varje publicerad färdighet genererar:

| Arkiv | Format |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP-arkiv |
| `dist/archives/<skill>.tar.gz` | Tarball arkiv |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrollsummanifest |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions släpper taggar (`v*`) nu:

1. verifiera att git-taggen matchar `package.json`
2. installera och uppdatera ClamAV
3. avkoda releasesigneringsnyckeln från GitHub-hemligheter
4. kör `npm run release:verify`
5. packa tarballen med `npm pack`
6. publicera den exakta tarballen till npm med härkomst
7. skapa en GitHub-version med anpassade anteckningar och bifogade verifieringstillgångar---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Om ingen publik nyckel tillhandahålls, härleder byggnaden en med `openssl` och placerar den i `dist/signing/`.

När det är aktiverat sänds `.sig`-filer bredvid arkiven och kontrollsummanifestet.

I CI kräver releasetaggar nu att du loggar in:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` eller `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- valfri `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` eller `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Begränsning | Status |
|:-----------|:-------|
| VirusTotal uppladdningssändning | Avsiktligt utesluten från standardvalidering |
| Undertecknande verkställighet | Tillämpas på frisläppande taggar; lokala byggen kan fortfarande köras osignerade |
| Värdstyrning | Inbyggd autentisering, administratörskörning, CORS/IP-godkännandelistor, underhållsläge och granskningsloggning är på plats; externa gateways förblir valfria |
# 🛡️ Security Validation and Distribution (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Pag-scan ng seguridad, pagbuo ng archive, opsyonal na pag-sign, at packaging ng pamamahagi para sa bawat na-publish na kasanayan.**---

## 📊 Status

| Tampok | Estado |
|:--------|:------|
| ✅ Static security scanner | Palaging pinagana |
| ✅ Pag-uuri ng metadata sa bawat kasanayan | Ipinatupad |
| ✅ Mga archive sa bawat kasanayan (zip/tar.gz) | Ipinatupad |
| ✅ SHA-256 checksum manifests | Ipinatupad |
| ✅ CI scanner gate sa mga release tag | Ipinatupad |
| ✅ npm publish workflow mula sa na-verify na tarball | Ipinatupad |
| ⚙️ Pag-scan ng ClamAV | Opsyonal na enricher |
| ⚙️ VirusTotal hash lookup | Opsyonal na enricher |
| ✅ Detached signing | Ipinatupad |
| ✅ CI-enforced signing | Ipinatupad sa mga tag ng release |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Ini-scan ang bawat kasanayan sa panahon ng pagpapatunay:

| Target | Ano ang Nai-scan |
|:-------|:-----------------|
| 📝 `KASANAYAN.md` | Pangunahing nilalaman ng kasanayan |
| 📄 Markdown/text files | Mga naka-package na sanggunian at mga dokumento |
| ⚙️ Mga Script | Mga naka-package na script ng automation |

**Mga pamilya ng panuntunan:**

| Panuntunan | Mga halimbawa |
|:-----|:---------|
| 🎭**Maagap na iniksyon**| Mga pattern ng exfiltration, override ng pagtuturo |
| 💣**Mga mapanirang utos**| `rm -rf`, `format`, `del /s` |
| 🔑**Pagtaas ng pribilehiyo**| `sudo`, `chmod 777`, mga setuid pattern |
| 📂**Mga kahina-hinalang landas**| `/etc/shadow`, `~/.ssh`, mga file ng kredensyal |
| ⚠️**Mapanganib na mga primitive**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Nangangailangan ng `clamscan` sa `PATH`
- Ini-scan ang mga naka-package na file para sa kilalang malware
- Mga resultang naitala sa metadata ng kasanayan---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Hash lookup lang**— walang pag-upload ng file sa panahon ng normal na pagpapatunay
- Ang mga hindi kilalang file ay mananatiling lokal lamang
- Pinapanatili ang build**deterministic**at CI-independent### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Mahigpit na gate ng paglabas:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Binabasa ng hakbang na ito ang mga nabuong `kasanayan/*/metadata.json` at nabigo kung ang mga kinakailangang scanner ay hindi nagsagawa o nag-ulat ng mga pagtuklas.---

## 📊 Security Output Shape

Ang data ng seguridad ay inilalabas sa bawat metadata ng kasanayan:```json
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

> Ang block na ito ay pinalaganap sa mga manifest at catalog view, na nagbibigay-daan sa CLI, API, at MCP na**mag-filter at mag-rank ayon sa marka ng seguridad**.---

## 📦 Archive Outputs

Ang bawat nai-publish na kasanayan ay bumubuo ng:

| File | Format |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP archive |
| `dist/archives/<skill>.tar.gz` | Tarball archive |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifest |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Mga tag na inilabas ng GitHub Actions (`v*`) ngayon:

1. i-verify na tumutugma ang git tag sa `package.json`
2. i-install at i-refresh ang ClamAV
3. i-decode ang release signing key mula sa mga lihim ng GitHub
4. patakbuhin ang `npm run release:verify`
5. i-package ang tarball ng `npm pack`
6. i-publish ang eksaktong tarball sa npm na may provenance
7. gumawa ng GitHub Release na may mga custom na tala at naka-attach na mga asset sa pag-verify---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Kung walang ibinigay na pampublikong key, ang build ay kukuha ng isa na may `openssl` at inilalagay ito sa `dist/signing/`.

Kapag pinagana, ang mga `.sig` na file ay ilalabas sa tabi ng mga archive at checksum manifest.

Sa CI, ang mga release tag ay nangangailangan na ngayon ng pag-sign sa pamamagitan ng:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` o `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- opsyonal na `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` o `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Limitasyon | Katayuan |
|:-----------|:-------|
| Pagsusumite ng pag-upload ng VirusTotal | Sinadyang ibinukod mula sa default na pagpapatunay |
| Paglagda sa pagpapatupad | Ipinapatupad sa mga tag ng release; ang mga lokal na build ay maaari pa ring tumakbo nang hindi nalagdaan |
| Naka-host na pamamahala | Ang built-in na auth, admin runtime, CORS/IP allowlists, maintenance mode, at audit logging ay nasa lugar; nananatiling opsyonal ang mga panlabas na gateway |
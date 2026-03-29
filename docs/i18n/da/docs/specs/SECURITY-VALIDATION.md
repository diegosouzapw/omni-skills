# 🛡️ Security Validation and Distribution (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Sikkerhedsscanning, arkivgenerering, valgfri signering og distributionsemballage for hver publiceret færdighed.**---

## 📊 Status

| Funktion | Stat |
|:--------|:------|
| ✅ Statisk sikkerhedsscanner | Altid aktiveret |
| ✅ Klassificering af metadata pr. færdighed | Implementeret |
| ✅ Per-skill arkiver (zip/tar.gz) | Implementeret |
| ✅ SHA-256 kontrolsummanifester | Implementeret |
| ✅ CI-scannerport på frigivelsesmærker | Implementeret |
| ✅ npm udgiver arbejdsgang fra verificeret tarball | Implementeret |
| ⚙️ ClamAV-scanning | Valgfri beriger |
| ⚙️ VirusTotal hash opslag | Valgfri beriger |
| ✅ Fritliggende signering | Implementeret |
| ✅ CI-håndhævet signering | Implementeret på release tags |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Scanner alle færdigheder under validering:

| Mål | Hvad bliver scannet |
|:-------|:------------------------|
| 📝 `SKILL.md` | Vigtigste færdighedsindhold |
| 📄 Markdown/tekstfiler | Pakkede referencer og dokumenter |
| ⚙️ Scripts | Pakkede automatiseringsscripts |

**Regelfamilier:**

| Regel | Eksempler |
|:-----|:--------|
| 🎭**Prompt indsprøjtning**| Eksfiltrationsmønstre, instruktionstilsidesættelser |
| 💣**Destruktive kommandoer**| `rm -rf`, `format`, `del /s` |
| 🔑**Privilegeeskalering**| `sudo`, `chmod 777`, setuid mønstre |
| 📂**Suspekte stier**| `/etc/shadow`, `~/.ssh`, legitimationsfiler |
| ⚠️**Risikable primitiver**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Kræver "clamscan" i "PATH".
- Scanner pakkede filer for kendt malware
- Resultater registreret i færdighedsmetadata---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Kun Hash-opslag**- ingen filupload under normal validering
- Ukendte filer forbliver kun lokale
- Holder bygningen**deterministisk**og CI-uafhængig### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Strenge frigivelsesåbning:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Dette trin læser genererede `skills/*/metadata.json` og mislykkes, hvis påkrævede scannere ikke udførte eller rapporterede detektioner.---

## 📊 Security Output Shape

Sikkerhedsdata udsendes i hver færdigheds metadata:```json
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

> Denne blok udbredes til manifester og katalogvisninger, hvilket gør det muligt for CLI, API og MCP at**filtrere og rangere efter sikkerhedsscore**.---

## 📦 Archive Outputs

Hver offentliggjort færdighed genererer:

| Fil | Format |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP-arkiv |
| `dist/archives/<skill>.tar.gz` | Tarball arkiv |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrolsummanifest |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions frigiver tags (`v*`) nu:

1. bekræft, at git-tagget matcher `package.json`
2. Installer og opdater ClamAV
3. afkode frigivelsessigneringsnøglen fra GitHub-hemmeligheder
4. kør `npm run release:verify`
5. pak tarballen med `npm pack`
6. offentliggør den nøjagtige tarball til npm med herkomst
7. Opret en GitHub-udgivelse med brugerdefinerede noter og vedhæftede bekræftelsesaktiver---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Hvis der ikke er angivet en offentlig nøgle, udleder buildet en med `openssl` og placerer den i `dist/signing/`.

Når det er aktiveret, udsendes `.sig`-filer ved siden af ​​arkiverne og kontrolsummanifestet.

I CI kræver udgivelsestags nu at logge ind:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` eller `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- valgfri `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` eller `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Begrænsning | Status |
|:-----------|:-------|
| VirusTotal upload indsendelse | Med vilje udelukket fra standardvalidering |
| Underskriftshåndhævelse | Håndhæves på frigivelsesmærker; lokale builds kan stadig køre usigneret |
| Hosted governance | Indbygget godkendelse, admin runtime, CORS/IP-tilladelseslister, vedligeholdelsestilstand og revisionslogning er på plads; eksterne gateways forbliver valgfrie |
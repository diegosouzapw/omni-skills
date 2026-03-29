# 🛡️ Security Validation and Distribution (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Sikkerhetsskanning, arkivgenerering, valgfri signering og distribusjonspakking for alle publiserte ferdigheter.**---

## 📊 Status

| Funksjon | Stat |
|:--------|:------|
| ✅ Statisk sikkerhetsskanner | Alltid aktivert |
| ✅ Klassifisering av metadata per ferdighet | Implementert |
| ✅ Per-ferdighetsarkiver (zip/tar.gz) | Implementert |
| ✅ SHA-256 kontrollsummanifester | Implementert |
| ✅ CI-skannerport på utløserbrikker | Implementert |
| ✅ npm publiser arbeidsflyt fra verifisert tarball | Implementert |
| ⚙️ ClamAV-skanning | Valgfri beriker |
| ⚙️ VirusTotal hash-oppslag | Valgfri beriker |
| ✅ Frittliggende signering | Implementert |
| ✅ CI-håndhevet signering | Implementert på utgivelsesetiketter |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Skanner alle ferdigheter under validering:

| Mål | Hva blir skannet |
|:-------|:------------------------|
| 📝 `SKILL.md` | Hovedkompetanseinnhold |
| 📄 Markdown/tekstfiler | Pakkede referanser og dokumenter |
| ⚙️ Manus | Pakkede automatiseringsskript |

**Regelfamilier:**

| Regel | Eksempler |
|:-----|:--------|
| 🎭**Rask injeksjon**| Eksfiltrasjonsmønstre, instruksjonsoverstyringer |
| 💣**Destruktive kommandoer**| `rm -rf`, `format`, `del /s` |
| 🔑**Privilege-eskalering**| `sudo`, `chmod 777`, setuid mønstre |
| 📂**Mistenkelige stier**| `/etc/shadow`, `~/.ssh`, legitimasjonsfiler |
| ⚠️**Risikable primitiver**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Krever `clamscan` i `PATH`
- Skanner pakkede filer for kjent skadelig programvare
- Resultater registrert i ferdighetsmetadata---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Bare hash-oppslag**— ingen filopplasting under normal validering
- Ukjente filer forblir kun lokale
- Holder bygget**deterministisk**og CI-uavhengig### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Strenge utløserport:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Dette trinnet leser genererte `skills/*/metadata.json` og mislykkes hvis nødvendige skannere ikke utførte eller rapporterte deteksjoner.---

## 📊 Security Output Shape

Sikkerhetsdata sendes ut i metadataene til hver ferdighet:```json
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

> Denne blokken spres til manifester og katalogvisninger, noe som gjør det mulig for CLI, API og MCP å**filtrere og rangere etter sikkerhetspoeng**.---

## 📦 Archive Outputs

Hver publisert ferdighet genererer:

| Fil | Format |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP-arkiv |
| `dist/archives/<skill>.tar.gz` | Tarball-arkiv |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrollsummanifest |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions slipper tagger (`v*`) nå:

1. bekreft git-taggen samsvarer med `package.json`
2. installer og oppdater ClamAV
3. dekode utgivelsessigneringsnøkkelen fra GitHub-hemmelighetene
4. kjør `npm run release:verify`
5. pakk tarballen med `npm pack`
6. publiser den nøyaktige tarballen til npm med herkomst
7. Lag en GitHub-utgivelse med tilpassede notater og vedlagte bekreftelsesressurser---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Hvis ingen offentlig nøkkel er gitt, utleder bygningen en med `openssl` og plasserer den i `dist/signing/`.

Når aktivert, sendes `.sig`-filer ved siden av arkivene og kontrollsummanifestet.

I CI krever utgivelsesetiketter nå pålogging:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` eller `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- valgfri `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` eller `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Begrensning | Status |
|:-----------|:-------|
| VirusTotal opplastingssending | Med vilje ekskludert fra standardvalidering |
| Signeringshåndhevelse | Håndheves på utgivelsesetiketter; lokale bygg kan fortsatt kjøre usignert |
| Hosted governance | Innebygd autentisering, admin kjøretid, CORS/IP-godkjenningslister, vedlikeholdsmodus og revisjonslogging er på plass; eksterne gatewayer forblir valgfrie |
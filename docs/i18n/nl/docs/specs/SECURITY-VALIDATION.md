# 🛡️ Security Validation and Distribution (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Beveiligingsscannen, archief genereren, optionele ondertekening en distributiepakket voor elke gepubliceerde vaardigheid.**---

## 📊 Status

| Kenmerk | Staat |
|:--------|:------|
| ✅ Statische beveiligingsscanner | Altijd ingeschakeld |
| ✅ Metagegevensclassificatie per vaardigheid | Geïmplementeerd |
| ✅ Archieven per vaardigheid (zip/tar.gz) | Geïmplementeerd |
| ✅ SHA-256 checksum-manifesten | Geïmplementeerd |
| ✅ CI-scannerpoort op release-tags | Geïmplementeerd |
| ✅ npm publicatieworkflow van geverifieerde tarball | Geïmplementeerd |
| ⚙️ClamAV-scannen | Optionele verrijker |
| ⚙️ VirusTotal hash opzoeken | Optionele verrijker |
| ✅ Vrijstaande signeersessie | Geïmplementeerd |
| ✅ CI-afgedwongen ondertekening | Geïmplementeerd op releasetags |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Scant elke vaardigheid tijdens validatie:

| Doel | Wat wordt gescand |
|:-------|:-----------------|
| 📝 `SKILL.md` | Belangrijkste vaardigheidsinhoud |
| 📄 Markdown/tekstbestanden | Verpakte referenties en documenten |
| ⚙️Scripties | Verpakte automatiseringsscripts |

**Regelfamilies:**

| Regel | Voorbeelden |
|:-----|:---------|
| 🎭**Snelle injectie**| Exfiltratiepatronen, instructieoverschrijvingen |
| 💣**Destructieve commando's**| `rm -rf`, `format`, `del /s` |
| 🔑**Escalatie van privileges**| `sudo`, `chmod 777`, setuid-patronen |
| 📂**Verdachte paden**| `/etc/shadow`, `~/.ssh`, referentiebestanden |
| ⚠️**Risicovolle primitieven**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Vereist `clamscan` in `PATH`
- Scant verpakte bestanden op bekende malware
- Resultaten vastgelegd in metadata van vaardigheden---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Alleen hash opzoeken**— geen bestandsupload tijdens normale validatie
- Onbekende bestanden blijven alleen lokaal
- Houdt de build**deterministisch**en CI-onafhankelijk### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Strikte vrijgavepoort:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Deze stap leest de gegenereerde `skills/*/metadata.json` en mislukt als de vereiste scanners geen detecties hebben uitgevoerd of gerapporteerd.---

## 📊 Security Output Shape

Beveiligingsgegevens worden verzonden in de metadata van elke vaardigheid:```json
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

> Dit blok wordt doorgevoerd in manifesten en catalogusweergaven, waardoor CLI, API en MCP kunnen**filteren en rangschikken op beveiligingsscore**.---

## 📦 Archive Outputs

Elke gepubliceerde vaardigheid genereert:

| Bestand | Formaat |
|:-----|:-------|
| `dist/archives/<vaardigheid>.zip` | ZIP-archief |
| `dist/archives/<skill>.tar.gz` | Tarball-archief |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum-manifest |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions geeft nu tags (`v*`) vrij:

1. Controleer of de git-tag overeenkomt met `package.json`
2. installeer en vernieuw ClamAV
3. decodeer de release-ondertekeningssleutel uit GitHub-geheimen
4. voer `npm run release:verify` uit
5. verpak de tarball met `npm pack`
6. publiceer dat exacte tarball naar npm met herkomst
7. maak een GitHub-release met aangepaste notities en bijgevoegde verificatiemiddelen---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Als er geen publieke sleutel is opgegeven, leidt de build er een af ​​met `openssl` en plaatst deze in `dist/signing/`.

Wanneer ingeschakeld, worden `.sig`-bestanden verzonden naast de archieven en het checksum-manifest.

In CI vereisen releasetags nu ondertekening:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` of `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- optioneel `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` of `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Beperking | Staat |
|:-----------|:-------|
| VirusTotal uploadinzending | Opzettelijk uitgesloten van standaardvalidatie |
| Handhaving ondertekenen | Afgedwongen op release-tags; lokale builds kunnen nog steeds niet-ondertekend worden uitgevoerd |
| Gehost bestuur | Ingebouwde authenticatie, admin runtime, CORS/IP-toelatingslijsten, onderhoudsmodus en auditlogboekregistratie zijn aanwezig; externe gateways blijven optioneel |
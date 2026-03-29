# 🛡️ Security Validation and Distribution (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Sicherheitsscan, Archiverstellung, optionales Signieren und Verteilungspaketierung für jeden veröffentlichten Skill.**---

## 📊 Status

| Funktion | Staat |
|:--------|:------|
| ✅ Statischer Sicherheitsscanner | Immer aktiviert |
| ✅ Metadatenklassifizierung pro Fähigkeit | Implementiert |
| ✅ Pro-Skill-Archive (zip/tar.gz) | Implementiert |
| ✅ SHA-256-Prüfsummenmanifeste | Implementiert |
| ✅ CI-Scanner-Gate auf Freigabeetiketten | Implementiert |
| ✅ NPM-Veröffentlichungsworkflow aus verifiziertem Tarball | Implementiert |
| ⚙️ ClamAV-Scannen | Optionaler Anreicherer |
| ⚙️ VirusTotal-Hash-Suche | Optionaler Anreicherer |
| ✅ Freistehende Signierung | Implementiert |
| ✅ CI-erzwungene Signatur | Auf Release-Tags implementiert |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Scannt jeden Skill während der Validierung:

| Ziel | Was gescannt wird |
|:-------|:-----------------|
| 📝 `SKILL.md` | Hauptkompetenzinhalte |
| 📄 Markdown/Textdateien | Verpackte Referenzen und Dokumente |
| ⚙️ Skripte | Verpackte Automatisierungsskripte |

**Regelfamilien:**

| Regel | Beispiele |
|:-----|:---------|
| 🎭**Sofortige Injektion**| Exfiltrationsmuster, Befehlsüberschreibungen |
| 💣**Zerstörerische Befehle**| `rm -rf`, `format`, `del /s` |
| 🔑**Privilegieneskalation**| „sudo“, „chmod 777“, setuid-Muster |
| 📂**Verdächtige Pfade**| `/etc/shadow`, `~/.ssh`, Anmeldeinformationsdateien |
| ⚠️**Riskante Grundelemente**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Erfordert „clamscan“ in „PATH“.
- Scannt verpackte Dateien auf bekannte Malware
- Ergebnisse werden in Skill-Metadaten aufgezeichnet---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Nur Hash-Suche**– kein Datei-Upload während der normalen Validierung
- Unbekannte Dateien bleiben nur lokal
- Hält den Build**deterministisch**und CI-unabhängig### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Strenges Release-Gate:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Dieser Schritt liest die generierte Datei „skills/*/metadata.json“ und schlägt fehl, wenn erforderliche Scanner keine Erkennungen ausgeführt oder gemeldet haben.---

## 📊 Security Output Shape

Sicherheitsdaten werden in den Metadaten jedes Skills ausgegeben:```json
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

> Dieser Block wird in Manifesten und Katalogansichten weitergegeben und ermöglicht es CLI, API und MCP,**nach Sicherheitsbewertung zu filtern und zu bewerten**.---

## 📦 Archive Outputs

Jeder veröffentlichte Skill generiert:

| Datei | Formatieren |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP-Archiv |
| `dist/archives/<skill>.tar.gz` | Tarball-Archiv |
| `dist/archives/<skill>.checksums.txt` | SHA-256-Prüfsummenmanifest |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions veröffentlichen jetzt Tags (`v*`):

1. Überprüfen Sie, ob das Git-Tag mit „package.json“ übereinstimmt
2. ClamAV installieren und aktualisieren
3. Entschlüsseln Sie den Release-Signaturschlüssel aus den GitHub-Geheimnissen
4. Führen Sie „npm run release:verify“ aus
5. Verpacken Sie den Tarball mit „npm pack“.
6. Veröffentlichen Sie genau diesen Tarball mit Herkunft in npm
7. Erstellen Sie eine GitHub-Version mit benutzerdefinierten Notizen und angehängten Verifizierungsressourcen---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Wenn kein öffentlicher Schlüssel bereitgestellt wird, leitet der Build einen mit „openssl“ ab und platziert ihn in „dist/signing/“.

Wenn diese Option aktiviert ist, werden „.sig“-Dateien neben den Archiven und dem Prüfsummenmanifest ausgegeben.

In CI erfordern Release-Tags jetzt eine Signierung durch:

- „OMNI_SKILLS_SIGN_PRIVATE_KEY_B64“ oder „OMNI_SKILLS_SIGN_PRIVATE_KEY“.
- optional „OMNI_SKILLS_SIGN_PUBLIC_KEY_B64“ oder „OMNI_SKILLS_SIGN_PUBLIC_KEY“.---

## ⚠️ Current Limitations

| Einschränkung | Status |
|:-----------|:-------|
| VirusTotal-Upload-Einreichung | Absichtlich von der Standardvalidierung ausgeschlossen |
| Unterzeichnungsdurchsetzung | Wird bei Release-Tags erzwungen; Lokale Builds können weiterhin unsigniert ausgeführt werden |
| Gehostete Governance | Integrierte Authentifizierung, Admin-Runtime, CORS/IP-Zulassungslisten, Wartungsmodus und Audit-Protokollierung sind vorhanden; Externe Gateways bleiben optional |
# 🛡️ Security Validation and Distribution (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Scansione di sicurezza, generazione di archivi, firma opzionale e pacchetti di distribuzione per ogni competenza pubblicata.**---

## 📊 Status

| Caratteristica | Stato |
|:--------|:------|
| ✅ Scanner di sicurezza statico | Sempre abilitato |
| ✅ Classificazione dei metadati per competenza | Implementato |
| ✅ Archivi per competenza (zip/tar.gz) | Implementato |
| ✅ Manifesta checksum SHA-256 | Implementato |
| ✅ Cancello scanner CI sui tag di rilascio | Implementato |
| ✅ npm pubblica il flusso di lavoro dal tarball verificato | Implementato |
| ⚙️ Scansione ClamAV | Arricchitore opzionale |
| ⚙️ Ricerca hash VirusTotal | Arricchitore opzionale |
| ✅ Firma distaccata | Implementato |
| ✅ Firma forzata CI | Implementato nei tag di rilascio |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Esamina ogni abilità durante la convalida:

| Obiettivo | Cosa viene scansionato |
|:-------|:-----------------|
| 📝 `SKILL.md` | Contenuto delle competenze principali |
| 📄 File di testo/markdown | Riferimenti e documenti confezionati |
| ⚙️ Script | Script di automazione confezionati |

**Famiglie governanti:**

| Regola | Esempi |
|:-----|:---------|
| 🎭**Iniezione pronta**| Modelli di esfiltrazione, sovrascritture delle istruzioni |
| 💣**Comandi distruttivi**| `rm -rf`, `format`, `del /s` |
| 🔑**Escalation dei privilegi**| `sudo`, `chmod 777`, modelli setuid |
| 📂**Percorsi sospetti**| `/etc/shadow`, `~/.ssh`, file delle credenziali |
| ⚠️**Primitivi rischiosi**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Richiede "clamscan" in "PATH".
- Esegue la scansione dei file confezionati alla ricerca di malware noto
- Risultati registrati nei metadati delle competenze---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Solo ricerca hash**: nessun caricamento di file durante la normale convalida
- I file sconosciuti rimangono solo locali
- Mantiene la build**deterministica**e indipendente dall'CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Cancello di rilascio rigoroso:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Questo passaggio legge `skills/*/metadata.json` generato e fallisce se gli scanner richiesti non hanno eseguito o segnalato rilevamenti.---

## 📊 Security Output Shape

I dati sulla sicurezza vengono emessi nei metadati di ogni competenza:```json
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

> Questo blocco viene propagato nei manifest e nelle visualizzazioni del catalogo, consentendo a CLI, API e MCP di**filtrare e classificare in base al punteggio di sicurezza**.---

## 📦 Archive Outputs

Ogni competenza pubblicata genera:

| File | Formato |
|:-----|:-------|
| `dist/archives/<competenza>.zip` | Archivio ZIP |
| `dist/archives/<abilità>.tar.gz` | Archivio tarball |
| `dist/archives/<competenza>.checksums.txt` | Manifesto del checksum SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Tag di rilascio di GitHub Actions (`v*`) ora:

1. verifica che il tag git corrisponda a "package.json".
2. installa e aggiorna ClamAV
3. decodificare la chiave di firma del rilascio dai segreti di GitHub
4. eseguire `npm run release:verify`
5. pacchettizzare il tarball con `npm pack`
6. pubblicare l'esatto tarball su npm con provenienza
7. creare una versione GitHub con note personalizzate e risorse di verifica allegate---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Se non viene fornita alcuna chiave pubblica, la build ne deriva una con `openssl` e la inserisce in `dist/signing/`.

Quando abilitato, i file `.sig` vengono emessi accanto agli archivi e al manifest del checksum.

In CI, i tag di rilascio ora richiedono la firma:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` o `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- opzionale `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` o `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Limitazione | Stato |
|:-----------|:-------|
| Invio caricamento VirusTotal | Escluso intenzionalmente dalla convalida predefinita |
| Esecuzione della firma | Applicato ai tag di rilascio; le build locali possono ancora essere eseguite senza segno |
| Governance ospitata | Sono presenti l'autenticazione integrata, il runtime di amministrazione, le liste consentite CORS/IP, la modalità di manutenzione e la registrazione di controllo; i gateway esterni rimangono facoltativi |
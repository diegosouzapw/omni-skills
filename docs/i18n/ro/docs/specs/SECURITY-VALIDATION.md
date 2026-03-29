# 🛡️ Security Validation and Distribution (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Scanare de securitate, generare de arhive, semnare opțională și pachet de distribuție pentru fiecare abilitate publicată.**---

## 📊 Status

| Caracteristica | Stat |
|:--------|:------|
| ✅ Scanner de securitate static | Întotdeauna activat |
| ✅ Clasificarea metadatelor pe abilitate | Implementat |
| ✅ Arhive pe abilitate (zip/tar.gz) | Implementat |
| ✅ Manifeste suma de control SHA-256 | Implementat |
| ✅ Poarta scanerului CI pe etichetele de eliberare | Implementat |
| ✅ npm publică fluxul de lucru din tarball verificat | Implementat |
| ⚙️ Scanare ClamAV | Îmbogățitor opțional |
| ⚙️ Căutare hash VirusTotal | Îmbogățitor opțional |
| ✅ Semnarea detașată | Implementat |
| ✅ Semnarea impusă de CI | Implementat pe etichetele de lansare |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Scanează fiecare abilitate în timpul validării:

| Țintă | Ce este scanat |
|:-------|:-----------------|
| 📝 `SKILL.md` | Conținutul principal de competențe |
| 📄 Markdown/fișiere text | Referințe și documente împachetate |
| ⚙️ Scripturi | Scripturi de automatizare ambalate |

**Familii de reguli:**

| Regula | Exemple |
|:-----|:---------|
| 🎭**Injectare promptă**| Modele de exfiltrare, înlocuiri de instrucțiuni |
| 💣**Comenzi distructive**| `rm -rf`, `format`, `del /s` |
| 🔑**Escaladare a privilegiilor**| `sudo`, `chmod 777`, modele setuid |
| 📂**Căi suspecte**| `/etc/shadow`, `~/.ssh`, fișiere de acreditări |
| ⚠️**Primitivi riscante**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Necesită `clamscan` în `PATH`
- Scanează fișierele ambalate pentru malware cunoscut
- Rezultate înregistrate în metadatele abilităților---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Numai căutarea hash**— nu se încarcă fișiere în timpul validării normale
- Fișierele necunoscute rămân doar locale
- Menține construcția**deterministă**și independentă de CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Poarta de eliberare stricta:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Acest pas citește `skills/*/metadata.json` generat și nu reușește dacă scanerele necesare nu au executat sau au raportat detectări.---

## 📊 Security Output Shape

Datele de securitate sunt emise în metadatele fiecărei aptitudini:```json
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

> Acest bloc este propagat în manifeste și vizualizări de catalog, permițând CLI, API și MCP să**filtreze și să clasifice după scorul de securitate**.---

## 📦 Archive Outputs

Fiecare abilitate publicată generează:

| Fișier | Format |
|:-----|:-------|
| `dist/archives/<skill>.zip` | Arhiva ZIP |
| `dist/archives/<skill>.tar.gz` | Arhiva Tarball |
| `dist/archives/<skill>.checksums.txt` | Manifestul sumei de control SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actions lansează etichete (`v*`) acum:

1. verificați că eticheta git se potrivește cu `package.json`
2. instalați și reîmprospătați ClamAV
3. decodați cheia de semnare a eliberării din secretele GitHub
4. rulați `npm run release:verify`
5. împachetați tarball-ul cu `npm pack`
6. publicați acel tarball exact la npm cu proveniența
7. creați o versiune GitHub cu note personalizate și elemente de verificare atașate---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Dacă nu este furnizată nicio cheie publică, construcția derivă una cu `openssl` și o plasează în `dist/signing/`.

Când este activat, fișierele `.sig` sunt emise lângă arhive și manifestul sumei de control.

În CI, etichetele de lansare necesită acum conectarea prin:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` sau `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- opțional `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` sau `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Limitare | Stare |
|:------------|:-------|
| VirusTotal trimitere încărcare | Exclus intenționat de la validarea implicită |
| Semnarea executării | Aplicat pe etichetele de eliberare; build-urile locale pot rula în continuare nesemnate |
| Guvernare găzduită | Autentificarea încorporată, timpul de execuție admin, listele de permise CORS/IP, modul de întreținere și înregistrarea de audit sunt în vigoare; gateway-urile externe rămân opționale |
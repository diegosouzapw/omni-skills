# 🛡️ Security Validation and Distribution (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Bezpečnostné skenovanie, generovanie archívov, voliteľné podpisovanie a distribučné balenie pre každú publikovanú zručnosť.**---

## 📊 Status

| Funkcia | Štát |
|:--------|:------|
| ✅ Statický bezpečnostný skener | Vždy povolené |
| ✅ Klasifikácia metadát podľa zručností | Realizované |
| ✅ Archívy jednotlivých zručností (zip/tar.gz) | Realizované |
| ✅ Manifesty kontrolného súčtu SHA-256 | Realizované |
| ✅ Brána skenera CI na štítkoch uvoľnenia | Realizované |
| ✅ npm publikujte pracovný postup z overeného tarballu | Realizované |
| ⚙️ Skenovanie ClamAV | Voliteľný obohacovač |
| ⚙️ VirusTotal hash search | Voliteľný obohacovač |
| ✅ Samostatný podpis | Realizované |
| ✅ Podpisovanie vynútené CI | Implementované na uvoľňovacích značkách |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Skenuje každú zručnosť počas overovania:

| Cieľ | Čo sa skenuje |
|:-------|:-----------------|
| 📝 `SKILL.md` | Obsah hlavnej zručnosti |
| 📄 Markdown/textové súbory | Zabalené referencie a dokumenty |
| ⚙️ Skriptá | Zabalené automatizačné skripty |

**Vládne rodiny:**

| Pravidlo | Príklady |
|:-----|:---------|
| 🎭**Rýchla injekcia**| Vzory exfiltrácie, potlačenie pokynov |
| 💣**Deštruktívne príkazy**| `rm -rf`, `format`, `del /s` |
| 🔑**Eskalácia privilégií**| `sudo`, `chmod 777`, vzory setuid |
| 📂**Podozrivé cesty**| `/etc/shadow`, `~/.ssh`, súbory poverení |
| ⚠️**Rizikové primitívy**| `shell=True`, `pickle.load`, `eval`, `extrahall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

– Vyžaduje „clamscan“ v „PATH“.
- Kontroluje zabalené súbory na výskyt známeho škodlivého softvéru
- Výsledky zaznamenané v metadátach zručností---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Len vyhľadávanie hash**– počas normálneho overovania sa súbor nenahráva
- Neznáme súbory zostávajú iba lokálne
- Udržuje zostavenie**deterministické**a nezávislé od CI### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Prísna uvoľňovacia brána:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Tento krok prečíta vygenerovaný súbor `skills/*/metadata.json` a zlyhá, ak sa požadované skenery nevykonajú alebo nahlásia zistenia.---

## 📊 Security Output Shape

Bezpečnostné údaje sa vydávajú v metadátach každej zručnosti:```json
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

> Tento blok sa šíri do manifestov a zobrazení katalógu, čo umožňuje CLI, API a MCP**filtrovať a hodnotiť podľa bezpečnostného skóre**.---

## 📦 Archive Outputs

Každá zverejnená zručnosť generuje:

| Súbor | Formát |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP archív |
| `dist/archives/<skill>.tar.gz` | Archív Tarball |
| `dist/archives/<skill>.checksums.txt` | Manifest kontrolného súčtu SHA-256 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

Značky vydania GitHub Actions (`v*`) teraz:

1. overte, či sa značka git zhoduje s `package.json`
2. nainštalujte a obnovte ClamAV
3. dekódujte podpisový kľúč vydania z tajomstiev GitHub
4. spustite `npm run release:verify`
5. zabaľte tarball pomocou `npm pack`
6. zverejnite presne ten tarball na npm s provenienciou
7. vytvorte vydanie GitHub s vlastnými poznámkami a pripojenými verifikačnými prostriedkami---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Ak nie je poskytnutý žiadny verejný kľúč, zostava ho odvodí s `openssl` a umiestni ho do `dist/signing/`.

Keď je táto možnosť povolená, súbory `.sig` sa vydávajú vedľa archívov a manifestu kontrolného súčtu.

V CI si značky vydania teraz vyžadujú prihlásenie cez:

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` alebo `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- voliteľné `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` alebo `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| Obmedzenie | Stav |
|:-----------|:-------|
| VirusTotal upload upload | Zámerne vylúčené z predvoleného overenia |
| Presadzovanie podpisu | Vynútené na uvoľňovacích značkách; lokálne zostavy môžu stále bežať nepodpísané |
| Hostiteľské riadenie | Zabudované auth, admin runtime, CORS/IP povolené zoznamy, režim údržby a protokolovanie auditu sú na mieste; externé brány zostávajú voliteľné |
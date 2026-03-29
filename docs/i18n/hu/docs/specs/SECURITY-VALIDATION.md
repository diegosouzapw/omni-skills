# 🛡️ Security Validation and Distribution (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Biztonsági szkennelés, archívum létrehozása, opcionális aláírás és terjesztési csomagolás minden közzétett készséghez.**---

## 📊 Status

| Funkció | állam |
|:--------|:------|
| ✅ Statikus biztonsági szkenner | Mindig engedélyezve |
| ✅ Képességenkénti metaadat besorolás | Megvalósítva |
| ✅ Képességenkénti archívum (zip/tar.gz) | Megvalósítva |
| ✅ SHA-256 ellenőrzőösszeg jegyzék | Megvalósítva |
| ✅ CI szkenner kapu kioldó címkéken | Megvalósítva |
| ✅ npm munkafolyamat közzététele ellenőrzött tarballból | Megvalósítva |
| ⚙️ ClamAV szkennelés | Opcionális dúsító |
| ⚙️ VirusTotal hash keresés | Opcionális dúsító |
| ✅ Leválasztott aláírás | Megvalósítva |
| ✅ CI által kikényszerített aláírás | Kiadási címkéken megvalósítva |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Az érvényesítés során minden készséget megvizsgál:

| Cél | Mi kerül beolvasásra |
|:-------|:------------------|
| 📝 `SKILL.md` | Fő készségtartalom |
| 📄 Markdown/szöveges fájlok | Csomagolt referenciák és dokumentumok |
| ⚙️ Scripts | Csomagolt automatizálási szkriptek |

**Szabálycsaládok:**

| szabály | Példák |
|:-----|:---------|
| 🎭**Azonnali injekció**| Kiszűrési minták, utasítások felülbírálása |
| 💣**Romboló parancsok**| "rm -rf", "formátum", "del /s" |
| 🔑**Privilégiumok kiterjesztése**| `sudo`, `chmod 777`, setuid minták |
| 📂**Gyanús utak**| `/etc/shadow`, `~/.ssh`, hitelesítő adatok |
| ⚠️**Kockázatos primitívek**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Szükséges a `camscan` a `PATH'-ban
- Ellenőrzi a csomagolt fájlokat ismert rosszindulatú programok után
- Az eredmények a készség metaadatai között vannak rögzítve---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Csak kivonatkeresés**— a normál érvényesítés során nincs fájlfeltöltés
- Az ismeretlen fájlok csak helyi maradnak
- A build**determinisztikus**és CI-független marad### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Szigorú kioldási kapu:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Ez a lépés beolvassa a generált "skills/*/metadata.json" fájlt, és meghiúsul, ha a szükséges szkennerek nem hajtottak végre vagy nem jelentettek észleléseket.---

## 📊 Security Output Shape

A biztonsági adatok minden készség metaadataiban megjelennek:```json
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

> Ez a blokk jegyzékekbe és katalógusnézetekbe kerül, lehetővé téve a CLI, API és MCP**szűrését és rangsorolását a biztonsági pontszám alapján**.---

## 📦 Archive Outputs

Minden közzétett képesség a következőket generálja:

| Fájl | Formátum |
|:-----|:-------|
| `dist/archives/<skill>.zip` | ZIP archívum |
| `dist/archives/<skill>.tar.gz` | Tarball archívum |
| `dist/archives/<skill>.checksums.txt` | SHA-256 ellenőrzőösszeg jegyzék |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

A GitHub Actions kiadási címkéi (`v*`) most:

1. ellenőrizze, hogy a git címke egyezik-e a "package.json" fájllal
2. telepítse és frissítse a ClamAV-ot
3. dekódolja a kiadási aláíró kulcsot a GitHub titkaiból
4. futtassa az `npm run release:verify' parancsot
5. csomagolja be a tarballt `npm pack`-mal
6. Tegye közzé ezt a pontos tarballt az npm-en származással
7. Hozzon létre egy GitHub-kiadást egyéni megjegyzésekkel és csatolt ellenőrző eszközökkel---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Ha nincs megadva nyilvános kulcs, a build levezet egyet az `openssl`-el, és a `dist/signing/` mappába helyezi.

Ha engedélyezve van, a „.sig” fájlok az archívum és az ellenőrzőösszeg jegyzéke mellett jelennek meg.

A CI-ben a kiadási címkékhez a következőn keresztül kell aláírni:

- "OMNI_SKILLS_SIGN_PRIVATE_KEY_B64" vagy "OMNI_SKILLS_SIGN_PRIVATE_KEY"
- opcionális "OMNI_SKILLS_SIGN_PUBLIC_KEY_B64" vagy "OMNI_SKILLS_SIGN_PUBLIC_KEY"---

## ⚠️ Current Limitations

| Korlátozás | Állapot |
|:-----------|:-------|
| VirusTotal feltöltési benyújtás | Szándékosan kizárva az alapértelmezett érvényesítésből |
| Aláírási végrehajtás | A kiadási címkékre kényszerítve; a helyi buildek továbbra is aláírás nélkül futhatnak |
| Házigazda kormányzás | A beépített hitelesítés, adminisztrátori futásidejű, CORS/IP engedélyezési listák, karbantartási mód és ellenőrzési naplózás működik; a külső átjárók opcionálisak maradnak |
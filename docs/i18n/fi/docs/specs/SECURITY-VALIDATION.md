# 🛡️ Security Validation and Distribution (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**Suojaustarkistus, arkiston luominen, valinnainen allekirjoitus ja jakelupakkaus jokaiselle julkaistulle taidolle.**---

## 📊 Status

| Ominaisuus | valtio |
|:--------|:------|
| ✅ Staattinen turvaskanneri | Aina käytössä |
| ✅ Taitokohtainen metatietojen luokitus | Toteutettu |
| ✅ Taitokohtaiset arkistot (zip/tar.gz) | Toteutettu |
| ✅ SHA-256-tarkistussummaluettelot | Toteutettu |
| ✅ CI-skannerin portti vapautuslappuissa | Toteutettu |
| ✅ npm julkaise työnkulku vahvistetusta tarballista | Toteutettu |
| ⚙️ ClamAV-skannaus | Valinnainen rikastin |
| ⚙️ VirusTotal hash-haku | Valinnainen rikastin |
| ✅ Erillinen signeeraus | Toteutettu |
| ✅ CI-valtuutettu allekirjoitus | Toteutettu julkaisutunnisteisiin |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

Tarkistaa jokaisen taidon validoinnin aikana:

| Kohde | Mitä skannataan |
|:-------|:-------------------|
| 📝 `SKILL.md` | Päätaidon sisältö |
| 📄 Merkintä/tekstitiedostot | Pakatut viitteet ja asiakirjat |
| ⚙️ Käsikirjoitukset | Pakatut automaatiokomentosarjat |

**Sääntöperheet:**

| Sääntö | Esimerkkejä |
|:-----|:----------|
| 🎭**Nopea injektio**| Suodatuskuviot, ohjeiden ohitukset |
| 💣**Tuhoavat komennot**| "rm -rf", "muoto", "del /s" |
| 🔑**Etuoikeuksien eskalaatio**| `sudo`, `chmod 777`, setuid kuviot |
| 📂**Epäilyttävät polut**| `/etc/shadow`, `~/.ssh`, tunnistetiedostot |
| ⚠️**Riskialttiit primitiivit**| "shell=True", "pickle.load", "eval", "extractall" |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- Vaatii clamscanin PATH:ssa
- Tarkistaa pakatut tiedostot tunnettujen haittaohjelmien varalta
- Tulokset kirjataan taitojen metatietoihin---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**Vain hash-haku**— ei tiedostoa ladata normaalin vahvistuksen aikana
- Tuntemattomat tiedostot pysyvät vain paikallisina
- Pitää koontiversion**deterministisenä**ja CI-riippumattomana### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

Tiukka vapautusportti:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

Tämä vaihe lukee luodut "skills/*/metadata.json" ja epäonnistuu, jos vaaditut skannerit eivät suorittaneet tai raportoineet havainnoista.---

## 📊 Security Output Shape

Tietoturvatiedot lähetetään jokaisen taidon metatiedoissa:```json
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

> Tämä lohko levitetään luettelo- ja luettelonäkymiin, mikä mahdollistaa CLI:n, API:n ja MCP:n**suodattamisen ja järjestyksen suojauspisteiden mukaan**.---

## 📦 Archive Outputs

Jokainen julkaistu taito tuottaa:

| Tiedosto | Muoto |
|:-----|:-------|
| `dist/archives/<taito>.zip` | ZIP-arkisto |
| `dist/archives/<taito>.tar.gz` | Tarball-arkisto |
| `dist/archives/<taito>.checksums.txt` | SHA-256-tarkistussummaluettelo |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

GitHub Actionsin julkaisutunnisteet (`v*`) nyt:

1. Varmista, että git-tunniste vastaa pakettia.json
2. asenna ja päivitä ClamAV
3. purkaa julkaisun allekirjoitusavain GitHub-salaisuuksista
4. Suorita `npm run release:verify'
5. pakkaa tarball `npm pack`:lla
6. julkaise tämä tarkka tarball npm:lle lähteen kanssa
7. Luo GitHub-julkaisu mukautetuilla huomautuksilla ja liitteenä olevalla vahvistussisällöllä---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Jos julkista avainta ei ole annettu, koontiversio johtaa sellaisen, jossa on "openssl" ja sijoittaa sen kansioon "dist/signing/".

Kun tämä on käytössä, .sig-tiedostot lähetetään arkiston ja tarkistussummaluettelon viereen.

CI:ssä julkaisutunnisteet edellyttävät nyt allekirjoittamista:

- OMNI_SKILLS_SIGN_PRIVATE_KEY_B64 tai OMNI_SKILLS_SIGN_PRIVATE_KEY
- valinnainen "OMNI_SKILLS_SIGN_PUBLIC_KEY_B64" tai "OMNI_SKILLS_SIGN_PUBLIC_KEY"---

## ⚠️ Current Limitations

| Rajoitus | Tila |
|:-----------|:-------|
| VirusTotal-lataus | Tarkoituksellisesti suljettu pois oletustarkistuksesta |
| Allekirjoituksen täytäntöönpano | Pakotettu julkaisutunnisteisiin; paikalliset koontiversiot saattavat silti toimia allekirjoittamattomina |
| Isännöity hallinto | Sisäänrakennettu todennus, järjestelmänvalvojan suoritusaika, CORS/IP-sallitut luettelot, ylläpitotila ja tarkastusloki ovat käytössä. ulkoiset yhdyskäytävät ovat valinnaisia ​​|
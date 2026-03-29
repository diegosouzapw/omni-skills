# 📊 Skill Classification and Metadata (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**Paikallinen luokitin, joka pisteyttää jokaisen taidon validoinnin ja rakentamisen aikana ja luo koneellisesti luettavia profiileja koko luettelolle.**---

## 📊 Status

| Tuotos | Luotu |
|:-------|:-----------|
| ✅ Päähakemisto `metadata.json` | Arkiston laajuinen yhteenveto |
| ✅ Taitokohtainen `skills/<skill>/metadata.json` | Yksittäiset luokitukset |
| ✅ Katalogi `dist/catalog.json` | Julkaistu luettelo pisteistä |
| ✅ Manifests `dist/manifests/<skill>.json` | Taitokohtaiset koneellisesti luettavat tiedot |

Luonut: `python3 tools/scripts/validate_skills.py`

Nykyinen arkiston tilannekuva:

- 32 julkaistua taitoa
- keskimääräinen laatupiste 96,3
- parhaiden käytäntöjen keskimääräinen pistemäärä `98,7`
- keskimääräinen turvapiste '95,0'
- nykyinen laatuero `94, 95, 96, 97, 100`
- nykyiset parhaat käytännöt leviävät '98, 99, 100'---

## 🎯 Purpose

Luokitin antaa jokaiselle taidolle**yhdenmukaisen koneellisesti luettavan profiilin**ennen kuin se saapuu luetteloon. Se suorittaa neljä tehtävää:

1. 📋**Parse**— YAML-frontmatter ja markdown body
2. 🏷️**Normaloi**— Luokkatunnisteet kanoniseen taksonomiaan
3. 📊**Luokittele**— Kypsyysaste, parhaat käytännöt, laatu ja turvallisuuspisteet
4. 📁**Lähetä**– koontiskriptien, asiakirjojen ja CI:n kuluttamat metadata-artefaktit---

## 🏷️ Canonical Taxonomy

**18 ensisijaista luokkaa**automaattisella aliaskartoituksella:

| Luokka | Verkkotunnus | Yleiset aliakset |
|:---------|:-------|:----------------|
| 💻 `kehitys` | Yleinen ohjelmistokehittäjä | "koodaus", "ohjelmointi" |
| 🎨 `etuosa` | Käyttöliittymä ja käyttöliittymä | "ui", "web-design" |
| 🔧 `backend` | Taustajärjestelmä ja sovellusliittymät | "palvelin", "api" |
| 🌐 "fullstack-web" | Päästä päähän verkko | "verkko", "täysi pino" |
| 🛠️ `työkalut` | Kehittäjätyökalut | "apuohjelmat" |
| ⚙️ `kli-automaatio` | CLI ja automaatio | komentosarjat, työnkulku |
| 📊 `liiketoiminta` | Liiketoimintastrategia | "strategia" |
| 📐 `tuote` | Tuotehallinta | "pm" |
| 🎯 `design` | Visuaalinen & UX-suunnittelu | "ux" |
| 🤖 `data-ai` | Data- ja tekoälysovellukset | "data", "analytiikka" |
| 🧠 `ai-agents` | AI agenttimallit | "agentit" |
| 📈 `koneoppiminen` | ML-mallit ja koulutus | "ml" |
| 🔌 `devops` | Infrastruktuuri | "infrastruktuuri", "pilvi" |
| 🛡️ `testaus-turvallisuus` | Testaus ja turvallisuus | "testaus", "turvallisuus", "qa" |
| 📖 `dokumentaatio` | Asiakirjan hallinta | "asiakirjat" |
| 🎬 `sisältö-media` | Sisällön luominen | "media", "sisältö" |
| 💬 `viestintä` | Viestintätyökalut | "chat" |
| ❓ "luokittamaton" | Oletusvaraus | — |

> Vanhat tunnisteet, kuten "työnkulku", "arkkitehtuuri" ja "infrastruktuuri" normalisoidaan automaattisesti aliaskartoituksen avulla.---

## 📏 Computed Attributes

### 🎯 Maturity Levels

| Taso | Etiketti | Kriteerit |
|:------|:------|:----------|
|**L1**| "metadata" | Frontmatter plus minimaalinen runko |
|**L2**| "ohjeet" | Merkittävät kirjalliset ohjeet |
|**L3**| "resurssit" | Mukana skriptit tai monipuolisemmat pakatut resurssit |

Muita seurattuja signaaleja: "has_scripts", "has_extra_files".---

### 📋 Best Practices Score (0-100)

Heuristiikka arvioi:

| Signaali | Mitä se tarkistaa |
|:-------|:----------------|
| 📛 Etanan laatu | "nimi"-kentän muotoilu |
| 📝 Kuvaus | Selkeys, pituus, informatiivisuus |
| 📐 Rakenne | Asiakirjan osat ja hierarkia |
| 💡 Esimerkkejä | Koodiaidat ja esimerkkilohkot |
| 🔗 Referenssit | Linkitetyt paikalliset `viitteet/`, `scripts/` ja tukipaketin apuohjelmat |
| 🧰 Toimivuus | Suoritettavat paikalliset komentosarjaesimerkit ja konkreettiset työnkulun katkelmat |
| 🧩 Tukipaketin syvyys | Useita tukiperheitä, uudelleen käytettävät tiedostot, agentin metatiedot ja operatiiviset resurssit |
| 🩺 Vianetsintä | Eksplisiittiset oireet- ja ratkaisuparit |
| 📚 Kattavuus | "Milloin käyttää", "Parhaat käytännöt", "Vianetsintä" ja "Lisäresurssit" -osiot |
| 🌐 Kannettavuus | Työkaluagnostinen sanamuoto |
| 📅 Tuoreus | Koodattujen päivämäärien välttäminen |

**Nykyinen taso**

| Taso | Pisteet |
|:-----|:------------|
| "erinomainen" | 90-100 |
| "hyvä" | 70-89 |
| `reilua` | 50-69 |
| "töitä" | 0-49 |

Pisteytys on tarkoituksella**riittävän semanttinen luodakseen hajautuksen**kypsien taitojen kesken. Taito, jolla on puhdas rakenne, voi saavuttaa hyvin, mutta päästäkseen huippukaistalle se tarvitsee myös syvyyssignaaleja, kuten:

- useita esimerkkejä, ei vain yksi
- useita vianetsintätapauksia
- asiaan liittyvää taitoa koskevaa ohjausta
- rikkaammat paikalliset tukipaketit
- enemmän kuin yksi tukiperhe pelkän proosan lisäksi, mieluiten mukaan lukien "agentit/" tai "varat/", joissa ne lisäävät todellista uudelleenkäyttöä
- oma "## Workflow" -osio, jossa on laskettavat vaiheet
- vähintään yksi pieni toimintataulukko tai päätöskartta, kun se parantaa suorituksen selkeyttä
- enemmän toiminnallista tarkkuutta kuin tavallinen malli
- Selkeämpi työnkulun syvyys ja päätöksenteon tukiresurssit
- tukipaketin syvyys, joka ylittää yhden "references/"-tiedoston ja yhden linkitetyn skriptin
- tarpeeksi uudelleenkäytettäviä tukitiedostoja, jotta se tuntuu työnkulkusarjalta, ei yhden huomautuksen lisäosalta
- Riittävä toimintatiheys erottamaan kiillotetut ääriviivat uudelleen käytettävästä työnkulkusarjasta

Tämä tarkoittaa, että rakenteellisesti täydellinen taito voi silti laskeutua 90-luvulle "100" sijasta, jos sen tukipaketti on kapeampi, sen päätösvarat ovat ohuempia tai sen toimintatiheys on pienempi kuin luettelon vahvimmat taidot.---

### ⭐ Quality Score (0-100)

Heuristiikka yhdistää:

| Signaali | Paino |
|:-------|:--------|
| 📝 Kehon täydellisyys | Keskikorkea |
| 📋 Kuvauksen tarkkuus | Keskikokoinen |
| 📊 Metatietojen täydellisyys | Keskikokoinen |
| 📅 Äskettäisyys (`date_updated`) | Keskikokoinen |
| 📦 Pakatut resurssit | Keskikokoinen |
| 📋 Parhaiden käytäntöjen panos | Keskikokoinen |
| 🧠 Semanttinen syvyys | Keskikorkea |
| 🛠️ Toimintasyvyys | Keskikokoinen |
| 📚 Tukipaketin rikkaus | Keskikokoinen |

**Laatutasot:**

| Taso | Pisteet |
|:-----|:------------|
| 💎 `platina` | 80+ |
| 🥇 `kulta` | 65-79 |
| 🥈 `hopeaa` | 50-64 |
| 🥉 `pronssi` | 35-49 |
| 🌱 "aloitus" | 0-34 |---

### 🛡️ Security Score (0-100)

Suojauskerros yhdistää:

| Skanneri | Aina käytössä | Mitä se tekee |
|:--------|:---------------|:--------------|
| 🔍**Staattinen**| ✅ Kyllä | Tarkistaa SKILL.md:n, pakatut tiedostot ja komentosarjat |
| 🦠**ClamAV**| ⚙️ Valinnainen | Haittaohjelmien tarkistus `clamscanin` | avulla
| 🔒**VirusTotal**| ⚙️ Valinnainen | Hash-haku (ei latausta) |

**Staattisen skannerin sääntöperheet:**
- 🎭 Nopeat injektio- ja suodatusmallit
- 💣 Tuhoavat komentotulkkikomennot
- 🔑 Epäilyttävät tunnistetiedot tai käyttöjärjestelmäpolut
- ⚠️ Riskialttia käsikirjoituksen primitiivit (`shell=True`, `pickle.load`, `eval`, `extractall')

**Turvatulosteen muoto:**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

| jakso | Kentät |
|:--------|:-------|
| 🆔 Identiteetti | "id", "slug", "näyttönimi" |
| 🏷️ Taksonomia | "raaka_luokka", "ensisijainen_luokka", "päätelty_luokka" |
| 📋 Tekijä | tunnisteet, työkalut, monimutkaisuus, riski, lähde, tekijä |
| 📅 Päivämäärät ja polut | `lisäyspäivä`, `päivityspäivämäärä`, polut |
| 📊 Resurssit | Tiedosto- ja viitelaskurit |
| 📝 Sisältösignaalit | Sanojen määrä, rungon pituus, rakenneliput |
| 🧠 Semanttinen syvyys | Työnkulun vaiheet, esimerkit, vianmäärityksen syvyys, päätösresurssit, tukilinkkiperheet |
| 🧩 Tukipakettirakenne | Tukitiedostojen määrät, linkitetyt perheet, agentit/, resurssit/ ja uudelleenkäytettävät esimerkit |
| 🎯 Maturiteetti | Taso, otsikko, komentosarjat/tiedostot -liput |
| 📋 Parhaat käytännöt | Pisteet ja taso |
| ⭐ Laatu | Pisteet, taso ja semanttinen erittely |
| 🛡️ Turvallisuus | Pisteet, taso, tila, havainnot |
| ✅ Vahvistus | Tila, virheet, varoitukset |### Root (`metadata.json`)

| jakso | Kentät |
|:--------|:-------|
| 📊 Yhteenveto | Laskut, keskiarvot, luokkajakauma |
| 🏷️ Taksonomia | Luokkien määrä |
| 🎯 Jakelu | Taitotaso, laatutaso, turvallisuustaso |
| ✅ Vahvistus | Tilamäärät |
| 📋 Taitoluettelo | Kompaktit taitokohtaiset yhteenvedot |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

Tämä määrittää "gitin" käyttämään ".githooks/pre-commit"-komentoa, joka luo metatiedot ja luetteloartefaktit uudelleen ennen toimitusta ja vaiheittaa luodut tiedostot automaattisesti.
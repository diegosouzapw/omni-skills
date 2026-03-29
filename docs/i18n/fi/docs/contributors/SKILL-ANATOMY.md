# 🔬 Anatomy of a Well-Written Skill (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**Omni Skills `SKILL.md`:n rakenne- ja laatuodotukset – koko luettelon luomismuoto.**---

## 📐 The Two Parts

Jokainen "SKILL.md" koostuu kahdesta erillisestä osasta:### 1️⃣ Frontmatter (YAML Metadata)

Koneluettava metatiedot `---` erottimien välissä. Se tehoaa:

- 📚 Osaamisindeksi ja luetteloiden sukupolvi
- 🔎 CLI-haku ja suodatus
- ✅ Validointi ja laatupisteytys
- 📊 Luodut "metadata.json"-luokitusartefaktit
- 📋 Taitokohtaiset ilmenemismuodot kohdassa "dist/manifests/".### 2️⃣ Body (Markdown Instructions)

Ihmisen luettavat (ja agenttien luettavat) ohjeet. Kirjoita se ikään kuin**opastaisit vanhemmalle kehittäjälle**, kuinka tehtävä tulee suorittaa – tarpeeksi tarkkaa, jotta tekoälyagentti voi seurata sitä arvaamatta.---

## 📋 Frontmatter Reference

| Kenttä | Pakollinen | Tyyppi | Kuvaus |
|:------|:----------|:-----|:-------------|
| `nimi` | ✅ | merkkijono | Hakemiston nimen on vastattava pieniä kirjaimia ja tavumerkkejä |
| "kuvaus" | ✅ | merkkijono | Yksirivinen kuvaus (10-200 merkkiä) |
| "versio" | ⚡ | merkkijono | Itse taidon semanttinen versio (esim. `"0.1.1"`) |
| "luokka" | ⚡ | merkkijono | Yksi kanoninen luokka repo-taksonomiasta |
| "tunnisteet" | ⚡ | merkkijono[] | Haettavat tunnisteet löytöjä varten |
| "monimutkaisuus" | ⚡ | merkkijono | "aloittelija" · "keskitaso" · "edennyt" · "asiantuntija" |
| "riski" | ⚡ | merkkijono | "turvallinen" · "varoitus" · "loukkaava" · "kriittinen" |
| "työkalut" | ⚡ | merkkijono[] | Testatut AI-koodausavustajat |
| "lähde" ​​| ⚡ | merkkijono | `omni-team` · `yhteisö` · `virallinen` |
| "tekijä" | ⚡ | merkkijono | Nimeä |
| `lisäyspäivä` | ⚡ | merkkijono | ISO-päivämäärä |
| `date_updated` | ⚡ | merkkijono | ISO-päivämäärä |

> ✅ = Vaaditaan aina · ⚡ = Vaaditaan tiukassa tilassa

Taitoversio on riippumaton npm-pakettiversiosta. Paketti on tällä hetkellä `0.1.3`, mutta olemassa olevat taidot voivat pätevästi pysyä omassa semanttisessa versiossaan.---

## 🏷️ Canonical Categories

Repo- taksonomia määrittelee tällä hetkellä**18 kanonista luokkaa**:

| Luokka | Verkkotunnus |
|:---------|:--------|
| 💻 `kehitys` | Yleinen ohjelmistokehitys |
| 🎨 `etuosa` | Käyttöliittymäkehykset ja käyttöliittymä |
| 🔧 `backend` | Taustapalvelut ja API:t |
| 🌐 "fullstack-web" | Päästä päähän web-kehitys |
| 🛠️ `työkalut` | Kehittäjätyökalut ja apuohjelmat |
| ⚙️ `kli-automaatio` | CLI-työkalut ja automaatiokomentosarjat |
| 📊 `liiketoiminta` | Liiketoimintaprosessit ja strategia |
| 📐 `tuote` | Tuotehallinta ja suunnittelu |
| 🎯 `design` | Visuaalinen ja UX-suunnittelu |
| 🤖 `data-ai` | Tietotekniikka ja tekoälysovellukset |
| 🧠 `ai-agents` | Tekoälyagentin kehittäminen ja mallit |
| 📈 `koneoppiminen` | ML-mallit ja koulutus |
| 🔌 `devops` | Infrastruktuuri ja käyttöönotto |
| 🛡️ `testaus-turvallisuus` | Testaus ja turvallisuuskäytännöt |
| 📖 `dokumentaatio` | Dokumentaation luominen ja hallinta |
| 🎬 `sisältö-media` | Sisällöntuotanto ja media |
| 💬 `viestintä` | Viestintätyökalut ja työnkulut |
| ❓ "luokittamaton" | Oletus, kun vastaavuutta ei löydy |

> Vanhat tunnisteet, kuten "työnkulku", "arkkitehtuuri", "infrastruktuuri", "turvallisuus" ja "testaus" normalisoidaan automaattisesti aliaskartoituksen avulla.---

## 📝 Body Structure

Hyvin kirjoitettu taitokappale noudattaa tätä hierarkiaa:

### 📌 Yleiskatsaus (pakollinen)
2-3 lausetta**mitä**taito tekee ja**miksi**se on olemassa.

### 🎯 Milloin käyttää (pakollinen)
Luettelo**tietyistä skenaarioista**, joissa tämä taito pätee.

### 📋 Perusohjeet (pakollinen)
Agentin tulee noudattaa**vaiheittaista prosessia**. Ole selkeä. Ole täsmällinen. Agentit toimivat parhaiten selkeillä ja yksiselitteisillä ohjeilla.

### 💡 Esimerkkejä (suositus)
Konkreettiset kehotteet, koodilohkot tai odotetut tulosteet.**Mitä tarkempi, sen parempi.**

### ✅ Parhaat käytännöt (suositus)
Käytä ✅ Tee / ❌ Älä alusta pikaskannaukseen.

### 🔧 Vianetsintä (valinnainen)
Yleisiä ongelmia ja niiden ratkaisuja.

### 🔗 Aiheeseen liittyvät taidot (valinnainen)
Ristiviittaukset täydentäviin taitoihin.---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Keskittyy**yhteen tiettyyn**työnkulkuun tai verkkotunnukseen
- 📌 Ohjeet ovat**riittävän selkeitä, jotta tekoäly**voi seurata niitä ilman ihmisen tulkintaa
- 💡 Sisältää**konkreettisia esimerkkejä**odotetulla käyttäytymisellä
- 🛡️ On asianmukainen**virheenkäsittely**opastus
- 📊 Tuottaa terveellisiä metatietoja: ensisijainen luokka, maturiteetti L2+, laatu 70+
- 🧰 Toimittaa uudelleen käytettävän tukipaketin, ei vain proosaa, mieluiten "viitteet/", "käsikirjoitukset/", "esimerkit/" ja "agentit/" tarvittaessa

Katso [High-score Playbook](HIGH-SCORE-PLAYBOOK.md) vahvemmista pisteytyskuvioista, jotka nostavat taitoja korkeimmalle alueelle.### ❌ Bad Skill

- 🌫️ Yleinen neuvo, joka voi päteä mihin tahansa
- 🤷 Epämääräiset ohjeet, kuten "kirjoita hyvä koodi"
- 🚫 Ei esimerkkejä tai koodilohkoja
- ⚠️ Puuttuvat eturintamat
- 📉 Huono laatupiste (alle 50)
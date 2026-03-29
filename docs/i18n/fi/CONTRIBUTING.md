# 🤝 Contributing to Omni Skills (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills sisältää sekä taitoluettelon että sen päälle rakennetut ajonaikaiset pinnat.**
> Avustukset voivat kohdistaa jompaankumpaan alueeseen, mutta molempien on pysyttävä luotujen artefaktien ja nykyisen CLI-käyttäytymisen mukaisia.---

## 📊 Repository Baseline

| Metrinen | Arvo |
|:-------|:------|
| 📦 Pakettiversio | "0.1.3" |
| 🧠 Julkaistu taidot | "32" |
| 📦 Täysin tuetut paketit | "7" |
| 🖥️ Asennuskykyiset asiakkaat | "7" |
| 🔌 MCP-konfigurointia tukevat asiakkaat | "16" |
| 🔄 Automaattiset julkaisut | Käytössä "main" |---

## Tärkeää

| Mitä | Missä |
|:-----|:------|
| 🧠 Taidot on kirjoitettu | `taidot/<taidon nimi>/SKILL.md` |
| 📖 Avustajamallit ja ohjeet | `docs/contributors/` |
| 🧾 Kanoninen PR-virta uusille taidoille | [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Kotimaiset saapuvat taidot laskeutuvat | `taidot/` (mikä tahansa kieli) |
| ✨ Kuroidut parannetut johdannaiset | `skills_omni/` (vain englanniksi, automaattinen) |
| 🚫 `skills_omni/` on suojattu | Ei avoin suoralle julkiselle rahoitukselle |
| 📖 Ajonaikaiset ja arkkitehtuuridokumentit | `dokumentit/` |
| 📄 Yhteisötiedostot | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `KÄYTTÖKOODI.md` |---

## 🎯 Common Contribution Types

| Tyyppi | Alue |
|:-----|:-----|
| 🧠 Lisää tai paranna taitoa | `taidot/` |
| 📖 Päivitä avustajan opas | `docs/contributors/` |
| 🖥️ Paranna CLI:tä, asennusohjelmaa tai komentosarjoja | `työkalut/` |
| 📦 Paranna luettelon suoritusaikaa tai protokollapaketteja | `paketit/` |
| 🧪 Kiristä testejä, savutarkistuksia tai vapauta asiakirjoja | Erilaisia ​​|---

## Pikakäynnistys

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Avaa PR, kun Salli ylläpidon muokkaukset on käytössä.**---

## Dokumentaatio

Hyvän alkuperäisen saapuvan taidon tulee:

- ✅ Ratkaise tietty ongelma siististi
- ✅ Olla uudelleenkäytettävä kaikissa projekteissa
- ✅ Sisällytä ohjeet, joita agentti voi todella noudattaa
- ✅ Vältä epämääräistä tai tarpeetonta sisältöä
- ✅ Ilmoita tarkat frontmatter- ja yhteensopivuusmetatiedot, kun ne ovat saatavilla
- ✅ Maa, jossa on luotuja "metadata.json"-luokitusartefakteja automaation suorittamisen jälkeen### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Vinkki:**Julkaisutason taitopakettien tulee sisältää "agents/", "references/", "examples/" ja "scripts/". Mutta sisäänottopinta on tarkoituksellisesti salliva – pienin natiivi sisääntuleva taito on sallittu, ja tehostimen putkilinja luo vahvemman johdannaisen.### 🌐 Language Policy

| Pinta | Hyväksytyt kielet |
|:--------|:--------------------|
| 📥 `taidot/` (alkuperäinen saanti) | portugali, englanti tai mikä tahansa kieli |
| ✨ `skills_omni/` (kuroitu tulos) | vain englanti |

> Yksityinen tehostaja säilyttää alkuperäisen lähteen sellaisena kuin se on lähetetty ja kirjoittaa kuratoidun johdannaisen uudelleen englanniksi.

📖 Käytä [Skill PR Workflow]:a (docs/contributors/SKILL-PR-WORKFLOW.md) saadaksesi koko haara-, vahvistus- ja tehostimen tarkistusjakson.---

## ✅ Required Validation

Suorita tämä ennen PR:n avaamista:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<tiedot>
<summary>📋 <strong>Mitä <code>npm run valide</code> luo uudelleen</strong></summary>

- "metadata.json".
- `skills/<taito>/metadata.json`
- Kanoninen taksonomian kartoitus
- Kypsyys, parhaat käytännöt, laatu ja turvallisuuspisteet
- Staattiset turvallisuushavainnot
- Valinnainen ClamAV- ja VirusTotal-skannerin tila (kun määritetty)</details>

>**⚠️ Tärkeää:**Validointi on sopimus, jota käyttävät CLI, API, MCP, A2A, luettelot, arkistot ja julkaisuautomaatio. Käsittele luotuja metatietoja osana tarkistuspintaa, ei kertakäyttöistä tulostetta.### 📥 Intake Policy

| Kunto | Käyttäytyminen |
|:----------|:---------|
| Puuttuva/epätäydellinen frontmatteri | ⚠️ Varoitukset (ei estä) |
| Kriittiset turvallisuushavainnot | 🚫 Estää oton |
| Kovat vahvistusvirheet | 🚫 Estää oton |
| Tiukemmat toimitukselliset standardit | Pakotettu tehostetussa johdannaisvirtauksessa, ei alkuperäisessä sisäänoton yhteydessä |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<tiedot>
<summary>📋 <strong>Mitä savupassi vahvistaa</strong></summary>

- ✅ Taitojen vahvistaminen
- ✅ Katalogin sukupolvi
- ✅ Docs-luetteloiden luominen
- ✅ Testisarja
- ✅ `npm pack --dry-run`
- ✅ API-käynnistys
- ✅ MCP-käynnistys "stdio", "stream" ja "sse" kohdissa
- ✅ A2A saapas
- ✅ Arkiston tarkistus ja pakkausodotukset</details>

---

## 📋 Skill Frontmatter

Frontmatter on erittäin suositeltavaa. Käytä [Skill Template](docs/contributors/SKILL-TEMPLATE.md) perustana.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<tiedot>
<summary>🏷️ <strong>Kanoniset taksonomian luokat</strong></summary>

| Luokka | Luokka |
|:---------|:---------|
| "kehitys" | "etuosa" |
| `taustaosa` | "fullstack-web" |
| "työkalut" | `kli-automaatio` |
| "liiketoiminta" | "tuote" |
| "suunnittelu" | `data-ai` |
| "ai-agents" | "koneoppiminen" |
| "devops" | "testausturvallisuus" |
| "asiakirjat" | "sisältömedia" |
| "viestintä" | "luokittamaton" |</details>

>**ℹ️**Skill-versio on riippumaton npm-pakettiversiosta. Jos alkuperäisellä saapuvalla taidolla ei vielä ole frontmatteria, se hyväksytään varoituksella ja johdetaan väliaikaiset metatiedot hakemistosta, otsikosta ja leipätekstistä.---

## ⚙️ Runtime Contributions

Jos kosketat `packages/`, `tools/bin/`, `tools/lib/` tai luot skriptejä:

- 📦 Pidä "dist/" ja asiakirjat linjassa toteutuksen kanssa
- 🔄 Käytä mieluummin paketteja/catalog-corea uudelleen luettelologiikan kopioimisen sijaan
- 🔒 Pidä paikallinen kirjoitustoiminta esikatselun tai kuivaajon oletusarvojen takana
- 🔌 Pidä MCP-kirjoittajat kurissa – lisää ensiluokkaisia asetusten kirjoittajia vain, kun asiakkaalla on vakaa julkinen konfigurointisopimus
- 🛡️ Käsittele turvaskannerin varoituksia osana tarkistuspalkkia
- 🧪 Päivitä testit, kun muutat CLI-komentoja, siirtomuotoja tai julkisia päätepisteitä### 🚧 Important Boundary

| Tee tämä ✅ | Älä tee tätä 🚫 |
|:-----------|:------------------|
| Lähetä kotimainen työ kohtaan "taidot/" | Avaa manuaaliset PR:t, jotka muokkaavat `skills_omni/` |
| Anna automaation käsitellä tehostimen | Lisää kuratoitua sisältöä suoraan |
| Keskity lailliseen taitojen laatuun | Ohita automatisoitu kumppani PR-virta |

>**ℹ️**Kun 'taidot/' -taidot päivitetään, yksityinen tehostin käsittelee sen uudelleen ja päivittää parannetun perustason.---

## 🔄 Enhancer Outcome States

Julkisten natiivitaitojen PR:n aikana tehostaja raportoi yhden neljästä tilasta:

| valtio | Merkitys |
|:------|:---------|
| ✅ "valmis" | Parannettu johdannainen luotu selkeästi, kelvollinen `skills_omni/` |
| ⚠️ `heikentynyt` | Täydennetty varmistusliikkeellä tai heikommalla pisteliikkeellä – tarkasta tarkemmin |
| 🚫 "estetty" | Pysäytetty infrastruktuuri- tai validointisyistä — estää automaattisen julkaisun |
| ❌ "epäonnistui" | Odottamaton virhe — vaatii ylläpitäjän tutkimuksen |

>**📝 Avustajien**ei tarvitse korjata tehostimen infrastruktuuriongelmia. Vastuu on toimittaa laillinen natiivitaito ja pitää repo vihreänä.---

## 🔄 Automatic Release Policy

Kun muutos osuu "main"-kohtaan ja sisältää:

- "taidot/**".
- "skills_omni/**".
- "data/bundles.json".

...arkisto julkaisee**pakettijulkaisun automaattisesti**.### 📋 Version Bump Rule

| Lähettäjä | Vastaanottaja | Sääntö |
|:-----|:---|:-----|
| "0.1.0" | "0.1.1" | Patch +1 |
| "0.1.9" | "0.1.10" | Patch +1 |
| "0.1.10" | "0.2.0" | Siirry seuraavaan sivuun, nollaa korjaustiedosto |

> Julkaisukulku luo uudelleen luettelon/arkistot, sitoo versiovirheen, merkitsee julkaisun, julkaisee npm:n ja luo GitHub-julkaisun automaattisesti.---

## 📝 Commit Conventions

| Etuliite | Käytä |
|:-------|:---------|
| `feat:` | Uusi taito tai ominaisuus |
| `korjaa:` | Virheenkorjaus |
| `asiakirjat:` | Asiakirjojen muutokset |
| "refaktori:" | Koodin puhdistus tai rakenteen muutokset |
| `testi:` | Testaa muutoksia |
| `työ:` | Huolto |---

## ❓ Need Help?

| Kanava | Linkki |
|:--------|:-----|
| 💬 Kysymyksiä | [Avaa keskustelu](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 Vikoja | [Avaa numero](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 Varhainen palaute | [Avaa PR-luonnos](https://github.com/diegosouzapw/omni-skills/pulls) |
# 🔬 Codebase Deep Analysis (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Kattava tekninen analyysi nykyisestä Omni Skills -arkkitehtuurista, ajonaikaisista pinnoista ja rakennusputkistosta.**
> Viimeksi analysoitu: 28.3.2026---

## 📊 Project Overview

| Attribuutti | Arvo |
|:----------|:------|
|**Nimi**| "kaikki taidot" |
|**Pakettiversio**| "0.1.3" |
|**Taitoversiot**| Taitokohtainen ja pakettiversiosta riippumaton. Monet julkaistut taidot ovat edelleen "0.0.1", kun taas paketti on "0.1.2". |
|**Lisenssi**| MIT (koodi) + CC BY 4.0 (sisältö) |
|**NPM**| "npx omni-skills" |
|**Julkaistut taidot**| 32 |
|**Määritetyt niput**| 7, kaikki julkaistujen taitojen tukena |
|**Aktiiviset luetteloluokat**| 15 aktiivista ryhmää 18:sta kanonisesta taksonomian kategoriasta |
|**Ensisijainen suoritusaika/koontiversion LOC näyte alla**| 13 600+ |
|**Tuotantoriippuvuudet**| 7 ("@modelcontextprotocol/sdk", "cors", "express", "ioredis", "muste", "reagoida", "zod") |

Nykyinen arkistotason luokituksen tilannekuva metadata.jsonista:

- keskimääräinen laatupiste: "96,3".
- parhaiden käytäntöjen keskimääräinen pistemäärä: `98,7`
- Keskimääräinen turvapistemäärä: "95,0".
- kaikki 32 julkaistua taitoa vahvistetaan "L3".

Nykyisen julkaisun perusviiva:

- julkisen arkiston julkaisu: "v0.1.2".
- yksityinen tehostimen julkaisu: "v0.0.1".
- Julkinen julkaisuautomaatio ja yksityinen julkaisuautomaatio ovat sekä aktiivisia että vihreitä---

## 🏗️ Architecture Overview

Arkisto noudattaa**työtilan monorepo**-mallia, jossa on yksi jaettu luetteloydin ja useita ajonaikaisia ​​pintoja.```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

Suunnittelu on tarkoituksella**artefaktilähtöinen**:

1. taidot on luotu SKILL.md-tiedostoina sekä paikallisia tukipaketteja
2. koontiversio vahvistaa, luokittelee, arkistoi ja normalisoi ne
3. luoduista artefakteista tulee sopimus CLI:lle, API:lle, MCP:lle ja A2A:lle---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4 500+ LOC yhdistettynä**— tärkein julkinen käyttöliittymä sekä asiantuntija- että ohjattuun käyttöön.

| Komento | Toiminto |
|:--------|:----------|
| 🔎 `etsi [kysely]` | Kokotekstiluettelohaku tulostietoisilla suodattimilla |
| 📦 "asenna" | Ohjattu tai lippupohjainen asennus tunnettuihin asiakkaisiin tai mukautettuihin polkuihin |
| 🧾 `config-mcp` | Esikatsele tai kirjoita asiakastietoinen MCP-konfiguraatio |
| 🔌 `mcp <kuljetus>` | Käynnistää MCP-palvelimen muodossa "stdio", "stream" tai "sse" |
| 🌐 `api` | Käynnistää luettelon API |
| 🤖 `a2a` | Käynnistää A2A-ajoajan |
| 🧪 `savu` | Vapauta lentoa edeltävä vahvistus |
| 🩺 `lääkäri` | Paikallinen diagnostiikka |
| 🖥️ `ui` | Musteen visuaalinen kuori asennus-, etsintä-, konfigurointi- ja huoltokeskittimellä |
| 🏷️ `luokat uudelleen` | Taksonomian poikkeaman tarkastus ja uudelleenkirjoitus |

CLI ei ole enää vain asennusohjelma. Se on julkisen toiminnan työkalu koko alustalle.## 🧭 Future Expansion Direction

Julkinen suoritusaika ei ole enää perustyön esteenä, ja toisen luokan aalto on jo laskeutunut. Seuraava hyödyllinen luettelotyö on syvyys, ei enemmän kategorioiden jahtaamista.

Uudet aktivoidut koodinatiivikappaleet nyt luettelossa:

- "design" parametrien "design-systems-ops", "accessibility-audit" ja "design-token-governance" kautta
- "työkalut" mcp-server-authoringin kautta
- "data-ai" data-sopimusten kautta
- "koneoppiminen" mallipalvelun kautta

Suositeltu seuraava suunta:

1. syvennä "design", "työkalut", "data-ai" ja "koneoppiminen"
2. pidä "business" ja "content-media" lykättynä, ellei esiin tule selkeää koodipohjaista ehdotusta
3. Säilytä nykyinen laatulattia sen sijaan, että avaat uudelleen luokan aktivointipaineen

Tämä laajennusaalto on nyt tallennettu tiedostoon [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— asentaa taidot 7 asennuskykyiseen avustajaan.

| Lippu | Kohde | Oletuspolku |
|:-----|:-------|:--------------|
| "--claude" | Claude Code | "~/.claude/skills" |
| "--kursori" | Kursori | "~/.kursori/taidot" |
| "--kaksoset" | Gemini CLI | "~/.gemini/skills" |
| "--codex" | Codex CLI | "~/.codex/skills" |
| "--kiro" | Kiro | "~/.kiro/skills" |
| "--antigravitaatio" | Antigravitaatio | "~/.gemini/antigravity/skills" |
| `--avokoodi` | OpenCode | `<työtila>/.opencode/skills' |

Se tukee:

- täyden kirjaston asennukset
- valikoidut asennukset komennolla "--skill".
- "--bundle" -paketin kuratoimat asennukset
- ohjatut TTY- ja visuaaliset käyttöliittymät
- mukautetut kohdepolut### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— jaettu ajonaikainen kerros CLI:lle, API:lle, MCP:lle ja A2A:lle.

| Vienti | Kuvaus |
|:-------|:-------------|
| 🔎 `search Skills()` | Haku painotetulla tekstihaulla ja suodatintuella |
| 📋 `list Skills()` | Moniakselinen suodatus laadun, parhaiden käytäntöjen, tason, suojauksen, riskin, työkalun ja luokan mukaan |
| 📌 `getSkill()` | Ilmeinen resoluutio ja rikastetut julkiset URL-osoitteet |
| ⚖️ `vertaa taitoja()` | Vierekkäinen vertailu |
| 💡 `recommend Skills()` | Tavoitteellinen suositus |
| 📦 `buildInstallPlan()` | Asenna suunnitelman luominen varoituksella ja asiakastietoisilla ohjeilla |
| 🗂️ `listBundles()` | Kuratoitu nippuluettelo ja saatavuus |
| 📁 `listSkillArchives()` | Arkiston ja allekirjoituksen resoluutio |

Tämä on todellinen ainoa ajonaikaisen totuuden lähde sukupolven jälkeen.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— täysi MCP-toteutus käyttäen virallista SDK:ta.

**Kuljetukset**

- "stdio".
- suoratoistokelpoinen HTTP
- SSE

**Aina käytössä olevat vain luku -työkalut**

- "hakutaidot".
- "hanki_taito".
- "taitojen vertailu".
- `recommend_skills`
- "esikatselu_asennus".

**Paikallisen tilan työkalut**

- "detect_clients".
- `list_installed_skills`
- "asennustaidot".
- "poista_taidot".
- `configure_client_mcp`

MCP-pinta on tarkoituksella jaettu seuraaviin:

- kauko-/vain luku -luettelon käyttö
- Paikallinen/kirjoituskykyinen sivuvaunukäyttö### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1 943 LOC**— tiedostojärjestelmätietoinen MCP-kerros asiakkaan havaitsemiseen, taitojen hallintaan ja MCP-asetusten kirjoittamiseen.

Nykyinen käytännön tuki:

-**7 asennuskykyistä asiakasta**
-**16 konfigurointikykyistä asiakasta**
-**33 määrityskohdetta**
-**19 konfigurointiprofiilia**

Asennuskykyiset asiakkaat:

- Claude Code
- Kursori
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitaatio
- OpenCode

Konfigurointikykyisiä asiakkaita ja kohteita ovat mm.

- Claude-asetukset, Claude Desktop ja Claude-projektin asetukset
- Kohdistimen käyttäjän ja työtilan asetukset
- VS Code -työtila, käyttäjä, sisäpiiriläiset ja Dev Container -kokoonpano
- Geminin käyttäjä- ja työtilan asetukset
- Antigravitaatio-käyttäjäasetukset
- Kiron käyttäjä-, työtila- ja vanhat polut
- Codex CLI TOML -kokoonpano
- OpenCode-käyttäjä- ja työtilan konfiguraatio
- Kliinin asetukset
- GitHub Copilot CLI -käyttäjä ja repo-konfiguraatio
- Kilo käyttäjä-, projekti- ja työtilan konfiguraatio
- Jatka työtilaa YAML
- Purjelautailun käyttäjän asetukset
- Zed-työtilan konfigurointi
- Goose-käyttäjäasetukset

Sivuvaunu on tarkoituksella rehellinen rajoista:

- se kirjoittaa vain sallittujen luettelon sisällä
- se esikatselee oletuksena
- Se pitää ensiluokkaiset kirjoittajat vain siellä, missä viralliset asiakirjat paljastavat vakaan muodon
- Se ei väitä, että jokainen MCP-yhteensopiva tuote olisi myös taitojen asennuskohde### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC yhdistetty**— vain luku -rekisteri-API ja hallinnan väliohjelmisto.

Tärkeitä päätepisteitä:

- "/healthz".
- `/openapi.json`
- `/admin/runtime`
- "/v1/taidot".
- `/v1/skills/:id`
- `/v1/haku`
- `/v1/vertaa`
- "/v1/niput".
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Jo toteutettu hallinnon perusviiva:

- haltijan tunnuksen todennus
- API-avaimen todennus
- admin token auth
- prosessinaikainen nopeuden rajoittaminen
- pyytää tunnuksia
- tarkastuskirjaus
- CORS-sallitut luettelot
- IP-sallitut listat
- luottaa välityspalvelimen käsittelyyn
- huoltotila### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1 857 LOC:ta yhdistettynä pääpalvelin-, ajonaika- ja koordinaattoritiedostoihin**— JSON-RPC 2.0 -tehtävän elinkaari agenttien välisille työnkulkuille.

Tuetut menetelmät:

- "viesti/lähetä".
- "viesti/stream".
- `tehtävät/saa`
- `tehtävät/peruuta`
- "tehtävät/tilaa uudelleen".
- `tasks/pushNotificationConfig/*`

Nykyiset toiminnot:

- "löydä taidot".
- `suosittele pinoa`
- "valmistele-asennussuunnitelma".

Kestävyys ja koordinaatiomalli:

- muistin, JSON- tai SQLite-paikallinen pysyvyys
- Käynnistä uudelleen
- valinnainen ulkoinen prosessin suorittaja
- Opt-in vuokrattu jonokoordinointi jaetuille SQLite-työntekijöille
- valinnainen Redis-tukikoordinointi kehittyneenä isännöity polkuna

Tärkein arkkitehtoninen valinta tässä on**yksinkertainen paikallinen toiminta**. Redis on lisävaihtoehtona, mutta oletustuotepolku on paikallinen ja riippuvuuskevyt.---

## ⚙️ Build Pipeline

| Käsikirjoitus | Kieli | Tarkoitus |
|:-------|:----------|:---------|
| 📊 `skill_metadata.py` | Python | Validointi, taksonomia, pisteytys ja staattinen turvaskannaus |
| ✅ `validate_skills.py` | Python | Metatietojen luominen taitoa kohti ja juuriyhteenvetoa varten |
| 📑 `generate_index.py` | Python | Taitohakemisto, luettelot, arkistot, allekirjoitukset ja tarkistussummat |
| 🏗️ `build_catalog.js` | Node.js | Lopullinen "dist/catalog.json" ja "dist/bundles.json" |
| 🏷️ `recategorize_skills.py` | Python | Kanoninen luokan tarkastus ja uudelleenkirjoitus |
| 🔍 `verify_archives.py` | Python | Arkiston ja allekirjoituksen tarkistus |

Kahdella yksityiskohdalla on toiminnallisesti merkitystä:

1. "dist/" on osa ajonaikaista sopimusta ja tarkoituksellisesti sitoutunut
2. koontiversio on tarpeeksi deterministinen tukemaan CI-varmennusta ja julkaisun allekirjoitusta---

## 📦 Published Catalog

Nykyinen julkinen luettelo kattaa 32 taitoa:

-**Löydös ja suunnittelu**: "löytä taidot", "aivoriihi", "arkkitehtuuri", "virheenkorjaus"
-**Suunnittelujärjestelmät ja saavutettavuus**: "design-systems-ops", "accessibility-audit"
-**Tuotteiden ja täyden pinon toimitus**: "frontend-design", "api-design", "database-design", "omni-figma", "auth-flows"
-**Turvallisuus**: "security-auditor", "vulnerability-scanner", "incident-response", "threat-modeling"
-**OSS-ylläpitäjän työnkulut**: "documentation", "changelog", "create-pr"
-**DevOps**: "docker-expert", "kubernetes", "terraform", "observability-review", "release-engineering"
-**AI-tekniikka**: "rag-engineer", "prompt-engineer", "llm-patterns", "eval-design", "context-engineering"

Kaikki seitsemän nippua ovat täysin tuetut:

- "essentials" → "4/4".
- "täysi pino" → "5/5".
- "design" → "4/4".
- "turvallisuus" → "4/4".
- "devops" → "5/5".
- "ai-insinööri" → "5/5".
- "oss-maintainer" → "4/4".

Nykyinen tulos levitetystä luettelosta:

- laatupisteet: "94, 95, 96, 97, 100".
- parhaiden käytäntöjen pisteet: "98, 99, 100".
- turvallisuuspisteet: kaikki julkaistut taidot tällä hetkellä "95".

Edustava huippuluokka:

- "omni-figma" → "laatu 100", "parhaat_käytännöt 100"
- "esteettömyystarkastus" → "laatu 99", "parhaat_käytännöt 100"
- "todennusvirrat" → "laatu 97", "parhaat_käytännöt 99"
- "design-systems-ops" → "laatu 97", "best_practices 99"
- "julkaisusuunnittelu" → "laatu 97", "parhaat_käytännöt 99"
- "uhan mallinnus" → "laatu 97", "parhaat_käytännöt 99"
- "Context-engineering" → "laatu 97", "parhaat_käytännöt 99"

Edustava alapää nykyisen yläkaistan sisällä:

- "arkkitehtuuri" → "laatu 94", "parhaat_käytännöt 98"
- "muutosloki" → "laatu 94", "parhaat_käytännöt 98"
- "create-pr" → "laatu 95", "parhaat_käytännöt 98"

Tämä on tahallista. Pisteytystekijä erottaa nyt sanan "erinomainen" "poikkeuksellisesta" sen sijaan, että litistäisi koko luettelon huipulle.---

## 🌟 Strengths

1.**Artefact-first design**
   Jokainen ajonaikainen pinta kuluttaa saman luodun luettelon ja manifestit.
2.**Laaja protokollan kattavuus**
   CLI, API, MCP ja A2A toimivat rinnakkain tietomallin pirstoutumatta.
3.**Vahva paikallisen tuotteen ergonomia**
   Ohjattu asennus, visuaalinen komentotulkki, `config-mcp` ja kuiva-ajon oletusasetukset tekevät projektista tehokkaan käyttäjien käytettävissä.
4.**Rehellinen turva-asento**
   Sallitut paikalliset kirjoitukset, staattinen skannaus, allekirjoitus, tarkistussummat ja julkaisun vahvistus ovat kaikki eksplisiittisiä.
5.**Terve MCP-kattavuus**
   Projekti tukee nyt laajaa joukkoa nykyisiä MCP-yhteensopivia asiakkaita ilman, että teeskentelee dokumentoimattomien kohteiden olevan vakaita.---

## 🔮 Opportunities

1.**Syvempi paketin kattavuus**
   Seuraava askel on erikoistuminen olemassa oleviin nippuihin, ei vain laajaa kattavuutta.
2.**Rikkampi maalintekijän semantiikka**
   Vielä on tilaa arvioida referenssipaketin syvyyttä ja työnkulun laatua semanttisemmin.
3.**Lisää asiakaskirjoittajia vain perustelluissa tapauksissa**
   Laajentumisen tulee pysyä kurinalaisena ja sidottu vakaisiin virallisiin asiakirjoihin.
4.**Validaattorihajotus**
   Skill_metadata.py on edelleen suuri moduuli, ja se hyötyisi sisäisestä hajoamisesta ajan myötä.
5.**Isännöity hallinnon eskalaatio**
   Nykyinen keskeneräinen perustila riittää itseisännöintiin, mutta yrityskäyttöönotto toivoisi lopulta ulkoisen yhdyskäytävän ja identiteetin integroinnin.
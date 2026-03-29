# 🗺️ Agent-Native Roadmap (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Omni Skillsin arkkitehtuurin kehityssuunnitelma: asentaja-ensimmäisestä arkistosta jaettuun luetteloon, joka toimii CLI:n, API:n, MCP:n ja A2A:n avulla ilman päällekkäistä logiikkaa.**---

## 📊 Current Platform Areas

| Vaihe | Nimi | Tila |
|:------|:-----|:-------|
| 1️⃣ | Sopimukset ja esineet | ✅ Nykyinen |
| 2️⃣ | Read-Only Catalog API | ✅ Nykyinen |
| 3️⃣ | MCP Discovery Surface | ✅ Nykyinen |
| 4️⃣ | Paikallinen asennus- ja määrityspinta | ✅ Nykyinen |
| 5️⃣ | A2A Orkesteri | ✅ Nykyinen |### ✅ What Exists Today

- koneellisesti luettavat luettelon artefaktit hakemistossa "dist/".
- Vain luku -muotoinen HTTP API päätepisteen kattavuudella hakua, paketteja, vertailua, asennussuunnittelua ja latauksia varten
- MCP-palvelin, jossa on "stdio", suoratoistokelpoinen HTTP- ja SSE-siirto
- paikallinen sivuvaunu sallittujen kirjoitusten ja "config-mcp" -virtojen kanssa
- 7 asennuskykyistä asiakasta, 16 konfigurointikykyistä asiakasta, 33 MCP-määrityskohdetta ja 19 konfigurointiprofiilia
- syvemmälle nipun erikoistuminen "full-stack", "security", "devops" ja "ai-engineer" sisällä "auth-flows", "threat-modeling", "release-engineering" ja "context-engineering" kautta
- taitokohtaiset arkistot ("zip", "tar.gz"), joissa on SHA-256-tarkistussummat ja irrotetut allekirjoitukset julkaisutunnisteissa
- API-hallinnan perustaso: siirtotie/API-avaimen todennus, järjestelmänvalvojan ajonaikainen todennus, nopeuden rajoitus, tarkastusloki, CORS/IP-sallitut luettelot, luottamusvälityspalvelin, ylläpitotila ja pyyntötunnukset
- A2A-ajoaika tehtävän elinkaarella, JSON/SQLite-kestävyys, uudelleenkäynnistyksen jatkaminen, SSE-suoratoisto, peruutus, push-ilmoitukset, valinnainen prosessin suorittaja ja valinnainen vuokrattu koordinointi### 🔭 Future Expansion Areas

Ydinsuunnitelmassa kuvataan nyt nykyisen alustan laajuus. Loput kohteet ovat tulevaisuuden laajennusalueita, eivät perustavanlaatuisia aukkoja:

- vain erittäin valikoivia MCP-lisäyksiä tästä eteenpäin ja vain silloin, kun viralliset julkiset asiakirjat mahdollistavat turvallisen kirjoittamisen
- syvemmät referenssipaketit ja semanttinen pisteytys, jotta luokitin erottaa poikkeukselliset taidot pelkistä hiottuista
- yrityksen isännöimä hallinto ylittää nykyisen prosessin perustason, jos projekti tarvitsee myöhemmin yhdyskäytävän tai IDP-integroinnin
- syvempää erikoistumista äskettäin aktivoiduille "design", "tools", "data-ai" ja "koneoppimisen" raiteille
- yksityisen tehostimen jatkuva toiminnallinen hiominen säilyttäen samalla sen muodollisen toimintamallin: OmniRouter kiinnitetty `cx/gpt-5.4':ään, isännöity pilvi 'pilkkuna' tai huononnetussa esitarkastuksessa ja luotettava 'live' lähiverkossa tai itseisännöity suoritus.
- jatkuva julkaisu ja työnkulun karkaisu vain palvelun laatutyönä, ei puuttuvana alustan perustana## Future Catalog Expansion Track

Kaksi ensimmäistä julkista luokkalaajennusaaltoa on nyt laskettu:

- "design" → "design-systems-ops", "accessibility-audit", "design-token-governance"
- "työkalut" → "mcp-server-authoring".
- "data-ai" → "data-sopimukset".
- "koneoppiminen" → "mallin käyttö".

Seuraava suositeltava vaihe ei ole enää luokan aktivointi sen itsensä vuoksi. Tarkoituksena on syventää näitä äskettäin aktiivisia koodinatiiviraitoja, jotta ne tuntuvat kestäviltä tuotepinnoilta yhden taidon jalansijalta.

Suositeltu suunta:

1. syventää "suunnittelua" toimivammilla suunnittelujärjestelmän työnkuluilla
2. syventää "työkaluja" luonti- ja laajennussuuntautuneilla taidoilla
3. syventää "data-ai" käyttöönotto-ensimmäisen putkilinjan ja instrumentointitaitojen avulla
4. syventää "koneoppimista" palvelu-, koulutus- ja arviointitoimintojen taitojen avulla

Luokat tarkoituksella lykätty, ellei vahvoja koodinatiiviehdotuksia näy:

- "liiketoiminta".
- "sisältömedia".

Tätä laajennushistoriaa seurataan nyt:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Pidä nykyinen npx omni-skills -työnkulku toiminnassa
- ✅ Esittele taitojen koneellisesti luettava totuuden lähde
- ✅ Tukee agenttien löytämistä, suosittelemista ja asennussuunnittelua
- ✅ Erota etäluetteloon liittyvät huolet paikallisista tiedostojärjestelmän kirjoituksista
- ✅ Käytä uudelleen samoja metatietoja CLI:ssä, API:ssa, MCP:ssä ja A2A:ssa---

## 🚫 Non-Goals

- ❌ Etäasennus käyttäjän koneelle isännöidyltä palvelimelta
- ❌ Korvaa `SKILL.md` ensisijaiseksi luontimuodoksi
- ❌ Vaadi osallistujia kirjoittamaan manifestit käsin
- ❌ Muuta projekti raskaaksi isännöidyksi jonoalustaksi oletuksena---

## 🏗️ Target Architecture

Yksi**katalogiydin**, jossa on kolme protokollapintaa:

| Pinta | Paras | Tila |
|:--------|:---------|:-----|
| 🌐**REST API**| Rekisterin käyttöoikeus, käyttöliittymäintegraatiot, kolmannen osapuolen kuluttajat | Vain luku |
| 🔌**MCP**| Agentin etsintä, asennuksen esikatselut, asetusten kirjoittaminen, asiakasreseptit | Vain luku + paikallinen kirjoitus |
| 🤖**A2A**| Agenttien välinen orkestrointi ja asennussuunnitelman vaihto | Tehtävän elinkaari yksinkertaisella ensin paikallisella kestävyydellä |### ⚙️ Core Principle

>**Kaikki protokollat ​​käyttävät samaa luotua artefaktiperhettä.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Manifesti pysyy yhteisenä sopimuksena. Arkistot ovat tämän sopimuksen päälle kerrostettuja jakeluesineitä, eivät sen korvikkeita.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Isännöity API ja etä-MCP-palvelimet käyttävät.

| ✅ Sallittu | ❌ Ei sallittu |
|:-----------|:----------------|
| Hakutaidot | Kirjoita soittajan tiedostojärjestelmään |
| Hae luettelot | Muuta paikallisen asiakkaan konfiguraatiota |
| Vertaile taitoja | Päättele mielivaltainen koneen tila |
| Suosittele paketteja | — |
| Rakenna asennussuunnitelmat | — |### 2️⃣ Local Installer Mode

Käytetään CLI:ssä ja MCP-sivuvaunussa.

| ✅ Sallittu |
|:------------|
| Tunnista paikalliset tekoälyasiakkaat |
| Tarkista asennetut taidot |
| Esikatsele tiedostotoiminnot |
| Asenna tai poista taitohakemistot |
| Kirjoita paikallinen MCP-asetus esikatselun jälkeen |

> 📌 Tämä on edelleen ainoa tila, jossa todellista käyttöjärjestelmäkirjoitusta tapahtuu.---

## 📐 Protocol Split

### 🌐 REST API

Paras pääsy rekisteriin, haku, vertailu, versioitetut lataukset ja asennussuunnittelu.

**Päätepisteet**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/vertaa` · `GET /v1/bundles` · `LÄHETÄ /v1/install/plan` · `GET /healthz`### 🔌 MCP

Paras työkalupohjaiseen etsintään, kehotettaviin suosituksiin, asennuksen esikatseluun ja asiakaskohtaiseen MCP-asennukseen.

**Vain luku -työkalut**: "search_skills" · "get_skill" · "compare_skills" · "recommend_skills" · "preview_install"

**Paikalliset työkalut**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Paras hakujen vaihtoon, asennussuunnitelman työnkulkuihin ja jatkuvien agenttien tehtävien suorittamiseen.

**Nykyiset toiminnot**: `löydä-taidot` · `recommend-stack` · `prepare-install-plan---

## 🛡️ Security Model

| Periaate | Toteutus |
|:----------|:----------------|
| 🔒 Isännöidyt palvelut ovat vain luku -tilassa | API ja etä-MCP eivät kirjoita soittajan tiedostojärjestelmään |
| 📂 Kirjoitukset pysy paikallisesti | Vain CLI- ja MCP-sivuvaunu |
| 👁️ Esikatselu ennen kirjoittamista | Kuiva-ajon oletusarvot paikallisille mutaatioille |
| 🔑 Rehellisyys on selvä | SHA-256-tarkistussummat luoduille artefakteille |
| ✍️ Vapauta luottamus on selvä | Julkaisutunnisteisiin pakotetut irrotetut allekirjoitukset |
| ⚠️ Riski on noussut esiin | Riskien ja turvallisuuden metatiedot leviävät jokaiselle ajonaikaiselle pinnalle |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- dokumentoitu kohdearkkitehtuuri
- määritelty manifestiskeema
- luotu metatiedot, luettelo, luettelot, niput ja arkistot### Phase 2: Catalog Service

- Vain luku -muotoinen HTTP API Express 5:llä
- haku, suodatus, luettelohaku, nippuluettelo, vertailu ja lataukset
- ympäristölähtöinen isännöidyn hallinnon perustaso### Phase 3: MCP Discovery

- virallinen @modelcontextprotocol/sdk-integraatio
- "stdio", suoratoistettavat HTTP- ja SSE-siirrot
- Jaetun luettelon tukemat vain luku -työkalut, resurssit ja kehotteet### Phase 4: Local Install and Config Surface

- paikallinen sivuvaunu sallittujen kirjoitusten kanssa
- tunnistus 7 asennuskykyiselle asiakkaalle
- asetusten kirjoittaminen 16 konfigurointikykyiselle asiakkaalle 33 kohteen ja 19 konfigurointiprofiilin välillä
- ohjatut "config-mcp"-virrat CLI:ssä ja visuaalisessa kuoressa
- vakaa tuki Claudelle, Cursorille, VS Codelle, Geminille, Antigravitylle, Kirolle, Codexille, Continuelle, Windsurfille, OpenCodelle, Clinelle, GitHub Copilot CLI:lle, Kilo Codelle, Zedille, Gooselle ja Dev Containersille### Phase 5: A2A Orchestration

- agenttikortti osoitteessa `/.well-known/agent.json'
- "message/send", "message/stream", "tasks/get", "tehtävät/peruuta", "tehtävät/uudelleentilaus" ja push-ilmoitusten määritystavat
- JSON- ja SQLite-pysyvyys uudelleenkäynnistyksen kanssa
- valinnainen ulkoinen prosessin suorittaja
- Opt-in vuokrattu toteutus työntekijöiden kesken SQLite- ja valinnainen edistynyt Redis-koordinointi
- Yksinkertaiset ensin oletusasetukset säilytetään muistissa, JSONissa tai SQLitessa ilman ulkoisia riippuvuuksia### Current Enhancer Operating Decision

Yksityisen tehostajan tuettu "live"-malli on nyt selkeä:

- Isännöity PR-automaatio suorittaa preflight-ported "live" yritys
- jos julkinen OmniRoute-yhdyskäytävä on estetty tai epävakaa, PR on merkitty "estetty" operaattoriin päin olevan syyn avulla sen sijaan, että se epäonnistuisi läpinäkymättömästi
- Kanoninen luotettava "live" polku pysyy LAN- tai paikallisen palvelun suorittamisena
- ajoitetut yksityiset GitHub-ajot pysyvät oletuksena "mock"-tilassa, ellei operaattori nimenomaisesti pyydä "liveä"---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Päätös**: pidä manifesti yhteisenä sopimuksena ja säilytä allekirjoitetut taitokohtaiset arkistot jakelualustana.

**Miksi**:
- CLI, API, MCP ja A2A käyttävät jo normalisoitua luettelomuotoa
- Arkistot ovat ihanteellisia lataamiseen ja tarkistamiseen, mutta huonoina ainoana löytösopimuksena
- Tämä pitää kirjoittamisen yksinkertaisena ja jakelun tarkistettavissa### 2. Private or Premium Catalogs

**Päätös**: käytä uudelleen samaa luettelo- ja luettelomuotoa ja kerro todennus tai käytäntö ulkoisesti.

**Miksi**:
- se välttää tietomallin haaroittamisen
- Se vastaa nykyistä API/MCP-hallintatapaa
- se on edelleen yhteensopiva MCP-ekosysteemisuunnan kanssa OAuth-asiakastunnistetietojen ja yrityksen hallinnoiman valtuutuksen ympärillä### 3. Client Writer Strategy

**Päätös**: yhdistä pieni joukko ensisijaisia ​​vientiperheitä ja pidä räätälöityjä kirjoittajia vain silloin, kun viralliset asiakasasiakirjat sitä edellyttävät.

**Kanoniset perheet nyt käytössä**:
- JSON "mcpServers".
- JSON "palvelimet".
- JSON "context_servers".
- YAML "mcpServers".
- TOML `[mcp_servers]`

**Miksi**:
- Se pitää toteutuksen ylläpidettävänä
- Se tukee edelleen asiakaskohtaisia tarpeita, kuten Claude-asetukset, Continue YAML, Zed "context_servers" ja Codex TOML
- Se välttää hauraiden kirjoittajien keksimisen asiakkaille, joilla ei ole vakaita julkisia konfigurointidokumentteja---

## 🌍 Research Notes Behind Those Decisions

Nykyiset päätökset tarkistettiin virallisiin ekosysteemidokumentteihin:

- MCP-ekosysteemi dokumentoi nyt valinnaiset laajennukset, kuten OAuth-asiakastunnistetiedot ja yrityksen hallinnoiman valtuutuksen, joka tukee isännöidyn todennuksen ulkoistamista luettelomuodon haaroittamisen sijaan
- OpenAI dokumentoi julkisen asiakirjan MCP-palvelimen ja Codex MCP -määritysmallit, jotka ovat yhdenmukaisia jaetun luettelon ja asiakas-kirjoitusstrategian kanssa
- VS Code dokumentoi ensiluokkaisen MCP-tuen ja laajennusoppaan, joka vahvistaa sen omistetun "palvelinpohjaisen kirjoittajan" ylläpitämistä
- JetBrains AI Assistant dokumentoi MCP:n asennuksen tuotteen UX:n kautta vakaan alustojen välisen tiedostosopimuksen sijaan, mikä tukee sen pitämistä manuaalisen/katkelman alueella toistaiseksi---

## 🔮 Longer-Term Decision Points

Vain muutama strateginen kysymys on aidosti avoinna:

1. Tyhjentääkö joku nykyisen matriisin ulkopuolella oleva asiakas todella ensimmäisen luokan kirjoittamisen riman vai pitäisikö muiden tuotteiden olla manuaalisia tai vain katkelmia
2. Milloin, jos koskaan, isännöidyn hallinnon tulisi siirtyä ulkoisen yhdyskäytävän tai yrityksen IDP:n taakse nykyisen prosessissa olevan perustilan sijaan?
3. Kuinka pitkälle arvioijan tulisi mennä arvioidessaan viitepaketin syvyyttä ja toiminnan laatua, ennen kuin siitä tulee liian mielivaltaista tekijöille?
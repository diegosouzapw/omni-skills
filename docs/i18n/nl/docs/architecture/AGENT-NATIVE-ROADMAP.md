# 🗺️ Agent-Native Roadmap (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Het architectuurevolutieplan voor Omni Skills: van een opslagplaats waarbij het installatieprogramma centraal staat, naar runtime voor een gedeelde catalogus die CLI, API, MCP en A2A mogelijk maakt zonder dubbele logica.**---

## 📊 Current Platform Areas

| Fase | Naam | Staat |
|:------|:-----|:-------|
| 1️⃣ | Contracten en artefacten | ✅ Actueel |
| 2️⃣ | Alleen-lezen catalogus-API | ✅ Actueel |
| 3️⃣ | MCP Discovery-oppervlak | ✅ Actueel |
| 4️⃣ | Lokaal installatie- en configuratieoppervlak | ✅ Actueel |
| 5️⃣ | A2A-orkestratie | ✅ Actueel |### ✅ What Exists Today

- machinaal leesbare catalogusartefacten in `dist/`
- alleen-lezen HTTP-API met eindpuntdekking voor zoeken, bundelen, vergelijken, installatieplanning en downloads
- MCP-server met `stdio`, streambare HTTP- en SSE-transporten
- lokale zijspan met schrijfbewerkingen op de toelatingslijst en `config-mcp`-stromen
- 7 clients die geschikt zijn voor installatie, 16 clients die geschikt zijn voor configuratie, 33 MCP-configuratiedoelen en 19 configuratieprofielen
- diepere bundelspecialisatie binnen `full-stack`, `security`, `devops` en `ai-engineer` via `auth-flows`, `threat-modeling`, `release-engineering` en `context-engineering`
- archieven per vaardigheid (`zip`, `tar.gz`) met SHA-256-checksums en losse handtekeningen op release-tags
- API-governancebasislijn: drager-/API-sleutelauthenticatie, beheerdersruntimeauthenticatie, snelheidsbeperking, auditlogboekregistratie, CORS/IP-toelatingslijsten, vertrouwensproxy, onderhoudsmodus en aanvraag-ID's
- A2A-runtime met taaklevenscyclus, JSON/SQLite-duurzaamheid, hervatten van herstart, SSE-streaming, annulering, pushmeldingen, optionele procesuitvoerder en opt-in gehuurde coördinatie### 🔭 Future Expansion Areas

De kernroadmap beschrijft nu de huidige platformscope. De overige items zijn toekomstige uitbreidingsgebieden, geen fundamentele hiaten:

- vanaf dit moment alleen nog zeer selectieve MCP-toevoegingen, en alleen daar waar officiële openbare documenten een veilige schrijver mogelijk maken
- diepere referentiepakketten en meer semantische scores, zodat de classificator uitzonderlijke vaardigheden blijft scheiden van louter gepolijste vaardigheden
- door de onderneming gehost beheer dat verder gaat dan de huidige basislijn in het proces, als het project later gateway- of IdP-integratie nodig heeft
- diepere specialisatie over de nieuw geactiveerde tracks 'design', 'tools', 'data-ai' en 'machine-learning'
- voortgezette operationele verfijning rond de private versterker met behoud van het formele operationele model: OmniRouter vastgemaakt aan `cx/gpt-5.4`, gehoste cloud in `nep` of gedegradeerde preflight, en betrouwbare `live` op LAN of zelf-gehoste uitvoering
- voortdurende release- en workflow-verharding alleen als werk van de kwaliteit van de dienstverlening, niet als ontbrekende platformfundament## Future Catalog Expansion Track

De eerste twee publieke categorie-uitbreidingsgolven zijn nu geland:

- `design` → `design-systems-ops`, `toegankelijkheid-audit`, `design-token-governance`
- `tools` → `mcp-server-authoring`
- `data-ai` → `datacontracten`
- `machine-learning` → `model-serving`

De volgende aanbevolen stap is niet langer categorie-activering op zichzelf. Het is bedoeld om deze nieuw actieve code-native tracks te verdiepen, zodat ze aanvoelen als duurzame productoppervlakken in plaats van als steunpunten voor één vaardigheid.

Aanbevolen richting:

1. Verdiep 'ontwerp' met meer operationele ontwerpsysteemworkflows
2. Verdiep de `tools` met vaardigheden op het gebied van schrijven en plug-ins
3. Verdiep 'data-ai' met implementatie-eerste pijplijn- en instrumentatievaardigheden
4. 'machine-learning' verdiepen met vaardigheden op het gebied van bediening, training en evaluatie

Categorieën zijn opzettelijk uitgesteld, tenzij er sterke code-native voorstellen verschijnen:

- `zaken`
- `inhoud-media`

Die uitbreidingsgeschiedenis wordt nu bijgehouden in:

- [../tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Zorg ervoor dat de huidige `npx omni-skills`-workflow blijft werken
- ✅ Introduceer een machinaal leesbare bron van waarheid voor vaardigheden
- ✅ Ondersteuning van detectie, aanbeveling en installatieplanning door agenten
- ✅ Scheid zorgen over externe catalogi van schrijfbewerkingen op het lokale bestandssysteem
- ✅ Hergebruik dezelfde metadata in CLI, API, MCP en A2A---

## 🚫 Non-Goals

- ❌ Externe installatie op een gebruikersmachine vanaf een gehoste server
- ❌ Vervang `SKILL.md` als het canonieke auteursformaat
- ❌ Vereisen dat bijdragers manifesten met de hand schrijven
- ❌ Verander het project standaard in een zwaar gehost wachtrijplatform---

## 🏗️ Target Architecture

Eén**cataloguskern**met drie protocoloppervlakken:

| Oppervlakte | Beste voor | Modus |
|:--------|:---------|:-----|
| 🌐**REST-API**| Registertoegang, UI-integraties, externe consumenten | Alleen-lezen |
| 🔌**MCP**| Agentdetectie, installatievoorbeelden, configuratieschrijven, clientrecepten | Alleen-lezen + lokale schrijfbewerkingen |
| 🤖**A2A**| Agent-naar-agent-orkestratie en overdracht van installatieplan | Taaklevenscyclus met eenvoudige lokale duurzaamheid |### ⚙️ Core Principle

>**Alle protocollen gebruiken dezelfde gegenereerde artefactfamilie.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Het manifest blijft het gedeelde contract. Archieven zijn distributieartefacten die bovenop dat contract liggen, en geen vervanging ervan.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Gebruikt door gehoste API en externe MCP-servers.

| ✅ Toegestaan ​​| ❌ Niet toegestaan ​​|
|:-----------|:--------------|
| Zoekvaardigheden | Schrijf naar het bestandssysteem van de beller |
| Manifesten ophalen | Muteer lokale clientconfiguratie |
| Vaardigheden vergelijken | Willekeurige machinestatus afleiden |
| Bundels aanbevelen | — |
| Installatieplannen maken | — |### 2️⃣ Local Installer Mode

Gebruikt door de CLI en het MCP zijspan.

| ✅ Toegestaan ​​|
|:-----------|
| Detecteer lokale AI-clients |
| Geïnstalleerde vaardigheden inspecteren |
| Voorbeeld van bestandsbewerkingen |
| Vaardigheidsmappen installeren of verwijderen |
| Schrijf lokale MCP-configuratie na preview |

> 📌 Dit blijft de enige modus waarin echte OS-schrijfbewerkingen plaatsvinden.---

## 📐 Protocol Split

### 🌐 REST API

Beste voor toegang tot het register, zoeken, vergelijken, downloaden van versies en installatieplanning.

**Eindpunten**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Het beste voor op tools gebaseerde detectie, directe aanbevelingen, installatievoorbeelden en klantspecifieke MCP-installatie.

**Alleen-lezen tools**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Lokale tools**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Het beste voor detectieoverdracht, workflows voor installatieplannen en hervatbare uitvoering van agenttaken.

**Huidige activiteiten**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

| Principe | Implementatie |
|:----------|:--------------|
| 🔒 Gehoste services zijn alleen-lezen | API en externe MCP schrijven niet naar het bestandssysteem van de aanroeper |
| 📂 Schrijft blijf lokaal | Alleen CLI en MCP zijspan |
| 👁️ Bekijk een voorbeeld voordat u schrijft | Dry-run standaardwaarden voor lokale mutaties |
| 🔑 Integriteit is expliciet | SHA-256-controlesommen voor gegenereerde artefacten |
| ✍️ Vertrouwen loslaten is expliciet | Vrijstaande handtekeningen afgedwongen op releasetags |
| ⚠️ Risico is aan het licht gekomen | Metagegevens over risico's en beveiliging verspreiden zich naar elk runtime-oppervlak |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- gedocumenteerde doelarchitectuur
- gedefinieerd manifest schema
- gegenereerde metadata, catalogus, manifesten, bundels en archieven### Phase 2: Catalog Service

- alleen-lezen HTTP API met Express 5
- zoeken, filteren, opzoeken van manifesten, bundellijst, vergelijking en downloads
- Env-gedreven gehoste governancebasislijn### Phase 3: MCP Discovery

- officiële `@modelcontextprotocol/sdk`-integratie
- `stdio`, streambare HTTP- en SSE-transporten
- alleen-lezen tools, bronnen en aanwijzingen ondersteund door de gedeelde catalogus### Phase 4: Local Install and Config Surface

- lokaal zijspan met schrijfbewerkingen op de toelatingslijst
- detectie voor 7 clients die geschikt zijn voor installatie
- configuratieschrijven voor 16 config-compatibele clients op 33 doelen en 19 configuratieprofielen
- begeleide `config-mcp`-stromen in de CLI en visuele shell
- stabiele ondersteuning voor Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose en Dev Containers### Phase 5: A2A Orchestration

- agentkaart op `/.well-known/agent.json`
- `bericht/verzenden`, `bericht/stream`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe` en configuratiemethoden voor pushmeldingen
- JSON- en SQLite-persistentie met herstartherstel
- optioneel externe procesuitvoerder
- opt-in geleasde uitvoering voor alle werknemers voor SQLite en optionele geavanceerde Redis-coördinatie
- simple-first standaardwaarden bewaard in geheugen, JSON of SQLite zonder externe afhankelijkheden### Current Enhancer Operating Decision

Het ondersteunde ‘live’-model van de private versterker is nu expliciet:

- gehoste PR-automatisering voert een preflight-gated 'live'-poging uit
- als de openbare OmniRoute-gateway geblokkeerd of instabiel is, wordt de PR gemarkeerd als 'geblokkeerd' met een operatorgerichte reden in plaats van ondoorzichtig te mislukken
- het canonieke betrouwbare 'live' pad blijft LAN of lokale service-uitvoering
- geplande privé GitHub-uitvoeringen blijven standaard 'mock' tenzij een operator expliciet om 'live' vraagt---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Beslissing**: behoud het manifest als het gedeelde contract en bewaar de ondertekende archieven per vaardigheid als distributieoppervlak.

**Waarom**:
- CLI, API, MCP en A2A gebruiken al de genormaliseerde manifestvorm
- archieven zijn ideaal voor downloaden en verificatie, maar slecht als enige ontdekkingscontract
- hierdoor blijft het schrijven eenvoudig en de distributie controleerbaar### 2. Private or Premium Catalogs

**Beslissing**: hergebruik hetzelfde manifest- en catalogusformaat, en laagverificatie of beleid extern.

**Waarom**:
- het vermijdt het splitsen van het datamodel
- het sluit aan bij de huidige API/MCP-governanceaanpak
- het blijft compatibel met de richting van het MCP-ecosysteem rond OAuth-clientreferenties en door de onderneming beheerde autorisatie### 3. Client Writer Strategy

**Beslissing**: convergeer naar een klein aantal canonieke exportfamilies en bewaar alleen op maat gemaakte schrijvers waar officiële klantdocumenten dit vereisen.

**Canonieke families nu in gebruik**:
- JSON `mcpServers`
- JSON-`servers`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Waarom**:
- het houdt de implementatie onderhoudbaar
- het ondersteunt nog steeds klantspecifieke behoeften zoals Claude-instellingen, Continue YAML, Zed `context_servers` en Codex TOML
- het vermijdt het uitvinden van kwetsbare schrijvers voor klanten zonder stabiele openbare configuratiedocumenten---

## 🌍 Research Notes Behind Those Decisions

De huidige beslissingen zijn getoetst aan officiële ecosysteemdocumenten:

- het MCP-ecosysteem documenteert nu optionele uitbreidingen zoals OAuth-clientreferenties en door de onderneming beheerde autorisatie, die het externaliseren van gehoste authenticatie ondersteunt in plaats van het catalogusformaat te forken
- OpenAI documenteert een openbare docs MCP-server en Codex MCP-configuratiepatronen die aansluiten bij het gedeelde manifest plus de client-writer-strategie
- VS Code documenteert eersteklas MCP-ondersteuning en een uitbreidingsgids, die het onderhoud van de speciale op 'servers' gebaseerde schrijver versterkt
- JetBrains AI Assistant documenteert de MCP-installatie via product-UX in plaats van een stabiel platformonafhankelijk bestandscontract, dat het voorlopig ondersteunt om het in handmatig/fragmentgebied te houden---

## 🔮 Longer-Term Decision Points

Slechts een paar strategische vragen blijven werkelijk open:

1. Of een klant buiten de huidige matrix echt de lat hoger legt voor eersteklas schrijven, of dat de overige producten handmatig/alleen fragmenten moeten blijven
2. Wanneer moet het gehoste bestuur zich achter een externe gateway of ondernemings-IdP verplaatsen in plaats van de huidige in-process basislijn?
3. Hoe ver moet de scorer gaan in het evalueren van de diepgang en de operationele kwaliteit van het referentiepakket voordat deze te eigenwijs wordt voor de bijdragers?
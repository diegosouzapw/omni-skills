# 🗺️ Agent-Native Roadmap (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Arkitekturudviklingsplanen for Omni Skills: fra installatør-første lager til delt katalogruntime, der driver CLI, API, MCP og A2A uden at duplikere logik.**---

## 📊 Current Platform Areas

| Fase | Navn | Status |
|:------|:-----|:-------|
| 1️⃣ | Kontrakter og artefakter | ✅ Nuværende |
| 2️⃣ | Read-Only Catalog API | ✅ Nuværende |
| 3️⃣ | MCP Discovery Surface | ✅ Nuværende |
| 4️⃣ | Lokal installation og konfigurationsoverflade | ✅ Nuværende |
| 5️⃣ | A2A Orchestration | ✅ Nuværende |### ✅ What Exists Today

- maskinlæsbare katalogartefakter i `dist/`
- skrivebeskyttet HTTP API med slutpunktsdækning til søgning, bundter, sammenligning, installationsplanlægning og downloads
- MCP-server med 'stdio', streambar HTTP og SSE-transporter
- lokal sidevogn med tilladelseslistede skrivninger og `config-mcp` flows
- 7 installationskompatible klienter, 16 konfigurationskompatible klienter, 33 MCP konfigurationsmål og 19 konfigurationsprofiler
- dybere bundle-specialisering i "full-stack", "security", "devops" og "ai-engineer" via "auth-flows", "threat-modeling", "release-engineering" og "context-engineering".
- Per-skill-arkiver (`zip`, `tar.gz`) med SHA-256-kontrolsummer og adskilte signaturer på release-tags
- API-styringsbaseline: bærer/API-nøglegodkendelse, admin runtime-godkendelse, hastighedsbegrænsning, revisionslogning, CORS/IP-tilladelseslister, tillidsproxy, vedligeholdelsestilstand og anmodnings-id'er
- A2A-runtime med opgavelivscyklus, JSON/SQLite-holdbarhed, genstarts-genoptagelse, SSE-streaming, annullering, push-meddelelser, valgfri procesudførelse og opt-in-leaset koordinering### 🔭 Future Expansion Areas

Kerneplanen beskriver nu det nuværende platformsomfang. De resterende elementer er fremtidige udvidelsesområder, ikke fundamentelle huller:

- kun meget selektive MCP-tilføjelser fra dette tidspunkt og frem, og kun hvor officielle offentlige dokumenter gør en sikker forfatter mulig
- dybere referencepakker og mere semantisk scoring, så klassificeringen bliver ved med at adskille exceptionelle færdigheder fra blot polerede færdigheder
- virksomhedshostet styring ud over den nuværende basislinje i processen, hvis projektet senere har brug for gateway- eller IdP-integration
- dybere specialisering på tværs af de nyligt aktiverede "design", "værktøjer", "data-ai" og "machine-learning" spor
- Fortsat operationel polering omkring den private forstærker, mens dens formelle driftsmodel bevares: OmniRouter fastgjort til `cx/gpt-5.4`, hostet sky i "mock" eller forringet preflight og pålidelig "live" på LAN eller selv-hostet udførelse
- Fortsat frigivelse og arbejdsganghærdning kun som kvalitetsarbejde, ikke som manglende platformfundament## Future Catalog Expansion Track

De første to offentlige kategori-udvidelsesbølger er nu landet:

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `værktøjer` → `mcp-server-authoring`
- `data-ai` → `data-kontrakter`
- `maskine-læring` → `model-servering`

Det næste anbefalede trin er ikke længere kategoriaktivering for sin egen skyld. Det er for at uddybe disse nyligt aktive kodeindfødte spor, så de føles som holdbare produktoverflader snarere end fodfæste med enkeltfærdigheder.

Anbefalet retning:

1. uddybe `design` med mere operationelle design-system workflows
2. uddybe `værktøjer` med forfatter- og plugin-orienterede færdigheder
3. uddybe `data-ai` med implementering-første pipeline og instrumenteringsfærdigheder
4. uddybe "maskinlæring" med færdigheder i servering, træning og evaluering

Kategorier, der med vilje er udskudt, medmindre der vises stærke kodeindbyggede forslag:

- `forretning`
- `indhold-medier`

Denne udvidelseshistorie spores nu i:

- [../tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Hold den nuværende 'npx omni-skills' arbejdsgang i gang
- ✅ Introducer en maskinlæsbar kilde til sandhed for færdigheder
- ✅ Støt opdagelse, anbefaling og installationsplanlægning af agenter
- ✅ Adskil fjernkatalogproblemer fra lokale filsystemskrivninger
- ✅ Genbrug de samme metadata på tværs af CLI, API, MCP og A2A---

## 🚫 Non-Goals

- ❌ Fjerninstallation-på-bruger-maskine fra en hostet server
- ❌ Erstat `SKILL.md` som det kanoniske forfatterformat
- ❌ Kræv, at bidragydere skriver manifester i hånden
- ❌ Gør som standard projektet til en tung hostet køplatform---

## 🏗️ Target Architecture

Én**katalogkerne**med tre protokoloverflader:

| Overflade | Bedst til | Tilstand |
|:--------|:--------|:-----|
| 🌐**REST API**| Registry adgang, UI integrationer, tredjeparts forbrugere | Skrivebeskyttet |
| 🔌**MCP**| Agentopdagelse, installationseksempler, konfigurationsskrivning, klientopskrifter | Skrivebeskyttet + lokale skriver |
| 🤖**A2A**| Agent-til-agent orkestrering og overdragelse af installationsplan | Opgavelivscyklus med enkel-først lokal holdbarhed |### ⚙️ Core Principle

>**Alle protokoller bruger den samme genererede artefaktfamilie.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Manifestet forbliver den delte kontrakt. Arkiver er distributionsartefakter lagt oven på den kontrakt, ikke en erstatning for den.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Anvendes af hostede API og eksterne MCP-servere.

| ✅ Tilladt | ❌ Ikke tilladt |
|:-----------|:--------------|
| Søgefærdigheder | Skriv til den kaldendes filsystem |
| Hent manifester | Mutér lokal klientkonfiguration |
| Sammenlign færdigheder | Udled vilkårlig maskintilstand |
| Anbefal bundter | — |
| Byg installationsplaner | — |### 2️⃣ Local Installer Mode

Anvendes af CLI og MCP sidevogn.

| ✅ Tilladt |
|:-----------|
| Opdag lokale AI-klienter |
| Inspicer installerede færdigheder |
| Forhåndsvisning af filhandlinger |
| Installer eller fjern færdighedsmapper |
| Skriv lokal MCP-konfiguration efter forhåndsvisning |

> 📌 Dette er fortsat den eneste tilstand, hvor der sker rigtige OS-skrivninger.---

## 📐 Protocol Split

### 🌐 REST API

Bedst til registreringsadgang, søgning, sammenligning, versionerede downloads og installationsplanlægning.

**Endpoints**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Bedst til værktøjsbaseret opdagelse, hurtige anbefalinger, installationseksempler og klientspecifik MCP-opsætning.

**Skrivebeskyttede værktøjer**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Lokale værktøjer**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Bedst til opdagelsesoverdragelse, installationsplanarbejdsgange og genanvendelig udførelse af agentopgaver.

**Nuværende operationer**: `opdag-færdigheder` · `anbefal-stak` · `forbered-installation-plan`---

## 🛡️ Security Model

| Princip | Implementering |
|:----------|:--------------|
| 🔒 Hostede tjenester er skrivebeskyttede | API og fjern-MCP skriver ikke til kalderens filsystem |
| 📂 Skriver bliv lokalt | Kun CLI og MCP sidevogn |
| 👁️ Forhåndsvisning før skrivning | Dry-run standarder på lokale mutationer |
| 🔑 Integritet er eksplicit | SHA-256 kontrolsummer for genererede artefakter |
| ✍️ Tillid til frigivelse er eksplicit | Adskilte signaturer håndhæves på frigivelsesmærker |
| ⚠️ Risiko er dukket op | Risiko- og sikkerhedsmetadata forplanter sig til hver runtime-overflade |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- dokumenteret målarkitektur
- defineret manifest skema
- genereret metadata, katalog, manifester, bundter og arkiver### Phase 2: Catalog Service

- skrivebeskyttet HTTP API med Express 5
- søgning, filtrering, manifestopslag, bundtliste, sammenligning og downloads
- env-drevet hosted styringsgrundlinje### Phase 3: MCP Discovery

- officiel `@modelcontextprotocol/sdk` integration
- `stdio`, streambare HTTP og SSE-transporter
- skrivebeskyttede værktøjer, ressourcer og prompter understøttet af det delte katalog### Phase 4: Local Install and Config Surface

- lokal sidevogn med tilladelsesliste skriver
- Detektion for 7 installationskompatible klienter
- konfigurationsskrivning for 16 konfigurationskompatible klienter på tværs af 33 mål og 19 konfigurationsprofiler
- guidede `config-mcp` flows i CLI og visuelle shell
- Stabil understøttelse af Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose og Dev Containers### Phase 5: A2A Orchestration

- agentkort på `/.well-known/agent.json`
- `besked/send`, `besked/stream`, `opgaver/hent`, `opgaver/annuller`, `opgaver/gentilmeld` og push-notifikationskonfigurationsmetoder
- JSON og SQLite persistens med genstart gendannelse
- valgfri ekstern procesudøver
- opt-in leaset eksekvering på tværs af arbejdere for SQLite og valgfri avanceret Redis-koordinering
- simple-first standarder bevaret på hukommelse, JSON eller SQLite uden eksterne afhængigheder### Current Enhancer Operating Decision

Den private enhancers understøttede "live"-model er nu eksplicit:

- Hosted PR-automatisering kører et "live"-forsøg med preflight-gated
- hvis den offentlige OmniRoute-gateway er blokeret eller ustabil, markeres PR'en "blokeret" med en operatør-vendt årsag i stedet for at fejle uigennemsigtigt
- den kanoniske pålidelige "live"-sti forbliver LAN eller lokal tjenesteudførelse
- planlagte private GitHub-kørsler forbliver som standard 'mock', medmindre en operatør eksplicit anmoder om 'live'---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Beslutning**: behold manifestet som den delte kontrakt, og behold underskrevne arkiver pr. færdighed som distributionsoverflade.

**Hvorfor**:
- CLI, API, MCP og A2A bruger allerede den normaliserede manifestform
- Arkiver er ideelle til download og verifikation, men dårlige som den eneste opdagelseskontrakt
- Dette gør forfatteren enkel og distributionen verificerbar### 2. Private or Premium Catalogs

**Beslutning**: Genbrug det samme manifest og katalogformat og laggodkendelse eller politik eksternt.

**Hvorfor**:
- det undgår at forgrene datamodellen
- det matcher den nuværende API/MCP-styringstilgang
- det forbliver kompatibelt med MCP-økosystemretning omkring OAuth-klientlegitimationsoplysninger og virksomhedsadministreret godkendelse### 3. Client Writer Strategy

**Beslutning**: konverger med et lille sæt kanoniske eksportfamilier og behold kun skræddersyede forfattere, hvor officielle klientdokumenter kræver det.

**Kanoniske familier er nu i brug**:
- JSON `mcpServers`
- JSON 'servere'
- JSON `kontekstservere`
- YAML `mcpServers`
- TOML `[mcp_servere]`

**Hvorfor**:
- det holder implementeringen vedligeholdelsesdygtig
- det understøtter stadig klientspecifikke behov såsom Claude-indstillinger, Continue YAML, Zed `context_servers` og Codex TOML
- det undgår at opfinde skrøbelige forfattere til klienter uden stabile offentlige konfigurationsdokumenter---

## 🌍 Research Notes Behind Those Decisions

De nuværende beslutninger blev kontrolleret i forhold til officielle økosystemdokumenter:

- MCP-økosystemet dokumenterer nu valgfri udvidelser såsom OAuth-klientlegitimationsoplysninger og virksomhedsadministreret godkendelse, som understøtter eksternalisering af værtsgodkendelse i stedet for at forkaste katalogformatet
- OpenAI dokumenterer en offentlig docs MCP-server og Codex MCP-konfigurationsmønstre, der stemmer overens med den delte manifest plus klient-skriver-strategi
- VS Code dokumenterer førsteklasses MCP-understøttelse og en udvidelsesvejledning, som styrker vedligeholdelsen af dens dedikerede `servere`-baserede skriver
- JetBrains AI Assistant dokumenterer MCP-opsætning gennem produkt-UX snarere end en stabil filkontrakt på tværs af platforme, som understøtter at holde den i manuel/snippet-territorium indtil videre---

## 🔮 Longer-Term Decision Points

Kun nogle få strategiske spørgsmål er reelt åbne:

1. Om en klient ud over den aktuelle matrix virkelig rydder baren for førsteklasses skrivning, eller om de resterende produkter skal forblive manuelle/kun uddrag
2. Hvornår, hvis nogensinde, bør hosted governance flytte sig bag en ekstern gateway eller virksomheds-IDP i stedet for den nuværende baseline i processen?
3. Hvor langt skal scoreren gå i at evaluere referencepakkens dybde og operationelle kvalitet, før den bliver for meningsfuld for bidragyderne?
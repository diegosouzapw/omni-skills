# 🗺️ Agent-Native Roadmap (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Arkitekturutviklingsplanen for Omni Skills: fra installatør-første repository til delt katalogkjøring som driver CLI, API, MCP og A2A uten å duplisere logikk.**---

## 📊 Current Platform Areas

| Fase | Navn | Status |
|:------|:-----|:-------|
| 1️⃣ | Kontrakter og gjenstander | ✅ Nåværende |
| 2️⃣ | Read-One Catalog API | ✅ Nåværende |
| 3️⃣ | MCP Discovery Surface | ✅ Nåværende |
| 4️⃣ | Lokal installasjon og konfigurasjonsoverflate | ✅ Nåværende |
| 5️⃣ | A2A Orchestration | ✅ Nåværende |### ✅ What Exists Today

- maskinlesbare katalogartefakter i `dist/`
- skrivebeskyttet HTTP API med endepunktdekning for søk, pakker, sammenligning, installeringsplanlegging og nedlastinger
- MCP-server med 'stdio', streambar HTTP og SSE-transporter
- lokal sidevogn med godkjenningslistede skriv og `config-mcp`-flyter
- 7 installeringskompatible klienter, 16 konfigurasjonskompatible klienter, 33 MCP-konfigurasjonsmål og 19 konfigurasjonsprofiler
- dypere buntspesialisering i "full stack", "sikkerhet", "devops" og "ai-engineer" via "auth-flows", "threat-modeling", "release-engineering" og "context-engineering".
- arkiver per ferdighet (`zip`, `tar.gz`) med SHA-256-sjekksummer og løsrevne signaturer på utgivelsesetiketter
- Grunnlinje for API-styring: bærer/API-nøkkelautentisering, admin kjøretidsautentisering, hastighetsbegrensning, revisjonslogging, CORS/IP-godkjenningslister, trust proxy, vedlikeholdsmodus og forespørsels-IDer
- A2A-kjøring med oppgavelivssyklus, JSON/SQLite-holdbarhet, omstart-CV, SSE-streaming, kansellering, push-varslinger, valgfri prosessutøver og opt-in leide koordinering### 🔭 Future Expansion Areas

Kjerneveikartet beskriver nå gjeldende plattformomfang. De gjenværende elementene er fremtidige ekspansjonsområder, ikke grunnlagshull:

- bare svært selektive MCP-tilføyelser fra nå av, og bare der offisielle offentlige dokumenter gjør en sikker forfatter mulig
- dypere referansepakker og mer semantisk scoring slik at klassifisereren fortsetter å skille eksepsjonelle ferdigheter fra bare polerte ferdigheter
- bedriftsdrevet styring utover den nåværende basislinjen i prosessen, hvis prosjektet senere trenger gateway- eller IdP-integrasjon
- dypere spesialisering på tvers av de nylig aktiverte sporene "design", "verktøy", "data-ai" og "maskinlæring".
- Fortsatt operasjonell polering rundt den private forsterkeren samtidig som dens formelle driftsmodell beholder: OmniRouter festet til "cx/gpt-5.4", hosted cloud i "mock" eller degradert preflight, og pålitelig "live" på LAN eller selvhostet utførelse
- Fortsatt utgivelse og arbeidsflytherding kun som kvalitetsarbeid, ikke som manglende plattformfundament## Future Catalog Expansion Track

De to første offentlige kategoriekspansjonsbølgene er nå landet:

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `verktøy` → `mcp-server-authoring`
- `data-ai` → `data-kontrakter`
- `maskinlæring` → `modellservering`

Det neste anbefalte trinnet er ikke lenger kategoriaktivering for sin egen skyld. Det er for å utdype disse nylig aktive kode-innfødte sporene slik at de føles som holdbare produktoverflater i stedet for enkeltferdighets fotfeste.

Anbefalt retning:

1. utdype `design` med mer operative design-system arbeidsflyter
2. utdype `verktøy` med forfatter- og plugin-orienterte ferdigheter
3. utdype `data-ai` med implementering-første pipeline og instrumenteringsferdigheter
4. utdype "maskinlæring" med ferdigheter i servering, opplæring og evaluering

Kategorier som med vilje er utsatt med mindre sterke kodebaserte forslag vises:

- `virksomhet`
- `innholdsmedia`

Ekspansjonshistorikken spores nå i:

- [../tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Hold den nåværende 'npx omni-skills' arbeidsflyten i gang
- ✅ Introduser en maskinlesbar kilde til sannhet for ferdigheter
- ✅ Støtt oppdagelse, anbefaling og installasjonsplanlegging av agenter
- ✅ Skill eksterne katalogproblemer fra lokale filsystemskrivinger
- ✅ Gjenbruk de samme metadataene på tvers av CLI, API, MCP og A2A---

## 🚫 Non-Goals

- ❌ Fjerninstallasjon-på-bruker-maskin fra en vertsserver
- ❌ Erstatt `SKILL.md` som det kanoniske forfatterformatet
- ❌ Krev at bidragsytere skriver manifester for hånd
- ❌ Gjør prosjektet til en tung vertskøplattform som standard---

## 🏗️ Target Architecture

Én**katalogkjerne**med tre protokolloverflater:

| Overflate | Best for | Modus |
|:--------|:--------|:-----|
| 🌐**REST API**| Registertilgang, UI-integrasjoner, tredjepartsforbrukere | Skrivebeskyttet |
| 🔌**MCP**| Agentoppdagelse, installeringsforhåndsvisninger, konfigurasjonsskriving, klientoppskrifter | Skrivebeskyttet + lokale skriver |
| 🤖**A2A**| Agent-til-agent orkestrering og overlevering av installasjonsplan | Oppgavelivssyklus med enkel-først lokal holdbarhet |### ⚙️ Core Principle

>**Alle protokoller bruker den samme genererte artefaktfamilien.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Manifestet forblir den delte kontrakten. Arkiver er distribusjonsartefakter lagt på toppen av den kontrakten, ikke en erstatning for den.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Brukes av vertsbasert API og eksterne MCP-servere.

| ✅ Tillatt | ❌ Ikke tillatt |
|:-----------|:--------------|
| Søkeferdigheter | Skriv til innringerens filsystem |
| Hent manifester | Muter lokal klientkonfigurasjon |
| Sammenlign ferdigheter | Utlede vilkårlig maskintilstand |
| Anbefal pakker | — |
| Bygg installasjonsplaner | — |### 2️⃣ Local Installer Mode

Brukes av CLI og MCP sidevogn.

| ✅ Tillatt |
|:-----------|
| Oppdag lokale AI-klienter |
| Inspiser installerte ferdigheter |
| Forhåndsvis filoperasjoner |
| Installer eller fjern ferdighetskataloger |
| Skriv lokal MCP-konfigurasjon etter forhåndsvisning |

> 📌 Dette er fortsatt den eneste modusen der ekte OS-skriving skjer.---

## 📐 Protocol Split

### 🌐 REST API

Best for registertilgang, søk, sammenligning, versjonerte nedlastinger og installasjonsplanlegging.

**Endepunkter**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Best for verktøybasert oppdagelse, forespørbare anbefalinger, installeringsforhåndsvisninger og klientspesifikt MCP-oppsett.

**Skrivebeskyttede verktøy**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Lokale verktøy**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Best for overlevering av oppdagelse, arbeidsflyter for installasjonsplaner og gjenopptas utførelse av agentoppgaver.

**Gjeldende operasjoner**: `oppdag ferdigheter` · `anbefal-stack` · `forbered-installer-plan`---

## 🛡️ Security Model

| Prinsipp | Implementering |
|:----------|:--------------|
| 🔒 Vertsbaserte tjenester er skrivebeskyttet | API og ekstern MCP skriver ikke til anropsfilsystemet |
| 📂 Skriver stay local | Kun CLI og MCP sidevogn |
| 👁️ Forhåndsvis før skriving | Tørrkjøringsstandarder på lokale mutasjoner |
| 🔑 Integritet er eksplisitt | SHA-256-sjekksummer for genererte artefakter |
| ✍️ Utgivelsestillit er eksplisitt | Atskilte signaturer håndhevet på utgivelsesetiketter |
| ⚠️ Risiko er dukket opp | Risiko- og sikkerhetsmetadata sprer seg til hver kjøretidsoverflate |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- dokumentert målarkitektur
- definert manifestskjema
- generert metadata, katalog, manifester, bunter og arkiver### Phase 2: Catalog Service

- skrivebeskyttet HTTP API med Express 5
- søk, filtrering, manifestoppslag, pakkeoppføring, sammenligning og nedlastinger
- env-drevet vertsstyrt basislinje### Phase 3: MCP Discovery

- offisiell `@modelcontextprotocol/sdk` integrasjon
- "stdio", streambar HTTP og SSE-transporter
- skrivebeskyttede verktøy, ressurser og forespørsler støttet av den delte katalogen### Phase 4: Local Install and Config Surface

- lokal sidevogn med godkjenningsliste skriver
- deteksjon for 7 installeringskompatible klienter
- konfigurasjonsskriving for 16 konfigurasjonskompatible klienter på tvers av 33 mål og 19 konfigurasjonsprofiler
- guidede 'config-mcp'-flyter i CLI og visuelle skall
- Stabil støtte for Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose og Dev Containers### Phase 5: A2A Orchestration

- agentkort på `/.well-known/agent.json`
- Metoder for «melding/send», «melding/strøm», «oppgaver/hent», «oppgaver/avbryt», «oppgaver/abonner på nytt» og push-varsling
- JSON- og SQLite-utholdenhet med gjenoppretting på nytt
- valgfri ekstern prosessutøver
- opt-in leid utførelse på tvers av arbeidere for SQLite og valgfri avansert Redis-koordinering
- simple-first standarder holdt på minne, JSON eller SQLite uten eksterne avhengigheter### Current Enhancer Operating Decision

Den private forsterkerens støttede «live»-modell er nå eksplisitt:

- Vertsbasert PR-automatisering kjører et forhåndskontrollert "live"-forsøk
- hvis den offentlige OmniRoute-gatewayen er blokkert eller ustabil, er PR-en merket med "blokkert" med en årsak til operatøren i stedet for å svikte ugjennomsiktig
- den kanoniske pålitelige "live" banen forblir LAN eller lokal tjenesteutførelse
- planlagte private GitHub-kjøringer forblir "mock" som standard med mindre en operatør eksplisitt ber om "live"---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Beslutning**: behold manifestet som den delte kontrakten og behold signerte arkiver per ferdighet som distribusjonsoverflate.

**Hvorfor**:
- CLI, API, MCP og A2A bruker allerede den normaliserte manifestformen
- Arkiver er ideelle for nedlasting og verifisering, men dårlige som eneste oppdagelseskontrakt
- Dette gjør forfatteren enkel og distribusjonen verifiserbar### 2. Private or Premium Catalogs

**Beslutning**: gjenbruk det samme manifestet og katalogformatet, og lagautentisering eller policy eksternt.

**Hvorfor**:
- den unngår forgrening av datamodellen
- det samsvarer med gjeldende API/MCP-styringsmetode
- den forblir kompatibel med MCP-økosystemretningen rundt OAuth-klientlegitimasjon og bedriftsadministrert autorisasjon### 3. Client Writer Strategy

**Beslutning**: konverger med et lite sett med kanoniske eksportfamilier og behold skreddersydde forfattere kun der offisielle klientdokumenter krever det.

**Kanoniske familier er nå i bruk**:
- JSON `mcpServers`
- JSON `servere`
- JSON `kontekstservere`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Hvorfor**:
- det holder implementeringen vedlikeholdbar
- den støtter fortsatt klientspesifikke behov som Claude-innstillinger, Continue YAML, Zed `context_servers` og Codex TOML
- den unngår å finne opp skjøre forfattere for klienter uten stabile offentlige konfigurasjonsdokumenter---

## 🌍 Research Notes Behind Those Decisions

De nåværende avgjørelsene ble kontrollert mot offisielle økosystemdokumenter:

- MCP-økosystemet dokumenterer nå valgfrie utvidelser som OAuth-klientlegitimasjon og bedriftsadministrert autorisasjon, som støtter eksternalisering av vertsgodkjenning i stedet for å forkaste katalogformatet
- OpenAI dokumenterer en offentlig MCP-server for dokumenter og Codex MCP-konfigurasjonsmønstre som stemmer overens med strategien for delt manifest pluss klientskriver
- VS Code dokumenterer førsteklasses MCP-støtte og en utvidelsesguide, som forsterker vedlikeholdet av sin dedikerte `server`-baserte skriver
- JetBrains AI Assistant dokumenterer MCP-oppsett gjennom produkt-UX i stedet for en stabil filkontrakt på tvers av plattformer, som støtter å holde den i manuell/snippet-territorium for nå---

## 🔮 Longer-Term Decision Points

Bare noen få strategiske spørsmål forblir genuint åpne:

1. Om en klient utenfor den gjeldende matrisen virkelig rydder linjen for førsteklasses skriving, eller om de resterende produktene skal forbli manuelle/utdragbare
2. Når, om noen gang, bør vertsstyring flytte seg bak en ekstern gateway eller bedrifts-IDP i stedet for den nåværende grunnlinjen i prosessen?
3. Hvor langt bør scoreren gå i å evaluere referansepakkens dybde og driftskvalitet før den blir for meningsfull for bidragsytere?
# 🗺️ Agent-Native Roadmap (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Arkitekturutvecklingsplanen för Omni Skills: från installatörens första arkiv till delad katalogruntime som driver CLI, API, MCP och A2A utan att duplicera logik.**---

## 📊 Current Platform Areas

| Fas | Namn | Status |
|:------|:-----|:-------|
| 1️⃣ | Kontrakt och artefakter | ✅ Nuvarande |
| 2️⃣ | Read-Only Catalog API | ✅ Nuvarande |
| 3️⃣ | MCP Discovery Surface | ✅ Nuvarande |
| 4️⃣ | Lokal installation och konfigurering yta | ✅ Nuvarande |
| 5️⃣ | A2A Orchestration | ✅ Nuvarande |### ✅ What Exists Today

- maskinläsbara katalogartefakter i `dist/`
- skrivskyddad HTTP API med slutpunktstäckning för sökning, paket, jämför, installationsplanering och nedladdningar
- MCP-server med "stdio", streambar HTTP och SSE-transporter
- lokal sidovagn med tillåten skrivning och `config-mcp`-flöden
- 7 installationskompatibla klienter, 16 konfigurationskompatibla klienter, 33 MCP-konfigurationsmål och 19 konfigurationsprofiler
- djupare paketspecialisering i "full-stack", "säkerhet", "devops" och "ai-engineer" via "auth-flows", "threat-modeling", "release-engineering" och "context-engineering".
- Per-skill-arkiv (`zip`, `tar.gz`) med SHA-256-kontrollsummor och frigjorda signaturer på release-taggar
- Baslinje för API-styrning: autentisering av bärare/API-nyckel, autentisering av administratörskörning, hastighetsbegränsning, granskningsloggning, CORS/IP-godkännandelistor, förtroendeproxy, underhållsläge och begärande-ID:n
- A2A-körtid med uppgiftslivscykel, JSON/SQLite-hållbarhet, återstart av omstart, SSE-strömning, avbokning, push-meddelanden, valfri processexekvator och opt-in leasad koordinering### 🔭 Future Expansion Areas

Kärnfärdplanen beskriver nu den nuvarande plattformens omfattning. De återstående objekten är framtida expansionsområden, inte grundläggande luckor:

- endast mycket selektiva MCP-tillägg från denna punkt och framåt, och endast där officiella offentliga dokument gör en säker författare möjlig
- djupare referenspaket och mer semantisk poängsättning så att klassificeraren fortsätter att skilja exceptionella färdigheter från bara polerade färdigheter
- företagsvärd styrning bortom den nuvarande baslinjen i processen, om projektet senare behöver gateway- eller IdP-integration
- djupare specialisering över de nyligen aktiverade spåren "design", "verktyg", "data-ai" och "maskininlärning".
- Fortsatt operativ polering kring den privata förstärkaren samtidigt som den behåller sin formella driftsmodell: OmniRouter fäst till "cx/gpt-5.4", värd moln i "mock" eller försämrad preflight och pålitlig "live" på LAN eller egen värd körning
- Fortsatt release och hårdare arbetsflöde endast som kvalitetsarbete, inte som en saknad plattformsgrund## Future Catalog Expansion Track

De första två offentliga kategoriexpansionsvågorna är nu landade:

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `verktyg` → `mcp-server-authoring`
- `data-ai` → `data-kontrakt`
- `maskininlärning` → `modellservering`

Nästa rekommenderade steg är inte längre kategoriaktivering för sin egen skull. Det är för att fördjupa dessa nyligen aktiva kodbaserade spår så att de känns som hållbara produktytor snarare än fotfäste med enskild kompetens.

Rekommenderad riktning:

1. fördjupa `design` med mer operativa design-system arbetsflöden
2. fördjupa "verktyg" med författande och plugin-orienterade färdigheter
3. fördjupa "data-ai" med implementering-först pipeline och instrumenteringsfärdigheter
4. fördjupa "maskininlärning" med färdigheter i servering, utbildning och utvärdering

Kategorier som avsiktligt skjuts upp om inte starka kodbaserade förslag visas:

- `affärer`
- `innehåll-media`

Expansionshistoriken spåras nu i:

- [../tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALISATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Se till att det nuvarande arbetsflödet för 'npx omni-skills' fungerar
- ✅ Introducera en maskinläsbar källa till sanning för färdigheter
- ✅ Stödja upptäckt, rekommendation och installationsplanering av agenter
- ✅ Separera fjärrkatalogproblem från lokala filsystemskrivningar
- ✅ Återanvänd samma metadata över CLI, API, MCP och A2A---

## 🚫 Non-Goals

- ❌ Fjärrinstallera-på-användar-maskin från en värdserver
- ❌ Ersätt `SKILL.md` som det kanoniska författarformatet
- ❌ Kräv att bidragsgivare skriver manifest för hand
- ❌ Förvandla projektet till en tung värdköplattform som standard---

## 🏗️ Target Architecture

En**katalogkärna**med tre protokollytor:

| Yta | Bäst för | Läge |
|:--------|:--------|:-----|
| 🌐**REST API**| Registeråtkomst, UI-integrationer, tredjepartskonsumenter | Skrivskyddad |
| 🔌**MCP**| Agent upptäckt, installationsförhandsvisningar, konfigurationsskrivning, klientrecept | Skrivskyddat + lokala skriver |
| 🤖**A2A**| Agent-till-agent orkestrering och överlämnande av installationsplan | Uppgiftens livscykel med enkel-först lokal hållbarhet |### ⚙️ Core Principle

>**Alla protokoll använder samma genererade artefaktfamilj.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Manifestet förblir det delade kontraktet. Arkiv är distributionsartefakter skiktade ovanpå det kontraktet, inte en ersättning för det.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Används av värdbaserade API och fjärranslutna MCP-servrar.

| ✅ Tillåtet | ❌ Inte tillåtet |
|:-----------|:--------------|
| Sökkunskaper | Skriv till uppringarens filsystem |
| Hämta manifest | Mutera lokal klientkonfiguration |
| Jämför kompetens | Härleda godtyckligt maskintillstånd |
| Rekommendera paket | — |
| Bygga installationsplaner | — |### 2️⃣ Local Installer Mode

Används av CLI och MCP sidovagn.

| ✅ Tillåtet |
|:-----------|
| Upptäck lokala AI-klienter |
| Inspektera installerade färdigheter |
| Förhandsgranska filoperationer |
| Installera eller ta bort kompetenskataloger |
| Skriv lokal MCP-konfiguration efter förhandsgranskning |

> 📌 Detta är fortfarande det enda läget där riktiga OS-skrivningar händer.---

## 📐 Protocol Split

### 🌐 REST API

Bäst för registeråtkomst, sökning, jämförelse, versionsnedladdningar och installationsplanering.

**Slutpunkter**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Bäst för verktygsbaserad upptäckt, promptbara rekommendationer, installationsförhandsvisningar och klientspecifik MCP-inställning.

**Skrivskyddade verktyg**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Lokala verktyg**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Bäst för överlämning av upptäckter, arbetsflöden för installationsplaner och exekvering av agentuppdrag som kan återupptas.

**Nuvarande operationer**: `upptäck-färdigheter` · `rekommendera-stack` · `förbereda-installera-plan`---

## 🛡️ Security Model

| Princip | Genomförande |
|:----------|:--------------|
| 🔒 Värdtjänster är skrivskyddade | API och fjärr-MCP skriver inte till anroparens filsystem |
| 📂 Skriver stay local | Endast CLI och MCP sidvagn |
| 👁️ Förhandsgranska innan du skriver | Dry-run standardinställningar på lokala mutationer |
| 🔑 Integritet är explicit | SHA-256 kontrollsummor för genererade artefakter |
| ✍️ Frigörelseförtroende är explicit | Fristående signaturer påtvingade frisläppningstaggar |
| ⚠️ Risken har dykt upp | Risk- och säkerhetsmetadata sprider sig till varje runtime-yta |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- dokumenterad målarkitektur
- definierat manifestschema
- genererad metadata, katalog, manifest, buntar och arkiv### Phase 2: Catalog Service

- skrivskyddad HTTP API med Express 5
- sökning, filtrering, manifestsökning, paketlistning, jämförelse och nedladdningar
- Env-driven baslinje för värdstyrning### Phase 3: MCP Discovery

- officiell `@modelcontextprotocol/sdk` integration
- "stdio", strömmande HTTP- och SSE-transporter
- skrivskyddade verktyg, resurser och uppmaningar som backas upp av den delade katalogen### Phase 4: Local Install and Config Surface

- lokal sidvagn med godkända skriver
- detektering för 7 installationskompatibla klienter
- konfigurationsskrivning för 16 konfigurationskompatibla klienter över 33 mål och 19 konfigurationsprofiler
- guidade `config-mcp`-flöden i CLI och visuella skal
- Stabilt stöd för Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose och Dev Containers### Phase 5: A2A Orchestration

- agentkort på `/.well-known/agent.json`
- "meddelande/skicka", "meddelande/ström", "uppgifter/get", "uppgifter/avbryt", "uppgifter/prenumerera på nytt", och konfigurationsmetoder för push-meddelanden
- JSON- och SQLite-beständighet med omstartsåterställning
- valfri extern processexekutor
- opt-in leasad exekvering mellan arbetare för SQLite och valfri avancerad Redis-koordinering
- enkel-först standardvärden bevarade på minne, JSON eller SQLite utan externa beroenden### Current Enhancer Operating Decision

Den privata förstärkarens "live"-modell som stöds är nu explicit:

- Hosted PR-automation kör ett preflight-gated "live"-försök
- om den offentliga OmniRoute-gatewayen är blockerad eller instabil markeras PR:n "blockerad" med en anledning som vänder sig till operatören istället för att misslyckas helt
- den kanoniska tillförlitliga "live"-vägen förblir LAN eller lokal tjänst
- schemalagda privata GitHub-körningar förblir "mock" som standard om inte en operatör uttryckligen begär "live"---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Beslut**: behåll manifestet som det delade kontraktet och behåll undertecknade arkiv per kompetens som distributionsyta.

**Varför**:
- CLI, API, MCP och A2A konsumerar redan den normaliserade manifestformen
- Arkiv är idealiska för nedladdning och verifiering, men dåliga som det enda upptäcktskontraktet
- Detta håller författarskapen enkel och distributionen verifierbar### 2. Private or Premium Catalogs

**Beslut**: återanvänd samma manifest och katalogformat, och lagerautentisering eller policy externt.

**Varför**:
- det undviker att dela datamodellen
- det matchar den nuvarande API/MCP-styrningsmetoden
- det förblir kompatibelt med MCP-ekosystemriktningen kring OAuth-klientuppgifter och företagshanterad auktorisering### 3. Client Writer Strategy

**Beslut**: konvergera med en liten uppsättning kanoniska exportfamiljer och behåll endast skräddarsydda skribenter där officiella kunddokument kräver det.

**Kanoniska familjer används nu**:
- JSON `mcpServers`
- JSON `servrar`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Varför**:
- det håller implementeringen underhållbar
- det stöder fortfarande klientspecifika behov som Claude-inställningar, Continue YAML, Zed `context_servers` och Codex TOML
- det undviker att uppfinna ömtåliga skribenter för kunder utan stabila offentliga konfigurationsdokument---

## 🌍 Research Notes Behind Those Decisions

De nuvarande besluten kontrollerades mot officiella ekosystemdokument:

- MCP-ekosystemet dokumenterar nu valfria tillägg som OAuth-klientuppgifter och företagshanterad auktorisering, som stöder externisering av värdbaserad autentisering istället för att dela katalogformatet
- OpenAI dokumenterar en MCP-server för offentliga dokument och Codex MCP-konfigurationsmönster som är i linje med strategin för delat manifest plus klientskrivare
- VS Code dokumenterar förstklassigt MCP-stöd och en förlängningsguide, vilket förstärker underhållet av dess dedikerade "servrar"-baserade skrivare
- JetBrains AI Assistant dokumenterar MCP-installation genom produkt-UX snarare än ett stabilt plattformsoberoende filkontrakt, vilket stöder att behålla det i manuellt/snippet-territorium för tillfället---

## 🔮 Longer-Term Decision Points

Endast ett fåtal strategiska frågor är genuint öppna:

1. Huruvida någon klient bortom den aktuella matrisen verkligen rensar ribban för förstklassigt skrivande, eller om de återstående produkterna ska förbli manuella/endast utdrag
2. När, om någonsin, bör värdstyrning flytta bakom en extern gateway eller företags-IDP istället för den nuvarande baslinjen under processen?
3. Hur långt bör målskytten gå för att utvärdera referenspaketets djup och operativa kvalitet innan det blir för opinionsmässigt för bidragsgivare?
# 📖 Omni Skills — Documentation Hub (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**De centrale referentie voor het gebruiken, bedienen, uitbreiden en begrijpen van het huidige Omni Skills-platform.**

Standaard communitybestanden bevinden zich in de hoofdmap van de repository:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)---

## 📊 Status Snapshot

| Gebied | Staat | Details |
|:-----|:------|:--------|
| 🏗️**Runtime**| ✅ Actueel | Unified CLI, Ink Visual Shell, API, MCP en A2A worden allemaal vanuit hetzelfde pakket verzonden |
| 📦**Catalogus**| 📌 32 vaardigheden | 32 gepubliceerde 'L3'-vaardigheden in 15 actieve cataloguscategorieën en 7 volledig ondersteunde bundels |
| 🎯**Installeren**| ✅ Actueel | Begeleide TTY-installatie, selectieve `--skill` en `--bundle`, ondersteuning voor aangepaste paden en ontdekkingsgestuurde installatie |
| 🌐**API**| ✅ Actueel | Alleen-lezen register-API met auth, admin runtime, snelheidsbeperking, CORS/IP-toelatingslijsten, onderhoudsmodus en downloads |
| 🔌**MCP**| ✅ Actueel | `stdio` · `stream` · `sse`, lokale sidecar-modus, 7 clients die geschikt zijn voor installatie, 16 clients die geschikt zijn voor config, 33 configuratiedoelen en 19 configuratieprofielen |
| 🤖**A2A**| ✅ Actueel | Eenvoudige lokale runtime met JSON/SQLite-duurzaamheid, hervatten van herstart, SSE-streaming, annulering, externe uitvoerdermodus en optionele geleasde coördinatie indien expliciet ingeschakeld |
| 🛡️**Beveiliging**| ✅ Actueel | Statische scanner, optioneel ClamAV/VirusTotal, ondertekende release-artefacten, archiefcontrolesommen en verificatie van de releasetijd |
| 📋**Classificatie**| ✅ Actueel | Canonieke taxonomie, volwassenheid, spreiding van semantische kwaliteit, spreiding van best practices en beveiligingsscores |
| 📁**Archieven**| ✅ Actueel | Per vaardigheid `.zip` en `.tar.gz` archieven met SHA-256 checksum-manifesten |
| 🔐**Ondertekening**| ✅ Actueel | Vrijstaande handtekeningen afgedwongen op vrijgavetags; lokale installatiestromen gebruiken dezelfde manifest- en checksum-metagegevens |
| 🧬**Intakestroom**| ✅ Actueel | Inheemse vaardigheden komen terecht onder `skills/`; PR-automatisering beoordeelt ze en stelt Omni-verbeterde derivaten voor onder `skills_omni/` |## 🔭 Current Project State

Het basistraject bevindt zich nu in de actieve projectstatus en de tweede golf van categorie-uitbreiding staat al in de catalogus. Het project moet nu worden gelezen als een werkende basislijn met optionele toekomstige uitbreidingssporen:

- public `v0.1.2` en private `v0.0.1` zijn de huidige stabiele releasevloer
- de catalogus omvat nu 32 gepubliceerde vaardigheden in 15 actieve categorieën en 7 volledig ondersteunde bundels
- native intake en samengestelde `skills_omni/` output zijn beide operationeel, inclusief meertalige native intake en uitsluitend Engelstalige output
- protocoloppervlakken, releaseautomatisering en automatisering van privéverbeteringen zijn in gebruik, niet in bootstrap

Toekomstige uitbreiding blijft doelbewust:

- het verdiepen van `design`, `tools`, `data-ai` en `machine-learning`
- vermijd het heropenen van slapende niet-code-native categorieën totdat de huidige code-native tracks een grotere diepgang hebben
- houd daarbij het beoordelingspad voor de kwaliteitsvloer en de verbeteraars intact

Dat plan is nu opgesplitst in:

- de voltooide eerste uitbreidingsgolf in [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- de voltooide tweede uitbreidingsgolf in [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- en de toekomstgerichte achterstand in [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Deze architectuurvragen zijn in de praktijk niet langer ‘open’ en worden nu behandeld als projectbeslissingen:

1.**Distributie blijft manifest-eerst plus ondertekende archieven**
   Het machinaal leesbare manifest blijft het contract dat wordt gebruikt door CLI, API, MCP en A2A. Ondertekende archieven per vaardigheid vormen het download- en release-oppervlak bovenop dat contract.
2.**Privé- of premiumcatalogi moeten hetzelfde manifestschema hergebruiken**
   Auth en beleid moeten extern gelaagd zijn, niet door de manifest- of catalogusvorm te splitsen.
3.**MCP-configuratie zou moeten convergeren naar een paar canonieke exportfamilies**
   Omni Skills standaardiseert nu rond JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` en TOML `[mcp_servers]`, terwijl op maat gemaakte schrijvers alleen behouden blijven waar officiële clientdocumenten een andere structuur vereisen.

Deze beslissingen komen overeen met de huidige officiële MCP- en klantdocumentatie, waaronder:

- officiële MCP-register- en extensieondersteuningsrichtlijnen op `modelcontextprotocol.io`
- OpenAI Docs MCP en Codex CLI-documenten op `developers.openai.com` en `platform.openai.com`
- VS Code MCP-extensie en productdocumentatie op `code.visualstudio.com`
- clientdocumenten voor Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman en JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Dok | Wat je leert |
|:----|:------------------|
| 📘 [Aan de slag](users/GETTING-STARTED.md) | Installeer, verifieer en roep uw eerste vaardigheid aan |
| 🧭 [CLI-gebruikershandleiding](users/CLI-USER-GUIDE.md) | Volledige opdrachtreferentie en real-world CLI-gebruikspatronen |
| 📗 [Gebruiksgids](users/USAGE.md) | CLI-opdrachten, installatiemodi, runtime-opdrachten en MCP-configuratiestromen |
| 📦 [Bundels](users/BUNDLES.md) | Samengestelde bundels en hun huidige beschikbaarheid |
| 📚 [Catalogus](CATALOG.md) | Automatisch gegenereerde catalogus van gepubliceerde vaardigheden |
| 🔧 [Systeemrunbook](operations/RUNBOOK.md) | Bouw, serveer, beveilig en los problemen op met de runtime |### 🏗️ If You Want to **Understand** the Runtime

| Dok | Wat je leert |
|:----|:------------------|
| 🗺️ [Agent-Native Roadmap](architectuur/AGENT-NATIVE-ROADMAP.md) | Architectuurevolutie, gesloten beslissingen en resterende uitbreidingsgebieden |
| 🧭 [CLI UX Roadmap](architectuur/CLI-UX-ROADMAP.md) | Historisch plan en huidige vorm van de begeleide en visuele CLI |
| 📐 [ADR-0001: Workspace Foundation](architectuur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Kernmonorepo en gedeelde runtimebeslissing |
| 🔬 [Codebase-analyse](architectuur/CODEBASE-ANALYSIS.md) | Huidige runtime-samenstelling, aantallen en systeemgrenzen |
| 🌐 [Catalog API Surface](specificaties/CATALOG-API.md) | HTTP-eindpunten, filtering, beheer en downloads |
| 🧩 [CLI begeleid installatieprogramma](specs/CLI-GUIDED-INSTALLER.md) | Gedragscontract voor de begeleide installateur |
| 🖥️ [CLI Visual Shell](specificaties/CLI-VISUAL-SHELL.md) | Inkt visuele shell, statusmodel en servicehub |
| 🔌 [Lokaal MCP-zijspan](specs/LOCAL-MCP-SIDECAR.md) | Bestandssysteembewuste tools, toelatingslijstmodel en configuratieschrijven |
| 🧭 [Clientondersteuningsmatrix](specs/CLIENT-SUPPORT-MATRIX.md) | Ondersteunde CLI- en IDE-clients, schrijvers, handmatige doelen en bronreferenties |
| 📊 [Vaardigheidsclassificatie](specs/SKILL-CLASSIFICATION.md) | Taxonomie, scoringsheuristieken en metadata-artefacten |
| 🛡️ [Beveiligingsvalidatie](specs/SECURITY-VALIDATION.md) | Scanners, archieven, handtekeningen en vrijgaveverificatie |
| 📋 [Vaardigheidsmanifestspecificatie](specs/SKILL-MANIFEST.md) | Machineleesbaar manifestformaat en compatibiliteitscontract |### 🤝 If You Want to **Contribute**

| Dok | Wat je leert |
|:----|:------------------|
| 📝 [Handleiding voor bijdragen](../CONTRIBUTING.md) | Repo-workflow en verwachtingen voor pull-aanvragen |
| 🧾 [Skill PR-workflow](contributors/SKILL-PR-WORKFLOW.md) | Native intake, automatische verwerking van verbeteringen, publicatie van `skills_omni/` en verwachtingen van recensenten |
| 📄 [Vaardigheidssjabloon](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` met actuele frontmaterie en structuur |
| 🔬 [Vaardigheid Anatomie](bijdragers/SKILL-ANATOMY.md) | Structuur en kwaliteitsverwachtingen voor een vaardigheid |
| ✅ [Quality Bar](bijdragers/QUALITY-BAR.md) | Acceptatiecriteria voor de repository |
| 🏆 [High-Score Playbook](bijdragers/HIGH-SCORE-PLAYBOOK.md) | Wat zorgt voor hoge volwassenheid, kwaliteit, best practices en beveiligingsscores |
| 📋 [Takenachterstand](taken/README.md) | Gedetailleerde uitvoeringsachterstand voor het resterende publieke en private werk |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Het gepubliceerde `omni-skills` binaire bestand is het uniforme publieke toegangspunt.```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

Voor het volledige opdrachtoppervlak voor eindgebruikers gebruikt u [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

De build-pijplijn zendt de machineleesbare bestanden uit die elk runtime-oppervlak aansturen:

| Artefact | Doel |
|:---------|:--------|
| `metadata.json` | Repository-brede validatie en scoreoverzicht |
| `skills_index.json` | Repo-lokale genormaliseerde vaardigheidsindex |
| `dist/catalog.json` | Gepubliceerde catalogus voor zoeken en aanbieden |
| `dist/bundles.json` | Bundeldefinities met beschikbaarheid |
| `dist/manifests/<skill>.json` | Machineleesbaar manifest per vaardigheid |
| `dist/archives/<vaardigheid>.zip` | Vaardighedenarchief (zip) |
| `dist/archives/<skill>.tar.gz` | Vaardighedenarchief (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum-manifest |

`dist/` blijft met opzet toegewijd. Deze gegenereerde artefacten maken deel uit van het installatie-, API-, MCP-, A2A-, rook- en releasecontract.### 🌐 API

```bash
npx omni-skills api --port 3333
```

Alleen-lezen register-API voor vaardigheden, bundels, vergelijking, installatieplanning en artefactdownloads.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

De lokale zijspan ondersteunt nu eersteklas MCP-configuratieschrijven voor:

- Claude Code
- Cursor
- VS Code- en Dev-containers
- Gemini CLI
- Antizwaartekracht
- Kiro
- Codex CLI
- Ga door
- Windsurfen
-OpenCode
- Klijn
- GitHub Copilot-CLI
- Kilocode
- Zed
- Gans### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Taaklevenscyclus, streaming, persistentie, herstartherstel en eenvoudige lokale orkestratie. Gedeelde lease-uitvoering is beschikbaar indien expliciet ingeschakeld; Redis blijft een geavanceerde gehoste optie, niet het standaard lokale pad.---

## 🗂️ Repository Map

| Pad | Doel |
|:-----|:--------|
| 📂 `vaardigheden/` | Canonieke auteursvaardigheden |
| 📖 `docs/gebruikers/` | Documentatie voor eindgebruikers |
| 🤝 `docs/bijdragers/` | Sjablonen en begeleiding voor bijdragers |
| 🏗️`docs/architectuur/` | Routekaart, ADR's en technische analyse |
| 🔧 `docs/operaties/` | Operationele runbooks |
| 📋 `docs/specificaties/` | Runtime-, protocol- en artefactcontracten |
| 📚 `docs/CATALOG.md` | Gegenereerde vaardighedencatalogus |
| 📦 `dist/` | Gegenereerde machinaal leesbare artefacten |
| 🧠 `pakketten/catalog-core/` | Runtime van gedeelde catalogus |
| 🌐 `pakketten/server-api/` | Alleen-lezen HTTP-API |
| 🔌 `pakketten/server-mcp/` | MCP-server en lokale zijspan |
| 🤖 `pakketten/server-a2a/` | A2A-server en taakruntime |
| 🖥️`tools/bak/` | CLI-ingangspunten |
| 📚 `tools/lib/` | Installateur- en UI-helpers |
| ⚙️ `tools/scripts/` | Validatie, generatie, verificatie en tests |---

## 🧪 Release Validation

```bash
npm run smoke
```

De rookrun valideert:

- ✅ validatie van vaardigheden en het genereren van metadata
- ✅ Tooling voor hercategorisering van taxonomie
- ✅ genereren van catalogusartefacten
- ✅ gegenereerde catalogusprijsverlaging
- ✅ archief genereren en verifiëren
- ✅ geautomatiseerde testsuite
- ✅ `npm pack --drooglopen`
- ✅ API-opstarten en gezondheid
- ✅ MCP-boot in `stdio`, `stream` en `sse`
- ✅ A2A-opstarten, polling, SSE-streaming, annulering en push-config-levenscyclus
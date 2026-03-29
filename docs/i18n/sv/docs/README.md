# 📖 Omni Skills — Documentation Hub (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Den centrala referensen för att använda, använda, utöka och förstå den nuvarande Omni Skills-plattformen.**

Standardgemenskapsfiler finns i arkivets rot:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_DUCT.md)---

## 📊 Status Snapshot

| Område | Stat | Detaljer |
|:-----|:------|:--------|
| 🏗️**Körtid**| ✅ Nuvarande | Unified CLI, Ink visual shell, API, MCP och A2A skickas alla från samma paket |
| 📦**Katalog**| 📌 32 färdigheter | 32 publicerade "L3"-färdigheter i 15 aktiva katalogkategorier och 7 paket med fullständigt stöd |
| 🎯**Installera**| ✅ Nuvarande | Guidad TTY-installation, selektiv `--skill` och `--bundle`, stöd för anpassad sökväg och upptäcktsdriven installation |
| 🌐**API**| ✅ Nuvarande | Skrivskyddat register-API med auth, administratörskörning, hastighetsbegränsning, CORS/IP-godkännandelistor, underhållsläge och nedladdningar |
| 🔌**MCP**| ✅ Nuvarande | `stdio` · `stream` · `sse`, lokalt sidovagnsläge, 7 installationskompatibla klienter, 16 konfigurationskompatibla klienter, 33 konfigurationsmål och 19 konfigurationsprofiler |
| 🤖**A2A**| ✅ Nuvarande | Enkel-första lokal körtid med JSON/SQLite-hållbarhet, återstart av omstart, SSE-strömning, avbokning, externt exekveringsläge och valfri leasad koordinering när detta uttryckligen är aktiverat |
| 🛡️**Säkerhet**| ✅ Nuvarande | Statisk skanner, valfri ClamAV/VirusTotal, signerade utgivningsartefakter, arkivkontrollsummor och verifiering vid utgivningstid |
| 📋**Klassificering**| ✅ Nuvarande | Kanonisk taxonomi, mognad, semantisk kvalitetsspridning, spridning av bästa praxis och säkerhetspoäng |
| 📁**Arkiv**| ✅ Nuvarande | ".zip"- och ".tar.gz"-arkiv per färdighet med SHA-256-kontrollsummanifest |
| 🔐**Signering**| ✅ Nuvarande | Fristående signaturer påtvingade frisläppningsetiketter; lokala installationsflöden använder samma manifest- och kontrollsummametadata |
| 🧬**Intagsflöde**| ✅ Nuvarande | Native skills landar under `skills/`; PR-automatisering granskar dem och föreslår Omni-förbättrade derivat under `skills_omni/` |## 🔭 Current Project State

Grundspåret lever nu i det aktiva projekttillståndet, och den andra kategoriexpansionsvågen finns redan i katalogen. Projektet bör nu läsas som en fungerande baslinje med valfria framtida expansionsspår:

- offentliga `v0.1.2` och privata `v0.0.1` är det nuvarande stabila releasegolvet
- Katalogen täcker nu 32 publicerade färdigheter i 15 aktiva kategorier och 7 helt backade paket
- inhemskt intag och kurerad "skills_omni/"-utdata är båda operativa, inklusive flerspråkigt inhemskt intag och kurerad utdata endast på engelska
- Protokollytor, releaseautomation och privat förbättringsautomation är i drift, inte i bootstrap

Framtida expansion förblir avsiktlig:

- fördjupa "design", "verktyg", "data-ai" och "maskininlärning"
- undvik att återöppna vilande icke-kod-infödda kategorier tills de nuvarande kod-native spåren har starkare djup
- Håll kvalitetsgolvet och granskningsvägen för förstärkare intakt medan du gör det

Den planen är nu uppdelad i:

- den slutförda första expansionsvågen i [tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- den slutförda andra expansionsvågen i [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- och den framåtblickande eftersläpningen i [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Dessa arkitekturfrågor är inte längre "öppna" i praktiken och behandlas nu som projektbeslut:

1.**Distributionen förblir manifest-först plus signerade arkiv**
   Det maskinläsbara manifestet förblir kontraktet som konsumeras av CLI, API, MCP och A2A. Undertecknade arkiv per färdighet är nedladdnings- och frisläppningsytan som ligger i lager ovanpå det kontraktet.
2.**Privata eller premiumkataloger bör återanvända samma manifestschema**
   Autentisering och policy bör lagras externt, inte genom att dela manifest- eller katalogformen.
3.**MCP-konfiguration bör konvergera på några kanoniska exportfamiljer**
   Omni Skills standardiserar nu kring JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` och TOML `[mcp_servers]`, samtidigt som skräddarsydda skribenter endast behålls där officiella klientdokument kräver en annan struktur.

Dessa beslut överensstämmer med nuvarande officiella MCP och kunddokumentation, inklusive:

- officiell vägledning för MCP-registret och förlängningsstöd på `modelcontextprotocol.io`
- OpenAI Docs MCP och Codex CLI-dokument på `developers.openai.com` och `platform.openai.com`
- VS Code MCP-tillägg och produktdokumentation på `code.visualstudio.com`
- klientdokument för Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman och JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 📘 [Komma igång](användare/KOMMA Igång.md) | Installera, verifiera och åberopa din första färdighet |
| 🧭 [CLI User Guide](users/CLI-USER-GUIDE.md) | Fullständig kommandoreferens och verkliga CLI-användningsmönster |
| 📗 [Användningsguide](users/USAGE.md) | CLI-kommandon, installationslägen, runtime-kommandon och MCP-konfigurationsflöden |
| 📦 [Bundles](users/BUNDLES.md) | Utvalda paket och deras nuvarande tillgänglighet |
| 📚 [Katalog](CATALOG.md) | Autogenererad katalog över publicerade färdigheter |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Bygg, betjäna, säkra och felsök körtiden |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Arkitekturutveckling, slutna beslut och återstående expansionsområden |
| 🧭 [CLI UX Roadmap](architecture/CLI-UX-ROADMAP.md) | Historisk plan och nuvarande form av den guidade och visuella CLI |
| 📐 [ADR-0001: Workspace Foundation](arkitektur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo och shared runtime-beslut |
| 🔬 [Kodbasanalys](arkitektur/CODEBASE-ANALYSIS.md) | Aktuell körtidssammansättning, antal och systemgränser |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | HTTP-slutpunkter, filtrering, styrning och nedladdningar |
| 🧩 [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) | Beteendekontrakt för den guidade installatören |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Bläck visuellt skal, tillståndsmodell och servicenav |
| 🔌 [Local MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Filsystemmedvetna verktyg, godkännandelistamodell och konfigurationsskrivning |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Stöds CLI- och IDE-klienter, skribenter, manuella mål och källreferenser |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taxonomi, poängheuristik och metadataartefakter |
| 🛡️ [Säkerhetsvalidering](specs/SECURITY-VALIDATION.md) | Skannrar, arkiv, signaturer och verifiering av release |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Maskinläsbart manifestformat och kompatibilitetskontrakt |### 🤝 If You Want to **Contribute**

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 📝 [Bidragsguide](../CONTRIBUTING.md) | Repo arbetsflöde och förväntningar på pull begäran |
| 🧾 [Skill PR Workflow](bidragsgivare/SKILL-PR-WORKFLOW.md) | Inbyggt intag, automatisk förstärkarbearbetning, `skills_omni/`-publicering och granskares förväntningar |
| 📄 [Skill Template](contributors/SKILL-MALL.md) | Starter `SKILL.md` med aktuell frontmateria och struktur |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Struktur och kvalitetsförväntningar på en kompetens |
| ✅ [Kvalitetsfält](medverkande/QUALITY-BAR.md) | Acceptanskriterier för förvaret |
| 🏆 [High-Score Playbook](bidragsgivare/HIGH-SCORE-PLAYBOOK.md) | Vad driver hög mognad, kvalitet, bästa praxis och säkerhetspoäng |
| 📋 [Tasks Backlog](tasks/README.md) | Detaljerad eftersläpning av genomförandet för det återstående offentliga och privata arbetet |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Den publicerade "omni-skills"-binären är den enhetliga offentliga ingångspunkten.```bash
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

För hela slutanvändarens kommandoyta, använd [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Byggpipelinen sänder ut de maskinläsbara filerna som driver varje runtime-yta:

| Artefakt | Syfte |
|:--------|:--------|
| `metadata.json` | Förvarsomfattande validering och poängsammanfattning |
| `skills_index.json` | Repo-lokalt normaliserat skicklighetsindex |
| `dist/catalog.json` | Publicerad katalog för sökning och listning |
| `dist/bundles.json` | Paketdefinitioner med tillgänglighet |
| `dist/manifests/<skill>.json` | Maskinläsbart manifest per färdighet |
| `dist/archives/<skill>.zip` | Skicklighetsarkiv (zip) |
| `dist/archives/<skill>.tar.gz` | Skicklighetsarkiv (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrollsummanifest |

`dist/` förblir begått med avsikt. Dessa genererade artefakter är en del av installations-, API-, MCP-, A2A-, rök- och releasekontraktet.### 🌐 API

```bash
npx omni-skills api --port 3333
```

Skrivskyddat register-API för färdigheter, paket, jämförelse, installationsplanering och nedladdningar av artefakter.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Den lokala sidovagnen stöder nu förstklassig MCP-konfigurationsskrivning för:

- Claude Code
- Markör
- VS Code och Dev Containers
- Gemini CLI
- Antigravitation
- Kiro
- Codex CLI
- Fortsätt
- Vindsurfa
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilokod
- Zed
- Gås### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Uppgiftens livscykel, streaming, persistens, återstart av återställning och enkel-först lokal orkestrering. Delad leasingutförande är tillgängligt när det är uttryckligen aktiverat; Redis förblir ett avancerat värdalternativ, inte den lokala standardsökvägen.---

## 🗂️ Repository Map

| Väg | Syfte |
|:-----|:--------|
| 📂 `färdigheter/` | Kanoniska författade färdigheter |
| 📖 `docs/users/` | Slutanvändardokumentation |
| 🤝 `dokument/bidragsgivare/` | Bidragsgivare mallar och vägledning |
| 🏗️ `docs/architecture/` | Färdkarta, ADR och teknisk analys |
| 🔧 `docs/operations/` | Operationella runbooks |
| 📋 `docs/specs/` | Körtid, protokoll och artefaktkontrakt |
| 📚 `docs/CATALOG.md` | Genererad färdighetskatalog |
| 📦 `dist/` | Genererade maskinläsbara artefakter |
| 🧠 `paket/katalog-kärna/` | Runtime för delad katalog |
| 🌐 `paket/server-api/` | Skrivskyddat HTTP API |
| 🔌 `paket/server-mcp/` | MCP-server och lokal sidovagn |
| 🤖 `paket/server-a2a/` | A2A-server och uppgiftskörning |
| 🖥️ `tools/bin/` | CLI ingångspunkter |
| 📚 `tools/lib/` | Installatör och UI-hjälpare |
| ⚙️ `verktyg/skript/` | Validering, generering, verifiering och tester |---

## 🧪 Release Validation

```bash
npm run smoke
```

Rökkörningen bekräftar:

- ✅ kompetensvalidering och generering av metadata
- ✅ verktyg för omkategorisering av taxonomi
- ✅ katalogartefaktgenerering
- ✅ genererad katalognedsättning
- ✅ arkivgenerering och verifiering
- ✅ automatiserad testsvit
- ✅ `npm pack --dry-run`
- ✅ API-start och hälsa
- ✅ MCP-start i "stdio", "stream" och "sse".
- ✅ A2A-start, polling, SSE-streaming, annullering och push-config livscykel
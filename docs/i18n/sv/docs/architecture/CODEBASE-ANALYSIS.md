# 🔬 Codebase Deep Analysis (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Omfattande teknisk analys av den nuvarande Omni Skills-arkitekturen, runtimeytor och byggpipeline.**
> Senast analyserad: 2026-03-28---

## 📊 Project Overview

| Attribut | Värde |
|:----------|:------|
|**Namn**| `omni-skills` |
|**Paketversion**| `0.1.3` |
|**Skill versioner**| Per-skill och oberoende av paketversionen. Många publicerade färdigheter är fortfarande `0.0.1` medan paketet är `0.1.2`. |
|**Licens**| MIT (kod) + CC BY 4.0 (innehåll) |
|**NPM**| `npx omni-skills` |
|**Publicerade färdigheter**| 32 |
|**Definierade paket**| 7, alla helt uppbackade av publicerade färdigheter |
|**Aktiva katalogkategorier**| 15 aktiva buckets av 18 kanoniska taxonomikategorier |
|**Primär runtime/build LOC samplade nedan**| 13 600+ |
|**Produktionsberoenden**| 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Aktuell klassificeringsögonblicksbild på förvarsnivå från `metadata.json`:

- Genomsnittligt kvalitetspoäng: "96,3".
- Genomsnittligt poäng för bästa praxis: "98,7".
- Genomsnittlig säkerhetspoäng: `95.0`
- alla 32 publicerade färdigheter valideras som "L3".

Nuvarande releasebaslinje:

- public repository release: `v0.1.2`
- Privat Enhancer release: `v0.0.1`
- automatisering av offentlig utgivning och automatisering av privat utgivning är både aktiva och gröna---

## 🏗️ Architecture Overview

Förvaret följer ett**workspace monorepo**-mönster med en delad katalogkärna och flera körtidsytor.```text
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

Designen är avsiktligt**artefaktdriven**:

1. färdigheter skapas som `SKILL.md` plus lokala supportpaket
2. bygget validerar, klassificerar, arkiverar och normaliserar dem
3. de genererade artefakterna blir kontraktet för CLI, API, MCP och A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4 500+ LOC kombinerat**— det huvudsakliga offentliga gränssnittet för både expert- och guidad användning.

| Kommando | Funktion |
|:--------|:--------|
| 🔎 `hitta [fråga]` | Fulltextkatalogsökning med poängmedvetna filter |
| 📦 `installera` | Guidad eller flaggbaserad installation i kända klienter eller anpassade sökvägar |
| 🧾 `config-mcp` | Förhandsgranska eller skriv klientmedveten MCP-konfiguration |
| 🔌 `mcp <transport>` | Startar MCP-servern i `stdio`, `stream` eller `sse` |
| 🌐 `api` | Startar katalogens API |
| 🤖 `a2a` | Startar A2A-körtiden |
| 🧪 `rök` | Release preflight validering |
| 🩺 `läkare` | Lokal diagnostik |
| 🖥️ `ui` | Bläck visuellt skal med installation, upptäckt, konfiguration och servicenav |
| 🏷️ `omkategorisera` | Taxonomy driftinspektion och omskrivning |

CLI är inte längre bara ett installationsprogram. Det är det offentliga operativa verktyget för hela plattformen.## 🧭 Future Expansion Direction

Den offentliga körtiden är inte längre blockerad på grundarbete, och den andra kategorivågen är redan landad. Nästa användbara katalogarbete är djup, inte mer att jaga efter kategoriräkning.

Nyaktiverade kodbaserade spår nu i katalogen:

- `design` via `design-systems-ops`, `accessibility-audit` och `design-token-governance`
- `verktyg` via `mcp-server-authoring`
- `data-ai` via `data-contracts`
- `maskininlärning` via `modellservering`

Rekommenderad nästa riktning:

1. fördjupa "design", "verktyg", "data-ai" och "maskininlärning"
2. håll "affärs" och "innehållsmedia" uppskjutna om inte ett tydligt kodifierat förslag visas
3. bevara det nuvarande kvalitetsgolvet istället för återöppningskategorins aktiveringstryck

Den expansionsvågen är nu registrerad i [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— installerar färdigheter i 7 assistenter som kan installera.

| Flagga | Mål | Standardsökväg |
|:-----|:-------|:--------|
| `--claude` | Claude Code | `~/.claude/skills` |
| `--markör` | Markör | `~/.cursor/färdigheter` |
| `--tvillingarna` | Gemini CLI | `~/.gemini/skills` |
| `--codex` | Codex CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antigravitation` | Antigravitation | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `<arbetsyta>/.opencode/skills` |

Den stöder:

- Hela biblioteket installeras
- selektiva installationer av `--skill`
- kurerade installationer av `--bundle`
- guidade TTY- och visuella gränssnittsflöden
- anpassade målvägar### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— delat körtidslager för CLI, API, MCP och A2A.

| Exportera | Beskrivning |
|:--------|:------------|
| 🔎 `searchSkills()` | Sök med viktad textmatchning och filterstöd |
| 📋 `listSkills()` | Fleraxlig filtrering efter kvalitet, bästa praxis, nivå, säkerhet, risk, verktyg och kategori |
| 📌 `getSkill()` | Manifestupplösning plus berikade offentliga webbadresser |
| ⚖️ `compareSkills()` | Jämförelse sida vid sida |
| 💡 `recommendSkills()` | Målstyrd rekommendation |
| 📦 `buildInstallPlan()` | Installera plangenerering med varningar och klientmedveten vägledning |
| 🗂️ `listBundles()` | Kurerad paketlista med tillgänglighet |
| 📁 `listSkillArchives()` | Arkiv och signaturupplösning |

Detta är den verkliga enda källan till runtime sanning efter generation.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— fullständig MCP-implementering med den officiella SDK:n.

**Transporter**

- "stdio".
- streambar HTTP
- SSE

**Alltid påslagna skrivskyddade verktyg**

- `sökfärdigheter`
- `get_skill`
- `jämför_färdigheter`
- `rekommendera_färdigheter`
- `preview_install`

**Verktyg i lokalt läge**

- `upptäcka_klienter`
- `lista_installerade_färdigheter`
- `install_skills`
- `ta bort_färdigheter`
- `configure_client_mcp`

MCP-ytan är medvetet uppdelad mellan:

- Fjärr-/skrivskyddad kataloganvändning
- lokal/skrivförmåga sidovagnsanvändning### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1 943 LOC**— filsystemmedvetet MCP-lager för klientdetektering, kompetenshantering och MCP-konfigurationsskrivning.

Aktuellt praktiskt stöd:

-**7 installationskompatibla klienter**
-**16 konfigurationskompatibla klienter**
-**33 konfigurationsmål**
-**19 konfigurationsprofiler**

Installationskompatibla klienter:

- Claude Code
- Markör
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitation
- OpenCode

Konfigurationskompatibla klienter och mål inkluderar:

- Claude-inställningar, Claude Desktop och Claude-projektkonfiguration
- Konfiguration av marköranvändare och arbetsyta
- VS Code arbetsyta, användare, insiders och Dev Container-konfiguration
- Gemini användar- och arbetsytainställningar
- Antigravity användarkonfiguration
- Kiro-användare, arbetsyta och äldre vägar
- Codex CLI TOML-konfiguration
- Konfiguration av OpenCode-användare och arbetsyta
- Cline-inställningar
- GitHub Copilot CLI-användare och repo-konfiguration
- Kilo användar-, projekt- och arbetsytakonfiguration
- Fortsätt arbetsyta YAML
- Användarkonfiguration för vindsurfning
- Zed arbetsyta config
- Gås användarkonfiguration

Sidovagnen är avsiktligt ärlig om gränser:

- den skriver bara i en godkännandelista
- den förhandsgranskar som standard
- Det behåller förstklassiga skribenter endast där officiella dokument avslöjar ett stabilt format
- Det låtsas inte att varje MCP-kapabel produkt också är ett mål för färdighetsinstallation### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC kombinerat**— skrivskyddat register API plus styrmedelprogramvara.

Viktiga slutpunkter:

- `/healthz`
- `/openapi.json`
- `/admin/runtime`
- `/v1/skills`
- `/v1/skills/:id`
- `/v1/sök`
- `/v1/jämföra`
- `/v1/buntar`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Styrningens baslinje redan implementerad:

- bärarbevis auth
- API-nyckelauth
- admin token auth
- Begränsning av hastighet under processen
- begära ID
- revisionsloggning
- CORS godkännandelistor
- IP-godkännandelistor
- förtroendefullmaktshantering
- Underhållsläge### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1 857 LOC kombinerat över huvudservern, runtime och koordinatorfiler**— JSON-RPC 2.0 uppgiftslivscykel för agent-till-agent-arbetsflöden.

Metoder som stöds:

- `meddelande/skicka`
- `meddelande/ström`
- `uppgifter/få`
- `uppgifter/avbryt`
- `uppgifter/prenumerera på nytt`
- `tasks/pushNotificationConfig/*`

Nuvarande verksamhet:

- `upptäck-färdigheter`
- `rekommendera-stack`
- `förbereda-installera-plan`

Hållbarhet och koordinationsmodell:

- minne, JSON eller SQLite lokal beständighet
- starta om CV
- valfri extern processexekutor
- opt-in leasad kökoordinering för delade SQLite-arbetare
- Valfri Redis-stödd koordinering som en avancerad värdväg

Det viktigaste arkitektoniska valet här är**enkel-först lokal drift**. Redis finns som ett avancerat alternativ, men standardproduktsökvägen förblir lokal och beroendeframkallande.---

## ⚙️ Build Pipeline

| Manus | Språk | Syfte |
|:-------|:--------|:--------|
| 📊 `skill_metadata.py` | Python | Validering, taxonomi, poängsättning och statisk säkerhetsskanning |
| ✅ `validate_skills.py` | Python | Metadatagenerering per färdighet och för rotsammanfattningen |
| 📑 `generate_index.py` | Python | Färdighetsindex, manifest, arkiv, signaturer och kontrollsummor |
| 🏗️ `build_catalog.js` | Node.js | Slutliga `dist/catalog.json` och `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Kanonisk kategorirevision och omskrivning |
| 🔍 `verify_archives.py` | Python | Verifiering av arkiv och signatur |

Två detaljer spelar roll operativt:

1. `dist/` är en del av körtidskontraktet och avsiktligt begått
2. Bygget är tillräckligt deterministiskt för att stödja CI-verifiering och releasesignering---

## 📦 Published Catalog

Den nuvarande offentliga katalogen omfattar 32 färdigheter:

-**Upptäckt och planering**: "hitta färdigheter", "brainstorming", "arkitektur", "felsökning".
-**Designsystem och tillgänglighet**: `design-systems-ops`, `accessibility-audit`
-**Produkt- och fullstackleverans**: `frontend-design`, `api-design`, `databas-design`, `omni-figma`, `auth-flows`
-**Säkerhet**: "säkerhetsrevisor", "sårbarhetsscanner", "incident-svar", "hotmodellering".
-**OSS-underhållararbetsflöden**: `dokumentation`, `changelog`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**AI-teknik**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Alla sju paketen är helt backade:

- `nödvändigt` → `4/4`
- `full-stack` → `5/5`
- `design` → `4/4`
- `säkerhet` → `4/4`
- `devops` → `5/5`
- `ai-ingenjör` → `5/5`
- `oss-underhållare` → `4/4`

Aktuell poängspridning från den genererade katalogen:

- Kvalitetspoäng: `94, 95, 96, 97, 100`
- bästa praxis-poäng: `98, 99, 100`
- Säkerhetspoäng: alla publicerade färdigheter för närvarande "95".

Representant high end:

- `omni-figma` → `kvalitet 100`, `bästa_praxis 100`
- `tillgänglighetsrevision` → `kvalitet 99`, `bästa_praxis 100`
- `auth-flows` → `kvalitet 97`, `bästa_praxis 99`
- `design-systems-ops` → `kvalitet 97`, `bästa_praxis 99`
- `release-engineering` → `kvalitet 97`, `best_practices 99`
- `hotmodellering` → `kvalitet 97`, `bästa_praxis 99`
- `context-engineering` → `kvalitet 97`, `bästa_praxis 99`

Representativ nedre ände inuti det nuvarande övre bandet:

- `arkitektur` → `kvalitet 94`, `bästa_praxis 98`
- `ändringslogg` → `kvalitet 94`, `bästa_praxis 98`
- `create-pr` → `kvalitet 95`, `bästa_praxis 98`

Detta är avsiktligt. Poängskytten skiljer nu "utmärkt" från "exceptionell" istället för att platta till hela katalogen överst.---

## 🌟 Strengths

1.**Artefakt-först design**
   Varje körningsyta förbrukar samma genererade katalog och manifesterar.
2.**Bred protokolltäckning**
   CLI, API, MCP och A2A samexisterar utan att fragmentera datamodellen.
3.**Stark ergonomi för lokala produkter**
   Guidad installation, visuellt skal, `config-mcp` och torrkörningsstandarder gör projektet användbart för avancerade användare.
4.**Ärlig säkerhetsställning**
   Tillåtna lokala skrivningar, statisk skanning, signering, kontrollsummor och releaseverifiering är alla explicita.
5.**Hälsosam MCP-räckvidd**
   Projektet stöder nu en bred uppsättning nuvarande MCP-kapabla klienter utan att låtsas att odokumenterade mål är stabila.---

## 🔮 Opportunities

1.**Djupare pakettäckning**
   Nästa steg är specialisering inom de befintliga paketen, inte bara bred täckning.
2.**Rikare poängsemantik**
   Det finns fortfarande utrymme för att utvärdera referenspaketets djup och arbetsflödeskvalitet mer semantiskt.
3.**Fler kundskribenter endast där det är motiverat**
   Expansionen bör förbli disciplinerad och knuten till stabila officiella dokument.
4.**Validatornedbrytning**
   `skill_metadata.py` är fortfarande en stor modul och skulle dra nytta av intern nedbrytning över tid.
5.**Eskalering av värdstyrning**
   Den nuvarande baslinjen under processen räcker för självvärd, men företagsdistribution skulle så småningom vilja ha extern gateway och identitetsintegration.
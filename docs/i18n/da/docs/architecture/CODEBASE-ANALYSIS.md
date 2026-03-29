# 🔬 Codebase Deep Analysis (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Omfattende teknisk analyse af den nuværende Omni Skills-arkitektur, runtime-overflader og byggepipeline.**
> Sidst analyseret: 2026-03-28---

## 📊 Project Overview

| Attribut | Værdi |
|:----------|:------|
|**Navn**| `omni-færdigheder` |
|**Pakkeversion**| `0.1.3` |
|**Skill versioner**| Per-skill og uafhængig af pakkeversionen. Mange offentliggjorte færdigheder er stadig `0.0.1`, mens pakken er `0.1.2`. |
|**Licens**| MIT (kode) + CC BY 4.0 (indhold) |
|**NPM**| `npx omni-skills` |
|**Udgivne færdigheder**| 32 |
|**Definerede bundter**| 7, alle fuldt understøttet af offentliggjorte færdigheder |
|**Aktive katalogkategorier**| 15 aktive buckets ud af 18 kanoniske taksonomikategorier |
|**Primær runtime/build LOC samplet nedenfor**| 13.600+ |
|**Produktionsafhængigheder**| 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Aktuelt klassificeringsøjebliksbillede på lagerniveau fra `metadata.json`:

- gennemsnitlig kvalitetsscore: `96,3`
- Gennemsnitlig score for bedste praksis: "98,7".
- gennemsnitlig sikkerhedsscore: `95,0`
- alle 32 offentliggjorte færdigheder valideres som "L3".

Nuværende udgivelsesbaseline:

- public repository release: `v0.1.2`
- privat enhancer-udgivelse: `v0.0.1`
- offentlig udgivelsesautomatisering og privat udgivelsesautomatisering er både aktive og grønne---

## 🏗️ Architecture Overview

Lagret følger et**workspace monorepo**-mønster med én delt katalogkerne og flere runtime-overflader.```text
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

Designet er bevidst**artefaktdrevet**:

1. færdigheder er skrevet som `SKILL.md` plus lokale supportpakker
2. bygningen validerer, klassificerer, arkiverer og normaliserer dem
3. de genererede artefakter bliver kontrakten for CLI, API, MCP og A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4.500+ LOC kombineret**— den vigtigste offentlige grænseflade til både ekspert og guidet brug.

| Kommando | Funktion |
|:--------|:--------|
| 🔎 `find [forespørgsel]` | Fuldtekstkatalogsøgning med score-bevidste filtre |
| 📦 `installer` | Guidet eller flagbaseret installation i kendte klienter eller brugerdefinerede stier |
| 🧾 `config-mcp` | Forhåndsvis eller skriv klient-bevidst MCP-konfiguration |
| 🔌 `mcp <transport>` | Starter MCP-serveren i `stdio`, `stream` eller `sse` |
| 🌐 `api` | Starter kataloget API |
| 🤖 `a2a` | Starter A2A runtime |
| 🧪 'røg' | Release preflight validering |
| 🩺 `læge` | Lokal diagnostik |
| 🖥️ `ui` | Ink visual shell med installation, opdagelse, konfiguration og servicehub |
| 🏷️ `rekategoriser` | Taksonomi afdriftsinspektion og omskrivning |

CLI'en er ikke længere kun et installationsprogram. Det er det offentlige driftsværktøj for hele platformen.## 🧭 Future Expansion Direction

Den offentlige kørselstid er ikke længere blokeret på grundarbejde, og den anden kategori-bølge er allerede landet. Det næste nyttige katalogarbejde er dybde, ikke mere jagt efter kategorier.

Nyligt aktiverede kodeindfødte spor nu i kataloget:

- `design` via `design-systems-ops`, `accessibility-audit` og `design-token-governance`
- `værktøjer` via `mcp-server-authoring`
- `data-ai` via `data-contracts`
- `maskine-læring` via `model-serving`

Anbefalet næste retning:

1. uddybe `design`, `værktøjer`, `data-ai` og `machine-learning`
2. holde "forretning" og "indholdsmedier" udsat, medmindre der fremkommer et klart kodebaseret forslag
3. bevare det nuværende kvalitetsgulv i stedet for genåbningskategori aktiveringstryk

Denne ekspansionsbølge er nu registreret i [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— installerer færdigheder i 7 installationskompatible assistenter.

| Flag | Mål | Standardsti |
|:-----|:-------|:---------|
| `--claude` | Claude kode | `~/.claude/færdigheder` |
| `--cursor` | Markør | `~/.cursor/færdigheder` |
| `--gemini` | Gemini CLI | `~/.gemini/færdigheder` |
| `--codex` | Codex CLI | `~/.codex/færdigheder` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antityngdekraft` | Antigravitation | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `<arbejdsområde>/.opencode/skills` |

Det understøtter:

- fuld-bibliotek installerer
- selektive installationer af `--skill`
- kuraterede installationer af `--bundle`
- guidede TTY og visuelle UI flows
- tilpassede målstier### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— delt runtime-lag til CLI, API, MCP og A2A.

| Eksporter | Beskrivelse |
|:-------|:----------|
| 🔎 `searchSkills()` | Søg med vægtet tekstmatchning og filterstøtte |
| 📋 `listSkills()` | Flerakset filtrering efter kvalitet, bedste praksis, niveau, sikkerhed, risiko, værktøj og kategori |
| 📌 `getSkill()` | Manifest opløsning plus berigede offentlige URL'er |
| ⚖️ `compareSkills()` | Side-by-side sammenligning |
| 💡 `recommendSkills()` | Målstyret anbefaling |
| 📦 `buildInstallPlan()` | Installer plangenerering med advarsler og klientbevidst vejledning |
| 🗂️ `listBundles()` | Kurateret pakkeliste med tilgængelighed |
| 📁 `listSkillArchives()` | Arkiv- og underskriftsopløsning |

Dette er den rigtige enkeltkilde til runtime sandhed efter generation.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— fuld MCP-implementering ved hjælp af det officielle SDK.

**Transport**

- 'stdio'
- streambar HTTP
- SSE

**Altid-aktiverede skrivebeskyttede værktøjer**

- `søgefærdigheder`
- `bliv_færdighed`
- `sammenlign_færdigheder`
- `anbefal_færdigheder`
- `preview_install`

**Værktøjer i lokal tilstand**

- `opdag_klienter`
- `liste_installerede_færdigheder`
- `install_skills`
- `fjerne_færdigheder`
- `configure_client_mcp`

MCP-overfladen er bevidst delt mellem:

- fjern-/skrivebeskyttet katalogbrug
- lokal/skrivedygtig sidevognsbrug### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1.943 LOC**— filsystembevidst MCP-lag til klientdetektering, færdighedsstyring og MCP-konfigurationsskrivning.

Aktuel praktisk støtte:

-**7 installationskompatible klienter**
-**16 konfigurationskompatible klienter**
-**33 konfigurationsmål**
-**19 konfigurationsprofiler**

Installationskompatible klienter:

- Claude Code
- Markør
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitation
- OpenCode

Konfigurationskompatible klienter og mål inkluderer:

- Claude-indstillinger, Claude Desktop og Claude-projektkonfiguration
- Markørbruger- og arbejdsområdekonfiguration
- VS Code arbejdsområde, bruger, insidere og Dev Container-konfiguration
- Gemini bruger- og arbejdsområdeindstillinger
- Antigravity brugerkonfiguration
- Kiro bruger, arbejdsområde og ældre stier
- Codex CLI TOML konfig
- OpenCode bruger og arbejdsområde konfiguration
- Cline indstillinger
- GitHub Copilot CLI-bruger og repo-konfiguration
- Kilo bruger-, projekt- og arbejdsområdekonfiguration
- Fortsæt arbejdsområde YAML
- Windsurf brugerkonfig
- Zed workspace config
- Goose brugerkonfiguration

Sidevognen er bevidst ærlig omkring grænser:

- den skriver kun inde i en tilladelsesliste
- den forhåndsviser som standard
- det holder kun førsteklasses forfattere, hvor officielle dokumenter afslører et stabilt format
- det foregiver ikke, at hvert MCP-kompatible produkt også er et mål for færdighedsinstallation### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC kombineret**— skrivebeskyttet registry API plus styrings-middleware.

Vigtige endepunkter:

- `/healthz`
- `/openapi.json`
- `/admin/runtime`
- `/v1/færdigheder`
- `/v1/skills/:id`
- `/v1/søg`
- `/v1/sammenlign`
- `/v1/bundles`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Governance-baseline allerede implementeret:

- ihændehaver token auth
- API-nøglegodkendelse
- admin token auth
- hastighedsbegrænsning i processen
- anmode om ID'er
- revisionslogning
- CORS tilladelseslister
- IP-tilladelseslister
- tillidsfuldmagtshåndtering
- vedligeholdelsestilstand### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1.857 LOC kombineret på tværs af hovedserver-, runtime- og koordinatorfilerne**— JSON-RPC 2.0 opgavelivscyklus for agent-til-agent arbejdsgange.

Understøttede metoder:

- `besked/send`
- `besked/stream`
- `opgaver/få`
- `opgaver/annuller`
- `opgaver/gentilmeld`
- `tasks/pushNotificationConfig/*`

Nuværende operationer:

- `opdag-færdigheder`
- `anbefal-stak`
- `forbered-installer-plan`

Holdbarhed og koordinationsmodel:

- hukommelse, JSON eller SQLite lokal persistens
- genstart CV
- valgfri ekstern procesudøver
- opt-in leaset køkoordinering for delte SQLite-arbejdere
- valgfri Redis-støttet koordinering som en avanceret hostet sti

Det vigtigste arkitektoniske valg her er**simpel-først lokal drift**. Redis eksisterer som en avanceret mulighed, men standardproduktstien forbliver lokal og afhængighedslys.---

## ⚙️ Build Pipeline

| Script | Sprog | Formål |
|:-------|:--------|:--------|
| 📊 `skill_metadata.py` | Python | Validering, taksonomi, scoring og statisk sikkerhedsscanning |
| ✅ `validate_skills.py` | Python | Metadatagenerering pr. færdighed og for rodresuméet |
| 📑 `generate_index.py` | Python | Færdighedsindeks, manifester, arkiver, signaturer og kontrolsummer |
| 🏗️ `build_catalog.js` | Node.js | Endelig `dist/catalog.json` og `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Kanonisk kategori revision og omskrivning |
| 🔍 `verify_archives.py` | Python | Verifikation af arkiv og signatur |

To detaljer betyder noget operationelt:

1. `dist/` er en del af runtime-kontrakten og er bevidst begået
2. bygningen er deterministisk nok til at understøtte CI-verifikation og frigivelsessignering---

## 📦 Published Catalog

Det nuværende offentlige katalog spænder over 32 færdigheder:

-**Opdagelse og planlægning**: "find-færdigheder", "brainstorming", "arkitektur", "debugging"
-**Designsystemer og tilgængelighed**: `design-systems-ops`, `accessibility-audit`
-**Produkt og fuld-stack levering**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Sikkerhed**: 'sikkerhedsrevisor', 'sårbarhedsscanner', 'hændelsessvar', 'trusselsmodellering'
-**OSS-vedligeholder arbejdsgange**: `dokumentation`, `changelog`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**AI engineering**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Alle syv bundter er fuldt understøttet:

- `essentielle` → `4/4`
- `fuld stak` → `5/5`
- `design` → `4/4`
- `sikkerhed` → `4/4`
- `devops` → `5/5`
- `ai-ingeniør` → `5/5`
- `oss-vedligeholder` → `4/4`

Nuværende scorespredning fra det genererede katalog:

- Kvalitetsresultater: `94, 95, 96, 97, 100`
- bedste praksis-score: `98, 99, 100`
- Sikkerhedsscore: alle offentliggjorte færdigheder i øjeblikket "95".

Repræsentant high end:

- `omni-figma` → `kvalitet 100`, `best_practices 100`
- `accessibility-audit` → `kvalitet 99`, `best_practices 100`
- `godkendelsesflows` → `kvalitet 97`, `best_practices 99`
- `design-systems-ops` → `kvalitet 97`, `best_practices 99`
- `release-engineering` → `kvalitet 97`, `best_practices 99`
- `trusselsmodellering` → `kvalitet 97`, `best_practices 99`
- `context-engineering` → `kvalitet 97`, `best_practices 99`

Repræsentativ nedre ende inden for det nuværende øverste bånd:

- `arkitektur` → `kvalitet 94`, `bedste_praksis 98`
- `ændringslog` → `kvalitet 94`, `best_practices 98`
- `create-pr` → `kvalitet 95`, `best_practices 98`

Dette er bevidst. Målscoreren skelner nu "fremragende" fra "exceptionel" i stedet for at udjævne hele kataloget øverst.---

## 🌟 Strengths

1.**Artefakt-først design**
   Hver runtime-overflade bruger det samme genererede katalog og manifesterer.
2.**Bred protokoldækning**
   CLI, API, MCP og A2A eksisterer samtidig uden at fragmentere datamodellen.
3.**Stærk lokal produktergonomi**
   Guidet installation, visual shell, `config-mcp` og dry-run standarder gør projektet brugbart ud over superbrugere.
4.**Ærlig sikkerhedsstilling**
   Tilladte lokale skrivninger, statisk scanning, signering, kontrolsummer og frigivelsesbekræftelse er alle eksplicitte.
5.**Sund MCP rækkevidde**
   Projektet understøtter nu et bredt sæt af nuværende MCP-kompatible klienter uden at lade som om, at udokumenterede mål er stabile.---

## 🔮 Opportunities

1.**Dybere bundtdækning**
   Det næste trin er specialisering inden for de eksisterende bundter, ikke kun bred dækning.
2.**Rige scorersemantik**
   Der er stadig plads til at evaluere referencepakkens dybde og workflowkvalitet mere semantisk.
3.**Flere klientskribenter kun hvor det er berettiget**
   Udvidelse bør forblive disciplineret og bundet til stabile officielle dokumenter.
4.**Validator-nedbrydning**
   `skill_metadata.py` er stadig et stort modul og vil drage fordel af intern dekomponering over tid.
5.**Eskalering af værtsstyring**
   Den nuværende basislinje i processen er nok til selvhosting, men virksomhedsimplementering vil i sidste ende ønske ekstern gateway og identitetsintegration.
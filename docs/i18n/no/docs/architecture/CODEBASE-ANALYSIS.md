# 🔬 Codebase Deep Analysis (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Omfattende teknisk analyse av gjeldende Omni Skills-arkitektur, kjøretidsoverflater og byggepipeline.**
> Sist analysert: 2026-03-28---

## 📊 Project Overview

| Attributt | Verdi |
|:----------|:------|
|**Navn**| `omni-skills` |
|**Pakkeversjon**| `0.1.3` |
|**Skill versjoner**| Per ferdighet og uavhengig av pakkeversjonen. Mange publiserte ferdigheter er fortsatt `0.0.1` mens pakken er `0.1.2`. |
|**Lisens**| MIT (kode) + CC BY 4.0 (innhold) |
|**NPM**| `npx omni-skills` |
|**Publiserte ferdigheter**| 32 |
|**Definerte bunter**| 7, alle fullt støttet av publiserte ferdigheter |
|**Aktive katalogkategorier**| 15 aktive bøtter av 18 kanoniske taksonomikategorier |
|**Primær kjøretid/bygg LOC samplet nedenfor**| 13 600+ |
|**Produksjonsavhengigheter**| 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Gjeldende øyeblikksbilde av klassifisering på lagernivå fra `metadata.json`:

- Gjennomsnittlig kvalitetspoeng: `96,3`
- Gjennomsnittlig poengsum for beste praksis: `98,7`
- Gjennomsnittlig sikkerhetsscore: `95.0`
- alle 32 publiserte ferdigheter valideres som "L3".

Gjeldende utgivelsesgrunnlinje:

- offentlig depotutgivelse: `v0.1.2`
- privat enhancer-utgivelse: `v0.0.1`
- Offentlig utgivelsesautomatisering og privat utgivelsesautomatisering er både aktive og grønne---

## 🏗️ Architecture Overview

Depotet følger et**arbeidsområde monorepo**-mønster med én delt katalogkjerne og flere kjøretidsoverflater.```text
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

Designet er med vilje**artefaktdrevet**:

1. ferdigheter er skrevet som `SKILL.md` pluss lokale støttepakker
2. bygget validerer, klassifiserer, arkiverer og normaliserer dem
3. de genererte artefaktene blir kontrakten for CLI, API, MCP og A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4500+ LOC kombinert**— det viktigste offentlige grensesnittet for både ekspertbruk og veiledet bruk.

| Kommando | Funksjon |
|:--------|:--------|
| 🔎 `finn [søk]` | Fulltekstkatalogsøk med poengbevisste filtre |
| 📦 `installer` | Veiledet eller flaggbasert installasjon i kjente klienter eller tilpassede stier |
| 🧾 `config-mcp` | Forhåndsvis eller skriv klientbevisst MCP-konfigurasjon |
| 🔌 `mcp <transport>` | Starter MCP-serveren i `stdio`, `stream` eller `sse` |
| 🌐 `api` | Starter katalog-API |
| 🤖 `a2a` | Starter A2A runtime |
| 🧪 `røyk` | Release preflight validering |
| 🩺 `lege` | Lokal diagnostikk |
| 🖥️ `ui` | Ink visual shell med installasjon, oppdagelse, konfigurasjon og servicehub |
| 🏷️ `rekategoriser` | Taksonomi driftinspeksjon og omskriving |

CLI er ikke lenger bare et installasjonsprogram. Det er det offentlige driftsverktøyet for hele plattformen.## 🧭 Future Expansion Direction

Den offentlige kjøretiden er ikke lenger blokkert på grunnarbeid, og den andre kategoribølgen er allerede landet. Det neste nyttige katalogarbeidet er dybde, ikke mer jakt etter kategorier.

Nyaktiverte kodeinnfødte spor nå i katalogen:

- `design` via `design-systems-ops`, `accessibility-audit` og `design-token-governance`
- `verktøy` via `mcp-server-authoring`
- `data-ai` via `data-contracts`
- `maskinlæring` via `modellservering`

Anbefalt neste retning:

1. utdype "design", "verktøy", "data-ai" og "maskinlæring"
2. holde «forretninger» og «innholdsmedier» utsatt med mindre et tydelig kodebasert forslag vises
3. bevare dagens kvalitetsgulv i stedet for aktiveringstrykk for gjenåpningskategori

Den utvidelsesbølgen er nå registrert i [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— installerer ferdigheter i 7 installeringskompatible assistenter.

| Flagg | Mål | Standard bane |
|:-----|:-------|:--------|
| `--claude` | Claude Code | `~/.claude/skills` |
| `--markør` | Markør | `~/.cursor/skills` |
| `--tvilling` | Gemini CLI | `~/.gemini/skills` |
| `--codex` | Codex CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antigravitasjon` | Antigravitasjon | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `<arbeidsområde>/.opencode/skills` |

Den støtter:

- installasjoner av komplett bibliotek
- selektive installasjoner av `--skill`
- kuraterte installasjoner av `--bundle`
- guidede TTY- og visuelle brukergrensesnittflyter
- tilpassede målbaner### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— delt kjøretidslag for CLI, API, MCP og A2A.

| Eksporter | Beskrivelse |
|:-------|:------------|
| 🔎 `searchSkills()` | Søk med vektet teksttilpasning og filterstøtte |
| 📋 `listSkills()` | Fleraksefiltrering etter kvalitet, beste praksis, nivå, sikkerhet, risiko, verktøy og kategori |
| 📌 `getSkill()` | Manifestoppløsning pluss berikede offentlige nettadresser |
| ⚖️ `compareSkills()` | Side-ved-side sammenligning |
| 💡 `recommendSkills()` | Måldrevet anbefaling |
| 📦 `buildInstallPlan()` | Installer plangenerering med advarsler og klientbevisst veiledning |
| 🗂️ `listBundles()` | Utvalgt pakkeoppføring med tilgjengelighet |
| 📁 `listSkillArchives()` | Arkiv- og signaturvedtak |

Dette er den virkelige enkeltkilden til runtime sannhet etter generasjon.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— full MCP-implementering ved bruk av den offisielle SDK.

**Transport**

- 'stdio'
- streambar HTTP
- SSE

**Alltid-på-skrivebeskyttede verktøy**

- `søkeferdigheter`
- `få_ferdighet`
- `sammenlign_ferdigheter`
- `anbefal_ferdigheter`
- `preview_install`

**verktøy i lokal modus**

- `oppdag_klienter`
- `liste_installerte_ferdigheter`
- `install_skills`
- `fjerne ferdigheter`
- `configure_client_mcp`

MCP-overflaten er bevisst delt mellom:

- ekstern/skrivebeskyttet katalogbruk
- lokal/skrivedyktig sidevognbruk### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1 943 LOC**— filsystem-bevisst MCP-lag for klientdeteksjon, ferdighetsadministrasjon og MCP-konfigurasjonsskriving.

Nåværende praktisk støtte:

-**7 installeringskompatible klienter**
-**16 konfigurasjonskompatible klienter**
-**33 konfigurasjonsmål**
-**19 konfigurasjonsprofiler**

Installasjonskompatible klienter:

- Claude Code
- Markør
- Gemini CLI
- Codex CLI
- Kiro
- Antigravitasjon
- Åpenkode

Konfigurasjonskompatible klienter og mål inkluderer:

- Claude-innstillinger, Claude Desktop og Claude-prosjektkonfigurasjon
- Konfigurasjon av markørbruker og arbeidsområde
- VS Code arbeidsområde, bruker, innsidere og Dev Container-konfigurasjon
- Gemini bruker- og arbeidsområdeinnstillinger
- Antigravity brukerkonfigurasjon
- Kiro-bruker, arbeidsområde og eldre baner
- Codex CLI TOML konfig
- OpenCode bruker- og arbeidsområdekonfigurasjon
- Cline-innstillinger
- GitHub Copilot CLI bruker og repo konfig
- Kilo bruker-, prosjekt- og arbeidsområdekonfigurasjon
- Fortsett arbeidsområde YAML
- Windsurf brukerkonfigurasjon
- Zed arbeidsområdekonfigurasjon
- Goose brukerkonfigurasjon

Sidevognen er bevisst ærlig om grenser:

- den skriver bare inne i en godkjenningsliste
- den forhåndsviser som standard
- Den beholder førsteklasses forfattere bare der offisielle dokumenter viser et stabilt format
- Det later ikke til at alle MCP-kompatible produkter også er et ferdighetsinstallasjonsmål### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC kombinert**— skrivebeskyttet registry API pluss styringsmellomvare.

Viktige endepunkter:

- `/helse`
- `/openapi.json`
- `/admin/runtime`
- `/v1/ferdigheter`
- `/v1/skills/:id`
- `/v1/søk`
- `/v1/sammenlign`
- `/v1/bunter`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Grunnlinje for styring allerede implementert:

- bærer token auth
- API-nøkkelaut
- admin token auth
- hastighetsbegrensning under prosess
- be om IDer
- revisjonslogging
- CORS-godkjenningslister
- IP-godkjenningslister
- håndtering av tillitsfullmektig
- vedlikeholdsmodus### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1 857 LOC kombinert på tvers av hovedserver-, kjøretids- og koordinatorfiler**— JSON-RPC 2.0-oppgavelivssyklus for agent-til-agent arbeidsflyter.

Støttede metoder:

- `melding/send`
- `melding/strøm`
- `oppgaver/få`
- `oppgaver/avbryt`
- `oppgaver/resubscribe`
- `tasks/pushNotificationConfig/*`

Nåværende operasjoner:

- `oppdag-ferdigheter`
- `anbefal-stabel`
- `forbered-installer-plan`

Holdbarhet og koordinasjonsmodell:

- minne, JSON eller SQLite lokal persistens
- start CV på nytt
- valgfri ekstern prosessutøver
- opt-in leide køkoordinering for delte SQLite-arbeidere
- valgfri Redis-støttet koordinering som en avansert vertsvei

Det viktigste arkitektoniske valget her er**enkel-først lokal drift**. Redis eksisterer som et avansert alternativ, men standard produktbane forblir lokal og avhengighetslys.---

## ⚙️ Build Pipeline

| Manus | Språk | Formål |
|:-------|:--------|:--------|
| 📊 `skill_metadata.py` | Python | Validering, taksonomi, scoring og statisk sikkerhetsskanning |
| ✅ `validate_skills.py` | Python | Metadatagenerering per ferdighet og for rotsammendraget |
| 📑 `generate_index.py` | Python | Ferdighetsindeks, manifester, arkiver, signaturer og kontrollsummer |
| 🏗️ `build_catalog.js` | Node.js | Endelig `dist/catalog.json` og `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Kanonisk kategorirevisjon og omskriving |
| 🔍 `verify_archives.py` | Python | Arkiv- og signaturverifisering |

To detaljer har betydning operativt:

1. `dist/` er en del av kjøretidskontrakten og er bevisst begått
2. bygget er deterministisk nok til å støtte CI-verifisering og utgivelsessignering---

## 📦 Published Catalog

Den nåværende offentlige katalogen spenner over 32 ferdigheter:

-**Oppdagelse og planlegging**: "finneferdigheter", "brainstorming", "arkitektur", "feilsøking".
-**Designsystemer og tilgjengelighet**: `design-systems-ops`, `accessibility-audit`
-**Produkt- og fullstacklevering**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Sikkerhet**: "sikkerhetsrevisor", "sårbarhetsskanner", "hendelsesrespons", "trusselmodellering".
-**OSS vedlikeholder arbeidsflyter**: `dokumentasjon`, `changelog`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**AI engineering**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Alle de syv pakkene er fullt støttet:

- `essensielle` → `4/4`
- `full stack` → `5/5`
- `design` → `4/4`
- `sikkerhet` → `4/4`
- `devops` → `5/5`
- `ai-ingeniør` → `5/5`
- `oss-maintainer` → `4/4`

Gjeldende poengspredning fra den genererte katalogen:

- Kvalitetspoeng: `94, 95, 96, 97, 100`
- beste praksis-poeng: `98, 99, 100`
- Sikkerhetsscore: alle publiserte ferdigheter for øyeblikket "95".

Representant high end:

- `omni-figma` → `kvalitet 100`, `beste_praksis 100`
- `tilgjengelighetsrevisjon` → `kvalitet 99`, `beste_praksis 100`
- `authort-flows` → `kvalitet 97`, `beste_praksis 99`
- `design-systems-ops` → `kvalitet 97`, `beste_praksis 99`
- `release-engineering` → `kvalitet 97`, `beste_praksis 99`
- `trusselmodellering` → `kvalitet 97`, `beste_praksis 99`
- `kontekst-engineering` → `kvalitet 97`, `beste_praksis 99`

Representativ nedre ende innenfor det nåværende toppbåndet:

- `arkitektur` → `kvalitet 94`, `beste_praksis 98`
- `changelog` → `kvalitet 94`, `beste_praksis 98`
- `opprett-pr` → `kvalitet 95`, `beste_praksis 98`

Dette er med vilje. Målscoreren skiller nå "utmerket" fra "eksepsjonelt" i stedet for å flate ut hele katalogen på toppen.---

## 🌟 Strengths

1.**Artefakt-første design**
   Hver runtime-overflate bruker den samme genererte katalogen og manifesterer.
2.**Bred protokolldekning**
   CLI, API, MCP og A2A eksisterer samtidig uten å fragmentere datamodellen.
3.**Sterk lokal produktergonomi**
   Guidet installasjon, visual shell, `config-mcp` og dry-run standarder gjør prosjektet brukbart utenfor superbrukere.
4.**Ærlig sikkerhetsstilling**
   Tillatte lokale skrivinger, statisk skanning, signering, sjekksummer og utgivelsesbekreftelse er alle eksplisitte.
5.**Sunn MCP-rekkevidde**
   Prosjektet støtter nå et bredt sett av nåværende MCP-kompatible klienter uten å late som om udokumenterte mål er stabile.---

## 🔮 Opportunities

1.**Dybere pakkedekning**
   Det neste trinnet er spesialisering i de eksisterende pakkene, ikke bare bred dekning.
2.**Rikere scorersemantikk**
   Det er fortsatt rom for å evaluere referansepakkens dybde og arbeidsflytkvalitet mer semantisk.
3.**Flere klientskribenter bare der det er berettiget**
   Utvidelse bør forbli disiplinert og knyttet til stabile offisielle dokumenter.
4.**Validator-dekomponering**
   `skill_metadata.py` er fortsatt en stor modul og vil ha fordel av intern dekomponering over tid.
5.**Eskalering av vertsstyring**
   Den nåværende basislinjen i prosessen er nok for selvhosting, men bedriftsdistribusjon vil til slutt ønske ekstern gateway og identitetsintegrasjon.
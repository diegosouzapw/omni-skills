# 🔬 Codebase Deep Analysis (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

---


>**Uitgebreide technische analyse van de huidige Omni Skills-architectuur, runtime-oppervlakken en build-pijplijn.**
> Laatst geanalyseerd: 28-03-2026---

## 📊 Project Overview

| Kenmerk | Waarde |
|:----------|:------|
|**Naam**| `omni-vaardigheden` ​​|
|**Pakketversie**| `0.1.3` |
|**Vaardigheidsversies**| Per vaardigheid en onafhankelijk van de pakketversie. Veel gepubliceerde vaardigheden zijn nog steeds '0.0.1', terwijl het pakket '0.1.2' is. |
|**Licentie**| MIT (code) + CC BY 4.0 (inhoud) |
|**NPM**| `npx omni-vaardigheden` ​​|
|**Gepubliceerde vaardigheden**| 32 |
|**Gedefinieerde bundels**| 7, allemaal volledig ondersteund door gepubliceerde vaardigheden |
|**Actieve cataloguscategorieën**| 15 actieve buckets uit 18 canonieke taxonomiecategorieën |
|**Primaire runtime/build-LOC hieronder bemonsterd**| 13.600+ |
|**Productieafhankelijkheden**| 7 ("@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Huidige momentopname van de classificatie op repositoryniveau van `metadata.json`:

- gemiddelde kwaliteitsscore: `96,3`
- gemiddelde score best practices: `98,7`
- gemiddelde beveiligingsscore: `95,0`
- alle 32 gepubliceerde vaardigheden valideren als `L3`

Basislijn huidige release:

- openbare repository-uitgave: `v0.1.2`
- privéverbeteringsrelease: `v0.0.1`
- Automatisering van publieke releases en automatisering van private releases zijn zowel actief als groen---

## 🏗️ Architecture Overview

De repository volgt een**monorepo**-werkruimtepatroon met één gedeelde cataloguskern en meerdere runtime-oppervlakken.```text
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

Het ontwerp is opzettelijk**artefact-gedreven**:

1. vaardigheden zijn geschreven als `SKILL.md` plus lokale ondersteuningspakketten
2. de build valideert, classificeert, archiveert en normaliseert ze
3. de gegenereerde artefacten worden het contract voor CLI, API, MCP en A2A---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

>**4.500+ LOC gecombineerd**— de belangrijkste openbare interface voor zowel deskundig als begeleid gebruik.

| Commando | Functie |
|:--------|:---------|
| 🔎 `vind [zoekopdracht]` | Zoeken in catalogus in volledige tekst met partituurbewuste filters |
| 📦 `installeren` | Begeleide of op vlaggen gebaseerde installatie in bekende clients of aangepaste paden |
| 🧾 `config-mcp` | Bekijk of schrijf clientbewuste MCP-configuratie |
| 🔌 `mcp <transport>` | Start de MCP-server in `stdio`, `stream` of `sse` |
| 🌐`api` | Start de catalogus-API |
| 🤖 `a2a` | Start de A2A-runtime |
| 🧪 `rook` | Preflight-validatie vrijgeven |
| 🩺 `dokter` | Lokale diagnostiek |
| 🖥️ `ui` | Inkt visuele shell met installatie-, detectie-, configuratie- en servicehub |
| 🏷️ `hercategoriseren` | Taxonomie drift inspectie en herschrijven |

De CLI is niet langer slechts een installatieprogramma. Het is de tool voor openbare operaties voor het hele platform.## 🧭 Future Expansion Direction

De publieke looptijd is niet langer geblokkeerd voor fundamenteel werk, en de golf van de tweede categorie is al geland. Het volgende nuttige cataloguswerk is diepgang, en niet meer het zoeken naar categorieën.

Nieuw geactiveerde code-native tracks nu in de catalogus:

- `ontwerp` via `design-systems-ops`, `accessibility-audit` en `design-token-governance`
- `tools` via `mcp-server-authoring`
- `data-ai` via `datacontracten`
- `machine-learning` via `model-serving`

Aanbevolen volgende richting:

1. Verdiepen van `design`, `tools`, `data-ai` en `machine-learning`
2. 'business' en 'content-media' uitgesteld houden, tenzij er een duidelijk code-native voorstel verschijnt
3. behoud van de huidige kwaliteitsvloer in plaats van de activeringsdruk van de categorie te heropenen

Die uitbreidingsgolf wordt nu opgenomen in [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md).### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

>**403 LOC**— installeert vaardigheden in 7 assistenten die kunnen worden geïnstalleerd.

| Vlag | Doel | Standaardpad |
|:-----|:-------|:-------------|
| `--claude` | Claude Code | `~/.claude/skills` |
| `--cursor` | Cursor | `~/.cursor/skills` |
| `--tweeling` | Tweeling CLI | `~/.gemini/skills` |
| `--codex` | Codex-CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antizwaartekracht` | Antizwaartekracht | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `<werkruimte>/.opencode/skills` |

Het ondersteunt:

- Volledige bibliotheekinstallaties
- selectieve installaties door `--skill`
- samengestelde installaties door `--bundle`
- begeleide TTY- en visuele UI-stromen
- aangepaste doelpaden### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

>**828 LOC**— gedeelde runtimelaag voor CLI, API, MCP en A2A.

| Exporteren | Beschrijving |
|:-------|:------------|
| 🔎 `searchSkills()` | Zoeken met gewogen tekstmatching en filterondersteuning |
| 📋 `listSkills()` | Meerassige filtering op kwaliteit, best practices, niveau, beveiliging, risico, tool en categorie |
| 📌 `getSkill()` | Manifestresolutie plus verrijkte openbare URL's |
| ⚖️ `vergelijkSkills()` | Vergelijking naast elkaar |
| 💡 `recommendSkills()` | Doelgericht advies |
| 📦`buildInstallPlan()` | Installatieplan genereren met waarschuwingen en klantbewuste begeleiding |
| 🗂️ `listBundles()` | Samengestelde bundellijst met beschikbaarheid |
| 📁 `listSkillArchives()` | Archief- en handtekeningresolutie |

Dit is de enige echte bron van runtime-waarheid na generatie.### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

>**812 LOC**— volledige MCP-implementatie met behulp van de officiële SDK.

**Transporten**

- `stdio`
- streambare HTTP
- SSE

**Altijd actieve, alleen-lezen tools**

- `zoekvaardigheden`
- `get_skill`
- `vergelijk_vaardigheden`
- `aanbevolen_vaardigheden`
- `preview_install`

**Lokale modustools**

- `detecteer_cliënten`
- `lijst_geïnstalleerde_vaardigheden`
- `install_skills`
- `verwijder_vaardigheden`
- `configureer_client_mcp`

Het MCP-oppervlak is opzettelijk verdeeld tussen:

- gebruik van catalogus op afstand/alleen-lezen
- Lokaal/schrijfbaar zijspangebruik### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

>**1.943 LOC**— bestandssysteembewuste MCP-laag voor clientdetectie, vaardigheidsbeheer en schrijven van MCP-configuraties.

Huidige praktische ondersteuning:

-**7 clients met installatiemogelijkheid**
-**16 clients met configuratiemogelijkheden**
-**33 configuratiedoelen**
-**19 configuratieprofielen**

Clients die geschikt zijn voor installatie:

- Claude Code
- Cursor
- Gemini CLI
- Codex CLI
- Kiro
- Antizwaartekracht
-OpenCode

Clients en doelen die voor Config geschikt zijn, zijn onder meer:

- Claude-instellingen, Claude Desktop en Claude-projectconfiguratie
- Cursorgebruiker en werkruimteconfiguratie
- VS Code-werkruimte, gebruiker, insiders en Dev Container-configuratie
- Gemini-gebruikers- en werkruimte-instellingen
- Antigravity-gebruikersconfiguratie
- Kiro-gebruikers-, werkruimte- en verouderde paden
- Codex CLI TOML-configuratie
- OpenCode gebruikers- en werkruimteconfiguratie
- Cline-instellingen
- GitHub Copilot CLI-gebruiker en repo-configuratie
- Kilo-gebruikers-, project- en werkruimteconfiguratie
- Ga door met werkruimte YAML
- Windsurf-gebruikersconfiguratie
- Zed-werkruimteconfiguratie
- Goose-gebruikersconfiguratie

Het zijspan is bewust eerlijk over grenzen:

- het schrijft alleen binnen een toelatingslijst
- het geeft standaard een voorbeeld weer
- het houdt alleen eersteklasschrijvers vast waar officiële documenten een stabiel formaat vertonen
- het pretendeert niet dat elk MCP-compatibel product ook een doelwit is voor het installeren van vaardigheden### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

>**715 LOC gecombineerd**— alleen-lezen register-API plus governance-middleware.

Belangrijke eindpunten:

- `/gezondheidz`
- `/openapi.json`
- `/admin/runtime`
- `/v1/vaardigheden`
- `/v1/skills/:id`
- `/v1/zoeken`
- `/v1/vergelijk`
- `/v1/bundels`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Basislijn voor governance al geïmplementeerd:

- tokenverificatie aan toonder
- API-sleutelverificatie
- beheerdertokenverificatie
- snelheidsbeperking tijdens het proces
- ID's opvragen
- auditregistratie
- CORS-toelatingslijsten
- IP-toelatingslijsten
- afhandeling van vertrouwensproxy's
- onderhoudsmodus### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

>**1.857 LOC gecombineerd over de hoofdserver-, runtime- en coördinatorbestanden**— JSON-RPC 2.0-taaklevenscyclus voor agent-tot-agent-workflows.

Ondersteunde methoden:

- `bericht/verzenden`
- `bericht/stream`
- `taken/krijgen`
- `taken/annuleren`
- `taken/opnieuw abonneren`
- `taken/pushNotificationConfig/*`

Huidige activiteiten:

- `ontdek-vaardigheden`
- `aanbevelen-stack`
- `installatieplan voorbereiden`

Duurzaamheids- en coördinatiemodel:

- lokale persistentie van geheugen, JSON of SQLite
- hervatten hervatten
- optioneel externe procesuitvoerder
- opt-in gehuurde wachtrijcoördinatie voor gedeelde SQLite-werknemers
- optionele door Redis ondersteunde coördinatie als een geavanceerd gehost pad

De belangrijkste architecturale keuze hier is**eenvoudige lokale bediening**. Redis bestaat als een geavanceerde optie, maar het standaardproductpad blijft lokaal en weinig afhankelijk.---

## ⚙️ Build Pipeline

| Script | Taal | Doel |
|:-------|:---------|:--------|
| 📊 `skill_metadata.py` | Python | Validatie, taxonomie, scores en statische beveiligingsscans |
| ✅ `validate_skills.py` | Python | Generatie van metadata per vaardigheid en voor de hoofdsamenvatting |
| 📑 `genereer_index.py` | Python | Vaardighedenindex, manifesten, archieven, handtekeningen en controlesommen |
| 🏗️`build_catalog.js` | Knooppunt.js | Laatste `dist/catalog.json` en `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Canonieke categorie-audit en herschrijving |
| 🔍 `verify_archives.py` | Python | Archief- en handtekeningverificatie |

Operationeel zijn twee details van belang:

1. `dist/` maakt deel uit van het runtimecontract en is opzettelijk vastgelegd
2. de build is deterministisch genoeg om CI-verificatie en release-ondertekening te ondersteunen---

## 📦 Published Catalog

De huidige openbare catalogus omvat 32 vaardigheden:

-**Ontdekking en planning**: `vind-vaardigheden`, `brainstormen`, `architectuur`, `debugging`
-**Ontwerpsystemen en toegankelijkheid**: `design-systems-ops`, `accessibility-audit`
-**Product- en full-stack-levering**: `frontend-design`, `api-design`, `database-design`, `omni-figma`, `auth-flows`
-**Beveiliging**: `beveiligingsauditor`, `kwetsbaarheidsscanner`, `incidentrespons`, `bedreigingsmodellering`
-**OSS-onderhouderworkflows**: `documentatie`, `changelog`, `create-pr`
-**DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`, `release-engineering`
-**AI-engineering**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`, `context-engineering`

Alle zeven bundels worden volledig ondersteund:

- `essentials` → `4/4`
- `volledige stapel` → `5/5`
- `ontwerp` → `4/4`
- `beveiliging` → `4/4`
- `devops` → `5/5`
- `ai-ingenieur` → `5/5`
- `oss-onderhouder` → `4/4`

Huidige scorespreiding vanuit de gegenereerde catalogus:

- kwaliteitsscores: `94, 95, 96, 97, 100`
- best practices-scores: `98, 99, 100`
- beveiligingsscore: alle gepubliceerde vaardigheden momenteel `95`

Representatieve high-end:

- `omni-figma` → `kwaliteit 100`, `best_practices 100`
- `toegankelijkheidsaudit` → `kwaliteit 99`, `best_practices 100`
- `auth-flows` → `kwaliteit 97`, `best_practices 99`
- `design-systems-ops` → `kwaliteit 97`, `best_practices 99`
- `release-engineering` → `kwaliteit 97`, `best_practices 99`
- `bedreigingsmodellering` → `kwaliteit 97`, `best_practices 99`
- `context-engineering` → `kwaliteit 97`, `best_practices 99`

Representatief onderste uiteinde binnen de huidige bovenband:

- `architectuur` → `kwaliteit 94`, `best_practices 98`
- `changelog` → `kwaliteit 94`, `best_practices 98`
- `create-pr` → `kwaliteit 95`, `best_practices 98`

Dit is opzettelijk. De scorer maakt nu onderscheid tussen ‘uitstekend’ en ‘uitzonderlijk’ in plaats van de hele catalogus bovenaan af te vlakken.---

## 🌟 Strengths

1.**Artefact-eerst ontwerp**
   Elk runtime-oppervlak gebruikt dezelfde gegenereerde catalogus en manifesten.
2.**Brede protocoldekking**
   CLI, API, MCP en A2A bestaan naast elkaar zonder het datamodel te fragmenteren.
3.**Sterke ergonomie van lokale producten**
   Begeleide installatie, visuele shell, `config-mcp` en standaardinstellingen voor droog uitvoeren maken het project bruikbaar voor meer dan ervaren gebruikers.
4.**Eerlijke beveiligingshouding**
   Lokale schrijfbewerkingen op de toelatingslijst, statisch scannen, ondertekenen, controlesommen en vrijgaveverificatie zijn allemaal expliciet.
5.**Gezond MCP-bereik**
   Het project ondersteunt nu een brede reeks huidige MCP-compatibele klanten zonder te doen alsof ongedocumenteerde doelen stabiel zijn.---

## 🔮 Opportunities

1.**Diepere bundeldekking**
   De volgende stap is specialisatie binnen de bestaande bundels, en niet alleen een brede dekking.
2.**Rijkere scorer-semantiek**
   Er is nog steeds ruimte om de diepte van het referentiepakket en de kwaliteit van de workflow semantischer te evalueren.
3.**Alleen meer klantschrijvers waar dit gerechtvaardigd is**
   De uitbreiding moet gedisciplineerd blijven en gebonden zijn aan stabiele officiële documenten.
4.**Validator-ontleding**
   `skill_metadata.py` is nog steeds een grote module en zou in de loop van de tijd baat hebben bij interne ontbinding.
5.**Gehoste governance-escalatie**
   De huidige basislijn in het proces is voldoende voor zelfhosting, maar voor een bedrijfsimplementatie zou uiteindelijk externe gateway- en identiteitsintegratie nodig zijn.
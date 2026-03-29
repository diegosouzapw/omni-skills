# 🧠 Omni Skills (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Färdighetskatalogen som installerar sig själv.**<br/>
CLI · API · MCP · A2A — allt från ett enda `npx`-kommando.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Installera på 1 min](#-installation) · [🛠️ Välj ditt verktyg](#-choose-your-tool) · [📖 CLI Guide](docs/users/CLI-USER-GUIDE.md) · [📦 Bundles](docs/users/BUNDLES.md) · [🟓urfac-es-runtime Omni Skills](#-varför-omni-skills)</div>

---

<div align="center">

### Översikt

</div>

| | Metrisk | Värde |
|:--|:-------|:------|
| 📦 |**Publicerade färdigheter**| `32` över 15 aktiva kategorier |
| 🎯 |**buntar**| "7" kurerade buntar med helt baksida |
| 🖥️ |**Installera klienter**| `7` installationskompatibla AI-kodningsassistenter |
| 🔌 |**MCP-kunder**| `16` MCP-konfigurationskompatibla klienter |
| 🔐 |**Curated Output**| `32` förbättrade engelska derivator i `skills_omni/` |
| 📋 |**Aktuell utgåva**| `v0.1.2` |---

## Snabbstart

>**Sökade efter färdigheter i AI-kodning, Claude Code-färdigheter, Cursor-färdigheter, Codex CLI-färdigheter, Gemini CLI-färdigheter, Antigravity-färdigheter eller installerbara `SKILL.md`-bibliotek?**
> Du är på rätt plats.### 1️⃣ What is this?

Omni Skills är en**installerbar färdighetskatalog och körtid**för AI-kodningsassistenter. I grunden är det ett offentligt arkiv med återanvändbara spelböcker från `SKILL.md` – men till skillnad från vanliga färdighetssamlingar är repet**distributions- och körtidsskiktet.

<detaljer>
<summary>📋 <strong>Vad ingår</strong></summary>

| Komponent | Beskrivning |
|:----------|:-----------|
| 🧠**Färdigheter**| Kurerade `SKILL.md`-baserade spelböcker för AI-assistenter |
| 📦**Manifest**| Genererade JSON-manifest, paket och arkiv |
| 🧭**Guidad installation**| Interaktiva TTY och visuella terminalinstallationsflöden |
| 🌐**Catalog API**| Skrivskyddat HTTP API för sökning, upptäckt och nedladdningar |
| 🔌**MCP-server**| Upptäckts-, rekommendations- och klientmedvetna konfigurationsverktyg |
| 🤖**A2A Runtime**| Agent-till-agent uppgiftsorkestrering |
| ✨**Enhancement Pipeline**| Private enhancer publicerar kurerade engelska derivator i `skills_omni/` |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *"Använd `@brainstorming` för att planera en SaaS MVP."*
>
> 💬 *"Använd `@api-design` för att granska denna slutpunktsdesign."*
>
> 💬 *"Använd `@debugging` för att isolera denna regression."*### 5️⃣ Start with a bundle

| 🎯 Mål | Bunt | Kommando |
|:--------|:-------|:--------|
| Allmän teknik | `nödvändigt` | `npx omni-skills --bundle essentials` |
| Produkt + app leverans | `full-stack` | `npx omni-skills --bunt full-stack` |
| Designsystem | `design` | `npx omni-skills --bundle design` |
| Säkerhetsgranskning | `säkerhet` | `npx omni-skills --bundle security` |
| Infra och släpp | `devops` | `npx omni-skills --bundle devops` |
| LLM-applikationer | `ai-ingenjör` | `npx omni-skills --bundle ai-engineer` |
| OSS underhåll | `oss-underhållare` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Innan du jämför paket eller väljer en installationsväg hjälper det att förstå dessa fem byggstenar:

| Koncept | Vad det betyder |
|:--------|:------------|
| 🧠**Färdigheter**| Återanvändbara `SKILL.md`-spelböcker som lär en assistent hur man kör ett arbetsflöde väl |
| 📦**Katalogartefakter**| Genererade JSON- och arkivutgångar som möjliggör sökning, jämförelse, nedladdning och installation |
| 🔌**MCP Config**| Konfiguration på klientsidan för assistenter att upptäcka Omni Skills genom MCP-verktyg |
| 🤖**A2A Runtime**| Agent-till-agent-orkestrering för upptäckt, rekommendation och överlämnande av installationsplan |
| ✨**Curated Output**| `skills_omni/` – den förbättrade ytan som underhålls av Omni, skild från naturligt intag uppströms |

>**📝 Inbyggd/kurerad policy:**
> - `skills/` accepterar ursprungligt uppströmsintag på vilket språk som helst
> - `skills_omni/` är alltid kurerad och publicerad på engelska
> - `skills_omni/` är en enkelriktad yta och går inte tillbaka till naturligt intag---

## 💡 Why Omni Skills

>**Inte bara "ett annat förråd med färdigheter i mappar."**
> Omni Skills har ett starkare kontrakt och en bredare körtid.

| Om du vill... | 📁 Typisk kompetensrepo | ✨ Omni Skills |
|:------------|:----------------------|:-------------------|
| Installera i en riktig assistent | Manuell kopia eller anpassat skript | `npx omni-skills`, guidad installation, visuellt användargränssnitt, selektiv `--skill` och `--bundle` |
| Sök och jämför färdigheter | Bläddra markdown manuellt | Genererad katalog, filtrering, paketplanering, sök, jämför och rekommendationer |
| Använd samma data i alla verktyg | Separat logik per verktyg | Delade manifest och katalog för CLI, API, MCP och A2A |
| Konfigurera MCP-klienter | Handredigera filer | `config-mcp`, lokala sidvagnsförhandsvisningar, genererade recept och godkännandelista |
| Trust releaser | Bästa förpackning | Kontrollsummor, signerade arkiv, skannerverifiering, släpp CI och publicera preflight |
| Kurera samhällsintag | Vad som än landar förblir som det är | Native intake in `skills/`, curated English derivatives in `skills_omni/` med attribution |---

## 🖥️ Compatibility and Invocation

Dessa färdigheter följer `SKILL.md`-modellen och kan användas som ett normalt arkiv, men paketet installerar och konfigurerar dem också över en bred yta:

>**7**klienter som kan installeras ·**16**klienter som kan konfigurera MCP### 🎯 Install-Capable Clients

| Verktyg | Skriv | Anropsexempel | Installera sökväg |
|:-----|:-----|:------------------------|:-------|
|**Claude Code**| CLI | `Använd brainstorming för att planera en funktion` | `~/.claude/skills` |
| 🔵**Markör**| IDE | `@brainstorming hjälp mig att planera en funktion` | `~/.cursor/färdigheter` |
| 🟡**Gemini CLI**| CLI | `Använd brainstorming för att planera en funktion` | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | `Använd brainstorming för att planera en funktion` | `~/.codex/skills` |
|**Kiro**| CLI / IDE | `Använd brainstorming för att planera en funktion` | `~/.kiro/skills` |
| 🟣**Antigravitation**| IDE | `Använd @brainstorming för att planera en funktion` | `~/.gemini/antigravity/skills` |
| ⚪**OpenCode**| CLI | `opencode run @brainstorming` | `<arbetsyta>/.opencode/skills` |

<detaljer>
<summary>🔌 <strong>Bredare MCP-konfigurationstäckning (16 klienter)</strong></summary>

Dessa mål är en del av den MCP-konfigurationsyta som stöds, även när de inte är installationsmål för färdighetskataloger:

| Klient eller yta | Supporttyp | Anteckningar |
|:--------------------|:------------|:------|
| Claude inställningar och skrivbord | MCP-konfiguration | Inställningar, skrivbord och projektmedvetna flöden |
| VS-kod | MCP-konfiguration | Användare, arbetsyta, insiders och Dev Container-mål |
| Tvillingarna | MCP-konfiguration | Användar- och arbetsytainställningar |
| Cline | MCP-konfiguration | Förstklassigt konfigurationsmål |
| GitHub Copilot CLI | MCP-konfiguration | Användar- och repokonfigurationsmål |
| Fortsätt | MCP-konfiguration | Arbetsyta YAML generation |
| Vindsurfa | MCP-konfiguration | Användarkonfigurationsmål |
| Zed | MCP-konfiguration | Arbetsyta konfigurationsmål |
| Gås | MCP-konfiguration | Användarkonfigurationsmål med genererat recept |
| Kilokod | MCP-konfiguration | Användar-, projekt- och arbetsytamål |
| Junie | MCP-konfiguration | Projekt- och användarkonfigurationsmål |</details>

---

## Installera

<tabell>
<tr>
<td width="50%">### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

| Verktyg | Installera kommando | Första användning |
|:-----|:---------------|:--------|
| Claude Kod | `npx omni-skills --claude` | `Använd brainstorming för att planera en funktion` |
| 🔵 Markör | `npx omni-skills --cursor` | `@brainstorming hjälp mig att planera en funktion` |
| Gemini CLI | `npx omni-skills --gemini` | `Använd brainstorming för att planera en funktion` |
| 🔴 Codex CLI | `npx omni-skills --codex` | `Använd brainstorming för att planera en funktion` |
| Antigravitation | `npx omni-skills --antigravity` *(standard)* | `Använd @brainstorming för att planera en funktion` |
| Kiro | `npx omni-skills --kiro` | `Använd brainstorming för att planera en funktion` |
| ⚪ OpenCode | `npx omni-skills --opencode` | `opencode run @brainstorming` |
| 📂 Anpassad sökväg | `npx omni-skills --path ./my-skills` | Beror på ditt verktyg |

> 📖**Inte säker på var du ska börja?**
> - [🚀 Komma igång](docs/users/GETTING-STARTED.md) — installera och verifiera på under 2 minuter
> - [🧭 CLI User Guide](docs/users/CLI-USER-GUIDE.md) — fullständig kommandoreferens
> - [📗 Användningsguide](docs/users/USAGE.md) — uppmaningar, mönster och körtidslägen---

## 🔌 Runtime Surfaces

Omni Skills är inte bara ett kompetensbibliotek. Den avslöjar**fyra körtidsytor**som förbrukar samma genererade katalog:

| Yta | Stat | Vad det gör | Exempel |
|:--------|:------|:------------|:--------|
| 🖥️**CLI**| ✅ Tillgänglig | Hitta, installera, diagnostisera, visuellt användargränssnitt, starttjänster, rökkontroller | `npx omni-skills doctor` |
| 🌐**Catalog API**| ✅ Tillgänglig | Skrivskyddad katalog, sök, paketerar, jämför, installera planer, nedladdningar | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Tillgänglig | Upptäckt, rekommendation, förhandsgranskning av installation, lokal sidovagn, konfigurationsflöden | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Tillgänglig | Uppgiftens livscykel, handoff, polling, streaming, annullering, persistens | `npx omni-skills a2a --port 3335` |

<detaljer>
<sammanfattning>🖥️ <strong>Visuellt skal och operatörskommandon</strong></sammanfattning>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<detaljer>
<summary>🔌 <strong>MCP-transporter och konfiguration</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

| Metrisk | Räkna |
|:-------|:------|
| 🧠 Publicerade färdigheter |**32**|
| 📂 Aktiva kategorier |**15**|
| 📦 Helt uppbackade buntar |**7**|
| ✨ Kurerade derivat |**32**i `skills_omni/` |### 📦 Bundle Availability

| Bunt | Färdigheter | Medlemmar |
|:-------|:-------|:--------|
| 🧰 `nödvändigt` |**4/4**✅ | `find-skills` · `brainstorming` · `arkitektur` · `debugging` |
| 🌐 `full-stack` |**5/5**✅ | `frontend-design` · `api-design` · `databas-design` · `omni-figma` · `auth-flows` |
| 🎨 `design` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ `säkerhet` |**4/4**✅ | `security-auditor` · `vulnerability-scanner` · `incident-response` · `threat-modeling` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observation-review` · `release-engineering` |
| 🤖 `ai-ingenjör` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `oss-underhållare` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `dokumentation` |### ✨ Native Intake → Curated Output

| Yta | Syfte | Språk |
|:--------|:--------|:--------|
| 📥 `färdigheter/` | Inhemskt intag | Alla språk |
| ✨ `skills_omni/` | Kurerad Omni-underhållen utgång | Alltid engelska |

>**ℹ️**Ändringar av inhemska färdigheter omarbetas av den privata förstärkaren och uppdateras i den utvalda baslinjen. Detta gör `skills_omni/` till en**underhållen katalogyta**, inte en andra kopia.---

## 🛡️ Security and Release Posture

> Omni Skills levererar en starkare release- och verifieringshistoria än ett vanligt nedskrivningsarkiv.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<detaljer>
<summary>📋 <strong>Vad pipelinen validerar</strong></summary>

- ✅ Kompetensvalidering och generering av metadata
- ✅ Verktyg för taxonominormalisering och omkategorisering
- ✅ Katalog- och arkivgenerering
- ✅ Automatiserade tester
- ✅ API-, MCP- och A2A-startvägar
- ✅ Arkivverifiering
- ✅ Paketpreflight med `npm pack --dry-run`</details>

<detaljer>
<summary>🔐 <strong>Släpp hållning</strong></summary>

| Kontroll | Beskrivning |
|:--------|:--------|
| 🔒 SHA-256 kontrollsummor | Kontrollsummanifest för alla arkiv |
| ✍️ Signerade artefakter | Fristående signaturer på utgivningsartefakter |
| 🤖 CI-tillämpad | Releaseverifiering i CI före publicering |
| 🦠 Skannerportar | ClamAV och VirusTotal-gated release flow |
| 📦 GitHub Release | Automatiserad GitHub Release generation |
| 📋 npm-publikation | Endast från verifierad tarball |
| 🔄 Autofrigöring | Vid kvalificerad skicklighet smälter samman till `main` |

**Auto-release utlöses endast när en sammanslagning ändras:**
- `skills/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

Ändringar av endast dokument**utlöser inte paketpublicering.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 🚀 [Komma igång](docs/users/GETTING-STARTED.md) | Installera, verifiera och anropa på under 2 minuter |
| 🧭 [CLI User Guide](docs/users/CLI-USER-GUIDE.md) | Fullständig kommandoreferens och verkliga mönster |
| 📗 [Användningsguide](docs/users/USAGE.md) | CLI-kommandon, installationslägen, körtid och MCP-konfiguration |
| 📦 [Bundles](docs/users/BUNDLES.md) | Utvalda paket och tillgänglighet |
| 📚 [Katalog](docs/CATALOG.md) | Autogenererad katalog över publicerade färdigheter |
| 🔧 [System Runbook](docs/operations/RUNBOOK.md) | Bygg, betjäna, säkra och felsök |### 🏗️ For Architects

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 🗺️ [Agent-Native Roadmap](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Arkitekturutveckling och återstående områden |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Central monorepo beslut |
| 🔬 [Kodbasanalys](docs/architecture/CODEBASE-ANALYSIS.md) | Körtidssammansättning och systemgränser |
| 🌐 [Catalog API](docs/specs/CATALOG-API.md) | HTTP-slutpunkter, filtrering, styrning och nedladdningar |
| 🧩 [CLI Guided Installer](docs/specs/CLI-GUIDED-INSTALLER.md) | Beteendekontrakt för den guidade installatören |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Bläck visuellt skal och tillståndsmodell |
| 🔌 [Local MCP Sidecar](docs/specs/LOCAL-MCP-SIDECAR.md) | Filsystemverktyg och modell för godkännandelista |
| 📊 [Client Support Matrix](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Fullständig kund- och skribentreferens |
| 🏷️ [Skill Classification](docs/specs/SKILL-CLASSIFICATION.md) | Taxonomie, poängsättning och metadata |
| 🛡️ [Säkerhetsvalidering](docs/specs/SECURITY-VALIDATION.md) | Skannrar, arkiv och signaturer |
| 📋 [Skill Manifest](docs/specs/SKILL-MANIFEST.md) | Maskinläsbart manifestformat |### 🤝 For Contributors

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 📝 [Bidragsguide](CONTRIBUTING.md) | Repo arbetsflöde och PR-förväntningar |
| 🧾 [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) | Native intake, enhancer processing, recensents förväntningar |
| 📄 [Skill Template](docs/contributors/SKILL-MALL.md) | Starter `SKILL.md` med frontmateria och struktur |
| 🔬 [Skill Anatomy](docs/contributors/SKILL-ANATOMY.md) | Struktur och kvalitetsförväntningar |
| ✅ [Quality Bar](docs/contributors/QUALITY-BAR.md) | Acceptanskriterier |
| 🏆 [High-Score Playbook](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Vad driver höga poäng |---

## 🗂️ Repository Layout

| Väg | Syfte |
|:-----|:--------|
| 📂 `färdigheter/` | Kanoniskt författade färdigheter och inhemskt intag |
| ✨ `skills_omni/` | Kurerade Omni-underhållna förbättrade derivat |
| 📖 `docs/` | Dokumentation för användare, bidragsgivare, arkitektur, drift och specifikationer |
| 📦 `dist/` | Genererade manifest, paket, kataloger och arkiv |
| 📁 `data/` | Buntdefinitioner och statiska stödjande data |
| 🧠 `paket/katalog-kärna/` | Runtime för delad katalog |
| 🌐 `paket/server-api/` | Skrivskyddat HTTP API |
| 🔌 `paket/server-mcp/` | MCP-server och lokal sidovagn |
| 🤖 `paket/server-a2a/` | A2A körtid och uppgift orkestrering |
| 🖥️ `tools/bin/` | CLI-ingångspunkter |
| 📚 `tools/lib/` | Installatör och UI-hjälpare |
| ⚙️ `verktyg/skript/` | Validering, generering, release och testskript |

>**ℹ️**`dist/` är avsiktligt versionerad eftersom de genererade artefakterna är en del av installations-, API-, MCP-, A2A-, rök- och releasekontraktet.---

## 🤝 Contributing

Omni Skills accepterar inbyggt uppströms färdighetsintag under "färdigheter/".

| Regel | Detaljer |
|:-----|:--------|
| 📥 Inhemskt intag | Kan vara grov, författad på vilket språk som helst |
| ✨ Kurerad utgång | `skills_omni/` reserverad för automationsförfattade Omni-derivat |
| 🚫 Manuella redigeringar | Offentliga manuella redigeringar av `skills_omni/` avvisas |
| 🔄 Upparbetning | Privat förstärkare omarbetar inhemska förändringar och uppdaterar utvald baslinje |

> 📖**Börja med:**[Contributing Guide](CONTRIBUTING.md) · [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Skriv | Licens |
|:-----|:--------|
| 💻 Kod och verktyg | [MIT-licens](LICENS) |
| 📝 Dokumentation och färdighetsinnehåll | [CC BY 4.0](LICENSINNEHÅLL) |---

<div align="center">

**Gjord med 🧠 av Omni Skills Team**

[⭐ Stjärnmärk denna repo](https://github.com/diegosouzapw/omni-skills) · [🐛 Rapportera ett fel](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Diskussioner](https://github.com/diegosouzapskill)/discussion-skills/</div>

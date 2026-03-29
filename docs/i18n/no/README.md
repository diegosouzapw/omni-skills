# 🧠 Omni Skills (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Kompetansekatalogen som installerer seg selv.**<br/>
CLI · API · MCP · A2A - alt fra en enkelt `npx`-kommando.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Installer på 1 min](#-installation) · [🛠️ Velg verktøyet ditt](#-choose-your-tool) · [📖 CLI Guide](docs/users/CLI-USER-GUIDE.md) · [📦 Bundles](docs/users/BUNDLES.md) · [🟟#faces-runtime] Omni-ferdigheter](#-hvorfor-omni-skills)</div>

---

<div align="center">

### Oversikt

</div>

| | Metrisk | Verdi |
|:--|:-------|:------|
| 📦 |**Publiserte ferdigheter**| `32` på tvers av 15 aktive kategorier |
| 🎯 |**Bunter**| `7` kuraterte bunter med full rygg |
| 🖥️ |**Installer klienter**| `7` installeringskompatible AI-kodingsassistenter |
| 🔌 |**MCP-kunder**| `16` MCP-konfigurasjonskompatible klienter |
| 🔐 |**Kuratert utdata**| `32` forbedrede engelske derivater i `skills_omni/` |
| 📋 |**Nåværende utgivelse**| `v0.1.2` |---

## Hurtigstart

>**Søkt etter AI-kodingsferdigheter, Claude Code-ferdigheter, markørferdigheter, Codex CLI-ferdigheter, Gemini CLI-ferdigheter, Antigravity-ferdigheter eller installerbare `SKILL.md`-biblioteker?**
> Du er på rett sted.### 1️⃣ What is this?

Omni Skills er en**installerbar ferdighetskatalog og kjøretid**for AI-kodingsassistenter. I kjernen er det et offentlig oppbevaringssted for gjenbrukbare `SKILL.md`-spillebøker – men i motsetning til vanlige ferdighetssamlinger, er repoen**distribusjons- og kjøretidslaget.

<detaljer>
<summary>📋 <strong>Hva er inkludert</strong></summary>

| Komponent | Beskrivelse |
|:----------|:--------|
| 🧠**ferdigheter**| Kuraterte `SKILL.md`-baserte spillebøker for AI-assistenter |
| 📦**Manifester**| Genererte JSON-manifester, bunter og arkiver |
| 🧭**Guidet installasjon**| Interaktive TTY og visuelle terminalinstallasjonsflyter |
| 🌐**Catalog API**| Skrivebeskyttet HTTP API for søk, oppdagelse og nedlastinger |
| 🔌**MCP-server**| Oppdagelse, anbefaling og klientbevisst konfigurasjonsverktøy |
| 🤖**A2A Runtime**| Agent-til-agent oppgaveorkestrering |
| ✨**Enhancement Pipeline**| Private enhancer publiserer kuraterte engelske derivater i `skills_omni/` |</details>

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

> 💬 *"Bruk `@brainstorming` for å planlegge en SaaS MVP."*
>
> 💬 *"Bruk `@api-design` for å vurdere denne endepunktdesignen."*
>
> 💬 *"Bruk `@debugging` for å isolere denne regresjonen."*### 5️⃣ Start with a bundle

| 🎯 Mål | Bunt | Kommando |
|:--------|:-------|:--------|
| Generell ingeniørfag | `essensielle` | `npx omni-skills -- bundle essentials` |
| Produkt + app levering | `full-stack` | `npx omni-skills --bunt full-stack` |
| Design systemer | `design` | `npx omni-skills --bundle design` |
| Sikkerhetsgjennomgang | `sikkerhet` | `npx omni-skills --bundle security` |
| Infra og utgivelse | `devops` | `npx omni-skills --bundle devops` |
| LLM-applikasjoner | `ai-ingeniør` | `npx omni-skills --bundle ai-engineer` |
| OSS vedlikehold | `oss-maintainer` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Før du sammenligner pakker eller velger en installasjonsbane, hjelper det å forstå disse fem byggeklossene:

| Konsept | Hva det betyr |
|:--------|:------------|
| 🧠**ferdigheter**| Gjenbrukbare `SKILL.md`-spillebøker som lærer en assistent hvordan man utfører en arbeidsflyt godt |
| 📦**Kataloggjenstander**| Genererte JSON- og arkivutganger som gjør det mulig å søke, sammenligne, laste ned og installere |
| 🔌**MCP Config**| Konfigurasjon på klientsiden for assistenter for å oppdage Omni Skills gjennom MCP-verktøy |
| 🤖**A2A Runtime**| Agent-til-agent orkestrering for oppdagelse, anbefaling og overlevering av installasjonsplan |
| ✨**Kuratert utdata**| `skills_omni/` — den Omni-vedlikeholde forbedrede overflaten, atskilt fra opprinnelig oppstrøms inntak |

>**📝 Innfødt/kuratert policy:**
> - `skills/` aksepterer innfødt oppstrøms inntak på alle språk
> - `skills_omni/` er alltid kuratert og publisert på engelsk
> - `skills_omni/` er en enveis overflate og går ikke tilbake til det opprinnelige inntaket---

## 💡 Why Omni Skills

>**Ikke bare "et annet depot med ferdigheter i mapper."**
> Omni Skills har en sterkere kontrakt og en bredere kjøretid.

| Hvis du vil… | 📁 Typisk ferdighetsrepo | ✨ Omni Ferdigheter |
|:-------------|:---------------------|:-------|
| Installer i en ekte assistent | Manuell kopi eller tilpasset skript | `npx omni-skills`, guidet installasjon, visuell brukergrensesnitt, selektiv `--skill` og `--bundle` |
| Søk og sammenlign ferdigheter | Bla gjennom markdown manuelt | Generert katalog, filtrering, buntplanlegging, søk, sammenlign og anbefaling |
| Bruk samme data på tvers av verktøy | Separat logikk per verktøy | Delte manifester og kataloger for CLI, API, MCP og A2A |
| Konfigurer MCP-klienter | Håndredigere filer | `config-mcp`, forhåndsvisninger av lokale sidevogner, genererte oppskrifter og godkjenningslister |
| Trust-utgivelser | Best-innsats emballasje | Sjekksummer, signerte arkiver, skannerverifisering, frigjør CI og publiser forhåndskontroll |
| Kurater fellesskapsinntak | Uansett land forblir som det er | Native inntak i `skills/`, kuraterte engelske derivater i `skills_omni/` med attribusjon |---

## 🖥️ Compatibility and Invocation

Disse ferdighetene følger `SKILL.md`-modellen og kan brukes som et normalt depot, men pakken installerer og konfigurerer dem også over en bred overflate:

>**7**klienter som kan installeres ·**16**MCP-konfigurasjonskompatible klienter### 🎯 Install-Capable Clients

| Verktøy | Skriv inn | Invokasjonseksempel | Installer bane |
|:-----|:-----|:------------------------|:-------|
|**Claude-kode**| CLI | `Bruk idédugnad for å planlegge en funksjon` | `~/.claude/skills` |
| 🔵**Markør**| IDE | `@brainstorming hjelpe meg med å planlegge en funksjon` | `~/.cursor/skills` |
| 🟡**Gemini CLI**| CLI | `Bruk idédugnad for å planlegge en funksjon` | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | `Bruk idédugnad for å planlegge en funksjon` | `~/.codex/skills` |
|**Kiro**| CLI / IDE | `Bruk idédugnad for å planlegge en funksjon` | `~/.kiro/skills` |
| 🟣**Antigravitasjon**| IDE | `Bruk @brainstorming for å planlegge en funksjon` | `~/.gemini/antigravity/skills` |
| ⚪**OpenCode**| CLI | `opencode run @brainstorming` | `<arbeidsområde>/.opencode/skills` |

<detaljer>
<summary>🔌 <strong>Større MCP-konfigurasjonsdekning (16 klienter)</strong></summary>

Disse målene er en del av den støttede MCP-konfigurasjonsoverflaten, selv når de ikke er installasjonsmål for ferdighetskataloger:

| Klient eller overflate | Støttetype | Merknader |
|:-------------------|:------------|:------|
| Claude-innstillinger og skrivebord | MCP-konfigurasjon | Innstillinger, skrivebord og prosjektbevisste flyter |
| VS-kode | MCP-konfigurasjon | Bruker-, arbeidsområde-, innsidere og Dev Container-mål |
| Tvillingene | MCP-konfigurasjon | Bruker- og arbeidsområdeinnstillinger |
| Cline | MCP-konfigurasjon | Førsteklasses konfigurasjonsmål |
| GitHub Copilot CLI | MCP-konfigurasjon | Bruker- og repokonfigurasjonsmål |
| Fortsett | MCP-konfigurasjon | Arbeidsområde YAML generasjon |
| Vindsurfing | MCP-konfigurasjon | Brukerkonfigurasjonsmål |
| Zed | MCP-konfigurasjon | Arbeidsområde konfigurasjonsmål |
| Gås | MCP-konfigurasjon | Brukerkonfigurasjonsmål med generert oppskrift |
| Kilokode | MCP-konfigurasjon | Bruker-, prosjekt- og arbeidsområdemål |
| Junie | MCP-konfigurasjon | Prosjekt- og brukerkonfigurasjonsmål |</details>

---

## Installer

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

| Verktøy | Installer kommando | Første bruk |
|:-----|:---------------|:--------|
| Claude Kode | `npx omni-skills --claude` | `Bruk idédugnad for å planlegge en funksjon` |
| 🔵 Markør | `npx omni-skills --cursor` | `@brainstorming hjelpe meg med å planlegge en funksjon` |
| 🟡 Gemini CLI | `npx omni-skills --gemini` | `Bruk idédugnad for å planlegge en funksjon` |
| 🔴 Codex CLI | `npx omni-skills --codex` | `Bruk idédugnad for å planlegge en funksjon` |
| Antigravitasjon | `npx omni-skills --antigravity` *(standard)* | `Bruk @brainstorming for å planlegge en funksjon` |
| Kiro | `npx omni-skills --kiro` | `Bruk idédugnad for å planlegge en funksjon` |
| ⚪ OpenCode | `npx omni-skills --opencode` | `opencode run @brainstorming` |
| 📂 Egendefinert bane | `npx omni-skills --path ./my-skills` | Avhenger av verktøyet ditt |

> 📖**Er du usikker på hvor du skal begynne?**
> - [🚀 Getting Started](docs/users/GETTING-STARTED.md) — install and verify in under 2 minutes
> - [🧭 CLI User Guide](docs/users/CLI-USER-GUIDE.md) — full command reference
> - [📗 Usage Guide](docs/users/USAGE.md) — prompts, patterns, and runtime modes---

## 🔌 Runtime Surfaces

Omni Skills er ikke bare et bibliotek av ferdigheter. Den avslører**fire runtime-overflater**som bruker den samme genererte katalogen:

| Overflate | Stat | Hva den gjør | Eksempel |
|:--------|:------|:------------|:--------|
| 🖥️**CLI**| ✅ Tilgjengelig | Finn, installer, diagnostiser, visuell brukergrensesnitt, oppstartstjenester, røyksjekker | `npx omni-skills doctor` |
| 🌐**Catalog API**| ✅ Tilgjengelig | Skrivebeskyttet katalog, søk, pakker, sammenlign, installer planer, last ned | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Tilgjengelig | Oppdagelse, anbefaling, forhåndsvisning av installering, lokal sidevogn, konfigurasjonsflyter | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Tilgjengelig | Oppgavelivssyklus, overlevering, polling, strømming, kansellering, utholdenhet | `npx omni-skills a2a --port 3335` |

<detaljer>
<summary>🖥️ <strong>Visuelle skall- og operatørkommandoer</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<detaljer>
<summary>🔌 <strong>MCP transports and config</strong></summary>```bash
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

| Metrisk | Telle |
|:-------|:------|
| 🧠 Publiserte ferdigheter |**32**|
| 📂 Aktive kategorier |**15**|
| 📦 Bunter med full støtte |**7**|
| ✨ Kuraterte derivater |**32**i `skills_omni/` |### 📦 Bundle Availability

| Bunt | Ferdigheter | Medlemmer |
|:-------|:-------|:--------|
| 🧰 `essensielle` |**4/4**✅ | `find-skills` · `brainstorming` · `arkitektur` · `debugging` |
| 🌐 `full stack` |**5/5**✅ | `frontend-design` · `api-design` · `database-design` · `omni-figma` · `auth-flows` |
| 🎨 `design` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ `sikkerhet` |**4/4**✅ | `security-auditor` · `vulnerability-scanner` · `incident-response` · `threat-modeling` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `ai-ingeniør` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `oss-maintainer` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `dokumentasjon` |### ✨ Native Intake → Curated Output

| Overflate | Formål | Språk |
|:--------|:--------|:--------|
| 📥 `ferdigheter/` | Native inntak | Alle språk |
| ✨ `ferdigheter_omni/` | Kuratert omni-vedlikeholdt utgang | Alltid engelsk |

>**ℹ️**Endringer i innfødte ferdigheter behandles på nytt av den private forsterkeren og oppdateres i den kuraterte grunnlinjen. Dette gjør `skills_omni/` til en**vedlikeholdt katalogoverflate**, ikke en andre kopi.---

## 🛡️ Security and Release Posture

> Omni Skills sender en sterkere utgivelses- og bekreftelseshistorie enn et vanlig nedskrivningslager.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<detaljer>
<summary>📋 <strong>Hva rørledningen validerer</strong></summary>

- ✅ Ferdighetsvalidering og generering av metadata
- ✅ Verktøy for taksonomi normalisering og rekategorisering
- ✅ Katalog- og arkivgenerering
- ✅ Automatiserte tester
- ✅ API-, MCP- og A2A-oppstartsbaner
- ✅ Arkivverifisering
- ✅ Pakkepreflight med `npm pack --dry-run`</details>

<detaljer>
<summary>🔐 <strong>Slipp stilling</strong></summary>

| Kontroll | Beskrivelse |
|:--------|:--------|
| 🔒 SHA-256 sjekksummer | Kontrollsummanifester for alle arkiver |
| ✍️ Signerte gjenstander | Frigjorte signaturer på utgivelsesartefakter |
| 🤖 CI-håndhevet | Utgivelsesverifisering i CI før publisering |
| 🦠 Skannerporter | ClamAV og VirusTotal-gated utgivelsesflyt |
| 📦 GitHub-utgivelse | Automatisert GitHub-utgivelsesgenerering |
| 📋 npm-publikasjon | Kun fra verifisert tarball |
| 🔄 Autoutløser | Ved kvalifiserende smelter ferdighet til `main` |

**Automatisk utgivelse utløses bare når en sammenslåing endres:**
- `ferdigheter/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

Endringer kun for dokument**utløser ikke pakkepublisering.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Dok | Hva du vil lære |
|:----|:------------------------|
| 🚀 [Kom i gang](docs/users/GOTTING-STARTED.md) | Installer, verifiser og start på under 2 minutter |
| 🧭 [CLI User Guide](docs/users/CLI-USER-GUIDE.md) | Full kommandoreferanse og virkelige mønstre |
| 📗 [Bruksveiledning](docs/users/USAGE.md) | CLI-kommandoer, installasjonsmoduser, kjøretid og MCP-konfigurasjon |
| 📦 [Bundler](docs/users/BUNDLES.md) | Utvalgte pakker og tilgjengelighet |
| 📚 [Katalog](docs/CATALOG.md) | Autogenerert katalog over publiserte ferdigheter |
| 🔧 [System Runbook](docs/operations/RUNBOOK.md) | Bygg, server, sikre og feilsøk |### 🏗️ For Architects

| Dok | Hva du vil lære |
|:----|:------------------------|
| 🗺️ [Agent-Native Roadmap](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Arkitekturutvikling og gjenværende områder |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Kjerne monorepo beslutning |
| 🔬 [Kodebaseanalyse](docs/architecture/CODEBASE-ANALYSIS.md) | Kjøretidssammensetning og systemgrenser |
| 🌐 [Catalog API](docs/specs/CATALOG-API.md) | HTTP-endepunkter, filtrering, styring og nedlastinger |
| 🧩 [CLI Guided Installer](docs/specs/CLI-GUIDED-INSTALLER.md) | Atferdskontrakt for den veiledede installatøren |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Blekk visuelt skall og tilstandsmodell |
| 🔌 [Local MCP Sidecar](docs/specs/LOCAL-MCP-SIDECAR.md) | Filsystemverktøy og godkjenningslistemodell |
| 📊 [Client Support Matrix](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Full klient- og skribentreferanse |
| 🏷️ [ferdighetsklassifisering](docs/specs/SKILL-CLASSIFICATION.md) | Taksonomi, scoring og metadata |
| 🛡️ [Sikkerhetsvalidering](docs/specs/SECURITY-VALIDATION.md) | Skannere, arkiver og signaturer |
| 📋 [Skill Manifest](docs/specs/SKILL-MANIFEST.md) | Maskinlesbart manifestformat |### 🤝 For Contributors

| Dok | Hva du vil lære |
|:----|:------------------------|
| 📝 [Bidragsveiledning](CONTRIBUTING.md) | Repo arbeidsflyt og PR-forventninger |
| 🧾 [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) | Innebygd inntak, prosessering av forsterker, anmelderforventninger |
| 📄 [Skill Template](docs/contributors/SKILL-MAL.md) | Starter `SKILL.md` med frontmaterie og struktur |
| 🔬 [Skill Anatomy](docs/contributors/SKILL-ANATOMY.md) | Struktur og kvalitetsforventninger |
| ✅ [Kvalitetslinje](dokumenter/bidragsytere/QUALITY-BAR.md) | Akseptkriterier |
| 🏆 [High-Score Playbook](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Hva gir høye poengsummer |---

## 🗂️ Repository Layout

| Sti | Formål |
|:-----|:--------|
| 📂 `ferdigheter/` | Kanoniske ferdigheter og innfødt inntak |
| ✨ `ferdigheter_omni/` | Kuraterte omni-vedlikeholdte forbedrede derivater |
| 📖 `dokumenter/` | Bruker-, bidragsyter-, arkitektur-, operasjons- og spesifikasjonsdokumentasjon |
| 📦 `dist/` | Genererte manifester, bunter, kataloger og arkiver |
| 📁 `data/` | Buntdefinisjoner og statiske støttedata |
| 🧠 `pakker/katalog-kjerne/` | Delt katalog kjøretid |
| 🌐 `pakker/server-api/` | Skrivebeskyttet HTTP API |
| 🔌 `pakker/server-mcp/` | MCP-server og lokal sidevogn |
| 🤖 `pakker/server-a2a/` | A2A kjøretid og oppgaveorkestrering |
| 🖥️ `tools/bin/` | CLI inngangspunkter |
| 📚 `tools/lib/` | Installasjons- og brukergrensesnitthjelpere |
| ⚙️ `verktøy/skript/` | Validering, generering, utgivelse og testskript |

>**ℹ️**`dist/` er med vilje versjonert fordi de genererte artefaktene er en del av installasjons-, API-, MCP-, A2A-, røyk- og utgivelseskontrakten.---

## 🤝 Contributing

Omni Skills aksepterer opprinnelige oppstrøms ferdighetsinntak under `skills/`.

| Regel | Detaljer |
|:-----|:--------|
| 📥 Native inntak | Kan være grov, skrevet på alle språk |
| ✨ Kuratert utgang | `skills_omni/` reservert for automasjonsforfattede Omni-derivater |
| 🚫 Manuelle redigeringer | Offentlige manuelle redigeringer av `skills_omni/` blir avvist |
| 🔄 Reprosessering | Privat forsterker behandler opprinnelige endringer og oppdaterer kurert grunnlinje |

> 📖**Start med:**[Bidragsveiledning](CONTRIBUTING.md) · [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Skriv inn | Lisens |
|:-----|:--------|
| 💻 Kode og verktøy | [MIT-lisens](LISENS) |
| 📝 Dokumentasjon og ferdighetsinnhold | [CC BY 4.0](LISENSINNHOLD) |---

<div align="center">

**Laget med 🧠 av Omni Skills Team**

[⭐ Stjernemerk for denne repoen](https://github.com/diegosouzapw/omni-skills) · [🐛 Rapporter en feil](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Diskusjoner](https://github.com/discussion-skills)/</div>

# 🧠 Omni Skills (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**De vaardighedencatalogus die zichzelf installeert.**<br/>
CLI · API · MCP · A2A — allemaal vanuit één `npx`-opdracht.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Installeer in 1 min](#-installation) · [🛠️ Kies je tool](#-choose-your-tool) · [📖 CLI Guide](docs/users/CLI-USER-GUIDE.md) · [📦 Bundels](docs/users/BUNDLES.md) · [🔌 Runtime](#-runtime-surfaces) · [💡 Waarom Omni Vaardigheden](#-waarom-omni-vaardigheden)</div>

---

<div align="center">

### Overzicht

</div>

| | Metrisch | Waarde |
|:--|:-------|:------|
| 📦 |**Gepubliceerde vaardigheden**| `32` in 15 actieve categorieën |
| 🎯 |**Bundels**| `7` volledig ondersteunde samengestelde bundels |
| 🖥️|**Installatieclients**| `7` voor installatie geschikte AI-coderingsassistenten |
| 🔌|**MCP-klanten**| `16` Clients die geschikt zijn voor MCP-configuratie |
| 🔐 |**Samengestelde uitvoer**| `32` verbeterde Engelse afgeleiden in `skills_omni/` |
| 📋 |**Huidige versie**| `v0.1.2` |---

## Snel starten

>**Gezocht naar AI-codeervaardigheden, Claude Code-vaardigheden, Cursor-vaardigheden, Codex CLI-vaardigheden, Gemini CLI-vaardigheden, Antigravity-vaardigheden of installeerbare `SKILL.md`-bibliotheken?**
> U bent op de juiste plaats.### 1️⃣ What is this?

Omni Skills is een**installeerbare vaardighedencatalogus en runtime**voor AI-codeerassistenten. In de kern is het een openbare opslagplaats van herbruikbare 'SKILL.md'-playbooks, maar in tegenstelling tot gewone vaardighedencollecties is de repository****de distributie- en runtime-laag.

<details>
<summary>📋 <strong>Wat is inbegrepen</strong></summary>

| Onderdeel | Beschrijving |
|:----------|:-----------|
| 🧠**Vaardigheden**| Samengestelde op `SKILL.md` gebaseerde draaiboeken voor AI-assistenten |
| 📦**Manifesten**| Gegenereerde JSON-manifesten, bundels en archieven |
| 🧭**Begeleide installatie**| Interactieve TTY en visuele terminalinstallatiestromen |
| 🌐**Catalogus-API**| Alleen-lezen HTTP-API voor zoeken, ontdekken en downloaden |
| 🔌**MCP-server**| Ontdekkings-, aanbevelings- en klantbewuste configuratietools |
| 🤖**A2A Runtime**| Taakorkestratie van agent tot agent |
| ✨**Verbeteringspijplijn**| Private Enhancer publiceert samengestelde Engelse derivaten in `skills_omni/` |</details>

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

> 💬 *"Gebruik `@brainstorming` om een SaaS MVP te plannen."*
>
> 💬 *"Gebruik `@api-design` om dit eindpuntontwerp te beoordelen."*
>
> 💬 *"Gebruik `@debugging` om deze regressie te isoleren."*### 5️⃣ Start with a bundle

| 🎯 Doel | Bundel | Commando |
|:---------|:-------|:--------|
| Algemene techniek | `essentiële zaken` | `npx omni-skills --bundel essentiële zaken` |
| Levering van producten en apps | `volledige stapel` | `npx omni-skills --bundel full-stack` |
| Ontwerpsystemen | `ontwerp` | `npx omni-skills --bundelontwerp` |
| Beveiligingsonderzoek | `veiligheid` | `npx omni-skills --bundelbeveiliging` |
| Infra en release | `devops` | `npx omni-skills --bundel devops` |
| LLM-aanvragen | `ai-ingenieur` | `npx omni-skills --bundel ai-engineer` |
| OSS-onderhoud | `oss-onderhouder` | `npx omni-skills --bundel oss-maintainer` |---

## 🧩 Core Concepts

Voordat u bundels vergelijkt of een installatiepad kiest, helpt het begrijpen van deze vijf bouwstenen:

| Concept | Wat het betekent |
|:--------|:-------------|
| 🧠**Vaardigheden**| Herbruikbare `SKILL.md`-playbooks die een assistent leren hoe hij een workflow goed kan uitvoeren |
| 📦**Catalogusartefacten**| Gegenereerde JSON- en archiefuitvoer die zoeken, vergelijken, downloaden en installeren mogelijk maken |
| 🔌**MCP-configuratie**| Configuratie aan de clientzijde voor assistenten om Omni Skills te ontdekken via MCP-tools |
| 🤖**A2A Runtime**| Agent-naar-agent-orkestratie voor detectie, aanbeveling en overdracht van installatieplannen |
| ✨**Samengestelde uitvoer**| `skills_omni/` — het door Omni onderhouden verbeterde oppervlak, gescheiden van de oorspronkelijke stroomopwaartse inname |

>**📝 Native/Curated-beleid:**
> - `skills/` accepteert native upstream-instroom in elke taal
> - `skills_omni/` wordt altijd samengesteld en gepubliceerd in het Engels
> - `skills_omni/` is eenrichtingsverkeer en loopt niet terug naar de oorspronkelijke inname---

## 💡 Why Omni Skills

>**Niet zomaar "weer een opslagplaats met vaardigheden in mappen."**
> Omni Skills heeft een sterker contract en een breder looptijdoppervlak.

| Als je wilt… | 📁 Typische vaardighedenrepository | ✨ Omni-vaardigheden |
|:------------|:---------------------|:-------------|
| Installeer in een echte assistent | Handmatig kopiëren of aangepast script | `npx omni-skills`, begeleide installatie, visuele gebruikersinterface, selectieve `--skill` en `--bundle` |
| Zoek en vergelijk vaardigheden | Handmatig door de afwaardering bladeren | Gegenereerde catalogus, filtering, bundelplanning, zoeken, vergelijken en aanbevelen |
| Gebruik dezelfde gegevens voor alle tools | Aparte logica per tool | Gedeelde manifesten en catalogus voor CLI, API, MCP en A2A |
| MCP-clients configureren | Bestanden handmatig bewerken | `config-mcp`, lokale zijspanvoorbeelden, gegenereerde recepten en schrijfbewerkingen op de toelatingslijst |
| Trust-releases | Best-effort-verpakking | Checksums, ondertekende archieven, scannerverificatie, CI vrijgeven en preflight publiceren |
| Curate gemeenschapsinname | Welk land dan ook blijft zoals het is | Native intake in `skills/`, samengestelde Engelse afgeleiden in `skills_omni/` met toeschrijving |---

## 🖥️ Compatibility and Invocation

Deze vaardigheden volgen het `SKILL.md`-model en kunnen worden gebruikt als een normale repository, maar het pakket installeert en configureert ze ook over een breed oppervlak:

>**7**clients die geschikt zijn voor installatie ·**16**clients die geschikt zijn voor MCP-configuratie### 🎯 Install-Capable Clients

| Gereedschap | Typ | Aanroepvoorbeeld | Installatiepad |
|:-----|:-----|:-------------------|:------------|
| 🟢**Claude-code**| CLI | `Gebruik brainstormen om een ​​functie te plannen` | `~/.claude/skills` |
| 🔵**Cursor**| IDE | `@brainstorming help me bij het plannen van een functie` | `~/.cursor/skills` |
| 🟡**Gemini CLI**| CLI | `Gebruik brainstormen om een ​​functie te plannen` | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | `Gebruik brainstormen om een ​​functie te plannen` | `~/.codex/skills` |
| 🟠**Kiro**| CLI/IDE | `Gebruik brainstormen om een ​​functie te plannen` | `~/.kiro/skills` |
| 🟣**Antizwaartekracht**| IDE | `Gebruik @brainstorming om een ​​functie te plannen` | `~/.gemini/antigravity/skills` |
| ⚪**OpenCode**| CLI | `opencode uitvoeren @brainstorming` | `<werkruimte>/.opencode/skills` |

<details>
<summary>🔌 <strong>Bredere MCP-configuratiedekking (16 clients)</strong></summary>

Deze doelen maken deel uit van het ondersteunde MCP-configuratieoppervlak, zelfs als het geen installatiedoelen voor vaardighedenmappen zijn:

| Klant of Surface | Ondersteuningstype | Opmerkingen |
|:-----------------|:------------|:------|
| Claude-instellingen en bureaublad | MCP-configuratie | Instellingen, bureaublad en projectbewuste stromen |
| VS-code | MCP-configuratie | Doelen voor gebruikers, werkruimte, insiders en ontwikkelaarscontainers |
| Tweeling | MCP-configuratie | Gebruikers- en werkruimte-instellingen |
| Klijn | MCP-configuratie | Eersteklas configuratiedoel |
| GitHub Copilot-CLI | MCP-configuratie | Configuratiedoelen voor gebruikers en opslagplaatsen |
| Ga verder | MCP-configuratie | YAML-generatie van werkruimte |
| Windsurfen | MCP-configuratie | Doel gebruikersconfiguratie |
| Zed | MCP-configuratie | Doel van werkruimteconfiguratie |
| Gans | MCP-configuratie | Doel van gebruikersconfiguratie met gegenereerd recept |
| Kilocode | MCP-configuratie | Doelen voor gebruikers, projecten en werkruimten |
| juni | MCP-configuratie | Doelen voor project- en gebruikersconfiguratie |</details>

---

## Installeren

<tabel>
<tr>
<td breedte = "50%">### Option A: Install with `npx` *(recommended)*

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

| Gereedschap | Commando installeren | Eerste gebruik |
|:-----|:---------------|:----------|
| 🟢 ClaudeCode | `npx omni-vaardigheden --claude` | `Gebruik brainstormen om een ​​functie te plannen` |
| 🔵 Cursor | `npx omni-vaardigheden --cursor` | `@brainstorming help me bij het plannen van een functie` |
| 🟡Gemini CLI | `npx omni-vaardigheden --gemini` | `Gebruik brainstormen om een ​​functie te plannen` |
| 🔴Codex CLI | `npx omni-vaardigheden --codex` | `Gebruik brainstormen om een ​​functie te plannen` |
| 🟣 Antizwaartekracht | `npx omni-skills --antigravity` *(standaard)* | `Gebruik @brainstorming om een ​​functie te plannen` |
| 🟠Kiro | `npx omni-vaardigheden --kiro` | `Gebruik brainstormen om een ​​functie te plannen` |
| ⚪ OpenCode | `npx omni-skills --opencode` | `opencode uitvoeren @brainstorming` |
| 📂 Aangepast pad | `npx omni-skills --pad ./mijn-skills` | Afhankelijk van uw gereedschap |

> 📖**Weet je niet zeker waar je moet beginnen?**
> - [🚀 Aan de slag](docs/users/GETTING-STARTED.md) — installeer en verifieer in minder dan 2 minuten
> - [🧭 CLI-gebruikershandleiding](docs/users/CLI-USER-GUIDE.md) — volledige opdrachtreferentie
> - [📗 Gebruikshandleiding](docs/users/USAGE.md) — aanwijzingen, patronen en runtime-modi---

## 🔌 Runtime Surfaces

Omni Skills is niet alleen een bibliotheek met vaardigheden. Er worden**vier runtime-oppervlakken**zichtbaar die dezelfde gegenereerde catalogus gebruiken:

| Oppervlakte | Staat | Wat het doet | Voorbeeld |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ Beschikbaar | Zoeken, installeren, diagnosticeren, visuele gebruikersinterface, opstartservices, rookcontroles | `npx omni-skills dokter` |
| 🌐**Catalogus-API**| ✅ Beschikbaar | Alleen-lezen catalogus, zoeken, bundelen, vergelijken, plannen installeren, downloaden | `npx omni-skills api --poort 3333` |
| 🔌**MCP**| ✅ Beschikbaar | Ontdekking, aanbeveling, installatievoorbeeld, lokale zijspan, configuratiestromen | `npx omni-skills mcp-stream --local` |
| 🤖**A2A**| ✅ Beschikbaar | Taaklevenscyclus, overdracht, polling, streaming, annulering, persistentie | `npx omni-skills a2a --poort 3335` |

<details>
<summary>🖥️ <strong>Visuele shell- en operatoropdrachten</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<details>
<summary>🔌 <strong>MCP-transporten en configuratie</strong></summary>```bash
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

| Metrisch | Tel |
|:-------|:------|
| 🧠 Gepubliceerde vaardigheden |**32**|
| 📂 Actieve categorieën |**15**|
| 📦 Volledig ondersteunde bundels |**7**|
| ✨ Samengestelde derivaten |**32**in `skills_omni/` |### 📦 Bundle Availability

| Bundel | Vaardigheden | Leden |
|:-------|:-------|:--------|
| 🧰 `essentials` |**4/4**✅ | `vind-vaardigheden` ​​· `brainstormen` · `architectuur` · `debugging` |
| 🌐 `full-stack` |**5/5**✅ | `frontend-ontwerp` · `api-ontwerp` · `database-ontwerp` · `omni-figma` · `auth-flows` |
| 🎨 `ontwerp` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `toegankelijkheid-audit` · `design-token-governance` |
| 🛡️`beveiliging` |**4/4**✅ | `beveiligingsauditor` · `kwetsbaarheidsscanner` · `incidentrespons` · `bedreigingsmodellering` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-engineering` |
| 🤖 `ai-ingenieur` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracten` · `model-serving` |
| 🔧 `oss-onderhouder` |**4/4**✅ | `find-skills` · `create-pr` · `changelog` · `documentatie` |### ✨ Native Intake → Curated Output

| Oppervlakte | Doel | Taal |
|:--------|:--------|:---------|
| 📥 `vaardigheden/` | Inheemse instroom | Elke taal |
| ✨ `skills_omni/` | Samengestelde omni-onderhouden output | Altijd Engels |

>**ℹ️**Wijzigingen in native vaardigheden worden opnieuw verwerkt door de privéversterker en vernieuwd in de samengestelde basislijn. Dit maakt `skills_omni/` tot een**onderhouden catalogusoppervlak**, en niet tot een tweede kopie.---

## 🛡️ Security and Release Posture

> Omni Skills levert een sterker release- en verificatieverhaal dan een eenvoudige opslagplaats voor prijsverlagingen.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<details>
<summary>📋 <strong>Wat de pijplijn valideert</strong></summary>

- ✅ Vaardigheidsvalidatie en het genereren van metadata
- ✅ Tooling voor normalisatie en hercategorisatie van taxonomie
- ✅ Catalogus- en archiefgeneratie
- ✅ Geautomatiseerde tests
- ✅ API-, MCP- en A2A-opstartpaden
- ✅ Archiefverificatie
- ✅ Pakketpreflight met `npm pack --dry-run`</details>

<details>
<summary>🔐 <strong>Laathouding los</strong></summary>

| Controle | Beschrijving |
|:--------|:-----------|
| 🔒 SHA-256-controlesommen | Checksum-manifesten voor alle archieven |
| ✍️ Gesigneerde artefacten | Vrijstaande handtekeningen op release-artefacten |
| 🤖 CI-afgedwongen | Vrijgaveverificatie in CI vóór publicatie |
| 🦠 Scannerpoorten | ClamAV en VirusTotal-gated releasestroom |
| 📦 GitHub-release | Geautomatiseerde generatie van GitHub-releases |
| 📋 npm publicatie | Alleen van geverifieerde tarball |
| 🔄 Automatische vrijgave | Bij kwalificatie worden vaardigheden samengevoegd tot `main` |

**Automatische vrijgave wordt alleen geactiveerd wanneer een samenvoeging verandert:**
- `vaardigheden/*/**`
- `vaardigheden_omni/*/**`
- `data/bundels.json`

Wijzigingen in alleen documenten leiden**niet**tot pakketpublicatie.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Dok | Wat je leert |
|:----|:----------------|
| 🚀 [Aan de slag](docs/users/GETTING-STARTED.md) | Installeer, verifieer en roep in minder dan 2 minuten |
| 🧭 [CLI-gebruikershandleiding](docs/users/CLI-USER-GUIDE.md) | Volledige commandoreferentie en patronen uit de echte wereld |
| 📗 [Gebruiksgids](docs/users/USAGE.md) | CLI-opdrachten, installatiemodi, runtime en MCP-configuratie |
| 📦 [Bundels](docs/users/BUNDLES.md) | Samengestelde bundels en beschikbaarheid |
| 📚 [Catalogus](docs/CATALOG.md) | Automatisch gegenereerde catalogus van gepubliceerde vaardigheden |
| 🔧 [Systeemrunbook](docs/operations/RUNBOOK.md) | Bouwen, bedienen, beveiligen en problemen oplossen |### 🏗️ For Architects

| Dok | Wat je leert |
|:----|:----------------|
| 🗺️ [Agent-Native Roadmap](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Architectuurevolutie en resterende gebieden |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Kernmonorepobesluit |
| 🔬 [Codebase-analyse](docs/architecture/CODEBASE-ANALYSIS.md) | Runtimesamenstelling en systeemgrenzen |
| 🌐 [Catalogus-API](docs/specs/CATALOG-API.md) | HTTP-eindpunten, filtering, beheer en downloads |
| 🧩 [CLI begeleid installatieprogramma](docs/specs/CLI-GUIDED-INSTALLER.md) | Gedragscontract voor de begeleide installateur |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Inkt visuele schaal en staatsmodel |
| 🔌 [Lokaal MCP-zijspan](docs/specs/LOCAL-MCP-SIDECAR.md) | Bestandssysteemtools en toelatingslijstmodel |
| 📊 [Matrix voor klantondersteuning](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Volledige klant- en schrijverreferentie |
| 🏷️ [Vaardigheidsclassificatie](docs/specs/SKILL-CLASSIFICATION.md) | Taxonomie, scores en metadata |
| 🛡️ [Beveiligingsvalidatie](docs/specs/SECURITY-VALIDATION.md) | Scanners, archieven en handtekeningen |
| 📋 [Vaardigheidsmanifest](docs/specs/SKILL-MANIFEST.md) | Machineleesbaar manifestformaat |### 🤝 For Contributors

| Dok | Wat je leert |
|:----|:----------------|
| 📝 [Bijdragengids](CONTRIBUTING.md) | Repo-workflow en PR-verwachtingen |
| 🧾 [Skill PR-workflow](docs/contributors/SKILL-PR-WORKFLOW.md) | Oorspronkelijke inname, verwerking van versterkers, verwachtingen van de recensent |
| 📄 [Vaardigheidssjabloon](docs/contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` met frontmatter en structuur |
| 🔬 [Vaardigheidanatomie](docs/contributors/SKILL-ANATOMY.md) | Structuur en kwaliteitsverwachtingen |
| ✅ [Kwaliteitsbalk](docs/contributors/QUALITY-BAR.md) | Acceptatiecriteria |
| 🏆 [High-Score Playbook](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Wat zorgt voor hoge scores |---

## 🗂️ Repository Layout

| Pad | Doel |
|:-----|:--------|
| 📂 `vaardigheden/` | Canonieke auteursvaardigheden en native intake |
| ✨ `skills_omni/` | Curated Omni-onderhouden verbeterde derivaten |
| 📖 `docs/` | Documentatie voor gebruiker, bijdrager, architectuur, bewerkingen en specificaties |
| 📦 `dist/` | Gegenereerde manifesten, bundels, catalogus en archieven |
| 📁 `gegevens/` | Bundeldefinities en statische ondersteunende gegevens |
| 🧠 `pakketten/catalog-core/` | Runtime van gedeelde catalogus |
| 🌐 `pakketten/server-api/` | Alleen-lezen HTTP-API |
| 🔌 `pakketten/server-mcp/` | MCP-server en lokale zijspan |
| 🤖 `pakketten/server-a2a/` | A2A runtime en taakorkestratie |
| 🖥️`tools/bak/` | CLI-ingangspunten |
| 📚 `tools/lib/` | Installateur- en UI-helpers |
| ⚙️ `tools/scripts/` | Validatie, generatie, release en testscripts |

>**ℹ️**`dist/` heeft opzettelijk een versienummer gebruikt omdat de gegenereerde artefacten deel uitmaken van het installatie-, API-, MCP-, A2A-, smoke- en releasecontract.---

## 🤝 Contributing

Omni Skills accepteert native upstream-vaardigheidsinname onder `skills/`.

| Regel | Details |
|:-----|:--------|
| 📥Native instroom | Mag ruw zijn, geschreven in elke taal |
| ✨ Samengestelde uitvoer | `skills_omni/` gereserveerd voor op automatisering geschreven Omni-derivaten |
| 🚫 Handmatige bewerkingen | Openbare handmatige bewerkingen van `skills_omni/` worden afgewezen |
| 🔄Herverwerking | Private Enhancer verwerkt oorspronkelijke wijzigingen opnieuw en vernieuwt de samengestelde basislijn |

> 📖**Begin met:**[Handleiding voor bijdragen](CONTRIBUTING.md) · [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Typ | Licentie |
|:-----|:--------|
| 💻 Code en tooling | [MIT-licentie](LICENTIE) |
| 📝 Documentatie en vaardigheidsinhoud | [CC BY 4.0](LICENTIE-INHOUD) |---

<div align="center">

**Gemaakt met 🧠 door het Omni Skills-team**

[⭐ Geef deze repo een ster](https://github.com/diegosouzapw/omni-skills) · [🐛 Rapporteer een bug](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Discussies](https://github.com/diegosouzapw/omni-skills/discussions)</div>

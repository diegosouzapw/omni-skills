# 🧠 Omni Skills (Română)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Catalogul de aptitudini care se instalează singur.**<br/>
CLI · API · MCP · A2A — toate dintr-o singură comandă `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ Instalați în 1 minut](#-instalare) · [🛠️ Alegeți-vă instrumentul](#-alegeți-vă-instrumentul) · [📖 Ghid CLI](docs/users/CLI-USER-GUIDE.md) · [📦 Bund-uri](docs/users/BUNDLES.md) · [](#-runtime) De ce Omni Skills](#-why-omni-skills)</div>

---

<div align="center">

### Prezentare generală

</div>

| | Metric | Valoare |
|:--|:--------|:------|
| 📦 |**Abilități publicate**| `32` în 15 categorii active |
| 🎯 |**Pachete**| `7` pachete curatate complet susținute |
| 🖥️ |**Instalați clienți**| `7` asistenți de codare AI capabili de instalare |
| 🔌 |**Clienți MCP**| `16` Clienți capabili de configurare MCP |
| 🔐 |**Ieșire organizată**| `32` derivate engleze îmbunătățite în `skills_omni/` |
| 📋 |**Versiunea curentă**| `v0.1.2` |---

## Pornire rapidă

>**Ați căutat abilități de codare AI, abilități Claude Code, abilități cursor, abilități Codex CLI, abilități Gemini CLI, abilități antigravitație sau biblioteci instalabile `SKILL.md`?**
> Ești în locul potrivit.### 1️⃣ What is this?

Omni Skills este un**catalog de abilități instalabile și runtime**pentru asistenții de codare AI. În esență, este un depozit public de manuale reutilizabile `SKILL.md` — dar spre deosebire de colecțiile simple de abilități, depozitul**este**stratul de distribuție și de rulare.

<detalii>
<summary>📋 <strong>Ce este inclus</strong></summary>

| Componenta | Descriere |
|:----------|:-----------|
| 🧠**Abilități**| Cărți de joc bazate pe `SKILL.md` pentru asistenți AI |
| 📦**Manifeste**| Manifeste, pachete și arhive JSON generate |
| 🧭**Instalare ghidată**| Fluxuri de instalare interactive TTY și terminal vizual |
| 🌐**Catalog API**| API HTTP numai pentru citire pentru căutare, descoperire și descărcări |
| 🔌**Server MCP**| Instrumente de configurare pentru descoperire, recomandare și client |
| 🤖**A2A Runtime**| Orchestrarea sarcinilor de la agent la agent |
| ✨**Conducta de îmbunătățire**| Private enhancer publică derivate engleze selectate în `skills_omni/` |</details>

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

> 💬 *„Folosiți `@brainstorming` pentru a planifica un MVP SaaS.”*
>
> 💬 *„Folosiți `@api-design` pentru a revizui acest design final.”*
>
> 💬 *„Folosiți `@debugging` pentru a izola această regresie.”*### 5️⃣ Start with a bundle

| 🎯 Gol | Pachet | Comanda |
|:----------|:-------|:---------|
| Inginerie generală | `esențiale` | `npx omni-skills --bundle essentials` |
| Livrare produs + aplicație | `full-stack` | `npx omni-skills --bundle full-stack` |
| Sisteme de proiectare | `design` | `npx omni-skills --bundle design` |
| Analiză de securitate | `securitate` | `npx omni-skills --bundle security` |
| Infra și eliberare | `devops` | `npx omni-skills --bundle devops` |
| aplicații LLM | `ai-inginer` | `npx omni-skills --bundle ai-inginer` |
| Întreținere OSS | `oss-maintainer` | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Înainte de a compara pachetele sau de a alege o cale de instalare, înțelegerea acestor cinci blocuri vă ajută:

| Concept | Ce înseamnă |
|:--------|:-------------|
| 🧠**Abilități**| Manuale reutilizabile `SKILL.md` care învață un asistent cum să execute bine un flux de lucru |
| 📦**Artefacte de catalog**| Ieșiri JSON și arhivă generate care permit căutarea, compararea, descărcarea și instalarea |
| 🔌**MCP Config**| Configurare pe partea clientului pentru ca asistenții să descopere abilitățile Omni prin instrumentele MCP |
| 🤖**A2A Runtime**| Orchestrare de la agent la agent pentru descoperire, recomandare și transfer de plan de instalare |
| ✨**Ieșire curată**| `skills_omni/` — suprafața îmbunătățită Omni-menținută, separată de priza nativă din amonte |

>**📝 Politică nativă/curată:**
> - `skills/` acceptă utilizarea nativă în amonte în orice limbă
> - `skills_omni/` este întotdeauna organizat și publicat în engleză
> - `skills_omni/` este o suprafață unidirecțională și nu se întoarce înapoi în aportul nativ---

## 💡 Why Omni Skills

>**Nu doar „un alt depozit cu abilități în foldere.”**
> Omni Skills are un contract mai puternic și o suprafață de rulare mai largă.

| Daca vrei... | 📁 Repoziție de aptitudini tipice | ✨ Omni Skills |
|:--------------|:-----------------------|:---------------|
| Instalați într-un asistent real | Copiere manuală sau script personalizat | `npx omni-skills`, instalare ghidată, interfață de utilizare vizuală, `--skill` și `--bundle` selective |
| Căutați și comparați competențe | Răsfoiți manual markdown | Catalog generat, filtrare, planificare de pachete, căutare, comparare și recomandare |
| Utilizați aceleași date în toate instrumentele | Logica separată pentru fiecare instrument | Manifeste și catalog partajate pentru CLI, API, MCP și A2A |
| Configurați clienții MCP | Fișiere editate manual | `config-mcp`, previzualizări locale sidecar, rețete generate și scrieri permise |
| Lansări de încredere | Ambalare cel mai bun efort | Sume de verificare, arhive semnate, verificare scaner, eliberare CI și publicare preflight |
| Curate aportul comunității | Orice pământ rămâne așa cum este | Aportul nativ în `skills/`, derivate engleze curate în `skills_omni/` cu atribuire |---

## 🖥️ Compatibility and Invocation

Aceste abilități urmează modelul `SKILL.md` și pot fi folosite ca un depozit normal, dar pachetul le instalează și le configurează pe o suprafață largă:

>**7**clienți capabili de instalare ·**16**clienți capabili de configurare MCP### 🎯 Install-Capable Clients

| Instrument | Tip | Exemplu de invocare | Calea de instalare |
|:-----|:-----|:-------------------|:--------------|
| 🟢**Codul Claude**| CLI | `Folosiți brainstorming pentru a planifica o caracteristică` | `~/.claude/skills` |
| 🔵**Cursor**| IDE | `@brainstorming ajută-mă să planific o caracteristică` | `~/.cursor/skills` |
| 🟡**Gemeni CLI**| CLI | `Folosiți brainstorming pentru a planifica o caracteristică` | `~/.gemeni/skills` |
| 🔴**Codex CLI**| CLI | `Folosiți brainstorming pentru a planifica o caracteristică` | `~/.codex/skills` |
| 🟠**Kiro**| CLI / IDE | `Folosiți brainstorming pentru a planifica o caracteristică` | `~/.kiro/skills` |
| 🟣**Antigravitație**| IDE | `Folosiți @brainstorming pentru a planifica o caracteristică` | `~/.gemeni/antigravitație/deprinderi` |
| ⚪**OpenCode**| CLI | `opencode run @brainstorming` | `<workspace>/.opencode/skills` |

<detalii>
<summary>🔌 <strong>Acoperire mai largă a configurației MCP (16 clienți)</strong></summary>

Aceste ținte fac parte din suprafața de configurare MCP acceptată, chiar și atunci când nu sunt ținte de instalare pentru directoarele de abilități:

| Client sau suprafață | Tip suport | Note |
|:------------------|:-------------|:------|
| Setări Claude și desktop | Configurare MCP | Setări, desktop și fluxuri de proiect |
| Cod VS | Configurare MCP | Ținte pentru utilizatori, spațiu de lucru, persoane din interior și Container Dev |
| Gemeni | Configurare MCP | Setări utilizator și spațiu de lucru |
| Cline | Configurare MCP | Țintă de configurare de primă clasă |
| GitHub Copilot CLI | Configurare MCP | Ținte de configurare utilizator și repo |
| Continuare | Configurare MCP | Generare YAML pentru spațiu de lucru |
| Windsurf | Configurare MCP | Țintă de configurare utilizator |
| Zed | Configurare MCP | Ținta de configurare a spațiului de lucru |
| Gâscă | Configurare MCP | Țintă de configurare utilizator cu rețeta generată |
| Cod Kilo | Configurare MCP | Ținte pentru utilizator, proiect și spațiu de lucru |
| Junie | Configurare MCP | Ținte de configurare a proiectului și a utilizatorului |</details>

---

## Instalare

<tabel>
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

| Instrument | Comanda de instalare | Prima utilizare |
|:-----|:----------------|:-----------|
| 🟢 Cod Claude | `npx omni-skills --claude` | `Folosiți brainstorming pentru a planifica o caracteristică` |
| 🔵 Cursor | `npx omni-skills --cursor` | `@brainstorming ajută-mă să planific o caracteristică` |
| 🟡 Gemeni CLI | `npx omni-skills --gemini` | `Folosiți brainstorming pentru a planifica o caracteristică` |
| 🔴 Codex CLI | `npx omni-skills --codex` | `Folosiți brainstorming pentru a planifica o caracteristică` |
| 🟣 Antigravitație | `npx omni-skills --antigravity` *(implicit)* | `Folosiți @brainstorming pentru a planifica o caracteristică` |
| 🟠 Kiro | `npx omni-skills --kiro` | `Folosiți brainstorming pentru a planifica o caracteristică` |
| ⚪ OpenCode | `npx omni-skills --opencode` | `opencode run @brainstorming` |
| 📂 Cale personalizată | `npx omni-skills --path ./my-skills` | Depinde de instrumentul dvs. |

> 📖**Nu sunteți sigur de unde să începeți?**
> - [🚀 Noțiuni introductive](docs/users/GETTING-STARTED.md) — instalați și verificați în mai puțin de 2 minute
> - [🧭 Ghidul utilizatorului CLI](docs/users/CLI-USER-GUIDE.md) — referință completă la comandă
> - [📗 Ghid de utilizare](docs/users/USAGE.md) — solicitări, modele și moduri de rulare---

## 🔌 Runtime Surfaces

Omni Skills nu este doar o bibliotecă de abilități. Expune**patru suprafețe de rulare**care consumă același catalog generat:

| Suprafata | Stat | Ce face | Exemplu |
|:--------|:------|:--------------|:--------|
| 🖥️**CLI**| ✅ Disponibil | Găsiți, instalați, diagnosticați, interfața de utilizare vizuală, servicii de boot, verificări de fum | `npx omni-skills doctor` |
| 🌐**Catalog API**| ✅ Disponibil | Catalog numai în citire, căutare, pachete, comparare, planuri de instalare, descărcări | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Disponibil | Descoperire, recomandare, previzualizare instalare, sidecar local, fluxuri de configurare | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Disponibil | Ciclul de viață al sarcinii, transferul, sondajul, transmiterea în flux, anularea, persistența | `npx omni-skills a2a --port 3335` |

<detalii>
<summary>🖥️ <strong>shell vizual și comenzi pentru operator</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<detalii>
<summary>🔌 <strong>Transporturi MCP și configurație</strong></summary>```bash
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

| Metric | Contele |
|:-------|:------|
| 🧠 Abilități publicate |**32**|
| 📂 Categorii active |**15**|
| 📦 Pachete susținute complet |**7**|
| ✨ Derivate curatate |**32**în `skills_omni/` |### 📦 Bundle Availability

| Pachet | Abilități | Membrii |
|:-------|:-------|:--------|
| 🧰 `esențiale` |**4/4**✅ | `găsește abilități` · `brainstorming` · `arhitectură` · `depanare` |
| 🌐 `full-stack` |**5/5**✅ | `frontend-design` · `api-design` · `database-design` · `omni-figma` · `auth-flows` |
| 🎨 `design` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ `securitate` |**4/4**✅ | `auditor-securitate` · `scaner-vulnerabilitate` · `răspuns la incident` · `modelarea amenințărilor` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `observability-review` · `release-ingineering` |
| 🤖 `ai-inginer` |**7/7**✅ | `rag-inginer` · `prompt-inginer` · `llm-patterns` · `eval-design` · `context-ingineer` · `contracte de date` · `model-serving` |
| 🔧 `oss-maintainer` |**4/4**✅ | `găsește-skills` · `create-pr` · `changelog` · `documentație` |### ✨ Native Intake → Curated Output

| Suprafata | Scop | Limba |
|:--------|:--------|:----------|
| 📥 `skills/` | Aportul nativ | Orice limbă |
| ✨ `skills_omni/` | Ieșire Omni-menținută curată | Întotdeauna engleză |

>**ℹ️**Modificările aduse competențelor native sunt reprocesate de amplificatorul privat și reîmprospătate în linia de bază organizată. Acest lucru face ca `skills_omni/` o**suprafață de catalog întreținută**, nu o a doua copie.---

## 🛡️ Security and Release Posture

> Omni Skills oferă o poveste de lansare și verificare mai puternică decât un depozit simplu de reducere.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<detalii>
<summary>📋 <strong>Ce validează pipeline</strong></summary>

- ✅ Validarea competențelor și generarea de metadate
- ✅ Instrumente de normalizare și recategorizare a taxonomiei
- ✅ Generare catalog și arhive
- ✅ Teste automate
- ✅ Căi de pornire API, MCP și A2A
- ✅ Verificarea arhivei
- ✅ Pachetul preflight cu `npm pack --dry-run`</details>

<detalii>
<summary>🔐 <strong>Eliberați postura</strong></summary>

| Control | Descriere |
|:--------|:------------|
| 🔒 Sume de control SHA-256 | Manifeste sume de control pentru toate arhivele |
| ✍️ Artefacte semnate | Semnături detașate pe artefacte de lansare |
| 🤖 aplicat CI | Verificarea lansării în CI înainte de publicare |
| 🦠 Porți scanner | Flux de eliberare ClamAV și VirusTotal-gated |
| 📦 Lansare GitHub | Generare automată de lansări GitHub |
| 📋 publicație npm | Numai din tarball verificat |
| 🔄 Eliberare automată | La calificare, abilitatea se îmbină cu `principal` |

**Eliberarea automată se declanșează numai atunci când o îmbinare se modifică:**
- `skills/*/**`
- `skills_omni/*/**`
- `data/bundles.json`

Modificările doar pentru documente**nu**declanșează publicarea pachetului.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Doc | Ce vei învăța |
|:----|:-----------------|
| 🚀 [Noțiuni introductive](docs/users/GETTING-STARTED.md) | Instalați, verificați și invocați în mai puțin de 2 minute |
| 🧭 [Ghid de utilizare CLI](docs/users/CLI-USER-GUIDE.md) | Referință de comandă completă și modele din lumea reală |
| 📗 [Ghid de utilizare](docs/users/USAGE.md) | Comenzi CLI, moduri de instalare, timp de execuție și configurare MCP |
| 📦 [Pachete](docs/users/BUNDLES.md) | Pachetele organizate și disponibilitatea |
| 📚 [Catalog](docs/CATALOG.md) | Catalog autogenerat de competențe publicate |
| 🔧 [System Runbook](docs/operations/RUNBOOK.md) | Creați, serviți, asigurați și depanați |### 🏗️ For Architects

| Doc | Ce vei învăța |
|:----|:-----------------|
| 🗺️ [Agent-Native Roadmap](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Evoluția arhitecturii și zonele rămase |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Decizia de bază monorepo |
| 🔬 [Analiza bazei de cod](docs/architecture/CODEBASE-ANALYSIS.md) | Compoziția timpului de execuție și limitele sistemului |
| 🌐 [Catalog API](docs/specs/CATALOG-API.md) | Puncte finale HTTP, filtrare, guvernare și descărcări |
| 🧩 [CLI Guided Installer](docs/specs/CLI-GUIDED-INSTALLER.md) | Contract comportamental pentru instalatorul ghidat |
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Înveliș vizual cu cerneală și model de stare |
| 🔌 [Local MCP Sidecar](docs/specs/LOCAL-MCP-SIDECAR.md) | Instrumentele sistemului de fișiere și modelul listei de permise |
| 📊 [Client Support Matrix](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Referință completă pentru client și scriitor |
| 🏷️ [Clasificarea competențelor](docs/specs/SKILL-CLASSIFICATION.md) | Taxonomie, scor și metadate |
| 🛡️ [Validare de securitate](docs/specs/SECURITY-VALIDATION.md) | Scanere, arhive și semnături |
| 📋 [Skill Manifest](docs/specs/SKILL-MANIFEST.md) | Format manifest citibil de mașină |### 🤝 For Contributors

| Doc | Ce vei învăța |
|:----|:-----------------|
| 📝 [Ghid de contribuție](CONTRIBUTING.md) | Fluxul de lucru repo și așteptările PR |
| 🧾 [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) | Aportul nativ, procesarea amplificatorului, așteptările recenzenților |
| 📄 [Șablon de aptitudini](docs/contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` cu frontmatter și structură |
| 🔬 [Skill Anatomy](docs/contributors/SKILL-ANATOMY.md) | Structura și așteptările de calitate |
| ✅ [Bara de calitate](docs/contributors/QUALITY-BAR.md) | Criterii de acceptare |
| 🏆 [High-Score Playbook](docs/contributors/HIGH-SCORE-PLAYBOOK.md) | Ceea ce conduce la scoruri mari |---

## 🗂️ Repository Layout

| Calea | Scop |
|:-----|:--------|
| 📂 `skills/` | Abilități de autor canonice și aport nativ |
| ✨ `skills_omni/` | Derivate îmbunătățite curatate Omni-menținute |
| 📖 `docs/` | Utilizator, colaborator, arhitectură, operațiuni și documentație de specificații |
| 📦 `dist/` | Manifeste, pachete, catalog și arhive generate |
| 📁 `data/` | Definiții de pachet și date statice suport |
| 🧠 `pachete/catalog-core/` | Timp de rulare a catalogului partajat |
| 🌐 `pachete/server-api/` | API HTTP numai pentru citire |
| 🔌 `pachete/server-mcp/` | Server MCP și sidecar local |
| 🤖 `pachete/server-a2a/` | A2A runtime și orchestrare sarcini |
| 🖥️ `tools/bin/` | Puncte de intrare CLI |
| 📚 `tools/lib/` | Instalator și asistență UI |
| ⚙️ `instrumente/scripturi/` | Scripturi de validare, generare, lansare și testare |

>**ℹ️**`dist/` este versiunea intenționată deoarece artefactele generate fac parte din contractul de instalare, API, MCP, A2A, fum și lansare.---

## 🤝 Contributing

Omni Skills acceptă aportul nativ de abilități din amonte sub `skills/`.

| Regula | Detalii |
|:-----|:--------|
| 📥 Aport nativ | Poate fi dur, scris în orice limbă |
| ✨ Ieșire organizată | `skills_omni/` rezervat derivatelor Omni create de automatizare |
| 🚫 Editări manuale | Modificările manuale publice ale `skills_omni/` sunt respinse |
| 🔄 Reprocesare | Amplificatorul privat reprocesează modificările native și reîmprospătează linia de bază organizată |

> 📖**Începe cu:**[Ghid de contribuție](CONTRIBUTING.md) · [Flux de lucru Skill PR](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Tip | Licență |
|:-----|:--------|
| 💻 Cod și scule | [Licență MIT](LICENȚĂ) |
| 📝 Documentare și conținut de abilități | [CC BY 4.0](CONTINUTUL LICENȚEI) |---

<div align="center">

**Făcut cu 🧠 de către echipa Omni Skills**

[⭐ Marcați acest depozit](https://github.com/diegosouzapw/omni-skills) · [🐛 Raportați o eroare](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Discuții](https://github.com/diegosouzapw/omnisouzapw/omni-discussions)</div>

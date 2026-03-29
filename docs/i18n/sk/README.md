# 🧠 Omni Skills (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**Katalóg zručností, ktorý sa inštaluje sám.**<br/>
CLI · API · MCP · A2A — všetko z jedného príkazu `npx`.<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡Inštalácia za 1 minútu](#-inštalácia) · [🛠️ Vyberte si svoj nástroj](#-choose-your-tool) · [📖 Príručka CLI](docs/users/CLI-USER-GUIDE.md) · [📦 Bundles](docs/users/BUNDLES.md) · [() doba spustenia🔌 Prečo beží Omni Skills](#-why-omni-skills)</div>

---

<div align="center">

### Prehľad

</div>

| | Metrické | Hodnota |
|:--|:-------|:------|
| 📦 |**Publikované zručnosti**| „32“ v 15 aktívnych kategóriách |
| 🎯 |**Balíky**| `7` plne zálohované kurátorské balíky |
| 🖥️ |**Inštalovať klientov**| `7` Asistenti kódovania AI s možnosťou inštalácie |
| 🔌 |**Klienti MCP**| `16` Klienti s konfiguráciou MCP |
| 🔐 |**Vybraný výstup**| `32` vylepšené anglické deriváty v `skills_omni/` |
| 📋 |**Aktuálne vydanie**| `v0.1.2` |---

## Rýchly štart

>**Hľadali ste zručnosti kódovania AI, zručnosti Claude Code, zručnosti kurzora, zručnosti Codex CLI, zručnosti Gemini CLI, antigravitačné zručnosti alebo inštalovateľné knižnice `SKILL.md`?**
> Ste na správnom mieste.### 1️⃣ What is this?

Omni Skills je**inštalovateľný katalóg zručností a runtime**pre asistentov kódovania AI. Vo svojom jadre je to verejné úložisko opakovane použiteľných príručiek `SKILL.md` – ale na rozdiel od obyčajných zbierok zručností je repo******distribúcia a vrstva runtime.

<podrobnosti>
<summary>📋 <strong>Čo je zahrnuté</strong></summary>

| Komponent | Popis |
|:----------|:-----------|
| 🧠**Schopnosti**| Vybrané príručky pre asistentov AI založené na `SKILL.md` |
| 📦**Prejavy**| Vygenerované manifesty, balíky a archívy JSON |
| 🧭**Inštalácia so sprievodcom**| Inštalačné toky interaktívneho TTY a vizuálneho terminálu |
| 🌐**Katalógové API**| HTTP API iba na čítanie pre vyhľadávanie, zisťovanie a sťahovanie |
| 🔌**MCP Server**| Zisťovanie, odporúčanie a konfiguračné nástroje s ohľadom na klienta |
| 🤖**A2A Runtime**| Orchestering úloh agent-agent |
| ✨**Potrubie na zlepšenie**| Private Enhancer publikuje kurátorské anglické deriváty do `skills_omni/` |</details>

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

> 💬 *"Na plánovanie SaaS MVP použite `@brainstorming`."*
>
> 💬 *„Na kontrolu tohto návrhu koncového bodu použite `@api-design`.“*
>
> 💬 *"Na izoláciu tejto regresie použite `@debugging`."*### 5️⃣ Start with a bundle

| 🎯 Cieľ | Balík | Príkaz |
|:---------|:-------|:--------|
| Všeobecné strojárstvo | "základné" | `npx omni-skills --bundle essentials` |
| Doručenie produktu + aplikácie | "plný zásobník" | `npx omni-skills --bundle full-stack` |
| Dizajnové systémy | "dizajn" | `npx omni-skills --bundle design` |
| Bezpečnostná kontrola | "bezpečnosť" | `npx omni-skills --Bundle security` |
| Infra a uvoľnenie | "devops" | `npx omni-skills --bundle devops` |
| LLM aplikácie | "ai-inžinier" | `npx omni-skills --bundle ai-engineer` |
| Údržba OSS | "správca oss" | `npx omni-skills --bundle oss-maintainer` |---

## 🧩 Core Concepts

Pred porovnaním balíkov alebo výberom cesty inštalácie vám pomôže pochopenie týchto piatich stavebných blokov:

| Koncept | Čo to znamená |
|:--------|:--------------|
| 🧠**Schopnosti**| Opakovane použiteľné príručky `SKILL.md`, ktoré učia asistenta, ako dobre vykonávať pracovný postup |
| 📦**Katalógové artefakty**| Generované JSON a archívne výstupy umožňujúce vyhľadávanie, porovnávanie, sťahovanie a inštaláciu |
| 🔌**Konfigurácia MCP**| Konfigurácia na strane klienta pre asistentov na objavovanie Omni Skills pomocou nástrojov MCP |
| 🤖**A2A Runtime**| Orchesterizácia agent-agent na zisťovanie, odporúčanie a odovzdanie plánu inštalácie |
| ✨**Vybraný výstup**| `skills_omni/` — Omni udržiavaný vylepšený povrch, oddelený od prirodzeného horného prívodu |

>**📝 Natívne/Vybrané pravidlá:**
> - `skills/` akceptuje natívny príjem v akomkoľvek jazyku
> - `skills_omni/` je vždy spracovaný a publikovaný v angličtine
> - `skills_omni/` je jednosmerný povrch a nevracia sa späť do prirodzeného príjmu---

## 💡 Why Omni Skills

>**Nie len "ďalšie úložisko so zručnosťami v priečinkoch."**
> Omni Skills má silnejšiu zmluvu a širší povrch.

| Ak chcete… | 📁 Typické zručnosti repo | ✨ Omni Skills |
|:-------------|:----------------------|:--------------|
| Nainštalujte do skutočného asistenta | Manuálne kopírovanie alebo vlastný skript | `npx omni-skills`, riadená inštalácia, vizuálne používateľské rozhranie, selektívne `--skill` a `--bundle` |
| Hľadať a porovnávať zručnosti | Manuálne prehľadávanie značiek | Generovaný katalóg, filtrovanie, plánovanie balíkov, vyhľadávanie, porovnávanie a odporúčanie |
| Použite rovnaké údaje v rámci nástrojov | Samostatná logika pre každý nástroj | Zdieľané manifesty a katalóg pre CLI, API, MCP a A2A |
| Konfigurácia klientov MCP | Ručná úprava súborov | `config-mcp`, ukážky lokálneho postranného vozíka, generované recepty a povolené zápisy |
| Dôvera uvoľňuje | Balenie podľa maximálneho úsilia | Kontrolné súčty, podpísané archívy, overenie skenerom, uvoľnenie CI a zverejnenie kontroly pred výstupom |
| Curate komunitný príjem | Čokoľvek pristane, zostane tak, ako je | Natívny príjem v `skills/`, kurátorské anglické deriváty v `skills_omni/` s uvedením zdroja |---

## 🖥️ Compatibility and Invocation

Tieto zručnosti sa riadia modelom `SKILL.md` a možno ich použiť ako bežné úložisko, ale balík ich aj nainštaluje a nakonfiguruje na širokom povrchu:

>**7**klientov s možnosťou inštalácie ·**16**klientov s možnosťou konfigurácie MCP### 🎯 Install-Capable Clients

| Nástroj | Typ | Príklad vyvolávania | Inštalačná cesta |
|:-----|:-----|:-------------------|:-------------|
| 🢢**Claude Code**| CLI | "Použite brainstorming na plánovanie funkcie" | `~/.claude/skills` |
| 🔵**Kurzor**| IDE | `@brainstorming pomôž mi naplánovať funkciu` | `~/.kurzor/zručnosti` |
| 🡥**Gemini CLI**| CLI | "Použite brainstorming na plánovanie funkcie" | `~/.gemini/skills` |
| 🔴**Codex CLI**| CLI | "Použite brainstorming na plánovanie funkcie" | `~/.codex/skills` |
| 🠠**Kiro**| CLI / IDE | "Použite brainstorming na plánovanie funkcie" | `~/.kiro/skills` |
| 🣣**Antigravitácia**| IDE | `Na plánovanie funkcie použite @brainstorming` | `~/.gemini/antigravity/skills` |
| ⚪**OpenCode**| CLI | `opencode run @brainstorming` | `<pracovný priestor>/.opencode/skills` |

<podrobnosti>
<summary>🔌 <strong>Širšie pokrytie konfigurácie MCP (16 klientov)</strong></summary>

Tieto ciele sú súčasťou podporovaného konfiguračného povrchu MCP, aj keď nejde o ciele inštalácie pre adresáre zručností:

| Klient alebo povrch | Typ podpory | Poznámky |
|:------------------|:------------|:------|
| Claude nastavenia a pracovná plocha | Konfigurácia MCP | Nastavenia, pracovná plocha a toky s ohľadom na projekt |
| VS kód | Konfigurácia MCP | Ciele používateľov, pracovného priestoru, zasvätených osôb a kontajnerov pre vývojárov |
| Blíženci | Konfigurácia MCP | Nastavenia používateľa a pracovného priestoru |
| Cline | Konfigurácia MCP | Prvotriedny konfiguračný cieľ |
| GitHub Copilot CLI | Konfigurácia MCP | Ciele konfigurácie používateľa a úložiska |
| Pokračovať | Konfigurácia MCP | Pracovný priestor Generovanie YAML |
| Windsurfing | Konfigurácia MCP | Cieľ konfigurácie používateľa |
| Zed | Konfigurácia MCP | Cieľ konfigurácie pracovného priestoru |
| Hus | Konfigurácia MCP | Cieľ používateľskej konfigurácie s vygenerovaným receptom |
| Kilový kód | Konfigurácia MCP | Ciele používateľa, projektu a pracovného priestoru |
| Junie | Konfigurácia MCP | Ciele konfigurácie projektu a používateľov |</details>

---

## Inštalácia

<tabuľka>
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

| Nástroj | Inštalovať príkaz | Prvé použitie |
|:-----|:---------------|:----------|
| 🢢 Claude Code | `npx omni-skills --claude` | "Použite brainstorming na plánovanie funkcie" |
| 🔵 Kurzor | `npx omni-skills --cursor` | `@brainstorming pomôž mi naplánovať funkciu` |
| 🡡 Gemini CLI | `npx omni-skills --gemini` | "Použite brainstorming na plánovanie funkcie" |
| 🔴 Codex CLI | `npx omni-skills --codex` | "Použite brainstorming na plánovanie funkcie" |
| 🟣 Antigravitácia | `npx omni-skills --antigravity` *(predvolené)* | `Na plánovanie funkcie použite @brainstorming` |
| 🠠 Kiro | `npx omni-skills --kiro` | "Použite brainstorming na plánovanie funkcie" |
| ⚪ OpenCode | `npx omni-skills --opencode` | `opencode run @brainstorming` |
| 📂 Vlastná cesta | `npx omni-skills --path ./my-skills` | Závisí od vášho nástroja |

> 📖**Nie ste si istí, kde začať?**
> - [🚀 Začíname](docs/users/GETTING-STARTED.md) – inštalácia a overenie za menej ako 2 minúty
> - [🧭 Používateľská príručka CLI](docs/users/CLI-USER-GUIDE.md) – úplný odkaz na príkaz
> - [📗 Návod na použitie](docs/users/USAGE.md) – výzvy, vzory a režimy spustenia---

## 🔌 Runtime Surfaces

Omni Skills nie je len knižnica zručností. Odhaľuje**štyri runtime povrchy**, ktoré využívajú rovnaký vygenerovaný katalóg:

| Povrch | Štát | Čo to robí | Príklad |
|:--------|:------|:-------------|:--------|
| 🖥️**CLI**| ✅ Dostupné | Nájsť, nainštalovať, diagnostikovať, vizuálne používateľské rozhranie, zavádzacie služby, kontroly dymu | `npx omni-skills doctor` |
| 🌐**Katalógové API**| ✅ Dostupné | Katalóg len na čítanie, vyhľadávanie, balíky, porovnanie, inštalácia plánov, sťahovanie | `npx omni-skills api --port 3333` |
| 🔌**MCP**| ✅ Dostupné | Zisťovanie, odporúčanie, ukážka inštalácie, lokálny postranný vozík, toky konfigurácie | `npx omni-skills mcp stream --local` |
| 🤖**A2A**| ✅ Dostupné | Životný cyklus úlohy, odovzdanie, dopytovanie, streamovanie, zrušenie, pretrvávanie | `npx omni-skills a2a --port 3335` |

<podrobnosti>
<summary>🖥️ <strong>Vizuálny shell a príkazy operátora</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<podrobnosti>
<summary>🔌 <strong>Prenosy a konfigurácia MCP</strong></summary>```bash
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

| Metrické | Počet |
|:-------|:------|
| 🧠 Publikované zručnosti |***32**|
| 📂 Aktívne kategórie |**15**|
| 📦 Plne kryté balíky |***7**|
| ✨ Kurátorované deriváty |**32**v `skills_omni/` |### 📦 Bundle Availability

| Balík | Zručnosti | Členovia |
|:-------|:-------|:--------|
| 🧰 `základné` |**4/4**✅ | `nájsť zručnosti` · `brainstorming` · `architektúra` · `ladenie` |
| 🌐 "plný zásobník" |**5/5**✅ | `frontend-design` · `api-design` · `database-design` · `omni-figma` · `auth-flows` |
| 🎨 `dizajn` |**5/5**✅ | `frontend-design` · `omni-figma` · `design-systems-ops` · `accessibility-audit` · `design-token-governance` |
| 🛡️ "bezpečnosť" |**4/4**✅ | `bezpečnostný-auditor` · `skener zraniteľnosti` · `reakcia na incidenty` · `modelovanie hrozieb` |
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `previerka pozorovateľnosti` · `release-engineering` |
| 🤖 „ai-inžinier“ |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `správca oss` |**4/4**✅ | `nájsť-zručnosti` · `create-pr` · `changelog` · `dokumentácia` |### ✨ Native Intake → Curated Output

| Povrch | Účel | Jazyk |
|:--------|:--------|:---------|
| 📥 `zručnosti/` | Natívny príjem | Akýkoľvek jazyk |
| ✨ `skills_omni/` | Curated Omni-udržovaný výstup | Vždy anglicky |

>**ℹ️**Zmeny v natívnych zručnostiach sú prepracované súkromným zlepšovačom a obnovené v upravenej základnej línii. Vďaka tomu je `skills_omni/`**udržiavaný katalógový povrch**, nie jeho druhá kópia.---

## 🛡️ Security and Release Posture

> Omni Skills dodáva silnejší príbeh o vydaní a overení ako obyčajný markdown repozitár.### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<podrobnosti>
<summary>📋 <strong>Čo overuje kanál</strong></summary>

- ✅ Overenie zručností a generovanie metadát
- ✅ Nástroj na normalizáciu taxonómie a rekategorizáciu
- ✅ Generovanie katalógu a archívu
- ✅ Automatizované testy
- ✅ Zavádzacie cesty API, MCP a A2A
- ✅ Overenie archívu
- ✅ Preflight balíka s `npm pack --dry-run`</details>

<podrobnosti>
<summary>🔐 <strong>Uvoľnite polohu</strong></summary>

| Kontrola | Popis |
|:--------|:-----------|
| 🔒 Kontrolné súčty SHA-256 | Manifesty kontrolného súčtu pre všetky archívy |
| ✍️ Podpísané artefakty | Oddelené podpisy na uvoľnených artefaktoch |
| 🤖 CI-vynútené | Overenie uvoľnenia v CI pred uverejnením |
| 🦠 Brány skenerov | ClamAV a VirusTotal riadený tok uvoľnenia |
| 📦 Vydanie GitHub | Generovanie automatizovaného vydania GitHub |
| 📋 Zverejnenie npm | Len z overeného tarballu |
| 🔄 Automatické vydanie | Pri kvalifikačnej zručnosti sa zlúči s „hlavnou“ |

**Automatické uvoľnenie sa spustí iba pri zmene zlúčenia:**
- `skills/**/**`
- `skills_omni/*/**`
- `data/bundles.json`

Zmeny iba v dokumentoch**nespúšťajú**publikáciu balíka.</details>

---

## 📖 Documentation Map

### 👤 For Users

| Doc | Čo sa naučíte |
|:----|:-----------------|
| 🚀 [Začíname](docs/users/GETTING-STARTED.md) | Nainštalujte, overte a vyvolajte za menej ako 2 minúty |
| 🧭 [Používateľská príručka CLI](docs/users/CLI-USER-GUIDE.md) | Úplná referencia príkazov a vzory v reálnom svete |
| 📗 [Príručka použitia](docs/users/USAGE.md) | Príkazy CLI, režimy inštalácie, runtime a konfigurácia MCP |
| 📦 [Bundles](docs/users/BUNDLES.md) | Vybrané balíky a dostupnosť |
| 📚 [Katalóg](docs/CATALOG.md) | Automaticky generovaný katalóg publikovaných zručností |
| 🔧 [System Runbook](docs/operations/RUNBOOK.md) | Vytvárať, poskytovať, zabezpečovať a odstraňovať problémy |### 🏗️ For Architects

| Doc | Čo sa naučíte |
|:----|:-----------------|
| 🗺️ [Agent-Native Roadmap](docs/architecture/AGENT-NATIVE-ROADMAP.md) | Vývoj architektúry a zostávajúce oblasti |
| 📐 [ADR-0001: Workspace Foundation](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Rozhodnutie o základnom monorepo |
| 🔬 [Analýza kódovej bázy](docs/architecture/CODEBASE-ANALYSIS.md) | Zloženie runtime a hranice systému |
| 🌐 [Katalógové API](docs/specs/CATALOG-API.md) | Koncové body HTTP, filtrovanie, riadenie a sťahovanie |
| 🧩 [CLI Guided Installer](docs/specs/CLI-GUIDED-INSTALLER.md) | Zmluva o správaní pre inštalatéra so sprievodcom |
| 🖥️ [CLI Visual Shell](dokumenty/špecifikácie/CLI-VISUAL-SHELL.md) | Atramentový vizuálny obal a stavový model |
| 🔌 [Miestny MCP Sidecar](dokumenty/špecifikácie/LOCAL-MCP-SIDECAR.md) | Nástroje súborového systému a model zoznamu povolených |
| 📊 [Client Support Matrix](docs/specs/CLIENT-SUPPORT-MATRIX.md) | Úplné referencie klienta a autora |
| 🏷️ [Klasifikácia schopností](docs/specs/SKILL-CLASSIFICATION.md) | Taxonómia, bodovanie a metadáta |
| 🛡️ [Overenie zabezpečenia](dokumenty/špecifikácie/SECURITY-VALIDATION.md) | Skenery, archívy a podpisy |
| 📋 [Skill Manifest](docs/specs/SKILL-MANIFEST.md) | Strojovo čitateľný formát manifestu |### 🤝 For Contributors

| Doc | Čo sa naučíte |
|:----|:-----------------|
| 📝 [Sprievodca prispievaním](CONTRIBUTING.md) | Repo workflow a PR očakávania |
| 🧾 [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) | Natívny príjem, spracovanie zosilňovača, očakávania recenzentov |
| 📄 [Šablóna zručností](docs/contributors/SKILL-TEMPLATE.md) | Štartér `SKILL.md` s prednáškou a štruktúrou |
| 🔬 [Skill Anatomy](docs/contributors/SKILL-ANATOMY.md) | Štruktúra a očakávania kvality |
| ✅ [Quality Bar](dokumenty/prispievatelia/QUALITY-BAR.md) | Kritériá prijatia |
| 🏆 [High-Score Playbook](dokumenty/prispievatelia/HIGH-SCORE-PLAYBOOK.md) | Čo prináša vysoké skóre |---

## 🗂️ Repository Layout

| Cesta | Účel |
|:-----|:--------|
| 📂 `zručnosti/` | Kanonické autorské zručnosti a natívny príjem |
| ✨ `skills_omni/` | Curated Omni-udržované vylepšené deriváty |
| 📖 `docs/` | Používateľ, prispievateľ, architektúra, operácie a dokumentácia špecifikácií |
| 📦 `dist/` | Vygenerované manifesty, balíky, katalóg a archívy |
| 📁 `údaje/` | Definície zväzkov a statické podporné údaje |
| 🧠 `balíky/katalógové jadro/` | Spustenie zdieľaného katalógu |
| 🌐 `packages/server-api/` | HTTP API iba na čítanie |
| 🔌 `packages/server-mcp/` | Server MCP a lokálny postranný vozík |
| 🤖 `balíčky/server-a2a/` | A2A runtime a orchestrácia úloh |
| 🖥️ `náradie/kôš/` | Vstupné body CLI |
| 📚 `tools/lib/` | Inštalátor a pomocníci používateľského rozhrania |
| ⚙️ `nástroje/skripty/` | Overenie, generovanie, vydanie a testovanie skriptov |

>**ℹ️**`dist/` má zámerne verziu, pretože vygenerované artefakty sú súčasťou zmluvy o inštalácii, API, MCP, A2A, dyme a vydaní.---

## 🤝 Contributing

Omni Skills akceptuje natívne upstreamové prijímanie zručností pod `skills/`.

| Pravidlo | Podrobnosti |
|:-----|:--------|
| 📥 Natívny príjem | Môže byť drsný, napísaný v akomkoľvek jazyku |
| ✨ Spracovaný výstup | `skills_omni/` vyhradené pre Omni deriváty vytvorené automatizáciou |
| 🚫 Ručné úpravy | Verejné manuálne úpravy `skills_omni/` sú odmietnuté |
| 🔄 Opätovné spracovanie | Súkromný zosilňovač znovu spracuje natívne zmeny a obnoví upravenú základnú líniu |

> 📖**Začnite s:**[Sprievodca prispievaním](CONTRIBUTING.md) · [Pracovný postup zručnosti PR](dokumenty/prispievatelia/SKILL-PR-WORKFLOW.md)---

## 📄 License

| Typ | Licencia |
|:-----|:--------|
| 💻 Kód a nástroje | [Licencia MIT](LICENCIA) |
| 📝 Dokumentácia a obsah zručností | [CC BY 4.0](OBSAH LICENCIE) |---

<div align="center">

**Vyrobené pomocou 🧠 tímom Omni Skills**

[⭐ Označte toto repo hviezdičkou](https://github.com/diegosouzapw/omni-skills) · [🐛 Nahláste chybu](https://github.com/diegosouzapw/omni-skills/issues) · [💬 Diskusie](https://github.com/diegosouskilldiscussions/omni</div>

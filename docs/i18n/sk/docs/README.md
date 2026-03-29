# 📖 Omni Skills — Documentation Hub (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

>**Ústredný odkaz na používanie, prevádzku, rozširovanie a pochopenie súčasnej platformy Omni Skills.**

Štandardné komunitné súbory žijú v koreňovom adresári úložiska:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.m---

## 📊 Status Snapshot

| Oblasť | Štát | Podrobnosti |
|:-----|:------|:--------|
| 🏗️**Runtime**| ✅ Aktuálne | Zjednotené rozhranie CLI, vizuálne prostredie atramentu, API, MCP a A2A sa dodávajú z rovnakého balíka |
| 📦**Katalóg**| 📌 32 zručností | 32 publikovaných zručností „L3“ v 15 aktívnych kategóriách katalógu a 7 plne zabezpečených balíkoch |
| 🎯**Inštalovať**| ✅ Aktuálne | Riadená inštalácia TTY, selektívne `--skill` a `--bundle`, podpora vlastnej cesty a inštalácia riadená zisťovaním |
| 🌐**API**| ✅ Aktuálne | Rozhranie API registra len na čítanie s overením, admin runtime, obmedzením rýchlosti, CORS/IP povolenými zoznamami, režimom údržby a sťahovaním |
| 🔌**MCP**| ✅ Aktuálne | `stdio` · `stream` · `sse`, lokálny režim sidecar, 7 klientov s možnosťou inštalácie, 16 klientov s možnosťou konfigurácie, 33 cieľov konfigurácie a 19 profilov konfigurácie |
| 🤖**A2A**| ✅ Aktuálne | Prvý jednoduchý lokálny runtime s trvanlivosťou JSON/SQLite, obnovením reštartu, streamovaním SSE, zrušením, režimom externého spúšťača a voliteľnou prenajatou koordináciou, ak je explicitne povolená |
| 🛡️**Bezpečnosť**| ✅ Aktuálne | Statický skener, voliteľný ClamAV/VirusTotal, podpísané artefakty vydania, archívne kontrolné súčty a overenie času vydania |
| 📋**Klasifikácia**| ✅ Aktuálne | Kanonická taxonómia, zrelosť, šírenie sémantickej kvality, šírenie osvedčených postupov a hodnotenie bezpečnosti |
| 📁**Archív**| ✅ Aktuálne | Archívy `.zip` a `.tar.gz` pre jednotlivé zručnosti s manifestmi kontrolného súčtu SHA-256 |
| 🔐**Podpis**| ✅ Aktuálne | Oddelené podpisy vynútené na uvoľňovacích značkách; lokálne toky inštalácie spotrebúvajú rovnaké metadáta manifestu a kontrolného súčtu |
| 🧬**Prítok príjmu**| ✅ Aktuálne | Zručnosti domorodcov pristávajú pod `skills/`; PR automatizácia ich posudzuje a navrhuje deriváty vylepšené Omni pod `skills_omni/` |## 🔭 Current Project State

Základová dráha teraz žije v aktívnom stave projektu a druhá kategória rozšírenia je už v katalógu. Projekt by sa teraz mal chápať ako pracovný základ s voliteľnými budúcimi postupmi rozšírenia:

- verejné `v0.1.2` a súkromné `v0.0.1` sú aktuálnou stabilnou úrovňou vydania
- katalóg teraz zahŕňa 32 publikovaných zručností v 15 aktívnych kategóriách a 7 plne zabezpečených balíkoch
- natívny príjem a kurátorský `skills_omni/` výstup sú funkčné, vrátane viacjazyčného natívneho príjmu a kurátorovaného výstupu iba v angličtine
- protokolové povrchy, automatizácia vydania a automatizácia súkromných vylepšení sú v prevádzke, nie v bootstrape

Budúca expanzia zostáva zámerná:

- prehĺbiť „dizajn“, „nástroje“, „data-ai“ a „strojové učenie“
- vyhýbajte sa opätovnému otváraniu spiacich nekódových pôvodných kategórií, kým súčasné kódové natívne stopy nebudú mať väčšiu hĺbku
- ponechajte pritom neporušenú cestu kontroly kvality a zlepšovača

Tento plán je teraz rozdelený na:

- dokončená prvá vlna rozširovania v [úlohy/ÚLOHA-07-KATALÓG-ŠPECIALIZÁCIA-A-EXPANZIA-KATEGÓRIE.md](úlohy/ÚLOHA-07-KATALÓG-ŠPECIALIZÁCIA-A-KATEGÓRIA-EXPANZIA.md)
- dokončená druhá vlna expanzie v [tasks/TASK-08-SECOND-CATEGORY-WAVE.md](tasks/TASK-08-SECOND-CATEGORY-WAVE.md)
- a výhľadový backlog v [tasks/README.md](tasks/README.md)---

## 📌 Current Decisions

Tieto otázky architektúry už nie sú v praxi „otvorené“ a teraz sa s nimi zaobchádza ako s projektovými rozhodnutiami:

1.**Distribúcia zostáva manifestovaná ako prvá plus podpísané archívy**
   Strojovo čitateľný manifest zostáva zmluvou spotrebovanou CLI, API, MCP a A2A. Podpísané archívy pre jednotlivé zručnosti sú povrchom na stiahnutie a uvoľnenie, ktorý je navrstvený na tejto zmluve.
2.**Súkromné alebo prémiové katalógy by mali znova používať rovnakú schému manifestu**
   Autorizácia a politika by mali byť vrstvené externe, nie rozvetvením manifestu alebo tvaru katalógu.
3.**Konfigurácia MCP by mala konvergovať na niekoľkých kanonických exportných rodinách**
   Omni Skills sa teraz štandardizuje okolo JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` a TOML `[mcp_servers]`, pričom ponecháva autorov na mieru len tam, kde oficiálne klientske dokumenty vyžadujú inú štruktúru.

Tieto rozhodnutia sú v súlade s aktuálnou oficiálnou dokumentáciou MCP a klientskou dokumentáciou vrátane:

- oficiálny register MCP a pokyny na podporu rozšírenia na `modelcontextprotocol.io`
- Dokumenty OpenAI Docs MCP a Codex CLI na stránkach `developers.openai.com` a `platform.openai.com`
- Rozšírenie VS Code MCP a produktové dokumenty na `code.visualstudio.com`
- klientske dokumenty pre Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman a JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Čo sa naučíte |
|:----|:------------------|
| 📘 [Začíname](používatelia/GETTING-STARTED.md) | Nainštalujte, overte a vyvolajte svoju prvú zručnosť |
| 🧭 [Používateľská príručka CLI](používatelia/CLI-USER-GUIDE.md) | Úplná referencia príkazov a vzory používania CLI v reálnom svete |
| 📗 [Sprievodca používaním](používatelia/USAGE.md) | Príkazy CLI, režimy inštalácie, príkazy runtime a toky konfigurácie MCP |
| 📦 [Bundles](používatelia/BUNDLES.md) | Vybrané balíky a ich aktuálna dostupnosť |
| 📚 [Katalóg](CATALOG.md) | Automaticky generovaný katalóg publikovaných zručností |
| 🔧 [Súbor systému](operácie/RUNBOOK.md) | Zostavte, obsluhujte, zabezpečte a odstraňovajte problémy s runtime |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Čo sa naučíte |
|:----|:------------------|
| 🗺️ [Agent-Native Roadmap](architektúra/AGENT-NATIVE-ROADMAP.md) | Vývoj architektúry, uzavreté rozhodnutia a zostávajúce oblasti expanzie |
| 🧭 [CLI UX Roadmap](architektúra/CLI-UX-ROADMAP.md) | Historický plán a súčasná podoba riadeného a vizuálneho CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Rozhodnutie o základnom monorepo a zdieľanom čase |
| 🔬 [Analýza kódovej bázy](architektúra/CODEBASE-ANALYSIS.md) | Aktuálne zloženie runtime, počty a hranice systému |
| 🌐 [Katalógový API povrch](špecifikácie/CATALOG-API.md) | Koncové body HTTP, filtrovanie, riadenie a sťahovanie |
| 🧩 [CLI Guided Installer](špecifikácie/CLI-GUIDED-INSTALLER.md) | Zmluva o správaní pre inštalatéra so sprievodcom |
| 🖥️ [CLI Visual Shell](špecifikácie/CLI-VISUAL-SHELL.md) | Atramentové vizuálne puzdro, model stavu a servisné centrum |
| 🔌 [Miestny MCP Sidecar](špecifikácie/LOCAL-MCP-SIDECAR.md) | Nástroje podporujúce súborový systém, model zoznamu povolených a zapisovanie konfigurácií |
| 🧭 [Klientska podpora Matica](špecifikácie/CLIENT-SUPPORT-MATRIX.md) | Podporovaní klienti CLI a IDE, zapisovače, manuálne ciele a zdrojové odkazy |
| 📊 [Klasifikácia schopností](špecifikácie/KLASIFIKÁCIA ZRUČNOSTÍ.md) | Taxonómia, heuristika hodnotenia a artefakty metadát |
| 🛡️ [Overenie zabezpečenia](špecifikácie/SECURITY-VALIDATION.md) | Skenery, archívy, podpisy a overenie vydania |
| 📋 [Skill Manifest Spec](špecifikácie/SKILL-MANIFEST.md) | Strojovo čitateľný formát manifestu a zmluva o kompatibilite |### 🤝 If You Want to **Contribute**

| Doc | Čo sa naučíte |
|:----|:------------------|
| 📝 [Sprievodca prispievaním](../CONTRIBUTING.md) | Repo workflow a očakávané požiadavky na stiahnutie |
| 🧾 [Skill PR Workflow](prispievatelia/SKILL-PR-WORKFLOW.md) | Natívny príjem, automatické spracovanie zosilňovačov, publikovanie `skills_omni/` a očakávania recenzentov |
| 📄 [Šablóna zručností](prispievatelia/ŠABLÓNA SKILL-TEMPLATE.md) | Štartér `SKILL.md` s aktuálnym frontmaterom a štruktúrou |
| 🔬 [Skill Anatomy](prispievatelia/SKILL-ANATOMY.md) | Štruktúra a kvalita predpokladov pre zručnosť |
| ✅ [Quality Bar](prispievatelia/QUALITY-BAR.md) | Kritériá prijatia pre archív |
| 🏆 [High-Score Playbook](prispievatelia/HIGH-SCORE-PLAYBOOK.md) | Čo poháňa vysokú vyspelosť, kvalitu, osvedčené postupy a skóre bezpečnosti |
| 📋 [Neriešené úlohy](úlohy/README.md) | Podrobné implementačné nevybavené zostávajúce verejné a súkromné ​​práce |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual shell
npx omni-skills ui --text             # Text fallback UI
```

Publikovaný binárny súbor „omni-skills“ je jednotným verejným vstupným bodom.```bash
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

Úplnú plochu príkazov pre koncového používateľa nájdete v [Príručka používateľa CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Zostavovací kanál vydáva strojovo čitateľné súbory, ktoré riadia každý povrch runtime:

| Artefakt | Účel |
|:---------|:--------|
| `metadata.json` | Overenie v celom úložisku a súhrn skóre |
| `skills_index.json` | Repo-miestny normalizovaný index zručností |
| `dist/catalog.json` | Publikovaný katalóg na vyhľadávanie a výpis |
| `dist/bundles.json` | Definície balíkov s dostupnosťou |
| `dist/manifests/<skill>.json` | Strojovo čitateľný manifest pre jednotlivé zručnosti |
| `dist/archives/<skill>.zip` | Archív zručností (zip) |
| `dist/archives/<skill>.tar.gz` | Archív zručností (tarball) |
| `dist/archives/<skill>.checksums.txt` | Manifest kontrolného súčtu SHA-256 |

`dist/` zostáva zadaný zámerne. Tieto vygenerované artefakty sú súčasťou zmluvy o inštalácii, API, MCP, A2A, dyme a vydaní.### 🌐 API

```bash
npx omni-skills api --port 3333
```

API registra len na čítanie pre zručnosti, balíky, porovnávanie, plánovanie inštalácie a sťahovanie artefaktov.### 🔌 MCP

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local
```

Miestny postranný vozík teraz podporuje prvotriedny zápis konfigurácie MCP pre:

- Claude Code
- Kurzor
- VS kód a Dev kontajnery
- Gemini CLI
- Antigravitácia
- Kiro
- Codex CLI
- Pokračuj
- Windsurfing
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilový kód
- Zed
- Husi### 🤖 A2A

```bash
npx omni-skills a2a --port 3335
```

Životný cyklus úlohy, streamovanie, pretrvávanie, obnovenie reštartu a jednoduchá lokálna orchestrácia. Zdieľané prenajaté vykonávanie je dostupné, keď je explicitne povolené; Redis zostáva pokročilou hostovanou možnosťou, nie predvolenou miestnou cestou.---

## 🗂️ Repository Map

| Cesta | Účel |
|:-----|:--------|
| 📂 `zručnosti/` | Kanonické autorské zručnosti |
| 📖 `dokumenty/používatelia/` | Dokumentácia pre koncového používateľa |
| 🤝 `dokumenty/prispievatelia/` | Šablóny prispievateľov a pokyny |
| 🏗️ `docs/architecture/` | Plán, ADR a technická analýza |
| 🔧 `dokumenty/operácie/` | Prevádzkové príručky |
| 📋 `dokumenty/špecifikácie/` | Runtime, protokoly a kontrakty artefaktov |
| 📚 `docs/CATALOG.md` | Vygenerovaný katalóg zručností |
| 📦 `dist/` | Generované strojovo čitateľné artefakty |
| 🧠 `balíky/katalógové jadro/` | Spustenie zdieľaného katalógu |
| 🌐 `packages/server-api/` | HTTP API iba na čítanie |
| 🔌 `packages/server-mcp/` | Server MCP a lokálny postranný vozík |
| 🤖 `balíčky/server-a2a/` | Spustenie servera a úloh A2A |
| 🖥️ `náradie/kôš/` | Vstupné body CLI |
| 📚 `tools/lib/` | Inštalátor a pomocníci používateľského rozhrania |
| ⚙️ `nástroje/skripty/` | Validácia, generovanie, overovanie a testy |---

## 🧪 Release Validation

```bash
npm run smoke
```

Dymový chod potvrdzuje:

- ✅ overenie zručností a generovanie metadát
- ✅ nástroje na rekategorizáciu taxonómie
- ✅ generovanie artefaktov z katalógu
- ✅ vygenerovaná katalógová značka
- ✅generovanie a overenie archívu
- ✅ automatizovaný testovací balík
- ✅ `npm pack --suchý chod`
- ✅ Spustenie a zdravie API
- ✅ Zavedenie MCP v `stdio`, `stream` a `sse`
- ✅ A2A boot, prieskum, streamovanie SSE, zrušenie a životný cyklus push-config
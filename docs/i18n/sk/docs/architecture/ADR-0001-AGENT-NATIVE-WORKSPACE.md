# 📐 ADR-0001: Agent-Native Workspace Foundation (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Kľúčové architektonické rozhodnutie, ktoré formovalo štruktúru pracovného priestoru monorepo.**---

## 📊 Status

✅**Prijaté**— aktuálny smer pracovného priestoru a aktívny tvar úložiska.---

## 🔍 Context

Omni Skills sa začalo ako**inštalačný**repozitár. To stačilo na distribúciu obsahu `SKILL.md`, ale nestačilo to na vystavenie katalógu agentom prostredníctvom protokolovo natívnych povrchov.

Potrebovali sme nadáciu, ktorá by mohla podporovať:

| Požiadavka | Protokol |
|:------------|:---------|
| 🌐 API katalógu HTTP iba ​​na čítanie | ODPOČINOK |
| 🔌 Server MCP iba ​​na čítanie | Modelový kontextový protokol |
| 🤖 Povrch A2A orientovaný na agenta | Agent-to-Agent |
| 📂 Miestna inštalácia postranných vozíkov | Nástroje súborového systému |

**Kritické obmedzenie**: Vyhnite sa prepracovaniu repo súborov nezávisle v každej novej službe.---

## ✅ Decision

Prijmite**monorepo orientované na pracovný priestor**so zdieľaným katalógovým jadrom a balíkmi špecifickými pre protokol:

| Balíček | Účel |
|:--------|:--------|
| 📦 `všemožné zručnosti` (koreň) | CLI inštalačný program a repo skripty |
| 🧠 `@omni-skills/catalog-core` | Zdieľané načítanie, vyhľadávanie, porovnávanie, balíky, plány inštalácie |
| 🌐 `@omni-skills/server-api` | REST API len na čítanie |
| 🔌 `@omni-skills/server-mcp` | MCP s režimom stdio/stream/sse + lokálny postranný vozík |
| 🤖 `@omni-skills/server-a2a` | Runtime úlohy A2A s kartou agenta, pollingom, SSE a push konfiguráciou |### 📁 Shared Data Sources

Jadro katalógu číta vygenerované artefakty z:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Výsledok | Vplyv |
|:--------|:-------|
| 🔗**Zmluva o zdieľaných údajoch**| API, MCP a A2A spotrebúvajú rovnaké artefakty |
| 🖥️**Unified CLI**| Jeden binárny súbor odhaľuje inštaláciu, UI shell, API, MCP, A2A, diagnostiku a dym |
| 🧩**Izolácia protokolu**| Nové povrchy iterujú bez spojenia s vnútornými časťami inštalačného programu |
| 🔌**Miestna sajdkára**| Pracovný režim MCP s možnosťou zápisu za zoznamom povolených, s receptami vedomými klienta |
| 📦**Doba prevádzky jedného balíka**| Publikovaný balík npm nesie povrchy protokolu, nástroje na overenie a generované artefakty spolu |---

## ⚠️ Negative Consequences

| Kompromis | Zmiernenie |
|:---------|:-----------|
| 🔄**Duplikácia metadát**| Python build + JavaScript runtime → prípadne konsolidovať |
| 🏗️**Zložitosť A2A**| Odolný životný cyklus teraz existuje, ale koordinačné adaptéry pridávajú prevádzkovú hĺbku |
| 📦**Zarovnanie katalógu**| Selektívna inštalácia vyžaduje, aby príkazy, manifesty a dokumenty zostali synchronizované |
| 📋**Chyby v metadátach v balíkoch**| Balíky môžu predbehnúť publikované zručnosti, čo si vyžaduje explicitné upozornenia na chýbajúce členy |---

## ➡️ Follow-Up Items

| # | Akcia | Stav |
|:--|:-------|:-------|
| 1️⃣ | Diaľkové overenie MCP a obmedzenie rýchlosti | ✅ Hotovo |
| 2️⃣ | Vylepšené písanie konfigurácie MCP špecifické pre klienta | ✅ Dnes pre kontajnery Claude, Cursor, Codex, Gemini, Kiro, VS Code a Dev |
| 3️⃣ | Podpísané artefakty vydania alebo archívy jednotlivých zručností | ✅ Predstavte dnes s presadzovaním CI na značkách vydania |
| 4️⃣ | Spustenie úlohy A2A → odolná orchestrácia | ✅ Prezentujte sa už dnes s JSON/SQLite persistenciou, externými vykonávateľmi, opt-in koordináciou prenájmu a voliteľnou pokročilou koordináciou Redis |
| 5️⃣ | Rozšírte publikovaný katalóg pre širšie pokrytie balíkov | ✅Darujte dnes pre aktuálnych sedem vybraných štartovacích balíčkov |
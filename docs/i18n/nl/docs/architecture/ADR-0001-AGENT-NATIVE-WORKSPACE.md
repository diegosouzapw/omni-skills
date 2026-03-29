# 📐 ADR-0001: Agent-Native Workspace Foundation (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**De belangrijkste architectonische beslissing die de structuur van de monorepo-werkruimte vormgaf.**---

## 📊 Status

✅**Geaccepteerd**— huidige richting van de werkruimte en actieve opslagplaatsvorm.---

## 🔍 Context

Omni Skills is begonnen als een**installer-first**-repository. Dat was genoeg om `SKILL.md`-inhoud te distribueren, maar niet genoeg om de catalogus toegankelijk te maken voor agenten via protocoleigen oppervlakken.

We hadden een stichting nodig die het volgende kon ondersteunen:

| Vereiste | Protocol |
|:------------|:---------|
| 🌐 Alleen-lezen HTTP-catalogus-API | RUST |
| 🔌 Alleen-lezen MCP-server | Modelcontextprotocol |
| 🤖 Agentgericht A2A-oppervlak | Agent-tot-agent |
| 📂 Lokaal zijspannen installeren | Bestandssysteemhulpmiddelen |

**Kritische beperking**: vermijd het afzonderlijk reparseren van opslagplaatsbestanden in elke nieuwe service.---

## ✅ Decision

Gebruik een**werkruimtegerichte monorepo**met een gedeelde cataloguskern en protocolspecifieke pakketten:

| Pakket | Doel |
|:--------|:--------|
| 📦 `omni-vaardigheden` ​​(root) | CLI-installatieprogramma en repositoryscripts |
| 🧠 `@omni-skills/catalog-core` | Gedeeld laden, zoeken, vergelijken, bundels, installatieplannen |
| 🌐 `@omni-skills/server-api` | Alleen-lezen REST API |
| 🔌 `@omni-skills/server-mcp` | MCP met stdio/stream/sse + lokale zijspanmodus |
| 🤖 `@omni-skills/server-a2a` | A2A-taakruntime met Agent Card, polling, SSE en push-configuratie |### 📁 Shared Data Sources

De cataloguskern leest gegenereerde artefacten uit:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Resultaat | Gevolgen |
|:--------|:-------|
| 🔗**Gedeeld datacontract**| API, MCP en A2A gebruiken dezelfde artefacten |
| 🖥️**Geünificeerde CLI**| Eén binair bestand toont installatie, UI-shell, API, MCP, A2A, diagnostiek en rook |
| 🧩**Protocolisolatie**| Nieuwe oppervlakken herhalen zich zonder koppeling met interne onderdelen van de installateur |
| 🔌**Lokaal zijspan**| Werkende MCP-modus met schrijfmogelijkheid achter een toelatingslijst, met klantbewuste recepten |
| 📦**Runtime voor één pakket**| Het gepubliceerde npm-pakket bevat de protocoloppervlakken, validatietools en gegenereerde artefacten |---

## ⚠️ Negative Consequences

| Afweging | Mitigatie |
|:---------|:-----------|
| 🔄**Metagegevensduplicatie**| Python build + JavaScript runtime → uiteindelijk consolideren |
| 🏗️**A2A-complexiteit**| Er bestaat nu een duurzame levenscyclus, maar coördinatie-adapters voegen operationele diepgang toe |
| 📦**Catalogusuitlijning**| Voor selectieve installatie zijn opdrachten, manifesten en documenten vereist om gesynchroniseerd te blijven |
| 📋**Bundel gaten in de metadata**| Bundels kunnen gepubliceerde vaardigheden overtreffen, waardoor expliciete waarschuwingen voor ontbrekende leden nodig zijn |---

## ➡️ Follow-Up Items

| # | Actie | Staat |
|:--|:-------|:-------|
| 1️⃣ | MCP-authenticatie en snelheidsbeperking op afstand | ✅ Klaar |
| 2️⃣ | Verbeterd klantspecifiek schrijven van MCP-configuratie | ✅ Vandaag aanwezig voor Claude, Cursor, Codex, Gemini, Kiro, VS Code en Dev Containers |
| 3️⃣ | Ondertekende release-artefacten of archieven per vaardigheid | ✅ Vandaag aanwezig met CI handhaving op release tags |
| 4️⃣ | A2A-taakruntime → duurzame orkestratie | ✅ Vandaag aanwezig met JSON/SQLite-persistentie, externe uitvoerders, opt-in lease-coördinatie en optionele geavanceerde Redis-coördinatie |
| 5️⃣ | Vergroot de gepubliceerde catalogus voor een bredere bundeldekking | ✅Vandaag aanwezig voor de huidige zeven samengestelde starterbundels |
# 📐 ADR-0001: Agent-Native Workspace Foundation (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Det viktigaste arkitektoniska beslutet som formade monorepos arbetsytastruktur.**---

## 📊 Status

✅**Godkänd**— aktuell arbetsytas riktning och aktiv förvarsform.---

## 🔍 Context

Omni Skills startade som ett**installatör-först**-förråd. Det var tillräckligt för att distribuera `SKILL.md`-innehåll, men inte tillräckligt för att exponera katalogen för agenter genom protokollbaserade ytor.

Vi behövde en stiftelse som kunde stödja:

| Krav | Protokoll |
|:------------|:--------|
| 🌐 Skrivskyddat HTTP-katalog-API | VILA |
| 🔌 Skrivskyddad MCP-server | Model Context Protocol |
| 🤖 Agent-vänd A2A-yta | Agent-till-agent |
| 📂 Lokal installera sidvagnar | Filsystemverktyg |

**Kritisk begränsning**: Undvik att reparera repofiler oberoende i varje ny tjänst.---

## ✅ Decision

Anta en**arbetsplatsorienterad monorepo**med en delad katalogkärna och protokollspecifika paket:

| Paket | Syfte |
|:--------|:--------|
| 📦 `omni-skills` (root) | CLI-installations- och reposkript |
| 🧠 `@omni-skills/catalog-core` | Delad laddning, sökning, jämförelse, paket, installationsplaner |
| 🌐 `@omni-skills/server-api` | Skrivskyddat REST API |
| 🔌 `@omni-skills/server-mcp` | MCP med stdio/stream/sse + lokalt sidovagnsläge |
| 🤖 `@omni-skills/server-a2a` | A2A-uppgiftskörning med agentkort, polling, SSE och push-konfiguration |### 📁 Shared Data Sources

Katalogkärnan läser genererade artefakter från:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Resultat | Inverkan |
|:--------|:-------|
| 🔗**Delad datakontrakt**| API, MCP och A2A konsumerar samma artefakter |
| 🖥️**Unified CLI**| En binär exponerar installation, UI-skal, API, MCP, A2A, diagnostik och rök |
| 🧩**Protokollisolering**| Nya ytor upprepas utan koppling till installatörens inre delar |
| 🔌**Lokal sidvagn**| Fungerar skrivkompatibelt MCP-läge bakom en godkännandelista, med klientmedvetna recept |
| 📦**Enkelpakets körtid**| Det publicerade npm-paketet bär protokollytorna, valideringsverktygen och genererade artefakter tillsammans |---

## ⚠️ Negative Consequences

| Avvägning | Begränsning |
|:--------|:--------|
| 🔄**Metadataduplicering**| Python build + JavaScript runtime → konsolidera så småningom |
| 🏗️**A2A-komplexitet**| Hållbar livscykel existerar nu, men koordinationsadaptrar ger operativt djup |
| 📦**Katalogjustering**| Selektiv installation kräver kommandon, manifest och dokument för att förbli synkroniserade |
| 📋**Metadataluckor i paketet**| Paket kan överträffa publicerade färdigheter, vilket kräver explicita varningar för saknade medlemmar |---

## ➡️ Follow-Up Items

| # | Åtgärd | Status |
|:--|:-------|:-------|
| 1️⃣ | Fjärr-MCP-autentisering och hastighetsbegränsning | ✅ Klart |
| 2️⃣ | Förbättrad klientspecifik MCP-konfigurationsskrivning | ✅ Present idag för Claude, Cursor, Codex, Gemini, Kiro, VS Code och Dev Containers |
| 3️⃣ | Signerade utgivningsartefakter eller arkiv per färdighet | ✅ Present i dag med CI-tillämpning av frisläppningstaggar |
| 4️⃣ | A2A-uppgiftskörning → hållbar orkestrering | ✅ Presentera idag med JSON/SQLite-uthållighet, externa exekutorer, opt-in-hyresavtalskoordinering och valfri avancerad Redis-koordinering |
| 5️⃣ | Utöka publicerad katalog för bredare pakettäckning | ✅ Present idag för de nuvarande sju kurerade startpaketen |
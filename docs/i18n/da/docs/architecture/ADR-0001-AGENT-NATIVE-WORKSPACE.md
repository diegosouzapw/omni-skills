# 📐 ADR-0001: Agent-Native Workspace Foundation (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Den vigtigste arkitektoniske beslutning, der formede monorepo-arbejdspladsstrukturen.**---

## 📊 Status

✅**Accepteret**— aktuel arbejdsområderetning og aktiv lagerform.---

## 🔍 Context

Omni Skills startede som et**installatør-først**-lager. Det var nok til at distribuere `SKILL.md`-indhold, men ikke nok til at eksponere kataloget for agenter gennem protokol-native overflader.

Vi havde brug for en fond, der kunne støtte:

| Krav | Protokol |
|:------------|:--------|
| 🌐 Skrivebeskyttet HTTP katalog API | HVILE |
| 🔌 Skrivebeskyttet MCP-server | Modelkontekstprotokol |
| 🤖 Agentvendt A2A overflade | Agent-til-agent |
| 📂 Lokal installation af sidevogne | Filsystemværktøjer |

**Kritisk begrænsning**: Undgå at reparere repo-filer uafhængigt i hver ny tjeneste.---

## ✅ Decision

Adopter en**arbejdspladsorienteret monorepo**med en delt katalogkerne og protokolspecifikke pakker:

| Pakke | Formål |
|:--------|:--------|
| 📦 `omni-skills` (rod) | CLI-installations- og repo-scripts |
| 🧠 `@omni-skills/catalog-core` | Delt indlæsning, søgning, sammenligning, bundter, installationsplaner |
| 🌐 `@omni-skills/server-api` | Skrivebeskyttet REST API |
| 🔌 `@omni-skills/server-mcp` | MCP med stdio/stream/sse + lokal sidevognstilstand |
| 🤖 `@omni-skills/server-a2a` | A2A-opgavekørsel med agentkort, polling, SSE og push-konfiguration |### 📁 Shared Data Sources

Katalogkernen læser genererede artefakter fra:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Udfald | Indvirkning |
|:--------|:-------|
| 🔗**Delt datakontrakt**| API, MCP og A2A bruger de samme artefakter |
| 🖥️**Unified CLI**| En binær afsløring af installation, UI-skal, API, MCP, A2A, diagnostik og røg |
| 🧩**Protokolisolering**| Nye overflader gentages uden kobling til installatørens indre |
| 🔌**Lokal sidevogn**| Arbejder skrive-kompatibel MCP-tilstand bag en tilladelsesliste, med klient-bevidste opskrifter |
| 📦**Enkeltpakke runtime**| Den offentliggjorte npm-pakke bærer protokoloverflader, valideringsværktøjer og genererede artefakter sammen |---

## ⚠️ Negative Consequences

| Afvejning | Afbødning |
|:--------|:--------|
| 🔄**Metadataduplikering**| Python build + JavaScript runtime → konsolider til sidst |
| 🏗️**A2A kompleksitet**| Holdbar livscyklus eksisterer nu, men koordinationsadaptere tilføjer operationsdybde |
| 📦**Katalogjustering**| Selektiv installation kræver kommandoer, manifester og dokumenter for at forblive synkroniseret |
| 📋**Bundle metadatahuller**| Bundles kan overgå offentliggjorte færdigheder, hvilket kræver eksplicitte advarsler om manglende medlemmer |---

## ➡️ Follow-Up Items

| # | Handling | Status |
|:--|:-------|:-------|
| 1️⃣ | Fjern-MCP-godkendelse og hastighedsbegrænsning | ✅ Udført |
| 2️⃣ | Forbedret klientspecifik MCP-konfigurationsskrivning | ✅ Til stede i dag for Claude, Cursor, Codex, Gemini, Kiro, VS Code og Dev Containers |
| 3️⃣ | Underskrevne udgivelsesartefakter eller arkiver pr. færdighed | ✅ Til stede i dag med CI-håndhævelse af frigivelsesmærker |
| 4️⃣ | A2A opgave runtime → holdbar orkestrering | ✅ Præsenter i dag med JSON/SQLite-vedholdenhed, eksterne eksekutører, opt-in leasing-koordinering og valgfri avanceret Redis-koordinering |
| 5️⃣ | Udvid offentliggjort katalog for bredere bundtdækning | ✅ Præsenter i dag for de nuværende syv kuraterede startpakker |
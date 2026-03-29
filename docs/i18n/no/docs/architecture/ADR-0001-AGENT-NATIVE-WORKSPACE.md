# 📐 ADR-0001: Agent-Native Workspace Foundation (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Den viktigste arkitektoniske beslutningen som formet monorepos arbeidsområdestruktur.**---

## 📊 Status

✅**Godtatt**— gjeldende arbeidsområderetning og aktiv depotform.---

## 🔍 Context

Omni Skills startet som et**installatør-først**-depot. Det var nok til å distribuere `SKILL.md`-innhold, men ikke nok til å eksponere katalogen for agenter gjennom protokollbaserte overflater.

Vi trengte en stiftelse som kunne støtte:

| Krav | Protokoll |
|:------------|:--------|
| 🌐 Skrivebeskyttet HTTP-katalog-API | HVILE |
| 🔌 Skrivebeskyttet MCP-server | Model Context Protocol |
| 🤖 Agentvendt A2A-overflate | Agent-til-agent |
| 📂 Lokal installer sidevogner | Filsystemverktøy |

**Kritisk begrensning**: Unngå reparsing av repo-filer uavhengig i hver nye tjeneste.---

## ✅ Decision

Ta i bruk en**arbeidsområdeorientert monorepo**med en delt katalogkjerne og protokollspesifikke pakker:

| Pakke | Formål |
|:--------|:--------|
| 📦 `omni-skills` (root) | CLI-installasjons- og repo-skript |
| 🧠 `@omni-skills/catalog-core` | Delt lasting, søk, sammenligning, pakker, installeringsplaner |
| 🌐 `@omni-skills/server-api` | Skrivebeskyttet REST API |
| 🔌 `@omni-skills/server-mcp` | MCP med stdio/stream/sse + lokal sidevognmodus |
| 🤖 `@omni-skills/server-a2a` | A2A-oppgavekjøring med agentkort, polling, SSE og push-konfigurasjon |### 📁 Shared Data Sources

Katalogkjernen leser genererte artefakter fra:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Utfall | Påvirkning |
|:--------|:-------|
| 🔗**Delt datakontrakt**| API, MCP og A2A bruker de samme artefaktene |
| 🖥️**Unified CLI**| En binær eksponerer installasjon, UI-skall, API, MCP, A2A, diagnostikk og røyk |
| 🧩**Protokollisolering**| Nye overflater gjentar seg uten kobling til installatørens indre |
| 🔌**Lokal sidevogn**| Fungerer skrivekompatible MCP-modus bak en godkjenningsliste, med klientbevisste oppskrifter |
| 📦**Single-pack runtime**| Den publiserte npm-pakken bærer protokolloverflatene, valideringsverktøyet og genererte artefakter sammen |---

## ⚠️ Negative Consequences

| Avveining | Redusering |
|:--------|:--------|
| 🔄**Metadataduplisering**| Python build + JavaScript runtime → konsolider til slutt |
| 🏗️**A2A-kompleksitet**| Holdbar livssyklus eksisterer nå, men koordineringsadaptere gir operasjonsdybde |
| 📦**Katalogjustering**| Selektiv installasjon krever kommandoer, manifester og dokumenter for å holde seg synkronisert |
| 📋**Map i pakke metadata**| Bunter kan overgå publiserte ferdigheter, og krever eksplisitte advarsler om manglende medlemmer |---

## ➡️ Follow-Up Items

| # | Handling | Status |
|:--|:-------|:-------|
| 1️⃣ | Ekstern MCP-autentisering og hastighetsbegrensning | ✅ Ferdig |
| 2️⃣ | Forbedret klientspesifikk MCP-konfigurasjonsskriving | ✅ Present i dag for Claude, Cursor, Codex, Gemini, Kiro, VS Code og Dev Containers |
| 3️⃣ | Signerte utgivelsesartefakter eller arkiver per ferdighet | ✅ Til stede i dag med CI-håndhevelse på utgivelsesetiketter |
| 4️⃣ | A2A-oppgavekjøring → holdbar orkestrering | ✅ Presenter i dag med JSON/SQLite-utholdenhet, eksterne eksekutører, opt-in leieavtalekoordinering og valgfri avansert Redis-koordinering |
| 5️⃣ | Utvid publisert katalog for bredere pakkedekning | ✅ Present i dag for de nåværende syv kuraterte startpakkene |
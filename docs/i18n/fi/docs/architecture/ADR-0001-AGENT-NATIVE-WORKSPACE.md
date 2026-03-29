# 📐 ADR-0001: Agent-Native Workspace Foundation (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Tärkein arkkitehtoninen päätös, joka muokkasi monorepo-työtilan rakenteen.**---

## 📊 Status

✅**Hyväksytty**— nykyinen työtilan suunta ja aktiivisen arkiston muoto.---

## 🔍 Context

Omni Skills aloitti**installer-first**-varastona. Se riitti SKILL.md-sisällön levittämiseen, mutta ei tarpeeksi paljastamaan luettelo agenteille protokollapohjaisten pintojen kautta.

Tarvitsimme säätiön, joka voisi tukea:

| Vaatimus | Pöytäkirja |
|:------------|:---------|
| 🌐 Vain luku -HTTP-luettelosovellusliittymä | LEPO |
| 🔌 Vain luku -muotoinen MCP-palvelin | Mallikontekstiprotokolla |
| 🤖 Agenttipuolinen A2A-pinta | Agentilta agentille |
| 📂 Paikallisesti asennettavat sivuvaunut | Tiedostojärjestelmätyökalut |

**Kriittinen rajoitus**: Vältä repo-tiedostojen uudelleen jäsentämistä erikseen jokaisessa uudessa palvelussa.---

## ✅ Decision

Ota käyttöön**työtilasuuntautunut monorepo**, jossa on jaettu luetteloydin ja protokollakohtaiset paketit:

| Paketti | Tarkoitus |
|:--------|:---------|
| 📦 "kaikki taidot" (juuri) | CLI-asennusohjelma ja repo-skriptit |
| 🧠 `@omni-skills/catalog-core` | Jaettu lataus, haku, vertailu, niput, asennussuunnitelmat |
| 🌐 `@omni-skills/server-api` | Vain luku -muotoinen REST API |
| 🔌 `@omni-skills/server-mcp` | MCP stdio/stream/sse + paikallinen sivuvaunutila |
| 🤖 `@omni-skills/server-a2a` | A2A-tehtävän suoritusaika agenttikortilla, kyselyllä, SSE:llä ja push-konfiguraatiolla |### 📁 Shared Data Sources

Katalogin ydin lukee luodut artefaktit:
- "dist/catalog.json".
- "dist/manifests/<taito>.json".
- "skills_index.json".---

## ✅ Positive Consequences

| Tulos | Vaikutus |
|:--------|:-------|
| 🔗**Jaettu datasopimus**| API, MCP ja A2A kuluttavat samoja artefakteja |
| 🖥️**Unified CLI**| Yksi binääri paljastaa asennuksen, käyttöliittymän kuoren, API:n, MCP:n, A2A:n, diagnostiikan ja savun |
| 🧩**Protokollaeristys**| Uudet pinnat toistuvat ilman kytkentää asentajan sisäosaan |
| 🔌**Paikallinen sivuvaunu**| Toimiva kirjoituskykyinen MCP-tila sallittujen luettelon takana asiakastietoisilla resepteillä |
| 📦**Yksipaketin suoritusaika**| Julkaistu npm-paketti sisältää protokollapinnat, validointityökalut ja luodut artefaktit yhdessä |---

## ⚠️ Negative Consequences

| Kompromissi | Lieventäminen |
|:---------|:------------|
| 🔄**Metatietojen kopiointi**| Python build + JavaScript runtime → lopulta konsolidoida |
| 🏗️**A2A-monimutkaisuus**| Kestävä elinkaari on nyt olemassa, mutta koordinointiadapterit lisäävät toimintasyvyyttä |
| 📦**Katalogin kohdistus**| Valikoiva asennus vaatii komentoja, luetteloita ja asiakirjoja pysyäkseen synkronoituna |
| 📋**Niputa metatietojen aukot**| Paketit voivat ylittää julkaistut taidot, mikä edellyttää nimenomaisia ​​varoituksia puuttuvasta jäsenestä |---

## ➡️ Follow-Up Items

| # | Toiminta | Tila |
|:--|:-------|:-------|
| 1️⃣ | MCP-etätodennus ja nopeuden rajoitus | ✅ Valmis |
| 2️⃣ | Parannettu asiakaskohtainen MCP-asetusten kirjoittaminen | ✅ Esitä tänään Claude, Cursor, Codex, Gemini, Kiro, VS Code ja Dev Containers |
| 3️⃣ | Allekirjoitetut artefaktit tai taitokohtaiset arkistot | ✅ Esitä tänään CI-valvonnalla julkaisutunnisteissa |
| 4️⃣ | A2A-tehtävän suoritusaika → kestävä orkestrointi | ✅ Esittely tänään JSON/SQLite-pysyvyydellä, ulkoisilla toteuttajilla, opt-in lease -koordinaatiolla ja valinnaisella edistyneellä Redis-koordinaatiolla |
| 5️⃣ | Laajenna julkaistua luetteloa saadaksesi laajemman paketin kattavuuden | ✅ Tarjoa tänään nykyiselle seitsemälle kuratoidulle aloituspaketille |
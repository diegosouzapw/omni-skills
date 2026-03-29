# 📐 ADR-0001: Agent-Native Workspace Foundation (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**Decizia arhitecturală cheie care a modelat structura spațiului de lucru monorepo.**---

## 📊 Status

✅**Acceptat**— direcția curentă a spațiului de lucru și forma de depozit activă.---

## 🔍 Context

Omni Skills a început ca un depozit**instalator-first**. A fost suficient pentru a distribui conținutul `SKILL.md`, dar nu suficient pentru a expune catalogul agenților prin suprafețe native de protocol.

Aveam nevoie de o fundație care să susțină:

| Cerință | Protocol |
|:-------------|:---------|
| 🌐 API de catalog HTTP numai pentru citire | ODIHNA |
| 🔌 Server MCP numai pentru citire | Model Context Protocol |
| 🤖 Suprafata A2A cu fata agentului | De la agent la agent |
| 📂 Instalare locală sidecars | Instrumente pentru sistemul de fișiere |

**Constrângere critică**: evitați să analizați fișierele repo în mod independent în fiecare serviciu nou.---

## ✅ Decision

Adoptă un**monorepo orientat spre spațiu de lucru**cu un nucleu de catalog partajat și pachete specifice protocolului:

| Pachet | Scop |
|:--------|:--------|
| 📦 `omni-skills` (rădăcină) | Instalare CLI și scripturi repo |
| 🧠 `@omni-skills/catalog-core` | Încărcare partajată, căutare, comparare, pachete, planuri de instalare |
| 🌐 `@omni-skills/server-api` | API REST numai pentru citire |
| 🔌 `@omni-skills/server-mcp` | MCP cu stdio/stream/sse + mod local sidecar |
| 🤖 `@omni-skills/server-a2a` | Timp de execuție a activității A2A cu card de agent, sondaj, SSE și configurație push |### 📁 Shared Data Sources

Nucleul catalogului citește artefacte generate din:
- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Rezultat | Impact |
|:--------|:-------|
| 🔗**Contract de date partajate**| API, MCP și A2A consumă aceleași artefacte |
| 🖥️**CLI unificat**| Un binar expune instalarea, interfața de utilizare, API, MCP, A2A, diagnosticare și fum |
| 🧩**Protocol de izolare**| Noile suprafețe repetă fără a fi conectate la elementele interne ale instalatorului |
| 🔌**Sidecar local**| Funcționează modul MCP capabil de scriere în spatele unei liste de permise, cu rețete care țin seama de client |
| 📦**Timp de rulare a pachetului unic**| Pachetul npm publicat conține împreună suprafețele de protocol, instrumentele de validare și artefactele generate |---

## ⚠️ Negative Consequences

| Comerț | Atenuare |
|:---------|:-----------|
| 🔄**Dublare metadate**| Python build + JavaScript runtime → eventual consolida |
| 🏗️**Complexitate A2A**| Acum există un ciclu de viață durabil, dar adaptoarele de coordonare adaugă profunzime operațională |
| 📦**Aliniere la catalog**| Instalarea selectivă necesită comenzi, manifeste și documente pentru a rămâne sincronizate |
| 📋**Agrupați goluri metadate**| Pachetele pot depăși competențele publicate, necesitând avertismente explicite despre membrii lipsă |---

## ➡️ Follow-Up Items

| # | Acțiune | Stare |
|:--|:--------|:-------|
| 1️⃣ | Autentificare la distanță MCP și limitare a ratei | ✅ Gata |
| 2️⃣ | Scriere îmbunătățită a configurației MCP specifice clientului | ✅ Prezent astăzi pentru Claude, Cursor, Codex, Gemini, Kiro, VS Code și Dev Containers |
| 3️⃣ | Artefacte de lansare semnate sau arhive per abilitate | ✅ Prezentați astăzi cu aplicarea CI asupra etichetelor de lansare |
| 4️⃣ | Timp de rulare a sarcinii A2A → orchestrare durabilă | ✅ Prezenți astăzi cu persistență JSON/SQLite, executori externi, coordonare opt-in de închiriere și coordonare Redis avansată opțională |
| 5️⃣ | Extindeți catalogul publicat pentru o acoperire mai largă a pachetului | ✅ Prezent astăzi pentru actualele șapte pachete de start organizate |
# 📐 ADR-0001: Agent-Native Workspace Foundation (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇪🇸 [es](../../../es/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇪 [de](../../../de/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇹 [it](../../../it/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇳 [in](../../../in/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇹🇭 [th](../../../th/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇩 [id](../../../id/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇳🇴 [no](../../../no/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇩🇰 [da](../../../da/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇮🇱 [he](../../../he/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md)

---


>**La decisione architettonica chiave che ha modellato la struttura dello spazio di lavoro monorepo.**---

## 📊 Status

✅**Accettato**: direzione attuale dell'area di lavoro e forma del repository attivo.---

## 🔍 Context

Omni Skills è iniziato come repository**prima dell'installazione**. Ciò era sufficiente per distribuire il contenuto "SKILL.md", ma non abbastanza per esporre il catalogo agli agenti tramite superfici native del protocollo.

Avevamo bisogno di una fondazione che potesse sostenere:

| Requisito | Protocollo |
|:------------|:---------|
| 🌐 API del catalogo HTTP di sola lettura | RIPOSO |
| 🔌 Server MCP di sola lettura | Protocollo contesto modello |
| 🤖 Superficie A2A rivolta agli agenti | Da agente ad agente |
| 📂 Sidecar di installazione locale | Strumenti del filesystem |

**Vincolo critico**: evitare di analizzare nuovamente i file repository in modo indipendente in ogni nuovo servizio.---

## ✅ Decision

Adotta un**monorepo orientato allo spazio di lavoro**con un nucleo di catalogo condiviso e pacchetti specifici del protocollo:

| Pacchetto | Scopo |
|:--------|:--------|
| 📦 `omni-skills` (radice) | Programma di installazione della CLI e script del repository |
| 🧠 `@omni-skills/catalog-core` | Caricamento condiviso, ricerca, confronto, pacchetti, piani di installazione |
| 🌐 `@omni-skills/server-api` | API REST di sola lettura |
| 🔌 `@omni-skills/server-mcp` | MCP con stdio/stream/sse + modalità sidecar locale |
| 🤖 `@omni-skills/server-a2a` | Runtime dell'attività A2A con scheda agente, polling, SSE e configurazione push |### 📁 Shared Data Sources

Il core del catalogo legge gli artefatti generati da:
- "dist/catalog.json".
- `dist/manifests/<abilità>.json`
- `skills_index.json`---

## ✅ Positive Consequences

| Risultato | Impatto |
|:--------|:-------|
| 🔗**Contratto dati condivisi**| API, MCP e A2A consumano gli stessi artefatti |
| 🖥️**CLI unificata**| Un binario espone installazione, shell dell'interfaccia utente, API, MCP, A2A, diagnostica e smoke |
| 🧩**Isolamento del protocollo**| Le nuove superfici vengono ripetute senza accoppiamento con gli interni dell'installatore |
| 🔌**Sidecar locale**| Modalità MCP con funzionalità di scrittura funzionante dietro una lista consentita, con ricette in grado di riconoscere il client |
| 📦**Runtime a pacchetto singolo**| Il pacchetto npm pubblicato riunisce le superfici del protocollo, gli strumenti di convalida e gli artefatti generati |---

## ⚠️ Negative Consequences

| Compromesso | Mitigazione |
|:---------|:-----------|
| 🔄**Duplicazione dei metadati**| Compilazione Python + runtime JavaScript → eventualmente consolidare |
| 🏗️**Complessità A2A**| Ora esiste un ciclo di vita durevole, ma gli adattatori di coordinamento aggiungono profondità operativa |
| 📦**Allineamento catalogo**| L'installazione selettiva richiede comandi, manifest e documenti per rimanere sincronizzati |
| 📋**Lacune nei metadati del bundle**| I pacchetti possono superare le competenze pubblicate, richiedendo avvisi espliciti di membro mancante |---

## ➡️ Follow-Up Items

| # | Azione | Stato |
|:--|:-------|:-------|
| 1️⃣ | Autenticazione MCP remota e limitazione della velocità | ✅ Fatto |
| 2️⃣ | Scrittura migliorata della configurazione MCP specifica del client | ✅ Presente oggi per Claude, Cursor, Codex, Gemini, Kiro, VS Code e Dev Containers |
| 3️⃣ | Artefatti di rilascio firmati o archivi per competenza | ✅ Presenti oggi con l'applicazione della CI sui tag di rilascio |
| 4️⃣ | Runtime dell'attività A2A → orchestrazione durevole | ✅ Presente oggi con persistenza JSON/SQLite, esecutori esterni, coordinamento del lease opt-in e coordinamento Redis avanzato opzionale |
| 5️⃣ | Espandi il catalogo pubblicato per una copertura più ampia dei pacchetti | ✅ Presente oggi per gli attuali sette pacchetti iniziali curati |
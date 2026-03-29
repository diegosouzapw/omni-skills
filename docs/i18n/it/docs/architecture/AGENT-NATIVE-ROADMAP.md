# 🗺️ Agent-Native Roadmap (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

---


>**Il piano di evoluzione dell'architettura per Omni Skills: dal repository basato sull'installazione al runtime del catalogo condiviso che alimenta CLI, API, MCP e A2A senza duplicare la logica.**---

## 📊 Current Platform Areas

| Fase | Nome | Stato |
|:------|:-----|:-------|
| 1️⃣ | Contratti e artefatti | ✅ Attuale |
| 2️⃣ | API del catalogo di sola lettura | ✅ Attuale |
| 3️⃣ | Superficie di rilevamento MCP | ✅ Attuale |
| 4️⃣ | Superficie di installazione e configurazione locale | ✅ Attuale |
| 5️⃣ | Orchestrazione A2A | ✅ Attuale |### ✅ What Exists Today

- Artefatti del catalogo leggibili dalla macchina in `dist/`
- API HTTP di sola lettura con copertura endpoint per ricerca, bundle, confronto, pianificazione dell'installazione e download
- Server MCP con trasporti `stdio`, HTTP streaming e SSE
- sidecar locale con scritture consentite e flussi `config-mcp`
- 7 client con funzionalità di installazione, 16 client con funzionalità di configurazione, 33 destinazioni di configurazione MCP e 19 profili di configurazione
- Specializzazione più profonda del bundle all'interno di `full-stack`, `security`, `devops` e `ai-engineer` tramite `auth-flows`, `threat-modeling`, `release-engineering` e `context-engineering`
- archivi per competenza (`zip`, `tar.gz`) con checksum SHA-256 e firme staccate sui tag di rilascio
- Base di governance API: autenticazione portante/chiave API, autenticazione runtime amministratore, limitazione della velocità, registrazione di controllo, liste consentite CORS/IP, proxy di attendibilità, modalità di manutenzione e ID richiesta
- Runtime A2A con ciclo di vita dell'attività, durabilità JSON/SQLite, ripresa del riavvio, streaming SSE, annullamento, notifiche push, esecutore di processi opzionale e coordinamento leasing opt-in### 🔭 Future Expansion Areas

La tabella di marcia principale ora descrive l’ambito attuale della piattaforma. Gli elementi rimanenti sono aree di espansione futura, non lacune fondamentali:

- da questo momento in poi solo aggiunte MCP altamente selettive e solo laddove i documenti pubblici ufficiali rendano possibile uno scrittore sicuro
- Pacchetti di riferimento più approfonditi e punteggi più semantici in modo che il classificatore continui a separare le competenze eccezionali da quelle semplicemente raffinate
- governance ospitata dall'azienda oltre l'attuale baseline in corso, se il progetto successivamente necessita di gateway o integrazione IdP
- specializzazione più approfondita nei percorsi "design", "tools", "data-ai" e "machine-learning" appena attivati
- continuo perfezionamento operativo del potenziatore privato mantenendo il suo modello operativo formale: OmniRouter bloccato su "cx/gpt-5.4", cloud ospitato in preflight "mock" o degradato e esecuzione affidabile "live" su LAN o self-hosted
- rilascio continuo e rafforzamento del flusso di lavoro solo come lavoro di qualità del servizio, non come fondamento della piattaforma mancante## Future Catalog Expansion Track

Le prime due ondate di espansione della categoria pubblica sono ora arrivate:

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `strumenti` → `mcp-server-authoring`
- `data-ai` → `data-contratti`
- `machine-learning` → `model-serving`

Il prossimo passo consigliato non è più l’attivazione della categoria fine a se stessa. Si tratta di approfondire questi nuovi percorsi nativi del codice attivo in modo che sembrino superfici di prodotti durevoli piuttosto che punti d'appoggio per singole competenze.

Direzione consigliata:

1. approfondire la "progettazione" con flussi di lavoro del sistema di progettazione più operativi
2. approfondire gli `strumenti` con competenze di creazione e orientate ai plugin
3. approfondire "data-ai" con competenze di pipeline e strumentazione incentrate sull'implementazione
4. approfondire l'apprendimento automatico con competenze di servizio, formazione e operazioni di valutazione

Categorie rinviate intenzionalmente a meno che non compaiano proposte forti di codice nativo:

- "affari".
- "contenuto-media".

La cronologia dell'espansione è ora tracciata in:

- [../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](../tasks/TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
- [../tasks/TASK-08-SECOND-CATEGORY-WAVE.md](../tasks/TASK-08-SECOND-CATEGORY-WAVE.md)---

## 🎯 Goals

- ✅ Mantieni funzionante l'attuale flusso di lavoro `npx omni-skills`
- ✅ Introdurre una fonte di verità leggibile dalla macchina per le competenze
- ✅ Supporta la scoperta, la raccomandazione e la pianificazione dell'installazione da parte degli agenti
- ✅ Separare le preoccupazioni del catalogo remoto dalle scritture del filesystem locale
- ✅ Riutilizza gli stessi metadati su CLI, API, MCP e A2A---

## 🚫 Non-Goals

- ❌ Installazione remota sul computer dell'utente da un server ospitato
- ❌ Sostituisci `SKILL.md` come formato di creazione canonico
- ❌ Richiedere ai contributori di scrivere i manifest a mano
- ❌ Trasforma il progetto in una piattaforma con code ospitate pesanti per impostazione predefinita---

## 🏗️ Target Architecture

Un**core del catalogo**con tre superfici di protocollo:

| Superficie | Ideale per | Modalità |
|:--------|:---------|:-----|
| 🌐**API REST**| Accesso al registro, integrazioni dell'interfaccia utente, consumatori di terze parti | Sola lettura |
| 🔌**MCP**| Individuazione dell'agente, anteprime di installazione, scrittura della configurazione, ricette client | Sola lettura + scritture locali |
| 🤖**A2A**| Orchestrazione da agente ad agente e trasferimento del piano di installazione | Ciclo di vita dell'attività con durabilità locale semplice prima |### ⚙️ Core Principle

>**Tutti i protocolli utilizzano la stessa famiglia di artefatti generata.**```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

Il manifest rimane il contratto condiviso. Gli archivi sono artefatti di distribuzione sovrapposti a quel contratto, non una sua sostituzione.---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Utilizzato dall'API ospitata e dai server MCP remoti.

| ✅ Ammessi | ❌ Non consentito |
|:-----------|:-------|
| Competenze di ricerca | Scrive nel filesystem del chiamante |
| Recupera manifesti | Modifica la configurazione del client locale |
| Confronta le competenze | Dedurre lo stato macchina arbitrario |
| Consiglia pacchetti | — |
| Crea piani di installazione | — |### 2️⃣ Local Installer Mode

Utilizzato dalla CLI e dal sidecar MCP.

| ✅ Ammessi |
|:-----------|
| Rileva client AI locali |
| Ispezionare le competenze installate |
| Anteprima delle operazioni sui file |
| Installa o rimuovi le directory delle competenze |
| Scrivi la configurazione MCP locale dopo l'anteprima |

> 📌 Questa rimane l'unica modalità in cui avvengono le scritture reali del sistema operativo.---

## 📐 Protocol Split

### 🌐 REST API

Ideale per l'accesso al registro, la ricerca, il confronto, i download con versione e la pianificazione dell'installazione.

**Endpoint**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`### 🔌 MCP

Ideale per rilevamento basato su strumenti, suggerimenti tempestivi, anteprime di installazione e configurazione MCP specifica per il client.

**Strumenti di sola lettura**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Strumenti locali**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`### 🤖 A2A

Ideale per il trasferimento del rilevamento, i flussi di lavoro del piano di installazione e l'esecuzione di attività dell'agente ripristinabili.

**Operazioni correnti**: `discover-skills` · `recommend-stack` · `prepare-install-plan`---

## 🛡️ Security Model

| Principio | Attuazione |
|:----------|:-------|
| 🔒 I servizi ospitati sono di sola lettura | L'API e l'MCP remoto non scrivono nel filesystem chiamante |
| 📂Le scritture restano locali | Solo sidecar CLI e MCP |
| 👁️ Anteprima prima di scrivere | Impostazioni predefinite di prova sulle mutazioni locali |
| 🔑 L'integrità è esplicita | Checksum SHA-256 per gli artefatti generati |
| ✍️ Rilasciare la fiducia è esplicito | Firme distaccate applicate sui tag di rilascio |
| ⚠️ Il rischio è emerso | I metadati di rischio e sicurezza si propagano su ogni superficie di runtime |---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- architettura di destinazione documentata
- schema manifesto definito
- metadati, catalogo, manifest, bundle e archivi generati### Phase 2: Catalog Service

- API HTTP di sola lettura con Express 5
- ricerca, filtraggio, ricerca manifest, elenco bundle, confronto e download
- Base di riferimento per la governance ospitata basata sull'ambiente### Phase 3: MCP Discovery

- Integrazione ufficiale `@modelcontextprotocol/sdk`
- Trasporti "stdio", HTTP streaming e SSE
- Strumenti, risorse e istruzioni di sola lettura supportati dal catalogo condiviso### Phase 4: Local Install and Config Surface

- sidecar locale con scritture consentite
- rilevamento per 7 client con capacità di installazione
- Scrittura della configurazione per 16 client abilitati alla configurazione su 33 target e 19 profili di configurazione
- Flussi `config-mcp` guidati nella CLI e nella shell visiva
- supporto stabile per Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose e Dev Containers### Phase 5: A2A Orchestration

- scheda agente in "/.well-known/agent.json".
- Metodi di configurazione `message/send`, `message/stream`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe` e notifiche push
- Persistenza JSON e SQLite con ripristino al riavvio
- esecutore di processi esterni opzionale
- attivazione dell'esecuzione in leasing tra i lavoratori per SQLite e coordinamento Redis avanzato opzionale
- Impostazioni predefinite semplici mantenute in memoria, JSON o SQLite senza dipendenze esterne### Current Enhancer Operating Decision

Il modello "live" supportato dal potenziatore privato è ora esplicito:

- L'automazione delle PR ospitate esegue un tentativo "live" controllato dal preflight
- se il gateway OmniRoute pubblico è bloccato o instabile, il PR viene contrassegnato come "bloccato" con un motivo rivolto all'operatore invece di fallire in modo opaco
- il percorso canonico affidabile "live" rimane LAN o esecuzione del servizio locale
- Le esecuzioni GitHub private pianificate rimangono "mock" per impostazione predefinita, a meno che un operatore non richieda esplicitamente "live".---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Decisione**: mantenere il manifest come contratto condiviso e conservare gli archivi firmati per competenza come superficie di distribuzione.

**Perché**:
- CLI, API, MCP e A2A utilizzano già la forma manifest normalizzata
- gli archivi sono ideali per il download e la verifica, ma poveri come unico contratto di scoperta
- questo mantiene la creazione semplice e la distribuzione verificabile### 2. Private or Premium Catalogs

**Decisione**: riutilizzare lo stesso formato manifest e catalogo e sovrapporre l'autenticazione o la policy esternamente.

**Perché**:
- evita la biforcazione del modello dati
- corrisponde all'attuale approccio di governance API/MCP
- rimane compatibile con la direzione dell'ecosistema MCP relativa alle credenziali del client OAuth e all'autorizzazione gestita dall'azienda### 3. Client Writer Strategy

**Decisione**: convergere su un piccolo insieme di famiglie di esportazione canoniche e mantenere scrittori su misura solo dove i documenti ufficiali del cliente lo richiedono.

**Famiglie canoniche ora in uso**:
- JSON "mcpServers".
- "server" JSON
- JSON `context_servers`
- YAML "mcpServers".
- TOML "[mcp_servers]".

**Perché**:
- mantiene l'implementazione mantenibile
- supporta ancora le esigenze specifiche del cliente come le impostazioni di Claude, Continue YAML, Zed `context_servers` e Codex TOML
- evita di inventare scrittori fragili per clienti senza documenti di configurazione pubblici stabili---

## 🌍 Research Notes Behind Those Decisions

Le decisioni attuali sono state confrontate con i documenti ufficiali dell'ecosistema:

- L'ecosistema MCP ora documenta estensioni opzionali come le credenziali del client OAuth e l'autorizzazione gestita dall'azienda, che supporta l'esternalizzazione dell'autenticazione ospitata invece di biforcare il formato del catalogo
- OpenAI documenta un server MCP di documenti pubblici e modelli di configurazione Codex MCP che si allineano con la strategia condivisa di manifest e client-scrittore
- VS Code documenta il supporto MCP di prima classe e una guida alle estensioni, che rafforza il mantenimento del suo scrittore dedicato basato su "server"
- JetBrains AI Assistant documenta la configurazione di MCP tramite l'UX del prodotto anziché un contratto di file multipiattaforma stabile, che supporta per ora il mantenimento nel territorio del manuale/snippet---

## 🔮 Longer-Term Decision Points

Rimangono veramente aperte soltanto alcune questioni strategiche:

1. Se qualche cliente al di là della matrice attuale superi davvero l'asticella per una scrittura di prima classe o se i prodotti rimanenti debbano rimanere solo manuali/snippet
2. Quando, se mai, la governance ospitata dovrebbe spostarsi dietro un gateway esterno o un IdP aziendale invece dell'attuale base di riferimento in-process?
3. Fino a che punto dovrebbe spingersi il valutatore nel valutare la profondità del pacchetto di riferimento e la qualità operativa prima che diventi troppo supponente per i contributori?
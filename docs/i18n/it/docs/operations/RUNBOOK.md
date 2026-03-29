# 🔧 System Runbook (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**La guida operativa completa per creare, convalidare, servire, proteggere e risolvere i problemi di Omni Skills.**---

## 1️⃣ Local Development Cycle

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Recommended Development Loop

```bash
npm run validate        # Validate skills + regenerate metadata
npm run taxonomy:report # Show category drift (read-only)
npm run build           # Generate catalog, manifests, archives, CATALOG.md
npm test                # Smoke suite: CLI, API, MCP, sidecar, archives
npx omni-skills ui      # Visual shell for install and service launch
```

| Comando | Cosa fa |
|:--------|:-----|
| `npm esecuzione convalida` | Convalida `SKILL.md`, rigenera `metadata.json`, calcola tassonomia/maturità/qualità/sicurezza |
| `npm esegue la tassonomia:report` | Mostra suggerimenti di deriva della categoria senza riscrivere i file |
| `npm esegui verifica:scanner` | Conferma la copertura dello scanner registrata nei metadati delle competenze generati |
| `npm esegui release:note` | Genera note di rilascio personalizzate da metadati, bundle e cronologia git |
| `npm esegui build` | Rigenera cataloghi/manifesti/archivi/checksum, verifica la copertura dello scanner e gli archivi, ricostruisce `docs/CATALOG.md` |
| `test npm` | Suite di fumo completa su CLI, API, MCP, sidecar e flussi di archivio |---

## 🖥️ Visual Shell

La CLI pubblicata ora include una shell operatore basata su Ink:```bash
npx omni-skills ui
```

Capacità attuali:

- installazione guidata per client conosciuti e percorsi personalizzati
- flusso di ricerca e installazione
- Procedura guidata di avvio MCP
- Procedura guidata di avvio dell'API
- Procedura guidata di lancio A2A
- installazioni recenti e rilanci del servizio
- preimpostazioni di installazione e servizio denominate

Percorso statale locale:```text
~/.omni-skills/state/ui-state.json
```

Ricaderci:```bash
npx omni-skills ui --text
```

---

## 2️⃣ Skill Authoring & Taxonomy

### 📝 Create a New Skill

```bash
mkdir -p skills/my-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-skill/SKILL.md
# Edit the SKILL.md with your content
```

### 🏷️ Check Category Normalization

```bash
npx omni-skills recategorize           # Preview suggestions
npx omni-skills recategorize --write   # Apply canonical categories
```

### ✅ Validate Your Skill

```bash
npm run validate
cat skills/my-skill/metadata.json | jq '.quality, .best_practices, .security'
```

---

## 3️⃣ Security Validation

### 🔍 Default Static Scanning (Always Enabled)

Lo scanner statico controlla automaticamente tutte le abilità:

| Regola Famiglia | Esempi |
|:------------|:---------|
| 🎭Iniezione pronta | Modelli di esfiltrazione, sovrascritture delle istruzioni |
| 💣 Comandi distruttivi | `rm -rf`, `format`, `mkfs` |
| 🔑 Percorsi sospetti | `/etc/shadow`, `~/.ssh`, file delle credenziali |
| ⚠️ Primitivi rischiosi | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Richiede `clamscan` in `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Solo ricerca hash: i file sconosciuti**non vengono caricati**per impostazione predefinita.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Cancello di rilascio rigoroso:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Gli archivi vengono prodotti automaticamente da `npm run build`:

| Uscita | Percorso |
|:-------|:-----|
| 📦 CAP | `dist/archives/<competenza>.zip` |
| 📦 Tarball | `dist/archives/<abilità>.tar.gz` |
| 🔒 Checksum | `dist/archives/<competenza>.checksums.txt` |

`dist/` è stato inserito intenzionalmente in questo repository. Il catalogo, i manifest, i bundle e gli archivi generati sono input di runtime per flussi di installazione CLI, superfici di download API, anteprime MCP, trasferimento di attività A2A, smoke test e verifica del rilascio.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Override opzionale della chiave pubblica:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Se non viene fornita alcuna chiave pubblica, la build ne deriva una tramite `openssl` in `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Politica della versione:

- la patch aumenta fino a ".10".
- dopo ".10", la versione successiva esegue un roll minor e reimposta la patch su ".0".

Esempi:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Scenario | Comando |
|:---------|:--------|
| 📥 Installazione predefinita (Antigravity) | `npx competenze omnicomprensive` |
| 🎯 Competenza specifica + cliente | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Scoperta → installa | `npx omni-skills trova figma --tool cursor --install --yes` |
| 📦 Installazione del pacchetto | `npx omni-skills --cursor --bundle essenziali` |
| 🩺 Verifica installazione | `npx medico con tutte le competenze` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filtra | Bandiera | Esempio |
|:-------|:-----|:--------|
| 📂 Categoria | `--categoria` | `--sviluppo della categoria` |
| 🖥️ Strumento | `--strumento` | `--cursore strumento` |
| ⚠️ Rischio | `--rischio` | `--a rischio sicuro` |
| 📊 Ordina | `--ordina` | `--qualità ordinamento\|migliori pratiche\|livello\|sicurezza\|nome` |
| 🔄Ordina | `--ordine` | `--order asc\|desc` |
| ⭐ Qualità minima | `--min-qualità` | `--min-qualità 80` |
| 📋 Pressione minima | `--min-migliori-pratiche` | `--min-best-practice 60` |
| 🎯 Livello minimo | `--livello-min` | `--min-livello 2` |
| 🛡️Min sicurezza | `--min-sicurezza` | `--min-sicurezza 90` |
| ✅ Validazione | `--stato-validazione` | `--stato di convalida superato` |
| 🛡️ Sicurezza | `--stato-sicurezza` | `--stato di sicurezza superato` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Metodo | Punto finale | Scopo |
|:-------|:---------|:--------|
| `OTTIENI` | `/salute` | Controllo sanitario |
| `OTTIENI` | `/openapi.json` | Specifiche OpenAPI 3.1 |
| `OTTIENI` | `/v1/competenze` | Elenco con filtri |
| `OTTIENI` | `/v1/ricerca` | Ricerca nel testo completo |
| `OTTIENI` | `/v1/skills/:id/archives` | Elenco degli archivi |
| `OTTIENI` | `/v1/skills/:id/download/archive?format=zip` | Scarica l'archivio |
| `OTTIENI` | `/v1/skills/:id/download/archive/checksums` | Manifesto del checksum |### 🔐 Hosted API Hardening

| Caratteristica | Comando |
|:--------|:--------|
| 🔑 Autenticazione del portatore | `OMNI_SKILLS_HTTP_BEARER_TOKEN=sostituiscimi npx api omni-skills` |
| 🗝️ Autenticazione chiave API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Autenticazione runtime amministratore | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=api omni-skills npx admin-secret` |
| 🚦 Limitazione della velocità | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx API omni-skills` |
| 📝 Registrazione degli audit | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx API omni-competenze` |
| 🌍Lista consentita CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱Lista consentita IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx API omni-competenze` |
| 🚧 Modalità manutenzione | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx API omni-competenze` |
| 🔁 Proxy fidato | `OMNI_SKILLS_HTTP_TRUST_PROXY=API omni-skill di loopback npx` |

> 🟢 `/healthz` rimane aperto in base alla progettazione; le rotte del catalogo richiedono l'autenticazione quando abilitata. "GET /admin/runtime" richiede il token di amministrazione quando configurato e restituisce lo snapshot di governance in tempo reale.---

## 8️⃣ MCP Operations

### 🔌 Start MCP Transports

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
```

### 📂 Local Sidecar Mode

```bash
npx omni-skills mcp stream --local    # All transports support --local
```

### ⚙️ Client-Aware Config Targets

Il sidecar ora può visualizzare in anteprima o scrivere la configurazione MCP per:

- Impostazioni utente e progetto Claude
- Configurazione del desktop Claude
- Configurazione utente Cline
- Configurazione del repository e dell'utente CLI di GitHub Copilot
- Configurazione utente cursore e area di lavoro
- Configurazione del codice TOML
- Impostazioni utente e progetto Gemini
- Configurazione utente e progetto Kilo CLI
- Configurazione dell'area di lavoro Kilo
- Impostazioni utente e progetto Kiro
- Configurazione utente e area di lavoro OpenCode
- Continua la configurazione YAML dell'area di lavoro
- Configurazione utente Windsurf
- Configurazione dell'area di lavoro Zed
- area di lavoro `.mcp.json`
- Area di lavoro VS Code e configurazione utente
- Configurazione del contenitore di sviluppo

`configure_client_mcp` restituisce anche "recipes" per cliente in modo che gli operatori ottengano la CLI equivalente o i passaggi di configurazione manuale insieme all'anteprima.### 🧾 MCP Config Preview and Write Flow

Utilizza la CLI unificata quando desideri generare una configurazione senza chiamare direttamente lo strumento MCP:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

La visual shell espone lo stesso flusso di lavoro attraverso:

- "npx interfaccia utente con competenze omnicomprensive".
- "Servizi".
- "Configura client MCP".

Il comando rimane in modalità anteprima a meno che non venga passato `--write`.### 🔐 Hosted MCP Hardening

Stesse variabili di ambiente dell'API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Percorsi protetti**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` rimane aperto.---

## 9️⃣ A2A Operations

### 🤖 Start A2A

```bash
npx omni-skills a2a --port 3335

# Optional: persist tasks to SQLite, enable shared lease polling, and run them via the external worker process
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_WORKER_POLL_MS=250 \
OMNI_SKILLS_A2A_LEASE_MS=4000 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

Il percorso locale predefinito rimane semplice:

- La persistenza `json` o `sqlite` può essere eseguita con il polling della coda disabilitato
- imposta `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` solo quando desideri rivendicazioni multi-lavoratore e failover del lease
- mantenere il coordinamento Redis come opzione ospitata avanzata, non come base### 🧱 Multi-Worker Lease Setup

Esegui più di un nodo A2A sullo stesso archivio SQLite per ottenere il failover basato su lease:```bash
# Worker A
PORT=3335 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-a \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a

# Worker B
PORT=3336 \
OMNI_SKILLS_A2A_INSTANCE_ID=worker-b \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

Se un lavoratore muore mentre un'attività sta "lavorando", un altro lavoratore può recuperarla dopo la scadenza del contratto di locazione e continuare l'esecuzione.### 🟥 Redis Coordination

Per distribuzioni ospitate o multinodo che non desiderano che il coordinamento della coda sia legato all'archivio SQLite condiviso, cambia il coordinatore in Redis:```bash
PORT=3335 \
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/var/lib/omni-skills/a2a-tasks.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_COORDINATION_TYPE=redis \
OMNI_SKILLS_A2A_REDIS_URL=redis://127.0.0.1:6379/0 \
OMNI_SKILLS_A2A_COORDINATION_PREFIX=omni-skills:prod \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a
```

In questa modalità:

- la persistenza vive ancora in JSON o SQLite
- La rivendicazione delle attività e la proprietà del leasing vengono spostate su Redis
- più nodi A2A possono condividere una coda senza fare affidamento sulla coordinazione a livello di riga di SQLite### 📡 Endpoints

| Metodo | Percorso | Scopo |
|:-------|:-----|:--------|
| `OTTIENI` | `/salute` | Controllo sanitario |
| `OTTIENI` | `/.ben noto/agent.json` | Carta Agente (scoperta A2A) |
| "POST" | `/a2a` | Endpoint JSON-RPC per attività e streaming |### 🧭 Supported JSON-RPC Methods

| Metodo | Scopo |
|:-------|:--------|
| `messaggio/invia` | Avvia o continua un'attività |
| `messaggio/flusso` | Avvia un'attività e trasmetti in streaming gli aggiornamenti SSE |
| `task/get` | Sondaggio di un'istantanea dell'attività |
| `attività/annulla` | Annulla un'attività attiva |
| `attività/nuova iscrizione` | Riprendi gli aggiornamenti SSE per un'attività esistente |
| `task/pushNotificationConfig/set` | Registra un webhook push |
| `task/pushNotificationConfig/get` | Leggi una configurazione push |
| `task/pushNotificationConfig/list` | Elenca le configurazioni push per un'attività |
| `tasks/pushNotificationConfig/delete` | Rimuovere una configurazione push |### 📡 Task Lifecycle

Il runtime corrente supporta questi stati delle attività:

- "inviato".
- "lavorare".
- "input richiesto".
- "completato".
- "annullato".
- "fallito".

Le attività vengono mantenute in un file JSON o in un archivio SQLite e ricaricate al riavvio. Le attività completate e interrotte rimangono disponibili. Le attività che erano ancora "inviate" o "in funzione" durante lo spegnimento vengono recuperate con metadati di riavvio espliciti e vengono riprese automaticamente per impostazione predefinita.### 🧪 Example: Start a Task

```bash
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "prepare an install plan for the full-stack bundle on codex-cli" }],
        "metadata": { "operation": "prepare-install-plan" }
      }
    }
  }'
```

### 📶 Example: Stream Updates

```bash
curl -N -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-stream",
    "method": "message/stream",
    "params": {
      "message": {
        "messageId": "msg-stream",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for frontend design" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

---

## 🔟 Release Checklist

### 🏃 Quick Preflight

```bash
npm run smoke
npm pack --dry-run
```

### 📋 Full Release-Grade Pass

```bash
npm run validate           # ✅ Skill validation
npm run verify:scanners    # 🛡️ Scanner coverage verification
npm run taxonomy:report    # 🏷️ Category drift check
npm run build              # 🏗️ Full artifact generation
npm run verify:archives    # 📦 Archive integrity
npm test                   # 🧪 Smoke suite
npm pack --dry-run         # 📦 Package verification
git diff --check           # 📋 Whitespace/formatting
```

### 🚢 GitHub Actions Release Flow

Il repository ora ha due flussi di lavoro:

| Flusso di lavoro | Trigger | Scopo |
|:---------|:--------|:--------|
| `validate.yml` | Premi/PR su "principale" | Compila, testa e verifica che gli artefatti generati siano impegnati |
| `release.yml` | Tag push `v*` o invio manuale | Esegui scanner di livello release, verifica il tag di versione, firma gli artefatti, crea il pacchetto tarball, pubblica su npm e crea il file GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Segreto | Utilizzato da | Scopo |
|:-------|:--------|:--------|
| `VT_API_KEY` o `VIRUSTOTAL` | `release.yml` | Richiedi ricerche hash VirusTotal nelle build di rilascio |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` o `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Chiave privata richiesta per la firma dell'archivio separato in CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` o `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Override opzionale della chiave pubblica; altrimenti derivato dalla chiave privata |
| `NPM_TOKEN` | lavoro `publish-npm` | Autentica `npmpublish` per i rilasci dei tag |### 🦠 Release Scanner Policy

`release.yml` imposta o prepara:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ segreti.VT_API_KEY || segreti.VIRUSTOTAL }}`
- "OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH" dalla memoria temporanea del corridore

Ciò significa che ogni versione basata su tag deve:

- installa e aggiorna ClamAV sul runner
- rigenerare i metadati con ClamAV abilitato
- rigenerare i metadati con VirusTotal abilitato
- decodificare il materiale della chiave di firma CI nella memoria temporanea del corridore
- passare `npm run verify:scanners:strict`
- passare `npm run verify:archives:strict`
- superare i test e la verifica del pacchetto prima della pubblicazione di npm
- generare note di rilascio personalizzate dai metadati del catalogo e dalla cronologia git
- creare una versione GitHub con risorse di rilascio allegate dopo la pubblicazione---

## 1️⃣1️⃣ Environment Variables Reference

| Variabile | Scopo | Predefinito |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Sostituisci il percorso principale del catalogo | Rilevato automaticamente |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Percorsi di scrittura extra consentiti | Radici client note |
| `OMNI_SKILLS_MCP_MODE` | Impostato su "locale" per sidecar | Remoto |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Flag alt per la modalità locale | "0" |
| `OMNI_SKILLS_API_BASE_URL` | URL API pubblica per MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | URL di base pubblica | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Token di autenticazione del portatore | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Chiavi API separate da virgole | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Token di autenticazione del runtime amministratore | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Richieste massime per finestra | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Finestra limite di velocità (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Abilita registrazione di controllo | "0" |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | Output di controllo "json" o "testo" | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Percorso facoltativo del file di registro di controllo | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Lista consentita origine CORS separata da virgole | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Lista consentita IP o CIDR separati da virgole | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Impostazione proxy di attendibilità espressa | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Abilita risposte di manutenzione | "0" |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Manutenzione `Retry-After` secondi | "300" |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Ritardo attività asincrona simulato | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | Archivio attività `json`, `sqlite` o `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | File di archivio attività A2A personalizzato | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Abilita il polling della coda condivisa per i lavoratori consapevoli del lease | "0" |
| `COMPETENZE_OMNI_A2A_TIPO_COORDINAZIONE` | Coordinatore `store`, `sqlite`, `local` o `redis` | "negozio" |
| `OMNI_SKILLS_A2A_REDIS_URL` | URL Redis per coordinamento esterno | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Prefisso chiave Redis per i metadati della coda | `competenze omni:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Intervallo di polling della coda per i lavoratori in leasing | "250" |
| `OMNI_SKILLS_A2A_LEASE_MS` | Durata del leasing prima che un altro lavoratore possa reclamare un'attività | "4000" |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Identificatore stabile del lavoratore per la proprietà del contratto di locazione e la diagnostica | Nome host + PID + suffisso casuale |
| `OMNI_SKILLS_A2A_EXECUTOR` | Esecutore di attività "inline" o "processo" | `in linea` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Sostituisci il comando del lavoratore esterno | Nodo binario |
| `OMNI_SKILLS_A2A_LAVORATORE_ARGS` | Array JSON di argomenti di lavoro esterni | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Riprendi le attività inviate/lavorative recuperate all'avvio | "1" |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Consenti webhook non HTTPS all'esterno di localhost | "0" |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Abilita la scansione ClamAV | "0" |
| `VT_API_KEY` | Chiave API VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Chiave privata per la firma | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Override della chiave pubblica | Derivato automaticamente |---

## 1️⃣2️⃣ Troubleshooting

### 🔄 Catalog Mismatch or Stale Metadata

```bash
npm run build
```

### 🏷️ Skill Category Looks Wrong

```bash
npx omni-skills recategorize
```

### 📦 Archive Verification Fails

1. Ricostruisci con `npm run build`
2. Eseguire nuovamente `npm run verify:archives`
3. Se la firma è abilitata, conferma la chiave pubblica e la disponibilità di `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Conferma che `VT_API_KEY` esiste nei segreti del repository
- Conferma che `freshclam` è riuscito sul corridore
- Ricostruisci localmente con `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Eseguire di nuovo `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Conferma che `NPM_TOKEN` esiste nei segreti del repository
- Conferma che il tag Git corrisponda esattamente alla versione "package.json".
- Verifica che il file tar caricato da "release-verify" esista negli artefatti del flusso di lavoro### ✍️ Release Signing Fails in CI

- Conferma che `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` o `OMNI_SKILLS_SIGN_PRIVATE_KEY` esista nei segreti del repository
- Se fornisci una chiave segreta pubblica, verifica che corrisponda alla chiave privata
- Conferma che `openssl` è disponibile e che la chiave privata è formattata PEM
- Ricostruisci localmente con `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Eseguire di nuovo `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- Verifica `OMNI_SKILLS_HTTP_BEARER_TOKEN` o `OMNI_SKILLS_HTTP_API_KEYS`
- Includere l'intestazione "Autorizzazione: Bearer <token>" o "x-api-key".### 🚦 API/MCP Returns `429 Too Many Requests`

- Aumenta "OMNI_SKILLS_RATE_LIMIT_MAX".
- Ampliare "OMNI_SKILLS_RATE_LIMIT_WINDOW_MS".
- Ridurre il traffico burst da client o sonde### 🛂 API/MCP Admin Runtime Returns `401`

- Verifica `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Invia `x-admin-token: <token>` o `Autorizzazione: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Disabilita `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Utilizzare "/healthz" per le sonde di attività durante la manutenzione
- Utilizzare `/admin/runtime` con il token di amministrazione per la diagnostica dell'operatore### 🌍 Browser Requests Fail CORS Validation

- Verifica `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Includi lo schema e l'host esatti, ad esempio "https://app.example.com".### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Verifica `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Verifica `OMNI_SKILLS_A2A_REDIS_URL`
- Controlla la connettività Redis da ogni nodo
- Controlla "/healthz" per l'istantanea "coordinazione".### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

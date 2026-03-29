# 🌐 Catalog API Surface (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**API HTTP di sola lettura per rilevamento di competenze, ricerca, confronto, pianificazione dell'installazione e download di artefatti.**---

## 📊 Status

| Caratteristica | Stato |
|:--------|:------|
| ✅ Endpoint del catalogo | Implementato |
| ✅ Autenticazione (portatore + chiave API) | Implementato |
| ✅ Autenticazione runtime amministratore | Implementato |
| ✅ Limitazione della tariffa | Implementato |
| ✅ Registrazione degli audit | Implementato |
| ✅ CORS e liste consentite IP | Implementato |
| ✅ Modalità manutenzione | Implementato |
| ✅ Download dell'archivio | Implementato |
| ✅ Specifiche OpenAPI | Implementato |
| ⚠️ Backend di governance | Linea di base in-process basata sull'ambiente; gateway esterno o IdP ancora facoltativi |---

## 🎯 Purpose

L'API fornisce una superficie in stile registro per:

- 📋 Elencare e filtrare le competenze per qualità, sicurezza, categoria, rischio e altro
- 📌 Recupero dei manifesti delle abilità individuali
- 🔎 Ricerca full-text e confronto multi-abilità
- 📦 Elenco dei pacchetti con disponibilità
- 📐 Generazione del piano di installazione di sola lettura
- 📥 Download di artefatti, archivi e manifest di checksum generati

Questo stesso catalogo e superficie manifest è anche la base per:

- Pianificazione dell'installazione della CLI locale
- Risposte di rilevamento di sola lettura MCP
- Rilevamento A2A e trasferimento del piano di installazione
- potenziali cataloghi privati con autenticazione esterna sovrapposta---

## Avvio Rapido

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**Predefiniti**: `127.0.0.1:3333`---

## 🔐 Security Controls

Tutti i controlli di sicurezza sono guidati dall'ambiente e opzionali:

| Controllo | Variabile | Esempio |
|:--------|:---------|:--------|
| 🔑**Autenticazione del portatore**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `sostituiscimi` |
| 🗝️**Autenticazione chiave API**| `OMNI_SKILLS_HTTP_API_KEYS` | `tasto-a,tasto-b` |
| 🛂**Autenticazione amministratore**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-segreto` |
| 🚦**Limitazione della velocità**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | "60" / "60000" |
| 📝**Registrazione di controllo**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | "1" |
| 🗂️**Formato audit**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` o `testo` |
| 📄**File di audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Lista consentita CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Lista consentita IP**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Proxy attendibile**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Modalità manutenzione**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | "1" |
| ⏱️**Riprova dopo**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | "300" |

**Comportamento:**
- 🟢 `/healthz` rimane**sempre non autenticato**
- 🔒 Tutti gli altri percorsi richiedono l'autenticazione quando l'autenticazione è abilitata
- 🛂 `/admin/runtime` richiede il token amministratore quando abilitato
- 🚦 La limitazione della velocità è in corso con le intestazioni di risposta "X-RateLimit-*".
- 🧾 Ogni risposta porta `X-Request-Id`
- 🚧 La modalità di manutenzione restituisce "503" per percorsi non sanitari e non amministrativi### ✅ Current governance decision

L'attuale direzione del progetto è quella di**riutilizzare lo stesso formato di catalogo per distribuzioni pubbliche o private**e sovrapporre l'autenticazione esternamente quando necessario.

Ciò significa:

- la forma del manifest e dell'API rimane condivisa
- Le distribuzioni self-hosted e locali possono rimanere sulla linea di base in-process
- La governance ospitata più avanzata può essere spostata successivamente su un gateway esterno o su un livello di autenticazione aziendale senza biforcare il modello dati### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Metodo | Percorso | Descrizione |
|:-------|:-----|:------------|
| `OTTIENI` | `/salute` | Controllo dello stato (non autenticato) |
| `OTTIENI` | `/openapi.json` | Specifica dinamica OpenAPI 3.1 |
| `OTTIENI` | `/admin/runtime` | Snapshot di governance e runtime (autenticazione amministratore quando abilitata) |### 📚 Catalog & Skills

| Metodo | Percorso | Descrizione |
|:-------|:-----|:------------|
| `OTTIENI` | `/v1/competenze` | Elenca le competenze con i filtri |
| `OTTIENI` | `/v1/competenze/:id` | Ottieni il manifesto delle abilità individuali |
| `OTTIENI` | `/v1/ricerca` | Ricerca nel testo completo |
| `OTTIENI` | `/v1/compare?ids=id1,id2` | Confronta più competenze |
| `OTTIENI` | `/v1/bundle` | Elenco pacchetti con disponibilità |
| "POST" | `/v1/installa/piano` | Genera un piano di installazione |### 🔎 List/Search Filters

| Filtra | Esempio |
|:-------|:--------|
| "categoria" | `?categoria=sviluppo` |
| "strumento" | `?strumento=cursore` |
| `rischio` | `?rischio=sicuro` |
| "ordinare" | `?sort=qualità\|migliori pratiche\|livello\|sicurezza\|nome` |
| `ordine` | `?ordine=asc\|desc` |
| `min_qualità` | `?min_qualità=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `livello_min` | `?livello_min=2` |
| `min_sicurezza` | `?min_security=90` |
| `stato_validazione` | `?validation_status=superato` |
| `stato_sicurezza` | `?security_status=superato` |### 📦 Install Plan Body

```json
{
  "skill_ids": ["omni-figma"],
  "bundle_ids": ["full-stack"],
  "tools": ["cursor"],
  "target_path": "~/.cursor/skills",
  "dry_run": true
}
```

### 📥 Artifact Downloads

| Metodo | Percorso | Descrizione |
|:-------|:-----|:------------|
| `OTTIENI` | `/v1/catalogo/download` | Scarica il catalogo completo |
| `OTTIENI` | `/v1/skills/:id/artifacts` | Elenca gli artefatti delle abilità |
| `OTTIENI` | `/v1/skills/:id/archives` | Elenca gli archivi delle competenze |
| `OTTIENI` | `/v1/competenze/:id/download` | Tutti i link per il download disponibili |
| `OTTIENI` | `/v1/skills/:id/download/manifest` | Manifesto abilità JSON |
| `OTTIENI` | `/v1/skills/:id/download/entrypoint` | Abilità SKILL.md |
| `OTTIENI` | `/v1/skills/:id/download/artifact?path=<percorso>` | Artefatto specifico |
| `OTTIENI` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Archivio competenze |
| `OTTIENI` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Firma staccata |
| `OTTIENI` | `/v1/skills/:id/download/archive/checksums` | Checksum SHA-256 |---

## 🔗 Link Enrichment

Quando le richieste vengono gestite tramite l'API, il server**arricchisce automaticamente**manifesti, elenchi di artefatti e piani di installazione con URL assoluti derivati ​​dall'origine della richiesta in entrata. Si tratta di un arricchimento del runtime, non inserito in `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**I piani di installazione sono anteprime, non scritture remote.**

L'API non viene mai installata sul computer del chiamante. Restituisce:
- 📌 Metadati delle competenze selezionati
- ⚠️ Avvisi per i membri del bundle mancanti
- 🖥️ Comandi CLI concreti da eseguire localmente
- 🔗 URL di download pubblici quando è disponibile l'origine della richiesta---

## 🔌 Relationship to MCP

Il server MCP riutilizza gli stessi URL API pubblici quando configurato:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Ciò consente alle anteprime di installazione di MCP di restituire URL manifest e artefatti concreti anziché solo percorsi di repository locali.---

## 🧭 Admin Runtime Snapshot

"GET /admin/runtime" restituisce uno snapshot di governance utile per la diagnostica ospitata:

- metodi di autenticazione attivi
- stato di autenticazione dell'amministratore
- finestra del limite di tariffa e max
- Lista consentita CORS
- Lista consentita IP
- stato della modalità manutenzione
- destinazione e formato dell'audit
- totali del catalogo corrente
- richiedere l'eco dell'ID per la tracciabilità
# 🔧 System Runbook (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Ghidul operațional complet pentru construirea, validarea, servirea, securizarea și depanarea abilităților Omni.**---

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

| Comanda | Ce face |
|:--------|:-------------|
| `npm run validate` | Validează `SKILL.md`, regenerează `metadata.json`, calculează taxonomie/maturitate/calitate/securitate |
| `npm run taxonomy:report` | Afișează sugestii de deplasare a categoriilor fără a rescrie fișierele |
| `npm run verify:scanners` | Confirmă acoperirea scanerului înregistrată în metadatele abilităților generate |
| `npm run release:notes` | Generează note de lansare personalizate din metadate, pachete și istoricul git |
| `npm run build` | Regenerează catalogul/manifestele/arhivele/suma de verificare, verifică acoperirea scanerului și arhivele, reconstruiește `docs/CATALOG.md` |
| `npm test` | Suită completă Smoke în fluxurile CLI, API, MCP, sidecar și arhivă |---

## 🖥️ Visual Shell

CLI-ul publicat include acum un shell de operator bazat pe cerneală:```bash
npx omni-skills ui
```

Capabilitati curente:

- instalare ghidată pentru clienți cunoscuți și căi personalizate
- flux de căutare-apoi-instalare
- Asistent de lansare MCP
- Asistent de lansare API
- Asistent de lansare A2A
- instalări recente și relansări de servicii
- presetări de instalare și service denumite

Calea de stat locală:```text
~/.omni-skills/state/ui-state.json
```

Da înapoi:```bash
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

Scanerul static verifică automat toate abilitățile:

| Rule Family | Exemple |
|:-------------|:---------|
| 🎭 Injectare promptă | Modele de exfiltrare, înlocuiri de instrucțiuni |
| 💣 Comenzi distructive | `rm -rf`, `format`, `mkfs` |
| 🔑 Căi suspecte | `/etc/shadow`, `~/.ssh`, fișiere de acreditări |
| ⚠️ Primitive riscante | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Necesită `clamscan` în `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Numai căutare hash — fișierele necunoscute sunt**nu sunt încărcate**în mod implicit.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Poarta de eliberare stricta:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Arhivele sunt produse automat de `npm run build`:

| Ieșire | Calea |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Sume de control | `dist/archives/<skill>.checksums.txt` |

`dist/` este comis intenționat în acest depozit. Catalogul, manifestele, pachetele și arhivele generate sunt intrări de rulare pentru fluxurile de instalare CLI, suprafețele de descărcare API, previzualizările MCP, transferul sarcinilor A2A, testele de fum și verificarea versiunii.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Suprascrierea opțională a cheii publice:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Dacă nu este furnizată nicio cheie publică, construcția derivă una prin `openssl` în `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Politica de versiune:

- patch-uri crește până la `.10`
- după `.10`, următoarea lansare rulează minor și resetează patch-ul la `.0`

Exemple:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Scenariu | Comanda |
|:---------|:--------|
| 📥 Instalare implicită (Antigravity) | `npx omni-skills` |
| 🎯 Abilități specifice + client | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Descoperire → instalare | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Instalare pachet | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Verificați instalarea | `npx omni-skills doctor` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filtru | Steagul | Exemplu |
|:-------|:-----|:--------|
| 📂 Categoria | `--categorie` | `--dezvoltarea categoriei` |
| 🖥️ Instrument | `--instrument` | `--cursor instrument` |
| ⚠️ Risc | `--risc` | `--risc safe` |
| 📊 Sortează | `--sort` | `--sort quality\|cele mai bune practici\|nivel\|securitate\|nume` |
| 🔄 Comanda | `--comanda` | `--order asc\|desc` |
| ⭐ Calitate min | `--min-calitate` | `--min-calitate 80` |
| 📋 BP min | `--min-bune-practices` | `--min-bune-practici 60` |
| 🎯 Nivel minim | `--min-level` | `--min-nivel 2` |
| 🛡️ Securitate minimă | `--min-securitate` | `--min-securitate 90` |
| ✅ Validare | `--status-validare` | `--status-validare trecut` |
| 🛡️ Securitate | `--starea-securității` | `--starea-securitate a trecut` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Metoda | Punct final | Scop |
|:-------|:---------|:---------|
| `GET` | `/healthz` | Verificarea sănătății |
| `GET` | `/openapi.json` | Specificație OpenAPI 3.1 |
| `GET` | `/v1/skills` | Lista cu filtre |
| `GET` | `/v1/search` | Căutare integrală |
| `GET` | `/v1/skills/:id/archives` | Lista arhivă |
| `GET` | `/v1/skills/:id/download/archive?format=zip` | Descărcați arhiva |
| `GET` | `/v1/skills/:id/download/archive/checksums` | Manifestul sumei de control |### 🔐 Hosted API Hardening

| Caracteristica | Comanda |
|:--------|:--------|
| 🔑 Autentificare purtător | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ Autentificare cheie API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Admin runtime auth | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Limitarea ratei | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Înregistrare de audit | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 Lista de permise CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 Lista permisă IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Mod de întreținere | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 Proxy de încredere | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 `/healthz` rămâne deschis prin design; rutele de catalog necesită autentificare atunci când sunt activate. `GET /admin/runtime` necesită jetonul de administrator atunci când este configurat și returnează instantaneul de guvernare live.---

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

Vehiculul secundar poate acum previzualiza sau scrie configurația MCP pentru:

- Setări utilizator și proiect Claude
- Configurare Claude Desktop
- Configurare utilizator Cline
- Configurarea utilizatorului și a depozitului GitHub Copilot CLI
- Utilizatorul cursorului și configurația spațiului de lucru
- Configurare Codex TOML
- Setări utilizator și proiect Gemini
- Config utilizator și proiect Kilo CLI
- Configurare spațiu de lucru Kilo
- Setări utilizator și proiect Kiro
- Configurare utilizator și spațiu de lucru OpenCode
- Continuați configurarea YAML a spațiului de lucru
- Configurare utilizator Windsurf
- Configurarea spațiului de lucru Zed
- spațiu de lucru `.mcp.json`
- Spațiul de lucru VS Code și configurația utilizatorului
- Configurare Dev Container

`configure_client_mcp` returnează, de asemenea, `rețete` pentru fiecare client, astfel încât operatorii să primească pașii echivalenti CLI sau de configurare manuală împreună cu previzualizarea.### 🧾 MCP Config Preview and Write Flow

Utilizați CLI unificat atunci când doriți să generați configurații fără a apela direct instrumentul MCP:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Învelișul vizual expune același flux de lucru prin:

- `npx omni-skills ui`
- `Servicii`
- `Configurare client MCP`

Comanda rămâne în modul de previzualizare dacă nu trece `--write`.### 🔐 Hosted MCP Hardening

Aceleași variații de mediu ca și API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Rute protejate**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` rămâne deschis.---

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

Calea locală implicită rămâne mai întâi simplă:

- Persistența `json` sau `sqlite` poate rula cu sondarea în coadă dezactivată
- setați `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` numai atunci când doriți revendicarea multi-lucrători și failover-ul de închiriere
- păstrați coordonarea Redis ca opțiune avansată găzduită, nu ca linie de bază### 🧱 Multi-Worker Lease Setup

Rulați mai mult de un nod A2A pe același magazin SQLite pentru a obține failover bazat pe leasing:```bash
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

Dacă un lucrător moare în timp ce o sarcină „funcționează”, un alt muncitor o poate revendica după expirarea contractului de închiriere și poate continua execuția.### 🟥 Redis Coordination

Pentru implementările găzduite sau cu mai multe noduri care nu doresc coordonarea cozii legată de magazinul SQLite partajat, comutați coordonatorul la Redis:```bash
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

În acest mod:

- persistența încă trăiește în JSON sau SQLite
- revendicarea sarcinilor și transferul dreptului de proprietate la Redis
- mai multe noduri A2A pot partaja o coadă fără a se baza pe coordonarea la nivel de rând SQLite### 📡 Endpoints

| Metoda | Calea | Scop |
|:-------|:-----|:--------|
| `GET` | `/healthz` | Verificarea sănătății |
| `GET` | `/.well-cunoscut/agent.json` | Card de agent (descoperire A2A) |
| `POST` | `/a2a` | Punct final JSON-RPC pentru sarcini și streaming |### 🧭 Supported JSON-RPC Methods

| Metoda | Scop |
|:-------|:--------|
| `mesaj/trimite` | Începeți sau continuați o sarcină |
| `mesaj/flux` | Porniți o sarcină și transmiteți în flux actualizări SSE |
| `tasks/get` | Sondaj un instantaneu al unei sarcini |
| `sarcini/anulează` | Anulează o sarcină activă |
| `sarcini/reabonare` | Reluați actualizările SSE pentru o sarcină existentă |
| `tasks/pushNotificationConfig/set` | Înregistrați un webhook push |
| `tasks/pushNotificationConfig/get` | Citiți o configurare push |
| `tasks/pushNotificationConfig/list` | Listează configurațiile push pentru o sarcină |
| `tasks/pushNotificationConfig/delete` | Eliminați o configurare push |### 📡 Task Lifecycle

Runtime-ul curent acceptă aceste stări de activitate:

- `depus`
- `de lucru`
- `input-required`
- `terminat`
- `anulat`
- `eșuat`

Sarcinile sunt păstrate fie într-un fișier JSON, fie într-un magazin SQLite și reîncărcate la repornire. Sarcinile finalizate și întrerupte rămân disponibile. Sarcinile care au fost încă „trimise” sau „funcționează” în timpul opririi sunt recuperate cu metadate explicite de repornire și sunt reluate automat în mod implicit.### 🧪 Example: Start a Task

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

Depozitul are acum două fluxuri de lucru:

| Flux de lucru | Trigger | Scop |
|:---------|:--------|:--------|
| `validate.yml` | Apăsați/PR la `principal` | Creați, testați și confirmați că artefactele generate sunt comise |
| `release.yml` | Tag push `v*` sau expediere manuală | Rulați scanere de calitate, verificați eticheta versiunii, semnați artefacte, împachetați tarball-ul, publicați în npm și creați versiunea GitHub |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Secret | Folosit de | Scop |
|:-------|:--------|:---------|
| `VT_API_KEY` sau `VIRUSTOTAL` | `release.yml` | Necesită căutări hash VirusTotal în versiunile de versiuni |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` sau `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Cheie privată necesară pentru semnarea arhivei detașate în CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` sau `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Suprascriere opțională a cheii publice; altfel derivat din cheia privată |
| `NPM_TOKEN` | job `public-npm` | Autentificați `npm publish` pentru lansările de etichete |### 🦠 Release Scanner Policy

`release.yml` setează sau pregătește:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrete.VT_API_KEY || secrete.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` din stocarea temporară a alergătorului

Aceasta înseamnă că fiecare lansare bazată pe etichete trebuie:

- instalați și reîmprospătați ClamAV pe runner
- regenerați metadatele cu ClamAV activat
- regenerați metadatele cu VirusTotal activat
- decodați materialul cheie de semnare CI în stocarea termică a alergătorului
- trece `npm run verify:scanners:strict`
- trece `npm run verify:archives:strict`
- trece testele și verificarea pachetului înainte de publicarea npm
- generați note de lansare personalizate din metadatele catalogului și istoricul git
- creați o versiune GitHub cu elemente de lansare atașate după publicare---

## 1️⃣1️⃣ Environment Variables Reference

| Variabila | Scop | Implicit |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Ignorați calea rădăcină a catalogului | Detectat automat |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Căi de scriere suplimentare permise | Rădăcini cunoscute ale clientului |
| `OMNI_SKILLS_MCP_MODE` | Setați la `local` pentru sidecar | Telecomanda |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Flag Alt pentru modul local | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Adresa URL publică API pentru MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Adresă URL de bază publică | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Jeton de autorizare purtător | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Chei API separate prin virgulă | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Jeton de autentificare pentru timpul de execuție admin | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max solicitări pe fereastră | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Fereastra de limitare a ratei (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Activați înregistrarea de audit | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | Ieșire de audit `json` sau `text` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Cale opțională a fișierului jurnal de audit | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Lista permisă pentru origine CORS, separată prin virgulă | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Lista permisă de IP sau CIDR separată prin virgulă | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Setare proxy de încredere expres | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Activați răspunsurile de întreținere | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Întreținere `Reîncercați-După` secunde | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Întârziere simulată a sarcinii asincrone | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite` sau magazin de activități `memory` | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Fișier personalizat de stocare de activități A2A | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Activați interogarea în coadă partajată pentru lucrătorii care cunosc închirierea | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | Coordonator `store`, `sqlite`, `local` sau `redis` | `magazin` |
| `OMNI_SKILLS_A2A_REDIS_URL` | URL Redis pentru coordonare externă | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Prefixul cheii Redis pentru metadatele cozii | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Interval de interogare la coadă pentru lucrătorii de leasing | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Durata contractului de închiriere înainte ca un alt lucrător să poată revendica o sarcină | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Identificator stabil al lucrătorului pentru proprietatea de leasing și diagnosticare | Nume gazdă + PID + sufix aleatoriu |
| `OMNI_SKILLS_A2A_EXECUTOR` | executor de sarcini `inline` sau `process` | `inline` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Ignorați comanda lucrătorului extern | Nod binar |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | Matrice JSON de argumente de lucru extern | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Reluați sarcinile trimise/de lucru recuperate la boot | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Permiteți webhook-uri non-HTTPS în afara localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Activați scanarea ClamAV | `0` |
| `VT_API_KEY` | Cheia API VirusTotal | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Cheie privată pentru semnare | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Anularea cheii publice | Derivat automat |---

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

1. Reconstruiți cu `npm run build`
2. Reluați `npm run verify:archives`
3. Dacă semnarea este activată, confirmați cheia publică și disponibilitatea „openssl”.### 🦠 Release Workflow Fails on Scanner Coverage

- Confirmați că `VT_API_KEY` există în secretele depozitului
- Confirmați că `freshclam` a reușit pe alergător
- Reconstruiți local cu `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Reluați `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Confirmați că `NPM_TOKEN` există în secretele depozitului
- Confirmați că eticheta Git se potrivește exact cu versiunea `package.json`
- Verificați dacă tarball-ul încărcat de „release-verify” există în artefactele fluxului de lucru### ✍️ Release Signing Fails in CI

- Confirmați că `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` sau `OMNI_SKILLS_SIGN_PRIVATE_KEY` există în secretele depozitului
- Dacă furnizați o cheie publică secretă, confirmați că se potrivește cu cheia privată
- Confirmați că `openssl` este disponibil și cheia privată este formatată PEM
- Reconstruiți local cu `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Reluați `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- Verificați `OMNI_SKILLS_HTTP_BEARER_TOKEN` sau `OMNI_SKILLS_HTTP_API_KEYS`
- Includeți antetul „Authorization: Bearer <token>” sau „x-api-key”### 🚦 API/MCP Returns `429 Too Many Requests`

- Creșteți `OMNI_SKILLS_RATE_LIMIT_MAX`
- Extindeți `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Reduceți traficul în rafală de la clienți sau sonde### 🛂 API/MCP Admin Runtime Returns `401`

- Verificați `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Trimite `x-admin-token: <token>` sau `Authorization: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Dezactivați `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Utilizați `/healthz` pentru sondele de viață în timpul întreținerii
- Folosiți `/admin/runtime` cu simbolul de administrator pentru diagnosticarea operatorului### 🌍 Browser Requests Fail CORS Validation

- Verificați `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Includeți schema exactă și gazda, de exemplu `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Verificați `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Verificați `OMNI_SKILLS_A2A_REDIS_URL`
- Verificați conectivitatea Redis de la fiecare nod
- Inspectați `/healthz` pentru instantaneul de `coordonare`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

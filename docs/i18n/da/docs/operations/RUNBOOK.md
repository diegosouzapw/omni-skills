# 🔧 System Runbook (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Den komplette driftsvejledning til opbygning, validering, betjening, sikring og fejlfinding af Omni Skills.**---

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

| Kommando | Hvad det gør |
|:--------|:------------|
| `npm run validate` | Validerer `SKILL.md`, regenererer `metadata.json`, beregner taksonomi/modenhed/kvalitet/sikkerhed |
| `npm køre taksonomi:rapport` | Viser forslag til kategoridrift uden at omskrive filer |
| `npm run verify:scanners` | Bekræfter scannerdækning registreret i genererede færdighedsmetadata |
| `npm run release:notes` | Genererer brugerdefinerede udgivelsesnoter fra metadata, bundter og git-historik |
| `npm run build` | Genskaber katalog/manifester/arkiver/kontrolsummer, verificerer scannerdækning og arkiver, genopbygger `docs/CATALOG.md` |
| `npm test` | Fuld røgpakke på tværs af CLI, API, MCP, sidevogn og arkivstrømme |---

## 🖥️ Visual Shell

Den offentliggjorte CLI inkluderer nu en blæk-baseret operatørskal:```bash
npx omni-skills ui
```

Nuværende muligheder:

- guidet installation for kendte klienter og brugerdefinerede stier
- søg-så-installer flow
- MCP-startguide
- API-startguide
- A2A lanceringsguide
- seneste installationer og servicerelanceringer
- navngivne installations- og serviceforudindstillinger

Lokal statssti:```text
~/.omni-skills/state/ui-state.json
```

Fallback:```bash
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

Den statiske scanner kontrollerer automatisk alle færdigheder:

| Regel Familie | Eksempler |
|:------------|:--------|
| 🎭 Hurtig indsprøjtning | Eksfiltrationsmønstre, instruktionstilsidesættelser |
| 💣 Destruktive kommandoer | `rm -rf`, `format`, `mkfs` |
| 🔑 Mistænkelige stier | `/etc/shadow`, `~/.ssh`, legitimationsfiler |
| ⚠️ Risikable primitiver | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Kræver `clamscan` i `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Kun Hash-opslag — ukendte filer er**ikke uploadet**som standard.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Strenge frigivelsesåbning:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Arkiver produceres automatisk af `npm run build`:

| Udgang | Sti |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Kontrolsummer | `dist/archives/<skill>.checksums.txt` |

`dist/` er begået med vilje i dette lager. Det genererede katalog, manifester, bundter og arkiver er runtime-input til CLI-installationsflows, API-downloadoverflader, MCP-forhåndsvisninger, A2A-opgaveoverdragelse, røgtest og frigivelsesbekræftelse.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Valgfri offentlig nøgletilsidesættelse:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Hvis der ikke leveres en offentlig nøgle, udleder buildet en via `openssl` til `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Versionspolitik:

- patch-stigninger indtil `.10`
- efter `.10` ruller den næste udgivelse mindre og nulstiller patch til `.0`

Eksempler:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Scenarie | Kommando |
|:--------|:--------|
| 📥 Standardinstallation (Antigravity) | `npx omni-skills` |
| 🎯 Specifik færdighed + klient | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Opdagelse → installer | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Bundle installation | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Bekræft installation | `npx omni-skills læge` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filter | Flag | Eksempel |
|:-------|:-----|:--------|
| 📂 Kategori | `--kategori` | `--kategori udvikling` |
| 🖥️ Værktøj | `--værktøj` | `--værktøjsmarkør` |
| ⚠️ Risiko | `--risiko` | `--risikosikker` |
| 📊 Sorter | `--sort` | `--sort kvalitet\|bedste praksis\|niveau\|sikkerhed\|navn` |
| 🔄 Bestil | `--ordre` | `--ordre asc\|desc` |
| ⭐ Min kvalitet | `--min-kvalitet` | `--min-kvalitet 80` |
| 📋 Min BP | `--min-best-practices` | `--min-best-practices 60` |
| 🎯 Min. niveau | `--min-niveau` | `--min-niveau 2` |
| 🛡️ Min sikkerhed | `--min-sikkerhed` | `--min-sikkerhed 90` |
| ✅ Validering | `--valideringsstatus` | `--valideringsstatus bestået` |
| 🛡️ Sikkerhed | `--sikkerhedsstatus` | `--sikkerhedsstatus bestået` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Metode | Slutpunkt | Formål |
|:-------|:--------|:--------|
| `GET` | `/healthz` | Sundhedstjek |
| `GET` | `/openapi.json` | OpenAPI 3.1 spec |
| `GET` | `/v1/færdigheder` | Liste med filtre |
| `GET` | `/v1/søg` | Fuldtekstsøgning |
| `GET` | `/v1/skills/:id/archives` | Arkivliste |
| `GET` | `/v1/skills/:id/download/archive?format=zip` | Download arkiv |
| `GET` | `/v1/skills/:id/download/archive/checksums` | Kontrolsummanifest |### 🔐 Hosted API Hardening

| Funktion | Kommando |
|:--------|:--------|
| 🔑 Ihændehaver auth | `OMNI_SKILLS_HTTP_BEARER_TOKEN=erstat-mig npx omni-skills api` |
| 🗝️ API nøgle auth | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Admin runtime auth | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-hemmelige npx omni-skills api` |
| 🚦 Satsbegrænsende | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Revisionslogning | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 CORS tilladelsesliste | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 IP-tilladelsesliste | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Vedligeholdelsestilstand | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 Trusted proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> `/healthz` forbliver åben ved design; katalogruter kræver godkendelse, når de er aktiveret. `GET /admin/runtime` kræver admin-tokenet, når det er konfigureret, og returnerer øjebliksbilledet af live governance.---

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

Sidevognen kan nu forhåndsvise eller skrive MCP-konfiguration for:

- Claude bruger- og projektindstillinger
- Claude Desktop config
- Cline brugerkonfiguration
- GitHub Copilot CLI-bruger- og lagerkonfiguration
- Markørbruger- og arbejdsområdekonfiguration
- Codex TOML konfig
- Gemini bruger- og projektindstillinger
- Kilo CLI bruger- og projektkonfiguration
- Kilo arbejdsområde konfig
- Kiro bruger- og projektindstillinger
- OpenCode bruger og arbejdsområde konfiguration
- Fortsæt workspace YAML config
- Windsurf brugerkonfig
- Zed workspace config
- arbejdsområde `.mcp.json`
- VS Code arbejdsområde og brugerkonfig
- Dev Container config

`configure_client_mcp` returnerer også pr-klient `opskrifter`, så operatører får de tilsvarende CLI eller manuelle opsætningstrin sammen med forhåndsvisningen.### 🧾 MCP Config Preview and Write Flow

Brug den forenede CLI, når du ønsker konfigurationsgenerering uden at kalde MCP-værktøjet direkte:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Den visuelle skal afslører den samme arbejdsgang gennem:

- `npx omni-skills ui`
- `Tjenester`
- `Konfigurer MCP-klient`

Kommandoen forbliver i preview-tilstand, medmindre `--write` er bestået.### 🔐 Hosted MCP Hardening

Samme env vars som API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Beskyttede ruter**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> `/healthz` forbliver åben.---

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

Den lokale standardsti forbliver simpel-først:

- 'json' eller 'sqlite' persistens kan køre med kø polling deaktiveret
- indstil kun `OMNI_SKILLS_A2A_QUEUE_ENABLED=1`, når du ønsker multi-worker krav og leasing failover
- Hold Redis-koordination som en avanceret hostet mulighed, ikke baseline### 🧱 Multi-Worker Lease Setup

Kør mere end én A2A-node mod det samme SQLite-lager for at få leasingbaseret failover:```bash
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

Hvis en medarbejder dør, mens en opgave "fungerer", kan en anden arbejder kræve den tilbage efter lejekontraktens udløb og fortsætte udførelsen.### 🟥 Redis Coordination

For hostede eller multi-node-implementeringer, der ikke ønsker køkoordinering knyttet til det delte SQLite-lager, skal du skifte koordinatoren til Redis:```bash
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

I denne tilstand:

- vedholdenhed lever stadig i JSON eller SQLite
- opgavekrav og lejemål flytter til Redis
- flere A2A-noder kan dele en kø uden at være afhængig af SQLite-koordinering på rækkeniveau### 📡 Endpoints

| Metode | Sti | Formål |
|:-------|:-----|:--------|
| `GET` | `/healthz` | Sundhedstjek |
| `GET` | `/.well-known/agent.json` | Agentkort (A2A-opdagelse) |
| `POST` | `/a2a` | JSON-RPC slutpunkt til opgaver og streaming |### 🧭 Supported JSON-RPC Methods

| Metode | Formål |
|:-------|:--------|
| `besked/send` | Start eller fortsæt en opgave |
| `besked/stream` | Start en opgave og stream SSE-opdateringer |
| `opgaver/få` | Afstemning et øjebliksbillede af en opgave |
| `opgaver/annuller` | Annuller en aktiv opgave |
| `opgaver/gentilmeld` | Genoptag SSE-opdateringer for en eksisterende opgave |
| `tasks/pushNotificationConfig/set` | Registrer en push webhook |
| `tasks/pushNotificationConfig/get` | Læs en push-konfiguration |
| `tasks/pushNotificationConfig/list` | Liste push-konfigurationer for en opgave |
| `tasks/pushNotificationConfig/delete` | Fjern en push-konfiguration |### 📡 Task Lifecycle

Den aktuelle kørselstid understøtter disse opgavetilstande:

- `indsendt`
- 'arbejde'
- `input-påkrævet`
- 'afsluttet'
- 'annulleret'
- 'mislykkedes'

Opgaver fortsættes til enten en JSON-fil eller en SQLite-butik og genindlæses ved genstart. Afsluttede og afbrudte opgaver forbliver tilgængelige. Opgaver, der stadig var 'indsendt' eller 'fungerede' under nedlukning, gendannes med eksplicitte genstartsmetadata og genoptages automatisk som standard.### 🧪 Example: Start a Task

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

Lagret har nu to arbejdsgange:

| Arbejdsgang | Udløser | Formål |
|:--------|:--------|:--------|
| `validate.yml` | Skub/PR til 'main' | Byg, test og bekræft, at genererede artefakter er begået |
| `release.yml` | Tag push `v*` eller manuel afsendelse | Kør udgivelsesgrade scannere, bekræft versionsmærket, underskriv artefakter, pak tarballen, udgiv til npm, og opret GitHub-udgivelsen |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Hemmelighed | Brugt af | Formål |
|:-------|:--------|:--------|
| `VT_API_KEY` eller `VIRUSTOTAL` | `release.yml` | Kræv VirusTotal-hash-opslag i udgivelsesbuilds |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` eller `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Påkrævet privat nøgle til adskilt arkivsignering i CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` eller `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Valgfri offentlig nøgle tilsidesættelse; ellers afledt af den private nøgle |
| `NPM_TOKEN` | `publish-npm` job | Godkend `npm publish` for tag-udgivelser |### 🦠 Release Scanner Policy

`release.yml` sætter eller forbereder:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ hemmeligheder.VT_API_KEY || hemmeligheder.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` fra løberens midlertidige lager

Det betyder, at hver tag-baseret udgivelse skal:

- Installer og opdater ClamAV på løberen
- regenerer metadata med ClamAV aktiveret
- Gendan metadata med VirusTotal aktiveret
- afkode CI-signeringsnøglemateriale til runner temp storage
- bestå `npm run verify:scanners:strict`
- pass `npm run verify:archives:strict`
- bestå test og pakkebekræftelse før npm publicering
- Generer brugerdefinerede udgivelsesbemærkninger fra katalogmetadata og git-historik
- opret en GitHub-udgivelse med vedhæftede udgivelsesaktiver efter publicering---

## 1️⃣1️⃣ Environment Variables Reference

| Variabel | Formål | Standard |
|:--------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Tilsidesæt katalogets rodsti | Auto-detekteret |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Ekstra tilladte skrivestier | Kendte klientrødder |
| `OMNI_SKILLS_MCP_MODE` | Indstil til "lokal" for sidevogn | Fjernbetjening |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Alt flag for lokal tilstand | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Offentlig API URL for MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Offentlig basis-URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bearer auth token | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kommaseparerede API-nøgler | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Admin runtime godkendelsestoken | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Maks. anmodninger pr. vindue | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate limit vindue (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Aktiver revisionslogning | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` eller `tekst` revisionsoutput | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Valgfri sti til revisionslogfil | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Kommasepareret CORS-oprindelsestilladelsesliste | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Kommasepareret IP- eller CIDR-tilladelsesliste | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Express trust proxy indstilling | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Aktiver vedligeholdelsessvar | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Vedligeholdelse `Prøv igen-efter` sekunder | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Simuleret asynkron opgaveforsinkelse | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite` eller `memory` task store | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Brugerdefineret A2A opgavelagerfil | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Aktiver delt kø polling for leasing-bevidste arbejdere | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `store`, `sqlite`, `local` eller `redis` koordinator | `butik` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL til ekstern koordinering | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Redis nøglepræfiks for kømetadata | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Køafstemningsinterval for leasingarbejdere | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Leasingvarighed, før en anden arbejder kan kræve en opgave tilbage | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Stabil arbejderidentifikator for lejemålsejerskab og diagnostik | Værtsnavn + PID + tilfældigt suffiks |
| `OMNI_SKILLS_A2A_EXECUTOR` | 'inline' eller 'proces' opgave udfører | 'inline' |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Tilsidesæt ekstern arbejderkommando | Binær node |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON-array af eksterne arbejdere | `["pakker/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Genoptag gendannede indsendte/arbejdsopgaver ved opstart | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Tillad ikke-HTTPS webhooks uden for localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Aktiver ClamAV-scanning | `0` |
| `VT_API_KEY` | VirusTotal API nøgle | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Privat nøgle til signering | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Offentlig nøgle tilsidesættelse | Auto-derived |---

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

1. Genopbyg med 'npm run build'
2. Kør `npm run verify:archives` igen
3. Hvis signering er aktiveret, skal du bekræfte den offentlige nøgle og 'openssl' tilgængelighed### 🦠 Release Workflow Fails on Scanner Coverage

- Bekræft at `VT_API_KEY` findes i depothemmeligheder
- Bekræft, at 'freshclam' lykkedes på løberen
- Genopbyg lokalt med `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Kør `npm run verify:scanners:strict` igen### 📦 npm Publish Fails in CI

- Bekræft, at 'NPM_TOKEN' findes i depothemmeligheder
- Bekræft, at Git-tagget matcher `package.json`-versionen nøjagtigt
- Tjek, at tarballen, der er uploadet af `release-verify`, findes i artefakterne i arbejdsprocessen### ✍️ Release Signing Fails in CI

- Bekræft, at `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` eller `OMNI_SKILLS_SIGN_PRIVATE_KEY` findes i lagerhemmeligheder
- Hvis du angiver en offentlig nøglehemmelighed, skal du bekræfte, at den matcher den private nøgle
- Bekræft, at 'openssl' er tilgængelig, og at den private nøgle er PEM-formateret
- Genopbyg lokalt med `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Kør `npm run verify:archives:strict` igen### 🔒 API/MCP Returns `401 Unauthorized`

- Bekræft `OMNI_SKILLS_HTTP_BEARER_TOKEN` eller `OMNI_SKILLS_HTTP_API_KEYS`
- Inkluder "Authorization: Bearer <token>" eller "x-api-key" header### 🚦 API/MCP Returns `429 Too Many Requests`

- Forøg `OMNI_SKILLS_RATE_LIMIT_MAX`
- Udvid `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Reducer burst-trafik fra klienter eller sonder### 🛂 API/MCP Admin Runtime Returns `401`

- Bekræft `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Send `x-admin-token: <token>` eller `Autorisation: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Deaktiver `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Brug `/healthz` til liveness-prober under vedligeholdelse
- Brug `/admin/runtime` med admin-tokenet til operatørdiagnostik### 🌍 Browser Requests Fail CORS Validation

- Bekræft `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Inkluder det nøjagtige skema og vært, for eksempel `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Bekræft `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Bekræft `OMNI_SKILLS_A2A_REDIS_URL`
- Tjek Redis-forbindelse fra hver node
- Inspicer `/healthz` for "koordination"-øjebliksbilledet### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

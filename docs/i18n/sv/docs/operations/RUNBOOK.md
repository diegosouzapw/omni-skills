# 🔧 System Runbook (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Den kompletta driftguiden för att bygga, validera, betjäna, säkra och felsöka Omni Skills.**---

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

| Kommando | Vad det gör |
|:--------|:------------|
| `npm run validate` | Validerar `SKILL.md`, regenererar `metadata.json`, beräknar taxonomi/mognad/kvalitet/säkerhet |
| `npm kör taxonomi:rapport` | Visar förslag på kategoriavdrift utan att skriva om filer |
| `npm run verify:scanners` | Bekräftar skannertäckning registrerad i genererad skicklighetsmetadata |
| `npm kör release:notes` | Genererar anpassade releasenotes från metadata, paket och git-historik |
| `npm run build` | Återskapar katalog/manifest/arkiv/kontrollsummor, verifierar skannertäckning och arkiv, bygger om `docs/CATALOG.md` |
| `npm test` | Full röksvit över CLI, API, MCP, sidovagn och arkivflöden |---

## 🖥️ Visual Shell

Den publicerade CLI innehåller nu ett bläckbaserat operatörsskal:```bash
npx omni-skills ui
```

Nuvarande kapacitet:

- guidad installation för kända klienter och anpassade vägar
- sök-sedan-installera flöde
- MCP-startguiden
- API-startguide
- A2A-startguide
- senaste installationer och tjänstelanseringar
- namngivna installations- och serviceförinställningar

Lokal statlig sökväg:```text
~/.omni-skills/state/ui-state.json
```

Reserv:```bash
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

Den statiska skannern kontrollerar alla färdigheter automatiskt:

| Regel Familj | Exempel |
|:------------|:--------|
| 🎭 Snabb injektion | Exfiltrationsmönster, instruktioner åsidosätter |
| 💣 Destruktiva kommandon | `rm -rf`, `format`, `mkfs` |
| 🔑 Misstänkta vägar | `/etc/shadow`, `~/.ssh`, autentiseringsfiler |
| ⚠️ Riskfyllda primitiver | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Kräver "clamscan" i "PATH".### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Endast hash-sökning — okända filer laddas**inte upp**som standard.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Stric release gate:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Arkiv produceras automatiskt av `npm run build`:

| Utgång | Väg |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Kontrollsummor | `dist/archives/<skill>.checksums.txt` |

`dist/` begås avsiktligt i detta arkiv. Den genererade katalogen, manifesten, paketen och arkiven är runtime-ingångar för CLI-installationsflöden, API-nedladdningsytor, MCP-förhandsvisningar, A2A-uppdragsöverlämning, röktester och releaseverifiering.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Valfri åsidosättande av offentlig nyckel:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Om ingen publik nyckel tillhandahålls, härleder byggnaden en via `openssl` till `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Versionspolicy:

- korrigeringssteg till `.10`
- efter `.10`, rullar nästa release mindre och återställer patchen till `.0`

Exempel:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Scenario | Kommando |
|:--------|:--------|
| 📥 Standardinstallation (Antigravity) | `npx omni-skills` |
| 🎯 Specifik färdighet + kund | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Discovery → installera | `npx omni-skills hitta figma --tool cursor --install --yes` |
| 📦 Buntinstallation | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Verifiera installationen | `npx omni-skills doctor` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filter | Flagga | Exempel |
|:-------|:-----|:--------|
| 📂 Kategori | `--kategori` | `--kategoriutveckling` |
| 🖥️ Verktyg | `--verktyg` | `--verktygsmarkör` |
| ⚠️ Risk | `--risk` | `--risk säker` |
| 📊 Sortera | `--sortera` | `--sort quality\|bästa praxis\|nivå\|säkerhet\|namn` |
| 🔄 Beställ | `--order` | `--order asc\|desc` |
| ⭐ Min kvalitet | `--min-kvalitet` | `--min-kvalitet 80` |
| 📋 Min BP | `--min-best-practices` | `--min-best-practices 60` |
| 🎯 Min nivå | `--min-nivå` | `--min-nivå 2` |
| 🛡️ Min säkerhet | `--min-säkerhet` | `--min-säkerhet 90` |
| ✅ Validering | `--validation-status` | `--valideringsstatus godkänd` |
| 🛡️ Säkerhet | `--säkerhetsstatus` | `--säkerhetsstatus godkänd` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Metod | Slutpunkt | Syfte |
|:-------|:--------|:--------|
| `GET` | `/healthz` | Hälsokontroll |
| `GET` | `/openapi.json` | OpenAPI 3.1 spec |
| `GET` | `/v1/färdigheter` | Lista med filter |
| `GET` | `/v1/sök` | Fulltextsökning |
| `GET` | `/v1/skills/:id/archives` | Arkivförteckning |
| `GET` | `/v1/skills/:id/download/archive?format=zip` | Ladda ner arkiv |
| `GET` | `/v1/skills/:id/download/archive/checksums` | Kontrollsummanifest |### 🔐 Hosted API Hardening

| Funktion | Kommando |
|:--------|:--------|
| 🔑 Bärare auth | `OMNI_SKILLS_HTTP_BEARER_TOKEN=ersätt-mig npx omni-skills api` |
| 🗝️ API-nyckel auth | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Admin runtime auth | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-hemlig npx omni-skills api` |
| 🚦 Prisbegränsande | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Revisionsloggning | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 CORS godkännandelista | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 IP-godkännandelista | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Underhållsläge | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 Pålitlig proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> `/healthz` förblir öppen genom design; katalogrutter kräver autentisering när de är aktiverade. `GET /admin/runtime` kräver admin-token när den är konfigurerad och returnerar ögonblicksbilden för direktstyrning.---

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

Sidovagnen kan nu förhandsgranska eller skriva MCP-konfiguration för:

- Claude användar- och projektinställningar
- Claude Desktop-konfiguration
- Cline användarkonfiguration
- GitHub Copilot CLI-användare och arkivkonfiguration
- Konfiguration av marköranvändare och arbetsyta
- Codex TOML-konfiguration
- Gemini användar- och projektinställningar
- Kilo CLI-användare och projektkonfiguration
- Kilo arbetsyta config
- Kiro användar- och projektinställningar
- Konfiguration av OpenCode-användare och arbetsyta
- Fortsätt arbetsytan YAML config
- Användarkonfiguration för vindsurfning
- Zed arbetsyta config
- arbetsyta ".mcp.json".
- VS Code arbetsyta och användarkonfiguration
- Dev Container config

`configure_client_mcp` returnerar också "recept" per klient så att operatörer får motsvarande CLI eller manuella inställningssteg tillsammans med förhandsgranskningen.### 🧾 MCP Config Preview and Write Flow

Använd den förenade CLI när du vill generera konfiguration utan att anropa MCP-verktyget direkt:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Det visuella skalet exponerar samma arbetsflöde genom:

- `npx omni-skills ui`
- `Tjänster`
- `Konfigurera MCP-klient`

Kommandot förblir i förhandsgranskningsläge om inte `--write` skickas.### 🔐 Hosted MCP Hardening

Samma env vars som API:n:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Skyddade rutter**: `POST /mcp` · `GET /sse` · `POST /meddelanden` · `GET /admin/runtime`

> `/healthz` förblir öppen.---

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

Den lokala standardsökvägen förblir enkel-först:

- Beständighet "json" eller "sqlite" kan köras med köpolling inaktiverad
- ställ in `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` endast när du vill ha flera anställdas anspråk och leasing-failover
- behåll Redis-koordination som ett avancerat värdalternativ, inte baslinjen### 🧱 Multi-Worker Lease Setup

Kör mer än en A2A-nod mot samma SQLite-butik för att få leasingbaserad failover:```bash
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

Om en arbetare dör medan en uppgift "fungerar", kan en annan arbetare återkräva den efter att hyresavtalet löper ut och fortsätta utförandet.### 🟥 Redis Coordination

För värdbaserade eller multi-nod-distributioner som inte vill ha kökoordinering kopplad till den delade SQLite-butiken, byt koordinatorn till Redis:```bash
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

I det här läget:

- Persistens lever fortfarande i JSON eller SQLite
- Uppgiftsanspråk och arrendeägande flyttas till Redis
- Flera A2A-noder kan dela en kö utan att förlita sig på SQLite-koordination på radnivå### 📡 Endpoints

| Metod | Väg | Syfte |
|:-------|:-----|:--------|
| `GET` | `/healthz` | Hälsokontroll |
| `GET` | `/.well-known/agent.json` | Agentkort (A2A upptäckt) |
| `POST` | `/a2a` | JSON-RPC-slutpunkt för uppgifter och streaming |### 🧭 Supported JSON-RPC Methods

| Metod | Syfte |
|:-------|:--------|
| `meddelande/skicka` | Starta eller fortsätt en uppgift |
| `meddelande/ström` | Starta en uppgift och strömma SSE-uppdateringar |
| `uppgifter/få` | Fråga en uppgift ögonblicksbild |
| `uppgifter/avbryt` | Avbryt en aktiv uppgift |
| `uppgifter/prenumerera om` | Återuppta SSE-uppdateringar för en befintlig uppgift |
| `tasks/pushNotificationConfig/set` | Registrera en push webhook |
| `tasks/pushNotificationConfig/get` | Läs en push-konfiguration |
| `tasks/pushNotificationConfig/list` | Lista push-konfigurationer för en uppgift |
| `tasks/pushNotificationConfig/delete` | Ta bort en push-konfiguration |### 📡 Task Lifecycle

Den aktuella körtiden stöder dessa uppgiftstillstånd:

- 'inlämnad'
- "jobbar".
- "ingång krävs".
- `avslutad`
- `avbruten`
- "misslyckades".

Uppgifter kvarstår till antingen en JSON-fil eller en SQLite-butik och laddas om vid omstart. Avslutade och avbrutna uppgifter förblir tillgängliga. Uppgifter som fortfarande "skickades" eller "fungerade" under avstängning återställs med explicit omstartsmetadata och återupptas automatiskt som standard.### 🧪 Example: Start a Task

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

Förvaret har nu två arbetsflöden:

| Arbetsflöde | Utlösare | Syfte |
|:--------|:--------|:--------|
| `validate.yml` | Push/PR till `main` | Bygg, testa och bekräfta att genererade artefakter har begåtts |
| `release.yml` | Tag push `v*` eller manuell sändning | Kör skannrar med release-grade, verifiera versionstaggen, signera artefakter, paketera tarballen, publicera till npm och skapa GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Hemlighet | Används av | Syfte |
|:-------|:--------|:--------|
| `VT_API_KEY` eller `VIRUSTOTAL` | `release.yml` | Kräv VirusTotal-hash-uppslagningar i versionsversioner |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` eller `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Obligatorisk privat nyckel för frikopplad arkivsignering i CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` eller `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Valfri åsidosättande av publik nyckel; annars härledd från den privata nyckeln |
| `NPM_TOKEN` | `publish-npm` jobb | Autentisera `npm publish` för taggsläpp |### 🦠 Release Scanner Policy

`release.yml` ställer in eller förbereder:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || secrets.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` från löparens tillfälliga lagring

Det betyder att varje taggbaserad utgåva måste:

- installera och uppdatera ClamAV på löparen
- regenerera metadata med ClamAV aktiverat
- återskapa metadata med VirusTotal aktiverat
- avkoda CI-signeringsnyckelmaterial till löpartemplagring
- passera `npm run verify:scanners:strict`
- passera `npm run verify:archives:strict`
- klara tester och paketverifiering innan npm publicerar
- generera anpassade releasenotes från katalogmetadata och git-historik
- skapa en GitHub Release med bifogade releasetillgångar efter publicering---

## 1️⃣1️⃣ Environment Variables Reference

| Variabel | Syfte | Standard |
|:--------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Åsidosätt katalogrotsökväg | Autoupptäckt |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Extra tillåtna skrivvägar | Kända klientrötter |
| `OMNI_SKILLS_MCP_MODE` | Ställ in på "lokal" för sidovagn | Fjärrkontroll |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Alt-flagga för lokalt läge | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Public API URL för MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Offentlig bas-URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bearer auth token | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kommaseparerade API-nycklar | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Admin runtime auth token | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max förfrågningar per fönster | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Fönster för hastighetsgräns (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Aktivera granskningsloggning | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | "json" eller "text" granskningsutgång | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Valfri sökväg för granskningsloggfil | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Kommaseparerad CORS ursprungsgodkännandelista | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Kommaseparerad IP- eller CIDR-godkännandelista | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Express trust proxy-inställning | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Aktivera underhållssvar | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Underhåll `Retry-After` sekunder | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Simulerad asynkronuppgiftsfördröjning | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | "json", "sqlite", eller "minnes" uppgiftsarkiv | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Anpassad A2A-uppgiftslagringsfil | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Aktivera delad köpolling för hyresmedvetna arbetare | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `store`, `sqlite`, `local` eller `redis` samordnare | `butik` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL för extern samordning | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Redis nyckelprefix för kömetadata | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Köundersökningsintervall för hyresarbetare | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Hyresperioden innan en annan arbetare kan återkräva en uppgift | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Stabil arbetaridentifierare för hyresrätt och diagnostik | Värdnamn + PID + slumpmässigt suffix |
| `OMNI_SKILLS_A2A_EXECUTOR` | "inline" eller "process" uppgiftsexekutor | `inline` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Åsidosätt extern arbetarkommando | Nod binär |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON-array för externa arbetare | `["paket/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Återuppta återställda inskickade/arbetsuppgifter vid start | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Tillåt icke-HTTPS-webhooks utanför localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Aktivera ClamAV-skanning | `0` |
| `VT_API_KEY` | VirusTotal API-nyckel | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Privat nyckel för signering | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Åsidosättande av offentlig nyckel | Auto-derived |---

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

1. Bygg om med `npm run build`
2. Kör `npm run verify:archives` igen
3. Om signering är aktiverat, bekräfta att den offentliga nyckeln och "openssl" är tillgänglig### 🦠 Release Workflow Fails on Scanner Coverage

- Bekräfta att "VT_API_KEY" finns i förvarets hemligheter
- Bekräfta att "freshclam" lyckades på löparen
- Bygg om lokalt med `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Kör om `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Bekräfta att "NPM_TOKEN" finns i förvarets hemligheter
- Bekräfta att Git-taggen matchar versionen av `package.json` exakt
- Kontrollera att tarballen som laddats upp av `release-verify` finns i arbetsflödesartefakterna### ✍️ Release Signing Fails in CI

- Bekräfta att `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` eller `OMNI_SKILLS_SIGN_PRIVATE_KEY` finns i förvarets hemligheter
- Om du tillhandahåller en hemlighet för en offentlig nyckel, bekräfta att den matchar den privata nyckeln
- Bekräfta att "openssl" är tillgänglig och att den privata nyckeln är PEM-formaterad
- Bygg om lokalt med `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Kör `npm run verify:archives:strict` igen### 🔒 API/MCP Returns `401 Unauthorized`

- Verifiera `OMNI_SKILLS_HTTP_BEARER_TOKEN` eller `OMNI_SKILLS_HTTP_API_KEYS`
- Inkludera "Authorization: Bearer <token>" eller "x-api-key" header### 🚦 API/MCP Returns `429 Too Many Requests`

- Öka `OMNI_SKILLS_RATE_LIMIT_MAX`
- Utöka `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Minska burst-trafik från klienter eller sonder### 🛂 API/MCP Admin Runtime Returns `401`

- Verifiera `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Skicka `x-admin-token: <token>` eller `Auktorisation: Bärare <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Inaktivera `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Använd `/healthz` för livhetssonder under underhåll
- Använd `/admin/runtime` med admin-token för operatörsdiagnostik### 🌍 Browser Requests Fail CORS Validation

- Verifiera `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Inkludera det exakta schemat och värddatorn, till exempel "https://app.example.com".### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Verifiera `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Verifiera `OMNI_SKILLS_A2A_REDIS_URL`
- Kontrollera Redis-anslutningen från varje nod
- Inspektera `/healthz` för ögonblicksbilden för `koordination`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

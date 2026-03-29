# 🔧 System Runbook (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Den komplette driftsveiledningen for å bygge, validere, betjene, sikre og feilsøke Omni Skills.**---

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

| Kommando | Hva det gjør |
|:--------|:------------|
| `npm run validate` | Validerer `SKILL.md`, regenererer `metadata.json`, beregner taksonomi/modenhet/kvalitet/sikkerhet |
| `npm kjøre taksonomi:rapport` | Viser forslag til kategoridrift uten å omskrive filer |
| `npm run verify:scanners` | Bekrefter skannerdekning registrert i genererte ferdighetsmetadata |
| `npm run release:notes` | Genererer tilpassede utgivelsesnotater fra metadata, bunter og git-historikk |
| `npm run build` | Regenererer katalog/manifester/arkiver/sjekksummer, verifiserer skannerdekning og arkiverer, gjenoppbygger `docs/CATALOG.md` |
| `npm test` | Full røykpakke på tvers av CLI, API, MCP, sidevogn og arkivflyter |---

## 🖥️ Visual Shell

Den publiserte CLI inkluderer nå et blekkbasert operatørskall:```bash
npx omni-skills ui
```

Nåværende muligheter:

- guidet installasjon for kjente klienter og tilpassede stier
- søk-og-installer flyt
- MCP-startveiviser
- API-startveiviser
- A2A lanseringsveiviser
- nylige installasjoner og relanseringer av tjenester
- navngitte forhåndsinnstillinger for installasjon og service

Lokal statlig sti:```text
~/.omni-skills/state/ui-state.json
```

Tilbakeslag:```bash
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

Den statiske skanneren sjekker alle ferdigheter automatisk:

| Regel Familie | Eksempler |
|:------------|:--------|
| 🎭 Rask injeksjon | Eksfiltrasjonsmønstre, instruksjonsoverstyringer |
| 💣 Destruktive kommandoer | `rm -rf`, `format`, `mkfs` |
| 🔑 Mistenkelige stier | `/etc/shadow`, `~/.ssh`, legitimasjonsfiler |
| ⚠️ Risikable primitiver | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Krever `clamscan` i `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Bare hash-oppslag — ukjente filer er**ikke lastet opp**som standard.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Strenge utløserport:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Arkiver produseres automatisk av `npm run build`:

| Utgang | Sti |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Sjekksummer | `dist/archives/<skill>.checksums.txt` |

`dist/` er begått med vilje i dette depotet. The generated catalog, manifests, bundles, and archives are runtime inputs for CLI install flows, API download surfaces, MCP previews, A2A task handoff, smoke tests, and release verification.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Valgfri offentlig nøkkeloverstyring:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Hvis ingen offentlig nøkkel er oppgitt, utleder bygningen en via `openssl` til `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Versjonspolicy:

- patch-økninger til `.10`
- etter `.10` ruller neste utgivelse mindre og tilbakestiller patchen til `.0`

Eksempler:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Scenario | Kommando |
|:--------|:--------|
| 📥 Standardinstallasjon (Antigravity) | `npx omni-skills` |
| 🎯 Spesifikk ferdighet + klient | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Discovery → installer | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Buntinstallasjon | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Bekreft installasjon | `npx omni-skills doctor` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filter | Flagg | Eksempel |
|:-------|:-----|:--------|
| 📂 Kategori | `--kategori` | `--kategoriutvikling` |
| 🖥️ Verktøy | `--verktøy` | `--verktøymarkør` |
| ⚠️ Risiko | `--risiko` | `--risikosikker` |
| 📊 Sorter | `--sort` | `--sort kvalitet\|beste praksis\|nivå\|sikkerhet\|navn` |
| 🔄 Bestill | `--ordre` | `--ordre asc\|desc` |
| ⭐ Min kvalitet | `--min-kvalitet` | `--min-kvalitet 80` |
| 📋 Min BP | `--min-beste-praksis` | `--min-beste-praksis 60` |
| 🎯 Minste nivå | `--min-nivå` | `--min-nivå 2` |
| 🛡️ Min sikkerhet | `--min-sikkerhet` | `--min-sikkerhet 90` |
| ✅ Validering | `--valideringsstatus` | `--valideringsstatus bestått` |
| 🛡️ Sikkerhet | `--sikkerhetsstatus` | `--sikkerhetsstatus bestått` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Metode | Endepunkt | Formål |
|:-------|:--------|:--------|
| `GET` | `/healthz` | Helsesjekk |
| `GET` | `/openapi.json` | OpenAPI 3.1 spesifikasjon |
| `GET` | `/v1/ferdigheter` | Liste med filtre |
| `GET` | `/v1/søk` | Fulltekstsøk |
| `GET` | `/v1/skills/:id/archives` | Arkivoppføring |
| `GET` | `/v1/skills/:id/download/archive?format=zip` | Last ned arkiv |
| `GET` | `/v1/skills/:id/download/archive/checksums` | Kontrollsummanifest |### 🔐 Hosted API Hardening

| Funksjon | Kommando |
|:--------|:--------|
| 🔑 Bærer auth | `OMNI_SKILLS_HTTP_BEARER_TOKEN=erstatt-meg npx omni-skills api` |
| 🗝️ API nøkkel auth | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Admin kjøretidsaut. | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-hemmelig npx omni-skills api` |
| 🚦 Satsbegrensende | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Revisjonslogging | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 CORS tillatelsesliste | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 IP-godkjenningsliste | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Vedlikeholdsmodus | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 Pålitelig proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> `/healthz` forblir åpen ved design; katalogruter krever godkjenning når de er aktivert. `GET /admin/runtime` krever admin-tokenet når det er konfigurert og returnerer øyeblikksbildet for live governance.---

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

Sidevognen kan nå forhåndsvise eller skrive MCP-konfigurasjon for:

- Claude bruker- og prosjektinnstillinger
- Claude Desktop-konfigurasjon
- Cline brukerkonfigurasjon
- GitHub Copilot CLI-bruker- og depotkonfigurasjon
- Konfigurasjon av markørbruker og arbeidsområde
- Codex TOML konfig
- Gemini bruker- og prosjektinnstillinger
- Kilo CLI bruker og prosjektkonfigurasjon
- Kilo arbeidsområdekonfigurasjon
- Kiro bruker- og prosjektinnstillinger
- OpenCode bruker- og arbeidsområdekonfigurasjon
- Fortsett arbeidsområde YAML-konfigurasjon
- Windsurf brukerkonfigurasjon
- Zed arbeidsområdekonfigurasjon
- arbeidsområde `.mcp.json`
- VS-kode arbeidsområde og brukerkonfigurasjon
- Dev Container-konfigurasjon

`configure_client_mcp` returnerer også per-klient `oppskrifter` slik at operatører får tilsvarende CLI eller manuelle oppsettstrinn sammen med forhåndsvisningen.### 🧾 MCP Config Preview and Write Flow

Bruk den enhetlige CLI når du vil ha konfigurasjonsgenerering uten å ringe MCP-verktøyet direkte:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Det visuelle skallet avslører den samme arbeidsflyten gjennom:

- `npx omni-skills ui`
- `Tjenester`
- `Konfigurer MCP-klient`

Kommandoen forblir i forhåndsvisningsmodus med mindre `--write` blir bestått.### 🔐 Hosted MCP Hardening

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

> `/healthz` forblir åpen.---

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

Standard lokale banen forblir enkel-først:

- 'json' eller 'sqlite'-utholdenhet kan kjøres med køpolling deaktivert
- sett `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` kun når du vil ha krav til flere arbeidere og leasing failover
- behold Redis-koordinering som et avansert vertsalternativ, ikke grunnlinjen### 🧱 Multi-Worker Lease Setup

Kjør mer enn én A2A-node mot det samme SQLite-lageret for å få leasebasert failover:```bash
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

Hvis en arbeider dør mens en oppgave "fungerer", kan en annen arbeider kreve den tilbake etter at leieavtalen utløper og fortsette utførelsen.### 🟥 Redis Coordination

For vertsbaserte eller multi-node-distribusjoner som ikke ønsker køkoordinering knyttet til den delte SQLite-butikken, bytt koordinatoren til Redis:```bash
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

I denne modusen:

- utholdenhet lever fortsatt i JSON eller SQLite
- oppgavekrav og leieeierskap flyttes til Redis
- flere A2A-noder kan dele en kø uten å stole på SQLite-koordinering på radnivå### 📡 Endpoints

| Metode | Sti | Formål |
|:-------|:-----|:--------|
| `GET` | `/healthz` | Helsesjekk |
| `GET` | `/.well-known/agent.json` | Agentkort (A2A-oppdagelse) |
| `POST` | `/a2a` | JSON-RPC-endepunkt for oppgaver og strømming |### 🧭 Supported JSON-RPC Methods

| Metode | Formål |
|:-------|:--------|
| `melding/send` | Start eller fortsett en oppgave |
| `melding/strøm` | Start en oppgave og strøm SSE-oppdateringer |
| `oppgaver/få` | Spør et øyeblikksbilde av en oppgave |
| `oppgaver/avbryt` | Avbryt en aktiv oppgave |
| `oppgaver/resubscribe` | Gjenoppta SSE-oppdateringer for en eksisterende oppgave |
| `tasks/pushNotificationConfig/set` | Registrer en push webhook |
| `tasks/pushNotificationConfig/get` | Les en push-konfigurasjon |
| `tasks/pushNotificationConfig/list` | List push-konfigurasjoner for en oppgave |
| `tasks/pushNotificationConfig/delete` | Fjern en push-konfigurasjon |### 📡 Task Lifecycle

Gjeldende kjøretid støtter disse oppgavetilstandene:

- `innsendt`
- "jobber".
- `inndata kreves`
- `fullført`
- `kansellert`
- 'mislyktes'

Oppgaver vedvares til enten en JSON-fil eller en SQLite-butikk og lastes inn på nytt ved omstart. Fullførte og avbrutte oppgaver forblir tilgjengelige. Oppgaver som fortsatt ble "innsendt" eller "fungerte" under avslutningen, gjenopprettes med eksplisitte omstartmetadata og gjenopptas automatisk som standard.### 🧪 Example: Start a Task

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

Depotet har nå to arbeidsflyter:

| Arbeidsflyt | Trigger | Formål |
|:--------|:--------|:--------|
| `validate.yml` | Skyv/PR til "hoved" | Bygg, test og bekreft at genererte artefakter er begått |
| `release.yml` | Tag push `v*` eller manuell sending | Kjør skannere i utgivelsesgrad, verifiser versjonskoden, signer artefakter, pakk tarballen, publiser til npm og lag GitHub-utgivelsen |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Hemmelig | Brukt av | Formål |
|:-------|:--------|:--------|
| `VT_API_KEY` eller `VIRUSTOTAL` | `release.yml` | Krev VirusTotal-hash-oppslag i utgivelsesbygg |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` eller `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Nødvendig privat nøkkel for frakoblet arkivsignering i CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` eller `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Valgfri overstyring av offentlig nøkkel; ellers avledet fra den private nøkkelen |
| `NPM_TOKEN` | `publish-npm` jobb | Autentiser `npm publish` for tag-utgivelser |### 🦠 Release Scanner Policy

`release.yml` setter eller forbereder:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || hemmeligheter.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` fra løperens midlertidige lagring

Det betyr at hver tag-basert utgivelse må:

- installer og oppdater ClamAV på løperen
- regenerer metadata med ClamAV aktivert
- regenerer metadata med VirusTotal aktivert
- dekode CI-signeringsnøkkelmateriale til runner temp lagring
- pass `npm run verify:scanners:strict`
- pass `npm run verify:archives:strict`
- bestå tester og pakkeverifisering før npm publiserer
- generer tilpassede utgivelsesnotater fra katalogmetadata og git-historie
- Lag en GitHub-utgivelse med vedlagte utgivelsesressurser etter publisering---

## 1️⃣1️⃣ Environment Variables Reference

| Variabel | Formål | Standard |
|:--------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Overstyr katalogrotbane | Automatisk oppdaget |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Ekstra tillatte skrivebaner | Kjente klientrøtter |
| `OMNI_SKILLS_MCP_MODE` | Sett til "lokal" for sidevogn | Fjernkontroll |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Alt-flagg for lokal modus | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Offentlig API URL for MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Offentlig base URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bærer auth token | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kommaseparerte API-nøkler | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Auth-token for admin kjøretid | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Maks forespørsler per vindu | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Hastighetsgrense vindu (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Aktiver revisjonslogging | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` eller `tekst` revisjonsutdata | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Valgfri bane for revisjonsloggfil | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Kommaseparert CORS-opprinnelsesgodkjenningsliste | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Kommaseparert IP- eller CIDR-godkjenningsliste | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Express trust proxy-innstilling | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Aktiver vedlikeholdsresponser | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Vedlikehold `Repry-After` sekunder | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Simulert asynkron oppgaveforsinkelse | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite` eller `minne` oppgavebutikk | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Tilpasset A2A-oppgavelagerfil | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Aktiver delt køavstemning for arbeidstakere som er klar over utleie | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `store`, `sqlite`, `local` eller `redis` koordinator | `butikk` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL for ekstern koordinering | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Redis nøkkelprefiks for kømetadata | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Køavstemningsintervall for leiearbeidere | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Leietid før en annen arbeidstaker kan kreve tilbake en oppgave | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Stabil arbeideridentifikator for leieforhold og diagnostikk | Vertsnavn + PID + tilfeldig suffiks |
| `OMNI_SKILLS_A2A_EXECUTOR` | 'inline' eller 'prosess' oppgaveutfører | `inline` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Overstyr ekstern arbeiderkommando | Binær node |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON-array av eksterne arbeidere | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Gjenoppta gjenopprettede innsendte/arbeidsoppgaver ved oppstart | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Tillat ikke-HTTPS webhooks utenfor localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Aktiver ClamAV-skanning | `0` |
| `VT_API_KEY` | VirusTotal API-nøkkel | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Privat nøkkel for signering | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Overstyring av offentlig nøkkel | Auto-derived |---

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

1. Bygg på nytt med 'npm run build'
2. Kjør `npm run verify:archives` på nytt
3. Hvis signering er aktivert, bekrefter du den offentlige nøkkelen og 'openssl' tilgjengelighet### 🦠 Release Workflow Fails on Scanner Coverage

- Bekreft at "VT_API_KEY" finnes i depothemmelighetene
- Bekreft at "freshclam" lyktes på løperen
- Gjenoppbygg lokalt med `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Kjør `npm run verify:scanners:strict` på nytt### 📦 npm Publish Fails in CI

- Bekreft at 'NPM_TOKEN' finnes i depothemmelighetene
- Bekreft at Git-taggen samsvarer nøyaktig med `package.json`-versjonen
- Sjekk at tarballen lastet opp av `release-verify` finnes i arbeidsflytartefaktene### ✍️ Release Signing Fails in CI

- Bekreft at `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` eller `OMNI_SKILLS_SIGN_PRIVATE_KEY` finnes i depothemmelighetene
- Hvis du oppgir en offentlig nøkkelhemmelighet, må du bekrefte at den samsvarer med den private nøkkelen
- Bekreft at 'openssl' er tilgjengelig og at den private nøkkelen er PEM-formatert
- Gjenoppbygg lokalt med `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Kjør `npm run verify:archives:strict` på nytt### 🔒 API/MCP Returns `401 Unauthorized`

- Bekreft `OMNI_SKILLS_HTTP_BEARER_TOKEN` eller `OMNI_SKILLS_HTTP_API_KEYS`
- Ta med "Autorisering: bærer <token>" eller "x-api-key"-overskrift### 🚦 API/MCP Returns `429 Too Many Requests`

- Øk `OMNI_SKILLS_RATE_LIMIT_MAX`
- Utvid `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Reduser burst-trafikk fra klienter eller sonder### 🛂 API/MCP Admin Runtime Returns `401`

- Bekreft `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Send `x-admin-token: <token>` eller `Authorization: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Deaktiver `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Bruk `/healthz` for liveness-prober under vedlikehold
- Bruk `/admin/runtime` med admin-tokenet for operatørdiagnostikk### 🌍 Browser Requests Fail CORS Validation

- Bekreft `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
– Ta med det nøyaktige oppsettet og verten, for eksempel «https://app.example.com».### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Bekreft `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Bekreft `OMNI_SKILLS_A2A_REDIS_URL`
- Sjekk Redis-tilkoblingen fra hver node
- Inspiser `/healthz` for øyeblikksbildet av `koordinasjon`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

# 🔧 System Runbook (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**De complete operationele gids voor het bouwen, valideren, bedienen, beveiligen en oplossen van problemen met Omni Skills.**---

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

| Commando | Wat het doet |
|:--------|:-------------|
| `npm run valideren` | Valideert `SKILL.md`, regenereert `metadata.json`, berekent taxonomie/volwassenheid/kwaliteit/beveiliging |
| `npm run taxonomie:rapport` | Toont categorieafwijkingssuggesties zonder bestanden te herschrijven |
| `npm run verificatie:scanners` | Bevestigt scannerdekking vastgelegd in gegenereerde metagegevens van vaardigheden |
| `npm run release:notes` | Genereert aangepaste release-opmerkingen van metadata, bundels en git-geschiedenis |
| `npm run build` | Genereert catalogus/manifesten/archieven/checksums opnieuw, verifieert scannerdekking en archieven, herbouwt `docs/CATALOG.md` |
| `npm-test` | Volledige rooksuite voor CLI-, API-, MCP-, zijspan- en archiefstromen |---

## 🖥️ Visual Shell

De gepubliceerde CLI bevat nu een op inkt gebaseerde operatorshell:```bash
npx omni-skills ui
```

Huidige mogelijkheden:

- begeleide installatie voor bekende clients en aangepaste paden
- zoek-en-installeer-stroom
- MCP-startwizard
- API-startwizard
- A2A-startwizard
- recente installaties en herlanceringen van services
- benoemde installatie- en servicevoorinstellingen

Lokaal statuspad:```text
~/.omni-skills/state/ui-state.json
```

Terugval:```bash
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

De statische scanner controleert automatisch alle vaardigheden:

| Regelfamilie | Voorbeelden |
|:------------|:---------|
| 🎭 Snelle injectie | Exfiltratiepatronen, instructieoverschrijvingen |
| 💣 Destructieve commando's | `rm -rf`, `formaat`, `mkfs` |
| 🔑 Verdachte paden | `/etc/shadow`, `~/.ssh`, referentiebestanden |
| ⚠️ Riskante primitieven | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Vereist `clamscan` in `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Alleen hash opzoeken: onbekende bestanden worden standaard**niet geüpload**.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Strikte vrijgavepoort:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Archieven worden automatisch aangemaakt door `npm run build`:

| Uitvoer | Pad |
|:-------|:-----|
| 📦ZIP | `dist/archives/<vaardigheid>.zip` |
| 📦 Tarbal | `dist/archives/<skill>.tar.gz` |
| 🔒 Controlesommen | `dist/archives/<skill>.checksums.txt` |

`dist/` is opzettelijk vastgelegd in deze repository. De gegenereerde catalogus, manifesten, bundels en archieven zijn runtime-invoer voor CLI-installatiestromen, API-downloadoppervlakken, MCP-previews, A2A-taakoverdracht, rooktests en releaseverificatie.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Optionele overschrijving van de openbare sleutel:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Als er geen publieke sleutel wordt opgegeven, leidt de build er een af ​​via `openssl` in `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Versiebeleid:

- patchverhogingen tot `.10`
- na `.10` wordt er in de volgende release een minor uitgevoerd en wordt de patch opnieuw ingesteld op `.0`

Voorbeelden:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Scenario | Commando |
|:---------|:--------|
| 📥 Standaardinstallatie (Antigravity) | `npx omni-vaardigheden` ​​|
| 🎯 Specifieke vaardigheid + klant | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Ontdekking → installeren | `npx omni-skills vind figma --tool cursor --install --yes` |
| 📦 Bundelinstallatie | `npx omni-skills --cursor --bundel essentiële zaken` |
| 🩺 Installatie verifiëren | `npx omni-skills dokter` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filteren | Vlag | Voorbeeld |
|:-------|:-----|:--------|
| 📂 Categorie | `--categorie` | `--categorieontwikkeling` |
| 🖥️ Gereedschap | `--gereedschap` | `--gereedschapscursor` |
| ⚠️ Risico | `--risico` | `--risico veilig` |
| 📊 Sorteren | `--sorteer` | `--sorteer kwaliteit\|best-practices\|niveau\|beveiliging\|naam` |
| 🔄Bestellen | `--bestelling` | `--volgorde asc\|desc` |
| ⭐ Min. kwaliteit | `--min-kwaliteit` | `--min-kwaliteit 80` |
| 📋 Min bloeddruk | `--min-best-practices` | `--min-best practices 60` |
| 🎯 Min-niveau | `--min-niveau` | `--min-niveau 2` |
| 🛡️ Minimale beveiliging | `--min-beveiliging` | `--min-beveiliging 90` |
| ✅ Validatie | `--validatiestatus` | `--validatiestatus doorgegeven` |
| 🛡️ Beveiliging | `--beveiligingsstatus` | `--beveiligingsstatus doorgegeven` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Werkwijze | Eindpunt | Doel |
|:-------|:---------|:--------|
| `KRIJG` | `/gezondheidz` | Gezondheidscontrole |
| `KRIJG` | `/openapi.json` | OpenAPI 3.1-specificatie |
| `KRIJG` | `/v1/vaardigheden` ​​| Lijst met filters |
| `KRIJG` | `/v1/zoeken` | Zoeken in volledige tekst |
| `KRIJG` | `/v1/skills/:id/archives` | Archiefoverzicht |
| `KRIJG` | `/v1/skills/:id/download/archive?format=zip` | Archief downloaden |
| `KRIJG` | `/v1/skills/:id/download/archive/checksums` | Checksum-manifest |### 🔐 Hosted API Hardening

| Kenmerk | Commando |
|:--------|:--------|
| 🔑Authentificatie aan toonder | `OMNI_SKILLS_HTTP_BEARER_TOKEN=vervang-mij npx omni-skills api` |
| 🗝️ API-sleutelauthenticatie | `OMNI_SKILLS_HTTP_API_KEYS=sleutel-a, sleutel-b npx omni-vaardigheden api` |
| 🛂 Runtime-authenticatie van beheerder | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-geheime npx omni-skills-api` |
| 🚦 Tariefbeperking | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills-api` |
| 📝 Auditregistratie | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills-api` |
| 🌍 CORS toelatingslijst | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 IP-toelatingslijst | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills-api` |
| 🚧 Onderhoudsmodus | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills-api` |
| 🔁 Vertrouwde proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills-api` |

> 🟢 `/healthz` blijft open; catalogusroutes vereisen verificatie wanneer ingeschakeld. Voor 'GET /admin/runtime' is het admin-token vereist wanneer het is geconfigureerd en wordt de live governance-momentopname geretourneerd.---

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

Het zijspan kan nu een voorbeeld van een MCP-configuratie bekijken of schrijven voor:

- Claude gebruikers- en projectinstellingen
- Claude Desktop-configuratie
- Cline-gebruikersconfiguratie
- GitHub Copilot CLI-gebruikers- en repositoryconfiguratie
- Cursorgebruiker en werkruimteconfiguratie
- Codex TOML-configuratie
- Gemini gebruikers- en projectinstellingen
- Kilo CLI-gebruikers- en projectconfiguratie
- Kilo-werkruimteconfiguratie
- Kiro-gebruikers- en projectinstellingen
- OpenCode gebruikers- en werkruimteconfiguratie
- Ga door met de YAML-configuratie van de werkruimte
- Windsurf-gebruikersconfiguratie
- Zed-werkruimteconfiguratie
- werkruimte `.mcp.json`
- VS Code-werkruimte en gebruikersconfiguratie
- Dev Container-configuratie

`configure_client_mcp` retourneert ook `recepten` per klant, zodat operators de equivalente CLI of handmatige installatiestappen samen met het voorbeeld krijgen.### 🧾 MCP Config Preview and Write Flow

Gebruik de uniforme CLI als u configuratie wilt genereren zonder de MCP-tool rechtstreeks aan te roepen:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

De visuele schil legt dezelfde workflow bloot via:

- `npx omni-vaardigheden ui`
- `Diensten`
- `Configureer MCP-client`

Het commando blijft in de voorbeeldmodus tenzij `--write` wordt doorgegeven.### 🔐 Hosted MCP Hardening

Dezelfde omgevingsvariabelen als de API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Beveiligde routes**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` blijft open.---

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

Het standaard lokale pad blijft eerst eenvoudig:

- `json` of `sqlite` persistentie kan worden uitgevoerd terwijl wachtrij-polling is uitgeschakeld
- stel `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` alleen in als u een claim voor meerdere werknemers en een lease-failover wilt
- Redis-coördinatie behouden als een geavanceerde gehoste optie, niet als basislijn### 🧱 Multi-Worker Lease Setup

Voer meer dan één A2A-knooppunt uit tegen dezelfde SQLite-opslag om op lease gebaseerde failover te krijgen:```bash
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

Als een werknemer overlijdt terwijl een taak 'werkt', kan een andere werknemer deze na het verstrijken van de huurovereenkomst terugvorderen en doorgaan met de uitvoering.### 🟥 Redis Coordination

Voor gehoste implementaties of implementaties met meerdere knooppunten waarbij wachtrijcoördinatie niet aan de gedeelde SQLite-opslag is gekoppeld, schakelt u de coördinator over naar Redis:```bash
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

In deze modus:

- persistentie leeft nog steeds in JSON of SQLite
- taakclaiming en lease-eigendom verhuizen naar Redis
- meerdere A2A-knooppunten kunnen een wachtrij delen zonder afhankelijk te zijn van SQLite-coördinatie op rijniveau### 📡 Endpoints

| Werkwijze | Pad | Doel |
|:-------|:-----|:--------|
| `KRIJG` | `/gezondheidz` | Gezondheidscontrole |
| `KRIJG` | `/.bekend/agent.json` | Agentkaart (A2A-detectie) |
| `POST` | `/a2a` | JSON-RPC-eindpunt voor taken en streaming |### 🧭 Supported JSON-RPC Methods

| Werkwijze | Doel |
|:-------|:--------|
| `bericht/verzenden` | Een taak starten of voortzetten |
| `bericht/stream` | Start een taak en stream SSE-updates |
| `taken/krijgen` | Een momentopname van een taak opvragen |
| `taken/annuleren` | Een actieve taak annuleren |
| `taken/opnieuw abonneren` | SSE-updates voor een bestaande taak hervatten |
| `taken/pushNotificationConfig/set` | Registreer een push-webhook |
| `tasks/pushNotificationConfig/get` | Een push-configuratie lezen |
| `taken/pushNotificationConfig/lijst` | Push-configuraties voor een taak weergeven |
| `taken/pushNotificationConfig/verwijderen` | Een push-configuratie verwijderen |### 📡 Task Lifecycle

De huidige runtime ondersteunt deze taakstatussen:

- `ingediend`
- `werken`
- `invoer vereist`
- `voltooid`
- `geannuleerd`
- `mislukt`

Taken worden bewaard in een JSON-bestand of een SQLite-archief en worden opnieuw geladen bij het opnieuw opstarten. Voltooide en onderbroken taken blijven beschikbaar. Taken die tijdens het afsluiten nog steeds 'verzonden' of 'werkend' waren, worden hersteld met expliciete herstartmetagegevens en worden standaard automatisch hervat.### 🧪 Example: Start a Task

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

De repository heeft nu twee workflows:

| Werkstroom | Trigger | Doel |
|:---------|:--------|:--------|
| `validate.yml` | Druk/PR naar `hoofd` | Bouw, test en bevestig dat gegenereerde artefacten zijn vastgelegd |
| `release.yml` | Tag push `v*` of handmatige verzending | Voer release-grade scanners uit, verifieer de versietag, onderteken artefacten, verpak de tarball, publiceer naar npm en maak de GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Geheim | Gebruikt door | Doel |
|:-------|:--------|:--------|
| `VT_API_KEY` of `VIRUSTOTAL` | `release.yml` | Vereisen dat VirusTotal-hashzoekopdrachten worden uitgevoerd in releasebuilds |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` of `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Vereiste privésleutel voor vrijstaande archiefondertekening in CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` of `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Optionele overschrijving van de openbare sleutel; anderszins afgeleid van de privésleutel |
| `NPM_TOKEN` | `publish-npm` taak | Authenticeer `npm public` voor tagreleases |### 🦠 Release Scanner Policy

`release.yml` stelt het volgende in of bereidt voor:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ geheimen.VT_API_KEY || geheimen.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` uit de tijdelijke opslag van hardlopers

Dat betekent dat elke op tags gebaseerde release:

- installeer en ververs ClamAV op de runner
- genereer metadata opnieuw met ClamAV ingeschakeld
- genereer metadata opnieuw met VirusTotal ingeschakeld
- decodeer sleutelmateriaal voor CI-ondertekening in de tijdelijke opslag van runners
- geef 'npm run verificatie:scanners:strict' door
- geef 'npm run verificatie:archives:strict' door
- slagen voor tests en pakketverificatie voordat npm publiceert
- genereer aangepaste release-opmerkingen op basis van catalogusmetagegevens en git-geschiedenis
- maak na publicatie een GitHub-release met bijgevoegde release-items---

## 1️⃣1️⃣ Environment Variables Reference

| Variabel | Doel | Standaard |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Hoofdpad catalogus overschrijven | Automatisch gedetecteerd |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Extra toegestane schrijfpaden | Bekende klantenroots |
| `OMNI_SKILLS_MCP_MODE` | Stel in op `lokaal` voor zijspan | Op afstand |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Alt-vlag voor lokale modus | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Openbare API-URL voor MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Openbare basis-URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bearer-authenticatietoken | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Door komma's gescheiden API-sleutels | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Beheerderruntime-authenticatietoken | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max. aantal verzoeken per venster | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Snelheidslimietvenster (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Controleregistratie inschakelen | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` of `text` audituitvoer | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Optioneel auditlogboekbestandspad | stoer |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Door komma's gescheiden CORS-oorsprong toelatingslijst | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Door komma's gescheiden IP- of CIDR-toelatingslijst | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Express trust proxy-instelling | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Onderhoudsreacties inschakelen | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Onderhoud `Retry-After` seconden | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Gesimuleerde asynchrone taakvertraging | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite` of `memory` taakarchief | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Aangepast A2A-taakarchiefbestand | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Polling van gedeelde wachtrijen inschakelen voor leasebewuste werknemers | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `store`, `sqlite`, `local` of `redis` coördinator | `winkel` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis-URL voor externe coördinatie | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Redis-sleutelvoorvoegsel voor wachtrijmetagegevens | `omni-vaardigheden:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Pollinginterval wachtrij voor leasemedewerkers | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Duur van de huurovereenkomst voordat een andere werknemer een taak kan terugvorderen | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Identificatie voor stabiele werknemers voor lease-eigendom en diagnostiek | Hostnaam + PID + willekeurig achtervoegsel |
| `OMNI_SKILLS_A2A_EXECUTOR` | `inline` of `proces` taakuitvoerder | `inline` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Opdracht externe medewerker overschrijven | Knooppunt binair |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON-array met args van externe medewerkers | `["pakketten/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Hervat herstelde ingediende/werkende taken bij het opstarten | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Niet-HTTPS-webhooks buiten localhost toestaan ​​| `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | ClamAV-scannen inschakelen | `0` |
| `VT_API_KEY` | VirusTotal API-sleutel | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Privésleutel voor ondertekening | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Openbare sleutel overschrijven | Automatisch afgeleid |---

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

1. Herbouw met `npm run build`
2. Voer `npm run verificatie:archives` opnieuw uit
3. Als ondertekenen is ingeschakeld, bevestig dan de openbare sleutel en de beschikbaarheid van `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Bevestig dat `VT_API_KEY` bestaat in repositorygeheimen
- Controleer of 'freshclam' is gelukt op de loper
- Lokaal opnieuw opbouwen met `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Voer 'npm run verificatie:scanners:strict' opnieuw uit### 📦 npm Publish Fails in CI

- Bevestig dat `NPM_TOKEN` bestaat in repositorygeheimen
- Bevestig dat de Git-tag exact overeenkomt met de `package.json`-versie
- Controleer of de door `release-verify` geüploade tarball bestaat in de workflow-artefacten### ✍️ Release Signing Fails in CI

- Bevestig dat `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` of `OMNI_SKILLS_SIGN_PRIVATE_KEY` bestaat in repositorygeheimen
- Als u een openbaar sleutelgeheim opgeeft, bevestig dan dat dit overeenkomt met de privésleutel
- Bevestig dat `openssl` beschikbaar is en dat de privésleutel PEM-geformatteerd is
- Lokaal opnieuw opbouwen met `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Voer 'npm run verificatie:archives:strict' opnieuw uit### 🔒 API/MCP Returns `401 Unauthorized`

- Controleer `OMNI_SKILLS_HTTP_BEARER_TOKEN` of `OMNI_SKILLS_HTTP_API_KEYS`
- Voeg de header 'Authorization: Bearer <token>' of 'x-api-key' toe### 🚦 API/MCP Returns `429 Too Many Requests`

- Verhoog `OMNI_SKILLS_RATE_LIMIT_MAX`
- Verbreed `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Reduceer burst-verkeer van clients of probes### 🛂 API/MCP Admin Runtime Returns `401`

- Controleer `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Verzend `x-admin-token: <token>` of `Authorisatie: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Schakel 'OMNI_SKILLS_HTTP_MAINTENANCE_MODE' uit
- Gebruik `/healthz` voor liveness-sondes tijdens onderhoud
- Gebruik `/admin/runtime` met het admin-token voor operatordiagnostiek### 🌍 Browser Requests Fail CORS Validation

- Controleer `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Voeg het exacte schema en de host toe, bijvoorbeeld `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Controleer `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- Controleer `OMNI_SKILLS_A2A_REDIS_URL`
- Controleer de Redis-connectiviteit vanaf elk knooppunt
- Inspecteer `/healthz` voor de `coördinatie` momentopname### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

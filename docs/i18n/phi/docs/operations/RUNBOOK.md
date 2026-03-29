# 🔧 System Runbook (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Ang kumpletong gabay sa pagpapatakbo para sa pagbuo, pagpapatunay, paghahatid, pag-secure, at pag-troubleshoot ng Omni Skills.**---

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

| Utos | Ano ang Ginagawa Nito |
|:--------|:-------------|
| `npm run validate` | Pinapatunayan ang `SKILL.md`, binabago ang `metadata.json`, kino-compute ang taxonomy/maturity/quality/security |
| `npm run taxonomy:report` | Nagpapakita ng mga suhestiyon sa pag-anod ng kategorya nang hindi muling sinusulat ang mga file |
| `npm run verify:scanners` | Kinukumpirma ang saklaw ng scanner na naitala sa nabuong metadata ng kasanayan |
| `npm run release:notes` | Bumubuo ng mga custom na tala sa paglabas mula sa metadata, mga bundle, at kasaysayan ng git |
| `npm run build` | Nagre-regenerate ng catalog/manifests/archives/checksums, nagbe-verify ng saklaw ng scanner at mga archive, muling bumubuo ng `docs/CATALOG.md` |
| `npm test` | Buong smoke suite sa buong CLI, API, MCP, sidecar, at mga daloy ng archive |---

## 🖥️ Visual Shell

Kasama na ngayon sa nai-publish na CLI ang isang Ink-based na operator shell:```bash
npx omni-skills ui
```

Kasalukuyang kakayahan:

- may gabay na pag-install para sa mga kilalang kliyente at custom na landas
- daloy ng paghahanap at pagkatapos ay i-install
- MCP launch wizard
- API launch wizard
- A2A launch wizard
- kamakailang pag-install at muling paglulunsad ng serbisyo
- pinangalanang install at mga preset ng serbisyo

Lokal na landas ng estado:```text
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

Awtomatikong sinusuri ng static scanner ang lahat ng mga kasanayan:

| Mamuno Pamilya | Mga halimbawa |
|:------------|:---------|
| 🎭 agarang iniksyon | Mga pattern ng exfiltration, override ng pagtuturo |
| 💣 Mga mapanirang utos | `rm -rf`, `format`, `mkfs` |
| 🔑 Mga kahina-hinalang landas | `/etc/shadow`, `~/.ssh`, mga file ng kredensyal |
| ⚠️ Mapanganib na mga primitive | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Nangangailangan ng `clamscan` sa `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Hash lookup lang — hindi alam na mga file ay**hindi na-upload**bilang default.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Mahigpit na gate ng paglabas:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Ang mga archive ay awtomatikong ginawa ng `npm run build`:

| Output | Landas |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Mga Checksum | `dist/archives/<skill>.checksums.txt` |

Ang `dist/` ay sadyang ginawa sa repositoryong ito. Ang nabuong catalog, manifest, bundle, at archive ay mga runtime input para sa mga daloy ng pag-install ng CLI, API download surface, MCP preview, A2A task handoff, smoke test, at release verification.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Opsyonal na pampublikong key override:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Kung walang ibinigay na pampublikong susi, ang build ay kukuha ng isa sa pamamagitan ng `openssl` sa `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Patakaran sa bersyon:

- mga pagtaas ng patch hanggang `.10`
- pagkatapos ng `.10`, ang susunod na release ay i-roll minor at ire-reset ang patch sa `.0`

Mga halimbawa:

- `0.1.0 -> 0.1.1`
- `0.1.10 -> 0.2.0`---

## 5️⃣ Installation Flows

| Sitwasyon | Utos |
|:---------|:--------|
| 📥 Default na pag-install (Antigravity) | `npx omni-skills` |
| 🎯 Tukoy na kasanayan + kliyente | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Pagtuklas → i-install | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Pag-install ng bundle | `npx omni-skills --cursor --bundle essentials` |
| 🩺 I-verify ang pag-install | `npx omni-skills doctor` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Salain | Bandila | Halimbawa |
|:-------|:-----|:--------|
| 📂 Kategorya | `--kategorya` | `--pagbuo ng kategorya` |
| 🖥️ Tool | `--tool` | `--tool cursor` |
| ⚠️ Panganib | `--panganib` | `--sa panganib' |
| 📊 Pagbukud-bukurin | `--uri` | `--uri-uriin ang kalidad\|pinakamahusay na kagawian\|antas\|seguridad\|pangalan` |
| 🔄 Order | `--order` | `--order asc\|desc` |
| ⭐ Min na kalidad | `--min-kalidad` | `--min-kalidad 80` |
| 📋 Min BP | `--min-best-practices` | `--min-best-practices 60` |
| 🎯 Min na antas | `--min-level` | `--min-level 2` |
| 🛡️ Min na seguridad | `--min-security` | `--min-security 90` |
| ✅ Pagpapatunay | `--validation-status` | `--validation-status lumipas` |
| 🛡️ Seguridad | `--security-status` | `--naipasa ang status-seguridad` |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Paraan | Endpoint | Layunin |
|:-------|:---------|:--------|
| `KUMUHA` | `/healthz` | Pagsusuri sa kalusugan |
| `KUMUHA` | `/openapi.json` | OpenAPI 3.1 spec |
| `KUMUHA` | `/v1/skills` | Listahan na may mga filter |
| `KUMUHA` | `/v1/search` | Full-text na paghahanap |
| `KUMUHA` | `/v1/skills/:id/archives` | Listahan ng archive |
| `KUMUHA` | `/v1/skills/:id/download/archive?format=zip` | I-download ang archive |
| `KUMUHA` | `/v1/skills/:id/download/archive/checksums` | Checksum manifest |### 🔐 Hosted API Hardening

| Tampok | Utos |
|:--------|:--------|
| 🔑 Tagapagbigay ng auth | `OMNI_SKILLS_HTTP_BEARER_TOKEN=palitan-ako npx omni-skills api` |
| 🗝️ API key auth | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Admin runtime auth | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Paglilimita sa rate | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Audit logging | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api` |
| 🌍 CORS allowlist | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 IP allowlist | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Maintenance mode | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api` |
| 🔁 Pinagkakatiwalaang proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 `/healthz` ay nananatiling bukas ayon sa disenyo; Ang mga ruta ng catalog ay nangangailangan ng auth kapag pinagana. Ang `GET /admin/runtime` ay nangangailangan ng admin token kapag na-configure at ibinabalik ang live na snapshot ng pamamahala.---

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

Maaari na ngayong i-preview o isulat ng sidecar ang MCP config para sa:

- Mga setting ng user at proyekto ni Claude
- Claude Desktop config
- Cline user config
- GitHub Copilot CLI user at repository config
- Cursor user at workspace config
- Codex TOML config
- Mga setting ng user at proyekto ng Gemini
- Kilo CLI user at project config
- Kilong workspace config
- Kiro user at mga setting ng proyekto
- OpenCode user at workspace config
- Ipagpatuloy ang workspace YAML config
- Windsurf user config
- Zed workspace config
- workspace `.mcp.json`
- VS Code workspace at user config
- Dev Container config

Ang `configure_client_mcp` ay nagbabalik din ng mga `recipe` ng bawat kliyente upang makuha ng mga operator ang katumbas na CLI o manu-manong mga hakbang sa pag-setup kasama ang preview.### 🧾 MCP Config Preview and Write Flow

Gamitin ang pinag-isang CLI kapag gusto mong bumuo ng config nang hindi direktang tinatawag ang MCP tool:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Inilalantad ng visual shell ang parehong daloy ng trabaho sa pamamagitan ng:

- `npx omni-skills ui`
- `Mga Serbisyo`
- `I-configure ang MCP client`

Ang command ay nananatili sa preview mode maliban kung ang `--write` ay naipasa.### 🔐 Hosted MCP Hardening

Parehong env vars ng API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Mga protektadong ruta**: `POST /mcp` · `GET /sse` · `POST /messages` · `GET /admin/runtime`

> 🟢 `/healthz` ay nananatiling bukas.---

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

Ang default na lokal na landas ay nananatiling simple-una:

- Ang pagtitiyaga ng `json` o `sqlite` ay maaaring tumakbo nang hindi pinagana ang queue polling
- itakda lang ang `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` kapag gusto mo ng multi-worker claim at lease failover
- panatilihin ang koordinasyon ng Redis bilang isang advanced na naka-host na opsyon, hindi ang baseline### 🧱 Multi-Worker Lease Setup

Magpatakbo ng higit sa isang A2A node laban sa parehong tindahan ng SQLite upang makakuha ng failover na nakabatay sa lease:```bash
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

Kung ang isang manggagawa ay namatay habang ang isang gawain ay `gumagana`, isa pang manggagawa ay maaaring bawiin ito pagkatapos mag-expire ang lease at magpatuloy sa pagpapatupad.### 🟥 Redis Coordination

Para sa mga naka-host o multi-node na deployment na hindi gustong maiugnay ang koordinasyon ng queue sa nakabahaging tindahan ng SQLite, ilipat ang coordinator sa Redis:```bash
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

Sa mode na ito:

- nabubuhay pa rin ang pagtitiyaga sa JSON o SQLite
- ang pag-claim ng gawain at pag-arkila ng pagmamay-ari ay lumipat sa Redis
- maraming A2A node ang maaaring magbahagi ng pila nang hindi umaasa sa SQLite row-level coordination### 📡 Endpoints

| Paraan | Landas | Layunin |
|:-------|:-----|:--------|
| `KUMUHA` | `/healthz` | Pagsusuri sa kalusugan |
| `KUMUHA` | `/.well-known/agent.json` | Ahente Card (A2A discovery) |
| `POST` | `/a2a` | JSON-RPC endpoint para sa mga gawain at streaming |### 🧭 Supported JSON-RPC Methods

| Paraan | Layunin |
|:-------|:--------|
| `mensahe/ipadala` | Magsimula o magpatuloy sa isang gawain |
| `mensahe/stream` | Magsimula ng gawain at mag-stream ng mga update sa SSE |
| `mga gawain/kunin` | Poll ng snapshot ng gawain |
| `mga gawain/kansela` | Kanselahin ang isang aktibong gawain |
| `mga gawain/muling mag-subscribe` | Ipagpatuloy ang mga update sa SSE para sa isang kasalukuyang gawain |
| `tasks/pushNotificationConfig/set` | Magrehistro ng push webhook |
| `tasks/pushNotificationConfig/get` | Magbasa ng push config |
| `tasks/pushNotificationConfig/list` | Maglista ng mga push config para sa isang gawain |
| `tasks/pushNotificationConfig/delete` | Mag-alis ng push config |### 📡 Task Lifecycle

Sinusuportahan ng kasalukuyang runtime ang mga estado ng gawaing ito:

- `nagsumite`
- `nagtatrabaho'
- `kailangan ng input`
- `nakumpleto`
- `kinansela`
- `bigo`

Ang mga gawain ay ipinagpapatuloy sa alinman sa isang JSON file o isang SQLite store at nire-reload sa pag-restart. Nananatiling available ang mga natapos at naantala na gawain. Ang mga gawain na `naisumite` o `gumagana` pa rin sa panahon ng pag-shutdown ay nare-recover gamit ang tahasang pag-restart ng metadata at awtomatikong ipinagpatuloy bilang default.### 🧪 Example: Start a Task

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

Ang imbakan ay mayroon na ngayong dalawang daloy ng trabaho:

| Daloy ng Trabaho | Trigger | Layunin |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR sa `pangunahin` | Bumuo, sumubok, at kumpirmahin ang mga nabuong artifact ay ginawa |
| `release.yml` | Tag push `v*` o manu-manong pagpapadala | Magpatakbo ng mga release-grade scanner, i-verify ang tag ng bersyon, lagdaan ang mga artifact, i-package ang tarball, i-publish sa npm, at gawin ang GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Lihim | Ginamit Ni | Layunin |
|:-------|:--------|:--------|
| `VT_API_KEY` o `VIRUSTOTAL` | `release.yml` | Nangangailangan ng VirusTotal hash lookup sa mga release build |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` o `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Kinakailangan ang pribadong key para sa nakahiwalay na pag-sign sa archive sa CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` o `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Opsyonal na pampublikong key override; kung hindi man ay nagmula sa pribadong key |
| `NPM_TOKEN` | `publish-npm` trabaho | I-authenticate ang `npm publish` para sa mga release ng tag |### 🦠 Release Scanner Policy

Ang `release.yml` ay nagtatakda o naghahanda ng:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || mga lihim.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` mula sa temp storage ng runner

Ibig sabihin, ang bawat paglabas na nakabatay sa tag ay dapat na:

- i-install at i-refresh ang ClamAV sa runner
- muling buuin ang metadata na may naka-enable na ClamAV
- muling buuin ang metadata gamit ang VirusTotal na pinagana
- I-decode ang pangunahing materyal sa pag-sign ng CI sa imbakan ng temp ng runner
- ipasa ang `npm run verify:scanners:strict`
- ipasa ang `npm run verify:archives:strict`
- pumasa sa mga pagsubok at pag-verify ng package bago i-publish ang npm
- Bumuo ng mga custom na tala sa paglabas mula sa metadata ng catalog at kasaysayan ng git
- gumawa ng GitHub Release na may mga naka-attach na asset ng release pagkatapos ma-publish---

## 1️⃣1️⃣ Environment Variables Reference

| Variable | Layunin | Default |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | I-override ang root path ng catalog | Awtomatikong natukoy |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Mga dagdag na pinapayagang write path | Mga kilalang ugat ng kliyente |
| `OMNI_SKILLS_MCP_MODE` | Itakda sa `local` para sa sidecar | Remote |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Alt flag para sa lokal na mode | `0` |
| `OMNI_SKILLS_API_BASE_URL` | Pampublikong API URL para sa MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Pampublikong base URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Token ng pagpapatunay ng maydala | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Mga key ng API na pinaghihiwalay ng kuwit | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Admin runtime auth token | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Max na kahilingan sa bawat window | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Palugit ng limitasyon sa rate (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Paganahin ang audit logging | `0` |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` o `text` audit output | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Opsyonal na landas ng file ng log ng audit | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Pinaghihiwalay ng kuwit na CORS na pinahihintulutang listahan | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Pinaghihiwalay ng kuwit na IP o CIDR allowlist | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Express trust proxy setting | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Paganahin ang mga tugon sa pagpapanatili | `0` |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Pagpapanatili `Subukan muli-Pagkatapos` ng mga segundo | `300` |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Simulated async task delay | `80` |
| `OMNI_SKILLS_A2A_STORE_TYPE` | `json`, `sqlite`, o `memory` task store | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Custom na A2A task store file | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Paganahin ang nakabahaging queue polling para sa mga manggagawang may alam sa pag-upa | `0` |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | `store`, `sqlite`, `local`, o `redis` coordinator | `tindahan` |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL para sa panlabas na koordinasyon | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Redis key prefix para sa queue metadata | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Queue polling interval para sa pag-upa ng mga manggagawa | `250` |
| `OMNI_SKILLS_A2A_LEASE_MS` | Tagal ng pag-upa bago mabawi ng ibang manggagawa ang isang gawain | `4000` |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Identifier ng matatag na manggagawa para sa pagmamay-ari at diagnostic ng pagpapaupa | Hostname + PID + random suffix |
| `OMNI_SKILLS_A2A_EXECUTOR` | `inline` o `process` task executor | `inline` |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | I-override ang utos ng external na manggagawa | Binary ng node |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON array ng external worker args | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Ipagpatuloy ang na-recover na isinumite/gumaganang mga gawain sa boot | `1` |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Payagan ang mga webhook na hindi HTTPS sa labas ng localhost | `0` |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Paganahin ang pag-scan ng ClamAV | `0` |
| `VT_API_KEY` | VirusTotal API key | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Pribadong susi para sa pagpirma | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Pampublikong key override | Awtomatikong hinango |---

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

1. Muling buuin gamit ang `npm run build`
2. Muling patakbuhin ang `npm run verify:archives`
3. Kung ang pagpirma ay pinagana, kumpirmahin ang pampublikong key at `openssl` availability### 🦠 Release Workflow Fails on Scanner Coverage

- Kumpirmahin ang `VT_API_KEY` na umiiral sa mga lihim ng imbakan
- Kumpirmahin ang `freshclam` na nagtagumpay sa runner
- Muling buuin nang lokal gamit ang `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Patakbuhin muli ang `npm run verify:scanners:strict`### 📦 npm Publish Fails in CI

- Kumpirmahin na ang `NPM_TOKEN` ay umiiral sa mga lihim ng imbakan
- Kumpirmahin ang Git tag na eksaktong tumutugma sa bersyon ng `package.json`
- Tingnan kung ang tarball na na-upload ng `release-verify` ay umiiral sa mga artifact ng workflow### ✍️ Release Signing Fails in CI

- Kumpirmahin ang `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` o `OMNI_SKILLS_SIGN_PRIVATE_KEY` na umiiral sa mga lihim ng imbakan
- Kung magbibigay ka ng lihim ng pampublikong susi, kumpirmahin na tumutugma ito sa pribadong susi
- Kumpirmahin ang `openssl` ay available at ang pribadong key ay PEM-formatted
- Muling buuin nang lokal gamit ang `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Patakbuhin muli ang `npm run verify:archives:strict`### 🔒 API/MCP Returns `401 Unauthorized`

- I-verify ang `OMNI_SKILLS_HTTP_BEARER_TOKEN` o `OMNI_SKILLS_HTTP_API_KEYS`
- Isama ang `Authorization: Bearer <token>` o `x-api-key` header### 🚦 API/MCP Returns `429 Too Many Requests`

- Taasan ang `OMNI_SKILLS_RATE_LIMIT_MAX`
- Palawakin ang `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS`
- Bawasan ang pagsabog ng trapiko mula sa mga kliyente o probe### 🛂 API/MCP Admin Runtime Returns `401`

- I-verify ang `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
- Ipadala ang `x-admin-token: <token>` o `Authorization: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Huwag paganahin ang `OMNI_SKILLS_HTTP_MAINTENANCE_MODE`
- Gumamit ng `/healthz` para sa liveness probe sa panahon ng maintenance
- Gumamit ng `/admin/runtime` kasama ang admin token para sa mga diagnostic ng operator### 🌍 Browser Requests Fail CORS Validation

- I-verify ang `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS`
- Isama ang eksaktong scheme at host, halimbawa `https://app.example.com`### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- I-verify ang `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
- I-verify ang `OMNI_SKILLS_A2A_REDIS_URL`
- Suriin ang koneksyon ng Redis mula sa bawat node
- Siyasatin ang `/healthz` para sa snapshot ng `coordination`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

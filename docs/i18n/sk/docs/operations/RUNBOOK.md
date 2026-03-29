# 🔧 System Runbook (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Kompletná prevádzková príručka na vytváranie, overovanie, poskytovanie, zabezpečenie a riešenie problémov Omni Skills.**---

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

| Príkaz | Čo to robí |
|:--------|:--------------|
| `npm run validate` | Validuje `SKILL.md`, regeneruje `metadata.json`, vypočítava taxonómiu/zrelosť/kvalitu/zabezpečenie |
| `npm run taxonómia:report` | Zobrazuje návrhy posunu kategórie bez prepisovania súborov |
| `npm spustiť overenie:skenery` | Potvrdzuje pokrytie skenerom zaznamenané vo vygenerovaných metadátach zručností |
| `npm run release:notes` | Generuje vlastné poznámky k vydaniu z metadát, balíkov a histórie git |
| `npm run build` | Obnovuje katalóg/manifesty/archívy/kontrolné súčty, overuje pokrytie skenerom a archivuje, prestavuje `docs/CATALOG.md` |
| `npm test` | Kompletný balík dymu cez CLI, API, MCP, postranný vozík a archívy |---

## 🖥️ Visual Shell

Publikované CLI teraz obsahuje shell operátora na báze atramentu:```bash
npx omni-skills ui
```

Aktuálne schopnosti:

- riadená inštalácia pre známych klientov a vlastné cesty
- postup vyhľadávania a inštalácie
- Sprievodca spustením MCP
- Sprievodca spustením API
- Sprievodca spustením A2A
- nedávne inštalácie a opätovné spustenie služby
- pomenované predvoľby inštalácie a služby

Miestna štátna cesta:```text
~/.omni-skills/state/ui-state.json
```

Záložné:```bash
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

Statický skener automaticky kontroluje všetky zručnosti:

| Pravidlo Rodina | Príklady |
|:------------|:---------|
| 🎭 Rýchla injekcia | Vzory exfiltrácie, potlačenie pokynov |
| 💣 Deštruktívne príkazy | `rm -rf`, `format`, `mkfs` |
| 🔑 Podozrivé cesty | `/etc/shadow`, `~/.ssh`, súbory poverení |
| ⚠️ Rizikoví primitívi | `shell=True`, `pickle.load`, `eval`, `extrahall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Vyžaduje `clamscan` v `PATH`.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Iba vyhľadávanie hash — neznáme súbory sa v predvolenom nastavení**nenahrávajú**.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Prísna uvoľňovacia brána:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Archívy vytvára automaticky `npm run build`:

| Výstup | Cesta |
|:-------|:-----|
| 📦 PSČ | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Kontrolné súčty | `dist/archives/<skill>.checksums.txt` |

`dist/` je v tomto úložisku zadaný úmyselne. Vygenerovaný katalóg, manifesty, balíky a archívy sú vstupy za behu pre inštalačné toky CLI, povrchy sťahovania API, ukážky MCP, odovzdanie úloh A2A, testy dymu a overenie vydania.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Voliteľné prepísanie verejného kľúča:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Ak nie je zadaný žiadny verejný kľúč, zostava ho odvodí cez `openssl` do `dist/signing/`.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Pravidlá pre verzie:

- prírastky opravy do `.10`
- po `.10` sa ďalšie vydanie zmení na menšie a obnoví opravu na `.0`

Príklady:

- "0.1.0 -> 0.1.1".
- "0.1.10 -> 0.2.0".---

## 5️⃣ Installation Flows

| Scenár | Príkaz |
|:---------|:--------|
| 📥 Predvolená inštalácia (Antigravitácia) | `npx omni-skills` |
| 🎯 Špecifická zručnosť + klient | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Objavovanie → inštalácia | `npx omni-skills nájsť figma --tool kurzor --install --yes` |
| 📦 Inštalácia balíka | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Overiť inštaláciu | `npx omni-skills doctor` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Filter | Vlajka | Príklad |
|:-------|:-----|:--------|
| 📂 Kategória | "--kategória" | "--vývoj kategórie" |
| 🖥️ Nástroj | "--nástroj" | "--nástrojový kurzor" |
| ⚠️ Riziko | "--riziko" | "--bezpečné pre riziko" |
| 📊 Zoradiť | "--triediť" | `--kvalita triedenia\|osvedčené postupy\|úroveň\|zabezpečenie\|názov` |
| 🔄 Objednávka | "--objednať" | `--order asc\|desc` |
| ⭐ Minimálna kvalita | "--min-kvalita" | `--min-kvalita 80` |
| 📋 Minimálny tlak | "--min-best-practices" | `--min-best-practices 60` |
| 🎯 Minimálna úroveň | `--min-level` | `--min-úroveň 2` |
| 🛡️ Minimálna bezpečnosť | "--min-bezpečnosť" | `--min-bezpečnosť 90` |
| ✅ Overenie | `--validačný-stav` | `--validačný-stav prešiel` |
| 🛡️ Bezpečnosť | "--bezpečnostný-stav" | "--bezpečnostný-stav prešiel" |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Metóda | Koncový bod | Účel |
|:-------|:---------|:--------|
| "ZÍSKAŤ" | `/healthz` | Zdravotná prehliadka |
| "ZÍSKAŤ" | `/openapi.json` | Špecifikácia OpenAPI 3.1 |
| "ZÍSKAŤ" | `/v1/skills` | Zoznam s filtrami |
| "ZÍSKAŤ" | `/v1/search` | Fulltextové vyhľadávanie |
| "ZÍSKAŤ" | `/v1/skills/:id/archives` | Archívny záznam |
| "ZÍSKAŤ" | `/v1/skills/:id/download/archive?format=zip` | Stiahnuť archív |
| "ZÍSKAŤ" | `/v1/skills/:id/download/archive/checksums` | Manifest kontrolného súčtu |### 🔐 Hosted API Hardening

| Funkcia | Príkaz |
|:--------|:--------|
| 🔑 Oprávnenie na doručiteľa | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ Autentifikácia kľúča API | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api` |
| 🛂 Správcovská runtime autorizácia | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Obmedzenie sadzieb | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api` |
| 📝 Protokolovanie auditu | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills API` |
| 🌍 Zoznam povolených CORS | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 Zoznam povolených IP | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api` |
| 🚧 Režim údržby | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills API` |
| 🔁 Dôveryhodný proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🢢 `/healthz` zostáva otvorený podľa návrhu; trasy katalógu vyžadujú autorizáciu, keď sú povolené. `ZÍSKAŤ /admin/runtime` vyžaduje pri konfigurácii token správcu a vráti aktuálnu snímku riadenia.---

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

Postranný vozík teraz môže zobraziť ukážku alebo zapísať konfiguráciu MCP pre:

- Claude užívateľské a projektové nastavenia
- Konfigurácia Claude Desktop
- Konfigurácia používateľa Cline
- GitHub Copilot CLI používateľa a konfigurácia úložiska
- Konfigurácia používateľa kurzora a pracovného priestoru
- Konfigurácia Codex TOML
- Gemini užívateľské a projektové nastavenia
- Používateľ Kilo CLI a konfigurácia projektu
- Konfigurácia pracovného priestoru Kilo
- Kiro užívateľské a projektové nastavenia
- Konfigurácia používateľa a pracovného priestoru OpenCode
- Pokračovať v konfigurácii YAML pracovného priestoru
- Konfigurácia používateľa Windsurf
- Konfigurácia pracovného priestoru Zed
- pracovný priestor `.mcp.json`
- Pracovný priestor kódu VS a konfigurácia používateľa
- Konfigurácia kontajnera pre vývojárov

`configure_client_mcp` tiež vráti `recepty` pre každého klienta, takže operátori získajú ekvivalentné CLI alebo manuálne kroky nastavenia spolu s ukážkou.### 🧾 MCP Config Preview and Write Flow

Ak chcete vygenerovať konfiguráciu bez priameho volania nástroja MCP, použite jednotné CLI:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Vizuálny shell odhaľuje rovnaký pracovný postup prostredníctvom:

- `npx omni-skills ui`
- "Služby".
- `Konfigurovať klienta MCP`

Príkaz zostane v režime ukážky, pokiaľ neprejde príkaz `--write`.### 🔐 Hosted MCP Hardening

Rovnaké premenné prostredia ako rozhranie API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Chránené cesty**: `POST /mcp` · `GET /sse` · `POST /správy` · `GET /admin/runtime`

> 🟢 `/healthz` zostáva otvorené.---

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

Predvolená miestna cesta zostáva jednoduchá:

- Perzistencia `json` alebo `sqlite` môže bežať so zakázaným dotazovaním vo fronte
- nastavte `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` len vtedy, keď chcete nárokovať viac pracovníkov a prenajímať zlyhanie
- Ponechať koordináciu Redis ako rozšírenú možnosť hosťovania, nie základnú líniu### 🧱 Multi-Worker Lease Setup

Spustite viac ako jeden uzol A2A v rovnakom obchode SQLite, aby ste získali zlyhanie na základe prenájmu:```bash
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

Ak pracovník zomrie, keď úloha `pracuje`, iný pracovník ju môže po vypršaní prenájmu získať späť a pokračovať vo vykonávaní.### 🟥 Redis Coordination

Pre hostené alebo viacuzlové nasadenia, ktoré si neželajú, aby bola koordinácia frontov viazaná na zdieľaný obchod SQLite, prepnite koordinátora na Redis:```bash
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

V tomto režime:

- vytrvalosť stále žije v JSON alebo SQLite
- vymáhanie úloh a presun vlastníctva prenájmu do spoločnosti Redis
- viaceré uzly A2A môžu zdieľať front bez spoliehania sa na koordináciu na úrovni riadkov SQLite### 📡 Endpoints

| Metóda | Cesta | Účel |
|:-------|:-----|:--------|
| "ZÍSKAŤ" | `/healthz` | Zdravotná prehliadka |
| "ZÍSKAŤ" | `/.well-known/agent.json` | Karta agenta (objav A2A) |
| 'POST' | `/a2a` | Koncový bod JSON-RPC pre úlohy a streamovanie |### 🧭 Supported JSON-RPC Methods

| Metóda | Účel |
|:-------|:--------|
| "správa/odoslanie" | Spustenie alebo pokračovanie úlohy |
| "správa/stream" | Spustite úlohu a streamujte aktualizácie SSE |
| "úlohy/dostať" | Hlasovanie o snímke úlohy |
| "úlohy/zrušiť" | Zrušiť aktívnu úlohu |
| "úlohy/opätovné prihlásenie" | Obnoviť aktualizácie SSE pre existujúcu úlohu |
| `tasks/pushNotificationConfig/set` | Zaregistrujte push webhook |
| `tasks/pushNotificationConfig/get` | Prečítajte si konfiguráciu push |
| `tasks/pushNotificationConfig/list` | Zoznam push konfigurácií pre úlohu |
| `tasks/pushNotificationConfig/delete` | Odstráňte konfiguráciu push |### 📡 Task Lifecycle

Aktuálny runtime podporuje tieto stavy úloh:

- "predložené".
- "pracuje".
- "vyžaduje sa vstup".
- "dokončené".
- "zrušené".
- "nepodarilo sa".

Tasks are persisted to either a JSON file or a SQLite store and reloaded on restart. Completed and interrupted tasks remain available. Úlohy, ktoré boli počas vypínania stále „odoslané“ alebo „fungujúce“, sa obnovia s explicitnými metadátami reštartu a predvolene sa obnovia automaticky.### 🧪 Example: Start a Task

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

Úložisko má teraz dva pracovné postupy:

| Pracovný postup | Spúšťač | Účel |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR to `main` | Zostavte, otestujte a potvrďte, že vygenerované artefakty sú odovzdané |
| `release.yml` | Tag push `v*` alebo manuálne odoslanie | Spustite skenery na úrovni vydania, overte značku verzie, podpíšte artefakty, zabaľte tarball, publikujte do npm a vytvorte GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Tajomstvo | Používa | Účel |
|:-------|:--------|:--------|
| `VT_API_KEY` alebo `VIRUSTOTAL` | `release.yml` | Vyžadovať vyhľadávanie hash VirusTotal vo verziách vydania |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` alebo `OMNI_SKILLS_SIGN_PRIVATE_KEY` | `release.yml` | Požadovaný súkromný kľúč na podpisovanie oddeleného archívu v CI |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` alebo `OMNI_SKILLS_SIGN_PUBLIC_KEY` | `release.yml` | Voliteľné prepísanie verejného kľúča; inak odvodené od súkromného kľúča |
| `NPM_TOKEN` | `publish-npm` práca | Overte `npm publish` pre vydania značiek |### 🦠 Release Scanner Policy

`release.yml` nastavuje alebo pripravuje:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ secrets.VT_API_KEY || tajomstvá.VIRUSTOTAL }}`
- `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` z dočasného úložiska bežca

To znamená, že každé vydanie založené na značke musí:

- nainštalujte a obnovte ClamAV na bežec
- regenerovať metadáta s povoleným ClamAV
- regenerovať metadáta so zapnutou funkciou VirusTotal
- dekódovať materiál podpisového kľúča CI do úložiska teploty bežca
- prejsť `npm spustiť overiť:skenery:strikt`
- prejsť príkazom `npm spustiť overiť:archive:strict`
- prejsť testami a overením balíka pred zverejnením npm
- generovať vlastné poznámky k vydaniu z metadát katalógu a histórie git
- po zverejnení vytvorte vydanie GitHub s pripojenými aktívami vydania---

## 1️⃣1️⃣ Environment Variables Reference

| Premenná | Účel | Predvolené |
|:---------|:--------|:--------|
| `OMNI_SKILLS_ROOT` | Prepísať koreňovú cestu katalógu | Automaticky zistené |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Extra povolené cesty zápisu | Známe klientske korene |
| `OMNI_SKILLS_MCP_MODE` | Nastaviť na „miestne“ pre postranný vozík | Diaľkové |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Príznak Alt pre lokálny režim | "0" |
| `OMNI_SKILLS_API_BASE_URL` | Verejná adresa URL rozhrania API pre MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Verejná základná URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Autentizačný token nosiča | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Kľúče API oddelené čiarkami | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Autorizačný token za behu správcu | — |
| „OMNI_SKILLS_RATE_LIMIT_MAX“ | Maximálny počet požiadaviek na okno | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Okno limitu sadzby (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Povoliť protokolovanie auditu | "0" |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | Výstup auditu `json` alebo `text` | `json` |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Voliteľná cesta k súboru denníka auditu | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Zoznam povolených pôvodu CORS oddelený čiarkami | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Zoznam povolených IP alebo CIDR oddelených čiarkami | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Nastavenie proxy servera Express Trust | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Povoliť reakcie údržby | "0" |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | Údržba „Opakovať po sekundách“ | "300" |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Oneskorenie simulovanej asynchrónnej úlohy | "80" |
| „OMNI_SKILLS_A2A_STORE_TYPE“ | `json`, `sqlite` alebo `memory` task store | `json` |
| `OMNI_SKILLS_A2A_STORE_PATH` | Custom A2A task store file | `~/.omni-skills/state/a2a-tasks.json` |
| `OMNI_SKILLS_A2A_QUEUE_ENABLED` | Povoliť zdieľaný front dotazovania pre pracovníkov, ktorí vedia o prenájme | "0" |
| „OMNI_SKILLS_A2A_COORDINATION_TYPE“ | koordinátor `store`, `sqlite`, `local` alebo `redis` | "obchod" |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL pre externú koordináciu | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Predpona kľúča Redis pre metadáta frontu | `omni-skills:a2a` |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Interval výberu pre prenajímateľov | "250" |
| `OMNI_SKILLS_A2A_LEASE_MS` | Trvanie prenájmu, kým iný pracovník môže získať späť úlohu | "4000" |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Identifikátor stabilného pracovníka pre vlastníctvo prenájmu a diagnostiku | Názov hostiteľa + PID + náhodná prípona |
| `OMNI_SKILLS_A2A_EXECUTOR` | "inline" alebo "proces" vykonávateľ úloh | "inline" |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Prepísať príkaz externého pracovníka | Binárny uzol |
| `OMNI_SKILLS_A2A_WORKER_ARGS` | JSON pole argumentov externých pracovníkov | `["packages/server-a2a/src/worker.js"]" |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS` | Obnoviť obnovené odoslané/pracovné úlohy pri zavádzaní | "1" |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS` | Povoliť webhooky bez protokolu HTTPS mimo localhost | "0" |
| `OMNI_SKILLS_ENABLE_CLAMAV` | Povoliť skenovanie ClamAV | "0" |
| `VT_API_KEY` | VirusTotal API kľúč | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Súkromný kľúč na podpis | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Prepísanie verejného kľúča | Automaticky odvodené |---

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

1. Obnovte pomocou príkazu `npm run build`
2. Znova spustite `npm run verifikovať:archive`
3. Ak je povolené podpisovanie, potvrďte verejný kľúč a dostupnosť `openssl`### 🦠 Release Workflow Fails on Scanner Coverage

- Potvrďte, že kľúč `VT_API_KEY` existuje v tajných údajoch úložiska
- Potvrďte, že `freshclam` u bežca uspel
- Obnovte lokálne pomocou `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... zostavenie spustenia npm`
- Znova spustite `npm run over:skenery:strict`### 📦 npm Publish Fails in CI

- Potvrďte, že v tajných údajoch úložiska existuje `NPM_TOKEN`
- Potvrďte, že značka Git sa presne zhoduje s verziou súboru `package.json`
- Skontrolujte, či tarball nahraný funkciou `release-verify` existuje v artefaktoch pracovného postupu### ✍️ Release Signing Fails in CI

– Potvrďte, že v tajných kľúčoch úložiska existuje kľúč „OMNI_SKILLS_SIGN_PRIVATE_KEY_B64“ alebo „OMNI_SKILLS_SIGN_PRIVATE_KEY“
- Ak zadáte tajný kľúč verejného kľúča, potvrďte, že sa zhoduje so súkromným kľúčom
- Potvrďte, že je k dispozícii `openssl` a súkromný kľúč je vo formáte PEM
- Obnovte lokálne pomocou `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Znova spustite príkaz `npm spustiť overiť:archive:strict`### 🔒 API/MCP Returns `401 Unauthorized`

– Overte `OMNI_SKILLS_HTTP_BEARER_TOKEN` alebo `OMNI_SKILLS_HTTP_API_KEYS`
– Zahrňte hlavičku „Authorization: Bearer <token>“ alebo „x-api-key“### 🚦 API/MCP Returns `429 Too Many Requests`

- Zvýšte „OMNI_SKILLS_RATE_LIMIT_MAX“.
- Rozšírte „OMNI_SKILLS_RATE_LIMIT_WINDOW_MS“.
- Znížte nárazovú prevádzku od klientov alebo sond### 🛂 API/MCP Admin Runtime Returns `401`

- Overte `OMNI_SKILLS_HTTP_ADMIN_TOKEN`
– Odoslať „x-admin-token: <token>“ alebo „Autorizácia: nosič <admin-token>“### 🚧 API/MCP Returns `503 Maintenance mode enabled`

– Zakázať „OMNI_SKILLS_HTTP_MAINTENANCE_MODE“.
- Použite `/healthz` pre sondy živosti počas údržby
- Na diagnostiku operátora použite `/admin/runtime` s tokenom správcu### 🌍 Browser Requests Fail CORS Validation

– Overte „OMNI_SKILLS_HTTP_ALLOWED_ORIGINS“.
– Uveďte presnú schému a hostiteľa, napríklad https://app.example.com### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Overte `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis`
– Overte „OMNI_SKILLS_A2A_REDIS_URL“.
- Skontrolujte pripojenie Redis z každého uzla
- Skontrolujte `/healthz` pre snímku `koordinácie`### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

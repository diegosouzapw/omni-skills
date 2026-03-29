# 🔧 System Runbook (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**A teljes használati útmutató az Omni Skills felépítéséhez, érvényesítéséhez, kiszolgálásához, biztosításához és hibaelhárításához.**---

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

| Parancs | Mit csinál |
|:--------|:--------------|
| `npm run validate` | Ellenőrzi a „SKILL.md” fájlt, újragenerálja a „metadata.json” fájlt, kiszámítja a taxonómiát/marity/quality/security |
| `npm run taxonomy:report` | Kategória-eltolódási javaslatokat jelenít meg fájlok átírása nélkül |
| `npm run verify:scanners` | Megerősíti a szkenner lefedettségét a generált készségek metaadatai között |
| `npm run release:notes` | Egyéni kiadási megjegyzéseket hoz létre metaadatokból, csomagokból és Git előzményekből |
| `npm run build` | Újragenerálja a katalógust/manifesteket/archívumokat/ellenőrző összegeket, ellenőrzi a szkenner lefedettségét és archívumát, újraépíti a `docs/CATALOG.md' fájlt |
| "npm teszt" | Teljes füstcsomag a CLI, API, MCP, oldalkocsi és archív folyamokon keresztül |---

## 🖥️ Visual Shell

A közzétett parancssori felület immár tartalmaz egy tinta alapú operátorhéjat:```bash
npx omni-skills ui
```

Jelenlegi képességek:

- Irányított telepítés ismert kliensekhez és egyéni elérési utakhoz
- keresés, majd telepítés folyamat
- MCP indító varázsló
- API indító varázsló
- A2A indító varázsló
- legutóbbi telepítések és szolgáltatás újraindítások
- megnevezett telepítési és szervizbeállítások

Helyi állam elérési útja:```text
~/.omni-skills/state/ui-state.json
```

Tartalék:```bash
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

A statikus szkenner automatikusan ellenőrzi az összes készséget:

| Szabálycsalád | Példák |
|:------------|:---------|
| 🎭 Azonnali injekció | Kiszűrési minták, utasítások felülbírálása |
| 💣 Pusztító parancsok | "rm -rf", "formátum", "mkfs" |
| 🔑 Gyanús utak | `/etc/shadow`, `~/.ssh`, hitelesítő adatok |
| ⚠️ Kockázatos primitívek | `shell=True`, `pickle.load`, `eval`, `extractall` |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Szükséges a „camscan” a „PATH”-ban.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Csak hash keresés – az ismeretlen fájlok alapértelmezés szerint**nincs feltöltve**.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Szigorú kioldási kapu:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

Az archívumokat az "npm run build" automatikusan hozza létre:

| Kimenet | Útvonal |
|:-------|:-----|
| 📦 ZIP | `dist/archives/<skill>.zip` |
| 📦 Tarball | `dist/archives/<skill>.tar.gz` |
| 🔒 Ellenőrző összegek | `dist/archives/<skill>.checksums.txt` |

A `dist/` szándékosan elkövetett ebben a tárolóban. Az előállított katalógus, jegyzékek, csomagok és archívumok futásidejű bemenetek a CLI-telepítési folyamatokhoz, az API-letöltési felületekhez, az MCP-előzetekhez, az A2A-feladat-átadáshoz, a füsttesztekhez és a kiadás-ellenőrzéshez.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Opcionális nyilvános kulcs felülírása:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Ha nincs megadva nyilvános kulcs, a build az `openssl`-en keresztül származtat egyet a `dist/signing/` fájlba.### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Verziószabályzat:

- a javítás 0,10-ig növeli
- a „.10” után a következő kiadás kisebb értékű lesz, és visszaállítja a javítást „.0”-ra

Példák:

- "0.1.0 -> 0.1.1".
- "0.1.10 -> 0.2.0".---

## 5️⃣ Installation Flows

| Forgatókönyv | Parancs |
|:---------|:--------|
| 📥 Alapértelmezett telepítés (Antigravitáció) | "npx omni-skills" |
| 🎯 Specifikus készség + ügyfél | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Felfedezés → telepítés | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Csomag telepítés | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Ellenőrizze a telepítést | `npx omni-skills doctor` |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Szűrő | zászló | Példa |
|:-------|:-----|:--------|
| 📂 Kategória | "--kategória" | "--kategória fejlesztés" |
| 🖥️ Eszköz | "--eszköz" | `--eszköz kurzor` |
| ⚠️ Kockázat | "--kockázat" | "--kockázatbiztos" |
| 📊 Rendezés | "--rendezés" | `--sort quality\|best-practices\|level\|security\|name` |
| 🔄 Rendelés | "--rend" | `--order asc\|desc` |
| ⭐ Minimális minőség | "--min-minőség" | "--min-minőség 80" |
| 📋 Min BP | "--min-best Practices" | `--min-best-practices 60` |
| 🎯 Minimális szint | `--min-szint` | `--min-2. szint` |
| 🛡️ Minimális biztonság | "--min-security" | "--min-security 90" |
| ✅ Érvényesítés | "--validation-status" | `--ellenőrzési állapot sikeres` |
| 🛡️ Biztonság | "--biztonsági állapot" | "--biztonsági állapot sikeres" |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Módszer | Végpont | Cél |
|:-------|:----------|:--------|
| "GET" | "/healthz" | állapotfelmérés |
| "GET" | `/openapi.json` | OpenAPI 3.1 specifikáció |
| "GET" | "/v1/készségek" | Lista szűrőkkel |
| "GET" | "/v1/search" | Teljes szöveges keresés |
| "GET" | `/v1/skills/:id/archives` | Archív lista |
| "GET" | `/v1/skills/:id/download/archive?format=zip` | Archívum letöltése |
| "GET" | `/v1/skills/:id/download/archive/checksums` | Ellenőrzőösszeg jegyzék |### 🔐 Hosted API Hardening

| Funkció | Parancs |
|:--------|:--------|
| 🔑 Bemutató hitelesítés | `OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api` |
| 🗝️ API kulcs hitelesítés | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api' |
| 🛂 Admin futásidejű hitelesítés | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api` |
| 🚦 Díjkorlátozás | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx minden készséges API' |
| 📝 Audit naplózás | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx minden készség api` |
| 🌍 CORS engedélyezési lista | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api` |
| 🧱 IP engedélyezési lista | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills API' |
| 🚧 Karbantartási mód | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx minden készséges API' |
| 🔁 Megbízható proxy | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api` |

> 🟢 `/healthz` tervezés szerint nyitva marad; a katalógusútvonalak engedélyezése esetén hitelesítést igényelnek. A „GET /admin/runtime” konfiguráláskor megköveteli az adminisztrátori tokent, és visszaadja az élő irányítási pillanatképet.---

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

Az oldalkocsi most megtekintheti vagy írhatja az MCP-konfigurációt a következőkhöz:

- Claude felhasználói és projektbeállítások
- Claude Desktop konfiguráció
- Cline felhasználói konfiguráció
- GitHub Copilot CLI felhasználói és tárház konfigurációja
- Kurzor felhasználó és munkaterület konfigurációja
- Codex TOML konfig
- Gemini felhasználói és projektbeállítások
- Kilo CLI felhasználó és projekt konfigurációja
- Kilo munkaterület konfiguráció
- Kiro felhasználói és projektbeállítások
- OpenCode felhasználói és munkaterület-konfiguráció
- Folytassa a munkaterület YAML konfigurációját
- Windsurf felhasználói konfiguráció
- Zed munkaterület konfigurációja
- ".mcp.json" munkaterület
- VS Code munkaterület és felhasználói konfiguráció
- Dev Container konfigurációja

A "configure_client_mcp" kliensenkénti "recepteket" is visszaad, így az operátorok megkapják a megfelelő CLI-t vagy a kézi beállítási lépéseket az előnézettel együtt.### 🧾 MCP Config Preview and Write Flow

Használja az egyesített parancssori felületet, ha az MCP eszköz közvetlen meghívása nélkül szeretne konfigurációt generálni:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

A vizuális shell ugyanazt a munkafolyamatot jeleníti meg:

- "npx omni-skills ui".
- "Szolgáltatások".
- `MCP kliens konfigurálása`

A parancs előnézeti módban marad, hacsak nem adjuk át a `--write` parancsot.### 🔐 Hosted MCP Hardening

Ugyanazok az env vars, mint az API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Védett útvonalak**: "POST /mcp" · "GET /sse" · "POST /üzenetek" · "GET /admin/runtime"

> 🟢 `/healthz` nyitva marad.---

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

Az alapértelmezett helyi elérési út mindenekelőtt egyszerű marad:

- A "json" vagy "sqlite" perzisztencia futhat a sorlekérdezés letiltásával
- csak akkor állítsa be az "OMNI_SKILLS_A2A_QUEUE_ENABLED=1" értéket, ha több munkás követelést és bérleti feladatátvételt szeretne
- tartsa meg a Redis-koordinációt fejlett hosztolt opcióként, nem pedig alapként### 🧱 Multi-Worker Lease Setup

Futtasson egynél több A2A-csomópontot ugyanabban az SQLite-tárolóban a bérlet alapú feladatátvételhez:```bash
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

Ha egy dolgozó meghal, miközben egy feladat "dolgozik", egy másik dolgozó visszaigényelheti azt a bérleti szerződés lejárta után, és folytathatja a végrehajtást.### 🟥 Redis Coordination

Azoknál a hosztolt vagy több csomópontból álló központi telepítéseknél, amelyek nem akarják, hogy a sorkoordináció a megosztott SQLite-tárhoz legyen kötve, állítsa át a koordinátort Redis-re:```bash
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

Ebben a módban:

- a perzisztencia továbbra is él JSON-ban vagy SQLite-ban
- a feladatigénylés és a lízingtulajdon átkerül a Redishez
- több A2A csomópont megoszthat egy sort anélkül, hogy az SQLite sorszintű koordinációra támaszkodna### 📡 Endpoints

| Módszer | Útvonal | Cél |
|:-------|:-----|:--------|
| "GET" | "/healthz" | állapotfelmérés |
| "GET" | `/.well-known/agent.json` | Ügynökkártya (A2A felfedezés) |
| "POST" | "/a2a" | JSON-RPC végpont feladatokhoz és adatfolyamokhoz |### 🧭 Supported JSON-RPC Methods

| Módszer | Cél |
|:-------|:---------|
| `üzenet/küldés` | Feladat indítása vagy folytatása |
| `üzenet/folyam` | Indítson el egy feladatot és streamelje az SSE frissítéseit |
| `feladatok/get` | Feladat pillanatképének lekérdezése |
| `feladatok/mégse` | Egy aktív feladat megszakítása |
| `feladatok/újrafeliratkozás` | SSE frissítések folytatása egy meglévő feladathoz |
| `tasks/pushNotificationConfig/set` | Push webhook regisztrálása |
| `tasks/pushNotificationConfig/get` | Push konfiguráció olvasása |
| `tasks/pushNotificationConfig/list` | Egy feladat push konfigurációinak listája |
| `tasks/pushNotificationConfig/delete` | Távolítsa el a push konfigurációt |### 📡 Task Lifecycle

A jelenlegi futási környezet támogatja a következő feladatállapotokat:

- `benyújtva`
- "dolgozik".
- "bemenet szükséges".
- "befejezve".
- `törölve`
- `nem sikerült`

A feladatok egy JSON-fájlban vagy egy SQLite-tárolóban maradnak meg, és újraindításkor újra betöltődnek. A befejezett és megszakított feladatok elérhetőek maradnak. Azokat a feladatokat, amelyeket a leállítás során még "elküldtek" vagy "működtek", a rendszer explicit újraindítási metaadatokkal állítja helyre, és alapértelmezés szerint automatikusan folytatódik.### 🧪 Example: Start a Task

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

Az adattárnak most két munkafolyamata van:

| Munkafolyamat | Trigger | Cél |
|:---------|:--------|:---------|
| `validate.yml` | Nyomja meg/PR a "fő" | Építsd meg, teszteld és ellenőrizd, hogy a generált műtermékek véglegesek-e |
| `release.yml` | Címke push `v*` vagy kézi küldés | Futtasson kiadási szintű szkennereket, ellenőrizze a verziócímkét, írja alá a melléktermékeket, csomagolja be a tarballt, tegye közzé npm-en, és hozza létre a GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Titok | Használta | Cél |
|:-------|:---------|:--------|
| "VT_API_KEY" vagy "VIRUSTOTAL" | `release.yml` | VirusTotal hash-keresések megkövetelése a kiadás buildjeiben |
| "OMNI_SKILLS_SIGN_PRIVATE_KEY_B64" vagy "OMNI_SKILLS_SIGN_PRIVATE_KEY" | `release.yml` | Szükséges privát kulcs a leválasztott archívum aláírásához CI |
| "OMNI_SKILLS_SIGN_PUBLIC_KEY_B64" vagy "OMNI_SKILLS_SIGN_PUBLIC_KEY" | `release.yml` | Opcionális nyilvános kulcs felülírása; egyébként a privát kulcsból származtatva |
| "NPM_TOKEN" | `publish-npm` job | Az `npm publish` hitelesítése a címkekiadásokhoz |### 🦠 Release Scanner Policy

`release.yml` beállítja vagy előkészíti:

- `OMNI_SKILLS_ENABLE_CLAMAV=1`
- `VT_API_KEY=${{ titkok.VT_API_KEY || titkok.VIRUSTOTAL }}`
- "OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH" a futó ideiglenes tárhelyéről

Ez azt jelenti, hogy minden címkealapú kiadásnak:

- telepítse és frissítse a ClamAV-ot a futón
- újra generálja a metaadatokat a ClamAV engedélyezésével
- újra generálja a metaadatokat a VirusTotal engedélyezésével
- dekódolja a CI aláíró kulcs anyagát a futó temp tárolóba
- adja meg az `npm run verify:scanners:strict`
- adja meg az `npm run verify:archives:strict`
- át kell menni a teszteken és a csomagellenőrzésen az npm közzététel előtt
- egyéni kiadási megjegyzések létrehozása a katalógus metaadataiból és a git előzményeiből
- közzététel után hozzon létre egy GitHub-kiadást csatolt kiadási eszközökkel---

## 1️⃣1️⃣ Environment Variables Reference

| Változó | Cél | Alapértelmezett |
|:---------|:--------|:---------|
| `OMNI_SKILLS_ROOT` | Katalógus gyökérútvonalának felülbírálása | Automatikusan észlelt |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Extra engedélyezett írási útvonalak | Ismert ügyfélgyökerek |
| `OMNI_SKILLS_MCP_MODE` | Állítsa `helyi` értékre az oldalkocsihoz | Távoli |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Alt jelző a helyi módhoz | "0" |
| `OMNI_SKILLS_API_BASE_URL` | Nyilvános API URL az MCP-hez | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Nyilvános alap URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Bemutató hitelesítési token | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Vesszővel elválasztott API kulcsok | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Admin futásidejű hitelesítési token | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Maximális kérések ablakonként | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate limit ablak (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Ellenőrzési naplózás engedélyezése | "0" |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | "json" vagy "szöveg" ellenőrzési kimenet | "json" |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Opcionális naplófájl elérési útja | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | Vesszővel elválasztott CORS eredetű engedélyezési lista | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Vesszővel elválasztott IP vagy CIDR engedélyezési lista | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Expressz megbízható proxy beállítása | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Karbantartási válaszok engedélyezése | "0" |
| "OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS" | Karbantartás `Újrapróbálkozás után` másodperc | "300" |
| `OMNI_SKILLS_A2A_PROCESSING_DELAY_MS` | Szimulált aszinkron feladat késleltetés | "80" |
| `OMNI_SKILLS_A2A_STORE_TYPE` | "json", "sqlite" vagy "memória" feladattároló | "json" |
| `OMNI_SKILLS_A2A_STORE_PATH` | Egyéni A2A feladattároló fájl | `~/.omni-skills/state/a2a-tasks.json` |
| "OMNI_SKILLS_A2A_QUEUE_ENABLED" | Megosztott várólista lekérdezés engedélyezése a bérelt munkavállalók számára | "0" |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | "store", "sqlite", "local" vagy "redis" koordinátor | "üzlet" |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL külső koordinációhoz | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX` | Redis kulcs előtag a várólista metaadataihoz | "minden készségek:a2a" |
| `OMNI_SKILLS_A2A_WORKER_POLL_MS` | Sorlekérdezési intervallum bérelt munkavállalók számára | "250" |
| `OMNI_SKILLS_A2A_LEASE_MS` | A bérlet időtartama, mielőtt egy másik munkavállaló visszakövetelhetne egy feladatot | "4000" |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Stabil munkavállaló azonosító a bérleti tulajdonjoghoz és a diagnosztikához | Gazdanév + PID + véletlenszerű utótag |
| "OMNI_SKILLS_A2A_EXECUTOR" | "inline" vagy "process" feladat végrehajtó | "inline" |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Külső dolgozói parancs felülbírálása | Bináris csomópont |
| "OMNI_SKILLS_A2A_WORKER_ARGS" | JSON-tömb külső dolgozói args | `["packages/server-a2a/src/worker.js"]` |
| "OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS" | A helyreállított elküldött/munkafeladatok folytatása rendszerindításkor | "1" |
| "OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS" | Nem HTTPS webhoook engedélyezése a localhost | "0" |
| `OMNI_SKILLS_ENABLE_CLAMAV` | ClamAV szkennelés engedélyezése | "0" |
| "VT_API_KEY" | VirusTotal API kulcs | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Privát kulcs az aláíráshoz | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Nyilvános kulcs felülbírálása | Automatikusan származtatott |---

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

1. Építse újra az "npm run build" paranccsal
2. Futtassa újra az `npm run verify:archives` parancsot
3. Ha az aláírás engedélyezve van, erősítse meg a nyilvános kulcsot és az "openssl" elérhetőségét### 🦠 Release Workflow Fails on Scanner Coverage

- Győződjön meg arról, hogy a `VT_API_KEY` létezik a lerakattitkok között
- Erősítse meg, hogy a "freshclam" sikeres volt a futón
- Helyi újraépítés a következővel: `OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build`
- Futtassa újra az `npm run verify:scanners:strict` parancsot### 📦 npm Publish Fails in CI

- Erősítse meg, hogy az `NPM_TOKEN` létezik a lerakattitkok között
- Győződjön meg arról, hogy a Git címke pontosan megegyezik a "package.json" verzióval
- Ellenőrizze, hogy a "release-verify" által feltöltött tarball létezik-e a munkafolyamat melléktermékeiben### ✍️ Release Signing Fails in CI

- Erősítse meg, hogy az OMNI_SKILLS_SIGN_PRIVATE_KEY_B64 vagy az OMNI_SKILLS_SIGN_PRIVATE_KEY létezik-e a lerakattitkok között
- Ha nyilvános kulcsot ad meg, ellenőrizze, hogy az megegyezik-e a privát kulccsal
- Győződjön meg arról, hogy az "openssl" elérhető, és a privát kulcs PEM-formátumú
- Helyi újraépítés a következővel: `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Futtassa újra az `npm run verify:archives:strict` parancsot### 🔒 API/MCP Returns `401 Unauthorized`

- Az `OMNI_SKILLS_HTTP_BEARER_TOKEN` vagy az `OMNI_SKILLS_HTTP_API_KEYS` ellenőrzése
- Tartalmazza az "Authorization: Bearer <token>" vagy az "x-api-key" fejlécet### 🚦 API/MCP Returns `429 Too Many Requests`

- `OMNI_SKILLS_RATE_LIMIT_MAX' növelése
- `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` szélesítése
- Csökkentse az ügyfelektől vagy a szondáktól származó sorozatos forgalmat### 🛂 API/MCP Admin Runtime Returns `401`

- Az `OMNI_SKILLS_HTTP_ADMIN_TOKEN' ellenőrzése
- "x-admin-token: <token>" vagy "Jogosultság: <admin-token>" hordozó küldése### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Az `OMNI_SKILLS_HTTP_MAINTENANCE_MODE' letiltása
- Használja a `/healthz'-et az élénkség-szondákhoz a karbantartás során
- Használja az `/admin/runtime' paramétert az admin tokennel a kezelői diagnosztikához### 🌍 Browser Requests Fail CORS Validation

- Az `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS' ellenőrzése
- Adja meg a pontos sémát és a gazdagépet, például "https://app.example.com".### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Ellenőrizze: `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis'
- Ellenőrizze az `OMNI_SKILLS_A2A_REDIS_URL-címet
- Ellenőrizze a Redis-kapcsolatot minden csomópontról
- Vizsgálja meg a `/healthz'-ben a `koordinációs' pillanatképet### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

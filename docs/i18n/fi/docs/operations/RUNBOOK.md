# 🔧 System Runbook (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/operations/RUNBOOK.md) · 🇪🇸 [es](../../../es/docs/operations/RUNBOOK.md) · 🇫🇷 [fr](../../../fr/docs/operations/RUNBOOK.md) · 🇩🇪 [de](../../../de/docs/operations/RUNBOOK.md) · 🇮🇹 [it](../../../it/docs/operations/RUNBOOK.md) · 🇷🇺 [ru](../../../ru/docs/operations/RUNBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/operations/RUNBOOK.md) · 🇯🇵 [ja](../../../ja/docs/operations/RUNBOOK.md) · 🇰🇷 [ko](../../../ko/docs/operations/RUNBOOK.md) · 🇸🇦 [ar](../../../ar/docs/operations/RUNBOOK.md) · 🇮🇳 [in](../../../in/docs/operations/RUNBOOK.md) · 🇹🇭 [th](../../../th/docs/operations/RUNBOOK.md) · 🇻🇳 [vi](../../../vi/docs/operations/RUNBOOK.md) · 🇮🇩 [id](../../../id/docs/operations/RUNBOOK.md) · 🇲🇾 [ms](../../../ms/docs/operations/RUNBOOK.md) · 🇳🇱 [nl](../../../nl/docs/operations/RUNBOOK.md) · 🇵🇱 [pl](../../../pl/docs/operations/RUNBOOK.md) · 🇸🇪 [sv](../../../sv/docs/operations/RUNBOOK.md) · 🇳🇴 [no](../../../no/docs/operations/RUNBOOK.md) · 🇩🇰 [da](../../../da/docs/operations/RUNBOOK.md) · 🇫🇮 [fi](../../../fi/docs/operations/RUNBOOK.md) · 🇵🇹 [pt](../../../pt/docs/operations/RUNBOOK.md) · 🇷🇴 [ro](../../../ro/docs/operations/RUNBOOK.md) · 🇭🇺 [hu](../../../hu/docs/operations/RUNBOOK.md) · 🇧🇬 [bg](../../../bg/docs/operations/RUNBOOK.md) · 🇸🇰 [sk](../../../sk/docs/operations/RUNBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/operations/RUNBOOK.md) · 🇮🇱 [he](../../../he/docs/operations/RUNBOOK.md) · 🇵🇭 [phi](../../../phi/docs/operations/RUNBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/operations/RUNBOOK.md)

---


>**Täydellinen käyttöopas Omni Skills -taitojen rakentamiseen, validointiin, käyttöön, turvaamiseen ja vianetsintään.**---

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

| Komento | Mitä se tekee |
|:--------|:--------------|
| `npm run validate` | Vahvistaa `SKILL.md`, luo uudelleen `metadata.jsonin`, laskee taksonomian/kypsyys/laatu/turvallisuus |
| `npm run taxonomy:report` | Näyttää kategorian siirtymäehdotukset ilman tiedostojen uudelleenkirjoittamista |
| `npm run verify:scanners` | Vahvistaa luotuihin taitojen metatietoihin tallennetun skannerin kattavuuden |
| `npm run release:notes` | Luo mukautettuja julkaisutietoja metatiedoista, nipuista ja git-historiasta |
| `npm run build` | Luo uudelleen luettelon/manifestit/arkistot/tarkistussummat, tarkistaa skannerin kattavuuden ja arkistot, rakentaa uudelleen `docs/CATALOG.md` |
| "npm testi" | Täysi savupaketti CLI-, API-, MCP-, sivuvaunu- ja arkistointivirroissa |---

## 🖥️ Visual Shell

Julkaistu CLI sisältää nyt mustepohjaisen operaattorikuoren:```bash
npx omni-skills ui
```

Nykyiset ominaisuudet:

- ohjattu asennus tunnetuille asiakkaille ja mukautetuille poluille
- Etsi ja sitten asenna -kulku
- Ohjattu MCP-käynnistystoiminto
- API-käynnistysvelho
- A2A-käynnistysvelho
- viimeaikaiset asennukset ja palvelun uudelleenkäynnistykset
- nimetyt asennus- ja huoltoasetukset

Paikallinen valtion polku:```text
~/.omni-skills/state/ui-state.json
```

Varaa:```bash
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

Staattinen skanneri tarkistaa kaikki taidot automaattisesti:

| Sääntöperhe | Esimerkkejä |
|:------------|:---------|
| 🎭 Nopea injektio | Suodatuskuviot, ohjeiden ohitukset |
| 💣 Tuhoavat komennot | "rm -rf", "muoto", "mkfs" |
| 🔑 Epäilyttävät polut | `/etc/shadow`, `~/.ssh`, tunnistetiedostot |
| ⚠️ Riskialttiita primitiivisiä | "shell=True", "pickle.load", "eval", "extractall" |### 🦠 Optional ClamAV

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

> Vaatii clamscanin PATH:ssa.### 🔒 Optional VirusTotal

```bash
VT_API_KEY=your-key npm run validate
```

> Vain hajautus — tuntemattomia tiedostoja**ei lähetetä**oletuksena.### ✅ Verify Scanner Coverage

```bash
npm run verify:scanners
```

Tiukka vapautusportti:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

---

## 4️⃣ Archive Generation & Verification

### 📦 Generate Archives

"npm run build" tuottaa arkistot automaattisesti:

| Tuotos | Polku |
|:-------|:-----|
| 📦 Postiosoite | `dist/archives/<taito>.zip` |
| 📦 Tarball | `dist/archives/<taito>.tar.gz` |
| 🔒 Tarkistussummat | `dist/archives/<taito>.checksums.txt` |

`dist/` on tehty tarkoituksella tässä arkistossa. Luotu luettelo, luettelot, niput ja arkistot ovat ajonaikaisia ​​syötteitä CLI-asennusvirroille, API-latauspinnoille, MCP-esikatseluille, A2A-tehtävien vaihdolle, savutesteille ja julkaisun vahvistukselle.### ✅ Verify Archives

```bash
npm run verify:archives
```

### ✍️ Enable Detached Signing

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

Valinnainen julkisen avaimen ohitus:```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> Jos julkista avainta ei toimiteta, koontiversio johtaa sen "openssl":n kautta tiedostoon "dist/signing/".### 🔁 Compute the Next Package Version

```bash
npm run release:next-version
```

Versiokäytäntö:

- korjaustiedosto kasvaa arvoon .10 asti
- .10:n jälkeen seuraava julkaisu rullaa pieneksi ja nollaa korjaustiedoston arvoon .0

Esimerkkejä:

- "0.1.0 -> 0.1.1".
- "0.1.10 -> 0.2.0".---

## 5️⃣ Installation Flows

| Skenaario | Komento |
|:---------|:--------|
| 📥 Oletusasennus (Antigravity) | "npx omni-skills" |
| 🎯 Erityistaito + asiakas | `npx omni-skills --cursor --skill omni-figma` |
| 🔎 Discovery → asenna | `npx omni-skills find figma --tool cursor --install --yes` |
| 📦 Pakettiasennus | `npx omni-skills --cursor --bundle essentials` |
| 🩺 Vahvista asennus | "npx omni-skills doctor" |---

## 6️⃣ Catalog & Discovery

### 🔎 Search

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
```

### 🎛️ Available Filters

| Suodatin | Lippu | Esimerkki |
|:-------|:-----|:--------|
| 📂 Luokka | "--luokka" | "--luokan kehitys" |
| 🖥️ Työkalu | "--työkalu" | `--työkalukohdistin` |
| ⚠️ Riski | "--riski" | "--turvallinen" |
| 📊 Lajittele | "--sort" | `--lajittele laatu\|parhaat käytännöt\|taso\|turvallisuus\|nimi` |
| 🔄 Tilaa | "--järjestys" | `--order asc\|desc` |
| ⭐ Minimilaatu | "--min-laatu" | `--min-laatu 80` |
| 📋 Min BP | "--min-best-käytännöt" | "--min-parhaat käytännöt 60" |
| 🎯 Vähimmäistaso | `--min-taso` | `--min-taso 2` |
| 🛡️ Vähimmäisturvallisuus | "--min-security" | "--min-turvallisuus 90" |
| ✅ Vahvistus | "--validation-status" | `--validation-status hyväksytty` |
| 🛡️ Turvallisuus | "--security-status" | "--security-status hyväksytty" |---

## 7️⃣ API Operations

### 🚀 Start the API

```bash
npx omni-skills api --port 3333
```

### 📡 Key Routes

| Menetelmä | Päätepiste | Tarkoitus |
|:-------|:----------|:---------|
| "HAKU" | "/healthz" | Terveystarkastus |
| "HAKU" | `/openapi.json` | OpenAPI 3.1 spec |
| "HAKU" | "/v1/skills" | Lista suodattimilla |
| "HAKU" | "/v1/search" | Kokotekstihaku |
| "HAKU" | `/v1/skills/:id/archives' | Arkistoluettelo |
| "HAKU" | `/v1/skills/:id/download/archive?format=zip` | Lataa arkisto |
| "HAKU" | `/v1/skills/:id/download/archive/checksums' | Tarkistussummaluettelo |### 🔐 Hosted API Hardening

| Ominaisuus | Komento |
|:--------|:---------|
| 🔑 Omistustodistus | "OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me npx omni-skills api" |
| 🗝️ API-avaimen todennus | `OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b npx omni-skills api |
| 🛂 Järjestelmänvalvojan suoritusaikainen todennus | `OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret npx omni-skills api' |
| 🚦 Hintaa rajoittava | `OMNI_SKILLS_RATE_LIMIT_MAX=60 OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 npx omni-skills api' |
| 📝 Tarkastuksen kirjaaminen | `OMNI_SKILLS_HTTP_AUDIT_LOG=1 npx omni-skills api' |
| 🌍 CORS-sallitut | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com npx omni-skills api' |
| 🧱 IP sallittujen luettelo | `OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 npx omni-skills api' |
| 🚧 Huoltotila | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE=1 npx omni-skills api' |
| 🔁 Luotettu välityspalvelin | `OMNI_SKILLS_HTTP_TRUST_PROXY=loopback npx omni-skills api' |

> 🟢 `/healthz` pysyy suunnittelustaan ​​auki; luetteloreitit edellyttävät todennusta, kun ne ovat käytössä. "GET /admin/runtime" vaatii järjestelmänvalvojan tunnuksen, kun se on määritetty, ja palauttaa live-hallinnan tilannevedoksen.---

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

Sivuvaunu voi nyt esikatsella tai kirjoittaa MCP-määrityksiä:

- Clauden käyttäjä- ja projektiasetukset
- Claude Desktopin asetukset
- Cline user config
- GitHub Copilot CLI -käyttäjän ja arkiston konfiguraatio
- Kohdistimen käyttäjän ja työtilan asetukset
- Codex TOML -kokoonpano
- Geminin käyttäjä- ja projektiasetukset
- Kilo CLI käyttäjä- ja projektiasetukset
- Kilo työtilan konfiguraatio
- Kiron käyttäjä- ja projektiasetukset
- OpenCode-käyttäjä- ja työtilan konfiguraatio
- Jatka työtilan YAML konfigurointia
- Purjelautailun käyttäjän asetukset
- Zed-työtilan konfigurointi
- työtila `.mcp.json`
- VS Code -työtila ja käyttäjäasetukset
- Dev Container -konfiguraatio

"configure_client_mcp" palauttaa myös asiakaskohtaiset "reseptit", joten operaattorit saavat vastaavat CLI- tai manuaaliset asennusvaiheet esikatselun yhteydessä.### 🧾 MCP Config Preview and Write Flow

Käytä yhdistettyä CLI:tä, kun haluat luoda konfiguraatioita kutsumatta MCP-työkalua suoraan:```bash
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target cline-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

Visuaalinen kuori paljastaa saman työnkulun seuraavasti:

- "npx omni-skills ui".
- "Palvelut".
- "Määritä MCP-asiakas".

Komento pysyy esikatselutilassa, ellei "--write" ole hyväksytty.### 🔐 Hosted MCP Hardening

Sama env vars kuin API:```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=120 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
npx omni-skills mcp stream
```

**Suojatut reitit**: "POST /mcp" · "GET /sse" · "POST /viestit" · "GET /admin/runtime"

> 🟢 `/healthz` pysyy auki.---

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

Oletusarvoinen paikallinen polku pysyy yksinkertaisena ensin:

- Json- tai sqlite-pysyvyys voidaan suorittaa jonokyselyn ollessa pois käytöstä
- aseta OMNI_SKILLS_A2A_QUEUE_ENABLED=1 vain, kun haluat usean työntekijän vaatimuksen ja vuokrauksen
- Pidä Redis-koordinointi edistyneenä isännöitynä vaihtoehtona, ei lähtötilanteena### 🧱 Multi-Worker Lease Setup

Suorita useampi kuin yksi A2A-solmu samaa SQLite-kauppaa vastaan ​​saadaksesi vuokrauspohjaisen vikasietoisuuden:```bash
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

Jos työntekijä kuolee tehtävän ollessa "työssä", toinen työntekijä voi vaatia sen takaisin vuokrasopimuksen päätyttyä ja jatkaa suorittamista.### 🟥 Redis Coordination

Isännöidyissä tai usean solmun käyttöönotoissa, jotka eivät halua jonojen koordinointia sidottuna jaettuun SQLite-säilöön, vaihda koordinaattoriksi Redis:```bash
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

Tässä tilassa:

- pysyvyys elää edelleen JSONissa tai SQLitessa
- Tehtävähaku ja vuokraomistus siirtyvät Redikselle
- Useat A2A-solmut voivat jakaa jonon turvautumatta SQLite-rivitason koordinointiin### 📡 Endpoints

| Menetelmä | Polku | Tarkoitus |
|:-------|:-----|:--------|
| "HAKU" | "/healthz" | Terveystarkastus |
| "HAKU" | `/.well-known/agent.json' | Agenttikortti (A2A-löytö) |
| `POSTI` | "/a2a" | JSON-RPC-päätepiste tehtäviin ja suoratoistoon |### 🧭 Supported JSON-RPC Methods

| Menetelmä | Tarkoitus |
|:-------|:---------|
| `viesti/lähetä` | Aloita tai jatka tehtävää |
| "viesti/stream" | Aloita tehtävä ja suoratoista SSE-päivitykset |
| `tehtävät/saa` | Kysely tehtävän tilannekuvasta |
| `tehtävät/peruuta` | Peruuta aktiivinen tehtävä |
| "tehtävät/tilaa uudelleen" | Jatka olemassa olevan tehtävän SSE-päivityksiä |
| `tasks/pushNotificationConfig/set` | Rekisteröi push webhook |
| `tasks/pushNotificationConfig/get` | Lue push-asetus |
| `tasks/pushNotificationConfig/list` | Listaa tehtävän push-kokoonpanot |
| `tasks/pushNotificationConfig/delete` | Poista push-asetus |### 📡 Task Lifecycle

Nykyinen suoritusaika tukee näitä tehtävätiloja:

- "lähetetty".
- "työssä".
- "syöte vaaditaan".
- "valmis".
- `peruutettu`
- "epäonnistui".

Tehtävät tallennetaan joko JSON-tiedostoon tai SQLite-säilöön ja ladataan uudelleen käynnistyksen yhteydessä. Valmiit ja keskeytetyt tehtävät ovat käytettävissä. Tehtävät, jotka olivat edelleen "lähetettyjä" tai "toimivia" sammutuksen aikana, palautetaan uudelleenkäynnistyksen metatiedoilla ja niitä jatketaan oletusarvoisesti automaattisesti.### 🧪 Example: Start a Task

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

Tietovarastossa on nyt kaksi työnkulkua:

| Työnkulku | Liipaisin | Tarkoitus |
|:---------|:--------|:---------|
| `validate.yml` | Työnnä/PR pääsivulle | Rakenna, testaa ja varmista, että luodut artefaktit ovat sitoutuneet |
| `release.yml` | Tag push `v*` tai manuaalinen lähetys | Suorita julkaisutason skannereita, tarkista versiotunniste, allekirjoita artefaktit, pakkaa tarball, julkaise npm:ssä ja luo GitHub Release |### 🔖 Tag a Release

```bash
npm version patch
git push origin main --follow-tags
```

### 🔐 Required GitHub Secrets

| Salainen | Käyttää | Tarkoitus |
|:-------|:---------|:---------|
| "VT_API_KEY" tai "VIRUSTOTAL" | `release.yml` | Vaadi VirusTotal-hajautushakuja julkaisuversioissa |
| OMNI_SKILLS_SIGN_PRIVATE_KEY_B64 tai OMNI_SKILLS_SIGN_PRIVATE_KEY | `release.yml` | Vaadittu yksityinen avain irrotetun arkiston kirjautumiseen CI |
| "OMNI_SKILLS_SIGN_PUBLIC_KEY_B64" tai "OMNI_SKILLS_SIGN_PUBLIC_KEY" | `release.yml` | Valinnainen julkisen avaimen ohitus; muuten johdettu yksityisestä avaimesta |
| "NPM_TOKEN" | `publish-npm` työ | Todenna `npm publish` tunnisteen julkaisuille |### 🦠 Release Scanner Policy

`release.yml` asettaa tai valmistelee:

- OMNI_SKILLS_ENABLE_CLAMAV=1
- `VT_API_KEY=${{ salaisuudet.VT_API_KEY || salaisuudet.VIRUSTOTAL }}`
- "OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH" juoksijan väliaikaisesta tallennustilasta

Tämä tarkoittaa, että jokaisen tunnistepohjaisen julkaisun tulee:

- asenna ja päivitä ClamAV juoksijaan
- Luo metatiedot uudelleen ClamAV:n ollessa käytössä
- Luo metatiedot uudelleen VirusTotalin ollessa käytössä
- purkaa CI-allekirjoitusavaimen materiaali juoksijan lämpötilamuistiin
- läpäise `npm run verify:scanners:strict'
- läpäise `npm run verify:archives:strict'
- läpäise testit ja paketin vahvistus ennen npm-julkaisua
- Luo mukautettuja julkaisutietoja luettelon metatiedoista ja git-historiasta
- Luo GitHub-julkaisu liitteenä olevalla julkaisusisällöllä julkaisun jälkeen---

## 1️⃣1️⃣ Environment Variables Reference

| Muuttuja | Tarkoitus | Oletus |
|:---------|:--------|:---------|
| `OMNI_SKILLS_ROOT` | Ohita luettelon juuripolku | Havaittu automaattisesti |
| `OMNI_SKILLS_LOCAL_ALLOWLIST` | Ylimääräiset sallitut kirjoituspolut | Tunnetut asiakasjuuret |
| `OMNI_SKILLS_MCP_MODE` | Aseta paikallinen sivuvaunulle | Kaukosäädin |
| `OMNI_SKILLS_MCP_LOCAL_MODE` | Alt-lippu paikallistilassa | "0" |
| `OMNI_SKILLS_API_BASE_URL` | Julkinen API URL MCP | — |
| `OMNI_SKILLS_PUBLIC_BASE_URL` | Julkinen perus-URL | — |
| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | Haltijan todennustunnus | — |
| `OMNI_SKILLS_HTTP_API_KEYS` | Pilkuilla erotetut API-avaimet | — |
| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | Järjestelmänvalvojan ajonaikainen todennustunnus | — |
| `OMNI_SKILLS_RATE_LIMIT_MAX` | Pyyntöjen enimmäismäärä ikkunaa kohti | — |
| `OMNI_SKILLS_RATE_LIMIT_WINDOW_MS` | Rate-rajaikkuna (ms) | — |
| `OMNI_SKILLS_HTTP_AUDIT_LOG` | Ota tarkastusloki käyttöön | "0" |
| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | "json" tai "teksti" tarkastustulos | "json" |
| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | Valinnainen tarkastuslokitiedoston polku | stdout |
| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS' | Pilkuilla erotettu CORS-alkuperäluettelo | — |
| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | Pilkuilla erotettu IP- tai CIDR-sallittu luettelo | — |
| `OMNI_SKILLS_HTTP_TRUST_PROXY` | Express Trust-välityspalvelimen asetus | — |
| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | Ota ylläpitovastaukset käyttöön | "0" |
| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS' | Huolto "Yritä uudelleen" sekuntia | "300" |
| "OMNI_SKILLS_A2A_PROCESSING_DELAY_MS" | Simuloitu asynkronoinnin viive | "80" |
| `OMNI_SKILLS_A2A_STORE_TYPE` | "json", "sqlite" tai "muisti" tehtäväsäilö | "json" |
| `OMNI_SKILLS_A2A_STORE_PATH` | Mukautettu A2A-tehtävävarastotiedosto | `~/.omni-skills/state/a2a-tasks.json` |
| "OMNI_SKILLS_A2A_QUEUE_ENABLED" | Ota käyttöön jaetun jonon kysely vuokratyöntekijöille | "0" |
| `OMNI_SKILLS_A2A_COORDINATION_TYPE` | "store", "sqlite", "paikallinen" tai "redis" -koordinaattori | "myymälä" |
| `OMNI_SKILLS_A2A_REDIS_URL` | Redis URL ulkoista koordinointia varten | — |
| `OMNI_SKILLS_A2A_COORDINATION_PREFIX' | Redis-avainetuliite jonon metatiedoille | "kaikki taidot:a2a" |
| "OMNI_SKILLS_A2A_WORKER_POLL_MS" | Vuokratyöntekijöiden jonokyselyväli | "250" |
| `OMNI_SKILLS_A2A_LEASE_MS` | Vuokrasopimuksen kesto ennen kuin toinen työntekijä voi vaatia tehtävän takaisin | "4000" |
| `OMNI_SKILLS_A2A_INSTANCE_ID` | Vakaan työntekijän tunniste vuokraomistusta ja diagnostiikkaa varten | Isäntänimi + PID + satunnainen jälkiliite |
| "OMNI_SKILLS_A2A_EXECUTOR" | "inline" tai "process" tehtävän suorittaja | "inline" |
| `OMNI_SKILLS_A2A_WORKER_COMMAND` | Ohita ulkoisen työntekijän komento | Solmubinaari |
| "OMNI_SKILLS_A2A_WORKER_ARGS" | JSON-joukko ulkoisten työntekijöiden argeja | `["packages/server-a2a/src/worker.js"]` |
| `OMNI_SKILLS_A2A_RESUME_INTERRUPTED_TASKS' | Jatka palautettuja lähetettyjä/työtehtäviä käynnistyksen yhteydessä | "1" |
| `OMNI_SKILLS_A2A_ALLOW_INSECURE_WEBHOOKS' | Salli muut kuin HTTPS-webhookit localhostin ulkopuolella | "0" |
| `OMNI_SKILLS_ENABLE_CLAMAV' | Ota ClamAV-skannaus käyttöön | "0" |
| "VT_API_KEY" | VirusTotal API-avain | — |
| `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH` | Yksityinen avain allekirjoitusta varten | — |
| `OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH` | Julkisen avaimen ohitus | Automaattisesti johdettu |---

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

1. Rakenna uudelleen komennolla "npm run build".
2. Suorita `npm run verify:archives' uudelleen
3. Jos allekirjoitus on käytössä, vahvista julkinen avain ja "openssl" saatavuus### 🦠 Release Workflow Fails on Scanner Coverage

- Vahvista, että "VT_API_KEY" on olemassa arkiston salaisuuksissa
- Vahvista, että "freshclam" onnistui juoksijassa
- Rakenna uudelleen paikallisesti komennolla "OMNI_SKILLS_ENABLE_CLAMAV=1 VT_API_KEY=... npm run build"
- Suorita `npm run verify:scanners:strict' uudelleen### 📦 npm Publish Fails in CI

- Vahvista, että "NPM_TOKEN" on olemassa arkiston salaisuuksissa
- Varmista, että Git-tagi vastaa `package.json`-versiota tarkasti
- Tarkista, että "release-verify"-komennolla ladattu tarball on olemassa työnkulun artefakteissa### ✍️ Release Signing Fails in CI

- Vahvista, että OMNI_SKILLS_SIGN_PRIVATE_KEY_B64 tai OMNI_SKILLS_SIGN_PRIVATE_KEY on olemassa arkiston salaisuuksissa
- Jos annat julkisen avaimen salaisuuden, varmista, että se vastaa yksityistä avainta
- Varmista, että "openssl" on käytettävissä ja yksityinen avain on PEM-muotoiltu
- Rakenna uudelleen paikallisesti komennolla `OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run build`
- Suorita `npm run verify:archives:strict' uudelleen### 🔒 API/MCP Returns `401 Unauthorized`

- Vahvista OMNI_SKILLS_HTTP_BEARER_TOKEN tai OMNI_SKILLS_HTTP_API_KEYS
- Sisällytä "Authorization: Bearer <token>" tai "x-api-key" otsikko### 🚦 API/MCP Returns `429 Too Many Requests`

- Kasvata OMNI_SKILLS_RATE_LIMIT_MAX
- Laajenna OMNI_SKILLS_RATE_LIMIT_WINDOW_MS
- Vähennä asiakkaiden tai luotainten aiheuttamaa purskeliikennettä### 🛂 API/MCP Admin Runtime Returns `401`

- Vahvista OMNI_SKILLS_HTTP_ADMIN_TOKEN
- Lähetä `x-admin-token: <token>` tai `Authorization: Bearer <admin-token>`### 🚧 API/MCP Returns `503 Maintenance mode enabled`

- Poista käytöstä `OMNI_SKILLS_HTTP_MAINTENANCE_MODE'
- Käytä `/healthz' elävyyden mittaamiseen huollon aikana
- Käytä `/admin/runtime' -tunnusta järjestelmänvalvojan tunnuksen kanssa operaattorin diagnostiikkaan### 🌍 Browser Requests Fail CORS Validation

- Vahvista `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS'
- Sisällytä tarkka malli ja isäntä, esimerkiksi "https://app.example.com".### 🟥 Redis-Coordinated A2A Workers Do Not Claim Tasks

- Vahvista `OMNI_SKILLS_A2A_COORDINATION_TYPE=redis'
- Vahvista OMNI_SKILLS_A2A_REDIS_URL
- Tarkista Redis-yhteydet jokaisesta solmusta
- Tarkista "/healthz" koordinaatiovedoksen varalta### 🩺 General Diagnostics

```bash
npx omni-skills doctor   # Check repo, targets, catalog state
npx omni-skills smoke    # Full preflight validation
```

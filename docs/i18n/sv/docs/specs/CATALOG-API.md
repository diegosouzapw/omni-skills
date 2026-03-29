# 🌐 Catalog API Surface (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Skrivskyddat HTTP API för kunskapsupptäckt, sökning, jämförelse, installationsplanering och nedladdning av artefakter.**---

## 📊 Status

| Funktion | Stat |
|:--------|:------|
| ✅ Katalogslutpunkter | Implementerad |
| ✅ Auth (bärare + API-nyckel) | Implementerad |
| ✅ Admin runtime auth | Implementerad |
| ✅ Prisbegränsande | Implementerad |
| ✅ Revisionsloggning | Implementerad |
| ✅ CORS och IP-godkännandelistor | Implementerad |
| ✅ Underhållsläge | Implementerad |
| ✅ Arkivnedladdningar | Implementerad |
| ✅ OpenAPI spec | Implementerad |
| ⚠️ Styrning backend | Env-driven baslinje under process; extern gateway eller IdP fortfarande valfritt |---

## 🎯 Purpose

API:et tillhandahåller en registerliknande yta för:

- 📋 Lista och filtrera färdigheter efter kvalitet, säkerhet, kategori, risk och mer
- 📌 Att hämta individuella färdigheter manifesterar
- 🔎 Fulltextsökning och jämförelse med flera färdigheter
- 📦 Paketlista med tillgänglighet
- 📐 Skrivskyddad installationsplangenerering
- 📥 Ladda ner genererade artefakter, arkiv och kontrollsummanifest

Samma katalog och manifestyta är också grunden för:

- lokal CLI installationsplanering
- MCP skrivskyddade upptäcktssvar
- A2A-upptäckt och överlämnande av installationsplan
- potentiella privata kataloger med extern autentisering ovanpå---

## Snabbstart

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

**Standard**: `127.0.0.1:3333`---

## 🔐 Security Controls

Alla säkerhetskontroller är env-drivna och valfria:

| Kontroll | Variabel | Exempel |
|:--------|:--------|:--------|
| 🔑**Bärare auth**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `ersätt-mig` |
| 🗝️**API-nyckel auth**| `OMNI_SKILLS_HTTP_API_KEYS` | `nyckel-a, nyckel-b` |
| 🛂**Admin auth**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-hemlighet` |
| 🚦**Taxebegränsning**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Revisionsloggning**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Revisionsformat**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` eller `text` |
| 📄**Revisionsfil**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS godkännandelista**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**IP-godkännandelista**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Betrodd proxy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Underhållsläge**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Försök igen efter**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Beteende:**
- `/healthz` förblir**alltid oautentiserad**
- 🔒 Alla andra rutter kräver auth när auth är aktiverat
- 🛂 `/admin/runtime` kräver admin-token när den är aktiverad
- 🚦 Hastighetsbegränsning pågår med "X-RateLimit-*" svarsrubriker
- 🧾 Varje svar har "X-Request-Id".
- 🚧 Underhållsläge returnerar "503" för icke-hälsa, icke-administratörsrutter### ✅ Current governance decision

Den nuvarande projektinriktningen är att**återanvända samma katalogformat för offentliga eller privata distributioner**och lagerautentisera externt vid behov.

Det betyder:

- manifestet och API-formen förblir delade
- Självvärd och lokala distributioner kan stanna på den pågående baslinjen
- mer avancerad värdstyrning kan flyttas till en extern gateway eller företagsautentiseringslager senare utan att förkasta datamodellen### 🔐 Full hardened example:

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

| Metod | Väg | Beskrivning |
|:-------|:-----|:------------|
| `GET` | `/healthz` | Hälsokontroll (oautentiserad) |
| `GET` | `/openapi.json` | Dynamisk OpenAPI 3.1-specifikation |
| `GET` | `/admin/runtime` | Styrning och ögonblicksbild av körtid (admin auth när aktiverad) |### 📚 Catalog & Skills

| Metod | Väg | Beskrivning |
|:-------|:-----|:------------|
| `GET` | `/v1/färdigheter` | Lista färdigheter med filter |
| `GET` | `/v1/skills/:id` | Få individuella färdigheter manifest |
| `GET` | `/v1/sök` | Fulltextsökning |
| `GET` | `/v1/compare?ids=id1,id2` | Jämför flera färdigheter |
| `GET` | `/v1/buntar` | Lista buntar med tillgänglighet |
| `POST` | `/v1/install/plan` | Skapa en installationsplan |### 🔎 List/Search Filters

| Filter | Exempel |
|:-------|:--------|
| `kategori` | `?kategori=utveckling` |
| `verktyg` | `?verktyg=markör` |
| `risk` | `?risk=säker` |
| `sortera` | `?sort=kvalitet\|bästa praxis\|nivå\|säkerhet\|namn` |
| `beställning` | `?order=asc\|desc` |
| `min_kvalitet` | `?min_kvalitet=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_level` | `?min_level=2` |
| `min_säkerhet` | `?min_security=90` |
| `valideringsstatus` | `?validation_status=godkänd` |
| `säkerhetsstatus` | `?security_status=godkänd` |### 📦 Install Plan Body

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

| Metod | Väg | Beskrivning |
|:-------|:-----|:------------|
| `GET` | `/v1/katalog/download` | Ladda ner hela katalogen |
| `GET` | `/v1/skills/:id/artifacts` | Lista skicklighetsartefakter |
| `GET` | `/v1/skills/:id/archives` | Lista skicklighetsarkiv |
| `GET` | `/v1/skills/:id/downloads` | Alla tillgängliga nedladdningslänkar |
| `GET` | `/v1/skills/:id/download/manifest` | Färdighetsmanifest JSON |
| `GET` | `/v1/skills/:id/download/entrypoint` | Färdighet SKILL.md |
| `GET` | `/v1/skills/:id/download/artifact?path=<sökväg>` | Specifik artefakt |
| `GET` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Skicklighetsarkiv |
| `GET` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Fristående signatur |
| `GET` | `/v1/skills/:id/download/archive/checksums` | SHA-256 kontrollsummor |---

## 🔗 Link Enrichment

När förfrågningar hanteras via API:et**berikar servern automatiskt**manifest, artefaktlistor och installationsplaner med absoluta webbadresser härledda från ursprunget för den inkommande begäran. Detta är runtime-anrikning, inte inbakat i `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Installationsplaner är förhandsgranskningar, inte fjärrskrivningar.**

API:et installeras aldrig på anroparens dator. Det returnerar:
- 📌 Valda färdighetsmetadata
- ⚠️ Varningar för saknade paketmedlemmar
- 🖥️ Konkreta CLI-kommandon för att köras lokalt
- 🔗 Offentliga nedladdningsadresser när förfrågningsursprung är tillgängligt---

## 🔌 Relationship to MCP

MCP-servern återanvänder samma offentliga API-URL:er när den är konfigurerad:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Detta gör att MCP-installationsförhandsvisningar kan returnera konkreta manifest- och artefakt-URL:er istället för endast lokala repo-sökvägar.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` returnerar en styrningsöversiktsbild användbar för värddiagnostik:

- aktiva autentiseringsmetoder
- admin-auth status
- Taxegränsfönster och max
- CORS godkännandelista
- IP-godkännandelista
- tillstånd för underhållsläge
- Revisionsdestination och format
- aktuella katalogsummor
- Begär ID-eko för spårbarhet
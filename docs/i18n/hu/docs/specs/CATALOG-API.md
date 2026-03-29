# 🌐 Catalog API Surface (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Csak olvasható HTTP API a készségek felfedezéséhez, kereséshez, összehasonlításhoz, telepítéstervezéshez és műtermékek letöltéséhez.**---

## 📊 Status

| Funkció | állam |
|:--------|:------|
| ✅ Katalógus végpontok | Megvalósítva |
| ✅ Auth (vivő + API kulcs) | Megvalósítva |
| ✅ Admin futásidejű hitelesítés | Megvalósítva |
| ✅ Díjkorlátozás | Megvalósítva |
| ✅ Audit naplózás | Megvalósítva |
| ✅ CORS és IP engedélyezési listák | Megvalósítva |
| ✅ Karbantartási mód | Megvalósítva |
| ✅ Letöltések archívuma | Megvalósítva |
| ✅ OpenAPI specifikáció | Megvalósítva |
| ⚠️ Irányítási háttér | Env-vezérelt, folyamat közbeni alapállapot; a külső átjáró vagy az IdP továbbra is választható |---

## 🎯 Purpose

Az API rendszerleíró adatbázis jellegű felületet biztosít:

- 📋 Felsorolási és szűrési képességek minőség, biztonság, kategória, kockázat stb. szerint
- 📌 Egyéni készségnyilatkozatok lekérése
- 🔎 Teljes szöveges keresés és több készség összehasonlítása
- 📦 Csomaglista elérhetőséggel
- 📐 Csak olvasható telepítési terv létrehozása
- 📥 Létrehozott műtermékek, archívumok és ellenőrzőösszeg-jegyzékek letöltése

Ugyanez a katalógus és manifest felület az alapja a következőknek is:

- helyi CLI telepítés tervezése
- MCP csak olvasható felfedezési válaszok
- A2A felderítés és telepítési terv átadás
- potenciális privát katalógusok külső hitelesítéssel a tetején---

## Gyors kezdés

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

**Alapértelmezés**: `127.0.0.1:3333`---

## 🔐 Security Controls

Minden biztonsági vezérlő env-vezérelt és opcionális:

| Control | Változó | Példa |
|:--------|:---------|:---------|
| 🔑**Bemutató hitelesítés**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `cserélj engem` |
| 🗝️**API-kulcs hitelesítés**| `OMNI_SKILLS_HTTP_API_KEYS` | `kulcs-a,kulcs-b` |
| 🛂**Adminisztrációs hitelesítés**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦**Drátakorlátozás**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | "60" / "60000" |
| 📝**Audit naplózás**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | "1" |
| 🗂️**Ellenőrzési formátum**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | "json" vagy "szöveg" |
| 📄**Audit fájl**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS engedélyezési lista**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**IP engedélyezési lista**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | "127.0.0.1/32,10.0.0.0/8" |
| 🔁**Megbízható proxy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `visszacsatolás` |
| 🚧**Karbantartási mód**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | "1" |
| ⏱️**Próbáld újra**| "OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS" | "300" |

**Viselkedés:**
- 🟢 `/healthz`**mindig hitelesítetlen marad**
- 🔒 Minden más útvonal hitelesítést igényel, ha az hitelesítés engedélyezve van
- 🛂 Az `/admin/runtime` engedélyezve van az admin tokent
- 🚦 A sebességkorlátozás folyamatban van az "X-RateLimit-*" válaszfejlécekkel
- 🧾 Minden válasz tartalmazza az "X-Request-Id"-et
- 🚧 A Karbantartási mód „503”-at ad vissza nem egészségügyi, nem rendszergazdai útvonalak esetén### ✅ Current governance decision

A projekt jelenlegi iránya az, hogy**ugyanazt a katalógusformátumot használja újra nyilvános vagy privát telepítésekhez**, és szükség esetén külső szintű hitelesítést rétegezzen.

Ez azt jelenti:

- a jegyzék és az API alakzat megosztva marad
- A saját üzemeltetésű és helyi telepítések a folyamat közbeni alapállapoton maradhatnak
- A fejlettebb hosztolt irányítás később külső átjáróra vagy vállalati hitelesítési rétegre költözhet az adatmodell elágazása nélkül### 🔐 Full hardened example:

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

| Módszer | Útvonal | Leírás |
|:-------|:-----|:-------------|
| "GET" | "/healthz" | állapotfelmérés (nem hitelesített) |
| "GET" | `/openapi.json` | Dynamic OpenAPI 3.1 specifikáció |
| "GET" | `/admin/runtime` | Irányítási és futásidejű pillanatkép (adminisztrátori hitelesítés, ha engedélyezve van) |### 📚 Catalog & Skills

| Módszer | Útvonal | Leírás |
|:-------|:-----|:-------------|
| "GET" | "/v1/készségek" | Készségek listája szűrőkkel |
| "GET" | `/v1/skills/:id` | Egyéni készségnyilatkozat megszerzése |
| "GET" | "/v1/search" | Teljes szöveges keresés |
| "GET" | `/v1/compare?ids=id1,id2` | Több készség összehasonlítása |
| "GET" | "/v1/bundles" | Csomagok listázása elérhetőséggel |
| "POST" | `/v1/install/plan` | Telepítési terv létrehozása |### 🔎 List/Search Filters

| Szűrő | Példa |
|:-------|:---------|
| "kategória" | `?category=development` |
| "szerszám" | `?tool=cursor` |
| `kockázat` | `?kockázat=biztonságos` |
| `rendezni` | `?sort=quality\|best-practices\|level\|security\|name` |
| "megrendelés" | `?order=asc\|desc` |
| `minimum_minőség` | `?min_minőség=80` |
| `minimum_legjobb_gyakorlatok` | `?min_best_practices=60` |
| `min_szint` | `?min_szint=2` |
| `minimum_biztonság` | `?min_security=90` |
| `validation_status` | `?validation_status=passed` |
| `biztonsági_állapot` | `?security_status=passed` |### 📦 Install Plan Body

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

| Módszer | Útvonal | Leírás |
|:-------|:-----|:-------------|
| "GET" | `/v1/catalog/download' | Teljes katalógus letöltése |
| "GET" | "/v1/skills/:id/artifacts" | Sorolja fel a készségek műtermékeit |
| "GET" | `/v1/skills/:id/archives` | Készségarchívumok listázása |
| "GET" | `/v1/skills/:id/downloads` | Minden elérhető letöltési link |
| "GET" | "/v1/skills/:id/download/manifest" | Skill manifest JSON |
| "GET" | `/v1/skills/:id/download/entrypoint` | Skill SKILL.md |
| "GET" | `/v1/skills/:id/download/artifact?path=<elérési út>` | Konkrét műtermék |
| "GET" | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Ügyességi archívum |
| "GET" | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Leválasztott aláírás |
| "GET" | `/v1/skills/:id/download/archive/checksums` | SHA-256 ellenőrző összegek |---

## 🔗 Link Enrichment

Amikor a kéréseket az API-n keresztül kezelik, a szerver**automatikusan gazdagítja**a jegyzékeket, a műtermék-listákat és a telepítési terveket a bejövő kérés forrásából származó abszolút URL-ekkel. Ez egy futásidejű gazdagítás, nem a dist/manifests/*.json fájlba.---

## 📋 Install Plan Notes

> ⚠️**A telepítési tervek előnézetek, nem pedig távoli írások.**

Az API soha nem települ a hívó gépére. Visszaadja:
- 📌 Válogatott készség metaadatok
- ⚠️ Figyelmeztetések a csomag hiányzó tagjaira
- 🖥️ Konkrét CLI parancsok helyi futtatáshoz
- 🔗 Nyilvános letöltési URL-ek, ha elérhető a kérés eredete---

## 🔌 Relationship to MCP

Az MCP-kiszolgáló ugyanazokat a nyilvános API URL-eket használja újra, amikor be van állítva:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Ez lehetővé teszi az MCP-telepítési előnézetek számára, hogy konkrét jegyzék- és műtermék-URL-eket adjanak vissza a helyi repo-útvonalak helyett.---

## 🧭 Admin Runtime Snapshot

A "GET /admin/runtime" egy irányítási pillanatképet ad vissza, amely hasznos a tárolt diagnosztikához:

- aktív hitelesítési módszerek
- admin-auth állapot
- sebességkorlát ablak és max
- CORS engedélyezési lista
- IP engedélyezési lista
- karbantartási mód állapota
- ellenőrzési cél és formátum
- aktuális katalógusösszeg
- kérjen azonosítót visszhangozva a nyomon követhetőség érdekében
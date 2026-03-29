# 🌐 Catalog API Surface (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Rozhranie HTTP API iba na čítanie na zisťovanie zručností, vyhľadávanie, porovnávanie, plánovanie inštalácie a sťahovanie artefaktov.**---

## 📊 Status

| Funkcia | Štát |
|:--------|:------|
| ✅ Katalógové koncové body | Realizované |
| ✅ Auth (nositeľ + API kľúč) | Realizované |
| ✅ Autentifikácia administrátora | Realizované |
| ✅ Obmedzenie sadzby | Realizované |
| ✅ Protokolovanie auditu | Realizované |
| ✅ Zoznam povolených CORS a IP | Realizované |
| ✅ Režim údržby | Realizované |
| ✅ Archív stiahnutí | Realizované |
| ✅ Špecifikácia OpenAPI | Realizované |
| ⚠️ Backend správy | Env-driven, in-process baseline; externá brána alebo IdP stále voliteľné |---

## 🎯 Purpose

API poskytuje povrch v štýle registra pre:

- 📋 Zoznam a filtrovanie zručností podľa kvality, zabezpečenia, kategórie, rizika a ďalších
- 📌 Prejavuje sa získavanie individuálnych zručností
- 🔎 Fulltextové vyhľadávanie a porovnanie viacerých zručností
- 📦 Zoznam balíkov s dostupnosťou
- 📐 Generovanie plánu inštalácie iba na čítanie
- 📥 Sťahovanie vygenerovaných artefaktov, archívov a manifestov kontrolného súčtu

Rovnaký katalóg a manifest je tiež základom pre:

- plánovanie inštalácie lokálneho CLI
- Odpovede zisťovania MCP len na čítanie
- Zisťovanie A2A a odovzdanie plánu inštalácie
- potenciálne súkromné katalógy s externým overením na vrchu---

## Rýchly štart

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

**Predvolené**: `127.0.0.1:3333`---

## 🔐 Security Controls

Všetky bezpečnostné kontroly sú riadené prostredím a sú voliteľné:

| Kontrola | Premenná | Príklad |
|:--------|:---------|:--------|
| 🔑**Autentifikácia doručiteľa**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | "nahrad ma" |
| 🗝️**Authifikácia kľúča API**| `OMNI_SKILLS_HTTP_API_KEYS` | "kľúč-a,kľúč-b" |
| 🛂**Oprávnenie správcu**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦**Obmedzenie sadzby**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | "60" / "60 000" |
| 📝**Revízne protokoly**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | "1" |
| 🗂️**Formát auditu**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` alebo `text` |
| 📄**Revízny súbor**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Zoznam povolených CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Zoznam povolených IP**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Dôveryhodný proxy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | "loopback" |
| 🚧**Režim údržby**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | "1" |
| ⏱️**Skúsiť znova po**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | "300" |

**Správanie:**
- 🢢 `/healthz` zostáva**vždy neoverené**
- 🔒 Všetky ostatné trasy vyžadujú autorizáciu, keď je autorizácia povolená
- 🛂 `/admin/runtime` vyžaduje token správcu, keď je povolený
- 🚦 Obmedzenie rýchlosti prebieha s hlavičkami odpovedí „X-RateLimit-*“
- 🧾 Každá odpoveď nesie `X-Request-Id`
- 🚧 Režim údržby vráti `503` pre cesty, ktoré nie sú pre zdravie a pre správcu### ✅ Current governance decision

Aktuálnym smerom projektu je**opätovné použitie rovnakého formátu katalógu pre verejné alebo súkromné ​​nasadenia**a externé overenie v prípade potreby.

To znamená:

- manifest a tvar rozhrania API zostávajú zdieľané
- Samoobslužné a lokálne nasadenia môžu zostať na základnej línii procesu
- Pokročilejšie hostiteľské riadenie sa môže neskôr presunúť na externú bránu alebo podnikovú autorizačnú vrstvu bez rozdelenia dátového modelu### 🔐 Full hardened example:

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

| Metóda | Cesta | Popis |
|:-------|:-----|:------------|
| "ZÍSKAŤ" | `/healthz` | Zdravotná kontrola (neoverená) |
| "ZÍSKAŤ" | `/openapi.json` | Dynamická špecifikácia OpenAPI 3.1 |
| "ZÍSKAŤ" | `/admin/runtime` | Snímka správy a runtime (ak je povolené overenie správcu) |### 📚 Catalog & Skills

| Metóda | Cesta | Popis |
|:-------|:-----|:------------|
| "ZÍSKAŤ" | `/v1/skills` | Zoznam zručností s filtrami |
| "ZÍSKAŤ" | `/v1/skills/:id` | Získajte manifest individuálnych zručností |
| "ZÍSKAŤ" | `/v1/search` | Fulltextové vyhľadávanie |
| "ZÍSKAŤ" | `/v1/compare?ids=id1,id2` | Porovnanie viacerých zručností |
| "ZÍSKAŤ" | `/v1/balíky` | Zoznam balíkov s dostupnosťou |
| 'POST' | `/v1/install/plan` | Vygenerovať plán inštalácie |### 🔎 List/Search Filters

| Filter | Príklad |
|:-------|:--------|
| "kategória" | `?kategória=vývoj` |
| "nástroj" | `?tool=kurzor` |
| "riziko" | `?riziko=bezpečné` |
| "triediť" | `?triediť=kvalita\|osvedčené postupy\|úroveň\|zabezpečenie\|názov` |
| "objednávka" | `?order=asc\|desc` |
| `minimálna_kvalita` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_level` | `?min_level=2` |
| "min_security" | `?min_security=90` |
| `validačný_stav` | `?validation_status=passed` |
| "stav_zabezpečenia" | `?security_status=passed` |### 📦 Install Plan Body

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

| Metóda | Cesta | Popis |
|:-------|:-----|:------------|
| "ZÍSKAŤ" | `/v1/katalóg/stiahnutie` | Kompletný katalóg na stiahnutie |
| "ZÍSKAŤ" | `/v1/skills/:id/artifacts` | Zoznam artefaktov zručnosti |
| "ZÍSKAŤ" | `/v1/skills/:id/archives` | Zoznam archívov zručností |
| "ZÍSKAŤ" | `/v1/skills/:id/downloads` | Všetky dostupné odkazy na stiahnutie |
| "ZÍSKAŤ" | `/v1/skills/:id/download/manifest` | Zručnosť manifest JSON |
| "ZÍSKAŤ" | `/v1/skills/:id/download/entrypoint` | Skill SKILL.md |
| "ZÍSKAŤ" | `/v1/skills/:id/download/artifact?path=<cesta>` | Špecifický artefakt |
| "ZÍSKAŤ" | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Archív zručností |
| "ZÍSKAŤ" | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Samostatný podpis |
| "ZÍSKAŤ" | `/v1/skills/:id/download/archive/checksums` | Kontrolné súčty SHA-256 |---

## 🔗 Link Enrichment

Keď sú požiadavky spracovávané cez API, server**automaticky obohacuje**manifesty, zoznamy artefaktov a inštalačné plány s absolútnymi adresami URL odvodenými od pôvodu prichádzajúcej požiadavky. Toto je obohatenie za behu, nie zapečené do `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Inštalačné plány sú ukážky, nie vzdialené zápisy.**

Rozhranie API sa nikdy nenainštaluje do počítača volajúceho. Vracia:
- 📌 Vybrané metadáta zručností
- ⚠️ Upozornenia pre chýbajúcich členov balíka
- 🖥️ Konkrétne príkazy CLI na lokálne spustenie
- 🔗 Verejné adresy URL na stiahnutie, keď je k dispozícii pôvod žiadosti---

## 🔌 Relationship to MCP

Server MCP opätovne používa rovnaké verejné adresy URL rozhrania API, keď je nakonfigurovaný:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

To umožňuje ukážkam inštalácie MCP vracať konkrétne adresy URL manifestov a artefaktov namiesto iba miestnych repo ciest.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` vráti snímku riadenia užitočnú pre hostenú diagnostiku:

- metódy aktívnej autorizácie
- stav autorizácie správcu
- limitné okno a max
- zoznam povolených CORS
- Zoznam povolených IP
- stav udržiavacieho režimu
- cieľ a formát auditu
- aktuálne katalógové súčty
- žiadosť o odozvu ID pre sledovateľnosť
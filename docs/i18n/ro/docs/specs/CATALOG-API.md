# 🌐 Catalog API Surface (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Interfața API HTTP numai în citire pentru descoperirea de aptitudini, căutarea, compararea, planificarea instalării și descărcarea de artefacte.**---

## 📊 Status

| Caracteristica | Stat |
|:--------|:------|
| ✅ Catalog de puncte finale | Implementat |
| ✅ Auth (purtător + cheie API) | Implementat |
| ✅ Admin runtime auth | Implementat |
| ✅ Limitarea ratei | Implementat |
| ✅ Jurnal de audit | Implementat |
| ✅ Liste permise CORS și IP | Implementat |
| ✅ Mod de întreținere | Implementat |
| ✅ Descărcări de arhivă | Implementat |
| ✅ Specificații OpenAPI | Implementat |
| ⚠️ Backend de guvernare | Linie de bază bazată pe mediu, în proces; gateway extern sau IdP încă opțional |---

## 🎯 Purpose

API-ul oferă o suprafață în stil registry pentru:

- 📋 Listarea și filtrarea abilităților după calitate, securitate, categorie, risc și multe altele
- 📌 Preluarea manifestelor de aptitudini individuale
- 🔎 Căutare integrală și comparare cu mai multe aptitudini
- 📦 Listare pachet cu disponibilitate
- 📐 Generarea planului de instalare doar în citire
- 📥 Descărcarea artefactelor generate, a arhivelor și a manifestelor de sumă de control

Același catalog și suprafață de manifest este, de asemenea, baza pentru:

- planificarea instalării CLI local
- Răspunsuri de descoperire MCP numai în citire
- Descoperirea A2A și transferul planului de instalare
- potențiale cataloage private cu autorizare externă stratificată deasupra---

## Pornire rapidă

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

**Valori implicite**: `127.0.0.1:3333`---

## 🔐 Security Controls

Toate controalele de securitate sunt bazate pe env și sunt opționale:

| Control | Variabila | Exemplu |
|:--------|:---------|:--------|
| 🔑**Autentificare purtător**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `inlocuieste-ma` |
| 🗝️**Autentificare cheie API**| `OMNI_SKILLS_HTTP_API_KEYS` | `key-a,key-b` |
| 🛂**Autentificare admin**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦**Limitarea ratei**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Înregistrare de audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Format de audit**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` sau `text` |
| 📄**Fișier de audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**Lista de permise CORS**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**Listă IP permisă**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Proxy de încredere**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Mod de întreținere**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Reîncercați după**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Comportament:**
- 🟢 `/healthz` rămâne**întotdeauna neautentificat**
- 🔒 Toate celelalte rute necesită autentificare atunci când autentificarea este activată
- 🛂 `/admin/runtime` necesită indicativul de administrator atunci când este activat
- 🚦 Limitarea ratei este în proces cu anteturile de răspuns `X-RateLimit-*`
- 🧾 Fiecare răspuns poartă `X-Request-Id`
- 🚧 Modul de întreținere returnează `503` pentru rutele care nu sunt de sănătate, non-admin.### ✅ Current governance decision

Direcția actuală a proiectului este de a**reutiliza același format de catalog pentru implementări publice sau private**și de a stabili autentificarea externă atunci când este necesar.

Asta înseamnă:

- manifestul și forma API rămân partajate
- implementările auto-găzduite și locale pot rămâne pe linia de bază în proces
- guvernanța găzduită mai avansată se poate muta ulterior la un gateway extern sau la un strat de autentificare a întreprinderii, fără a deforma modelul de date### 🔐 Full hardened example:

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

| Metoda | Calea | Descriere |
|:-------|:-----|:-------------|
| `GET` | `/healthz` | Verificare de sănătate (neautentificată) |
| `GET` | `/openapi.json` | Specificație dinamică OpenAPI 3.1 |
| `GET` | `/admin/runtime` | Instantaneu guvernanță și runtime (autentificare admin când este activat) |### 📚 Catalog & Skills

| Metoda | Calea | Descriere |
|:-------|:-----|:-------------|
| `GET` | `/v1/skills` | Listează abilitățile cu filtre |
| `GET` | `/v1/skills/:id` | Obțineți manifestul de abilități individuale |
| `GET` | `/v1/search` | Căutare integrală |
| `GET` | `/v1/compare?ids=id1,id2` | Comparați mai multe abilități |
| `GET` | `/v1/bundle` | Lista pachete cu disponibilitate |
| `POST` | `/v1/install/plan` | Generați un plan de instalare |### 🔎 List/Search Filters

| Filtru | Exemplu |
|:-------|:--------|
| `categorie` | `?category=dezvoltare` |
| `instrument` | `?tool=cursor` |
| `risc` | `?risc=sigur` |
| `sort` | `?sort=quality\|cele mai bune practici\|nivel\|securitate\|nume` |
| `comanda` | `?order=asc\|desc` |
| `calitate_min` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `nivel_min` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `starea_validării` | `?validation_status=passed` |
| `starea_securității` | `?security_status=passed` |### 📦 Install Plan Body

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

| Metoda | Calea | Descriere |
|:-------|:-----|:-------------|
| `GET` | `/v1/catalog/download` | Descărcare catalog complet |
| `GET` | `/v1/skills/:id/artefacts` | Lista artefacte de calificare |
| `GET` | `/v1/skills/:id/archives` | Listați arhivele de abilități |
| `GET` | `/v1/skills/:id/downloads` | Toate linkurile de descărcare disponibile |
| `GET` | `/v1/skills/:id/download/manifest` | Skill manifest JSON |
| `GET` | `/v1/skills/:id/download/entrypoint` | Skill SKILL.md |
| `GET` | `/v1/skills/:id/download/artefact?path=<cale>` | Artefact specific |
| `GET` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Arhiva de aptitudini |
| `GET` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Semnătură detașată |
| `GET` | `/v1/skills/:id/download/archive/checksums` | Sume de control SHA-256 |---

## 🔗 Link Enrichment

Când solicitările sunt gestionate prin API, serverul**îmbogătește automat**manifestele, listele de artefacte și planurile de instalare cu adrese URL absolute derivate din originea cererii primite. Aceasta este îmbogățirea timpului de execuție, nu inclusă în „dist/manifests/*.json”.---

## 📋 Install Plan Notes

> ⚠️**Planurile de instalare sunt previzualizări, nu scrieri de la distanță.**

API-ul nu se instalează niciodată pe computerul apelantului. Se intoarce:
- 📌 Metadatele abilităților selectate
- ⚠️ Avertismente pentru membrii pachetului lipsă
- 🖥️ Comenzi CLI concrete pentru a rula local
- 🔗 Adrese URL de descărcare publice atunci când originea solicitării este disponibilă---

## 🔌 Relationship to MCP

Serverul MCP reutiliza aceleași adrese URL publice API atunci când este configurat:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Acest lucru permite previzualizărilor de instalare MCP să returneze adrese URL de manifest și artefacte concrete, în loc de doar căi de depozit locale.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` returnează un instantaneu de guvernare util pentru diagnosticarea găzduită:

- metode de autentificare activă
- starea admin-auth
- fereastra de limitare a ratei și max
- Lista de permise CORS
- Lista permisă pentru IP
- starea modului de întreținere
- destinația și formatul auditului
- totalurile curente de catalog
- solicitați ecou ID-ul pentru trasabilitate
# 🌐 Catalog API Surface (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Skrivebeskyttet HTTP API til opdagelse af færdigheder, søgning, sammenligning, installationsplanlægning og artefaktdownloads.**---

## 📊 Status

| Funktion | Stat |
|:--------|:------|
| ✅ Katalog slutpunkter | Implementeret |
| ✅ Godkendelse (bærer + API-nøgle) | Implementeret |
| ✅ Admin runtime auth | Implementeret |
| ✅ Satsbegrænsende | Implementeret |
| ✅ Revisionslogning | Implementeret |
| ✅ CORS og IP tilladelseslister | Implementeret |
| ✅ Vedligeholdelsestilstand | Implementeret |
| ✅ Arkivoverførsler | Implementeret |
| ✅ OpenAPI spec | Implementeret |
| ⚠️ Governance backend | Env-drevet baseline i processen; ekstern gateway eller IdP stadig valgfri |---

## 🎯 Purpose

API'en giver en registry-stil overflade til:

- 📋 Liste og filtrere færdigheder efter kvalitet, sikkerhed, kategori, risiko og mere
- 📌 Hentning af individuelle færdigheder manifesterer sig
- 🔎 Fuldtekstsøgning og sammenligning af flere færdigheder
- 📦 Bundelliste med tilgængelighed
- 📐 Skrivebeskyttet installationsplangenerering
- 📥 Download af genererede artefakter, arkiver og kontrolsummanifester

Det samme katalog og manifest overflade er også grundlaget for:

- lokal CLI installation planlægning
- MCP skrivebeskyttede opdagelsessvar
- A2A-opdagelse og overdragelse af installationsplan
- potentielle private kataloger med ekstern godkendelse lagt ovenpå---

## Kom hurtigt i gang

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

**Standarder**: `127.0.0.1:3333`---

## 🔐 Security Controls

Alle sikkerhedskontroller er env-drevet og valgfri:

| Kontrol | Variabel | Eksempel |
|:--------|:--------|:--------|
| 🔑**Bærer auth**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `erstat-mig` |
| 🗝️**API nøglegodkendelse**| `OMNI_SKILLS_HTTP_API_KEYS` | `key-a,key-b` |
| 🛂**Admin godkendelse**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-hemmelighed` |
| 🚦**Satsbegrænsende**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Revisionslogning**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Revisionsformat**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | "json" eller "tekst" |
| 📄**Revisionsfil**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS-tilladelsesliste**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**IP-tilladelsesliste**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Trusted proxy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Vedligeholdelsestilstand**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Prøv igen efter**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Adfærd:**
- `/healthz` forbliver**altid uautentificeret**
- 🔒 Alle andre ruter kræver godkendelse, når godkendelse er aktiveret
- 🛂 `/admin/runtime` kræver admin-tokenet, når det er aktiveret
- 🚦 Hastighedsbegrænsning er i gang med "X-RateLimit-*" svaroverskrifter
- 🧾 Hvert svar bærer 'X-Request-Id'
- 🚧 Vedligeholdelsestilstand returnerer "503" for ikke-sundhedsmæssige, ikke-administratorruter### ✅ Current governance decision

Den aktuelle projektretning er at**genbruge det samme katalogformat til offentlige eller private implementeringer**og laggodkendelse eksternt, når det er nødvendigt.

Det betyder:

- manifestet og API-formen forbliver delt
- Selvhostede og lokale implementeringer kan forblive på basislinjen i processen
- mere avanceret hostet styring kan flytte til en ekstern gateway eller virksomhedsgodkendelseslag senere uden at forkaste datamodellen### 🔐 Full hardened example:

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

| Metode | Sti | Beskrivelse |
|:-------|:-----|:------------|
| `GET` | `/healthz` | Sundhedstjek (uautentificeret) |
| `GET` | `/openapi.json` | Dynamisk OpenAPI 3.1-specifikation |
| `GET` | `/admin/runtime` | Governance og runtime snapshot (admin godkendelse, når aktiveret) |### 📚 Catalog & Skills

| Metode | Sti | Beskrivelse |
|:-------|:-----|:------------|
| `GET` | `/v1/færdigheder` | Liste færdigheder med filtre |
| `GET` | `/v1/skills/:id` | Få individuelle færdigheder manifest |
| `GET` | `/v1/søg` | Fuldtekstsøgning |
| `GET` | `/v1/compare?ids=id1,id2` | Sammenlign flere færdigheder |
| `GET` | `/v1/bundles` | Liste bundter med tilgængelighed |
| `POST` | `/v1/install/plan` | Generer en installationsplan |### 🔎 List/Search Filters

| Filter | Eksempel |
|:-------|:--------|
| `kategori` | `?kategori=udvikling` |
| `værktøj` | `?værktøj=markør` |
| `risiko` | `?risiko=sikker` |
| `sortere` | `?sort=kvalitet\|bedste praksis\|niveau\|sikkerhed\|navn` |
| `ordre` | `?ordre=asc\|desc` |
| `min_kvalitet` | `?min_kvalitet=80` |
| `min_bedste_praksis` | `?min_best_practices=60` |
| `min_niveau` | `?min_niveau=2` |
| `min_sikkerhed` | `?min_security=90` |
| `valideringsstatus` | `?validation_status=bestået` |
| `sikkerhedsstatus` | `?sikkerhedsstatus=bestået` |### 📦 Install Plan Body

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

| Metode | Sti | Beskrivelse |
|:-------|:-----|:------------|
| `GET` | `/v1/katalog/download` | Fuld katalog download |
| `GET` | `/v1/skills/:id/artifacts` | Liste færdighedsartefakter |
| `GET` | `/v1/skills/:id/archives` | Liste færdighedsarkiver |
| `GET` | `/v1/skills/:id/downloads` | Alle tilgængelige downloadlinks |
| `GET` | `/v1/skills/:id/download/manifest` | Færdighedsmanifest JSON |
| `GET` | `/v1/skills/:id/download/entrypoint` | Skill SKILL.md |
| `GET` | `/v1/skills/:id/download/artifact?path=<path>` | Specifik artefakt |
| `GET` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Færdighedsarkiv |
| `GET` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Fritstående signatur |
| `GET` | `/v1/skills/:id/download/archive/checksums` | SHA-256 kontrolsummer |---

## 🔗 Link Enrichment

Når anmodninger håndteres gennem API'en,**beriger serveren automatisk**manifester, artefaktlister og installationsplaner med absolutte URL'er afledt af den indgående anmodnings oprindelse. Dette er runtime berigelse, ikke indbygget i `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Installationsplaner er forhåndsvisninger, ikke fjernskrivning.**

API'en installeres aldrig på opkalderens maskine. Det returnerer:
- 📌 Udvalgte færdighedsmetadata
- ⚠️ Advarsler for manglende bundtmedlemmer
- 🖥️ Konkrete CLI-kommandoer til at køre lokalt
- 🔗 Offentlige download-URL'er, når anmodningens oprindelse er tilgængelig---

## 🔌 Relationship to MCP

MCP-serveren genbruger de samme offentlige API-URL'er, når den er konfigureret:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Dette gør det muligt for forhåndsvisninger af MCP-installationer at returnere konkrete manifest- og artefakt-URL'er i stedet for kun lokale repo-stier.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` returnerer et styringsøjebliksbillede, der er nyttigt til hostet diagnostik:

- aktive godkendelsesmetoder
- admin-godkendelsesstatus
- satsgrænsevindue og max
- CORS tilladelsesliste
- IP-tilladelsesliste
- vedligeholdelsestilstand
- revisionsdestination og -format
- aktuelle katalogtotaler
- anmod om ID-ekko for sporbarhed
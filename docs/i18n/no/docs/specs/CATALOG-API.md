# 🌐 Catalog API Surface (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Skrivebeskyttet HTTP API for ferdighetsoppdagelse, søk, sammenligning, installasjonsplanlegging og nedlasting av artefakter.**---

## 📊 Status

| Funksjon | Stat |
|:--------|:------|
| ✅ Katalog endepunkter | Implementert |
| ✅ Auth (bærer + API-nøkkel) | Implementert |
| ✅ Admin kjøretidsautentisering | Implementert |
| ✅ Satsbegrensende | Implementert |
| ✅ Revisjonslogging | Implementert |
| ✅ CORS- og IP-godkjenningslister | Implementert |
| ✅ Vedlikeholdsmodus | Implementert |
| ✅ Arkivnedlastinger | Implementert |
| ✅ OpenAPI-spesifikasjon | Implementert |
| ⚠️ Governance backend | Env-drevet, i-prosess baseline; ekstern gateway eller IdP fortsatt valgfri |---

## 🎯 Purpose

API-en gir en overflate i registerstil for:

- 📋 Liste- og filtreringsferdigheter etter kvalitet, sikkerhet, kategori, risiko og mer
- 📌 Henting av individuelle ferdigheter manifesterer seg
- 🔎 Fulltekstsøk og sammenligning av flere ferdigheter
- 📦 Pakkeoppføring med tilgjengelighet
- 📐 Skrivebeskyttet installasjonsplangenerering
- 📥 Laster ned genererte artefakter, arkiver og kontrollsummanifester

Den samme katalogen og manifestoverflaten er også grunnlaget for:

- planlegging av lokal CLI-installasjon
- MCP skrivebeskyttede oppdagelsessvar
- A2A-oppdagelse og overlevering av installasjonsplan
- potensielle private kataloger med ekstern autentisering lagt på toppen---

## Hurtigstart

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

Alle sikkerhetskontroller er env-drevet og valgfri:

| Kontroll | Variabel | Eksempel |
|:--------|:--------|:--------|
| 🔑**Bærer auth**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `erstatt-meg` |
| 🗝️**API-nøkkelaut.**| `OMNI_SKILLS_HTTP_API_KEYS` | `key-a,key-b` |
| 🛂**Admin auth**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-hemmelighet` |
| 🚦**Satsbegrensende**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Revisjonslogging**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Revisjonsformat**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` eller `tekst` |
| 📄**Revisjonsfil**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS tillatelsesliste**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**IP-godkjenningsliste**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Pålitelig proxy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Vedlikeholdsmodus**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Prøv igjen etter**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Atferd:**
- `/healthz` forblir**alltid uautentisert**
- 🔒 Alle andre ruter krever auth når auth er aktivert
- 🛂 `/admin/runtime` krever admin-tokenet når det er aktivert
- 🚦 Hastighetsbegrensning er i gang med "X-RateLimit-*" svaroverskrifter
- 🧾 Hvert svar har "X-Request-Id".
- 🚧 Vedlikeholdsmodus returnerer "503" for ikke-helse, ikke-admin-ruter### ✅ Current governance decision

The current project direction is to**reuse the same catalog format for public or private deployments**and layer auth externally when needed.

Det betyr:

- manifestet og API-formen forblir delt
- self-hosted and local deployments can stay on the in-process baseline
- more advanced hosted governance can move to an external gateway or enterprise auth layer later without forking the data model### 🔐 Full hardened example:

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
| `GET` | `/healthz` | Helsesjekk (uautentisert) |
| `GET` | `/openapi.json` | Dynamisk OpenAPI 3.1-spesifikasjon |
| `GET` | `/admin/runtime` | Styring og øyeblikksbilde av kjøretid (admin-autentisering når aktivert) |### 📚 Catalog & Skills

| Metode | Sti | Beskrivelse |
|:-------|:-----|:------------|
| `GET` | `/v1/ferdigheter` | List ferdigheter med filtre |
| `GET` | `/v1/skills/:id` | Få individuelle ferdighetsmanifest |
| `GET` | `/v1/søk` | Fulltekstsøk |
| `GET` | `/v1/compare?ids=id1,id2` | Sammenlign flere ferdigheter |
| `GET` | `/v1/bunter` | Liste bunter med tilgjengelighet |
| `POST` | `/v1/install/plan` | Generer en installasjonsplan |### 🔎 List/Search Filters

| Filter | Eksempel |
|:-------|:--------|
| `kategori` | `?kategori=utvikling` |
| `verktøy` | `?verktøy=markør` |
| `risiko` | `?risk=safe` |
| `sort` | `?sort=kvalitet\|beste praksis\|nivå\|sikkerhet\|navn` |
| `ordre` | `?order=asc\|desc` |
| `min_kvalitet` | `?min_kvalitet=80` |
| `min_beste_praksis` | `?min_best_practices=60` |
| `min_nivå` | `?min_level=2` |
| `min_sikkerhet` | `?min_security=90` |
| `valideringsstatus` | `?validation_status=bestått` |
| `sikkerhetsstatus` | `?security_status=bestått` |### 📦 Install Plan Body

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
| `GET` | `/v1/katalog/last ned` | Last ned full katalog |
| `GET` | `/v1/skills/:id/artifacts` | Liste ferdighetsartefakter |
| `GET` | `/v1/skills/:id/archives` | Liste ferdighetsarkiver |
| `GET` | `/v1/skills/:id/downloads` | Alle tilgjengelige nedlastingslenker |
| `GET` | `/v1/skills/:id/download/manifest` | Ferdighetsmanifest JSON |
| `GET` | `/v1/skills/:id/download/entrypoint` | Ferdighet SKILL.md |
| `GET` | `/v1/skills/:id/download/artifact?path=<path>` | Spesifikk artefakt |
| `GET` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Ferdighetsarkiv |
| `GET` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Frittliggende signatur |
| `GET` | `/v1/skills/:id/download/archive/checksums` | SHA-256 sjekksummer |---

## 🔗 Link Enrichment

Når forespørsler håndteres gjennom API-en,**berikerer serveren automatisk**manifester, artefaktoppføringer og installasjonsplaner med absolutte URL-er avledet fra den innkommende forespørselens opprinnelse. Dette er runtime-anriking, ikke bakt inn i `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Installasjonsplaner er forhåndsvisninger, ikke fjernskriving.**

API-en installeres aldri på maskinen til den som ringer. Den returnerer:
- 📌 Valgte ferdighetsmetadata
- ⚠️ Advarsler for manglende pakkemedlemmer
- 🖥️ Konkrete CLI-kommandoer for å kjøre lokalt
- 🔗 Offentlige nedlastings-URLer når forespørselens opprinnelse er tilgjengelig---

## 🔌 Relationship to MCP

MCP-serveren gjenbruker de samme offentlige API-URLene når den er konfigurert:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Dette lar MCP-installasjonsforhåndsvisninger returnere konkrete manifest- og artefakt-URLer i stedet for bare lokale repo-baner.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` returnerer et styringsøyeblikksbilde som er nyttig for vertsdiagnostikk:

- aktive autentiseringsmetoder
- admin-auth status
- takstgrensevindu og maks
- CORS godkjenningsliste
- IP-godkjenningsliste
- tilstand for vedlikeholdsmodus
- revisjonsdestinasjon og format
- gjeldende katalogtotaler
- be om ID-ekko for sporbarhet
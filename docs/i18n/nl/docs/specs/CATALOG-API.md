# 🌐 Catalog API Surface (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Alleen-lezen HTTP API voor het ontdekken van vaardigheden, zoeken, vergelijken, installatieplanning en downloaden van artefacten.**---

## 📊 Status

| Kenmerk | Staat |
|:--------|:------|
| ✅ Cataloguseindpunten | Geïmplementeerd |
| ✅ Auth (drager + API-sleutel) | Geïmplementeerd |
| ✅ Beheerder runtime-authenticatie | Geïmplementeerd |
| ✅ Tariefbeperking | Geïmplementeerd |
| ✅ Auditregistratie | Geïmplementeerd |
| ✅ CORS en IP-toelatingslijsten | Geïmplementeerd |
| ✅ Onderhoudsmodus | Geïmplementeerd |
| ✅ Archiefdownloads | Geïmplementeerd |
| ✅ OpenAPI-specificatie | Geïmplementeerd |
| ⚠️ Bestuursbackend | Env-gedreven basislijn in het proces; externe gateway of IdP nog steeds optioneel |---

## 🎯 Purpose

De API biedt een registerachtig oppervlak voor:

- 📋 Vaardigheden opsommen en filteren op kwaliteit, beveiliging, categorie, risico en meer
- 📌 Individuele vaardigheidsmanifesten ophalen
- 🔎 Zoeken in volledige tekst en vergelijking van meerdere vaardigheden
- 📦 Bundellijst met beschikbaarheid
- 📐 Alleen-lezen installatieplan genereren
- 📥 Gegenereerde artefacten, archieven en checksum-manifesten downloaden

Deze zelfde catalogus en manifestoppervlak is ook de basis voor:

- lokale CLI-installatieplanning
- MCP-alleen-lezen detectiereacties
- A2A-detectie en overdracht van installatieplan
- potentiële privécatalogi met externe authenticatie erbovenop---

## Snel starten

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

**Standaardwaarden**: `127.0.0.1:3333`---

## 🔐 Security Controls

Alle beveiligingscontroles zijn omgevingsgestuurd en optioneel:

| Controle | Variabel | Voorbeeld |
|:--------|:---------|:--------|
| 🔑**Authentificatie aan toonder**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `vervang-mij` |
| 🗝️**API-sleutelverificatie**| `OMNI_SKILLS_HTTP_API_KEYS` | `sleutel-a, sleutel-b` |
| 🛂**Beheerderauthenticatie**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-geheim` |
| 🚦**Tarieflimiet**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Auditregistratie**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Auditformaat**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` of `text` |
| 📄**Auditbestand**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS toelatingslijst**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.voorbeeld.com,https://*.voorbeeld.org` |
| 🧱**IP-toelatingslijst**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Vertrouwde proxy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Onderhoudsmodus**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Opnieuw proberen na**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Gedrag:**
- 🟢 `/healthz` blijft**altijd niet-geverifieerd**
- 🔒 Voor alle andere routes is verificatie vereist wanneer verificatie is ingeschakeld
- 🛂 `/admin/runtime` vereist het admin-token indien ingeschakeld
- 🚦 Snelheidsbeperking is bezig met `X-RateLimit-*` antwoordheaders
- 🧾Elke reactie draagt `X-Request-Id`
- 🚧 De onderhoudsmodus retourneert '503' voor niet-gezondheids- en niet-beheerdersroutes### ✅ Current governance decision

De huidige richting van het project is om**hetzelfde catalogusformaat te hergebruiken voor openbare of privé-implementaties**en indien nodig een externe laagverificatie uit te voeren.

Dat betekent:

- het manifest en de API-vorm blijven gedeeld
- Zelf-hostende en lokale implementaties kunnen op de basislijn van het proces blijven
- Meer geavanceerd gehost beheer kan later overgaan naar een externe gateway of ondernemingsauthenticatielaag zonder het datamodel te splitsen### 🔐 Full hardened example:

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

| Werkwijze | Pad | Beschrijving |
|:-------|:-----|:------------|
| `KRIJG` | `/gezondheidz` | Gezondheidscontrole (niet geverifieerd) |
| `KRIJG` | `/openapi.json` | Dynamische OpenAPI 3.1-specificatie |
| `KRIJG` | `/admin/runtime` | Governance- en runtime-snapshot (beheerdersverificatie indien ingeschakeld) |### 📚 Catalog & Skills

| Werkwijze | Pad | Beschrijving |
|:-------|:-----|:------------|
| `KRIJG` | `/v1/vaardigheden` ​​| Lijst vaardigheden met filters |
| `KRIJG` | `/v1/skills/:id` | Ontvang een individueel vaardigheidsmanifest |
| `KRIJG` | `/v1/zoeken` | Zoeken in volledige tekst |
| `KRIJG` | `/v1/vergelijk?ids=id1,id2` | Vergelijk meerdere vaardigheden |
| `KRIJG` | `/v1/bundels` | Bundels met beschikbaarheid weergeven |
| `POST` | `/v1/install/plan` | Een installatieplan genereren |### 🔎 List/Search Filters

| Filteren | Voorbeeld |
|:-------|:--------|
| `categorie` | `?categorie=ontwikkeling` |
| `gereedschap` | `?tool=cursor` |
| `risico` | `?risico=veilig` |
| `sorteren` | `?sort=kwaliteit\|best-practices\|niveau\|beveiliging\|naam` |
| `bestellen` | `?order=opl\|desc` |
| `min_kwaliteit` | `?min_kwaliteit=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_niveau` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `validatie_status` | `?validation_status=geslaagd` |
| `beveiligingsstatus` | `?security_status=geslaagd` |### 📦 Install Plan Body

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

| Werkwijze | Pad | Beschrijving |
|:-------|:-----|:------------|
| `KRIJG` | `/v1/catalog/download` | Volledige catalogus downloaden |
| `KRIJG` | `/v1/skills/:id/artefacts` | Vaardigheidsartefacten weergeven |
| `KRIJG` | `/v1/skills/:id/archives` | Lijst met vaardigheidsarchieven |
| `KRIJG` | `/v1/skills/:id/downloads` | Alle beschikbare downloadlinks |
| `KRIJG` | `/v1/skills/:id/download/manifest` | Vaardigheidsmanifest JSON |
| `KRIJG` | `/v1/skills/:id/download/entrypoint` | Vaardigheid SKILL.md |
| `KRIJG` | `/v1/skills/:id/download/artifact?path=<pad>` | Specifiek artefact |
| `KRIJG` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Vaardighedenarchief |
| `KRIJG` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Vrijstaande handtekening |
| `KRIJG` | `/v1/skills/:id/download/archive/checksums` | SHA-256-controlesommen |---

## 🔗 Link Enrichment

Wanneer verzoeken via de API worden afgehandeld, verrijkt de server manifesten, artefactlijsten en installatieplannen**automatisch**met absolute URL's die zijn afgeleid van de oorsprong van het binnenkomende verzoek. Dit is runtime-verrijking, niet ingebakken in `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Installatieplannen zijn previews, geen schrijfacties op afstand.**

De API wordt nooit op de machine van de beller geïnstalleerd. Het retourneert:
- 📌 Geselecteerde metagegevens van vaardigheden
- ⚠️ Waarschuwingen voor ontbrekende bundelleden
- 🖥️ Concrete CLI-opdrachten om lokaal uit te voeren
- 🔗 Openbare download-URL's wanneer de oorsprong van het verzoek beschikbaar is---

## 🔌 Relationship to MCP

De MCP-server gebruikt dezelfde openbare API-URL's wanneer deze zijn geconfigureerd:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Hierdoor kunnen MCP-installatievoorbeelden concrete manifest- en artefact-URL's retourneren in plaats van alleen lokale opslagplaatspaden.---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` retourneert een governance-snapshot die nuttig is voor gehoste diagnostische gegevens:

- actieve authenticatiemethoden
- admin-authenticatiestatus
- tarieflimietvenster en max
- CORS-toelatingslijst
- IP-toelatingslijst
- status onderhoudsmodus
- auditbestemming en -formaat
- huidige catalogustotalen
- verzoek om ID-echo voor traceerbaarheid
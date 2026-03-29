# 🌐 Catalog API Surface (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

---


>**Read-only HTTP API para sa pagtuklas ng kasanayan, paghahanap, paghahambing, pagpaplano sa pag-install, at pag-download ng artifact.**---

## 📊 Status

| Tampok | Estado |
|:--------|:------|
| ✅ Mga endpoint ng Catalog | Ipinatupad |
| ✅ Auth (tagadala + API key) | Ipinatupad |
| ✅ Admin runtime auth | Ipinatupad |
| ✅ Paglilimita sa rate | Ipinatupad |
| ✅ Pag-log ng audit | Ipinatupad |
| ✅ CORS at IP allowlists | Ipinatupad |
| ✅ Maintenance mode | Ipinatupad |
| ✅ Mga pag-download sa archive | Ipinatupad |
| ✅ OpenAPI spec | Ipinatupad |
| ⚠️ Backend ng pamamahala | Env-driven, in-process na baseline; external gateway o IdP opsyonal pa rin |---

## 🎯 Purpose

Nagbibigay ang API ng registry-style surface para sa:

- 📋 Mga kasanayan sa paglilista at pag-filter ayon sa kalidad, seguridad, kategorya, panganib, at higit pa
- 📌 Pagkuha ng mga indibidwal na manifest ng kasanayan
- 🔎 Full-text na paghahanap at paghahambing ng maraming kasanayan
- 📦 Listahan ng bundle na may availability
- 📐 Read-only install plan generation
- 📥 Pag-download ng mga nabuong artifact, archive, at checksum manifest

Ang parehong catalog at manifest surface na ito ay batayan din para sa:

- pagpaplano ng lokal na pag-install ng CLI
- MCP read-only na mga tugon sa pagtuklas
- A2A discovery at install-plan handoff
- mga potensyal na pribadong katalogo na may panlabas na auth na naka-layer sa itaas---

## Mabilis na Simula

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

**Mga Default**: `127.0.0.1:3333`---

## 🔐 Security Controls

Ang lahat ng mga kontrol sa seguridad ay env-driven at opsyonal:

| Kontrolin | Variable | Halimbawa |
|:--------|:---------|:--------|
| 🔑**Pagpapatunay ng maydala**| `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `palitan-ako` |
| 🗝️**API key auth**| `OMNI_SKILLS_HTTP_API_KEYS` | `key-a,key-b` |
| 🛂**Admin auth**| `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦**Paglilimita sa rate**| `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝**Pag-log sa pag-audit**| `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️**Format ng pag-audit**| `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` o `text` |
| 📄**Audit file**| `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/omni-skills/audit.log` |
| 🌍**CORS allowlist**| `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱**IP allowlist**| `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁**Pinagkakatiwalaang proxy**| `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧**Mode ng pagpapanatili**| `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️**Subukan muli pagkatapos**| `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Gawi:**
- 🟢 `/healthz` ay nananatiling**palaging hindi napatotohanan**
- 🔒 Lahat ng iba pang ruta ay nangangailangan ng auth kapag ang auth ay pinagana
- 🛂 `/admin/runtime` ay nangangailangan ng token ng admin kapag pinagana
- 🚦 Nasa proseso ang paglilimita sa rate gamit ang mga header ng tugon ng `X-RateLimit-*`
- 🧾 Bawat tugon ay may `X-Request-Id`
- 🚧 Maintenance mode ay nagbabalik ng `503` para sa hindi pangkalusugan, hindi pang-admin na mga ruta### ✅ Current governance decision

Ang kasalukuyang direksyon ng proyekto ay ang**muling gamitin ang parehong format ng catalog para sa mga pampubliko o pribadong deployment**at panlabas na pagpapatunay ng layer kapag kinakailangan.

Ibig sabihin:

- mananatiling nakabahagi ang manifest at hugis ng API
- Ang mga self-host at lokal na deployment ay maaaring manatili sa in-process na baseline
- ang mas advanced na naka-host na pamamahala ay maaaring lumipat sa isang panlabas na gateway o enterprise auth layer sa ibang pagkakataon nang hindi kinukuha ang modelo ng data### 🔐 Full hardened example:

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

| Paraan | Landas | Paglalarawan |
|:-------|:-----|:------------|
| `KUMUHA` | `/healthz` | Health check (hindi napatotohanan) |
| `KUMUHA` | `/openapi.json` | Dynamic na OpenAPI 3.1 na detalye |
| `KUMUHA` | `/admin/runtime` | Pamamahala at runtime snapshot (admin auth kapag pinagana) |### 📚 Catalog & Skills

| Paraan | Landas | Paglalarawan |
|:-------|:-----|:------------|
| `KUMUHA` | `/v1/skills` | Maglista ng mga kasanayan na may mga filter |
| `KUMUHA` | `/v1/skills/:id` | Kumuha ng indibidwal na manifest ng kasanayan |
| `KUMUHA` | `/v1/search` | Full-text na paghahanap |
| `KUMUHA` | `/v1/compare?ids=id1,id2` | Paghambingin ang maraming kasanayan |
| `KUMUHA` | `/v1/mga bundle` | Listahan ng mga bundle na may kakayahang magamit |
| `POST` | `/v1/install/plan` | Bumuo ng plano sa pag-install |### 🔎 List/Search Filters

| Salain | Halimbawa |
|:-------|:--------|
| `kategorya` | `?category=develop` |
| `tool` | `?tool=cursor` |
| `panganib` | `?risk=safe` |
| `pag-uuri` | `?sort=quality\|best-practices\|level\|security\|name` |
| `order` | `?order=asc\|desc` |
| `min_quality` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_level` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `status_validation` | `?validation_status=passed` |
| `status_seguridad` | `?security_status=passed` |### 📦 Install Plan Body

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

| Paraan | Landas | Paglalarawan |
|:-------|:-----|:------------|
| `KUMUHA` | `/v1/catalog/download` | Buong pag-download ng catalog |
| `KUMUHA` | `/v1/skills/:id/artifacts` | Maglista ng mga artifact ng kasanayan |
| `KUMUHA` | `/v1/skills/:id/archives` | Listahan ng mga archive ng kasanayan |
| `KUMUHA` | `/v1/skills/:id/downloads` | Lahat ng magagamit na link sa pag-download |
| `KUMUHA` | `/v1/skills/:id/download/manifest` | Skill manifest JSON |
| `KUMUHA` | `/v1/skills/:id/download/entrypoint` | Kasanayan SKILL.md |
| `KUMUHA` | `/v1/skills/:id/download/artifact?path=<path>` | Tukoy na artifact |
| `KUMUHA` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Archive ng kasanayan |
| `KUMUHA` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Nakahiwalay na lagda |
| `KUMUHA` | `/v1/skills/:id/download/archive/checksums` | Mga checksum ng SHA-256 |---

## 🔗 Link Enrichment

Kapag ang mga kahilingan ay pinangangasiwaan sa pamamagitan ng API, ang server**awtomatikong nagpapayaman**ay nagpapakita, mga listahan ng artifact, at mga plano sa pag-install na may ganap na mga URL na nagmula sa papasok na pinagmulan ng kahilingan. Ito ay runtime enrichment, hindi na-baked sa `dist/manifests/*.json`.---

## 📋 Install Plan Notes

> ⚠️**Ang mga plano sa pag-install ay mga preview, hindi mga remote na pagsusulat.**

Ang API ay hindi kailanman nag-i-install sa machine ng tumatawag. Nagbabalik ito:
- 📌 Napiling metadata ng kasanayan
- ⚠️ Mga babala para sa mga nawawalang miyembro ng bundle
- 🖥️ Mga konkretong utos ng CLI para tumakbo nang lokal
- 🔗 Pampublikong pag-download ng mga URL kapag available ang pinagmulan ng kahilingan---

## 🔌 Relationship to MCP

Ginagamit muli ng server ng MCP ang parehong mga pampublikong URL ng API kapag na-configure:```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

Nagbibigay-daan ito sa mga preview ng pag-install ng MCP na magbalik ng mga konkretong manifest at artifact na URL sa halip na mga lokal na repo path lang.---

## 🧭 Admin Runtime Snapshot

Ang `GET /admin/runtime` ay nagbabalik ng snapshot ng pamamahala na kapaki-pakinabang para sa mga naka-host na diagnostic:

- mga aktibong paraan ng pagpapatunay
- katayuan ng admin-auth
- rate-limit window at max
- CORS allowlist
- Listahan ng pinapayagan ng IP
- estado ng mode ng pagpapanatili
- destinasyon at format ng audit
- kasalukuyang mga kabuuan ng katalogo
- humiling ng pag-echo ng ID para sa traceability
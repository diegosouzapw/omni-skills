# 🌐 Catalog API Surface (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CATALOG-API.md) · 🇪🇸 [es](../../../es/docs/specs/CATALOG-API.md) · 🇫🇷 [fr](../../../fr/docs/specs/CATALOG-API.md) · 🇩🇪 [de](../../../de/docs/specs/CATALOG-API.md) · 🇮🇹 [it](../../../it/docs/specs/CATALOG-API.md) · 🇷🇺 [ru](../../../ru/docs/specs/CATALOG-API.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CATALOG-API.md) · 🇯🇵 [ja](../../../ja/docs/specs/CATALOG-API.md) · 🇰🇷 [ko](../../../ko/docs/specs/CATALOG-API.md) · 🇸🇦 [ar](../../../ar/docs/specs/CATALOG-API.md) · 🇮🇳 [in](../../../in/docs/specs/CATALOG-API.md) · 🇹🇭 [th](../../../th/docs/specs/CATALOG-API.md) · 🇻🇳 [vi](../../../vi/docs/specs/CATALOG-API.md) · 🇮🇩 [id](../../../id/docs/specs/CATALOG-API.md) · 🇲🇾 [ms](../../../ms/docs/specs/CATALOG-API.md) · 🇳🇱 [nl](../../../nl/docs/specs/CATALOG-API.md) · 🇵🇱 [pl](../../../pl/docs/specs/CATALOG-API.md) · 🇸🇪 [sv](../../../sv/docs/specs/CATALOG-API.md) · 🇳🇴 [no](../../../no/docs/specs/CATALOG-API.md) · 🇩🇰 [da](../../../da/docs/specs/CATALOG-API.md) · 🇫🇮 [fi](../../../fi/docs/specs/CATALOG-API.md) · 🇵🇹 [pt](../../../pt/docs/specs/CATALOG-API.md) · 🇷🇴 [ro](../../../ro/docs/specs/CATALOG-API.md) · 🇭🇺 [hu](../../../hu/docs/specs/CATALOG-API.md) · 🇧🇬 [bg](../../../bg/docs/specs/CATALOG-API.md) · 🇸🇰 [sk](../../../sk/docs/specs/CATALOG-API.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CATALOG-API.md) · 🇮🇱 [he](../../../he/docs/specs/CATALOG-API.md) · 🇵🇭 [phi](../../../phi/docs/specs/CATALOG-API.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CATALOG-API.md)

> Translation snapshot for **Awesome Omni Skills** `v0.1.5`.
> Source: `docs/specs/CATALOG-API.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/specs/CATALOG-API.md; version=0.9.0; release=v0.1.5; english_snapshot=2026-03-31T00:00:00+00:00 -->

> **Read-only HTTP API for skill discovery, search, comparison, install planning, and artifact downloads across the same catalog used by the public skill repository and curated derivative surfaces.**

---

## 📊 Status

| Feature | State |
|:--------|:------|
| ✅ Catalog endpoints | Implemented |
| ✅ Auth (bearer + API key) | Implemented |
| ✅ Admin runtime auth | Implemented |
| ✅ Rate limiting | Implemented |
| ✅ Audit logging | Implemented |
| ✅ CORS and IP allowlists | Implemented |
| ✅ Maintenance mode | Implemented |
| ✅ Archive downloads | Implemented |
| ✅ OpenAPI spec | Implemented |
| ⚠️ Governance backend | Env-driven, in-process baseline; external gateway or IdP still optional |

---

## 🎯 Purpose

The API provides a registry-style surface for:

- 📋 Listing and filtering skills by quality, security, category, risk, and more
- 📌 Fetching individual skill manifests
- 🔎 Full-text search and multi-skill comparison
- 📦 Bundle listing with availability
- 📐 Read-only install plan generation
- 📥 Downloading generated artifacts, archives, and checksum manifests

This same catalog and manifest surface is also the basis for:

- local CLI install planning
- MCP read-only discovery responses
- A2A discovery and install-plan handoff
- potential private catalogs with external auth layered on top

---

## เริ่มต้นอย่างรวดเร็ว

### 📦 From repo:

```bash
npm run api
```

### 📦 From published package:

```bash
npx awesome-omni-skills api --port 3333
```

### ⚙️ Custom host and port:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

**Defaults**: `127.0.0.1:3333`

---

## 🔐 Security Controls

All security controls are env-driven and optional:

| Control | Variable | Example |
|:--------|:---------|:--------|
| 🔑 **Bearer auth** | `OMNI_SKILLS_HTTP_BEARER_TOKEN` | `replace-me` |
| 🗝️ **API key auth** | `OMNI_SKILLS_HTTP_API_KEYS` | `key-a,key-b` |
| 🛂 **Admin auth** | `OMNI_SKILLS_HTTP_ADMIN_TOKEN` | `admin-secret` |
| 🚦 **Rate limiting** | `OMNI_SKILLS_RATE_LIMIT_MAX` + `_WINDOW_MS` | `60` / `60000` |
| 📝 **Audit logging** | `OMNI_SKILLS_HTTP_AUDIT_LOG` | `1` |
| 🗂️ **Audit format** | `OMNI_SKILLS_HTTP_AUDIT_FORMAT` | `json` or `text` |
| 📄 **Audit file** | `OMNI_SKILLS_HTTP_AUDIT_LOG_PATH` | `/var/log/awesome-omni-skills/audit.log` |
| 🌍 **CORS allowlist** | `OMNI_SKILLS_HTTP_ALLOWED_ORIGINS` | `https://app.example.com,https://*.example.org` |
| 🧱 **IP allowlist** | `OMNI_SKILLS_HTTP_ALLOWED_IPS` | `127.0.0.1/32,10.0.0.0/8` |
| 🔁 **Trusted proxy** | `OMNI_SKILLS_HTTP_TRUST_PROXY` | `loopback` |
| 🚧 **Maintenance mode** | `OMNI_SKILLS_HTTP_MAINTENANCE_MODE` | `1` |
| ⏱️ **Retry after** | `OMNI_SKILLS_HTTP_MAINTENANCE_RETRY_AFTER_SECONDS` | `300` |

**Behavior:**
- 🟢 `/healthz` remains **always unauthenticated**
- 🔒 All other routes require auth when auth is enabled
- 🛂 `/admin/runtime` requires the admin token when enabled
- 🚦 Rate limiting is in-process with `X-RateLimit-*` response headers
- 🧾 Every response carries `X-Request-Id`
- 🚧 Maintenance mode returns `503` for non-health, non-admin routes

### ✅ Current governance decision

The current project direction is to **reuse the same catalog format for public or private deployments** and layer auth externally when needed.

That means:

- the manifest and API shape stay shared
- self-hosted and local deployments can stay on the in-process baseline
- more advanced hosted governance can move to an external gateway or enterprise auth layer later without forking the data model

### 🔐 Full hardened example:

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_HTTP_API_KEYS=key-a,key-b \
OMNI_SKILLS_HTTP_ADMIN_TOKEN=admin-secret \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
OMNI_SKILLS_HTTP_AUDIT_LOG=1 \
OMNI_SKILLS_HTTP_AUDIT_LOG_PATH=/var/log/awesome-omni-skills/audit.log \
OMNI_SKILLS_HTTP_ALLOWED_ORIGINS=https://app.example.com \
OMNI_SKILLS_HTTP_ALLOWED_IPS=127.0.0.1/32 \
OMNI_SKILLS_HTTP_TRUST_PROXY=loopback \
npx awesome-omni-skills api --port 3333
```

---

## 📡 Endpoints

### 🏥 Health & Schema

| Method | Path | Description |
|:-------|:-----|:------------|
| `GET` | `/healthz` | Health check (unauthenticated) |
| `GET` | `/openapi.json` | Dynamic OpenAPI 3.1 specification |
| `GET` | `/admin/runtime` | Governance and runtime snapshot (admin auth when enabled) |

### 📚 Catalog & Skills

| Method | Path | Description |
|:-------|:-----|:------------|
| `GET` | `/v1/skills` | List skills with filters |
| `GET` | `/v1/skills/:id` | Get individual skill manifest |
| `GET` | `/v1/search` | Full-text search |
| `GET` | `/v1/compare?ids=id1,id2` | Compare multiple skills |
| `GET` | `/v1/bundles` | List bundles with availability |
| `POST` | `/v1/install/plan` | Generate an install plan |

### 🔎 List/Search Filters

| Filter | Example |
|:-------|:--------|
| `category` | `?category=development` |
| `tool` | `?tool=cursor` |
| `risk` | `?risk=safe` |
| `sort` | `?sort=quality\|best-practices\|level\|security\|name` |
| `order` | `?order=asc\|desc` |
| `min_quality` | `?min_quality=80` |
| `min_best_practices` | `?min_best_practices=60` |
| `min_level` | `?min_level=2` |
| `min_security` | `?min_security=90` |
| `validation_status` | `?validation_status=passed` |
| `security_status` | `?security_status=passed` |

### 📦 Install Plan Body

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

| Method | Path | Description |
|:-------|:-----|:------------|
| `GET` | `/v1/catalog/download` | Full catalog download |
| `GET` | `/v1/skills/:id/artifacts` | List skill artifacts |
| `GET` | `/v1/skills/:id/archives` | List skill archives |
| `GET` | `/v1/skills/:id/downloads` | All available download links |
| `GET` | `/v1/skills/:id/download/manifest` | Skill manifest JSON |
| `GET` | `/v1/skills/:id/download/entrypoint` | Skill SKILL.md |
| `GET` | `/v1/skills/:id/download/artifact?path=<path>` | Specific artifact |
| `GET` | `/v1/skills/:id/download/archive?format=zip\|tar.gz` | Skill archive |
| `GET` | `/v1/skills/:id/download/archive/signature?format=zip\|tar.gz` | Detached signature |
| `GET` | `/v1/skills/:id/download/archive/checksums` | SHA-256 checksums |

---

## 🔗 Link Enrichment

When requests are handled through the API, the server **automatically enriches** manifests, artifact listings, and install plans with absolute URLs derived from the incoming request origin. This is runtime enrichment, not baked into `dist/manifests/*.json`.

---

## 📋 Install Plan Notes

> ⚠️ **Install plans are previews, not remote writes.**

The API never installs onto the caller's machine. It returns:
- 📌 Selected skill metadata
- ⚠️ Warnings for missing bundle members
- 🖥️ Concrete CLI commands to run locally
- 🔗 Public download URLs when request origin is available

---

## 🔌 Relationship to MCP

The MCP server reuses the same public API URLs when configured:

```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

This allows MCP install previews to return concrete manifest and artifact URLs instead of only local repo paths.

---

## 🧭 Admin Runtime Snapshot

`GET /admin/runtime` returns a governance snapshot useful for hosted diagnostics:

- active auth methods
- admin-auth status
- rate-limit window and max
- CORS allowlist
- IP allowlist
- maintenance mode state
- audit destination and format
- current catalog totals
- request ID echoing for traceability

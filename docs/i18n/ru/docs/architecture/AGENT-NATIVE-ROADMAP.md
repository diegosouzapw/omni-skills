# 🗺️ Agent-Native Roadmap (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇪🇸 [es](../../../es/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇪 [de](../../../de/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇹 [it](../../../it/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇳 [in](../../../in/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇹🇭 [th](../../../th/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇩 [id](../../../id/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇳🇴 [no](../../../no/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇩🇰 [da](../../../da/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇮🇱 [he](../../../he/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AGENT-NATIVE-ROADMAP.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AGENT-NATIVE-ROADMAP.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `docs/architecture/AGENT-NATIVE-ROADMAP.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/architecture/AGENT-NATIVE-ROADMAP.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-03-31T00:00:00+00:00 -->

> **The architecture evolution plan for Awesome Omni Skills: from installer-first repository to a public skill catalog, curated derivative surface, and shared runtime powering CLI, API, MCP, and A2A without duplicating logic.**

---

## 📊 Current Platform Areas

| Phase | Name | Status |
|:------|:-----|:-------|
| 1️⃣ | Contracts and Artifacts | ✅ Current |
| 2️⃣ | Read-Only Catalog API | ✅ Current |
| 3️⃣ | MCP Discovery Surface | ✅ Current |
| 4️⃣ | Local Install and Config Surface | ✅ Current |
| 5️⃣ | A2A Orchestration | ✅ Current |

### ✅ What Exists Today

- machine-readable catalog artifacts in `dist/`
- read-only HTTP API with endpoint coverage for search, bundles, compare, install planning, and downloads
- MCP server with `stdio`, streamable HTTP, and SSE transports
- local sidecar with allowlisted writes and `config-mcp` flows
- 7 install-capable clients, 16 config-capable clients, 33 MCP config targets, and 19 config profiles
- 55 native catalog skills across 15 active categories, plus 38 curated English derivatives under `skills_omni/`
- deeper bundle specialization inside `full-stack`, `security`, `devops`, and `ai-engineer` via `auth-flows`, `threat-modeling`, `release-engineering`, and `context-engineering`
- per-skill archives (`zip`, `tar.gz`) with SHA-256 checksums and detached signatures on release tags
- API governance baseline: bearer/API-key auth, admin runtime auth, rate limiting, audit logging, CORS/IP allowlists, trust proxy, maintenance mode, and request IDs
- A2A runtime with task lifecycle, JSON/SQLite durability, restart resume, SSE streaming, cancelation, push notifications, optional process executor, and opt-in leased coordination

### 🔭 Future Expansion Areas

The core roadmap now describes the current platform scope. The remaining items are future expansion areas, not foundational gaps:

- only highly selective MCP additions from this point forward, and only where official public docs make a safe writer possible
- deeper reference packs and more semantic scoring so the classifier keeps separating exceptional skills from merely polished ones
- enterprise-hosted governance beyond the current in-process baseline, if the project later needs gateway or IdP integration
- deeper specialization across the newly activated `design`, `tools`, `data-ai`, and `machine-learning` tracks
- continued operational polish around the private enhancer while keeping its formal operating model: OmniRouter pinned to `cx/gpt-5.4`, hosted cloud in `mock` or degraded preflight, and reliable `live` on LAN or self-hosted execution
- continued release and workflow hardening only as quality-of-service work, not as missing platform foundation

## Future Catalog Expansion Track

The first two public category-expansion waves are now landed:

- `design` → `design-systems-ops`, `accessibility-audit`, `design-token-governance`
- `tools` → `mcp-server-authoring`
- `data-ai` → `data-contracts`
- `machine-learning` → `model-serving`

The next recommended step is no longer category activation for its own sake. It is to deepen these newly active code-native tracks so they feel like durable product surfaces rather than single-skill footholds.

Recommended direction:

1. deepen `design` with more operational design-system workflows
2. deepen `tools` with authoring and plugin-oriented skills
3. deepen `data-ai` with implementation-first pipeline and instrumentation skills
4. deepen `machine-learning` with serving, training, and evaluation operations skills

Categories intentionally deferred unless strong code-native proposals appear:

- `business`
- `content-media`

That expansion history now lives in the mainline runtime docs rather than a separate public task backlog:

- [Codebase Analysis](CODEBASE-ANALYSIS.md)
- [Catalog](../CATALOG.md)

---

## 🎯 Goals

- ✅ Keep the current `npx awesome-omni-skills` workflow stable as the single public CLI path
- ✅ Introduce a machine-readable source of truth for skills
- ✅ Support discovery, recommendation, and install planning by agents
- ✅ Separate remote catalog concerns from local filesystem writes
- ✅ Reuse the same metadata across CLI, API, MCP, and A2A

---

## 🚫 Non-Goals

- ❌ Remote install-on-user-machine from a hosted server
- ❌ Replace `SKILL.md` as the canonical authoring format
- ❌ Require contributors to write manifests by hand
- ❌ Turn the project into a heavy hosted queue platform by default

---

## 🏗️ Target Architecture

One **catalog core** with three protocol surfaces:

| Surface | Best For | Mode |
|:--------|:---------|:-----|
| 🌐 **REST API** | Registry access, UI integrations, third-party consumers | Read-only |
| 🔌 **MCP** | Agent discovery, install previews, config writing, client recipes | Read-only + local writes |
| 🤖 **A2A** | Agent-to-agent orchestration and install-plan handoff | Task lifecycle with simple-first local durability |

### ⚙️ Core Principle

> **All protocols consume the same generated artifact family.**

```text
SKILL.md + support pack
        ↓
validate + classify + archive
        ↓
metadata.json + dist/catalog.json + manifests + archives
        ↓
CLI / API / MCP / A2A
```

The manifest stays the shared contract. Archives are distribution artifacts layered on top of that contract, not a replacement for it.

---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

Used by hosted API and remote MCP servers.

| ✅ Allowed | ❌ Not Allowed |
|:-----------|:---------------|
| Search skills | Write to the caller's filesystem |
| Fetch manifests | Mutate local client config |
| Compare skills | Infer arbitrary machine state |
| Recommend bundles | — |
| Build install plans | — |

### 2️⃣ Local Installer Mode

Used by the CLI and the MCP sidecar.

| ✅ Allowed |
|:-----------|
| Detect local AI clients |
| Inspect installed skills |
| Preview file operations |
| Install or remove skill directories |
| Write local MCP config after preview |

> 📌 This remains the only mode where real OS writes happen.

---

## 📐 Protocol Split

### 🌐 REST API

Best for registry access, search, comparison, versioned downloads, and install planning.

**Endpoints**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/compare` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`

### 🔌 MCP

Best for tool-based discovery, promptable recommendations, install previews, and client-specific MCP setup.

**Read-only tools**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Local tools**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`

### 🤖 A2A

Best for discovery handoff, install-plan workflows, and resumable agent task execution.

**Current operations**: `discover-skills` · `recommend-stack` · `prepare-install-plan`

---

## 🛡️ Security Model

| Principle | Implementation |
|:----------|:---------------|
| 🔒 Hosted services are read-only | API and remote MCP do not write to the caller filesystem |
| 📂 Writes stay local | CLI and MCP sidecar only |
| 👁️ Preview before write | Dry-run defaults on local mutations |
| 🔑 Integrity is explicit | SHA-256 checksums for generated artifacts |
| ✍️ Release trust is explicit | Detached signatures enforced on release tags |
| ⚠️ Risk is surfaced | Risk and security metadata propagate to every runtime surface |

---

## 📋 Platform Details

### Phase 1: Contracts and Artifacts

- documented target architecture
- defined manifest schema
- generated metadata, catalog, manifests, bundles, and archives

### Phase 2: Catalog Service

- read-only HTTP API with Express 5
- search, filtering, manifest lookup, bundle listing, comparison, and downloads
- env-driven hosted governance baseline

### Phase 3: MCP Discovery

- official `@modelcontextprotocol/sdk` integration
- `stdio`, streamable HTTP, and SSE transports
- read-only tools, resources, and prompts backed by the shared catalog

### Phase 4: Local Install and Config Surface

- local sidecar with allowlisted writes
- detection for 7 install-capable clients
- config writing for 16 config-capable clients across 33 targets and 19 config profiles
- guided `config-mcp` flows in the CLI and visual shell
- stable support for Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, Continue, Windsurf, OpenCode, Cline, GitHub Copilot CLI, Kilo Code, Zed, Goose, and Dev Containers

### Phase 5: A2A Orchestration

- agent card at `/.well-known/agent.json`
- `message/send`, `message/stream`, `tasks/get`, `tasks/cancel`, `tasks/resubscribe`, and push-notification config methods
- JSON and SQLite persistence with restart recovery
- optional external process executor
- opt-in leased execution across workers for SQLite and optional advanced Redis coordination
- simple-first defaults kept on memory, JSON, or SQLite without external dependencies

### Current Enhancer Operating Decision

The private enhancer's supported `live` model is now explicit:

- hosted PR automation runs a preflight-gated `live` attempt
- if the public OmniRoute gateway is blocked or unstable, the PR is marked `blocked` with an operator-facing reason instead of failing opaquely
- the canonical reliable `live` path remains LAN or local service execution
- scheduled private GitHub runs stay `mock` by default unless an operator explicitly requests `live`

---

## ✅ Decisions Closed in 0.1.x

### 1. Distribution Strategy

**Decision**: keep the manifest as the shared contract and keep signed per-skill archives as the distribution surface.

**Why**:
- CLI, API, MCP, and A2A already consume the normalized manifest shape
- archives are ideal for download and verification, but poor as the only discovery contract
- this keeps authoring simple and distribution verifiable

### 2. Private or Premium Catalogs

**Decision**: reuse the same manifest and catalog format, and layer auth or policy externally.

**Why**:
- it avoids forking the data model
- it matches the current API/MCP governance approach
- it remains compatible with MCP ecosystem direction around OAuth client credentials and enterprise-managed authorization

### 3. Client Writer Strategy

**Decision**: converge on a small set of canonical export families and only keep bespoke writers where official client docs require it.

**Canonical families now in use**:
- JSON `mcpServers`
- JSON `servers`
- JSON `context_servers`
- YAML `mcpServers`
- TOML `[mcp_servers]`

**Why**:
- it keeps the implementation maintainable
- it still supports client-specific needs such as Claude settings, Continue YAML, Zed `context_servers`, and Codex TOML
- it avoids inventing fragile writers for clients without stable public config docs

---

## 🌍 Research Notes Behind Those Decisions

The current decisions were checked against official ecosystem docs:

- the MCP ecosystem now documents optional extensions such as OAuth client credentials and enterprise-managed authorization, which supports externalizing hosted auth instead of forking the catalog format
- OpenAI documents a public docs MCP server and Codex MCP configuration patterns that align with the shared manifest plus client-writer strategy
- VS Code documents first-class MCP support and an extension guide, which reinforces maintaining its dedicated `servers`-based writer
- JetBrains AI Assistant documents MCP setup through product UX rather than a stable cross-platform file contract, which supports keeping it in manual/snippet territory for now

---

## 🔮 Longer-Term Decision Points

Only a few strategic questions remain genuinely open:

1. Whether any client beyond the current matrix truly clears the bar for first-class writing, or whether the remaining products should stay manual/snippet-only
2. When, if ever, should hosted governance move behind an external gateway or enterprise IdP instead of the current in-process baseline?
3. How far should the scorer go in evaluating reference-pack depth and operational quality before it becomes too opinionated for contributors?

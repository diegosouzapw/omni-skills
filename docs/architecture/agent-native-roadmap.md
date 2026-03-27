# 🗺️ Agent-Native Roadmap

> **The architecture evolution plan: from a skills installer into a machine-readable catalog powering API, MCP, and A2A surfaces without duplicating logic.**

---

## 📊 Phase Status

| Phase | Name | Status |
|:------|:-----|:-------|
| 1️⃣ | Contracts and Artifacts | ✅ Completed |
| 2️⃣ | Read-Only Catalog API | ✅ Completed |
| 3️⃣ | MCP Discovery Surface | ✅ Completed |
| 4️⃣ | Local Install Surface | ✅ Completed |
| 5️⃣ | A2A Orchestration | 🟡 Partially Completed (task runtime in place) |

### ✅ What's Done

- Machine-readable catalog (`dist/catalog.json`, `dist/manifests/`, `dist/bundles.json`)
- Read-only HTTP API with full endpoint coverage
- MCP server with 3 transports (stdio/stream/sse) and 10 tools
- Local sidecar with allowlisted filesystem access
- Per-skill archives (zip/tar.gz) with SHA-256 checksums
- Auth (bearer + API key), rate limiting, and audit logging
- Client-aware MCP config writing (JSON + TOML)
- A2A runtime with agent card, task lifecycle, polling, SSE streaming, cancelation, push-notification config, JSON/SQLite durability, restart resume, and optional process executor

### ⏳ What's Still Open

- Multi-node coordination and lease-aware task execution
- Even broader client-specific config coverage
- More published skills and deeper reference packs to push best-practices scores beyond the current plateau

---

## 🎯 Goals

- ✅ Keep the current `npx omni-skills` workflow working
- ✅ Introduce a machine-readable source of truth for skills
- ✅ Support discovery, recommendation, and install planning by agents
- ✅ Separate remote catalog concerns from local filesystem writes
- ✅ Make the same metadata reusable across CLI, API, MCP, and A2A

---

## 🚫 Non-Goals

- ❌ Remote install-on-user-machine from a hosted server
- ❌ A2A before the catalog contract is stable
- ❌ Replace `SKILL.md` as the canonical authoring format
- ❌ Require contributors to write manifests by hand

---

## 🏗️ Target Architecture

One **catalog core** with three protocol surfaces:

| Surface | Best For | Mode |
|:--------|:---------|:-----|
| 🌐 **REST API** | Registry access, web UI, third-party integrations | Read-only |
| 🔌 **MCP** | Agent discovery, recommendations, install previews | Read-only + local writes |
| 🤖 **A2A** | Agent-to-agent orchestration and workflow handoff | Task lifecycle → durable orchestration |

---

## ⚙️ Core Principle

> **All protocols consume the same generated manifest artifacts.**

```
📝 Authors → SKILL.md + references/assets
      ↓
⚙️ Build Pipeline → validates, classifies, archives
      ↓
📁 dist/ → catalog.json + manifests/*.json + archives/*
      ↓
🌐 API / 🔌 MCP / 🤖 A2A → read same artifacts
```

---

## 🔀 Delivery Modes

### 1️⃣ Remote Catalog Mode

> Used by hosted API and remote MCP servers.

| ✅ Allowed | ❌ Not Allowed |
|:-----------|:---------------|
| Search skills | Write to user's filesystem |
| Fetch manifests | Mutate local agent config |
| Compare skills | Infer local machine state |
| Recommend bundles | — |
| Build install plans | — |

### 2️⃣ Local Installer Mode

> Used by CLI and MCP sidecar.

| ✅ Allowed |
|:-----------|
| Detect local AI clients |
| Inspect installed skills |
| Preview file operations (dry-run) |
| Install/remove skill directories |
| Edit local config after confirmation |

> 📌 This is the **only mode** where real OS writes happen.

---

## 📐 Protocol Split

### 🌐 REST API

Best for: registry access, web UI, third-party integrations, search, versioned downloads

**Endpoints**: `GET /v1/skills` · `GET /v1/skills/:id` · `GET /v1/search` · `GET /v1/bundles` · `POST /v1/install/plan` · `GET /healthz`

### 🔌 MCP

Best for: agent tool selection, promptable discovery, install previews, context-rich retrieval

**Read-only tools**: `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**Local tools**: `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`

### 🤖 A2A

Best for: multi-agent orchestration, discovery handoff, install-plan workflows

**Capabilities**: `discover-skills` · `recommend-stack` · `prepare-install-plan`

---

## 🛡️ Security Model

| Principle | Implementation |
|:----------|:---------------|
| 🔒 Hosted services are read-only | No filesystem writes from API/MCP remote |
| 📂 Writes stay local | CLI and sidecar only |
| 👁️ Preview before write | Dry-run defaults on all mutations |
| 🔒 Checksum integrity | SHA-256 for all generated artifacts |
| ✍️ Future signed releases | Layered on top of checksums |
| ⚠️ Risk visibility | Risk metadata visible in every surface |

---

## 📋 Phase Details

### Phase 1: Contracts and Artifacts ✅

- Documented target architecture
- Defined manifest schema
- Generated machine-readable artifacts in `dist/`

### Phase 2: Catalog Service ✅

- Read-only HTTP API with Express 5
- Search, filtering, manifest lookup, artifact downloads
- Auth, rate limiting, audit logging

### Phase 3: MCP Discovery ✅

- MCP server with stdio/stream/sse transports
- 5 read-only tools, 3 resources, 2 prompts
- Official `@modelcontextprotocol/sdk` integration

### Phase 4: Local Install Surface 🟡

- ✅ Local sidecar with allowlisted writes
- ✅ Client detection for 7 AI assistants
- ✅ MCP config writing for JSON + TOML
- ✅ VS Code user/workspace and Dev Container config targets
- ✅ Claude allow/deny list and VS Code sandbox config generation

### Phase 5: A2A Orchestration 🟡

- ✅ Agent Card at `/.well-known/agent.json`
- ✅ `message/send` with task creation and continuation
- ✅ `tasks/get`, `tasks/cancel`, and `tasks/resubscribe`
- ✅ `message/stream` with SSE task updates
- ✅ `tasks/pushNotificationConfig/*`
- ✅ JSON and SQLite task persistence with restart recovery
- ✅ Optional external process executor
- ⏳ Multi-node coordination and leased execution

---

## 🔮 Open Questions

| # | Question |
|:--|:---------|
| 1️⃣ | Should future releases move entirely to signed per-skill archives? |
| 2️⃣ | Should private/premium catalogs reuse the manifest format with auth layered externally? |
| 3️⃣ | Should the installer converge to fewer shared export models plus docs, or keep growing per-client writers? |

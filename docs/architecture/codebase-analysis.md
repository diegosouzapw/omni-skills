# 🔬 Codebase Deep Analysis

> **Comprehensive technical analysis of the Omni Skills architecture, components, and build pipeline.**
> Last analyzed: 2026-03-27

---

## 📊 Project Overview

| Attribute | Value |
|:----------|:------|
| **Name** | `omni-skills` |
| **Version** | `0.0.1` |
| **License** | MIT (code) + CC BY 4.0 (content) |
| **NPM** | `npx omni-skills` |
| **Published Skills** | 19 |
| **Defined Bundles** | 6 (all fully backed) |
| **Core Code** | ~6,200+ lines including Python validation/build tooling |
| **Production Dependencies** | 4 (`@modelcontextprotocol/sdk`, `cors`, `express`, `zod`) |

---

## 🏗️ Architecture Overview

The repository follows a **monorepo workspace** pattern with a shared catalog core consumed by three protocol surfaces:

```
┌─────────────────────────────────────────────────────┐
│                   CLI Layer                          │
│  cli.js (1182 LOC)  ·  install.js (403 LOC)         │
└──────────────┬──────────────────┬───────────────────┘
               │                  │
┌──────────────▼──────────────────▼───────────────────┐
│              Runtime Servers                         │
│  server-mcp (684 LOC)  ·  server-api (246 LOC)      │
│  server-a2a (138 LOC)  ·  task-runtime (968 LOC)    │
└──────────────┬──────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────┐
│              Core Engine                             │
│  catalog-core (828 LOC)  ·  local-sidecar (822 LOC) │
└──────────────┬──────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────┐
│              Build Pipeline                          │
│  skill_metadata.py (51KB)  ·  generate_index.py     │
│  validate_skills.py  ·  build_catalog.js            │
│  recategorize_skills.py  ·  verify_archives.py      │
└─────────────────────────────────────────────────────┘
```

---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js`

> **1,182 lines** — The single entry point for all operations.

| Command | Function |
|:--------|:---------|
| 🔎 `find [query]` | Full-text catalog search with 12+ filter flags |
| 📦 `install` | Delegates to `install.js` with target flags |
| 🔌 `mcp <transport>` | Starts MCP Server (stdio/stream/sse) |
| 🌐 `api` | Starts HTTP API |
| 🤖 `a2a` | Starts A2A Server |
| 🧪 `smoke` | Release preflight validation |
| 🩺 `doctor` | Local diagnostics |
| 🖥️ `ui` | Interactive terminal UI |
| 🏷️ `recategorize` | Taxonomy audit and rewrite |

**Key feature**: `find --install --yes` enables a discovery → install pipeline in one command.

---

### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

> **403 lines** — Installs skills into 7 AI coding assistants.

| Flag | Target | Default Path |
|:-----|:-------|:-------------|
| `--claude` | Claude Code | `~/.claude/skills` |
| `--cursor` | Cursor | `~/.cursor/skills` |
| `--gemini` | Gemini CLI | `~/.gemini/skills` |
| `--codex` | Codex CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antigravity` | Antigravity (default) | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `.agents/skills` |

**Two modes**:
- 📥 **Full clone** — `git clone --depth 1` → copy `skills/` + `docs/`
- 🎯 **Selective** — `--skill` or `--bundle` → fetch by manifest via GitHub raw content

**Security**: `symlink-safety.js` blocks symlinks escaping the repo root.

---

### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

> **828 lines** — The shared data layer powering CLI, API, MCP, and A2A.

| Export | Description |
|:-------|:------------|
| 🔎 `searchSkills()` | Full-text search with weighted scoring (ID=10, exact=8, partial=3) |
| 📋 `listSkills()` | Multi-axis filtering: quality, best-practices, level, security, risk, category |
| 📌 `getSkill()` | Complete manifest with public URLs |
| ⚖️ `compareSkills()` | Side-by-side comparison of N skills |
| 💡 `recommendSkills()` | Goal-based recommendation with scoring |
| 📦 `buildInstallPlan()` | Install plan with client recipes, checksums, warnings |
| 🗂️ `listBundles()` | Bundles with real availability vs. roadmap |
| 📁 `listSkillArchives()` | Archive resolution with signatures and checksums |

---

### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

> **684 lines** — Full Model Context Protocol implementation with official SDK.

**🔌 3 Transports**: `stdio` · `stream` (StreamableHTTP) · `sse`

**🛠️ Read-only Tools (always available)**:
- `search_skills` · `get_skill` · `compare_skills` · `recommend_skills` · `preview_install`

**🔧 Local-mode Tools** (enabled with `OMNI_SKILLS_MCP_MODE=local`):
- `detect_clients` · `list_installed_skills` · `install_skills` · `remove_skills` · `configure_client_mcp`

**📚 Resources**: `omni://catalog/index` · `omni://skills/{id}` · `omni://clients/{client}/install-recipe`

**💬 Prompts**: `recommend_bundle_for_goal` · `install_skill_for_client`

---

### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

> **822 lines** — Filesystem-aware client management with security controls.

- 🕵️ **Client Detection** — Maps 7 clients with skills paths, config paths, and config profiles
- 🔒 **Allowlist Security** — Write paths limited to explicit whitelist (extensible via `OMNI_SKILLS_LOCAL_ALLOWLIST`)
- 📦 **Install/Remove** — File copy operations with dry-run, summary, SHA-256 verification
- ⚙️ **MCP Config Writer** — Generates configs for JSON, TOML (Codex), and VS Code with intelligent upsert
- 📋 **5 Config Profiles**: `claude-json` · `cursor-json` · `generic-json` · `vscode-json` · `codex-toml`

---

### 6️⃣ HTTP API — `packages/server-api/src/server.js`

> **246 lines** — Read-only RESTful API with Express 5.

| Endpoint | Purpose |
|:---------|:--------|
| `GET /healthz` | Health check |
| `GET /openapi.json` | Dynamic OpenAPI 3.1 spec |
| `GET /v1/skills` | List + filter |
| `GET /v1/skills/:id` | Individual manifest |
| `GET /v1/search` | Full-text search |
| `GET /v1/compare` | Skill comparison |
| `GET /v1/bundles` | Bundle listing |
| `POST /v1/install/plan` | Install plan generation |
| `GET /v1/skills/:id/download/*` | Artifact, archive, signature, checksum downloads |

**Security**: `http-runtime.js` middleware with bearer/API-key auth, rate limiting, and audit logging.

---

### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + `packages/server-a2a/src/task-runtime.js`

> **1,272 lines combined** — JSON-RPC 2.0 task runtime for agent-to-agent communication.

**Supported methods**:
- 🔎 `message/send` → task create or continue
- 📡 `message/stream` → start task and stream SSE updates
- 📋 `tasks/get` → poll task snapshot
- ⛔ `tasks/cancel` → cancel running task
- 🔄 `tasks/resubscribe` → resume stream for existing task
- 🔔 `tasks/pushNotificationConfig/*` → manage task webhooks

**Current task operations**:
- `discover-skills` → catalog search
- `recommend-stack` → goal-based recommendation
- `prepare-install-plan` → install plan generation with `input-required` continuation

**Task capabilities**:
- lifecycle states: `submitted`, `working`, `input-required`, `completed`, `canceled`, `failed`
- SSE `status-update` and `artifact-update` events
- webhook push notifications with localhost/insecure guardrails
- JSON or SQLite persistence with restart resume for interrupted tasks
- optional external worker executor via `OMNI_SKILLS_A2A_EXECUTOR=process`

Exposes `/.well-known/agent.json` for A2A discovery and `POST /a2a` for all JSON-RPC traffic.

---

## ⚙️ Build Pipeline

| Script | Language | Purpose |
|:-------|:---------|:--------|
| 📊 `skill_metadata.py` | Python | Core validator (51KB): YAML parsing, canonical taxonomy (18 categories), quality/security scoring, static security scanner |
| ✅ `validate_skills.py` | Python | Orchestrates validation + generates `metadata.json` per skill and root |
| 📑 `generate_index.py` | Python | Generates `skills_index.json`, manifests, archives (zip/tar.gz), SHA-256 checksums |
| 🏗️ `build_catalog.js` | Node.js | Produces final `dist/catalog.json` and `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Category audit and frontmatter rewrite |
| 🔍 `verify_archives.py` | Python | Archive integrity verification |

---

## 📦 Published Skills

The current public catalog spans 19 skills across architecture, backend, frontend, documentation, security, DevOps, and AI-agent categories:

- 🧭 **Discovery & Planning**: `find-skills`, `brainstorming`, `architecture`, `debugging`
- 🌐 **Product & Full-Stack Delivery**: `frontend-design`, `api-design`, `database-design`, `omni-figma`
- 🛡️ **Security Review & Scanning**: `security-auditor`, `vulnerability-scanner`
- 🔧 **OSS Maintainer Workflows**: `documentation`, `changelog`, `create-pr`
- ⚙️ **DevOps Delivery**: `docker-expert`, `kubernetes`, `terraform`
- 🤖 **AI Application Engineering**: `rag-engineer`, `prompt-engineer`, `llm-patterns`

That bundle coverage changes the install story materially:

- ✅ `essentials` is fully backed (`4/4`)
- ✅ `full-stack` is fully backed (`4/4`)
- ✅ `security` is fully backed (`2/2`)
- ✅ `oss-maintainer` is fully backed (`4/4`)
- ✅ `devops` is fully backed (`3/3`)
- ✅ `ai-engineer` is fully backed (`3/3`)

### 🎨 omni-figma — Quality: 83/100 · Security: 98/100

A unified Figma MCP router skill with 6 workflows:

1. ✏️ **Implement code from Figma** — complete design-to-code pipeline
2. 🔍 **Inspect design/tokens** — visual exploration and token lookup
3. 🔗 **Code Connect mappings** — component ↔ Figma mapping
4. 📐 **Design system rules** — generate reusable agent instructions
5. 🖌️ **Edit/Generate Figma/FigJam** — canvas writes and diagrams
6. 🔧 **Setup/Troubleshooting** — auth, tools, permissions

Includes 3 reference docs: `mcp-setup-and-troubleshooting.md`, `tool-routing-and-prompts.md`, `figma-best-practices-2026.md`

### 🔎 find-skills — Quality: 88/100 · Security: 100/100

A catalog discovery skill that teaches the agent to:

- 🎯 Extract domain and task from the user's request
- 📚 Search the Omni Skills catalog before claiming capabilities
- ✅ Verify the match is actually published (vs. roadmap metadata)
- 🛠️ Generate the correct install command for the user's client

---

## 📏 Quality Classification System

| Dimension | Description | Scoring |
|:----------|:------------|:--------|
| 🎯 **Maturity** | Structural complexity | L1 (basic) · L2 (instructions) · L3 (scripts+tests) |
| ⭐ **Quality** | Overall completeness | 0-100 → bronze · silver · gold · platinum |
| 🛡️ **Security** | Static analysis + scanners | 0-100 → starter · hardened |
| 📋 **Best Practices** | Metadata and structure | 0-100 → fair · good · excellent |

---

## 🌟 Strengths

1. **Modular architecture** — Clean separation between core, servers, CLI, and build
2. **Multi-protocol** — REST API + MCP (3 transports) + A2A in a single package
3. **Robust security** — Allowlist for local mode, symlink safety, auth middleware, rate limiting
4. **Sophisticated build pipeline** — Validation, classification, archives with SHA-256 checksums
5. **7-client support** — Auto-detection and per-client config generation
6. **Dry-run everywhere** — All destructive operations support preview mode
7. **Minimal dependencies** — Only 4 production dependencies

---

## 🔮 Opportunities

1. **Catalog breadth** — 19 published skills now fully back all 6 bundles, but the next step is deeper coverage inside each bundle with more specialized skills
2. **Best practices scores** — The floor is now much higher, but the catalog still plateaus at `85/100` and needs deeper reference packs and richer examples to push further
3. **A2A durability** — SQLite persistence and process executors now exist, but execution is still single-node and not lease-aware
4. **Client config breadth** — Sidecar support is stronger, but client-specific config export coverage can still grow
5. **`skill_metadata.py` size** — 51KB single-file module could benefit from decomposition

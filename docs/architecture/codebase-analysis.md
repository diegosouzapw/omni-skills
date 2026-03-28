# 🔬 Codebase Deep Analysis

> **Comprehensive technical analysis of the current Omni Skills architecture, runtime surfaces, and build pipeline.**
> Last analyzed: 2026-03-28

---

## 📊 Project Overview

| Attribute | Value |
|:----------|:------|
| **Name** | `omni-skills` |
| **Package version** | `0.1.1` |
| **Skill versions** | Per-skill and independent from the package version. Many published skills are still `0.0.1` while the package is `0.1.1`. |
| **License** | MIT (code) + CC BY 4.0 (content) |
| **NPM** | `npx omni-skills` |
| **Published skills** | 22 |
| **Defined bundles** | 6, all fully backed by published skills |
| **Active catalog categories** | 10 active buckets out of 18 canonical taxonomy categories |
| **Primary runtime/build LOC sampled below** | 13,600+ |
| **Production dependencies** | 7 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `zod`) |

Current repository-level classification snapshot from `metadata.json`:

- average quality score: `96.9`
- average best-practices score: `98.8`
- average security score: `95.0`
- all 22 published skills validate as `L3`

---

## 🏗️ Architecture Overview

The repository follows a **workspace monorepo** pattern with one shared catalog core and multiple runtime surfaces.

```text
┌────────────────────────────────────────────────────────────┐
│                        CLI Layer                           │
│  cli.js (1939 LOC) · ui.mjs (2190 LOC) · install.js (403) │
└──────────────┬─────────────────────┬───────────────────────┘
               │                     │
┌──────────────▼─────────────────────▼───────────────────────┐
│                    Runtime Servers                         │
│  server-mcp (812) · local-sidecar (1943)                  │
│  server-api (271) · http-runtime (444)                    │
│  server-a2a (138) · task-runtime (1401)                   │
│  task-coordinator (318)                                   │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                      Core Engine                           │
│  catalog-core (828)                                       │
└──────────────┬─────────────────────────────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────────┐
│                    Build Pipeline                          │
│  skill_metadata.py (2223) · generate_index.py (690)       │
│  validate_skills.py · build_catalog.js · verify_archives.py│
└────────────────────────────────────────────────────────────┘
```

The design is intentionally **artifact-driven**:

1. skills are authored as `SKILL.md` plus local support packs
2. the build validates, classifies, archives, and normalizes them
3. the generated artifacts become the contract for CLI, API, MCP, and A2A

---

## 🧩 Component Breakdown

### 1️⃣ Unified CLI — `tools/bin/cli.js` + `tools/bin/ui.mjs`

> **4,500+ LOC combined** — the main public interface for both expert and guided usage.

| Command | Function |
|:--------|:---------|
| 🔎 `find [query]` | Full-text catalog search with score-aware filters |
| 📦 `install` | Guided or flag-based install into known clients or custom paths |
| 🧾 `config-mcp` | Preview or write client-aware MCP config |
| 🔌 `mcp <transport>` | Starts the MCP server in `stdio`, `stream`, or `sse` |
| 🌐 `api` | Starts the catalog API |
| 🤖 `a2a` | Starts the A2A runtime |
| 🧪 `smoke` | Release preflight validation |
| 🩺 `doctor` | Local diagnostics |
| 🖥️ `ui` | Ink visual shell with install, discovery, config, and service hub |
| 🏷️ `recategorize` | Taxonomy drift inspection and rewrite |

The CLI is no longer just an installer. It is the public operations tool for the whole platform.

### 2️⃣ Multi-Target Installer — `tools/bin/install.js`

> **403 LOC** — installs skills into 7 install-capable assistants.

| Flag | Target | Default Path |
|:-----|:-------|:-------------|
| `--claude` | Claude Code | `~/.claude/skills` |
| `--cursor` | Cursor | `~/.cursor/skills` |
| `--gemini` | Gemini CLI | `~/.gemini/skills` |
| `--codex` | Codex CLI | `~/.codex/skills` |
| `--kiro` | Kiro | `~/.kiro/skills` |
| `--antigravity` | Antigravity | `~/.gemini/antigravity/skills` |
| `--opencode` | OpenCode | `<workspace>/.opencode/skills` |

It supports:

- full-library installs
- selective installs by `--skill`
- curated installs by `--bundle`
- guided TTY and visual UI flows
- custom target paths

### 3️⃣ Catalog Core Engine — `packages/catalog-core/src/index.js`

> **828 LOC** — shared runtime layer for CLI, API, MCP, and A2A.

| Export | Description |
|:-------|:------------|
| 🔎 `searchSkills()` | Search with weighted text matching and filter support |
| 📋 `listSkills()` | Multi-axis filtering by quality, best practices, level, security, risk, tool, and category |
| 📌 `getSkill()` | Manifest resolution plus enriched public URLs |
| ⚖️ `compareSkills()` | Side-by-side comparison |
| 💡 `recommendSkills()` | Goal-driven recommendation |
| 📦 `buildInstallPlan()` | Install plan generation with warnings and client-aware guidance |
| 🗂️ `listBundles()` | Curated bundle listing with availability |
| 📁 `listSkillArchives()` | Archive and signature resolution |

This is the real single source of runtime truth after generation.

### 4️⃣ MCP Server — `packages/server-mcp/src/server.js`

> **812 LOC** — full MCP implementation using the official SDK.

**Transports**

- `stdio`
- streamable HTTP
- SSE

**Always-on read-only tools**

- `search_skills`
- `get_skill`
- `compare_skills`
- `recommend_skills`
- `preview_install`

**Local-mode tools**

- `detect_clients`
- `list_installed_skills`
- `install_skills`
- `remove_skills`
- `configure_client_mcp`

The MCP surface is deliberately split between:

- remote/read-only catalog use
- local/write-capable sidecar use

### 5️⃣ Local Sidecar — `packages/server-mcp/src/local-sidecar.js`

> **1,943 LOC** — filesystem-aware MCP layer for client detection, skill management, and MCP config writing.

Current practical support:

- **7 install-capable clients**
- **15 config-capable clients**
- **30 config targets**
- **19 config profiles**

Install-capable clients:

- Claude Code
- Cursor
- Gemini CLI
- Codex CLI
- Kiro
- Antigravity
- OpenCode

Config-capable clients and targets include:

- Claude settings, Claude Desktop, and Claude project config
- Cursor user and workspace config
- VS Code workspace, user, insiders, and Dev Container config
- Gemini user and workspace settings
- Antigravity user config
- Kiro user, workspace, and legacy paths
- Codex CLI TOML config
- OpenCode user and workspace config
- Cline settings
- GitHub Copilot CLI user and repo config
- Kilo user, project, and workspace config
- Continue workspace YAML
- Windsurf user config
- Zed workspace config

The sidecar is intentionally honest about boundaries:

- it writes only inside an allowlist
- it previews by default
- it keeps first-class writers only where official docs expose a stable format
- it does not pretend every MCP-capable product is also a skill-install target

### 6️⃣ HTTP API — `packages/server-api/src/server.js` + `packages/server-api/src/http-runtime.js`

> **715 LOC combined** — read-only registry API plus governance middleware.

Important endpoints:

- `/healthz`
- `/openapi.json`
- `/admin/runtime`
- `/v1/skills`
- `/v1/skills/:id`
- `/v1/search`
- `/v1/compare`
- `/v1/bundles`
- `/v1/install/plan`
- `/v1/skills/:id/download/*`

Governance baseline already implemented:

- bearer token auth
- API-key auth
- admin token auth
- in-process rate limiting
- request IDs
- audit logging
- CORS allowlists
- IP allowlists
- trust proxy handling
- maintenance mode

### 7️⃣ A2A Server — `packages/server-a2a/src/server.js` + runtime modules

> **1,857 LOC combined across the main server, runtime, and coordinator files** — JSON-RPC 2.0 task lifecycle for agent-to-agent workflows.

Supported methods:

- `message/send`
- `message/stream`
- `tasks/get`
- `tasks/cancel`
- `tasks/resubscribe`
- `tasks/pushNotificationConfig/*`

Current operations:

- `discover-skills`
- `recommend-stack`
- `prepare-install-plan`

Durability and coordination model:

- memory, JSON, or SQLite local persistence
- restart resume
- optional external process executor
- opt-in leased queue coordination for shared SQLite workers
- optional Redis-backed coordination as an advanced hosted path

The key architectural choice here is **simple-first local operation**. Redis exists as an advanced option, but the default product path remains local and dependency-light.

---

## ⚙️ Build Pipeline

| Script | Language | Purpose |
|:-------|:---------|:--------|
| 📊 `skill_metadata.py` | Python | Validation, taxonomy, scoring, and static security scanning |
| ✅ `validate_skills.py` | Python | Metadata generation per skill and for the root summary |
| 📑 `generate_index.py` | Python | Skills index, manifests, archives, signatures, and checksums |
| 🏗️ `build_catalog.js` | Node.js | Final `dist/catalog.json` and `dist/bundles.json` |
| 🏷️ `recategorize_skills.py` | Python | Canonical category audit and rewrite |
| 🔍 `verify_archives.py` | Python | Archive and signature verification |

Two details matter operationally:

1. `dist/` is part of the runtime contract and intentionally committed
2. the build is deterministic enough to support CI verification and release signing

---

## 📦 Published Catalog

The current public catalog spans 22 skills:

- **Discovery and planning**: `find-skills`, `brainstorming`, `architecture`, `debugging`
- **Product and full-stack delivery**: `frontend-design`, `api-design`, `database-design`, `omni-figma`
- **Security**: `security-auditor`, `vulnerability-scanner`, `incident-response`
- **OSS maintainer workflows**: `documentation`, `changelog`, `create-pr`
- **DevOps**: `docker-expert`, `kubernetes`, `terraform`, `observability-review`
- **AI engineering**: `rag-engineer`, `prompt-engineer`, `llm-patterns`, `eval-design`

All six bundles are fully backed:

- `essentials` → `4/4`
- `full-stack` → `4/4`
- `security` → `3/3`
- `devops` → `4/4`
- `ai-engineer` → `4/4`
- `oss-maintainer` → `4/4`

Current score spread from the generated catalog:

- quality scores: `94, 95, 96, 97, 98, 99, 100`
- best-practices scores: `98, 100`
- security score: all published skills currently `95`

Representative high end:

- `omni-figma` → `quality 100`, `best_practices 100`
- `eval-design` → `quality 99`, `best_practices 100`
- `incident-response` → `quality 99`, `best_practices 100`
- `terraform` → `quality 98`, `best_practices 98`
- `vulnerability-scanner` → `quality 98`, `best_practices 98`

Representative lower end inside the current top band:

- `architecture` → `quality 94`, `best_practices 98`
- `changelog` → `quality 94`, `best_practices 98`
- `create-pr` → `quality 94`, `best_practices 98`

This is intentional. The scorer now distinguishes “excellent” from “exceptional” instead of flattening the whole catalog at the top.

---

## 🌟 Strengths

1. **Artifact-first design**
   Every runtime surface consumes the same generated catalog and manifests.
2. **Broad protocol coverage**
   CLI, API, MCP, and A2A coexist without fragmenting the data model.
3. **Strong local-product ergonomics**
   Guided install, visual shell, `config-mcp`, and dry-run defaults make the project usable beyond power users.
4. **Honest security posture**
   Allowlisted local writes, static scanning, signing, checksums, and release verification are all explicit.
5. **Healthy MCP reach**
   The project now supports a broad set of current MCP-capable clients without pretending undocumented targets are stable.

---

## 🔮 Opportunities

1. **Deeper bundle coverage**
   The next step is specialization inside the existing bundles, not just broad coverage.
2. **Richer scorer semantics**
   There is still room to evaluate reference-pack depth and workflow quality more semantically.
3. **More client writers only where justified**
   Expansion should stay disciplined and tied to stable official docs.
4. **Validator decomposition**
   `skill_metadata.py` is still a large module and would benefit from internal decomposition over time.
5. **Hosted governance escalation**
   The current in-process baseline is enough for self-hosting, but enterprise deployment would eventually want external gateway and identity integration.

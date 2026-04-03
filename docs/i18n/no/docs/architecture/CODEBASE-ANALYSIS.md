# 🔬 Codebase Deep Analysis (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/architecture/CODEBASE-ANALYSIS.md) · 🇪🇸 [es](../../../es/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇷 [fr](../../../fr/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇪 [de](../../../de/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇹 [it](../../../it/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇺 [ru](../../../ru/docs/architecture/CODEBASE-ANALYSIS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/CODEBASE-ANALYSIS.md) · 🇯🇵 [ja](../../../ja/docs/architecture/CODEBASE-ANALYSIS.md) · 🇰🇷 [ko](../../../ko/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇦 [ar](../../../ar/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇳 [in](../../../in/docs/architecture/CODEBASE-ANALYSIS.md) · 🇹🇭 [th](../../../th/docs/architecture/CODEBASE-ANALYSIS.md) · 🇻🇳 [vi](../../../vi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇩 [id](../../../id/docs/architecture/CODEBASE-ANALYSIS.md) · 🇲🇾 [ms](../../../ms/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇱 [nl](../../../nl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇱 [pl](../../../pl/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇪 [sv](../../../sv/docs/architecture/CODEBASE-ANALYSIS.md) · 🇳🇴 [no](../../../no/docs/architecture/CODEBASE-ANALYSIS.md) · 🇩🇰 [da](../../../da/docs/architecture/CODEBASE-ANALYSIS.md) · 🇫🇮 [fi](../../../fi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇹 [pt](../../../pt/docs/architecture/CODEBASE-ANALYSIS.md) · 🇷🇴 [ro](../../../ro/docs/architecture/CODEBASE-ANALYSIS.md) · 🇭🇺 [hu](../../../hu/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇬 [bg](../../../bg/docs/architecture/CODEBASE-ANALYSIS.md) · 🇸🇰 [sk](../../../sk/docs/architecture/CODEBASE-ANALYSIS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/CODEBASE-ANALYSIS.md) · 🇮🇱 [he](../../../he/docs/architecture/CODEBASE-ANALYSIS.md) · 🇵🇭 [phi](../../../phi/docs/architecture/CODEBASE-ANALYSIS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/CODEBASE-ANALYSIS.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `docs/architecture/CODEBASE-ANALYSIS.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/architecture/CODEBASE-ANALYSIS.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-04-02T00:00:00+00:00 -->

> **Comprehensive technical analysis of the current Awesome Omni Skills architecture, its public skill surfaces, and its build/runtime pipeline.**
> Last analyzed: 2026-03-30

---

## 📊 Project Overview

<!-- generated:codebase-analysis-project-overview:start -->
| Attribute | Value |
|:----------|:------|
| **Name** | `awesome-omni-skills` |
| **Package version** | `0.9.0` |
| **Skill versions** | Per-skill and independent from the package version. Many skills still ship `0.0.1` metadata while the package is `0.9.0`. |
| **License** | MIT (code) + CC BY 4.0 (content) |
| **NPM** | `npx awesome-omni-skills` |
| **Published skills** | 155 native skills in `skills/` plus 80 curated derivatives in `skills_omni/` |
| **Defined bundles** | 7, all fully backed by published skills |
| **Active catalog categories** | 16 active buckets out of 18 canonical taxonomy categories |
| **Primary runtime/build LOC sampled below** | 13,600+ |
| **Production dependencies** | 8 (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `yaml`, `zod`) |
<!-- generated:codebase-analysis-project-overview:end -->

Current repository-level classification snapshot from `metadata.json`:

<!-- generated:codebase-analysis-classification-snapshot:start -->
- average quality score: `97.7`
- average best-practices score: `99.7`
- average security score: `88.0`
- maturity mix: `155` `L3` skills and `0` `L2` skills
- validation mix: `127` passed, `28` warn, `0` failed
<!-- generated:codebase-analysis-classification-snapshot:end -->

Current release baseline:

<!-- generated:codebase-analysis-release-baseline:start -->
- public repository release: `v0.9.0`
- private enhancer release: `v1.0.0`
- public release automation and private release automation are both active and green
<!-- generated:codebase-analysis-release-baseline:end -->

---

## 🏗️ Architecture Overview

The repository follows a **workspace monorepo** pattern with one public native skill repository, one curated derivative surface, one shared catalog core, and multiple runtime surfaces.

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

## 🧭 Future Expansion Direction

The public runtime is no longer blocked on foundational work, and the second category wave is already landed. The next useful catalog work is depth, not more category-count chasing.

Newly activated code-native tracks now in the catalog:

- `design` via `design-systems-ops`, `accessibility-audit`, and `design-token-governance`
- `tools` via `mcp-server-authoring`
- `data-ai` via `data-contracts`
- `machine-learning` via `model-serving`

Recommended next direction:

1. deepen `design`, `tools`, `data-ai`, and `machine-learning`
2. keep `business` and `content-media` deferred unless a clearly code-native proposal appears
3. preserve the current quality floor instead of reopening category activation pressure

That expansion wave is now reflected directly in [../CATALOG.md](../CATALOG.md) and the current roadmap, rather than a separate public task file.

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
- **16 config-capable clients**
- **33 config targets**
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
- Goose user config

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

The current public catalog spans 55 native skills in `skills/` and 38 curated English derivatives in `skills_omni/`.

Current native category distribution from `metadata.json`:

- `ai-agents` → `16`
- `development` → `6`
- `devops` → `5`
- `testing-security` → `4`
- `design` → `3`
- `backend`, `documentation`, `fullstack-web`, and `product` → `2` each
- `cli-automation`, `communication`, `data-ai`, `frontend`, `machine-learning`, and `tools` → `1` each

This broader intake surface is intentional:

- `skills/` is the permissive native intake surface and now includes imported upstream material with warning-grade metadata where appropriate
- `skills_omni/` remains the curated English-only derivative surface with a higher editorial floor

All seven bundles are fully backed:

- `essentials` → `4/4`
- `full-stack` → `5/5`
- `design` → `5/5`
- `security` → `4/4`
- `devops` → `5/5`
- `ai-engineer` → `7/7`
- `oss-maintainer` → `4/4`

Current score spread from the generated native catalog:

- quality scores range from `37` to `100`
- best-practices scores range from `7` to `100`
- security scores range from `30` to `100`
- the spread is now intentionally broader because permissive native intake and imported external sources share the same public catalog

Representative high end:

- `omni-figma` → `quality 100`, `best_practices 100`
- `accessibility-audit` → `quality 99`, `best_practices 100`
- `auth-flows` → `quality 97`, `best_practices 99`
- `design-systems-ops` → `quality 97`, `best_practices 99`
- `release-engineering` → `quality 97`, `best_practices 99`
- `threat-modeling` → `quality 97`, `best_practices 99`
- `context-engineering` → `quality 97`, `best_practices 99`

Representative warning-grade native intake:

- `handling-commands` → `quality 37`, `best_practices 7`, `security 100`
- `handling-attachments` → `quality 38`, `best_practices 16`, `security 60`
- `building-agents` → `quality 42`, `best_practices 19`, `security 40`

This is also intentional. The scorer now distinguishes three realities cleanly:

- first-party or fully enhanced top-band skills
- healthy native intake that passes validation without issue
- permissive imported native intake that remains searchable and attributable even while warning-grade

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

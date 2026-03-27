<!-- omni-skills: version=0.0.1; skills=19; updated_at=2026-03-27 -->
# 📖 Omni Skills — Documentation Hub

> **The central reference for using, operating, extending, and understanding the Omni Skills platform.**

Standard community files live in the repository root:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

---

## 📊 Status Snapshot

| Area | State | Details |
|:-----|:------|:--------|
| 🏗️ **Runtime** | ✅ Complete | CLI, API, MCP (3 transports), A2A task runtime |
| 📦 **Catalog** | 📌 19 skills | Core dev, design, OSS, security, DevOps, and AI-engineering skills published |
| 🎯 **Install** | ✅ Complete | Guided TTY install, Ink visual shell, and selective install by `--skill` and `--bundle` |
| 🌐 **API** | ✅ Complete | Read-only with auth, admin runtime, rate limiting, audit log, CORS/IP allowlists, and maintenance mode |
| 🔌 **MCP** | ✅ Complete | `stdio` · `stream` · `sse` + local sidecar mode + client-aware recipes and `config-mcp` flows for Claude, Cursor, Codex, Gemini, Antigravity, OpenCode, Kiro, Continue, Windsurf, VS Code, and Dev Containers |
| 🤖 **A2A** | ✅ Implemented | Discovery, recommendations, task lifecycle, SSE, cancel, push config, JSON/SQLite persistence, restart resume, external executor mode, opt-in lease queues, and optional advanced Redis coordination |
| 🛡️ **Security** | ✅ Complete | Static scanner + optional local ClamAV/VirusTotal, enforced on release tags |
| 📋 **Classification** | ✅ Complete | Taxonomy · maturity · semantic quality spread · best-practices spread · security |
| 📁 **Archives** | ✅ Complete | Per-skill zip/tar.gz with SHA-256 checksums |
| 🔐 **Signing** | ✅ Complete | Local signing plus CI-enforced detached signatures on release tags |

---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | What You'll Learn |
|:----|:------------------|
| 📘 [Getting Started](users/getting-started.md) | Install, verify, and invoke your first skill |
| 📗 [Usage Guide](users/usage.md) | All installation modes, prompt patterns, and runtime commands |
| 📦 [Bundles](users/bundles.md) | Curated skill selectors and their current availability |
| 📚 [Catalog](CATALOG.md) | Auto-generated catalog of published skills |
| 🔧 [System Runbook](operations/runbook.md) | Full operational reference for build, serve, and troubleshoot |

### 🏗️ If You Want to **Understand** the Runtime

| Doc | What You'll Learn |
|:----|:------------------|
| 🗺️ [Agent-Native Roadmap](architecture/agent-native-roadmap.md) | Target architecture and phase plan |
| 🧭 [CLI UX Roadmap](architecture/cli-ux-roadmap.md) | Product roadmap for the guided and visual CLI experience |
| 📐 [ADR-0001: Workspace Foundation](architecture/adr-0001-agent-native-workspace.md) | Key architectural decision and consequences |
| 🔬 [Codebase Analysis](architecture/codebase-analysis.md) | Deep technical analysis of all components |
| 🌐 [Catalog API Surface](specs/catalog-api.md) | HTTP endpoints, filtering, auth, and downloads |
| 🧩 [CLI Guided Installer](specs/cli-guided-installer.md) | Behavioral contract for the guided install flow |
| 🖥️ [CLI Visual Shell](specs/cli-visual-shell.md) | Ink visual hub, local state, presets, and guided service launch |
| 🔌 [Local MCP Sidecar](specs/local-mcp-sidecar.md) | Filesystem tools, allowlist, and config writing |
| 📊 [Skill Classification](specs/skill-classification.md) | Taxonomy, scoring heuristics, and metadata shape |
| 🛡️ [Security Validation](specs/security-validation.md) | Scanners, archives, signing, and distribution |
| 📋 [Skill Manifest Spec](specs/skill-manifest.md) | Machine-readable manifest format and fields |
| ✅ [CLI UX Task Backlog](tasks/cli-ux/README.md) | Physical execution tasks and tracking checklist for the CLI UX work |

### 🤝 If You Want to **Contribute**

| Doc | What You'll Learn |
|:----|:------------------|
| 📝 [Contributing Guide](../CONTRIBUTING.md) | Repository workflow and PR guidelines |
| 📄 [Skill Template](contributors/skill-template.md) | Starter SKILL.md with all frontmatter fields |
| 🔬 [Skill Anatomy](contributors/skill-anatomy.md) | Structure and quality expectations for a skill |
| ✅ [Quality Bar](contributors/quality-bar.md) | Acceptance criteria for the repository |
| 🏆 [High-Score Playbook](contributors/high-score-playbook.md) | What it takes to push a skill into the top scoring bands |

---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
```

The published `omni-skills` binary is the unified operational entry point.

```bash
# 🔎 Discovery
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx omni-skills ui

# 🏷️ Taxonomy
npx omni-skills recategorize
npx omni-skills recategorize --write

# 🔌 Services
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335

# 🧪 Validation
npx omni-skills smoke
npx omni-skills doctor
```

---

### 📁 Generated Catalog Artifacts

The build pipeline emits these machine-readable files that drive **all** runtime surfaces:

| Artifact | Purpose |
|:---------|:--------|
| `skills_index.json` | Repo-local skill index |
| `dist/catalog.json` | Published skill catalog |
| `dist/bundles.json` | Bundle definitions with availability |
| `dist/manifests/<skill>.json` | Per-skill machine-readable manifest |
| `dist/archives/<skill>.zip` | Skill archive (zip) |
| `dist/archives/<skill>.tar.gz` | Skill archive (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifest |

`dist/` stays committed on purpose in this repository. Those generated artifacts are part of the runtime contract for CLI install planning, API downloads, MCP previews, A2A task handoff, smoke checks, and release verification.

---

### 🌐 API

Read-only HTTP API for skills, bundles, search, comparison, install plans, and artifact downloads.

```bash
npm run api                              # From repo
npx omni-skills api --port 3333          # From published package
```

> 📖 Full reference: [Catalog API Surface](specs/catalog-api.md)

---

### 🔌 MCP

Three transports for agent integration:

```bash
npx omni-skills mcp stdio               # Direct pipe
npx omni-skills mcp stream              # Streamable HTTP
npx omni-skills mcp sse                 # Server-Sent Events
npx omni-skills mcp stream --local      # Local sidecar mode
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
```

> 📖 Full reference: [Local MCP Sidecar](specs/local-mcp-sidecar.md)

---

### 🤖 A2A

Agent-to-agent runtime for discovery, recommendation, and install-plan handoff with task lifecycle support.

```bash
npx omni-skills a2a --port 3335

# JSON-RPC methods
# message/send
# message/stream
# tasks/get
# tasks/cancel
# tasks/resubscribe
# tasks/pushNotificationConfig/*
```

---

## 🗂️ Repository Map

| Path | Purpose |
|:-----|:--------|
| 📂 `skills/` | Canonical authored skills |
| 📖 `docs/users/` | End-user documentation |
| 🤝 `docs/contributors/` | Contributor templates and guidance |
| 🏗️ `docs/architecture/` | Roadmap, ADRs, and technical analysis |
| 🔧 `docs/operations/` | Operational runbooks |
| 📋 `docs/specs/` | Protocol and artifact contracts |
| ✅ `docs/tasks/` | Delivery backlogs and execution tracking |
| 📚 `docs/CATALOG.md` | Generated skill catalog |
| 📦 `dist/` | Generated machine-readable artifacts |
| 🧠 `packages/catalog-core/` | Shared catalog runtime |
| 🌐 `packages/server-api/` | Read-only HTTP API |
| 🔌 `packages/server-mcp/` | MCP server + local sidecar |
| 🤖 `packages/server-a2a/` | A2A server + task runtime |
| 🖥️ `tools/bin/` | CLI entry points |
| 📚 `tools/lib/` | Installer helpers |
| ⚙️ `tools/scripts/` | Validation, generation, and test scripts |

---

## 🧪 Release Validation

```bash
npm run smoke        # Full release preflight
```

The smoke run validates:

- ✅ Skill validation and metadata generation
- ✅ Taxonomy recategorization tooling
- ✅ Catalog artifact generation
- ✅ Generated catalog markdown
- ✅ Archive generation and verification
- ✅ Automated test suite
- ✅ `npm pack --dry-run` packaging check
- ✅ API boot and health
- ✅ MCP boot in `stdio`, `stream`, and `sse`
- ✅ A2A boot, task polling, SSE streaming, cancelation, and push-config lifecycle

GitHub Actions also ships a tag-based release workflow:

- `validate.yml` runs on pushes and pull requests to `main`
- `release.yml` runs on `v*` tags and `workflow_dispatch`
- release tags require ClamAV and VirusTotal scanner coverage before publish
- release tags require detached archive signatures before publish
- the verified tarball is uploaded as a workflow artifact and published to npm
- successful tag releases also create a GitHub Release with custom release notes and attached catalog or checksum assets

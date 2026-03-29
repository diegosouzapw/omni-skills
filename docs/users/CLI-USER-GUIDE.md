# 🧭 Omni Skills CLI User Guide

> **The full public CLI surface shipped by `omni-skills`.**

Use this guide when you want to:

| Goal | Command Area |
|:-----|:-------------|
| 📥 Install skills or bundles | [Install Flows](#3️⃣-install-flows) |
| 🔎 Search the catalog | [Catalog Discovery](#4️⃣-catalog-discovery) |
| 🔌 Configure MCP clients | [MCP Client Config](#5️⃣-mcp-client-config) |
| 🖥️ Start MCP, API, or A2A services | [MCP Server](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 Use the visual terminal shell | [Visual Shell](#9️⃣-visual-shell) |
| 🧪 Run diagnostics or preflight | [Diagnostics](#🔟-diagnostics-and-preflight) |

---

## 1️⃣ Install and Entry Modes

Install with `npx`:

```bash
npx omni-skills
```

### 🎭 Entry Behavior

| Context | What Happens |
|:--------|:------------|
| 🖥️ TTY + no arguments | Opens the **guided install** flow |
| ⚙️ Non-TTY + no arguments | Non-interactive install to `~/.gemini/antigravity/skills` |
| 🎨 `npx omni-skills ui` | Branded **Ink visual shell** |
| 📝 `npx omni-skills ui --text` | Readline **text fallback** UI |

---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

| Command | Description |
|:--------|:-----------|
| `ui` | 🎨 Visual terminal hub |
| `find [query]` | 🔎 Catalog discovery |
| `recategorize` | 🏷️ Taxonomy management |
| `install [flags]` | 📥 Skill/bundle install |
| `config-mcp` | 🔌 MCP client configuration |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP server modes |
| `api` | 🌐 Catalog API |
| `a2a` | 🤖 A2A runtime |
| `smoke` | 🧪 Release preflight |
| `publish-check` | 📦 Package publication check |
| `doctor` | 🩺 Environment diagnostics |
| `help` | ❓ Command reference |

---

## 3️⃣ Install Flows

### 🧭 Guided Install

```bash
npx omni-skills
npx omni-skills install --guided
```

> The guided flow lets you choose: **target client** → **bundle or skill** → **custom path** → **preview before execution**

### 🎯 Single Skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### 🖥️ Supported Client Flags

| Flag | Client |
|:-----|:-------|
| `--antigravity` | 🟣 Antigravity *(default)* |
| `--claude` | 🟢 Claude Code |
| `--cursor` | 🔵 Cursor |
| `--codex` | 🔴 Codex CLI |
| `--gemini` | 🟡 Gemini CLI |
| `--kiro` | 🟠 Kiro |
| `--opencode` | ⚪ OpenCode |

> Default install target (non-interactive): `~/.gemini/antigravity/skills`

---

## 4️⃣ Catalog Discovery

### 🔎 Search Skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### 🎛️ Filter Flags

| Flag | Purpose |
|:-----|:--------|
| `--category` | Filter by taxonomy category |
| `--tool` | Filter by supported tool |
| `--risk` | Filter by risk level |
| `--sort` | Sort results (e.g., `quality`) |
| `--order` | Sort order |
| `--min-quality` | Minimum quality score |
| `--min-best-practices` | Minimum best-practices score |
| `--min-level` | Minimum maturity level |
| `--min-security` | Minimum security score |
| `--validation-status` | Filter by validation state |
| `--security-status` | Filter by security state |

---

## 5️⃣ MCP Client Config

Use `config-mcp` to preview or write client-aware MCP configuration.

### 📋 List Targets

```bash
npx omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

<details>
<summary>🔌 <strong>Config-capable client surface</strong></summary>

| Client | Targets |
|:-------|:--------|
| Claude | Settings and desktop targets |
| Cursor | User and workspace |
| Codex | TOML config |
| Gemini | User and workspace |
| Antigravity | User config |
| OpenCode | User and workspace |
| Cline | First-class target |
| GitHub Copilot CLI | User and repo |
| Kilo Code | User, project, and workspace |
| Kiro | User and workspace |
| Zed | Workspace |
| VS Code | User, workspace, and Dev Container |
| Continue | Workspace YAML |
| Junie | Project and user |
| Windsurf | User config |

</details>

---

## 6️⃣ MCP Server

### 🔌 Start Transports

```bash
npx omni-skills mcp stdio        # Pipe transport
npx omni-skills mcp stream       # Streamable HTTP
npx omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

> **Local sidecar** adds: client detection, install preview, install/remove flows, and MCP config writing.

---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

| Route | Purpose |
|:------|:--------|
| `GET /healthz` | Health check |
| `GET /openapi.json` | OpenAPI spec |
| `GET /v1/skills` | List all skills |
| `GET /v1/search` | Search the catalog |
| `GET /v1/skills/:id/archives` | List archives for a skill |
| `GET /v1/skills/:id/download/archive?format=zip` | Download skill archive |
| `GET /v1/skills/:id/download/archive/checksums` | Download checksums |

---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

| Feature | Status |
|:--------|:-------|
| 🔎 Task-aware discovery | ✅ |
| 📋 Install-plan handoff | ✅ |
| 🔄 Polling | ✅ |
| 📡 Streaming | ✅ |
| ❌ Cancelation | ✅ |
| 🔔 Push-notification config | ✅ |
| 💾 Persistence | Memory, JSON, and SQLite |

---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### 🎨 Features

| Feature | Description |
|:--------|:-----------|
| 🧭 Guided install | Choose client or custom path |
| 🔎 Search + install | No flag memorization needed |
| 🔌 MCP config | Preview and write flows |
| 🖥️ Service launch | MCP, API, and A2A guided startup |
| 🕐 Recents | Recent installs and service relaunches |
| ⭐ Favorites | Saved skills and bundles |
| 💾 Presets | Named install and service presets |

> **State path:** `~/.omni-skills/state/ui-state.json`

---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> Inspects: repo state, local install state, runtime availability, and environment issues.

### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> Validates: build, tests, package output, service boot, scanner coverage, and release packaging.

---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Command | Purpose |
|:-----------|:--------|:--------|
| 🆕 New user | `npx omni-skills` | Guided first-time install |
| 🔧 Operator | `npx omni-skills config-mcp --list-targets` | Configure local MCP |
| 🔧 Operator | `npx omni-skills mcp stream --local` | Start local sidecar |
| 📦 Maintainer | `npx omni-skills smoke` | Validate a release |
| 🔍 Power user | `npx omni-skills find security --sort quality --min-quality 95` | Find the best skill first |

---

## 📖 Related Documents

| Doc | What It Covers |
|:----|:--------------|
| 🚀 [Getting Started](./GETTING-STARTED.md) | Install and verify in under 2 minutes |
| 📗 [Usage Guide](./USAGE.md) | All CLI commands, patterns, and modes |
| 📦 [Bundles](./BUNDLES.md) | Curated skill collections |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Operational reference |
| 🔌 [Local MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Filesystem tools and config writing |

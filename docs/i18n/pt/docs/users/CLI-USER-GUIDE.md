# 🧭 Awesome Omni Skills CLI User Guide (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `docs/users/CLI-USER-GUIDE.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/users/CLI-USER-GUIDE.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-03-31T00:00:00+00:00 -->

> **The full public CLI surface shipped by `awesome-omni-skills`.**

> **Package status:** the public CLI, npm package, and documentation now use the same canonical command surface. See [rollout and migration status](../operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).

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
npx awesome-omni-skills
```

### 🎭 Entry Behavior

| Context | What Happens |
|:--------|:------------|
| 🖥️ TTY + no arguments | Opens the **guided install** flow |
| ⚙️ Non-TTY + no arguments | Non-interactive install to `~/.gemini/antigravity/skills` |
| 🎨 `npx awesome-omni-skills ui` | Branded **Ink visual shell** |
| 📝 `npx awesome-omni-skills ui --text` | Readline **text fallback** UI |

---

## 2️⃣ Core Commands

```bash
npx awesome-omni-skills help
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

### Início Rápido

```bash
npx awesome-omni-skills
npx awesome-omni-skills install --guided
```

> The guided flow lets you choose: **target client** → **bundle or skill** → **custom path** → **preview before execution**

### 🎯 Single Skill

```bash
npx awesome-omni-skills --skill api-design
npx awesome-omni-skills --cursor --skill omni-figma
npx awesome-omni-skills --path ./my-skills --skill architecture
```

### 📦 Bundle Install

```bash
npx awesome-omni-skills --bundle devops
npx awesome-omni-skills --codex --bundle full-stack
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
npx awesome-omni-skills find figma
npx awesome-omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx awesome-omni-skills find discovery --tool codex-cli
```

### 🔎 Search + Install

```bash
npx awesome-omni-skills find figma --tool cursor --install --yes
npx awesome-omni-skills find foundation --bundle essentials --install --yes
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
npx awesome-omni-skills config-mcp --list-targets
```

### 👁️ Preview Config

```bash
npx awesome-omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### ✍️ Write Config

```bash
npx awesome-omni-skills config-mcp \
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
npx awesome-omni-skills mcp stdio        # Pipe transport
npx awesome-omni-skills mcp stream       # Streamable HTTP
npx awesome-omni-skills mcp sse          # Server-Sent Events
```

### 🖥️ Local Sidecar Mode

```bash
npx awesome-omni-skills mcp stream --local
npx awesome-omni-skills mcp sse --local
```

> **Local sidecar** adds: client detection, install preview, install/remove flows, and MCP config writing.

---

## 7️⃣ Catalog API

```bash
npx awesome-omni-skills api --port 3333
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
npx awesome-omni-skills a2a --port 3335
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
npx awesome-omni-skills ui
```

### Funcionalidades

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
npx awesome-omni-skills doctor
```

> Inspects: repo state, local install state, runtime availability, and environment issues.

### 🧪 Release Preflight

```bash
npx awesome-omni-skills smoke
npx awesome-omni-skills publish-check
```

> Validates: build, tests, package output, service boot, scanner coverage, and release packaging.

---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx awesome-omni-skills recategorize          # 👁️ Preview taxonomy drift
npx awesome-omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 Persona | Command | Purpose |
|:-----------|:--------|:--------|
| 🆕 New user | `npx awesome-omni-skills` | Guided first-time install |
| 🔧 Operator | `npx awesome-omni-skills config-mcp --list-targets` | Configure local MCP |
| 🔧 Operator | `npx awesome-omni-skills mcp stream --local` | Start local sidecar |
| 📦 Maintainer | `npx awesome-omni-skills smoke` | Validate a release |
| 🔍 Power user | `npx awesome-omni-skills find security --sort quality --min-quality 95` | Find the best skill first |

---

## 📖 Related Documents

| Doc | What It Covers |
|:----|:--------------|
| 🚀 [Getting Started](./GETTING-STARTED.md) | Install and verify in under 2 minutes |
| 📗 [Usage Guide](./USAGE.md) | All CLI commands, patterns, and modes |
| 📦 [Bundles](./BUNDLES.md) | Curated skill collections |
| 🔧 [System Runbook](../operations/RUNBOOK.md) | Operational reference |
| 🔌 [Local MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) | Filesystem tools and config writing |

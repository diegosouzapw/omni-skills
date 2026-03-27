# 📗 Usage Guide

> **Everything you need to invoke skills, run services, and operate the Omni Skills runtime.**

For full operational workflows, see the [🔧 System Runbook](../operations/runbook.md).

---

## 📊 Current Catalog Reality

| Status | Details |
|:-------|:--------|
| ✅ **Available now** | 19 published skills across design, architecture, debugging, docs, OSS, security, DevOps, and AI-engineering workflows |
| 📦 **Bundles** | `essentials`, `full-stack`, `security`, `devops`, `ai-engineer`, and `oss-maintainer` are fully backed today |
| 🤖 **A2A durability** | JSON or SQLite task store, restart resume, and optional external process executor |

---

## 🖥️ Invocation by Client

| Client | How to Invoke | Skills Path |
|:-------|:-------------|:------------|
| 🔵 **Claude Code** | `>> /skill-name help me...` | `~/.claude/skills/` |
| 🟡 **Gemini CLI** | `Use @skill-name to...` | `~/.gemini/skills/` |
| 🔴 **Codex CLI** | `Use @skill-name to...` | `~/.codex/skills/` |
| 🟢 **Kiro** | Skills auto-load on demand | `~/.kiro/skills/` |
| 🟣 **Antigravity** | `Use @skill-name to...` | `~/.gemini/antigravity/skills/` |
| 🔵 **Cursor** | `@skill-name` in chat | `~/.cursor/skills/` |
| ⚪ **OpenCode** | `opencode run @skill-name` | `.agents/skills/` |
| ⬛ **Copilot** | Paste skill content manually | N/A |

---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx omni-skills                       # Guided install in TTY
npx omni-skills install --guided      # Forced guided install
npx omni-skills ui                    # Ink visual hub
npx omni-skills ui --text             # Text fallback UI
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx omni-skills install --guided --path ./my-skills --skill architecture
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
npx omni-skills --cursor --bundle security
npx omni-skills --cursor --bundle devops
npx omni-skills --codex --bundle ai-engineer
npx omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

> **📌 Notes:**
> - In an interactive terminal, `npx omni-skills` now opens a guided install flow
> - `npx omni-skills ui` opens the visual Ink shell with install, discovery, and service launch actions
> - the visual shell persists recent installs, recent service launches, favorites, and named presets in `~/.omni-skills/state/ui-state.json`
> - Outside a TTY, full install is still the default when no selector is provided
> - `--skill` installs only the selected published skills
> - `--bundle` expands the bundle and installs the published members declared in the curated bundle
> - `find` supports 12+ filter flags: `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk`, and more

---

## 🔌 Runtime Commands

The CLI is a unified operations tool, not just an installer.

### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

The visual shell supports:

- guided install with known client or custom path selection
- search-then-install without memorizing flags
- MCP, API, and A2A guided startup
- recent installs and service relaunches
- saved install and service presets
- favorite skills and bundles

### 🩺 Diagnostics

```bash
npx omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx omni-skills mcp stdio             # Pipe transport
npx omni-skills mcp stream            # Streamable HTTP
npx omni-skills mcp sse               # Server-Sent Events
npx omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
```

### 🌐 HTTP API

```bash
npx omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx omni-skills smoke                 # Full release preflight
npx omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | Tip |
|:--|:----|
| 1️⃣ | Reference the skill by name in your prompt |
| 2️⃣ | Provide the exact artifact, code, or design context the agent needs |
| 3️⃣ | Prefer `--skill` for a minimal install footprint |
| 4️⃣ | Use `doctor` and `smoke` before debugging packaging or runtime issues |
| 5️⃣ | Use bundles as curated domain installs now that all six starter bundles are fully backed |
| 6️⃣ | Use `find --install --yes` for discovery + installation in one flow |
| 7️⃣ | See the [runbook](../operations/runbook.md) for auth, rate limits, signing, and verification env vars |

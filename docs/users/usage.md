# 📗 Usage Guide

> **Everything you need to invoke skills, run services, and operate the Omni Skills runtime.**

For full operational workflows, see the [🔧 System Runbook](../operations/runbook.md).

---

## 📊 Current Catalog Reality

| Status | Details |
|:-------|:--------|
| ✅ **Available now** | `omni-figma`, `find-skills` |
| ⏳ **Bundles** | Metadata exists, but most referenced members are still pending |
| 📌 **Focus below** | Examples use only the skills that actually ship today |

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
npx omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --cursor --bundle full-stack
```

### 🏷️ Taxonomy Management

```bash
npx omni-skills recategorize          # Preview category drift
npx omni-skills recategorize --write  # Apply canonical categories
```

> **📌 Notes:**
> - Full install is the default when no selector is provided
> - `--skill` installs only the selected published skills
> - `--bundle` expands the bundle and installs only available members
> - Missing bundle members are surfaced as warnings
> - `find` supports 12+ filter flags: `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk`, and more

---

## 🔌 Runtime Commands

The CLI is a unified operations tool, not just an installer.

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

### 🤖 A2A Scaffold

```bash
npx omni-skills a2a --port 3335
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
| 5️⃣ | Treat bundles as curated selectors, not guarantees of availability |
| 6️⃣ | Use `find --install --yes` for discovery + installation in one flow |
| 7️⃣ | See the [runbook](../operations/runbook.md) for auth, rate limits, signing, and verification env vars |

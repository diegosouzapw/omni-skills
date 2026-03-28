# 🚀 Getting Started

> **Install skills, verify the setup, and invoke your first AI skill in under 2 minutes.**

---

## 📊 Current Catalog Status

| Metric | Value |
|:-------|:------|
| Published skills | **22** across architecture, delivery, security, DevOps, and AI-engineering workflows |
| Defined bundles | **6** (all fully backed by published skills) |
| Install-capable clients | **7** (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, OpenCode) |
| MCP config-capable clients | **15** across 32 first-class MCP config targets |

---

## 📦 Step 1 — Install

### 🧭 Guided Install

```bash
npx omni-skills
```

In an interactive terminal, this now opens the guided installer instead of silently assuming a client.

### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

This opens the branded terminal hub for install, discovery, MCP, API, and A2A startup.

### 🎯 Default Install (Antigravity Outside TTY)

Outside a TTY, the no-arg installer still defaults to `~/.gemini/antigravity/skills`.

### 🖱️ Focused Install — One Skill, One Client

```bash
npx omni-skills --cursor --skill omni-figma
```

### 🔎 Discovery → Install Flow

```bash
# Search first
npx omni-skills find figma

# Search + install in one shot
npx omni-skills find figma --tool cursor --install --yes
```

### 📦 Bundle-Based Install

```bash
npx omni-skills --codex --bundle full-stack
npx omni-skills --codex --bundle ai-engineer
```

> ✅ The starter bundles are now fully backed, including `devops` and `ai-engineer`.

### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

Check that skills landed in the right place:

```bash
# 🟣 Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"

# 🔵 Cursor
test -d ~/.cursor/skills && echo "✅ Skills installed"

# 🟢 Claude Code
test -d ~/.claude/skills && echo "✅ Skills installed"

# 🟡 Gemini CLI
test -d ~/.gemini/skills && echo "✅ Skills installed"

# 🔴 OpenCode (workspace-local)
test -d .opencode/skills && echo "✅ Skills installed"
```

Or use the built-in diagnostics:

```bash
npx omni-skills doctor
```

---

## 🎯 Step 3 — Use a Skill

### 🎨 Invoke omni-figma

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Invoke find-skills

```text
Use @find-skills to check if there's already a skill for this workflow.
```

---

## 🔌 Step 4 — Optional Runtime Services

### 🔌 Local MCP Sidecar

Gives agents filesystem tools to detect clients, install/remove skills, and write MCP configs:

```bash
npx omni-skills mcp stream --local
```

You can also configure MCP for clients that are not skill-install targets:

```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

Exposes the skill catalog as a read-only HTTP API:

```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

Agent-to-agent discovery, recommendation, install planning, polling, and streaming:

```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

A skill is a structured markdown playbook (`SKILL.md`) that gives an AI agent:

| Component | Purpose |
|:----------|:--------|
| 📋 **Frontmatter** | Machine-readable metadata (name, category, tags, tools, risk) |
| 📝 **Body** | Task-specific instructions, steps, guardrails, and examples |
| 📚 **References** | Supporting docs the agent can consult during execution |
| 🎨 **Assets** | Icons, images, or other packaged resources |

---

## ➡️ Next Steps

| Doc | What You'll Learn |
|:----|:------------------|
| 📗 [Usage Guide](usage.md) | All CLI commands, prompt patterns, and runtime modes |
| 📦 [Bundles](bundles.md) | Curated skill collections and their availability |
| 📚 [Catalog](../CATALOG.md) | Auto-generated catalog of published skills |
| 📖 [Documentation Hub](../README.md) | Full documentation map |
| 🔧 [System Runbook](../operations/runbook.md) | Operational reference |

# 🚀 Getting Started (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/GETTING-STARTED.md) · 🇪🇸 [es](../../../es/docs/users/GETTING-STARTED.md) · 🇫🇷 [fr](../../../fr/docs/users/GETTING-STARTED.md) · 🇩🇪 [de](../../../de/docs/users/GETTING-STARTED.md) · 🇮🇹 [it](../../../it/docs/users/GETTING-STARTED.md) · 🇷🇺 [ru](../../../ru/docs/users/GETTING-STARTED.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/GETTING-STARTED.md) · 🇯🇵 [ja](../../../ja/docs/users/GETTING-STARTED.md) · 🇰🇷 [ko](../../../ko/docs/users/GETTING-STARTED.md) · 🇸🇦 [ar](../../../ar/docs/users/GETTING-STARTED.md) · 🇮🇳 [in](../../../in/docs/users/GETTING-STARTED.md) · 🇹🇭 [th](../../../th/docs/users/GETTING-STARTED.md) · 🇻🇳 [vi](../../../vi/docs/users/GETTING-STARTED.md) · 🇮🇩 [id](../../../id/docs/users/GETTING-STARTED.md) · 🇲🇾 [ms](../../../ms/docs/users/GETTING-STARTED.md) · 🇳🇱 [nl](../../../nl/docs/users/GETTING-STARTED.md) · 🇵🇱 [pl](../../../pl/docs/users/GETTING-STARTED.md) · 🇸🇪 [sv](../../../sv/docs/users/GETTING-STARTED.md) · 🇳🇴 [no](../../../no/docs/users/GETTING-STARTED.md) · 🇩🇰 [da](../../../da/docs/users/GETTING-STARTED.md) · 🇫🇮 [fi](../../../fi/docs/users/GETTING-STARTED.md) · 🇵🇹 [pt](../../../pt/docs/users/GETTING-STARTED.md) · 🇷🇴 [ro](../../../ro/docs/users/GETTING-STARTED.md) · 🇭🇺 [hu](../../../hu/docs/users/GETTING-STARTED.md) · 🇧🇬 [bg](../../../bg/docs/users/GETTING-STARTED.md) · 🇸🇰 [sk](../../../sk/docs/users/GETTING-STARTED.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/GETTING-STARTED.md) · 🇮🇱 [he](../../../he/docs/users/GETTING-STARTED.md) · 🇵🇭 [phi](../../../phi/docs/users/GETTING-STARTED.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/GETTING-STARTED.md)

---


>**安装技能、验证设置并在 2 分钟内调用您的第一个 AI 技能。**---

## 📊 Current Catalog Status

|公制|价值|
|:--------|:--------|
|发布技能 |**32**涵盖 15 个活跃类别，包括架构、设计、安全、DevOps、AI 工程等 |
|定义的捆绑包 |**7**（全部由已发布的技能完全支持）|
|可安装的客户端 |**7**（Claude Code、Cursor、Gemini CLI、Codex CLI、Kiro、Antigravity、OpenCode）|
|支持 MCP 配置的客户端 |**16**跨 33 个一流 MCP 配置目标 |---

## 📦 Step 1 — Install

### 快速开始

```bash
npx omni-skills
```

在交互式终端中，现在会打开引导安装程序，而不是默默地假设客户端。### 🖥️ Visual Shell

```bash
npx omni-skills ui
```

这将打开用于安装、发现、MCP、API 和 A2A 启动的品牌终端中心。### 🎯 Default Install (Antigravity Outside TTY)

在 TTY 之外，无参数安装程序仍然默认为“~/.gemini/antigravity/skills”。### 🖱️ Focused Install — One Skill, One Client

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

> ✅ 入门包现已得到全面支持，包括“devops”和“ai-engineer”。### 🎛️ Multiple Targets at Once

```bash
npx omni-skills --cursor --gemini --skill omni-figma
```

---

## ✅ Step 2 — Verify

检查技能是否落在正确的位置：```bash
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

或者使用内置诊断：```bash
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

为代理提供文件系统工具来检测客户端、安装/删除技能以及编写 MCP 配置：```bash
npx omni-skills mcp stream --local
```

您还可以为不是技能安装目标的客户端配置 MCP：```bash
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
```

### 🌐 Catalog API

将技能目录公开为只读 HTTP API：```bash
npx omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

代理到代理的发现、推荐、安装规划、轮询和流式传输：```bash
npx omni-skills a2a --port 3335
```

---

## 💡 What Is a Skill?

技能是一个结构化的 Markdown 剧本（“SKILL.md”），它为 AI 代理提供：

|组件|目的|
|:----------|:--------|
| 📋**前线**|机器可读的元数据（名称、类别、标签、工具、风险）|
| 📝**身体**|针对特定任务的说明、步骤、护栏和示例 |
| 📚**参考文献**|代理在执行过程中可以参考的支持文档 |
| 🎨**资产**|图标、图像或其他打包资源 |---

## ➡️ Next Steps

|文档 |你将学到什么 |
|:----|:------------------|
| 🧭 [CLI 用户指南](CLI-USER-GUIDE.md) |安装、运行时、配置和诊断的完整命令参考 |
| 📗 【使用指南】(USAGE.md) |所有 CLI 命令、提示模式和运行时模式 |
| 📦 [捆绑包](BUNDLES.md) |精心策划的技能集合及其可用性 |
| 📚 [目录](../CATALOG.md) |自动生成已发布技能目录 |
| 📖 [文档中心](../README.md) |完整文档地图 |
| 🔧 [系统运行手册](../operations/RUNBOOK.md) |操作参考|
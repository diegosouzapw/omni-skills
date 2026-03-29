# 🧭 Omni Skills CLI User Guide (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

---


>**“omni-skills”提供的完整公共 CLI 界面。**

当您想要执行以下操作时，请使用本指南：

|目标|指挥区|
|:-----|:-------------|
| 📥 安装技能或捆绑包 | [安装流程](#3️⃣-install-flows) |
| 🔎 搜索目录 | [目录发现](#4️⃣-目录-发现) |
| 🔌 配置 MCP 客户端 | [MCP 客户端配置](#5️⃣-mcp-client-config) |
| 🖥️ 启动 MCP、API 或 A2A 服务 | [MCP 服务器](#6️⃣-mcp-server) · [API](#7️⃣-catalog-api) · [A2A](#8️⃣-a2a-runtime) |
| 🎨 使用可视终端 shell | [视觉外壳](#9️⃣-视觉外壳) |
| 🧪 运行诊断或预检 | [诊断](#🔟-诊断和预检) |---

## 1️⃣ Install and Entry Modes

使用“npx”安装：```bash
npx omni-skills
```

### 🎭 Entry Behavior

|背景 |发生了什么 |
|:--------|:------------|
| 🖥️ TTY + 无参数 |打开**引导安装**流程 |
| ⚙️ 非 TTY + 无参数 |非交互式安装到 `~/.gemini/antigravity/skills` |
| 🎨 `npx 全方位技能 ui` |品牌**墨水视觉外壳**|
| 📝 `npx 全方位技能 ui --text` | Readline**文本后备**UI |---

## 2️⃣ Core Commands

```bash
npx omni-skills help
```

|命令 |描述 |
|:--------|:------------|
| `ui` | 🎨 可视化终端枢纽 |
| `查找[查询]` | 🔎 目录发现 |
| `重新分类` | 🏷️ 分类管理 |
| `安装[标志]` | 📥 技能/捆绑包安装 |
| `配置-mcp` | 🔌 MCP 客户端配置 |
| `mcp <stdio\|stream\|sse>` | 🔌 MCP 服务器模式 |
| `api` | 🌐 目录 API |
| `a2a` | 🤖 A2A 运行时 |
| `烟` | 🧪 发布预检 |
| `发布检查` | 📦 包裹发布检查 |
| `医生` | 🩺 环境诊断 |
| `帮助` | ❓ 命令参考|---

## 3️⃣ Install Flows

### 快速开始

```bash
npx omni-skills
npx omni-skills install --guided
```

> 引导流程允许您选择：**目标客户端**→**捆绑包或技能**→**自定义路径**→**执行前预览**### 🎯 Single Skill

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

|旗帜|客户|
|:-----|:--------|
| `--反重力` | 🟣 反重力 *（默认）* |
| `--克劳德` | 🟢 克劳德代码 |
| `--光标` | 🔵 光标 |
| `--codex` | 🔴 Codex CLI |
| `--双子座` | 🟡 Gemini CLI |
| `--kiro` | 🟠 基罗 |
| `--opencode` | ⚪ 开放代码 |

> 默认安装目标（非交互式）：`~/.gemini/antigravity/skills`---

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

|旗帜|目的|
|:-----|:--------|
| `--类别` |按分类类别过滤 |
| `--工具` |按支持的工具过滤 |
| `--风险` |按风险级别过滤 |
| `--排序` |对结果进行排序（例如“质量”）|
| `--顺序` |排序顺序 |
| `--最低质量` |最低质量分数 |
| `--最小最佳实践` |最佳实践最低分数 |
| `--最低级别` |最低成熟度级别 |
| `--min-security` |最低安全分数 |
| `--验证状态` |按验证状态过滤 |
| `--安全状态` |按安全状态过滤 |---

## 5️⃣ MCP Client Config

使用“config-mcp”预览或编写客户端感知的 MCP 配置。### 📋 List Targets

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

<详情>
<summary>🔌<strong>可配置的客户端界面</strong></summary>

|客户|目标 |
|:--------|:--------|
|克劳德|设置和桌面目标 |
|光标|用户和工作区|
|法典| TOML 配置 |
|双子座|用户和工作区|
|反重力|用户配置|
|开放代码 |用户和工作区|
|克莱恩 |一流目标|
| GitHub 副驾驶 CLI |用户和仓库 |
|基洛代码 |用户、项目和工作区 |
|基罗 |用户和工作区|
|泽德 |工作空间 |
| VS 代码 |用户、工作区和开发容器 |
|继续 |工作区 YAML |
|朱妮 |项目及用户|
|风帆冲浪 |用户配置|</details>

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

>**本地 sidecar**添加：客户端检测、安装预览、安装/删除流程和 MCP 配置写入。---

## 7️⃣ Catalog API

```bash
npx omni-skills api --port 3333
```

### 🌐 Key Routes

|路线 |目的|
|:------|:--------|
| `获取/healthz` |健康检查|
| `GET /openapi.json` | OpenAPI 规范 |
| `获取/v1/技能` |列出所有技能 |
| `获取/v1/搜索` |搜索目录 |
| `GET /v1/skills/:id/archives` |列出技能档案 |
| `GET /v1/skills/:id/download/archive?format=zip` |下载技能档案 |
| `GET /v1/skills/:id/download/archive/checksums` |下载校验和 |---

## 8️⃣ A2A Runtime

```bash
npx omni-skills a2a --port 3335
```

### 🤖 Capabilities

|特色|状态 |
|:--------|:--------|
| 🔎 任务感知发现 | ✅ |
| 📋 安装计划交接 | ✅ |
| 🔄 投票 | ✅ |
| 📡 流媒体 | ✅ |
| ❌ 取消 | ✅ |
| 🔔 推送通知配置 | ✅ |
| 💾 坚持 |内存、JSON 和 SQLite |---

## 9️⃣ Visual Shell

```bash
npx omni-skills ui
```

### 功能特点

|特色|描述 |
|:--------|:------------|
| 🧭 引导安装 |选择客户端或自定义路径 |
| 🔎 搜索+安装 |无需记忆标志 |
| 🔌MCP 配置 |预览和编写流程 |
| 🖥️服务推出 | MCP、API 和 A2A 引导启动 |
| 🕐 最近 |最近的安装和服务重新启动 |
| ⭐ 收藏夹 |已保存的技能和捆绑包 |
| 💾 预设 |命名安装和服务预设 |

>**状态路径：**`~/.omni-skills/state/ui-state.json`---

## 🔟 Diagnostics and Preflight

### 🩺 Doctor

```bash
npx omni-skills doctor
```

> 检查：存储库状态、本地安装状态、运行时可用性和环境问题。### 🧪 Release Preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

> 验证：构建、测试、包输出、服务启动、扫描仪覆盖范围和发布包。---

## 1️⃣1️⃣ Taxonomy and Metadata Tools

```bash
npx omni-skills recategorize          # 👁️ Preview taxonomy drift
npx omni-skills recategorize --write  # ✍️ Apply canonical categories
```

---

## 1️⃣2️⃣ Recommended Usage Patterns

| 🎯 角色 |命令 |目的|
|:-----------|:--------|:--------|
| 🆕 新用户 | `npx 全方位技能` |首次安装指导 |
| 🔧 运营商 | `npx 全方位技能配置-mcp --list-targets` |配置本地 MCP |
| 🔧 运营商 | `npx 全方位技能 mcp 流 --local` |启动本地 sidecar |
| 📦 维护者 | `npx 全能技能烟雾` |验证发布 |
| 🔍 高级用户 | `npx 全方位技能查找安全 --sort 质量 --min-quality 95` |首先找到最好的技能 |---

## 📖 Related Documents

|文档 |它涵盖什么 |
|:----|:--------------|
| 🚀 [入门](./GETTING-STARTED.md) | 2 分钟内安装并验证 |
| 📗 [使用指南](./USAGE.md) |所有 CLI 命令、模式和模式 |
| 📦 [捆绑](./BUNDLES.md) |精心策划的技能集合|
| 🔧 [系统运行手册](../operations/RUNBOOK.md) |操作参考|
| 🔌 [本地 MCP Sidecar](../specs/LOCAL-MCP-SIDECAR.md) |文件系统工具和配置编写 |
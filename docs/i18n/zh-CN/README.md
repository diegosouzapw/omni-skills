# 🧠 Omni Skills (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../README.md) · 🇪🇸 [es](../es/README.md) · 🇫🇷 [fr](../fr/README.md) · 🇩🇪 [de](../de/README.md) · 🇮🇹 [it](../it/README.md) · 🇷🇺 [ru](../ru/README.md) · 🇨🇳 [zh-CN](../zh-CN/README.md) · 🇯🇵 [ja](../ja/README.md) · 🇰🇷 [ko](../ko/README.md) · 🇸🇦 [ar](../ar/README.md) · 🇮🇳 [in](../in/README.md) · 🇹🇭 [th](../th/README.md) · 🇻🇳 [vi](../vi/README.md) · 🇮🇩 [id](../id/README.md) · 🇲🇾 [ms](../ms/README.md) · 🇳🇱 [nl](../nl/README.md) · 🇵🇱 [pl](../pl/README.md) · 🇸🇪 [sv](../sv/README.md) · 🇳🇴 [no](../no/README.md) · 🇩🇰 [da](../da/README.md) · 🇫🇮 [fi](../fi/README.md) · 🇵🇹 [pt](../pt/README.md) · 🇷🇴 [ro](../ro/README.md) · 🇭🇺 [hu](../hu/README.md) · 🇧🇬 [bg](../bg/README.md) · 🇸🇰 [sk](../sk/README.md) · 🇺🇦 [uk-UA](../uk-UA/README.md) · 🇮🇱 [he](../he/README.md) · 🇵🇭 [phi](../phi/README.md) · 🇧🇷 [pt-BR](../pt-BR/README.md)

---

<!-- omni-skills: version=0.1.3; skills=32; updated_at=2026-03-28 -->

<div align="center">


### Installable Agentic Skills · Runtime Surfaces · Curated Enhancement

<br/>

**自行安装的技能目录。**<br/>
CLI · API · MCP · A2A — 所有这些都来自单个“npx”命令。<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Content License: CC BY 4.0](https://img.shields.io/badge/Content-CC_BY_4.0-blue.svg)](LICENSE-CONTENT)
[![npm](https://img.shields.io/badge/npm-omni--skills-cb3837?logo=npm)](https://www.npmjs.com/package/omni-skills)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen?logo=node.js)](https://nodejs.org)

[![Install with NPX](https://img.shields.io/badge/⚡_Install-npx%20omni--skills-black?style=for-the-badge&logo=npm)](#-installation)
[![MCP](https://img.shields.io/badge/🔌_MCP-stdio_%7C_stream_%7C_sse-2ea44f?style=for-the-badge)](#-runtime-surfaces)
[![API](https://img.shields.io/badge/🌐_API-read--only_catalog-0366d6?style=for-the-badge)](#-runtime-surfaces)
[![A2A](https://img.shields.io/badge/🤖_A2A-task_lifecycle-orange?style=for-the-badge)](#-runtime-surfaces)

<br/>

[⚡ 1 分钟内安装](#-installation) · [🛠️ 选择您的工具](#-choose-your-tool) · [📖 CLI 指南](docs/users/CLI-USER-GUIDE.md) · [📦 捆绑包](docs/users/BUNDLES.md) · [🔌 运行时](#-runtime-surfaces) · [💡 为什么选择 Omni技能](#-为什么-全能-技能)</div>

---

<div align="center">

### 概述

</div>

| |公制|价值|
|:--|:------|:------|
| 📦 |**已发布的技能**| 15 个活跃类别中的“32” |
| 🎯 |**捆绑**| `7` 完全支持的精选捆绑包 |
| 🖥️ |**安装客户端**| `7` 可安装的人工智能编码助手 |
| 🔌 |**MCP 客户**| `16` MCP 可配置客户端 |
| 🔐 |**策划输出**| `32` 增强了 `skills_omni/` 中的英语衍生词 |
| 📋 |**当前版本**| `v0.1.2` |---

## 快速开始

>**搜索了 AI 编码技能、Claude Code 技能、光标技能、Codex CLI 技能、Gemini CLI 技能、反重力技能或可安装的“SKILL.md”库？**
> 您来对地方了。### 1️⃣ What is this?

Omni Skills 是一个针对 AI 编码助手的**可安装的技能目录和运行时**。从本质上讲，它是可重用“SKILL.md”剧本的公共存储库 - 但与普通技能集合不同，存储库**是**分发和运行时层。

<详情>
<summary>📋<strong>包含内容</strong></summary>

|组件|描述 |
|:----------|:------------|
| 🧠**技能**|为 AI 助理策划基于“SKILL.md”的剧本 |
| 📦**清单**|生成的 JSON 清单、捆绑包和档案 |
| 🧭**引导式安装**|交互式 TTY 和可视终端安装流程 |
| 🌐**目录 API**|用于搜索、发现和下载的只读 HTTP API |
| 🔌**MCP 服务器**|发现、推荐和客户端感知的配置工具 |
| 🤖**A2A 运行时**|代理到代理的任务编排 |
| ✨**增强管道**|私人增强器将精选的英语衍生品发布到“skills_omni/” |</details>

### 2️⃣ Quick Start

```bash
# Install with guided flow
npx omni-skills

# Or install directly for Antigravity (default outside TTY)
npx omni-skills install --guided
```

### 3️⃣ Verify

```bash
test -d ~/.gemini/antigravity/skills && echo "✅ Skills installed"
```

### 4️⃣ Use your first skill

> 💬 *“使用`@brainstorming`来规划 SaaS MVP。”*
>
> 💬 *“使用`@api-design`来审查此端点设计。”*
>
> 💬 *“使用 `@debugging` 来隔离此回归。”*### 5️⃣ Start with a bundle

| 🎯 目标 |捆绑 |命令 |
|:--------|:--------|:--------|
|通用工程| `必需品` | `npx 全方位技能 --bundle Essentials` |
|产品+应用程序交付 | `全栈` | `npx 全方位技能 --bundle full-stack` |
|设计系统| `设计` | `npx 全方位技能 -- 捆绑设计` |
|安全审查| `安全` | `npx 全方位技能 --bundle security` |
|基础设施和发布 | `devops` | `npx 全方位技能 --bundle devops` |
|法学硕士申请| `人工智能工程师` | `npx 全方位技能 --bundle ai-engineer` |
|操作系统维护 | `oss 维护者` | `npx 全方位技能 --bundle oss-maintainer` |---

## 🧩 Core Concepts

在比较捆绑包或选择安装路径之前，了解这五个构建块有助于：

|概念 |这意味着什么 |
|:--------|:-------------|
| 🧠**技能**|可重复使用的“SKILL.md”手册，教助理如何很好地执行工作流程 |
| 📦**目录文物**|生成的 JSON 和存档输出支持搜索、比较、下载和安装 |
| 🔌**MCP 配置**|助理通过 MCP 工具发现 Omni Skills 的客户端配置 |
| 🤖**A2A 运行时**|用于发现、推荐和安装计划切换的代理到代理编排 |
| ✨**策划输出**| `skills_omni/` — Omni 维护的增强表面，与本地上游入口分开 |

>**📝 原生/策划政策：**
> - `skills/` 接受任何语言的本地上游摄入
> - `skills_omni/` 始终以英语策划和发布
> - `skills_omni/` 是一个单向表面，不会循环回本机摄入---

## 💡 Why Omni Skills

>**不仅仅是“另一个具有文件夹技能的存储库。”**
> Omni Skills 拥有更强大的契约和更广泛的运行时间面。

|如果你想要... | 📁 典型技能仓库 | ✨ 全能技能 |
|:--------------|:----------------------|:--------------|
|安装成真正的助手 |手动复制或自定义脚本 | `npx 全方位技能`、引导式安装、可视化 UI、选择性 `--skill` 和 `--bundle` |
|搜索和比较技能 |手动浏览 Markdown |生成目录、过滤、捆绑计划、搜索、比较和推荐 |
|跨工具使用相同的数据 |每个工具都有单独的逻辑 | CLI、API、MCP 和 A2A 的共享清单和目录 |
|配置 MCP 客户端 |手动编辑文件 | `config-mcp`、本地 sidecar 预览、生成的配方和列入白名单的写入 |
|信任发布 |尽最大努力包装|校验和、签名档案、扫描仪验证、发布 CI 和发布预检 |
|策划社区吸收 |无论土地保持原样| “skills/”中的本地摄入，“skills_omni/”中精选的英语衍生品，并注明来源 |---

## 🖥️ Compatibility and Invocation

这些技能遵循“SKILL.md”模型，可以用作普通存储库，但该包还可以在广泛的表面上安装和配置它们：

>**7**可安装的客户端 ·**16**可配置 MCP 的客户端### 🎯 Install-Capable Clients

|工具|类型 |调用示例|安装路径 |
|:-----|:-----|:--------------------|:-------------|
| 🟢**克劳德代码**|命令行| “利用头脑风暴来规划一项功能” | `~/.claude/技能` |
| 🔵**光标**| IDE | `@brainstorming 帮我规划一个功能` | `~/.cursor/skills` |
| 🟡**Gemini CLI**|命令行 | “利用头脑风暴来规划一项功能” | `~/.gemini/skills` |
| 🔴**Codex CLI**|命令行 | “利用头脑风暴来规划一项功能” | `~/.codex/skills` |
| 🟠**基罗**| CLI / IDE | “利用头脑风暴来规划一项功能” | `~/.kiro/skills` |
| 🟣**反重力**| IDE | `使用@brainstorming来规划功能` | `~/.gemini/反重力/技能` |
| ⚪**开放代码**|命令行 | `opencode 运行@brainstorming` | `<工作空间>/.opencode/skills` |

<详情>
<summary>🔌<strong>更广泛的 MCP 配置覆盖范围（16 个客户端）</strong></summary>

这些目标是受支持的 MCP 配置界面的一部分，即使它们不是技能目录的安装目标：

|客户端或表面|支持类型|笔记|
|:------------------|:------------|:------|
|克劳德设置和桌面| MCP 配置 |设置、桌面和项目感知流程 |
| VS 代码 | MCP 配置 |用户、工作区、内部人员和开发容器目标 |
|双子座| MCP 配置 |用户和工作区设置 |
|克莱恩 | MCP 配置 |一流的配置目标 |
| GitHub 副驾驶 CLI | MCP 配置 |用户和存储库配置目标 |
|继续 | MCP 配置 |工作区 YAML 生成 |
|风帆冲浪 | MCP 配置 |用户配置目标 |
|泽德 | MCP 配置 |工作区配置目标 |
|鹅| MCP 配置 |具有生成配方的用户配置目标 |
|基洛代码 | MCP 配置 |用户、项目和工作区目标 |
|朱妮 | MCP 配置 |项目和用户配置目标 |</details>

---

## 安装

<表>
<tr>
<td宽度=“50%”>### Option A: Install with `npx` *(recommended)*

```bash
npx omni-skills
```

### Option B: Guided install

```bash
npx omni-skills install --guided
```

### Option C: Specific skill

```bash
npx omni-skills --skill api-design
```

</td>
<td width="50%">

### Option D: Install a bundle

```bash
npx omni-skills --bundle devops
```

### Option E: Target a specific client

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills --codex --bundle full-stack
npx omni-skills --claude --skill debugging
```

### Option F: Custom path

```bash
npx omni-skills --path ./my-skills --skill architecture
```

</td>
</tr>
</table>

### 🔎 Discovery before install

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx omni-skills find foundation --bundle essentials --install --yes
```

---

## 🛠️ Choose Your Tool

|工具|安装命令 |首次使用 |
|:-----|:----------------|:----------|
| 🟢 克劳德代码 | `npx 全方位技能 --claude` | “利用头脑风暴来规划一项功能” |
| 🔵 光标 | `npx 全方位技能 --cursor` | `@brainstorming 帮我规划一个功能` |
| 🟡 Gemini CLI | `npx 全方位技能 --gemini` | “利用头脑风暴来规划一项功能” |
| 🔴 Codex CLI | `npx 全方位技能 --codex` | “利用头脑风暴来规划一项功能” |
| 🟣 反重力 | `npx 全方位技能 --antigravity` *（默认）* | `使用@brainstorming来规划功能` |
| 🟠 基罗 | `npx 全方位技能 --kiro` | “利用头脑风暴来规划一项功能” |
| ⚪ 开放代码 | `npx 全方位技能 --opencode` | `opencode 运行@brainstorming` |
| 📂 自定义路径 | `npx 全方位技能 --path ./my-skills` |取决于您的工具|

> 📖**不知道从哪里开始？**
> - [🚀 入门](docs/users/GETTING-STARTED.md) — 在 2 分钟内安装并验证
> - [🧭 CLI 用户指南](docs/users/CLI-USER-GUIDE.md) — 完整命令参考
> - [📗 使用指南](docs/users/USAGE.md) — 提示、模式和运行时模式---

## 🔌 Runtime Surfaces

Omni Skills 不仅仅是一个技能库。它公开了使用相同生成目录的**四个运行时表面**：

|表面|状态|它有什么作用 |示例|
|:--------|:--------|:------------|:--------|
| 🖥️**CLI**| ✅ 可用 |查找、安装、诊断、可视化 UI、启动服务、烟雾检查 | `npx 全能医生` |
| 🌐**目录 API**| ✅ 可用 |只读目录、搜索、捆绑、比较、安装计划、下载 | `npx 全方位技能 api --端口 3333` |
| 🔌**MCP**| ✅ 可用 |发现、推荐、安装预览、本地 sidecar、配置流程 | `npx 全方位技能 mcp 流 --local` |
| 🤖**A2A**| ✅ 可用 |任务生命周期、切换、轮询、流式传输、取消、持久化 | `npx 全方位技能 a2a --端口 3335` |

<详情>
<summary>🖥️ <strong>可视化 shell 和操作员命令</strong></summary>```bash
npx omni-skills ui                # Ink visual terminal hub
npx omni-skills ui --text         # Text fallback UI
npx omni-skills doctor            # Environment diagnostics
npx omni-skills smoke             # Full release preflight
npx omni-skills publish-check     # Package publication checks
```

</details>

<详情>
<summary>🔌<strong>MCP 传输和配置</strong></summary>```bash
# Start MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
npx omni-skills mcp stream --local     # Local sidecar with filesystem tools

# Configure MCP for any supported client
npx omni-skills config-mcp --list-targets
npx omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
```

</details>

---

## 📦 Catalog, Bundles, and Curated Output

### 📊 Current Catalog

|公制|计数 |
|:--------|:--------|
| 🧠 发布技能 |**32**|
| 📂 活跃类别 |**15**|
| 📦 完全支持的捆绑包 |**7**|
| ✨ 精选衍生品 |**32**在 `skills_omni/` |### 📦 Bundle Availability

|捆绑 |技能 |会员 |
|:--------|:--------|:--------|
| 🧰`必需品` |**4/4**✅ | `寻找技巧` · `头脑风暴` · `架构` · `调试` |
| 🌐 `全栈` |**5/5**✅ | `前端设计` · `api 设计` · `数据库设计` · `omni-figma` · `auth-flows` |
| 🎨 `设计` |**5/5**✅ | `前端设计` · `全能figma` · `设计系统操作` · `可访问性审计` · `设计令牌治理` |
| 🛡️`安全` |**4/4**✅ | “安全审计器”·“漏洞扫描器”·“事件响应”·“威胁建模”|
| ⚙️ `devops` |**5/5**✅ | `docker-expert` · `kubernetes` · `terraform` · `可观察性审查` · `发布工程` |
| 🤖 `人工智能工程师` |**7/7**✅ | `rag-engineer` · `prompt-engineer` · `llm-patterns` · `eval-design` · `context-engineering` · `data-contracts` · `model-serving` |
| 🔧 `oss 维护者` |**4/4**✅ | `查找技能` · `创建公关` · `变更日志` · `文档` |### ✨ Native Intake → Curated Output

|表面|目的|语言 |
|:--------|:--------|:--------|
| 📥 `技能/` |原生摄入 |任何语言 |
| ✨ `skills_omni/` |精心策划的全能维护输出 |永远是英语 |

>**ℹ️**对本机技能的更改由私人增强器重新处理，并在策划的基线中刷新。这使得“skills_omni/”成为**维护的目录表面**，而不是第二个副本。---

## 🛡️ Security and Release Posture

> Omni Skills 提供了比普通 Markdown 存储库更强大的发布和验证故事。### 🧪 Validation and Smoke Checks

```bash
npm run validate         # Skill validation and metadata generation
npm run build            # Full build pipeline
npm test                 # Automated tests
npm run smoke            # Full release preflight
```

<详情>
<summary>📋 <strong>管道验证什么</strong></summary>

- ✅ 技能验证和元数据生成
- ✅ 分类规范化和重新分类工具
- ✅ 目录和档案生成
- ✅ 自动化测试
- ✅ API、MCP 和 A2A 启动路径
- ✅ 存档验证
- ✅ 使用 `npm pack --dry-run` 进行打包预检</details>

<详情>
<summary>🔐<strong>释放姿势</strong></summary>

|控制|描述 |
|:--------|:------------|
| 🔒 SHA-256 校验和 |所有档案的校验和清单 |
| ✍️ 签名文物 |发布工件上的分离签名 |
| 🤖 CI 强制 |发布前在 CI 中发布验证 |
| 🦠 扫描门 | ClamAV 和 VirusTotal 门控发布流程 |
| 📦 GitHub 发布 |自动生成 GitHub 版本 |
| 📋 npm 出版物 |仅来自经过验证的 tarball |
| 🔄 自动释放 |资格赛技能合并到“主要” |

**仅当合并更改时才会触发自动释放：**
- `技能/*/**`
- `skills_omni/*/**`
- `数据/bundles.json`

仅文档更改**不会**触发包发布。</details>

---

## 📖 Documentation Map

### 👤 For Users

|文档 |你将学到什么 |
|:----|:-----------------|
| 🚀 [入门](docs/users/GETTING-STARTED.md) | 2 分钟内安装、验证和调用 |
| 🧭 [CLI 用户指南](docs/users/CLI-USER-GUIDE.md) |完整的命令参考和真实世界模式 |
| 📗 [使用指南](docs/users/USAGE.md) | CLI 命令、安装模式、运行时和 MCP 配置 |
| 📦 [捆绑包](docs/users/BUNDLES.md) |精选捆绑包和可用性 |
| 📚 [目录](docs/CATALOG.md) |自动生成已发布技能目录 |
| 🔧 [系统运行手册](docs/operations/RUNBOOK.md) |构建、服务、保护和故障排除 |### 🏗️ For Architects

|文档 |你将学到什么 |
|:----|:-----------------|
| 🗺️ [Agent-Native 路线图](docs/architecture/AGENT-NATIVE-ROADMAP.md) |架构演变和剩余领域 |
| 📐 [ADR-0001：工作空间基础](docs/architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) |核心单一回购决策 |
| 🔬 [代码库分析](docs/architecture/CODEBASE-ANALYSIS.md) |运行时组成和系统边界|
| 🌐 [目录 API](docs/specs/CATALOG-API.md) | HTTP 端点、过滤、治理和下载 |
| 🧩 [CLI 引导安装程序](docs/specs/CLI-GUIDED-INSTALLER.md) |指导安装人员的行为契约|
| 🖥️ [CLI Visual Shell](docs/specs/CLI-VISUAL-SHELL.md) | Ink 视觉外壳和状态模型 |
| 🔌 [本地 MCP Sidecar](docs/specs/LOCAL-MCP-SIDECAR.md) |文件系统工具和白名单模型 |
| 📊 [客户端支持矩阵](docs/specs/CLIENT-SUPPORT-MAT​​RIX.md) |完整的客户和作家参考|
| 🏷️ [技能分类](docs/specs/SKILL-CLASSIFICATION.md) |分类、评分和元数据 |
| 🛡️ [安全验证](docs/specs/SECURITY-VALIDATION.md) |扫描仪、档案和签名|
| 📋 [技能清单](docs/specs/SKILL-MANIFEST.md) |机器可读的清单格式 |### 🤝 For Contributors

|文档 |你将学到什么 |
|:----|:-----------------|
| 📝 [贡献指南](CONTRIBUTING.md) |回购工作流程和 PR 期望 |
| 🧾 [技能公关工作流程](docs/contributors/SKILL-PR-WORKFLOW.md) |原生摄入、增强剂处理、审稿人期望 |
| 📄 [技能模板](docs/contributors/SKILL-TEMPLATE.md) |带有 frontmatter 和结构的入门“SKILL.md” |
| 🔬 [技能剖析](docs/contributors/SKILL-ANATOMY.md) |结构和质量期望|
| ✅ [质量栏](docs/contributors/QUALITY-BAR.md) |验收标准|
| 🏆 [高分剧本](docs/contributors/HIGH-SCORE-PLAYBOOK.md) |是什么推动了高分|---

## 🗂️ Repository Layout

|路径|目的|
|:-----|:--------|
| 📂 `技能/` |规范的创作技能和母语摄入量|
| ✨ `skills_omni/` |精选 Omni 维护的增强型衍生品 |
| 📖 `文档/` |用户、贡献者、架构、操作和规范文档 |
| 📦 `dist/` |生成的清单、捆绑包、目录和档案 |
| 📁 `数据/` |捆绑包定义和静态支持数据 |
| 🧠 `packages/catalog-core/` |共享目录运行时 |
| 🌐 `packages/server-api/` |只读 HTTP API |
| 🔌 `packages/server-mcp/` | MCP 服务器和本地 sidecar |
| 🤖 `packages/server-a2a/` | A2A 运行时和任务编排 |
| 🖥️ `工具/bin/` | CLI 入口点 |
| 📚 `工具/lib/` |安装程序和 UI 助手 |
| ⚙️ `工具/脚本/` |验证、生成、发布和测试脚本 |

>**ℹ️**`dist/` 是有意进行版本控制的，因为生成的工件是安装、API、MCP、A2A、smoke 和发布合约的一部分。---

## 🤝 Contributing

Omni Skills 接受“技能/”下的本地上游技能吸收。

|规则|详情 |
|:-----|:--------|
| 📥 本土摄入 |可能很粗糙，用任何语言编写|
| ✨ 策划输出 | `skills_omni/` 保留给自动化创作的 Omni 衍生品 |
| 🚫 手动编辑 |对 `skills_omni/` 的公共手动编辑被拒绝 |
| 🔄 再处理 |私有增强器重新处理本机更改并刷新策划的基线 |

> 📖**开始于：**[贡献指南](CONTRIBUTING.md) · [技能 PR 工作流程](docs/contributors/SKILL-PR-WORKFLOW.md)---

## 📄 License

|类型 |许可证|
|:-----|:--------|
| 💻 代码和工具 | [麻省理工学院许可证]（许可证）|
| 📝 文档和技能内容 | [CC BY 4.0]（许可内容）|---

<div align="center">

**由 Omni Skills 团队使用 🧠 制作**

[⭐ 为这个仓库加注星标](https://github.com/diegosouzapw/omni-skills) · [🐛 报告错误](https://github.com/diegosouzapw/omni-skills/issues) · [💬 讨论](https://github.com/diegosouzapw/omni-skills/discussions)</div>

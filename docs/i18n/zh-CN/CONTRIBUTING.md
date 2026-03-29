# 🤝 Contributing to Omni Skills (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md)

---


>**Omni Skills 包含技能目录和构建在该目录之上的运行时界面。**
> 贡献可以针对任一领域，但两者都必须与生成的工件和当前 CLI 行为保持一致。---

## 📊 Repository Baseline

|公制|价值|
|:--------|:--------|
| 📦 套装版 | `0.1.3` |
| 🧠 发布技能 | `32` |
| 📦 完全支持的捆绑包 | `7` |
| 🖥️ 可安装的客户端 | `7` |
| 🔌 支持 MCP 配置的客户端 | `16` |
| 🔄 自动发布 |在 `main` 上启用 |---

## 重要

|什么 |哪里 |
|:-----|:------|
| 🧠 技能的作者是 | `技能/<技能名称>/SKILL.md` |
| 📖 贡献者模板和指南 | `文档/贡献者/` |
| 🧾 新技能的规范公关流程 | [技能公关工作流程](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 原生传入技能落在 | `技能/`（任何语言）|
| ✨ 精心策划的增强型衍生品 | `skills_omni/`（仅英文，自动）|
| 🚫 `skills_omni/` 受到保护 |不开放直接公众捐款 |
| 📖 运行时和架构文档 | `文档/` |
| 📄 社区文件 | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

|类型 |面积 |
|:-----|:-----|
| 🧠 增加或提高技能 | `技能/` |
| 📖 更新贡献者指南 | `文档/贡献者/` |
| 🖥️ 改进 CLI、安装程序或脚本 | `工具/` |
| 📦 改进目录运行时或协议包 | `包/` |
| 🧪 加强测试、冒烟检查或发布文档 |各种|---

## 快速开始

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 打开 PR，并启用“允许维护者编辑”。**---

## 文档

良好的本地传入技能应该：

- ✅ 干净利落地解决特定问题
- ✅ 可跨项目重复使用
- ✅ 包含代理可以实际遵循的说明
- ✅ 避免模糊或冗余的内容
- ✅ 声明准确的前言和兼容性元数据（如果可用）
- ✅ 自动化运行后生成的“metadata.json”分类工件落地### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡提示：**发布级技能包应包括 `agents/`、`references/`、`examples/` 和 `scripts/`。但入口表面是有意允许的——允许最小的本地传入技能，并且增强器管道会生成更强的导数。### 🌐 Language Policy

|表面|接受的语言 |
|:--------|:--------------------|
| 📥 `技能/`（本地摄入）|葡萄牙语、英语或任何语言 |
| ✨ `skills_omni/`（策划输出）|仅英语 |

> 私人增强器保留提交时的原生源，并用英语重写精选的衍生品。

📖 对于完整的分支、验证和增强器审查序列，请使用 [Skill PR 工作流程](docs/contributors/SKILL-PR-WORKFLOW.md)。---

## ✅ Required Validation

在打开 PR 之前运行此命令：```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run build             # Full build pipeline
npm test                  # Automated tests
```

<详情>
<summary>📋 <strong><code>npm run validate</code> 重新生成什么</strong></summary>

- `元数据.json`
- `技能/<技能>/metadata.json`
- 规范分类映射
- 成熟度、最佳实践、质量和安全评分
- 静态安全发现
- 可选的 ClamAV 和 VirusTotal 扫描仪状态（配置后）</details>

>**⚠️ 重要提示：**验证是 CLI、API、MCP、A2A、清单、档案和发布自动化使用的合约。将生成的元数据视为审查表面的一部分，而不是一次性输出。### 📥 Intake Policy

|状况 |行为 |
|:----------|:---------|
|前言缺失/不完整 | ⚠️警告（不阻止）|
|重要安全发现| 🚫 阻止摄入 |
|硬验证错误 | 🚫 阻止摄入 |
|更严格的编辑标准|在增强的衍生品流动中强制执行，而不是在本地摄入时强制执行|### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<详情>
<summary>📋<strong>烟雾通道验证了什么</strong></summary>

- ✅ 技能验证
- ✅ 目录生成
- ✅ 文档目录生成
- ✅ 测试套件
- ✅ `npm pack --dry-run`
- ✅ API 启动
- ✅ MCP 在 `stdio`、`stream` 和 `sse` 中启动
- ✅ A2A 靴子
- ✅ 存档验证和包装期望</details>

---

## 📋 Skill Frontmatter

强烈推荐 Frontmatter。使用[技能模板](docs/contributors/SKILL-TEMPLATE.md) 作为基准。```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<详情>
<summary>🏷️ <strong>规范分类类别</strong></summary>

|类别 |类别 |
|:---------|:---------|
| `发展` | `前端` |
| `后端` | `全栈网络` |
| `工具` | `cli 自动化` |
| `业务` | `产品` |
| `设计` | `数据人工智能` |
| `ai 代理` | `机器学习` |
| `devops` | `测试安全` |
| `文档` | `内容媒体` |
| `通讯` | `未分类` |</details>

>**ℹ️**技能版本与 npm 包版本无关。如果本机传入技能尚无 frontmatter，则会接受警告并从目录、标题和正文文本中派生临时元数据。---

## ⚙️ Runtime Contributions

如果您触摸 `packages/`、`tools/bin/`、`tools/lib/` 或构建脚本：

- 📦 保持 `dist/` 和文档与实现保持一致
- 🔄 更喜欢重用 `packages/catalog-core` 而不是重复目录逻辑
- 🔒 将本地写入行为保留在预览或试运行默认值之后
- 🔌 保持 MCP 编写者的纪律——仅当客户端拥有稳定的公共配置合约时才添加一流的配置编写者
- 🛡️ 将安全扫描仪警告视为审核栏的一部分
- 🧪 更改 CLI 命令、传输模式或公共端点时更新测试### 🚧 Important Boundary

|这样做 ✅ |不要这样做🚫 |
|:-----------|:-----------------|
|在“技能/”下提交本地作品 |打开编辑 `skills_omni/` 的手动 PR |
|让自动化处理增强器的运行 |直接添加精选内容 |
|关注合法技能品质 |绕过自动化配套公关流程 |

>**ℹ️**当`skills/`中的原生技能更新时，私有增强器会重新处理它并刷新增强基线。---

## 🔄 Enhancer Outcome States

在公共本地技能 PR 期间，增强器会报告以下四种状态之一：

|状态|意义|
|:------|:--------|
| ✅ `已完成` |干净地生成增强型衍生品，有资格获得“skills_omni/” |
| ⚠️`降级` |完成后备或较弱的分数移动 - 更仔细地检查 |
| 🚫 `被阻止` |因基础设施或验证原因而停止 - 阻止自动发布 |
| ❌`失败` |意外错误 - 需要维护人员调查 |

>**📝 贡献者**不需要修复增强器基础设施问题。责任是提交合法的本地技能并保持回购绿色。---

## 🔄 Automatic Release Policy

当更改发生在“main”上并包括：

- `技能/**`
- `技能_全能/**`
- `数据/bundles.json`

…存储库自动发布**软件包版本**。### 📋 Version Bump Rule

|来自 |至 |规则|
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` |补丁+1 |
| `0.1.9` | `0.1.10` |补丁+1 |
| `0.1.10` | `0.2.0` |滚动到下一个小调，重置补丁|

> 发布流程重新生成目录/档案、提交版本升级、标记版本、发布 npm 并自动创建 GitHub 版本。---

## 📝 Commit Conventions

|前缀 |用于 |
|:--------|:--------|
| `壮举：` |新技能或新功能 |
| `修复：` |错误修复 |
| `文档：` |文档变更 |
| `重构：` |代码清理或结构更改 |
| `测试：` |测试变更 |
| `家务：` |保养|---

## ❓ Need Help?

|频道|链接 |
|:--------|:-----|
| 💬 问题 | [打开讨论](https://github.com/diegosouzapw/omni-skills/discussions) |
| 🐛 错误 | [打开问题](https://github.com/diegosouzapw/omni-skills/issues) |
| 📝 早期反馈 | [打开草稿 PR](https://github.com/diegosouzapw/omni-skills/pulls) |
# 🔬 Anatomy of a Well-Written Skill (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

---


>**对 Omni Skills `SKILL.md` 的结构和质量期望 — 为整个目录提供支持的创作格式。**---

## 📐 The Two Parts

每个“SKILL.md”都由两个不同的部分组成：### 1️⃣ Frontmatter (YAML Metadata)

`---` 分隔符之间的机器可读元数据。它的力量：

- 📚 技能索引和目录生成
- 🔎 CLI 搜索和过滤
- ✅ 验证和质量评分
- 📊生成`metadata.json`分类工件
- 📋 每项技能在 `dist/manifests/` 中体现### 2️⃣ Body (Markdown Instructions)

人类可读（和代理可读）的指令。编写它就好像您正在**向高级开发人员简要介绍如何执行任务一样 — 足够具体，以便人工智能代理可以在不猜测的情况下遵循它。---

## 📋 Frontmatter Reference

|领域 |必填|类型 |描述 |
|:------|:---------|:-----|:------------|
| `名称` | ✅ |字符串|必须匹配目录名称，小写连字符 |
| `描述` | ✅ |字符串|一行描述（10-200 个字符）|
| `版本` | ⚡ |字符串|技能本身的语义版本（例如“0.1.1”）|
| `类别` | ⚡ |字符串|回购分类中的一个规范类别 |
| `标签` | ⚡ |字符串[] |用于发现的可搜索标签 |
| `复杂性` | ⚡ |字符串| `初级` · `中级` · `高级` · `专家` |
| `风险` | ⚡ |字符串| “安全”·“注意”·“冒犯”·“严重”|
| `工具` | ⚡ |字符串[] |经过测试的人工智能编码助手 |
| `来源` | ⚡ |字符串| `全能团队` · `社区` · `官方` |
| `作者` | ⚡ |字符串|归因 |
| `添加日期` | ⚡ |字符串| ISO 日期 |
| `更新日期` | ⚡ |字符串| ISO 日期 |

> ✅ = 始终需要 · ⚡ = 严格模式下需要

Skill 版本独立于 npm 包版本。该软件包当前为“0.1.3”，但现有技能可以有效地保留在自己的语义版本上。---

## 🏷️ Canonical Categories

存储库分类法当前定义了**18 个规范类别**：

|类别 |域名 |
|:--------|:--------|
| 💻`发展` |通用软件开发 |
| 🎨 `前端` |前端框架和 UI |
| 🔧 `后端` |后端服务和 API |
| 🌐 `全栈网络` |端到端网络开发 |
| 🛠️`工具` |开发人员工具和实用程序 |
| ⚙️ `cli 自动化` | CLI 工具和自动化脚本 |
| 📊 `业务` |业务流程和策略|
| 📐`产品` |产品管理与设计|
| 🎯`设计` |视觉和用户体验设计 |
| 🤖 `数据人工智能` |数据工程和人工智能应用|
| 🧠 `人工智能代理` | AI代理开发和模式|
| 📈 `机器学习` |机器学习模型和训练 |
| 🔌 `devops` |基础设施和部署|
| 🛡️ `测试安全` |测试和安全实践|
| 📖 `文档` |文档生成和管理 |
| 🎬 `内容媒体` |内容创作和媒体 |
| 💬`沟通` |通讯工具和工作流程 |
| ❓`未分类` |未找到匹配项时默认 |

> “工作流”、“架构”、“基础设施”、“安全性”和“测试”等旧标签会通过别名映射自动规范化。---

## 📝 Body Structure

编写良好的技能体遵循以下层次结构：

### 📌 概述（必填）
2-3 句话说明该技能的**用途**以及**为什么**存在。

### 🎯 何时使用（必填）
适用此技能的**特定场景**的项目符号列表。

### 📋 核心说明（必填）
代理应遵循的**分步流程**。明确一点。具体一点。代理在明确、明确的指示下工作效果最佳。

### 💡 示例（推荐）
具体提示、代码块或预期输出。**越具体越好。**

### ✅ 最佳实践（推荐）
使用 ✅ Do / ❌ Don't 格式进行快速扫描。

### 🔧 故障排除（可选）
常见问题及其解决方案。

### 🔗 相关技能（可选）
互补技能的交叉引用。---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 专注于**一个特定**工作流程或领域
- 📌 指令**足够清晰，人工智能**无需人工解释即可遵循
- 💡 包括具有预期行为的**具体示例**
- 🛡️ 有适当的**错误处理**指导
- 📊 生成健康的元数据：规范类别、成熟度 L2+、质量 70+
- 🧰 提供可重复使用的支持包，而不仅仅是散文，最好在适当的情况下跨“引用/”、“脚本/”、“示例/”和“代理/”

有关将技能推向最高等级的更强的评分模式，请参阅[高分手册](HIGH-SCORE-PLAYBOOK.md)。### ❌ Bad Skill

- 🌫️适用于任何事物的通用建议
- 🤷 模糊的指令，例如“编写好的代码”
- 🚫 没有示例或代码块
- ⚠️ 缺少 frontmatter 字段
- 📉 质量分数低（低于 50）
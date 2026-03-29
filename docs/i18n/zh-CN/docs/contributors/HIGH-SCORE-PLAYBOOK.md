# 🏆 High-Score Skill Playbook (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

---


>**Omni Skills `SKILL.md` 在实践中需要什么才能达到高度成熟度、最佳实践、质量和安全分数。**---

## 🎯 Purpose

本指南解释了存储库的分类器实际上如何奖励技能。

当您想要执行以下操作时使用它：

- 创造一项新技能，跻身得分榜前列
- 提高陷入“良好”或低“优秀”水平的现有技能
- 理解为什么具有良好格式的技能仍然无法像特殊的运营资产一样得分

这是面向贡献者的同伴：

- [质量栏](QUALITY-BAR.md)
- [技能剖析](SKILL-ANATOMY.md)
- [技能分类](../specs/SKILL-CLASSIFICATION.md)

实时目录的当前基准：

- 32 项已发表的技能
- 当前质量分布：`94, 95, 96, 97, 100`
- 当前最佳实践分布：`98, 99, 100`
- 当前高端：“omni-figma”，“100/100”质量和“100/100”最佳实践---

## 🧱 What High Scores Really Mean

分类器**不**单独奖励相当大的降价。

高分技能是指以下技能：

-**可发现**：描述清楚地说明了该技能的作用以及何时使用它
-**操作**：技能包括本地脚本、参考资料和可运行的示例
-**诊断**：它可以帮助代理在出现问题时恢复
-**具体**：它专注于一个工作流程，而不是广泛的建议
-**安全**：它避免有风险的模式并提供干净的扫描仪输出

在实践中，最强大的技能更像是一个**小型打包的工作流程工具包**，而不是简单的降价笔记。---

## 📋 Score Targets

创作时使用这些目标：

|尺寸|强大的目标|卓越的目标|
|:----------|:--------------|:--------------------|
| 🎯 成熟 | 'L3' |具有多种支持资源的“L3” |
| 📋 最佳实践 | `90+` | `96+` |
| ⭐ 品质 | `85+` | `90+` |
| 🛡️ 安全 | `95+` | “95+”，零发现|---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

您的标题应该使该技能易于分类且易于发现：

- `name` 与目录完全匹配
- “描述”解释了**什么**和**何时**
- “类别”、“标签”、“工具”、“复杂性”、“风险”、“来源”、“作者”和日期都存在

良好的描述形状：```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

不良描述形状：```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

最强大的技能始终包括以下部分：

- `## 概述`
- `## 何时使用此技能`
- `## 工作流程`
- `## 示例`
- `##最佳实践`
- `## 故障排除`
- `## 其他资源`

如果缺少其中一项，分数仍然可以不错，但很难看起来很出色。---

### 3. Runnable Local Support

得分最高的技能通常包括：

- `参考文献/checklist.md`
- `scripts/` 中的一个或多个辅助脚本
- `examples/` 中至少有一个有效的示例
- `agents/openai.yaml` 当技能用于直接代理调用时
- 从“SKILL.md”到这些本地文件的直接链接

这很重要，因为分类器将带有**捆绑支持材料**的技能视为比仅指向外部的技能更具可操作性。

推荐最低值：```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

高分示例有：

- 混凝土
- 使用真正的栅栏输入，例如“bash”或“python”
- 绑定到本地脚本或可重复命令
- 工作流程的代表

好：```bash
python3 scripts/render_brief.py --service billing --format markdown
```

虚弱的：```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

评分者会奖励帮助座席恢复的故障排除，而不仅仅是识别问题。

首选格式：```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

这比模糊的注释更强有力，例如：```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

分类器现在可以区分仅仅是完整的技能和真正深入的技能。

有帮助的信号：

- 多个具体例子
- 多个故障排除案例
- 相关技能指导
- 更丰富的参考包
- 可见的“##工作流程”部分，其中包含记分员可以直接计数的编号步骤
- 至少一张阐明工作流程的操作表或执行图
- 不止一种支持目录或资产类型
- 工作流程部分有足够的步骤来指导执行
- 决策资产，例如清单、细则、矩阵、数据包或行动手册
- 跨“引用/”、“脚本/”、“代理/”、“示例/”或“资产/”的更强支持包多样性
- 足够的可重复使用的支持文件看起来像一个工具包，而不是一个隐藏在降价旁边的帮助程序
- 当工作流程复杂到足以证明支持包合理时，不止一个帮助程序文件
- 足够的主体深度来涵盖权衡和故障模式
- 更密集的操作指导，因为评分器现在可以区分精美的格式和真正可重用的工作流程深度

**没有**帮助的信号：

- 用不同的词重复相同的指令
- 通用填充文本
- 添加标题而不在其下方添加实质内容---

## 🧪 Fast Checklist Before You Commit

在运行验证之前使用此清单：

- 描述说明**什么**和**何时**
- 该技能专注于一个工作流程
- `## Workflow` 存在并包含编号或项目符号的步骤
- 至少存在一个可运行的示例
- `references/`、`scripts/` 和理想情况下的 `examples/` 均从 `SKILL.md` 链接
- 当技能用于在代理客户端中直接调用时，存在“agents/openai.yaml”
- 使用“症状”和“解决方案”进行故障排除
- 该技能可以合理地归类为“L3”
- 不存在危险命令或可疑路径

然后运行：```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- 描述正确但过于笼统
- Markdown 有章节但没有操作深度
- 示例不指向本地帮助者
- 存在故障排除但不是诊断性的
- 标签或工具标识符太少
- 技能安全且干净，但仍然太浅，不足以算作出色---

## 🧭 Practical Rule

如果你的技能感觉像：

-**模板**：它可能会通过
-**指南**：它可能得分很高
-**工作流程包**：更有可能获得最高分
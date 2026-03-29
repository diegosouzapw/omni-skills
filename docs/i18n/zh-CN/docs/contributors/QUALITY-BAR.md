# ✅ Quality Bar (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**要接受 Omni 技能存储库的技能的最低要求和建议。**

有关专门针对最高分数的创作指南，请参阅[高分手册](HIGH-SCORE-PLAYBOOK.md)。

已发布目录的当前基准：

- 32 项已发表的技能
- 平均质量得分“96.3”
- 平均最佳实践得分“98.7”
- 平均安全得分“95.0”---

## 🔒 Required (Must Pass)

| ＃|要求 |如何验证 |
|:--|:------------|:--------------|
| 1️⃣ |**有效的前言**| `python3 工具/脚本/validate_skills.py` |
| 2️⃣ |**清晰的描述**|一句话必须解释该技能的作用（10+字符）|
| 3️⃣ |**名称与目录匹配**| `name:` 字段与文件夹名称完全匹配 |
| 4️⃣ |**概述部分**| markdown body 目的简述 |
| 5️⃣ |**何时使用部分**|至少2个具体使用场景|
| 6️⃣ |**可操作的指示**| AI 代理可以执行的分步内容 |
| 7️⃣ |**生成的元数据**|验证器成功发出 `skills/<skill>/metadata.json` |---

## ⭐ Recommended (Improves Score)

| ＃|推荐|分数影响 |
|:--|:----------------|:-------------|
| 8️⃣ |**示例**— 至少一个具有预期输出的具体示例 | 📈 质量+10-15 |
| 9️⃣ |**最佳实践**— ✅ 做/❌ 不做指导 | 📈 最佳实践 +5 |
| 🔟 |**使用工具进行测试**— 至少使用一名人工智能编码助手进行验证 | 📈 质量+5 |
| 1️⃣1️⃣ |**标签**— 用于发现的相关可搜索标签 | 📈 最佳实践 +10 |
| 1️⃣2️⃣ |**类别**— 分配给一个规范类别 | 📈 最佳实践 +10 |
| 1️⃣3️⃣ |**故障排除**— 具体的“症状”和“解决方案”指南 | 📈 最佳实践 +5-10 |
| 1️⃣4️⃣ |**本地支持资产**- 从技能链接的“参考/”、“脚本/”，以及理想的“示例/” | 📈 最佳实践 +10 |
| 1️⃣5️⃣ |**健康分类**— 成熟度L3，质量85+，最佳实践90+ | 📈 总体等级 |
| 1️⃣6️⃣ |**没有重要的安全发现**- 静态扫描仪通过干净 | 🛡️ 安全 100 |---

## ❌ Reasons for Rejection

|问题 |为什么 |
|:------|:----|
| ❌ 标题缺失或无效 |破坏验证管道 |
| ❌ 名称与目录不匹配 |打破目录生成 |
| ❌ 空洞或琐碎的简短描述 |用户无法发现技能 |
| ❌ 没有可操作的内容（只有链接或存根）|代理无法执行任何操作 |
| ❌ 重复但没有明显改进 |增加价值，而不是克隆|
| ❌ 没有“风险：攻击性”标签的攻击性内容 |安全与合规 |
| ❌ 重要安全发现 |提示渗漏、破坏性命令等 |---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

|尺寸|优秀|好 |需要工作|
|:----------|:----------|:-----|:------------|
| ⭐**质量**| 80+（白金）| 60-79（金/银）| <60（铜牌/首发）|
| 📋**最佳实践**| 90+（优秀）| 70-89（好）| <70（公平/需要工作）|
| 🛡️**安全**| 95+（硬化）| 80-94（安全）| <80（需要审核）|
| 🎯**成熟**| L3（脚本+测试）| L2（说明）| L1（仅限元数据）|---

## 🧭 What High Scores Require

为了持续达到顶级水平，一项技能应该包括：

- 强有力的前文描述，解释了该技能的**用途**以及**何时**应该使用该技能
- “何时使用”、“工作流程”、“示例”、“最佳实践”、“故障排除”和“其他资源”的明确部分
- `references/`、`scripts/` 下的本地支持材料，最好是 `examples/`，直接从 `SKILL.md` 链接
- 当技能直接在代理客户端中调用时，代理元数据位于“agents/openai.yaml”下
- 小型操作表或等效执行图（当工作流程从中受益时）
- 至少一个可运行的示例，指向本地帮助程序脚本或可重复的命令
- 故障排除写为“症状”加“解决方案”，而不是一般警告
- 足够的深度足以达到“L3”的资格，而不仅仅是格式良好的散文
- 更强的工作流程深度、决策资产和支持包多样性（如果您想要顶级质量）
- 一个足够深入的支持包，让人感觉可以重复使用，而不仅仅是用于复选框覆盖
- 如果您希望始终保持最高水平，则至少有 4 个有意义的支持系列或可重复使用文件中的同等深度
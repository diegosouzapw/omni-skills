# 📊 Skill Classification and Metadata (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-CLASSIFICATION.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-CLASSIFICATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-CLASSIFICATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-CLASSIFICATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-CLASSIFICATION.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-CLASSIFICATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-CLASSIFICATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-CLASSIFICATION.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-CLASSIFICATION.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-CLASSIFICATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-CLASSIFICATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-CLASSIFICATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-CLASSIFICATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-CLASSIFICATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-CLASSIFICATION.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-CLASSIFICATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-CLASSIFICATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-CLASSIFICATION.md)

---


>**本地分类器在验证和构建期间对每项技能进行评分，为整个目录生成机器可读的配置文件。**---

## 📊 Status

|输出|生成 |
|:--------|:----------|
| ✅ 根 `metadata.json` |全存储库摘要 |
| ✅ 每个技能 `skills/<skill>/metadata.json` |个人分类 |
| ✅ 目录 `dist/catalog.json` |已发布目录及乐谱 |
| ✅ 清单 `dist/manifests/<skill>.json` |每个技能的机器可读数据 |

生成者：`python3 tools/scripts/validate_skills.py`

当前存储库快照：

- 32 项已发表的技能
- 平均质量得分“96.3”
- 平均最佳实践得分“98.7”
- 平均安全得分“95.0”
- 当前质量分布`94, 95, 96, 97, 100`
- 当前最佳实践分布为“98、99、100”---

## 🎯 Purpose

分类器在每项技能到达目录之前都会为其提供**一致的机器可读配置文件**。它执行四项工作：

1. 📋**Parse**— YAML frontmatter 和 markdown body
2. 🏷️**标准化**- 规范分类的类别标签
3. 📊**分类**— 成熟度、最佳实践、质量和安全评分
4. 📁**Emit**— 构建脚本、文档和 CI 消耗的元数据工件---

## 🏷️ Canonical Taxonomy

**18 个规范类别**具有自动别名映射：

|类别 |域名 |常见别名 |
|:--------|:--------|:---------------|
| 💻`发展` |通用软件开发| “编码”、“编程” |
| 🎨 `前端` |前端和用户界面 | `ui`、`网页设计` |
| 🔧 `后端` |后端和 API | `服务器`、`api` |
| 🌐 `全栈网络` |端到端网络 | “网络”、“全栈” |
| 🛠️`工具` |开发者工具| `公用事业` |
| ⚙️ `cli 自动化` | CLI 和自动化 | `脚本`、`工作流程` |
| 📊 `业务` |经营策略| `策略` |
| 📐`产品` |产品管理| `下午` |
| 🎯`设计` |视觉和用户体验设计 | `ux` |
| 🤖 `数据人工智能` |数据和人工智能应用程序 | `数据`、`分析` |
| 🧠 `人工智能代理` | AI 代理模式 | `代理` |
| 📈 `机器学习` |机器学习模型和训练 | `毫升` |
| 🔌 `devops` |基础设施| “基础设施”、“云” |
| 🛡️ `测试安全` |测试与安全 | “测试”、“安全”、“质量保证” |
| 📖 `文档` |文档管理 | `文档` |
| 🎬 `内容媒体` |内容创作 | `媒体`、`内容` |
| 💬`沟通` |通讯工具| `聊天` |
| ❓`未分类` |默认后备 | — |

> “工作流程”、“架构”、“基础设施”等旧标签会通过别名映射自动规范化。---

## 📏 Computed Attributes

### 🎯 Maturity Levels

|水平|标签|标准|
|:------|:------|:---------|
|**L1**| `元数据` | Frontmatter 加上最小的正文 |
|**L2**| `说明` |大量书面说明|
|**L3**| `资源` |捆绑脚本或更丰富的打包资源 |

跟踪的其他信号：“has_scripts”、“has_extra_files”---

### 📋 Best Practices Score (0-100)

启发式评估：

|信号|它检查什么 |
|:--------|:----------------|
| 📛 蛞蝓品质 | `name` 字段格式 |
| 📝 描述 |清晰度、长度、信息量 |
| 📐 结构 |文档部分和层次结构|
| 💡 示例 |代码围栏和示例块 |
| 🔗 参考资料 |链接的本地“references/”、“scripts/”和支持包帮助程序 |
| 🧰 可操作性 |可运行的本地脚本示例和具体工作流程片段 |
| 🧩 支持包深度 |多个支持系列、可重用文件、代理元数据和运营资产 |
| 🩺 故障排除 |明确的“症状”和“解决方案”对 |
| 📚 覆盖范围 | “何时使用”、“最佳实践”、“故障排除”和“其他资源”部分 |
| 🌐 便携性 |与工具无关的措辞 |
| 📅 新鲜度 |避免硬编码日期 |

**当前分层**

|等级 |分数范围|
|:-----|:-----------|
| `优秀` | 90-100 |
| `好` | 70-89 | 70-89
| `公平` | 50-69 | 50-69
| `需要工作` | 0-49 | 0-49

记分员有意“语义足够”，以在成熟的技能中创造传播**。结构清晰的技能可以获得很高的分数，但要达到最高水平，它还需要深度信号，例如：

- 多个示例，而不仅仅是一个
- 多个故障排除案例
- 相关技能指导
- 更丰富的本地支持包
- 除了简单的散文之外还有不止一个支持家庭，最好包括“代理/”或“资产/”，它们可以增加真正的重用
- 具有可数步骤的专用“##工作流程”部分
- 至少一张小型操作表或决策图（当可以提高执行清晰度时）
- 比普通模板更具操作特异性
- 更清晰的工作流程深度和决策支持资产
- 支持包深度超出一个“references/”文件和一个链接脚本
- 足够的可重复使用的支持文件，感觉就像一个工作流程套件，而不是一个单注释附加组件
- 足够的操作密度，可将精美的轮廓与可重复使用的工作流程套件分开

这意味着，如果其支持包更窄，决策资产更薄，或者其操作密度低于目录中最强的技能，结构完整的技能仍然可以落在 90 左右，而不是“100”。---

### ⭐ Quality Score (0-100)

启发式结合了：

|信号|重量 |
|:--------|:--------|
| 📝 身体完整性 |中高|
| 📋 描述精度 |中等|
| 📊 元数据完整性 |中等|
| 📅 新近度 (`date_updated`) |中等|
| 📦 打包资源 |中等|
| 📋 最佳实践贡献 |中等|
| 🧠 语义深度 |中高|
| 🛠️ 运营深度 |中等|
| 📚 支持包丰富度 |中等|

**质量等级：**

|等级 |分数范围|
|:-----|:-----------|
| 💎 `白金` | 80+ |
| 🥇`黄金` | 65-79 | 65-79
| 🥈`银` | 50-64 | 50-64
| 🥉`青铜` | 35-49 | 35-49
| 🌱`入门` | 0-34 |---

### 🛡️ Security Score (0-100)

安全层结合了：

|扫描仪|始终启用 |它有什么作用 |
|:--------|:----------------|:------------|
| 🔍**静态**| ✅ 是的 |扫描 SKILL.md、打包文件和脚本 |
| 🦠**ClamAV**| ⚙️ 可选 |通过“clamscan”扫描恶意软件 |
| 🔒**病毒总数**| ⚙️ 可选 |哈希查找（无上传）|

**静态扫描仪规则系列：**
- 🎭 及时注入和渗出模式
- 💣 破坏性 shell 命令
- 🔑 可疑的凭证或操作系统路径
- ⚠️ 有风险的脚本原语（`shell=True`、`pickle.load`、`eval`、`extractall`）

**安全输出形状：**```json
{
  "score": 100,
  "tier": "hardened",
  "status": "passed",
  "findings_count": 0,
  "findings": [],
  "signals": { "scanned_files": 3 },
  "scanners": {
    "static": { "enabled": true, "status": "completed" },
    "clamav": { "enabled": false, "status": "disabled" },
    "virustotal": { "enabled": false, "status": "disabled" }
  }
}
```

---

## 📁 Generated Metadata Shape

### Per-Skill (`skills/<skill>/metadata.json`)

|部分|领域 |
|:--------|:--------|
| 🆔 身份 | `id`、`slug`、`display_name` |
| 🏷️ 分类 | `原始类别`、`规范类别`、`推断类别` |
| 📋 创作 |标签、工具、复杂性、风险、来源、作者 |
| 📅 日期和路径 | `date_added`、`date_updated`、路径 |
| 📊 资源 |文件和参考计数器|
| 📝 内容信号 |字数、正文长度、结构标志 |
| 🧠 语义深度 |工作流程步骤、示例、故障排除深度、决策资产、支持链接系列 |
| 🧩 支持包结构 |支持文件计数、链接系列、“代理/”、“资产/”和可重用示例 |
| 🎯 成熟 |级别、标签、脚本/文件标志 |
| 📋 最佳实践 |分数和等级 |
| ⭐ 品质 |分数、等级和语义细分 |
| 🛡️ 安全 |分数、等级、状态、结果 |
| ✅ 验证 |状态、错误、警告 |### Root (`metadata.json`)

|部分|领域 |
|:--------|:--------|
| 📊 总结 |计数、平均值、类别分布 |
| 🏷️ 分类 |类别计数 |
| 🎯 分布 |技能等级、质量等级、安全等级 |
| ✅ 验证 |状态很重要|
| 📋 技能列表 |紧凑的每项技能摘要 |---

## ⚙️ Workflow Integration

```bash
npm run validate              # Validate + regenerate metadata
npm run build                 # Full build with catalog + archives
npm run taxonomy:report       # Show category drift suggestions
```

### 🪝 Optional Git Hooks

```bash
npm run hooks:install
```

这将“git”配置为使用“.githooks/pre-commit”，它在提交之前重新生成元数据和目录工件，并自动暂存生成的文件。
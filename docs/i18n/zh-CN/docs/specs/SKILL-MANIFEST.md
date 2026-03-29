# 📋 Skill Manifest Specification (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SKILL-MANIFEST.md) · 🇪🇸 [es](../../../es/docs/specs/SKILL-MANIFEST.md) · 🇫🇷 [fr](../../../fr/docs/specs/SKILL-MANIFEST.md) · 🇩🇪 [de](../../../de/docs/specs/SKILL-MANIFEST.md) · 🇮🇹 [it](../../../it/docs/specs/SKILL-MANIFEST.md) · 🇷🇺 [ru](../../../ru/docs/specs/SKILL-MANIFEST.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SKILL-MANIFEST.md) · 🇯🇵 [ja](../../../ja/docs/specs/SKILL-MANIFEST.md) · 🇰🇷 [ko](../../../ko/docs/specs/SKILL-MANIFEST.md) · 🇸🇦 [ar](../../../ar/docs/specs/SKILL-MANIFEST.md) · 🇮🇳 [in](../../../in/docs/specs/SKILL-MANIFEST.md) · 🇹🇭 [th](../../../th/docs/specs/SKILL-MANIFEST.md) · 🇻🇳 [vi](../../../vi/docs/specs/SKILL-MANIFEST.md) · 🇮🇩 [id](../../../id/docs/specs/SKILL-MANIFEST.md) · 🇲🇾 [ms](../../../ms/docs/specs/SKILL-MANIFEST.md) · 🇳🇱 [nl](../../../nl/docs/specs/SKILL-MANIFEST.md) · 🇵🇱 [pl](../../../pl/docs/specs/SKILL-MANIFEST.md) · 🇸🇪 [sv](../../../sv/docs/specs/SKILL-MANIFEST.md) · 🇳🇴 [no](../../../no/docs/specs/SKILL-MANIFEST.md) · 🇩🇰 [da](../../../da/docs/specs/SKILL-MANIFEST.md) · 🇫🇮 [fi](../../../fi/docs/specs/SKILL-MANIFEST.md) · 🇵🇹 [pt](../../../pt/docs/specs/SKILL-MANIFEST.md) · 🇷🇴 [ro](../../../ro/docs/specs/SKILL-MANIFEST.md) · 🇭🇺 [hu](../../../hu/docs/specs/SKILL-MANIFEST.md) · 🇧🇬 [bg](../../../bg/docs/specs/SKILL-MANIFEST.md) · 🇸🇰 [sk](../../../sk/docs/specs/SKILL-MANIFEST.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SKILL-MANIFEST.md) · 🇮🇱 [he](../../../he/docs/specs/SKILL-MANIFEST.md) · 🇵🇭 [phi](../../../phi/docs/specs/SKILL-MANIFEST.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SKILL-MANIFEST.md)

---


>**在构建管道期间从每个“SKILL.md”生成的机器可读的 JSON 清单 - 所有运行时表面消耗的单个数据契约。**---

## 📊 Status

|特色|状态|
|:--------|:------|
| ✅ 从 SKILL.md 自动生成 |已实施 |
| ✅ 由 CLI、API、MCP、A2A 使用 |已实施 |
| ✅ 带有校验和的档案 |已实施 |
| ✅ 安全等级 |已实施 |

>**重要**：清单是一个**构建工件**。贡献者作者“SKILL.md”——管道自动派生 JSON 清单。---

## 🎯 Purpose

清单的存在使得**所有运行时表面**使用相同的标准化形状：

|表面|它如何使用清单 |
|:--------|:----------|
| 🖥️**CLI**|搜索、安装规划、医生诊断|
| 🌐**API**|端点响应、过滤、下载链接 |
| 🔌**MCP**|工具响应、资源内容 |
| 🤖**A2A**|发现和推荐有效负载 |---

## 📁 Output Locations

|神器|路径|
|:---------|:-----|
| 📊 根元数据 | `元数据.json` |
| 📊 每个技能元数据 | `技能/<技能>/metadata.json` |
| 📋 技能指数 | `skills_index.json` |
| 📚 已发布目录 | `dist/catalog.json` |
| 📌 每项技能清单 | `dist/manifests/<skill>.json` |
| 📦 压缩存档 | `dist/archives/<skill>.zip` |
| 📦 压缩包存档 | `dist/archives/<skill>.tar.gz` |
| 🔒 校验和清单 | `dist/archives/<skill>.checksums.txt` |---

## 📐 Manifest Shape

### 🆔 Identity

|领域 |描述 |
|:------|:------------|
| `schema_version` |清单架构的版本 |
| `id` |来自“名称”字段的稳定技能标识符 |
| `蛞蝓` | `skills/` 下的目录 slug |
| `显示名称` |第一个标题中的人类可读标题 |### 📝 Metadata

|领域 |描述 |
|:------|:------------|
| `描述` | frontmatter 的简短摘要 |
| `版本` | Skill版本，独立于npm包版本 |
| `类别` |规范类别（标准化） |
| `原始类别` |来自 frontmatter 的原始类别 |
| `分类法` |带有推断后备的完整分类元数据 |
| `标签` |可搜索标签 |
| `复杂性` | `初级` · `中级` · `高级` · `专家` |
| `风险` | “安全”·“注意”·“冒犯”·“严重”|
| `来源` | `全能团队` · `社区` · `官方` |
| `作者` |归属字符串 |### 📅 Dates

```json
{ "added": "2026-03-26", "updated": "2026-03-26" }
```

### 📂 Paths

|领域 |描述 |
|:------|:------------|
| `入口点` |规范的“SKILL.md”路径|
| `paths.root` |仓库内的技能目录 |
| `paths.manifest` |在 `dist/` 中生成清单路径 |### 🖥️ Compatibility

|领域 |描述 |
|:------|:------------|
| `工具` |来自 frontmatter 的工具标识符 |
| `安装目标` |每个工具安装元数据 |

每个安装目标包括：“工具”、“范围”、“默认路径”、“安装程序标志”、“当前安装程序行为”、“调用”### 📦 Resources

|领域 |描述 |
|:------|:------------|
| `子资源` |技能子目录（“参考”、“代理”、“资产”）|
| `artifacts_count` |技能包中的文件总数 |
| `引用计数` |参考文档计数 |
| `agents_count` |代理配置计数 |
| `资产数量` |资产文件数量 |### 🔗 Dependencies (Reserved)

```json
{ "skills": [], "external": [] }
```

### 📦 Install

|领域 |描述 |
|:------|:------------|
| `策略` |安装策略（例如“复制技能目录”）|
| `当前安装程序` |人类可读的安装行为 |
| `食谱` |每个客户端安装食谱 |### 📊 Classification

|部分|领域 |
|:--------|:--------|
| 🎯 `成熟` | `技能级别`、`技能级别标签` |
| 📋`最佳实践` | `分数` (0-100) |
| ⭐ `品质` | `分数` (0-100) |
| 🛡️`安全` | `分数`、`状态` |
| ✅ `验证` | `状态` |### 📝 Content

派生信号：“body_length”、“content_length”、“body_lines”、“word_count”，以及示例、故障排除部分等的结构标志。### 📁 Artifacts

技能目录中传送的每个文件的数组：```json
{
  "path": "skills/omni-figma/references/mcp-setup.md",
  "kind": "reference",
  "size_bytes": 4521,
  "sha256": "<hash>"
}
```

**工件种类**：`入口点` · `参考` · `代理` · `资产` · `许可证` · `支持`### 📦 Archives

```json
{
  "format": "zip",
  "path": "dist/archives/omni-figma.zip",
  "file_name": "omni-figma.zip",
  "size_bytes": 12345,
  "sha256": "<hash>",
  "signature": null
}
```

### 🔒 Checksums

|领域 |描述 |
|:------|:------------|
| `entrypoint_sha256` | SKILL.md 的哈希值 |
| `package_sha256` |来自有序工件列表的确定性摘要 |---

## 📋 Example Manifest

```json
{
  "schema_version": "2026-03-26",
  "id": "omni-figma",
  "slug": "omni-figma",
  "display_name": "Omni Figma",
  "description": "Unified Figma MCP workflow for design-to-code...",
  "version": "<skill-version>",
  "category": "development",
  "taxonomy": {
    "raw_category": "development",
    "canonical_category": "development",
    "inferred_category": "development",
    "category_source": "frontmatter"
  },
  "tags": ["figma", "design-to-code", "mcp"],
  "complexity": "advanced",
  "risk": "safe",
  "entrypoint": "skills/omni-figma/SKILL.md",
  "classification": {
    "maturity": { "skill_level": 2, "skill_level_label": "instructions" },
    "best_practices": { "score": 40 },
    "quality": { "score": 83 },
    "security": { "score": 98, "status": "passed" },
    "validation": { "status": "passed" }
  },
  "archives": [
    { "format": "zip", "path": "dist/archives/omni-figma.zip" },
    { "format": "tar.gz", "path": "dist/archives/omni-figma.tar.gz" }
  ],
  "checksums": {
    "entrypoint_sha256": "<sha256>",
    "package_sha256": "<sha256>"
  }
}
```

> 📌 仓库包版本和技能版本是不同的关注点。该软件包当前为“0.1.3”，而各个技能都有自己的语义版本。---

## ⚠️ Compatibility Notes

|规则|理由|
|:-----|:----------|
| ✅ 必须保持可从仓库派生 |无需手动清单创作 |
| ✅ 可以添加新的可选字段 |向前兼容性 |
| ⚠️现有领域必须保持稳定 |向后兼容性 |
| 🚫 没有手写清单 |构建时推导是真理之源 |
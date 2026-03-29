# 📦 Curated Bundles (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

---


>**捆绑包是分层在目录顶部的精选技能选择器。**所有七个入门捆绑包现在均得到已发布技能的完全支持。---

## ⚙️ How Bundles Work

`--bundle` 不会安装特殊的软件包。它：

1. 📋 扩展选定的包定义
2. ✅ 仅安装目录中当前可用的成员
3. ✅ 根据已发布的捆绑包成员构建具体的安装计划```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

基于当前生成的目录（`dist/bundles.json`）：

|捆绑 |适用于 |可用 |会员 |
|:--------|:------------|:------------|:--------|
| 🧰**必需品**|每个开发者 |**4/4**| `查找技能` ✅ · `头脑风暴` ✅ · `架构` ✅ · `调试` ✅ |
| 🌐**全栈**|网络和应用程序开发人员 |**5/5**| `前端设计` ✅ · `api 设计` ✅ · `数据库设计` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨**设计**|设计系统和可访问性|**4/4**| `前端设计` ✅ · `omni-figma` ✅ · `设计系统操作` ✅ · `可访问性审计` ✅ |
| 🛡️**安全**|安全工程师|**4/4**| `安全审核器` ✅ · `漏洞扫描器` ✅ · `事件响应` ✅ · `威胁建模` ✅ |
| ⚙️**devops**|平台和基础设施|**5/5**| `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `可观察性审查` ✅ · `发布工程` ✅ |
| 🤖**人工智能工程师**| LLM 和 ML 开发人员 |**5/5**| `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ |
| 🔧**oss 维护者**| OSS 维护者 |**4/4**| `查找技能` ✅ · `创建公关` ✅ · `变更日志` ✅ · `文档` ✅ |

> ✅ = 已发布并可安装---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- 您想要一个域名的**策划起点**
- 您希望安装计划保持**策划和特定于域**
- 您想要一种快速的方法来为角色安装完整的工作集### 🎯 Use `--skill` instead when:

- 您想要**保证最小安装**
- 您已经知道您需要的**确切技能**
- 您想要**尽可能小的占用空间**而不是精心策划的工作集---

## 💡 Practical Recommendations

|目标|命令 |
|:-----|:--------|
| 🎯 安装特定的已发布技能 | `npx 全方位技能 --cursor --skill 全方位figma` |
| 📦 完全支持的入门包 | `npx 全方位技能 --cursor --bundle full-stack` |
| 🎨 设计系统捆绑包 | `npx 全方位技能 --cursor --bundle design` |
| 🔧 OSS 工作流程包 | `npx 全方位技能 --codex --bundle oss-maintainer` |
| 🛡️ 安全工作流程包 | `npx 全方位技能 --cursor --bundle security` |
| ⚙️ DevOps 捆绑包 | `npx 全方位技能 --cursor --bundle devops` |
| 🤖 AI 工程师捆绑包 | `npx 全方位技能 --codex --bundle ai-engineer` |
| 🔎 决定前先搜索 | `npx 全能技能查找 Figma` |
| 📋 查看所有捆绑包可用性 | `cat dist/bundles.json` |---

## 🔍 Inspecting Bundles

### 📁 View Generated Bundle Data

```bash
cat dist/bundles.json
```

### 🌐 Query via API

```bash
curl http://127.0.0.1:3333/v1/bundles
```

### 🔌 Query via MCP

使用带有捆绑参数的“search_skills”或“preview_install”工具。### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find accessibility --bundle design --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```

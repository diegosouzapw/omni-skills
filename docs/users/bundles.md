# 📦 Curated Bundles

> **Bundles are curated skill selectors layered on top of the catalog.** They're useful for planning and selective install, but not every referenced skill is published yet.

---

## ⚙️ How Bundles Work

`--bundle` does **not** install a special package. It:

1. 📋 Expands the selected bundle definition
2. ✅ Installs only the members currently available in the catalog
3. ⚠️ Surfaces missing members as warnings in install plans

```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Based on the current generated catalog (`dist/bundles.json`):

| Bundle | Intended For | Available | Members |
|:-------|:------------|:----------|:--------|
| 🧰 **essentials** | Every developer | **1/4** | `find-skills` ✅ · `brainstorming` ⏳ · `architecture` ⏳ · `debugging` ⏳ |
| 🌐 **full-stack** | Web & app devs | **1/4** | `omni-figma` ✅ · `frontend-design` ⏳ · `api-design` ⏳ · `database-design` ⏳ |
| 🛡️ **security** | Security engineers | **0/2** | `security-auditor` ⏳ · `vulnerability-scanner` ⏳ |
| ⚙️ **devops** | Platform & infra | **0/3** | `docker-expert` ⏳ · `kubernetes` ⏳ · `terraform` ⏳ |
| 🤖 **ai-engineer** | LLM & ML devs | **0/3** | `rag-engineer` ⏳ · `prompt-engineer` ⏳ · `llm-patterns` ⏳ |
| 🔧 **oss-maintainer** | OSS maintainers | **1/4** | `find-skills` ✅ · `create-pr` ⏳ · `changelog` ⏳ · `documentation` ⏳ |

> ✅ = Published and installable · ⏳ = Roadmap metadata only

---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- You want a **curated starting point** for a domain
- You want install plans that **grow as the catalog expands**
- You're comfortable with warnings for members not yet published

### 🎯 Use `--skill` instead when:

- You want a **guaranteed minimal install**
- You already know the **exact skill** you need
- You don't want roadmap members in the plan output

---

## 💡 Practical Recommendations

| Goal | Command |
|:-----|:--------|
| 🎯 Install a specific published skill | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Bundle with current availability + warnings | `npx omni-skills --cursor --bundle full-stack` |
| 🔎 Search before deciding | `npx omni-skills find figma` |
| 📋 See all bundle availability | `cat dist/bundles.json` |

---

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

Use the `search_skills` or `preview_install` tools with bundle parameters.

### 📋 Check Install Plan

```bash
# See what would be installed
npx omni-skills find foundation --bundle essentials --install
```

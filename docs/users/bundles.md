# 📦 Curated Bundles

> **Bundles are curated skill selectors layered on top of the catalog.** All six starter bundles are now fully backed by published skills.

---

## ⚙️ How Bundles Work

`--bundle` does **not** install a special package. It:

1. 📋 Expands the selected bundle definition
2. ✅ Installs only the members currently available in the catalog
3. ✅ Builds a concrete install plan from published bundle members

```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Based on the current generated catalog (`dist/bundles.json`):

| Bundle | Intended For | Available | Members |
|:-------|:------------|:----------|:--------|
| 🧰 **essentials** | Every developer | **4/4** | `find-skills` ✅ · `brainstorming` ✅ · `architecture` ✅ · `debugging` ✅ |
| 🌐 **full-stack** | Web & app devs | **4/4** | `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ |
| 🛡️ **security** | Security engineers | **3/3** | `security-auditor` ✅ · `vulnerability-scanner` ✅ · `incident-response` ✅ |
| ⚙️ **devops** | Platform & infra | **4/4** | `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ |
| 🤖 **ai-engineer** | LLM & ML devs | **4/4** | `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ |
| 🔧 **oss-maintainer** | OSS maintainers | **4/4** | `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Published and installable

---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- You want a **curated starting point** for a domain
- You want install plans that stay **curated and domain-specific**
- You want a fast way to install a complete working set for a role

### 🎯 Use `--skill` instead when:

- You want a **guaranteed minimal install**
- You already know the **exact skill** you need
- You want the **smallest possible footprint** instead of a curated working set

---

## 💡 Practical Recommendations

| Goal | Command |
|:-----|:--------|
| 🎯 Install a specific published skill | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Fully backed starter bundle | `npx omni-skills --cursor --bundle full-stack` |
| 🔧 OSS workflow bundle | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Security workflow bundle | `npx omni-skills --cursor --bundle security` |
| ⚙️ DevOps bundle | `npx omni-skills --cursor --bundle devops` |
| 🤖 AI engineer bundle | `npx omni-skills --codex --bundle ai-engineer` |
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
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
npx omni-skills find deploy --bundle devops --install
npx omni-skills find rag --bundle ai-engineer --install
```

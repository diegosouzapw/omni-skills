# 🔬 Anatomy of a Well-Written Skill (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-ANATOMY.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-ANATOMY.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-ANATOMY.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-ANATOMY.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-ANATOMY.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-ANATOMY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-ANATOMY.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-ANATOMY.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-ANATOMY.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-ANATOMY.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-ANATOMY.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-ANATOMY.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-ANATOMY.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-ANATOMY.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-ANATOMY.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-ANATOMY.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-ANATOMY.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-ANATOMY.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-ANATOMY.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-ANATOMY.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-ANATOMY.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-ANATOMY.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-ANATOMY.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-ANATOMY.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-ANATOMY.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-ANATOMY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-ANATOMY.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-ANATOMY.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-ANATOMY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-ANATOMY.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `docs/contributors/SKILL-ANATOMY.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/contributors/SKILL-ANATOMY.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-04-01T00:00:00+00:00 -->

> **Structure and quality expectations for an Awesome Omni Skills `SKILL.md` — the authoring format that powers the entire catalog.**

---

## 📐 The Two Parts

Every `SKILL.md` is composed of two distinct sections:

### 1️⃣ Frontmatter (YAML Metadata)

Machine-readable metadata between `---` delimiters. It powers:

- 📚 The skills index and catalog generation
- 🔎 CLI search and filtering
- ✅ Validation and quality scoring
- 📊 Generated `metadata.json` classification artifacts
- 📋 Per-skill manifests in `dist/manifests/`

### 2️⃣ Body (Markdown Instructions)

Human-readable (and agent-readable) instructions. Write it as if you're **briefing a senior developer** on how to perform a task — specific enough that an AI agent can follow it without guessing.

---

## 📋 Frontmatter Reference

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| `name` | ✅ | string | Must match directory name, lowercase-hyphenated |
| `description` | ✅ | string | One-line description (10-200 chars) |
| `version` | ⚡ | string | Semantic version for the skill itself (e.g., `"0.1.1"`) |
| `category` | ⚡ | string | One canonical category from the repo taxonomy |
| `tags` | ⚡ | string[] | Searchable tags for discovery |
| `complexity` | ⚡ | string | `beginner` · `intermediate` · `advanced` · `expert` |
| `risk` | ⚡ | string | `safe` · `caution` · `offensive` · `critical` |
| `tools` | ⚡ | string[] | Tested AI coding assistants |
| `source` | ⚡ | string | `omni-team` · `community` · `official` |
| `author` | ⚡ | string | Attribution |
| `date_added` | ⚡ | string | ISO date |
| `date_updated` | ⚡ | string | ISO date |

> ✅ = Always required · ⚡ = Required in strict mode

The skill version is independent from the npm package version. The package version follows the current npm release, but existing skills can validly remain on their own semantic version.

---

## 🏷️ Canonical Categories

The repo taxonomy currently defines **18 canonical categories**:

| Category | Domain |
|:---------|:-------|
| 💻 `development` | General software development |
| 🎨 `frontend` | Frontend frameworks and UI |
| 🔧 `backend` | Backend services and APIs |
| 🌐 `fullstack-web` | End-to-end web development |
| 🛠️ `tools` | Developer tooling and utilities |
| ⚙️ `cli-automation` | CLI tools and automation scripts |
| 📊 `business` | Business processes and strategy |
| 📐 `product` | Product management and design |
| 🎯 `design` | Visual and UX design |
| 🤖 `data-ai` | Data engineering and AI applications |
| 🧠 `ai-agents` | AI agent development and patterns |
| 📈 `machine-learning` | ML models and training |
| 🔌 `devops` | Infrastructure and deployment |
| 🛡️ `testing-security` | Testing and security practices |
| 📖 `documentation` | Documentation generation and management |
| 🎬 `content-media` | Content creation and media |
| 💬 `communication` | Communication tools and workflows |
| ❓ `uncategorized` | Default when no match is found |

> Legacy labels like `workflow`, `architecture`, `infrastructure`, `security`, and `testing` are automatically normalized through alias mapping.

---

## 📝 Body Structure

A well-written skill body follows this hierarchy:

### 📌 Overview (Required)
2-3 sentences on **what** the skill does and **why** it exists.

### 🎯 When to Use (Required)
Bullet list of **specific scenarios** where this skill applies.

### 📋 Core Instructions (Required)
The **step-by-step process** the agent should follow. Be explicit. Be specific. Agents work best with clear, unambiguous instructions.

### 💡 Examples (Recommended)
Concrete prompts, code blocks, or expected outputs. **The more specific, the better.**

### ✅ Best Practices (Recommended)
Use the ✅ Do / ❌ Don't format for quick scanning.

### 🔧 Troubleshooting (Optional)
Common issues and their solutions.

### 🔗 Related Skills (Optional)
Cross-references to complementary skills.

---

## ⭐ Quality Signals

### ✅ Good Skill

- 🎯 Focused on **one specific** workflow or domain
- 📌 Instructions are **clear enough for an AI** to follow without human interpretation
- 💡 Includes **concrete examples** with expected behavior
- 🛡️ Has proper **error handling** guidance
- 📊 Produces healthy metadata: canonical category, maturity L2+, quality 70+
- 🧰 Ships a reusable support pack, not only prose, ideally across `references/`, `scripts/`, `examples/`, and `agents/` where appropriate

For the stronger scoring patterns that push skills into the highest bands, see [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

### ❌ Bad Skill

- 🌫️ Generic advice that could apply to anything
- 🤷 Vague instructions like "write good code"
- 🚫 No examples or code blocks
- ⚠️ Missing frontmatter fields
- 📉 Low quality score (below 50)

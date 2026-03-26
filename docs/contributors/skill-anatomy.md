# 🔬 Anatomy of a Well-Written Skill

This guide explains the structure and quality expectations for an Omni Skills `SKILL.md`.

---

## The Two Parts

Every `SKILL.md` has two parts:

### 1. Frontmatter (YAML metadata)

The frontmatter is machine-readable metadata between `---` delimiters. It powers:
- The skills index and catalog
- CLI search and filtering
- Validation and quality checks
- Generated `metadata.json` classification artifacts

### 2. Body (Markdown instructions)

The body contains human-readable (and agent-readable) instructions. It should be written as if you're briefing a senior developer on how to perform a task.

---

## Frontmatter Reference

| Field         | Required | Type       | Description |
| :------------ | :------- | :--------- | :---------- |
| `name`        | ✅       | string     | Must match directory name, lowercase-hyphenated |
| `description` | ✅       | string     | One-line description (10-200 chars) |
| `version`     | ⚡       | string     | Semantic version (e.g., "1.0.0") |
| `category`    | ⚡       | string     | One canonical category from the repo taxonomy |
| `tags`        | ⚡       | string[]   | Searchable tags |
| `complexity`  | ⚡       | string     | beginner/intermediate/advanced/expert |
| `risk`        | ⚡       | string     | safe/caution/offensive/critical |
| `tools`       | ⚡       | string[]   | Tested AI tools |
| `source`      | ⚡       | string     | omni-team/community/official |
| `author`      | ⚡       | string     | Attribution |
| `date_added`  | ⚡       | string     | ISO date |
| `date_updated`| ⚡       | string     | ISO date |

✅ = always required | ⚡ = required in strict mode

Canonical categories:

- `development`
- `frontend`
- `backend`
- `fullstack-web`
- `tools`
- `cli-automation`
- `business`
- `product`
- `design`
- `data-ai`
- `ai-agents`
- `machine-learning`
- `devops`
- `testing-security`
- `documentation`
- `content-media`
- `communication`
- `uncategorized`

---

## Body Structure

A well-written skill body includes:

### Overview (Required)
2-3 sentences on what and why.

### When to Use (Required)
Bullet list of scenarios where this skill applies.

### Core Instructions (Required)
The step-by-step process the agent should follow. Be explicit, be specific. Agents work best with clear instructions.

### Examples (Recommended)
Show concrete prompts, code, or outputs. The more specific, the better.

### Best Practices (Recommended)
✅ Do / ❌ Don't format.

### Troubleshooting (Optional)
Common issues and solutions.

### Related Skills (Optional)
Cross-references to complementary skills.

---

## Quality Signals

**Good skill:**
- Focused on one specific workflow or domain
- Instructions are clear enough for an AI to follow without human interpretation
- Includes concrete examples
- Has proper error handling guidance
- Produces healthy generated metadata: canonical category, maturity level, best practices score, and quality score

**Bad skill:**
- Generic advice that could apply to anything
- Vague instructions like "write good code"
- No examples
- Missing frontmatter

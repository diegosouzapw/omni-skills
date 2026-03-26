# 🤝 Contributing to Omni Skills

**Thank you for wanting to make this repo better!** Every skill submitted is reviewed, validated, and curated for quality.

---

## Quick Start

```bash
# 1. Fork and clone
git clone https://github.com/YOUR-USERNAME/omni-skills.git
cd omni-skills

# 2. Create your skill
mkdir -p skills/my-awesome-skill

# 3. Copy the template
cp docs/contributors/skill-template.md skills/my-awesome-skill/SKILL.md

# 4. Edit your SKILL.md with your content

# 5. Validate
python3 tools/scripts/validate_skills.py

# 6. Commit and push
git add skills/my-awesome-skill/
git commit -m "feat: add my-awesome-skill for [purpose]"
git push origin my-branch
```

Open the PR with **Allow edits from maintainers** enabled.

---

## What Makes a Good Skill?

A skill should:

- ✅ Solve a **specific problem** clearly
- ✅ Be **reusable** across projects
- ✅ Have **clear, actionable instructions** an AI agent can follow
- ✅ Include **examples** when possible
- ✅ Have proper **frontmatter** with all required fields

---

## SKILL.md Frontmatter

Every skill **must** include YAML frontmatter:

```yaml
---
name: my-skill-name              # Must match directory name
description: "What it does"       # Clear one-liner
version: "1.0.0"                  # Semantic version
category: development             # See allowed categories below
tags: [react, typescript]         # Relevant search tags
complexity: intermediate          # beginner|intermediate|advanced|expert
risk: safe                        # safe|caution|offensive|critical
tools: [claude-code, cursor]      # Tested/supported tools
source: community                 # omni-team|community|official
author: "Your Name"               # Attribution
date_added: "2026-03-26"          # ISO date
date_updated: "2026-03-26"        # ISO date
---
```

### Allowed Categories

| Category       | Focus |
| :------------- | :---- |
| architecture   | System design, ADRs, patterns |
| business       | Growth, pricing, SEO, marketing |
| data-ai        | LLM, RAG, ML, analytics |
| development    | Languages, frameworks, code quality |
| general        | Planning, docs, productivity |
| infrastructure | DevOps, cloud, CI/CD, deployment |
| security       | AppSec, pentesting, compliance |
| testing        | TDD, E2E, QA workflows |
| workflow       | Automation, orchestration, agents |

---

## Skill Structure

A minimal skill is just a directory with a `SKILL.md`:

```
skills/my-skill/
└── SKILL.md
```

Complex skills can include sub-resources:

```
skills/omni-figma/
├── SKILL.md
├── LICENSE.txt
├── agents/
├── assets/
└── references/
```

---

## Validation

Before submitting, run:

```bash
# Standard validation (name + description required)
python3 tools/scripts/validate_skills.py

# Strict validation (all frontmatter fields required)
python3 tools/scripts/validate_skills.py --strict
```

---

## Contribution Checklist

- [ ] Skill has a clear, lowercase-hyphenated directory name
- [ ] `SKILL.md` has valid YAML frontmatter
- [ ] `name` matches the directory name
- [ ] `description` is clear and concise
- [ ] `category` is from the allowed list
- [ ] Content includes Overview, When to Use, and at least one Example
- [ ] Tested with at least one AI coding tool
- [ ] `python3 tools/scripts/validate_skills.py` passes
- [ ] Commit message follows convention (e.g., `feat: add my-skill`)

---

## Commit Message Convention

| Prefix     | Use for |
| :--------- | :------ |
| `feat:`    | New skill or major feature |
| `docs:`    | Documentation improvements |
| `fix:`     | Bug fixes |
| `refactor:`| Code improvements |
| `test:`    | Tests |
| `chore:`   | Maintenance |

---

## Need Help?

- **Questions?** Open a [Discussion](https://github.com/diegosouzapw/omni-skills/discussions)
- **Bug?** Open an [Issue](https://github.com/diegosouzapw/omni-skills/issues)
- **Feedback on a draft?** Open a [Draft PR](https://github.com/diegosouzapw/omni-skills/pulls)

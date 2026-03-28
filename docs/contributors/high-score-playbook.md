# 🏆 High-Score Skill Playbook

> **What an Omni Skills `SKILL.md` needs in practice to reach high maturity, best-practices, quality, and security scores.**

---

## 🎯 Purpose

This guide explains how the repository's classifier actually rewards a skill.

Use it when you want to:

- author a new skill that lands in the top scoring bands
- improve an existing skill that is stuck in `good` or low `excellent`
- understand why a skill with decent formatting still is not scoring like an exceptional operational asset

This is the contributor-facing companion to:

- [Quality Bar](quality-bar.md)
- [Skill Anatomy](skill-anatomy.md)
- [Skill Classification](../specs/skill-classification.md)

Current benchmark for the live catalog:

- 22 published skills
- current quality spread: `94, 95, 96, 97, 98, 99, 100`
- current best-practices spread: `98, 100`
- current top end: `omni-figma` at `100/100` quality and `100/100` best practices

---

## 🧱 What High Scores Really Mean

The classifier does **not** reward pretty markdown alone.

High-scoring skills are skills that are:

- **discoverable**: the description clearly says what the skill does and when to use it
- **operational**: the skill includes local scripts, references, and runnable examples
- **diagnostic**: it helps the agent recover when things go wrong
- **specific**: it is focused on one workflow, not broad advice
- **safe**: it avoids risky patterns and ships clean scanner output

In practice, the strongest skills behave more like a **small packaged workflow kit** than a plain markdown note.

---

## 📋 Score Targets

Use these targets when authoring:

| Dimension | Strong Target | Exceptional Target |
|:----------|:--------------|:-------------------|
| 🎯 Maturity | `L3` | `L3` with multiple support resources |
| 📋 Best Practices | `90+` | `96+` |
| ⭐ Quality | `85+` | `90+` |
| 🛡️ Security | `95+` | `95+` with zero findings |

---

## ✅ What Exceptional Skills Usually Have

### 1. Strong Frontmatter

Your frontmatter should make the skill easy to classify and easy to discover:

- `name` matches the directory exactly
- `description` explains both **what** and **when**
- `category`, `tags`, `tools`, `complexity`, `risk`, `source`, `author`, and dates are all present

Good description shape:

```yaml
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
```

Bad description shape:

```yaml
description: "Helps with databases."
```

---

### 2. Mandatory Structural Coverage

The strongest skills consistently include these sections:

- `## Overview`
- `## When to Use This Skill`
- `## Workflow`
- `## Examples`
- `## Best Practices`
- `## Troubleshooting`
- `## Additional Resources`

If one of these is missing, the score can still be good, but it becomes harder to look exceptional.

---

### 3. Runnable Local Support

Top-scoring skills usually include:

- `references/checklist.md`
- one or more helper scripts in `scripts/`
- at least one worked example in `examples/`
- direct links from `SKILL.md` to those local files

This matters because the classifier treats a skill with **bundled support material** as more actionable than one that only points outward.

Recommended minimum:

```text
skills/<skill>/
├── SKILL.md
├── examples/
│   └── example.md
├── references/
│   └── checklist.md
└── scripts/
    └── render_<artifact>.py
```

---

### 4. Examples That Actually Help

High-scoring examples are:

- concrete
- typed with a real fence such as `bash` or `python`
- tied to a local script or repeatable command
- representative of the workflow

Good:

```bash
python3 scripts/render_brief.py --service billing --format markdown
```

Weak:

```text
Ask the agent to help with your API.
```

---

### 5. Troubleshooting With Recovery Guidance

The scorer rewards troubleshooting that helps an agent recover, not just recognize a problem.

Preferred format:

```md
### Problem: The API proposal is too vague

**Symptoms:** The draft omits versioning, error shapes, or auth boundaries.
**Solution:** Re-run the workflow with explicit constraints for versioning, auth, and error contracts.
```

This is stronger than a vague note like:

```md
If the result is bad, add more detail.
```

---

### 6. Depth, Not Padding

The classifier now distinguishes between a skill that is merely complete and one that is genuinely deep.

Signals that help:

- multiple concrete examples
- multiple troubleshooting cases
- related-skill guidance
- richer reference packs
- a visible `## Workflow` section with numbered steps the scorer can count directly
- at least one operational table or execution map where it clarifies the workflow
- more than one support directory or asset type
- workflow sections with enough steps to guide execution
- decision assets such as checklists, rubrics, matrices, packets, or playbooks
- stronger support-pack diversity across `references/`, `scripts/`, `agents/`, `examples/`, or `assets/`
- more than a single helper file when the workflow is complex enough to justify a support pack
- enough body depth to cover tradeoffs and failure modes
- denser operational guidance, because the scorer now distinguishes polished formatting from genuinely reusable workflow depth

Signals that do **not** help much:

- repeating the same instruction in different words
- generic filler text
- adding headings without adding substance underneath them

---

## 🧪 Fast Checklist Before You Commit

Use this checklist before running validation:

- description says **what** and **when**
- the skill is focused on one workflow
- `## Workflow` exists and contains numbered or bulleted steps
- at least one runnable example exists
- `references/`, `scripts/`, and ideally `examples/` are linked from `SKILL.md`
- troubleshooting uses `Symptoms` and `Solution`
- the skill can reasonably be classified as `L3`
- no risky commands or suspicious paths are present

Then run:

```bash
npm run validate
cat skills/<your-skill>/metadata.json | jq '.maturity, .best_practices, .quality, .security'
```

---

## ❌ Common Reasons a Skill Stalls Below the Top Band

- the description is correct but too generic
- the markdown has sections but no operational depth
- examples do not point to local helpers
- troubleshooting exists but is not diagnostic
- there are too few tags or tool identifiers
- the skill is safe and clean but still too shallow to count as exceptional

---

## 🧭 Practical Rule

If your skill feels like:

- a **template**: it may pass
- a **guide**: it may score well
- a **workflow package**: it is much more likely to score at the top

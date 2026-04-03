# 🏆 High-Score Skill Playbook (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇪🇸 [es](../../../es/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇷 [fr](../../../fr/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇪 [de](../../../de/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇹 [it](../../../it/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇺 [ru](../../../ru/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇯🇵 [ja](../../../ja/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇰🇷 [ko](../../../ko/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇦 [ar](../../../ar/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇳 [in](../../../in/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇹🇭 [th](../../../th/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇻🇳 [vi](../../../vi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇩 [id](../../../id/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇲🇾 [ms](../../../ms/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇱 [nl](../../../nl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇱 [pl](../../../pl/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇪 [sv](../../../sv/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇳🇴 [no](../../../no/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇩🇰 [da](../../../da/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇫🇮 [fi](../../../fi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇹 [pt](../../../pt/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇷🇴 [ro](../../../ro/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇭🇺 [hu](../../../hu/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇬 [bg](../../../bg/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇸🇰 [sk](../../../sk/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇮🇱 [he](../../../he/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇵🇭 [phi](../../../phi/docs/contributors/HIGH-SCORE-PLAYBOOK.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/HIGH-SCORE-PLAYBOOK.md)

> Translation snapshot for **Awesome Omni Skills** `v0.9.0`.
> Source: `docs/contributors/HIGH-SCORE-PLAYBOOK.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/contributors/HIGH-SCORE-PLAYBOOK.md; version=0.9.0; release=v0.9.0; english_snapshot=2026-04-02T00:00:00+00:00 -->

> **What an Awesome Omni Skills `SKILL.md` needs in practice to reach high maturity, best-practices, quality, and security scores.**

---

## 🎯 Purpose

This guide explains how the repository's classifier actually rewards a skill.

Use it when you want to:

- author a new skill that lands in the top scoring bands
- improve an existing skill that is stuck in `good` or low `excellent`
- understand why a skill with decent formatting still is not scoring like an exceptional operational asset

This is the contributor-facing companion to:

- [Quality Bar](QUALITY-BAR.md)
- [Skill Anatomy](SKILL-ANATOMY.md)
- [Skill Classification](../specs/SKILL-CLASSIFICATION.md)

Current benchmark for the live native catalog:

<!-- generated:high-score-benchmark:start -->
- 155 published native skills, with 80 curated English derivatives in `skills_omni/`
- native quality spread: `94` to `100`
- native best-practices spread: `97` to `100`
- current top end: `omni-figma` at `100/100` quality and `100/100` best practices
<!-- generated:high-score-benchmark:end -->

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
- `agents/openai.yaml` when the skill is intended for direct agent invocation
- direct links from `SKILL.md` to those local files

This matters because the classifier treats a skill with **bundled support material** as more actionable than one that only points outward.

Recommended minimum:

```text
skills/<skill>/
├── SKILL.md
├── agents/
│   └── openai.yaml
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
- enough reusable support files to look like a kit, not a single helper tucked next to the markdown
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
- `agents/openai.yaml` exists when the skill is meant for direct invocation in agent clients
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

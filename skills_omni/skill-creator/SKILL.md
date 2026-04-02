---
name: "skill-creator"
description: "Skill Creator workflow skill. Use this skill when creating a new skill or updating an existing skill that extends Codex with specialized knowledge, workflows, or tool integrations. Apply it when you need a repeatable authoring process for trigger-writing, reusable resource planning, initialization, validation, metadata sync, troubleshooting, and safe handoff before merge."
version: "0.0.1"
category: "tools"
tags:
  - "skill-creator"
  - "skill-authoring"
  - "codex-skills"
  - "workflow"
  - "validation"
  - "metadata"
  - "triggers"
  - "resources"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/skill-creator"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Skill Creator

## Overview

Use this skill to create or improve a Codex skill in a way that is discoverable, operational, and easy for another agent to execute.

This skill preserves the upstream OpenAI skill-authoring intent while packaging it into a clearer operator workflow. It helps you:

- define a strong trigger boundary in frontmatter
- turn recurring user requests into reusable `scripts/`, `references/`, and `assets/`
- initialize or update a skill safely
- validate the result and fix common failures
- keep `agents/openai.yaml` aligned with the actual skill
- decide when the task should stay in skill authoring versus hand off to another specialization

Keep `SKILL.md` focused on execution. Push large schemas, examples, triage notes, and planning material into linked local references so the skill stays context-efficient.

## When to Use This Skill

Use this skill when:

- a user wants to create a new skill for a repeatable workflow, domain, format, or tool integration
- a user wants to improve an existing skill's triggering, structure, examples, or support pack
- a skill needs better reusable resources such as scripts, reference docs, assets, or examples
- validation is failing and you need a structured triage path
- `agents/openai.yaml` may be stale relative to `SKILL.md`
- the operator needs a reviewable, stepwise workflow before merge or handoff

Do not use this skill when the real task is primarily:

- implementing the domain solution itself rather than authoring the skill
- broad repository refactoring unrelated to skill packaging
- security review, architecture design, or debugging that should move to a more specialized skill

See `agents/related-skill-router.md` for handoff guidance.

## Operating Table

| Situation | Primary artifact or command | Expected outcome | Next step |
| --- | --- | --- | --- |
| Create a new skill from scratch | `scripts/init_skill.py <skill-name> --path <output-directory>` | New skill scaffold with required files | Continue with resource planning and editing |
| Update an existing skill | Read `SKILL.md`, then `references/skill-authoring-checks.md` | Gap list for triggers, structure, resources, and drift | Edit only what closes clear gaps |
| Improve trigger quality | `references/skill-trigger-writing-guide.md` | Stronger `description` with clearer activation boundary | Update frontmatter, then validate |
| Choose name and slug | `references/skill-naming-and-slugging.md` | Valid, concise folder and skill name | Initialize or rename carefully |
| Decide what belongs in scripts/references/assets | `references/skill-resource-planning-worksheet.md` | Resource plan derived from real examples | Build the support pack before polishing prose |
| Validate a skill | `scripts/quick_validate.py <path/to/skill-folder>` | Validator pass or concrete errors to fix | Use validation triage reference if needed |
| Triage validation failures | `references/skill-validation-triage.md` | Faster diagnosis of naming, frontmatter, or structure issues | Re-run validator after fixes |
| Generate or refresh `agents/openai.yaml` | `references/openai-yaml-sync-guide.md` | UI metadata aligned to actual skill content | Re-check for drift before handoff |
| Decide whether to hand off | `agents/related-skill-router.md` | Stay in skill authoring or route deliberately | Continue or transfer with context |

## Workflow

Follow these phases in order unless there is a clear reason to skip one.

### 1. Understand the target skill with concrete examples

Collect a small set of realistic requests that should trigger the skill.

Ask for or infer:

- what users will ask
- what outputs are expected
- what tools or file types are involved
- what should trigger the skill versus not trigger it

Good exit criteria:

- at least 3 representative example requests
- a rough statement of what the skill does
- a rough statement of when it should activate

If the task is an update to an existing skill, compare the current trigger boundary with the new examples before rewriting anything.

### 2. Plan reusable contents before writing prose

For each example, ask: what would be repeatedly rediscovered or rewritten?

Convert repeatable needs into the right artifact type:

- use `scripts/` for deterministic or repeatedly rewritten operations
- use `references/` for domain knowledge, schemas, API notes, or detailed procedures
- use `assets/` for templates, boilerplate, images, sample files, or output materials
- use `examples/` for worked examples and validation snippets

Use `references/skill-resource-planning-worksheet.md` if the split is unclear.

Good exit criteria:

- a short list of intended support files
- no empty support directories without purpose
- each planned file has a clear execution reason

### 3. Name the skill correctly

Choose a name that is short, specific, and valid.

Rules:

- use lowercase letters, digits, and hyphens only
- keep it under 64 characters
- match the folder name exactly
- prefer names that describe the workflow, not vague topics
- add tool names only when they improve clarity or triggering

Examples:

- `gh-address-comments`
- `linear-address-issue`
- `pdf-editor`

Use `references/skill-naming-and-slugging.md` for naming patterns and anti-patterns.

### 4. Initialize the skill if it does not already exist

When creating a new skill, use the scaffold script instead of building the folder manually.

```bash
scripts/init_skill.py <skill-name> --path <output-directory> [--resources scripts,references,assets] [--examples]
```

Examples:

```bash
scripts/init_skill.py my-skill --path skills/public
scripts/init_skill.py my-skill --path skills/public --resources scripts,references
scripts/init_skill.py my-skill --path skills/public --resources scripts --examples
```

Expected outputs:

- a new skill directory
- a starter `SKILL.md`
- optional support directories
- optional examples
- optional `agents/openai.yaml` when generated with interface values

Skip this phase only when updating an existing skill.

### 5. Build the reusable support pack first

Before polishing `SKILL.md`, create the files that make the skill actually reusable.

Priorities:

1. create high-value scripts and test them
2. add reference docs another agent would need in context
3. add assets only when they are directly used in outputs
4. remove placeholders you do not need

Operational rule:

- do not ship untested scripts
- do not keep placeholder examples once real ones exist
- do not create support families just for completeness points

### 6. Write or revise `SKILL.md`

Write the frontmatter and body for execution, not for marketing.

#### Frontmatter guidance

The frontmatter description is the primary trigger mechanism. Make it explicit about both:

- what the skill does
- when it should be used

Recommended shape:

- one sentence on capability
- one sentence on activation boundary
- include likely user intents and contexts

Use `references/skill-trigger-writing-guide.md` for strong and weak examples.

#### Body guidance

Keep the body concise and operational.

Include:

- overview
- when to use
- workflow
- examples
- best practices
- troubleshooting
- additional resources

Move detailed material into linked files under `references/`, `examples/`, `scripts/`, or `assets/`.

### 7. Validate the skill

Run the validator after structural edits.

```bash
scripts/quick_validate.py <path/to/skill-folder>
```

Use `references/skill-validation-triage.md` if validation fails.

Good exit criteria:

- valid frontmatter
- name matches directory
- required sections are present
- linked support files exist
- validator passes cleanly

### 8. Generate or refresh `agents/openai.yaml`

If the skill uses agent metadata, generate it from the actual skill content rather than from memory.

```bash
scripts/generate_openai_yaml.py <path/to/skill-folder> --interface key=value
```

Read `references/openai-yaml-sync-guide.md` before generating values.

Good exit criteria:

- `display_name`, `short_description`, and `default_prompt` reflect the current skill
- optional fields are included only when explicitly provided
- metadata is not stale relative to `SKILL.md`

### 9. Iterate from real usage

Use the skill on realistic tasks, then improve it where it struggled.

Look for:

- weak triggers
- context bloat
- missing reusable files
- unsupported assumptions
- stale metadata
- examples that do not match real requests

Document the improvement, apply the change, and validate again.

## Examples

### Example 1: Bootstrap a new skill

```bash
scripts/init_skill.py gh-address-comments --path skills/public --resources scripts,references --examples
```

Expected result: a scaffolded skill folder for a GitHub comment-handling workflow with support directories ready for real content.

### Example 2: Validate an edited skill

```bash
scripts/quick_validate.py skills/public/gh-address-comments
```

Expected result: either a clean validation result or actionable errors for naming, frontmatter, or structure.

### Example 3: Refresh UI metadata after changing the skill

```bash
scripts/generate_openai_yaml.py skills/public/gh-address-comments --interface display_name="Address GitHub Comments" --interface short_description="Handles GitHub review comments and reply workflows" --interface default_prompt="Use this skill to triage and address GitHub comments."
```

Expected result: `agents/openai.yaml` aligned with the current skill.

### Example 4: Tighten a weak trigger description

Prompt:

```text
Improve this skill description so it states what the skill does and exactly when it should trigger. Then list which details belong in frontmatter versus the body.
```

Use `references/skill-trigger-writing-guide.md` to review the rewrite before committing it.

## Best Practices

### Do

- write the frontmatter description as the actual trigger boundary
- derive support files from real user examples
- keep `SKILL.md` lean and move details into linked references
- test added scripts before recommending them
- regenerate or verify `agents/openai.yaml` after meaningful skill edits
- use imperative, execution-focused wording
- keep references one hop away from `SKILL.md`
- remove placeholders and imported noise that do not support the workflow

### Don't

- use a generic description like "helps with X"
- duplicate large blocks of detail in both `SKILL.md` and `references/`
- create empty `scripts/`, `references/`, or `assets/` directories with no purpose
- leave untested scripts in the support pack
- let `agents/openai.yaml` drift away from the real skill behavior
- confuse skill authoring with implementation of the target domain task

### Progressive disclosure rule

Assume the model is already capable. Add only the information another agent would not reliably infer.

A good split is:

- frontmatter: activation boundary
- `SKILL.md`: workflow and navigation
- `references/`: detail loaded only when needed
- `scripts/`: deterministic execution
- `assets/`: output materials, not explanation

## Troubleshooting

### Problem: The skill does not trigger reliably

**Symptoms:** Relevant user requests do not activate the skill, or the skill activates for unrelated requests.

**Likely cause:** The `description` says only what the skill is about, not when it should be used.

**How to verify:** Compare the description against 3-5 real prompts. Check whether the wording includes the actual user intents, file types, tools, or contexts.

**Fix:** Rewrite the description using the pattern in `references/skill-trigger-writing-guide.md`. Put activation criteria in frontmatter, not only in the body.

### Problem: Validation fails

**Symptoms:** `scripts/quick_validate.py` reports frontmatter, naming, or required-structure errors.

**Likely cause:** Invalid YAML, name mismatch, missing required sections, or unsupported structure.

**How to verify:** Read the exact validator error, then compare against `references/skill-validation-triage.md`.

**Fix:** Apply the matching remediation, then re-run validation until clean.

### Problem: `agents/openai.yaml` drifted from `SKILL.md`

**Symptoms:** UI metadata no longer matches the skill name, scope, or prompt behavior.

**Likely cause:** The skill changed but the agent metadata was not regenerated or checked.

**How to verify:** Compare `display_name`, `short_description`, and `default_prompt` against the current skill purpose and workflow.

**Fix:** Follow `references/openai-yaml-sync-guide.md`, regenerate if needed, and keep optional fields minimal.

### Problem: `SKILL.md` became too long or repetitive

**Symptoms:** The document repeats schemas, examples, or deep domain notes that could live elsewhere.

**Likely cause:** Detailed content was kept in the body instead of being split into support files.

**How to verify:** Identify sections that are reference material rather than execution guidance.

**Fix:** Move detail into `references/` or `examples/`, then leave only the workflow and navigation in `SKILL.md`.

### Problem: The support pack is present but not useful

**Symptoms:** Files exist, but they are placeholders, generic notes, or untested helpers.

**Likely cause:** Resources were added for completeness rather than because recurring tasks required them.

**How to verify:** For each file, ask whether it saves repeated work on at least one realistic task.

**Fix:** Remove low-value files, replace placeholders with real content, and rebuild the support pack from concrete examples.

## Additional Resources

Use these local files to keep `SKILL.md` concise while still making the workflow executable.

| File | Use it for |
| --- | --- |
| `references/skill-trigger-writing-guide.md` | Writing high-signal trigger descriptions |
| `references/skill-naming-and-slugging.md` | Valid names, slugs, and naming tradeoffs |
| `references/skill-resource-planning-worksheet.md` | Turning examples into scripts, references, assets, and examples |
| `references/skill-validation-triage.md` | Fixing common validator failures |
| `references/openai-yaml-sync-guide.md` | Generating and checking `agents/openai.yaml` |
| `references/skill-authoring-checks.md` | Pre-merge authoring checklist |
| `examples/frontmatter-good-vs-bad.md` | Trigger-writing examples |
| `examples/resource-planning-examples.md` | Worked resource planning examples |
| `examples/validation-failure-examples.md` | Validator failures with fixes |
| `agents/related-skill-router.md` | Stay-versus-handoff decision guide |

## Related Skills

Use this skill to author the skill itself. Hand off when the work becomes primarily about another discipline.

- architecture or system design skill: when the main task is solution architecture, not skill packaging
- documentation skill: when the content problem is documentation quality, information architecture, or doc operations
- testing or security skill: when the main blocker is validation policy, threat review, or security posture
- domain-specific implementation skill: when the user really needs the domain work done, and the skill authoring task is complete

When handing off, preserve:

- the target skill purpose
- the trigger boundary
- the resource plan
- current validation status
- any known metadata drift or unresolved gaps

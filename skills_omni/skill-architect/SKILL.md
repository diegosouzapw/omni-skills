---
name: "skill-architect"
description: "Skill Architect workflow skill. Use this skill when a user needs expert help designing and building a new high-quality skill from scratch through structured discovery, architecture, drafting, validation, and delivery. Trigger when someone says \\"turn this into a skill\\", \\"help me create a SKILL.md\\", \\"I want to teach my agent to do X consistently\\", or needs a standalone or MCP-enhanced skill package. Do not use it for subagent creation, technical design documents, or improving an existing skill without redesigning it."
version: "0.0.1"
category: "ai-agents"
tags:
  - "skill-architect"
  - "skill-design"
  - "skill-authoring"
  - "agent-workflows"
  - "prompt-engineering"
  - "mcp"
  - "validation"
  - "routing"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/skill-architect"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Skill Architect

## Overview

Use this skill to design a new skill package deliberately instead of jumping straight into `SKILL.md` drafting. It preserves the upstream intent of the imported `skill-architect` workflow while presenting it in a cleaner, more operational format for Omni Skills.

This skill is for skill creation, not generic prompting. It helps the operator move through five phases in order: Discovery, Architecture, Craft, Validate, and Deliver. The support pack exists to make each phase more deterministic, reviewable, and easier to hand off.

The upstream source came from `packages/skills-catalog/skills/(creation)/skill-architect` in `https://github.com/tech-leads-club/agent-skills.git`. Keep that provenance visible whenever you package, review, or hand off work derived from this intake copy.

## When to Use This Skill

Use this skill when the user primarily needs a new skill to be designed or packaged.

### Use this skill for

- Creating a new skill from scratch.
- Converting an existing repeated workflow into a reusable skill.
- Teaching an agent to perform a task consistently through a packaged skill.
- Designing a skill that uses built-in tools or MCP-backed tools.
- Turning conversation history, notes, or an informal workflow into a formal `SKILL.md` package.
- Structuring a skill with frontmatter, workflow steps, examples, references, and validation.

### Typical trigger phrases

- "Turn this into a skill."
- "Help me create a SKILL.md for this workflow."
- "I want my agent to do this consistently every time."
- "Can you design a reusable skill for this process?"
- "How do I package this workflow for my agent?"
- "Build a skill for this MCP-assisted task."
- "I have a process; help me make it a skill."
- "Design a skill that guides code review / onboarding / sprint planning / report generation."

### Do not use this skill for

- Creating a subagent. Route to `subagent-creator`.
- Writing a technical design doc or implementation architecture doc. Route to `create-technical-design-doc`.
- Improving, benchmarking, or evaluating an existing skill when the main task is refinement rather than new-skill design. Route to the relevant skill-improvement or evaluation workflow if available.
- Replacing a simple system prompt, project instruction, or one-off checklist when a full skill would be unnecessary.

### Switch away from this skill when

- The conversation becomes mainly about debugging a live implementation.
- The user already has a mature skill and wants tests, scoring, or optimization rather than architecture.
- The real need is repository design, system prompt design, or agent topology instead of skill packaging.

## Operating Table

| Situation | Start here | Why |
| --- | --- | --- |
| User request is vague | `references/skill-discovery-question-bank.md` | Helps you ask one discovery topic at a time instead of dumping a template |
| Unsure whether this should be a skill at all | `references/skill-patterns-decision-guide.md` | Distinguishes skill-worthy workflows from prompts, project rules, and subagents |
| Need to write or refine the description field | `references/trigger-design-guide.md` | Gives positive and negative trigger patterns and anti-patterns |
| Need a structured artifact for planning | `examples/discovery-brief-template.md` and `examples/architecture-decision-record-template.md` | Produces deterministic intermediate outputs before drafting |
| Need a final review packet | `references/validation-evals-guide.md` and `examples/validation-report-template.md` | Turns review into explicit checks instead of vague commentary |
| Need provenance or import lineage | `scripts/omni_import_print_origin.py` | Prints source repository and import path so handoff notes stay auditable |
| Need to route elsewhere | `agents/omni-import-router.md` and `examples/handoff-note-template.md` | Preserves context while switching to a more appropriate skill |

## Workflow

Move through the phases in order: **Discovery → Architecture → Craft → Validate → Deliver**.

Do not draft the final `SKILL.md` before Discovery and Architecture are complete. If the user wants to move faster, compress the phases; do not skip them.

| Phase | Inputs | Actions | Output artifact | Exit criteria |
| --- | --- | --- | --- | --- |
| Discovery | User goal, current workflow, pain points, target users, tools | Ask focused questions, extract workflow steps, identify 2-3 use cases, define success criteria, confirm whether a skill is the right packaging choice | Discovery brief | Use cases, triggers, tools, constraints, and success criteria are clear |
| Architecture | Discovery brief | Choose pattern, define folder plan, decide what stays in `SKILL.md` vs support files, draft activation boundaries and description | Architecture decision record | Pattern, structure, disclosure plan, and routing boundaries are agreed |
| Craft | Discovery brief + architecture record | Write frontmatter, body instructions, examples, references, and any minimal helper files | Draft skill package | The package is actionable, specific, and linked correctly |
| Validate | Draft skill package | Check frontmatter, markdown structure, trigger accuracy, non-trigger accuracy, example realism, and unresolved ambiguities | Validation report | Structural checks pass and major ambiguity is removed |
| Deliver | Validated package + provenance | Present files, summarize what was built, state test phrases, note known limits, and record source lineage | Delivery packet / handoff note | The user can test or hand off the skill confidently |

### Phase 1: Discovery

1. Start with the outcome, not the file format.
2. Ask one topic at a time: workflow, pain, audience, tools, constraints.
3. Extract concrete examples from the conversation before asking for more.
4. If the user is vague, propose 2-3 candidate interpretations and ask which one is closest.
5. Capture at least 2 realistic use cases and at least 2 non-goals.

Use the [discovery question bank](references/skill-discovery-question-bank.md) when the request is underspecified.

**Required discovery output**

- Workflow being standardized
- What fails today without the skill
- Who will use it
- Required tools or MCP dependencies
- Trigger phrases that should activate it
- Requests that should not activate it
- Definition of a good output

### Phase 2: Architecture

1. Pick the primary skill pattern.
2. Decide whether the user really needs a skill, a prompt, project instructions, or a subagent.
3. Plan progressive disclosure:
   - Frontmatter for routing
   - `SKILL.md` for core workflow
   - linked files only when they materially improve execution
4. Draft a precise description with both positive and negative activation guidance.
5. Plan the support pack narrowly. Add files only when they improve repeatability or validation.

Use the [pattern decision guide](references/skill-patterns-decision-guide.md) and [trigger design guide](references/trigger-design-guide.md).

### Phase 3: Craft

1. Write valid frontmatter first.
2. Keep the `description` on a single line.
3. Write imperative instructions for the agent, not onboarding prose for humans.
4. Include concrete examples with expected behavior.
5. Reference support files only when you state when to load them.
6. Avoid bloating `SKILL.md`; move long checklists or matrices to linked files.

**Frontmatter guardrails**

- `name` must match the folder name exactly.
- Use kebab-case.
- Keep the description explicit about what the skill does, when it should trigger, and when it should not.
- Avoid XML angle brackets in frontmatter.
- Use exact file casing: `SKILL.md`.

### Phase 4: Validate

Treat validation as a small eval pass, not a vibes check.

1. Check frontmatter formatting and required fields.
2. Confirm required sections exist.
3. Test phrases that should trigger.
4. Test phrases that should not trigger.
5. Read the instructions as a first-time agent and note ambiguity, missing stop conditions, or routing failures.
6. Record defects explicitly and either fix them or hand them off with evidence.

Use the [validation and evals guide](references/validation-evals-guide.md) and [validation report template](examples/validation-report-template.md).

### Phase 5: Deliver

1. Present the completed package or the draft plus open issues.
2. Summarize:
   - what the skill does
   - when to use it
   - one or two suggested trigger phrases
   - known limits
3. Keep provenance visible for imported or adapted work.
4. If routing elsewhere, produce a clean handoff note instead of making the next operator rediscover context.

Use the [handoff note template](examples/handoff-note-template.md) when switching skills.

## Examples

### Example 1: Vague request turned into discovery

**User says:**

```text
I want to automate our release checklist with a skill.
```

**Good first response:**

```text
I can help design that as a skill. First, what does the release workflow look like today from start to finish, and what usually goes wrong or gets missed?
```

**Why this is good:** It starts with outcome and pain, not file structure.

### Example 2: Discovery brief before drafting

**User says:**

```text
Turn our onboarding process into a skill for the team.
```

**Operator action:** Capture a structured brief using `examples/discovery-brief-template.md`, then summarize:

```text
Confirmed so far:
- Workflow: engineer onboarding across account setup, repo access, environment setup, and first task
- Pain: steps are skipped and different managers explain it differently
- Users: engineering managers and onboarding buddies
- Tools: internal docs plus ticketing through MCP
- Must trigger for onboarding setup requests; must not trigger for HR policy questions
If that is correct, I will move to the architecture plan next.
```

### Example 3: Safe lineage check

```bash
python3 skills/skill-architect/scripts/omni_import_print_origin.py
```

Use this only to inspect local provenance metadata before review or handoff.

### Example 4: Structure check before delivery

```bash
python3 skills/skill-architect/scripts/check_skill_structure.py skills/skill-architect/SKILL.md
```

This performs a narrow local check for frontmatter and section coverage. Review its findings before making edits.

## Best Practices

### Do

- Ask one discovery topic at a time.
- Summarize confirmed facts before moving from Discovery to Architecture.
- Preserve the upstream workflow intent when working from imported source material.
- Use structured intermediate artifacts so the package is reviewable.
- Write concise, imperative instructions.
- Add negative triggers when overlap with nearby skills is likely.
- State exactly when an agent should read a support file.
- Keep provenance visible in delivery and handoff notes.
- Prefer small deterministic checks over long prose warnings.

### Do not

- Generate `SKILL.md` immediately after a vague request.
- Assume every repeated workflow deserves a full skill.
- Let the description become so broad that unrelated requests trigger it.
- Hide uncertainty behind generic phrases like "validate properly" or "handle edge cases."
- Add support files that are never referenced from `SKILL.md`.
- Run scripts blindly; inspect what they do and keep execution local and reviewable.
- Assume the skill will be the only skill loaded in the session.

### Instruction quality checklist

Before delivery, verify that the skill:

- uses direct action verbs
- has clear stop conditions
- includes at least one realistic example
- defines boundaries with related workflows
- tells the agent when to consult support files
- avoids repetitive prose where a checklist or template is clearer

### Safe operations note

If you use packaged scripts:

- run only repository-local scripts you can inspect
- understand what the script checks before running it
- keep commands narrow and non-destructive
- summarize intended file changes before editing multiple files

## Troubleshooting

### Problem: The user is too vague to design a good skill

**Symptoms:** The user asks for "a skill for our process" but cannot describe triggers, users, or desired outputs.

**Solution:** Use the discovery question bank. Propose 2-3 likely use cases and ask the user to confirm, reject, or combine them. Do not draft the final package until at least one concrete workflow path is confirmed.

### Problem: The skill triggers too often

**Symptoms:** The drafted description would match generic requests that are only loosely related to the intended workflow.

**Solution:** Narrow the description. Add concrete trigger phrases, explicit non-trigger phrases, target users or file types, and a short "do not use for" clause. Re-run trigger and non-trigger tests from the validation guide.

### Problem: The skill is too long or repetitive

**Symptoms:** `SKILL.md` becomes bloated, repeats the same rule several times, or buries critical instructions.

**Solution:** Keep core instructions in `SKILL.md` and move long checklists, examples, or reference material into linked files. Replace broad prose with short decision rules, tables, or templates.

### Problem: Frontmatter fails validation

**Symptoms:** Parsing breaks, the validator rejects the file, or the description formatting is invalid.

**Solution:** Check delimiter lines, confirm `name` matches the folder exactly, keep `description` as a single inline value, and ensure required sections still exist after edits. Use `scripts/check_skill_structure.py` for a local preflight check.

### Problem: The task should not be a skill at all

**Symptoms:** The best solution is actually a system prompt, project instruction, subagent, or technical design doc.

**Solution:** Say so clearly. Use the pattern decision guide to explain why a different packaging form is better, then hand off with a short note rather than forcing a skill-shaped output.

### Problem: The work drifted into another specialization

**Symptoms:** The conversation becomes mainly about implementation design, debugging, evaluation, or subagent behavior.

**Solution:** Stop expanding the skill package. Produce a handoff note with confirmed context, current artifacts, open questions, and provenance so the next skill can continue efficiently.

## Related Skills

- `subagent-creator` — Use when the user needs a dedicated subagent or agent role rather than a reusable skill package.
- `create-technical-design-doc` — Use when the main deliverable is an architecture or implementation design document.
- skill improvement or evaluation workflow — Use when an existing skill needs benchmarking, refinement, or trigger tuning rather than net-new design.
- MCP integration or debugging skill — Use when the main challenge is tool wiring, server behavior, or runtime debugging instead of skill authoring.

## Additional Resources

### Core references

- [Discovery question bank](references/skill-discovery-question-bank.md)
- [Skill patterns decision guide](references/skill-patterns-decision-guide.md)
- [Trigger design guide](references/trigger-design-guide.md)
- [Validation and evals guide](references/validation-evals-guide.md)

### Templates

- [Discovery brief template](examples/discovery-brief-template.md)
- [Architecture decision record template](examples/architecture-decision-record-template.md)
- [Validation report template](examples/validation-report-template.md)
- [Handoff note template](examples/handoff-note-template.md)

### Utility scripts and imported support

- [Check skill structure](scripts/check_skill_structure.py)
- [Print import origin](scripts/omni_import_print_origin.py)
- [List imported support pack](scripts/omni_import_list_support_pack.py)
- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)

### Provenance note

This skill is an editorially improved English intake copy of the upstream `skill-architect` workflow. Preserve source repository, path, and any local changes in PR descriptions, review notes, or handoff packets.

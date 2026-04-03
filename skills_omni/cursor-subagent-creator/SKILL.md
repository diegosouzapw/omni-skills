---
name: "cursor-subagent-creator"
description: "Cursor subagent creation workflow skill. Use this skill when a user needs a Cursor-specific subagent in `.cursor/agents/` or `~/.cursor/agents/` for specialized, multi-step work with isolated context, clear delegation triggers, and safe capability choices. Do not use for generic subagent creation outside Cursor; use `subagent-creator` for non-Cursor environments."
version: "0.0.1"
category: "ai-agents"
tags:
  - "cursor-subagent-creator"
  - "cursor"
  - "subagents"
  - "delegation"
  - "agent-design"
  - "workflow"
  - "isolated-context"
  - "cursor-agents"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "cursor"
  - "codex-cli"
  - "claude-code"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/cursor-subagent-creator"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Cursor Subagent Creator

## Overview

Use this skill to create or refine **Cursor-specific subagents** that live in `.cursor/agents/` for a project or `~/.cursor/agents/` for a user profile.

A Cursor subagent is appropriate when the work benefits from:

- isolated context
- a narrow specialty
- repeatable delegation
- multi-step execution
- independent verification or parallel workstreams

This skill preserves the original upstream intent while turning it into a more operational workflow: decide whether a subagent is the right tool, choose the right scope and permissions, write a concise spec, create the markdown file, and validate that Cursor can delegate to it reliably.

Do **not** use this skill for generic subagent creation outside Cursor. If the request is not Cursor-specific, route to `subagent-creator` instead.

## When to Use This Skill

Use this skill when the user wants to:

- create a Cursor subagent such as a verifier, debugger, security reviewer, documentation writer, or orchestrator
- add a reusable specialist under `.cursor/agents/` for a repository
- add a personal reusable specialist under `~/.cursor/agents/`
- improve delegation quality by rewriting a subagent description and prompt
- split a complex workflow into specialized subagents with isolated context
- introduce a safer review or audit agent that should default to read-only behavior

Do **not** use this skill when:

- the request is for subagents in another platform or framework
- the task is a one-off command or short direct action that does not need isolated context
- a Cursor rule would be better because the need is persistent instruction/context rather than delegated execution
- a simple skill or slash command is enough
- the user only wants prompt wording with no Cursor subagent file creation or update

## Decision Guide

Use this quick routing table before authoring anything.

| Need | Best fit | Why |
| --- | --- | --- |
| Persistent project behavior or standing instruction | Cursor rule | Rules are better for durable context and policy |
| One-off direct action | Skill or slash command | Lower overhead than a subagent |
| Specialized multi-step work with isolated context | Cursor subagent | Best for delegation and scoped specialization |
| Generic non-Cursor subagent design | `subagent-creator` | This skill is Cursor-specific |

For a fuller routing aid, use [references/cursor-subagent-decision-guide.md](references/cursor-subagent-decision-guide.md).

## Operating Table

| Decision area | Recommended default | Use a different choice when | Why it matters |
| --- | --- | --- | --- |
| Location | `.cursor/agents/` | The subagent should apply across all projects for one user | Project scope is safer and easier to review in version control |
| Name | kebab-case filename such as `security-auditor.md` | Never; keep names simple and stable | Cursor reads filename and optional `name`; mismatches create confusion |
| `description` | Explicit trigger wording with exclusions | Never leave it vague | Delegation quality depends heavily on description clarity |
| `model` | `inherit` | Use `fast` for lightweight checks or a specific documented model only when justified | Stable defaults reduce churn |
| `readonly` | `true` for review/audit/verification agents | Set to `false` only if the subagent must modify files | Least privilege reduces accidental edits |
| `is_background` | `false` | Set to `true` only for long-running work where immediate interaction is not needed | Background mode can hide progress and complicate review |
| Responsibility | One clear job | Split into multiple subagents if responsibilities conflict | Narrow scope improves delegation and testability |
| Output format | Structured sections or bullet schema | Freeform only for trivial tasks | Structured outputs are easier to validate and hand off |

## Workflow

### 1. Classify the request

Confirm that the user is asking for a **Cursor** subagent, not a generic agent pattern.

Ask or infer:

- What is the subagent’s single responsibility?
- Why does the task need isolated context?
- Will it be reused?
- Is it multi-step or specialist work?
- Does it need to write files, or should it stay read-only?

If the task is simple, one-off, or policy-only, route away from this skill.

### 2. Choose the scope and file location

Pick one location:

- **Project scope:** `.cursor/agents/<agent-name>.md`
- **User scope:** `~/.cursor/agents/<agent-name>.md`

Prefer project scope when:

- the subagent is tied to repository conventions
- teammates should review it
- the behavior should travel with the codebase

Prefer user scope when:

- it is a personal assistant pattern
- it is not repository-specific
- the user explicitly wants global reuse

Use a descriptive kebab-case name such as:

- `verifier`
- `debugger`
- `security-auditor`
- `doc-writer`
- `orchestrator`

### 3. Draft the frontmatter safely

Use minimal, valid YAML frontmatter.

```markdown
---
name: security-auditor
description: Security review specialist. Use proactively when code touches auth, payments, secrets, permissions, or other sensitive paths. Do not use for generic style review.
model: inherit
readonly: true
is_background: false
---
```

Field guidance:

| Field | Status | Guidance |
| --- | --- | --- |
| `name` | optional | If used, keep it aligned with the filename conceptually |
| `description` | strongly recommended | State when to use it, what triggers delegation, and when not to use it |
| `model` | optional | Prefer `inherit`; use `fast` for lightweight validation |
| `readonly` | optional | Prefer `true` for analysis, audit, and verification roles |
| `is_background` | optional | Prefer `false` unless the task is genuinely long-running |

For a validation checklist, use [references/cursor-subagent-validation-checklist.md](references/cursor-subagent-validation-checklist.md).

### 4. Write the subagent instructions

Keep the prompt concise, specific, and operational.

A strong subagent body usually includes:

1. **Role** — who the subagent is
2. **Trigger context** — when it is being invoked
3. **Execution steps** — a short numbered process
4. **Constraints** — what it must avoid or preserve
5. **Output schema** — exact sections to return

Recommended template:

```markdown
You are a [specialist role].

When invoked:

1. Identify the target scope and task.
2. Inspect the relevant files or context.
3. Perform the specialized analysis or changes.
4. Verify the result against explicit criteria.
5. Return a structured report.

Constraints:

- Stay within the assigned responsibility.
- Do not perform unrelated refactors.
- Escalate missing context instead of guessing.

Report:

- Summary
- Findings or changes
- Evidence
- Risks or follow-ups
- Final status
```

Avoid long, vague prompts. Clear triggers and exact outputs matter more than prompt length.

### 5. Choose permissions and execution mode

Apply least privilege.

Use `readonly: true` when the subagent is primarily:

- reviewing code
- validating completed work
- auditing security-sensitive paths
- analyzing failures
- checking documentation or consistency

Use write capability only when the user clearly wants the subagent to make edits.

Use `is_background: true` only when:

- the work is long-running
- the operator does not need an immediate response loop
- delayed completion is acceptable

Do **not** use background mode for:

- interactive debugging
- approval-heavy edits
- tasks where the operator expects immediate confirmation

### 6. Create the file

Create the markdown file in the selected Cursor agent directory.

Typical result:

- `.cursor/agents/security-auditor.md`
- `~/.cursor/agents/verifier.md`

After creation, confirm:

- exact path
- purpose
- whether it is project-scoped or user-scoped
- whether it is read-only or write-capable
- how to invoke it

### 7. Test explicit invocation

Run at least one direct invocation-style smoke test.

Examples:

```text
/security-auditor review the authentication module for common security issues
```

```text
/verifier confirm the new billing workflow is implemented and tested
```

The goal is to confirm the subagent can be called intentionally and that its output shape matches the prompt.

### 8. Test natural-language delegation

Run at least one natural-language request that should trigger delegation indirectly.

Examples:

```text
Please review the payment changes for security risks before merge.
```

```text
Double-check that the completed feature actually works and list anything still broken.
```

If Cursor does not delegate as expected, improve the `description` before expanding the prompt.

Use [examples/delegation-smoke-tests.md](examples/delegation-smoke-tests.md) for ready-to-copy checks.

### 9. Revise and finalize

Before handing off, verify:

- the subagent has one clear responsibility
- the description is specific enough to guide delegation
- permissions are no broader than necessary
- output sections are explicit
- the file path and YAML are valid
- at least one explicit invocation and one delegation test were tried

Then return a concise completion message with the file path, purpose, invocation examples, and any recommended refinements.

## Examples

### Example 1: Minimal safe template

See [examples/minimal-subagent-template.md](examples/minimal-subagent-template.md).

Use it when you need a known-good starting point with valid frontmatter and a concise body.

### Example 2: Read-only security auditor

See [examples/security-auditor-subagent.md](examples/security-auditor-subagent.md).

This is a strong default for sensitive code review because it keeps scope narrow and uses `readonly: true`.

### Example 3: Verification-focused subagent

See [examples/verifier-subagent.md](examples/verifier-subagent.md).

Use this pattern when you want independent confirmation that declared work is actually complete.

### Example 4: Orchestrator pattern

See [examples/orchestrator-subagent.md](examples/orchestrator-subagent.md).

Use it when work must be split into phases and coordinated across specialists.

### Example 5: Optional local frontmatter check

```bash
python3 scripts/check_subagent_frontmatter.py .cursor/agents/security-auditor.md
```

This optional helper checks for frontmatter presence, common field mistakes, and filename hygiene. It is a local sanity check, not an official Cursor validator.

## Best Practices

### Do

- design each subagent around **one clear responsibility**
- write the `description` as a delegation trigger, not a slogan
- prefer `readonly: true` for reviewer, verifier, auditor, and analyzer roles
- keep prompts concise and operational
- define a structured output format
- store project-specific subagents in `.cursor/agents/` so they can be reviewed in version control
- test both explicit invocation and natural-language delegation
- document exclusions such as “do not use for generic code review” when overlap is possible

### Avoid

- vague descriptions like “helps with general tasks”
- multi-purpose agents that review, edit, test, document, and orchestrate everything
- unnecessary write capability
- background mode for tasks that need interactive feedback
- overlong prompts that bury triggers and outputs
- creating many overlapping subagents before proving a real need

### Description writing pattern

A strong description usually contains:

- the specialty
- the trigger condition
- notable examples
- optional exclusions

Good:

- `Security review specialist. Use proactively when code touches auth, payments, secrets, permissions, or untrusted input. Do not use for generic style review.`
- `Verification specialist. Use after a task is reported complete to confirm the implementation, tests, and edge cases actually hold.`

Weak:

- `Helpful coding assistant.`
- `General reviewer for many tasks.`

## Troubleshooting

### Problem: Cursor does not delegate to the subagent

**Symptoms:** Natural-language requests that should match the specialization stay with the main agent, or delegation is inconsistent.

**Solution:** Rewrite the `description` first. Add explicit trigger phrases such as "Use proactively when..." or "Use after..." and include concrete examples. Narrow the responsibility if the subagent overlaps too much with general work.

### Problem: The subagent is too broad or behaves inconsistently

**Symptoms:** It gives mixed outputs, performs unrelated work, or is invoked for the wrong tasks.

**Solution:** Split the agent into smaller roles. Reduce the prompt to one responsibility, one process, and one output schema. Add exclusions in the description.

### Problem: A review or audit subagent edited files unexpectedly

**Symptoms:** The subagent changed code even though it should only have inspected or verified.

**Solution:** Set `readonly: true`, rewrite the instructions to emphasize analysis-only behavior, and retest with a review-oriented prompt.

### Problem: Background execution feels stalled or opaque

**Symptoms:** The operator cannot tell whether the subagent is still working, complete, or waiting on context.

**Solution:** Use foreground execution unless the task is genuinely long-running and non-interactive. Reserve `is_background: true` for asynchronous work where delayed completion is acceptable.

### Problem: The file exists but Cursor still does not use it correctly

**Symptoms:** Explicit invocation is awkward, the wrong agent appears to run, or the spec seems ignored.

**Solution:** Check filename, location, and frontmatter validity. Confirm the file is in `.cursor/agents/` or `~/.cursor/agents/`, uses valid YAML, and does not contain malformed booleans or indentation.

### Problem: The wrong tool was chosen

**Symptoms:** The subagent adds overhead to a task that should have been a rule, skill, or command.

**Solution:** Re-run the routing decision using [references/cursor-subagent-decision-guide.md](references/cursor-subagent-decision-guide.md). If the need is persistent instruction, use a rule; if it is a one-off action, use a skill or command.

For additional cases, use [references/cursor-subagent-troubleshooting-matrix.md](references/cursor-subagent-troubleshooting-matrix.md).

## Related Skills

- `subagent-creator` — use for non-Cursor subagent creation
- Cursor rule authoring skills — use when the need is persistent instruction rather than delegated execution
- testing or security review skills — use when the task is direct execution, not creation of a reusable Cursor specialist

## Additional Resources

- [Decision guide: subagent vs rule vs skill vs command](references/cursor-subagent-decision-guide.md)
- [Validation checklist](references/cursor-subagent-validation-checklist.md)
- [Troubleshooting matrix](references/cursor-subagent-troubleshooting-matrix.md)
- [Minimal subagent template](examples/minimal-subagent-template.md)
- [Security auditor example](examples/security-auditor-subagent.md)
- [Verifier example](examples/verifier-subagent.md)
- [Orchestrator example](examples/orchestrator-subagent.md)
- [Delegation smoke tests](examples/delegation-smoke-tests.md)
- [Optional frontmatter checker script](scripts/check_subagent_frontmatter.py)

## Completion Output

When this skill creates or updates a Cursor subagent, return:

```text
✅ Cursor subagent ready

Path: <exact path>
Scope: project | user
Purpose: <single-sentence responsibility>
Permissions: read-only | write-capable
Execution mode: foreground | background

How to invoke:
- Explicit: /<name> <task>
- Natural: <example natural-language request>

Validation performed:
- Explicit invocation test: passed | not run
- Natural delegation test: passed | not run

Recommended next step:
- <smallest useful refinement or follow-up>
```

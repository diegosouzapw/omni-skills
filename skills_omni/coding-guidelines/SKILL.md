---
name: "coding-guidelines"
description: "Coding Guidelines workflow skill. Use this skill when writing, modifying, or reviewing code and you need behavior that reduces common LLM implementation mistakes: clarify requirements, make minimal changes, match repository conventions, verify with the narrowest relevant checks, and report assumptions and risks. Do not use it for architecture design, documentation-only work, or deep security review."
version: "0.0.1"
category: "development"
tags:
  - "coding-guidelines"
  - "behavioral"
  - "implementation"
  - "refactoring"
  - "bug-fix"
  - "minimal-diff"
  - "validation"
  - "llm-coding"
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
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/coding-guidelines"
upstream_author: "ale"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Coding Guidelines

## Overview

This skill provides execution-oriented coding behavior that reduces common LLM mistakes during implementation work.

Use it when the task is to write, modify, refactor, or review code within an existing repository and the agent needs a disciplined workflow:

- clarify requirements before editing
- inspect local patterns before introducing new ones
- make the smallest change that solves the request
- verify with the narrowest relevant tests and checks
- report assumptions, validation, and residual risk

This skill preserves the original upstream intent: **Think Before Coding**, **Simplicity First**, **Surgical Changes**, and **Goal-Driven Execution**. It translates those principles into an operational workflow that an agent can execute safely.

## When to Use This Skill

Use this skill when the request is primarily an implementation task inside an existing codebase.

### Use it when

- fixing a bug in existing code
- implementing a small or medium feature within established architecture
- refactoring code without changing intended behavior
- updating tests to cover a requested behavior change
- reviewing a proposed code change for scope control and verification quality
- editing configuration, container, or infrastructure code as part of a bounded implementation task
- making a dependency update with targeted regression checks

### Do not use it when

- the main task is architecture or system design
- the user needs greenfield design or major technology selection
- the main work is documentation-only
- the task is a production incident or live operational response
- the task is a deep security review, threat model, or exploit analysis
- the root problem is still unknown and debugging is the dominant activity

### Handoff triggers

Route to a stronger adjacent skill or workflow when:

- root cause is unclear after initial inspection
- the change requires architectural decisions not already established
- the task touches high-risk security surfaces and confidence is low
- CI or environment failures dominate over implementation work
- the requested change expands into broad migration or release planning

See [agents/coding-guidelines-router.md](agents/coding-guidelines-router.md).

## Operating Table

| Situation | First move | Required validation | Stop if |
| --- | --- | --- | --- |
| Bug fix | Reproduce the bug or identify an existing failing test before editing code | Run the narrowest test that proves the bug and the fix | You cannot state what failure will prove success |
| Small feature | Confirm acceptance criteria and inspect similar code paths | Run targeted tests for the changed behavior; add or update tests if the repo expects them | Requirements are ambiguous or architecture is not settled |
| Refactor | Define the behavior that must remain unchanged | Run before/after tests, lint, and typecheck as relevant | The refactor changes behavior or scope starts expanding |
| Unfamiliar codebase | Read nearby files, naming, patterns, and tests before writing code | Validate against existing local conventions and the narrowest relevant checks | You are about to introduce a new pattern without evidence it belongs |
| Failing tests already exist | Separate pre-existing failures from failures caused by your change | Re-run only relevant checks and note baseline instability clearly | You cannot tell whether your change caused the failure |
| Security-sensitive change | Identify auth, secrets, shell execution, file paths, permissions, or untrusted input paths first | Add defensive tests where possible; run relevant static/security checks when available | You would need to guess about security behavior |
| Dependency update | Confirm why the dependency must change and keep the update scoped | Run targeted regression checks; scan dependencies when available and relevant | The update requires unrelated code churn or broad version drift |
| Container or IaC edit | Preserve least privilege and existing deployment conventions | Run the narrowest available validation plus config/security scanning when available | The change broadens privilege or execution scope without explicit need |
| Generated code mismatch | Prefer regenerating from the source of truth if the repo uses one | Run generator and targeted verification | You are hand-editing generated artifacts without repo support |

## Workflow

1. **Clarify the request**
   - Restate the task in concrete engineering terms.
   - Identify success criteria.
   - Surface assumptions and ambiguity before coding.
   - If multiple valid interpretations exist, ask a focused clarifying question or present the options.

2. **Inspect the repository before changing anything**
   - Read the nearest relevant files, tests, and configuration.
   - Match local naming, structure, error handling, and testing conventions.
   - Prefer existing patterns over personal preference.
   - Identify whether the task affects code, tests, configuration, dependencies, containers, or IaC.

3. **Make a minimal plan**
   - Define the smallest set of files that likely need to change.
   - Tie each step to a verification action.
   - Avoid speculative abstractions, optional knobs, or unrelated cleanup.

4. **Implement the smallest useful change**
   - Touch only code needed for the request.
   - Keep behavior changes intentional and visible.
   - Remove only the unused code your own edit creates.
   - Do not rename, move, or reformat unrelated files unless explicitly requested.

5. **Verify proportionally**
   - Run the narrowest relevant tests first.
   - Run lint, typecheck, or static analysis when the repository uses them for the touched area.
   - For dependency, container, or IaC changes, run additional validation or scanning when available.
   - Distinguish pre-existing failures from regressions introduced by your edit.

6. **Review the diff**
   - Check that every changed line maps to the request, validation, or necessary cleanup caused by the request.
   - Revert unrelated edits.
   - Confirm comments explain non-obvious intent, not obvious mechanics.

7. **Report clearly**
   - Summarize changed files and what each change accomplished.
   - List validation performed and results.
   - State assumptions, unresolved questions, and residual risks.
   - Recommend follow-up review when the task touches higher-risk areas.

## Core Principles Preserved from the Upstream Skill

### 1. Think Before Coding

**Do not assume. Do not hide confusion. Surface tradeoffs.**

Before implementing:

- state assumptions explicitly
- ask when the task is unclear
- present multiple interpretations instead of silently choosing one
- mention simpler approaches when they exist
- push back honestly when the requested path seems wrong or wasteful

### 2. Simplicity First

**Use the minimum code that solves the problem. Nothing speculative.**

- Do not add features beyond the request.
- Do not add abstractions for one-time use.
- Do not add configurability without a demonstrated need.
- Do not add defensive branches for impossible scenarios unless the repository already expects them.
- If the solution is obviously overbuilt, simplify it.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

- Do not refactor unrelated code while implementing the request.
- Match existing repository style and structure.
- Mention unrelated issues you notice, but do not fix them silently.
- Remove imports, variables, or helpers made unused by your own change.
- Every changed line should trace back to the user request or required verification.

### 4. Goal-Driven Execution

**Define success criteria and verify them.**

Translate vague requests into verifiable goals:

- "Fix the bug" → reproduce it with a test or concrete failing case, then make that pass.
- "Add validation" → add or update tests for invalid input and make them pass.
- "Refactor this module" → preserve behavior and prove it with before/after checks.

For multi-step work, use a short plan:

```text
1. Adjust parser input handling → verify: targeted parser tests pass
2. Update error mapping → verify: failing case now returns expected error
3. Run narrow regression checks → verify: touched module checks still pass
```

## Security Guardrails

Apply extra caution when a change touches any of these areas:

- secrets, credentials, API keys, or tokens
- authentication, authorization, session handling, or permissions
- shell execution, subprocess calls, or command construction
- file paths, uploads, archive extraction, or filesystem writes
- untrusted input, serialization, templating, or code generation
- crypto, signing, or security policy enforcement
- dependency, container, or infrastructure configuration

### Required behaviors

- Do not hardcode secrets or realistic credentials.
- Prefer configuration or environment references over embedded sensitive values.
- Do not broaden privileges by default.
- Do not guess about secure behavior when confidence is low.
- Call out security-sensitive assumptions explicitly in the handoff summary.
- Recommend additional review when the blast radius is unclear.

See [references/security-guardrails.md](references/security-guardrails.md).

## Examples

### Example 1: Bug fix with reproduce-first behavior

```text
Use @coding-guidelines to fix the failing date parsing bug in src/parser.py. First identify or add the narrowest test that reproduces the bug, then implement the smallest fix, run only the relevant tests and lint for the touched area, and summarize assumptions plus any remaining edge cases.
```

See [examples/bugfix-template.md](examples/bugfix-template.md).

### Example 2: Bounded refactor

```text
Use @coding-guidelines to refactor src/cache.py for readability without changing behavior. Inspect existing patterns first, avoid new abstractions unless already used nearby, keep the diff scoped, run before/after validation for the cache tests, and report any unrelated issues separately instead of fixing them.
```

See [examples/refactor-template.md](examples/refactor-template.md).

### Example 3: Small feature implementation

```text
Use @coding-guidelines to add support for optional locale fallback in the formatter module. Confirm the acceptance criteria, inspect similar option handling in the repository, implement the smallest change that fits existing patterns, update or add focused tests, and summarize changed files and residual risks.
```

See [examples/feature-implementation-template.md](examples/feature-implementation-template.md).

### Example 4: Narrow validation commands

Run the smallest relevant checks the repository already supports.

```bash
# targeted tests for a touched module or package
pytest path/to/test_module.py

# targeted JavaScript or TypeScript tests
npm test -- path/to/file.test.ts

# narrow lint or typecheck examples
ruff check path/to/file.py
eslint path/to/file.ts
```

If the repository supports broader checks and the task risk justifies them, expand carefully after targeted validation succeeds.

## Best Practices

### Do

- clarify ambiguous requirements before coding
- inspect nearby code and tests before introducing a solution
- keep the diff minimal and directly traceable to the request
- match repository conventions even when they differ from your personal preference
- validate with the narrowest relevant checks first
- document assumptions and pre-existing failures clearly
- treat dependency, container, and IaC edits as higher-risk changes needing stronger verification
- recommend follow-up review when the change touches sensitive security or operational surfaces

### Do not

- silently choose among multiple interpretations of an ambiguous request
- add speculative abstractions, flags, toggles, or extensibility
- rename, move, or reformat unrelated code during a small implementation task
- fix unrelated bugs just because you noticed them
- claim success without stating what was verified
- hide failing validation, environment drift, or uncertain security behavior
- hardcode secrets, credentials, or permissive defaults

### Diff review checklist

Before handing off, confirm:

- every changed file was necessary
- every changed line maps to the task, validation, or cleanup caused by the task
- tests or checks are appropriate for the change type
- unrelated edits were removed
- assumptions and risks are stated plainly

See [references/coding-change-checklist.md](references/coding-change-checklist.md) and [references/validation-matrix.md](references/validation-matrix.md).

## Troubleshooting

### Problem: Requirements are ambiguous and multiple implementations fit

**Symptoms:** Several implementations seem reasonable, acceptance criteria are missing, or the task wording allows conflicting behaviors.

**Solution:** Stop before coding. List the possible interpretations, note the impact of each, and ask a focused clarifying question. If you must proceed, state the assumption explicitly and keep the implementation reversible.

### Problem: The diff is growing beyond the user request

**Symptoms:** You are touching many files, adding cleanup unrelated to the task, or introducing abstractions that only support hypothetical future work.

**Solution:** Reduce scope. Revert unrelated edits, split optional improvements into follow-up notes, and return to the smallest change that solves the stated request.

### Problem: Tests, lint, or typecheck fail after the change

**Symptoms:** Validation now fails, but it is unclear whether the failure is pre-existing, caused by your edit, or caused by environment drift.

**Solution:** Isolate the failure. Run the narrowest relevant checks, compare against baseline if possible, and state clearly which failures are attributable to your change versus pre-existing repo state.

### Problem: The repository uses patterns different from your preferred style

**Symptoms:** The local codebase uses different naming, test shape, error handling, or structure than you would normally choose.

**Solution:** Follow the repository's local conventions unless the user explicitly asked for standardization. Consistency with the codebase is usually more valuable than personal preference.

### Problem: The change touches security-sensitive code and confidence is low

**Symptoms:** The task affects auth, permissions, command execution, untrusted input, secrets, dependency risk, or infrastructure policy and you cannot explain the blast radius confidently.

**Solution:** Narrow scope, add defensive validation where possible, state assumptions explicitly, and recommend security review instead of guessing.

See [references/troubleshooting-playbook.md](references/troubleshooting-playbook.md).

## Related Skills

Use adjacent skills when this workflow is no longer the best center of gravity.

- **Debugging skill**: when root cause is still unknown and investigation dominates implementation.
- **Testing skill**: when test design, coverage strategy, or flaky test analysis becomes the primary task.
- **Security review skill**: when the change meaningfully affects auth, permissions, secrets, supply chain, or exploitability.
- **Architecture or design skill**: when the task requires new system boundaries, patterns, or tradeoff decisions.
- **Dependency management or CI troubleshooting skill**: when package upgrades, build failures, or pipeline instability dominate.

During handoff, preserve:

- user request
- assumptions
- changed files
- validation attempted
- unresolved risks or uncertainty

## Additional Resources

Use these local support files to execute the workflow consistently.

| Resource | Purpose |
| --- | --- |
| [references/coding-change-checklist.md](references/coding-change-checklist.md) | Pre-change and pre-handoff checklist |
| [references/validation-matrix.md](references/validation-matrix.md) | Maps change type to expected verification |
| [references/security-guardrails.md](references/security-guardrails.md) | Security-sensitive coding rules and escalation triggers |
| [references/troubleshooting-playbook.md](references/troubleshooting-playbook.md) | Recovery guidance for common coding-task failure modes |
| [examples/bugfix-template.md](examples/bugfix-template.md) | Prompt pattern for reproduce-first bug fixing |
| [examples/refactor-template.md](examples/refactor-template.md) | Prompt pattern for bounded refactors |
| [examples/feature-implementation-template.md](examples/feature-implementation-template.md) | Prompt pattern for small feature delivery |
| [agents/coding-guidelines-router.md](agents/coding-guidelines-router.md) | Handoff guidance for adjacent engineering workflows |

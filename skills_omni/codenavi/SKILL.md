---
name: "codenavi"
description: "CodeNavi workflow skill. Use this skill when the task requires navigating an unfamiliar existing codebase to investigate, explain, refactor, or implement with minimal blast radius. It is search-first, verification-driven, explicit about uncertainty, and maintains durable project memory in .notebook/. Do not use it for greenfield scaffolding, CI/CD authoring, infrastructure provisioning, or platform/runtime operations that need a specialized workflow."
version: "0.0.1"
category: "development"
tags:
  - "codenavi"
  - "codebase-navigation"
  - "bug-fixing"
  - "refactoring"
  - "investigation"
  - "flow-tracing"
  - "notebook"
  - "verification"
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
upstream_skill: "skills/codenavi"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# CodeNavi

## Overview

CodeNavi is a workflow for entering an unfamiliar existing repository without guessing.

It is designed for bug fixing, feature work, refactors, and flow investigation when the codebase is messy, undocumented, or simply new to the agent. The core contract is simple:

- investigate before changing
- search before reading broadly
- plan before editing
- verify every meaningful step
- record durable discoveries in `.notebook/`
- state uncertainty explicitly instead of inventing answers

This skill preserves the intent of the upstream CodeNavi workflow while making it more operational for day-to-day agent execution. It is not a generic coding style guide and it is not a router for unrelated specializations.

## When to Use This Skill

Use CodeNavi when the task is inside an existing codebase and understanding the current implementation is part of the job.

### Use it when

- A user says: "fix this", "implement this", "how does this work", "investigate this flow", or "help me with this code".
- The repository is unfamiliar and you need to identify the correct entrypoint before making changes.
- You need to trace a request, data, state, or control flow across multiple files.
- You need a minimal, surgical change instead of a broad rewrite.
- You need to explain an existing subsystem and leave behind durable notes in `.notebook/`.
- A bug fix or feature requires checking official docs before using a framework, API, or language behavior.

### Do not use it when

- The task is greenfield scaffolding with no existing repository structure to navigate.
- The main work is CI/CD pipeline authoring, release engineering, or deployment automation.
- The task is infrastructure provisioning, Terraform authoring, Kubernetes operations, or cloud resource design.
- The problem is primarily runtime/platform debugging outside the code path, such as cluster incidents, container orchestration failures, or production operations.
- The goal is a broad security audit rather than a code-level investigation tied to a specific change.

When CodeNavi discovers that the problem is really infrastructure-, runtime-, security-, or framework-specialist work, use this skill for recon and hand off deliberately.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| No context, unknown entrypoint | `references/investigation-playbook.md` | Gives a search-first recon sequence instead of broad file reading |
| `.notebook/` already exists | `references/notebook-entry-template.md` | Helps validate and extend prior project memory safely |
| No `.notebook/` exists yet | `references/notebook-entry-template.md` | Provides the minimum note structure for durable future reuse |
| Planning a code change | `examples/minimal-change-plan.md` | Keeps edits scoped and every step tied to verification |
| Bug fix work | `examples/bug-investigation-template.md` | Turns vague symptoms into a reproducible mission packet |
| Flow explanation / onboarding | `examples/flow-mapping-template.md` | Structures request/data/control-flow tracing and note capture |
| Verification is weak or unclear | `references/verification-matrix.md` | Maps task type to acceptable evidence and fallback validation |
| Task may need handoff | `references/handoff-criteria.md` | Clarifies when to continue vs route to another specialization |
| Final review before handoff | `scripts/changed_files_review.sh` | Read-only summary of changed files plus likely follow-up checks |

## Workflow

Every task follows this cycle:

```text
BRIEFING → RECON → PLAN → EXECUTE → VERIFY → DEBRIEF
```

Scale the ceremony to the mission, but do not skip the logic behind the cycle.

### 1. Briefing

Understand the mission before touching code.

1. Read `.notebook/INDEX.md` if it exists.
2. Identify the objective, success criteria, constraints, and allowed blast radius.
3. Ask for missing facts instead of filling gaps with assumptions.
4. Check what tools, skills, MCPs, tests, docs, and repository-native references are available.
5. Decide whether CodeNavi is still the correct skill or whether the task already belongs elsewhere.

Expected output:

- a one-sentence mission
- success criteria
- known constraints
- explicit unknowns

### 2. Recon

Recon must be search-first and scope-controlled.

1. Pick the closest plausible entrypoint.
   - error string
   - endpoint path
   - UI label
   - config key
   - feature flag
   - command name
   - test name
   - symbol or type name
2. Search before reading many files.
3. Read only the smallest code span needed to understand:
   - the entrypoint
   - direct callers/callees
   - nearby tests
   - repository docs/config relevant to the path
4. Trace the real flow:
   - inputs
   - transformations
   - outputs
   - side effects
   - external boundaries
5. Check `.notebook/` for relevant prior discoveries, but treat current source as truth.
6. Stop recon once you can explain the change path and produce a verifiable plan.

Recon rules:

- Do not read the entire repository.
- Prefer targeted search over sequential browsing.
- Prefer current repository docs and official docs over model memory.
- If notebook notes contradict current code, trust the code, then update the notebook.

See `references/investigation-playbook.md` for concrete search patterns and stopping rules.

### 3. Plan

Show the plan before executing non-trivial changes.

Use this minimum structure:

```text
Mission: [one sentence]
Scope: [files/modules likely involved]
Approach:
1. [step] → files: [expected files] → verify: [evidence]
2. [step] → files: [expected files] → verify: [evidence]
3. [step] → files: [expected files] → verify: [evidence]
Risks:
- [risk and containment]
Fallback:
- [rollback, narrow alternative, or explicit stop point]
```

Planning rules:

- Each step must have a verification method.
- If a step depends on uncertain framework or API behavior, verify against docs before editing.
- If the task is trivial, keep the plan proportional.
- If blast radius starts growing, stop and re-scope before editing further.

See `examples/minimal-change-plan.md`.

### 4. Execute

Implement the approved plan with surgical scope.

Execution rules:

- Touch only files justified by the mission.
- Match existing project style and conventions.
- Do not perform unrelated cleanup.
- Do not add speculative abstractions or future-proofing.
- Keep diffs easy to review.
- Prefer reversible, narrow changes.

Knowledge verification chain:

1. `.notebook/`
2. project docs: `README`, `docs/`, comments, examples, config
3. available MCP or repository-integrated documentation tools
4. official web documentation
5. if still uncertain, say so explicitly and limit claims

### 5. Verify

Verification is required, not optional decoration.

For each planned step, collect evidence such as:

- focused test results
- lint/typecheck output relevant to the change
- reproduction no longer failing
- manual path walkthrough
- diff inspection showing the intended scope only
- doc confirmation for uncertain API behavior

If automatic verification is unavailable, state:

- what you could not verify
- which environment assumptions remain unproven
- exact manual checks required
- residual risk

Use `references/verification-matrix.md`.

### 6. Debrief

Capture discoveries that would be expensive to rediscover.

Create or update `.notebook/` when:

- understanding a flow required multiple files
- a dependency or integration behaved differently than expected
- a repeated project pattern became clear
- a domain term or business rule was non-obvious
- you found a real gotcha, workaround, or verification caveat

Do not create notes for trivial facts or content already well covered by project docs.

Use `references/notebook-entry-template.md`.

## Examples

### Example 1: Bug fix in an unknown repository

```text
Use @codenavi to investigate a 500 error during coupon application. Start by searching for the endpoint, the error string, and coupon-related tests. Produce a plan with verification before editing, then update .notebook/ if the real flow or API schema differs from expectations.
```

### Example 2: Explain an existing flow without changing code

```text
Use @codenavi to map the authentication flow in this repo. Search for middleware, token verification, refresh handling, and session storage. Summarize the request path and capture durable notes in .notebook/.
```

### Example 3: Minimal change plan

```text
Mission: Fix coupon validation schema mismatch
Scope: src/services/coupon.ts, tests/coupon.test.ts
Approach:
1. Confirm actual response shape from docs and current mocks → files: docs, tests → verify: schema evidence captured
2. Update property access to the documented field name → files: src/services/coupon.ts → verify: targeted test passes
3. Correct stale mocks and search for the old field usage → files: tests/, src/services/ → verify: no remaining wrong references
Risks:
- Other code may still depend on the old field shape
Fallback:
- Stop after recon if the external contract is still uncertain
```

### Example 4: Review changed scope before handoff

```bash
bash scripts/changed_files_review.sh
```

Expected output includes:

- changed files
- nearby test candidates
- nearby docs or notebook candidates
- a reminder to review blast radius before handoff

## Best Practices

### Do

- Start from one entrypoint and expand only as needed.
- Search by symbol, string, route, config key, or failing behavior before opening many files.
- Read tests near the implementation to infer intended behavior.
- Prefer official docs and repository-native docs over memory.
- Keep plans evidence-based: each step should say how success will be checked.
- Update `.notebook/` when the investigation produced reusable knowledge.
- Trust current code over stale notes, then supersede the note.
- State uncertainty plainly when evidence is incomplete.

### Do not

- Read the whole repo because the entrypoint is unclear.
- Claim framework or API behavior from memory when docs are available.
- Expand scope into unrelated cleanup, formatting, or refactoring.
- Treat passing tests as proof when the real user flow is still unverified.
- Copy large code blocks into `.notebook/`; store pointers, evidence, and rationale instead.
- Drift into infrastructure or runtime operations once recon shows the issue is elsewhere.

### Golden rules

1. Never assume, never invent.
2. If it cost investigation, it deserves a note.
3. Pointers, not copies.
4. Surgical precision over broad improvement.
5. Verify against source, not memory.

## Troubleshooting

### Problem: Recon is getting too broad

**Symptoms:** Too many files are open, the plan is still vague, or you are reading entire directories without a clear path.

**Solution:** Stop and restate the mission in one sentence. Pick one concrete entrypoint: error text, route, command, config key, test name, or symbol. Use `references/investigation-playbook.md` and resume with search-first recon.

### Problem: The bug cannot be reproduced locally

**Symptoms:** The reported behavior is not visible in the current environment, tests do not fail, or local data differs from the report.

**Solution:** Capture the missing reproduction facts explicitly: inputs, environment, feature flags, sample payloads, and expected output. Inspect nearby tests, mocks, and config for divergence. If reproduction still fails, switch the mission from "fix now" to "narrow the failure conditions" and document the gap before editing.

### Problem: Tests pass but the real flow may still fail

**Symptoms:** Unit tests are green, but external contracts, integration points, or user-reported behavior still look wrong.

**Solution:** Verify the boundary that matters: payload shape, integration contract, routing path, migration state, feature flag, or environment assumption. Add or update a targeted test when possible. If that is not possible, provide exact manual validation steps and residual risk.

### Problem: Notebook knowledge is stale or contradictory

**Symptoms:** `.notebook/` says one thing, current code says another, or a previous note points to renamed files or outdated behavior.

**Solution:** Treat current source as the authority. Update or supersede the note, record what changed, and keep the discrepancy visible so future sessions do not repeat the mistake.

### Problem: Blast radius is increasing

**Symptoms:** The change now touches many files, unrelated modules, or conventions outside the original request.

**Solution:** Pause execution. Re-scope the plan, split the task, or ask for approval before continuing. Prefer the smallest change that solves the confirmed problem. Use `bash scripts/changed_files_review.sh` to review touched files before proceeding.

### Problem: You need current API or framework behavior before editing

**Symptoms:** You are unsure about a method signature, configuration option, browser/runtime behavior, or third-party library contract.

**Solution:** Follow the knowledge verification chain. Check local docs first, then official docs. If certainty is still incomplete, say exactly what remains uncertain and avoid coding beyond the confirmed behavior.

## Related Skills

Use these as handoff destinations after CodeNavi clarifies the real problem.

- `@debugging` — when recon shows the core work is deeper defect isolation rather than codebase navigation.
- `@testing` — when the missing piece is test design, fixture strategy, or better regression coverage.
- `@security-review` — when the change touches auth, secrets, dependency risk, container risk, or security-sensitive flows.
- `@architecture-review` — when recon reveals structural design tradeoffs that exceed a surgical implementation.
- `@documentation` — when the main deliverable becomes durable developer-facing docs rather than code changes.
- framework- or platform-specific skills — when the issue is mostly about a specialized stack rather than repository navigation.

See `references/handoff-criteria.md`.

## Additional Resources

### Local support pack

- [Investigation playbook](references/investigation-playbook.md)
- [Verification matrix](references/verification-matrix.md)
- [Notebook entry template](references/notebook-entry-template.md)
- [Handoff criteria](references/handoff-criteria.md)
- [Bug investigation template](examples/bug-investigation-template.md)
- [Flow mapping template](examples/flow-mapping-template.md)
- [Minimal change plan example](examples/minimal-change-plan.md)
- [Changed files review helper](scripts/changed_files_review.sh)

### Operating notes

#### Summon help in this order

1. Available skills
2. Relevant MCPs or integrated documentation tools
3. Official web documentation
4. Built-in repository and shell tools
5. Explicit uncertainty if evidence is still incomplete

#### Adapting to mission scale

- **Trivial:** one-line plan, narrow edit, quick verification, usually no notebook update
- **Standard:** full cycle, 3-5 planned steps, targeted verification
- **Complex:** extended recon, stronger evidence requirements, likely notebook updates
- **Exploration:** recon is the mission; flow mapping and notebook output are the deliverables

#### Consistency contract

The developer should always be able to expect that CodeNavi will:

1. read `.notebook/INDEX.md` first if it exists
2. show a plan before non-trivial edits
3. avoid presenting uncertain information as fact
4. keep changes within mission scope
5. verify against current docs instead of model memory
6. say when knowledge limits are reached
7. capture durable discoveries in `.notebook/`
8. summon help when it materially improves the result
9. match the repository's existing style
10. communicate clearly about evidence, risk, and next steps

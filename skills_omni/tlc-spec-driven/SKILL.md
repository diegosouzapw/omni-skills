---
name: "tlc-spec-driven"
description: "Tech Lead's Club - Spec-Driven Development workflow skill. Use this skill when the user needs stack-agnostic project setup, brownfield mapping, feature specification, adaptive design depth, atomic task planning, implementation with verification, and durable pause/resume state across sessions. The workflow follows four adaptive phases - Specify, Design, Tasks, Execute - plus a quick mode for very small changes. It is best for new project initialization, existing codebase mapping, feature planning, traceable implementation, and session handoff. Do not use it as a substitute for specialized architecture decomposition or standalone technical design-document authoring."
version: "0.0.1"
category: "product"
tags:
  - "tlc-spec-driven"
  - "spec-driven-development"
  - "planning"
  - "feature-specification"
  - "task-breakdown"
  - "brownfield-mapping"
  - "traceability"
  - "session-handoff"
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
upstream_skill: "skills/tlc-spec-driven"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Tech Lead's Club - Spec-Driven Development

## Overview

This skill packages the Tech Lead's Club spec-driven workflow into a reusable execution kit for agents and operators.

Use it to run work through four adaptive phases:

1. **Specify** - define intent, scope, constraints, and acceptance criteria
2. **Design** - document implementation approach when the change is not obvious
3. **Tasks** - break work into atomic, independently verifiable units
4. **Execute** - implement, verify, and record outcomes

The workflow is intentionally adaptive rather than bureaucratic. Small changes can use quick mode. Medium work can keep design and tasks inline. Large or ambiguous work should produce fuller artifacts with requirement IDs, explicit dependencies, and stronger validation evidence.

This skill also preserves durable working memory through `.specs/project/STATE.md`, supports brownfield discovery, and emphasizes requirement traceability from spec → task → verification → commit.

It is derived from the upstream Tech Lead's Club workflow and keeps that operating model visible instead of hiding provenance.

## When to Use This Skill

### Use this skill when

- You are **starting a new project** and need `PROJECT.md`, `ROADMAP.md`, and an initial delivery structure.
- You are working in an **existing codebase** and need structured brownfield mapping before planning features.
- You need to **specify a feature** with clear requirements and acceptance criteria before implementation.
- You need to **design only as much as necessary**, based on actual complexity.
- You need to create **atomic implementation tasks** with explicit verification criteria.
- You need to **implement work incrementally** with reviewable commits and evidence.
- You need to **pause and resume work safely** across sessions without losing key decisions, blockers, or next steps.
- The request includes triggers like: `initialize project`, `map codebase`, `specify feature`, `discuss feature`, `design`, `tasks`, `implement`, `validate`, `verify work`, `UAT`, `quick fix`, `quick task`, `pause work`, or `resume work`.

### Do not use this skill when

- The main need is **architecture decomposition analysis** across multiple candidate system boundaries.
- The main output should be a **standalone formal technical design document** rather than an execution workflow.
- The task is pure **debugging triage** with no planning or delivery artifacts needed.
- The task is primarily **release orchestration**, deployment governance, or incident management.
- The task is just broad codebase exploration and another specialized exploration skill is better suited.

### Escalate or hand off when

- The work expands from feature planning into major architectural restructuring.
- Hidden dependencies make the original sizing clearly wrong.
- Validation requires domain-specific security, performance, accessibility, or release expertise not covered here.
- The user asks for diagrams, deep code exploration, or specialized docs and a more targeted skill is available.

## Project Structure

```text
.specs/
├── project/
│   ├── PROJECT.md      # Vision, goals, constraints
│   ├── ROADMAP.md      # Features, milestones, sequencing
│   └── STATE.md        # Decisions, blockers, assumptions, deferred items, resume point
├── codebase/           # Brownfield analysis for existing repositories
│   ├── STACK.md
│   ├── ARCHITECTURE.md
│   ├── CONVENTIONS.md
│   ├── STRUCTURE.md
│   ├── TESTING.md
│   ├── INTEGRATIONS.md
│   └── CONCERNS.md
├── features/
│   └── [feature]/
│       ├── spec.md     # Requirements and acceptance criteria
│       ├── context.md  # User decisions for gray areas, only when needed
│       ├── design.md   # Design for large/complex work
│       └── tasks.md    # Atomic, verifiable tasks for large/complex work
└── quick/
    └── NNN-slug/
        ├── TASK.md
        └── SUMMARY.md
```

## Operating Table

| Mode | Typical shape | Required artifacts | Optional artifacts | Validation expectation | Delegate to sub-agents? |
| --- | --- | --- | --- | --- | --- |
| Quick | ≤3 files, one-sentence scope, low ambiguity | `quick/.../TASK.md`, `SUMMARY.md` | none | narrow verification, usually targeted tests or manual proof | Usually no |
| Medium | Clear feature, limited surface area, <10 likely tasks | brief `spec.md` or inline spec | inline design notes | requirement-level verification | Sometimes |
| Large | Multi-component feature or non-trivial dependency chain | `spec.md`, `design.md`, `tasks.md` | `context.md`, decision log entry | task-level verification plus feature summary | Yes |
| Complex | Ambiguous problem, new domain, risky integration, user-facing behavior | full `spec.md`, `context.md`, `design.md`, `tasks.md` | ADR-style decisions, rollout notes | layered verification plus interactive/manual evidence | Yes |
| Brownfield discovery | Existing codebase with incomplete context | 7 codebase docs under `.specs/codebase/` | concern/risk notes in `STATE.md` | evidence-backed repo mapping | Yes for research-heavy discovery |

### Auto-sizing rules

- **Specify** and **Execute** are always required.
- **Design** is required when architecture, data flow, interfaces, or reuse decisions are non-obvious.
- **Tasks** are required when the work cannot be completed safely as a few obvious steps.
- **Discuss / `context.md`** is required when ambiguity needs user decisions.
- **Quick mode** is only appropriate when the scope remains clearly small.

### Wrong-size escape hatch

If execution reveals any of the following, stop and rescope upward:

- more files or components than expected
- hidden integration points
- multiple competing implementation approaches
- verification uncertainty
- more than ~5 meaningful execution steps

When that happens, reopen **Design** or **Tasks** before continuing. Do not improvise a large change inside quick mode.

## Workflow

### 1. Entry check

Before producing artifacts or modifying code:

1. Confirm the user goal.
2. Confirm this skill is the right routing choice.
3. Determine whether this is **new project**, **brownfield**, **feature planning**, **implementation**, **quick task**, or **resume**.
4. Load only the minimum relevant context.

If the task is out of scope, hand off early instead of forcing the workflow.

### 2. New project path

1. Create `.specs/project/PROJECT.md` using the project template.
2. Create `.specs/project/ROADMAP.md` with initial milestones or feature groups.
3. Create `.specs/project/STATE.md` to track assumptions, open questions, and next steps.
4. For each feature, run the adaptive feature workflow below.

### 3. Existing codebase path

1. Map the codebase into the 7 brownfield documents.
2. Capture risks, missing knowledge, and notable conventions.
3. Initialize or refresh `PROJECT.md`, `ROADMAP.md`, and `STATE.md` if needed.
4. Run the adaptive feature workflow only after repo understanding is adequate.

### 4. Adaptive feature workflow

#### Phase A - Specify

**Inputs**
- user request
- relevant project state
- brownfield docs if the repo already exists

**Actions**
- define feature intent, scope, non-goals, and constraints
- write acceptance criteria
- assign requirement IDs for large/complex work
- open `context.md` when gray areas require user decisions

**Outputs**
- brief or full `spec.md`
- optional `context.md`

**Exit criteria**
- scope is understandable
- acceptance criteria are testable
- unknowns are either resolved or explicitly marked

#### Phase B - Design

**Inputs**
- approved or working spec
- codebase patterns and constraints

**Actions**
- select implementation approach
- identify components, interfaces, dependencies, and reuse
- record meaningful tradeoffs
- create an ADR-style note for major decisions when warranted

**Outputs**
- inline design note or `design.md`
- optional decision entry

**Exit criteria**
- implementation approach is clear enough to execute safely
- major tradeoffs are visible
- unresolved design uncertainty is explicit

#### Phase C - Tasks

**Inputs**
- spec and design

**Actions**
- decompose work into atomic tasks
- capture dependencies and opportunities for parallel work
- define `done when` and `how verified` for each task
- ensure each task is small enough to commit cleanly

**Outputs**
- inline task list or `tasks.md`

**Exit criteria**
- each task is independently executable and verifiable
- task order is clear
- task granularity supports reviewable commits

#### Phase D - Execute

**Inputs**
- spec, design, tasks, relevant repo context

**Actions**
- implement one atomic task at a time
- verify the task using the declared evidence type
- record any deviations from spec
- update state and artifacts when reality changes
- commit one logical change per task or tightly coupled task pair when the environment calls for git hygiene

**Outputs**
- code changes
- validation evidence
- updated tasks/state/summary artifacts

**Exit criteria**
- requirements are satisfied or deviations are documented
- evidence exists for claimed completion
- next steps or handoff are clear

### 5. Quick mode

Use quick mode only for very small, low-ambiguity changes.

Flow:
1. Write one-sentence scope.
2. List atomic steps inline.
3. Implement the change.
4. Verify narrowly but explicitly.
5. Record summary and commit cleanly.

If the inline step list becomes larger than expected, stop and switch to the full workflow.

### 6. Pause and resume

Before pausing:

1. Update `STATE.md` using the handoff checklist.
2. Record decisions, blockers, assumptions, deferred ideas, and exact next resume point.
3. Note any validation gaps or repo-state concerns.

When resuming:

1. Read `STATE.md` first.
2. Confirm it still matches the repository.
3. Reopen the relevant spec/design/tasks only for the active feature.
4. If the repo drifted, reconcile before continuing.

See [references/session-handoff-checklist.md](references/session-handoff-checklist.md).

## Context Management

Use bounded context intentionally.

### Base load

Load these first when they exist:

- `PROJECT.md`
- `ROADMAP.md` when planning feature work
- `STATE.md`

### On-demand load

Load only what is needed for the current task:

- codebase docs for brownfield work
- `CONCERNS.md` for risky areas
- `TESTING.md` when defining or running verification
- the active feature's `spec.md`, `context.md`, `design.md`, and `tasks.md`

### Avoid loading together

Do not load simultaneously unless truly necessary:

- multiple feature specs
- multiple architecture documents
- archived or obsolete planning files

### Operating policy

- The orchestrating agent **must** keep active context focused on the current feature.
- The orchestrating agent **should** summarize before continuing when the working set becomes noisy or contradictory.
- Sub-agents **should** return summaries and evidence, not raw logs, unless detailed logs are needed for troubleshooting.
- If context becomes inconsistent, stop and reconcile artifacts before executing more changes.

## Sub-agent Delegation

Use sub-agents or equivalent task tools to keep orchestration lean.

### Good delegation targets

- brownfield research
- design research
- implementation of a single atomic task
- parallelizable tasks with clear boundaries

### Do not delegate

- final task planning
- cross-task coherence decisions
- final validation summary
- state reconciliation
- quick mode changes where delegation overhead is larger than the task

### Minimum context for a delegated task

Provide the sub-agent with:

- the exact task definition
- relevant coding conventions
- relevant testing guidance
- the specific spec or design excerpt it depends on

### Expected sub-agent return format

- `Status`: Complete | Partial | Blocked
- `Files changed`: list
- `Verification`: pass/fail plus concise evidence
- `Spec deviations`: explicit if any
- `Issues`: blockers or follow-ups

## Traceability and Validation

Traceability is a core feature of this workflow, not optional polish.

### Requirement traceability

For large or complex work, assign requirement IDs such as `REQ-1`, `REQ-2` and carry them through:

- `spec.md` requirements
- `tasks.md` task references
- validation evidence
- summary notes
- commit messages when practical

See [references/traceability.md](references/traceability.md).

### Validation selection

Choose the lightest evidence that credibly proves the change:

- **Unit tests** for isolated logic
- **Integration tests** for component interaction, contracts, persistence, or external boundaries
- **Manual verification** for UI copy, local flows, or operational checks
- **Interactive/UAT evidence** for user-facing behavior where workflow correctness matters

Every task should answer:

- **Done when:** what completion means
- **How verified:** how completion will be checked

See [references/validation-evidence.md](references/validation-evidence.md).

## Examples

### Example 1: Quick mode bug fix

```text
Use @tlc-spec-driven in quick mode for a small config fix. Keep scope to one sentence, list atomic steps inline, verify the exact behavior change, and produce a short summary.
```

See [examples/quick-mode-example.md](examples/quick-mode-example.md).

### Example 2: Medium feature

```text
Use @tlc-spec-driven to add a filter to the orders page. Create a brief spec with acceptance criteria, keep design inline unless repo patterns are unclear, then implement and verify against the criteria.
```

See [examples/medium-feature-example.md](examples/medium-feature-example.md).

### Example 3: Large feature with traceability

```text
Use @tlc-spec-driven to plan and implement role-based access for project settings. Create spec.md with requirement IDs, design.md for authorization flow, tasks.md with atomic tasks and verification, then execute task by task with traceable evidence.
```

See [examples/large-feature-example.md](examples/large-feature-example.md).

### Example 4: Brownfield mapping before planning

```text
Use @tlc-spec-driven to map this existing repository first. Produce the seven codebase docs, highlight risky integrations and testing conventions, then recommend the right sizing for the requested feature.
```

See [examples/brownfield-mapping-example.md](examples/brownfield-mapping-example.md).

## Best Practices

### Do

- Start with the smallest artifact set that still makes the work safe.
- Keep **Specify** and **Execute** mandatory.
- Reopen **Design** or **Tasks** if hidden complexity appears.
- Use requirement IDs for large and complex work.
- Keep tasks atomic enough to verify and commit independently.
- Record meaningful decisions in `STATE.md` or an ADR-style note.
- Keep session handoff current before ending work.
- Verify claims with evidence appropriate to the change type.
- Prefer existing repo patterns before inventing new ones.
- Be explicit about uncertainty rather than guessing.

### Don't

- Force all four phases onto a trivial change.
- Stay in quick mode once the task stops being small.
- Start implementation without testable intent.
- Hide ambiguities instead of opening `context.md` or asking the user.
- Mix unrelated refactors, behavior changes, and formatting churn in one commit.
- Claim completion without verification evidence.
- Load every planning artifact into context at once.
- Continue after resume if `STATE.md` and repo reality disagree.

### Commit hygiene

When git commits are part of the workflow:

- Prefer one logical change per task or tightly coupled task pair.
- Reference task IDs or requirement IDs when helpful.
- Keep messages concise and reviewable.
- If the repository already has a commit convention, follow it.
- If not, a Conventional Commits style is a reasonable default, not a requirement.

Example sequence for a larger feature:

1. `feat(auth): add settings permission guard [REQ-2]`
2. `test(auth): add integration coverage for denied access [REQ-2]`
3. `feat(ui): hide settings controls for unauthorized users [REQ-3]`

## Troubleshooting

### Problem: Requirements became ambiguous during execution

**Symptoms:** Implementation started, but the agent finds multiple valid behaviors, contradictory examples, or missing acceptance criteria.

**Likely causes:** The Specify phase was too thin, or hidden gray areas were not surfaced early.

**Immediate containment:** Stop coding, open or update `context.md`, and ask for the smallest missing decision needed to proceed.

**Long-term fix:** Strengthen `spec.md` with explicit acceptance criteria and exclusions before resuming execution.

### Problem: The task breakdown is too coarse

**Symptoms:** A single task touches many files, contains multiple behavior changes, or cannot be verified in one pass.

**Likely causes:** Tasks were skipped too aggressively, or a large change was treated like medium work.

**Immediate containment:** Split the task into smaller units with explicit `done when` and `how verified` fields.

**Long-term fix:** Use `tasks.md` for any work that cannot produce clean, reviewable commits.

### Problem: Tests fail, but the spec does not say which behavior is correct

**Symptoms:** Existing tests conflict with the planned change, or new tests expose uncertainty that the spec did not resolve.

**Likely causes:** Brownfield behavior was not mapped well enough, or acceptance criteria were underspecified.

**Immediate containment:** Compare current behavior, existing tests, and user intent. Mark the unresolved point explicitly instead of silently changing expectations.

**Long-term fix:** Update `spec.md` and, if needed, `design.md` so future execution has a source of truth.

### Problem: Resumed session state contradicts the current repository

**Symptoms:** `STATE.md` says a task is complete, but the files or tests do not match; branches, commits, or local changes differ from the recorded state.

**Likely causes:** Work happened outside the documented workflow, or the repository changed between sessions.

**Immediate containment:** Reconcile repo reality first. Update `STATE.md`, tasks, and summaries before making new edits.

**Long-term fix:** Always run the pause/resume checklist and record the exact next resume point.

### Problem: Brownfield mapping missed a critical integration point

**Symptoms:** A supposedly isolated change breaks another service, environment dependency, contract, or side effect.

**Likely causes:** `INTEGRATIONS.md` or `CONCERNS.md` was incomplete, or code exploration stayed too shallow.

**Immediate containment:** Pause implementation, extend the brownfield docs for the affected boundary, and rescope the feature.

**Long-term fix:** Treat integration discovery as mandatory for existing systems, especially before large or risky changes.

### Problem: Context overload or contradictory planning artifacts

**Symptoms:** The agent starts mixing multiple feature scopes, repeats stale decisions, or cannot tell which artifact is current.

**Likely causes:** Too many documents were loaded together, or old planning files were not clearly superseded.

**Immediate containment:** Reduce the active context to the current feature and summarize the current source of truth.

**Long-term fix:** Keep one active feature packet at a time and mark superseded notes clearly in state or summaries.

## Related Skills

Use adjacent skills when this workflow reaches their boundary:

- **Architecture-focused skills**: when the work becomes system decomposition or major boundary redesign.
- **Technical design document skills**: when the primary deliverable is a formal design doc rather than execution workflow artifacts.
- **Code exploration skills such as `codenavi`**: for deeper repository discovery during brownfield mapping.
- **Diagram skills such as `mermaid-studio`**: when diagrams need to be produced or rendered.
- **Validation, testing, security, accessibility, or release-specialist skills**: when deeper domain-specific review is required.

## Additional Resources

### Workflow references

- [Workflow gates](references/workflow-gates.md)
- [Traceability guide](references/traceability.md)
- [Validation evidence guide](references/validation-evidence.md)
- [Decision log pattern](references/decision-log-pattern.md)
- [Session handoff checklist](references/session-handoff-checklist.md)

### Templates and reusable artifacts

- [Spec template](references/spec-template.md)
- [Tasks template](references/tasks-template.md)
- [State template](references/state-template.md)
- [ADR template](references/adr-template.md)

### Worked examples

- [Quick mode example](examples/quick-mode-example.md)
- [Medium feature example](examples/medium-feature-example.md)
- [Large feature example](examples/large-feature-example.md)
- [Brownfield mapping example](examples/brownfield-mapping-example.md)

### Existing packaged references from the imported workflow

- `references/project-init.md`
- `references/roadmap.md`
- `references/brownfield-mapping.md`
- `references/concerns.md`
- `references/state-management.md`
- `references/session-handoff.md`
- `references/specify.md`
- `references/discuss.md`
- `references/design.md`
- `references/tasks.md`
- `references/implement.md`
- `references/validate.md`
- `references/quick-mode.md`
- `references/code-analysis.md`
- `references/context-limits.md`

## Operational Notes Preserved from Upstream

### Knowledge verification chain

When researching, designing, or making a technical decision, verify in this order:

1. Codebase
2. Project docs
3. Current library or platform docs
4. Official web documentation and reputable sources
5. Explicitly mark uncertainty if verification is still incomplete

Do not fabricate APIs, patterns, or behavior. If you cannot verify something, say so plainly.

### Skill integrations

- If diagram work is needed and `mermaid-studio` is available, prefer it.
- If brownfield exploration is needed and `codenavi` is available, prefer it.
- If those skills are unavailable, continue with built-in analysis and keep outputs lightweight.

### Output behavior

Be conversational and practical. Do not interrupt the workflow with meta commentary. For lightweight tasks, it is acceptable to note once that faster models can often handle them well; avoid repeating the tip.

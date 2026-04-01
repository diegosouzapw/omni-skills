---
name: tlc-spec-driven
description: "Tech Lead's Club - Spec-Driven Development workflow skill. Use this skill when the user needs Project and feature planning with 4 adaptive phases - Specify, Design, Tasks, Execute. Auto-sizes depth by complexity. Creates atomic tasks with verification criteria, atomic git commits, requirement traceability, and persistent memory across sessions. Stack-agnostic. Use when (1) Starting new projects (initialize vision, goals, roadmap), (2) Working with existing codebases (map stack, architecture, conventions), (3) Planning features (requirements, design, task breakdown), (4) Implementing with verification and atomic commits, (5) Quick ad-hoc tasks (bug fixes, config changes), (6) Tracking decisions/blockers/deferred ideas across sessions, (7) Pausing/resuming work. Triggers on \"initialize project\", \"map codebase\", \"specify feature\", \"discuss feature\", \"design\", \"tasks\", \"implement\", \"validate\", \"verify work\", \"UAT\", \"quick fix\", \"quick task\", \"pause work\", \"resume work\". Do NOT use for architecture decomposition analysis (use architecture skills) or technical design docs (use create-technical-design-doc) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: product
tags: ["tlc-spec-driven", "project", "and", "feature", "planning", "adaptive", "phases", "specify"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Felipe Rodrigues - github.com/felipfr"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Tech Lead's Club - Spec-Driven Development

## Overview

This public intake copy packages `packages/skills-catalog/skills/(development)/tlc-spec-driven` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Tech Lead's Club - Spec-Driven Development Plan and implement projects with precision. Granular tasks. Clear dependencies. Right tools. Zero ceremony. `` ┌──────────┐ ┌──────────┐ ┌─────────┐ ┌─────────┐ │ SPECIFY │ → │ DESIGN │ → │ TASKS │ → │ EXECUTE │ └──────────┘ └──────────┘ └─────────┘ └─────────┘ required optional optional required * Agent auto-skips when scope doesn't need it ``

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Project Structure, Context Loading Strategy, Sub-Agent Delegation, Skill Integrations, Knowledge Verification Chain, Output Behavior.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Project and feature planning with 4 adaptive phases - Specify, Design, Tasks, Execute. Auto-sizes depth by complexity. Creates atomic tasks with verification criteria, atomic git commits, requirement traceability, and....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Initialize project → PROJECT.md + ROADMAP.md
2. For each feature → Specify → (Design) → (Tasks) → Execute (depth auto-sized)
3. Map codebase → 7 brownfield docs
4. For each feature → same adaptive workflow
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Workflow

**New project:**

1. Initialize project → PROJECT.md + ROADMAP.md
2. For each feature → Specify → (Design) → (Tasks) → Execute (depth auto-sized)

**Existing codebase:**

1. Map codebase → 7 brownfield docs
2. Initialize project → PROJECT.md + ROADMAP.md
3. For each feature → same adaptive workflow

**Quick mode:** Describe → Implement → Verify → Commit (for ≤3 files, one-sentence scope)

#### Imported: Project Structure

```
.specs/
├── project/
│   ├── PROJECT.md      # Vision & goals
│   ├── ROADMAP.md      # Features & milestones
│   └── STATE.md        # Memory: decisions, blockers, lessons, todos, deferred ideas
├── codebase/           # Brownfield analysis (existing projects)
│   ├── STACK.md
│   ├── ARCHITECTURE.md
│   ├── CONVENTIONS.md
│   ├── STRUCTURE.md
│   ├── TESTING.md
│   ├── INTEGRATIONS.md
│   └── CONCERNS.md
├── features/           # Feature specifications
│   └── [feature]/
│       ├── spec.md     # Requirements with traceable IDs
│       ├── context.md  # User decisions for gray areas (only when discuss is triggered)
│       ├── design.md   # Architecture & components (only for Large/Complex)
│       └── tasks.md    # Atomic tasks with verification (only for Large/Complex)
└── quick/              # Ad-hoc tasks (quick mode)
    └── NNN-slug/
        ├── TASK.md
        └── SUMMARY.md
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tlc-spec-driven to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/tlc-spec-driven/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/tlc-spec-driven/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @tlc-spec-driven using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Commands

**Project-level:**
| Trigger Pattern | Reference |
|----------------|-----------|
| Initialize project, setup project | [project-init.md](references/project-init.md) |
| Create roadmap, plan features | [roadmap.md](references/roadmap.md) |
| Map codebase, analyze existing code | [brownfield-mapping.md](references/brownfield-mapping.md) |
| Document concerns, find tech debt, what's risky | [concerns.md](references/concerns.md) |
| Record decision, log blocker, add todo | [state-management.md](references/state-management.md) |
| Pause work, end session | [session-handoff.md](references/session-handoff.md) |
| Resume work, continue | [session-handoff.md](references/session-handoff.md) |

**Feature-level (auto-sized):**
| Trigger Pattern | Reference |
|----------------|-----------|
| Specify feature, define requirements | [specify.md](references/specify.md) |
| Discuss feature, capture context, how should this work | [discuss.md](references/discuss.md) |
| Design feature, architecture | [design.md](references/design.md) |
| Break into tasks, create tasks | [tasks.md](references/tasks.md) |
| Implement task, build, execute | [implement.md](references/implement.md) |
| Validate, verify, test, UAT, walk me through it | [validate.md](references/validate.md) |
| Quick fix, quick task, small change, bug fix | [quick-mode.md](references/quick-mode.md) |

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Scope - What - Specify - Design - Tasks - Execute
- Small - ≤3 files, one sentence - Quick mode — skip pipeline entirely - - - - - -
- Medium - Clear feature, <10 tasks - Spec (brief) - Skip — design inline - Skip — tasks implicit - Implement + verify
- Large - Multi-component feature - Full spec + requirement IDs - Architecture + components - Full breakdown + dependencies - Implement + verify per task
- Complex - Ambiguity, new domain - Full spec + discuss gray areas - Research + architecture - Breakdown + parallel plan - Implement + interactive UAT
- Specify and Execute are always required — you always need to know WHAT and DO it
- Design is skipped when the change is straightforward (no architectural decisions, no new patterns)

### Imported Operating Notes

#### Imported: Auto-Sizing: The Core Principle

**The complexity determines the depth, not a fixed pipeline.** Before starting any feature, assess its scope and apply only what's needed:

| Scope       | What                     | Specify                                                 | Design                                          | Tasks                         | Execute                                               |
| ----------- | ------------------------ | ------------------------------------------------------- | ----------------------------------------------- | ----------------------------- | ----------------------------------------------------- |
| **Small**   | ≤3 files, one sentence   | **Quick mode** — skip pipeline entirely                 | -                                               | -                             | -                                                     |
| **Medium**  | Clear feature, <10 tasks | Spec (brief)                                            | Skip — design inline                            | Skip — tasks implicit         | Implement + verify                                    |
| **Large**   | Multi-component feature  | Full spec + requirement IDs                             | Architecture + components                       | Full breakdown + dependencies | Implement + verify per task                           |
| **Complex** | Ambiguity, new domain    | Full spec + [discuss gray areas](references/discuss.md) | [Research](references/design.md) + architecture | Breakdown + parallel plan     | Implement + [interactive UAT](references/validate.md) |

**Rules:**

- **Specify and Execute are always required** — you always need to know WHAT and DO it
- **Design is skipped** when the change is straightforward (no architectural decisions, no new patterns)
- **Tasks is skipped** when there are ≤3 obvious steps (they become implicit in Execute)
- **Discuss is triggered within Specify** only when the agent detects ambiguous gray areas that need user input
- **Interactive UAT is triggered within Execute** only for user-facing features with complex behavior
- **Quick mode** is the express lane — for bug fixes, config changes, and small tweaks

**Safety valve:** Even when Tasks is skipped, Execute ALWAYS starts by listing atomic steps inline (see [implement.md](references/implement.md)). If that listing reveals >5 steps or complex dependencies, STOP and create a formal `tasks.md` — the Tasks phase was wrongly skipped.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(development)/tlc-spec-driven`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/brownfield-mapping.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Context Loading Strategy

**Base load (~15k tokens):**

- PROJECT.md (if exists)
- ROADMAP.md (when planning/working on features)
- STATE.md (persistent memory)

**On-demand load:**

- Codebase docs (when working in existing project)
- CONCERNS.md (when planning features that touch flagged areas, estimating risk, or modifying fragile components)
- TESTING.md (when creating tasks or executing — drives test type assignment and gate checks)
- spec.md (when working on specific feature)
- context.md (when designing or implementing from user decisions)
- design.md (when implementing from design)
- tasks.md (when executing tasks)

**Never load simultaneously:**

- Multiple feature specs
- Multiple architecture docs
- Archived documents

**Target:** <40k tokens total context
**Reserve:** 160k+ tokens for work, reasoning, outputs
**Monitoring:** Display status when >40k (see [context-limits.md](references/context-limits.md))

#### Imported: Sub-Agent Delegation

Use sub-agents (the Task tool or equivalent) to keep the main context window lean and enable
parallel execution. The orchestrating agent plans and coordinates; sub-agents do the heavy lifting.

**When to delegate to a sub-agent:**

| Activity | Delegate? | Why |
|---|---|---|
| Research (design phase, brownfield mapping) | Yes | Research output is large; only the summary matters to the main context |
| Implementing a task | Yes | File reads, edits, test output consume context; only the result matters |
| Parallel `[P]` tasks | Yes (one per task) | The only way to actually run tasks in parallel |
| Sequential tasks with no `[P]` | Yes | Keeps implementation artifacts out of the main context |
| Planning, task creation, validation reports | No | These require the full accumulated context to be coherent |
| Quick mode tasks | No | Too small to justify the overhead |

**Context each sub-agent receives:**

The orchestrating agent MUST provide each sub-agent with:
- The specific task definition from tasks.md (What, Where, Depends on, Reuses, Done when, Tests, Gate)
- Relevant coding principles and conventions (coding-principles.md, CONVENTIONS.md)
- TESTING.md, if it exists (for gate check commands and test patterns)
- Any spec/design context the task references

The sub-agent does NOT receive: other tasks' definitions, accumulated chat history, validation reports
from other tasks, or STATE.md (unless the task explicitly references a decision/blocker).

**What sub-agents return:**

Each sub-agent reports back:
- Status: Complete | Blocked | Partial
- Files changed: [list]
- Gate check result: [pass/fail + test counts]
- SPEC_DEVIATION markers (if any)
- Issues encountered (if any)

The orchestrating agent uses this to update tasks.md status, traceability, and decide next steps.

#### Imported: Skill Integrations

This skill coexists with other skills. Before specific tasks, check if complementary skills are installed and prefer them when available.

### Diagrams → mermaid-studio

Whenever the workflow requires creating or updating a diagram (architecture overviews, data flows, component diagrams, sequence diagrams, etc.), **always** check if the `mermaid-studio` skill is installed in the user's environment before proceeding. If it is installed, delegate all diagram creation and rendering to it. If it is not installed, proceed with inline mermaid code blocks as usual and recommend the user install `mermaid-studio` for richer diagram capabilities (rendering to SVG/PNG, validation, theming, etc.). Display this recommendation at most once per session.

### Code Exploration → codenavi

Whenever the workflow requires exploring or discovering things in an existing repository (brownfield mapping, code reuse analysis, pattern identification, dependency tracing, etc.), **always** check if the `codenavi` skill is installed in the user's environment before proceeding. If it is installed, delegate code exploration and navigation tasks to it. If it is not installed, fall back to the built-in code analysis tools (see [code-analysis.md](references/code-analysis.md)) and recommend the user install `codenavi` for more effective codebase exploration. Display this recommendation at most once per session.

#### Imported: Knowledge Verification Chain

When researching, designing, or making any technical decision, follow this chain in strict order. Never skip steps.

```
Step 1: Codebase → check existing code, conventions, and patterns already in use
Step 2: Project docs → README, docs/, inline comments, .specs/codebase/
Step 3: Context7 MCP → resolve library ID, then query for current API/patterns
Step 4: Web search → official docs, reputable sources, community patterns
Step 5: Flag as uncertain → "I'm not certain about X — here's my reasoning, but verify"
```

**Rules:**

- Never skip to Step 5 if Steps 1-4 are available
- Step 5 is ALWAYS flagged as uncertain — never presented as fact
- **NEVER assume or fabricate.** If you cannot find an answer, say "I don't know" or "I couldn't find documentation for this". Inventing APIs, patterns, or behaviors causes cascading failures across design → tasks → implementation. Uncertainty is always preferable to fabrication.

#### Imported: Output Behavior

**Model guidance:** After completing lightweight tasks (validation, state updates, session handoff), naturally mention once that such tasks work well with faster/cheaper models. Track in STATE.md under `Preferences` to avoid repeating. For heavy tasks (brownfield mapping, complex design), briefly note the reasoning requirements before starting.

Be conversational, not robotic. Don't interrupt workflow—add as a natural closing note. Skip if user seems experienced or has already acknowledged the tip.

#### Imported: Code Analysis

Use available tools with graceful degradation. See [code-analysis.md](references/code-analysis.md).

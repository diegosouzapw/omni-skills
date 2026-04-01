---
name: legacy-migration-planner
description: "Legacy Migration Planner workflow skill. Use this skill when the user needs planning legacy system migrations, codebase modernization, monolith decomposition, microservices consolidation, cross-language rewrites, or framework upgrades. Invoke for strangler fig pattern, incremental migration strategy, or refactoring roadmaps. Do NOT use for domain analysis (use domain-analysis), component sizing (use component-identification-sizing), or step-by-step decomposition plans (use decomposition-planning-roadmap) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["legacy-migration-planner", "planning", "legacy", "system", "migrations", "codebase", "modernization", "monolith"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Felipe Rodrigues - github.com/felipfr"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Legacy Migration Planner

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/legacy-migration-planner` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Legacy Migration Planner Senior migration architect that produces comprehensive, evidence-based migration plans using the Strangler Fig pattern. You create plans — you do not implement them. Other agents or developers execute the plan you produce.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Structure, Constraints.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: planning legacy system migrations, codebase modernization, monolith decomposition, microservices consolidation, cross-language rewrites, or framework upgrades. Invoke for strangler fig pattern, incremental migration....
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

1. Analyze the codebase — Read the project structure, entry points, configuration files, and dependencies. Map every module and its responsibility. Cite every finding as file:line.
2. Identify bounded contexts — Group related modules into candidate domains. Load references/assessment-framework.md for the domain identification method.
3. Research current and target stacks — Use web search and context7 to gather up-to-date documentation on both the current stack and the target stack (if migrating cross-framework/language). Document version compatibility, migration guides, and known pitfalls.
4. Map risks and dependencies — Identify integration points, shared databases, circular dependencies, and external service couplings. Load references/assessment-framework.md for the risk matrix method.
5. Define migration direction — Based on RESEARCH findings, determine the appropriate strategy. Load references/strangler-fig-patterns.md for pattern selection.
6. Design seams and facades — Identify where to cut the system. Define the facade/router layer that will enable incremental migration. Load references/frontend-backend-strategies.md for stack-specific patterns.
7. Write per-domain migration plans — One file per bounded context in ./migration-plan/domains/. Each file contains: current state (with file:line refs), target state, migration steps, testing strategy (load references/testing-safety-nets.md), rollback plan, and success metrics.

### Imported Workflow Notes

#### Imported: Workflow

Every engagement follows two mandatory phases. Never skip RESEARCH. Never start PLAN without completing RESEARCH.

```
RESEARCH (mandatory)                    PLAN (mandatory)
├─ 1. Codebase deep analysis            ├─ 5. Define migration direction
├─ 2. Domain/bounded context mapping    ├─ 6. Design seams and facades
├─ 3. Stack research (web + context7)   ├─ 7. Per-domain migration files
└─ 4. Risk and dependency mapping       └─ 8. Consolidated roadmap
│                                        │
└─ Output: ./migration-plan/research/   └─ Output: ./migration-plan/domains/
```

### RESEARCH Phase

Load `references/research-phase.md` for detailed instructions.

1. **Analyze the codebase** — Read the project structure, entry points, configuration files, and dependencies. Map every module and its responsibility. Cite every finding as `file:line`.
2. **Identify bounded contexts** — Group related modules into candidate domains. Load `references/assessment-framework.md` for the domain identification method.
3. **Research current and target stacks** — Use web search and context7 to gather up-to-date documentation on both the current stack and the target stack (if migrating cross-framework/language). Document version compatibility, migration guides, and known pitfalls.
4. **Map risks and dependencies** — Identify integration points, shared databases, circular dependencies, and external service couplings. Load `references/assessment-framework.md` for the risk matrix method.

Output: Write findings to `./migration-plan/research/` with one file per concern (e.g., `dependency-map.md`, `domain-candidates.md`, `stack-research.md`, `risk-assessment.md`).

### PLAN Phase

Load `references/plan-phase.md` for detailed instructions.

5. **Define migration direction** — Based on RESEARCH findings, determine the appropriate strategy. Load `references/strangler-fig-patterns.md` for pattern selection.
6. **Design seams and facades** — Identify where to cut the system. Define the facade/router layer that will enable incremental migration. Load `references/frontend-backend-strategies.md` for stack-specific patterns.
7. **Write per-domain migration plans** — One file per bounded context in `./migration-plan/domains/`. Each file contains: current state (with file:line refs), target state, migration steps, testing strategy (load `references/testing-safety-nets.md`), rollback plan, and success metrics.
8. **Write consolidated roadmap** — `./migration-plan/00-roadmap.md` with phase sequencing, dependencies between domains, risk mitigation timeline, and success criteria.

#### Imported: Output Structure

```
./migration-plan/
├── 00-roadmap.md                    # Consolidated roadmap, phases, timeline
├── research/
│   ├── dependency-map.md            # Module dependencies with file:line refs
│   ├── domain-candidates.md         # Identified bounded contexts
│   ├── stack-research.md            # Current + target stack analysis
│   └── risk-assessment.md           # Risk matrix with mitigations
└── domains/
    ├── 01-domain-{name}.md          # Per-domain migration plan
    ├── 02-domain-{name}.md
    └── ...
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @legacy-migration-planner to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/legacy-migration-planner/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/legacy-migration-planner/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @legacy-migration-planner using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Never assume. If you encounter an acronym, term, pattern, or technology you are not 100% certain about, stop and either research it (web search, context7) or ask the user. Say "I don't know what X means — can you clarify?" rather than guessing.
- Always cite evidence. Every claim in your output must reference either a specific file:line from the user's codebase or a verified external URL. No unreferenced assertions.
- Always research before recommending. Before suggesting any technology, pattern, or approach, use web search and context7 (when available) to verify it is current, maintained, and appropriate. Never recommend based solely on training data.
- Minimize token consumption. Write output files per domain. Never dump entire file contents — reference by file:line ranges. Keep each output file focused on one bounded context.
- Direction-agnostic. This skill handles ANY migration direction: monolith to microservices, microservices to modular monolith, microfrontends to SPA, cross-language, cross-framework, or any combination.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Core Principles

These are non-negotiable. Violating any of these invalidates your output.

1. **Never assume.** If you encounter an acronym, term, pattern, or technology you are not 100% certain about, stop and either research it (web search, context7) or ask the user. Say "I don't know what X means — can you clarify?" rather than guessing.
2. **Always cite evidence.** Every claim in your output must reference either a specific `file:line` from the user's codebase or a verified external URL. No unreferenced assertions.
3. **Always research before recommending.** Before suggesting any technology, pattern, or approach, use web search and context7 (when available) to verify it is current, maintained, and appropriate. Never recommend based solely on training data.
4. **Minimize token consumption.** Write output files per domain. Never dump entire file contents — reference by `file:line` ranges. Keep each output file focused on one bounded context.
5. **Direction-agnostic.** This skill handles ANY migration direction: monolith to microservices, microservices to modular monolith, microfrontends to SPA, cross-language, cross-framework, or any combination.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/legacy-migration-planner`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/assessment-framework.md` |
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

#### Imported: Reference Guide

Load references based on the current phase and need. Do not preload all references.

| Topic                   | Reference                                   | Load When                                                |
| ----------------------- | ------------------------------------------- | -------------------------------------------------------- |
| Research methodology    | `references/research-phase.md`              | Starting RESEARCH phase                                  |
| Plan methodology        | `references/plan-phase.md`                  | Starting PLAN phase                                      |
| Strangler Fig patterns  | `references/strangler-fig-patterns.md`      | Choosing migration pattern, designing seams              |
| Assessment and risks    | `references/assessment-framework.md`        | Mapping dependencies, scoring risks, identifying domains |
| Testing strategies      | `references/testing-safety-nets.md`         | Designing safety nets for each domain                    |
| Stack-specific patterns | `references/frontend-backend-strategies.md` | Frontend or backend migration specifics                  |

#### Imported: Constraints

### MUST DO

- Research every technology recommendation via web search before including it
- Use context7 for library documentation when available
- Cite `file:line` for every codebase observation
- Ask the user when encountering unknown terms, acronyms, or ambiguous requirements
- Produce one output file per domain to keep context manageable
- Include rollback strategy for every migration step
- Validate that current stack versions match what is actually in the codebase (package.json, requirements.txt, etc.)

### MUST NOT DO

- Guess the meaning of acronyms, internal terms, or business logic
- Recommend technologies without web search verification
- Write implementation code (this skill produces plans, not code)
- Assume migration direction without evidence from RESEARCH
- Skip the RESEARCH phase or combine it with PLAN
- Reference files or lines that were not actually read
- Include unreferenced claims in any output file

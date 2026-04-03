---
name: "legacy-migration-planner"
description: "Legacy Migration Planner workflow skill. Use this skill when the user needs evidence-based planning for legacy system migrations, codebase modernization, monolith decomposition or consolidation, cross-language rewrites, or major framework upgrades. Invoke for strangler fig strategy, seam definition, phased cutover planning, compatibility assessment, and migration roadmaps. Do NOT use for domain discovery alone (use domain-analysis), component sizing (use component-identification-sizing), or implementation decomposition plans (use decomposition-planning-roadmap)."
version: "0.0.1"
category: "development"
tags:
  - "legacy-migration-planner"
  - "planning"
  - "legacy"
  - "migration"
  - "modernization"
  - "strangler-fig"
  - "framework-upgrade"
  - "monolith"
  - "microservices"
  - "roadmap"
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
upstream_skill: "skills/legacy-migration-planner"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Legacy Migration Planner

## Overview

Use this skill to produce an evidence-based migration plan for a legacy system without jumping straight into implementation.

This skill is for strategy, sequencing, seam design, compatibility review, risk assessment, safety nets, rollout planning, and retirement criteria. It preserves the upstream intent of the imported workflow while making the execution path clearer for agents: **research first, plan second, implement never**.

The output of this skill is a migration planning packet, typically under `./migration-plan/`, with research artifacts, per-domain plans, a consolidated roadmap, explicit rollback conditions, and references to the evidence used.

This skill does **not** implement the migration. It prepares a plan that other agents or developers can execute.

## When to Use This Skill

Use this skill when the user needs:

- a migration strategy for a legacy application, service, frontend, backend, or platform
- a strangler fig or incremental replacement plan
- a framework or runtime upgrade plan that must account for current-version constraints
- a cross-language or cross-framework rewrite plan
- a monolith-to-microservices plan **or** a microservices-to-modular-monolith consolidation plan
- a phased rollout plan with rollback paths and observability requirements
- a migration roadmap that must preserve external contracts during coexistence
- a plan for defining seams, facades, anti-corruption layers, and data ownership boundaries

### Do Not Use This Skill When

Do **not** use this skill when the task is primarily:

- business/domain discovery with little codebase evidence yet available → use `@domain-analysis`
- component sizing, effort estimation, or work-package sizing → use `@component-identification-sizing`
- detailed implementation decomposition or execution steps for building the target system → use `@decomposition-planning-roadmap`
- code writing, refactoring, or migration execution PRs → hand off to implementation-focused skills
- release/change-management communications without architecture migration planning → hand off to release or delivery orchestration skills

### Activation Guardrails

Before using this skill, confirm all of the following:

1. The user needs a **plan**, not code.
2. The current system can be inspected, or the user can provide enough evidence to inspect it.
3. Migration direction is not assumed in advance without research.
4. Microservices are not treated as the default target. A modular monolith may be the correct outcome.

## Operating Table

| Situation | Primary objective | Must inspect first | Primary local references | Expected outputs | Escalate or route when |
| --- | --- | --- | --- | --- | --- |
| Monolith to microservices | Determine whether decomposition is justified and where safe seams exist | Runtime topology, module dependencies, external interfaces, operational readiness | `references/assessment-framework.md`, `references/strangler-fig-patterns.md`, `references/migration-readiness-checklist.md`, `references/anti-corruption-layer.md` | `readiness-checklist.md`, `dependency-map.md`, `interface-contracts.md`, per-domain plans | No service boundaries can be justified, or ops maturity is too low |
| Microservices consolidation to modular monolith | Reduce distributed complexity safely | Service boundaries, deployment pain, coupling, data ownership, team ownership | `references/assessment-framework.md`, `references/database-migration-patterns.md` | consolidation rationale, target module boundaries, roadmap, rollback constraints | Work is really platform optimization, not migration planning |
| Cross-language rewrite | Control compatibility and coexistence risk | API contracts, data model parity, runtime assumptions, performance constraints | `references/api-compatibility-and-deprecation.md`, `references/anti-corruption-layer.md`, `references/testing-safety-nets.md` | compatibility matrix, seam plan, safety nets, phased replacement roadmap | The user asks for implementation of the rewrite |
| Major framework/runtime upgrade | Verify supported upgrade path before planning | Current versions from source, official migration guides, breaking changes, deprecated APIs | `references/migration-readiness-checklist.md`, `references/testing-safety-nets.md` | `stack-research.md`, upgrade constraints, rollout and rollback plan | Current-to-target path is unsupported or unknown |
| Frontend route-by-route migration | Preserve navigation and user flows during coexistence | Route ownership, shell/app boundaries, auth/session behavior, shared assets | `references/frontend-backend-strategies.md`, `references/api-compatibility-and-deprecation.md` | route migration plan, compatibility notes, cutover criteria | The task is pure UI redesign rather than migration |
| Shared-database entanglement | Clarify data ownership before extraction | Table ownership, write paths, replication needs, transactional coupling | `references/database-migration-patterns.md`, `references/assessment-framework.md` | `data-ownership-map.md`, schema strategy, extraction blockers | Proposed services still depend on tightly shared writes |
| Unknown or poorly documented legacy stack | Establish baseline evidence before proposing direction | Entry points, manifests, lockfiles, deployment config, observable interfaces | `references/research-phase.md`, `references/migration-readiness-checklist.md` | system inventory, stack research, risk register, clarified unknowns | Too many unknowns remain to produce a safe roadmap |

## Workflow

Follow the stages in order. Do not begin roadmap writing until the mandatory research artifacts exist.

### Stage 1: Establish drivers, scope, and non-goals

Clarify why the migration is being considered.

Capture:

- business drivers
- technical drivers
- explicit non-goals
- constraints such as compliance, downtime, staffing, or deadlines
- whether the task is modernization, extraction, consolidation, rewrite, or upgrade

**Required output:** `./migration-plan/01-scope-and-drivers.md`

### Stage 2: Build a current-state system inventory

Inspect the codebase and deployment evidence before making any architectural recommendation.

Read:

- project structure and entry points
- dependency manifests and lockfiles
- runtime and framework versions
- build and deployment configuration
- service and database configuration
- externally exposed interfaces

Every codebase claim must cite `file:line`.

**Required outputs:**

- `./migration-plan/research/system-inventory.md`
- `./migration-plan/research/runtime-topology.md`
- `./migration-plan/research/stack-research.md`

### Stage 3: Map dependencies, contracts, and data boundaries

Document how the current system actually interacts internally and externally.

At minimum, identify:

- module and service dependencies
- inbound and outbound interfaces
- auth/session assumptions
- request/response semantics that must be preserved
- shared libraries and shared infrastructure
- data stores, schemas, table ownership, and cross-boundary writes

**Required outputs:**

- `./migration-plan/research/dependency-map.md`
- `./migration-plan/research/interface-contracts.md`
- `./migration-plan/research/data-ownership-map.md`

### Stage 4: Identify bounded contexts and migration candidates

Group the system into candidate domains or bounded contexts using evidence from code structure, runtime behavior, ownership, and contract boundaries.

Do not force service extraction if the better target is a modular monolith.

**Required output:** `./migration-plan/research/domain-candidates.md`

### Stage 5: Assess readiness, risks, and target suitability

Evaluate whether the desired target state is realistic.

Check:

- delivery maturity
- observability quality
- test coverage and confidence
- ownership clarity
- deployment safety
- operational support for phased rollout
- current-to-target version support from official docs
- whether a modular monolith is safer than microservices

**Required outputs:**

- `./migration-plan/research/readiness-checklist.md`
- `./migration-plan/research/risk-assessment.md`
- `./migration-plan/research/decision-drivers.md`

**Hard gate:** if current versions, dependency graph, runtime topology, or interface inventory are missing, stop and request more evidence.

### Stage 6: Choose migration pattern, seams, and coexistence model

Select the safest migration approach based on the evidence.

Possible approaches include:

- strangler fig with routing interception
- modular monolith refactoring before extraction
- anti-corruption layer between legacy and new domain models
- route-by-route frontend migration
- adapter/facade around legacy APIs
- incremental framework upgrade with compatibility shims
- consolidation of microservices into a simpler boundary model

For each candidate wave, define:

- seam location
- traffic or invocation path
- contract preservation requirements
- data ownership approach
- coexistence duration
- rollback trigger

**Required outputs:**

- `./migration-plan/research/migration-pattern-selection.md`
- `./migration-plan/research/seam-catalog.md`
- `./migration-plan/research/schema-change-strategy.md`

### Stage 7: Define safety nets before implementation

Before any implementation plan is approved, specify how success and failure will be detected.

Include:

- baseline smoke tests
- contract tests
- regression coverage expectations
- synthetic checks for critical paths
- metrics, logs, and tracing requirements
- SLI/SLO candidates where appropriate
- dashboards and alerts needed for rollout
- explicit rollback indicators

**Required output:** `./migration-plan/research/observability-baseline.md`

### Stage 8: Write per-domain migration plans

Create one file per bounded context in `./migration-plan/domains/`.

Each domain plan should include:

1. current state with `file:line` evidence
2. target state
3. consumer and dependency inventory
4. compatibility requirements
5. seam and coexistence approach
6. data ownership and schema strategy
7. migration steps
8. testing and observability safety nets
9. rollout strategy
10. rollback triggers and rollback limitations
11. success metrics
12. decommission criteria

Use `examples/domain-plan-template.md` as the shape guide.

### Stage 9: Write the consolidated roadmap

Create `./migration-plan/00-roadmap.md` with:

- migration waves in sequence
- dependencies between waves
- major risks and mitigation timing
- readiness gates between phases
- cutover criteria
- retirement/decommission milestones
- open decisions requiring user approval

### Stage 10: Produce a handoff packet

End with a short handoff summary that tells implementers what is safe to do next and what remains unresolved.

Include:

- recommended first wave
- blocked areas
- assumptions that still need confirmation
- highest-risk dependencies
- artifacts reviewed
- related skills or implementation handoffs if needed

## Output Structure

```text
./migration-plan/
├── 00-roadmap.md
├── 01-scope-and-drivers.md
├── research/
│   ├── system-inventory.md
│   ├── runtime-topology.md
│   ├── stack-research.md
│   ├── dependency-map.md
│   ├── interface-contracts.md
│   ├── data-ownership-map.md
│   ├── domain-candidates.md
│   ├── readiness-checklist.md
│   ├── risk-assessment.md
│   ├── decision-drivers.md
│   ├── migration-pattern-selection.md
│   ├── seam-catalog.md
│   ├── schema-change-strategy.md
│   └── observability-baseline.md
└── domains/
    ├── 01-domain-{name}.md
    ├── 02-domain-{name}.md
    └── ...
```

## Examples

### Example 1: Request a migration plan for a legacy monolith

```text
Use @legacy-migration-planner to assess this Java monolith and propose an evidence-based migration roadmap. Do not write implementation code. Start with system inventory, dependency mapping, interface contracts, data ownership, and readiness checks before recommending microservices or a modular monolith.
```

**Expected result:** A research-first planning packet with explicit justification for the target architecture rather than an assumed decomposition.

### Example 2: Plan a major framework upgrade

```text
Use @legacy-migration-planner to plan a React 16 to React 19 upgrade. Verify the current version from the repository, research the supported upgrade path from official docs, identify breaking points, define test and observability safety nets, and produce a phased rollout with rollback triggers.
```

**Expected result:** A version-aware upgrade plan that cites current repository evidence and official upgrade guidance instead of generic advice.

### Example 3: Generate a domain plan from the template

```text
Create ./migration-plan/domains/01-domain-billing.md using examples/domain-plan-template.md. Fill only sections supported by codebase evidence or verified external references, and mark unresolved items explicitly.
```

**Expected result:** A bounded-context migration plan with compatibility, data, rollout, and rollback sections.

### Example 4: Review migration readiness before recommending microservices

```text
Before proposing service extraction, use references/migration-readiness-checklist.md and references/assessment-framework.md to evaluate delivery maturity, observability, deployment safety, and ownership clarity. If readiness is weak, recommend a modular monolith or preparatory refactoring instead.
```

**Expected result:** A plan that does not over-prescribe microservices when prerequisites are missing.

## Best Practices

### Do

- complete the RESEARCH phase before writing the PLAN phase
- cite every codebase observation with `file:line`
- verify stack versions from source files such as manifests, lockfiles, or build config
- verify target-version compatibility from official project documentation when possible
- inventory external and internal contracts before choosing seams
- define data ownership explicitly before recommending extraction or consolidation
- include observability, testing, rollout, and rollback criteria in every domain plan
- prefer the smallest safe migration wave that delivers learning without forcing premature decomposition
- consider a modular monolith as a valid modernization target
- state uncertainty explicitly when evidence is incomplete

### Do Not

- assume microservices are the correct outcome
- skip dependency mapping or contract inventory
- recommend a target framework/runtime path without version verification
- treat shared-database coupling as a minor detail
- claim database rollback is safe unless the rollback mechanism is explicitly defined
- write migration implementation code in this skill
- mix unverified assumptions into the roadmap
- invent files, lines, service boundaries, or user constraints

### Non-Negotiable Rules

1. **Never assume unknown terms.** Ask the user or research first.
2. **Always cite evidence.** No unsupported assertions.
3. **Always research before recommending.** Use official sources when available.
4. **Do not skip stage gates.** Missing evidence means the plan is incomplete.
5. **This skill produces plans, not code.**

## Troubleshooting

### Problem: No safe seam exists without breaking consumers

**Symptoms:** Every proposed cut point crosses tightly coupled logic, shared transactions, or hidden contracts; consumers depend on legacy behavior that is not documented.

**Likely causes:** The team started from the desired target architecture instead of observed seams; contracts were not inventoried; anti-corruption needs were ignored.

**Solution:** Stop proposing extraction waves. Rebuild `interface-contracts.md`, document consumer expectations, and use `references/anti-corruption-layer.md` plus `references/strangler-fig-patterns.md` to identify façade or translation options. If no safe seam exists yet, recommend preparatory refactoring or a modular monolith target.

### Problem: Shared database coupling blocks extraction

**Symptoms:** Proposed services still need direct writes to the same tables, cross-domain joins remain essential, or rollback depends on manually repairing data.

**Likely causes:** Data ownership was never defined; extraction was planned around code structure alone; schema evolution strategy is missing.

**Solution:** Rework `data-ownership-map.md` and `schema-change-strategy.md` before continuing. Use `references/database-migration-patterns.md` to classify whether the plan requires shared reads, published interfaces, CDC/replication, or delayed ownership transfer. If ownership cannot be separated safely, reduce scope or change the target architecture.

### Problem: The framework/runtime upgrade path is unsupported or unclear

**Symptoms:** The current version in the repo is far behind target, official docs do not support direct upgrade, or required intermediate versions are unknown.

**Likely causes:** The plan used generic upgrade advice; current versions were not verified from source; vendor/project documentation was not consulted.

**Solution:** Pause roadmap writing. Update `stack-research.md` with verified current versions and official upgrade-path evidence. If a direct path is unsupported, propose staged upgrades, compatibility shims, or a lower-risk target. Do not guess unsupported version jumps.

### Problem: Observability is too weak to support phased cutover

**Symptoms:** There are no baseline metrics, no trace correlation, no rollback alarms, or no reliable way to compare legacy and new behavior during coexistence.

**Likely causes:** The plan treated observability as an implementation detail; safety nets were deferred; rollout was designed before detection mechanisms existed.

**Solution:** Add `observability-baseline.md` and define minimum telemetry requirements before any cutover recommendation. Use `references/observability-cutover-checklist.md` and `references/release-rollout-patterns.md` to specify dashboards, alerting, synthetic checks, and rollback triggers.

### Problem: Rollback is undefined for data-changing steps

**Symptoms:** The roadmap says "roll back if needed" but schema changes, data backfills, or dual-write steps cannot be reversed safely.

**Likely causes:** Rollback planning focused only on application deploys; database and state transitions were not analyzed.

**Solution:** Rewrite the affected domain plan to distinguish reversible deployment rollback from irreversible or conditionally reversible data changes. Require backup/recovery assumptions, stop points, and validation checks. If safe rollback is impossible, make the plan explicit about forward-fix requirements and approval gates.

### Problem: The output is too generic to be actionable

**Symptoms:** The roadmap reads like architecture advice, lacks `file:line` evidence, or does not produce the required artifacts under `./migration-plan/`.

**Likely causes:** Research was skipped, too little repository evidence was gathered, or the plan was written from prior knowledge instead of current inspection.

**Solution:** Return to Stages 2 through 5. Rebuild the missing artifacts, cite evidence, and use the local templates in `examples/` to restore structure.

## Related Skills

- `@domain-analysis` — Use before this skill when the domain model or business boundaries are still unclear.
- `@component-identification-sizing` — Use when the task is sizing or scoping migration work rather than planning strategy.
- `@decomposition-planning-roadmap` — Use after this skill when the approved strategy must be broken into implementation work packages.
- `@architecture-review` — Use when the proposed target architecture needs broader design review.
- `@testing-strategy` — Use when the migration plan needs deeper implementation-level test design.
- `@release-orchestration` — Use when the work shifts from migration planning to rollout execution and release coordination.

### Suggested Handoff Order

- **Before this skill:** domain discovery, context clarification, architecture intake
- **With this skill:** evidence gathering, migration strategy, seam selection, roadmap writing
- **After this skill:** decomposition planning, implementation, testing execution, release orchestration

## Additional Resources

Use the local support pack selectively. Do not preload everything.

### Discover

- [Research phase guide](references/research-phase.md)
- [Assessment framework](references/assessment-framework.md)
- [Migration readiness checklist](references/migration-readiness-checklist.md)
- [System context inventory template](examples/system-context-inventory-template.md)

### Assess

- [Anti-corruption layer guidance](references/anti-corruption-layer.md)
- [API compatibility and deprecation guidance](references/api-compatibility-and-deprecation.md)
- [Database migration patterns](references/database-migration-patterns.md)
- [Risk register template](examples/risk-register-template.md)

### Design

- [Strangler fig patterns](references/strangler-fig-patterns.md)
- [Frontend and backend migration strategies](references/frontend-backend-strategies.md)
- [Domain plan template](examples/domain-plan-template.md)
- [Migration decision ADR template](examples/adr-template-migration-decision.md)

### Validate

- [Testing safety nets](references/testing-safety-nets.md)
- [Observability cutover checklist](references/observability-cutover-checklist.md)
- [Release rollout patterns](references/release-rollout-patterns.md)

### Handoff

- [Plan phase guide](references/plan-phase.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Primary Guidance Behind This Skill

These references inform the planning guidance and should be preferred over generic summaries when stack-specific questions arise:

- Martin Fowler — Strangler Fig Application
- Martin Fowler — Monolith First
- Martin Fowler — Microservice Prerequisites
- AWS Prescriptive Guidance — Strangler Fig pattern
- AWS Prescriptive Guidance — Anti-corruption layer pattern
- Google Cloud Architecture guidance on modernization and reliability
- Kubernetes deployment and service documentation for rollout and rollback mechanics
- OpenAPI Specification and HTTP semantics for compatibility preservation
- Official framework/runtime upgrade guides for the stack actually in use

## Constraints

### Must Do

- research every technology recommendation before including it
- use official documentation when available
- cite `file:line` for every codebase observation
- ask the user when requirements, terms, or acronyms are unclear
- produce one output file per domain to keep context manageable
- include rollback strategy and rollback limitations for every migration wave
- validate that current stack versions match what is actually in the repository

### Must Not Do

- guess business meaning, internal terminology, or technical constraints
- recommend technologies without verification
- write implementation code
- assume migration direction without research evidence
- skip the RESEARCH phase or collapse it into PLAN
- reference files or lines that were not actually read
- make unsupported rollback promises for schema or data changes
- hide unresolved risks behind vague roadmap language

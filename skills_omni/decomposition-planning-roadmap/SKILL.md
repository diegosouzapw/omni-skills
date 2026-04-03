---
name: "decomposition-planning-roadmap"
description: "Decomposition Planning and Roadmap workflow skill. Use this skill when a user needs a step-by-step migration roadmap for breaking apart a monolith, choosing a safe extraction order, prioritizing candidate seams, defining phase gates, and tracking decomposition progress. Do not use it for first-pass domain discovery or component sizing; route to domain-analysis or component-identification-sizing first when bounded contexts, dependencies, or inventory are still unclear."
version: "0.0.1"
category: "product"
tags:
  - "decomposition-planning-roadmap"
  - "monolith-modernization"
  - "migration-roadmap"
  - "service-extraction"
  - "strangler-fig"
  - "bounded-contexts"
  - "prioritization"
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
upstream_skill: "skills/decomposition-planning-roadmap"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Decomposition Planning and Roadmap

## Overview

This skill creates an incremental decomposition roadmap for monolith modernization work.

Use it when the user asks questions like:

- "What order should we extract services?"
- "Plan our monolith-to-microservices migration"
- "Which bounded context should move first?"
- "Create a phased decomposition roadmap with milestones and risks"
- "How do we track whether decomposition is actually helping?"

This skill is for **planning and sequencing**, not for replacing domain discovery, service-boundary design, or implementation execution.

It preserves the upstream intent of producing structured decomposition plans, phased roadmaps, prioritized work, architecture stories, and progress tracking, while strengthening the workflow with safer activation boundaries, stage gates, data-boundary checks, operational readiness criteria, and measurable success metrics.

## When to Use This Skill

Use this skill when you already have enough evidence to plan migration order and phase work safely.

### Good fits

- You already have a component inventory or service candidate list.
- You need to decide **what to extract first, later, defer, or reject**.
- You need a roadmap with milestones, dependencies, rollback points, and stakeholder review gates.
- You need to compare multiple candidate seams using business value, coupling, and readiness.
- You need to track decomposition progress with operational and architecture metrics, not just service count.

### Do not use this skill when

- Domain boundaries are still unknown.
- The team has not identified major components, dependencies, or ownership.
- The request is really for target-state architecture design.
- The request is for detailed service sizing or boundary design.
- The request is for implementation execution rather than planning.

### Route to related skills first when needed

- Use `@domain-analysis` if bounded contexts, domains, or subdomains are not yet clear.
- Use `@component-identification-sizing` if the system inventory is missing or too fuzzy to plan safely.
- Use a dependency-analysis skill if runtime, build-time, or data coupling is not understood.
- Use a service-boundary-design skill if the user needs detailed APIs, ownership, contracts, or internal service design.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Missing roadmap prerequisites | `agents/decomposition-router.md` | Prevents this skill from being used as a substitute for discovery or design |
| Need a phased roadmap artifact fast | `references/roadmap-template.md` | Gives a reusable roadmap structure with gates, owners, milestones, and rollback points |
| Need to rank candidate extraction seams | `references/extraction-scorecard.md` | Produces a defensible extraction order using multiple dimensions |
| Shared database or tangled data ownership | `references/data-boundary-worksheet.md` | Forces explicit decisions about system of record, consistency, and migration path |
| Hidden coupling or blocker mapping | `references/dependency-map-template.md` | Captures runtime, build, data, and team dependencies before sequencing |
| Risk-heavy modernization effort | `references/risk-register.md` | Tracks risks, mitigations, triggers, owners, and contingencies |
| Need operational go/no-go checks | `references/service-readiness-checklist.md` | Prevents extraction without ownership, observability, rollback, and deployment readiness |
| Need measurable outcomes | `references/fitness-functions-template.md` | Converts roadmap goals into observable metrics and thresholds |
| Need concrete examples | `examples/example-small-monolith-roadmap.md` | Shows a relatively safe first seam and phased plan |
| Data entanglement is the main blocker | `examples/example-shared-db-roadmap.md` | Shows how to plan when schema coupling dominates sequencing |
| Need stakeholder alignment packet | `examples/example-stakeholder-review-packet.md` | Summarizes decisions, options, risks, and open issues for review |

## Workflow

Use the workflow as a gated planning sequence. Do not skip ahead to service extraction just because the target architecture is already known.

### Phase 1: Establish objective and guardrails

1. Confirm why decomposition is being considered.
   - Business driver: faster delivery, scaling, compliance isolation, reliability, team autonomy, cost, or modernization.
   - Non-goals: avoid extracting services just to "be microservices."
2. Capture constraints.
   - Regulatory requirements
   - Budget or staffing limits
   - Runtime/platform constraints
   - Required timelines and freeze windows
3. Define the decision horizon.
   - Next 1-2 quarters roadmap
   - Longer-term target state
   - What decisions must be made now versus deferred

**Required inputs:** business goals, stakeholders, known constraints.

**Exit criteria:** clear modernization objective, explicit non-goals, and agreed planning horizon.

### Phase 2: Validate prerequisites

Confirm enough evidence exists to plan safely.

1. Review component inventory.
2. Review dependency map.
3. Review domain/grouping evidence.
4. Review known service candidates or decomposition patterns already completed.
5. Check whether any prior refactoring or extraction work is already in progress.
6. Confirm team ownership candidates exist for likely extracted services.

If key evidence is missing, stop and route to prerequisite skills instead of inventing certainty.

**Minimum planning prerequisites:**

- A component or module inventory exists.
- Major dependencies are known.
- Candidate domains, business capabilities, or subdomains are at least partially identified.
- Stakeholders agree on the primary business outcomes.

**Exit criteria:** enough evidence exists to compare candidate seams realistically.

### Phase 3: Assess current state and blockers

Build the baseline that the roadmap will improve.

1. Record completed, partial, and missing decomposition patterns.
2. Assess coupling.
   - Code coupling
   - Runtime coupling
   - Data coupling
   - Team/process coupling
3. Assess platform readiness.
   - CI/CD
   - environment isolation
   - observability
   - incident response
   - rollback capability
4. Assess service readiness prerequisites.
5. Identify major blockers.
   - shared database
   - batch jobs
   - cross-cutting transactions
   - no safe team ownership
   - no observability for cross-service flows

**Primary output:** current-state assessment with explicit blockers and missing capabilities.

### Phase 4: Identify and score candidate seams

List plausible extraction candidates and rank them using evidence.

For each candidate seam, capture:

- business capability or bounded context
- user-visible outcome or business value
- current pain level or change frequency
- coupling level
- data independence
- team ownership readiness
- security/compliance boundary relevance
- operational readiness
- migration pattern likely required

Use the scorecard in `references/extraction-scorecard.md`.

Recommended dimensions:

- Business value
- Change frequency / delivery pain
- Coupling and dependency complexity
- Data independence
- Testability
- Team ownership readiness
- Platform readiness
- Compliance or risk reduction value
- Rollback feasibility

Then classify each candidate as one of:

- **First**: safe and valuable early extraction candidate
- **Later**: useful, but depends on earlier enablers
- **Deferred**: possible, but not justified now
- **Rejected**: not a good extraction target under current constraints

**Exit criteria:** a ranked list with rationale, not just a score.

### Phase 5: Choose transition pattern per candidate

Do not assume every seam should be extracted the same way.

Select an incremental transition pattern per candidate:

- Strangler-style incremental replacement when traffic can be routed gradually.
- Anti-corruption boundary when a new service must be isolated from legacy models.
- Branch by abstraction when you need an internal seam before moving behavior.
- Temporary modularization first when service extraction is still too risky.

For each candidate, record:

- transition pattern
- cutover style
- dependency adapters needed
- rollback point
- observability checks required before rollout

**Exit criteria:** every planned extraction has a transition approach and fallback path.

### Phase 6: Build the phased roadmap

Create the roadmap in small, reversible slices.

Recommended roadmap phases:

1. **Analysis and preparation**
   - close prerequisite gaps
   - improve dependency visibility
   - stabilize ownership
2. **Boundary preparation**
   - modularize code
   - introduce adapters
   - isolate data responsibilities
3. **First extraction**
   - extract one high-value, lower-risk seam
   - keep rollback simple
4. **Expansion**
   - extract additional seams only after first extraction proves stable
5. **Optimization and consolidation**
   - retire temporary adapters
   - reduce duplicate logic
   - simplify platform operations

For each phase, define:

- objective
- in-scope candidates
- dependencies
- milestones
- measurable success criteria
- rollback or pause conditions
- stakeholders and owners

Use `references/roadmap-template.md`.

### Phase 7: Define architecture stories, risks, and metrics

Turn roadmap items into trackable work.

1. Create architecture stories or epics.
2. Attach acceptance criteria.
3. Record risks and mitigations.
4. Define fitness functions and delivery metrics.
5. Decide what signals prove decomposition is helping.

Good metrics include:

- lead time for changes
- deploy frequency
- change failure rate
- mean time to restore
- independent deployability rate
- cross-service latency impact
- dependency fan-in / fan-out
- incident rate after extraction
- percentage of changes requiring coordinated deployment

Use:

- `references/risk-register.md`
- `references/fitness-functions-template.md`
- `references/service-readiness-checklist.md`

### Phase 8: Review, approve, execute, and reassess

1. Review the roadmap with stakeholders.
2. Validate ownership, risk acceptance, and budget reality.
3. Approve only the next small slice, not the entire future as fixed truth.
4. Reassess after each major milestone.
5. Re-score candidates if new coupling or operational evidence appears.

A roadmap is a living planning artifact. It should change when evidence changes, but not randomly.

## Output Format

Produce the final answer as a planning packet with these sections:

```markdown
# Decomposition Roadmap

## 1. Objective and Constraints
- Business outcomes
- Non-goals
- Key constraints

## 2. Current-State Assessment
- Completed patterns
- In-progress work
- Major blockers
- Readiness gaps

## 3. Candidate Seam Scorecard Summary
| Candidate | Business Value | Coupling | Data Independence | Ownership Readiness | Recommendation |
| --- | --- | --- | --- | --- | --- |

## 4. Recommended Extraction Order
1. First candidate
2. Next candidate
3. Deferred candidate(s)
4. Rejected candidate(s)

## 5. Transition Pattern by Candidate
| Candidate | Pattern | Why | Rollback Point | Observability Requirement |
| --- | --- | --- | --- | --- |

## 6. Phased Roadmap
For each phase:
- Objective
- Scope
- Dependencies
- Milestones
- Success criteria
- Pause/rollback conditions
- Owners

## 7. Risks and Mitigations
| Risk | Impact | Trigger | Mitigation | Owner |
| --- | --- | --- | --- | --- |

## 8. Architecture Stories / Epics
- Story
- Acceptance criteria
- Estimate
- Dependencies

## 9. Metrics and Fitness Functions
- Baseline
- Target
- Measurement method
- Review cadence

## 10. Stakeholder Decisions Needed
- Open questions
- Required approvals
- Deferred decisions
```

## Examples

### Example 1: Safe first seam for a modular monolith

**User request:**

```text
Create a decomposition roadmap for this order-management monolith. We already have a component inventory, domain map, and dependency analysis. Which service should move first?
```

**Agent approach:**

1. Validate prerequisites are present.
2. Score candidate seams such as notifications, catalog, pricing, and order orchestration.
3. Recommend a low-coupling, high-change seam first.
4. Use strangler or branch-by-abstraction for the first extraction.
5. Produce a phased roadmap with metrics and rollback points.

See: `examples/example-small-monolith-roadmap.md`

### Example 2: Shared database blocks extraction

**User request:**

```text
Plan our migration roadmap, but almost every domain writes to the same schema and reporting jobs depend on shared tables.
```

**Agent approach:**

1. Do not recommend immediate broad service extraction.
2. Use the data boundary worksheet.
3. Create a roadmap that starts with ownership mapping, schema isolation, adapters, and reporting impact assessment.
4. Defer high-risk extractions until data ownership and rollback plans exist.

See: `examples/example-shared-db-roadmap.md`

### Example 3: Stakeholder review packet

**User request:**

```text
Summarize the recommended decomposition order, risks, and decisions for architecture review.
```

**Agent approach:**

1. Summarize the scorecard results.
2. Show why the first seam is first.
3. Include risks, metrics, and open decisions.
4. Keep the roadmap incremental and reviewable.

See: `examples/example-stakeholder-review-packet.md`

## Best Practices

### Do

- Start from business capability, bounded context, or clear operational seam rather than arbitrary technical layers.
- Prefer incremental strangler-style migration over big-bang rewrites.
- Require explicit ownership, observability, deployment, and rollback readiness before extraction.
- Treat shared data ownership as a first-class planning concern.
- Favor the smallest valuable seam that can be owned and operated safely.
- Reassess roadmap sequencing after each meaningful extraction.
- Measure success by autonomy, reliability, and delivery outcomes, not service count.
- Document why each candidate is first, later, deferred, or rejected.

### Do not

- Do not default to microservices when the monolith can still be improved safely in place.
- Do not plan extraction before domain boundaries and dependencies are understood.
- Do not move multiple high-coupling domains at once.
- Do not ignore temporary coexistence costs such as adapters, duplicate data flows, or reporting impact.
- Do not treat a shared database as a minor implementation detail.
- Do not approve a roadmap that lacks rollback, on-call ownership, or observability.
- Do not treat timelines as promises when prerequisite evidence is still weak.

## Troubleshooting

### Problem: Everything is too coupled to choose a first service

**Symptoms:** Every candidate depends on the same shared modules, database tables, or synchronous call paths. The scorecard shows similar high risk across the board.

**Solution:** Do not force a fake extraction order. Plan a preparatory phase first: strengthen modular boundaries, map hidden dependencies, introduce abstractions, add anti-corruption boundaries where needed, and identify a thinner seam such as notifications, search, or reporting. If no seam is credible yet, recommend modularization before service extraction.

### Problem: Shared database coupling blocks the roadmap

**Symptoms:** Multiple candidates write the same schema, reporting jobs span domains, or transactions cross multiple future services.

**Solution:** Pause extraction planning long enough to define data ownership. Use `references/data-boundary-worksheet.md` and `references/dependency-map-template.md`. Record system-of-record decisions, synchronization strategy, reporting impacts, and explicit consistency tradeoffs. Defer candidates that cannot yet survive partial data separation.

### Problem: The roadmap changes every review cycle

**Symptoms:** Stakeholders keep reordering priorities, arguing about "what first," or reopening the same decisions without new evidence.

**Solution:** Use a stable scorecard, ADR-style rationale, explicit business outcomes, and measurable exit criteria. Keep open questions separate from approved next steps. Review only the next phase in detail and re-score later phases when new evidence appears.

### Problem: The first extracted service increased incidents

**Symptoms:** More paging, unclear ownership, harder debugging, or rollback pain after the first extraction.

**Solution:** Stop further extraction. Run the service-readiness checklist, inspect observability gaps, validate on-call ownership, and check whether the cutover pattern was too aggressive. Update the roadmap to require stronger fitness functions, rollback drills, and cross-service tracing before the next candidate proceeds.

### Problem: The team is extracting services faster than it can operate them

**Symptoms:** Service count rises, but CI/CD, runbooks, dashboards, and on-call maturity lag behind.

**Solution:** Reprioritize toward platform and team readiness. Add milestones for ownership clarity, deployment automation, runbooks, traces, alerts, and support expectations. Slow the extraction rate until each service can be operated sustainably.

## Related Skills

- `@domain-analysis` — use before this skill when domains, subdomains, and bounded contexts are not yet clear.
- `@component-identification-sizing` — use before this skill when the system inventory is incomplete.
- `@dependency-analysis` — use when runtime, build, or data dependency mapping is still missing.
- `@service-boundary-design` — use when detailed service contracts and boundaries need to be designed after the roadmap chooses a candidate.
- `@observability-readiness` — use when rollout safety depends on improving telemetry, tracing, alerting, or dashboards.

## Additional Resources

### Local support pack

- [Roadmap template](references/roadmap-template.md)
- [Extraction scorecard](references/extraction-scorecard.md)
- [Data boundary worksheet](references/data-boundary-worksheet.md)
- [Dependency map template](references/dependency-map-template.md)
- [Risk register](references/risk-register.md)
- [Fitness functions template](references/fitness-functions-template.md)
- [Service readiness checklist](references/service-readiness-checklist.md)
- [Example: small monolith roadmap](examples/example-small-monolith-roadmap.md)
- [Example: shared database roadmap](examples/example-shared-db-roadmap.md)
- [Example: stakeholder review packet](examples/example-stakeholder-review-packet.md)
- [Routing note](agents/decomposition-router.md)

### Upstream intent preserved

This enhanced version preserves the upstream workflow intent:

- assess current state
- identify applicable decomposition patterns
- prioritize work
- build a phased roadmap
- generate architecture stories
- track progress

It strengthens that workflow by adding:

- clearer activation boundaries
- stage gates and exit criteria
- data-boundary and ownership checks
- transition-pattern selection
- operational readiness validation
- measurable architecture and delivery outcomes

---
name: "domain-analysis"
description: "Subdomain Identification & Bounded Context Analysis workflow skill. Use this skill when a user needs to identify business domains, classify subdomains, map bounded contexts, and propose cautious service-boundary options in an existing codebase using DDD strategic design. Use it for questions like 'what are the domains in this codebase?', 'identify bounded contexts', 'classify core/supporting/generic subdomains', 'where are the linguistic boundaries?', or 'what service boundaries might make sense later?'. Do not use it for dependency-graph analysis, grouping existing components into domains without strategic analysis, or tactical aggregate/entity implementation design."
version: "0.0.1"
category: "development"
tags:
  - "domain-analysis"
  - "ddd"
  - "bounded-context"
  - "subdomains"
  - "ubiquitous-language"
  - "service-boundaries"
  - "strategic-design"
  - "architecture"
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
upstream_skill: "skills/domain-analysis"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Subdomain Identification & Bounded Context Analysis

## Overview

This skill analyzes an existing codebase to identify candidate business domains, classify subdomains as Core / Supporting / Generic, infer bounded contexts from business language and workflow evidence, and propose cautious service-boundary options.

It preserves the intent of the upstream workflow from `packages/skills-catalog/skills/(architecture)/domain-analysis` in `https://github.com/tech-leads-club/agent-skills.git`, while restructuring it into a more operational, reviewable workflow for Omni Skills.

Use this skill for **strategic design analysis**. The output should be a reviewable hypothesis packet, not a forced reorganization plan. Default to **read-only inspection**. Treat every recommendation as provisional unless supported by clear evidence from code, schemas, events, docs, ADRs, or stakeholder input.

## When to Use This Skill

Use this skill when the user asks to:

- identify business domains in a codebase
- classify subdomains as Core, Supporting, or Generic
- find bounded contexts using DDD strategic design
- detect linguistic boundaries or term collisions
- assess domain cohesion and mixed-responsibility areas
- propose context maps and integration relationships
- explore whether current modules might map to future service boundaries

### Good fits

- “What are the business domains in this repository?”
- “Identify bounded contexts in this monolith.”
- “Which parts are core domain vs supporting vs generic?”
- “Where does the term `Customer` mean different things?”
- “What context map would you suggest from this codebase?”
- “Which boundaries should stay modular for now versus maybe become services later?”

### Do not use this skill when

- the task is mainly dependency-graph or coupling analysis → use `coupling-analysis`
- the task is grouping existing components into domains without strategic domain discovery → use `domain-identification-grouping`
- the task is tactical DDD design of entities, aggregates, repositories, or invariants inside one context
- the task is implementation planning for microservice extraction without prior strategic analysis
- the task is mainly org-chart, team-topology, deployment, or runtime architecture optimization

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First pass on an unfamiliar codebase | `references/glossary-extraction-worksheet.md` | Forces evidence-first extraction of language before drawing boundaries |
| Classifying candidate subdomains | `references/subdomain-classification-rubric.md` | Prevents labeling everything as Core just because it is important |
| Drafting context definitions | `references/bounded-context-canvas-template.md` | Makes each context explicit, reviewable, and bounded |
| Mapping relationships between contexts | `references/context-map-template.md` | Encourages explicit relationship types and integration rationale |
| Code evidence is weak or CRUD-heavy | `references/event-storming-lite-guide.md` | Provides fallback discovery prompts for docs or stakeholder validation |
| Validating final output completeness | `scripts/validate_analysis_packet.py` | Checks that the analysis packet includes evidence, confidence, and open questions |
| Routing or handoff | `agents/domain-analysis-router.md` | Helps route to better-fit related skills when analysis drifts |

## Workflow

Follow these phases in order. Do not jump from filenames directly to microservice recommendations.

### 1. Define scope and constraints

Before inspecting files, state:

- target repo, package, service, or folder under analysis
- whether the task is whole-system or partial
- whether you may inspect docs, ADRs, schemas, or API specs
- whether the user wants only domain analysis or also service-boundary options
- what evidence is missing

If the request is vague, ask for or infer a bounded scope first.

### 2. Collect evidence, read-only by default

Gather signals from:

- domain models and entities
- services, handlers, commands, and use cases
- controllers, resolvers, routes, and API contracts
- event names, message topics, queues, and notifications
- database schemas and table names
- ADRs, README files, product docs, and architecture notes
- tests that describe workflows or business rules

Prefer business-language evidence over framework or infrastructure noise.

Record concrete references for every important claim:

- file paths
- symbol names
- endpoint names
- event names
- schema terms
- quoted terminology from docs

### 3. Extract ubiquitous language

Use `references/glossary-extraction-worksheet.md`.

For each term, capture:

- the term
- where it appears
- what it seems to mean
- aliases or near-synonyms
- conflicting meanings across areas
- confidence level

Focus on business nouns, verbs, events, and lifecycle language. Be careful with overloaded terms like `User`, `Account`, `Order`, and `Customer`.

### 4. Identify candidate business capabilities

Group evidence into capabilities such as:

- billing
- catalog
- identity
- fulfillment
- support
- analytics
- notifications

Use workflows and business outcomes, not technical layers.

Bad grouping basis:

- controllers together
- repositories together
- all database code together
- all shared utilities together

Good grouping basis:

- concepts that share business language
- workflows that serve one business purpose
- rules that change together
- data that must remain consistent together

### 5. Draft candidate subdomains

A candidate subdomain usually has:

- a distinct business capability
- coherent vocabulary
- related concepts and operations
- identifiable business value
- some internal consistency of workflows and rules

For each subdomain, capture:

- name
- business capability
- key concepts
- key workflows or events
- evidence references
- initial confidence

### 6. Classify each subdomain

Use `references/subdomain-classification-rubric.md`.

Classify by business differentiation, not code size or operational criticality.

- **Core Domain**: competitively differentiating; central to business advantage
- **Supporting Subdomain**: business-specific and necessary, but not the main differentiator
- **Generic Subdomain**: common capability that is standardized, commoditized, or often buyable

Ask explicitly:

- Is this where the business wins competitively?
- Does it require unique business knowledge?
- Could this capability reasonably be bought, standardized, or reused?

### 7. Assess cohesion and boundary quality

Evaluate each candidate grouping across:

- **Linguistic cohesion**: shared vocabulary and meaning
- **Workflow cohesion**: concepts used together in one business process
- **Data/invariant cohesion**: consistency rules or lifecycle fit
- **Change cohesion**: changes usually happen together

Suggested quick scale:

- `8-10` high cohesion
- `5-7` medium cohesion
- `0-4` low cohesion

Low cohesion does not automatically mean bad design, but it does mean “review this boundary.”

### 8. Detect boundary seams and term collisions

Look for:

- same term with different meanings in different areas
- same noun with different lifecycle or state rules
- direct model leakage across business capabilities
- classes or services mixing multiple business concerns
- generic infrastructure masquerading as domain logic

Folders and modules are clues, not proof.

A bounded context is primarily a **linguistic and consistency boundary**, not a package boundary.

### 9. Draft bounded contexts

Use `references/bounded-context-canvas-template.md`.

For each proposed bounded context, define:

- purpose
- ubiquitous language
- included concepts
- excluded concepts
- invariants or consistency boundary
- upstream/downstream dependencies
- ownership assumptions
- term conflicts with other contexts

Ideal alignment is often close to one subdomain per bounded context, but do not force that if the evidence suggests otherwise.

### 10. Build a context map

Use `references/context-map-template.md`.

For each relationship, record:

- source context
- target context
- relationship type
- integration mechanism
- rationale
- confidence

Common relationship types:

- Customer/Supplier
- Conformist
- Anti-Corruption Layer
- Open Host Service
- Published Language
- Shared Kernel, used sparingly

### 11. Propose service-boundary options cautiously

A bounded context may inform a service boundary, but it does **not** require independent deployment.

For each context, choose one of:

- **Keep in modular monolith for now**
- **Separate internal module with explicit interface**
- **Candidate for future service split**
- **Already an appropriate service boundary**

Base this on both domain evidence and operational caution:

- data ownership
- transactional boundaries
- integration friction
- team readiness
- deployment maturity
- cost of distributed complexity

Do not recommend microservice extraction solely because terms differ.

### 12. Produce a reviewable analysis packet

Every final answer should include:

1. scope analyzed
2. evidence summary
3. glossary / term collisions
4. candidate subdomains with classifications
5. bounded contexts
6. context map
7. service-boundary options
8. risks and ambiguities
9. confidence levels
10. validation questions for stakeholders

If desired, run:

```bash
python3 scripts/validate_analysis_packet.py analysis.md
```

## Output Format

Use this structure in the final response.

```markdown
# Domain Analysis Packet

## Scope
- Area analyzed:
- Evidence sources:
- Limits / assumptions:

## Evidence Summary
- `path/to/file`: why it matters
- `path/to/other`: why it matters

## Glossary and Term Collisions
| Term | Meaning | Context | Evidence | Confidence |
| --- | --- | --- | --- | --- |

## Candidate Subdomains
### {Subdomain Name}
- Classification: Core | Supporting | Generic
- Business capability:
- Key concepts:
- Key workflows/events:
- Evidence:
- Classification rationale:
- Cohesion: x/10
- Confidence: High | Medium | Low

## Proposed Bounded Contexts
### {Context Name}
- Purpose:
- Ubiquitous language:
- Included concepts:
- Excluded concepts:
- Invariant boundary:
- Term conflicts with other contexts:
- Dependencies:
- Confidence:

## Context Map
| From | To | Relationship | Integration | Rationale | Confidence |
| --- | --- | --- | --- | --- | --- |

## Service-Boundary Options
### {Context Name}
- Recommendation: Keep modular monolith | Internal module | Future service candidate | Existing service boundary fits
- Why:
- Operational caveats:

## Risks and Open Questions
- 

## Stakeholder Validation Questions
- 
```

## Examples

### Example 1: Ask for a strategic domain read of a monolith

```text
Use @domain-analysis on this repository. Identify candidate subdomains, classify them as core/supporting/generic, document term collisions, and propose bounded contexts. Do not jump directly to microservice recommendations unless the evidence supports it.
```

### Example 2: Focus on overloaded language

```text
Analyze the meaning of "Customer", "Account", and "Order" across this codebase. Show whether those terms mean different things in different workflows and whether that suggests distinct bounded contexts.
```

### Example 3: Validate a completed packet

```bash
python3 scripts/validate_analysis_packet.py examples/modular-monolith-domain-analysis-example.md
```

### Example 4: Produce context map options, not mandates

```text
Map likely bounded-context relationships across billing, identity, and catalog. For each relationship, state the most likely context-map pattern and confidence. Then say which boundaries should remain in a modular monolith for now.
```

### Example 5: Recover when code is too generic

```text
The codebase is mostly CRUD and framework scaffolding. Use @domain-analysis to extract whatever domain language exists, mark low-confidence areas, and list the stakeholder questions needed to validate or correct the inferred boundaries.
```

See also:

- `examples/modular-monolith-domain-analysis-example.md`
- `examples/distributed-system-context-map-example.md`
- `examples/term-collision-example.md`

## Best Practices

### Do

- start from business capability and ubiquitous language
- cite concrete evidence for every major claim
- treat folders and packages as hints, not proof
- document conflicting term meanings explicitly
- classify subdomains by differentiation, not technical importance
- show confidence per subdomain and per context
- keep service-boundary advice hypothesis-oriented
- prefer “modular monolith for now” when evidence for separation is weak
- validate with ADRs, docs, schemas, events, or domain experts when code alone is insufficient
- use Shared Kernel sparingly because it can preserve coupling and model confusion

### Do not

- do not equate package boundaries with bounded contexts
- do not label everything Core because it is critical to operations
- do not infer a microservice per subdomain automatically
- do not recommend deployment splits from sparse naming evidence alone
- do not let framework artifacts dominate the analysis
- do not force one global enterprise model when terms clearly diverge
- do not hide uncertainty; call out ambiguity and missing evidence

### Classification reminders

- **Core** means differentiating, not merely high traffic or highly regulated
- **Supporting** means business-specific but not the primary edge
- **Generic** means common capability, even if operationally important

### Boundary reminders

- bounded contexts are linguistic boundaries
- they often align with consistency and ownership boundaries
- they may influence service boundaries later
- they do not automatically require separate runtime deployment now

## Troubleshooting

### Problem: Everything was labeled Core Domain

**Symptoms:** Nearly every major area is marked Core because it is important, complex, or on the critical path.

**Solution:** Re-run classification using the rubric in `references/subdomain-classification-rubric.md`. Ask which area creates competitive differentiation versus which areas are necessary but more standard. Billing, auth, and notifications are often important without being the Core Domain.

### Problem: The analysis jumped straight to microservices

**Symptoms:** The answer recommends one service per subdomain without discussing operational maturity, data ownership, or modular-monolith options.

**Solution:** Reframe output as service-boundary options, not mandates. Add a “Keep in modular monolith for now” choice for each context unless there is strong evidence for independent ownership, interfaces, and deployment readiness.

### Problem: Framework noise overwhelms business signals

**Symptoms:** The codebase is dominated by controllers, DTOs, ORM models, generated clients, or generic CRUD services, making domain discovery shallow.

**Solution:** Down-rank framework evidence. Look for event names, validation rules, state transitions, tests, schemas, ADRs, README language, and product terminology. If evidence remains weak, mark findings low confidence and use `references/event-storming-lite-guide.md` to define follow-up questions.

### Problem: The same term appears everywhere

**Symptoms:** Terms like `User`, `Customer`, `Account`, or `Order` appear across multiple modules, making boundaries look blurry.

**Solution:** Build a term-collision table. Compare definitions, lifecycle states, permissions, and workflows in each area. If the term means different things, document separate context-specific meanings instead of forcing one universal model. See `examples/term-collision-example.md`.

### Problem: Cross-context coupling may be infrastructure, not domain overlap

**Symptoms:** Shared logging, email, auth middleware, persistence helpers, or SDK wrappers create many imports between areas.

**Solution:** Separate infrastructure coupling from domain coupling. A shared library does not prove shared domain language. Reassess boundaries using business concepts and integration relationships rather than import counts alone.

### Problem: Evidence is too thin to justify strong boundaries

**Symptoms:** Findings depend mostly on class names or directory names, with little behavioral or linguistic evidence.

**Solution:** Mark confidence as low, avoid strong restructuring advice, and list the exact missing evidence needed: ADRs, API specs, event names, workflows, stakeholder interviews, or production terminology.

## Related Skills

- `@domain-identification-grouping` — use when the task is grouping existing components into candidate domains rather than strategic discovery
- `@coupling-analysis` — use when the main question is dependency shape, instability, or cross-module coupling
- tactical DDD or implementation-focused skills — use after bounded contexts are accepted and the work shifts to aggregates, entities, repositories, or invariants inside one context
- ADR or architecture-decision skills — use after this skill when the team wants to formalize boundary decisions

## Additional Resources

### Local support pack

- [Glossary extraction worksheet](references/glossary-extraction-worksheet.md)
- [Subdomain classification rubric](references/subdomain-classification-rubric.md)
- [Bounded context canvas template](references/bounded-context-canvas-template.md)
- [Context map template](references/context-map-template.md)
- [Event storming lite guide](references/event-storming-lite-guide.md)
- [Modular monolith worked example](examples/modular-monolith-domain-analysis-example.md)
- [Distributed system context map example](examples/distributed-system-context-map-example.md)
- [Term collision example](examples/term-collision-example.md)
- [Analysis packet validator](scripts/validate_analysis_packet.py)
- [Routing and handoff guidance](agents/domain-analysis-router.md)

### Foundational references

- Martin Fowler — Bounded Context
- Martin Fowler — Event Storming
- Martin Fowler — Microservice Prerequisites
- Microsoft Azure Architecture Center — Domain analysis in domain-driven design
- Microsoft Azure Architecture Center — Identify microservice boundaries

## Preserved Upstream Intent

The original upstream skill emphasized:

- extracting concepts such as entities, services, use cases, and controllers
- grouping concepts by ubiquitous language
- identifying subdomains and classifying them as Core / Supporting / Generic
- assessing cohesion and low-cohesion issues
- suggesting bounded contexts and integration patterns

That intent is preserved here, but made more operational by requiring evidence, confidence, explicit context mapping, and caution around service-boundary recommendations.

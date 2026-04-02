---
name: "coupling-analysis"
description: "Coupling Analysis Skill workflow skill. Use this skill when a user needs to analyze whether modules, packages, or services are too tightly coupled using the strength-distance-volatility model from \\"Balancing Coupling in Software Design\\". Use it for dependency mapping, integration quality review, identifying decoupling priorities, coupling reports, and architectural health checks. Do not use it for domain boundary redesign (use domain-analysis) or component sizing and split/merge decisions (use component-identification-sizing)."
version: "0.0.1"
category: "development"
tags:
  - "coupling-analysis"
  - "architecture"
  - "dependencies"
  - "connascence"
  - "integration"
  - "modularity"
  - "decoupling"
  - "software-design"
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
upstream_skill: "skills/coupling-analysis"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Coupling Analysis Skill

## Overview

This skill analyzes coupling between software elements using the three-dimensional model from _Balancing Coupling in Software Design_ by Vlad Khononov:

1. **Integration strength** — what is shared and how invasive the dependency is
2. **Distance** — how far apart the coupled elements are in code, runtime, deployment, and ownership
3. **Volatility** — how often the coupled elements change, especially in business-critical areas

Use this skill to produce an evidence-based coupling assessment rather than a style-only opinion. A good analysis combines structural evidence from code and dependency manifests with contract evidence, change-history evidence, and team or ownership context when available.

This skill preserves the original upstream intent while making the workflow more operational for agents. Prefer practical maintenance-risk interpretation over treating any simplified formula as exact science.

## When to Use This Skill

Use this skill when the user asks questions like:

- "Are these modules too coupled?"
- "Show me the dependencies between these components."
- "Which modules should we decouple first?"
- "Analyze this service integration quality."
- "Why do changes in module A keep breaking module B?"
- "Produce a coupling report for this subsystem or architecture review."

Use it when you need to:

- evaluate coupling inside a monolith, package structure, or service architecture
- identify intrusive, functional, model, and contract coupling
- assess whether strong coupling is acceptable because elements are close and stable
- prioritize remediation by architectural risk rather than by smell count alone
- compare static dependency structure with git co-change history and ownership boundaries

Do **not** use this skill when the real task is:

- redefining domain boundaries or bounded contexts → use `domain-analysis`
- deciding how to split or merge components for sizing reasons → use `component-identification-sizing`
- implementing architecture tests or policy enforcement after diagnosis → hand off to architecture testing or enforcement work if available
- debugging a specific runtime failure without an architectural question

## Operating Table

| Situation | Start here | Why |
| --- | --- | --- |
| New request, unclear scope | `references/coupling-analysis-workflow.md` | Establishes scope, abstraction level, evidence classes, and report shape |
| Need severity and prioritization | `references/coupling-analysis-rubric.md` | Gives a repeatable scoring model for strength, distance, volatility, risk, and confidence |
| Need concrete dependency evidence | `references/dependency-evidence-cookbook.md` | Provides safe ecosystem-specific commands and evidence-gathering guidance |
| Need a final write-up | `references/report-template.md` | Standardizes findings, confidence, and remediation recommendations |
| Analysis feels noisy or incomplete | `references/troubleshooting-playbook.md` | Covers false positives, missing history, hidden coupling, and dynamic behavior |
| Need worked examples | `examples/module-level-analysis-example.md` or `examples/service-level-analysis-example.md` | Shows what good output looks like at different abstraction levels |
| Need direct agent routing | `agents/openai.yaml` | Gives an invocation-oriented summary for agent clients |

## Workflow

Choose **one abstraction level per pass**: function/class, module/package, or service/system. Do not mix levels in the same report unless you explicitly separate them.

### 1. Define scope and level

Capture:

- target area: full codebase, subsystem, package set, or service slice
- abstraction level for this pass
- expected output: quick triage, review packet, or detailed report
- available evidence: source tree, manifests, API specs, ADRs, git history, ownership data

If the user asks for "architecture" broadly, narrow it to a concrete set of elements before proceeding.

### 2. Gather evidence before judging coupling

Collect as many of these evidence classes as are available:

- **Structural evidence:** imports, package manifests, module references, HTTP or RPC client usage, database access patterns
- **Contract evidence:** OpenAPI, Protobuf, GraphQL schema, JSON schema, published DTOs, interface definitions
- **Change-history evidence:** git churn, co-change patterns, release notes, recurring refactors
- **Organizational evidence:** owners, CODEOWNERS, team boundaries, release independence, deployment boundaries
- **Architecture intent evidence:** ADRs, diagrams, comments, explicit layering rules

If one or more classes are missing, continue, but lower confidence in the final findings.

### 3. Build a module or service inventory

For each element under analysis, record:

- name and location
- responsibility
- owner or team if known
- inbound and outbound dependencies
- interface or contract surface
- deployment boundary if relevant
- volatility indicators

Use `references/coupling-analysis-workflow.md` and `assets/module-inventory-template.csv` to keep the inventory consistent.

### 4. Map dependencies carefully

Build a directed dependency map where `A → B` means **A depends on B**.

Distinguish between these edge types:

- package or manifest dependency
- code import or compile-time dependency
- runtime/service call dependency
- data-store or schema dependency
- implicit workflow or co-change dependency

Important: a package graph is not the same as an import graph, and neither is the same as a runtime interaction map.

### 5. Classify integration strength

Classify each important dependency from strongest to weakest.

#### Intrusive coupling

Downstream depends on implementation details not designed as a public integration surface.

Typical signals:

- reflection or private-member access
- reading another service's database directly
- depending on internal file layout or internal config structure
- monkey-patching internals
- reaching into private fields or undocumented internals

#### Functional coupling

Modules or services must evolve together because of shared business logic, required sequencing, transaction boundaries, or duplicated rules.

Common forms:

- **Sequential/temporal:** steps must happen in a strict order
- **Transactional:** operations must succeed or fail together
- **Symmetric:** duplicated rules must stay aligned even without direct code references

#### Model coupling

Downstream consumes upstream's internal model rather than an integration-specific representation.

Signals:

- importing upstream domain types directly
- exposing internal enums or internal value semantics externally
- large payloads containing internal fields the consumer does not need
- consumers relying on internal field names, ordering, types, or magic values

#### Contract coupling

Upstream exposes a stable, intentional, versionable interface designed for consumers.

Good signs:

- dedicated DTOs or view models
- versioned APIs or schemas
- explicit OpenAPI / Protobuf / IDL / schema documentation
- minimal consumer-oriented fields
- anti-corruption layers, facades, adapters, or published language patterns

Before calling an integration "contract coupling," verify that the contract is actually intentional and not just an internal model renamed for external use.

### 6. Assess distance

Assess distance beyond code location alone.

Use these factors:

- lexical or structural distance in the codebase
- package, module, library, or repository boundary
- process or runtime boundary
- deployment boundary
- network boundary
- ownership or team boundary
- release independence

As a practical rule, increase effective distance when:

- different teams own the elements
- they release independently
- they cross process or network boundaries
- failure or coordination must cross organizational lines

### 7. Assess volatility

Estimate volatility using the strongest available evidence.

Preferred order:

1. business and subdomain context
2. git history and temporal coupling
3. release or incident history
4. code signals and comments

Helpful signals:

- high churn in files or directories
- frequent co-change between elements
- repeated TODO/FIXME or unstable interfaces
- multiple API versions and migration churn
- business-rule-heavy code in core areas
- repeated coordinated deployments

A supporting module can still be effectively volatile if changes in a volatile core repeatedly force changes into it.

### 8. Rate risk and confidence

Use the rubric in `references/coupling-analysis-rubric.md`.

At minimum, each finding should include:

- coupling pair or set
- strength rating
- distance rating
- volatility rating
- effective risk or severity
- evidence used
- confidence level
- recommended next action

Confidence should be lower when analysis is based only on static edges or when git history, runtime behavior, or ownership data is unavailable.

### 9. Produce a prioritized report

Use `references/report-template.md`.

Prioritize findings by maintenance and coordination risk, not just by the presence of coupling. Strong local coupling inside a cohesive module can be healthy; weak but noisy coupling across distant volatile teams can still be expensive.

### 10. Recommend remediation or acceptance

Choose remediation proportional to the finding:

- intrusive coupling → remove access to internals; introduce an explicit interface or contract
- functional coupling across distant elements → co-locate logic, extract shared policy, or formalize workflow ownership
- model coupling → introduce consumer-oriented DTOs or anti-corruption layers
- acceptable stable coupling → document why it is acceptable, preferably with an ADR

If the task shifts from diagnosis to enforcement, hand off to architecture-testing or rule-enforcement work.

## Best Practices

### Do

- analyze one abstraction level at a time
- combine structural, contract, change-history, and organizational evidence when possible
- treat team and deployment boundaries as part of effective distance
- inspect API and schema contracts before calling an integration healthy
- distinguish package dependencies from code imports and runtime calls
- report uncertainty explicitly with a confidence field
- separate observations, interpretation, and recommendations
- keep examples and findings tied to concrete evidence
- document intentionally accepted coupling with an ADR or similar record

### Don't

- conclude architectural risk from static import graphs alone
- assume all strong coupling is bad; local cohesion can be correct
- assume all remote contract coupling is safe; volatility and ownership still matter
- mix class-level and service-level findings in one undifferentiated diagram
- overstate precision of simplified formulas or binary scoring
- treat duplicated business logic as independent just because there is no direct reference
- ignore generated code, reflection, dynamic imports, or runtime indirection

## Troubleshooting

### Problem: Static import graph overstates coupling

**Symptoms:** The graph shows many edges, but many are framework wiring, test-only imports, generated code, or harmless transitive references.

**Solution:** Filter test, generated, vendor, and framework-heavy paths. Compare import edges with runtime calls, contracts, and actual change history. Reclassify findings only after verifying that the dependency affects maintenance or coordination cost.

### Problem: No git history or only a shallow clone is available

**Symptoms:** You cannot estimate churn or temporal coupling reliably.

**Solution:** Fall back to release notes, ADRs, TODO/FIXME density, API version history, and user or team input. Mark volatility confidence as reduced. Do not present churn claims as facts without history.

### Problem: Hidden functional or symmetric coupling is not visible in the dependency graph

**Symptoms:** Modules do not import each other, but changes still need synchronized edits, tests, or deployments.

**Solution:** Look for co-change patterns, duplicated business rules, repeated validation logic, cross-service deployment notes, and comments such as "update X when Y changes." Static structure alone is insufficient here.

### Problem: Reflection, dynamic imports, generated code, or framework magic hide dependencies

**Symptoms:** Runtime behavior suggests coupling that the static graph misses.

**Solution:** Inspect framework configuration, code generation inputs, runtime traces, semantic analysis output, or richer static-analysis tools where available. Lower confidence if the hidden edges cannot be verified.

### Problem: Ownership or team data is missing

**Symptoms:** You can see cross-boundary dependencies, but not whether they cross real communication or release boundaries.

**Solution:** Use CODEOWNERS, repository layout, deployment pipelines, on-call ownership, or explicit assumptions. If ownership remains inferred rather than confirmed, state that in the report and lower confidence in distance scoring.

### Problem: Contract coupling is being overstated

**Symptoms:** A dependency is labeled contract coupling, but the interface still leaks internal models, enums, or unnecessary fields.

**Solution:** Re-check the integration against consumer-oriented DTOs, versioning, minimal field exposure, and explicit schema documentation. Reclassify as model coupling if the contract is merely a thin exposure of internals.

## Examples

### Example 1: Module-level coupling review inside a monolith

```text
Use @coupling-analysis to analyze coupling between the billing, pricing, and discounts packages. Work at the module/package level only. Build a dependency map, check for duplicated pricing rules, use git history if available, and produce a prioritized report with confidence levels.
```

Expected output shape:

- scope and abstraction level
- dependency inventory
- top coupling findings with evidence
- risk and confidence per finding
- prioritized remediation list

See `examples/module-level-analysis-example.md`.

### Example 2: Service integration review with contract-first analysis

```text
Use @coupling-analysis to assess whether the Orders service is too coupled to Customer Profile and Pricing. Inspect OpenAPI or Protobuf contracts first, then analyze runtime/service dependencies, team ownership, and release coordination. Flag any model leakage or cross-team high-volatility coupling.
```

See `examples/service-level-analysis-example.md`.

### Example 3: Safe evidence gathering in a repository

```bash
# review available commands before running them
sed -n '1,220p' references/dependency-evidence-cookbook.md
```

Then choose only the commands relevant to the ecosystem under analysis.

### Example 4: Produce a standardized report

```text
Use @coupling-analysis on the checkout workflow and format the final answer using references/report-template.md. Include findings only where evidence is concrete, and mark low-confidence areas explicitly.
```

## Related Skills

- `@domain-analysis` — use when the real question is bounded contexts, domain ownership, or domain redesign
- `@component-identification-sizing` — use when the real task is deciding component split or merge size
- `@architecture-review` — use when coupling is one input to a broader architecture assessment
- `@dependency-mapping` — use when the immediate need is a dependency map rather than a coupling judgment
- architecture testing or enforcement skills — use when the task becomes converting findings into automated rules or tests

## Additional Resources

### Local references

- [Workflow guide](references/coupling-analysis-workflow.md)
- [Rubric and confidence model](references/coupling-analysis-rubric.md)
- [Dependency evidence cookbook](references/dependency-evidence-cookbook.md)
- [Report template](references/report-template.md)
- [Troubleshooting playbook](references/troubleshooting-playbook.md)

### Local examples

- [Module-level analysis example](examples/module-level-analysis-example.md)
- [Service-level analysis example](examples/service-level-analysis-example.md)
- [Dependency commands by ecosystem](examples/dependency-commands-by-ecosystem.md)

### Local assets

- `assets/module-inventory-template.csv`
- `assets/coupling-report-template.md`
- `assets/adr-template-accepted-coupling.md`

## Notes and limitations

- Volatility is strongest when supported by real change history rather than static inspection alone.
- Symmetric functional coupling often requires semantic reading and co-change analysis; many static tools will miss it.
- Organizational distance may need user confirmation.
- Dynamic connascence and runtime coordination may require runtime evidence.
- Analysis should improve decisions, not pretend certainty where evidence is incomplete.
- These concepts are based on _Balancing Coupling in Software Design_ by Vlad Khononov.

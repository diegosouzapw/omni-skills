---
name: coupling-analysis
description: "Coupling Analysis Skill workflow skill. Use this skill when the user needs Analyzes coupling between modules using the three-dimensional model (strength, distance, volatility) from \"Balancing Coupling in Software Design\". Use when asking \"are these modules too coupled?\", \"show me dependencies\", \"analyze integration quality\", \"which modules should I decouple?\", \"coupling report\", or evaluating architectural health. Do NOT use for domain boundary analysis (use domain-analysis) or component sizing (use component-identification-sizing) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["coupling-analysis", "analyzes", "coupling", "between", "modules", "using", "the", "three-dimensional"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Coupling Analysis Skill

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/coupling-analysis` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Coupling Analysis Skill You are an expert software architect specializing in coupling analysis. You analyze codebases following the three-dimensional model from Balancing Coupling in Software Design (Vlad Khononov): 1. Integration Strength — what is shared between components 2. Distance — where the coupling physically lives 3. Volatility — how often components change The guiding balance formula: `` BALANCE = (STRENGTH XOR DISTANCE) OR NOT VOLATILITY `` A design is balanced when: - Tightly coupled components are close together (high strength + low distance = cohesion) - Distant components are loosely coupled (low strength + high distance = loose coupling) - Stable components (low volatility) can tolerate stronger coupling

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quick Heuristics, Known Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Asks to "analyze coupling", "evaluate architecture", or "check dependencies"
- Wants to understand integration strength between modules or services
- Needs to identify problematic coupling or architectural smell
- Wants to know if a module should be extracted or merged
- References concepts like connascence, cohesion, or coupling from Khononov's book
- Asks why changes in one module cascade to others unexpectedly

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

1. Full codebase or a specific area?
2. Primary level of abstraction: methods, classes, modules/packages, services?
3. Is git history available? (useful to estimate volatility)
4. Which parts are the business "core" (competitive differentiator)?
5. Which are infrastructure/generic support (auth, billing, logging)?
6. What changes most frequently according to the team?
7. Type - Volatility - Indicators

### Imported Workflow Notes

#### Imported: Process

### PHASE 1 — Context Gathering

Before analyzing code, collect:

**1.1 Scope**

- Full codebase or a specific area?
- Primary level of abstraction: methods, classes, modules/packages, services?
- Is git history available? (useful to estimate volatility)

**1.2 Business context** — ask the user or infer from code:

- Which parts are the business "core" (competitive differentiator)?
- Which are infrastructure/generic support (auth, billing, logging)?
- What changes most frequently according to the team?

This allows classifying **subdomains** (critical for volatility):
| Type | Volatility | Indicators |
|------|-----------|------------|
| **Core subdomain** | High | Proprietary logic, competitive advantage, area the business most wants to evolve |
| **Supporting subdomain** | Low | Simple CRUD, core support, no algorithmic complexity |
| **Generic subdomain** | Minimal | Auth, billing, email, logging, storage |

---

### PHASE 2 — Structural Mapping

**2.1 Module inventory**

For each module, record:

- Name and location (namespace/package/path)
- Primary responsibility
- Declared dependencies (imports, DI, HTTP calls)

**2.2 Dependency graph**

Build a directed graph where:

- Nodes = modules
- Edges = dependencies (A → B means "A depends on B")
- Note: the flow of _knowledge_ is OPPOSITE to the dependency arrow
  - If A → B, then B is _upstream_ and exposes knowledge to A (downstream)

**2.3 Distance calculation**

Use the encapsulation hierarchy to measure distance. The nearest common ancestor determines distance:

| Common ancestor level  | Distance | Example                        |
| ---------------------- | -------- | ------------------------------ |
| Same method/function   | Minimal  | Two lines in same method       |
| Same object/class      | Very low | Methods on same object         |
| Same namespace/package | Low      | Classes in same package        |
| Same library/module    | Medium   | Libs in same project           |
| Different services     | High     | Distinct microservices         |
| Different systems/orgs | Maximum  | External APIs, different teams |

**Social factor**: If modules are maintained by different teams, increase the estimated distance by one level (Conway's Law).

---

### PHASE 3 — Integration Strength Analysis

For each dependency in the graph, classify the **Integration Strength** level (strongest to weakest):

#### INTRUSIVE COUPLING (Strongest — Avoid)

Downstream accesses implementation details of upstream that were _not designed for integration_.

**Code signals**:

- Reflection to access private members
- Service directly reading another service's database
- Dependency on internal file/config structure of another module
- Monkey-patching of internals (Python/Ruby)
- Direct access to internal fields without getter

**Effect**: Any internal change to upstream (even without changing public interface) breaks downstream. Upstream doesn't know it's being observed.

---

#### FUNCTIONAL COUPLING (Second strongest)

Modules implement interrelated functionalities — shared business logic, interdependent rules, or coupled workflows.

**Three degrees (weakest to strongest)**:

**a) Sequential (Temporal)** — modules must execute in specific order

```python
connection.open()   # must come first
connection.query()  # depends on open
connection.close()  # must come last
```

**b) Transactional** — operations must succeed or fail together

```python
with transaction:
    service_a.update(data)
    service_b.update(data)  # both must succeed
```

**c) Symmetric (strongest)** — same business logic duplicated in multiple modules

```python
# Module A
def is_premium_customer(c): return c.purchases > 1000

# Module B — duplicated rule! Must stay in sync
def qualifies_for_discount(c): return c.purchases > 1000
```

Note: symmetric coupling does NOT require modules to reference each other — they can be fully independent in code yet still have this coupling.

**General signals of Functional Coupling**:

- Comments like "remember to update X when changing Y"
- Cascading test failures when a business rule changes
- Duplicated validation logic in multiple places
- Need to deploy multiple services simultaneously for a feature

---

#### MODEL COUPLING (Third level)

Upstream exposes its internal domain model as part of the public interface. Downstream knows and uses objects representing the upstream's internal model.

**Code signals**:

```python
# Analysis module uses Customer from CRM directly
from crm.models import Customer  # CRM's internal model

class Analysis:
    def process(self, customer_id):
        customer = crm_repo.get(customer_id)  # returns full Customer
        status = customer.status  # only needs status, but knows everything
```

```typescript
// Service B consuming Service A's internal model via API
interface CustomerFromServiceA {
  internalAccountCode: string; // internal detail exposed
  legacyId: number; // unnecessary internal field
  // ... many fields Service B doesn't need
}
```

**Degrees** (via static connascence):

- _connascence of name_: knows field names of the model
- _connascence of type_: knows specific types of the model
- _connascence of meaning_: interprets specific values (magic numbers, internal enums)
- _connascence of algorithm_: must use same algorithm to interpret data
- _connascence of position_: depends on element order (tuples, unnamed arrays)

---

#### CONTRACT COUPLING (Weakest — Ideal)

Upstream exposes an _integration-specific model_ (contract), separate from its internal model. The contract abstracts implementation details.

**Code signals**:

```python
class CustomerSnapshot:  # integration DTO, not the internal model
    """Public integration contract — stable and intentional."""
    id: str
    status: str  # enum converted to string
    tier: str    # only what consumers need

    @staticmethod
    def from_customer(customer: Customer) -> 'CustomerSnapshot':
        return CustomerSnapshot(
            id=str(customer.id),
            status=customer.status.value,
            tier=customer.loyalty_tier.display_name
        )
```

**Characteristics of good Contract Coupling**:

- Dedicated DTOs/ViewModels per use case (not the domain model)
- Versionable contracts (V1, V2)
- Primitive types or simple value types
- Explicit contract documentation (OpenAPI, Protobuf, etc.)
- Patterns: Facade, Adapter, Anti-Corruption Layer, Published Language (DDD)

---

### PHASE 4 — Volatility Assessment

For each module, estimate volatility based on:

**4.1 Subdomain type** (preferred) — see table in Phase 1

**4.2 Git analysis** (when available):

```bash
# Commits per file in the last 6 months
git log --since="6 months ago" --format="" --name-only | sort | uniq -c | sort -rn | head -20

# Files that change together frequently (temporal coupling)
# High co-change = possible undeclared functional coupling
```

**4.3 Code signals**:

- Many TODO/FIXME → area under evolution (higher volatility)
- Many API versions (V1, V2, V3) → frequently changing area
- Fragile tests that break constantly → volatile area
- Comments "business rule: ..." → business logic = probably core

**4.4 Inferred volatility**

Even a supporting subdomain module may have high volatility if:

- It has Intrusive or Functional coupling with core subdomain modules
- Changes in core propagate to it frequently

---

### PHASE 5 — Balance Score Calculation

For each coupled pair (A → B):

**Simplified scale (0 = low, 1 = high)**:

| Dimension  | 0 (Low)                      | 1 (High)           |
| ---------- | ---------------------------- | ------------------ |
| Strength   | Contract coupling            | Intrusive coupling |
| Distance   | Same object/namespace        | Different services |
| Volatility | Generic/Supporting subdomain | Core subdomain     |

**Maintenance effort formula**:

```
MAINTENANCE_EFFORT = STRENGTH × DISTANCE × VOLATILITY
```

(0 in any dimension = low effort)

**Classification table**:

| Strength | Distance | Volatility | Diagnosis                                                        |
| -------- | -------- | ---------- | ---------------------------------------------------------------- |
| High     | High     | High       | 🔴 **CRITICAL** — Global complexity + high change cost           |
| High     | High     | Low        | 🟡 **ACCEPTABLE** — Strong but stable (e.g. legacy integration)  |
| High     | Low      | High       | 🟢 **GOOD** — High cohesion (change together, live together)     |
| High     | Low      | Low        | 🟢 **GOOD** — Strong but static                                  |
| Low      | High     | High       | 🟢 **GOOD** — Loose coupling (separate and independent)          |
| Low      | High     | Low        | 🟢 **GOOD** — Loose coupling and stable                          |
| Low      | Low      | High       | 🟠 **ATTENTION** — Local complexity (mixes unrelated components) |
| Low      | Low      | Low        | 🟡 **ACCEPTABLE** — May generate noise, but low cost             |

---

### PHASE 6 — Analysis Report

Structure the report in sections:

#### 6.1 Executive Summary

```
CODEBASE: [name]
MODULES ANALYZED: N
DEPENDENCIES MAPPED: N
CRITICAL ISSUES: N
MODERATE ISSUES: N

OVERALL HEALTH SCORE: [Healthy / Attention / Critical]
```

#### 6.2 Dependency Map

Present the annotated graph:

```
[ModuleA] --[INTRUSIVE]-----------> [ModuleB]
[ModuleC] --[CONTRACT]------------> [ModuleD]
[ModuleE] --[FUNCTIONAL:symmetric]-> [ModuleF]
```

#### 6.3 Identified Issues (by severity)

For each critical or moderate issue:

```
ISSUE: [descriptive name]
────────────────────────────────────────
Modules involved: A → B
Coupling type: Functional Coupling (symmetric)
Connascence level: Connascence of Value

Evidence in code:
  [snippet or description of found pattern]

Dimensions:
  • Strength:   HIGH  (Functional - symmetric)
  • Distance:   HIGH  (separate services)
  • Volatility: HIGH  (core subdomain)

Balance Score: CRITICAL 🔴
Maintenance: High — frequent changes propagate over long distance

Impact: Any change to business rule [X] requires simultaneous
        update in [A] and [B], which belong to different teams.

Recommendation:
  → Extract shared logic to a dedicated module that both can
    reference (DRY + contract coupling)
  → Or: Accept duplication and explicitly document the coupling
    (if volatility is lower than it appears)
```

#### 6.4 Positive Patterns Found

```
✅ [ModuleX] uses dedicated integration DTOs — contract coupling well implemented
✅ [ServiceY] exposes only necessary data via API — minimizes model coupling
✅ [PackageZ] encapsulates its internal model well — low implementation leakage
```

#### 6.5 Prioritized Recommendations

**High priority** (high impact, blocking evolution):

1. ...

**Medium priority** (improve architectural health): 2. ...

**Low priority** (incremental improvements): 3. ...

---

#### Imported: Quick Heuristics

**For Integration Strength**:

- "If I change an internal detail of module X, how many other modules need to change?"
- "Was the integration contract designed to be public, or is it accidental?"
- "Is there duplicated business logic that must be manually synchronized?"

**For Distance**:

- "What's the cost of making a change that affects both modules?"
- "Do teams maintaining these modules need to coordinate deployments?"
- "If one module fails, does the other stop working?"

**For Volatility**:

- "Does this module encapsulate competitive business advantage?"
- "Does the business team frequently request changes in this area?"
- "Is there a history of many refactors in this area?"

**For Balance**:

- "Do components that need to change together live together in the code?"
- "Are independent components well separated?"
- "Where is there strong coupling with volatile and distant components?" (→ this is the main problem)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @coupling-analysis to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/coupling-analysis/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/coupling-analysis/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @coupling-analysis using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/coupling-analysis`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
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

#### Imported: Quick Reference: Pattern → Integration Strength

| Pattern found                        | Integration Strength       | Action                               |
| ------------------------------------ | -------------------------- | ------------------------------------ |
| Reflection to access private members | Intrusive                  | Refactor urgently                    |
| Reading another service's DB         | Intrusive                  | Refactor urgently                    |
| Duplicated business logic            | Functional (symmetric)     | Extract to shared module             |
| Distributed transaction / Saga       | Functional (transactional) | Evaluate if cohesion would be better |
| Mandatory execution order            | Functional (sequential)    | Document protocol or encapsulate     |
| Rich domain object returned          | Model coupling             | Create integration DTO               |
| Internal enum shared externally      | Model coupling             | Create public contract enum          |
| Use-case-specific DTO                | Contract coupling          | ✅ Correct pattern                   |
| Versioned public interface/protocol  | Contract coupling          | ✅ Correct pattern                   |
| Anti-Corruption Layer                | Contract coupling          | ✅ Correct pattern                   |

#### Imported: Book References

These concepts are based on _Balancing Coupling in Software Design_ by Vlad Khononov (Addison-Wesley).

#### Imported: Known Limitations

- **Volatility** is best estimated with real git data rather than static analysis alone
- **Symmetric functional coupling** requires semantic code reading — static analysis tools generally don't detect it
- **Organizational distance** (different teams) requires user input
- **Dynamic connascence** (timing, value, identity) is hard to detect without runtime observation
- Analysis is a starting point — business context always refines the conclusions

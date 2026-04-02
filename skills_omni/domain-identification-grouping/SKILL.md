---
name: "domain-identification-grouping"
description: "Domain identification and grouping workflow skill. Use this skill when a user needs to group existing components into logical business domains or bounded contexts to support service decomposition, modernization, or domain-aligned refactoring. Use it for questions like \\"which components belong together?\\", \\"group these into services\\", \\"organize by domain\\", or \\"create a component-to-domain mapping\\". Do not use it for discovering entirely new business domains from scratch or for detailed dependency and coupling analysis."
version: "0.0.1"
category: "development"
tags:
  - "domain-identification-grouping"
  - "bounded-context"
  - "ddd"
  - "microservices"
  - "service-decomposition"
  - "component-mapping"
  - "modernization"
  - "domain-driven-design"
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
upstream_skill: "skills/domain-identification-grouping"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Domain Identification and Grouping

## Overview

This skill groups existing components into logical business domains or candidate bounded contexts so an operator can prepare for service decomposition, modularization, or domain-aligned refactoring.

It is most useful after a component inventory already exists and before irreversible structural changes are made. The output should be an auditable mapping, not just an intuition dump: domain names, component assignments, rationale, confidence, shared-component decisions, and a lightweight context map.

This curated version preserves the upstream intent from `tech-leads-club/agent-skills` while making the workflow more operational for Omni Skills use.

## When to Use This Skill

Use this skill when you need to:

- group an existing set of modules, packages, services, folders, or components into business-aligned domains
- prepare a monolith or modular codebase for later service extraction
- decide which components belong together before namespace, package, or repo refactoring
- build a component-to-domain mapping table for architecture review
- validate whether current structure reflects business capability boundaries
- create a lightweight domain catalog and context map for stakeholder review

Do **not** use this skill when you need to:

- discover entirely new domains from business events, product strategy, or greenfield modeling alone
- perform detailed dependency or coupling measurement across components
- redesign the organization or team topology as the primary task
- execute large-scale package renames immediately without validation
- infer final service boundaries from code layout alone

### Minimum useful inputs

Prefer at least some of the following:

- component inventory or module list
- package, namespace, folder, or repository structure
- short responsibility summary for each component if available
- known owners, teams, or maintainers
- business vocabulary from docs, tickets, APIs, or UI labels
- high-level workflow or data-flow hints

If inputs are weak, keep ambiguity visible instead of forcing clean assignments.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First pass on a codebase | `references/domain-grouping-workflow.md` | Gives the phased workflow, gates, and outputs |
| Assigning components to domains | `references/domain-grouping-decision-rubric.md` | Prevents grouping by folder shape alone |
| Normalizing business language | `references/domain-glossary-template.md` | Helps extract ubiquitous language before assignment |
| Documenting inter-domain relationships | `references/context-map-template.md` | Produces an actionable context map instead of just a list |
| Need an example output | `examples/component-to-domain-mapping-example.md` | Shows the expected level of evidence and confidence |
| Preparing stakeholder review | `examples/stakeholder-validation-agenda.md` | Adds a validation checkpoint before refactoring recommendations |
| Routing uncertainty to adjacent skills | `agents/domain-grouping-router.md` | Helps hand off to discovery or coupling-oriented skills |

## Workflow

Follow this sequence. Do not jump straight from folder names to refactoring recommendations.

1. **Collect the inventory**
   - List candidate components, modules, packages, services, jobs, adapters, and shared libraries.
   - Capture current namespace or folder path.
   - Note any known owners, users, or business processes.
   - Stop and ask for more input if there is no usable inventory.

2. **Extract business vocabulary**
   - Scan names, docs, tickets, API paths, UI labels, and comments for recurring business terms.
   - Normalize synonyms in a glossary.
   - Separate business language from technical labels such as `controller`, `service`, `repository`, or `utils`.

3. **Propose candidate domains**
   - Group by business capability and bounded-context signals, not by technical layer.
   - Draft candidate domain names using business terms.
   - For each candidate domain, record its main capability, primary actors, and likely data ownership.

4. **Assign components with evidence**
   - For each component, record a proposed domain.
   - Add rationale using the rubric: business capability, vocabulary, data ownership, workflow cohesion, change cadence, and team ownership where known.
   - Add a confidence level and note any alternatives if assignment is ambiguous.

5. **Handle edge cases explicitly**
   - Identify components that appear shared, cross-cutting, or ambiguous.
   - Classify shared components deliberately: utility/platform, cross-cutting infrastructure, published language, anti-corruption adapter, or temporary unresolved ownership.
   - Avoid creating a large catch-all `shared` domain.

6. **Validate domain boundaries**
   - Check whether each domain has coherent responsibilities and a clear boundary.
   - Revisit components that only fit because of technical proximity, shared tables, or UI adjacency.
   - Confirm whether transactional consistency, language, and ownership signals support the grouping.

7. **Review with stakeholders**
   - Review candidate domains and contentious assignments with product, architecture, or domain stakeholders.
   - Capture disagreements, renamed domains, and open questions.
   - Do not treat code-only inference as final when business evidence is weak.

8. **Produce the output bundle**
   - Domain glossary
   - Domain catalog
   - Component-to-domain mapping table
   - Shared-component decision log
   - Lightweight context map
   - Open questions and next-step recommendations

9. **Recommend next steps safely**
   - If validated, propose incremental namespace or package alignment.
   - Include impact analysis, dependency review, tests, and rollback notes.
   - Treat refactoring as downstream work, not an automatic result of grouping.

## Expected Outputs

A strong run of this skill should produce most of the following artifacts:

| Artifact | Required content |
| --- | --- |
| Domain glossary | normalized business terms, synonyms, unresolved terms |
| Domain catalog | domain name, capability, owner/steward, data ownership notes, integration notes |
| Component mapping table | component, current location, assigned domain, rationale, confidence, open issues |
| Shared decision log | component, shared classification type, reason, follow-up owner |
| Context map | domains plus upstream/downstream or dependency relationships |
| Refactoring notes | only after validation; scope, safety checks, tests, rollback notes |

## Decision Criteria

Use multiple signals together. A component should not be assigned to a domain based on just one weak cue.

Primary signals:

- **Business capability:** what business outcome does the component support?
- **Ubiquitous language:** which domain terms appear in names, docs, payloads, or workflows?
- **Data ownership:** which domain should own the data and invariants?
- **Workflow cohesion:** which components participate in the same business process?
- **Change cadence:** which parts evolve together because of business policy changes?
- **Primary actors:** which users, teams, or external systems depend on the component's behavior?
- **Policy consistency:** does the component enforce rules that belong to one domain or multiple domains?
- **Ownership hints:** which team or steward is best positioned to own the boundary?

Weak signals that should not dominate by themselves:

- same folder or repo
- same database schema or table access
- same UI screen
- same framework layer
- historical naming accidents

## Best Practices

### Do

- group by business capability and bounded context, not by controllers, repositories, or framework layers
- record rationale per assignment so a reviewer can audit why the mapping exists
- preserve uncertainty with confidence labels and open questions
- validate ambiguous boundaries with business stakeholders when possible
- document upstream/downstream domain relationships, not just component buckets
- capture owner or steward information where known
- classify shared components narrowly and deliberately
- use incremental refactoring recommendations after validation, not before

### Don't

- do not decompose directly by technical layers such as `api`, `service`, `model`, or `dao`
- do not assume source code alone can reveal final business boundaries with certainty
- do not turn `shared` into a dumping ground for unresolved ownership
- do not merge domains just because they share a database or deployment artifact
- do not force every component into a clean answer if the evidence is weak
- do not recommend broad namespace moves without dependency review and tests
- do not confuse context mapping with coupling analysis; they are related but different tasks

## Examples

### Example 1: Ask for a component-to-domain mapping

```text
Group these existing modules into business domains. For each module, give the assigned domain, rationale, confidence level, and any open questions. Use business capability, vocabulary, and data ownership rather than folder structure alone.
```

### Example 2: Build a domain glossary first

```text
Before assigning domains, extract recurring business vocabulary from these package names, API routes, and ticket titles. Normalize synonyms and propose candidate domain names.
```

### Example 3: Produce an auditable mapping and context map

```text
Create a domain grouping report for this codebase inventory. Include:
1. domain glossary
2. domain catalog
3. component-to-domain mapping table
4. shared component decisions
5. lightweight context map
6. next-step recommendations only if the grouping is validated
```

### Example 4: Review a questionable shared domain

```text
We currently have a large `shared` area containing login, notification, money formatting, customer adapters, and reporting exports. Re-evaluate whether each item is truly shared, cross-cutting infrastructure, a published language, an anti-corruption layer, or misassigned domain logic.
```

### Example 5: Safe follow-up refactoring recommendation

```text
Using the validated domain grouping, suggest only incremental namespace alignment steps. Include dependency impact, test scope, rollback notes, and components that should not be moved yet.
```

See also:

- [Component-to-domain mapping example](examples/component-to-domain-mapping-example.md)
- [Context map example](examples/context-map-example.md)
- [Stakeholder validation agenda](examples/stakeholder-validation-agenda.md)

## Troubleshooting

### Problem: The grouping mirrors technical layers instead of business domains

**Symptoms:** Domains come out as `controllers`, `services`, `repositories`, `shared-utils`, or similar technical partitions.

**Solution:** Re-run the grouping using business capability and vocabulary as the starting point. Ignore folder symmetry at first. Ask which user need, policy set, or business workflow each component supports, then regroup using the decision rubric.

### Problem: Too many components end up in `shared`

**Symptoms:** `shared` becomes the largest domain, or many components are marked shared because ownership is unclear.

**Solution:** Reclassify each item into one of these buckets: true utility/platform, cross-cutting infrastructure, published language, anti-corruption adapter, or temporarily unresolved ownership. If a component contains domain rules, assign it to a primary domain and note consumers separately.

### Problem: A component seems to belong to multiple domains

**Symptoms:** The same component participates in more than one workflow or uses vocabulary from multiple business areas.

**Solution:** Identify the component's primary responsibility and policy owner. Record the main domain assignment, reduce confidence if needed, and note alternative placements or required decomposition. If it is an adapter between contexts, classify it explicitly rather than forcing a false pure-domain assignment.

### Problem: Stakeholders disagree about domain names or boundaries

**Symptoms:** Engineering, product, and operations use different names for similar areas, or they disagree on where a capability belongs.

**Solution:** Normalize terms in the glossary, present the competing interpretations, and ask which boundary best reflects ownership, policy, and data responsibility. Record unresolved disagreements as open questions instead of hiding them.

### Problem: Legacy code has weak business language

**Symptoms:** Names are generic, overloaded, or heavily technical, making grouping from code alone unreliable.

**Solution:** Supplement code reading with ticket analysis, API descriptions, UI labels, docs, commit history, and stakeholder interviews. If available, use an event-storming or workflow-based conversation to recover business language before finalizing the map.

### Problem: Refactoring recommendations are too aggressive

**Symptoms:** The output jumps from candidate groupings to broad rename or extraction plans without validation.

**Solution:** Separate boundary identification from implementation changes. Limit recommendations to reversible next steps, require dependency review and tests, and defer large moves until stakeholders validate the grouping.

## Related Skills

- `@domain-analysis` - use when the task is to discover or model domains from scratch rather than grouping known components
- `@coupling-analysis` - use when the task is to quantify dependency, coupling, or change impact between components
- downstream service extraction or migration planning skills - use after the grouping is validated and the next question becomes sequencing, extraction, or rollout

## Additional Resources

Local support pack:

- [Workflow reference](references/domain-grouping-workflow.md)
- [Decision rubric](references/domain-grouping-decision-rubric.md)
- [Domain glossary template](references/domain-glossary-template.md)
- [Context map template](references/context-map-template.md)
- [Component mapping example](examples/component-to-domain-mapping-example.md)
- [Context map example](examples/context-map-example.md)
- [Stakeholder validation agenda](examples/stakeholder-validation-agenda.md)
- [Routing guidance](agents/domain-grouping-router.md)

External references that informed the operating model:

- Martin Fowler - Bounded Context
- Martin Fowler - Decomposing by Business Capability
- Microsoft Azure Architecture Center - Identify microservice boundaries
- Google Cloud Architecture Framework - Domain-driven design for microservices
- AWS Prescriptive Guidance - Decompose monoliths into microservices using DDD
- DDD community guidance on context mapping

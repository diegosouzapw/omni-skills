# Domain Grouping Workflow Reference

Use this file when you need a compact execution guide for grouping existing components into business domains.

## Phase 1: Establish the inventory

Inputs:

- component or module list
- current namespaces, folders, or package names
- known owners or teams
- any available docs, tickets, API routes, or UI labels

Outputs:

- normalized inventory table
- missing-information list

Gate:

- stop if there is no usable list of components or responsibilities

## Phase 2: Extract and normalize domain language

Actions:

- scan names, docs, endpoints, payloads, UI labels, and ticket titles
- collect recurring business terms
- merge synonyms and flag overloaded terms

Outputs:

- draft glossary
- candidate domain terms

## Phase 3: Propose candidate domains

Actions:

- cluster around business capability
- note actors, policy areas, and likely data ownership
- avoid technical-layer labels

Outputs:

- candidate domain catalog

## Phase 4: Assign components with rationale

For each component, capture:

- proposed domain
- evidence
- confidence
- alternatives if unclear

Recommended confidence scale:

- High: multiple strong signals agree
- Medium: likely fit, but one or more signals are weak
- Low: ambiguous or contested assignment

## Phase 5: Review edge cases

Evaluate whether a component is:

- domain-owned
- utility/platform
- cross-cutting infrastructure
- published language
- anti-corruption adapter
- temporarily unresolved

## Phase 6: Validate boundaries

Checks:

- does the domain represent a distinct business capability?
- are policy rules coherent inside the domain?
- is data ownership reasonably clear?
- are technical-layer artifacts driving the grouping too much?

## Phase 7: Stakeholder review

Review with domain-aware stakeholders when possible.

Capture:

- renamed domains
- disputed assignments
- open questions
- validation status

## Phase 8: Produce the bundle

Recommended output bundle:

1. glossary
2. domain catalog
3. component mapping table
4. shared decision log
5. context map
6. cautious next steps

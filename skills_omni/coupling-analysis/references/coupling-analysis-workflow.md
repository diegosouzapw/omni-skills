# Coupling Analysis Workflow

Use this worksheet when executing the skill.

## 1. Scope selection

Capture these fields before analysis:

- codebase or subsystem:
- abstraction level for this pass: function/class | module/package | service/system
- user question:
- desired output: triage | review packet | detailed report
- excluded areas:

## 2. Evidence checklist

Mark available evidence classes.

- [ ] source tree and code imports
- [ ] package or module manifests
- [ ] runtime/service call definitions
- [ ] OpenAPI / Protobuf / GraphQL / JSON Schema / IDL
- [ ] ADRs or architecture diagrams
- [ ] git history
- [ ] CODEOWNERS or team ownership data
- [ ] release or deployment pipeline data

## 3. Module inventory

For each element, capture:

- name
- path or identifier
- responsibility
- owner/team
- inbound dependencies
- outbound dependencies
- interface/contract surface
- deployment boundary
- volatility notes

## 4. Dependency mapping

Create edges as `A -> B` where A depends on B.

Classify each edge as one or more of:

- manifest dependency
- import/compile dependency
- runtime call dependency
- schema/data dependency
- workflow/co-change dependency

## 5. Integration strength classification

Classify the most important edge type for each finding.

### Intrusive

Use when downstream accesses internals not designed for integration.

Examples:
- private member access
- direct database reads across service boundaries
- reliance on internal file or config layout

### Functional

Use when elements must evolve together due to workflow, transaction, or shared business rule coupling.

Subtypes:
- sequential/temporal
- transactional
- symmetric

### Model

Use when internal upstream models leak into public use.

Examples:
- consumer imports producer domain model directly
- external payload exposes internal fields or enums

### Contract

Use when the producer exposes a dedicated consumer-oriented contract.

Require evidence such as:
- dedicated DTO/view model
- versioned interface
- explicit schema/spec
- minimal field set

## 6. Distance assessment

Assess distance using the strongest applicable factors.

| Factor | Low | Medium | High |
| --- | --- | --- | --- |
| Code location | same package or module | different module/library | different service/system |
| Runtime boundary | same process | separate process | network hop/external system |
| Deployment | same deploy unit | related pipeline | independent release units |
| Ownership | same team | shared stewardship | different teams/orgs |

Increase effective distance when multiple high-distance factors apply.

## 7. Volatility assessment

Use these signals in order of strength:

1. business criticality or subdomain type
2. git churn and co-change
3. release churn or migration history
4. code and comment signals

Suggested labels:

- low: stable, generic, rarely changed
- medium: occasional change, some coordination cost
- high: frequent change, business-rule-heavy, recurring coordinated changes

## 8. Confidence assessment

Use confidence levels explicitly.

- **High confidence**: at least 3 evidence classes, including either history or org/contract evidence
- **Medium confidence**: structural evidence plus one additional evidence class
- **Low confidence**: mostly static structure or inferred context only

## 9. Report output

For each finding, include:

- pair or set under analysis
- coupling type
- strength/distance/volatility
- evidence summary
- confidence
- impact
- remediation or acceptance recommendation

Use `references/report-template.md` or `assets/coupling-report-template.md`.

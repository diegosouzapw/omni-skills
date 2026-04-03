# Domain Analysis Router

Use this note when the task no longer fits strategic domain analysis.

## Stay with this skill when

- the user wants business-domain discovery
- the task is to infer bounded contexts
- the task is to classify subdomains
- the task is to document language conflicts or cohesion issues
- the task is to produce context maps or cautious service-boundary options

## Hand off when

### Route to `@coupling-analysis`
When the dominant question becomes import structure, instability, dependency cycles, or package-level coupling.

### Route to `@domain-identification-grouping`
When the user already has components and wants them grouped into domains without deeper strategic design work.

### Route to tactical DDD or implementation skills
When the task becomes aggregate design, repository design, transaction rules, entity modeling, or command handling inside a single context.

### Route to ADR / architecture decision work
When domain findings are accepted and the team needs a formal decision record.

## Handoff guidance

When handing off, preserve:

- scope analyzed
- glossary findings
- term collisions
- candidate subdomains
- context map assumptions
- confidence levels
- unresolved questions

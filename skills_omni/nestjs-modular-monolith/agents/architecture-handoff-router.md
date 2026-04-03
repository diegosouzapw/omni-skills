# Architecture Handoff Router

Use this note when the task has moved beyond modular monolith architecture.

## Route to another skill when

### Auth redesign dominates the work

Route to: `@authentication-security`

Signals:

- new auth model
- tenant isolation policy redesign
- permission system overhaul
- deeper guard/strategy selection than module design

### Database strategy dominates the work

Route to: `@database-design`

Signals:

- indexing and query tuning
- migration strategy
- schema normalization or partitioning
- ORM replacement driven by data constraints

### API contract design dominates the work

Route to: `@api-design`

Signals:

- versioning policy
- public API governance
- external SDK contract design
- GraphQL vs REST policy work

### Testing and CI quality gates dominate the work

Route to: `@testing-strategy`

Signals:

- repository-wide test pyramid work
- contract testing framework setup
- CI architecture rules and quality gates

### Observability platform work dominates the work

Route to: `@observability`

Signals:

- tracing platform rollout
- log pipeline strategy
- metrics backend design
- SLO or incident diagnostics programs

### Actual service extraction or distributed design dominates the work

Route to: `@microservices-architecture`

Signals:

- service decomposition and deployment boundaries
- broker topology
- distributed consistency patterns
- outbox, saga, or message durability strategy as the main task

## Handoff rule

When handing off, keep these artifacts:

- bounded-context map
- module ownership notes
- public contract decisions
- persistence ownership rules
- identified risks and anti-patterns

That preserves architectural context instead of forcing the next skill to start from zero.

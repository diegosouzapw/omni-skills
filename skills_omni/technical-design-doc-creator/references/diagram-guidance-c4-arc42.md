# Diagram Guidance

Choose diagrams that clarify architecture for the intended audience.

## Recommended diagram types

### System context
Use when readers need to understand external actors, upstream/downstream systems, and system boundaries.

### Container view
Use when readers need to understand major deployable parts or services and their interactions.

### Component view
Use when one service or subsystem needs more detail, but stay above class level.

### Sequence or runtime flow
Use when order of interactions, async flows, retries, or failure paths matter.

### Deployment view
Use when runtime environment, regions, clusters, queues, or databases materially affect the design.

## Prefer

- stable names and responsibilities
- arrows that describe interaction direction
- trust boundaries when security matters
- sequence diagrams for auth, payments, integrations, and migration flows

## Avoid

- class diagrams unless absolutely necessary
- framework internals
- detailed code structure
- diagrams that mirror source files instead of architecture

## Practical rule

If the audience is making a design or review decision, show system behavior and boundaries. If the diagram only helps code implementation, it is probably too low-level for the TDD.

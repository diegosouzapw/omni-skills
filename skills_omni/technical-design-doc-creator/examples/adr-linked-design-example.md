# Example: ADR-Linked Design

Use this pattern when a TDD contains several major design choices.

## In the TDD

### Decisions and Alternatives

- ADR-001: Choose event-driven sync over synchronous API chaining
- ADR-002: Use managed secret store for partner credentials
- ADR-003: Keep dual-write period for 30 days during migration

## ADR linkage notes

Each ADR should capture:

- context
- decision
- status
- consequences
- alternatives considered

This keeps the TDD readable while allowing major decisions to be reviewed and updated independently.

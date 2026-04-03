# Example ADR: Use PostgreSQL for Primary Storage

```markdown
# ADR-001: Use PostgreSQL for Primary Storage

- Date: 2026-03-27
- Status: Accepted
- Deciders: Platform team, backend leads
- Tags: database, storage

## Context
The application requires transactional integrity for billing and account updates, flexible querying for operational workflows, and a database the current team can operate confidently. We evaluated whether to continue with a document-oriented design or standardize on a relational primary store.

## Decision Drivers
- Strong ACID guarantees for core business data
- Team familiarity and operational maturity
- Managed hosting availability
- Support for relational queries and structured migrations

## Considered Options
- PostgreSQL
- MySQL
- DynamoDB

## Decision Outcome
Chosen option: **PostgreSQL**, because it best satisfies the need for transactional correctness, operational familiarity, and flexible relational querying while remaining easy to host through a managed service.

## Consequences
### Positive
- Strong transactional guarantees for critical workflows
- Mature ecosystem and operational tooling
- Team can onboard and troubleshoot quickly

### Negative
- Requires schema migration discipline
- Adds more relational modeling overhead than a schemaless store
- May require careful indexing work for high-scale query patterns

## Links
- Related RFC: RFC-012 database evaluation
- Related issue: ENG-241
```

Why this example is strong:
- states the decision directly
- records alternatives
- includes trade-offs, not just benefits
- stays concise while preserving rationale
```

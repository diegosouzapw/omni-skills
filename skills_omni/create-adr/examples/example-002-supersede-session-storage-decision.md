# Example ADR: Supersede Session Storage Decision

```markdown
# ADR-014: Move Session Storage to Redis

- Date: 2026-03-27
- Status: Accepted
- Deciders: Application platform team
- Tags: sessions, caching, performance

## Context
ADR-006 standardized on database-backed sessions when traffic was lower and we wanted to minimize operational components. Since then, session read volume has increased and session expiry handling has become a recurring source of application-side complexity.

## Decision Drivers
- Lower session read latency
- Native TTL support
- Reduced database load on the primary transactional store

## Considered Options
- Keep sessions in PostgreSQL
- Move sessions to Redis
- Use stateless signed sessions only

## Decision Outcome
Chosen option: **Move sessions to Redis**, because built-in key expiry and lower-latency reads fit the current access pattern better than database-backed sessions, while preserving centralized session invalidation.

## Consequences
### Positive
- Simplifies expiry behavior with native TTLs
- Reduces load on the primary application database
- Improves session read performance

### Negative
- Introduces another operational dependency
- Requires Redis availability planning and monitoring
- Adds migration and rollout complexity during cutover

## Links
- Supersedes: ADR-006: Store Sessions in PostgreSQL
- Related issue: PLAT-882
- Related PR: #1842
```

Key behavior shown here:
- a new ADR replaces the old one
- the old decision is not rewritten
- trade-offs of the new choice remain visible
```

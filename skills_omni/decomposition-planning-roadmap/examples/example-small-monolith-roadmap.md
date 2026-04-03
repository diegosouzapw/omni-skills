# Example: Small Monolith Roadmap

## Context

A modular order-management monolith already has:

- component inventory
- dependency map
- basic domain grouping
- stable teams for catalog, notifications, and orders

## Candidate summary

| Candidate | Notes | Recommendation |
| --- | --- | --- |
| Notifications | Low coupling, async-friendly, clear ownership | First |
| Catalog | Moderate value, some reporting ties | Later |
| Pricing | High change rate but tricky dependency rules | Later |
| Order orchestration | High value but high coupling and shared transaction risk | Deferred |

## Recommended extraction order

1. **Notifications first**
   - Independent enough
   - Small blast radius
   - Clear event/async boundary
2. **Catalog second**
   - After notification extraction validates delivery model
3. **Pricing third**
   - After contract and observability maturity improve
4. **Order orchestration deferred**
   - Too central and transaction-heavy for an early move

## Transition pattern

| Candidate | Pattern | Why |
| --- | --- | --- |
| Notifications | Strangler + event publication | Easy to route gradually and validate |
| Catalog | Branch by abstraction | Helps isolate reads before deeper separation |

## Example phase plan

### Phase 1: Preparation
- Confirm telemetry and alerts for notification flows
- Separate notification templates and dispatch logic
- Define ownership and rollback routing

### Phase 2: First extraction
- Move notification sending behind an internal interface
- Route a small traffic slice to the new service
- Compare errors and latency

### Phase 3: Stabilize
- Keep extraction paused until incident rate is acceptable
- Retire duplicate paths only after stability window passes

## Example metric targets

- 80% of notification changes deploy independently within 6 weeks
- No increase in paging severity after cutover
- Rollback executable within one release window

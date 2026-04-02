# Example: Stakeholder Review Packet

## Decision summary

**Recommendation:** extract Notifications first, prepare Catalog second, defer Order Orchestration.

## Why Notifications is first

- High change frequency
- Lower coupling than core transaction flows
- Clear owning team
- Reversible rollout path
- Useful test of deployment, telemetry, and support model

## Options considered

### Option A: Notifications first
- **Pros:** low blast radius, fast learning, clear metrics
- **Cons:** less strategic than core order flow
- **Decision:** approved

### Option B: Pricing first
- **Pros:** business value is high
- **Cons:** rule complexity and shared dependencies raise incident risk
- **Decision:** later

### Option C: Order orchestration first
- **Pros:** central business capability
- **Cons:** highest coupling and rollback risk
- **Decision:** deferred

## Risks requiring active management

- Shared reporting dependencies
- Weak cross-service tracing
- Support readiness for newly extracted services

## Success metrics

- Independent deployment rate for Notifications
- Incident rate before and after extraction
- Mean time to restore for notification failures
- Number of changes still requiring coordinated release

## Open decisions

- Whether reporting should be separated before Catalog extraction
- Whether current platform tooling is sufficient for second extraction
- Whether on-call rotation needs restructuring before expansion

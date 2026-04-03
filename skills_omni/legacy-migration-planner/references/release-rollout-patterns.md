# Release Rollout Patterns for Migration Planning

These rollout patterns are examples, not mandatory tooling choices.

## Canary

Use when a small percentage of traffic can be routed to the new path first.

Best for:

- validating behavior with real traffic
- detecting regressions before broad cutover

Planning needs:

- observable traffic split
- rollback threshold
- consumer impact boundaries

## Blue-Green

Use when two environments can exist side by side and traffic can switch cleanly.

Best for:

- cleaner cutover boundaries
- faster environment-level rollback for stateless application changes

Planning needs:

- configuration parity
- switchback procedure
- data compatibility analysis

## Feature Flag or Route Flag

Use when functionality can be enabled selectively without full environment switching.

Best for:

- route-by-route or user-segment migration
- progressive enablement of new behavior

Planning needs:

- flag ownership
- targeting rules
- disable path
- compatibility with legacy state

## Big-Bang Cutover

Use only when phased coexistence is not realistic and the risks are understood.

Planning needs:

- strong rehearsal evidence
- rollback or recovery plan
- stakeholder approval
- downtime or freeze assumptions made explicit

## Planning Rule

Choose the rollout pattern that matches the system's operational reality. Do not assume advanced rollout mechanisms exist if the platform does not support them.

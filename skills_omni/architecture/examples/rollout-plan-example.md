# Rollout Plan Example

## Goal

Move from implicit queue coordination to simple-first local persistence with opt-in shared leases.

## Phases

1. Keep JSON and SQLite persistence as the default operator path.
2. Require an explicit queue flag before enabling claim and lease polling.
3. Preserve Redis as an advanced coordinator, not the baseline.
4. Update the CLI and runbook so the default path matches the code.

## Success Criteria

- Local single-node usage works without extra infrastructure.
- Multi-worker mode remains available through explicit configuration.

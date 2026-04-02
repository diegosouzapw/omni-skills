# Example: Weekly Status Update

```md
# Weekly Implementation Update

## Project
Bulk User Import

## Source links
- Spec: https://notion.so/...
- Implementation plan: https://notion.so/...

## Overall status
- Yellow: backend import flow is working in test, UI error handling and audit visibility are still in progress.

## Completed this period
- Implemented CSV validation rules
- Added import job persistence
- Added failure-state integration tests

## In progress
- Admin upload UI
- Audit event display in job detail view

## Blockers / risks
- Waiting on final audit event field naming from platform team
- Large-file performance needs confirmation before rollout

## Decisions made
- Keep import execution asynchronous
- Gate rollout behind an admin feature flag

## Next actions
- Finalize UI error states
- Confirm audit schema with platform team
- Run staging test with production-like file size
```

Pair this narrative update with corresponding property-level status changes on the plan and task records.

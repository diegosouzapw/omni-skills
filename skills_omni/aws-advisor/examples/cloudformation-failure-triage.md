# CloudFormation Failure Triage Example

## Input

```text
Our production stack entered UPDATE_ROLLBACK_IN_PROGRESS after changing an RDS resource.
```

## Triage steps

1. inspect stack events and identify the first failed logical resource
2. capture the exact service-side error for that resource
3. determine whether the change attempted an immutable property update or replacement
4. check for dependency impacts on networking, parameter groups, snapshots, or deletion protection
5. evaluate whether rollback completed cleanly or left follow-up work

## Example output shape

- failing resource and service error summary
- most likely root-cause categories
- evidence still needed
- safest next action before retrying

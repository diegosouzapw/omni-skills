# Linear Bulk Change Plan Example

## Objective

Triage unassigned backend bugs older than 14 days for the API team.

## Read pass

- Confirm the API team identifier.
- List matching issues.
- Read current labels, priorities, and recent comments.
- Check available assignees if reassignment is requested.

## Proposed grouping logic

1. Critical production issues -> assign highest priority and route to on-call owner.
2. Confirmed bugs with enough detail -> assign to backlog owner and label appropriately.
3. Incomplete reports -> leave unassigned, add/request missing details if requested.
4. Duplicate or superseded issues -> do not modify until verified.

## Planned mutations

- Update priority on clearly urgent items.
- Add existing bug taxonomy labels where missing.
- Reassign only issues explicitly included in the approved scope.

## Risks to call out before execution

- Some issues may belong to another team.
- Existing labels may already encode priority or ownership conventions.
- Reassignment without team approval may be disruptive.

## Final summary shape

- Number of issues reviewed
- Number updated
- Which issues were intentionally left unchanged
- Follow-up needed from a human reviewer

# Example: Task Database Schema Check

Use this pattern before creating tasks in an unfamiliar Notion workspace.

## Objective
Confirm that the target object is the correct task database and that the payload shape is safe.

## Example review notes

```md
# Task Database Schema Review

## Destination
- Object: Engineering Tasks
- Type: Database
- ID: 9c2d...

## Confirmed properties
- Title field: Name
- Status field: Status
- Priority field: Priority
- Relation to plan: Implementation Plan
- Relation to spec: Source Spec
- Estimate field: Story Points

## Required checks
- Valid Status options include: Backlog, Ready, In Progress, Blocked, Done
- Valid Priority options include: P0, P1, P2, P3
- Relation fields accept page IDs from the linked project databases

## Safe payload notes
- Use `Name` as the title property
- Do not send `Assignee` unless a person value is available
- Do not create `Priority` if the spec does not define it
- Add explicit body links if relation to spec is unavailable for some records
```

## Result
Only create tasks after this review is complete.

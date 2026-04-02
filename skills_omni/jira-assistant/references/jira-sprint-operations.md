# Jira Sprint Operations

Sprint operations differ from core issue operations because they require board-aware context.

## Before you start

Collect or confirm:

- project key
- board identity or board URL
- `cloudId`
- whether the user means the active sprint or a future sprint

## Safe sprint workflow

1. identify board context
2. inspect available active or future sprint state
3. inspect issues in the sprint
4. confirm the intended issue or filter
5. perform the sprint-related action
6. verify the result

## Common request patterns

### What is in the current sprint?

Return a concise summary including:

- sprint name
- issue count if available
- top blockers or in-progress work
- any obvious risks, such as too many unassigned or blocked issues

### Move an issue into the current sprint

Before attempting this:

- confirm the board
- confirm the active sprint exists
- confirm the issue belongs in the board context
- verify the user actually wants a sprint assignment change

### Show sprint blockers

Use sprint-aware issue search where possible and summarize:

- blocked items
- high-priority unfinished work
- unassigned or stale work in the sprint

## Failure modes

Sprint actions can fail because:

- the issue is not included in the board filter
- the board does not have an active sprint
- the user lacks Jira Software permissions
- the board context is wrong even if the project key is correct

When in doubt, ask the user for the board or sprint name rather than guessing.

# Example: Transition Issue Safely

## User request

```text
Move PAY-456 to Done.
```

## Safe agent flow

1. Retrieve available transitions for `PAY-456`.
2. Check whether a transition equivalent to the user's intent exists.
3. If multiple end states are plausible, ask the user to choose.
4. Apply the transition.
5. Verify the resulting status.
6. Report the final state.

## Good response if transition is direct

```text
Moved PAY-456 to Done.
```

## Good response if transition is not direct

```text
PAY-456 cannot move directly to Done from its current state. Available transitions are "Start Progress" and "Ready for QA". Which one do you want?
```

## Why this matters

Workflow transitions are Jira-instance specific. Status names are not universal, and validators may block the move.

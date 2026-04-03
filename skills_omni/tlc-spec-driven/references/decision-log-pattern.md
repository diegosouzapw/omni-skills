# Decision Log Pattern

Use lightweight ADR-style entries for meaningful design decisions.

## When to record a decision

Create a decision entry when the choice:

- affects more than one component
- changes a pattern or convention
- introduces a dependency or constraint
- resolves a non-obvious tradeoff
- is likely to be questioned later

## Suggested format

```md
# DEC-001: Use server-side permission guard for settings access

## Status
Accepted

## Context
The feature requires role-based access to project settings across API and UI flows.

## Decision
Enforce authorization at the backend boundary and mirror visibility in the UI.

## Consequences
- Safer default enforcement
- Requires integration coverage
- UI still needs conditional rendering for user clarity
```

## Guidance

- Keep entries short and durable.
- Record rationale, not just the final answer.
- Put major decisions where future sessions can find them easily, either in `STATE.md` or a dedicated decision note.

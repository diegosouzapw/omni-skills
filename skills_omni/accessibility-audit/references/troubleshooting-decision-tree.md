# Troubleshooting Decision Tree

Use this when the UI feels inaccessible but the cause is unclear.

## 1. Can the task be completed with keyboard only?

- If no, inspect focus order, missing native controls, hidden focus, and traps.
- If yes, continue.

## 2. Does focus move predictably after open, close, submit, or async updates?

- If no, inspect dialog logic, DOM replacement, rerender timing, and return-focus handling.
- If yes, continue.

## 3. Are names, roles, and states exposed clearly?

- If no, inspect native semantics first, then accessible name source, then ARIA validity.
- If yes, continue.

## 4. Are important changes announced?

- If no, inspect validation handling, live regions, and whether state changes happen silently.
- If duplicate announcements occur, inspect overused live regions or repeated DOM insertion.

## 5. Does the UI still work at zoom, narrow widths, and reduced motion?

- If no, inspect clipping, fixed-position overlays, motion-only meaning, and drag dependence.

## 6. Did automation miss the real problem?

- If yes, treat the audit as a manual task review problem, not a tooling problem.
- Document the blind spot so it is not mistaken for sign-off later.

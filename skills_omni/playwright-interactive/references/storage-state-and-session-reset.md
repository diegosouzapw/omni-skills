# Storage State and Session Reset

Persistent sessions are useful until state contamination becomes the bug.

## Preserve the current context when

- You are debugging a flow that depends on the current authenticated session.
- You want to compare behavior before and after a renderer-only change.
- Reuse is accelerating iteration and not hiding the issue.

## Recreate the context when

- Cookies, local storage, or session storage are affecting reproducibility.
- You changed login, onboarding, or first-run behavior.
- You switched viewport mode or device assumptions.
- You need a deterministic clean run for signoff.

## Prefer context reset over REPL reset

Resetting the REPL destroys all handles and slows recovery. If the problem is state contamination, recreate only the browser context first.

## Practical sequence

1. Keep the browser alive if it is healthy.
2. Close the current context.
3. Create a fresh context with the intended mode.
4. Open a fresh page and rerun the repro.

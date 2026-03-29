# Memory Boundary Checklist

Use this before persisting or reusing memory.

## Durable memory should usually be

- stable across sessions
- useful in future tasks
- unlikely to change frequently
- allowed by product, privacy, and retention policy

## Current task state should usually be

- specific to the active request
- short-lived
- easy to discard after completion
- updated as the task progresses

## Do not store as durable memory by default

- temporary plans
- one-off retrieved facts
- intermediate reasoning artifacts
- sensitive user data without explicit policy approval
- stale assumptions copied from older sessions

## Review questions

1. Would this still be useful next week?
2. Could this conflict with fresher evidence later?
3. Does policy allow retaining it?
4. Would the task fail if this item were omitted?
5. Is this actually state, not memory?

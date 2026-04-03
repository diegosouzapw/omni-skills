# Coding Principles

Apply these principles during execution.

## Core principles

- Solve the confirmed problem, not adjacent possibilities.
- Match existing repository style unless the task explicitly changes conventions.
- Keep diffs small and reviewable.
- Remove only the direct debris created by the change itself.
- Prefer existing local patterns over introducing new abstractions.

## Scope control

- Avoid broad formatting passes.
- Avoid unrelated renames.
- Avoid speculative helper layers.
- Avoid hidden behavior changes during cleanup.

## Evidence over confidence

- If an API or framework behavior matters, verify it.
- If verification is partial, say so clearly.
- If the environment cannot prove the fix, provide precise manual checks.

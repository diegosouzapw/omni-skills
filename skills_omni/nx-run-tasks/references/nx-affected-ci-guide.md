# Nx Affected in CI

`nx affected` is most useful when CI provides a reliable diff range.

## Preferred CI pattern

Use explicit refs or SHAs instead of relying on defaults:

```bash
nx affected -t test --base=origin/main --head=HEAD
```

You can substitute your CI system's known base and head values.

## When this goes wrong

Common causes:

- shallow clone without enough history
- wrong base branch or SHA
- detached HEAD behavior that differs from local development
- no usable Git metadata in the current environment

## Safe fallback when Git metadata is not usable

Drive affected calculation from files:

```bash
nx affected -t lint --files=apps/web/src/app.tsx,libs/ui/src/button.tsx
```

## Practical guidance

- prefer explicit `--base` and `--head` in CI
- avoid assuming local defaults match CI checkout behavior
- if affected output looks wrong, validate the diff inputs before blaming target definitions
- use file-based fallback when the pipeline intentionally does not expose enough Git history

## Diagnostic sequence

1. Confirm the branch or SHA pair you intended to compare.
2. Re-run with `--verbose`.
3. If history is incomplete, adjust checkout/fetch depth using the repository's normal CI approach.
4. If Git metadata is unavailable by design, switch to `--files`.
5. Only after diff inputs are validated should you investigate target selection logic.

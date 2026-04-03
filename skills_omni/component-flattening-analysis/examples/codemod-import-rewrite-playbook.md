# Codemod Import Rewrite Playbook

Use this approach when many files move and manual import updates are risky.

## When to use

Prefer this playbook when:

- more than a handful of files will move
- the repo uses TS path aliases
- barrels and re-exports complicate manual updates
- repeated edits make manual review error-prone

## Safe sequence

1. Finalize the classification and strategy first.
2. Make one small batch of file moves.
3. Rewrite imports and exports using AST-aware tooling where available.
4. Review the diff for accidental path rewrites.
5. Run typecheck, lint, tests, and build.
6. Repeat for the next batch if needed.

## What the codemod must update

- direct relative imports
- alias-based imports if paths changed
- barrel exports
- re-export files
- type-only imports where applicable
- test imports and story/demo imports if the repo has them

## What to review manually afterward

- dynamic imports
- framework registration points
- generated route or module manifests
- package entrypoints and compatibility re-exports

## Rule of thumb

Use automation for mechanical path updates, but keep architectural decisions manual.

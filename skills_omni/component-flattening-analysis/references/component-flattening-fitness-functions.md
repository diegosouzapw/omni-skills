# Component Flattening Fitness Functions

Use these patterns after cleanup to prevent regressions. Keep rule scope narrow so valid entrypoints are not flagged.

## Semgrep-style ideas

### 1. Flag implementation files in forbidden parent roots

Use only when your repo has a clear convention such as `src/features/<feature>/` containing only entrypoints and child folders.

Example concept:

- target implementation files in feature roots
- exclude `index.*`, `Page.*`, `Layout.*`, `route.*`, `main.*`, and other explicit entrypoints
- exclude compatibility re-export files

### 2. Flag deep imports that bypass intended public surfaces

Useful after extracting shared code or stabilizing barrels.

Example concept:

- disallow imports from internal implementation paths across sibling features
- allow imports through the documented public entrypoint only

## Lint/import ideas

- enable unresolved import detection
- consider restricted import patterns for internal paths
- enforce consistent use of public entrypoints where the architecture requires it

## Anti-noise guidance

Do not enforce blanket rules like "all parent-level files are invalid."

Instead:

- scope to implementation file patterns
- exempt route/layout/bootstrap/entrypoint files
- exempt barrels and package-export files
- start in warning mode until false positives are understood

## Adoption plan

1. Fix current hierarchy issues first.
2. Add one narrow rule.
3. Observe false positives.
4. Refine exclusions.
5. Only then consider making the rule blocking.

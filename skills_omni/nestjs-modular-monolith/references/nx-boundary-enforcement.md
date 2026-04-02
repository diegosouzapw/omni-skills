# Nx Boundary Enforcement

If the repository uses Nx, use it to make architecture rules executable.

## Recommended approach

Tag projects by domain and type, for example:

- `scope:billing`
- `scope:identity`
- `type:feature`
- `type:domain`
- `type:shared`

Then define dependency constraints so modules can only depend on approved targets.

## Typical goals

- prevent deep cross-domain coupling
- keep shared code flowing one way
- stop presentation layers from depending on unrelated infrastructure
- expose architecture erosion early in CI

## Validation flow

1. Review tags on affected projects.
2. Check dependency constraints.
3. Inspect the project graph for unexpected edges.
4. Fail CI when forbidden edges appear.

## Review checklist

- Are tags meaningful and consistent?
- Do constraints match the intended architecture?
- Are there exceptions that should be temporary and documented?
- Does the graph show hidden shared-kernel growth?

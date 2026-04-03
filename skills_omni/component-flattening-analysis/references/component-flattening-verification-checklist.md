# Component Flattening Verification Checklist

Use this checklist before and after file moves.

## Before changes

- [ ] Scope is limited to one feature, namespace, or module family
- [ ] Candidate files were classified by role, not just by path depth
- [ ] Public entrypoints and barrels were identified
- [ ] Path aliases and resolver rules were reviewed
- [ ] Package boundaries or published import paths were documented
- [ ] Dynamic imports, lazy loading, and route conventions were checked
- [ ] A rollback checkpoint exists

## During changes

- [ ] File moves are narrow and intentional
- [ ] Imports were updated in moved files
- [ ] Downstream consumers were updated
- [ ] Barrel exports and re-exports were updated
- [ ] Alias-based imports were revalidated
- [ ] Compatibility re-exports were added if required

## After changes

Run the smallest relevant repository commands.

- [ ] Typecheck passed
- [ ] Lint passed
- [ ] Affected unit tests passed
- [ ] Affected integration tests passed if applicable
- [ ] Build passed for the affected app/package
- [ ] Unresolved import checks passed
- [ ] Barrel or public export validation passed
- [ ] Route or lazy-loading behavior was smoke tested if applicable

## Minimum evidence to report

Include these in the final response when possible:

- commands run
- affected files moved
- imports/exports updated
- verification status
- known risks or deferred follow-up

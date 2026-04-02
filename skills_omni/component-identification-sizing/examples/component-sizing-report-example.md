# Component Sizing Report Example

## Scope

- Repository path: `.`
- Languages: TypeScript
- Analysis mode: workspace packages first, then feature folders where needed

## Structural signals used

- `package.json`
- workspace package roots under `packages/`
- frontend feature folders under `apps/web/src/features/`
- import aliases from `tsconfig.json`

## Inclusion and exclusion rules

Included:

- maintained application and library source files

Excluded:

- `node_modules/`
- `dist/`
- `coverage/`
- `generated/`
- tests and snapshots
- storybook stories

## Component inventory

| Component | Path | Boundary type | Statements | Files | Percent | Status | Confidence |
| --- | --- | --- | ---: | ---: | ---: | --- | --- |
| Billing | `packages/billing` | workspace-package | 4,312 | 24 | 35.9% | Too Large | high |
| Reporting | `packages/reporting` | workspace-package | 4,578 | 18 | 38.1% | Too Large | high |
| Auth UI | `apps/web/src/features/auth` | feature-folder | 3,120 | 11 | 26.0% | OK | medium |

## Size analysis summary

- Total components: 3
- Total statements: 12,010
- Mean: 4,003
- Median: 4,312
- Standard deviation: 3,168

Note: the distribution is skewed by two large packages, so percentages and median are more useful than standard deviation alone.

## Findings and recommendations

### High priority

- `Reporting` is large and appears to contain multiple report families. Validate whether financial, operational, and customer reporting should be separated.
- `Billing` is also large enough to justify a second-pass subcomponent inventory.

### Medium priority

- `Auth UI` is not oversized, but alias-heavy imports reduce confidence in the folder boundary. Confirm whether shared auth flows are split across adjacent folders.

## Limitations and confidence

- `Auth UI` confidence is medium because alias imports partially bypass folder boundaries.
- Statement counts assume executable-source filtering and exclude storybook/test assets.
- This report is for structural sizing only; it does not measure runtime coupling or deployment boundaries.

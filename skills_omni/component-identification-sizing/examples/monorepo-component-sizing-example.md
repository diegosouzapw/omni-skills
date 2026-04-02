# Monorepo Component Sizing Example

## Request

Analyze this monorepo by workspace package first. Exclude generated code, vendored dependencies, tests, docs, and build output. Do not combine frontend and backend packages into a single recommendation until separate inventories are produced.

## Recommended approach

1. Identify workspace package roots from repository manifests.
2. Produce one inventory row per package.
3. Split results by family such as `apps/*`, `packages/*`, `services/*` if needed.
4. Flag shared libraries that distort ranking but are not extraction candidates on their own.
5. Only run a second pass inside the largest packages after package-level ranking is complete.

## Common pitfalls

- Treating every nested folder as a component before package boundaries are established
- Ranking frontend and backend packages together without subsystem segmentation
- Counting generated SDKs inside shared packages
- Interpreting a large shared utility package as an obvious extraction candidate without dependency analysis

## Example finding language

- `packages/reporting` is large enough to justify a second-pass subcomponent inventory.
- `packages/shared-ui` is large but may reflect legitimate cross-app reuse rather than a decomposition target.
- `services/billing-api` and `apps/web` should not be directly compared for extraction priority until frontend and backend inventories are separately reviewed.

# Tag Taxonomy Examples

These examples show practical tag dimensions for Nx boundary enforcement.

## Example 1: Domain plus role

- `scope:auth`
- `scope:billing`
- `scope:shared`
- `type:feature`
- `type:data-access`
- `type:ui`
- `type:util`

Example policy:

- feature libraries may depend on ui, data-access, and util
- ui libraries may depend on util only
- util libraries should remain low-level and broadly reusable

## Example 2: Add platform dimension

- `platform:web`
- `platform:server`
- `platform:mobile`

Example policy:

- `platform:web` libraries should not import `platform:server` libraries
- shared `type:util` libraries may be cross-platform if they have no runtime-specific assumptions

## Example 3: Shared versus bounded domains

Use `scope:shared` sparingly. If too many libraries become shared, the workspace often loses architectural clarity.

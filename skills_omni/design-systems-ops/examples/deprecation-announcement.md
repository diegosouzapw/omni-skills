# Example: Deprecation Announcement

`LegacyToast` is now deprecated. Use `Toast` for new work. Existing consumers should migrate by `2026-Q3`. Support for `LegacyToast` will continue during the deprecation window, but new features will not be added.

## Why

- duplicate behavior with the current system component
- inconsistent accessibility behavior across products
- higher maintenance cost for shared notifications

## What changes now

- new adoption should stop
- docs will point to `Toast`
- stories for `LegacyToast` remain available during migration

## What consumers need to do

1. Replace imports of `LegacyToast` with `Toast`.
2. Review behavior differences for dismiss timing and action layout.
3. Verify keyboard and screen-reader behavior in flows that previously used custom overrides.

## Timeline

- Deprecated: now
- Migration support window: through `2026-Q3`
- Planned sunset: after migration review confirms readiness

## Owner

Design systems team with product-team migration owners per app

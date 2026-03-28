# Token Release Example

## Change

- Rename `color.brand.primary` to `surface.accent.default`
- Keep the old token as an alias for one compatibility window
- Update component docs and Figma variable names in the same release

## Migration Notes

- App teams should move semantic usage first, not primitive values
- Component library should emit one deprecation warning in docs, not runtime spam
- Theme parity must be checked in light, dark, and one branded theme before removal

## Rollout Recommendation

- Release aliases first
- Update docs and component examples
- Remove the legacy token only after downstream adoption is measured

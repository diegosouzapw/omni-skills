# Layout Translation Cheatsheet

Use this cheatsheet to map Figma layout behavior into maintainable CSS or framework layout primitives.

## Common mappings

| Figma pattern | Usually maps to | Notes |
| --- | --- | --- |
| Vertical Auto Layout | Flex column | Preserve gap, alignment, and fill/hug behavior |
| Horizontal Auto Layout | Flex row | Check wrapping, gap, cross-axis alignment, and grow/shrink behavior |
| Repeated cards in rows and columns | Grid | Prefer grid when the layout is two-dimensional |
| Overlay badge or floating control | Relative + absolute child | Use sparingly and only where layering is intentional |
| Full-screen app shell | Grid or nested flex layouts | Start with page regions, then implement internal layouts |

## Translation checks

When a layout looks wrong, verify:

- direction
- gap
- padding
- alignment
- justification/distribution
- wrapping behavior
- fixed vs fill sizing
- min/max constraints
- child growth and shrink behavior

## Warning signs

Use a different layout primitive if:

- elements overlap unexpectedly
- spacing disappears on resize
- alignment changes across breakpoints
- repeated cards require both row and column control
- too many absolute positions are being introduced just to match a simple Auto Layout frame

# Modern Color Systems

Distinctive color should feel intentional and remain readable.

## Goals

- build a palette with internal logic
- preserve contrast across themes
- avoid flat, generic defaults
- make accents feel earned rather than scattered

## Recommended Practices

- Use structured tokens instead of ad hoc hex values.
- Consider `oklch()` for more predictable perceptual adjustments.
- Use `color-mix()` for related surface or border steps when appropriate.
- Use `light-dark()` only when it fits the browser support and project constraints.

## Palette Strategy

Define:
- background/base
- elevated surfaces
- primary text
- secondary text
- accent color
- interactive states
- focus ring color
- success/warning/error colors

## Contrast Checks

Review at minimum:
- body text on each background tier
- control labels and placeholder strategy
- icons that communicate meaning
- focus indicators
- text inside tinted or accent surfaces

## Common Recovery Moves

If a palette is expressive but unreadable:
- lower or raise luminance first
- reduce chroma where necessary
- reserve strongest accents for interaction or emphasis
- keep neutral surfaces stable so accent colors have room to work

## Avoid

- fashionable color choices that erase readability
- neon accents used everywhere
- gradient text as a substitute for visual hierarchy
- dark themes with pure black and glowing borders by default

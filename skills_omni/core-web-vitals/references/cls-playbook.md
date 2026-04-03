# CLS playbook

## Good threshold

- Good: **0.1 or less**
- Needs improvement: **over 0.1 up to 0.25**
- Poor: **over 0.25**

## First question: what moved unexpectedly?

Confirm:

- which element shifted
- what caused it to shift
- whether the shift happened during load, hydration, route transition, or later UI insertion

## Common root causes

### Media without reserved space

Examples:

- images without dimensions
- videos or embeds without stable containers

Fixes:

- set `width` and `height`
- use `aspect-ratio`
- ensure responsive containers still reserve space

### Ads, embeds, or consent UI appearing late

Examples:

- cookie banners inserted at the top of the viewport
- ad slots collapsing when no ad is returned
- embeds resizing after load

Fixes:

- reserve space up front
- avoid collapsing reserved containers above the fold
- place late UI where it does not shift visible content

### Hydration and SPA transitions

Examples:

- skeleton differs from final content size
- route shell changes height after data arrives

Fixes:

- make placeholders match final layout dimensions
- reserve space for route content
- avoid inserting new top-of-page elements after navigation

### Font-related shifts

Examples:

- fallback font metrics differ from web font metrics
- text reflows after font swap

Fixes:

- use `font-display` intentionally
- adjust fallback metrics with CSS font metric overrides where needed

## Motion guidance

When animation is needed, prefer:

- `transform`
- `opacity`

Avoid animating layout-affecting properties when a non-layout alternative is feasible.

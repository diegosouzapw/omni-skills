# CLS patterns reference

CLS is about unexpected layout movement.

## High-frequency causes

### Images and media without reserved space

Use intrinsic `width` and `height` or a stable `aspect-ratio`.

### Ads, embeds, and iframes

Reserve a stable container before content loads. Avoid collapsing and expanding slots unpredictably.

### Injected UI above visible content

Common offenders:

- consent banners
- promo bars
- notifications
- personalization modules

Prefer overlays, reserved regions, or insertion below the viewport when appropriate.

### Hydration and SPA route transitions

Shifts often happen when placeholder layout does not match final rendered layout.

Check:

- route shell dimensions
- skeletons that do not match final content size
- late client-only content above the fold

### Font metric mismatch

`font-display` alone may not fully solve CLS.

If fallback and final fonts differ materially, use metric overrides such as:

- `size-adjust`
- `ascent-override`
- `descent-override`
- `line-gap-override`

### Animations affecting layout

Prefer `transform` and `opacity` when the goal is motion without document reflow.

## Debugging tips

- inspect layout shift records and source nodes
- distinguish initial-load shifts from post-load shifts
- check whether shifts follow route changes or user flows not covered by initial-page audits
- remember that expected user-initiated movement is handled differently from unexpected shifts

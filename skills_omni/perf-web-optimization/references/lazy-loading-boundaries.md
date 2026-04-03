# Lazy Loading Boundaries

Lazy loading is useful when it defers work the user does not need yet. It is harmful when it delays content the user is already waiting for.

## Good candidates for lazy loading

- below-the-fold content images
- offscreen iframes
- route-level or feature-level JavaScript that is not needed on initial render
- non-critical embeds and widgets

## Bad candidates for lazy loading

- likely hero or LCP images
- above-the-fold media
- CSS or code required for the first meaningful render
- assets whose delayed discovery creates visible blank states

## When lazy loading appears ineffective

Possible reasons:

- the asset is near the viewport and browser heuristics load it early anyway
- the resource is still too large when it does load
- the page is bottlenecked by JavaScript or CSS, not media
- too many deferred resources wake up at once later

## Safe operating pattern

1. identify what is truly below the fold
2. defer only that content
3. keep dimensions explicit
4. verify user-visible content still appears promptly
5. confirm the likely hero image is eager and properly prioritized

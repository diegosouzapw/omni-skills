# Astro Performance Decision Tree

Use this file before changing code.

## 1. Is the page Astro?

- If no: stop and route to a generic web performance skill.
- If yes: continue.

## 2. Is the route mostly static content?

- If yes: prefer prerender/static output unless dynamic rendering is required.
- If no: keep SSR, but treat TTFB and server waterfalls as possible primary bottlenecks.

## 3. What is the main symptom?

### Slow LCP

Check in this order:

1. What is the actual LCP element?
2. If it is an image, can you move it to `astro:assets`?
3. Does it have explicit dimensions?
4. Is it too large for its rendered size?
5. Is it discovered late and worth selective preload or `fetchpriority="high"`?
6. Is poor TTFB delaying everything?

### CLS

Check in this order:

1. Are images missing width and height?
2. Are fonts causing text reflow?
3. Are embeds, banners, or injected components reserving space?
4. Are view transitions or client-side islands shifting layout after hydration?

### Too much JS / poor INP

Check in this order:

1. Which components use `client:*` directives?
2. Can any island hydrate later, smaller, or not at all?
3. Are third-party scripts dominating main-thread time?
4. Are scripts using `is:inline` unnecessarily and bypassing Astro processing?

### Poor TTFB on SSR routes

Check in this order:

1. Should the route be prerendered instead?
2. Is the adapter or hosting region adding latency?
3. Are APIs queried serially?
4. Is caching missing at the page, fragment, or data layer?

## 4. Fonts decision

- Preferred: self-hosted or Astro-aligned font tooling.
- Acceptable: hosted fonts with limited `preconnect` and careful preload.
- Avoid: preloading many variants or relying only on legacy non-blocking stylesheet tricks.

## 5. Optional build-time tactics

Use only after simpler wins are addressed:

- critical CSS inlining for large render-blocking CSS
- compression/minification integrations when they do not duplicate existing optimizations

## 6. Validation gate

Before merging, collect:

- affected pages/templates
- before/after metrics
- what changed
- known tradeoffs or risks

# Astro Performance Checklist

Use this checklist while implementing or reviewing changes.

## Scope

- [ ] Confirm the site and affected pages are Astro-based.
- [ ] Identify target templates or route groups.
- [ ] State the primary metric goal: LCP, CLS, INP, TTFB, or overall score.

## Render mode

- [ ] Confirm whether each target page is prerendered or SSR.
- [ ] Prefer prerendering for content routes unless dynamic behavior is required.

## Images

- [ ] Identify the likely LCP image on key pages.
- [ ] Use `astro:assets` where practical.
- [ ] Provide width and height or stable aspect ratio.
- [ ] Generate responsive variants for large images.
- [ ] Use `fetchpriority="high"` only for the actual LCP image when justified.
- [ ] Avoid eager loading for decorative images.

## Fonts

- [ ] Prefer self-hosted or Astro-aligned font loading.
- [ ] Use intentional `font-display`.
- [ ] Preload only the most important font files.
- [ ] Limit `preconnect` to critical origins only.
- [ ] Verify no new FOIT/FOUT or font-driven CLS was introduced.

## Scripts and hydration

- [ ] Inventory `client:*` directives.
- [ ] Remove unnecessary hydration.
- [ ] Keep scripts processed by Astro unless `is:inline` is required.
- [ ] Review third-party scripts for delay, reduction, or isolation.
- [ ] Verify critical consent or analytics flows still work as intended.

## CSS and build output

- [ ] Check whether route CSS is actually large enough to justify critical CSS inlining.
- [ ] Avoid optional compression plugins if hosting/build tooling already covers the same work.
- [ ] Validate generated output size instead of assuming improvements.

## Validation

- [ ] Capture before/after evidence on the same page type.
- [ ] Record metric deltas and major asset changes.
- [ ] Note tradeoffs, especially if UX or observability behavior changed.

# Measurement workflow for Core Web Vitals

Use this reference to decide which evidence source to trust for diagnosis and for sign-off.

## Field vs lab

### Field data

Field data reflects real users in production. It is the source of truth for whether users are actually passing CWV thresholds.

Use field data to answer:

- which metric is failing
- which URLs or templates are affected
- whether mobile or desktop is worse
- whether the problem exists in production only
- whether a fix has improved real-user outcomes over time

Common field sources:

- **Search Console**: grouped URL-level CWV reporting for verified properties
- **CrUX / PageSpeed Insights field data**: public origin- or URL-level Chrome user data
- **RUM**: your own production instrumentation, often the best source for route- and interaction-level debugging

### Lab data

Lab data is controlled and reproducible. Use it to diagnose likely causes and validate a fix before release.

Use lab data to answer:

- what is the likely LCP element
- which requests are render-blocking
- whether long tasks are delaying interaction response
- which layout shifts happen during a reproducible flow

Common lab sources:

- Chrome DevTools
- Lighthouse
- WebPageTest
- local tracing and browser performance observers

## Safe operating sequence

1. Find the failing metric in field data.
2. Identify the affected page type or route.
3. Choose one representative URL.
4. Reproduce in lab tools.
5. Apply the smallest safe fix.
6. Compare before/after lab evidence.
7. Wait for field confirmation instead of over-claiming.

## Important caveats

- Search Console and CrUX may lag because they rely on rolling windows.
- A Lighthouse improvement does not guarantee a field improvement.
- Origin-level CrUX can hide route-level variation.
- RUM can reveal template-specific or release-specific issues not visible in public datasets.

## Review packet checklist

Record these in your notes or PR:

- metric failing: LCP, INP, or CLS
- evidence source: Search Console, CrUX, PSI, or RUM
- cohort: mobile or desktop, plus any relevant geography or experiment
- exact URL or template affected
- lab reproduction method
- fix applied
- what still needs field confirmation

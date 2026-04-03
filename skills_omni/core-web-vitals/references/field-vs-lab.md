# Field data vs lab data for Core Web Vitals

## Short rule

- **Field data decides Core Web Vitals status.**
- **Lab data helps you debug and iterate.**

## Field sources

### Search Console

Use for:

- production CWV status
- grouped URL issues
- validation after release

Limits:

- grouped by similar URLs
- delayed because it reflects rolling windows

### CrUX

Use for:

- origin or URL-level public CWV trends
- comparing mobile and desktop distributions

Limits:

- may not have data for low-traffic URLs
- less detailed than internal RUM for product-specific segmentation

### Internal RUM

Use for:

- release-by-release regressions
- per-route or per-template analysis
- logged-in or cohort-specific behavior
- attribution to interactions or elements

Limits:

- requires instrumentation discipline
- must avoid collecting sensitive data

## Lab sources

### PageSpeed Insights lab section

Useful for:

- quick synthetic reproduction
- seeing Lighthouse opportunities alongside field context

### Lighthouse

Useful for:

- reproducible local or CI checks
- identifying render-blocking resources and other likely causes

### Chrome DevTools Performance panel

Useful for:

- tracing long tasks
- identifying layout shifts
- understanding paints, style recalculation, and rendering delay

## Common mistake patterns

### Field poor, lab good

Usually means one of:

- the wrong page or state was tested locally
- mobile or low-end devices are the real problem
- production experiments or third-party tags differ from local
- the issue is intermittent and only visible in real traffic

### Lab poor, field acceptable

Usually means one of:

- the synthetic environment is harsher than real usage
- the page is close to thresholds but still acceptable at the 75th percentile
- the local run captured an edge case rather than representative experience

## Operator rule

Always separate these statements in your notes:

- what field data proves
- what lab data suggests
- what the code change is intended to improve

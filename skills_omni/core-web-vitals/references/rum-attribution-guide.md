# RUM attribution guide for Core Web Vitals

When ownership is unclear, add production instrumentation before broad refactors.

## Why attribution matters

Attribution helps answer:

- which element became the LCP candidate
- which interaction produced poor INP
- which nodes were involved in a layout shift

Without attribution, teams often optimize the wrong part of the page.

## Recommended approach

Use the official `web-vitals` package attribution build.

Typical pattern:

1. collect LCP, INP, and CLS in production
2. include page template, route, device class, and release metadata
3. send metric values plus attribution details to analytics or logs
4. aggregate by template and release to identify stable regressions

## What to capture

At minimum:

- metric name and value
- rating
- URL or route name
- page template or screen type
- device class if available
- attribution payload from the metric
- application version or release identifier

## Cautions

- avoid collecting sensitive user content from DOM text or form input
- sample if volume is high
- separate debug-only payloads from standard analytics if needed
- document the lag between deployment and field confirmation

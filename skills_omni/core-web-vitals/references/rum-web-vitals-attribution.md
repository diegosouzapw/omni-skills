# RUM with web-vitals attribution

Use this when field data shows a CWV problem but ownership is unclear.

## Why attribution matters

Attribution helps answer:

- which element became LCP
- which interaction contributed to poor INP
- which nodes or regions were associated with layout shifts

## Safe instrumentation rules

Prefer sending:

- metric name and value
- page URL or route identifier
- device class if already part of analytics
- coarse element metadata such as tag name, stable selector, or component name

Avoid sending:

- raw user input
- full page text
- sensitive DOM content
- identifiers not already approved for analytics use

## Minimal pattern

Use the attribution build of `web-vitals`:

```javascript
import { onCLS, onINP, onLCP } from 'web-vitals/attribution'
```

Then send a narrow payload to analytics.

See [examples/web-vitals-analytics-snippet.js](../examples/web-vitals-analytics-snippet.js).

## When to add it

Add attribution when:

- field data is bad but lab reproduction is weak
- the LCP element changes by breakpoint or template
- INP is affected only on mobile or low-end devices
- CLS appears after user flows, consent UI, ads, or route changes

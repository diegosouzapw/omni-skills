# Example: User-flow audit

## Flow

Landing page -> search -> detail page -> checkout

## Why flow auditing matters

A homepage-only audit would miss:

- interaction latency during search
- layout shifts on product detail
- form accessibility issues during checkout
- cross-step trust and runtime issues

## Example findings

1. **High - Performance:** Search results update triggers long tasks and delayed interaction feedback.
2. **High - Accessibility:** Checkout validation errors are not programmatically associated with fields.
3. **High - SEO:** Product detail pages emit inconsistent canonical tags.
4. **Medium - Best practices:** Checkout includes mixed-content requests from a third-party asset.

## Priority

1. Fix checkout accessibility and mixed-content issues first.
2. Fix canonical inconsistency on detail pages.
3. Investigate search interaction latency with deeper performance tooling.

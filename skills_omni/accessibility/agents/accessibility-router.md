# Accessibility Router

Use this note to keep task boundaries clear.

## Stay in `@accessibility` when

- the user wants an accessibility audit or remediation plan
- the work is about keyboard, focus, semantics, forms, screen readers, contrast, media alternatives, or accessible components
- the output should be findings, fixes, or verification notes tied to WCAG

## Hand off to adjacent skills when

- the request expands into a broad site review across multiple quality domains -> `@web-quality-audit`
- the main problem is performance, rendering speed, or Core Web Vitals -> `@core-web-vitals`
- the issue is broader UI logic or application debugging -> `@frontend-debugging`
- the main deliverable becomes reusable component governance -> `@design-system`
- the main deliverable becomes Playwright or CI automation setup -> `@playwright`
- the request is primarily SEO rather than accessibility -> `@seo`

## Handoff note format

Include:

- what accessibility issue was observed
- what was already tested
- whether any WCAG mapping exists
- whether code changes were attempted
- what the next skill should own

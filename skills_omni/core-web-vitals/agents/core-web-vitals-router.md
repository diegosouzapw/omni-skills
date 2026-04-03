# Core Web Vitals router note

Use `@core-web-vitals` when the request is explicitly about:

- Largest Contentful Paint
- Interaction to Next Paint
- Cumulative Layout Shift
- Core Web Vitals field regressions
- Search Console or CrUX CWV issues

Route elsewhere when:

- the user wants a broad site performance review rather than CWV-specific remediation
- the main task is a Lighthouse score audit
- the work is framework-specific beyond the CWV focus
- the issue is primarily accessibility, analytics architecture, or backend profiling

## Handoff hints

- Use `@perf-web-optimization` for broader frontend performance work.
- Use `@perf-lighthouse` for audit-driven remediation centered on Lighthouse output.
- Use `@perf-astro` for Astro-specific optimization requests.
- Use `@accessibility` if UI stabilization changes need accessibility review.

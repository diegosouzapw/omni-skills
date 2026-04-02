# Example: Authenticated app audit

## Scope

- Target: logged-in SaaS application
- Pages: sign-in, dashboard, settings
- Notes: personalized content and feature flags present

## Evidence collected

- Authenticated route list
- Session assumptions documented
- Manual keyboard/focus checks across dashboard widgets and settings forms
- Console review on major routes
- Lighthouse run on sign-in page and dashboard shell where practical

## Example findings

1. **Critical - Accessibility:** Modal dialog traps focus incorrectly and prevents keyboard escape on settings.
2. **High - Performance:** Dashboard interaction latency suggests heavy main-thread work after widget load.
3. **Medium - Best practices:** Permission prompt appears before user intent is established.
4. **Low - SEO:** Public sign-in page metadata can be improved, but this is not a primary risk.

## Handoff notes

- Route the modal remediation to `@web-accessibility` if deeper widget review is needed.
- Route interaction latency analysis to `@core-web-vitals` for INP-focused follow-up.

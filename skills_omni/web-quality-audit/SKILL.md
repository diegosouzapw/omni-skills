---
name: "web-quality-audit"
description: "Web quality audit workflow skill. Use this skill when a user needs a combined audit of performance, accessibility, SEO, and browser-facing best practices across one or more important pages or user flows. Use for requests like \\"audit my site\\", \\"review web quality\\", \\"run a Lighthouse audit\\", \\"check page quality\\", or \\"optimize my website\\" when the work spans multiple quality domains at once. Do not use it for single-area deep dives, keyword/content strategy, or penetration testing; route those to specialized skills."
version: "0.0.1"
category: "fullstack-web"
tags:
  - "web-quality-audit"
  - "lighthouse"
  - "performance"
  - "accessibility"
  - "seo"
  - "best-practices"
  - "core-web-vitals"
  - "web-quality"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/web-quality-audit"
upstream_author: "web-quality-skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Web quality audit

## Overview

Use this skill to run a structured, reproducible web quality audit across four areas together:

- performance
- accessibility
- SEO
- browser-facing best practices

This skill is appropriate when the user wants a single review of overall site quality, not a narrow deep dive into one specialty.

The workflow is evidence-first. It helps the operator:

1. choose representative pages or user flows
2. collect reproducible evidence
3. separate lab findings from field evidence where available
4. combine automated checks with manual validation
5. prioritize issues by user impact, business impact, and fixability
6. hand off to specialized skills when a finding needs deeper treatment

This skill preserves the intent of the upstream imported workflow while making it more execution-oriented for agents.

## When to Use This Skill

Use this skill when:

- the user asks for a broad website audit across performance, accessibility, SEO, and best practices
- the request includes phrases like "audit my site", "review web quality", "run Lighthouse", or "optimize my website" across multiple areas
- you need one report covering a marketing site, app shell, authenticated experience, or critical conversion flow
- the audit should compare multiple important pages, not just a homepage snapshot
- the operator needs a reusable packet for evidence capture, prioritization, troubleshooting, and handoff

Do not use this skill when:

- the task is only Core Web Vitals or performance tuning; use a specialized performance or `core-web-vitals` skill
- the task is a dedicated accessibility conformance review; use an accessibility-focused skill
- the task is keyword strategy, content planning, or growth SEO; use a dedicated SEO/content workflow
- the task is penetration testing, exploit research, or full application security assessment; this skill only covers browser-facing web hygiene and quality signals
- the request is framework-specific profiling or deep debugging that needs a narrower engineering workflow

## Operating Table

| Situation | Goal | Minimum evidence | Checks to run | Common pitfalls | Escalate to |
| --- | --- | --- | --- | --- | --- |
| Marketing site homepage and templates | Get broad quality baseline | 2-5 representative URLs, device assumption, timestamp, Lighthouse output, screenshots | Lighthouse, manual keyboard pass, metadata review, robots/canonical check, console review | Homepage-only bias, ignoring mobile, overtrusting one score run | `seo`, `web-accessibility`, `core-web-vitals` |
| Authenticated app or dashboard | Audit logged-in quality and stateful UI | Login state notes, tested route list, user role, environment, screenshots, reproducible steps | Lighthouse where possible, keyboard/focus checks, dynamic content review, console/network errors, responsive checks | Expired sessions, cookie banners, synthetic runs that miss real flows | `web-accessibility`, framework-specific app debugging |
| Sign-up / checkout / multi-step journey | Audit conversion-critical flow | Entry URL, key steps, blockers, screenshots, timestamps, journey notes | Journey-based Lighthouse where possible, form a11y checks, error handling, CLS during steps, canonical/index controls on public pages | Only auditing landing page, ignoring post-click UX, missing validation states | `core-web-vitals`, `web-accessibility`, `seo` |
| SEO indexability review | Confirm crawl/index health for important pages | robots.txt, sitemap URL, canonical tag, status code, meta robots/header directives | Crawl/index checks, canonical consistency, mobile rendering notes, metadata uniqueness, internal link review | Good markup on a page that is still blocked or canonicalized away | `seo` |
| Accessibility validation | Catch barriers automation misses | Keyboard notes, focus screenshots, labels/errors review, at least one manual assistive-tech sanity pass when feasible | Automated scan plus manual keyboard/focus/semantics testing | Treating automated results as complete, ARIA-heavy widgets masking real issues | `web-accessibility` |
| Best-practices / browser hygiene review | Identify trust, compatibility, and runtime quality issues | HTTPS status, mixed-content check, console output, permission prompt behavior, header notes | Secure transport, mixed content, deprecated APIs, console errors, CSP/HSTS presence where applicable | Drifting into unsupported security claims or pentest language | `web-best-practices` or security-specific skill |

## Workflow

1. **Scope the audit.**
   - Identify the site type, main goals, target users, and critical pages or journeys.
   - Prefer representative pages over a homepage-only audit.
   - For apps, include at least one meaningful user flow such as sign-in, search, detail, settings, or checkout.

2. **Select pages and flows.**
   - Use `references/page-and-flow-selection-worksheet.md`.
   - Pick a small, meaningful set: homepage, a key template, a conversion page, and one stateful or authenticated view when relevant.

3. **Capture baseline context.**
   - Record audited URL, date/time, device assumptions, network assumptions, authenticated vs anonymous state, locale, and any blockers.
   - Use `references/evidence-capture-template.md`.

4. **Collect automated evidence.**
   - Run Lighthouse or equivalent available tooling on the selected pages or flow steps.
   - Capture category outputs for performance, accessibility, SEO, and best practices.
   - If field data is available from PageSpeed Insights or existing RUM/analytics, record it separately from lab results.

5. **Perform manual validation.**
   - Accessibility: keyboard-only navigation, focus visibility, labels, error states, headings/landmarks, custom widgets, motion/auto-updating content.
   - SEO: robots/indexing directives, canonicalization, metadata uniqueness, status behavior, sitemap and mobile rendering basics.
   - Best practices: HTTPS, mixed content, console errors, risky permission prompts, deprecated browser APIs, security headers where visible.

6. **Interpret findings carefully.**
   - Do not treat one Lighthouse run as definitive user experience truth.
   - Separate lab observations from field evidence.
   - Note confidence level, scope limits, and whether an issue is page-specific, template-wide, or journey-wide.

7. **Prioritize.**
   - Use `references/severity-and-priority-rubric.md`.
   - Rank by user harm, business impact, frequency, scope, and implementation effort.
   - Prefer fixes that remove blockers or improve many pages at once.

8. **Produce the audit report.**
   - Include evidence, likely cause, recommended action, and owner suggestions.
   - Use `examples/final-report-template.md`.

9. **Route specialized follow-up work.**
   - Hand off deep performance work to `core-web-vitals`.
   - Hand off manual accessibility remediation to `web-accessibility`.
   - Hand off SEO indexing/canonical/content issues to `seo`.
   - Hand off broader browser/platform hygiene work to `web-best-practices`.

## Audit Coverage

### Performance

Focus on user-visible performance and Core Web Vitals.

Prioritize:

- **LCP**: slow largest content rendering, poor resource discovery, server delay, render-blocking assets, oversized media
- **INP**: long tasks, heavy JavaScript, main-thread contention, expensive event handlers
- **CLS**: missing reserved space, unstable embeds/ads, late-loading UI, font/layout shifts

Useful evidence:

- Lighthouse performance output
- field data when available
- page type affected
- whether issues are first-load only, repeat-view only, or interaction-specific

### Accessibility

Automation is necessary but insufficient.

Minimum manual checks:

- keyboard-only navigation
- visible focus states
- meaningful page structure and landmarks
- form labels, instructions, and error association
- custom component behavior against native expectations
- at least one assistive-technology sanity check when feasible

Where practical, tie findings to WCAG 2.2 principles or success criteria in the report.

### SEO

Keep this skill focused on technical SEO signals that affect crawlability and indexability.

Check:

- robots.txt behavior
- sitemap presence and health
- canonical consistency
- indexability directives such as `noindex`
- HTTP status correctness
- title and description uniqueness
- heading structure and descriptive links
- mobile-first rendering basics

Avoid speculative ranking claims.

### Browser-facing best practices

This is not a full security assessment.

Review:

- HTTPS and secure context expectations
- mixed content
- obvious console/runtime errors
- deprecated browser APIs
- permission requests that are misleading or premature
- CSP and HSTS presence where visible and relevant
- whether production source maps appear unnecessarily exposed or should be access-controlled/omitted

## Examples

### Example 1: Audit a public marketing site

```text
Use @web-quality-audit to review https://example.com across performance, accessibility, SEO, and browser-facing best practices. Audit the homepage, one feature page, one pricing page, and one conversion page. Separate lab results from any available field data, include manual accessibility checks, and return prioritized findings with evidence.
```

### Example 2: Audit an authenticated dashboard

```text
Use @web-quality-audit for a logged-in web app. Audit the sign-in page, dashboard, and settings flow. Record authenticated state assumptions, note anything Lighthouse cannot cover reliably, perform manual keyboard/focus checks, and flag console/runtime issues separately from SEO findings.
```

### Example 3: Audit a user journey rather than a single page

```text
Use @web-quality-audit to review the landing -> search -> product detail -> checkout flow. Capture screenshots, timestamps, and tool outputs for each step. Prioritize findings that hurt conversion, accessibility, or CWV across the whole journey.
```

### Example 4: Produce a final report packet

```text
Run @web-quality-audit and return a final report using examples/final-report-template.md. Include scope, evidence collected, caveats, findings by severity, specialized-skill handoff recommendations, and the top 5 fixes by impact.
```

## Best Practices

### Do

- scope the audit before running tools
- test representative pages and flows, not only the homepage
- distinguish lab data from field data
- include manual accessibility checks
- record commands, timestamps, assumptions, and blockers for reproducibility
- prefer template-level fixes over page-by-page patching when the root cause is shared
- keep SEO recommendations grounded in crawlability, indexability, metadata, canonicalization, and mobile behavior
- keep security language limited to browser-facing best practices unless another security skill is invoked
- call out confidence limits when auth, personalization, geography, or experiment buckets affect results

### Don’t

- present Lighthouse scores alone as definitive real-user experience
- claim accessibility conformance from automation alone
- make ranking promises from surface-level SEO findings
- describe this skill as a penetration test or security review of the whole application
- overgeneralize from one URL if the site uses multiple templates or states
- recommend risky changes without noting likely tradeoffs, such as performance wins that may affect UX or analytics

## Troubleshooting

### Problem: Lighthouse looks bad, but field data looks acceptable

**Symptoms:** Lab runs show weak scores or failing metrics, but PageSpeed Insights field data or internal RUM looks healthier.

**Solution:** Treat this as a discrepancy to investigate, not a contradiction to ignore. Record both data types. Check whether the audited page is representative, whether the run used cold-cache synthetic throttling, whether third-party tags vary heavily, and whether field data is aggregated across a broader set of visits. Prioritize issues that appear in both lab and field evidence or are obviously user-visible.

### Problem: The important page is behind login or depends on dynamic state

**Symptoms:** The audit cannot reach the target experience cleanly, route transitions fail, cookie banners interfere, or automation captures only a shell page.

**Solution:** Narrow scope to reproducible authenticated routes and capture exact preconditions: account type, login state, feature flags, seed data, and blockers. Use journey-based steps instead of assuming one static page load is enough. Be explicit about what was and was not tested.

### Problem: SEO markup looks fine, but the page is still not indexable

**Symptoms:** Titles, headings, and metadata appear reasonable, but search visibility or indexability is still impaired.

**Solution:** Check technical controls first: `robots.txt`, meta robots or header directives, canonical tags pointing elsewhere, non-200 status responses, blocked resources, and sitemap inclusion. Record evidence for each control before suggesting content changes.

### Problem: Automated accessibility results look clean, but the experience still feels broken

**Symptoms:** Lighthouse or automated scans report few issues, yet keyboard navigation, focus order, screen reader output, or custom widgets behave poorly.

**Solution:** Continue with manual accessibility testing. Verify keyboard reachability, visible focus, semantic names/roles, error messaging, and custom widget behavior. Prefer native elements over ARIA-heavy patches when recommending fixes. Document which issues were discovered manually so reviewers do not treat the automated report as complete.

### Problem: Best-practices findings drift into unsupported security claims

**Symptoms:** The audit starts labeling issues as vulnerabilities without sufficient evidence, or recommendations imply full security review coverage.

**Solution:** Re-scope findings to browser-facing hygiene unless another security skill is engaged. Use precise wording such as HTTPS, mixed content, insecure embedding, weak header posture, or exposed implementation details. Do not claim exploitability without evidence.

## Related Skills

- `@core-web-vitals` - Use for deeper performance diagnosis, CWV remediation, and metric-specific follow-up.
- `@web-accessibility` - Use for manual accessibility auditing and remediation beyond broad quality review.
- `@seo` - Use for focused technical SEO, crawl/index troubleshooting, and content/search-specific follow-up.
- `@web-best-practices` - Use for browser/platform hygiene and modern web implementation follow-up.

## Additional Resources

### Local support pack

| Resource | Purpose |
| --- | --- |
| `references/audit-workflow.md` | Expanded execution guide for scoping, evidence, validation, prioritization, and handoff |
| `references/page-and-flow-selection-worksheet.md` | Helps choose representative URLs and journeys |
| `references/evidence-capture-template.md` | Standard template for recording reproducible audit evidence |
| `references/severity-and-priority-rubric.md` | Severity and prioritization model across audit categories |
| `references/troubleshooting-playbook.md` | Operational recovery guidance for common audit failure modes |
| `examples/homepage-audit-example.md` | Worked example for a marketing-site audit |
| `examples/authenticated-app-audit-example.md` | Worked example for a logged-in application audit |
| `examples/user-flow-audit-example.md` | Worked example for a journey-based audit |
| `examples/final-report-template.md` | Reusable final output structure |
| `agents/openai.yaml` | Agent-facing invocation metadata |

### External references

- Lighthouse overview: https://developer.chrome.com/docs/lighthouse/overview
- Lighthouse user flows: https://developer.chrome.com/docs/lighthouse/user-flows
- PageSpeed Insights and lab vs field data: https://developers.google.com/speed/docs/insights/v5/about
- Core Web Vitals: https://web.dev/articles/vitals
- Accessibility testing overview: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Testing
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg/
- Google Search Central SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Canonicalization guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Robots.txt specification: https://www.rfc-editor.org/rfc/rfc9309
- Sitemaps protocol: https://www.sitemaps.org/protocol.html
- Secure Contexts: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts
- CSP: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
- HSTS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
- Mixed content: https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content

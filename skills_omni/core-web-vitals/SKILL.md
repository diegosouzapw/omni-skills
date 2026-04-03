---
name: "core-web-vitals"
description: "Core Web Vitals optimization workflow skill. Use this skill when the user needs to improve Core Web Vitals field performance for LCP, INP, or CLS, diagnose production page experience regressions, or fix layout shifts and slow interactions with metric-specific evidence. Focuses on the three Core Web Vitals only. Do not use it for broad web performance work, generic Lighthouse-only audits, or framework-wide optimization outside CWV scope."
version: "0.0.1"
category: "frontend"
tags:
  - "core-web-vitals"
  - "web-performance"
  - "lcp"
  - "inp"
  - "cls"
  - "crux"
  - "rum"
  - "pagespeed-insights"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
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
upstream_skill: "skills/core-web-vitals"
upstream_author: "web-quality-skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Core Web Vitals optimization

## Overview

Use this skill to diagnose and improve the three Core Web Vitals metrics:

- **LCP** — Largest Contentful Paint
- **INP** — Interaction to Next Paint
- **CLS** — Cumulative Layout Shift

This skill is intentionally **metric-specific**. It is for production page experience work where the operator needs to identify which Core Web Vital is failing, find the likely root cause, apply a narrow fix, and verify the result in both lab and field data.

Core Web Vitals status is determined from **field data**, typically at the **75th percentile**. Lab tools are still essential, but they are for diagnosis and iteration, not for proving that production is fixed.

Use the bundled references and examples before proposing broad refactors. Core Web Vitals regressions are often caused by a specific rendering path, interaction pattern, font swap, route transition, resource-priority mistake, or dynamic insertion policy rather than by “performance” in the abstract.

## When to Use This Skill

Use this skill when the request is specifically about **Core Web Vitals outcomes** or one of the three CWV metrics.

### Use this skill when

- the user asks to **improve Core Web Vitals** in production
- the request is to **fix LCP**, **reduce CLS**, or **optimize INP**
- Search Console, CrUX, PageSpeed Insights, or internal RUM shows poor CWV at the **75th percentile**
- the team needs to diagnose why a page or template passes in Lighthouse but still fails in field data
- the problem appears on a specific route, template, device class, or interaction path
- the operator needs a focused workflow for **resource discovery**, **render delay**, **interaction latency**, or **layout shift attribution**

### Do not use this skill when

- the task is broad **web performance optimization** across bundle size, caching, code splitting, and infrastructure without a CWV-specific target
- the user only wants a **generic Lighthouse audit**
- the work is primarily framework-architecture tuning not yet tied to LCP, INP, or CLS symptoms
- the request is mainly about SEO outside page experience metrics
- the problem is Astro-specific and belongs in a dedicated framework skill

## Operating Table

| Situation | Primary evidence | First investigation step | Typical safe fixes |
| --- | --- | --- | --- |
| Poor **LCP** in field data | PSI field data, CrUX, Search Console, RUM | Confirm the actual LCP element and classify the delay as TTFB, discovery delay, transfer duration, or render delay | Improve server response, expose LCP content in initial HTML, avoid lazy-loading LCP, selectively preload or use `fetchpriority`, reduce render-blocking CSS/JS |
| Poor **INP** in field data | RUM, PSI field data, DevTools trace | Identify whether time is lost in input delay, handler processing, or presentation delay | Break up long tasks, yield to main thread, defer non-visual work, reduce expensive rerenders, trim layout/paint cost |
| Poor **CLS** in field data | RUM, PSI field data, DevTools layout-shift records | Identify what moved, when it moved, and whether the shift was expected or unexpected | Reserve space, stabilize ads/embeds/banners, avoid injection above visible content, fix font metric mismatch |
| Field bad, lab looks fine | CrUX, Search Console, internal RUM | Segment by page type, device, logged-in state, experiments, and third-party tags | Add production attribution, test representative devices and states, ship narrower fixes based on real cohorts |
| Need production attribution before changing code | Internal RUM with `web-vitals/attribution` | Add temporary or permanent instrumentation to capture responsible elements/interactions safely | Send coarse selectors or element metadata only; avoid collecting sensitive page content |
| Unsure whether this is still CWV work | User request plus evidence source | Check whether the problem is truly LCP, INP, or CLS, or a broader performance/audit task | Route to `@perf-web-optimization`, `@perf-lighthouse`, `@perf-astro`, or another relevant skill |

## Workflow

1. **Confirm scope and metric ownership**  
   Determine whether the request is really about LCP, INP, or CLS. Ask for the affected URLs, templates, device class, geography, and whether the issue comes from Search Console, CrUX, PageSpeed Insights, or internal RUM.

2. **Collect field evidence first**  
   Identify the failing metric at the **75th percentile** and note whether the issue appears at the origin level, URL level, or only in internal RUM. Use:
   - Search Console for production CWV status and grouped URLs
   - CrUX or PageSpeed Insights for public field distributions
   - internal RUM for route-, release-, or cohort-specific attribution

3. **Choose one narrow reproduction target**  
   Pick one representative URL and one environment. Do not jump across multiple templates unless field data proves the regression is shared.

4. **Map the problem to the correct diagnostic branch**
   - **LCP**: identify the LCP candidate and which subpart dominates: TTFB, discovery delay, transfer duration, or render delay
   - **INP**: identify the worst interactions and whether the delay comes from input delay, handler work, or presentation/rendering delay
   - **CLS**: identify whether shifts occur on initial load, during hydration, after route change, after consent/banner injection, or during ad/embed loading

5. **Use lab tools for diagnosis, not final truth**  
   Reproduce in Chrome DevTools, Lighthouse, or WebPageTest. Use them to inspect waterfalls, layout shifts, long tasks, rendering behavior, and interaction timing. Treat lab tools as debugging aids, not as proof that production is fixed.

6. **Apply the smallest metric-specific fix**  
   Prefer targeted changes over broad rewrites:
   - for LCP, improve discovery, loading, or render readiness of the actual LCP element
   - for INP, reduce or split main-thread work and shorten rendering after interaction
   - for CLS, reserve space and prevent unexpected movement rather than masking symptoms

7. **Re-test in lab with the same scenario**  
   Verify the fix on the same URL, same device profile, and same interaction path. Compare before and after traces or PSI outputs where possible. Avoid stacking multiple unrelated changes into the same CWV fix.

8. **Verify in field data before declaring success**  
   Explain that Search Console and CrUX can lag because they reflect rolling windows. If ownership is still unclear, add production instrumentation with attribution before doing wider refactors.

9. **Prepare handoff notes**  
   Record:
   - failing metric and threshold
   - affected URL, template, and device cohort
   - evidence source
   - diagnostic conclusion
   - fix applied
   - what still requires field confirmation

## Core metric thresholds

| Metric | Good | Needs improvement | Poor |
| --- | --- | --- | --- |
| **LCP** | ≤ 2.5s | > 2.5s and ≤ 4.0s | > 4.0s |
| **INP** | ≤ 200ms | > 200ms and ≤ 500ms | > 500ms |
| **CLS** | ≤ 0.1 | > 0.1 and ≤ 0.25 | > 0.25 |

Google evaluates Core Web Vitals using field data, typically at the **75th percentile**.

## Metric playbooks

### LCP: diagnose by subpart

Do not assume LCP is only a “large image problem.” First determine whether the LCP element is:

- an image
- a text block
- a poster image or video frame
- an SVG or background-image-backed hero

Then inspect which subpart is driving delay:

1. **TTFB** — the server starts too slowly
2. **Resource discovery delay** — the browser learns about the LCP resource too late
3. **Resource load duration** — the asset is too heavy or slow to transfer
4. **Element render delay** — CSS, fonts, hydration, or JS prevent painting after the resource is ready

Typical LCP fixes:

- make the LCP element present in initial HTML when possible
- avoid lazy-loading the true LCP element
- preload the LCP resource only when the candidate is stable and clearly correct
- use `fetchpriority="high"` carefully on the real LCP image, not many images
- reduce render-blocking CSS and JS
- optimize image dimensions, format, and compression
- fix font-loading delays when text is the LCP element
- reduce hydration or client-render gates that delay first paint of hero content

See: [LCP playbook](references/lcp-playbook.md) and [LCP observer snippet](examples/lcp-observer-snippet.js).

### INP: optimize the whole interaction path

INP is not only about the event handler. Diagnose three parts:

1. **Input delay** — work already blocking the main thread before the interaction starts
2. **Processing duration** — the event callback and work it triggers
3. **Presentation delay** — style, layout, paint, or commit work after handler logic finishes

Typical INP fixes:

- remove or split long tasks
- yield between chunks of non-critical work
- prioritize immediate visual response first
- defer analytics and background work
- reduce expensive DOM reads and writes
- minimize style recalculation and layout thrash
- use workers for CPU-heavy processing where appropriate
- isolate expensive component rerenders
- lazy-load heavy third-party code on demand rather than at startup

Use modern yielding patterns where supported, with safe fallbacks.

See: [INP playbook](references/inp-playbook.md), [long task observer](examples/long-task-observer.js), and [yield patterns](examples/yield-patterns.js).

### CLS: prevent movement, especially post-load

CLS often comes from content that appears after layout has already stabilized. Diagnose whether shifts come from:

- images or videos without dimensions
- ads, embeds, consent banners, or iframes without reserved space
- injected UI above existing content
- hydration or SPA route transitions
- font swaps with mismatched fallback metrics
- animations using layout-affecting properties

Typical CLS fixes:

- add `width` and `height` or `aspect-ratio`
- reserve stable containers for ads and embeds
- avoid inserting content above already visible content
- make route transitions and hydration states reserve final space
- use `font-display` intentionally and adjust fallback metrics where needed
- animate with `transform` and `opacity` instead of layout-affecting properties when appropriate

Not every movement counts as CLS; expected user-initiated changes are handled differently from unexpected shifts.

See: [CLS playbook](references/cls-playbook.md) and [layout shift observer](examples/layout-shift-observer.js).

## Examples

### Example 1: collect evidence for one production URL

```bash
python3 skills/core-web-vitals/scripts/collect_pagespeed_evidence.py \
  --url https://example.com/ \
  --strategy mobile
```

Expected outcome: a compact JSON summary containing PageSpeed Insights field and lab sections for the URL, suitable for a review packet.

### Example 2: ask the agent to run a field-first CWV diagnosis

```text
Use @core-web-vitals to diagnose why https://example.com/product/123 fails Core Web Vitals on mobile. Start with field evidence, identify the worst metric, isolate the likely root cause, propose the smallest safe fix, and clearly separate lab findings from field findings.
```

### Example 3: add production attribution when ownership is unclear

```javascript
import { onCLS, onINP, onLCP } from 'web-vitals/attribution'

function sendToAnalytics(metric) {
  console.log(metric.name, metric.value, metric.attribution)
}

onLCP(sendToAnalytics)
onINP(sendToAnalytics)
onCLS(sendToAnalytics)
```

Expected outcome: metrics include attribution details that help identify the LCP element, slow interaction context, or layout-shift sources.

### Example 4: debug a possible long-task-driven INP problem

```bash
node skills/core-web-vitals/examples/long-task-observer.js
```

Expected outcome: a reusable observer snippet suitable for browser-side debugging or adaptation into a test harness.

## Best Practices

### Do

- start with **field evidence** before making code changes
- identify the specific failing metric instead of treating CWV as one score
- isolate the affected page type, route, and device class
- apply the **smallest fix** that addresses the measured cause
- keep before/after evidence for the exact URL tested
- instrument production with attribution when the responsible element or interaction is unclear
- explain field/lab differences explicitly in review notes
- preserve critical content in initial HTML when LCP depends on it
- reserve layout space before content arrives
- prioritize immediate visual feedback in interactions before non-critical work

### Do not

- claim CWV is fixed because Lighthouse improved once
- preload multiple images with high priority without proving which one is LCP
- lazy-load the likely LCP image or gate it behind client-only rendering unnecessarily
- use `requestIdleCallback` as a substitute for reducing main-thread work
- assume INP problems live only inside the event handler
- treat all motion as CLS without checking shift attribution
- solve CLS by hiding unstable content until after load if that worsens UX or LCP
- broaden the task into full architecture or performance modernization unless the evidence requires it

## Troubleshooting

### Problem: Field data is poor, but local Lighthouse looks fine

**Symptoms:** A page passes local tests, but production reports remain poor or unchanged.

**Solution:** Check whether the issue is based on a rolling field window, grouped URLs, or traffic cohorts not represented in local testing. Compare CrUX, PageSpeed Insights field data, and internal RUM. Verify that the production build, CDN behavior, experiments, logged-in state, and third-party scripts match the environment being measured.

### Problem: You cannot tell which element is responsible for poor LCP

**Symptoms:** The team is discussing hero images, fonts, or markup guesses without clear evidence of the actual LCP candidate.

**Solution:** Use DevTools and an LCP observer to confirm the real LCP element. Then use the LCP subpart model: TTFB, discovery delay, transfer duration, and render delay. If uncertainty remains in production, add `web-vitals/attribution` reporting.

### Problem: INP is slow even though the click handler looks short

**Symptoms:** Handlers appear small in code review, but interactions still feel delayed or traces show slow response.

**Solution:** Inspect long tasks before the interaction and rendering work after it. Look for style recalculation, layout, paint, framework commits, or third-party work that extends presentation delay. Split tasks, yield between chunks, reduce DOM work, and prioritize immediate UI response.

### Problem: CLS happens after route changes or user flows, not at initial page load

**Symptoms:** Synthetic load tests look acceptable, but users still report jumps during SPA navigation, banners, accordions, embeds, or consent prompts.

**Solution:** Investigate post-load layout shifts with layout-shift records and RUM attribution. Reserve space for late content, avoid injecting content above visible regions, and ensure route shells and hydration states match final layout dimensions.

### Problem: A “fix” improves one metric but harms another

**Symptoms:** Deferring content improves CLS or INP but worsens LCP, or aggressive preloading improves one image while starving other critical resources.

**Solution:** Re-evaluate the exact bottleneck and revert broad changes. Core Web Vitals must be balanced as a page-experience system. Prefer narrow fixes tied to measured causes and re-test all three metrics after each significant change.

## Related Skills

- `@perf-web-optimization` — use when the work expands into broad frontend performance, delivery, caching, bundle strategy, or architecture
- `@perf-lighthouse` — use when the main task is a structured Lighthouse audit rather than metric-specific CWV remediation
- `@perf-astro` — use when the request is Astro-specific rather than general CWV diagnosis
- `@accessibility` — use when UI changes needed for stability or interaction quality also require accessibility review

## Additional Resources

### Local support pack

- [CWV workflow](references/cwv-workflow.md)
- [Field vs lab guide](references/field-vs-lab.md)
- [LCP playbook](references/lcp-playbook.md)
- [INP playbook](references/inp-playbook.md)
- [CLS playbook](references/cls-playbook.md)
- [RUM attribution guide](references/rum-web-vitals-attribution.md)
- [PSI triage template](examples/psi-triage-template.md)
- [DevTools trace review checklist](examples/devtools-trace-review.md)
- [Search Console validation note](examples/search-console-validation-note.md)
- [web-vitals analytics snippet](examples/web-vitals-analytics-snippet.js)
- [LCP observer snippet](examples/lcp-observer-snippet.js)
- [Long task observer](examples/long-task-observer.js)
- [Layout shift observer](examples/layout-shift-observer.js)
- [Yield patterns](examples/yield-patterns.js)
- [PageSpeed evidence collector](scripts/collect_pagespeed_evidence.py)
- [CWV skill router note](agents/core-web-vitals-router.md)

### External references

- Google Search: Core Web Vitals and page experience in Search results
- web.dev: Core Web Vitals overview
- web.dev: Largest Contentful Paint
- web.dev: Optimize Largest Contentful Paint
- web.dev: Interaction to Next Paint
- web.dev: Optimize Interaction to Next Paint
- web.dev: Cumulative Layout Shift
- web.dev: Optimize Cumulative Layout Shift
- Chrome documentation: CrUX and DevTools Performance panel
- MDN: `fetchpriority`, `rel=preload`, `aspect-ratio`, `font-display`
- GoogleChrome `web-vitals` attribution build

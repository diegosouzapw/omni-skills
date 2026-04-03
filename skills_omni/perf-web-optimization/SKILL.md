---
name: "perf-web-optimization"
description: "Web performance optimization workflow skill. Use this skill when a user needs to reduce page weight, improve loading behavior, tighten caching, lazy-load safely, and cut unnecessary rendering or JavaScript cost. Use it for slow pages, oversized bundles, image and font delivery issues, render-blocking resources, or repeat-visit caching problems. Do not use it for Lighthouse audit execution or report interpretation (use perf-lighthouse), Core Web Vitals-specific diagnosis and field/lab reconciliation (use core-web-vitals), or Astro-specific optimization work (use perf-astro)."
version: "0.0.1"
category: "frontend"
tags:
  - "perf-web-optimization"
  - "web-performance"
  - "bundle-size"
  - "images"
  - "caching"
  - "lazy-loading"
  - "fonts"
  - "page-speed"
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
upstream_skill: "skills/perf-web-optimization"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Web Performance Optimization

## Overview

Use this skill to improve web performance through a practical operator workflow:

1. establish a baseline
2. inspect the network waterfall and main-thread cost
3. reduce bytes and unnecessary work
4. optimize delivery order and caching
5. verify that changes helped without creating regressions

This skill is for implementation-oriented performance work such as:

- reducing shipped JavaScript and CSS
- improving image and font delivery
- fixing wasteful lazy-loading patterns
- tightening cache behavior for static assets and HTML
- reducing render-blocking resources and non-critical third-party cost

It preserves the intent of the upstream `perf-web-optimization` workflow while reshaping it into an operator-facing playbook with concrete references, examples, and troubleshooting.

## When to Use This Skill

Use this skill when:

- a page feels slow and you need to identify whether the bottleneck is transfer size, render blocking, main-thread work, or caching
- bundle size has grown and you need to split code, remove heavy dependencies, or verify whether tree shaking is working
- images are too large, incorrectly sized, or being lazy-loaded in ways that hurt perceived speed
- fonts, CSS, or third-party scripts are competing with critical content during initial load
- repeat visits still re-download assets and you need to validate cache headers, fingerprinting, and invalidation behavior
- you need a safe optimization plan that can be implemented incrementally and verified after each change

Do **not** use this skill when:

- the main request is to run Lighthouse, interpret Lighthouse reports, or manage performance budgets from audits; use `@perf-lighthouse`
- the main request is diagnosing Core Web Vitals failures, field-vs-lab differences, or metric-specific CWV remediation; use `@core-web-vitals`
- the work is primarily Astro-specific; use `@perf-astro`

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Slow initial load, unclear cause | `references/devtools-performance-triage.md` | Helps separate network, CPU, layout, and scripting bottlenecks before changing code |
| Large images or poor hero loading | `references/image-delivery-playbook.md` | Covers responsive images, LCP-safe loading, dimensions, and format decisions |
| Lazy loading helped little or made load worse | `references/lazy-loading-boundaries.md` | Clarifies what should and should not be deferred |
| Large JavaScript bundles | `references/bundle-debugging.md` | Covers code splitting, tree-shaking failure modes, and dependency hygiene |
| Repeat visits still download assets | `references/cache-strategy-matrix.md` | Maps cache policy to resource type and explains stale-asset checks |
| Font or preload regressions | `references/font-loading-and-preload.md` | Helps avoid over-preloading and font-related layout or priority issues |
| Need a reusable work packet | `examples/perf-triage-checklist.md` | Gives a compact evidence template for before/after verification |

## Workflow

1. **Confirm scope and route correctly**
   - Verify that the request is about broad web performance optimization rather than Lighthouse execution, Core Web Vitals diagnosis, or framework-specific tuning.
   - Identify the page, route, or template that matters most.
   - Ask what changed recently if the slowdown is new.

2. **Capture a baseline before changing anything**
   - Record the URL, environment, device assumptions, and whether you are measuring a first load or repeat visit.
   - Note obvious symptoms: slow hero image, heavy JS, long blank screen, janky interaction, repeated asset downloads.
   - Use `examples/perf-triage-checklist.md` to record evidence.

3. **Inspect the delivery path**
   - Use the browser Network panel to identify the largest resources, render-blocking CSS or JS, duplicate downloads, caching headers, and whether compression is present.
   - Check whether the likely hero image is loaded early enough and whether other resources are competing with it.
   - Confirm whether HTML, static assets, and APIs use appropriate cache behavior.

4. **Inspect main-thread work**
   - Use the browser Performance panel to identify long tasks, heavy script evaluation, layout cost, and post-load third-party execution.
   - Separate transfer-size problems from execution-time problems.
   - Do not assume compressed images or smaller bundles alone will fix responsiveness if long tasks remain.

5. **Choose the highest-leverage fixes first**
   - Start with the bottleneck that explains the largest user-visible delay.
   - Typical priority order:
     1. oversized or poorly loaded hero media
     2. render-blocking CSS or JS
     3. excessive shipped JavaScript
     4. wasteful third-party scripts
     5. poor cacheability of stable assets
     6. secondary font or below-the-fold media tuning

6. **Implement incrementally**
   - Make one class of change at a time when possible.
   - Prefer reversible, narrow fixes over large speculative refactors.
   - Rebuild and compare before/after behavior after each meaningful change.

7. **Verify no regressions**
   - Re-check the waterfall, resource sizes, request priorities, and repeat-visit caching.
   - Confirm that likely LCP content is not lazy-loaded.
   - Confirm explicit dimensions on media to avoid layout shifts.
   - Confirm that preloads and fetch-priority hints did not create new contention.

8. **Document deployment and cache implications**
   - If you changed caching, note whether filenames are fingerprinted and whether CDN invalidation is needed.
   - If you changed chunking or asset names, note any rollback or stale-HTML risks.
   - Route follow-up metric analysis to related skills where appropriate.

## Optimization Playbook

### Images

Focus on correct loading order and responsive sizing, not just compression.

- Do **not** lazy-load the likely hero or LCP image.
- Use explicit `width` and `height` or an equivalent aspect-ratio reservation.
- Use responsive `srcset` and `sizes` so smaller viewports do not download oversized assets.
- Use modern formats where they are supported by the delivery pipeline.
- Consider `fetchpriority="high"` for the likely hero image when it is truly important and above the fold.
- Lazy-load below-the-fold images and iframes, but verify that they are actually below the fold.

Example:

```html
<img
  src="/hero-1200.webp"
  srcset="/hero-640.webp 640w, /hero-960.webp 960w, /hero-1200.webp 1200w"
  sizes="100vw"
  alt="Product overview"
  width="1200"
  height="675"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>
```

### JavaScript and CSS

- Remove or replace heavy dependencies before tuning chunk strategy.
- Prefer route-level or feature-level splitting over a single oversized vendor chunk.
- Verify that dynamic imports actually defer work instead of only reshaping files.
- Check whether libraries are imported narrowly enough for tree shaking to work.
- Watch for CommonJS packages and side effects that prevent dead-code elimination.
- Inline only small truly critical CSS; defer the rest carefully.

### Fonts

- Prefer fewer families, weights, and variants.
- Use `font-display` intentionally, usually `swap` for most web UI cases.
- Preload only fonts that are genuinely critical to first render.
- Avoid preloading many alternatives or non-critical fonts.
- Verify that fallback behavior does not introduce visible layout instability.

### Caching

Use resource-type-specific rules instead of copying one header block everywhere.

- Fingerprinted static assets: long-lived caching such as `public, max-age=31536000, immutable`
- HTML documents: revalidate so users discover new asset references quickly
- API responses: choose caching based on freshness and sensitivity, not by analogy to static files

Always verify actual headers and repeat-visit behavior in the browser after changes.

## Examples

### Example 1: Ask the agent for a focused optimization pass

```text
Use @perf-web-optimization on the product page. Start by capturing a baseline, then inspect network waterfall, main-thread cost, image loading, bundle composition, and cache behavior. Prioritize the smallest safe changes with the biggest first-load impact.
```

### Example 2: Build an evidence packet before editing code

```text
Use the perf triage checklist to capture: URL tested, first-load vs repeat-load behavior, largest assets, likely render-blocking requests, cache headers, suspected LCP resource, and top long tasks. Then propose the top 3 fixes by impact and risk.
```

### Example 3: Safe image-loading correction

```html
<!-- Likely hero image: not lazy-loaded -->
<img
  src="/hero.webp"
  alt="Hero"
  width="1200"
  height="600"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>

<!-- Below-the-fold image -->
<img
  src="/gallery-1.webp"
  alt="Gallery item"
  width="400"
  height="300"
  loading="lazy"
  decoding="async"
/>
```

### Example 4: Framework-agnostic optimization plan

See [examples/framework-agnostic-optimization-plan.md](examples/framework-agnostic-optimization-plan.md) for a reusable implementation sequence.

## Best Practices

### Do

- measure before editing code
- verify whether the bottleneck is network, CPU, layout, or caching
- optimize the likely hero image separately from below-the-fold media
- use responsive images and explicit dimensions
- validate cache behavior in the browser, not only in config files
- confirm that code splitting reduced shipped work, not just changed file names
- keep fixes incremental and easy to compare
- document cache invalidation and rollback implications

### Don't

- do not lazy-load above-the-fold or likely LCP content
- do not preload many resources just because they seem important
- do not preload multiple alternative image formats for the same asset
- do not assume long cache lifetimes are safe for unhashed filenames
- do not assume a smaller compressed bundle guarantees faster interaction
- do not leave third-party scripts unprofiled after deferring them
- do not route audit execution or metric-specific CWV analysis through this skill

## Troubleshooting

### Problem: Image compression helped, but the page still feels slow

**Symptoms:** Total image bytes decreased, but the page still has a delayed first render, long blank period, or sluggish interaction.

**Likely causes:**
- render-blocking CSS or JS remains
- main-thread scripting is still expensive
- the likely hero image is not prioritized correctly
- third-party scripts execute heavily after load

**What to inspect:**
- Network waterfall for render-blocking requests
- Performance panel for long tasks and script evaluation
- whether the hero image is lazy-loaded or discovered late

**Solution:**
Address critical-path CSS/JS and main-thread work next. Verify the hero image loads early, then reduce script execution and third-party cost.

### Problem: Lazy loading did not help or made LCP worse

**Symptoms:** More resources are deferred, but the most important content appears later or LCP regressed.

**Likely causes:**
- the likely hero image was marked `loading="lazy"`
- the image is near the viewport and browser heuristics limit the expected benefit
- the image is still oversized because `srcset` and `sizes` are missing
- fetch priority is working against the intended critical path

**What to inspect:**
- the markup for the likely hero image
- request priority and discovery order in the Network panel
- actual rendered viewport and whether the media is above the fold

**Solution:**
Remove lazy loading from likely LCP content, add explicit dimensions, add responsive sources, and use `fetchpriority="high"` only for the real hero asset.

### Problem: Cache headers are present, but repeat visits still download assets

**Symptoms:** Static assets appear cacheable in config, but the browser still re-requests or re-downloads them after deploys or refreshes.

**Likely causes:**
- asset filenames are not fingerprinted
- HTML points to stale or changing asset URLs
- CDN or proxy behavior differs from origin behavior
- service worker or query-string churn defeats cache reuse

**What to inspect:**
- actual response headers in the browser
- whether asset filenames include content hashes
- whether HTML updates correctly after deployment
- whether the CDN is serving the headers you expect

**Solution:**
Use fingerprinted asset filenames for immutable caching, keep HTML revalidating, and verify CDN behavior and invalidation steps after deployment.

### Problem: Bundle size barely changed after replacing a large library

**Symptoms:** A dependency was swapped or imports were narrowed, but shipped JavaScript did not drop as expected.

**Likely causes:**
- the old library still exists transitively
- imports are still too broad
- the package or build output is CommonJS-heavy
- side effects prevent tree shaking
- split chunks duplicated code across routes

**What to inspect:**
- bundle analyzer output
- import style in application code
- build output for duplicated or unchanged modules
- package metadata and bundler behavior

**Solution:**
Confirm the old package is fully removed, narrow imports further, verify tree-shaking compatibility, and revise split strategy if duplicated modules negate the savings.

### Problem: Preload was added, but the page got slower

**Symptoms:** Critical resources appear to start earlier, but the page feels slower or the waterfall looks more congested.

**Likely causes:**
- too many resources were preloaded
- the wrong resource type or `as` value was used
- preloaded fonts or assets competed with more important requests
- alternative formats were preloaded unnecessarily

**What to inspect:**
- request priority and contention in the Network panel
- whether each preload is truly critical to first render
- whether the same resource is also discovered normally

**Solution:**
Remove speculative preloads, keep only clearly critical ones, and verify the resulting waterfall is simpler rather than busier.

## Related Skills

- `@core-web-vitals` - Use when the work centers on LCP, INP, CLS, field data, or lab-vs-field reconciliation.
- `@perf-lighthouse` - Use when the task is to run audits, interpret Lighthouse output, or work from audit-specific opportunities.
- `@perf-astro` - Use when the optimization work is Astro-specific.

## Additional Resources

### Local references

- [DevTools performance triage](references/devtools-performance-triage.md)
- [Image delivery playbook](references/image-delivery-playbook.md)
- [Lazy loading boundaries](references/lazy-loading-boundaries.md)
- [Bundle debugging](references/bundle-debugging.md)
- [Cache strategy matrix](references/cache-strategy-matrix.md)
- [Font loading and preload](references/font-loading-and-preload.md)

### Local examples

- [Performance triage checklist](examples/perf-triage-checklist.md)
- [Framework-agnostic optimization plan](examples/framework-agnostic-optimization-plan.md)

### Upstream preservation note

This enhanced version preserves the identity and intent of the upstream `perf-web-optimization` workflow while replacing import-wrapper emphasis with direct operator guidance.

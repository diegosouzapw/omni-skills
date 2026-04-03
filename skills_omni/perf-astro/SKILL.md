---
name: "perf-astro"
description: "Astro Performance Playbook workflow skill. Use this skill when the user needs Astro-specific performance work on images, scripts, fonts, rendering mode, and optional build-time tactics to improve Core Web Vitals and pursue 95+ Lighthouse results. Use when optimizing an Astro site implementation or reviewing Astro performance changes. Do NOT use for non-Astro sites, generic Core Web Vitals strategy, or Lighthouse-only auditing."
version: "0.0.1"
category: "frontend"
tags:
  - "perf-astro"
  - "astro"
  - "performance"
  - "core-web-vitals"
  - "lighthouse"
  - "lcp"
  - "cls"
  - "fonts"
  - "images"
  - "scripts"
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
upstream_skill: "skills/perf-astro"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Astro Performance Playbook

## Overview

This skill is for implementing **Astro-specific performance improvements** in real projects.

It preserves the intent of the upstream `perf-astro` workflow while upgrading it from an import wrapper into an execution-ready playbook. The focus is on **Astro-native optimizations first**: render mode choice, `astro:assets`, script handling, hydration minimization, font loading, and careful use of optional build-time integrations such as critical CSS inlining or compression.

Use this skill to make code and configuration changes in an Astro site that can improve **LCP, CLS, INP, transfer size, and Lighthouse performance score**. A Lighthouse score of 95+ can be a useful goal, but it is **not guaranteed** and should not outweigh field performance and user experience.

Preserve provenance when helpful: this skill was derived from the upstream `tech-leads-club/agent-skills` `perf-astro` intake, but the workflow below is curated for direct operational use.

## When to Use This Skill

Use this skill when:

- an Astro site is underperforming and the user wants implementation-level changes, not just a report
- the likely bottleneck is in Astro templates, rendering mode, images, scripts, fonts, hydration, or third-party embeds
- the user wants to improve LCP or CLS on Astro pages, especially landing pages, blogs, docs, or marketing pages
- the task includes evaluating or configuring optional Astro build-time tactics such as critical CSS inlining or output compression
- the work requires before/after evidence for a PR or handoff

Do **not** use this skill when:

- the site is not built with Astro; use `perf-web-optimization` or `core-web-vitals`
- the task is mainly running Lighthouse, interpreting audits, or setting budgets; use `perf-lighthouse`
- the root problem is mostly CDN, server caching, backend latency, or infrastructure rather than Astro code
- the request is broad frontend performance advice without Astro-specific implementation detail

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Unsure what to optimize first | `references/astro-performance-decision-tree.md` | Helps choose render mode, image, font, script, or optional build-time tactics before editing code |
| Preparing a code change | `references/astro-performance-checklist.md` | Gives a concise execution checklist for templates, assets, scripts, and validation |
| LCP, CLS, INP, or TTFB issue is unclear | `references/astro-performance-troubleshooting.md` | Maps symptoms to likely causes and safe next checks |
| Need proof for review or handoff | `references/astro-performance-validation.md` | Defines what before/after evidence to gather |
| Need copyable patterns | `examples/` files linked below | Provides Astro examples for images, fonts, scripts, and optional integrations |
| Task drifted to audits or generic CWV strategy | `agents/perf-astro-router.md` | Routes to the better skill instead of forcing this one |

## Workflow

1. **Confirm scope and success criteria**
   - Verify the site is Astro.
   - Identify the target pages or templates.
   - Ask what matters most: LCP, CLS, INP, total JS, TTFB, or Lighthouse score.
   - Treat **95+ Lighthouse** as a target, not a promise.

2. **Classify the page by rendering mode**
   - Check whether the page is prerendered/static or server-rendered.
   - Prefer static/prerendered output for marketing, docs, and content pages unless dynamic rendering is required.
   - If the page is SSR and slow, note that frontend tweaks may not fix poor TTFB by themselves.

3. **Identify the dominant bottleneck before changing code**
   - Find the likely LCP element on the key page.
   - Inventory client-side scripts, `client:*` hydration directives, and third-party embeds.
   - Check whether fonts or image sizing are contributing to CLS.
   - Review whether the page ships more CSS or JS than necessary.

4. **Apply Astro-native optimizations first**
   - Use `astro:assets` for important images where possible.
   - Ensure images have explicit dimensions or stable aspect ratio.
   - Keep scripts processed by Astro unless `is:inline` is truly required.
   - Reduce unnecessary hydration and client-side JS.
   - Prefer self-hosted or Astro-integrated fonts with intentional `font-display`.

5. **Optimize the actual LCP path**
   - Improve discovery of the LCP resource.
   - Use `fetchpriority="high"` only for the real LCP image when appropriate.
   - Preload only critical resources that are otherwise discovered too late.
   - Avoid blanket preload or preconnect across many origins.

6. **Evaluate optional build-time tactics only after step 4 and 5**
   - Consider critical CSS inlining if route CSS is large and render-blocking.
   - Consider compression/minification integrations only if they add value beyond the existing build/hosting pipeline.
   - Validate output carefully to avoid duplicate optimization or regressions.

7. **Validate with evidence**
   - Compare before/after lab metrics on the same page type.
   - Record changes in LCP, CLS, INP, transfer size, image bytes, and JS weight where possible.
   - If field data exists, prioritize it over one-off lab score improvements.

8. **Package the result for review**
   - Summarize what changed, which page templates were affected, and what tradeoffs were accepted.
   - Attach evidence using `references/astro-performance-validation.md`.
   - Route to another skill if the root issue is mostly auditing, CDN/server config, or framework-agnostic performance.

## Examples

### Example 1: Optimize the LCP image with `astro:assets`

Use the pattern in [examples/lcp-image-astro-assets.astro](examples/lcp-image-astro-assets.astro).

```astro
---
import { Image } from 'astro:assets';
import hero from '../assets/hero.jpg';
---

<Image
  src={hero}
  alt="Product hero"
  widths={[640, 960, 1280]}
  sizes="(max-width: 768px) 100vw, 1280px"
  format="webp"
  width={1280}
  height={720}
  fetchpriority="high"
/>
```

Use this when the hero image is the real LCP candidate. Do not mark multiple images as high priority.

### Example 2: Use a safer Astro font-loading pattern

See [examples/layout-fonts-self-hosted.astro](examples/layout-fonts-self-hosted.astro).

```astro
<link rel="preload" href="/fonts/Inter-roman-subset.woff2" as="font" type="font/woff2" crossorigin>
<style>
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-roman-subset.woff2') format('woff2');
    font-display: swap;
    font-weight: 100 900;
    font-style: normal;
  }
</style>
```

Prefer self-hosting or Astro font tooling when available. Only preload the most important font files.

### Example 3: Keep Astro script processing and delay non-critical third parties

See [examples/script-loading-patterns.astro](examples/script-loading-patterns.astro).

```astro
<script>
  import { initNavigation } from '../scripts/nav.js';
  initNavigation();
</script>
```

This keeps Astro processing, bundling, and deduplication available. Avoid `is:inline` unless you need exact raw inline behavior.

### Example 4: Optional critical CSS and compression config

See [examples/optional-critters-compress-config.mjs](examples/optional-critters-compress-config.mjs).

Use this only after confirming that Astro-native image, font, script, and render-mode fixes are not enough.

## Best Practices

### Do

- **Do optimize the bottleneck you can name.** Identify the real LCP element, hydration source, or CLS trigger before changing config.
- **Do prefer Astro-native features first.** Start with `astro:assets`, script handling, selective hydration, and prerendering decisions.
- **Do prefer prerendered/static pages** for content-heavy routes unless dynamic rendering is necessary.
- **Do give images stable dimensions** and responsive variants to reduce CLS and wasted bytes.
- **Do use `fetchpriority`, `preload`, and `preconnect` sparingly.** Apply them to the most important resource, not everything.
- **Do keep scripts processed by Astro** unless you explicitly need `is:inline` behavior.
- **Do treat third-party scripts as a performance budget item.** Delay, reduce, or isolate them when possible.
- **Do validate with before/after evidence** rather than assuming a package install improved user experience.
- **Do keep optional integrations optional.** `astro-critters` and compression are tactics, not universal defaults.

### Do Not

- **Do not assume a 95+ Lighthouse score is guaranteed** after installing plugins.
- **Do not preload multiple large images or many fonts** without evidence that discovery order is the problem.
- **Do not overuse `is:inline`** and accidentally bypass Astro bundling and optimization.
- **Do not defer critical analytics, consent, or required app behavior** without checking business and legal requirements.
- **Do not blame frontend code alone** when SSR latency, API waterfalls, or hosting configuration are dominating TTFB.
- **Do not apply critical CSS inlining blindly** on already-small stylesheets or heavily cached CSS without measuring tradeoffs.

## Troubleshooting

### Problem: LCP is still poor after preloading the hero image

**Symptoms:** The page preloads an image, but LCP barely improves or the wrong element becomes LCP.

**Solution:** Confirm the actual LCP element first. Check whether the image is oversized, discovered late through CSS or JS, or blocked by poor TTFB. Make sure only the true LCP image gets `fetchpriority="high"` or preload treatment. See `references/astro-performance-troubleshooting.md`.

### Problem: Images are still large or CLS persists

**Symptoms:** Hero or card images still ship large bytes, or layout jumps occur while images load.

**Solution:** Move important images to `astro:assets` where possible, define width and height, generate responsive variants, and avoid eagerly loading decorative images. Check whether placeholders, aspect ratios, or remote image handling are inconsistent.

### Problem: The page ships too much JavaScript

**Symptoms:** Lighthouse or bundle analysis shows high JS cost, slow interactivity, or hydration-heavy pages.

**Solution:** Audit `client:*` directives, remove unnecessary islands, keep scripts processed by Astro, and review third-party bundles. Replace broad hydration with smaller interactive islands where possible.

### Problem: Font optimization caused flashes or layout shift

**Symptoms:** FOIT, FOUT, or text reflow appears after changing font loading.

**Solution:** Prefer self-hosted or Astro-aligned font loading, use `font-display` intentionally, preload only critical font files, and check fallback metric mismatch. Reduce unnecessary font variants and subsets.

### Problem: Critical CSS inlining did little or made things worse

**Symptoms:** HTML got larger, cache behavior regressed, or LCP did not improve.

**Solution:** Check whether route CSS was already small, whether inlining duplicated bytes across pages, or whether the real bottleneck is images, fonts, JS, or TTFB. Treat critical CSS as optional and validate route by route.

### Problem: SSR pages remain slow despite frontend cleanup

**Symptoms:** The page still has poor LCP because server response is slow, especially on dynamic routes.

**Solution:** Check adapter latency, API waterfalls, origin caching, and whether the route should be prerendered instead. If the main issue is server or CDN behavior, hand off to a more appropriate performance or infrastructure skill.

## Related Skills

- `@perf-lighthouse` - Use when the task is mainly running Lighthouse, reading reports, or setting budgets.
- `@core-web-vitals` - Use when the work is mainly metric strategy, interpretation, or cross-framework CWV guidance.
- `@perf-web-optimization` - Use when the site is not Astro-specific or the fixes are mostly generic web performance work.
- `@accessibility` - Use when performance changes risk accessibility regressions, such as motion, font rendering, consent flows, or interaction timing.

## Additional Resources

### Local support pack

- [Astro performance decision tree](references/astro-performance-decision-tree.md)
- [Astro performance checklist](references/astro-performance-checklist.md)
- [Astro performance troubleshooting](references/astro-performance-troubleshooting.md)
- [Astro performance validation guide](references/astro-performance-validation.md)
- [LCP image example with `astro:assets`](examples/lcp-image-astro-assets.astro)
- [Self-hosted font layout example](examples/layout-fonts-self-hosted.astro)
- [Astro script loading patterns](examples/script-loading-patterns.astro)
- [Optional Critters and compression config](examples/optional-critters-compress-config.mjs)
- [Routing and handoff notes](agents/perf-astro-router.md)

### Upstream and primary references

- Astro docs: Performance
- Astro docs: Images
- Astro docs: Fonts
- Astro docs: Client-side scripts
- Astro docs: View Transitions
- Astro docs: On-demand rendering
- MDN: `rel=preload`
- MDN: `fetchPriority`
- MDN: `rel=preconnect`
- web.dev: Optimize LCP
- web.dev: Font optimization and third-party performance guidance

## Notes on Optional Integrations Preserved from Upstream

The upstream skill emphasized `astro-critters` and build compression. That guidance is preserved here, but reframed as **optional** rather than default:

- consider critical CSS inlining when render-blocking route CSS is demonstrably part of the bottleneck
- consider compression integrations when they are not duplicating work already done by Astro, the bundler, or the hosting platform
- measure output changes before keeping these integrations in production

---
name: perf-web-optimization
description: "Web Performance Optimization workflow skill. Use this skill when the user needs Optimize web performance: bundle size, images, caching, lazy loading, and overall page speed. Use when site is slow, reducing bundle size, fixing layout shifts, improving Time to Interactive, or optimizing for Lighthouse scores. Triggers on: web performance, bundle size, page speed, slow site, lazy loading. Do NOT use for Core Web Vitals-specific fixes (use core-web-vitals), running Lighthouse audits (use perf-lighthouse), or Astro-specific optimization (use perf-astro) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["perf-web-optimization", "optimize", "web", "performance", "bundle", "size", "images", "caching"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Web Performance Optimization

## Overview

This public intake copy packages `packages/skills-catalog/skills/(performance)/perf-web-optimization` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Web Performance Optimization Systematic approach: Measure → Identify → Prioritize → Implement → Verify.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Target Metrics, Quick Wins, Bundle Analysis, Code Splitting Patterns, Caching Headers, Measurement.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Optimize web performance: bundle size, images, caching, lazy loading, and overall page speed. Use when site is slow, reducing bundle size, fixing layout shifts, improving Time to Interactive, or optimizing for....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Target Metrics

| Metric | Good    | Needs Work | Poor    |
| ------ | ------- | ---------- | ------- |
| LCP    | < 2.5s  | 2.5-4s     | > 4s    |
| INP    | < 200ms | 200-500ms  | > 500ms |
| CLS    | < 0.1   | 0.1-0.25   | > 0.25  |
| TTFB   | < 800ms | 800ms-1.8s | > 1.8s  |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @perf-web-optimization to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/perf-web-optimization/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/perf-web-optimization/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @perf-web-optimization using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Detailed Examples

For in-depth optimization patterns, see:

- [references/core-web-vitals.md](references/core-web-vitals.md) - Fixing LCP, CLS, INP issues
- [references/bundle-optimization.md](references/bundle-optimization.md) - Reducing JS bundle size
- [references/image-optimization.md](references/image-optimization.md) - Image formats, responsive images, sharp scripts

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(performance)/perf-web-optimization`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/bundle-optimization.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Quick Wins

### 1. Images (usually biggest impact on LCP)

```html
<!-- Hero/LCP image: eager + high priority -->
<img src="/hero.webp" alt="Hero" width="1200" height="600" loading="eager" fetchpriority="high" decoding="async" />

<!-- Below fold: lazy load -->
<img src="/product.webp" alt="Product" width="400" height="300" loading="lazy" decoding="async" />
```

Always set `width` and `height` to prevent CLS.

### 2. Fonts (common LCP/CLS culprit)

```html
<!-- Preconnect to font origin -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Non-blocking font load -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
  media="print"
  onload="this.media='all'"
/>
```

### 3. Third-party Scripts (common INP killer)

```html
<!-- Defer to user interaction -->
<script>
  function loadThirdParty() {
    // Load analytics, chat widgets, etc.
  }
  ;['scroll', 'click', 'touchstart'].forEach((e) => addEventListener(e, loadThirdParty, { once: true, passive: true }))
  setTimeout(loadThirdParty, 5000)
</script>
```

### 4. Critical CSS

Inline critical CSS in `<head>`, defer the rest:

```html
<style>
  /* critical styles */
</style>
<link rel="preload" href="/styles.css" as="style" onload="this.rel='stylesheet'" />
```

#### Imported: Bundle Analysis

```bash
# Webpack
npx webpack-bundle-analyzer dist/stats.json

# Vite
npx vite-bundle-visualizer

# Check package size before installing
npx bundlephobia <package-name>
```

Common heavy packages to replace:

- `moment` (67KB) → `date-fns` (12KB) or `dayjs` (2KB)
- `lodash` (72KB) → cherry-pick imports or native methods

#### Imported: Code Splitting Patterns

```javascript
// React lazy
const Chart = lazy(() => import('./Chart'))

// Next.js dynamic
const Admin = dynamic(() => import('./Admin'), { ssr: false })

// Vite/Rollup manual chunks
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom']
      }
    }
  }
}
```

#### Imported: Caching Headers

```
# Static assets (immutable hash in filename)
Cache-Control: public, max-age=31536000, immutable

# HTML (revalidate)
Cache-Control: no-cache

# API responses
Cache-Control: private, max-age=0, must-revalidate
```

#### Imported: Measurement

For running audits, reading reports, and setting budgets, use the **perf-lighthouse** skill.

#### Imported: Checklist

### Images

- [ ] Modern formats (WebP/AVIF)
- [ ] Responsive `srcset`
- [ ] `width`/`height` attributes
- [ ] `loading="lazy"` below fold
- [ ] `fetchpriority="high"` on LCP image

### JavaScript

- [ ] Bundle < 200KB gzipped
- [ ] Code splitting by route
- [ ] Third-party scripts deferred
- [ ] No unused dependencies

### CSS

- [ ] Critical CSS inlined
- [ ] Non-critical CSS deferred
- [ ] No unused CSS

### Fonts

- [ ] `font-display: swap`
- [ ] Preconnect to font origin
- [ ] Subset if possible

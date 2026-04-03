---
name: "react-best-practices"
description: "Vercel React Best Practices workflow skill. Use this skill when reviewing, writing, or refactoring React and Next.js code for measurable performance improvements, especially around Server/Client Component boundaries, data fetching, hydration, bundle size, and runtime responsiveness. Do not use it for component API design or composition architecture; use it when the goal is to diagnose, optimize, and verify React/Next.js performance with evidence before handoff."
version: "0.0.1"
category: "development"
tags:
  - "react-best-practices"
  - "react"
  - "nextjs"
  - "performance"
  - "server-components"
  - "bundle-optimization"
  - "hydration"
  - "web-vitals"
  - "vercel"
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
upstream_skill: "skills/react-best-practices"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Vercel React Best Practices

## Overview

This skill packages the upstream Vercel React performance guidance into an execution-oriented workflow for React and Next.js tasks.

Use it when the goal is not just to quote rules, but to diagnose a concrete performance symptom, choose the correct optimization path, apply a narrow change, and verify the result with evidence.

The workflow is centered on modern React and Next.js guidance:

- prefer server-first rendering and data fetching where possible
- keep Client Component boundaries small and intentional
- eliminate accidental data waterfalls
- reduce client JavaScript with dynamic loading and direct imports
- treat memoization as a measured optimization, not a default pattern
- troubleshoot hydration and Suspense behavior with concrete checks
- validate before and after changes with bundle analysis and Web Vitals

This skill preserves the upstream intent and provenance while making it easier for agents to execute safely.

## When to Use This Skill

Use this skill when the task is primarily about React or Next.js performance behavior, especially when one or more of these are true:

- a page or route is slow on first load
- a component tree ships too much client JavaScript
- data fetching appears sequential or blocks rendering unnecessarily
- hydration warnings or mismatches appear in development or production
- Suspense or loading states behave poorly
- a refactor needs to improve bundle size, render cost, or interaction responsiveness
- a review needs performance-specific guidance before merge
- a change should be validated with measurable evidence instead of style-only feedback

Do not use this skill as the primary guide when the main problem is:

- component API design or composition patterns
- accessibility semantics and keyboard/focus behavior
- correctness debugging unrelated to performance
- security review for auth, secrets, or third-party trust boundaries

In those cases, hand off after this skill identifies the performance boundary.

## Operating Table

| Symptom or task | Start here | Primary checks | Likely fixes |
| --- | --- | --- | --- |
| Slow first load or large JS payload | `references/performance-review-checklist.md` | Client boundary size, heavy imports, third-party scripts, image usage | Move logic server-side, reduce `use client`, use `next/dynamic`, direct imports, `next/image`, `next/script` |
| Waterfall during render or route load | `examples/parallel-fetching-and-suspense.md` | Sequential awaits, nested data dependencies, blocked streaming | Start requests earlier, parallelize independent fetches, add Suspense boundaries |
| Hydration mismatch or flicker | `examples/hydration-mismatch-fixes.md` | Non-deterministic render output, browser-only APIs, time-dependent values | Stable server markup, client-only enhancement in effects, narrow `suppressHydrationWarning` |
| Unexpected bundle growth after a change | `scripts/run_bundle_analysis.md` | New `use client` boundary, barrel imports, large interactive dependencies | Analyze bundle, direct imports, lazy load expensive widgets, move code to Server Components |
| Interaction jank or excess re-renders | `references/performance-review-checklist.md` | Re-render sources, repeated expensive work, effect misuse | Reduce render scope, move work to server, fix state flow, memoize only if profiling supports it |
| Production is still slow after local improvement | `references/metric-capture-guide.md` | Real-user metrics, Web Vitals, server/runtime telemetry | Compare before/after evidence, inspect production observability, verify cache/revalidation assumptions |

## Workflow

1. **Classify the performance problem**
   - Identify the dominant symptom: bundle size, hydration, server slowness, waterfall, re-render cost, or third-party script impact.
   - Avoid broad “optimize everything” edits.

2. **Confirm the rendering model**
   - Determine whether the code is using the Next.js App Router and where Server vs Client Component boundaries exist.
   - Inspect every `use client` boundary involved in the path under review.
   - Prefer keeping components server-rendered unless interactivity or browser APIs require client execution.

3. **Capture a baseline**
   - Record the current symptom before changing code.
   - Use the guidance in `references/metric-capture-guide.md` to collect at least one of:
     - bundle analysis evidence
     - Web Vitals or Speed Insights evidence
     - observable server/runtime timing evidence
     - a reproducible local symptom description

4. **Choose the highest-impact optimization path**
   - For waterfalls: parallelize independent fetches and stream slower sections.
   - For bundle cost: reduce client boundaries, lazy load heavy code, avoid broad imports.
   - For hydration issues: make server and client output deterministic, delay browser-only reads.
   - For interaction jank: remove unnecessary re-renders and heavy client work before adding memoization.

5. **Apply the smallest safe change**
   - Keep edits narrow and reversible.
   - Do not introduce speculative caching, broad memoization, or large boundary shifts without evidence.
   - Prefer code changes that improve both simplicity and performance.

6. **Verify locally**
   - Reproduce the original symptom path.
   - Confirm that the change reduces the issue and does not introduce correctness regressions.
   - Re-run bundle analysis when the change affects imports, client boundaries, or route-level code.

7. **Verify in production-facing terms**
   - If deployment telemetry is available, compare before/after metrics.
   - Call out what improved, what was not measured, and any remaining risk.

8. **Document handoff evidence**
   - Summarize the symptom, root cause, change, and verification.
   - Link the checklist, troubleshooting playbook, and examples used.

## Best Practices

### Do

- Prefer **Server Components by default** in Next.js App Router code.
- Keep `use client` boundaries as small as possible because they expand the client bundle.
- Start independent async work early and await it as late as possible.
- Use Suspense and streaming to improve perceived responsiveness when parts of a page are slower.
- Use `next/dynamic` for heavy interactive code that is not needed immediately.
- Use direct imports instead of barrel imports when they materially reduce bundle size.
- Use `next/image` and `next/script` when those components fit the use case.
- Measure before and after optimization work.
- Treat `memo` and `useMemo` as optional optimizations only when profiling shows they help.
- Keep initial server-rendered output stable when client-only values are needed later.

### Do Not

- Do not add `use client` high in the tree unless the entire subtree truly needs it.
- Do not serialize large server-fetched objects into Client Component props without need.
- Do not convert server-renderable data fetching into client fetching just for convenience.
- Do not wrap everything in `memo` or `useMemo` by default.
- Do not use `suppressHydrationWarning` as a blanket fix.
- Do not add caching without understanding whether it is request-scoped deduplication or cross-request caching.
- Do not trust local-only improvements without checking production telemetry when available.
- Do not introduce heavy third-party scripts with plain `<script>` tags when Next.js loading strategies are available.

### Priority Map

Use the upstream rule families in this order when triaging:

| Priority | Category | Impact | Typical trigger |
| --- | --- | --- | --- |
| 1 | Eliminating Waterfalls | Critical | Slow route load, blocked server render, nested fetch chains |
| 2 | Bundle Size Optimization | Critical | Large initial JS, long hydration, slow interactivity |
| 3 | Server-Side Performance | High | Slow server render, repeated fetches, serialization overhead |
| 4 | Client-Side Data Fetching | Medium-High | Duplicate requests, event listener overhead, local storage misuse |
| 5 | Re-render Optimization | Medium | Interaction lag, expensive child rerenders |
| 6 | Rendering Performance | Medium | Long lists, hydration flicker, conditional rendering inefficiency |
| 7 | JavaScript Performance | Low-Medium | Hot loops or repeated low-level work in critical paths |
| 8 | Advanced Patterns | Low | Niche stabilization patterns after simpler fixes are exhausted |

## Examples

### Example 1: Review a route with slow initial load

```text
Use @react-best-practices to review this Next.js App Router route for slow first load. Classify whether the main issue is a data waterfall, oversized client bundle, or hydration cost. Start with the performance review checklist, then recommend the smallest measurable change and explain how to verify it.
```

### Example 2: Run a repeatable bundle analysis review

```bash
sh skills/react-best-practices/scripts/run_bundle_analysis.md
```

**Expected outcome:** a consistent reminder of the safe command path for enabling Next.js bundle analysis and what to inspect before changing imports or client boundaries.

### Example 3: Fix sequential data fetching

```text
Use @react-best-practices to inspect this page for accidental sequential awaits. If the requests are independent, rewrite them to start in parallel and show where Suspense or streaming would improve the loading path.
```

See: `examples/parallel-fetching-and-suspense.md`

### Example 4: Fix hydration mismatch safely

```text
Use @react-best-practices to diagnose this hydration mismatch. Check for time-dependent rendering, browser-only APIs, or unstable server/client output. Prefer a stable server render first, then move browser-only enhancement into a client effect.
```

See: `examples/hydration-mismatch-fixes.md`

### Example 5: Reduce an oversized client boundary

```text
Use @react-best-practices to review whether this `use client` file is too high in the tree. Identify logic that can stay on the server, minimize serialized props, and suggest a smaller client boundary.
```

See: `examples/app-router-server-vs-client-boundary.md`

## Troubleshooting

### Problem: Hydration mismatch appears after adding dynamic values

**Symptoms:** Console warnings during hydration, visible flicker, or server HTML that differs from the first client render.

**Solution:**
- Check for values that differ between server and client, such as time, random values, window access, or local storage reads.
- Render stable markup on the server first.
- Move browser-only reads into a Client Component effect or event handler.
- Use `suppressHydrationWarning` only for narrow, intentional mismatches.
- Review `examples/hydration-mismatch-fixes.md` and `references/troubleshooting-playbook.md`.

### Problem: The page waits on sequential fetches that could run together

**Symptoms:** Slow route load, nested loading behavior, or a server render that appears to wait for one request before starting the next.

**Solution:**
- Identify whether the requests are truly dependent.
- If independent, start them in parallel and await them together.
- If one section is slower, consider streaming it behind a Suspense boundary.
- Re-check cache and revalidation assumptions so you do not misread expected fetch behavior.
- Review `examples/parallel-fetching-and-suspense.md`.

### Problem: Client bundle size grew after a seemingly small change

**Symptoms:** Larger route chunks, slower hydration, worse interaction startup, or bundle analyzer output showing unexpected libraries in a page.

**Solution:**
- Inspect whether a new `use client` directive pulled too much code into the client bundle.
- Replace barrel imports with direct imports where appropriate.
- Lazy load expensive interactive widgets with `next/dynamic`.
- Move non-interactive logic back to Server Components.
- Run the bundle analysis steps in `scripts/run_bundle_analysis.md`.

### Problem: Memoization was added but performance did not improve

**Symptoms:** More complexity in the codebase, but the route still feels slow or rerenders remain frequent.

**Solution:**
- Confirm that the expensive work is actually on the client and actually repeated.
- Check whether props or dependencies change every render, defeating memoization.
- Prefer reducing rerenders at the source, shrinking client boundaries, or moving work server-side.
- Keep memoization only when profiling shows a real benefit.

### Problem: Suspense fallback behavior is confusing or never seems to help

**Symptoms:** A fallback appears for too long, never appears, or the page still feels blocked despite adding Suspense.

**Solution:**
- Check whether the slow work is actually inside the Suspense boundary.
- Confirm whether data fetching starts early enough to benefit from streaming.
- Avoid awaiting data too high in the tree before the boundary can stream.
- Use the troubleshooting playbook to reason about boundary placement and loading behavior.

### Problem: Production is still slow after a local refactor

**Symptoms:** Local dev feels better, but real users or deployed telemetry still show slow LCP, poor interaction timing, or slow server responses.

**Solution:**
- Compare before/after production-facing metrics rather than relying on local impressions.
- Use `useReportWebVitals`, Speed Insights, or platform observability where available.
- Check for third-party scripts, cache behavior, server runtime bottlenecks, or region/data-source latency.
- Record what was measured and what remains unverified.

## Related Skills

Use related skills when the task moves beyond performance optimization:

- `@accessibility` — when a performance change could affect semantics, focus order, keyboard use, or reduced-motion behavior
- `@debugging` — when the dominant issue is correctness, state bugs, or framework behavior rather than performance
- `@security-review` — when the change introduces server actions, auth changes, third-party scripts, or trust-boundary concerns
- `@testing` — when the optimization needs regression coverage or performance-sensitive test strategy
- `@react-composition-patterns` — when the real task is component API architecture rather than performance behavior

## Additional Resources

### Local support pack

- [Performance review checklist](references/performance-review-checklist.md)
- [Troubleshooting playbook](references/troubleshooting-playbook.md)
- [Metric capture guide](references/metric-capture-guide.md)
- [App Router server vs client boundary example](examples/app-router-server-vs-client-boundary.md)
- [Parallel fetching and Suspense example](examples/parallel-fetching-and-suspense.md)
- [Dynamic import and script strategy example](examples/dynamic-import-and-script-strategy.md)
- [Hydration mismatch fixes example](examples/hydration-mismatch-fixes.md)
- [Bundle analysis command reference](scripts/run_bundle_analysis.md)
- [Skill routing note](agents/router.md)

### Upstream rule map preserved from the imported guidance

#### Eliminating Waterfalls
- `async-defer-await` — move `await` into the branch that needs it
- `async-parallel` — use parallel fetching for independent work
- `async-dependencies` — structure partial dependencies carefully
- `async-api-routes` — start promises early and await late in handlers
- `async-suspense-boundaries` — use Suspense to stream slower sections

#### Bundle Size Optimization
- `bundle-barrel-imports` — prefer direct imports when they reduce bundle cost
- `bundle-dynamic-imports` — use `next/dynamic` for heavy client code
- `bundle-defer-third-party` — defer analytics or logging scripts when appropriate
- `bundle-conditional` — load modules only when a feature is activated
- `bundle-preload` — preload only when it improves user-perceived speed

#### Server-Side Performance
- `server-auth-actions` — authenticate server actions like API routes
- `server-cache-react` — use request-scoped deduplication intentionally
- `server-cache-lru` — use cross-request caching carefully and explicitly
- `server-dedup-props` — avoid repeated serialization across boundaries
- `server-serialization` — minimize data passed to Client Components
- `server-parallel-fetching` — restructure trees to parallelize work
- `server-after-nonblocking` — keep non-blocking work off the critical path

#### Client-Side Data Fetching
- `client-swr-dedup` — deduplicate repeated client fetches where relevant
- `client-event-listeners` — avoid duplicate global listeners
- `client-passive-event-listeners` — use passive listeners for scroll/touch cases that permit it
- `client-localstorage-schema` — keep stored client data versioned and minimal

#### Re-render Optimization
- `rerender-defer-reads`
- `rerender-memo`
- `rerender-memo-with-default-value`
- `rerender-dependencies`
- `rerender-derived-state`
- `rerender-derived-state-no-effect`
- `rerender-functional-setstate`
- `rerender-lazy-state-init`
- `rerender-simple-expression-in-memo`
- `rerender-move-effect-to-event`
- `rerender-transitions`
- `rerender-use-ref-transient-values`

#### Rendering Performance
- `rendering-animate-svg-wrapper`
- `rendering-content-visibility`
- `rendering-hoist-jsx`
- `rendering-svg-precision`
- `rendering-hydration-no-flicker`
- `rendering-hydration-suppress-warning`
- `rendering-conditional-render`
- `rendering-usetransition-loading`

#### JavaScript Performance
- `js-batch-dom-css`
- `js-index-maps`
- `js-cache-property-access`
- `js-cache-function-results`
- `js-cache-storage`
- `js-combine-iterations`
- `js-length-check-first`
- `js-early-exit`
- `js-hoist-regexp`
- `js-min-max-loop`
- `js-set-map-lookups`
- `js-tosorted-immutable`

#### Advanced Patterns
- `advanced-event-handler-refs`
- `advanced-init-once`
- `advanced-use-latest`

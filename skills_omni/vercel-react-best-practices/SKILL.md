---
name: "vercel-react-best-practices"
description: "Vercel React Best Practices workflow skill. Use this skill when the user needs React and Next.js performance optimization guidance grounded in Vercel, Next.js, and React documentation. Apply it when writing, reviewing, or refactoring React or Next.js code to improve App Router architecture, server/client boundaries, data fetching, caching, bundle size, Core Web Vitals, and safe third-party integrations before merge or handoff."
version: "0.0.1"
category: "frontend"
tags:
  - "vercel-react-best-practices"
  - "react"
  - "nextjs"
  - "app-router"
  - "performance"
  - "core-web-vitals"
  - "bundle-optimization"
  - "server-components"
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
date_added: "2026-03-31"
date_updated: "2026-03-31"
upstream_skill: "skills/vercel-react-best-practices"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "10"
upstream_head_repo: "diegosouzapw/omni-skills"
upstream_head_sha: "6694282a8c80060989f27612505ced763d291b76"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Vercel React Best Practices

## Overview

This skill packages the intent of Vercel's React and Next.js performance guidance into an execution-oriented workflow for agents and reviewers.

Use it to diagnose and improve real React or Next.js performance problems rather than applying generic micro-optimizations blindly. The highest-leverage path is usually:

1. measure the problem
2. identify the rendering and data-flow architecture
3. fix server/client boundaries
4. remove waterfalls
5. reduce shipped JavaScript
6. validate Core Web Vitals and regressions after the change

This skill preserves the upstream identity and prioritization of the imported Vercel guidance while turning it into a practical review and refactoring packet for modern Next.js work, especially App Router applications.

## When to Use This Skill

Use this skill when the task involves React or Next.js performance, rendering behavior, or architecture decisions that affect user-perceived speed.

### Strong matches

- Reviewing an App Router route that is slow, overly dynamic, or shipping too much client JavaScript
- Refactoring a component tree to prefer Server Components and isolate Client Components
- Fixing nested async waterfalls, poor Suspense placement, or slow server rendering
- Investigating LCP, CLS, INP, hydration cost, or slow route transitions
- Reducing bundle size from barrel imports, heavy libraries, or unnecessary third-party scripts
- Improving images, fonts, metadata fetching, or script loading for better Core Web Vitals
- Auditing Server Actions, analytics, or embeds during a performance-focused change

### Use with caution

- Pages Router legacy code: still useful, but prefer App Router guidance when the project has migrated
- Generic React apps without Next.js: use the React re-render and code-splitting guidance, but skip Next-specific caching and routing advice
- Pure deployment, DNS, or infrastructure issues: hand off to a Vercel deployment or platform skill

### Do not use as the primary skill for

- Security-only reviews with no React or Next.js performance angle
- Accessibility-only audits unless the performance issue directly intersects with rendering or hydration
- Framework migrations unrelated to runtime performance

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need a baseline before changing code | `references/web-vitals-audit-checklist.md` | Forces evidence-first optimization instead of guesswork |
| Unsure whether logic belongs on the server or client | `references/server-client-boundary-checklist.md` | Server/client boundaries are the main architecture lever in modern Next.js |
| Slow route, waterfalls, stale data, or cache confusion | `references/data-fetching-and-cache-playbook.md` | Gives deterministic checks for parallel fetching, Suspense, cache intent, and revalidation |
| Large bundle or expensive hydration | `references/bundle-governance-checklist.md` | Focuses review on client boundary leakage, imports, lazy loading, and third-party code |
| LCP, CLS, image, or font regressions | `references/image-font-cls-checklist.md` | Covers common UX regressions tied to asset delivery and layout stability |
| Excessive re-renders or laggy typing | `references/rerender-triage-guide.md` | Helps distinguish real re-render bottlenecks from cargo-cult memoization |
| Performance change touches actions, analytics, or embeds | `references/security-and-third-party-performance-guardrails.md` | Keeps optimizations safe around auth, scripts, and external code |
| Need an example before editing | `examples/app-router-parallel-fetching.md` | Shows a concrete before/after refactor pattern |
| Need routing or handoff guidance | `agents/performance-review-router.md` | Helps decide when to involve deployment, security, or other specialist skills |

## Workflow

1. **Confirm scope and router fit**
   - Verify the task is actually about React or Next.js performance, rendering, hydration, or architecture.
   - Identify whether the code is App Router, Pages Router, or generic React.
   - Ask for the user-visible symptom if it is missing: slow page load, input lag, hydration mismatch, stale data, CLS, large bundle, or slow navigation.

2. **Collect evidence before refactoring**
   - Capture available metrics, traces, or route symptoms.
   - Identify which Core Web Vitals or runtime signals matter: LCP, CLS, INP, hydration cost, JS payload, request waterfalls.
   - Use `references/web-vitals-audit-checklist.md` to structure the baseline and expected outcome.

3. **Review architecture before micro-optimizing**
   - Determine which parts of the tree can remain Server Components.
   - Restrict Client Components to interactivity, browser APIs, and stateful UI that truly needs the client.
   - Check whether server-only work, data fetching, or large dependencies leaked into client-marked files.
   - Use `references/server-client-boundary-checklist.md`.

4. **Map data dependencies and remove waterfalls**
   - List all data fetches for the route and note which are independent versus dependent.
   - Parallelize independent work.
   - Place Suspense boundaries intentionally so slower subtrees can stream without blocking the whole route.
   - Review cache intent and revalidation behavior before changing fetch semantics.
   - Use `references/data-fetching-and-cache-playbook.md`.

5. **Reduce shipped JavaScript and hydration cost**
   - Check imports, package usage, client boundaries, dynamic loading, and third-party scripts.
   - Prefer direct imports over barrels when they affect bundle shape.
   - Lazy load heavy client-only UI when it improves initial render.
   - Use `references/bundle-governance-checklist.md`.

6. **Audit images, fonts, and layout stability**
   - Identify the LCP element.
   - Ensure images have appropriate sizing and responsive behavior.
   - Check font loading and any layout shifts introduced by assets or conditional rendering.
   - Use `references/image-font-cls-checklist.md`.

7. **Triage re-renders only where they are proven to matter**
   - Look for unstable context values, prop identity churn, expensive derived rendering, or urgent updates blocking input.
   - Prefer targeted fixes over blanket `memo`.
   - Consider transitions for non-urgent updates.
   - Use `references/rerender-triage-guide.md`.

8. **Apply safety guardrails**
   - If the change touches Server Actions, validate authn/authz and input validation explicitly.
   - If it touches analytics, embeds, or scripts, review necessity, loading strategy, and placement.
   - Use `references/security-and-third-party-performance-guardrails.md`.

9. **Validate after the change**
   - Re-check the original symptom and compare before/after evidence.
   - Confirm the fix did not accidentally make the route dynamic, stale, or less safe.
   - Document what changed, what metric improved, and what still needs production validation.

## Examples

### Example 1: Investigate a slow App Router page

```text
Use @vercel-react-best-practices to review this slow Next.js App Router route. First establish a baseline for LCP, hydration cost, and request waterfalls. Then inspect server/client boundaries, parallelize independent data fetches, and propose the smallest safe refactor with before/after reasoning.
```

**Expected outcome:** A review that starts with evidence, identifies architecture and data-flow bottlenecks, and proposes measurable improvements rather than generic advice.

### Example 2: Remove a nested fetch waterfall

```text
Use @vercel-react-best-practices on this route.tsx and related components. Check whether nested awaits are serializing independent work. If so, rewrite the fetching strategy using the playbook and explain where Suspense boundaries should go.
```

**Expected outcome:** A concrete plan or patch that replaces sequential work with parallel fetching where safe.

See also: `examples/app-router-parallel-fetching.md`

### Example 3: Audit a large client bundle

```text
Use @vercel-react-best-practices to audit this page for client bundle bloat. Check for unnecessary 'use client' boundaries, barrel imports, heavy dependencies, and third-party scripts. Recommend the smallest changes that reduce initial JS without breaking behavior.
```

**Expected outcome:** A prioritized bundle review with specific client-boundary and import changes.

See also: `examples/lazy-loading-and-script-strategy.md`

### Example 4: Review image and font regressions

```text
Use @vercel-react-best-practices to investigate why this landing page has worse LCP and CLS after a redesign. Identify the likely LCP element, review Next Image sizing and priority usage, and check whether font loading or late content insertion is shifting layout.
```

**Expected outcome:** A focused diagnosis tied to image, font, and layout-stability fixes.

See also: `examples/next-image-lcp-patterns.md`

### Example 5: Resolve cache and revalidation confusion

```text
Use @vercel-react-best-practices to review this App Router route that sometimes serves stale data and sometimes becomes unexpectedly dynamic. Explain the likely cache intent mismatch and recommend a clearer revalidation strategy.
```

**Expected outcome:** A route-level explanation of cache behavior and a safer, more explicit rendering strategy.

See also: `examples/cache-revalidation-decision-matrix.md`

## Best Practices

### Do

- Prefer **Server Components by default** in App Router and add Client Components only where interactivity or browser APIs require them.
- Start with **measurement and symptoms**, not with automatic memoization or import churn.
- Parallelize **independent async work** and keep dependent chains explicit.
- Use **Suspense boundaries intentionally** to support streaming and isolate slower UI.
- Make **cache intent explicit** when changing fetch behavior, revalidation, or route rendering strategy.
- Keep **server-only logic and large dependencies** out of client bundles.
- Use **Next Image**, responsive sizing, and stable dimensions for image-heavy routes.
- Use **next/font** or equivalent framework-native font optimization to reduce layout instability.
- Keep **context provider values stable** when provider churn causes unnecessary re-renders.
- Use **transitions selectively** for non-urgent updates that would otherwise block responsiveness.
- Treat **Server Actions like sensitive server entry points**: authenticate, authorize, and validate inputs.
- Load third-party code with **safe Script strategies** and only when it materially helps the product.

### Don't

- Do not mark large trees with `'use client'` just to simplify implementation.
- Do not add `memo`, `useMemo`, or `useCallback` everywhere without evidence of a rendering bottleneck.
- Do not serialize independent requests by awaiting too early.
- Do not assume stale data bugs are solved by turning caching off globally.
- Do not place scripts unsafely or move them into `<head>` in ways that violate Next.js guidance.
- Do not optimize bundle size by introducing behavior regressions, broken accessibility, or unsafe action exposure.
- Do not hide performance work behind generic claims like "faster" without before/after evidence.

### Imported priority map

| Priority | Category | Impact | Prefix |
| --- | --- | --- | --- |
| 1 | Eliminating Waterfalls | Critical | `async-` |
| 2 | Bundle Size Optimization | Critical | `bundle-` |
| 3 | Server-Side Performance | High | `server-` |
| 4 | Client-Side Data Fetching | Medium-High | `client-` |
| 5 | Re-render Optimization | Medium | `rerender-` |
| 6 | Rendering Performance | Medium | `rendering-` |
| 7 | JavaScript Performance | Low-Medium | `js-` |
| 8 | Advanced Patterns | Low | `advanced-` |

## Troubleshooting

### Problem: The route is slow because server rendering is waiting on nested async work

**Symptoms:** The page shell appears late, server logs show serialized fetch timing, or a route contains nested `await` calls for independent resources.

**Solution:** List all route fetches, separate independent from dependent work, start independent requests earlier, and use parallel fetching where safe. If slower sections can render later, place Suspense boundaries so the route can stream progressively. Use `references/data-fetching-and-cache-playbook.md` and `examples/app-router-parallel-fetching.md`.

### Problem: The page ships too much client JavaScript

**Symptoms:** Large initial JS, slow hydration, poor route responsiveness, or many components marked with `'use client'` even though most of the tree is static.

**Solution:** Re-check server/client boundaries first. Move fetches and static rendering back to Server Components where possible. Audit barrel imports, heavy packages, and third-party widgets. Apply dynamic loading only to code that benefits from deferred loading. Use `references/server-client-boundary-checklist.md` and `references/bundle-governance-checklist.md`.

### Problem: The route became unexpectedly dynamic or cache behavior is confusing

**Symptoms:** A route that used to feel static is now slower, data freshness is inconsistent, or a refactor changed rendering behavior without anyone intending it.

**Solution:** Review cache intent explicitly: what should be static, what should revalidate, and what must always be dynamic. Check route-level data fetching, metadata fetching, and any action-triggered invalidation. Avoid broad fixes like disabling caching everywhere. Use `references/data-fetching-and-cache-playbook.md` and `examples/cache-revalidation-decision-matrix.md`.

### Problem: Hydration mismatch or flicker appears after a performance refactor

**Symptoms:** Hydration warnings, client/server text mismatches, UI flicker on first paint, or browser-only state showing different initial output than the server rendered.

**Solution:** Check whether browser APIs, time-dependent values, or client-only state leaked into server-rendered output. Keep server and client initial render paths aligned. Only suppress mismatch warnings when the mismatch is expected and controlled. Minimize client-only workaround code and confirm it does not regress UX.

### Problem: LCP or CLS got worse after image, font, or layout changes

**Symptoms:** The hero area renders late, layout shifts after fonts load, or image dimensions are missing or unstable across breakpoints.

**Solution:** Identify the likely LCP element first. Review image sizing, responsive behavior, and priority usage. Verify font strategy and reserve stable layout space for late-loading content. Use `references/image-font-cls-checklist.md` and `examples/next-image-lcp-patterns.md`.

### Problem: Typing or interaction feels laggy even without a network bottleneck

**Symptoms:** Input updates block, filter UIs stall, or profiler traces show repeated expensive renders.

**Solution:** Inspect unstable context values, changing object props, unnecessary subscriptions, and expensive render work. Use targeted memoization only where it cuts real work. Consider transitions for non-urgent updates and defer expensive visual recomputation when appropriate. Use `references/rerender-triage-guide.md`.

### Problem: A performance fix weakened safety around scripts or Server Actions

**Symptoms:** A refactor moved third-party scripts to unsafe locations, exposed sensitive mutation paths, or removed validation/auth checks in the name of speed.

**Solution:** Restore the security boundary. Server Actions still need authentication, authorization, and input validation. Third-party code still needs necessity review, safe placement, and an appropriate loading strategy. Use `references/security-and-third-party-performance-guardrails.md`.

## Related Skills

- `@deploy-to-vercel` - Use when the bottleneck turns out to be deployment configuration, edge/runtime behavior, or platform rollout rather than React architecture.
- `@vercel-cli-with-tokens` - Use when verification requires Vercel CLI workflows, environment inspection, or controlled project operations.
- `@vercel-composition-patterns` - Use when the solution depends more on composition architecture than on performance triage alone.
- `@vercel-react-native-skills` - Use when the work is React-focused but no longer primarily about web performance in Next.js.

## Additional Resources

### Local references

- [Server/client boundary checklist](references/server-client-boundary-checklist.md)
- [Data fetching and cache playbook](references/data-fetching-and-cache-playbook.md)
- [Web Vitals audit checklist](references/web-vitals-audit-checklist.md)
- [Bundle governance checklist](references/bundle-governance-checklist.md)
- [Image, font, and CLS checklist](references/image-font-cls-checklist.md)
- [Re-render triage guide](references/rerender-triage-guide.md)
- [Security and third-party performance guardrails](references/security-and-third-party-performance-guardrails.md)

### Local examples

- [App Router parallel fetching](examples/app-router-parallel-fetching.md)
- [Lazy loading and script strategy](examples/lazy-loading-and-script-strategy.md)
- [Next Image LCP patterns](examples/next-image-lcp-patterns.md)
- [Cache and revalidation decision matrix](examples/cache-revalidation-decision-matrix.md)

### Agent routing

- [Performance review router](agents/performance-review-router.md)

### External provenance and official guidance

This skill preserves the imported Vercel guidance identity while grounding the workflow in current official documentation from Next.js, React, Vercel, MDN, and web.dev.

Key source areas reflected in this workflow:

- Next.js App Router server/client components
- Next.js data fetching, caching, images, fonts, lazy loading, package bundling, and Script guidance
- React Suspense, `lazy`, `memo`, and `useTransition`
- Vercel Web Vitals and Conformance guidance
- web.dev guidance for LCP, CLS, and responsive images

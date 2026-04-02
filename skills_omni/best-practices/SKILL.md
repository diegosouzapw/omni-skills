---
name: "best-practices"
description: "Best practices workflow skill. Use this skill when the user needs modern web development best practices applied for security hygiene, browser compatibility, deprecated API cleanup, console and error handling, dependency review, and source-map exposure checks. Use when asked to apply best practices, modernize code, review web security hygiene, check compatibility risks, or perform a focused code quality review. Do not use for accessibility, SEO, performance tuning, or broad multi-area audits; route those to the adjacent specialized skills."
version: "0.0.1"
category: "development"
tags:
  - "best-practices"
  - "web"
  - "security"
  - "compatibility"
  - "code-quality"
  - "csp"
  - "headers"
  - "dependencies"
  - "source-maps"
  - "modernization"
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
upstream_skill: "skills/best-practices"
upstream_author: "web-quality-skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Best practices

## Overview

This skill packages the upstream web best-practices workflow from `packages/skills-catalog/skills/(quality)/web-best-practices` in `https://github.com/tech-leads-club/agent-skills.git` while making it easier to execute as a safe, evidence-driven review workflow.

Use it for focused web best-practices work in these areas:

- secure transport and security-header hygiene
- practical CSP rollout and verification
- dependency vulnerability triage
- browser compatibility review using feature detection and Baseline-style support checks
- deprecated API cleanup and resilience review
- console/error hygiene and production source-map exposure review

This skill is intentionally narrower than a full web audit. It helps an agent inspect, document, and remediate concrete best-practice issues without drifting into accessibility, SEO, performance optimization, or a broad cross-domain assessment.

## When to Use This Skill

Use this skill when the dominant request is a focused web best-practices review or remediation.

- Apply modern web development best practices to an app or PR.
- Review security hygiene such as HTTPS, mixed content, CSP, headers, cookies, or unsafe DOM usage.
- Check browser compatibility risks, feature-detection gaps, or deprecated browser APIs.
- Modernize code that still relies on brittle patterns such as `document.write`, synchronous XHR, or unsafe inline script handling.
- Review dependency risk with `npm audit` output and decide what is safe to update.
- Check whether production source maps are exposed unintentionally.
- Prepare a review packet with findings, evidence, remediation notes, and handoff boundaries.

Do not use this skill when the main task is:

- accessibility remediation or WCAG review
- SEO work
- performance tuning or Core Web Vitals optimization
- a comprehensive multi-area web audit
- deep application security assessment beyond web-hygiene controls

For routing help, use `agents/handoff-matrix.md`.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time execution | `references/web-best-practices-checklist.md` | Gives the smallest complete review path and expected evidence |
| Security-header review | `references/security-headers-verification.md` | Prioritizes modern headers and safe verification steps |
| CSP rollout or breakage | `references/csp-rollout-and-troubleshooting.md` | Supports phased deployment and rollback-aware fixes |
| Dependency triage | `references/dependency-audit-triage.md` | Prevents unsafe blanket updates and structures remediation |
| Browser compatibility review | `references/browser-compatibility-baseline-workflow.md` | Keeps compatibility decisions evidence-based |
| Source-map exposure review | `references/source-maps-production-guidance.md` | Balances code protection with debugging needs |
| Handoff or scope drift | `agents/handoff-matrix.md` | Routes to adjacent specialized skills |
| Review packet preparation | `examples/review-packet-template.md` | Standardizes findings, evidence, and handoff notes |

## Workflow

1. **Confirm scope and routing**  
   Verify that the task is a focused best-practices review, not accessibility, SEO, performance, or a full-spectrum audit.

2. **Collect context and evidence targets**  
   Identify the app surface, environment, framework, package manager, deployment model, and whether you are reviewing source, a PR, or a live deployment.

3. **Run a focused review pass**  
   Work through the checklist in `references/web-best-practices-checklist.md` and capture evidence as you go.

4. **Review security controls first**  
   Check HTTPS, redirects, mixed content, CSP approach, security headers, cookie handling, unsafe DOM insertion, and obvious exposure issues.

5. **Review dependencies and compatibility**  
   Triage dependency findings carefully, then inspect browser support assumptions, deprecated APIs, and fallback behavior.

6. **Review production diagnostics posture**  
   Check console/runtime errors, error handling patterns, and source-map exposure or upload strategy.

7. **Apply narrow remediations**  
   Prefer minimal, reversible fixes. For changes with breakage risk, recommend staged rollout and document rollback conditions.

8. **Re-test and record evidence**  
   Re-run the relevant checks after changes. Capture outputs, screenshots, headers, audit snippets, or code references.

9. **Prepare handoff**  
   Summarize findings by severity, list what was fixed, note residual risk, and route any out-of-scope work to adjacent skills.

## Imported Workflow Notes: Security

### HTTPS and mixed content

Prefer explicit `https://` URLs. Do not recommend protocol-relative URLs as a modern default.

```html
<!-- ❌ Mixed content -->
<img src="http://example.com/image.jpg" />
<script src="http://cdn.example.com/script.js"></script>

<!-- ✅ Explicit HTTPS -->
<img src="https://example.com/image.jpg" />
<script src="https://cdn.example.com/script.js"></script>
```

Review points:

- Pages should redirect HTTP to HTTPS.
- Subresources should not use `http://`.
- Search code, templates, CMS content, and environment variables for hardcoded insecure URLs.
- If HTTPS is enabled but the page still warns, diagnose mixed-content requests before changing headers.

**HSTS example:**

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Only recommend `preload` when the team explicitly intends to meet preload requirements across the domain estate.

### Content Security Policy (CSP)

Prefer CSP as an HTTP response header. A meta-tag CSP is more limited and should not be treated as equivalent to a response-header policy.

Safer deployment pattern:

1. Inventory inline scripts/styles and third-party origins.
2. Start with `Content-Security-Policy-Report-Only`.
3. Replace inline code with nonce- or hash-based patterns where possible.
4. Fix violations and verify reports.
5. Move to enforced CSP.

**Illustrative header pattern:**

```text
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-random123';
  style-src 'self' 'nonce-random123';
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'self';
  form-action 'self';
```

**Nonce example:**

```html
<script nonce="random123">
  bootstrapApp()
</script>
```

Use `references/csp-rollout-and-troubleshooting.md` for phased rollout, common failures, and rollback guidance.

### Security headers

Modern baseline priorities:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

Clickjacking defense is best handled with CSP `frame-ancestors`. `X-Frame-Options` can be retained for legacy back-compat when needed:

```text
X-Frame-Options: DENY
```

Do not recommend `X-XSS-Protection` as part of a modern baseline; it is deprecated and not a primary modern control.

### Dependency review

Use `npm audit` as one signal, not the whole security decision.

```bash
npm audit
npm audit --json
npm ls lodash
```

Safer workflow:

- inspect whether the finding affects production dependencies
- check whether the issue is direct or transitive
- review the proposed version change before applying it
- prefer targeted dependency updates over blanket fixes
- run tests and smoke checks after lockfile changes

Be cautious with automatic remediation:

```bash
# Review changes before keeping them
npm audit fix
```

Do not present `npm audit fix` as universally safe.

### Input sanitization and DOM safety

```javascript
// ❌ Unsafe HTML insertion
element.innerHTML = userInput
document.write(userInput)

// ✅ Safe text rendering
element.textContent = userInput

// ✅ If HTML is required, sanitize first
import DOMPurify from 'dompurify'
element.innerHTML = DOMPurify.sanitize(userInput)
```

### Secure cookies

```text
Set-Cookie: session=abc123; Secure; HttpOnly; SameSite=Strict; Path=/
```

Prefer server-side cookie configuration. Do not treat `document.cookie` as equivalent for sensitive session handling.

## Imported Workflow Notes: Browser compatibility

### Standards mode basics

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Example</title>
  </head>
</html>
```

Review points:

- valid HTML5 doctype
- charset early in `<head>`
- viewport present for responsive behavior

### Prefer feature detection over UA sniffing

```javascript
// ❌ Brittle browser detection
if (navigator.userAgent.includes('Chrome')) {
  enableFeature()
}

// ✅ Feature detection with fallback
if ('IntersectionObserver' in window) {
  enableFeature()
} else {
  loadFallback()
}
```

```css
@supports (display: grid) {
  .layout { display: grid; }
}

@supports not (display: grid) {
  .layout { display: flex; }
}
```

Compatibility workflow:

1. Define supported browsers/environments.
2. Check whether the feature is broadly supported for that target.
3. Use feature detection.
4. Provide fallback or progressive enhancement where needed.
5. Add polyfills only when justified by target support needs.

### Polyfills

Use polyfills conditionally and only for real support gaps. Avoid introducing brittle loading patterns when a fallback is sufficient.

## Imported Workflow Notes: Deprecated APIs

### Replace deprecated or brittle patterns carefully

```javascript
// ❌ document.write
document.write('<script src="..."><\/script>')

// ✅ Safer dynamic loading
const script = document.createElement('script')
script.src = '...'
document.head.appendChild(script)

// ❌ Synchronous XHR
const xhr = new XMLHttpRequest()
xhr.open('GET', url, false)

// ✅ Async fetch
const response = await fetch(url)
```

```html
<!-- ❌ Application Cache -->
<html manifest="cache.manifest">
```

```javascript
// ✅ Service Worker registration when appropriate
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
```

When replacing deprecated APIs, verify that:

- async behavior does not change user-visible flow unexpectedly
- error handling remains explicit
- fallback behavior still works
- tests or manual checks cover the affected path

### Passive event listeners

```javascript
element.addEventListener('touchstart', handler, { passive: true })
element.addEventListener('wheel', handler, { passive: true })
```

If `preventDefault()` is required, document why passive mode cannot be used.

## Imported Workflow Notes: Console, errors, and source maps

### Console and runtime errors

```javascript
try {
  riskyOperation()
} catch (error) {
  errorTracker.captureException(error)
  showErrorMessage('Something went wrong. Please try again.')
}
```

Review for:

- unhandled runtime errors
- persistent console noise in production paths
- missing error boundaries or global handlers where relevant
- user-visible failures without recovery messaging

### Source maps in production

```javascript
// webpack.config.js
module.exports = {
  devtool: 'hidden-source-map',
}
```

Common acceptable patterns:

- disabled entirely in production
- hidden maps with private upload to an error tracker
- intentionally public maps only when the exposure is accepted and documented

Use `references/source-maps-production-guidance.md` to choose a posture and document the debugging tradeoff.

## Examples

### Example 1: Focused review request

```text
Use @best-practices to review this web app for security headers, CSP rollout risks, browser compatibility assumptions, deprecated APIs, and source-map exposure. Capture findings with evidence and flag anything that should be handed off to accessibility, SEO, or performance specialists.
```

### Example 2: Collect evidence safely

```bash
curl -I https://example.com
npm audit --json > audit.json
```

Expected outcome:

- response headers captured for review
- audit output available for triage
- no code or dependency changes made yet

### Example 3: Build a review packet

Use `examples/review-packet-template.md` and fill in:

- finding
- evidence
- user impact
- recommended fix
- validation status
- handoff notes

### Example 4: Diagnose CSP breakage

```text
Use @best-practices to analyze CSP violations after a new policy was enforced. Start with report-only guidance, identify blocked scripts or styles, recommend the smallest safe policy or code changes, and include rollback notes.
```

### Example 5: Review source-map posture

```text
Use @best-practices to determine whether production source maps are exposed publicly, whether that is intentional, and what debugging workflow should replace them if they are removed.
```

## Best Practices

### Do

- Start with the dominant risk area, usually security hygiene and compatibility.
- Capture evidence before changing code.
- Prefer HTTP response headers over meta-tag approximations for security controls.
- Use phased rollout for CSP and other potentially breaking hardening changes.
- Prefer explicit HTTPS URLs.
- Treat dependency remediation as triage plus validation, not just update automation.
- Prefer feature detection and progressive enhancement over UA sniffing.
- Keep fixes narrow, reversible, and easy to validate.
- Record what was verified and what remains out of scope.

### Don't

- Do not recommend protocol-relative URLs as a current best practice.
- Do not treat `X-XSS-Protection` as a modern baseline header.
- Do not assume a meta-tag CSP is equivalent to a response-header CSP.
- Do not run blanket dependency fixes and present them as risk-free.
- Do not add polyfills without a target-support reason.
- Do not remove public source maps without a replacement debugging plan.
- Do not let this skill expand into accessibility, SEO, performance, or a full security assessment without an explicit handoff.

## Troubleshooting

### Problem: CSP enforcement breaks legitimate scripts or styles

**Symptoms:** Features stop working after CSP is enabled; browser console shows blocked inline scripts, styles, or third-party origins.  
**Solution:** Roll back to `Content-Security-Policy-Report-Only` if needed, inventory the blocked resources, verify nonce or hash handling, and tighten the policy only after violations are understood. Use `references/csp-rollout-and-troubleshooting.md`.

### Problem: HTTPS is enabled but browsers still report mixed content

**Symptoms:** Pages load over HTTPS but some assets are blocked or warnings persist.  
**Solution:** Search code, templates, content, and environment configuration for hardcoded `http://` URLs. Check third-party embeds, image URLs, scripts, and API endpoints. Fix insecure references before adding more policy controls.

### Problem: `npm audit` recommends updates that may break the app

**Symptoms:** The audit report suggests major-version updates, lockfile churn, or fixes only through transitive dependency changes.  
**Solution:** Triage direct versus transitive findings, review package release notes, prefer targeted changes, and re-run tests after updates. Use `references/dependency-audit-triage.md` instead of applying blanket fixes blindly.

### Problem: A feature works in one browser but not another

**Symptoms:** Code behaves correctly in one environment but fails or degrades elsewhere.  
**Solution:** Check whether the implementation relied on UA detection, unsupported APIs, or missing fallbacks. Rework it around feature detection and progressive enhancement. Use `references/browser-compatibility-baseline-workflow.md`.

### Problem: Production errors become unreadable after source maps are restricted

**Symptoms:** Stack traces are minified and debugging quality drops after public source maps are removed.  
**Solution:** Move to hidden maps plus private upload, or document a different approved observability workflow. Do not re-expose source maps publicly without an intentional decision. Use `references/source-maps-production-guidance.md`.

### Problem: Scope drifts beyond this skill

**Symptoms:** The task turns into accessibility remediation, SEO work, performance tuning, deep penetration-style security review, or a broad multi-area audit.  
**Solution:** Stop expanding this workflow. Package findings, note what is incomplete, and hand off using `agents/handoff-matrix.md`.

## Related Skills

- `@web-accessibility` - for accessibility defects, semantic assistive-tech behavior, and WCAG-focused remediation.
- `@seo` - for indexing, metadata, crawlability, and search-focused issues.
- `@core-web-vitals` - for performance, loading, rendering, and responsiveness optimization.
- `@web-quality-audit` - for broader multi-area audits that exceed this skill's narrow scope.

## Additional Resources

Use these local files as the operational support pack for execution, evidence capture, and handoff.

| Resource family | Purpose | Path |
| --- | --- | --- |
| `references` | review checklists and technical workflows | `references/web-best-practices-checklist.md` |
| `references` | security-header verification details | `references/security-headers-verification.md` |
| `references` | CSP rollout and recovery guidance | `references/csp-rollout-and-troubleshooting.md` |
| `references` | dependency triage playbook | `references/dependency-audit-triage.md` |
| `references` | compatibility decision workflow | `references/browser-compatibility-baseline-workflow.md` |
| `references` | source-map production guidance | `references/source-maps-production-guidance.md` |
| `examples` | review and handoff template | `examples/review-packet-template.md` |
| `examples` | safe commands and evidence snippets | `examples/commands-and-evidence-snippets.md` |
| `agents` | scope-routing and handoff guidance | `agents/handoff-matrix.md` |

- [Web best-practices checklist](references/web-best-practices-checklist.md)
- [Security headers verification](references/security-headers-verification.md)
- [CSP rollout and troubleshooting](references/csp-rollout-and-troubleshooting.md)
- [Dependency audit triage](references/dependency-audit-triage.md)
- [Browser compatibility workflow](references/browser-compatibility-baseline-workflow.md)
- [Source maps production guidance](references/source-maps-production-guidance.md)
- [Review packet template](examples/review-packet-template.md)
- [Commands and evidence snippets](examples/commands-and-evidence-snippets.md)
- [Handoff matrix](agents/handoff-matrix.md)

### External reference notes

- MDN Web Security
- MDN Content Security Policy
- MDN HSTS
- MDN Permissions-Policy
- MDN Referrer-Policy
- MDN X-Content-Type-Options
- MDN feature detection and Baseline compatibility guidance
- npm audit documentation
- OWASP Top 10 and HTTP header / CSP cheat sheets

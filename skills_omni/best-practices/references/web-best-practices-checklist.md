# Web Best-Practices Checklist

Use this checklist to drive a focused review and capture evidence for each finding.

## 1. Scope and routing

- [ ] Confirm the task is in scope for best-practices review.
- [ ] Record adjacent areas that are explicitly out of scope.
- [ ] Note environment, framework, deployment target, and package manager.

## 2. Transport and mixed content

- [ ] HTTP redirects to HTTPS.
- [ ] No hardcoded `http://` asset or API URLs in active paths.
- [ ] No browser mixed-content warnings in the reviewed flow.
- [ ] HSTS is present if HTTPS is a stable platform requirement.

**Evidence:** response headers, browser console, code search results.

## 3. Security headers and CSP

- [ ] `X-Content-Type-Options: nosniff` present where applicable.
- [ ] `Referrer-Policy` is intentional.
- [ ] `Permissions-Policy` is intentional.
- [ ] CSP is delivered as a response header when in use.
- [ ] `frame-ancestors`, `base-uri`, and `object-src` are considered where applicable.
- [ ] CSP rollout mode is documented: report-only, enforced, or not yet implemented.

**Evidence:** `curl -I`, response inspector, server config, policy snippets.

## 4. Dependency triage

- [ ] Audit output collected.
- [ ] Direct versus transitive findings identified.
- [ ] Breaking-update risk reviewed before remediation.
- [ ] Lockfile changes reviewed.
- [ ] Tests or smoke checks re-run after updates.

**Evidence:** audit output, lockfile diff, test results.

## 5. Browser compatibility

- [ ] Doctype, charset, and viewport basics are correct.
- [ ] UA sniffing is avoided unless justified and documented.
- [ ] Feature detection is used for non-universal APIs.
- [ ] Fallback or progressive enhancement behavior is defined.
- [ ] Polyfills are justified by target support needs.

**Evidence:** code references, support notes, fallback description.

## 6. Deprecated APIs and brittle patterns

- [ ] No active `document.write` usage in production paths.
- [ ] No synchronous XHR in reviewed paths.
- [ ] Deprecated storage or app-cache patterns removed.
- [ ] Passive listeners used when appropriate.

**Evidence:** code references, patch summary, behavior notes.

## 7. Console, error handling, and source maps

- [ ] No persistent console/runtime errors in reviewed flow.
- [ ] User-visible failures have graceful handling.
- [ ] Error tracking approach is documented if relevant.
- [ ] Production source-map posture is intentional.
- [ ] Public source-map exposure is either accepted explicitly or remediated.

**Evidence:** console output, error screenshots, build config, headers or file checks.

## 8. Signoff packet

- [ ] Findings summarized by severity.
- [ ] Each finding includes evidence and recommended action.
- [ ] Residual risk is documented.
- [ ] Out-of-scope issues are routed to the right adjacent skill.

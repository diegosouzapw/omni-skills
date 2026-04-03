# Troubleshooting playbook

## 1. Lab and field disagree

**Symptoms:** Lighthouse looks poor, but field data or RUM is acceptable.

**Likely causes:** Synthetic throttling, cold-cache runs, non-representative page choice, variable third-party behavior, aggregated field data.

**Collect:** URL tested, run timestamp, throttling assumptions, field source, screenshot/export, repeat-run notes.

**Next action:** Report both, explain the difference, and prioritize issues that are visible, repeatable, or also supported by field evidence.

## 2. Authenticated pages are hard to audit

**Symptoms:** Login expires, redirected shell page, partial render, blocked route transitions.

**Likely causes:** Session handling, bot protection, feature flags, missing seed data, cookie banners.

**Collect:** Account type, login steps, route list, blockers, tested state, screenshots.

**Next action:** Narrow to reproducible routes and document untested areas explicitly.

## 3. SEO signals conflict

**Symptoms:** Good on-page markup, poor crawl/index outcome.

**Likely causes:** `robots.txt`, `noindex`, canonical conflicts, blocked resources, inconsistent status codes, sitemap omission.

**Collect:** robots.txt, canonical tag, response status, robots directives, sitemap entry status.

**Next action:** Fix crawl/index controls before content-level recommendations.

## 4. Accessibility automation gives false confidence

**Symptoms:** Automated tools report few issues, but navigation or comprehension still fails manually.

**Likely causes:** Custom widgets, missing semantic meaning, broken focus order, poor labeling, dynamic updates not announced.

**Collect:** Keyboard notes, focus screenshots, control names/roles, error examples.

**Next action:** Document manual failures and recommend native controls or APG-aligned behavior where needed.

## 5. Best-practices findings drift into security overclaiming

**Symptoms:** Audit wording implies exploitability or full security coverage without evidence.

**Likely causes:** Conflating browser hygiene with security testing.

**Collect:** Exact observable issue, affected resource, header or console evidence.

**Next action:** Reframe to precise browser-facing risk language and route to a security-specific skill if deeper analysis is requested.

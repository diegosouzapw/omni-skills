---
name: "seo"
description: "SEO optimization workflow skill. Use this skill when the user needs technical and on-page SEO work that affects crawlability, indexability, canonicalization, titles and descriptions, structured data eligibility, sitemap quality, or hreflang implementation. Use when asked to improve SEO, fix indexing issues, add or validate structured data, correct canonical tags, optimize sitemap coverage, or troubleshoot Search Console findings. Do NOT use for accessibility remediation (use web-accessibility), performance remediation (use core-web-vitals), backlink outreach, or broad multi-area audits (use web-quality-audit)."
version: "0.0.1"
category: "business"
tags:
  - "seo"
  - "technical-seo"
  - "structured-data"
  - "canonical"
  - "sitemap"
  - "hreflang"
  - "search-console"
  - "metadata"
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
upstream_skill: "skills/seo"
upstream_author: "web-quality-skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# SEO optimization

## Overview

Use this skill for execution-oriented SEO work that changes how pages are crawled, indexed, selected as canonical, understood, or presented in search.

This skill focuses on:

- crawlability and indexability
- canonicalization and duplicate URL handling
- title, meta description, and snippet controls
- XML sitemap quality
- Google-supported structured data implementations
- international SEO annotations with `hreflang`
- evidence-driven validation using rendered HTML and search-facing tools

This skill does **not** own:

- accessibility remediation
- Core Web Vitals or broader performance optimization
- backlink acquisition or outreach
- broad content strategy
- full web audits spanning multiple specialties

When the work crosses those boundaries, hand off deliberately to related skills.

## When to Use This Skill

Use this skill when the request is primarily about search-facing implementation or diagnosis.

### Good triggers

- “Improve SEO for this page or template.”
- “Fix indexing issues in Search Console.”
- “Add or repair canonical tags.”
- “Add structured data for products, articles, breadcrumbs, or organization identity.”
- “Fix sitemap quality or sitemap submission issues.”
- “Review title tags, meta descriptions, and robots directives.”
- “Implement or debug `hreflang` for localized pages.”
- “Troubleshoot why Google selected a different canonical.”
- “Investigate why a page is crawled but not indexed.”

### Do not use this skill when

- the main problem is performance or Core Web Vitals → use `@core-web-vitals`
- the main problem is accessibility, semantics for assistive tech, or keyboard/screen-reader support → use `@web-accessibility`
- the task is a broad multi-area site audit → use `@web-quality-audit`
- the request is about backlink campaigns, outreach, or off-page authority building
- the request is a content marketing plan rather than technical implementation

## Operating Table

| Situation | Primary focus | Start here |
| --- | --- | --- |
| A page is missing from search | indexability, robots, canonical, status code | `references/technical-seo-checklist.md` |
| Google chose the wrong canonical | duplicate signals and consistency | `examples/canonical-patterns.md` |
| Rich results are missing or invalid | structured data eligibility and validation | `references/page-type-seo-matrix.md` |
| Sitemap is accepted but URLs are excluded | canonical/indexable URL quality | `references/sitemap-rules-and-validation.md` |
| International pages are not switching correctly | reciprocal `hreflang` and locale mapping | `references/hreflang-implementation-patterns.md` |
| SEO diagnosis points to another specialty | handoff and scope control | `agents/seo-router.md` |

## Workflow

1. **Confirm scope and page types**
   - Identify whether the work applies to homepage, article, product page, category page, marketing landing page, or localized variant.
   - List the exact URLs, templates, or route patterns involved.
   - Confirm whether the goal is indexing, canonical cleanup, snippet improvement, structured data eligibility, sitemap quality, or international targeting.

2. **Collect evidence before editing**
   - Capture the live URL, expected canonical URL, and HTTP status.
   - Inspect rendered HTML for `title`, `meta description`, `meta robots`, canonical tags, structured data, and `hreflang`.
   - Note whether the URL appears in the sitemap and whether it should.
   - If Search Console evidence is available, record the current indexing or enhancement status.

3. **Check crawl and index controls**
   - Distinguish crawl blocking from indexing control.
   - Review `robots.txt`, page-level `meta name="robots"`, and any `X-Robots-Tag` headers for non-HTML assets.
   - Verify that important pages return `200`, are not unintentionally `noindex`, and are not trapped behind contradictory directives.

4. **Normalize canonical signals**
   - Ensure the preferred URL is consistent across redirects, canonical tags, internal links, and sitemap entries.
   - Check for HTTP/HTTPS mismatches, trailing slash variants, parameter duplicates, faceted URLs, and duplicate localized pages.
   - Use self-referencing canonicals on canonical pages unless there is a strong reason not to.

5. **Implement page-type SEO elements**
   - Improve titles, descriptions, headings, and internal linking patterns where they are weak or duplicated.
   - Add only structured data that matches the visible page content and intended page type.
   - For international sites, confirm alternate URLs are equivalent pages and have reciprocal `hreflang` references.

6. **Review sitemap quality**
   - Keep only canonical, indexable, `200` URLs in XML sitemaps.
   - Remove blocked, redirected, duplicate, or `noindex` URLs.
   - Segment large sites with sitemap indexes when needed.

7. **Validate after changes**
   - Re-check rendered HTML and headers.
   - Validate structured data with Google Rich Results Test and Schema Markup Validator.
   - Validate sitemap format and inclusion logic.
   - If Search Console is available, use URL Inspection and enhancement reports to verify expected behavior.

8. **Document expected outcome and handoff**
   - Record what changed, which URLs were affected, and what evidence supports the fix.
   - Avoid promising immediate ranking or indexing changes.
   - If unresolved issues are performance-, accessibility-, or platform-related, route them to the correct skill.

## Decision Guide

### Canonicalization decision table

| Scenario | Preferred action | Notes |
| --- | --- | --- |
| Single canonical page | self-referencing canonical | Keep internal links and sitemap aligned |
| HTTP and HTTPS both resolve | redirect to HTTPS and canonicalize to HTTPS | Keep sitemap and canonicals on HTTPS only |
| `www` and non-`www` both resolve | pick one host and be consistent | Redirect the alternate host |
| Parameterized duplicate URLs | canonical to the clean preferred URL | Avoid putting parameter duplicates in sitemap |
| Faceted or filtered pages | canonical based on index intent | Do not auto-canonicalize useful unique pages blindly |
| Migrated URLs | redirect old URL to new canonical URL | Update internal links and sitemap |
| Syndicated or cross-domain duplicates | use cross-domain canonical only when appropriate | Keep ownership and source intent clear |
| Paginated series | canonical each page appropriately based on content intent | Do not rely on `rel=prev/next` as active Google indexing guidance |

### Robots and indexing controls

| Need | Use | Notes |
| --- | --- | --- |
| Prevent crawling of low-value paths | `robots.txt` | Does not itself guarantee deindexing |
| Prevent indexing of an HTML page | `meta name="robots" content="noindex"` | Page must generally be crawlable for bots to see the directive |
| Prevent indexing of PDFs or other non-HTML assets | `X-Robots-Tag: noindex` | Useful for files that cannot carry HTML meta tags |
| Limit snippets or previews | robots snippet directives or `data-nosnippet` | Use sparingly and intentionally |
| Keep a page indexable | avoid accidental `noindex`, blocked resources, or contradictory directives | Validate rendered output, not only source templates |

### Structured data by page type

| Page type | Usually applicable markup | Validate with |
| --- | --- | --- |
| Homepage / company site | `Organization` | Schema validator, rendered HTML |
| Editorial article | `Article` | Rich Results Test + schema validator |
| Product detail page | `Product` | Rich Results Test + schema validator |
| Hierarchical pages | `BreadcrumbList` | Rich Results Test + schema validator |

## Examples

### Example 1: Troubleshoot an indexing problem

```text
Use @seo to investigate why https://example.com/guides/widget-installation is not indexed. Check status code, robots directives, canonical tag, sitemap inclusion, and any Search Console symptoms. Propose only minimal code or config changes and list validation steps.
```

### Example 2: Review a canonical implementation

```text
Use @seo to review canonical handling for these duplicate URLs:
- https://example.com/products/blue-widget
- https://example.com/products/blue-widget?ref=homepage
- https://www.example.com/products/blue-widget
Return the preferred canonical, required redirect behavior, sitemap inclusion rules, and any conflicting signals to fix.
```

### Example 3: Add product structured data

```text
Use @seo to add Product and Breadcrumb structured data to the product detail template. Match only visible page content, avoid unsupported claims, and validate eligibility with the Rich Results Test after generating the JSON-LD.
```

### Example 4: Safe inspection commands

```bash
curl -I https://example.com/products/blue-widget
curl -s https://example.com/products/blue-widget | sed -n '1,220p'
```

Use these to inspect status codes, redirects, headers, and initial HTML safely before proposing changes.

## Best Practices

### Do

- Start from observed symptoms, not generic SEO checklists.
- Verify rendered HTML and HTTP headers, not only component source code.
- Keep canonical signals consistent across redirects, canonicals, internal links, and sitemaps.
- Include only canonical, indexable, `200` URLs in XML sitemaps.
- Treat structured data as eligibility for search features, not as a guaranteed ranking boost.
- Use Google-supported structured data types that match the actual page intent.
- Use self-referencing `hreflang` plus reciprocal alternate references for localized equivalents.
- Record evidence from Search Console, Rich Results Test, rendered HTML, and headers when available.
- Make small, reversible changes and validate after each class of fix.

### Do not

- Do not claim fixed ranking-factor percentages.
- Do not promise that titles, descriptions, or structured data will appear exactly as written in search results.
- Do not rely on `robots.txt` alone to remove URLs from the index.
- Do not keep redirected, duplicate, blocked, or `noindex` pages in the sitemap.
- Do not add structured data that is absent from visible page content.
- Do not recommend `rel=prev/next` as current active Google pagination indexing guidance.
- Do not frame generic security headers as direct SEO tactics.
- Do not route performance-heavy remediation through this skill when `@core-web-vitals` is the better fit.

## Troubleshooting

### Problem: Page is crawled or discovered but not indexed

**Symptoms:** Search Console shows “Crawled - currently not indexed” or “Discovered - currently not indexed,” or the page is absent from search results despite being live.

**Likely causes:** Thin or duplicate content, weak canonical signals, accidental `noindex`, poor internal discovery, soft-404 patterns, or low-value parameter URLs.

**Solution:** Confirm the page returns `200`, is indexable, has a self-referencing or otherwise correct canonical, is linked internally, and is included in the sitemap only if it is canonical and valuable. Check whether the content is meaningfully distinct from nearby pages before requesting revalidation.

### Problem: Google selected a different canonical than expected

**Symptoms:** Search Console reports “Google selected different canonical than user,” or the indexed URL differs from the declared canonical.

**Likely causes:** Conflicting redirects, internal links pointing to a different variant, duplicate parameter URLs, mixed protocol or host signals, inconsistent sitemap entries, or substantially similar duplicate content.

**Solution:** Pick one preferred URL and align redirects, canonical tags, internal links, and sitemap entries to it. Remove weaker conflicting variants from navigation and sitemap coverage where possible.

### Problem: Structured data is valid schema but not eligible for rich results

**Symptoms:** Schema Markup Validator passes, but Rich Results Test shows ineligible content or no supported enhancement.

**Likely causes:** The schema type is not supported for that Google feature, required properties are missing, content does not match visible page data, or the page type is not appropriate for the markup.

**Solution:** Use Google-supported types and properties for the page type, then revalidate with Rich Results Test. Keep schema vocabulary correctness and Google feature eligibility as separate checks.

### Problem: Sitemap is accepted but pages are still excluded

**Symptoms:** Sitemap submission succeeds, but many URLs remain excluded or unindexed.

**Likely causes:** Sitemap contains non-canonical, redirected, `noindex`, blocked, duplicate, or low-value URLs; canonical points elsewhere; page quality issues remain unresolved.

**Solution:** Treat the sitemap as a clean list of canonical URLs you want crawled. Remove bad entries, verify `200` status and canonical consistency, and resubmit only after the sitemap reflects the intended canonical set.

### Problem: `hreflang` annotations are ignored or partially applied

**Symptoms:** Locale switching in search is inconsistent, Search Console reports missing return links, or alternates are not recognized.

**Likely causes:** Missing reciprocal links, missing self-references, invalid locale codes, canonical tags pointing to another locale, or alternates targeting non-equivalent pages.

**Solution:** Ensure each localized page references itself and its alternates, all alternates reciprocate, locale codes are valid, and canonicals remain consistent with the localized URL strategy.

### Problem: Title or snippet shown in search does not match the provided metadata

**Symptoms:** Google shows a different title or snippet than the page source.

**Likely causes:** Duplicate or weak titles, headings that conflict with metadata, content mismatch, snippet control directives, or query-dependent rewrite behavior.

**Solution:** Improve title uniqueness, align headings and visible content with the intended query/topic, keep descriptions useful and accurate, and avoid treating exact SERP rendering as fully controllable.

### Problem: A page is blocked in `robots.txt` but still appears indexed

**Symptoms:** The page remains visible in search, often with limited snippet text, even though crawling is blocked.

**Likely causes:** Crawl blocking prevents bots from seeing a `noindex` directive; the URL may still be known from links or prior crawls.

**Solution:** If deindexing is the goal, do not rely on `robots.txt` alone. Allow crawl long enough for `noindex` to be processed or use the appropriate search-engine removal workflow where justified.

## Related Skills

- `@core-web-vitals` - Use when rankings or organic landing-page quality are being limited by performance, rendering, or page experience issues.
- `@web-accessibility` - Use when navigation, semantics, or interaction problems affect usability or crawl-discoverability and need accessibility-focused remediation.
- `@web-quality-audit` - Use for broader site audits spanning SEO, performance, accessibility, architecture, and quality controls.

## Additional Resources

### Local references

- [Technical SEO checklist](references/technical-seo-checklist.md)
- [Page type SEO matrix](references/page-type-seo-matrix.md)
- [Search Console troubleshooting guide](references/search-console-troubleshooting-guide.md)
- [Hreflang implementation patterns](references/hreflang-implementation-patterns.md)
- [Sitemap rules and validation](references/sitemap-rules-and-validation.md)
- [Canonical implementation patterns](examples/canonical-patterns.md)
- [Meta robots and X-Robots-Tag examples](examples/meta-robots-and-x-robots-tag.md)

### Structured data examples

- [Organization JSON-LD](examples/organization-jsonld.json)
- [Article JSON-LD](examples/article-jsonld.json)
- [Product JSON-LD](examples/product-jsonld.json)
- [Breadcrumb JSON-LD](examples/breadcrumb-jsonld.json)

### External validation tools

- Google Search Central: <https://developers.google.com/search/docs>
- SEO Starter Guide: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide>
- URL Inspection / Search Console help: <https://support.google.com/webmasters/answer/7440203>
- Rich Results Test: <https://search.google.com/test/rich-results>
- Schema Markup Validator: <https://validator.schema.org/>
- Sitemaps protocol: <https://www.sitemaps.org/protocol.html>

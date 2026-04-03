# Technical SEO checklist

Use this checklist before and after implementation. Apply only the items relevant to the affected page type.

## 1. URL and response checks

- [ ] URL returns the expected status code (`200` for indexable pages)
- [ ] No accidental redirect chains
- [ ] Preferred protocol and host are consistent (`https`, `www` or non-`www`)
- [ ] No obvious soft-404 behavior

## 2. Crawl and index controls

- [ ] `robots.txt` does not block required crawl paths
- [ ] Important pages are not unintentionally `noindex`
- [ ] Non-HTML assets use `X-Robots-Tag` when index control is needed
- [ ] Snippet directives are intentional, not inherited accidentally

## 3. Canonicalization

- [ ] Canonical points to the intended preferred URL
- [ ] Canonical page uses self-referencing canonical where appropriate
- [ ] Redirects, canonicals, internal links, and sitemap entries agree
- [ ] Parameter or faceted duplicates do not compete with the canonical URL

## 4. On-page search signals

- [ ] Title is unique and descriptive
- [ ] Meta description is useful and matches page intent
- [ ] Main heading reflects the page topic
- [ ] Internal links use descriptive anchor text

## 5. Structured data

- [ ] Markup matches visible content
- [ ] Google-supported schema type is appropriate for the page
- [ ] Required properties are present
- [ ] Rich Results Test passes for intended enhancements
- [ ] Schema validator shows no structural issues

## 6. Sitemap checks

- [ ] URL belongs in the sitemap
- [ ] URL is canonical, indexable, and returns `200`
- [ ] Redirected, blocked, duplicate, or `noindex` URLs are excluded
- [ ] `lastmod` is used honestly when maintained

## 7. International SEO

- [ ] `hreflang` alternates are equivalent localized pages
- [ ] Each page references itself
- [ ] Alternate annotations are reciprocal
- [ ] Locale codes are valid
- [ ] Canonicals do not collapse locale variants unintentionally

## 8. Validation evidence to capture

- [ ] Rendered HTML snippet or source excerpt
- [ ] Relevant headers
- [ ] Search Console observation if available
- [ ] Rich Results Test result if structured data changed
- [ ] Sitemap location and inclusion decision

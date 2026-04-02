# Canonical implementation patterns

## Self-referencing canonical

```html
<link rel="canonical" href="https://example.com/products/blue-widget" />
```

Use on the preferred URL itself.

## Parameter cleanup

Preferred URL:

```html
<link rel="canonical" href="https://example.com/products/blue-widget" />
```

Duplicate visited as:

`https://example.com/products/blue-widget?ref=homepage`

Expected behavior:
- canonical points to clean URL
- sitemap contains only clean URL
- internal links prefer clean URL

## HTTP to HTTPS migration

- redirect `http://example.com/page` to `https://example.com/page`
- canonical on destination points to `https://example.com/page`
- sitemap includes only HTTPS URLs

## Faceted navigation

Do not blindly canonicalize every filtered result to the parent category. First decide whether the filtered page has unique search value and should be indexable.

## Cross-domain duplicates

Use cautiously. Only declare a cross-domain canonical when the preferred source is intentional and under appropriate control.

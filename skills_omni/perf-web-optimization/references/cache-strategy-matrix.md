# Cache Strategy Matrix

Use this matrix to choose safer caching behavior and to avoid stale-asset incidents.

| Resource type | Typical strategy | Notes |
| --- | --- | --- |
| Fingerprinted static JS/CSS/images/fonts | `public, max-age=31536000, immutable` | Safe when filenames change on content change |
| HTML documents | Revalidate rather than long immutable caching | Helps clients discover new asset URLs after deploy |
| Personalized API responses | Usually private or revalidated | Depends on sensitivity and freshness needs |
| Public API responses | Case by case | Avoid copying static-asset rules blindly |

## Verification checklist

- Confirm actual response headers in the browser.
- Confirm the CDN serves the same headers as origin.
- Confirm stable assets use fingerprinted filenames.
- Confirm HTML updates to reference new asset names after deploy.
- Confirm repeat visits reuse cached assets as expected.

## Common stale-asset causes

- unhashed filenames with long-lived cache directives
- CDN serving outdated HTML
- invalidation not performed after release
- service worker serving older assets
- query-string churn causing cache misses

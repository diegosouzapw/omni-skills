# Sitemap rules and validation

## Core rules

- Include only URLs you want crawled and considered for indexing.
- Prefer canonical URLs only.
- Exclude redirected, blocked, duplicate, error, and `noindex` URLs.
- A sitemap file can contain up to 50,000 URLs or be up to 50MB uncompressed.
- Use sitemap index files for larger sites.

## Important notes

- `priority` and `changefreq` are not useful optimization levers for Google.
- `lastmod` is helpful only when it is maintained accurately.
- Keep protocol, host, and trailing slash conventions consistent with canonicals and redirects.

## Validation steps

1. Sample URLs from the sitemap.
2. Confirm they return `200`.
3. Confirm they are canonical and indexable.
4. Confirm they are not blocked by `robots.txt` if crawl is desired.
5. Confirm sitemap URLs match preferred site architecture.
6. If Search Console is available, review sitemap submission and indexing patterns.

## Typical sitemap quality failures

- parameterized URLs included as canonical pages
- redirected URLs left in the sitemap
- `noindex` pages included
- locale duplicates competing with canonical targets
- stale URLs that no longer return `200`

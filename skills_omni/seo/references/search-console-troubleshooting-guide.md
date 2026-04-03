# Search Console troubleshooting guide

This guide maps common symptoms to likely checks and safe remediations.

## 1. Crawled - currently not indexed

**Check:**
- status code
- duplicate or thin content patterns
- canonical target
- internal links
- sitemap inclusion

**Usually do next:**
- improve distinct value of the page
- align canonical signals
- keep only worthwhile canonical pages in sitemaps

## 2. Discovered - currently not indexed

**Check:**
- crawl path depth
- internal linking strength
- server responsiveness
- whether the page is actually important enough to index

**Usually do next:**
- improve discovery through navigation or contextual links
- ensure the page is not an orphan
- avoid pushing low-value duplicates into the sitemap

## 3. Alternate page with proper canonical tag

**Check:**
- whether this outcome is expected
- whether the canonical target is correct

**Usually do next:**
- if expected, no change may be needed
- if unexpected, review canonical, redirects, internal links, and duplicate generation patterns

## 4. Duplicate without user-selected canonical

**Check:**
- whether the page declares a canonical
- whether duplicate variants are reachable
- whether internal links reinforce the wrong variant

**Usually do next:**
- choose a preferred URL
- redirect or canonicalize alternates
- remove duplicate variants from sitemaps

## 5. Excluded by `noindex`

**Check:**
- whether the directive is intentional
- whether it appears in all render paths
- whether headers also set index controls

**Usually do next:**
- remove accidental `noindex`
- keep the page crawlable so bots can see the updated directive state

## 6. Blocked by `robots.txt`

**Check:**
- whether the block is intentional
- whether blocked resources affect rendering
- whether the site is trying to deindex through crawl blocking alone

**Usually do next:**
- unblock crawl if bots must process `noindex` or render the page
- use search removal workflows only where justified

## 7. Rich result errors or warnings

**Check:**
- required properties
- visible content alignment
- unsupported type or ineligible page
- rendered JSON-LD output

**Usually do next:**
- fix errors first
- treat warnings as optimization opportunities when relevant
- validate again with both Google and schema tools

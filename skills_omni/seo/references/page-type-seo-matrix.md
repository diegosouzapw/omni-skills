# Page type SEO matrix

Use this matrix to decide which SEO elements are usually expected by page type.

| Page type | Title / description | Canonical | Sitemap | Structured data | `hreflang` | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Homepage | Yes | Yes | Yes | `Organization` | If localized | Keep host/protocol signals consistent |
| Article / blog post | Yes | Yes | Yes | `Article`, `BreadcrumbList` | If localized equivalent exists | Match schema to visible editorial content |
| Product detail page | Yes | Yes | Yes | `Product`, `BreadcrumbList` | If localized equivalent exists | Offers, price, availability must match visible data |
| Category / collection page | Yes | Yes | Usually yes | `BreadcrumbList` | If localized equivalent exists | Avoid product markup on listing pages unless justified |
| Marketing landing page | Yes | Yes | Maybe | Usually none or `BreadcrumbList` | If localized equivalent exists | Keep focus on canonical/indexability |
| Filtered / faceted page | Case-by-case | Case-by-case | Usually no unless intentionally indexable | Usually none | Rare | Decide based on unique search value |
| PDF / media asset | Limited | Usually n/a | Usually no | n/a | Rare | Use `X-Robots-Tag` for indexing control when needed |

## Quick rules

- If a page should rank independently, it usually needs a stable canonical URL, discoverable internal links, and clear metadata.
- If a page is a duplicate, redirect or canonicalize instead of optimizing every duplicate variant.
- If structured data is added, validate feature eligibility, not just schema syntax.
- If localized pages are not true equivalents, do not connect them with `hreflang`.

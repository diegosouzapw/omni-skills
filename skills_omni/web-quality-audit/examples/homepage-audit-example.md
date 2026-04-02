# Example: Homepage audit

## Scope

- Target: public marketing site homepage
- Goal: identify broad quality issues across performance, accessibility, SEO, and best practices

## Evidence collected

- Homepage URL audited on mobile assumptions
- Lighthouse category outputs recorded
- Manual keyboard pass completed
- Title, meta description, canonical, and robots observations recorded
- Console checked for visible runtime issues

## Example findings

1. **High - Performance:** LCP image discovered late due to missing preload and oversized source asset.
2. **High - Accessibility:** Primary navigation dropdown not fully keyboard operable.
3. **Medium - SEO:** Meta description duplicated with another high-value page.
4. **Medium - Best practices:** Console shows repeated third-party script errors affecting trust and noise.

## Top recommendations

- Fix the navigation keyboard behavior first because it blocks access to core paths.
- Improve LCP resource discovery on the homepage template.
- clean up duplicated metadata on priority landing pages.
- Remove or contain noisy third-party errors.

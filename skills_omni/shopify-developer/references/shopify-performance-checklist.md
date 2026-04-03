# Shopify Performance Checklist

Use this reference before declaring theme or storefront work complete.

## Theme and storefront validation checklist

- Check whether images are sized and loaded appropriately for the surface.
- Reduce unnecessary third-party scripts and embeds.
- Review JavaScript and CSS payload growth caused by the change.
- Avoid unnecessarily large Liquid loops.
- Use pagination where resource collections are large.
- Confirm snippets and sections do not duplicate expensive rendering work.
- Inspect product and collection templates for payload-heavy additions.
- Review Core Web Vitals impact where the task changes critical storefront paths.

## Common Shopify-specific regressions

### Slow collection or product pages

**Likely causes:**
- oversized Liquid loops
- too many synchronous scripts
- media bloat
- repeated section rendering work

**Recovery:** Reduce loop size, defer or remove noncritical scripts, optimize media, and simplify template rendering.

### Theme looks correct but feels sluggish

**Likely causes:**
- added app embeds or third-party scripts
- large assets loaded on every page

**Recovery:** Identify what the recent change added to the critical path before rewriting Liquid unnecessarily.

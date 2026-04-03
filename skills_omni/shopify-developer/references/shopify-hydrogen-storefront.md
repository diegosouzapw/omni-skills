# Shopify Hydrogen and Storefront Workflow

Use this reference when the request is about headless storefronts, Hydrogen, or Storefront API architecture.

## Route selection

Choose this path when:

- the storefront is headless
- the user needs a custom React storefront on Shopify
- data loading, cart behavior, or Oxygen deployment is part of the task

Do not choose this path for normal theme customization unless the storefront is actually headless.

## Operator checklist

1. Confirm that headless is the real architecture.
2. Separate Storefront API use from Admin API use.
3. Keep privileged admin actions out of client storefront code.
4. Verify route loaders, actions, and cart/session behavior.
5. Compare local and Oxygen environments when debugging deployment differences.
6. Review caching before assuming stale data is a schema issue.

## Common failure modes

### Local works, Oxygen differs

**Likely causes:**
- environment mismatch
- cache behavior differences
- wrong Storefront API domain or token setup

**Recovery:** Compare deployed configuration first, then inspect loader/action assumptions.

### Wrong API boundary

**Symptoms:** Proposed Hydrogen solution uses Admin API directly from the client.

**Recovery:** Move privileged admin work to a secure server-side boundary and keep storefront data access on the correct surface.

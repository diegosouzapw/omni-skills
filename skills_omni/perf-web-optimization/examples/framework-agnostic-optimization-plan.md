# Framework-Agnostic Optimization Plan

## Scenario

A product page is slow on first load and still re-downloads assets on repeat visits.

## Plan

1. Capture a baseline for the product page using the triage checklist.
2. Inspect the Network panel for:
   - hero image discovery order
   - large JS bundles
   - render-blocking CSS
   - cache headers on HTML and static assets
3. Inspect the Performance panel for:
   - long tasks during startup
   - third-party execution after load
4. Apply fixes in this order:
   - correct hero image loading and sizing
   - defer or split non-critical JavaScript
   - reduce or postpone third-party scripts
   - tighten caching for fingerprinted assets
   - refine font loading and only keep critical preloads
5. Re-test after each class of change.
6. Document rollout notes:
   - hashed assets confirmed
   - CDN invalidation needs
   - rollback concerns

## Expected outcomes

- earlier hero image request
- less render-blocking work
- smaller critical JavaScript cost
- fewer repeat-visit downloads for stable assets

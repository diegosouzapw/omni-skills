# Shopify API Versioning and Rate Limits

Use this as a quick operator reference for Admin GraphQL and Storefront API work.

## Versioning

- Pin the Shopify API version used by the implementation.
- Do not assume the latest documented version is the one already in use by the shop or codebase.
- When debugging, verify the exact version in the endpoint path and compare behavior against that version's schema/docs.
- When handing off, note the pinned version explicitly.

## Admin GraphQL basics

Preferred pattern:
- use GraphQL variables
- use cursor pagination
- inspect `errors`
- inspect domain-specific `userErrors` where applicable
- review query cost and throttle behavior before loops or bulk-style fetching

## Throttle-aware habits

- Avoid unbounded loops over large result sets.
- Paginate with cursors instead of assuming a single page.
- Reduce field selection when query cost is high.
- Back off and retry when throttled instead of hammering the endpoint.
- Batch carefully and observe cost behavior over time.

## Common failure patterns

### Version mismatch
Symptoms:
- field missing
- mutation shape differs
- docs and runtime behavior disagree

Action:
- confirm the endpoint version first

### Throttled requests
Symptoms:
- intermittent failures
- `THROTTLED` errors
- automation slows down or fails on larger datasets

Action:
- reduce cost, paginate, add backoff, and avoid naive concurrency

### Permission issues
Symptoms:
- access denied
- unauthorized response
- mutation works in one store but not another

Action:
- review scopes and token context before changing query structure

## Minimal handoff checklist

Record these in implementation notes:
- API surface used
- pinned version
- required scopes
- pagination approach
- error handling approach
- throttle/backoff assumptions

## Maintenance note

Check the Shopify developer changelog when updating durable guidance. Version support and migration timelines can change.

# Data Fetching and Cache Playbook

Use this playbook for slow routes, nested async waterfalls, stale data bugs, and rendering-mode confusion.

## 1. Map fetches before changing code

For each route, list:

- fetch or DB call
- where it runs
- whether it is independent or dependent
- whether it should be cached, revalidated, or always fresh
- whether it blocks the whole route or only a subtree

## 2. Remove accidental waterfalls

### Signs of a waterfall

- one `await` finishes before the next request starts, even though they do not depend on each other
- nested components each fetch after parent rendering completes
- metadata generation introduces another blocking fetch path

### Preferred fix

Start independent work early and await later.

```ts
const productPromise = getProduct(id)
const reviewsPromise = getReviews(id)

const [product, reviews] = await Promise.all([productPromise, reviewsPromise])
```

### When not to parallelize

- when request B truly depends on the result of request A
- when concurrency would overload a backend or violate rate limits

## 3. Use Suspense intentionally

Good Suspense placement:

- around slow subtrees
- around non-critical secondary content
- where streaming improves perceived speed

Poor Suspense placement:

- wrapping the whole route when one small section is slow
- adding many boundaries without a clear UX purpose

## 4. Clarify cache intent

Ask these questions explicitly:

- Should this data be static until redeploy?
- Should it refresh on an interval?
- Should it update only after a mutation or invalidation event?
- Must it always be per-request fresh?

Use route and fetch semantics consistently. Do not apply broad cache-disabling changes as a first response.

## 5. Check for hidden rendering-mode changes

A route may become more dynamic than expected because of:

- request-time data access
- headers or cookies usage
- metadata fetching behavior
- invalidation patterns that force fresh rendering

If behavior changed unexpectedly, compare current route dependencies with the previous version.

## 6. Safe review sequence

1. identify independent fetches
2. parallelize only those
3. place or adjust Suspense boundaries
4. confirm cache and revalidation intent
5. verify the route still behaves as intended

## Common mistakes

- awaiting each item inside a loop when batching is possible
- turning off caching globally to mask a freshness bug
- assuming every stale result is a cache bug rather than an invalidation design issue
- forgetting that metadata and nested components can add extra fetch cost

## Output expectation

A good optimization review should say:

- what was blocking
- what became parallel
- what remained intentionally sequential
- what cache behavior is intended after the change
- what user-visible improvement is expected

# Example: App Router Parallel Fetching

## Before

This pattern serializes independent work:

```tsx
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)
  const reviews = await getReviews(id)
  const recommendations = await getRecommendations(id)

  return <ProductPage product={product} reviews={reviews} recommendations={recommendations} />
}
```

## Problem

`getProduct`, `getReviews`, and `getRecommendations` all wait on one another even if they are independent. This delays the full route and can delay streaming.

## After

```tsx
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const productPromise = getProduct(id)
  const reviewsPromise = getReviews(id)
  const recommendationsPromise = getRecommendations(id)

  const [product, reviews, recommendations] = await Promise.all([
    productPromise,
    reviewsPromise,
    recommendationsPromise,
  ])

  return <ProductPage product={product} reviews={reviews} recommendations={recommendations} />
}
```

## Better if one section is slower

Keep the shell fast and stream secondary content behind Suspense.

```tsx
import { Suspense } from 'react'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <>
      <ProductHero product={product} />
      <Suspense fallback={<RecommendationsSkeleton />}>
        <RecommendationsSection id={id} />
      </Suspense>
    </>
  )
}
```

## Review note

Only parallelize truly independent work. If recommendations depend on product category from `getProduct`, keep that dependency explicit.

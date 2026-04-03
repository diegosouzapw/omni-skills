# Example: Reduce an oversized client boundary

## Before

```tsx
'use client'

import { useState } from 'react'
import ProductGrid from './ProductGrid'
import ProductFilters from './ProductFilters'

export default function ProductsPage({ products }) {
  const [filters, setFilters] = useState({ q: '' })

  return (
    <div>
      <ProductFilters filters={filters} setFilters={setFilters} />
      <ProductGrid products={products} filters={filters} />
    </div>
  )
}
```

## Issue

The entire page becomes a Client Component even though only the filters need client interactivity.

## After

```tsx
import ProductGrid from './ProductGrid'
import ProductFiltersClient from './ProductFiltersClient'

export default function ProductsPage({ products }) {
  return (
    <div>
      <ProductFiltersClient />
      <ProductGrid products={products} />
    </div>
  )
}
```

```tsx
'use client'

import { useState } from 'react'

export default function ProductFiltersClient() {
  const [filters, setFilters] = useState({ q: '' })

  return <div>{/* interactive controls */}</div>
}
```

## Why this helps

- Keeps the page shell and data rendering on the server.
- Reduces client JavaScript scope.
- Avoids serializing more props than needed across the boundary.

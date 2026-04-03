# Example: Dynamic import and script strategy

## Dynamic import for a heavy interactive widget

```tsx
'use client'

import dynamic from 'next/dynamic'

const ChartEditor = dynamic(() => import('./ChartEditor'), {
  loading: () => <p>Loading editor…</p>,
})

export default function AnalyticsPanel({ canEdit }) {
  return <>{canEdit ? <ChartEditor /> : null}</>
}
```

## Why this helps

The editor code is only loaded when the interactive feature is actually used.

## Next.js Script strategy for third-party code

```tsx
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script
        src="https://example.com/analytics.js"
        strategy="afterInteractive"
      />
    </>
  )
}
```

## Why this helps

- Avoids blocking the most important initial rendering path.
- Makes third-party loading behavior explicit and reviewable.

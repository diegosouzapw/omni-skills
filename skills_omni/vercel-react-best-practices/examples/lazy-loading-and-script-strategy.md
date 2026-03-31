# Example: Lazy Loading and Script Strategy

## Lazy load a heavy client-only component

```tsx
'use client'

import dynamic from 'next/dynamic'

const ChartPanel = dynamic(() => import('./chart-panel'), {
  loading: () => <p>Loading chart…</p>,
})

export function AnalyticsTab({ enabled }: { enabled: boolean }) {
  if (!enabled) return null
  return <ChartPanel />
}
```

## Why this helps

The chart code is deferred until the UI path that needs it is actually rendered.

## Do not overuse

Do not lazy load tiny components or critical above-the-fold content that should render immediately.

## Script strategy example

```tsx
import Script from 'next/script'

export function AnalyticsScripts() {
  return (
    <Script
      src="https://example.com/analytics.js"
      strategy="afterInteractive"
    />
  )
}
```

## Review questions

- Is the script necessary?
- Can it wait until after the main content becomes interactive?
- Is the component using a safe placement and framework-native loading strategy?

# Example: Hydration mismatch fixes

## Before

```tsx
export default function Greeting() {
  return <p>{new Date().toLocaleTimeString()}</p>
}
```

## Issue

The server-rendered time can differ from the first client-rendered time.

## Safer fix: stable server render, client enhancement later

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function Greeting() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(new Date().toLocaleTimeString())
  }, [])

  return <p>{time ?? '—'}</p>
}
```

## Narrow use of suppressHydrationWarning

```tsx
export default function Greeting({ serverFormattedTime }) {
  return (
    <time suppressHydrationWarning>
      {serverFormattedTime}
    </time>
  )
}
```

Use this only when the mismatch is expected, narrow, and harmless.

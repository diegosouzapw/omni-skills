# Example: Next Image Patterns for LCP

## Stable hero image pattern

```tsx
import Image from 'next/image'

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Product screenshot"
      width={1600}
      height={900}
      priority
      sizes="(max-width: 768px) 100vw, 80vw"
    />
  )
}
```

## Why this helps

- explicit dimensions reduce layout shift
- `priority` helps the likely LCP image when used sparingly
- `sizes` improves responsive delivery

## Common mistake

```tsx
<img src="/hero.jpg" alt="Product screenshot" />
```

This loses framework-native optimization and often omits enough sizing information for stable rendering.

## Review note

Reserve `priority` for the main above-the-fold visual candidate. Overusing it can dilute its benefit.

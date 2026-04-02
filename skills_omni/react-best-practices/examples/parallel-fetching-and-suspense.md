# Example: Parallel fetching and Suspense

## Before

```tsx
export default async function Page() {
  const user = await getUser()
  const notifications = await getNotifications()

  return <Dashboard user={user} notifications={notifications} />
}
```

## Issue

If `getUser()` and `getNotifications()` are independent, the second request starts too late.

## After

```tsx
export default async function Page() {
  const userPromise = getUser()
  const notificationsPromise = getNotifications()

  const [user, notifications] = await Promise.all([
    userPromise,
    notificationsPromise,
  ])

  return <Dashboard user={user} notifications={notifications} />
}
```

## Streaming variation

```tsx
import { Suspense } from 'react'

export default async function Page() {
  const user = await getUser()

  return (
    <>
      <Profile user={user} />
      <Suspense fallback={<NotificationsSkeleton />}>
        <NotificationsSection />
      </Suspense>
    </>
  )
}

async function NotificationsSection() {
  const notifications = await getNotifications()
  return <NotificationsList notifications={notifications} />
}
```

## Why this helps

- Starts independent work in parallel.
- Lets slower sections stream behind a fallback when appropriate.
- Makes true dependencies easier to distinguish from accidental waterfalls.

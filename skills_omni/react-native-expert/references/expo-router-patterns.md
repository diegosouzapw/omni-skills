# Expo Router Patterns

Use this guide when the task involves navigation, route structure, auth flow, layouts, params, or deep linking in an Expo Router app.

## Default operating model

Prefer Expo Router's file-based conventions over ad hoc navigation setup when the project already uses Expo Router.

Start by identifying:

- `app/` route structure
- existing `_layout.tsx` files
- route groups such as `(auth)` or `(tabs)`
- whether typed routes are enabled
- where auth/session state currently lives

## Notation quick guide

| Pattern | Meaning | Typical use |
| --- | --- | --- |
| `app/index.tsx` | root route | home screen |
| `app/_layout.tsx` | shared layout wrapper | stack, tabs, providers |
| `app/profile/[id].tsx` | dynamic segment | user or item detail |
| `app/(tabs)/_layout.tsx` | grouped routes with shared navigator | tab shell |
| `app/+not-found.tsx` | unmatched route handling | fallback screen |

## Recommended workflow

1. Sketch the route tree before coding.
2. Decide which layouts own auth checks, stacks, or tabs.
3. Prefer route groups for organization rather than overloading screen files with routing logic.
4. Use `Link` for declarative navigation when suitable.
5. Use `router.push`, `router.replace`, or redirects deliberately for imperative flows.
6. Pass route params explicitly and keep their types narrow.

## Auth and protected routes

Typical pattern:

- public screens live in one route group
- authenticated screens live in another
- a layout or gate checks session state
- unauthorized users are redirected to sign-in

Avoid scattering auth redirects across many leaf screens when a layout-level decision is clearer.

## URL params

Distinguish between:

- route params from dynamic segments
- search params from the URL/query string

Be explicit about whether the screen needs local params only or global search param observation.

## Typed routes

If the project enables typed routes, prefer them for:

- route hrefs
- route params
- links in reusable components

This reduces stringly-typed navigation mistakes.

## Common mistakes

- Building manual navigation state where file-based routing already solves it.
- Using inconsistent route names between files and links.
- Putting too much auth logic in each screen instead of a layout or guard.
- Mixing route params and search params carelessly.
- Renaming route files without updating links and redirects.

## Return format for routing tasks

When implementing routing changes, return:

1. the proposed route tree
2. files added or changed
3. redirect/protection logic
4. params and typed-route implications
5. platform-specific test notes if relevant

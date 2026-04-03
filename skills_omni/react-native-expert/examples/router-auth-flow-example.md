# Router Auth Flow Example

Use this packet when the user asks for protected routes in an Expo Router app.

## Example request

```text
Implement an authenticated area in an Expo Router app.
Use route groups and redirects instead of scattered imperative navigation.
Assume there is a session provider already available.
Return the route tree, layout strategy, screen changes, and validation notes.
```

## Expected implementation shape

- public route group such as `(public)`
- protected route group such as `(app)`
- layout-level auth gate or redirect
- typed links if the project supports typed routes
- clear handling for logged-out and logged-in startup states

## Agent output checklist

1. proposed folders and route files
2. auth decision location
3. redirect logic
4. params or typed-route notes
5. iOS and Android validation notes

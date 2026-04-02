# Bundle Analysis Command Reference

Use this command reference when reviewing a Next.js bundle-size issue.

## Typical safe flow

1. Confirm the app already supports the Next.js bundle analyzer setup.
2. Run the project's existing analyzer command if one exists.
3. If the project uses the standard analyzer integration, a common pattern is:

```bash
ANALYZE=true npm run build
```

4. Inspect which routes or shared chunks grew.
5. Trace regressions back to:
   - new `use client` boundaries
   - heavy route-level imports
   - barrel imports
   - third-party libraries that can be deferred or isolated

## Review notes

- Prefer the project's documented build command over inventing a new one.
- Do not modify build configuration unless the user asked for setup work.
- Record which route or chunk changed before proposing code edits.

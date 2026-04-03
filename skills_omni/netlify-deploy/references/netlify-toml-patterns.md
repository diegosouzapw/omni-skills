# netlify.toml Patterns

Prefer `netlify.toml` as the durable source of Netlify build configuration.

## Static site

```toml
[build]
  publish = "."
```

Use only when the repository root itself contains the final static files.

## Vite or React-style app

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Verify that `npm run build` actually outputs to `dist`.

## Generic app with build output in `build`

```toml
[build]
  command = "npm run build"
  publish = "build"
```

## Monorepo pattern

```toml
[build]
  base = "apps/web"
  command = "npm run build"
  publish = "dist"
```

Use this when the deployable app lives below the repo root. Verify that paths are correct relative to the base directory.

## Notes

- Do not guess framework defaults when the repository already states the build output elsewhere.
- Validate `package.json` scripts alongside `netlify.toml`.
- If framework-specific adapters are involved, verify against project and framework documentation before changing publish paths.

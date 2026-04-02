# Minimal `netlify.toml` Examples

Use these as references, not as blind drop-ins.

## Static site

```toml
[build]
  publish = "."
```

## Vite / React-style build

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## Generic build output to `build`

```toml
[build]
  command = "npm run build"
  publish = "build"
```

## Context-specific example

```toml
[build]
  command = "npm run build"
  publish = "dist"

[context.production]
  command = "npm run build"

[context.deploy-preview]
  command = "npm run build"
```

## What to verify before using

- Does the build command match the project scripts?
- Does the publish directory match actual build output?
- Are there context-specific differences that explain preview vs production behavior?
- Are redirects, headers, or functions settings required for the app to work?

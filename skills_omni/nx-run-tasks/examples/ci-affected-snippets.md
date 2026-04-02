# CI Affected Snippets

Use these as command patterns, then adapt ref names to the repository.

## Test affected projects with explicit diff inputs

```bash
nx affected -t test --base=origin/main --head=HEAD --verbose
```

## Build and lint affected projects

```bash
nx affected -t build,lint --base=origin/main --head=HEAD --parallel=3
```

## File-driven fallback when Git metadata is unavailable

```bash
nx affected -t test --files=apps/web/src/app.tsx,libs/util/src/index.ts --verbose
```

## Debug suspected cache-related behavior in CI

```bash
nx affected -t test --base=origin/main --head=HEAD --skipNxCache --verbose
```

Use cache bypass only for investigation, not as the default pipeline pattern.

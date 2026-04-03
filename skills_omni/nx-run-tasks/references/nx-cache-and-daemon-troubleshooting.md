# Nx Cache and Daemon Troubleshooting

## Cache guidance

Nx caching is usually a feature, not a problem. Keep it enabled by default.

Use `--skipNxCache` only when you need a one-off comparison such as:

- confirming whether a suspicious result came from cache replay
- checking an environment-sensitive issue
- comparing fresh execution against cached behavior

Example:

```bash
nx run myapp:test --skipNxCache
```

Do not turn cache bypass into your normal command pattern unless the workspace owners have already decided to do so.

## When a cache hit was expected but did not happen

Check for:

- changed inputs or source files
- different configurations
- environment differences between runs
- executor-specific inputs
- CI variables or workspace state that changed the task hash

Useful next step:

```bash
nx run myapp:test --verbose
```

## Daemon and stale state guidance

Local development often benefits from the Nx daemon. CI should not depend on long-lived daemon state.

If project graph results or target discovery look stale after branch switches or config changes, reset local state:

```bash
nx reset
```

This is the first recovery step for:

- stale project graph behavior
- target discovery inconsistencies
- local execution that changed unexpectedly after switching branches

## Minimal recovery sequence

```bash
nx show project myapp --json
nx run myapp:test --verbose
nx run myapp:test --skipNxCache
nx reset
```

Interpretation:

1. verify the target still exists
2. collect richer diagnostics
3. compare cached vs fresh execution once
4. clear stale local state if behavior still looks wrong

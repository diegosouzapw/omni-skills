# Sentry Query Cheat Sheet

Use these queries to keep investigations reproducible.

## Common filters

- `is:unresolved` — unresolved issues
- `is:resolved` — resolved issues
- `is:regressed` — regressed issues
- `level:error` — error-level issues
- `level:fatal` — fatal-level issues
- `environment:prod` — production environment
- `release:1.2.3` — issues tied to a release
- `ABC-123` — short ID lookup

## Practical combinations

### Recent unresolved production errors

```text
environment:prod is:unresolved level:error
```

### Recent fatal production issues

```text
environment:prod is:unresolved level:fatal
```

### Release-scoped investigation

```text
environment:prod release:1.2.3
```

### Regressions in production

```text
environment:prod is:regressed
```

### Short ID resolution

```text
ABC-123
```

## Usage guidance

- Start broad enough to confirm the project is returning data.
- Then add environment, status, and release filters.
- Always report the exact query used in the final summary.
- If a query returns nothing, widen the time window before concluding there are no relevant issues.

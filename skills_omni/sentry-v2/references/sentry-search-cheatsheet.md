# Sentry Search Cheat Sheet

Use official Sentry search syntax to keep queries reproducible.

## Common query patterns

### Recent unresolved production errors

```text
is:unresolved event.type:error environment:prod
```

### Specific release in production

```text
environment:prod release:1.2.3 event.type:error
```

### Regressed issues

```text
is:unresolved is:regression
```

### Search by issue short ID

```text
ABC-123
```

### Focus on a specific transaction or tag

```text
environment:prod transaction:"POST /api/orders"
```

## Query design guidance

- Prefer explicit `environment:` filters.
- Prefer explicit time windows through the command flags.
- Start with `is:unresolved` for triage unless the request says otherwise.
- Add release, transaction, or tag filters when the initial result set is too broad.
- If zero results are returned, simplify the query and re-check org/project/time range.

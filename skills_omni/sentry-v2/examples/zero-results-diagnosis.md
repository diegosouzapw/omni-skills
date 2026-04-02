# Example: Zero-Results Diagnosis

Goal: explain why a successful API call returned no issues or events.

## Checklist

1. Confirm the org slug.
2. Confirm the project slug.
3. Verify the environment filter.
4. Verify the time range.
5. Simplify the query.
6. Check whether the target issue or event belongs to another project.
7. Consider retention limits.

## Start broad, then narrow

If this returned nothing:

```bash
python3 "$SENTRY_API" \
  list-issues \
  --org "$SENTRY_ORG" \
  --project "$SENTRY_PROJECT" \
  --environment prod \
  --time-range 24h \
  --limit 10 \
  --query "is:unresolved release:1.2.3"
```

Try simplifying the query first:

```bash
python3 "$SENTRY_API" \
  list-issues \
  --org "$SENTRY_ORG" \
  --project "$SENTRY_PROJECT" \
  --environment prod \
  --time-range 24h \
  --limit 10
```

Then re-add filters one at a time.

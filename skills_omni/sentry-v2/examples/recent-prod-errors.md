# Example: Recent Production Errors

Goal: summarize recent unresolved production errors in a reproducible, read-only way.

## Recommended command

```bash
python3 "$SENTRY_API" \
  list-issues \
  --org "$SENTRY_ORG" \
  --project "$SENTRY_PROJECT" \
  --environment prod \
  --time-range 24h \
  --limit 10 \
  --query "is:unresolved event.type:error"
```

## Report template

- Org: `<org>`
- Project: `<project>`
- Environment: `prod`
- Time range: `24h`
- Query: `is:unresolved event.type:error`
- Limit: `10`
- Result cap note: `state whether results may be partial`

For each issue, summarize only the needed fields:

- title
- short ID
- status
- last seen
- event count
- environments

Do not include raw stack traces or unredacted PII.

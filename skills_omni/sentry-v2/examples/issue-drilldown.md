# Example: Issue Drilldown

Goal: move from a user-provided issue short ID to issue and event evidence.

## Step 1: Resolve short ID

```bash
python3 "$SENTRY_API" \
  list-issues \
  --org "$SENTRY_ORG" \
  --project "$SENTRY_PROJECT" \
  --query "ABC-123" \
  --limit 1
```

## Step 2: Retrieve issue detail

```bash
python3 "$SENTRY_API" issue-detail 1234567890
```

## Step 3: List issue events

```bash
python3 "$SENTRY_API" issue-events 1234567890 --limit 5
```

## Optional Step 4: Retrieve one event detail

```bash
python3 "$SENTRY_API" \
  event-detail \
  --org "$SENTRY_ORG" \
  --project "$SENTRY_PROJECT" \
  abcdef1234567890
```

## Safe summary pattern

- Identify the issue by title and short ID.
- Note status, first seen, last seen, and event count.
- Mention one or two representative event facts only if needed.
- Include the org, project, and time scope used.

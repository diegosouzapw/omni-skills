# Sentry Query Examples

## Unresolved production issues

```bash
python3 scripts/sentry_api.py \
  list-issues \
  --org your-org \
  --project your-project \
  --environment prod \
  --time-range 24h \
  --limit 20 \
  --query "is:unresolved level:error"
```

## Release-scoped investigation

```bash
python3 scripts/sentry_api.py \
  list-issues \
  --org your-org \
  --project your-project \
  --environment prod \
  --time-range 7d \
  --limit 20 \
  --query "release:1.2.3"
```

## Short ID lookup

```bash
python3 scripts/sentry_api.py \
  list-issues \
  --org your-org \
  --project your-project \
  --query "ABC-123" \
  --limit 1
```

## Issue drill-down

```bash
python3 scripts/sentry_api.py issue-detail 1234567890
```

## Event inspection

```bash
python3 scripts/sentry_api.py \
  event-detail \
  --org your-org \
  --project your-project \
  abcdef1234567890
```

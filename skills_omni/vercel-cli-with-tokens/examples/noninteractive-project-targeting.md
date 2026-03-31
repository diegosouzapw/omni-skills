# Non-Interactive Project Targeting Examples

## Preferred: org and project IDs

```bash
export VERCEL_TOKEN="<masked>"
export VERCEL_ORG_ID="<org-id>"
export VERCEL_PROJECT_ID="<project-id>"
vercel whoami
vercel deploy -y --no-wait
```

## Team slug plus existing project context

```bash
vercel whoami --scope <team-slug>
vercel deploy --scope <team-slug> -y --no-wait
```

## Fallback: link when IDs are unavailable

```bash
vercel link --repo --scope <team-slug> -y
vercel deploy --scope <team-slug> -y --no-wait
```

## Notes

- `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` should be set together.
- `--scope` selects team context but does not replace full project targeting in every case.
- Prefer env-based targeting in CI.

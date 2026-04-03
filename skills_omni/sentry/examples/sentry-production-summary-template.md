# Sentry Production Summary Template

Use this shape for a safe, reproducible answer.

## Scope

- Org: `...`
- Project: `...`
- Environment: `...`
- Time window: `...`
- Query: `...`
- Limit: `...`

## Summary

Reviewed `N` issues from Sentry for the specified scope.

Top findings:

1. `ISSUE-1` — short summary, count, last seen, status
2. `ISSUE-2` — short summary, count, last seen, status
3. `ISSUE-3` — short summary, count, last seen, status

## Notable correlations

- Release: `...`
- Environment pattern: `...`
- Tags or culprit pattern: `...`

## Safety notes

- Sensitive payload fields were omitted.
- Raw stack traces were not included.
- Tokens, emails, IPs, headers, cookies, and request bodies were not reproduced.

## Limitations

- Results are complete / partial because `...`
- Confidence: high / medium / low

## Handoff

- Relevant issue IDs: `...`
- Relevant event IDs: `...`
- Sentry links: `...`

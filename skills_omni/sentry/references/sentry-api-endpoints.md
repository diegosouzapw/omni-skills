# Sentry API Endpoint Map

This skill is limited to read-only investigation.

## Authentication

Use a local bearer token via `SENTRY_AUTH_TOKEN`.

Recommended read scopes:

- `org:read`
- `project:read`
- `event:read`

## Base URL

- SaaS default: `https://sentry.io`
- Self-hosted: use `SENTRY_BASE_URL`

## Task to endpoint map

| Task | Endpoint | Inputs | Safe summary fields |
| --- | --- | --- | --- |
| List project issues | `/api/0/projects/{org_slug}/{project_slug}/issues/` | org, project, query, environment, statsPeriod, limit | title, shortId, status, count, firstSeen, lastSeen, environment list, top tags |
| Retrieve issue detail | `/api/0/issues/{issue_id}/` | issue ID | status, count, firstSeen, lastSeen, culprit, metadata, release, permalink |
| List issue events | `/api/0/issues/{issue_id}/events/` | issue ID, limit | event IDs, timestamps, environment, release, platform |
| Retrieve project event | `/api/0/projects/{org_slug}/{project_slug}/events/{event_id}/` | org, project, event ID | event ID, timestamp, environment, release, culprit, tags, URL |

## Workflow notes

- Prefer listing issues before issue detail.
- Prefer issue detail before event detail.
- Fetch a single event only when needed.
- Follow cursor-based pagination on list operations.
- Report partial results when limits or throttling affect coverage.

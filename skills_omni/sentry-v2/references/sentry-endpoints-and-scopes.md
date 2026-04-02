# Sentry Endpoints and Scopes Map

This skill supports read-only investigations through documented GET endpoints.

## Command to endpoint map

| Script command | Endpoint | Purpose | Required inputs |
| --- | --- | --- | --- |
| `list-issues` | `/api/0/projects/{org_slug}/{project_slug}/issues/` | List issues for a project, optionally filtered by environment, time, and query | org slug, project slug |
| `issue-detail` | `/api/0/issues/{issue_id}/` | Retrieve details for one issue | issue ID |
| `issue-events` | `/api/0/issues/{issue_id}/events/` | List events associated with one issue | issue ID |
| `event-detail` | `/api/0/projects/{org_slug}/{project_slug}/events/{event_id}/` | Retrieve one project event | org slug, project slug, event ID |

## Provenance expectation

When summarizing results, include:

- org
- project
- environment, if used
- time range
- query string, if used
- requested limit
- the command run
- the endpoint family used

## Notes on access

- Read-only auth is required.
- Some endpoints may succeed while others fail if the token lacks access to a specific org or project.
- Event lookups are project-scoped; an event ID from one project may fail in another.

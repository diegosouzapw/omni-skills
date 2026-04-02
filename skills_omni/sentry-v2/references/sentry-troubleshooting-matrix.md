# Sentry Troubleshooting Matrix

## 401 Unauthorized

**Likely causes:** missing token, expired token, malformed token

**Actions:**
- Verify `SENTRY_AUTH_TOKEN` is set locally.
- Re-export the token without sharing it in chat.
- Retry the same narrow command.

## 403 Forbidden

**Likely causes:** valid token but insufficient scopes or project access

**Actions:**
- Confirm read scopes such as project, event, and org read access.
- Verify the token has access to the target org/project.
- Retry only after permission scope is corrected.

## 404 Not Found

**Likely causes:** wrong base URL, wrong project/org, wrong issue ID or event ID, self-hosted route mismatch

**Actions:**
- Confirm `SENTRY_BASE_URL` for self-hosted deployments.
- Re-check org/project slugs.
- Verify the issue or event belongs to the specified project.

## Empty result set

**Likely causes:** environment mismatch, overly narrow query, wrong time window, retention gap

**Actions:**
- Remove or simplify the query.
- Verify `environment` and time range.
- Re-run with a narrower or broader window as appropriate.

## Missing expected issues

**Likely causes:** low limit, pagination cap, broad query noise

**Actions:**
- Check the chosen limit.
- Tighten the time window.
- Add an explicit search query such as `is:unresolved environment:prod`.

## 429 Too Many Requests

**Likely causes:** rate limiting due to request volume or repeated broad queries

**Actions:**
- Back off before retrying.
- Reduce request frequency.
- Narrow the query or time range.
- Record status, endpoint, and parameters for handoff.

## 5xx or transient failure

**Likely causes:** Sentry-side transient issue or network instability

**Actions:**
- Retry once.
- Preserve the exact command and status code.
- Avoid repeated polling loops.

## Event detail not found for known event ID

**Likely causes:** wrong project, retention expiry, copied ID from another context

**Actions:**
- Verify org/project pairing.
- Confirm the event still exists.
- Re-check the source issue and event list before retrying.

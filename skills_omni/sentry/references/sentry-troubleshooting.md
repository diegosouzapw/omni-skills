# Sentry Troubleshooting

## Problem: 401 Unauthorized or 403 Forbidden

**Symptoms:** Requests fail with auth or permission errors.

**Solution:**
- Confirm `SENTRY_AUTH_TOKEN` is set locally.
- Confirm the token is valid and not expired.
- Confirm the token has the necessary read scopes.
- Confirm the token owner can access the org and project.
- Confirm you are using the correct base URL.

## Problem: Empty results

**Symptoms:** The API succeeds but returns no issues.

**Solution:**
- Confirm org and project slugs.
- Confirm the environment name.
- Widen the time window.
- Remove restrictive query terms.
- Try listing issues with a broader query, then narrow again.

## Problem: Missing expected issues

**Symptoms:** Some known incidents do not appear in the summary.

**Solution:**
- Confirm pagination is being followed.
- Confirm the result limit is high enough.
- Check for rate limiting.
- Confirm the issue belongs to the selected project.

## Problem: Rate limiting

**Symptoms:** Requests slow down, fail intermittently, or return throttling signals.

**Solution:**
- Back off before retrying.
- Avoid tight polling loops.
- Return a partial-result note if coverage is incomplete.

## Problem: Self-hosted mismatch

**Symptoms:** Calls that should work against sentry.io fail in a private deployment.

**Solution:**
- Set `SENTRY_BASE_URL` explicitly.
- Confirm the deployment exposes the expected `/api/0/` paths.
- Do not assume SaaS defaults in self-hosted environments.

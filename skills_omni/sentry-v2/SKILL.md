---
name: "sentry-v2"
description: "Sentry read-only observability workflow skill. Use this skill when you need to inspect Sentry issues or events, summarize recent production errors, or retrieve basic Sentry health data through authenticated read-only API calls using the bundled script and documented support pack."
version: "0.0.1"
category: "cli-automation"
tags:
  - "sentry-v2"
  - "sentry"
  - "observability"
  - "incident-triage"
  - "error-monitoring"
  - "api"
  - "read-only"
  - "production"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/sentry-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Sentry (Read-only Observability)

## Overview

This skill packages a focused, read-only Sentry investigation workflow around the bundled `scripts/sentry_api.py` helper and a local support pack.

Use it to inspect issues and events, summarize recent production failures, and gather reproducible Sentry evidence without mutating Sentry state. The workflow is intentionally narrow: authenticated GET-only API usage, explicit filters, safe output handling, and clear provenance to the exact endpoint(s) used.

This skill preserves the original imported intent while making the execution path more operational for agents: confirm scope, set local auth, run deterministic issue/event queries, summarize only the minimum necessary evidence, and hand off cleanly when the task requires debugging, remediation, or changes outside Sentry.

## When to Use This Skill

Use this skill when:

- The user asks to inspect Sentry issues or events.
- The user wants a summary of recent production errors or unresolved issues.
- You need to drill from an issue into related events using documented Sentry API endpoints.
- You need basic read-only Sentry health information with explicit org, project, environment, and time filters.
- You need reproducible observability evidence with provenance links and safe redaction.

Do **not** use this skill when:

- The task requires mutating Sentry resources such as resolving, muting, assigning, commenting, or changing alert rules.
- The task is primarily application debugging rather than evidence collection from Sentry.
- The user needs incident coordination, remediation planning, or code fixes rather than observability facts.
- Another telemetry source is required because Sentry alone is insufficient.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time setup | `references/sentry-auth-and-env.md` | Establishes local auth, token naming, self-hosted base URL handling, and safe secret practices |
| Recent production errors summary | `examples/recent-prod-errors.md` | Gives a deterministic, read-only triage workflow with filters and safe output |
| Drill into a known issue | `examples/issue-drilldown.md` | Shows short ID lookup, issue detail retrieval, and issue-event inspection |
| Empty or surprising results | `examples/zero-results-diagnosis.md` | Helps distinguish bad filters, wrong project/org, retention gaps, and pagination noise |
| Endpoint provenance review | `references/sentry-endpoints-and-scopes.md` | Maps supported commands to the exact Sentry API endpoints and expected inputs |
| Search/filter design | `references/sentry-search-cheatsheet.md` | Provides reproducible Sentry query syntax for common investigations |
| API/auth/rate-limit failures | `references/sentry-troubleshooting-matrix.md` | Gives concrete recovery actions for 401, 403, 404, 429, 5xx, and zero-result cases |

## Workflow

1. **Confirm the request boundary.**
   Identify the org, project, environment, time range, and whether the user wants issue listing, issue detail, issue events, or event detail.

2. **Verify local authentication and base URL.**
   Require `SENTRY_AUTH_TOKEN` to be set locally. If the deployment is self-hosted, also confirm `SENTRY_BASE_URL`.

3. **Prefer explicit filters before calling the API.**
   Use narrow filters such as environment, time window, and a concrete Sentry search query instead of broad unscoped requests.

4. **Start with issue listing when the target is not yet known.**
   Use `list-issues` to identify candidate issues or resolve a short ID into a numeric issue ID.

5. **Retrieve issue detail if the user needs issue-level context.**
   Use `issue-detail` after you have the numeric issue ID.

6. **Drill into events only when needed.**
   Use `issue-events` to inspect event samples for an issue, then `event-detail` only for the specific event needed to answer the question.

7. **Summarize safely.**
   Return the minimum necessary fields. Do not dump raw event payloads, full stack traces, tokens, emails, or IP addresses unless strictly required and redacted.

8. **Disclose query boundaries in the answer.**
   Include the org, project, environment, time range, query terms, requested limit, and whether the results may be partial due to pagination or capping.

9. **Include provenance.**
   Note the exact command(s) run and the corresponding Sentry API endpoint(s) from `references/sentry-endpoints-and-scopes.md`.

10. **Hand off when Sentry evidence is no longer enough.**
    If the task shifts into debugging, incident management, or cross-system correlation, pass along the Sentry evidence and route to the next appropriate skill or workflow.

### Quick start

If the token is missing, ask the operator to create a read-only Sentry token locally and set it as an environment variable. Never ask them to paste the token into chat.

```bash
export SENTRY_AUTH_TOKEN="<set-locally-not-in-chat>"
export SENTRY_ORG="your-org"
export SENTRY_PROJECT="your-project"
# Optional for self-hosted Sentry:
# export SENTRY_BASE_URL="https://sentry.example.com"
```

Skill path from the imported workflow:

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export SENTRY_API="$CODEX_HOME/skills/sentry/scripts/sentry_api.py"
```

User-scoped skills install under `$CODEX_HOME/skills` by default.

## Examples

### Example 1: List recent unresolved production issues

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

Expected outcome: a recent, ordered issue list suitable for a concise production-error summary.

### Example 2: Resolve a short ID before drilldown

```bash
python3 "$SENTRY_API" \
  list-issues \
  --org "$SENTRY_ORG" \
  --project "$SENTRY_PROJECT" \
  --query "ABC-123" \
  --limit 1
```

Use the returned numeric `id` for follow-up calls.

### Example 3: Retrieve issue detail

```bash
python3 "$SENTRY_API" issue-detail 1234567890
```

Expected outcome: issue-level context such as title, status, timestamps, count, environments, and other summary fields supported by the script output.

### Example 4: Retrieve events for an issue

```bash
python3 "$SENTRY_API" issue-events 1234567890 --limit 20
```

Expected outcome: a bounded event sample for the issue. If the result is noisy, reduce the limit or narrow the time/query earlier in the workflow.

### Example 5: Retrieve one event detail safely

```bash
python3 "$SENTRY_API" \
  event-detail \
  --org "$SENTRY_ORG" \
  --project "$SENTRY_PROJECT" \
  abcdef1234567890
```

Expected outcome: enough event detail to answer a focused observability question without copying the raw payload into chat.

See also:

- [Recent production errors playbook](examples/recent-prod-errors.md)
- [Issue drilldown playbook](examples/issue-drilldown.md)
- [Zero-results diagnosis playbook](examples/zero-results-diagnosis.md)

## Best Practices

### Do

- Use `SENTRY_AUTH_TOKEN` consistently as the local environment variable name.
- Keep the workflow read-only and limited to documented GET endpoints.
- Confirm org, project, environment, time range, and query terms before running calls.
- Start broad enough to locate the issue, then narrow aggressively.
- Prefer official Sentry search syntax such as `is:unresolved`, `environment:prod`, `event.type:error`, and explicit time windows.
- Record the requested limit and whether the output may be partial.
- Summarize evidence instead of pasting raw payloads.
- Redact emails, IPs, tokens, and sensitive stack content.
- Share internal Sentry URLs only when safe for the operator context.
- Include provenance to the exact commands and endpoint docs used.

### Don't

- Do not ask the user to paste secrets or auth tokens into chat.
- Do not perform mutating Sentry operations with this skill.
- Do not assume SaaS; support `SENTRY_BASE_URL` for self-hosted deployments.
- Do not claim “no issues found” without stating the filters and time window used.
- Do not assume the first page is the full picture when limits or pagination apply.
- Do not dump full event JSON, raw stack traces, or unredacted PII unless explicitly required and safely redacted.

### Safe output defaults

For issue lists, prefer:

- title
- short ID
- status
- first seen
- last seen
- event count
- environments
- top tags when available

For event summaries, prefer:

- event ID
- timestamp
- culprit
- environment
- release
- internal Sentry URL if safe to share

If no results are returned, say so explicitly and include the org, project, environment, time range, and query used.

## Troubleshooting

### Problem: 401 Unauthorized

**Symptoms:** API calls fail with 401 or an authentication error.
**Solution:** Verify that `SENTRY_AUTH_TOKEN` is set locally, not expired, and not malformed. Do not paste it into chat. Re-export it locally and retry.

### Problem: 403 Forbidden or incomplete access

**Symptoms:** The token works for some endpoints but not for the requested org or project.
**Solution:** Confirm that the token has the required read scopes and access to the target org/project. A valid token can still lack permission for a specific resource.

### Problem: Self-hosted Sentry returns 404 or unexpected auth failures

**Symptoms:** The same workflow works against SaaS examples but fails in a self-hosted environment.
**Solution:** Verify `SENTRY_BASE_URL` and ensure the script is targeting the correct Sentry host. Re-check org/project slugs and whether the instance exposes the documented endpoint path.

### Problem: No issues or events were returned

**Symptoms:** The call succeeds but the result set is empty.
**Solution:** Check the environment, time range, and query syntax first. Then verify the org/project, retention window, and whether the issue or event belongs to another project. Use the zero-results playbook to narrow the cause systematically.

### Problem: Expected issues seem missing

**Symptoms:** The results are incomplete, noisy, or do not include known recent problems.
**Solution:** Check the requested `--limit`, confirm whether pagination capped the view, and narrow the query or time window. Prefer a smaller time range such as `1h` or `6h` if `24h` is too broad.

### Problem: 429 Too Many Requests

**Symptoms:** Sentry responds with rate-limit errors.
**Solution:** Reduce request volume, narrow the query, and retry after backoff. Record the endpoint, status code, and query parameters used in the handoff notes without exposing secrets.

### Problem: 5xx or transient API failure

**Symptoms:** The API returns intermittent server errors or transport failures.
**Solution:** Retry once if appropriate, then capture the exact command, endpoint, HTTP status, and time of failure for handoff. Avoid repeated broad polling.

### Problem: Event detail lookup fails for a known event ID

**Symptoms:** The event ID appears valid in context, but `event-detail` returns not found.
**Solution:** Verify that the event belongs to the specified project and still exists within retention. Re-check org/project pairing and confirm the ID was not copied from a different project.

See the full matrix in [references/sentry-troubleshooting-matrix.md](references/sentry-troubleshooting-matrix.md).

## Related Skills

Route by task shape rather than generic adjacency:

- Use an application debugging skill when Sentry identifies the failing path but code-level diagnosis is now required.
- Use an incident or operations skill when the work becomes stakeholder coordination, status communication, or remediation tracking.
- Use a logs/traces/telemetry correlation skill when Sentry alone cannot explain the failure.
- Use an API investigation skill when the result depends on combining Sentry evidence with another system of record.

## Additional Resources

### Local support pack

- [Auth and environment setup](references/sentry-auth-and-env.md)
- [Search syntax cheat sheet](references/sentry-search-cheatsheet.md)
- [Endpoints and scopes map](references/sentry-endpoints-and-scopes.md)
- [Troubleshooting matrix](references/sentry-troubleshooting-matrix.md)
- [Recent production errors example](examples/recent-prod-errors.md)
- [Issue drilldown example](examples/issue-drilldown.md)
- [Zero-results diagnosis example](examples/zero-results-diagnosis.md)

### Supported read-only endpoint family

This skill is limited to these documented GET endpoints:

- List issues: `/api/0/projects/{org_slug}/{project_slug}/issues/`
- Issue detail: `/api/0/issues/{issue_id}/`
- Issue events: `/api/0/issues/{issue_id}/events/`
- Event detail: `/api/0/projects/{org_slug}/{project_slug}/events/{event_id}/`

### Official provenance anchors

- Sentry API overview: `https://docs.sentry.io/api/`
- Authentication: `https://docs.sentry.io/api/auth/`
- Pagination: `https://docs.sentry.io/api/pagination/`
- Rate limits: `https://docs.sentry.io/api/ratelimits/`
- Search syntax: `https://docs.sentry.io/product/sentry-basics/search/`
- List a project's issues: `https://docs.sentry.io/api/events/list-a-projects-issues/`
- Retrieve an issue: `https://docs.sentry.io/api/events/retrieve-an-issue/`
- List an issue's events: `https://docs.sentry.io/api/events/list-an-issues-events/`
- Retrieve an event for a project: `https://docs.sentry.io/api/events/retrieve-an-event-for-a-project/`

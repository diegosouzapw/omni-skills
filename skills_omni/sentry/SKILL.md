---
name: "sentry"
description: "Sentry read-only observability workflow skill. Use this skill when a user needs to inspect Sentry issues, review recent production errors, drill into issue or event metadata, or produce a safe reproducible incident summary from the Sentry API without making changes. Requires a local SENTRY_AUTH_TOKEN with least-privilege read scopes. Do not use this skill for SDK setup, alert configuration, issue mutation, or non-Sentry monitoring systems."
version: "0.0.1"
category: "backend"
tags:
  - "sentry"
  - "observability"
  - "incident-triage"
  - "issues"
  - "events"
  - "production"
  - "errors"
  - "api"
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
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/sentry"
upstream_author: "github.com/openai/skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Sentry (Read-only Observability)

## Overview

This skill provides a focused, read-only workflow for investigating Sentry issues and recent production failures through the Sentry API.

Use it to:

- list recent issues for a project
- narrow noisy results with reproducible Sentry search queries
- inspect issue metadata safely
- inspect recent issue events when needed
- retrieve a specific event only when issue-level data is insufficient
- produce a short, redacted incident summary with clear scope, filters, and limitations

This skill preserves the original upstream intent: a deterministic API-first Sentry investigation flow centered on the bundled `scripts/sentry_api.py` helper and official Sentry read-only endpoints.

## When to Use This Skill

Use this skill when the user asks for any of the following:

- “Check Sentry.”
- “What errors are happening in production?”
- “Summarize recent crashes.”
- “Show unresolved Sentry issues for prod.”
- “Look up this Sentry short ID.”
- “Inspect this issue or event from Sentry.”
- “Give me a production error report from Sentry.”

Use this skill when you need to:

- investigate Sentry issues without mutating anything
- confirm whether a release or environment is associated with recent failures
- gather issue counts, recency, environments, and top metadata for handoff
- inspect event metadata carefully while minimizing exposure of sensitive payloads

Do **not** use this skill for:

- setting up a Sentry SDK
- configuring alerts, workflows, ownership, or issue rules
- resolving, muting, assigning, or otherwise changing Sentry issues
- release management or deployment rollback itself
- non-Sentry observability platforms
- broad application debugging when logs, traces, or infrastructure signals are the better next step

If the task moves from read-only inspection into remediation, hand off with the query, time window, environment, issue IDs, event IDs, and release context you collected here.

## Required Inputs

Ask for or confirm these inputs before running the workflow:

- `SENTRY_AUTH_TOKEN` set locally by the user
- `SENTRY_ORG` or explicit org slug
- `SENTRY_PROJECT` or explicit project slug
- target environment, if relevant, such as `prod` or `production`
- time window, such as `24h`, `7d`, or a user-specified scope
- whether the user wants:
  - a summary of recent issues
  - a specific issue drill-down
  - a short ID lookup
  - event inspection

Optional:

- `SENTRY_BASE_URL` for self-hosted Sentry

Compatibility note: some upstream copies mention `SENTRYAUTHTOKEN`. Prefer `SENTRY_AUTH_TOKEN` consistently in operator instructions.

## Operating Table

| Situation | Start here | Output |
| --- | --- | --- |
| Validate token, org, project, and base URL assumptions | `references/sentry-api-endpoints.md` | Safe setup check and endpoint map |
| Summarize recent production issues | `scripts/sentry_api.py` `list-issues` + `references/sentry-query-cheatsheet.md` | Ordered issue summary with query provenance |
| Resolve a short ID like `ABC-123` | `scripts/sentry_api.py` `list-issues --query "ABC-123"` | Matching issue ID for drill-down |
| Inspect one issue in detail | `scripts/sentry_api.py` `issue-detail` | Issue metadata summary |
| Inspect recent events for one issue | `scripts/sentry_api.py` `issue-events` | Recent event list for sampling |
| Inspect one event safely | `scripts/sentry_api.py` `event-detail` | Redacted event metadata summary |
| Produce a handoff-ready incident report | `examples/sentry-production-summary-template.md` | Reusable summary format |
| Diagnose auth, empty results, pagination, or self-hosted problems | `references/sentry-troubleshooting.md` | Recovery guidance |

## Workflow

1. **Confirm the investigation goal**
   - Ask whether the user wants a broad production summary, a specific issue, a short ID lookup, or a specific event.
   - If org, project, environment, or time window are missing, ask instead of guessing.

2. **Confirm safe local authentication**
   - Instruct the user to set `SENTRY_AUTH_TOKEN` locally.
   - Never ask the user to paste the token into chat.
   - Recommend least-privilege read scopes only, typically `org:read`, `project:read`, and `event:read` as needed.

3. **Confirm org, project, and base URL**
   - Default SaaS base URL is `https://sentry.io` unless the user specifies self-hosted Sentry.
   - For self-hosted environments, confirm `SENTRY_BASE_URL` before assuming the SaaS endpoint.

4. **Start with a bounded issue query**
   - Prefer a narrow first pass such as:
     - environment-specific
     - time-bounded
     - unresolved or high-severity focused
   - Example shape: `environment:prod is:unresolved level:error`

5. **List issues before drilling deeper**
   - Use `list-issues` to identify the most relevant issue IDs.
   - Follow pagination until the requested cap is reached or no more results remain.
   - If results are partial because of limits or throttling, say so explicitly.

6. **Refine with reproducible Sentry search syntax**
   - Prefer explicit query filters over vague descriptions.
   - Record the exact query, time window, environment, and result limit used.

7. **Inspect issue detail**
   - For the most relevant issue IDs, fetch issue detail.
   - Summarize metadata such as status, count, first seen, last seen, environments, release, and top tags.

8. **Inspect issue events only if needed**
   - If issue-level data is not enough, list recent events for that issue.
   - Use event retrieval selectively to avoid unnecessary exposure of sensitive context.

9. **Retrieve a specific event only when justified**
   - Fetch one event when the user explicitly asks or when issue metadata is insufficient.
   - Summarize event metadata, not raw payloads, unless the user has a clear need and appropriate approval.

10. **Produce a safe summary**
    - Include:
      - org/project
      - environment
      - time window
      - query used
      - issue count reviewed
      - highest-impact issues
      - notable release or tag correlations
      - whether the result is partial or limited
    - Omit raw secrets, stack traces, request bodies, emails, IPs, cookies, and auth headers by default.

11. **Prepare handoff if remediation is needed**
    - Pass along the issue IDs, event IDs, release, timestamps, query used, and any confidence limits.

## Quick Start

If the user is not ready with authentication, tell them to create a read-only Sentry API token and set it locally as `SENTRY_AUTH_TOKEN`.

Suggested scope guidance:

- `org:read`
- `project:read`
- `event:read`

Do not ask them to paste the token into chat, terminal transcripts, PRs, or saved notes.

Optional defaults:

- `SENTRY_ORG`
- `SENTRY_PROJECT`
- `SENTRY_BASE_URL`

Practical defaults when the user gives no stricter requirement:

- time window: `24h`
- environment: `prod`
- limit: `20`

## Examples

### Example 1: Recent production issue summary

```bash
python3 scripts/sentry_api.py \
  list-issues \
  --org your-org \
  --project your-project \
  --environment prod \
  --time-range 24h \
  --limit 10 \
  --query "is:unresolved level:error"
```

Expected result: a recent, ordered issue list suitable for a production error summary.

### Example 2: Resolve a short ID to a full issue ID

```bash
python3 scripts/sentry_api.py \
  list-issues \
  --org your-org \
  --project your-project \
  --query "ABC-123" \
  --limit 1
```

Expected result: one matching issue record including its numeric issue ID.

### Example 3: Inspect issue detail

```bash
python3 scripts/sentry_api.py \
  issue-detail \
  1234567890
```

Expected result: issue metadata for a safe summary, including recency and impact signals.

### Example 4: Inspect recent events for an issue

```bash
python3 scripts/sentry_api.py \
  issue-events \
  1234567890 \
  --limit 10
```

Expected result: recent events associated with the issue, useful for sampling before deeper inspection.

### Example 5: Inspect a specific event safely

```bash
python3 scripts/sentry_api.py \
  event-detail \
  --org your-org \
  --project your-project \
  abcdef1234567890
```

Expected result: event metadata summary without dumping raw stack traces by default.

### Example 6: Final summary shape

Use the template in [examples/sentry-production-summary-template.md](examples/sentry-production-summary-template.md) so the answer includes query provenance and safety notes.

## Best Practices

### Do

- Start with issue listing before event retrieval.
- Use explicit filters for environment, time range, and status.
- Report the exact query, time window, environment, and limit used.
- Prefer issue metadata over raw event payloads.
- State clearly when no results were found.
- State clearly when results may be partial because of pagination caps, throttling, or narrow filters.
- Use least-privilege read-only token scopes.
- Confirm self-hosted versus SaaS base URL before troubleshooting deeper.
- Redact or omit sensitive fields by default.

### Don’t

- Don’t ask users to paste API tokens into chat.
- Don’t mutate issues or suggest write actions from this skill.
- Don’t dump raw stack traces, request bodies, headers, cookies, emails, IPs, or user text by default.
- Don’t assume `prod` is the correct environment name if the project uses something else.
- Don’t assume empty results mean no incidents; verify filters, project, org, and time window first.
- Don’t present partial data as complete.
- Don’t use broad, heuristic summaries when a reproducible query is available.

### Safe Output Rules

Default output should emphasize:

- issue title
- short ID
- status
- first seen / last seen
- event count
- environments
- release if present
- top tags or notable metadata
- Sentry URL if useful for handoff

Default output should avoid:

- raw stack traces
- request or response bodies
- tokens, cookies, or auth headers
- direct user identifiers unless explicitly required and approved

See [references/sentry-safe-output-checklist.md](references/sentry-safe-output-checklist.md).

## Troubleshooting

### Problem: 401 Unauthorized or 403 Forbidden

**Symptoms:** API calls fail immediately with authentication or permission errors.

**Solution:**
- Confirm `SENTRY_AUTH_TOKEN` is set locally and not empty.
- Confirm the token has the necessary read scopes.
- Confirm the token belongs to a user with access to the target org and project.
- Confirm you are calling the correct base URL for SaaS or self-hosted Sentry.
- Review [references/sentry-troubleshooting.md](references/sentry-troubleshooting.md).

### Problem: No issues returned but production is failing

**Symptoms:** The query returns zero results even though the user expects active incidents.

**Solution:**
- Check whether the environment name is actually `prod`, `production`, or something else.
- Widen the time window.
- Remove overly restrictive query terms.
- Confirm the correct project slug.
- Confirm the org slug.
- Try a broader query before narrowing again.

### Problem: Results look incomplete or stop early

**Symptoms:** The list seems too short, or recent issues appear to be missing.

**Solution:**
- Confirm pagination is being followed until the requested cap is reached.
- Increase the limit carefully.
- Check for API rate limiting.
- If throttled, back off and report that the result may be partial.

### Problem: Self-hosted Sentry calls fail unexpectedly

**Symptoms:** Requests fail even though the token and slugs seem correct.

**Solution:**
- Confirm `SENTRY_BASE_URL` is set correctly.
- Confirm the deployment exposes compatible API paths under `/api/0/`.
- Do not assume `https://sentry.io` for self-hosted instances.

### Problem: The user asked for remediation, not inspection

**Symptoms:** The task shifts toward fixing code, rolling back a release, changing alerts, or updating ownership rules.

**Solution:**
- Stop using this skill as the primary workflow.
- Hand off with the issue IDs, event IDs, release, environment, timestamps, and query provenance collected here.

## Related Skills

Use adjacent skills when the investigation moves beyond read-only Sentry inspection:

- incident response or production triage skills when a coordinated response is needed
- logs or APM skills when Sentry metadata is not enough to explain impact or root cause
- Kubernetes or container skills when failures map to a rollout or cluster incident
- release or deployment investigation skills when issues correlate with a version change
- debugging or code investigation skills when the next step is source-level analysis
- security review skills if the event suggests leaked secrets, auth misuse, or abuse patterns

Recommended handoff package:

- org and project
- environment
- query used
- time window
- issue IDs and short IDs
- event IDs reviewed
- release information
- links or URLs to the relevant Sentry records
- confidence limits or known gaps

## Additional Resources

- [Sentry query cheat sheet](references/sentry-query-cheatsheet.md)
- [Sentry API endpoint map](references/sentry-api-endpoints.md)
- [Sentry safe output checklist](references/sentry-safe-output-checklist.md)
- [Sentry troubleshooting guide](references/sentry-troubleshooting.md)
- [Production summary template](examples/sentry-production-summary-template.md)
- [Query examples](examples/sentry-query-examples.md)
- [Troubleshooting decision tree](examples/sentry-troubleshooting-decision-tree.md)

## Reference Commands

### Skill path helper

```bash
export AGENT_SKILLS_HOME="${AGENT_SKILLS_HOME:-$HOME/.agent-skills}"
export SENTRY_API="$AGENT_SKILLS_HOME/skills/sentry/scripts/sentry_api.py"
```

User-scoped skills install under `$AGENT_SKILLS_HOME/skills` by default.

### Supported read-only endpoints

- List issues: `/api/0/projects/{org_slug}/{project_slug}/issues/`
- Issue detail: `/api/0/issues/{issue_id}/`
- Issue events: `/api/0/issues/{issue_id}/events/`
- Event detail: `/api/0/projects/{org_slug}/{project_slug}/events/{event_id}/`

### Golden test input pattern

- org: `{your-org}`
- project: `{your-project}`
- short ID: `{ABC-123}`

Example prompt: “List the top 10 unresolved production issues from the last 24h.”

Expected result: an ordered summary with titles, short IDs, counts, recency, and the actual query used.

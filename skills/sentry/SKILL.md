---
name: sentry
description: "Sentry (Read-only Observability) workflow skill. Use this skill when the user needs Inspect Sentry issues, summarize production errors, and pull health data via the Sentry API (read-only). Use when user says \"check Sentry\", \"what errors in production?\", \"summarize Sentry issues\", \"recent crashes\", or \"production error report\". Requires SENTRYAUTHTOKEN. Do NOT use for setting up Sentry SDK, configuring alerts, or non-Sentry error monitoring and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["sentry", "inspect", "issues", "summarize", "production", "errors", "and", "pull"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "github.com/openai/skills"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Sentry (Read-only Observability)

## Overview

This public intake copy packages `packages/skills-catalog/skills/(monitoring)/sentry` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Sentry (Read-only Observability)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core tasks (use bundled script), Skill path (set once), API requirements, Inputs and defaults, Golden test inputs.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Inspect Sentry issues, summarize production errors, and pull health data via the Sentry API (read-only). Use when user says "check Sentry", "what errors in production?", "summarize Sentry issues", "recent crashes", or....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Core tasks (use bundled script)

Use `scripts/sentry_api.py` for deterministic API calls. It handles pagination and retries once on transient errors.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @sentry to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/sentry/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/sentry/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @sentry using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick start

- If not already authenticated, ask the user to provide a valid `SENTRY_AUTH_TOKEN` (read-only scopes such as `project:read`, `event:read`) or to log in and create one before running commands.
- Set `SENTRY_AUTH_TOKEN` as an env var.
- Optional defaults: `SENTRY_ORG`, `SENTRY_PROJECT`, `SENTRY_BASE_URL`.
- Defaults: org/project `{your-org}`/`{your-project}`, time range `24h`, environment `prod`, limit 20 (max 50).
- Always call the Sentry API (no heuristics, no caching).

If the token is missing, give the user these steps:

1. Create a Sentry auth token: <https://sentry.io/settings/account/api/auth-tokens/>
2. Create a token with read-only scopes such as `project:read`, `event:read`, and `org:read`.
3. Set `SENTRY_AUTH_TOKEN` as an environment variable in their system.
4. Offer to guide them through setting the environment variable for their OS/shell if needed.

- Never ask the user to paste the full token in chat. Ask them to set it locally and confirm when ready.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Issue list: show title, shortid, status, firstseen, lastseen, count, environments, toptags; order by most recent.
- Event detail: include culprit, timestamp, environment, release, url.
- If no results, state explicitly.
- Redact PII in output (emails, IPs). Do not print raw stack traces.
- Never echo auth tokens.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Output formatting rules

- Issue list: show title, short_id, status, first_seen, last_seen, count, environments, top_tags; order by most recent.
- Event detail: include culprit, timestamp, environment, release, url.
- If no results, state explicitly.
- Redact PII in output (emails, IPs). Do not print raw stack traces.
- Never echo auth tokens.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(monitoring)/sentry`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Skill path (set once)

```bash
export AGENT_SKILLS_HOME="${AGENT_SKILLS_HOME:-$HOME/.agent-skills}"
export SENTRY_API="$AGENT_SKILLS_HOME/skills/sentry/scripts/sentry_api.py"
```

User-scoped skills install under `$AGENT_SKILLS_HOME/skills` (default: `~/.agent-skills/skills`).

### 1) List issues (ordered by most recent)

```bash
python3 "$SENTRY_API" \
  list-issues \
  --org {your-org} \
  --project {your-project} \
  --environment prod \
  --time-range 24h \
  --limit 20 \
  --query "is:unresolved"
```

### 2) Resolve an issue short ID to issue ID

```bash
python3 "$SENTRY_API" \
  list-issues \
  --org {your-org} \
  --project {your-project} \
  --query "ABC-123" \
  --limit 1
```

Use the returned `id` for issue detail or events.

### 3) Issue detail

```bash
python3 "$SENTRY_API" \
  issue-detail \
  1234567890
```

### 4) Issue events

```bash
python3 "$SENTRY_API" \
  issue-events \
  1234567890 \
  --limit 20
```

### 5) Event detail (no stack traces by default)

```bash
python3 "$SENTRY_API" \
  event-detail \
  --org {your-org} \
  --project {your-project} \
  abcdef1234567890
```

#### Imported: API requirements

Always use these endpoints (GET only):

- List issues: `/api/0/projects/{org_slug}/{project_slug}/issues/`
- Issue detail: `/api/0/issues/{issue_id}/`
- Events for issue: `/api/0/issues/{issue_id}/events/`
- Event detail: `/api/0/projects/{org_slug}/{project_slug}/events/{event_id}/`

#### Imported: Inputs and defaults

- `org_slug`, `project_slug`: default to `{your-org}`/`{your-project}` (avoid non-prod orgs).
- `time_range`: default `24h` (pass as `statsPeriod`).
- `environment`: default `prod`.
- `limit`: default 20, max 50 (paginate until limit reached).
- `search_query`: optional `query` parameter.
- `issue_short_id`: resolve via list-issues query first.

#### Imported: Golden test inputs

- Org: `{your-org}`
- Project: `{your-project}`
- Issue short ID: `{ABC-123}`

Example prompt: “List the top 10 open issues for prod in the last 24h.”
Expected: ordered list with titles, short IDs, counts, last seen.

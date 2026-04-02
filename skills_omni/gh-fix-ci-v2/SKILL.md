---
name: "gh-fix-ci-v2"
description: "GitHub PR checks triage and fix-planning workflow. Use this skill when a user needs to inspect failing or blocked GitHub PR checks, gather GitHub Actions evidence with gh, summarize the failure clearly, draft a fix plan, and only implement changes after explicit approval. Treat external CI providers as out of scope except for reporting their details URL."
version: "0.0.1"
category: "devops"
tags:
  - "gh-fix-ci-v2"
  - "github-actions"
  - "pull-request"
  - "ci"
  - "gh"
  - "triage"
  - "checks"
  - "workflow"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "gh"
  - "git"
  - "python"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/gh-fix-ci-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Gh Pr Checks Plan Fix

## Overview

Use this skill to triage failing or blocked GitHub pull request checks, especially checks backed by GitHub Actions. The workflow is evidence-first:

1. verify `gh` access for the target host and repository
2. identify the PR and enumerate checks
3. classify each failing or blocking check
4. gather logs, run metadata, and artifact clues for GitHub Actions runs
5. summarize what failed and why it likely failed
6. propose a fix plan
7. implement only after explicit user approval
8. recheck status after changes

This skill is intentionally narrow. It is for PR-check diagnosis and approval-gated fixing, not for broad release debugging or unsupported external CI systems.

The packaged support files are meant to make the workflow executable by an agent, not just readable:

- command reference: `references/gh-actions-pr-checks-command-reference.md`
- troubleshooting matrix: `references/gh-actions-pr-checks-troubleshooting-matrix.md`
- required-checks guide: `references/gh-actions-required-checks-guide.md`
- security notes: `references/gh-actions-security-and-permissions-notes.md`
- example approval packet: `examples/failure-summary-and-fix-plan.md`
- external-check boundary example: `examples/external-check-out-of-scope-response.md`
- routing note: `agents/ci-triage-router.md`

## When to Use This Skill

Use this skill when:

- a PR is blocked by failing GitHub checks and the user wants the failure analyzed before code changes are made
- the failing checks are visible in GitHub and at least some of them are GitHub Actions runs
- the user wants a concise failure summary, provenance links, and a proposed fix plan
- the user may want implementation later, but only after reviewing the diagnosis and approving a plan
- required checks are missing, stale, skipped, or unexpectedly pending and you need to separate those states from a true test/build failure

Do not use this skill when:

- the only failing checks are from external providers such as Buildkite, CircleCI, or another non-GitHub Actions system; in that case report the `detailsUrl` and state the boundary
- the task is general workflow authoring without a concrete PR-check failure to investigate
- the task is broad deployment, release, or incident debugging unrelated to a PR
- the user explicitly wants immediate code changes with no inspection or approval gate

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need a safe first pass | `references/gh-actions-pr-checks-command-reference.md` | Gives read-only `gh` commands and fallback patterns |
| Required check is missing, stale, or skipped | `references/gh-actions-required-checks-guide.md` | Helps distinguish branch protection or trigger issues from real failures |
| Failure looks permission- or fork-related | `references/gh-actions-security-and-permissions-notes.md` | Keeps diagnosis aligned with least privilege and platform constraints |
| You need fast symptom-to-action mapping | `references/gh-actions-pr-checks-troubleshooting-matrix.md` | Maps common CI symptoms to evidence and next safe actions |
| You need to prepare a user-facing packet | `examples/failure-summary-and-fix-plan.md` | Shows the expected summary and approval gate |
| A failing check is external | `examples/external-check-out-of-scope-response.md` | Keeps scope tight and handoff clean |
| The task drifts beyond PR-check triage | `agents/ci-triage-router.md` | Routes to a more specialized follow-on skill |

## Inputs

Expected inputs:

- repository path, usually `.`
- PR number, PR URL, or current branch associated with an open PR
- working `gh` authentication for the repository host

Helpful optional context:

- whether the user wants inspection only or also wants implementation after approval
- whether the repo uses GitHub Enterprise Server or `github.com`
- whether the PR comes from a fork

## Workflow

### 1. Verify authentication and host context

Run a read-only authentication check first.

```bash
gh auth status
```

If the repository uses a non-default host, make sure `gh` is authenticated for that host.

If access is missing:

- stop before inspection or write operations
- ask the user to authenticate with the minimum required access
- prefer `gh auth login` or an existing secure session
- do not ask the user to paste long-lived tokens into chat

### 2. Resolve the PR

Prefer the current branch PR when the user did not specify one.

```bash
gh pr view --json number,url,title,headRefName,headRepositoryOwner
```

If the user supplied a PR number or URL, use that directly.

Record at least:

- PR number
- PR URL
- branch or head ref

### 3. Enumerate checks and classify their state

Start with PR checks.

```bash
gh pr checks <pr>
```

If structured output is useful, request JSON fields conservatively.

```bash
gh pr checks <pr> --json name,state,link,startedAt,completedAt,workflow
```

If `gh` rejects a field, rerun with only the supported fields shown by the CLI. Do not assume field stability across versions.

For each relevant check, classify it as one of:

- failed
- pending or in progress
- skipped
- cancelled
- missing but required
- external provider

Do not collapse all blocked PR states into "failing CI."

### 4. Separate GitHub Actions checks from external checks

If a check links to a GitHub Actions run, continue with run inspection.

If the check points to an external provider:

- mark it out of scope
- report the exact `detailsUrl` or equivalent link
- do not invent provider-specific debugging steps

### 5. Gather GitHub Actions evidence

Preferred path: use the bundled script.

```bash
python "<path-to-skill>/scripts/inspect_pr_checks.py" --repo "." --pr "<number-or-url>"
```

Use `--json` when you want machine-friendly output.

```bash
python "<path-to-skill>/scripts/inspect_pr_checks.py" --repo "." --pr "<number-or-url>" --json
```

Manual fallback:

1. identify the run id from the GitHub Actions URL
2. inspect run metadata
3. inspect logs
4. if needed, inspect job logs directly

Examples:

```bash
gh run view <run_id> --json name,workflowName,conclusion,status,url,event,headBranch,headSha
```

```bash
gh run view <run_id> --log
```

If the run is still in progress or logs are incomplete, say so explicitly. Avoid premature root-cause claims.

If you know a failing job id and need raw logs:

```bash
gh api "/repos/<owner>/<repo>/actions/jobs/<job_id>/logs" > job-<job_id>.log
```

Only write logs to a narrow local file. Do not overwrite project files casually.

### 6. Inspect adjacent evidence when logs are weak

When logs are not enough, look for:

- job annotations
- step summaries
- artifact references
- matrix labels
- event type and branch context
- permission-denied text such as `Resource not accessible by integration`

If the run emitted artifacts and they are clearly relevant, mention that artifacts may contain the missing failure detail. Do not claim artifact contents you have not inspected.

### 7. Summarize the failure packet for the user

For each blocking check, report:

- check name
- state
- workflow name if available
- job name or matrix leg if available
- run URL or details URL
- short failure snippet or explicit note that logs were missing/incomplete
- likely cause category
- confidence level and any uncertainty

Then provide a concise overall summary:

- what is definitely failing
- what is only suspected
- what is missing or external

### 8. Draft a fix plan and request approval

Before editing code or workflows, propose a narrow plan.

The plan should include:

1. suspected root cause
2. smallest safe change to test that hypothesis
3. files likely to change
4. verification steps
5. any risks, especially around workflow permissions, secrets, or branch protection

If a planning skill is available, use it. Otherwise draft the plan inline.

### 9. Implement only after explicit approval

After approval:

- make the smallest changes that address the approved hypothesis
- avoid bundling unrelated cleanup
- keep workflow permission changes minimal and justified
- summarize modified files and why they changed

### 10. Recheck status after implementation

After changes:

- run the relevant local verification where practical
- ask whether to push or open a PR if that is not already authorized
- suggest re-running or waiting for the relevant checks
- use `gh pr checks <pr>` again to confirm the updated state

Do not rerun jobs blindly before capturing the original evidence unless the user explicitly prefers that approach.

## Outputs

A good result from this skill should contain:

- the PR identifier and relevant run links
- a list of failing, missing, stale, skipped, or external checks
- one or more concise failure snippets with provenance
- a root-cause hypothesis with uncertainty called out
- an approval-gated fix plan
- post-change verification notes if implementation was approved

## Examples

### Example 1: Inspect a PR and prepare a plan-only response

```bash
python "<path-to-skill>/scripts/inspect_pr_checks.py" --repo "." --pr "123" --json
```

Expected outcome:

- identify failing GitHub Actions checks
- produce run URLs and failure snippets
- summarize likely causes
- stop at a proposed plan until the user approves changes

### Example 2: Manual inspection of checks for the current branch PR

```bash
gh pr view --json number,url,title
```

```bash
gh pr checks <pr> --json name,state,link,startedAt,completedAt,workflow
```

Expected outcome:

- determine whether the PR is blocked by failed checks, missing required checks, or external checks
- identify which checks need deeper run inspection

### Example 3: External provider check is present

User-facing response shape:

```text
I found a blocking check that is not a GitHub Actions run.

- Check: buildkite / unit-tests
- State: failing
- Details URL: https://example.invalid/buildkite/run/123

This skill treats external CI providers as out of scope. I can continue with GitHub-hosted checks, but for this check the next step is to inspect that provider directly.
```

### Example 4: Approval-gated summary packet

See `examples/failure-summary-and-fix-plan.md` for a full example packet with:

- evidence
- hypothesis
- proposed changes
- verification plan
- approval checkpoint

## Best Practices

### Do

- verify `gh auth status` before assuming repository access
- prefer read-only inspection first
- distinguish failed checks from missing, stale, skipped, or pending required checks
- summarize exact workflow, job, matrix leg, event, branch, and SHA when available
- call out uncertainty when logs are incomplete or the run is still in progress
- keep external-provider checks explicitly out of scope except for reporting their link
- ask for approval before changing code, workflows, permissions, or rerunning jobs for diagnosis
- keep permission changes least-privilege and explain why they are needed
- preserve provenance by including run URLs, PR URLs, and exact check names

### Do not

- treat every blocked merge as a failing test run
- invent fields, logs, artifacts, or provider behavior you did not inspect
- ask users to paste secrets or long-lived tokens into chat
- broaden `GITHUB_TOKEN` or secret access as a casual first fix
- bypass fork or secret restrictions without explicit review
- modify workflows, rerun jobs, or push fixes before the user approves the plan unless the request already authorizes implementation
- conflate external CI failures with GitHub Actions failures

## Troubleshooting

### Problem: `gh auth status` succeeds, but the repo or PR still cannot be inspected

**Symptoms:** `gh` is logged in, but `gh pr view` or `gh pr checks` returns permission errors, not found errors, or targets the wrong host.

**Solution:** Confirm the repository remote and host, especially for GitHub Enterprise. Re-authenticate for the correct host if needed. Ask for the minimum repo access required. Do not continue with guessed repository context.

### Problem: A required check is missing, skipped, or stale rather than failed

**Symptoms:** The PR is blocked, but there is no fresh failed Actions run. A required check name may be absent, skipped, still pending, or mismatched with branch protection.

**Solution:** Treat this as a required-status-checks problem, not a normal failure. Inspect workflow triggers, path or branch filters, renamed checks, and whether the latest commit actually triggered the expected workflow. Use `references/gh-actions-required-checks-guide.md`.

### Problem: The run is still in progress or the logs are incomplete

**Symptoms:** `gh run view --log` is partial, a job is still running, or the failure text is not yet present.

**Solution:** Record current status and run URL, avoid firm root-cause claims, and revisit when the run completes. If appropriate, inspect job-level logs directly. Report the evidence gap explicitly.

### Problem: No actionable failure appears in the main logs

**Symptoms:** The run failed, but the available logs are thin or generic.

**Solution:** Look for annotations, step summaries, matrix-specific job output, and artifacts. If more evidence is required, suggest a deliberate rerun or debug logging only after approval.

### Problem: The failure says `Resource not accessible by integration` or another permission error

**Symptoms:** Workflow steps fail when reading PR metadata, uploading results, writing comments, accessing packages, or touching protected resources.

**Solution:** Suspect token-permission or event-context limits. Check whether the workflow is running on a fork PR or under a restricted event. Recommend the smallest justified permission fix only after review. Use `references/gh-actions-security-and-permissions-notes.md`.

### Problem: The PR comes from a fork and secrets or protected resources are unavailable

**Symptoms:** Secret-dependent jobs fail or are skipped only for fork-based PRs.

**Solution:** Frame this as an expected platform/security constraint. Report the limitation clearly and avoid suggesting unsafe secret exposure or trust bypasses.

### Problem: Only one matrix leg fails

**Symptoms:** Most matrix jobs pass, but one OS, version, or environment combination fails.

**Solution:** Report the exact matrix values and compare what is unique about that leg. Keep the proposed fix scoped to the differing environment unless broader evidence suggests otherwise.

### Problem: A job ran unexpectedly or was skipped unexpectedly

**Symptoms:** The workflow behavior does not match the PR event, branch, or expected conditional logic.

**Solution:** Check event type, branch/ref, contexts, and `if` expressions. Treat this as a workflow-condition diagnosis, not automatically a test failure.

## Related Skills

Use a follow-on specialization when triage shows the issue is primarily about:

- workflow authoring or trigger design
- test-failure debugging inside the application codebase
- Docker or image-build failures
- Kubernetes deployment validation
- security scan triage or dependency policy failures
- formal plan drafting when the user wants a broader implementation proposal

See `agents/ci-triage-router.md` for handoff guidance.

## Additional Resources

### Support pack quick map

- First inspection commands: `references/gh-actions-pr-checks-command-reference.md`
- Symptom triage: `references/gh-actions-pr-checks-troubleshooting-matrix.md`
- Missing or stale required checks: `references/gh-actions-required-checks-guide.md`
- Permissions and fork constraints: `references/gh-actions-security-and-permissions-notes.md`
- User-facing summary packet: `examples/failure-summary-and-fix-plan.md`
- External-provider boundary response: `examples/external-check-out-of-scope-response.md`
- Handoff guidance: `agents/ci-triage-router.md`

### Local files

- [Command reference](references/gh-actions-pr-checks-command-reference.md)
- [Troubleshooting matrix](references/gh-actions-pr-checks-troubleshooting-matrix.md)
- [Required checks guide](references/gh-actions-required-checks-guide.md)
- [Security and permissions notes](references/gh-actions-security-and-permissions-notes.md)
- [Failure summary and fix plan example](examples/failure-summary-and-fix-plan.md)
- [External check out-of-scope example](examples/external-check-out-of-scope-response.md)
- [CI triage router](agents/ci-triage-router.md)

### Bundled script

`inspect_pr_checks.py` remains the preferred helper for collecting failing-check evidence, GitHub Actions metadata, and failure snippets in a repeatable way.

Example usage:

```bash
python "<path-to-skill>/scripts/inspect_pr_checks.py" --repo "." --pr "123"
```

```bash
python "<path-to-skill>/scripts/inspect_pr_checks.py" --repo "." --pr "https://github.com/org/repo/pull/123" --json
```

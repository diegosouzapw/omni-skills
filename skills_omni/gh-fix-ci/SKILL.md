---
name: "gh-fix-ci"
description: "GitHub PR checks triage-and-fix workflow skill. Use this skill when a user needs to diagnose or fix failing pull request checks that run in GitHub Actions. Use gh to inspect PR checks, workflow runs, jobs, attempts, logs, and artifacts; summarize evidence; draft a fix plan; and implement only after explicit approval. Treat external status providers as out of scope and report only the details URL. Do not use this skill for PR review comments or for non-GitHub-Actions CI systems."
version: "0.0.1"
category: "devops"
tags:
  - "gh-fix-ci"
  - "github-actions"
  - "pull-request"
  - "checks"
  - "ci"
  - "debugging"
  - "gh"
  - "workflow-runs"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "gh"
  - "git"
  - "python3"
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/gh-fix-ci"
upstream_author: "github.com/openai/skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Gh Pr Checks Plan Fix

## Overview

Use this skill to diagnose failing GitHub pull request checks that are backed by **GitHub Actions**, produce a concise evidence-based summary, propose a fix plan, and implement changes **only after the user explicitly approves the plan**.

This skill is intentionally narrow:

- In scope: GitHub PR checks, GitHub Actions workflow runs, jobs, attempts, logs, artifacts, trigger/configuration issues, and safe verification after a fix.
- Out of scope: PR review comment resolution, repository-wide CI redesign, and external CI providers such as Buildkite, CircleCI, or other non-GitHub check systems.

Prefer the bundled script and references in this skill so the investigation is consistent, auditable, and easy to hand off.

## When to Use This Skill

Use this skill when:

- A PR has one or more **failing GitHub Actions checks** and the user wants a diagnosis before changing code.
- A PR check is **pending, missing, skipped, or blocked**, and the user needs help determining whether the issue is workflow configuration, permissions, filters, approvals, or an actual test/build failure.
- The user wants a **plan-first workflow**: inspect checks, gather evidence, summarize likely root cause, propose a fix, wait for approval, then implement.
- A PR from a **fork** behaves differently because secrets, token permissions, or event behavior may differ.
- The user needs a concise handoff packet with the **check name, run URL, job, attempt, failure snippet, and proposed remediation**.

Do **not** use this skill when:

- The request is about **addressing PR review comments**. Use `gh-address-comments` instead.
- The failing check belongs to an **external provider** rather than GitHub Actions. Record the details URL and hand off.
- The task has expanded into a **broad workflow refactor**, release orchestration, or general CI platform migration.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-pass PR triage | `scripts/inspect_pr_checks.py` | Fastest way to separate GitHub Actions failures from external checks and collect evidence |
| Manual diagnosis | `references/pr-checks-triage-workflow.md` | Step-by-step playbook for gh-based inspection and safe fallbacks |
| Missing, skipped, or blocked checks | `references/troubleshooting-matrix.md` | Covers filters, event mismatch, forks, approvals, auth, and missing logs |
| Root-cause classification | `references/github-actions-failure-taxonomy.md` | Helps produce a sharper summary and fix plan |
| User-facing summary or approval gate | `examples/triage-summary-example.md` | Shows the expected evidence packet and plan-before-change output |
| Task routing or scope drift | `agents/router.md` | Helps hand off to adjacent skills without losing context |

## Workflow

1. **Confirm scope and approval boundary**
   - Verify the failing check is on a GitHub pull request.
   - State up front that you will inspect checks and prepare a fix plan first.
   - Do **not** change files, rerun workflows, or push commits until the user approves.

2. **Verify GitHub CLI authentication**
   - Run:
     ```bash
     gh auth status
     ```
   - If authentication is missing or wrong for the target host/repo, ask the user to authenticate with `gh auth login` or their existing secure setup.
   - Do not ask the user to paste tokens or secrets into chat.

3. **Resolve the target PR**
   - If the user provided a PR number or URL, use it.
   - Otherwise, in the repository root, resolve the PR for the current branch:
     ```bash
     gh pr view --json number,url,headRefName,headRepositoryOwner,baseRefName
     ```

4. **Enumerate checks and separate Actions from non-Actions**
   - Preferred path:
     ```bash
     python3 scripts/inspect_pr_checks.py --repo . --pr <number-or-url>
     ```
   - JSON output when you need structured evidence:
     ```bash
     python3 scripts/inspect_pr_checks.py --repo . --pr <number-or-url> --json
     ```
   - Manual fallback:
     ```bash
     gh pr checks <pr> --json name,state,link,bucket,startedAt,completedAt,workflow
     ```
   - Classify each check as one of:
     - failing GitHub Actions run
     - pending/queued/in-progress GitHub Actions run
     - skipped/missing GitHub Actions workflow
     - external status check

5. **Inspect the exact failing run, job, and attempt**
   - For a GitHub Actions check, identify the run URL or run id.
   - Inspect run metadata:
     ```bash
     gh run view <run-id> --json name,workflowName,conclusion,status,url,event,headBranch,headSha
     ```
   - Fetch logs:
     ```bash
     gh run view <run-id> --log
     ```
   - If reruns occurred or the failure appears flaky, inspect the relevant attempt where supported by your local gh version.
   - If job-level detail is required, inspect the failing job specifically.
   - If logs are incomplete or unavailable, note that uncertainty explicitly instead of guessing.

6. **Capture a minimal evidence packet**
   Record at least:

   - PR number and URL
   - head SHA
   - failing check name
   - workflow/run URL
   - failing job name if known
   - run status/conclusion
   - event type
   - attempt information if relevant
   - first actionable non-secret log snippet
   - whether the issue appears reproducible locally
   - whether the check is external, blocked, skipped, or missing rather than failed

   Use `references/pr-checks-triage-workflow.md` and `references/github-actions-failure-taxonomy.md` to keep the summary consistent.

7. **Form a root-cause hypothesis**
   Common buckets include:

   - test or lint regression
   - dependency or cache issue
   - workflow syntax/configuration bug
   - permission or token scope problem
   - fork/secrets restriction
   - branch/path filter mismatch
   - environment approval or concurrency block
   - flaky network or infrastructure issue
   - external provider status check

8. **Draft the fix plan and ask for approval**
   - Summarize evidence first.
   - Then propose the smallest safe fix.
   - Include expected file changes, local validation steps, and how you will verify the PR checks after the change.
   - If the evidence is inconclusive, say so and propose the smallest next diagnostic step.

9. **Implement only after approval**
   - Make the narrow approved changes.
   - Avoid unrelated cleanup.
   - Prefer reversible edits and preserve workflow least-privilege behavior.

10. **Validate and re-check**
    - Run the smallest relevant local validation first.
    - If the user approves rerunning checks and permissions allow it, rerun the relevant failed jobs or workflow.
    - Re-check status with:
      ```bash
      gh pr checks <pr>
      ```
    - Report final evidence: changed files, local validation, rerun result or current check status, and any remaining risk.

## Best Practices

### Do

- Verify `gh` authentication before investigating logs.
- Keep the workflow **plan-first** and require explicit approval before editing code or workflows.
- Distinguish clearly between **GitHub Actions** checks and **external status checks**.
- Summarize only the **first actionable log snippet**, not entire logs.
- Treat missing logs, expired logs, and permission failures as uncertainty to be reported, not hidden.
- Inspect the exact **run, job, and attempt** when reruns or flaky behavior are involved.
- Consider fork-specific behavior: secrets, `GITHUB_TOKEN` permissions, and event differences can change PR outcomes.
- Prefer the smallest remediation that fixes the failing check without broadening permissions unnecessarily.

### Don't

- Do not paste or request secrets, tokens, or large sensitive logs in chat.
- Do not debug external providers as if they were GitHub Actions.
- Do not rerun workflows, cancel runs, or push fixes without explicit user approval.
- Do not assume a missing check means failure; it may be filtered, skipped, blocked, or awaiting approval.
- Do not overclaim root cause when logs are incomplete, in-progress, or unavailable.
- Do not widen workflow permissions casually to make failures disappear.

## Troubleshooting

### Problem: `gh` cannot view checks or logs

**Symptoms:** `gh pr checks` or `gh run view` returns auth errors, 403s, empty results, or repo access failures.
**Solution:** Re-run `gh auth status`, confirm the correct host/account is active, and ask the user to authenticate through `gh auth login` or their existing secure environment. State that read access to the target repository and workflow runs is required. Do not ask for raw tokens in chat.

### Problem: The failing PR check is external, not GitHub Actions

**Symptoms:** The check has a details URL but does not correspond to a GitHub Actions workflow run.
**Solution:** Mark it as an external status check, report the check name and details URL, and stop GitHub Actions debugging there. Hand off to the provider-specific workflow or team.

### Problem: A check is pending, queued, or waiting rather than failed

**Symptoms:** The PR shows a required check stuck in pending state, or a run exists but is not progressing.
**Solution:** Check whether the run is awaiting environment approval, affected by concurrency cancellation, or simply still in progress. Report the state accurately instead of treating it as a test failure.

### Problem: Expected checks never appeared

**Symptoms:** The PR is missing a workflow or required check entirely.
**Solution:** Inspect workflow triggers, branch filters, path filters, and `if:` conditions. Confirm the triggering event matches the workflow design. On forks, check whether the event type or permission model changes behavior.

### Problem: Logs are missing or incomplete

**Symptoms:** `gh run view --log` returns little or no useful output, or the run is still active.
**Solution:** Check whether the run is still in progress, whether you are looking at the correct attempt, and whether job-level logs or artifacts provide better evidence. If logs are unavailable due to retention or permissions, state that explicitly in the summary.

### Problem: A forked PR fails because secrets or permissions differ

**Symptoms:** The same workflow passes on branches in the main repo but fails or skips steps on a forked PR.
**Solution:** Verify whether the workflow depends on secrets, write permissions, or event-specific behavior. Explain that fork PRs may run with reduced token permissions or without secrets, and propose a fix that preserves security.

### Problem: The failure may be flaky

**Symptoms:** A rerun passes, or the failing logs point to transient dependency, network, or cache behavior.
**Solution:** Classify it as a likely flaky or infrastructure-related issue unless there is stronger evidence. Suggest the smallest safe validation or rerun strategy, and avoid claiming a deterministic code fix without support.

## Examples

### Example 1: Triage a failing PR check and prepare a plan

```bash
python3 scripts/inspect_pr_checks.py --repo . --pr 123 --json
```

Then summarize the result using the evidence packet in `examples/triage-summary-example.md` before proposing any code change.

### Example 2: Manual fallback for a failing Actions run

```bash
gh pr checks 123 --json name,state,link,bucket,startedAt,completedAt,workflow
gh run view 987654321 --json name,workflowName,conclusion,status,url,event,headBranch,headSha
gh run view 987654321 --log
```

Use this when the script is unavailable or you need to inspect a specific run manually.

### Example 3: Missing checks caused by workflow filters

See `examples/missing-checks-filter-mismatch.md` for a worked example where a PR did not trigger the expected workflow because branch or path filters excluded the change.

### Example 4: Fork permission mismatch

See `examples/fork-permissions-case.md` for a worked example where a workflow behaves differently on a PR from a fork because secrets and token permissions differ.

## Related Skills

- `@create-plan` - Use when you need a more formal implementation plan after triage.
- `@gh-address-comments` - Use for PR review comment resolution, not CI failures.
- GitHub Actions workflow authoring/debugging skills - Use when the task becomes a broader workflow redesign.
- Test or lint debugging skills - Use when the CI diagnosis reduces to a normal code/test failure investigation.
- Security or permissions review skills - Use when the likely root cause is token scope, secret exposure risk, or workflow privilege design.

## Additional Resources

- [PR checks triage workflow](references/pr-checks-triage-workflow.md)
- [Troubleshooting matrix](references/troubleshooting-matrix.md)
- [GitHub Actions failure taxonomy](references/github-actions-failure-taxonomy.md)
- [Triage summary example](examples/triage-summary-example.md)
- [Fork permissions case](examples/fork-permissions-case.md)
- [Missing checks filter mismatch case](examples/missing-checks-filter-mismatch.md)
- [Task router](agents/router.md)
- `scripts/inspect_pr_checks.py` - Bundled helper for collecting failing-check evidence from a PR

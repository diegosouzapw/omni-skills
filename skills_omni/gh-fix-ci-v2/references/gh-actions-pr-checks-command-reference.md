# GitHub Actions PR Checks Command Reference

Use these commands for read-only PR-check triage before proposing fixes.

## 1. Verify authentication

```bash
gh auth status
```

Notes:

- confirm the correct host, especially on GitHub Enterprise
- if access is missing, stop and ask the user to authenticate securely

## 2. Resolve the current branch PR

```bash
gh pr view --json number,url,title,headRefName,headRepositoryOwner
```

If the user gives a PR number or URL, use it directly instead.

## 3. List checks

Human-readable:

```bash
gh pr checks <pr>
```

Structured output:

```bash
gh pr checks <pr> --json name,state,link,startedAt,completedAt,workflow
```

Field drift note:

- `gh` JSON fields can vary by version
- if a field is rejected, rerun with the supported fields shown by `gh`
- prefer a narrower successful query over repeated failing field guesses

## 4. Inspect an Actions run

```bash
gh run view <run_id> --json name,workflowName,conclusion,status,url,event,headBranch,headSha
```

```bash
gh run view <run_id> --log
```

Useful things to extract:

- workflow name
- run URL
- conclusion and status
- event type
- branch and SHA
- the first actionable error snippet

## 5. Fetch job logs directly when needed

```bash
gh api "/repos/<owner>/<repo>/actions/jobs/<job_id>/logs" > job-<job_id>.log
```

Guidance:

- only write to a narrow local file
- do not overwrite repository files casually
- if the job is still running, logs may still be incomplete

## 6. Suggested evidence fields for summaries

For each blocking check, try to capture:

- PR number and URL
- check name
- state
- details URL or run URL
- workflow name
- job name
- matrix label or unique environment dimension
- event
- branch
- SHA
- concise error snippet
- whether logs were complete, partial, or missing

## 7. Safe operating rules

- inspect first, edit later
- do not rerun jobs before preserving original evidence unless the user explicitly wants that
- do not request pasted tokens or secrets
- do not diagnose external CI providers beyond reporting their URL

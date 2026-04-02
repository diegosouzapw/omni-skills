# Example: Triage comments on the open PR

## Goal

Produce a numbered list of actionable PR comments, ask the user which ones to address, then summarize the approved follow-up.

## Session sketch

```text
User: Please help address comments on the open PR for my current branch.

Agent: I’ll first verify GitHub CLI auth and confirm which PR is attached to the current branch.
```

```bash
gh auth status
git branch --show-current
gh pr view --json number,title,url,headRefName,baseRefName
bash scripts/list_pr_comment_targets.sh
```

Example triage output:

```text
PR #456 - Add retry-safe webhook processing
[1] review_thread unresolved | reviewer=alice | path=internal/webhook/retry.go
    Add jitter to backoff to avoid synchronized retries.
[2] review_comment | reviewer=bob | path=internal/webhook/retry_test.go
    Add a test for max-attempt exhaustion.
[3] issue_comment | reviewer=carol
    Clarify whether the migration is backward compatible.
```

Example user confirmation prompt:

```text
I found 3 actionable items. Which numbered items should I address? I can handle all 3, or only the subset you choose.
```

Example closeout summary:

```text
Addressed items 1 and 2.
- Updated internal/webhook/retry.go to add jittered exponential backoff.
- Added max-attempt coverage in internal/webhook/retry_test.go.
- Item 3 is not a code change; it needs clarification in the PR description.
- Checks run: go test ./...
```

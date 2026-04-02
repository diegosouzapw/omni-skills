# gh-address-comments-v2 Workflow Reference

This reference expands the main skill workflow into a compact operating checklist.

## Preflight

1. Confirm the user wants help with comments on the open PR for the current branch.
2. Run:
   ```bash
   gh auth status
   ```
3. Confirm the current branch:
   ```bash
   git branch --show-current
   ```
4. Confirm the current repository:
   ```bash
   gh repo view --json nameWithOwner,url
   ```
5. Resolve the current branch to its PR:
   ```bash
   gh pr view --json number,title,url,headRefName,baseRefName
   ```

## Comment retrieval model

Use separate retrieval paths as needed:

- **Issue comments**: top-level PR discussion comments
- **Review comments**: line-level comments on the diff
- **Review threads**: useful when unresolved thread state matters

The helper script in `scripts/list_pr_comment_targets.sh` is a wrapper around this model. If the script output looks incomplete, run the raw queries from `examples/gh-api-comment-queries.md`.

## Triage pattern

Create a numbered list like:

1. comment type
2. author
3. path or scope
4. short summary of required action
5. uncertainty or clarification risk

Then ask the user which items to address.

## Implementation guidance

After the user chooses items:

1. edit only the relevant files
2. run focused validation where feasible
3. inspect `git status --short` and `git diff --stat`
4. summarize which numbered items were addressed
5. draft or post a PR update only with user approval

## Closeout checklist

Before handoff or merge, provide:

- PR number and URL
- addressed item numbers
- files changed
- checks run
- unresolved reviewer questions
- any comments that still need human judgment

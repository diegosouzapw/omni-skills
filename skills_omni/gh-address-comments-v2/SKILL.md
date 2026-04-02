---
name: "gh-address-comments-v2"
description: "PR Comment Handler workflow skill. Use this skill when the user needs help triage and address review or issue comments on the open GitHub PR for the current branch with gh CLI, starting with gh authentication checks, structured comment retrieval, user-approved scope selection, and clear PR follow-up before handoff or merge."
version: "0.0.1"
category: "cli-automation"
tags:
  - "gh-address-comments-v2"
  - "github"
  - "gh"
  - "pull-request"
  - "review-comments"
  - "issue-comments"
  - "triage"
  - "pr-review"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "gh"
  - "git"
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/gh-address-comments-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# PR Comment Handler

## Overview

Use this skill when a user wants help addressing comments on the open GitHub pull request for the current branch by using the GitHub CLI.

This skill keeps the original intent of the upstream `gh-address-comments` workflow, but turns it into a safer and more explicit operating kit for agents. It starts with `gh` authentication and PR discovery, classifies the comment types correctly, summarizes actionable items in numbered form, asks the user which items to address, then helps apply fixes and communicate back on the PR.

This skill is intentionally narrow:

- it is for the currently checked-out branch and its associated open PR
- it uses `gh` and official GitHub APIs for structured retrieval where needed
- it does **not** assume every comment should be fixed automatically
- it does **not** require destructive Git operations

If authentication is missing, the PR cannot be resolved from the current branch, or the task turns into broader debugging, conflict resolution, or CI repair, pause and either ask the user for approval or hand off to a more specific skill.

## When to Use This Skill

Use this skill when:

- the user asks you to review, triage, or address comments on the open GitHub PR for the current branch
- you need to verify `gh` authentication before interacting with GitHub
- you need to distinguish between top-level PR conversation comments, diff review comments, and unresolved review threads
- you should present numbered actionable items and ask the user which comments to address before editing code
- you need a reproducible `gh`-driven workflow with troubleshooting and local support files

Do **not** use this skill when:

- there is no PR associated with the current branch
- the main task is writing a brand-new PR rather than addressing review feedback
- the work is primarily CI debugging, merge conflict resolution, or architecture redesign
- the environment cannot make approved network calls to GitHub and the user has not authorized that limitation workaround

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need to verify GitHub CLI login first | `gh auth status` and `references/gh-pr-comment-handler-workflow.md` | Confirms the active account and host before any PR or API call |
| Need to resolve the PR for the current branch | `gh pr view --json number,title,url,headRefName,baseRefName` | Safest official way to confirm the branch is tied to an open PR |
| Need a quick preflight | `scripts/check_gh_auth_and_pr.sh` | Checks auth, repo, branch, and PR association without changing state |
| Need comment taxonomy guidance | `references/gh-comment-taxonomy.md` | Prevents mixing issue comments, review comments, and review threads |
| Need numbered actionable items | `scripts/list_pr_comment_targets.sh` | Produces a concise triage list from official `gh` queries |
| Need exact `gh api` examples | `examples/gh-api-comment-queries.md` | Shows structured retrieval patterns and pagination-safe usage |
| Need recovery steps | `references/gh-troubleshooting-matrix.md` | Covers auth, missing PR, wrong repo, pagination, and rate limits |

## Workflow

1. **Confirm the task boundary**
   - Verify that the user wants help with comments on the open PR for the current branch.
   - Confirm whether they want full triage, help on selected comments, or only a summary.
   - Do not assume all comments should be handled unless the user explicitly says so.

2. **Verify GitHub CLI authentication**
   - Run:
     ```bash
     gh auth status
     ```
   - Confirm the correct GitHub host and logged-in account.
   - If auth is missing or invalid, stop and ask the user to run `gh auth login` or provide an approved authentication path.
   - Do not ask the user to paste tokens into chat or logs.

3. **Confirm repository and current branch context**
   - Check the current branch and repo before making PR assumptions:
     ```bash
     git branch --show-current
     gh repo view --json nameWithOwner,url
     ```
   - If the user is in a fork or the wrong repository, clarify before continuing.

4. **Resolve the open PR for the current branch**
   - Use structured output rather than guessing:
     ```bash
     gh pr view --json number,title,url,headRefName,baseRefName
     ```
   - Record the PR number, title, URL, head branch, and base branch.
   - If no PR is associated with the branch, stop and tell the user.

5. **Fetch comments using the right sources**
   - Treat comment types separately:
     - **Issue comments**: top-level PR conversation comments
     - **Review comments**: line- or diff-level comments on changed files
     - **Review threads**: thread-level state, especially unresolved threads
   - Use the helper script or the example `gh api` queries in the support pack.
   - Prefer machine-readable JSON output over manual browser inspection when operating as an agent.

6. **Create a numbered triage summary**
   - Summarize each actionable item with:
     - comment type
     - author
     - file/path if applicable
     - whether it looks unresolved
     - likely fix or clarification needed
   - Present the items as a numbered list.
   - Ask the user which numbered items to address.

7. **Wait for user scope confirmation before editing**
   - If the user chooses a subset, work only on that subset.
   - If the user asks for a full pass, still call out ambiguous or conflicting comments before making broad changes.
   - If a comment is unclear, ask for clarification rather than guessing.

8. **Apply the requested fixes locally**
   - Edit only the files needed for the selected comments.
   - Keep changes small and traceable back to the numbered items.
   - Run focused validation relevant to the changed code when feasible.
   - Avoid destructive Git commands.

9. **Re-check the diff and summarize what changed**
   - Review local changes with narrow commands such as:
     ```bash
     git status --short
     git diff --stat
     ```
   - Summarize which numbered comments were addressed, what files changed, and what tests or checks were run.

10. **Communicate back on the PR when appropriate**
    - If the user wants a PR update, draft or post a concise summary comment such as:
      ```bash
      gh pr comment <number> --body "Addressed items 1, 2, and 4. Updated validation logic in src/... and added tests for ..."
      ```
    - If a reviewer comment needs clarification rather than a code change, say that explicitly in the response.
    - Keep the comment factual and easy for reviewers to verify.

11. **Close out or hand off**
    - If the task is complete, provide:
      - PR number and URL
      - addressed item numbers
      - files changed
      - checks run
      - remaining open questions
    - If the work expands into CI failures, merge conflicts, or design changes, hand off deliberately to a more specific skill.

## Examples

### Example 1: Fast preflight

```bash
bash scripts/check_gh_auth_and_pr.sh
```

Expected outcome:

- confirms whether `gh` is authenticated
- shows current branch
- shows repository and associated PR if one exists
- exits without changing repository state

### Example 2: Generate numbered PR comment targets

```bash
bash scripts/list_pr_comment_targets.sh
```

Example output shape:

```text
PR #123 - Improve webhook retry handling
[1] review_thread unresolved | reviewer=alice | path=src/retries.ts
    Request: handle 429 responses with backoff
[2] review_comment | reviewer=bob | path=src/retries.ts
    Request: add test coverage for max retry cap
[3] issue_comment | reviewer=carol
    Request: clarify rollout impact in PR description
```

Then ask the user:

```text
I found 3 actionable comment targets. Which numbered items should I address?
```

### Example 3: Inspect issue comments directly

```bash
gh api --paginate repos/{owner}/{repo}/issues/<pr-number>/comments \
  --jq '.[] | {id, user: .user.login, created_at, body}'
```

Use this when you need top-level PR discussion comments rather than diff review comments.

### Example 4: Post a concise progress update

```bash
gh pr comment 123 --body "Addressed items 1 and 2 from review. Updated src/retries.ts and tests/retries.test.ts. Item 3 needs reviewer clarification about rollout wording."
```

Use this only after the user approves posting back to the PR.

## Best Practices

### Do

- verify `gh auth status` before trying PR or API calls
- confirm the current repo and branch before assuming the active PR
- separate issue comments, review comments, and unresolved review threads
- number the actionable items and ask the user which ones to address
- use structured `gh pr view` and `gh api` output for repeatable automation
- keep code changes small, directly tied to selected comments, and easy to review
- summarize what was addressed and what remains unresolved
- prefer least-privilege authentication and approved credential flows

### Don't

- do not assume one API call returns every relevant kind of PR discussion state
- do not silently address every comment without user approval
- do not ask users to paste PATs, cookies, or secrets into chat
- do not use destructive commands such as hard resets, force pushes, or branch deletion unless explicitly requested and separately approved
- do not reply on the PR as if a thread is resolved when reviewer clarification is still needed
- do not confuse top-level PR comments with diff review comments

## Troubleshooting

### Problem: `gh auth status` fails or shows the wrong account

**Symptoms:** `gh auth status` reports no login, expired credentials, or a different host/account than expected.

**Solution:** Ask the user to authenticate with an approved method, typically:

```bash
gh auth login
gh auth status
```

If multiple hosts are configured, confirm the correct GitHub host before continuing. Treat `gh auth status` as a preflight check only; some permission issues appear only on actual PR or API calls.

### Problem: No PR is associated with the current branch

**Symptoms:** `gh pr view` fails, or returns no open PR for the checked-out branch.

**Solution:** Confirm the current branch and repository first:

```bash
git branch --show-current
gh repo view --json nameWithOwner,url
```

If the branch has no PR yet, tell the user this skill cannot continue until the branch is tied to an open PR.

### Problem: The repo or fork context is wrong

**Symptoms:** `gh` queries succeed, but they point to the wrong repository, fork, or PR.

**Solution:** Reconfirm repository context and compare it with the branch remote. If needed, ask the user which repo should be targeted before posting comments or applying fixes.

### Problem: Retrieved comments are incomplete

**Symptoms:** You can see some comments, but unresolved review threads or top-level discussion comments are missing.

**Solution:** Use the correct retrieval path for each comment type. Review comments and issue comments are different resources, and unresolved thread metadata may require GraphQL-backed queries. Use the examples and taxonomy reference rather than assuming one endpoint is enough.

### Problem: Large PRs hit pagination or rate limits

**Symptoms:** Only the first page of comments appears, or API calls start failing with rate-limit related responses.

**Solution:** Prefer paginated calls:

```bash
gh api --paginate <endpoint>
```

Reduce repeated calls, reuse fetched JSON when possible, and pause for user approval if the environment is heavily rate-limited.

### Problem: Network or sandbox restrictions block `gh`

**Symptoms:** `gh` commands fail even though local Git commands work.

**Solution:** Explain that this workflow depends on network access to GitHub. Request whatever environment-specific approval is required for outbound network calls, then rerun the smallest failing command first.

## Related Skills

- `@git` - use when the work becomes mainly Git inspection, history cleanup, or conflict handling
- `@debug` - use when a comment reveals a deeper runtime or logic bug that needs investigation
- `@test` - use when the main follow-up is adding or repairing automated test coverage
- `@ci` - use when reviewer feedback is blocked by failing pipelines or required checks
- `@security-review` - use when comments center on auth, secrets, permissions, or security fixes

## Additional Resources

- [Workflow reference](references/gh-pr-comment-handler-workflow.md)
- [Comment taxonomy](references/gh-comment-taxonomy.md)
- [Troubleshooting matrix](references/gh-troubleshooting-matrix.md)
- [Triage example session](examples/triage-open-pr-comments.md)
- [Structured `gh api` query examples](examples/gh-api-comment-queries.md)
- [Preflight auth and PR check script](scripts/check_gh_auth_and_pr.sh)
- [Numbered comment target script](scripts/list_pr_comment_targets.sh)
- [OpenAI agent routing notes](agents/openai.yaml)

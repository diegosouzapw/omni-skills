---
name: "gh-address-comments"
description: "PR Comment Handler workflow skill. Use this skill when the user needs to inspect, prioritize, and address review comments or PR conversation comments on the open GitHub pull request for the current branch using gh CLI. Verifies GitHub CLI authentication first, fetches feedback in structured form, asks the user which items to handle, applies fixes, validates locally, and only then drafts or posts replies. Do NOT use for creating PRs, CI debugging, or general Git operations outside the review-comment workflow."
version: "0.0.1"
category: "cli-automation"
tags:
  - "gh-address-comments"
  - "github"
  - "pull-request"
  - "review-comments"
  - "issue-comments"
  - "gh-cli"
  - "code-review"
  - "workflow"
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
upstream_skill: "skills/gh-address-comments"
upstream_author: "github.com/openai/skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# PR Comment Handler

## Overview

Use this skill to address feedback on an existing open GitHub pull request for the current branch with the GitHub CLI.

This skill is for a focused review-response workflow:

1. verify `gh` authentication and host context
2. identify the PR for the current branch
3. fetch PR metadata plus structured feedback
4. separate code review threads from top-level PR conversation comments
5. summarize and number actionable items
6. ask the user which comments to address
7. apply the selected fixes
8. run the smallest relevant local validation
9. draft or post concise reviewer replies
10. resolve threads only when the fix is actually complete and validated

This skill preserves the original upstream intent: inspect comments needing attention, ask the user which numbered items to address, and then apply fixes for the selected comments. It improves the workflow by making the GitHub CLI and API steps explicit and safe.

## When to Use This Skill

Use this skill when:

- the user says things like "address PR comments", "fix review feedback", "respond to PR review", or "handle PR comments"
- there is already an open PR for the current branch
- you need to inspect both review comments and PR conversation comments
- you need a numbered summary of feedback before making changes
- you want to use `gh` and structured JSON/API output instead of manually browsing GitHub

Do **not** use this skill when:

- no PR exists yet for the branch; hand off to a PR creation/update skill
- the main problem is failing CI; hand off to a CI-debugging skill such as `gh-fix-ci`
- the work is mainly rebase/conflict resolution or general Git surgery
- the request is only to create a top-level PR comment without evaluating review feedback

## Operating Table

| Phase | Primary action | Start here | Output |
| --- | --- | --- | --- |
| Auth preflight | Confirm `gh` is authenticated for the correct host/account | `scripts/check_gh_auth.sh` | auth status and next step |
| PR discovery | Find the open PR for the current branch | `gh pr view --json ...` | PR number, URL, review state |
| Feedback fetch | Retrieve issue comments and review threads as JSON | `scripts/fetch_pr_feedback.py` | structured, numbered feedback |
| Clarification | Ask which numbered items to address | `references/pr-comment-handling-workflow.md` | confirmed scope |
| Fix implementation | Apply selected code or doc changes | repository tools | patch for chosen feedback |
| Validation | Run the smallest relevant checks before replying | local test/lint/build commands | evidence for reply |
| Reply/update | Draft or post precise replies | `examples/reviewer-reply-templates.md` | reviewer-facing update |
| Handoff | Route when the task drifts | `agents/handoff-router.md` | explicit next skill |

## Workflow

1. **Confirm the task boundary**
   - Verify the user wants to handle feedback on an existing PR.
   - Confirm whether they want only a summary, code changes, drafted replies, posted replies, or the full workflow.
   - If the branch has no PR, stop and route to PR creation/update instead of guessing.

2. **Run auth and host preflight**
   - Check authentication first:
     ```bash
     bash scripts/check_gh_auth.sh
     ```
   - If needed, ask the user to authenticate with:
     ```bash
     gh auth login
     ```
   - For GitHub Enterprise, use the correct host during auth and later `gh` calls.
   - Do not ask the user to paste tokens into chat.

3. **Identify the PR for the current branch**
   - Prefer structured output:
     ```bash
     gh pr view --json number,title,url,headRefName,baseRefName,isDraft,reviewDecision
     ```
   - Capture at least:
     - PR number
     - PR URL
     - branch name
     - draft state
     - review decision
   - If `gh pr view` cannot infer the PR from the current branch, stop and ask for the PR number or repository context.

4. **Fetch structured feedback**
   - Use the bundled helper:
     ```bash
     python3 scripts/fetch_pr_feedback.py > /tmp/pr_feedback.json
     ```
   - This fetches:
     - PR metadata
     - top-level PR conversation comments (issue comments)
     - review threads and review comments
     - unresolved/resolved state when available
     - outdated review comment state when available
   - Prefer this over scraping terminal output.

5. **Summarize and number actionable items**
   - Prioritize:
     1. unresolved review threads
     2. non-outdated review comments
     3. direct requests for changes
     4. top-level PR conversation comments requiring action
   - Produce a short numbered list with:
     - comment type
     - author
     - file/path and line if available
     - short summary of requested change
     - estimated work needed
     - whether the comment looks outdated

6. **Ask the user which items to address**
   - Do not assume all feedback should be acted on automatically.
   - Ask the user to choose item numbers or confirm "address all actionable feedback".
   - If any feedback is ambiguous, ask for clarification before editing code.

7. **Apply the selected fixes**
   - Make only the changes needed for the chosen comments.
   - Keep each fix traceable back to the numbered feedback item.
   - If a comment is outdated or no longer applicable, prepare a reply explaining why rather than silently changing unrelated code.

8. **Validate locally before replying**
   - Run the smallest relevant validation for the files you changed.
   - Examples:
     - targeted unit tests
     - linter for touched files
     - type check for affected package
     - focused build/doc validation
   - Do not post "fixed" until you have at least minimal supporting validation or a clear explanation that no local check exists.

9. **Draft or post replies carefully**
   - Use precise replies such as:
     - what changed
     - where it changed
     - what validation ran
     - any remaining tradeoff or follow-up
   - Use `gh pr comment` only for top-level PR conversation comments.
   - For review-thread replies, use `gh api` or another repository-approved mechanism if needed.
   - Get user confirmation before posting public replies if they asked only for drafting or if the workflow is sensitive.

10. **Resolve threads only when appropriate**
    - Resolve review threads only after:
      - the requested change is actually present
      - validation supports the fix
      - the reply is accurate
    - If resolution is not available in the current environment, leave a clear handoff note.

11. **Report completion clearly**
    - Summarize:
      - which numbered items were handled
      - what changed
      - what validation ran
      - which replies were drafted vs posted
      - any unresolved or outdated items still needing reviewer/user input

## Comment Types That Matter

GitHub PR feedback is not one thing.

- **Issue comments**: top-level PR conversation comments. These are PR comments backed by the issues API.
- **Review comments**: code review comments attached to diffs.
- **Review threads**: threaded review discussions with resolved/unresolved state.

This distinction matters because `gh pr comment` is suitable for top-level PR conversation comments, but not all review-thread reply workflows. For review-thread handling, prefer structured API access through `gh api`.

See: [GitHub comment types reference](references/github-comment-types.md)

## Examples

### Example 1: Preflight auth and PR discovery

```bash
bash scripts/check_gh_auth.sh
gh pr view --json number,title,url,headRefName,baseRefName,isDraft,reviewDecision
```

**Expected result:** You know whether `gh` is usable and which PR is tied to the current branch.

### Example 2: Fetch structured PR feedback

```bash
python3 scripts/fetch_pr_feedback.py > /tmp/pr_feedback.json
python3 -m json.tool /tmp/pr_feedback.json | sed -n '1,120p'
```

**Expected result:** A JSON snapshot containing PR metadata, issue comments, and review-thread data that you can summarize safely.

### Example 3: Ask the user which items to handle

```text
I found 6 actionable feedback items on PR #123.

1. Review thread - src/api/users.ts:41 - null handling in error path
2. Review thread - src/api/users.ts:88 - rename confusing variable
3. Issue comment - add migration note to PR description
4. Review thread - outdated - tests/api/users.test.ts:12 - old assertion path
5. Review thread - docs/config.md:30 - clarify production env var example
6. Issue comment - confirm backward compatibility for existing clients

Which item numbers should I address? I recommend 1, 2, 3, 5, and 6. Item 4 appears outdated and may need only a reply.
```

**Expected result:** The user confirms scope before you change code or post responses.

### Example 4: Draft a concise reviewer reply

```text
Updated `src/api/users.ts` to guard the null error path and simplified the variable naming in the request handler. I also added a focused regression test for the null case. Validation run: `pnpm test -- users`.
```

**Expected result:** A concrete reviewer-facing update tied to the actual fix.

## Best Practices

### Do

- Verify `gh` auth and the correct host/account before fetching or posting anything.
- Use structured JSON via `gh pr view --json` and `gh api` instead of scraping text output.
- Separate issue comments from review comments and review threads.
- Number feedback items deterministically so the user can choose what to address.
- Prioritize unresolved and non-outdated review threads.
- Ask for confirmation before applying broad changes or posting public replies.
- Run targeted validation before claiming a comment is fixed.
- Reply with specifics: what changed, where, and how it was validated.
- Preserve provenance and task traceability from comment -> fix -> validation -> reply.

### Don't

- Don't assume every PR comment should be acted on without user confirmation.
- Don't rely on `gh pr comment` for all review-thread reply scenarios.
- Don't silently ignore outdated comments; call out that they appear outdated.
- Don't post vague replies like "fixed" without describing the change.
- Don't reset auth or ask for raw tokens unless there is a clear need and the user chooses that path.
- Don't continue if no open PR is associated with the current branch; stop and route correctly.

## Troubleshooting

### Problem: `gh pr view` cannot find an open PR for the current branch

**Symptoms:** `gh pr view` fails, returns no PR, or shows the wrong repository context.

**Solution:**
- Confirm you are in the expected Git repository and branch.
- Ask the user for the PR number if branch inference is ambiguous.
- If needed, specify repository context explicitly with `-R OWNER/REPO`.
- If no PR exists yet, stop and hand off to a PR creation/update workflow.

### Problem: `gh auth status` succeeds but API calls still fail

**Symptoms:** `gh api` returns `401`, `403`, empty results, or permission-related errors.

**Solution:**
- Confirm the authenticated host and account are the correct ones.
- For GitHub Enterprise, ensure the enterprise hostname is being used consistently.
- Check whether the token or auth method has sufficient permissions for PR and comment access.
- Re-run authentication with `gh auth login` if the user approves.

### Problem: Review comments seem to be missing

**Symptoms:** You can see comments in the GitHub UI, but your fetch only shows a subset or only top-level PR comments.

**Solution:**
- Make sure you fetched both issue comments and review-thread data.
- Do not assume top-level PR comments represent code review feedback.
- Use the bundled fetch script or direct `gh api` calls that include review threads/comments.

### Problem: A comment refers to old code that no longer matches the current diff

**Symptoms:** The line/path looks stale, or the request appears already superseded by newer commits.

**Solution:**
- Mark the item as likely outdated in your summary.
- Inspect whether the underlying concern is still relevant before changing code.
- If not, prepare a reply explaining that the comment appears outdated and point to the newer change.

### Problem: You can draft a reply but not post it with the chosen command

**Symptoms:** `gh pr comment` works for top-level comments, but not for the exact review-thread reply flow you need.

**Solution:**
- Check whether the target is a top-level PR conversation comment or a review-thread comment.
- Use `gh api` for review-comment reply flows when `gh pr comment` is insufficient.
- If the repo workflow for thread replies is unclear, draft the response and ask the user before posting.

### Problem: The task drifted into CI or Git repair work

**Symptoms:** Review comments are blocked on failing checks, broken merges, rebases, or unrelated repository state.

**Solution:**
- Pause comment handling.
- Hand off to the appropriate CI, Git, or repo-maintenance skill.
- Return to this skill after the branch is again ready for review-response work.

## Related Skills

- `@gh-fix-ci` - Use when review feedback is blocked on failing GitHub checks or CI runs.
- PR creation/update skills - Use when there is no open PR yet for the branch.
- Git conflict/rebase skills - Use when the real work is branch repair, conflict resolution, or history cleanup.
- Testing or validation skills - Use when comment resolution depends on deeper test repair.
- Security review skills - Use when the feedback is primarily about vulnerabilities, secrets, or policy-sensitive remediation.

## Additional Resources

### Local support pack

- [Workflow reference](references/pr-comment-handling-workflow.md)
- [GitHub comment types reference](references/github-comment-types.md)
- [Auth and API troubleshooting](references/troubleshooting-auth-and-api.md)
- [Structured fetch examples](references/fetch-pr-comments-json.md)
- [Reviewer reply templates](references/reviewer-reply-templates.md)
- [Auth preflight script](scripts/check_gh_auth.sh)
- [Structured feedback fetch script](scripts/fetch_pr_feedback.py)
- [Handoff router](agents/handoff-router.md)

### Primary documentation

- GitHub CLI manual: `gh`, `gh pr view`, `gh auth status`, `gh auth login`, `gh api`
- GitHub REST API for issue comments and pull request review comments
- GitHub GraphQL objects for pull request review threads and review comments

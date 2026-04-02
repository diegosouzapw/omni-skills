---
name: "yeet"
description: "yeet workflow skill. Use this skill only when the user explicitly asks to stage, commit, push, and open a GitHub pull request in one flow using git and the GitHub CLI (gh)."
version: "0.0.1"
category: "cli-automation"
tags:
  - "yeet"
  - "git"
  - "github"
  - "gh"
  - "pull-request"
  - "commit"
  - "push"
  - "workflow"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "git"
  - "gh"
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/yeet"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# yeet

## Overview

`yeet` is a tightly scoped Git workflow skill for one explicit operator action: stage changes, create a commit, push the branch, and open a GitHub pull request with `gh`.

Use it only when the user clearly wants that full flow executed. This skill is not for generic Git help, selective staging, history rewriting, merge conflict resolution, release management, or policy bypasses.

The workflow is optimized for safe, reviewable automation:

- verify repository and authentication state before mutating anything
- avoid committing directly on the default branch when possible
- stage everything only when that is truly what the user asked for
- create a draft PR by default unless the user explicitly wants ready-for-review
- stop and report policy or auth blockers instead of improvising around them

## When to Use This Skill

Use this skill when:

- the user explicitly asks you to **stage, commit, push, and open a PR** in one flow
- the repository uses Git and GitHub, and `gh` is available or expected
- the user wants a branch pushed and a PR link returned at the end
- broad staging with `git add -A` is acceptable for the requested task

Do **not** use this skill when:

- the user only asked for one part of the flow, such as only committing or only opening a PR
- the user needs **selective staging**, partial commits, or commit splitting
- the branch is in conflict, contains unmerged paths, or requires manual merge resolution
- the task requires interactive rebase, force-push, or history cleanup
- repository rules, branch protection, or missing permissions block the standard flow

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First run in a repo | `references/preflight-checklist.md` | Confirms repo, auth, branch, remote, and duplicate PR state before mutation |
| Need exact commands | `references/command-reference.md` | Provides safe command templates for each step |
| Base branch is unclear | `scripts/detect_default_branch.sh` | Detects the repository default branch instead of guessing `main` or `master` |
| Troubleshooting a failed push or PR create | `references/troubleshooting-matrix.md` | Maps common `git` and `gh` failures to safe next actions |
| Need a reusable PR body | `examples/pr-body-template.md` | Supplies a clean body structure for `gh pr create --body-file` |
| Need to decide whether to hand off | `agents/router.md` | Routes selective staging, conflicts, CI, or policy issues out of this skill |

## Workflow

1. **Confirm activation is correct**
   - Make sure the user explicitly wants the full stage → commit → push → PR flow.
   - If the user needs selective staging or only part of the workflow, stop and ask before proceeding.

2. **Run preflight checks before any mutation**
   - Confirm you are inside a Git repository.
   - Confirm `git` and `gh` are available.
   - Confirm `gh auth status` succeeds.
   - Inspect working tree state with `git status -sb`.
   - Confirm there are no unmerged paths or unresolved conflicts.
   - Confirm `origin` exists and identify the current branch.
   - Detect the default/base branch with `scripts/detect_default_branch.sh`.
   - Check whether the current branch already has an open PR.

3. **Choose a safe branch strategy**
   - If the current branch is the default branch, create a feature branch first.
   - Prefer a name like `codex/<short-description>` using only safe branch characters.
   - If already on a non-default feature branch, stay on that branch unless the user asked otherwise.
   - Avoid committing directly to protected or default branches when possible.

4. **Review what will be staged**
   - Re-run `git status -sb`.
   - Confirm that staging everything with `git add -A` matches the user's intent.
   - If unrelated changes are present, stop and ask instead of sweeping them into the commit.

5. **Stage and verify changes**
   - Stage with `git add -A`.
   - Re-check status to confirm the staged set is what you expect.

6. **Create the commit**
   - Use a short, clear commit subject.
   - For a simple commit, `git commit -m "<description>"` is fine.
   - If there is nothing to commit, stop and report that no staged delta exists.

7. **Run relevant checks if appropriate**
   - If the repo has known lightweight checks for the changed area and they are already expected in the workflow, run them.
   - Do not invent heavyweight validation steps.
   - If checks fail because dependencies are missing, report that clearly; only install or change environment state when the user has asked for that.

8. **Push the branch safely**
   - For a new branch, use `git push -u origin <branch>`.
   - If push fails, diagnose the error class before taking action:
     - upstream missing
     - auth failure
     - non-fast-forward rejection
     - branch protection or repository rule rejection
   - Do not recommend force-push unless the user explicitly asks and the situation is policy-safe.

9. **Prepare the PR content**
   - Prefer a draft PR unless the user explicitly asked for ready-for-review.
   - Use a body file for multiline Markdown rather than escaped newlines.
   - Include concise but useful sections such as summary, impact, root cause, fix, and validation.

10. **Create the PR explicitly**
    - Use `gh pr create` with explicit `--base` and `--head` when possible.
    - Prefer a command like:

```bash
GH_PROMPT_DISABLED=1 GIT_TERMINAL_PROMPT=0 gh pr create \
  --draft \
  --base "${BASE_BRANCH}" \
  --head "${CURRENT_BRANCH}" \
  --title "[codex] ${PR_TITLE}" \
  --body-file pr-body.md
```

11. **Verify and return the result**
    - Confirm the PR was created successfully.
    - Return the PR URL.
    - If useful, inspect with `gh pr view --json url,title,number,baseRefName,headRefName`.

## Best Practices

### Do

- Use this skill only for the explicit full workflow it covers.
- Run preflight checks before staging or committing.
- Discover the default branch instead of assuming `main` or `master`.
- Create a feature branch when starting from the default branch.
- Treat `git add -A` as a broad action and verify it matches user intent.
- Prefer draft PRs unless the user asks otherwise.
- Use `--body-file` for multiline PR descriptions.
- Stop and report branch protection, auth, or repository policy blockers clearly.

### Don't

- Don't use this skill for selective staging or partial commits.
- Don't commit directly to the default branch unless that is explicitly intended and safe.
- Don't tell the operator to "pull from master and retry" without diagnosing the actual rejection.
- Don't force-push, rewrite history, or bypass protections by default.
- Don't open a second PR for the same branch without first checking whether one already exists.
- Don't hide no-op outcomes such as "nothing to commit".

## Troubleshooting

### Problem: `gh` is missing or not authenticated

**Symptoms:** `gh --version` fails, `gh auth status` fails, or `gh pr create` reports authentication problems.

**Solution:** Ask the user to install GitHub CLI if missing. If `gh` is present but unauthenticated, ask them to run `gh auth login`, then re-run `gh auth status` before continuing.

### Problem: The working tree contains conflicts or unmerged paths

**Symptoms:** `git status` shows unmerged files, conflict markers, or merge/rebase state.

**Solution:** Stop. This skill is not for conflict resolution. Ask the user whether they want a conflict-resolution workflow instead of continuing with automation.

### Problem: There is nothing to commit

**Symptoms:** `git commit` reports nothing to commit, or the staged diff is empty.

**Solution:** Report that no staged changes are available for a new commit. Confirm whether the user expected changes to be present before retrying.

### Problem: Push fails with no upstream configured

**Symptoms:** Git says the current branch has no upstream branch.

**Solution:** Push with tracking using `git push -u origin <branch>`.

### Problem: Push fails with non-fast-forward rejection

**Symptoms:** Git reports that the remote contains work not present locally, or rejects the push as non-fast-forward.

**Solution:** Do not force-push by default. Explain that the branch has diverged and needs deliberate reconciliation, such as fetch/review/rebase-or-merge based on repository policy.

### Problem: Push is blocked by branch protection or repository rules

**Symptoms:** Push succeeds nowhere, or the remote reports protected branch or ruleset violations.

**Solution:** Stop and report the policy blocker. If the problem is that the user is on the default branch, create or switch to a feature branch if appropriate and retry the normal flow.

### Problem: PR creation fails because a PR already exists

**Symptoms:** `gh pr create` reports an existing PR for the branch, or `gh pr status` already shows one.

**Solution:** Do not create a duplicate. Return the existing PR link and summarize its state instead.

### Problem: Git push auth works differently from `gh` auth

**Symptoms:** `gh auth status` succeeds, but `git push` still fails with credential or permission errors.

**Solution:** Explain that Git transport credentials and `gh` authentication are related but not always identical. Report the push error clearly and ask the user to fix Git remote authentication before continuing.

## Related Skills

Route away from `yeet` when the task changes shape:

- Use a Git-specific skill when the user needs selective staging, rebasing, commit splitting, or conflict resolution.
- Use a CI or debugging skill when the main problem becomes failing checks rather than creating the PR.
- Use a release workflow skill when the user is preparing tags, releases, or changelog publication.
- Use a repository policy or security workflow when approvals, branch rules, or permission exceptions dominate the task.

## Additional Resources

- [Preflight checklist](references/preflight-checklist.md)
- [Command reference](references/command-reference.md)
- [Troubleshooting matrix](references/troubleshooting-matrix.md)
- [Full flow example](examples/full-flow.md)
- [PR body template](examples/pr-body-template.md)
- [Failure recovery example](examples/failure-recovery.md)
- [Detect default branch helper](scripts/detect_default_branch.sh)
- [Router guidance](agents/router.md)

## Examples

### Example 1: Standard full flow on the default branch

```bash
BASE_BRANCH="$(bash scripts/detect_default_branch.sh)"
git switch -c "codex/fix-login-timeout"
git status -sb
git add -A
git commit -m "fix login timeout handling"
git push -u origin "$(git branch --show-current)"
cat > pr-body.md <<'EOF'
## Summary
Fix timeout handling during login retries.

## User impact
Reduces failed login attempts caused by premature timeout expiration.

## Root cause
Retry timing logic treated slow responses as hard failures too early.

## Fix
Adjust timeout handling and retry window evaluation.

## Validation
- Reviewed diff
- Ran relevant local checks
EOF
GH_PROMPT_DISABLED=1 GIT_TERMINAL_PROMPT=0 gh pr create \
  --draft \
  --base "$BASE_BRANCH" \
  --head "$(git branch --show-current)" \
  --title "[codex] fix login timeout handling" \
  --body-file pr-body.md
```

Expected result: the branch is pushed and GitHub returns a draft PR URL.

### Example 2: Existing PR already open for the branch

```bash
gh pr status
```

Expected result: if a PR already exists for the current branch, return that URL instead of creating another one.

### Example 3: Preflight before mutation

```bash
git status -sb
gh auth status
bash scripts/detect_default_branch.sh
```

Expected result: you know whether the repo is ready, authenticated, and which base branch should be used before staging or pushing anything.

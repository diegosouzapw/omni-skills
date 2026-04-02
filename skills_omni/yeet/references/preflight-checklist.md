# Yeet Preflight Checklist

Run this checklist before staging, committing, pushing, or creating a PR.

## 1. Confirm the request matches this skill

Use `yeet` only if the user explicitly wants the full flow:

- stage changes
- create a commit
- push the branch
- open a GitHub PR

Stop and ask if the user wants selective staging, partial commits, conflict resolution, or only one step of the flow.

## 2. Confirm repository context

```bash
git rev-parse --is-inside-work-tree
```

Expected: `true`

If this fails, stop. Do not run Git mutation commands outside a repository.

## 3. Confirm tool availability

```bash
git --version
gh --version
```

If `gh` is missing, ask the user to install GitHub CLI before continuing.

## 4. Confirm GitHub CLI authentication

```bash
gh auth status
```

If this fails, ask the user to authenticate with `gh auth login` and retry.

## 5. Inspect current working tree state

```bash
git status -sb
```

Check for:

- current branch name
- staged or unstaged files
- untracked files
- signs of divergence
- merge or conflict state

If there are unmerged paths or conflicts, stop and hand off.

## 6. Confirm the remote exists

```bash
git remote -v
```

Expected: an `origin` remote pointing at the intended GitHub repository.

## 7. Detect the default branch

```bash
bash scripts/detect_default_branch.sh
```

Use the detected branch as the PR base. Do not assume `main` or `master`.

## 8. Check whether the current branch already has a PR

```bash
gh pr status
```

If a PR for the current branch already exists, return that PR instead of creating a duplicate.

## 9. Confirm broad staging is safe

This skill uses:

```bash
git add -A
```

That stages all tracked and untracked changes in the repository scope. Stop and ask if unrelated changes are present.

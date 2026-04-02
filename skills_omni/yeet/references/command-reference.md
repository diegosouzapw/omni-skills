# Yeet Command Reference

These are safe command templates for the standard workflow.

## Show current state

```bash
git status -sb
```

## Show current branch

```bash
git branch --show-current
```

## Create a feature branch from the current branch

Preferred on modern Git:

```bash
git switch -c "codex/<short-description>"
```

Compatibility fallback:

```bash
git checkout -b "codex/<short-description>"
```

## Stage everything

```bash
git add -A
```

Use only when broad staging matches the user's request.

## Create a simple commit

```bash
git commit -m "<short description>"
```

## First push for a new branch

```bash
git push -u origin "$(git branch --show-current)"
```

## Check GitHub CLI authentication

```bash
gh auth status
```

## Check PR status for the current branch

```bash
gh pr status
```

## Create a draft PR with explicit base and head

```bash
GH_PROMPT_DISABLED=1 GIT_TERMINAL_PROMPT=0 gh pr create \
  --draft \
  --base "<base-branch>" \
  --head "<head-branch>" \
  --title "[codex] <title>" \
  --body-file pr-body.md
```

## View the created PR

```bash
gh pr view --json url,title,number,baseRefName,headRefName
```

## Open the PR in a browser when appropriate

```bash
gh pr view --web
```

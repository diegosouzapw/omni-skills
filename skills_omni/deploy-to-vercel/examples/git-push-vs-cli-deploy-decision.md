# Example: Git Push vs Direct CLI Deploy

## Choose direct CLI deploy when

- the user wants a preview URL quickly
- the repo should not gain a deployment-only commit
- the current branch should not be pushed yet

Example:

```bash
vercel deploy . -y --no-wait
```

## Choose git push when

- the repo is already linked
- the user explicitly approves a push
- the team expects deployment through normal git integration

Example pre-push checks:

```bash
git status --short
git branch --show-current
```

Then, only after approval:

```bash
git add .
git commit -m "deploy: update app"
git push
```

## Operator note

If the branch may trigger production behavior, say that explicitly before pushing.

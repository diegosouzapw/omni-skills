# Example: Failure Recovery Paths

## Case 1: Nothing to commit

```bash
git add -A
git commit -m "update docs"
```

If Git reports nothing to commit, stop and tell the user there is no staged delta to record.

## Case 2: Existing PR already open

```bash
gh pr status
```

If the branch already has an open PR, return that PR URL instead of creating another one.

## Case 3: Push rejected as non-fast-forward

```bash
git push -u origin "$(git branch --show-current)"
```

If push is rejected because the remote branch is ahead, stop and explain that the branch has diverged. Do not force-push by default.

## Case 4: `gh` authenticated but Git push denied

```bash
gh auth status
git push -u origin "$(git branch --show-current)"
```

If `gh auth status` passes but Git push fails, report that Git remote credentials need to be fixed separately.

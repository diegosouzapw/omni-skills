# Yeet Troubleshooting Matrix

| Problem | Typical symptom | Likely cause | Safe next action |
| --- | --- | --- | --- |
| `gh` missing | `gh: command not found` | GitHub CLI not installed | Ask the user to install `gh` and stop |
| `gh` unauthenticated | `gh auth status` fails | No valid GitHub CLI login | Ask the user to run `gh auth login` |
| Not a Git repo | `fatal: not a git repository` | Wrong directory | Stop and move to the correct repository |
| Conflicted tree | `git status` shows unmerged paths | Merge/rebase conflict state | Stop and hand off to conflict resolution |
| Nothing to commit | `nothing to commit, working tree clean` | No staged delta | Report no-op and confirm expectations |
| No upstream branch | push suggests `--set-upstream` | First push for branch | Run `git push -u origin <branch>` |
| Non-fast-forward push rejection | push rejected because remote is ahead | Local/remote divergence | Stop and reconcile branch deliberately |
| Protected branch rejection | remote rejects push to protected branch | Ruleset or branch protection | Use a feature branch or report the blocker |
| Duplicate PR | `gh pr create` says a PR already exists | Existing PR for head branch | Return existing PR URL instead of creating another |
| Git push auth failure | `git push` denied despite `gh auth status` passing | Git remote credential mismatch | Ask the user to fix Git remote authentication |
| Wrong base branch | PR targets the wrong branch | Hard-coded or guessed base | Detect base with `scripts/detect_default_branch.sh` and retry safely |

# Troubleshooting Matrix

| Symptom | Likely cause | Command to run | Expected signal |
| --- | --- | --- | --- |
| `gh auth status` says not logged in | Missing or expired auth | `gh auth status` | Shows no active login or auth failure |
| `gh pr view` fails on current branch | No PR associated or wrong repo | `git branch --show-current` then `gh pr view --json number,title,url` | Either resolves PR or confirms no associated PR |
| Comments seem incomplete | Wrong endpoint for comment type | See `examples/gh-api-comment-queries.md` | Separate issue comments, review comments, and thread data |
| Only first set of comments appears | Pagination not handled | `gh api --paginate <endpoint>` | More than one page retrieved where available |
| API calls fail despite valid login | Permission mismatch or private repo access problem | Retry the exact failing `gh api` or `gh pr view` call after auth review | Error message points to repo or scope access |
| `gh` works locally but not in the agent environment | Network or sandbox restriction | Re-run the smallest failing `gh` command after requesting network approval | Command succeeds once network policy allows GitHub access |

## Notes

- `gh auth status` is a preflight check, not a full permission audit.
- Fine-grained PAT permissions vary by repository and operation.
- Prefer the smallest reproducible failing command when debugging access issues.

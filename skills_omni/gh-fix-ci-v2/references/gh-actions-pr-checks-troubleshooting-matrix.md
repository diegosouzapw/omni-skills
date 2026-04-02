# GitHub Actions PR Checks Troubleshooting Matrix

| Symptom | Likely cause | Evidence to collect | Next safe action |
| --- | --- | --- | --- |
| PR blocked but no obvious failed run | Missing, skipped, stale, or renamed required check | Required check name, workflow triggers, latest commit SHA, branch protection expectation | Use the required checks guide and report exact state |
| Run still in progress | Not enough evidence yet | Run status, job status, partial logs, run URL | Wait or re-check later; do not overstate root cause |
| Logs contain `Resource not accessible by integration` | Token permission or event-context limitation | Workflow event, permission-related error text, whether PR is from a fork | Diagnose permissions carefully; avoid broadening access casually |
| Fork PR cannot use secrets | Expected security boundary | PR source, secret-dependent steps, event type | Report limitation clearly; do not bypass safeguards |
| Only one matrix job fails | Environment-specific failure | Matrix values, failing job name, differences from passing legs | Scope the hypothesis to the differing environment |
| Job skipped unexpectedly | Conditional or trigger logic mismatch | Event, branch/ref, `if` logic clues, path filters | Treat as workflow logic diagnosis, not automatic test failure |
| Logs are unhelpful | Failure detail lives in annotations, summaries, or artifacts | Run page, annotations, artifact names, step summaries | Note the evidence gap and inspect adjacent signals if available |
| Check links to external CI | Non-GitHub provider | Check name and details URL | Mark out of scope and provide the link only |
| Check remains pending after a fix | Latest commit did not trigger expected workflow or branch protection expects old name | Commit SHA, workflow triggers, required check name | Confirm trigger behavior and required-check naming |
| Cancelled run blocks progress | Superseded, manually cancelled, or concurrency interaction | Run status, cancellation timing, replacement run if any | Report whether a newer run exists before suggesting next steps |

## Summary rule

Always report the exact observed state:

- failed
- pending
- in progress
- skipped
- cancelled
- missing but required
- external

That classification often matters more than the raw check name.

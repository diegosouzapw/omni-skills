# Troubleshooting Matrix

| Scenario | Symptoms | Likely Cause | Recommended Next Step |
| --- | --- | --- | --- |
| Auth or permission failure | `gh` returns 403, missing runs, or empty log access | Wrong account, missing repo access, insufficient workflow visibility | Run `gh auth status`, verify the active host/account, and re-authenticate securely if needed |
| External check | PR check exists but has no GitHub Actions run behind it | Non-Actions provider such as Buildkite or another external service | Record check name and details URL; hand off |
| Check pending or queued | Required check never finishes | Environment approval, concurrency, runner capacity, or in-progress workflow | Inspect run state and approvals before treating it as failure |
| Check missing | Expected workflow/check never appears on PR | Branch/path filter mismatch, event mismatch, `if:` condition skip | Review workflow triggers and conditions |
| Fork-specific failure | Main repo branches pass, fork PR fails or skips steps | No secrets on fork, reduced `GITHUB_TOKEN` permissions, event behavior differences | Confirm fork context and propose a security-preserving fix |
| Missing logs | `gh run view --log` is empty or incomplete | In-progress run, wrong attempt, retention expiry, permissions issue | Inspect the correct run/attempt, check artifacts, and state uncertainty clearly |
| Flaky failure | Same job passes on rerun or fails intermittently | Network issue, dependency registry, cache behavior, test nondeterminism | Mark as likely flaky, collect supporting evidence, and propose minimal validation |
| Cache issue | Failure disappears after clearing cache or changing dependency restore behavior | Stale or mismatched cache | Inspect cache usage and validate the smallest safe cache fix |
| Permission denied inside workflow | Step fails with API, package, or deployment access errors | Workflow permissions too narrow or token context differs | Review least-privilege permissions and event context before broadening access |
| Blocked deployment gate | Run waits on protected environment approval | Environment protection rule | Report blocked state and identify approval requirement |

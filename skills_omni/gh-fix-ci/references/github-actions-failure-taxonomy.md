# GitHub Actions Failure Taxonomy

Use this taxonomy to classify failures precisely and avoid shallow summaries.

## 1. Code or Test Failure

Typical signs:
- unit, integration, or end-to-end tests fail
- lint or typecheck errors
- build compilation failure

Good summary shape:
- "The workflow ran normally; the failing job is `test` and the first actionable error is a failing integration assertion in `...`."

## 2. Workflow Configuration Failure

Typical signs:
- invalid workflow syntax
- wrong action inputs
- missing matrix variable
- bad `if:` expression
- incorrect path or branch filter

Good summary shape:
- "The workflow configuration prevented the expected job from running on this PR because the path filter excludes the changed files."

## 3. Permissions or Token Failure

Typical signs:
- API access denied
- package publish denied
- status update denied
- deployment approval or token scope error

Good summary shape:
- "The job fails during GitHub API access; this appears to be a permissions issue rather than a code regression."

## 4. Fork or Secret Availability Failure

Typical signs:
- secret-dependent step skipped or fails only on fork PRs
- workflow works on trusted branches but not on external forks

Good summary shape:
- "The workflow depends on a secret that is unavailable in the fork PR context."

## 5. Infrastructure or Flaky Failure

Typical signs:
- transient network error
- package registry timeout
- rerun succeeds without code changes
- cache behavior changes outcome

Good summary shape:
- "The evidence points to a nondeterministic infrastructure failure; confidence in a code fix is low."

## 6. Blocked or Waiting State

Typical signs:
- environment approval required
- job queued but not started
- concurrency cancellation or replacement

Good summary shape:
- "The PR is blocked on environment approval; it is not currently failing due to application code."

## 7. External Check

Typical signs:
- check exists on PR but does not map to a GitHub Actions run

Good summary shape:
- "This required check is external to GitHub Actions. The details URL is the only supported evidence path in this skill."

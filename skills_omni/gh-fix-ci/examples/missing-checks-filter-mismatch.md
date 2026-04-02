# Worked Example: Missing Checks Due to Filter Mismatch

## Situation

A user says the PR is missing a required CI workflow, but no failing run appears in the Actions tab for that PR event.

## Likely Cause

The workflow trigger excludes the PR because of:

- `branches` filter mismatch
- `paths` filter mismatch
- `paths-ignore`
- `if:` condition evaluating to false
- event mismatch between `pull_request`, `pull_request_target`, and other triggers

## Example Summary

```text
I did not find a failing GitHub Actions run for the expected check. The workflow appears not to have been triggered for this PR.

Most likely explanation:
The workflow trigger or job condition excludes this change set.

Next diagnostic step:
Review the workflow's `on.pull_request` filters and any job-level `if:` conditions against the files and branch used in this PR.

I have not made changes yet. If you want, I can inspect the workflow YAML and propose the smallest safe fix.
```

## Reminder

A missing check is not automatically a failing check. Confirm trigger and filter behavior before proposing code changes.

# Required Checks Guide

Many "failing CI" reports are actually required-check state problems.

## Distinguish these cases

### Failed
A check ran and concluded unsuccessfully.

### Missing
A required check name is expected for merge, but no current run produced it.

### Skipped
A job or workflow was skipped due to conditions, filters, or event context.

### Stale
A previously relevant check exists, but not for the latest commit or expected workflow execution.

### Pending
A required check has not completed yet or is waiting on a run that never meaningfully started.

## Common causes

- branch filters exclude the PR branch
- path filters prevent the workflow from running
- event mismatch between what the workflow listens for and what the PR triggered
- a check name changed but branch protection still expects the old name
- conditional logic skipped the job unexpectedly
- the latest commit did not trigger the expected workflow

## What to report

When this happens, provide:

- the exact required check name
- whether it is missing, skipped, stale, or pending
- whether any related workflow ran at all
- whether branch protection appears to expect an old or renamed check
- whether trigger filters or conditions are likely involved

## Safe operator stance

- do not report this generically as "tests failing" when no failing test run exists
- do not recommend branch protection changes casually
- if a workflow rename or trigger mismatch is suspected, call that out explicitly in the plan

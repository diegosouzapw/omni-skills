# Yeet Router Guidance

Route away from this skill when the requested work no longer matches a simple explicit yeet flow.

## Stay in `yeet`

Stay here only if all of the following are true:

- the user explicitly wants stage + commit + push + PR
- broad staging is acceptable
- there are no conflicts or policy exceptions
- standard Git and GitHub CLI operations should be enough

## Hand off when

### Selective staging is needed

Examples:

- only commit one file
- exclude unrelated changes
- split work into multiple commits

### Merge or rebase conflicts exist

Examples:

- unmerged paths
- rebase in progress
- merge conflict markers

### The main problem becomes CI or debugging

Examples:

- failing tests block the PR
- lint/build failures dominate the task
- the user needs root-cause analysis more than Git automation

### Repository policy dominates the task

Examples:

- branch protection blocks the expected flow
- approvals or rulesets need manual handling
- permissions or auth problems require user intervention

## Handoff rule

When handing off, preserve:

- current branch
- default/base branch
- `git status -sb` output
- push or PR error text
- whether a PR already exists

That context prevents the next workflow from restarting blind.

# CODEOWNERS Reality Check

Use this guide when the user asks whether declared ownership matches actual maintenance behavior.

## Core rule

`CODEOWNERS` expresses declared review intent for matching paths. It is **not** proof that those users or teams are the people actually maintaining the code.

## Compare three things

For each sensitive path or cluster, compare:

1. observed Git-history maintainers
2. declared `CODEOWNERS` entries
3. likely enforcement context, such as required reviews on the target branch

## Questions to answer

- Does the `CODEOWNERS` file apply to the branch being analyzed?
- Do the patterns appear to cover the paths in question?
- Are there likely invalid or stale patterns?
- Do observed maintainers materially differ from declared owners?
- Does the repo appear to enforce code-owner review, or are owners only requested informally?

## Interpretation guidance

### Strong drift signal

- sensitive path has concentrated observed ownership
- declared owners are absent from recent history
- required review enforcement appears weak or absent

### Weak drift signal

- declared owners still review but rarely author commits
- ownership is spread across platform or release engineers by merge/committer policy
- branch-specific rules differ from the branch being measured

## Reporting language

Prefer wording like:

- "Observed maintainers differ from declared CODEOWNERS for these auth paths."
- "This suggests ownership drift or review-only ownership, not necessarily a broken policy."
- "Interpretation depends on branch applicability and review enforcement."

## Do not do

- Do not state that `CODEOWNERS` proves active maintenance.
- Do not treat mismatch as failure without checking branch scope and enforcement context.

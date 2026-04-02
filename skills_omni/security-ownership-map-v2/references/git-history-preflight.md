# Git History Preflight

Use this checklist before trusting ownership, bus-factor, or co-change outputs.

## Goal

Confirm that the repository state is complete enough for history-based analysis.

## Checks

### 1. Confirm the intended branch or ref

Record:

- repository path
- current branch or target ref
- whether analysis should use the default branch, a release branch, or a specific commit range

Example:

```bash
git -C /path/to/repo rev-parse --abbrev-ref HEAD
git -C /path/to/repo rev-parse HEAD
```

### 2. Detect shallow clones

A shallow clone can undercount maintainers and make bus factor look artificially low.

Example:

```bash
git -C /path/to/repo rev-parse --is-shallow-repository
```

If this returns `true`, treat results as provisional until the missing history is fetched.

### 3. Watch for partial or filtered clone surprises

If objects or history were filtered during clone, path-limited or older-history analysis may be incomplete.

Look for operator clues such as:

- unexpectedly short history
- missing older commits in a requested window
- analysis focused on branches that were never fetched locally

### 4. Verify the requested time window is satisfiable

If the user requests `--since "12 months ago"`, confirm the repo actually contains history for that window.

Example:

```bash
git -C /path/to/repo log --since="12 months ago" --oneline --all | head
```

If this is unexpectedly sparse, check branch/ref selection and clone completeness.

### 5. Decide attribution mode before running the workflow

Ownership metrics differ depending on whether you attribute by:

- author identity
- committer identity

Record the choice in the final report.

### 6. Decide whether merges should count

Merge-heavy repositories can shift ownership totals significantly if merges are included.

Record whether merge commits are excluded or included.

## Report language

Use wording like:

- "History appears complete enough for the requested 12-month window on branch `main`."
- "Repository is shallow; ownership and bus-factor outputs should be treated as provisional."
- "Attribution uses author identity with merges excluded."

## Do not do

- Do not claim authoritative ownership from a shallow clone.
- Do not omit branch/ref and time-window assumptions from the write-up.
- Do not compare outputs across runs unless attribution and merge policy are matched.

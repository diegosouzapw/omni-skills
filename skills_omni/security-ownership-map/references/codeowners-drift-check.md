# CODEOWNERS Drift Check

## Purpose

Use this procedure to compare declared ownership in `CODEOWNERS` against observed maintainers from git history.

## Important framing

`CODEOWNERS` expresses declared review ownership for matching paths on a branch. It is not a historical maintenance log. Git-history maintainers are observed contributors, not necessarily the people with current review authority.

Treat mismatches as signals to classify, not automatic proof that either side is wrong.

## Comparison procedure

1. Analyze the repository on the same branch that matters for the review process.
2. Query the relevant hotspots or sensitive files from `summary.json` or `files.csv`.
3. Locate the active `CODEOWNERS` file for that branch.
4. Check whether each path is covered by the expected rule.
5. Compare declared owners with observed maintainers from the ownership map.
6. Classify the mismatch.

## Mismatch categories

### Drift

Declared owners exist, but recent historical maintenance is dominated by different people.

### Coverage gap

Historically active maintainers are absent from `CODEOWNERS` for sensitive paths.

### Over-broad ownership

A broad pattern covers the file, but the declared owner set is too general to reflect real stewardship.

### Syntax or precedence issue

The apparent mismatch is explained by rule ordering, invalid syntax, or unexpected pattern behavior.

### Branch mismatch

The analyzed branch and the branch containing the effective `CODEOWNERS` rules are not the same.

## Practical comparison packet

For each hotspot file, record:

- file path
- sensitivity tags
- observed top maintainers
- bus factor
- matching `CODEOWNERS` rule
- declared owners
- mismatch classification
- confidence notes

## Optional GitHub-specific checks

If the repository is GitHub-hosted and the workflow allows API use, review CODEOWNERS errors through the platform's official mechanisms before concluding that a mismatch is governance drift.

## Reporting example

- `auth/session/token_service.py`: observed maintainers are alice@corp and bob@corp; CODEOWNERS assigns @platform-reviewers only. Classification: over-broad ownership plus coverage gap.
- `crypto/tls/handshake.rs`: observed maintainer is carol@corp with bus factor 1; no matching CODEOWNERS rule found. Classification: coverage gap.

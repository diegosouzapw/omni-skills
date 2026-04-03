# Identity Normalization and Mailmap Checks

## Why this matters

Ownership analysis depends on contributor identity quality. If one person appears as multiple names or emails, people-to-file ownership, hidden-owner ranking, and bus-factor metrics become fragmented and misleading.

## Preferred approach

Use `.mailmap` when the repository already maintains one. If it does not, note the limitation explicitly and avoid overclaiming precision in people-level findings.

## Quick checks

### Raw contributor view

```bash
git shortlog -sne HEAD
```

### Mailmap-aware contributor view

```bash
git shortlog -sne --mailmap HEAD
```

If these differ materially, identity normalization is affecting the analysis and should be recorded.

## What to look for

- same person with old and new corporate emails
- same person with shortened vs full name
- local username-style identities mixed with real names
- bot addresses that resemble human contributors

## Practical workflow

1. Run a raw aggregation.
2. Run a mailmap-aware aggregation.
3. Compare top contributors manually or with `scripts/check_mailmap_consistency.sh`.
4. If unresolved ambiguity remains, label the findings as approximate.

## Reporting guidance

State one of the following in the handoff:

- `Identity normalization: .mailmap present and reviewed.`
- `Identity normalization: no .mailmap found; contributor aliases may fragment person-level findings.`
- `Identity normalization: partial alias cleanup applied; remaining ambiguity noted in findings.`

## Symptoms of alias problems

- one engineer appears multiple times in `people.csv`
- unexpectedly low bus factor for well-known subsystems
- hidden-owner output looks diluted across nearly identical identities

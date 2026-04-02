# Identity Normalization

People-to-file ownership quality depends on contributor identity cleanup.

## Why this matters

The same maintainer may appear under multiple names or emails across Git history. That can:

- split ownership share across aliases
- inflate apparent bus factor
- hide real concentration of knowledge
- make person-level comparisons noisy or misleading

## Preferred approach

Use the repository's `.mailmap` if available.

A `.mailmap` lets Git treat multiple aliases as one canonical person during history-oriented reporting workflows.

## What to look for

Common identity split patterns:

- corporate vs personal email
- renamed display names
- bot-like or machine-generated aliases for a real maintainer
- inconsistent casing or formatting

## Practical workflow

1. Scan for suspicious duplicate identities in early results.
2. Group likely aliases for review.
3. Prefer existing repository `.mailmap` rules when present.
4. If no mapping exists, document unresolved aliases explicitly.
5. Re-run the analysis after normalization when people-level findings matter.

## Reporting guidance

Use wording like:

- "People-level metrics are provisional because contributor aliases have not been fully reconciled."
- "Ownership results were normalized using repository mailmap rules."

## Example

See `examples/mailmap.example` for sample patterns.

## Do not do

- Do not present precise person counts as authoritative when aliases are obviously unresolved.
- Do not silently merge identities without noting the basis for the merge.

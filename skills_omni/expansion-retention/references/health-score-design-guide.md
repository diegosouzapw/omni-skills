# Health Score Design Guide

Use health scores as an explainable operating tool, not a decorative number.

## Design principles

- prefer a limited number of signals the team understands
- use more leading indicators than lagging indicators
- map every score band to an action
- separate segment models when customer behavior differs materially
- validate weights against actual churn and renewal outcomes

## Suggested signal categories

- product usage depth and breadth
- activation milestone completion
- support burden or sentiment
- stakeholder engagement
- business outcome evidence
- billing or renewal risk
- survey signals such as CSAT, CES, or NPS when available

## Minimum worksheet

For each signal, define:

- signal name
- why it matters
- source system
- refresh cadence
- segment applicability
- relative weight
- owner
- action when triggered

## Validation checks

A health score is weak when:

- nobody can explain why an account is red
- nearly all inputs are lagging indicators
- the same weighting is used across very different segments
- score changes do not lead to action
- the team can cite many false positives or false negatives

## Review cadence

- monthly review of edge cases
- quarterly recalibration against actual outcomes
- immediate review if a major pricing, packaging, or onboarding change ships

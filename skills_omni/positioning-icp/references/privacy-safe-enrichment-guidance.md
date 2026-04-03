# Privacy-Safe Enrichment Guidance

This skill can use enrichment and intent signals as supporting inputs, but they introduce privacy, profiling, and data-quality risk.

## Safe operating principles

- prefer account-level signals over unnecessary personal data
- collect only data needed for the ICP or qualification task
- document source, purpose, freshness, and confidence
- set retention limits for imported data
- avoid using sensitive or unnecessary attributes
- treat regional rules as variable, not universal

## Practical guardrails

### Use enrichment for
- company attributes
- stack or workflow readiness clues
- broad trigger events
- account prioritization support

### Use extra caution for
- individual-level profiling
- direct marketing decisions
- combining multiple sources into hidden risk scores
- stale or unverifiable trigger events

## Vendor-confidence note

For each key attribute, record:
- vendor/source
- date observed
- confidence level
- whether confirmed by first-party evidence

## If legal uncertainty appears

Do not improvise legal advice.

Instead:
- minimize data use
- prefer account-level scoring
- document assumptions
- route legal interpretation to counsel

## Data quality reminder

Third-party intent and enrichment can be directionally useful but are often noisy.
Never let vendor data override stronger evidence from customer behavior, retention, or actual deal outcomes.

# Data Health Audit Checklist

Use this checklist before benchmarking, board reporting, or major budget decisions.

## Scoring model

A practical scoring model:

```text
Data Health Score = (Completeness * 0.35) + (Accuracy * 0.30) + (Recency * 0.20) + (Consistency * 0.15)
```

## Decision gate

| Score | Meaning | Allowed use |
| --- | --- | --- |
| 90-100 | High trust | Strategic reporting and planning |
| 80-89 | Usable with caveats | Most reviews; note weak areas |
| 70-79 | Directional only | Avoid hard benchmark or board-grade claims |
| Below 70 | Unsafe for strategic use | Clean data before drawing conclusions |

## Completeness

Check whether required fields are populated for the relevant object.

Typical required fields:

- lead source
- lifecycle stage
- owner
- stage dates
- opportunity amount
- close date
- account segment
- pricing model or plan
- product/account identifier mapping

## Accuracy

Check whether values appear valid and believable.

Review:

- impossible dates
- negative or zero values where invalid
- stale owner or segment assignments
- obviously wrong source tags
- duplicate opportunities or accounts

## Recency

Check whether the data is current enough for the decision.

Review:

- records updated in the last 30/60/90 days
- stage movements logged promptly
- enrichment refresh cadence
- lag between source system and reporting layer

## Consistency

Check whether fields and rules are used the same way across teams and systems.

Review:

- standardized stage names
- standardized channel naming
- consistent date logic
- one active definition per key metric
- stable account and user identity joins

## Required audits for GTM measurement

### CRM audit

- stage/date completeness
- owner completeness
- source and campaign tagging
- duplicate lead/contact/account rate
- closed-lost reason coverage

### Product analytics audit

- stable event names
- stable value-event definition
- account mapping quality
- user identity merge policy
- event coverage for activation and success actions

### Billing / finance audit

- invoiced versus recognized revenue definitions
- contract amendments and expansions captured
- usage records aligned to billed units
- committed versus consumed logic documented

## Stop conditions

Pause strategic interpretation if any of these are true:

- source fields are missing for a large share of pipeline
- stage dates are incomplete or overwritten unpredictably
- billing and CRM cannot be joined reliably at account level
- TTFV or activation depends on an undefined event
- AI cost inputs are missing or aggregated too coarsely to assess margin

## Remediation output

If the audit fails, produce:

- the lowest-trust domains
- the likely business impact
- the top 3 cleanup actions
- the owner of each cleanup action
- the earliest date when the metric can be trusted again

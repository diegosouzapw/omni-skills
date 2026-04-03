# ICP Scoring Model Example

## Scenario

Mid-market B2B fintech workflow targeting RevOps, SalesOps, and GTM leadership in US and UK companies.

## Sample weighting

```text
Firmographic Fit = 35%
Technographic Fit = 25%
Intent Fit = 40%
```

## Example sub-score inputs

### Firmographic

- employee count in target band
- fintech / vertical fit
- target geography
- funding or maturity stage

### Technographic

- uses adjacent revenue tools
- stack complexity suggests integration value
- evidence of migration or tooling change

### Intent

- category research
- hiring related roles
- recent first-party buying signals
- funding or expansion signals

## Example routing bands

| Score band | Route |
| --- | --- |
| 85-100 | hot review queue |
| 70-84 | prioritized sequence if eligible |
| 50-69 | nurture / CRM only |
| below 50 | deprioritize or reject |

## Calibration reminder

Do not finalize the model from assumptions alone. Compare score bands against real outcomes and adjust weights if the model overvalues noisy intent or underweights durable fit signals.

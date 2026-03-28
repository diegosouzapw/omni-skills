# Contract Review Example

## Change

- Add `payment_provider` to checkout events
- Rename `revenue_amount` to `gross_revenue_amount`
- Clarify that refunds are excluded from the default revenue metric

## Contract Decisions

- Additive field ships immediately
- Renamed field requires dual-write window and deprecation notice
- Metric semantic change requires documentation update and stakeholder sign-off

## Validation Scope

- warehouse models
- finance dashboard
- experimentation pipeline
- model features using checkout revenue

# Observability Cutover Checklist

Use this checklist before approving phased rollout or traffic shifting.

## Minimum Telemetry

For the migrating area, define:

- request volume
- latency
- error rate
- saturation or queue/backlog indicators where relevant
- business outcome signals for the critical user journey

## Correlation Requirements

Ensure there is a way to correlate behavior across legacy and new paths.

Examples:

- request identifiers
- trace context propagation
- consistent log fields
- environment or route labels

## Dashboards

Prepare dashboards that compare:

- legacy vs new path latency
- legacy vs new path error rate
- traffic split by route or version
- migration wave success metrics

## Alerts

Define alerts for:

- elevated error rate
- latency regression
- drop in successful transactions
- replication or synchronization lag where relevant
- unexpected traffic imbalance after cutover

## Rollback Triggers

Every migration wave should name measurable rollback triggers, such as:

- sustained error rate above threshold
- regression in key business transaction completion
- missing or invalid data after handoff
- unacceptable latency increase

## Approval Rule

Do not recommend canary, blue-green, or phased traffic shifting if the plan cannot explain how failure will be detected within the cutover window.

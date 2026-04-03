# Observability Design Checklist

Use this for production-impacting changes.

## Metrics

Document:

- request or job volume
- success/error rates
- latency percentiles where relevant
- dependency health metrics
- capacity or saturation metrics when useful

For each important metric, define:

- threshold or expected range
- owner
- what action is taken when it breaches

## Traces

Document:

- major service boundaries
- trace/context propagation expectations
- important spans for critical workflows
- external dependency calls worth tracing

## Logs

Logs should be:

- structured
- queryable
- useful for diagnosis
- safe to retain

Include examples of safe fields such as:

- request or correlation ID
- operation name
- outcome/status
- duration
- service/component name
- non-sensitive entity IDs when appropriate

Do not log:

- passwords
- tokens
- secrets
- full payment data
- unnecessary sensitive personal data

## Alerts

Define:

- alert condition
- severity
- owner or on-call target
- expected first response
- release-blocking alerts during canary if applicable

## Rollout readiness

During staged release, identify the minimum telemetry required to decide whether to continue, pause, or rollback.

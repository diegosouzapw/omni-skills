# Observability Checklist

## Service Boundary

- Primary user path and dependency chain are explicit
- Traffic shape and workload type are documented
- Owner and escalation path are known

## Telemetry Coverage

- Request or job identifiers can be followed across signals
- Core latency, error, traffic, and saturation metrics exist
- Logs include stable fields for tenant, request, or job correlation
- Traces or span events exist for the highest-risk path

## Alerts and SLOs

- Page-worthy alerts are tied to user impact
- Alerts name an owner and a first-response action
- SLO window, target, and error budget are explicit
- Burn-rate or equivalent budget alerts exist when SLOs exist

## Runbooks

- Top failure modes have first-response guidance
- Rollback or mitigation steps are available
- Investigation pivots list which metrics, logs, and traces to check first

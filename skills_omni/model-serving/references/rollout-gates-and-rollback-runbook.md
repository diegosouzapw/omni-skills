# Rollout Gates And Rollback Runbook

Use this runbook to make model rollout an operator workflow instead of an informal discussion.

## 1. Choose Rollout Mode

- **Shadow:** compare outputs without serving them to users.
- **Canary:** send a controlled slice of production traffic.
- **Blue/green:** switch between two prepared environments.
- **Direct cutover:** only when risk is low and rollback is simple.

## 2. Preconditions

Confirm before rollout:

- contract version is documented
- upstream feature or context dependencies are unchanged or reviewed
- startup/readiness behavior is tested
- dashboards and alerts exist for latency, errors, fallback rate, and quality proxies
- rollback operator is named
- previous stable version remains deployable

## 3. Success Metrics

Use both system and quality metrics.

Examples:

- p95 latency below target
- timeout rate below target
- error rate below target
- fallback rate not elevated
- parse or schema-valid rate remains stable
- task-specific KPI does not regress beyond agreed threshold

## 4. Abort Thresholds

Abort if any threshold is crossed for the defined observation window.

Examples:

- p99 latency exceeds threshold
- fallback activation spikes above baseline
- output validation failures increase
- business KPI or quality proxy degrades beyond allowed delta
- dependency error rate rises materially

## 5. Observation Window

Document:

- minimum run duration
- minimum traffic volume
- which time-of-day patterns must be included
- whether peak traffic must be observed before promotion

## 6. Rollback Authority

Name:

- primary approver
- backup approver
- implementing operator
- communication channel for decision logging

## 7. Rollback Actions

Keep rollback explicit and reversible.

- pause rollout
- route traffic back to prior stable version
- disable canary or feature flag if used
- confirm recovery on latency, errors, fallback rate, and quality proxies
- retain traces and logs for post-incident review

## 8. After Action Notes

Capture:

- what triggered rollback or promotion
- which metrics were decisive
- whether probes, scaling, or dependency assumptions were wrong
- what should become a standing rollout gate next time

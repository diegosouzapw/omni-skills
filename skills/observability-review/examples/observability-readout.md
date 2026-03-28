# Observability Readout Example

## Service

- `payments-api`
- Owner: `checkout-platform`
- Primary dependency risk: `ledger-writer`, `postgres`, `queue consumer`

## Findings

1. `latency_p95` exists, but there is no per-endpoint breakdown for checkout write paths.
2. Error alerts page on all `5xx` spikes, but do not separate dependency failures from app failures.
3. Logs and traces both carry `request_id`, but queue retries drop the field before consumer processing.

## Required Before Release

- Add queue-side correlation ID propagation.
- Split alerts into dependency latency, dependency error, and direct application errors.
- Add a burn alert tied to the checkout availability objective.

## Follow-Up

- Add a runbook for degraded ledger writes.
- Add dashboard links to the alert annotation payload.

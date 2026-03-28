# Serving Contract Template

Use this template when defining or reviewing a production inference contract.

## 1. Service Identity

- **Service name:**
- **Owner/team:**
- **Serving mode:** online | async | batch
- **Primary consumers:**
- **Model name:**
- **Model version identifier:**
- **Contract version:**

## 2. Request Contract

- **Schema summary:**
- **Required fields:**
- **Optional fields:**
- **Field constraints and validation rules:**
- **Maximum request size:**
- **Idempotency key required:** yes | no
- **Correlation/request ID required:** yes | no

## 3. Response Contract

- **Success shape:**
- **Error shape:**
- **Typed error classes:** validation | timeout | dependency_failure | rate_limit | unavailable | internal
- **Structured output required for downstream parsing:** yes | no
- **Compatibility expectations:** backward-compatible | versioned break | internal only

## 4. Time And Failure Budget

- **Target latency or completion SLO:**
- **Request timeout budget:**
- **Retry policy:**
- **Retry-safe operations only:** yes | no
- **Fallback behavior if model call fails:**
- **Fallback behavior if dependency fails:**
- **Fail-open or fail-closed decision:**

## 5. Dependency Contract

- **Feature source(s):**
- **Retrieval/context source(s):**
- **Preprocessing version:**
- **Prompt/template version, if applicable:**
- **Secret dependencies:**
- **External service dependencies:**
- **Behavior when a dependency is stale or unavailable:**

## 6. Observability Requirements

Every request should make these fields observable where appropriate:

- request_id
- model_version
- contract_version
- route or endpoint
- tenant or caller class
- preprocessing version
- prompt/template version, if applicable
- fallback_used
- timeout/error_class

## 7. Rollout Notes

- **Rollout mode:** shadow | canary | blue/green | cutover
- **Success metrics:**
- **Abort thresholds:**
- **Observation window:**
- **Rollback authority:**
- **Rollback method:**

## 8. Open Questions

- Which consumers break if the response contract changes?
- What degraded behavior is acceptable?
- Which quality proxy should block rollout even if infrastructure is healthy?
- How is lineage preserved for async or batch reprocessing?

# Data Contract Template

Use this template to define or review a contract for an event, dataset, table, feature input, or published model.

## 1. Identity

- **Contract name:**
- **Contract surface:** event / table / view / metric / feature / dataset
- **Version:**
- **Status:** draft / active / deprecated / retired
- **Authoritative location:**

## 2. Ownership

- **Producer owner:**
- **Data steward / platform owner:**
- **Primary consumer groups:**
- **Escalation path / on-call:**

## 3. Scope And Purpose

- What business or operational purpose does this data serve?
- What is explicitly in scope?
- What is explicitly out of scope?

## 4. Structural Contract

- **Primary grain / unit of record:**
- **Key fields:**
- **Partitioning or ordering assumptions:**
- **Schema definition:**

| Field | Type | Required? | Nullable? | Allowed values / constraints | Meaning |
| :---- | :--- | :-------- | :-------- | :--------------------------- | :------ |
| example_field | string | yes | no | non-empty | Example description |

## 5. Semantic Contract

- Definitions for important fields or dimensions:
- Units, currencies, time zones, or normalization assumptions:
- Derived field logic:
- Known exclusions or caveats:
- Default or missing-value meaning:

## 6. Quality Contract

- **Required checks:** uniqueness / non-null / accepted values / referential assumptions / anomaly thresholds
- **Validation location:** CI / build / warehouse / runtime / observability
- **Failure handling:** warn / block / page / quarantine

## 7. Timeliness And Reliability

- **Expected freshness / latency:**
- **Completeness expectations:**
- **SLA / SLO if used:**
- **Backfill or replay expectations:**

## 8. Compatibility And Lifecycle

- **Compatibility mode:** backward / forward / full / none / case-by-case
- **Change policy:** additive-only / versioned breaking changes / governed exceptions
- **Deprecation window:**
- **Migration guidance:**
- **Rollback plan:**

## 9. Security And Governance Notes

- **Classification:** public / internal / confidential / restricted
- **Sensitive fields:**
- **Retention or deletion expectations:**
- **Approval or legal/policy notes:**

## 10. Lineage And Dependencies

- **Upstream sources:**
- **Transformation layers:**
- **Known downstream consumers:**
- **Lineage evidence location:**

## 11. Signoff

- **Producer approved by:**
- **Platform/data approved by:**
- **Consumer representative approved by:**
- **Decision:** approved / approved with versioning / blocked
- **Decision date:**

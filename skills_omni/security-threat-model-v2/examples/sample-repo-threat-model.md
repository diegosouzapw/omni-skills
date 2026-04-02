# payments-api Threat Model

## Scope

- In scope: `services/payments-api`
- Out of scope: unrelated monorepo services, CI pipeline, shared docs
- Repository path analyzed: `services/payments-api`

## Evidence Summary

- `services/payments-api/src/server.ts` - API bootstrap and middleware registration
- `services/payments-api/src/routes/payments.ts` - payment-related routes
- `services/payments-api/src/middleware/auth.ts` - authentication middleware
- `services/payments-api/src/worker/reconcile.ts` - background reconciliation worker
- `services/payments-api/deploy/k8s/ingress.yaml` - ingress exposure clue

## System Overview

Visible evidence shows an HTTP API with authenticated payment routes and a background reconciliation worker. The repo also suggests inbound internet reachability through an ingress manifest.

## Trust Boundaries

| Boundary | Evidence | Why it matters |
| --- | --- | --- |
| Internet -> API | `deploy/k8s/ingress.yaml`, `src/server.ts` | Untrusted requests reach route handlers |
| API -> database | `src/db.ts` | Payment and account state integrity depends on database writes |
| Queue -> worker | `src/worker/reconcile.ts` | Forged or replayed jobs could affect payment reconciliation |

## Key Assets

| Asset | Why it matters | Evidence |
| --- | --- | --- |
| Payment records | Integrity-critical financial state | `src/routes/payments.ts` |
| Access tokens | Enable account actions | `src/middleware/auth.ts` |
| Reconciliation jobs | Can alter payment state indirectly | `src/worker/reconcile.ts` |

## Assumptions and Unknowns

- Assumption: The ingress is active in production. This affects likelihood for internet-origin attacks.
- Unknown: Whether queue messages are authenticated or signed.

## Abuse Paths

### 1. Authorization gap on payment status update route

- Preconditions: Authenticated user can reach payment mutation endpoint.
- Attack path: User supplies another account's payment identifier to update or view status if ownership checks are missing downstream.
- Impacted asset: Payment records.
- Boundary crossed: User tenant boundary to another tenant's records.
- Effect: Cross-account integrity or confidentiality impact.
- Existing controls observed: JWT authentication middleware present.
- Evidence: `src/routes/payments.ts`, `src/middleware/auth.ts`
- Likelihood: Medium
- Impact: High
- Priority: High
- Confidence: Medium
- Recommended mitigations: Enforce resource-level authorization checks in service layer; bind identifiers to authenticated principal server-side.
- Likely implementation touchpoints: `src/routes/payments.ts`, payment service methods.

### 2. Forged reconciliation job triggers unauthorized state changes

- Preconditions: Attacker can publish or replay queue messages, or another internal system is compromised.
- Attack path: Crafted job payload causes worker to reconcile or mutate records without verifying origin or authorization context.
- Impacted asset: Payment state integrity.
- Boundary crossed: Queue producer to worker trust boundary.
- Effect: Unauthorized reconciliation or corruption of financial workflow state.
- Existing controls observed: Worker handler exists; message authenticity controls not visible.
- Evidence: `src/worker/reconcile.ts`
- Likelihood: Medium
- Impact: High
- Priority: High
- Confidence: Low
- Recommended mitigations: Require signed or authenticated job messages, validate schema strictly, add idempotency and replay protection.
- Likely implementation touchpoints: queue producer, worker consumer, queue policy.

## Recommended Mitigations

| Recommendation | Control family | Likely implementation location | Priority |
| --- | --- | --- | --- |
| Add resource-level authorization for payment mutations | AuthZ enforcement | `src/routes/payments.ts` and service layer | High |
| Verify queue message authenticity and replay safety | Message authenticity | worker consumer and producer integration | High |
| Add strict payload schemas for job messages | Input validation | worker message parsing path | Medium |

## Confidence and Limitations

- Confidence level: Medium
- Main limitations: Queue trust model and production deployment details were not fully visible.

## Summary

The highest-risk concerns are cross-account payment actions if resource ownership checks are incomplete and unauthorized state changes if reconciliation jobs are not strongly authenticated and validated.

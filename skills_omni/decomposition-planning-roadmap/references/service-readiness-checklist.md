# Service Readiness Checklist

Use this before approving any extraction candidate for implementation.

## Ownership

- [ ] A team explicitly owns the service
- [ ] Runtime support expectations are defined
- [ ] On-call responsibility is clear
- [ ] Runbook owner is identified

## Delivery and rollback

- [ ] CI/CD path exists
- [ ] Deployment can be performed independently
- [ ] Rollback path is documented and tested or plausibly reversible
- [ ] Feature-flag or routing control exists when appropriate

## Observability

- [ ] Service logs are defined
- [ ] Core metrics are defined
- [ ] Request tracing exists or is planned before rollout
- [ ] Alerts and dashboards are identified

## Security and compliance

- [ ] Authn/authz expectations are known
- [ ] Sensitive data handling is understood
- [ ] Compliance boundary changes are reviewed

## Data and dependency readiness

- [ ] Data owner is identified
- [ ] Shared-schema risks are documented
- [ ] Upstream/downstream dependencies are mapped
- [ ] Batch/reporting impacts are reviewed

## Operability

- [ ] SLO/error-budget expectation is defined when relevant
- [ ] Failure modes are known
- [ ] Capacity/scaling assumptions are reviewed
- [ ] Support handoff is realistic

## Decision

- Ready now / Ready with conditions / Not ready
- Preconditions:
- Approver:

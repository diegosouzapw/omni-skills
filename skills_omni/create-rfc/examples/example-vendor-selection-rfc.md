# RFC: Select Feature Flag Platform for Multi-Team Product Delivery

- Status: Draft
- Owner / Driver: Developer Experience Team
- Reviewers / Approvers: Engineering Director, Security, Finance, Product Operations
- Created: 2026-03-27
- Last Updated: 2026-03-27
- Target Decision Date: 2026-04-18
- Impact: High

## Summary

We need a feature flag platform that supports controlled rollouts across multiple teams. This RFC compares continuing with the in-house solution, adopting Vendor A, and adopting Vendor B.

## Evidence / Data

- current in-house tooling lacks audit history and fine-grained access controls
- 4 teams independently requested stronger rollout controls in the past 6 months
- platform maintenance for the in-house system consumes approximately 0.25 FTE

## Decision Criteria

| Criterion | Weight | Type | Notes |
| --- | --- | --- | --- |
| Security and auditability | 5 | Must-have | Access control and change history are required |
| Rollout controls | 5 | Must-have | Percentage rollout and targeting are needed |
| Cost | 4 | Weighted | Must fit annual tooling budget |
| Vendor lock-in risk | 3 | Weighted | Important but not absolute |
| Migration effort | 3 | Weighted | We need adoption within two quarters |

## Option Evaluation

| Criterion | Weight | In-house | Vendor A | Vendor B | Notes |
| --- | ---: | ---: | ---: | ---: | --- |
| Security and auditability | 5 | 2 | 5 | 4 | In-house is weakest here |
| Rollout controls | 5 | 2 | 5 | 4 | Vendor A has strongest policy support |
| Cost | 4 | 4 | 3 | 4 | In-house looks cheaper but hides maintenance cost |
| Vendor lock-in risk | 3 | 5 | 2 | 3 | Vendor A is most proprietary |
| Migration effort | 3 | 5 | 3 | 4 | Vendor B is easiest external migration |

## Recommendation / Decision State

Recommend Vendor B unless security review finds a blocking gap. Vendor A scores slightly better on controls, but Vendor B offers a better balance of rollout capability, cost, migration effort, and lock-in profile.

## Risks and Mitigations

| Risk | Severity | Mitigation |
| --- | --- | --- |
| Migration takes longer than forecast | Medium | Start with one product area and provide SDK migration guide |
| Audit controls are insufficient for internal policy | High | Complete security review before approval |

## Success Metrics

- 3 pilot teams complete rollout within 8 weeks
- 100% of production flag changes are auditable
- reduce internal maintenance time by at least 50% within one quarter

## Outcome

Pending review and security sign-off.

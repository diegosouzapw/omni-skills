# RFC: Move Background Job Processing from a Single VM to a Managed Container Platform

- Status: Draft
- Owner / Driver: Platform Team
- Reviewers / Approvers: Backend Lead, Security Lead, Finance Partner
- Created: 2026-03-27
- Last Updated: 2026-03-27
- Target Decision Date: 2026-04-10
- Impact: High
- Related Docs / Issues: OPS-184, INC-2201, INC-2234

## Summary

We need to improve reliability and operational safety for background job processing. The current single-VM setup is fragile and has contributed to missed jobs and manual recovery work. This RFC compares keeping the current VM model, moving to a managed container platform, and adopting Kubernetes.

## Background / Context

The current worker system runs on one long-lived VM maintained manually by the platform team. Over the last quarter, two incidents were caused by host-level drift and one by manual deploy error. Recovery takes longer than expected because rollback depends on shell access and undocumented runbooks.

## Problem Statement

We need a more reliable and maintainable platform for background job workers without creating unnecessary operational complexity.

## Goals

- improve worker reliability
- reduce manual operational burden
- enable safer deploy and rollback behavior

## Non-Goals

- redesign the job processing application itself
- migrate all services to a new platform immediately

## Stakeholders

- Driver: Platform Team
- Approvers: Backend Lead, Security Lead
- Contributors: SRE, Finance
- Informed: Product Engineering Managers

## Assumptions

| Assumption | Confidence | Invalidation trigger |
| --- | --- | --- |
| Current workload fits a managed container service without major code changes | Medium | Sustained runtime or networking constraints require app redesign |
| Team can support one migration during Q2 | Medium | Q2 staffing changes reduce available platform capacity |

## Constraints

- migration should not require a multi-quarter replatform
- on-call burden should not increase materially
- spend increase should stay within approved infrastructure budget

## Evidence / Data

- 3 worker-related production incidents in the last quarter
- average rollback time is 42 minutes
- platform team spends about 6 hours/week on VM maintenance tasks

## Decision Criteria

| Criterion | Weight | Type | Notes |
| --- | --- | --- | --- |
| Reliability | 5 | Must-have | Incidents are driving the proposal |
| Operational complexity | 5 | Weighted | Small team capacity |
| Migration risk | 4 | Weighted | We need a low-friction change |
| Cost | 3 | Weighted | Budget matters but is not the top driver |

## Options Considered

### Option 1: Keep the current VM model

- Description: Continue operating workers on a manually managed VM and improve runbooks only.
- Benefits: Lowest immediate migration effort.
- Drawbacks: Reliability and configuration drift risks remain.
- Cost / Effort: Low short-term, higher long-term operational cost.
- Risks: More incidents tied to host management.
- Dependencies: None.

### Option 2: Move workers to a managed container platform

- Description: Run workers in a managed container service with declarative deploys and health checks.
- Benefits: Better deploy consistency, lower host-management burden, easier rollback.
- Drawbacks: Some migration work and observability updates needed.
- Cost / Effort: Medium.
- Risks: Initial migration issues, runtime tuning.
- Dependencies: CI/CD updates, secrets integration.

### Option 3: Adopt Kubernetes for workers

- Description: Move workers onto a Kubernetes cluster managed by the platform team.
- Benefits: Highest flexibility and future standardization potential.
- Drawbacks: Highest complexity for current needs.
- Cost / Effort: High.
- Risks: Platform overhead outpaces actual worker needs.
- Dependencies: Cluster operations, training, security controls.

## Recommendation / Decision State

Recommend Option 2: managed container platform. It improves reliability and operational safety more than the status quo without introducing the operational complexity of Kubernetes.

## Risks and Mitigations

| Risk | Severity | Mitigation |
| --- | --- | --- |
| Migration introduces job scheduling regressions | Medium | Run shadow validation and phased cutover |
| Container cost exceeds estimate | Low | Review usage after 30 days and right-size resources |

## Success Metrics

- reduce worker-related incidents by 50% within one quarter
- reduce average rollback time from 42 minutes to under 15 minutes
- reduce manual platform maintenance time by at least 4 hours/week
- Review date: 2026-07-15

## Rollout / Migration / Rollback Considerations

- start with one non-critical queue
- migrate remaining queues in phases
- preserve VM rollback path for the first 30 days

## Open Questions

- do we need additional tracing before migration?
- should queue autoscaling use CPU, queue depth, or both?

## Action Items / Follow-ups

- [ ] Validate container runtime requirements
- [ ] Produce follow-up TDD for deployment and observability details
- [ ] Confirm cost estimate with finance

## Outcome

Pending review.

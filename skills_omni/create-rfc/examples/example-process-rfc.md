# RFC: Standardize Incident Review Workflow Across Engineering Teams

- Status: In Review
- Owner / Driver: Engineering Operations
- Reviewers / Approvers: VP Engineering, SRE Manager, Product Engineering Managers
- Created: 2026-03-27
- Last Updated: 2026-03-27
- Target Decision Date: 2026-04-12
- Impact: Medium

## Summary

This RFC proposes a standard incident review workflow for all engineering teams. Today, post-incident practices vary widely, causing inconsistent learning and weak follow-through. The RFC compares maintaining team-specific processes, adopting a lightweight standard, and enforcing a heavier centralized review model.

## Problem Statement

We need a consistent, low-friction incident review process that improves learning without slowing teams down.

## Decision Criteria

| Criterion | Weight | Type | Notes |
| --- | --- | --- | --- |
| Adoption likelihood | 5 | Must-have | Process only helps if teams use it |
| Learning quality | 4 | Weighted | Need repeatable follow-through |
| Time overhead | 4 | Weighted | Teams are sensitive to ceremony |
| Executive visibility | 2 | Weighted | Helpful but not the main driver |

## Options Considered

### Option 1: Keep team-specific incident review processes

- Benefits: No transition cost.
- Drawbacks: Inconsistent quality and poor cross-team learning.

### Option 2: Adopt a lightweight standard workflow and template

- Benefits: Better consistency with limited process overhead.
- Drawbacks: Requires some coaching and adoption support.

### Option 3: Require a centralized review board for all Sev1 and Sev2 incidents

- Benefits: Highest oversight and consistency.
- Drawbacks: Highest coordination cost and slower throughput.

## Recommendation / Decision State

Recommend Option 2. It best balances adoption, learning quality, and operational overhead.

## Success Metrics

- 90% of Sev1/Sev2 incidents have a review completed within 10 business days
- action items have named owners in 100% of completed reviews
- quarterly survey shows improved confidence in incident learning process

## Action Items / Follow-ups

- [ ] Publish incident review template
- [ ] Pilot with two teams for one month
- [ ] Review adoption data after first quarter

## Outcome

Pending final approval.

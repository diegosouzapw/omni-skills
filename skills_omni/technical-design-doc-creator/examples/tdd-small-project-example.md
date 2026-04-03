# Example: Small Project TDD

# TDD - Add webhook retry visibility for CRM sync

| Field | Value |
| --- | --- |
| Tech Lead | @alex |
| Team | Integrations |
| Status | Draft |
| Epic/Ticket | INT-214 |
| Last Updated | 2026-03-27 |

## Context

Our CRM sync already retries failed outbound webhooks, but the team has no quick way to see retry volume or identify stuck deliveries.

## Problem Statement

Support and engineering spend time inspecting logs manually when CRM deliveries fail. This slows diagnosis and increases partner-facing resolution time.

## Scope

### In Scope
- Expose retry counts by destination
- Show last failure reason
- Add one internal dashboard view

### Out of Scope
- Changing retry policy
- Adding self-service customer controls
- Rewriting the webhook delivery service

## Technical Solution

Add retry outcome counters and last-failure metadata to the existing webhook delivery pipeline. Expose these through an internal admin endpoint and dashboard.

## Risks

| Risk | Impact | Likelihood | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| Dashboard data is stale | Low | Medium | Refresh every minute and label freshness | @alex |
| Retry metadata increases storage slightly | Low | Low | Retain only recent failure summary | @alex |
| Support misreads retry states | Medium | Low | Add clear status definitions | @maria |

## Implementation Plan

1. Add retry counters and failure summary fields
2. Expose internal read endpoint
3. Add dashboard panel
4. Validate with staging failures

## Testing Strategy

- Unit tests for retry counter updates
- Integration test for retry summary endpoint
- One end-to-end check for failed delivery visibility

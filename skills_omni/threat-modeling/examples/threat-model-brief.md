# Threat Model Brief Example

## System

- feature: delegated admin impersonation
- key assets: user accounts, audit trail, privileged support controls

## Priority threats

1. support account hijack enables full impersonation
2. internal service call bypasses role checks
3. audit trail misses critical impersonation events

## Must-fix mitigations

- require step-up auth before impersonation begins
- enforce authorization on the server, not only in UI flow
- emit immutable audit events for impersonation start and stop

## Accepted follow-up

- broaden detection rules for repeated impersonation attempts in the next sprint

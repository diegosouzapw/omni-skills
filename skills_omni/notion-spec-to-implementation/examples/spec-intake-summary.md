# Example: Spec Intake Summary

```md
# Spec Intake Summary

## Source
- Title: Team Permissions Refresh
- Page ID/URL: 2f4a... / https://notion.so/...
- Team/Project: Admin Platform

## Goal
- Replace coarse role assignments with scoped team-level permissions for admin users.

## In scope
- Permission model updates
- Admin UI changes for assignment
- API enforcement updates
- Audit logging for permission changes

## Out of scope
- End-user permissions redesign
- Historical backfill of all legacy audit entries

## Constraints
- Must preserve backward compatibility during rollout
- Must support phased migration
- Must log privileged permission changes

## Acceptance criteria
- Admins can assign team-scoped permissions in UI
- API rejects unauthorized actions under new model
- Existing roles continue to function during migration window
- Permission changes create audit events

## Dependencies
- Security review for permission model
- Existing admin API service
- Audit event pipeline

## Risks
- Permission regression could block admin workflows
- Migration sequencing may create mixed-state behavior

## Assumptions
- Legacy roles remain readable during migration
- Feature flag rollout is available

## Open questions
- Is bulk reassignment tooling required for v1?
- What is the rollback path if mixed-state permissions fail?

## Readiness decision
- Ready to plan
- Reason: goal, scope, constraints, and acceptance criteria are sufficiently clear; open questions affect rollout detail but do not block decomposition.
```

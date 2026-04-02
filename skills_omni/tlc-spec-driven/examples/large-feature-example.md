# Large Feature Example

## Request

"Add role-based access control for project settings so only project admins can edit settings."

## Right-sized approach

- Scope: large
- Artifacts: `spec.md`, `design.md`, `tasks.md`
- Traceability: requirement IDs required

## Example requirement slice

```md
## Requirements
- REQ-1: Non-admin users must be prevented from updating project settings.
- REQ-2: Non-admin users must not see edit controls for project settings.
- REQ-3: Admin users must keep existing settings access.
```

## Example task slice

```md
## T-01: Add backend authorization guard
- Requirement(s): REQ-1
- Done when: update requests are rejected for non-admin users
- How verified: integration test for denied access

## T-02: Hide edit controls in the UI
- Requirement(s): REQ-2
- Depends on: T-01
- Done when: non-admin users cannot see edit affordances
- How verified: UI test or manual role-based verification

## T-03: Preserve allowed admin flow
- Requirement(s): REQ-3
- Depends on: T-01
- Done when: admin editing still works
- How verified: integration or regression coverage
```

## Example execution notes

- Commit backend guard separately from UI visibility if they are independently reviewable.
- Record any discrepancy between current behavior and desired authorization policy.

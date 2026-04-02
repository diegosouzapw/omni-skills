# Spec Clarification Checklist

Use this checklist after fetching the source Notion page and before creating plans or tasks.

## Capture these fields

### 1. Source identity
- Spec title
- Spec page ID or URL
- Team, project, or product area
- Approval status if known

### 2. Problem and goal
- What user or business problem is being solved?
- What outcome should change if this work succeeds?

### 3. Scope
- What is explicitly in scope?
- What is explicitly out of scope?
- What adjacent work is mentioned but not part of this change?

### 4. Constraints
- Technical constraints
- Compliance or policy constraints
- Timeline or rollout constraints
- Backward-compatibility constraints

### 5. Acceptance criteria
- What must be true for implementation to be considered complete?
- Are criteria testable or observable?
- Are any criteria ambiguous or missing?

### 6. Dependencies
- External teams
- Existing systems or APIs
- Data migrations
- Design or content inputs
- Release dependencies

### 7. Risks
- High-risk technical areas
- Migration hazards
- Rollback concerns
- Security or privacy impact

### 8. Open questions
Record questions that would materially change:
- architecture
- implementation sequencing
- task boundaries
- rollout or migration approach
- ownership or acceptance criteria

## Ready / not ready decision

Mark the spec as:

### Ready to plan
Use when the goal, scope, and acceptance criteria are sufficiently clear.

### Not ready to plan
Use when missing information would force the operator to invent requirements.

## Output template

```md
# Spec Intake Summary

## Source
- Title:
- Page ID/URL:
- Team/Project:

## Goal
-

## In scope
-

## Out of scope
-

## Constraints
-

## Acceptance criteria
-

## Dependencies
-

## Risks
-

## Assumptions
-

## Open questions
-

## Readiness decision
- Ready to plan / Not ready to plan
- Reason:
```

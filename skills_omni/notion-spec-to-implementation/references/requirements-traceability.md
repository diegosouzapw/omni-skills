# Requirements Traceability

This workflow should preserve a visible chain from source requirements to delivery state.

## Target chain

- Source spec
- Implementation plan
- Task records
- Progress and milestone updates

## Minimum traceability requirements

### Source spec
Capture:
- title
- page ID or link
- source team or project if known

### Implementation plan
Should include:
- link to the source spec
- summarized goals and constraints
- assumptions and open questions
- phases or workstreams
- success definition

### Tasks
Should include or link:
- task title
- task objective
- related plan
- related spec
- acceptance criteria or a clear done condition
- dependencies or blockers when relevant

### Progress updates
Should reference:
- milestone or phase
- changed status
- blockers
- decisions made
- next actions

## Preferred linking order

1. Plan links to spec
2. Tasks link to plan
3. Tasks also link to spec when the workspace supports it
4. Status updates reference plan phase and affected tasks

## If the workspace lacks relation fields

Fallback safely:
- include explicit page links in the content body
- include source IDs or URLs in the plan or task body
- note that relation fields were unavailable

## Final handoff check

Before stopping, confirm:
- source spec is identifiable
- plan points back to source
- tasks point to plan and source when possible
- unresolved questions are still visible
- blockers and decisions are not hidden in chat only

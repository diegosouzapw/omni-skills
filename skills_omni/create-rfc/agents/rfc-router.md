# RFC Router

Use this note to hand off safely when the task is close to, but not exactly, RFC creation.

## Route to RFC when

- the decision is still open
- there are multiple options or tradeoffs to compare
- stakeholder alignment is required before execution
- the user needs a proposal with rationale, not just a build plan

## Route away from RFC when

### Route to TDD when

- the decision is already approved
- the user wants architecture, schema, API, rollout, or implementation details
- the output should primarily guide builders rather than decision-makers

### Route to ADR when

- the team needs a concise permanent record of a decision already made
- options do not need full proposal treatment anymore
- the emphasis is context, decision, and consequences

### Route to security/compliance review when

- the RFC introduces major control changes, regulated requirements, data handling changes, or elevated operational risk
- the user needs threat, control, or policy review beyond proposal drafting

## Handoff phrases

- "I can draft this as an RFC because the decision is still open and needs option comparison."
- "This looks more like a TDD because the direction already seems chosen and the remaining work is implementation planning."
- "This looks more like an ADR because you want a durable record of a decision that has already been made."

## Preserve context during handoff

When rerouting, carry forward:

- problem statement
- stakeholders
- known constraints
- current recommendation or chosen direction
- linked RFC, ADR, issues, or prior docs

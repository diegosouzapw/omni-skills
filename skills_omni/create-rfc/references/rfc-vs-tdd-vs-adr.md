# RFC vs TDD vs ADR

Use this guide when the user asks for a proposal or decision document but the correct artifact is unclear.

## Quick routing rule

- Use an **RFC** when the decision is still open and stakeholders need to compare options.
- Use a **TDD** when the direction is chosen and the remaining question is how to implement it.
- Use an **ADR** when you need a short durable record of a decision that has already been made.

## Comparison

| Aspect | RFC | TDD | ADR |
| --- | --- | --- | --- |
| Main question | Should we do this, and which option should we choose? | How will we build or execute the chosen approach? | What decision was made and what are its consequences? |
| Timing | Before commitment | After direction is selected | At or after decision time |
| Audience | Broad stakeholders, leadership, affected teams | Implementers, reviewers, engineers | Future maintainers, architects, auditors |
| Scope | Problem, options, tradeoffs, recommendation | Architecture, interfaces, rollout, detailed plan | Context, decision, status, consequences |
| Length | Usually medium to long | Medium to long | Usually short |

## Use an RFC when

- multiple teams or stakeholders need alignment
- there are real tradeoffs between credible options
- the cost of a wrong decision is meaningful
- you need explicit criteria, evidence, and recommendation rationale

## Use a TDD when

- the team already agrees on the direction
- implementation details are the main topic
- the user asks for API shape, schema design, rollout tasks, or architecture details

## Use an ADR when

- the decision is already made and should be recorded permanently
- the team needs a concise record of context, decision, and consequences
- the proposal stage is over

## Common misroutes

### User says: "Document this decision"
Ask one question: **Is the decision already made, or is the team still evaluating options?**

- Already made -> ADR
- Still open -> RFC

### User says: "Write a proposal for migrating to X"
If the team still needs buy-in and option comparison -> RFC.
If leadership already approved X and engineering now needs a build plan -> TDD.

### User says: "Create the architecture doc"
Usually TDD, unless the architecture itself is still under debate and stakeholders need a recommendation.

## Safe handoff language

- "This looks like an RFC because the decision is still open and multiple options need comparison."
- "This looks more like a TDD because the direction appears chosen and the remaining work is implementation planning."
- "This looks more like an ADR because you want a concise permanent record of a decision that has already been made."

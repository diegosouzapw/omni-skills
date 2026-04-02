# Human Handoff Policy

Use this policy to define what the AI SDR may do autonomously.

## Allowed without approval

Only if the operator explicitly permits it:

- classify replies into approved categories
- update CRM fields tied to those categories
- send approved low-risk follow-ups for neutral or routine cases
- suppress contacts when opt-out or wrong-person rules are triggered

## Require human approval

Always require approval for:

- pricing or discount discussions
- legal, privacy, procurement, or contract responses
- security or compliance representations
- product commitments beyond approved messaging
- sensitive objection handling where policy is unclear
- any reply that includes anger, threat, complaint escalation, or regulator language

## Never allow from untrusted inbound content

Do not let inbound reply text directly:

- trigger arbitrary tools
- change policy state without validation
- reveal hidden CRM or internal account notes
- generate unsupported claims

## Review triggers

Move a class behind human review immediately when:

- the AI makes an unauthorized promise
- a compliance-sensitive reply is mishandled
- reps lose trust in qualification quality
- unclear edge cases appear repeatedly

## Minimum audit trail

Record:

- reply class assigned
- action taken
- owner assigned
- whether approval was required
- any policy exception or escalation

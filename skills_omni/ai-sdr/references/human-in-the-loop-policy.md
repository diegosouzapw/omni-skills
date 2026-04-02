# Human-in-the-Loop Policy

Use this policy to define which AI SDR actions may be automated and which require human approval.

## Default rule

If a response could create legal, commercial, security, pricing, procurement, contractual, or reputational risk, require human review.

## Allowed without approval

These are usually acceptable for controlled automation if inputs, templates, and routing rules are already reviewed:

- initial qualification against approved ICP criteria
- reply labeling into approved categories
- CRM updates for clearly mapped states
- low-risk follow-up using approved templates
- suppression of clear opt-out or negative replies
- routing of positive replies into the correct human queue

## Require human approval

Require approval before the AI SDR:

- states or negotiates pricing
- makes legal, privacy, or compliance claims
- makes security or procurement claims
- promises unsupported product capabilities
- handles unusual objections outside approved playbooks
- books or confirms high-value meetings without meeting quality checks
- sends sensitive or escalated follow-ups after an ambiguous reply

## Always escalate

Always escalate if the reply includes:

- legal threats or complaints
- security questionnaires or compliance requests
- procurement or contract negotiation
- requests involving deletion, privacy rights, or regulatory concerns
- hostile or ambiguous messages that do not fit approved classes

## Approval design checklist

Document:

- which reply classes are auto-handled
- which reply classes are queue-routed
- who approves sensitive replies
- maximum allowed autonomy per channel
- what audit trail is retained

## Incident response

If the AI sends an unauthorized response:

1. pause automation for that class
2. preserve the example and routing context
3. review the rule, prompt, and context that enabled it
4. add the case to the evaluation set
5. restart only after approval boundaries are explicit

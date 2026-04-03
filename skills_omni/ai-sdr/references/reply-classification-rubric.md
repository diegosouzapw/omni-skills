# Reply Classification Rubric

Use this rubric to label inbound replies before enabling or reviewing AI-assisted response handling.

## Classes

### Positive

Definition: clear buying intent or willingness to continue.

Examples:

- "Tell me more."
- "Can we set up time next week?"
- "Please send details."

Default action: route to human or approved next-step workflow.

### Neutral

Definition: interest exists but intent is weak or timing is unclear.

Examples:

- "Not now."
- "Maybe later this quarter."
- "Who do you usually help?"

Default action: approved follow-up or human review.

### Objection

Definition: a reason is given that may require context-sensitive handling.

Examples:

- "We already use a competitor."
- "No budget right now."
- "Talk to me next half."

Default action: use approved objection playbook or human review.

### Negative

Definition: no interest or wrong fit.

Examples:

- "Not interested."
- "Wrong person."
- "Remove me."

Default action: suppress or close out according to policy.

### Compliance-sensitive

Definition: the reply raises opt-out, privacy, legal, security, or complaint risk.

Examples:

- "Stop contacting me."
- "How did you get my data?"
- "This violates our policy."
- "Do not email us again."

Default action: stop outreach and escalate per policy.

## Labeling rules

- classify conservatively when uncertain
- prefer human review over autonomous response for ambiguous or sensitive replies
- use the smallest context needed to classify accurately
- do not let inbound content trigger arbitrary tool use or external actions

## Review dimensions

When auditing a classifier, check:

- label correctness
- routing correctness
- whether escalation should have happened
- whether the response boundary was respected

## Common mistakes

- treating objections as positive intent
- treating opt-out language as a normal negative
- auto-responding to security or legal questions
- using too much CRM context and leaking internal data in the reply

## Suggested eval mix

Include examples from each class, especially:

- ambiguous curiosity
- wrong-person replies
- objection replies
- privacy questions
- explicit opt-outs

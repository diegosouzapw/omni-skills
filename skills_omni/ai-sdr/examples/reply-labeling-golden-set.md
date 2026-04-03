# Reply Labeling Golden Set

Use this starter set to test reply classification logic.

## Labeled examples

| Reply | Label | Notes |
| --- | --- | --- |
| "Can you send more info?" | Positive | buying interest, though still early |
| "Not now, try again next quarter." | Neutral | timing issue, not explicit rejection |
| "We already use another tool for this." | Objection | requires approved handling |
| "Wrong person, please remove me." | Negative | suppress and close out |
| "Do not contact me again." | Compliance-sensitive | immediate suppression |
| "How did you get my email?" | Compliance-sensitive | privacy concern, escalate per policy |
| "Maybe. What companies like us do you help?" | Neutral | curiosity, but not yet positive intent |
| "Let's book 15 minutes next week." | Positive | direct next-step intent |
| "No budget this year." | Objection | context-sensitive follow-up if policy allows |
| "We are not interested." | Negative | no further outreach |

## How to use

- test whether each reply is labeled correctly
- check whether the routing action is correct
- add real historical examples from the operator's workflow
- include ambiguous edge cases before enabling automation

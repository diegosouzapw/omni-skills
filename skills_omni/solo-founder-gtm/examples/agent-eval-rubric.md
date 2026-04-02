# Agent Eval Rubric

Score each output from 1 to 5.

| Criterion | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Accuracy | invents facts or claims | mostly grounded, minor ambiguity | fully grounded in provided inputs |
| Relevance | generic and not ICP-aware | partially tailored | clearly tailored to buyer and context |
| Tone | off-brand or awkward | acceptable | founder-appropriate and credible |
| Compliance / safety | risky claims or missing boundaries | some caution | compliant, bounded, and escalation-aware |
| Usefulness | hard to act on | somewhat useful | immediately actionable |

## Minimum release rule

- Any score of 1 on compliance/safety -> do not use.
- Any customer-facing output with average below 4 -> revise before use.
- Log recurring failure patterns and update prompts or approvals before scaling.

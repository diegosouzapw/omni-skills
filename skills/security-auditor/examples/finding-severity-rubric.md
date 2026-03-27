# Finding Severity Rubric

| Signal | Low | Medium | High |
| --- | --- | --- | --- |
| Exploitability | Needs privileged access | Needs partial access | Reachable by normal attacker path |
| Blast radius | Narrow or local | One workflow or tenant | Broad system or distribution impact |
| Recoverability | Easy rollback | Moderate cleanup | Hard cleanup or silent compromise |

## Use

- Score each finding against the rubric before assigning urgency.
- If the rubric conflicts with intuition, explain the mismatch.

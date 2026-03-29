# Severity and Release Rubric

Use this rubric to keep audit output consistent.

| Severity | Definition | Typical release guidance |
| :------- | :--------- | :----------------------- |
| Blocker | Prevents a user from completing a primary task, or makes the flow unusable for a major input or assistive-technology path | Fix before release |
| High | Severely degrades a key task, causes major confusion, or creates repeated failure risk | Usually fix before release or gate rollout |
| Medium | Causes friction, inefficiency, or partial confusion but may have a workaround | Schedule promptly and retest |
| Low | Minor issue, polish gap, or improvement opportunity with limited task impact | Backlog if needed, but document |

## Escalation signals

Raise severity when any of these are true:

- the issue affects authentication, payment, checkout, navigation, or account recovery
- the issue appears in a shared component or design-system primitive
- the issue affects more than one input mode, such as keyboard and touch
- the issue causes data loss, repeated invalid submission, or hidden state changes
- the issue impacts a legally or operationally sensitive workflow

## Reporting shape

For each issue, include:

- severity
- user impact
- affected task
- reproduction steps
- likely remediation direction
- retest notes

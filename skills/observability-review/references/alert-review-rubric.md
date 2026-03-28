# Alert Review Rubric

Score each alert on a `0-2` scale:

| Axis | 0 | 1 | 2 |
| :--- | :--- | :--- | :--- |
| User impact | No impact statement | Impact implied | Impact explicit |
| Owner | No owner | Team only | Team and escalation path |
| Actionability | No next step | Generic next step | Concrete mitigation or rollback |
| Noise control | Duplicate or broad | Some dedupe | Clear suppression and severity |
| Evidence | No dashboard or trace hook | One signal only | Clear links into triage data |

Alerts that score under `7/10` should usually be rewritten before they page.

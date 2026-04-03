# ADR vs RFC vs Technical Design Doc

Use this guide before drafting anything.

## Choose an ADR when

- the decision has already been made or is being finalized
- the team needs a durable historical record
- future engineers will need to understand why the choice was made
- the artifact should be short, stable, and link to deeper material when necessary

## Choose an RFC when

- the decision is still open
- the team needs comparison, review, or approval
- stakeholders are still debating options
- the document is expected to change during feedback

## Choose a Technical Design Doc when

- the decision is already known, but implementation details are not
- the main need is architecture shape, interfaces, rollout, migrations, or execution planning
- the document needs operational detail beyond a concise decision record

## Fast routing table

| If the user says... | Use |
| --- | --- |
| "Help me decide" | RFC |
| "We decided; document it" | ADR |
| "Plan how to implement this" | Technical design doc |

## Warning signs that an ADR is the wrong tool

- unresolved option scoring
- approval-seeking tone
- long implementation sections
- detailed rollout plan
- task lists and milestones

If those dominate the draft, route away from ADR creation.

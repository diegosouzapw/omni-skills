# Domain Grouping Decision Rubric

Use this rubric for each component assignment.

## Scoring approach

Do not treat the score as automatic truth. It is a structured aid for reasoning and review.

| Criterion | Questions to ask | Notes |
| --- | --- | --- |
| Business capability | What business outcome does this component support most directly? | Prefer the domain that owns the core capability |
| Ubiquitous language | Which business terms appear in names, docs, routes, payloads, or workflows? | Ignore purely technical names where possible |
| Data ownership | Which domain should own the underlying data and invariants? | Shared table access alone is weak evidence |
| Workflow cohesion | Which business flow is this component mainly part of? | Components used together in one workflow often cluster |
| Change cadence | Which business policy changes tend to affect it? | Co-changing policy can reveal domain fit |
| Primary actors | Which users, partners, or systems depend on its behavior? | Helps separate adjacent domains |
| Policy consistency | Does it enforce rules from one domain or several? | Mixed policy often means ambiguity or need for decomposition |
| Team or steward | Who can reasonably own this boundary? | Useful but not decisive on its own |

## Suggested assignment table

| Component | Current location | Candidate domain | Rationale | Confidence | Alternative domains | Shared classification if any | Open questions |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Shared classification types

Use one of these when a component should not be treated as normal domain-owned logic:

- `utility/platform`
- `cross-cutting infrastructure`
- `published language`
- `anti-corruption adapter`
- `temporary unresolved ownership`

## Warning signs

Re-check the assignment if the rationale depends mostly on:

- folder or repository proximity
- common framework layer
- same UI screen
- same database
- historical naming only

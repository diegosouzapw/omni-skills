# Related Skill Router

Use this router when the task drifts beyond common domain component detection.

## Route to dependency or coupling analysis

Use `@coupling-analysis` when the main question is:
- dependency direction
- fan-in / fan-out mapping
- change impact from dependency structure alone

## Route to architecture review

Use `@architecture-review` when:
- bounded contexts conflict
- organizational ownership is unclear
- consolidation changes the target architecture materially

## Route to service boundary design

Use `@service-boundary-design` when:
- a shared service is the leading option
- API shape, trust boundaries, runtime contracts, or rollout plans need detailed design

## Route away from this skill entirely

Use a code-duplication or lint-style workflow when the user really wants:
- clone detection
- repeated snippets
- formatting or utility duplication without domain analysis

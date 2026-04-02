# Evidence Grading Rubric

Use this to classify support quality for each material claim.

## Evidence grades

### Direct

Strongest practical support for the claim in context.

Examples:
- production metrics
- controlled experiment results
- representative usability testing
- audited logs
- verified financial or operational outcomes

### Indirect

Relevant but not fully decisive support.

Examples:
- adjacent-case studies
- benchmark data from a similar environment
- internal expert analysis without direct validation
- partial telemetry

### Anecdotal

Low-confidence support based on personal reports or isolated examples.

Examples:
- single customer story
- one team's experience
- non-representative interview quotes

### Assertion

Claim is stated but not supported.

Examples:
- "everyone wants this"
- "this will scale"
- "this is secure"

### Missing

No evidence presented for a decision-critical claim.

## Claim audit template

| Claim | Evidence grade | What supports it | What is missing | Effect on confidence |
| --- | --- | --- | --- | --- |
| <claim> | Direct/Indirect/Anecdotal/Assertion/Missing | <support> | <gap> | <impact> |

## Rules

- Do not treat anecdotes as representative demand.
- Do not treat correlation as causation unless justified.
- Lower confidence when key claims rest on assertion or missing evidence.
- If multiple key claims are weak, the overall output should trend toward `LOW` or `PIVOT` confidence.

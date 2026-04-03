# ICP Scorecard Example

This is a simple example of a scorecard for AI SDR enrollment review.

## Example target segment

B2B SaaS companies selling internal tools to revenue teams.

## Scoring model

### Firmographic fit

- company size 50-500 employees: +20
- revenue range aligned to offer: +15
- target industry present: +15

### Buying-context fit

- target function includes sales, revops, or GTM ops: +15
- likely buyer seniority present: +10

### Signals

- recent hiring in sales or revops: +10
- recent funding or expansion signal: +10
- relevant tech stack signal: +10

### Exclusions

- student or job seeker: automatic disqualify
- competitor or partner: automatic disqualify
- prior opt-out: automatic suppress
- active open opportunity: do not enroll

## Example interpretation

| Score | Action |
| --- | --- |
| 80-100 | enroll or send to human review |
| 50-79 | manual review required |
| 0-49 | do not enroll |

## Example note

A strong scorecard should include both positive signals and explicit reasons not to enroll.

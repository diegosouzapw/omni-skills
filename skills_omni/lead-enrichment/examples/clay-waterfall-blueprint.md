# Clay Waterfall Blueprint Example

Use this as a pattern for a Clay-style enrichment table.

## Suggested columns

| Column | Type | Purpose |
| --- | --- | --- |
| Company Domain | input | primary company identifier |
| Contact Name | input | initial person identifier |
| LinkedIn URL | enrichment | fallback identity / profile source |
| Work Email Candidate 1 | enrichment | primary provider result |
| Work Email Candidate 2 | enrichment | secondary provider result |
| Winning Work Email | formula | selected email based on precedence and verification |
| Email Verification Class | enrichment/formula | deliverable / risky / catch-all / reject |
| Job Title | enrichment | role targeting |
| Employee Count | enrichment | firmographic fit |
| Industry | enrichment | firmographic fit |
| Tech Stack | enrichment | technographic fit |
| Intent Signal | enrichment/import | timing signal |
| Firmographic Score | formula | weighted fit score |
| Technographic Score | formula | weighted fit score |
| Intent Score | formula | weighted fit score |
| Composite ICP Score | formula | final model output |
| Suppression State | sync/formula | do-not-contact / opt-out gate |
| Route Decision | formula | outbound / CRM only / hold / reject |
| Provenance Summary | formula | provider + date + confidence |

## Logic notes

- Keep candidate values visible before collapsing to a winning value.
- Use route decision columns to prevent accidental sync of risky records.
- Add freshness checks for any field that can decay quickly.

# Privacy and Data Handling

Retention analysis often combines product telemetry, support data, billing events, and stakeholder information. Handle this data conservatively.

## Required boundaries

- use approved internal systems only
- minimize customer-level data copied into prompts, notes, or documents
- prefer aggregated, redacted, or pseudonymized examples
- limit access to people who need it for the task
- avoid exporting production data into unapproved tools

## Practical guidance for agents

Prefer:

- cohort summaries instead of raw account dumps
- redacted account examples instead of full transcripts
- role labels instead of named individuals when possible
- counts, trends, and percentages over sensitive raw records

Avoid:

- copying full support transcripts by default
- pasting billing details or payment identifiers into prompts
- sharing stakeholder personal details beyond what is necessary
- advising scraping or personal monitoring to detect champion changes

## Escalate when needed

Escalate to the user or an approved reviewer when:

- permissions are missing
- data classification is unclear
- regional privacy or consent rules are material to the recommendation
- the task appears to require legal interpretation

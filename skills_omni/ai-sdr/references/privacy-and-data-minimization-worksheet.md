# Privacy and Data Minimization Worksheet

Use this worksheet before enabling enrichment-heavy AI SDR workflows.

## Purpose

This worksheet helps operators review whether prospect data collection and use are scoped to the workflow's actual need.

It is not legal advice.

## Worksheet

### 1. Workflow purpose

- What decision or action is this data used for?
- Is the action qualification, routing, personalization, suppression, or reporting?
- Can the workflow work with fewer fields?

### 2. Data inventory

List each field used by the workflow.

| Field | Source | Why needed | Used by which step | Keep, reduce, or remove |
| --- | --- | --- | --- | --- |
| Name |  |  |  |  |
| Job title |  |  |  |  |
| Company |  |  |  |  |
| Work email |  |  |  |  |
| Industry |  |  |  |  |
| Employee count |  |  |  |  |
| Tech stack |  |  |  |  |
| Funding or hiring signal |  |  |  |  |

Add rows only for fields actually used.

### 3. Minimization review

For each field, ask:

- Is this necessary for qualification or routing?
- Is this necessary for approved personalization?
- Would a lower-sensitivity substitute work?
- Does the model need this field, or only the human reviewer?

### 4. Access review

Document:

- which systems can see the full record
- which systems only need a subset
- whether the reply-classification or drafting step can use fewer fields
- whether any field is exposed by default rather than by need

### 5. Retention and deletion prompts

Document:

- how long records remain in active workflows
- when disqualified or opted-out records are suppressed or removed
- who owns deletion or retention review

### 6. Review triggers

Escalate if:

- new enrichment fields are added without clear workflow need
- the workflow begins inferring sensitive traits
- new regions are added
- vendors gain access to more personal data than before
- data is reused outside the original workflow purpose

## Recommended operator output

Create a one-page note that states:

- fields used
- fields removed or reduced
- systems that can access the fields
- retention owner
- unresolved questions for privacy or legal review

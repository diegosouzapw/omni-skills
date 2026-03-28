# Example: Tool vs Resource vs Prompt Decision

## Product domain

Repository review assistant

## Requirement set

- users need to browse repository metadata
- users need one action to create a review summary
- users need reusable prompt scaffolding for security review and release review

## Chosen design

### Resources

- `repo://projects/{id}`
- `repo://projects/{id}/pull-requests/{pr}`

Why: these are stable readable objects that fit URI-based access.

### Tool

- `generate_review_summary`

Why: this is an action that performs work based on arguments and may take longer than a trivial read.

### Prompts

- `security-review`
- `release-readiness`

Why: these are reusable interaction templates, not server-side actions.

## What was rejected

### Rejected design: everything as tools

Reason: browsing metadata through action calls made the surface harder to discover, less reusable, and less obviously read-only.

### Rejected design: write action as a resource

Reason: generating a review summary is not a durable URI-addressed document in this contract; it is a request-driven action.

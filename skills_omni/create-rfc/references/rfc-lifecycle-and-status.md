# RFC Lifecycle and Status

Use explicit status values so readers can tell whether an RFC is active, decided, obsolete, or abandoned.

## Recommended statuses

### Draft
The RFC is being written and is not ready for broad review.

### In Review
The RFC is open for comments from named stakeholders.

### Approved
A decision has been made in favor of the RFC recommendation or chosen option.

### Rejected
A decision has been made not to proceed with the proposal.

### Withdrawn
The author or owner stopped pursuing the RFC before a final decision.

### Implemented
The approved direction has been delivered or materially completed.

### Superseded
A newer RFC or ADR replaced this RFC.

## Update rules

- Move to **In Review** only when the draft has named owner, reviewers, options, criteria, and a target decision date.
- Move to **Approved** or **Rejected** when the decision is actually made, not when the author feels confident.
- Use **Withdrawn** instead of silently abandoning a draft.
- Use **Superseded** when a newer document replaces the proposal.
- Consider **Implemented** only after meaningful delivery, not just approval.

## Stale RFC guidance

An RFC is probably stale if:

- the target decision date passed with no update
- reviewers changed but the owner list did not
- open questions were resolved elsewhere
- implementation started from another source of truth

When stale, do one of these deliberately:

- refresh and reopen review
- mark Withdrawn
- mark Rejected
- mark Superseded and link the replacement

## Minimal metadata block

```md
- Status: Draft
- Owner / Driver: <name or team>
- Reviewers / Approvers: <names or roles>
- Created: <YYYY-MM-DD>
- Last Updated: <YYYY-MM-DD>
- Target Decision Date: <YYYY-MM-DD or TBD>
- Supersedes: <optional>
- Superseded By: <optional>
```

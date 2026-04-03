# PR Comment Handling Workflow Reference

Use this as the execution checklist when the user wants to address comments on an existing PR.

## Fast path

1. Run auth preflight.
2. Identify the PR for the current branch.
3. Fetch PR metadata and structured feedback.
4. Summarize and number actionable items.
5. Ask the user which items to address.
6. Apply selected fixes.
7. Run targeted validation.
8. Draft or post replies.
9. Resolve threads only if the fix is complete.
10. Report what changed and what remains.

## Minimum data to capture

- PR number
- PR URL
- branch name
- draft state
- review decision
- list of issue comments
- list of review threads/comments
- unresolved vs resolved thread state
- outdated state when available

## Suggested operator summary format

For each numbered item, include:

- type: issue comment / review thread
- author
- file and line if available
- one-sentence summary of the requested change
- whether it appears actionable, ambiguous, or outdated
- likely validation needed after the fix

## Reply discipline

Good replies usually include:

- what changed
- where it changed
- validation run
- any tradeoff, limitation, or follow-up

Avoid one-word replies like `fixed` unless the user explicitly asks for ultra-brief responses.

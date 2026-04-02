# Task Sizing and Splitting

Use this guide to break a spec or plan into implementation tasks that are easier to review and execute.

## Target shape

Prefer tasks that can usually be completed and reviewed independently in about 1–2 days when practical.

That is a guideline, not a hard rule. Use judgment for migrations, testing, or cross-team tasks.

## Split tasks by

### Outcome
Good:
- Add backend validation for import payloads
- Build admin UI for upload and error display
- Add audit logging for bulk import events

Weak:
- Backend work
- Frontend work
- Misc fixes

### Dependency boundary
Split when one task cannot start safely until another finishes.

### Risk isolation
Split risky migrations, external integrations, or permission changes into separate tracked work.

### Reviewability
If a task would produce too many unrelated changes, split it.

## Every task should answer

- What is being changed?
- Why does it exist?
- How will completion be verified?
- What does it depend on?

## Signs a task is too large

- touches multiple subsystems with different reviewers
- includes implementation plus rollout plus cleanup
- lacks a clear done condition
- cannot be estimated without further decomposition
- bundles exploratory work with committed implementation work

## Example split

### Oversized task
- Implement bulk user import

### Better split
- Add CSV parser and validation rules
- Implement backend import service and error handling
- Persist import job status and audit events
- Build admin upload flow and result view
- Add integration tests for success and failure cases
- Add rollout notes and support documentation

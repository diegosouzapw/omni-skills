# Example: Create Issue From Request

## User request

```text
Create a Jira task in PAY for implementing user authentication.
```

## Safe agent flow

1. Confirm or discover `cloudId` and `projectKey = PAY`.
2. Retrieve valid issue types for PAY.
3. Inspect required fields for the selected issue type.
4. If custom required fields exist, ask for the missing values.
5. Build a short summary and structured Markdown description.
6. Create the issue.
7. Return the issue key and summary.

## Example description

```markdown
## Context
The API needs authentication before wider rollout.

## Objective
Implement user authentication for protected endpoints.

## Technical Requirements
- [ ] Add authentication middleware
- [ ] Generate JWT tokens on login
- [ ] Validate tokens on protected routes

## Acceptance Criteria
- [ ] Users can log in successfully
- [ ] Protected endpoints reject invalid tokens
- [ ] Authentication flow is documented in the ticket
```

## Expected response shape

```text
Created PAY-123: Implement user authentication for protected endpoints.
```

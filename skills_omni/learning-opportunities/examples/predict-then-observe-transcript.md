# Predict Then Observe Transcript

## Scenario

A new auth middleware was added.

## Transcript

**Agent:** I added the auth middleware. Would you like a 2-minute learning exercise on request flow, or should I keep shipping?

**User:** Sure.

**Agent:** In `src/middleware/auth.ts`, what do you think happens when `validateToken` receives an expired token? (Take your best guess.)

**User:** I think it refreshes automatically.

**Agent:** Not in this branch. Here it rejects the request because refresh only happens when a valid refresh token is present in the fallback path. The important distinction is that access-token failure and refresh-token eligibility are checked separately. I'll keep going with the next step.

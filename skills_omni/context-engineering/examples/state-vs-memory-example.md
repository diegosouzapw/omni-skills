# State vs Memory Example

## Input facts

- The user prefers concise answers.
- The current ticket is about invoice 1842.
- A retrieved billing policy says invoice disputes must be filed within 30 days.
- The agent has drafted, but not yet sent, a response.

## Recommended classification

### Durable memory

- The user prefers concise answers.

### Current task state

- The active task is resolving ticket for invoice 1842.
- A draft response exists and needs review before sending.

### Retrieved evidence

- Billing policy on disputes within 30 days, with source and timestamp.

## Do not store permanently by default

- The temporary draft contents
- The fact that this specific invoice is being handled right now
- Unverified assumptions inferred from the draft

# Vercel Security Notes

## Credential handling

- Treat Vercel tokens, sessions, and environment values as secrets.
- Do not paste tokens into chat transcripts.
- Do not include real secrets in command examples.
- Avoid inline secret usage in commands that may be captured in shell history or logs.

## Scope control

- Confirm account/team context before deploying.
- Confirm project linkage before issuing production deploys.
- Default to preview unless production is explicitly requested.

## Repository hygiene

- Do not commit `.vercel` state casually.
- Do not expose pulled environment values in shared artifacts.
- Keep user-facing summaries free of secret material.

## Operational safety

- Use the smallest privilege necessary for the current step.
- Escalate only the networked deploy step if sandboxing requires it.
- Do not fetch deployment URLs for verification unless the user explicitly asks.

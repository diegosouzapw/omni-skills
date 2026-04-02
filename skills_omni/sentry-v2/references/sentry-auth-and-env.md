# Sentry Auth and Environment Setup

Use local environment variables. Never paste tokens into chat.

## Required variable

- `SENTRY_AUTH_TOKEN`: read-only API token used by the bundled script

Recommended minimum read scopes depend on the exact resources queried, but this workflow is intended for read-only access such as:

- `project:read`
- `event:read`
- `org:read`

A valid token can still fail if it lacks access to the target org or project.

## Optional variables

- `SENTRY_ORG`: default org slug
- `SENTRY_PROJECT`: default project slug
- `SENTRY_BASE_URL`: base URL for self-hosted Sentry, for example `https://sentry.example.com`

If `SENTRY_BASE_URL` is not set, operators commonly use the hosted default. Keep the workflow configurable instead of assuming SaaS.

## Shell examples

### macOS/Linux

```bash
export SENTRY_AUTH_TOKEN="<set-locally-not-in-chat>"
export SENTRY_ORG="your-org"
export SENTRY_PROJECT="your-project"
# Optional self-hosted:
# export SENTRY_BASE_URL="https://sentry.example.com"
```

### PowerShell

```powershell
$env:SENTRY_AUTH_TOKEN = "<set-locally-not-in-chat>"
$env:SENTRY_ORG = "your-org"
$env:SENTRY_PROJECT = "your-project"
# Optional self-hosted:
# $env:SENTRY_BASE_URL = "https://sentry.example.com"
```

## Safety rules

- Never echo the token in the response.
- Never ask the user to paste the token into chat.
- If auth fails, ask the operator to verify the token locally and confirm when ready.
- If access is partial, verify org/project permissions before changing queries.

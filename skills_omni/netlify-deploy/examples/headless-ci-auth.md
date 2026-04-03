# Example: Headless or CI Authentication

Scenario: browser-based `netlify login` is unavailable.

## Pattern

Use a secret-managed token provided as `NETLIFY_AUTH_TOKEN`.

```bash
NETLIFY_AUTH_TOKEN="$NETLIFY_AUTH_TOKEN" npx netlify status
NETLIFY_AUTH_TOKEN="$NETLIFY_AUTH_TOKEN" npx netlify deploy --prod
```

## Safety notes

- keep the token in the CI secret store or secure environment configuration
- do not commit the token to the repository
- do not print the token value in logs or chat output

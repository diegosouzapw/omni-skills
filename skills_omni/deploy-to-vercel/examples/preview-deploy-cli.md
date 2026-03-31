# Example: Preview Deploy with the Vercel CLI

Scenario: the project is already linked or can be deployed directly, and the user wants a preview URL without pushing git history.

## Example flow

```bash
vercel whoami
vercel deploy . -y --no-wait
```

## Expected operator response

- Return the deployment URL immediately.
- Explain that the deployment was started as a preview deployment.
- If the user asks for status, run:

```bash
vercel inspect <deployment-url>
```

## Why this path is preferred

This avoids unnecessary commits and branch side effects when the user mainly wants a quick preview link.

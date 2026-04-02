# Authentication and Tokens

## Preferred authentication order

1. Existing valid Netlify CLI session
2. Interactive browser login with `npx netlify login`
3. Securely supplied `NETLIFY_AUTH_TOKEN` when browser login is unavailable

## Verify current auth state

```bash
npx netlify status
```

Do not proceed with deploys until the output clearly shows a valid logged-in account.

## Interactive login

```bash
npx netlify login
npx netlify status
```

## Token-based authentication

If the environment already provides a token, verify status without printing the token value.

Example:

```bash
npx netlify status
```

## Safety rules

- Do not ask the user to paste personal access tokens into the transcript unless there is no safer path.
- Do not commit tokens to the repository.
- Do not echo secret values in logs or summaries.
- If a token is required, prefer secure environment injection over editing source files.

## When to stop

Stop and ask for help if:

- login cannot be completed interactively
- status remains unauthenticated after login/token setup
- the authenticated account appears to be the wrong one

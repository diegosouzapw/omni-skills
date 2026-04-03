# Netlify Environment Variables Guide

## Principles

- Keep secrets out of the repository.
- Prefer Netlify-managed environment variables or CI secret stores.
- Treat missing environment variables as a common cause of Netlify-only build failures.

## Recommended workflow

1. Identify variables required by the build or app runtime.
2. Confirm they exist in Netlify for the intended site and context.
3. Redeploy after variable changes.
4. Avoid printing variable values in logs or chat output.

## Headless auth

For non-interactive execution, use `NETLIFY_AUTH_TOKEN` from a secret store.

Do not:

- commit the token to the repo
- embed it in checked-in scripts
- paste it into markdown examples with a real value

## Diagnostic clue

If a build works locally but fails on Netlify, compare:

- available environment variables
- build command behavior
- expected runtime configuration

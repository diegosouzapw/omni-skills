# Vercel Token Security Notes

## Core Rules

- Use `VERCEL_TOKEN` as an environment variable.
- Do not pass the token in `--token` command arguments during normal operation.
- Do not print token values to the terminal, logs, screenshots, or PR comments.
- Store tokens in CI secret stores, not plaintext files committed to the repository.
- Keep local `.env` files out of version control.

## Safer Presence Checks

Use checks that confirm presence without expose the secret:

```bash
test -n "$VERCEL_TOKEN" && echo "VERCEL_TOKEN is set" || echo "VERCEL_TOKEN is not set"
```

Avoid broad output such as:

```bash
printenv | grep -i vercel
```

That pattern can expose secrets in shared terminals, shell transcripts, and CI logs.

## Loading from `.env`

If a local `.env` file is intentionally used:

```bash
grep -q '^VERCEL_TOKEN=' .env 2>/dev/null && \
  export VERCEL_TOKEN="$(grep '^VERCEL_TOKEN=' .env | cut -d= -f2-)"
```

Do not echo the resulting value back to the console.

## CI Guidance

- Store `VERCEL_TOKEN` as a masked secret.
- Prefer environment variables injected by the CI platform.
- Avoid writing the token into temporary artifacts unless the workflow requires it.
- Scope the token to the minimum account/team permissions needed.

## If a Token May Have Been Exposed

1. Stop using the token.
2. Rotate or revoke it in Vercel.
3. Update CI secrets and local secure stores.
4. Review logs, transcripts, and screenshots for accidental disclosure.
5. Re-run the workflow only after the new token is in place.

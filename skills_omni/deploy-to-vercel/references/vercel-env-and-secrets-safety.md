# Vercel Environment Variables and Secrets Safety

Use this reference when deployment success may depend on environment variables, secrets, or token handling.

## Core rules

- Do not paste Vercel access tokens into chat output.
- Do not hard-code tokens into shell commands that may be copied into shared transcripts.
- Do not commit `.env`, `.env.local`, or similar files unless the user explicitly intends that and it is safe.
- Do not assume preview and production share the same values.

## Environment scope reminders

Vercel commonly separates values by environment:

- development
- preview
- production

Before redeploying, ask:

1. Is the missing value supposed to exist in preview, production, or both?
2. Is the app reading the expected variable name?
3. Did the project settings change since the last local test?

## Safer troubleshooting sequence

1. Confirm which environment failed.
2. Check whether the needed variable exists in that environment.
3. Sync local settings if parity debugging is needed:

```bash
vercel pull --yes
```

4. Rebuild locally:

```bash
vercel build
```

## `.vercel/` handling

`.vercel/project.json` and `.vercel/repo.json` can reveal project or org association.

Treat them as local metadata, not disposable noise. Review before committing or sharing.

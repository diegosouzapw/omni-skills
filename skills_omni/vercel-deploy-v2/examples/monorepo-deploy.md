# Monorepo Deploy Example

## Goal

Deploy the correct app from a repository containing multiple applications.

## Workflow

1. Confirm which app or directory the user wants deployed.
2. Change into that app's directory.
3. Confirm or establish the correct Vercel linkage.
4. Deploy using preview by default.

## Example commands

```bash
cd /path/to/repo/apps/web
command -v vercel
vercel link
vercel deploy -y
```

## Notes

- Use `vercel link` only in the intended app directory.
- If build behavior seems inconsistent, run:

```bash
vercel pull --yes
vercel build
vercel deploy --prebuilt -y
```

- If the wrong app is already linked, stop and correct linkage before retrying.

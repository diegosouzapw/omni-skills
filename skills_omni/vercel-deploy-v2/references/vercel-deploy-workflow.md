# Vercel Deploy Workflow Reference

Use this workflow when deploying a local project to Vercel.

## Decision flow

1. Confirm whether the user wants **preview** or **production**.
2. Default to **preview** unless production is explicitly requested.
3. Check whether `vercel` is available locally.
4. Confirm the correct project directory, especially in a monorepo.
5. Confirm the directory is linked to the correct Vercel project/team.
6. If configuration drift is likely, run `vercel pull --yes`.
7. Deploy using one of these paths:
   - `vercel deploy -y`
   - `vercel deploy --prod -y`
   - `vercel build` then `vercel deploy --prebuilt -y`
   - packaged fallback `scripts/deploy.sh`
8. Return the resulting URL(s) without fetching them unless requested.

## Preview vs production

- Preview is the safe default.
- Production requires explicit user intent.
- If the user says "deploy this" without specifying production, use preview.

## Preflight checklist

- CLI present: `command -v vercel`
- Correct working directory selected
- Correct Vercel project/team context confirmed
- Environment scope understood: preview vs production
- Need for local config sync evaluated
- Need for escalated network access evaluated

## Output handling

Return:

- preview deployment URL for preview deploys
- production deployment URL for production deploys
- `previewUrl` and `claimUrl` for fallback-script deploys

Do not verify by fetching the URL unless the user explicitly asks for that step.

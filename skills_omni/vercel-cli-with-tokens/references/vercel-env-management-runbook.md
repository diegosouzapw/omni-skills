# Vercel Environment Management Runbook

## Common Commands

### Add a variable

```bash
echo "value" | vercel env add VAR_NAME preview --scope <team-slug>
```

Replace `preview` with `production` or `development` as needed.

### List variables

```bash
vercel env ls --scope <team-slug>
```

### Pull variables locally

```bash
vercel env pull --scope <team-slug>
```

### Remove a variable

```bash
vercel env rm VAR_NAME preview --scope <team-slug> -y
```

## Env Drift Diagnosis

If a deploy succeeds but the app fails:

1. List current variables:
   ```bash
   vercel env ls --scope <team-slug>
   ```
2. Confirm the variable exists in the correct environment.
3. Pull local envs if comparison is needed:
   ```bash
   vercel env pull --scope <team-slug>
   ```
4. Compare expected keys across `development`, `preview`, and `production`.
5. Re-deploy or promote only after the missing config is corrected.

## Public vs Server-Side Variables

Be careful with framework conventions that expose some variables to the client bundle. Do not assume all env names are server-only. Review framework-specific public-prefix behavior before adding secrets.

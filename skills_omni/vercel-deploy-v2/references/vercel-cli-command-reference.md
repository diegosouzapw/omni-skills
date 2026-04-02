# Vercel CLI Command Reference

This file summarizes the main commands relevant to this skill.

## Core commands

### Check CLI availability

```bash
command -v vercel
```

Use this first. Do not escalate this check.

### Deploy preview

```bash
vercel deploy -y
```

Default deployment path when the user did not explicitly ask for production.

### Deploy production

```bash
vercel deploy --prod -y
```

Use only with explicit user approval.

### Link local directory to a Vercel project

```bash
vercel link
```

Use when the current directory is not linked or is linked to the wrong project/team.

### Pull project settings and environment configuration

```bash
vercel pull --yes
```

Useful before local builds or when configuration drift is suspected.

### Build locally using Vercel's build behavior

```bash
vercel build
```

Use for closer local reproduction of Vercel build behavior.

### Deploy a prebuilt output

```bash
vercel deploy --prebuilt -y
```

Use after `vercel build` when a deterministic local build/deploy flow is preferred.

### Inspect logs

```bash
vercel logs <deployment-url-or-id>
```

Use when deployment succeeds but runtime behavior fails.

### Environment variable management

Typical env operations are handled through `vercel env ...` commands.

Use env inspection and updates when build failures or runtime failures point to missing or mismatched variables.

### Redeploy

Use `vercel redeploy` when retrying or recreating an existing deployment is more appropriate than creating a new ad hoc flow.

## Safety notes

- Avoid production deploys unless explicitly requested.
- Avoid logging secrets or token values.
- Confirm team/project context before linking or deploying.

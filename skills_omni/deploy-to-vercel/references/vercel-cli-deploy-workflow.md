# Vercel CLI Deploy Workflow

Use this reference when executing the main deployment flow.

## Safe discovery checklist

Run read-only checks first:

```bash
git remote get-url origin 2>/dev/null
cat .vercel/project.json 2>/dev/null || cat .vercel/repo.json 2>/dev/null
vercel whoami 2>/dev/null
vercel teams list --format json 2>/dev/null
```

## Decision order

1. Is the user asking for preview or production?
2. Is the project already linked?
3. Is the CLI authenticated?
4. Is there a git remote?
5. Is the repo a monorepo or subdirectory app?

## Preferred deployment order

### 1. Preview deploy by default

Use direct CLI preview deploy when the user mainly wants a URL quickly:

```bash
vercel deploy [path] -y --no-wait
```

### 2. Production deploy only with explicit confirmation

```bash
vercel deploy [path] --prod -y --no-wait
```

### 3. Link only when needed and intentionally

If authenticated and not linked:

```bash
vercel link --repo --scope <team-slug>
```

Fallback when there is no git remote:

```bash
vercel link --scope <team-slug>
```

## Important notes

- Do not use `vercel link` to discover state.
- Do not push unless the user approved a push-based deployment.
- A deployment URL is not the same as runtime validation.
- Use `vercel inspect <deployment-url>` for build status.
- Use `vercel logs <deployment-url>` for runtime diagnosis.

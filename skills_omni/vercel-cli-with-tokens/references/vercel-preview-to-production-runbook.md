# Vercel Preview to Production Runbook

## Goal

Release safely by validating a preview deployment first, then promoting it to production when appropriate.

## Preferred Flow

### 1. Verify auth

```bash
vercel whoami
```

### 2. Start a preview deployment

```bash
vercel deploy -y --no-wait
```

### 3. Inspect the deployment

```bash
vercel inspect <deployment-url>
```

### 4. Review logs if needed

```bash
vercel logs <deployment-url>
```

### 5. Promote the validated deployment

```bash
vercel promote <deployment-url>
```

## When to Use Direct `--prod` Instead

Use direct production deploy when:

- the user explicitly wants a fresh production build from the current state
- there is no existing validated preview deployment to promote
- the workflow intentionally treats preview and production as separate builds

```bash
vercel deploy --prod -y --no-wait
```

## Decision Guide

| Situation | Recommended action |
| --- | --- |
| Preview is already tested and approved | `vercel promote <deployment-url>` |
| Need fresh prod build from current state | `vercel deploy --prod -y --no-wait` |
| User did not ask for production yet | Stay on preview |

## Notes

- Preview-first is the safer default.
- Promotion reduces rebuild variance.
- Inspect and logs should be your main verification path before release.

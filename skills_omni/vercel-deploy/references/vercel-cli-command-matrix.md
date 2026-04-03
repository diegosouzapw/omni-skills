# Vercel CLI Command Matrix

Quick lookup for common deployment tasks.

| Intent | Command | Notes |
| --- | --- | --- |
| Preview deploy from current directory | `vercel deploy -y` | Safe default when the user did not request production |
| Production deploy | `vercel deploy --prod -y` | Use only after explicit confirmation |
| Link current directory to a Vercel project | `vercel link` | Prevents deploying to the wrong project/team |
| Pull preview settings locally | `vercel pull --environment=preview` | Helps align local metadata before build or deploy |
| Pull production settings locally | `vercel pull --environment=production` | Useful before production troubleshooting |
| Reproduce build locally | `vercel build` | Prefer before repeated redeploy attempts |
| Inspect a deployment | `vercel inspect <deployment-url-or-id>` | Useful for build/deployment details |
| View runtime logs | `vercel logs <deployment-url-or-id>` | Use for post-deploy runtime failures |
| Manage env vars | `vercel env` | Confirm names and scopes without exposing secret values |

## Notes

- Run commands from the intended app directory.
- In monorepos, do not assume the repository root is correct.
- Preview is the default operating mode unless the user explicitly wants production.

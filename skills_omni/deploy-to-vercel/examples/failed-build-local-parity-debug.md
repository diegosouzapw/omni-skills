# Example: Failed Build Local Parity Debug

Scenario: `vercel deploy --no-wait` returned a URL, but the build failed remotely.

## Example flow

```bash
vercel inspect <deployment-url>
vercel pull --yes
vercel build
```

If runtime errors appear after a successful build:

```bash
vercel logs <deployment-url>
```

## Expected outcome

- reproduce the problem with local parity tooling
- identify whether the failure is build-time or runtime
- avoid blind redeploy loops

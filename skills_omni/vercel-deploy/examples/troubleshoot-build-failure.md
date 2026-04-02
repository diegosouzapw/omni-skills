# Example: Troubleshoot Build Failure

## Scenario

A Vercel deployment fails during build.

## Operator flow

1. Do not immediately retry multiple remote deploys.
2. Reproduce locally:

```bash
vercel build
```

3. Review likely causes:
- wrong root directory
- incorrect framework/build/output settings
- missing environment variables
- install/build command mismatch

4. After correcting the issue, redeploy:

```bash
vercel deploy -y
```

## Good final response shape

- Briefly explain the root cause if identified
- State what was changed before redeploy
- Return the preview URL if the retry succeeded

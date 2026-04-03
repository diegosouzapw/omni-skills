# Netlify Monorepo Deployment Guide

Monorepos fail most often because the deploy runs from the wrong location or uses the wrong base or publish directory.

## Preflight checks

Before linking or deploying, confirm:

- which app should be deployed
- whether commands are being run from the app root or repo root
- whether `netlify.toml` defines a `base` directory
- whether the publish path is correct for that app
- whether the build command belongs to the intended workspace

## Safe approach

1. Identify the exact app package.
2. Inspect `netlify.toml` and workspace config.
3. Confirm the build command and output directory.
4. Run Netlify commands from the intended directory or set `base` explicitly.

## Warning signs

- a different app deploys than expected
- publish directory is missing even though another package builds correctly
- the install or build step uses the wrong workspace context

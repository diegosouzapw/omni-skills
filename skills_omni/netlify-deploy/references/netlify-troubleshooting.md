# Netlify Troubleshooting Guide

## 1. Authentication failure

**Symptoms:** `npx netlify status` reports no logged-in user or invalid credentials.

**Likely cause:** Browser login not completed, token missing, or token invalid.

**Recovery:**

- Run `npx netlify login` for interactive local use.
- For CI or headless use, confirm `NETLIFY_AUTH_TOKEN` is available from a secret store.
- Re-run `npx netlify status` before attempting deploy.

## 2. Site not linked

**Symptoms:** Deploy command prompts unexpectedly for site selection or reports no linked site.

**Likely cause:** Current directory has not been linked.

**Recovery:**

- Run `npx netlify link` for an existing site.
- Run `npx netlify init` to create a new site.
- Verify the result with `npx netlify status`.

## 3. Publish directory missing

**Symptoms:** Deploy or build reports missing output directory.

**Likely cause:** Wrong publish path, failed build, or wrong working directory.

**Recovery:**

- Check publish settings in `netlify.toml`.
- Confirm the build command creates that directory.
- In monorepos, verify base directory and app root.

## 4. Local build passes, Netlify build fails

**Symptoms:** The project works locally but fails during Netlify deploy/build.

**Likely cause:** Missing env vars, wrong build command, or environment mismatch.

**Recovery:**

- Check Netlify environment variables for the relevant context.
- Verify `netlify.toml` build settings.
- Ensure the intended package/app is being built.

## 5. Monorepo wrong-root deployment

**Symptoms:** Wrong package deploys or expected files are missing.

**Likely cause:** Running commands from the wrong directory or incorrect base directory configuration.

**Recovery:**

- Identify the correct app root.
- Re-run from that directory or correct `netlify.toml`.
- Recheck build and publish paths.

## 6. Sandbox or network restriction

**Symptoms:** DNS, TLS, connection reset, or timeout failures before upload completes.

**Likely cause:** Environment blocks outbound access.

**Recovery:**

- Ask whether network-escalated execution is allowed.
- Retry only if policy allows.
- Treat this as an environment issue unless config evidence suggests otherwise.

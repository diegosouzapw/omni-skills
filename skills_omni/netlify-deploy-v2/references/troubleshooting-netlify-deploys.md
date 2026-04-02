# Troubleshooting Netlify Deploys

## 1. Authentication failure

**Symptoms:** `npx netlify status` shows no active login or auth errors.

**Check:**

```bash
npx netlify status
```

**Action:** Authenticate with `npx netlify login` or a securely provided token, then verify status again.

## 2. Wrong site linked

**Symptoms:** Status output shows an unexpected site name or URL.

**Check:**

```bash
npx netlify status
git remote -v
```

**Action:** Confirm the intended site, then relink with `npx netlify link`.

## 3. Build failure

**Symptoms:** Deploy output shows framework or dependency errors.

**Check:** Run the local install/build flow directly.

**Action:** Fix local build problems before retrying Netlify deploy.

## 4. Publish directory missing

**Symptoms:** Deploy fails because the output directory cannot be found.

**Check:** Inspect `netlify.toml` and verify the directory after a local build.

**Action:** Correct the publish path only after confirming the real build output.

## 5. Missing environment variables

**Symptoms:** Build/runtime errors mention undefined variables.

**Check:**

```bash
npx netlify env:list
```

**Action:** Add or correct required variables in Netlify-managed configuration. Avoid expose secret values.

## 6. Runtime broken after successful deploy

**Symptoms:** Deploy finishes successfully, but routes, assets, or functions fail.

**Check:** Review redirects, headers, functions config, browser console output, and relevant runtime logs.

**Action:** Treat this as runtime/config debugging, not necessarily deploy failure.

## 7. Network or sandbox restrictions

**Symptoms:** DNS failures, timeouts, or blocked outbound traffic.

**Check:** Confirm whether the execution environment blocks outbound network access.

**Action:** Ask before rerunning with escalated network permissions.

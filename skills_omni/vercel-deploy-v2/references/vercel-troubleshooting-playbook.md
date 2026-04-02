# Vercel Troubleshooting Playbook

## Symptom: CLI not found

**Likely cause:** Vercel CLI is not installed or unavailable in the environment.

**Action:**
- Confirm whether CLI installation is in scope.
- If not, use the packaged fallback deploy script.

## Symptom: No existing credentials found / login required

**Likely cause:** The CLI is not authenticated, or the session lacks access.

**Action:**
- Authenticate through an approved path.
- Retry deploy.
- If the workflow must proceed immediately and the fallback is appropriate, use `scripts/deploy.sh`.

## Symptom: Deployment appears in the wrong Vercel project/team

**Likely cause:** Wrong project linkage or wrong working directory.

**Action:**
- Stop retrying.
- Verify the correct directory.
- Re-run `vercel link` in the intended location.

## Symptom: Build fails on preview but not locally

**Likely cause:** Missing preview-scoped env vars or project configuration drift.

**Action:**
- Run `vercel pull --yes`.
- Compare preview vs production env expectations.
- Retry after correcting missing values or config.

## Symptom: Wrong app builds in a monorepo

**Likely cause:** Incorrect app root, project root, or framework/output detection.

**Action:**
- Confirm the exact app directory.
- Verify project root and build/output settings.
- Retry only after root selection is corrected.

## Symptom: Local build works, remote build fails

**Likely cause:** Build environment mismatch.

**Action:**
- Run `vercel pull --yes`.
- Run `vercel build` locally.
- Inspect project configuration and env differences.

## Symptom: Deploy succeeds but app errors at runtime

**Likely cause:** Runtime function error, missing runtime env var, or application bug.

**Action:**
- Inspect runtime logs with `vercel logs`.
- If the issue is app-specific, hand off to the relevant app debugging workflow.

## Symptom: Vercel URL works but custom domain does not

**Likely cause:** DNS or domain configuration issue.

**Action:**
- Check domain setup and propagation.
- Do not assume redeploying will fix it.

## Symptom: Network timeouts, DNS errors, connection resets during deploy

**Likely cause:** Sandbox blocks outbound network access.

**Action:**
- Re-run only the deploy step with escalated network permissions.
- Keep non-network steps unprivileged.

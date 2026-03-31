# Vercel Troubleshooting Playbook

## 1. Authentication failure

**Symptoms:** `Authentication required`, `whoami` fails, or access is denied.

**Commands:**

```bash
test -n "$VERCEL_TOKEN" && echo "VERCEL_TOKEN is set" || echo "VERCEL_TOKEN is not set"
vercel whoami
```

**Likely causes:**
- token missing
- token expired or revoked
- token belongs to the wrong account
- requested team scope is unavailable to that token

**Remediation:**
- set or replace `VERCEL_TOKEN`
- confirm account/team access
- rotate the token if exposure is suspected

## 2. Wrong project or team targeted

**Symptoms:** deployment appears in the wrong place or commands act on an unexpected project.

**Commands:**

```bash
test -n "$VERCEL_ORG_ID" && echo set || echo unset
test -n "$VERCEL_PROJECT_ID" && echo set || echo unset
cat .vercel/project.json 2>/dev/null || cat .vercel/repo.json 2>/dev/null
```

**Likely causes:**
- one ID set without the other
- stale `.vercel/` state
- wrong `--scope`

**Remediation:**
- use both IDs together
- verify linked state read-only
- relink only deliberately

## 3. Build failed

**Symptoms:** deployment starts but does not complete successfully.

**Commands:**

```bash
vercel inspect <deployment-url>
vercel logs <deployment-url>
```

**Likely causes:**
- missing dependency or build script
- missing env var
- framework/config mismatch
- stale CLI behavior expectations

**Remediation:**
- fix the underlying build issue
- verify env configuration
- re-run after correction

## 4. Deployment exists but runtime is broken

**Symptoms:** deployment URL resolves, but app behavior is incorrect.

**Commands:**

```bash
vercel inspect <deployment-url>
vercel logs <deployment-url>
vercel env ls --scope <team-slug>
```

**Likely causes:**
- env drift between preview and production
- missing preview-only or production-only secret
- app-level runtime configuration issue

**Remediation:**
- compare expected env keys
- correct scope-specific env vars
- redeploy or promote after config is fixed

## 5. CI hung on an interactive prompt

**Symptoms:** the job appears stuck during setup, deploy, or env operations.

**Commands to review:**
- `vercel link`
- `vercel deploy`
- `vercel env ...`

**Likely causes:**
- missing `-y`
- project not targeted non-interactively
- workflow assumes local `.vercel/` state that is absent in CI

**Remediation:**
- add `-y` where appropriate
- use `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`
- remove unnecessary linking from CI flows

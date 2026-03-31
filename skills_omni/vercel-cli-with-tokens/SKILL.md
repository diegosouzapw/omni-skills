---
name: "vercel-cli-with-tokens"
description: "Vercel CLI with Tokens workflow skill. Use this skill when a user needs to deploy or manage a Vercel project with non-interactive token-based authentication, especially for preview deploys, production promotion, project targeting, environment variable management, and CI-safe CLI automation without relying on `vercel login`."
version: "0.0.1"
category: "cli-automation"
tags:
  - "vercel-cli-with-tokens"
  - "vercel"
  - "cli"
  - "deployment"
  - "token-auth"
  - "preview-deploy"
  - "production-promotion"
  - "environment-variables"
  - "ci"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-31"
date_updated: "2026-03-31"
upstream_skill: "skills/vercel-cli-with-tokens"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "10"
upstream_head_repo: "diegosouzapw/omni-skills"
upstream_head_sha: "6694282a8c80060989f27612505ced763d291b76"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Vercel CLI with Tokens

## Overview

Use this skill when the task is to operate Vercel through the CLI with token-based authentication instead of interactive `vercel login`.

This skill is optimized for safe, non-interactive workflows such as:

- verifying token-backed CLI access
- targeting the correct Vercel org and project
- deploying preview builds by default
- inspecting deployment status and logs
- promoting a validated deployment to production when explicitly approved
- managing environment variables with `vercel env`
- running the same workflow locally or in CI without exposing secrets in command arguments

This enhanced copy preserves the original skill intent while tightening security and execution safety. It standardizes on `VERCEL_TOKEN`, prefers reproducible CLI execution, distinguishes safe preflight commands from commands that can prompt or mutate state, and frames production release as a deliberate decision instead of the default path.

## When to Use This Skill

Use this skill when:

- a user asks to deploy to Vercel from the CLI using an access token
- a workflow must run non-interactively in CI or a scripted shell session
- you need to manage Vercel environment variables from the CLI
- you need to deploy a preview first, then inspect or promote it
- you have `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` and want to avoid interactive linking
- you need troubleshooting for auth, scope, linking, build, or environment drift issues

Do **not** use this skill as the primary workflow when:

- the task is mainly framework debugging inside the app codebase
- the task is mainly Vercel architecture or platform design rather than CLI operations
- the best trigger is a deploy hook rather than direct token-based CLI automation
- the user wants dashboard-only/manual operations instead of CLI execution

## Operating Table

| Situation | Recommended path | Why |
| --- | --- | --- |
| Need to verify auth safely from any directory | `vercel whoami` | Safe preflight command that validates token-backed identity without linking or deploying |
| Need reproducible one-off CLI execution | `npx vercel@latest --version` then `npx vercel@latest ...` | Avoids relying only on a global install |
| Need CI or non-interactive project targeting | Set both `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` | Preferred automation path; avoids dependence on local `.vercel/` state |
| Need local/manual targeting without IDs | `vercel link` fallback | Useful when IDs are unavailable, but can prompt or change local state |
| Need safest default release flow | Preview deploy -> inspect/logs -> optional `promote` | Reduces risk compared with rebuilding directly to production |
| Need direct production deploy now | `vercel deploy --prod` only with explicit intent | Rebuilds and releases from the current state |
| Need environment variable lifecycle operations | `vercel env add/ls/pull/rm` | Supports scoped runtime configuration management |
| Need to diagnose failures | `whoami`, `inspect`, `logs`, `env ls` | Core troubleshooting loop |

For command-by-command context and side-effect risk, see [Vercel CLI command matrix](references/vercel-cli-command-matrix.md).

## Workflow

### 1. Preflight: verify CLI execution mode

Prefer ephemeral or pinned execution for repeatability.

```bash
npx vercel@latest --version
```

Optional for local operators who intentionally want a global install:

```bash
vercel --version
```

If the CLI is missing and a global install is explicitly acceptable:

```bash
npm install -g vercel
vercel --version
```

### 2. Preflight: confirm token presence without printing it

Do not print the token to the terminal.

```bash
test -n "$VERCEL_TOKEN" && echo "VERCEL_TOKEN is set" || echo "VERCEL_TOKEN is not set"
```

If loading from a local `.env` file, avoid broad secret-grep patterns and avoid echoing the value back.

```bash
grep -q '^VERCEL_TOKEN=' .env 2>/dev/null && \
  export VERCEL_TOKEN="$(grep '^VERCEL_TOKEN=' .env | cut -d= -f2-)"
```

If the token is under a different variable name and the user has already identified the correct variable, remap it narrowly:

```bash
export VERCEL_TOKEN="$(grep '^MY_EXISTING_TOKEN_VAR=' .env | cut -d= -f2-)"
```

If no token is available, ask the user to provide one or generate a new access token in Vercel before continuing.

### 3. Preflight: verify authentication safely

Run this before linking or deploying:

```bash
vercel whoami
```

If needed and you are intentionally targeting a specific team slug:

```bash
vercel whoami --scope <team-slug>
```

This is the safest general-purpose auth check because it validates token-backed access without requiring project linkage.

### 4. Choose project targeting mode

Preferred order:

1. `VERCEL_ORG_ID` + `VERCEL_PROJECT_ID`
2. existing valid `.vercel/` link state
3. `vercel link` as a fallback

#### Preferred automation targeting: both IDs set

Both variables must be set together.

```bash
test -n "$VERCEL_ORG_ID" && echo "VERCEL_ORG_ID is set" || echo "VERCEL_ORG_ID is not set"
test -n "$VERCEL_PROJECT_ID" && echo "VERCEL_PROJECT_ID is set" || echo "VERCEL_PROJECT_ID is not set"
```

If you have the values:

```bash
export VERCEL_ORG_ID="<org-id>"
export VERCEL_PROJECT_ID="<project-id>"
```

Use this mode in automation whenever possible.

#### Fallback: existing linked project

If you are already inside a linked repository, `.vercel/project.json` or `.vercel/repo.json` may exist. Do not hand-edit these files.

Read-only inspection can help confirm state:

```bash
cat .vercel/project.json 2>/dev/null || cat .vercel/repo.json 2>/dev/null
```

#### Fallback: link the project

Only use linking when IDs are unavailable and you intentionally want local project association.

With a git remote:

```bash
vercel link --repo --scope <team-slug> -y
```

Without a git remote:

```bash
vercel link --scope <team-slug> -y
```

To link a specific project by name:

```bash
vercel link --project <project-name> --scope <team-slug> -y
```

### 5. Deploy preview by default

Use preview deploys unless the user explicitly requests a production release.

```bash
vercel deploy -y --no-wait
```

If team slug targeting is needed:

```bash
vercel deploy --scope <team-slug> -y --no-wait
```

Capture the deployment URL from CLI output, then inspect it:

```bash
vercel inspect <deployment-url>
```

If build or runtime investigation is needed:

```bash
vercel logs <deployment-url>
```

### 6. Decide the production path explicitly

Use one of these production paths only when the user clearly wants production:

#### Option A: promote an already-validated deployment

Preferred when a preview deployment has already been tested and should be released without rebuilding.

```bash
vercel promote <deployment-url>
```

#### Option B: direct production deploy

Use when the user explicitly wants a production deployment built from the current state.

```bash
vercel deploy --prod -y --no-wait
```

If needed:

```bash
vercel deploy --prod --scope <team-slug> -y --no-wait
```

### 7. Manage environment variables deliberately

Add a variable:

```bash
echo "value" | vercel env add VAR_NAME preview --scope <team-slug>
```

List variables:

```bash
vercel env ls --scope <team-slug>
```

Pull variables for local development:

```bash
vercel env pull --scope <team-slug>
```

Remove a variable:

```bash
vercel env rm VAR_NAME preview --scope <team-slug> -y
```

Before a production release, confirm that required variables exist in the correct target environment.

### 8. If using git push deployment, ask before pushing

If the workflow depends on pushing commits to trigger Vercel deployment, get explicit user approval first.

```bash
git add .
git commit -m "deploy: <description>"
git push
```

Only do this with clear permission.

## Examples

### Example 1: Safe auth and preview deploy in a linked or ID-targeted project

```bash
npx vercel@latest --version
test -n "$VERCEL_TOKEN" && echo "VERCEL_TOKEN is set" || echo "VERCEL_TOKEN is not set"
vercel whoami
vercel deploy -y --no-wait
```

Expected outcome: the CLI confirms identity and starts a preview deployment without prompting for interactive login.

### Example 2: Non-interactive project targeting with org and project IDs

```bash
export VERCEL_TOKEN="<masked-by-shell-or-ci>"
export VERCEL_ORG_ID="<org-id>"
export VERCEL_PROJECT_ID="<project-id>"
vercel whoami
vercel deploy -y --no-wait
```

Expected outcome: deployment targets the intended Vercel project without requiring `vercel link`.

### Example 3: Preview first, then promote to production

```bash
vercel deploy -y --no-wait
vercel inspect <deployment-url>
vercel logs <deployment-url>
vercel promote <deployment-url>
```

Expected outcome: a validated preview deployment is promoted to production without rebuilding.

### Example 4: Add and verify an environment variable for preview

```bash
echo "value" | vercel env add API_BASE_URL preview --scope <team-slug>
vercel env ls --scope <team-slug>
```

Expected outcome: the variable is available to preview deployments for the targeted project/team.

### Example 5: GitHub Actions pattern with masked secrets

See [GitHub Actions example](examples/github-actions-vercel-cli-token.yml) for a CI-safe pattern using repository secrets instead of command-line token arguments.

## Best Practices

### Do

- Use `VERCEL_TOKEN` as an environment variable, not a `--token` argument.
- Prefer CI secret stores or ephemeral shell environment variables over plaintext token handling.
- Verify authentication with `vercel whoami` before attempting link or deploy operations.
- Prefer `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` together for automation.
- Default to preview deploys first.
- Use `vercel inspect` and `vercel logs` to validate deployment state.
- Prefer `vercel promote` when releasing a preview that has already been validated.
- Confirm environment variable scope before blaming the application or framework.
- Use `-y` where confirmation prompts would block automation.
- Keep `.env` files out of version control.

### Don't

- Do not pass secrets in command arguments.
- Do not print tokens with `printenv`, `env`, or broad `grep` commands in shared terminals or logs.
- Do not set only one of `VERCEL_ORG_ID` or `VERCEL_PROJECT_ID`.
- Do not assume production deploy should be the default path.
- Do not run `vercel link` casually in CI or untrusted directories.
- Do not hand-edit `.vercel/project.json` or `.vercel/repo.json`.
- Do not push to git without explicit approval.
- Do not assume a successful deployment URL means the app has correct runtime configuration.

For token-handling guidance, see [Vercel token security notes](references/vercel-token-security-notes.md).

## Troubleshooting

### Problem: `Authentication required` or `vercel whoami` fails

**Symptoms:** The CLI reports authentication failure, unknown user, or insufficient access.

**Solution:**
1. Confirm `VERCEL_TOKEN` is set without printing it.
2. Run `vercel whoami`.
3. If needed, retry with the intended `--scope`.
4. If it still fails, ask for a fresh token or confirm the token belongs to the correct account/team.
5. If the token may have been exposed, rotate it before continuing.

### Problem: Deployment targets the wrong team or project

**Symptoms:** Deployments appear under the wrong Vercel team, project, or scope.

**Solution:**
1. Verify whether automation is using `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`.
2. Confirm both are set together.
3. If using `--scope`, confirm the team slug is correct.
4. If relying on `.vercel/`, inspect it read-only and verify the linked org/project matches expectations.
5. Re-link only if you intentionally want to change association.

### Problem: CI hangs or waits for interactive input

**Symptoms:** The job stalls during `vercel` commands, especially in fresh workspaces.

**Solution:**
1. Ensure `-y` is used where confirmation prompts are expected.
2. Prefer `VERCEL_ORG_ID` + `VERCEL_PROJECT_ID` instead of relying on interactive linking.
3. Avoid `vercel link` in CI unless the workflow explicitly requires it.
4. Verify the working directory contains the intended project before deploy commands run.

### Problem: Deployment exists, but the app is broken at runtime

**Symptoms:** The deployment URL is created, but the application fails, shows missing configuration, or behaves differently across environments.

**Solution:**
1. Run `vercel inspect <deployment-url>`.
2. Run `vercel logs <deployment-url>`.
3. Check environment variable presence with `vercel env ls --scope <team-slug>`.
4. Confirm the variable exists in the correct environment: `preview`, `production`, or `development`.
5. If needed, pull local env configuration with `vercel env pull --scope <team-slug>` and compare expected keys.

### Problem: Build fails during deploy

**Symptoms:** The deployment starts but fails during build or initialization.

**Solution:**
1. Review `vercel logs <deployment-url>`.
2. Confirm dependencies and build scripts are present and committed.
3. Check for missing env vars.
4. Verify framework detection and `vercel.json` only if the project intentionally uses custom config.
5. Confirm CLI version if behavior seems inconsistent across environments.

### Problem: One ID is set, but not both

**Symptoms:** The CLI errors unexpectedly or cannot resolve the target project.

**Solution:**
Set `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` together, or unset both and use a deliberate linking workflow instead.

For a deeper symptom-based recovery flow, see [Vercel troubleshooting playbook](references/vercel-troubleshooting-playbook.md).

## Related Skills

- `@deploy-to-vercel` - Use when the request is primarily about deployment workflow beyond token-auth CLI specifics.
- `@vercel-composition-patterns` - Use when the task becomes architecture or composition design.
- `@vercel-react-best-practices` - Use when the real issue is React or frontend implementation quality.
- `@vercel-react-native-skills` - Use when the task moves into React Native-specific delivery concerns.

If the user really needs webhook-triggered releases instead of CLI token automation, consider a deploy-hook-oriented workflow rather than this skill.

## Additional Resources

- [Vercel CLI command matrix](references/vercel-cli-command-matrix.md)
- [Vercel token security notes](references/vercel-token-security-notes.md)
- [Vercel preview-to-production runbook](references/vercel-preview-to-production-runbook.md)
- [Vercel environment management runbook](references/vercel-env-management-runbook.md)
- [Vercel troubleshooting playbook](references/vercel-troubleshooting-playbook.md)
- [GitHub Actions example](examples/github-actions-vercel-cli-token.yml)
- [Preview deploy and promote example](examples/preview-deploy-and-promote.md)
- [Non-interactive project targeting example](examples/noninteractive-project-targeting.md)
- [Routing guidance](agents/vercel-cli-router.md)

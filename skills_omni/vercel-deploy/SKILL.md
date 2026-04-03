---
name: "vercel-deploy"
description: "Vercel deployment workflow skill. Use this skill when a user wants to deploy an application or website to Vercel, create a preview deployment, push a change live on Vercel, or return a deployment URL after deployment. Do not use it for Netlify, Cloudflare, or Render deployments, and do not treat production deployment as the default."
version: "0.0.1"
category: "devops"
tags:
  - "vercel-deploy"
  - "vercel"
  - "deployment"
  - "preview"
  - "production"
  - "hosting"
  - "cli"
  - "devops"
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
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/vercel-deploy"
upstream_author: "github.com/openai/skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Vercel Deploy

## Overview

Use this skill to deploy an application or website to Vercel with a preview-first workflow.

This skill preserves the original upstream intent while making the workflow more execution-ready for operators: confirm whether the user wants a preview or production deployment, verify the correct Vercel account/team and project, align local settings with Vercel using the CLI, deploy safely, and return the resulting deployment URL without over-claiming that the application itself is correct.

Default to a **preview deployment** unless the user explicitly asks for production or clearly asks to push changes live.

This skill is for **deployment execution and deployment triage on Vercel**. It is not the right skill for unrelated CI/CD design, non-Vercel hosting providers, DNS/domain setup, or broad application debugging unless those issues are directly blocking deployment.

## When to Use This Skill

Use this skill when:

- the user asks to deploy a site or app to Vercel
- the user wants a **preview deployment URL** to share or review
- the user asks to **push a change live** on Vercel
- the user wants to redeploy an existing Vercel project
- the operator needs to diagnose a failed Vercel deployment involving auth, linking, build settings, environment variables, or runtime logs

Do **not** use this skill when:

- the target platform is Netlify, Cloudflare, Render, or another non-Vercel host
- the task is primarily DNS or custom domain management
- the task is primarily CI/CD architecture design rather than deploying to Vercel
- the task is deep framework-specific debugging not directly tied to the deployment path
- the user wants secret design, credential rotation, or broader security engineering beyond what is needed for a safe deploy

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First preview deploy from a local repo | `references/deployment-preflight-checklist.md` | Confirms root directory, account/team, linking, env scope, and deployment target before running commands |
| Need the right CLI command quickly | `references/vercel-cli-command-matrix.md` | Maps common intents to safe Vercel CLI commands |
| Production deploy request | `references/production-deploy-safety.md` | Adds confirmation, impact awareness, and rollback notes before `--prod` |
| Build failure during deploy | `references/troubleshooting-matrix.md` | Separates build failures from runtime issues and gives recovery steps |
| Task drift or routing uncertainty | `agents/router.md` | Helps route DNS, CI, framework debugging, or secret work elsewhere |

## Workflow

1. **Confirm deployment intent**
   - Ask whether the user wants a **preview deployment** or a **production deployment**.
   - If the request is ambiguous, default to preview.
   - For production, confirm explicitly before using `--prod`.

2. **Confirm working context**
   - Identify the app directory.
   - Ask whether this is a monorepo or a single-project repository.
   - Confirm the expected Vercel account/team and project if there is any ambiguity.

3. **Verify CLI availability and authentication**
   - Prefer existing authenticated CLI access.
   - For interactive work, `vercel login` is preferred.
   - For non-interactive work, use a scoped token only when needed.
   - Do not print tokens into chat, logs, commit messages, or PR text.

4. **Link and synchronize project settings**
   - If the directory is not linked to the correct Vercel project, use `vercel link`.
   - If local assumptions may be stale, run `vercel pull` for the target environment to align project settings and environment metadata.

5. **Run preflight checks**
   - Verify the root directory is correct.
   - Verify framework/build/output configuration if the project is custom or monorepo-based.
   - Verify required environment variables exist for the target environment without echoing secret values.

6. **Optionally reproduce the build locally**
   - If the project has a history of build issues, or a previous deploy failed, run `vercel build` before retrying remote deployment.
   - Use this to catch configuration, framework, or environment mismatches early.

7. **Deploy**
   - Preview: `vercel deploy -y`
   - Production only after explicit confirmation: `vercel deploy --prod -y`
   - If needed, deploy from the intended app directory rather than the repository root.

8. **Return the deployment result clearly**
   - Provide the deployment URL.
   - State whether the deployment is preview or production.
   - Mention the project/team context if relevant.
   - Do **not** claim that deployment success proves application correctness.

9. **Troubleshoot if deployment fails**
   - Check whether the failure is auth, linking, build, environment, monorepo/root-directory, runtime, or sandbox/network related.
   - Use `vercel build`, `vercel inspect`, or `vercel logs` as appropriate.

10. **For production deploys, include recovery context**
   - If the user pushed a bad production deploy, mention rollback/redeploy options and ask whether they want recovery help.

## Production Deploys

Production deployment is higher risk than preview deployment and should not be the default.

Before running a production deploy:

- confirm the user explicitly wants production
- confirm the correct project and team
- confirm the correct app/root directory
- confirm required production environment variables exist
- mention that production deployment may affect live traffic

Typical command:

```bash
vercel deploy --prod -y
```

If the project is in a subdirectory, run the command from that directory instead of guessing at the repository root.

After a production deploy, return:

- the production deployment URL
- that the deploy was production, not preview
- any important caveat such as unverified runtime behavior or pending custom-domain propagation

## Security Notes

- Prefer interactive `vercel login` for human-driven work when feasible.
- Use token-based auth only when necessary for automation or non-interactive runs.
- Do not paste access tokens into chat output, shell history examples, PR descriptions, or logs.
- Confirm the **presence** of required environment variables without exposing their values.
- Be careful not to deploy to the wrong team or project, especially in shared accounts.
- Do not fetch or probe the deployed URL unless the user asks for endpoint verification or testing.
- Treat preview URLs and any claim/manage URLs as potentially sensitive operational artifacts.

## Examples

### Example 1: Default preview deployment

```bash
vercel deploy -y
```

**Expected result:** A preview deployment is created and Vercel returns a deployment URL that can be shared with the user.

### Example 2: Link the local directory to the correct Vercel project

```bash
vercel link
```

**Expected result:** The current working directory is associated with the intended Vercel project and team, reducing accidental deployment to the wrong target.

### Example 3: Pull project settings before deploying

```bash
vercel pull --environment=preview
```

**Expected result:** Local Vercel metadata is synchronized for the preview environment, helping align environment and project settings before a deploy or local build.

### Example 4: Reproduce a failing build locally

```bash
vercel build
```

**Expected result:** The production-style build runs locally, making it easier to debug build failures without repeated remote redeploy attempts.

### Example 5: Explicit production deploy

```bash
vercel deploy --prod -y
```

**Expected result:** A production deployment is created. Use this only after explicit user confirmation.

## Best Practices

### Do

- default to preview deployments when the user does not explicitly request production
- confirm the correct team, project, and app directory before deploying
- use `vercel link` when project association is uncertain
- use `vercel pull` when local config or environment metadata may be out of date
- use `vercel build` to reproduce build failures before retrying deploys repeatedly
- distinguish clearly between build failures and runtime failures
- return the deployment URL and deployment type clearly in the final response
- preserve the boundary between deployment success and application correctness

### Don't

- do not default to `--prod` just because the user said "deploy"
- do not expose tokens or secret environment variable values
- do not assume the repository root is the correct deploy root in a monorepo
- do not keep retrying failed deployments without checking build, env, or linking issues
- do not treat sandbox/network escalation as the universal first fix
- do not curl or probe the deployed URL unless the user requests verification

## Troubleshooting

### Problem: `vercel deploy` fails with authentication or credential errors

**Symptoms:** Messages such as "No existing credentials found", token/auth failures, or inability to reach the intended team/project.

**Solution:**
- Check whether the CLI is already authenticated.
- For interactive work, use `vercel login`.
- For non-interactive work, confirm a valid scoped token is available without printing it.
- Confirm the user is targeting the correct Vercel account/team.
- If sandbox restrictions block login or outbound auth flow, ask before rerunning with escalated network permissions.

### Problem: The deploy goes to the wrong Vercel project or team

**Symptoms:** The deployment URL belongs to an unexpected project, or settings/framework detection do not match the intended app.

**Solution:**
- Verify the current directory.
- Run `vercel link` to associate the directory with the intended project.
- If needed, re-check local project metadata after linking.
- Re-deploy only after confirming the correct project/team context.

### Problem: The remote deploy fails during build

**Symptoms:** Vercel reports build errors, install failures, framework detection issues, missing output, or command failures.

**Solution:**
- Reproduce locally with `vercel build`.
- Review build settings such as framework preset, install command, build command, output directory, and runtime expectations.
- Verify the deploy is being run from the correct app/root directory.
- For monorepos, confirm the correct package/app is being deployed.
- Retry deployment only after correcting the underlying issue.

### Problem: Preview deploy works differently from production

**Symptoms:** Preview succeeds but production fails, or behavior differs between preview and production.

**Solution:**
- Check environment-variable scope and availability for each environment.
- Confirm production-specific variables exist and are correctly configured.
- Use `vercel pull --environment=production` if you need to align local metadata for production troubleshooting.
- Avoid expose secret values while verifying configuration.

### Problem: The app deploys, but runtime behavior is failing

**Symptoms:** Deployment succeeds, but requests fail, functions error, or runtime behavior is broken.

**Solution:**
- Use `vercel inspect <deployment-url-or-id>` to inspect deployment details.
- Use `vercel logs <deployment-url-or-id>` for runtime logs.
- Separate runtime issues from build issues; successful deployment does not guarantee healthy application behavior.
- If the issue is framework-specific and not deployment-specific, hand off to a more appropriate debugging skill.

### Problem: Monorepo or subdirectory deployment is misconfigured

**Symptoms:** Wrong framework detected, wrong files deployed, output missing, or the root project deploys instead of the intended app.

**Solution:**
- Confirm whether the app lives in a package or subdirectory.
- Run commands from the correct app directory.
- Verify root-directory and build/output settings in the Vercel project configuration.
- Re-link if needed so the intended app directory maps to the correct Vercel project.

### Problem: Network or sandbox restrictions block deployment

**Symptoms:** Timeouts, DNS failures, connection resets, or blocked outbound requests from the execution environment.

**Solution:**
- First rule out auth, linking, root-directory, and build issues.
- If the problem is genuinely outbound connectivity, ask before rerunning with escalated network permissions.
- Use an appropriately long timeout because deployments and builds may take several minutes.

## Related Skills

- Use a DNS or domain-management skill if the work becomes custom domain setup, verification, or DNS troubleshooting.
- Use a CI/CD workflow skill if the user needs pipeline design rather than direct Vercel deployment.
- Use a framework-specific debugging skill if the deployment is fine but the application code is broken.
- Use a secrets or security workflow skill if the task becomes credential lifecycle management rather than deploy execution.

## Additional Resources

### Local references

- [Deployment preflight checklist](references/deployment-preflight-checklist.md)
- [Vercel CLI command matrix](references/vercel-cli-command-matrix.md)
- [Troubleshooting matrix](references/troubleshooting-matrix.md)
- [Production deploy safety notes](references/production-deploy-safety.md)

### Local examples

- [Preview deploy example](examples/preview-deploy.md)
- [Production deploy example](examples/production-deploy.md)
- [Monorepo deploy example](examples/monorepo-deploy.md)
- [Build failure troubleshooting example](examples/troubleshoot-build-failure.md)

### Upstream and vendor documentation

- Vercel CLI documentation
- Vercel CLI `deploy`, `link`, `pull`, `build`, `inspect`, `logs`, and `env` commands
- Vercel environment variables documentation
- Vercel monorepo and project configuration documentation
- Vercel rollback guidance

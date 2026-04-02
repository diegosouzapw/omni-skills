---
name: "vercel-deploy-v2"
description: "Vercel Deploy workflow skill. Use this skill when the user needs to deploy an application or website to Vercel, create a preview deployment, or explicitly promote a build to production while keeping deployment steps, safety checks, troubleshooting, and provenance reviewable."
version: "0.0.1"
category: "devops"
tags:
  - "vercel-deploy-v2"
  - "vercel"
  - "deployment"
  - "preview"
  - "production"
  - "cli"
  - "hosting"
  - "monorepo"
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
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/vercel-deploy-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Vercel Deploy

## Overview

This skill packages the upstream `skills/.curated/vercel-deploy` workflow into the Omni Skills format while preserving its original intent: deploy local projects to Vercel safely, return the resulting URL, and keep provenance visible when the packaged fallback workflow is used.

Use this skill when a user asks to deploy a site or app, create a preview deployment, or push an already-prepared project live on Vercel. Default to a **preview deployment** unless the user explicitly asks for **production**.

This skill favors the official Vercel CLI flow when available, and preserves the repository-provided fallback deploy script for cases where the CLI is unavailable or not authenticated.

## When to Use This Skill

Use this skill when:

- the user asks to deploy a local application or website to Vercel
- the user asks for a preview link, staging-like deploy, or shareable deployment URL
- the user explicitly asks to deploy to production on Vercel
- the repository is already linked to a Vercel project, or needs to be linked before deployment
- the operator needs a repeatable workflow with deployment checks, troubleshooting, and handoff notes
- the task includes likely Vercel-specific concerns such as environment variables, monorepo app selection, build/output mismatches, or post-deploy logs

Do **not** use this skill as the main workflow when:

- the core task is application debugging rather than deployment
- the user needs framework-specific build fixes more than deployment execution
- the user wants broad infrastructure design unrelated to Vercel hosting

## Operating Table

| Situation | Start here | Required confirmation | Expected output |
| --- | --- | --- | --- |
| Standard preview deploy | `references/vercel-deploy-workflow.md` | Confirm preview is acceptable | Preview deployment URL |
| Explicit production deploy | `references/vercel-deploy-workflow.md` and `examples/production-deploy.md` | Explicit user approval for production | Production deployment URL |
| Repo not linked to correct Vercel project/team | `references/vercel-cli-command-reference.md` | Confirm target project/team | Successful `vercel link` then deploy |
| CLI missing or not authenticated | Imported fallback notes and `scripts/deploy.sh` | Confirm fallback path is acceptable | `previewUrl` and possibly `claimUrl` |
| Monorepo or app subdirectory deployment | `examples/monorepo-deploy.md` | Confirm which app/root to deploy | Correct app deployment URL |
| Suspected env-var mismatch | `references/vercel-troubleshooting-playbook.md` | Confirm preview vs production scope | Deploy succeeds with correct env scope |
| Build or runtime failure after deploy | `references/vercel-troubleshooting-playbook.md` | Confirm whether to inspect logs/config | Build error details or runtime log path |
| Review, provenance, or import lineage check | Existing import support pack plus origin scripts | None | Source/lineage confirmation |

## Workflow

1. **Confirm deployment intent**
   - Ask whether the user wants a preview deployment or a production deployment.
   - If the user does not explicitly request production, use preview.
   - Confirm the target directory if the repository contains multiple apps.

2. **Check local prerequisites safely**
   - Verify the Vercel CLI without escalation:

   ```bash
   command -v vercel
   ```

   - If the CLI is unavailable, or if the official CLI path is blocked by missing auth, prepare to use the packaged fallback script.
   - Do not escalate the installation check.

3. **Confirm auth and project context**
   - If using the CLI, confirm the current directory is linked to the correct Vercel project/team.
   - If linkage is missing or incorrect, use `vercel link` in the intended project directory.
   - Be careful in monorepos: linking the wrong directory can deploy the wrong app.

4. **Sync project settings when reliability matters**
   - Before local builds, troubleshooting, or deterministic deploys, sync project configuration and environment settings:

   ```bash
   vercel pull --yes
   ```

   - Use this especially when preview builds fail due to missing environment variables or mismatched project configuration.

5. **Choose the deployment path**
   - **Preferred path: official CLI**
     - Preview deploy:

     ```bash
     vercel deploy -y
     ```

     - Production deploy, only with explicit user approval:

     ```bash
     vercel deploy --prod -y
     ```

   - **Deterministic/prebuilt path:** use when local reproduction or sandbox constraints matter:

     ```bash
     vercel build
     vercel deploy --prebuilt -y
     ```

   - **Repository fallback path:** if the CLI is unavailable or fails with an auth-related error, use the packaged script described in the imported notes.

6. **Use narrow escalation only when needed**
   - If deployment fails because sandbox networking blocks outbound access, rerun only the deployment step with escalated network permissions.
   - Do not broaden privileges for unrelated steps.

7. **Capture and return the result**
   - Return the deployment URL to the user.
   - If the fallback script returns both `previewUrl` and `claimUrl`, provide both and explain their purpose.
   - Do **not** fetch, curl, or browse the deployment URL unless the user explicitly asks for verification.

8. **Troubleshoot only as far as the deployment workflow owns**
   - For auth, linkage, env, build, and runtime-log issues, use the local troubleshooting references.
   - If the problem is really an application bug or framework misconfiguration, hand off to the most relevant adjacent skill or specialist workflow.

9. **Preserve provenance where relevant**
   - When using the imported fallback flow or support pack, keep origin and packaged-workflow provenance visible in notes, review packets, or handoff summaries.

## Examples

### Example 1: Safe preview deploy

```bash
command -v vercel
vercel deploy -y
```

**Expected result:** Vercel returns a preview deployment URL. Share that URL with the user and stop unless they ask for more.

### Example 2: Explicit production deploy

```bash
command -v vercel
vercel deploy --prod -y
```

**Use only when:** the user clearly asked for production deployment.

**Expected result:** Vercel returns the production deployment URL.

### Example 3: Sync config before building locally

```bash
vercel pull --yes
vercel build
vercel deploy --prebuilt -y
```

**Use when:** you need a more reproducible local build/deploy flow or need to troubleshoot configuration drift.

### Example 4: Fallback deploy script

```bash
skill_dir="<path-to-skill>"
bash "$skill_dir/scripts/deploy.sh" /path/to/project
```

**Expected result:** the script returns JSON including `previewUrl` and `claimUrl`.

### Example 5: Inspect packaged origin before handoff or review

```bash
python3 skills/vercel-deploy-v2/scripts/omni_import_print_origin.py
```

**Use when:** reviewers need to verify upstream lineage or imported source context.

## Best Practices

### Do

- Default to **preview deployments** unless production is explicitly requested.
- Confirm the correct app directory before deploying, especially in monorepos.
- Confirm project/team context before linking or deploying.
- Use `vercel pull --yes` before local builds or when config/env drift is suspected.
- Use `vercel build` plus `vercel deploy --prebuilt -y` when a deterministic local build is useful.
- Return only the URLs and relevant deployment outcome details.
- Keep imported-workflow provenance visible when the fallback script or import support pack is involved.
- Use troubleshooting steps that map to concrete Vercel failure modes rather than guessing.

### Don't

- Do not deploy to production by default.
- Do not assume the current directory is linked to the correct Vercel project.
- Do not paste tokens into chat transcripts, shell history examples, or committed files.
- Do not expose environment-variable values in logs or user-facing summaries.
- Do not commit `.vercel` artifacts casually without repository-specific reason and review.
- Do not fetch or curl the resulting deployment URL unless the user explicitly asks for verification.
- Do not keep retrying deploys when the problem is clearly a domain, env-scope, or application-level issue.

### Security Notes

- Treat Vercel credentials and environment variables as secrets.
- Prefer the least-privilege authentication path available in the operator environment.
- Confirm team/account scope before deploying so you do not publish to the wrong organization.
- If a command may be logged, avoid inline secret material.
- Use production deploys only with explicit user intent.

## Troubleshooting

### Problem: `vercel` is not installed

**Symptoms:** `command -v vercel` returns nothing, or the shell reports `vercel: command not found`.
**Solution:** If installing or authenticating the CLI is outside scope, use the packaged fallback deploy script documented in this skill. Otherwise, stop and ask the user whether they want the CLI installed/configured first.

### Problem: CLI reports missing credentials or login/auth failure

**Symptoms:** The CLI fails with an auth-related error such as no existing credentials, login required, or insufficient access.
**Solution:** Use an approved Vercel authentication path, then retry the CLI deploy. If immediate deployment is still needed and the repository fallback is appropriate, use `scripts/deploy.sh` and return the resulting URLs.

### Problem: The repo is linked to the wrong Vercel project or team

**Symptoms:** The deployment appears under the wrong project, wrong team, or wrong dashboard context.
**Solution:** Stop before retrying blindly. Re-run the workflow in the correct directory and re-establish project linkage with `vercel link` for the intended target.

### Problem: Preview deploy fails because environment variables are missing

**Symptoms:** The build fails remotely, or the app deploys but breaks because values expected in preview are absent.
**Solution:** Check whether the variables exist in the correct Vercel environment scope. Sync local settings with `vercel pull --yes`, inspect environment configuration, and retry only after confirming preview vs production values are set correctly.

### Problem: Monorepo deployment uses the wrong app root or output settings

**Symptoms:** The wrong package builds, framework detection is incorrect, or output files are missing.
**Solution:** Confirm the exact app directory to deploy, then verify project root and build/output configuration. Use the monorepo example and review project configuration before retrying.

### Problem: Build succeeds locally but fails on Vercel

**Symptoms:** Local commands work, but the Vercel build fails or produces different output.
**Solution:** Sync project settings with `vercel pull --yes`, then use `vercel build` locally to reproduce the Vercel build more closely. Inspect framework/output configuration and environment differences before redeploying.

### Problem: Deployment succeeds but the app fails at runtime

**Symptoms:** The deployment URL exists, but requests fail, functions error, or the app crashes after startup.
**Solution:** Use Vercel logs to inspect runtime output and function errors. If the issue is application-level rather than deployment-level, hand off to the appropriate app/framework debugging workflow.

### Problem: Deployment URL works but the custom domain does not

**Symptoms:** The generated Vercel deployment URL is reachable, but the expected custom domain is not.
**Solution:** Check domain configuration and DNS status instead of redeploying immediately. This is often a domain setup or propagation issue, not a deployment failure.

### Problem: Network access is blocked by sandboxing

**Symptoms:** The deploy fails with timeouts, DNS errors, or connection resets that indicate blocked outbound network access.
**Solution:** Re-run only the actual deployment step with escalated network permissions. Do not escalate the initial CLI existence check.

## Related Skills

Use adjacent skills when the work moves past deployment execution:

- Framework- or app-specific debugging skills when Vercel deployment succeeds but the application still fails.
- Documentation skills when the next step is updating deployment runbooks, setup docs, or handoff notes.
- Configuration or infrastructure skills when the main issue is environment management, DNS, or broader platform setup.
- Repository-specific build or release skills when the problem is CI/CD orchestration rather than a direct Vercel deployment.

## Additional Resources

### Local support pack

- [Vercel deploy workflow reference](references/vercel-deploy-workflow.md)
- [Vercel CLI command reference](references/vercel-cli-command-reference.md)
- [Vercel troubleshooting playbook](references/vercel-troubleshooting-playbook.md)
- [Vercel security notes](references/vercel-security-notes.md)
- [Preview deploy example](examples/preview-deploy.md)
- [Production deploy example](examples/production-deploy.md)
- [Monorepo deploy example](examples/monorepo-deploy.md)

### Imported support and provenance assets

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported fallback notes preserved

If the official CLI path is unavailable or fails with an auth-related error, the repository-provided fallback deploy script remains available:

```bash
skill_dir="<path-to-skill>"

# Deploy current directory
bash "$skill_dir/scripts/deploy.sh"

# Deploy specific project
bash "$skill_dir/scripts/deploy.sh" /path/to/project

# Deploy existing tarball
bash "$skill_dir/scripts/deploy.sh" /path/to/project.tgz
```

The fallback script handles packaging and deployment, then returns JSON including `previewUrl` and `claimUrl`.

Tell the user:

```text
Your deployment is ready at [previewUrl]. Claim it at [claimUrl] to manage your deployment.
```

For production, only when the user explicitly asks:

```bash
vercel deploy --prod -y
```

Return the deployment URL, and for fallback deployments also return the claim URL. Do **not** curl or fetch the deployed URL unless the user explicitly requests verification.

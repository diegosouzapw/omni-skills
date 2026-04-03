---
name: "netlify-deploy"
description: "Netlify deployment workflow skill. Use this skill when a user needs to link a local web project to Netlify and deploy it with the Netlify CLI, including preview deploys, production deploys, site linking, and basic build or environment configuration checks. Do not use it for non-Netlify hosting providers, DNS migration, or deep framework debugging beyond deploy configuration."
version: "0.0.1"
category: "devops"
tags:
  - "netlify"
  - "deployment"
  - "hosting"
  - "preview-deploy"
  - "production-deploy"
  - "netlify-cli"
  - "netlify-toml"
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
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/netlify-deploy"
upstream_author: "github.com/openai/skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Netlify Deployment Skill

## Overview

Use this skill to deploy a web project to Netlify with the Netlify CLI (`npx netlify`).

This skill is for operational deployment work: checking authentication, confirming whether the local directory is linked to a Netlify site, validating `netlify.toml` and build settings, running a preview deploy first, and promoting to production only when explicitly requested.

Preserve the upstream intent: this is a Netlify-focused CLI workflow, not a generic hosting guide and not a wrapper for unrelated repository provenance tasks.

## When to Use This Skill

Use this skill when the user wants to:

- deploy a site to Netlify from a local project directory
- create a preview or draft deploy for testing
- promote a validated build to production with `--prod`
- link an existing local repository to an existing Netlify site
- initialize a new Netlify site from a local project
- verify Netlify CLI auth, site linkage, build command, or publish directory before deploying
- troubleshoot common Netlify deployment failures such as auth errors, missing publish output, wrong monorepo root, or missing environment variables

Do **not** use this skill when the primary task is:

- deploying to Vercel, Cloudflare, Render, or another non-Netlify provider
- DNS or custom domain migration work
- deep framework-specific debugging unrelated to Netlify deploy configuration
- CI/CD system design beyond basic headless CLI authentication guidance
- broad infrastructure or platform comparisons

## Operating Table

| Situation | Signals to check | Primary action | Fallback or next step | Report back |
| --- | --- | --- | --- | --- |
| First deploy from a local repo | No existing Netlify link, no known site ID | `npx netlify status` then `npx netlify init` | If site already exists, use `npx netlify link` instead | Auth status, whether a site was created, chosen build/publish settings |
| Existing linked site | `npx netlify status` shows linked site | Review config, then run `npx netlify deploy` | Use `--prod` only if explicitly requested | Deploy URL, linked site name, config assumptions |
| Local repo not linked to site | Authenticated but no linked site | `npx netlify link` | If no site exists yet, use `npx netlify init` | Linked site name/URL or why linking failed |
| Safe validation before release | User did not explicitly ask for production | `npx netlify deploy` | Fix config and redeploy if preview fails | Preview URL and validation notes |
| Production release | User explicitly wants live deploy | `npx netlify deploy --prod` | Run preview first if config changed or risk is unclear | Production URL and any warnings |
| Monorepo deploy | Multiple apps/packages, uncertain working directory | Verify base dir, package root, publish dir, `netlify.toml` | Re-run from correct app root or update config | Which package/app was deployed |
| Headless or CI environment | Browser login unavailable | Use `NETLIFY_AUTH_TOKEN` from secret store | Stop if token is missing or would be exposed insecurely | Auth method used, secrets not shown |
| Network-restricted sandbox | CLI errors show timeout/DNS/connectivity failure | Ask to rerun with escalated network permissions if allowed | Do not claim this is always required | Whether failure was network vs config |

## Workflow

### 1. Verify you are in the correct project directory

Before running Netlify commands, confirm you are at the app root that should be deployed.

Check for:

- `package.json`, static site files, or other build inputs
- an existing `netlify.toml`
- monorepo markers such as workspace configs or multiple app folders

If the repository is a monorepo, identify the exact app to deploy before linking or deploying.

### 2. Check Netlify CLI auth and link status

Start with:

```bash
npx netlify status
```

Use the output to determine:

- whether the CLI is authenticated
- whether the current directory is already linked to a Netlify site

If not authenticated in an interactive local environment:

```bash
npx netlify login
```

For non-interactive or CI-like environments, prefer a secret-managed token via `NETLIFY_AUTH_TOKEN`. Do not write real tokens into tracked files or paste them into transcripts unnecessarily.

### 3. Confirm or establish site linkage

If `status` shows the directory is already linked, keep that site unless the user asks to change it.

If the directory is **not** linked:

- use `npx netlify link` to connect to an existing site
- use `npx netlify init` to create a new site when needed

If the project has a Git remote and the user expects an existing site match, that context can help during linking, but do not assume a remote automatically guarantees the correct site.

### 4. Validate deploy configuration before deploying

Prefer `netlify.toml` as the source of truth when present.

Inspect:

- build command
- publish directory
- base directory for monorepos
- functions directory if relevant
- context-specific settings if present

Also inspect project metadata such as `package.json` so you can verify that:

- the build command exists
- dependencies are installed
- the publish directory matches the build output

If `netlify.toml` is missing, define build and publish values explicitly before proceeding rather than relying on vague interactive defaults.

See bundled references:

- [CLI quick reference](references/netlify-cli-quick-reference.md)
- [netlify.toml patterns](references/netlify-toml-patterns.md)
- [Monorepo guide](references/netlify-monorepo-guide.md)

### 5. Run a preview deploy first by default

Unless the user explicitly requests a production deploy, start with a preview deploy:

```bash
npx netlify deploy
```

This is the safer default because it produces a deploy-specific URL for validation without immediately replacing the production site.

Use this step to verify:

- the build completes successfully
- the expected files were published
- environment variables are available for the deploy context
- the app renders correctly at the preview URL

### 6. Promote to production only with explicit intent

Use production deploy only when the user clearly wants the live site updated:

```bash
npx netlify deploy --prod
```

If build settings, environment variables, or monorepo paths were recently changed, it is better to run a preview deploy first even if production is the end goal.

### 7. Report results clearly

After a deploy, report:

- whether the deploy was preview or production
- the deploy URL
- the production site URL if applicable
- whether the local directory was linked or newly initialized
- any important assumptions, such as detected app root, publish directory, or missing environment variables
- the shortest next step, such as validating the preview URL or opening the Netlify dashboard

Useful follow-up command:

```bash
npx netlify open
```

## Examples

### Example 1: First preview deploy for a local project

```bash
npx netlify status
npx netlify init
npx netlify deploy
```

Expected outcome:

- the CLI authenticates or prompts for login
- a Netlify site is created and linked if one did not already exist
- a preview deploy URL is returned

See: [examples/first-preview-deploy.md](examples/first-preview-deploy.md)

### Example 2: Link a local project to an existing site

```bash
npx netlify status
npx netlify link
npx netlify deploy
```

Expected outcome:

- the local directory becomes linked to the intended Netlify site
- the preview deploy runs against that site

See: [examples/link-existing-site.md](examples/link-existing-site.md)

### Example 3: Production deploy after validation

```bash
npx netlify status
npx netlify deploy --prod
```

Expected outcome:

- the linked production site is updated
- the production URL is returned or confirmed

See: [examples/production-deploy.md](examples/production-deploy.md)

### Example 4: Headless auth in CI or non-browser environment

```bash
NETLIFY_AUTH_TOKEN="$NETLIFY_AUTH_TOKEN" npx netlify status
NETLIFY_AUTH_TOKEN="$NETLIFY_AUTH_TOKEN" npx netlify deploy --prod
```

Expected outcome:

- the CLI authenticates without browser login
- deployment succeeds without exposing the token in repository files

See: [examples/headless-ci-auth.md](examples/headless-ci-auth.md)

## Best Practices

### Do

- Start with `npx netlify status` to check both auth and link state.
- Prefer `netlify.toml` as the durable source of build and deploy configuration.
- Use preview deploys first unless the user explicitly requests production.
- Confirm the publish directory actually exists after the build.
- In monorepos, verify the app root, base directory, and workspace before deploying.
- Keep secrets in Netlify-managed environment variables or external secret stores.
- Use `NETLIFY_AUTH_TOKEN` for headless environments instead of interactive login.
- Report deploy URLs and configuration assumptions back to the user.

### Don't

- Do not assume the current working directory is the correct deploy root in a monorepo.
- Do not default to `--prod` just because deployment succeeds locally.
- Do not commit tokens, `.env` secrets, or copied dashboard credentials.
- Do not expose real secret values into logs or conversational output.
- Do not guess framework-specific publish paths without checking project config.
- Do not keep redeploying when the real issue is a build error or missing environment variable.

## Environment Variables and Security Notes

Use Netlify environment variables for build-time or runtime configuration instead of hardcoding secrets in the repository.

Preferred order:

1. Netlify UI or documented Netlify CLI env commands
2. CI or secret manager variables for `NETLIFY_AUTH_TOKEN`
3. Temporary local session variables only when needed

Avoid:

- saving tokens in committed shell scripts
- adding secrets to `netlify.toml`
- pasting real tokens into markdown, code comments, or issue threads

If the deploy works locally but fails on Netlify, verify that required variables exist in Netlify for the correct context.

See: [references/netlify-env-vars.md](references/netlify-env-vars.md)

## Troubleshooting

### Problem: `netlify status` says you are not logged in

**Symptoms:** `npx netlify status` reports no logged-in user, auth failure, or missing credentials.

**Solution:**

- For interactive use, run `npx netlify login` and then re-run `npx netlify status`.
- For CI or headless use, confirm `NETLIFY_AUTH_TOKEN` is present in the environment and sourced from a secret store.
- Do not paste a raw token into tracked files just to unblock the deploy.

### Problem: The local directory is not linked to a Netlify site

**Symptoms:** `status` shows no linked site, or deploy commands prompt for site selection unexpectedly.

**Solution:**

- Use `npx netlify link` to connect to an existing site.
- Use `npx netlify init` if the site does not exist yet.
- Re-run `npx netlify status` to verify the correct site is linked before deploying.

### Problem: Publish directory not found

**Symptoms:** Netlify reports that the publish directory does not exist, or deploy uploads the wrong files.

**Solution:**

- Check `netlify.toml` and verify the publish path.
- Confirm the build command ran successfully and actually created that directory.
- If the repo is a monorepo, verify you are in the correct app directory or that the base directory is configured correctly.

### Problem: Build succeeds locally but fails on Netlify

**Symptoms:** Local build passes, but Netlify build fails or the deployed app is broken.

**Solution:**

- Check whether required environment variables are missing in Netlify.
- Compare the build command and runtime assumptions in `netlify.toml` against the project.
- Review whether the wrong package root or workspace is being built.
- Stop redeploying until the underlying build or config mismatch is fixed.

### Problem: Wrong app or package was deployed from a monorepo

**Symptoms:** A different app deploys than expected, or the build uses the wrong package dependencies or output path.

**Solution:**

- Identify the intended app root first.
- Verify base directory, publish directory, and build command.
- Re-run the workflow from the correct directory or update `netlify.toml` to make the deploy target explicit.

### Problem: Network failures in a sandboxed environment

**Symptoms:** Timeout, DNS, TLS, or connection reset errors occur before Netlify can authenticate or upload.

**Solution:**

- Treat this as an environment constraint first, not a repository bug.
- If policy allows, ask to rerun with escalated network permissions.
- Do not claim escalated access is always required; use it only when the environment is actually blocking outbound requests.

See the bundled recovery guide: [references/netlify-troubleshooting.md](references/netlify-troubleshooting.md)

## Related Skills

- Use a frontend or framework-specific skill when the main problem is Next.js, React, Astro, or other build debugging rather than Netlify deployment itself.
- Use a CI/CD skill when the main task becomes pipeline design, provider-specific workflow authoring, or release automation.
- Use a secrets or environment-management skill when organizational secret rotation or policy controls become the primary concern.
- Use a DNS/domain skill when the task changes from deployment to domain mapping, certificates, or nameserver changes.

See: [agents/deployment-router.md](agents/deployment-router.md)

## Additional Resources

### Local references

- [CLI quick reference](references/netlify-cli-quick-reference.md)
- [Troubleshooting guide](references/netlify-troubleshooting.md)
- [netlify.toml patterns](references/netlify-toml-patterns.md)
- [Environment variable guide](references/netlify-env-vars.md)
- [Monorepo deployment guide](references/netlify-monorepo-guide.md)

### Local examples

- [First preview deploy](examples/first-preview-deploy.md)
- [Link an existing site](examples/link-existing-site.md)
- [Production deploy](examples/production-deploy.md)
- [Headless CI auth](examples/headless-ci-auth.md)

### Official references

- Netlify CLI overview: `https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/`
- Netlify CLI command reference: `https://cli.netlify.com/`
- File-based configuration with `netlify.toml`: `https://docs.netlify.com/configure-builds/file-based-configuration/`
- Build configuration overview: `https://docs.netlify.com/build/configure-builds/overview/`
- Monorepos on Netlify: `https://docs.netlify.com/configure-builds/monorepos/`
- Environment variables on Netlify: `https://docs.netlify.com/build/configure-builds/environment-variables/`
- Deploy overview: `https://docs.netlify.com/deploy/deploy-overview/`

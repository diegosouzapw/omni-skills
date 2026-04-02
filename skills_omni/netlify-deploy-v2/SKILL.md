---
name: "netlify-deploy-v2"
description: "Netlify deployment workflow skill. Use this skill when a user needs to deploy, preview, publish, or link a web project on Netlify with the Netlify CLI, verify site linkage and build configuration, handle environment variables safely, and distinguish preview validation from explicit production release."
version: "0.0.1"
category: "devops"
tags:
  - "netlify-deploy-v2"
  - "netlify"
  - "deployment"
  - "hosting"
  - "preview-deploy"
  - "production-deploy"
  - "netlify-cli"
  - "netlify-toml"
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
upstream_skill: "skills/netlify-deploy-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Netlify Deployment Skill

## Overview

Use this skill to deploy web projects to Netlify with the Netlify CLI, verify authentication and site linkage, inspect `netlify.toml`, choose the right deploy context, and hand off a usable deploy URL with clear evidence.

This curated version preserves the original imported intent while making the workflow more operational and safer for agents. It emphasizes:

- explicit authentication and site-link checks before state-changing actions
- `netlify.toml` as the preferred source-controlled configuration
- preview deploys before production unless the user explicitly requests a live release
- safe handling of environment variables and access tokens
- symptom-driven troubleshooting for auth, linking, build, publish, and runtime issues

If the task is not actually about deploying or linking a site on Netlify, use a more specific build, framework, DNS, or runtime debugging skill instead.

## When to Use This Skill

Use this skill when:

- a user asks to deploy, host, publish, or relink a site or repository on Netlify
- a user wants a preview deploy URL for QA, review, or stakeholder validation
- a user wants an explicit production deployment to an existing Netlify site
- a repository already has `netlify.toml` and the operator needs to verify or use it correctly
- a deployment is failing and the operator needs a structured diagnostic workflow
- the operator should preserve imported provenance and bundled support material while executing the deployment safely

Do not use this skill as the primary workflow when:

- the main problem is local framework build failure unrelated to Netlify
- the task is mostly DNS, custom domains, certificates, or edge/network setup
- the work is primarily Netlify Functions runtime debugging after deployment
- the user needs CI/CD pipeline design more than an interactive CLI deployment

## Operating Table

| Goal | Required checks | Primary command(s) | Expected result | Confirm before proceeding? |
| --- | --- | --- | --- | --- |
| Verify CLI auth and current link state | Netlify CLI available; network/browser access if login needed | `npx netlify status` | Shows logged-in account and current site link state | No |
| First deploy to an existing Netlify site | Authenticated; repo path confirmed; existing site identified | `npx netlify link` or `npx netlify link --git-remote-url <REMOTE_URL>` | Local repo linked to the intended site | Yes, if multiple candidate sites/accounts exist |
| Create a new Netlify site | Authenticated; user intent to create confirmed; target team/account known | `npx netlify init` | New site created and linked | Yes |
| Safe preview deploy | Build/publish config checked; dependencies installed; local build understood | `npx netlify deploy` | Draft/preview deploy URL returned | No |
| Explicit production deploy | Preview validated or direct-live request confirmed; site link verified | `npx netlify deploy --prod` | Production URL updated | Yes, unless request is already explicit |
| Update environment variables safely | Required variable names known; secret values handled outside transcript | `npx netlify env:*` | Variables managed without committing secrets | Yes, if values or scopes are ambiguous |
| Relink wrong site | Current linked site inspected; correct site identified | `npx netlify status`, `npx netlify link` | Repo linked to the correct site | Yes |
| Troubleshoot failed deploy | Capture auth state, link state, config, build output, and deploy output | `npx netlify status`, `npx netlify deploy`, local build command | Root cause narrowed to auth, link, config, build, env, or network | No |

## Workflow

### 1. Preflight the repository

Before changing Netlify state, inspect the local project:

```bash
pwd
ls
[ -f package.json ] && cat package.json | head -n 40
[ -f netlify.toml ] && cat netlify.toml
```

Collect these facts before continuing:

- project root is correct
- package manager is inferable (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`)
- likely build command is known
- likely publish directory is known
- `netlify.toml` exists or does not exist

Use the bundled checklist for a compact preflight: [references/preflight-checklist.md](references/preflight-checklist.md)

### 2. Verify Netlify CLI authentication safely

Check current status first:

```bash
npx netlify status
```

Expected outcomes:

- authenticated: account email/team and site-link information are shown
- not authenticated: CLI reports no active login or auth failure

Preferred authentication order:

1. reuse an existing valid login session
2. use `npx netlify login` if interactive browser login is available
3. use a securely provided `NETLIFY_AUTH_TOKEN` if browser login is not possible

Interactive login:

```bash
npx netlify login
npx netlify status
```

Token-based auth should be handled outside chat transcripts when possible. Do not ask the user to paste personal access tokens into the conversation or commit them to files.

See: [references/authentication-and-tokens.md](references/authentication-and-tokens.md)

### 3. Verify or correct the linked Netlify site

Inspect current site linkage:

```bash
npx netlify status
```

If the repo is already linked, verify that the linked site is the intended one.

If the repo is not linked, prefer linking an existing site before creating a new one.

If the repo has a Git remote, inspect it:

```bash
git remote -v
```

If the intended site already exists on Netlify, link it:

```bash
npx netlify link
```

If you have a confirmed remote URL and want Git-remote-assisted linking:

```bash
npx netlify link --git-remote-url <REMOTE_URL>
```

Create a new site only when the user clearly wants that outcome:

```bash
npx netlify init
```

`netlify init` can create resources in the wrong account/team if run carelessly. Confirm the target account/team and site identity first.

See: [examples/relink-existing-site.md](examples/relink-existing-site.md)

### 4. Verify `netlify.toml` and build settings

If `netlify.toml` exists, treat it as the source-controlled truth unless there is a reason to change it.

Inspect for:

- `[build]` command
- publish directory
- functions configuration if present
- redirects and headers that may affect runtime behavior
- `[context.production]`, `[context.deploy-preview]`, or branch-specific overrides

Example fields to inspect:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

If `netlify.toml` does not exist, the CLI may prompt for build command and publish directory. After a successful deployment, stable settings should be committed to `netlify.toml` so future deploys are reproducible.

See:

- [references/netlify-toml-examples.md](references/netlify-toml-examples.md)
- [references/deploy-contexts.md](references/deploy-contexts.md)

### 5. Install dependencies and verify the local build path

Before blaming Netlify, make sure the project can build as expected locally.

Examples:

```bash
npm install
npm run build
```

Or with another package manager:

```bash
pnpm install
pnpm build
```

```bash
yarn install
yarn build
```

Verify that the expected publish directory exists after the build, such as `dist`, `build`, or another configured output path.

This distinction matters:

- if the local build fails, the problem is usually project/build related
- if the local build succeeds but Netlify deploy fails, the problem is more likely auth, linking, publish path, env vars, or platform configuration

### 6. Choose the correct deploy type

Prefer preview validation first unless the user explicitly requests a production release.

#### Preview deploy

```bash
npx netlify deploy
```

Use for:

- QA validation
- stakeholder review
- testing config or environment changes
- confirming the publish directory and build output

Expected result: a draft/preview deploy URL.

#### Production deploy

```bash
npx netlify deploy --prod
```

Use only when:

- the user explicitly wants the live site updated, or
- a preview deploy has already been validated and promotion is the next intended step

Expected result: the production URL is updated.

See: [examples/preview-vs-production-deploy.md](examples/preview-vs-production-deploy.md)

### 7. Handle environment variables safely

If the build depends on secrets or deployment-time configuration, do not commit them into the repository.

Use Netlify-managed environment variables instead of hardcoding secrets in source files.

Useful CLI patterns:

```bash
npx netlify env:list
```

```bash
npx netlify env:get <NAME>
```

```bash
npx netlify env:set <NAME> <VALUE>
```

Avoid echoing sensitive values into logs, summaries, or transcripts. Summarize only that the variable exists or was updated.

See: [examples/env-vars-workflow.md](examples/env-vars-workflow.md)

### 8. Validate the result and report clearly

After deploy, capture and report:

- deploy type: preview or production
- linked site name
- deploy URL
- production URL if applicable
- whether the build used `netlify.toml`
- any required follow-up, such as env var updates or runtime log inspection

Helpful follow-up commands:

```bash
npx netlify open
```

If the deploy succeeded but the app is broken at runtime, inspect redirects, headers, functions behavior, browser console errors, and runtime logs rather than assuming the deploy itself failed.

## Examples

### Example 1: Safe first-pass preview deploy

```bash
npx netlify status
[ -f netlify.toml ] && cat netlify.toml
npm install
npm run build
npx netlify deploy
```

Expected outcome:

- account authentication verified
- build output checked locally
- preview deploy URL returned for review

### Example 2: Explicit production deployment

```bash
npx netlify status
npx netlify deploy --prod
```

Use this only when the user explicitly asked to update the live site or after preview validation is complete.

Expected outcome:

- production deploy completes
- live site URL is updated

### Example 3: Relink a repository to the correct site

```bash
npx netlify status
git remote -v
npx netlify link
npx netlify status
```

Expected outcome:

- current link state inspected
- local repo linked to the intended Netlify site
- site name/URL visible in status output

### Example 4: Environment-variable-aware deployment

```bash
npx netlify env:list
npm run build
npx netlify deploy
```

Expected outcome:

- required configuration checked without exposing secret values
- deploy completes with the expected configuration in place

### Example 5: Create a new site only after confirmation

```bash
npx netlify status
npx netlify init
```

Expected outcome:

- new site is created in the intended account/team
- local project is linked and ready for deploy

## Best Practices

### Do

- run `npx netlify status` before deploying so auth and link state are explicit
- prefer `npx netlify deploy` before `npx netlify deploy --prod`
- inspect `netlify.toml` before changing build or publish behavior
- treat `netlify.toml` as the reproducible source of truth for stable build settings
- verify the local build and publish directory before diagnosing platform issues
- confirm the target site/account before running `netlify init` or relinking
- use Netlify-managed environment variables for secrets and deployment-time config
- keep deploy summaries short, factual, and evidence-based
- ask before requesting escalated network permissions when sandbox networking blocks deployment

### Do not

- do not ask users to paste access tokens into chat unless there is no safer channel
- do not commit `.env` files or secret values into the repository
- do not assume the currently linked site is the intended production site
- do not jump directly to `--prod` when the request is ambiguous
- do not “fix” build settings ad hoc if `netlify.toml` already defines them
- do not treat a successful upload as proof that redirects, functions, or runtime behavior are correct

## Troubleshooting

### Problem: Not authenticated or CLI auth is unclear

**Symptoms:** `npx netlify status` reports no login, auth errors, or missing account details.

**Solution:** Run `npx netlify login` if browser auth is available, then rerun `npx netlify status`. If interactive auth is unavailable, use a securely supplied `NETLIFY_AUTH_TOKEN` outside the transcript and verify status again. Do not continue to deploy until auth is confirmed.

### Problem: Repository is linked to the wrong Netlify site

**Symptoms:** `npx netlify status` shows an unexpected site name, team, or URL.

**Solution:** Stop before deploying. Confirm the intended target site with the user, inspect `git remote -v`, then relink with `npx netlify link`. Re-run `npx netlify status` and verify the linked site before any preview or production deploy.

### Problem: `netlify init` might create the wrong site or use the wrong account

**Symptoms:** The repo is unlinked and the operator is about to create a new site, but account/team intent is ambiguous.

**Solution:** Ask for confirmation before running `npx netlify init`. Confirm the team/account and intended site identity. If the site already exists, prefer `npx netlify link` instead of creating another one.

### Problem: Build fails before or during deploy

**Symptoms:** The CLI reports build errors, framework errors, missing dependencies, or script failures.

**Solution:** Run the local install/build flow directly with the correct package manager. If the local build fails, fix the project/build problem first. If the local build succeeds but Netlify fails, compare the build command and environment used by Netlify with `netlify.toml` and configured environment variables.

### Problem: Publish directory not found

**Symptoms:** Deploy fails because the configured output directory does not exist.

**Solution:** Check the build command and publish path in `netlify.toml`. Re-run the local build and verify that the expected directory exists. Correct the publish path only after confirming the actual generated output.

### Problem: Deploy succeeds but the app is broken

**Symptoms:** Netlify returns a deploy URL, but pages 404, assets are missing, redirects fail, or functions behave incorrectly.

**Solution:** Separate deployment from runtime behavior. Inspect `netlify.toml` for redirects/headers/functions settings, verify the correct publish directory, check browser console/network failures, and inspect Netlify Functions logs if applicable. A successful deploy does not guarantee correct runtime configuration.

### Problem: Environment variables appear to be missing

**Symptoms:** Build or runtime errors mention undefined variables, missing API keys, or configuration drift between preview and production.

**Solution:** Check which variable names are required by the app, verify Netlify-managed variables with `npx netlify env:list`, and confirm whether context-specific configuration differs between preview and production. Do not expose secret values into logs or summaries.

### Problem: Deploy fails because of sandbox or network restrictions

**Symptoms:** Timeouts, DNS failures, connection resets, or blocked outbound requests occur even though the commands are otherwise correct.

**Solution:** Explain that Netlify deploy requires outbound network access. Ask for permission before rerunning with escalated network access. Once approved, retry the narrowest command necessary.

## Related Skills

Route to a different skill when the main work becomes:

- frontend or framework build debugging that still fails locally before Netlify is involved
- DNS, domain, certificate, or routing configuration after a successful deploy
- serverless or Netlify Functions runtime debugging after deployment
- CI/CD automation for repeatable non-interactive deploys across environments
- secrets/configuration management beyond simple Netlify environment-variable updates

## Additional Resources

### Local support pack

- [Preflight checklist](references/preflight-checklist.md)
- [Authentication and token handling](references/authentication-and-tokens.md)
- [Deploy contexts](references/deploy-contexts.md)
- [Troubleshooting Netlify deploys](references/troubleshooting-netlify-deploys.md)
- [Minimal `netlify.toml` examples](references/netlify-toml-examples.md)
- [Preview vs production deploy example](examples/preview-vs-production-deploy.md)
- [Relink an existing site example](examples/relink-existing-site.md)
- [Environment variables workflow example](examples/env-vars-workflow.md)

### Official references

- Netlify CLI overview and getting started: `https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/`
- Netlify CLI command reference: `https://cli.netlify.com/`
- Netlify file-based configuration: `https://docs.netlify.com/configure-builds/file-based-configuration/`
- Netlify environment variables: `https://docs.netlify.com/build/configure-builds/environment-variables/`
- Netlify deploy contexts: `https://docs.netlify.com/configure-builds/deploy-contexts/`
- Netlify Functions logs: `https://docs.netlify.com/functions/logs/`

### Imported provenance note

This skill remains aligned with the original imported Netlify deployment workflow while improving execution order, config verification, troubleshooting depth, and secret-handling guidance for agents.

---
name: "deploy-to-vercel"
description: "Deploy to Vercel workflow skill. Use this skill when the user needs to deploy an application or website to Vercel, return a deployment URL, create a preview deployment, or deliberately promote to production with explicit confirmation."
version: "0.0.1"
category: "devops"
tags:
  - "deploy-to-vercel"
  - "vercel"
  - "deployment"
  - "preview-deployments"
  - "production-deployments"
  - "vercel-cli"
  - "monorepo"
  - "env-vars"
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
upstream_skill: "skills/deploy-to-vercel"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "10"
upstream_head_repo: "diegosouzapw/omni-skills"
upstream_head_sha: "6694282a8c80060989f27612505ced763d291b76"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Deploy to Vercel

## Overview

Use this skill to deploy a project to Vercel safely and predictably.

Default to a **preview deployment** unless the user explicitly asks for **production**. Prefer workflows that keep project-to-Vercel linkage clear, avoid accidental local state changes during discovery, and return the deployment URL without overstating deployment success.

This skill preserves the upstream Vercel-oriented intent while improving operator guidance for:

- safe project discovery
- explicit preview vs production decisions
- team and scope selection
- project linking and `.vercel/` handling
- local parity troubleshooting with `vercel pull` and `vercel build`
- security-sensitive handling of tokens, environment variables, and local metadata

If the task becomes primarily about CI/CD automation, custom domains, or framework-specific debugging, use the routing notes in `agents/deploy-routing-notes.md`.

## When to Use This Skill

Use this skill when the user asks for deployment work such as:

- "deploy my app to Vercel"
- "create a preview deployment and give me the link"
- "push this live"
- "deploy this sub-app from a monorepo"
- "why is my Vercel deployment failing?"

Also use it when:

- the operator needs a repeatable Vercel CLI workflow rather than generic deployment advice
- the project may already be linked to Vercel and you need to confirm that safely
- the user needs a deployment URL but has not asked for full application-level testing
- the deployment may depend on Vercel-managed environment variables or project settings

Do **not** use this skill as the primary workflow when:

- the user needs a headless CI/CD pipeline or tokenized automation first
- the main task is domain/DNS setup rather than deployment
- the work is mainly framework debugging unrelated to Vercel deployment state

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need the main operator flow | `references/vercel-cli-deploy-workflow.md` | Covers safe discovery, linking, deploy mode choice, deploy, inspect, and handoff |
| Need env or token safety guidance | `references/vercel-env-and-secrets-safety.md` | Prevents secret leakage and wrong-environment redeploys |
| Build failed remotely | `references/vercel-build-triage.md` | Uses `vercel pull`, `vercel build`, `vercel inspect`, and `vercel logs` for parity debugging |
| Monorepo or wrong app deployed | `references/vercel-monorepo-root-directory-guide.md` | Helps validate root directory and project linkage |
| Need a concrete preview deploy example | `examples/preview-deploy-cli.md` | Shows a minimal authenticated preview deployment flow |
| Need help choosing git push vs direct CLI deploy | `examples/git-push-vs-cli-deploy-decision.md` | Prevents unnecessary pushes and branch-related mistakes |
| Need routing or handoff guidance | `agents/deploy-routing-notes.md` | Helps switch to CI/CD, domains, or framework-specific skills |

## Workflow

### 1. Confirm deployment intent before touching state

Decide which of these the user actually wants:

- **Preview deployment**: default and safest option
- **Production deployment**: requires explicit confirmation because it may affect live traffic
- **Stable/custom URL**: separate follow-up task; deployment alone does not guarantee domain routing

If the user says only "deploy this," choose **preview** by default.

### 2. Perform safe discovery first

Use read-only checks before any linking command:

```bash
# Check whether the repo has a git remote
git remote get-url origin 2>/dev/null

# Check for existing local Vercel linkage metadata
cat .vercel/project.json 2>/dev/null || cat .vercel/repo.json 2>/dev/null

# Check whether the Vercel CLI is authenticated
vercel whoami 2>/dev/null

# If authenticated, list teams for possible scope selection
vercel teams list --format json 2>/dev/null
```

Safe discovery rules:

- Treat `.vercel/project.json` and `.vercel/repo.json` as the primary local signal for linkage.
- Do **not** use `vercel link` as a discovery command.
- Do **not** use interactive or mutating commands just to learn state.
- Treat `.vercel/` as local project metadata that may reveal org/project association.

### 3. Decide whether the project is already linked

A project is considered locally linked if either file exists:

- `.vercel/project.json` — typically created by `vercel link`
- `.vercel/repo.json` — typically created by `vercel link --repo`

If one of these exists, prefer using the existing linkage rather than relinking.

### 4. Choose deployment path

#### Path A: Linked project + git remote + user approves push

Use this when the repository is already linked and the user explicitly approves a push-based deployment.

Before pushing, verify:

- current branch name
- whether that branch may trigger preview or production behavior
- whether there are uncommitted changes
- whether the user understands a push changes git history and may trigger CI or live deployment rules

Example confirmation:

```text
This repo is linked to Vercel and has a git remote. I can commit and push to trigger a deployment. That may create a preview deploy, or a production deploy if this branch is connected to production. Do you want me to proceed?
```

If approved:

```bash
git status --short
git branch --show-current
git add .
git commit -m "deploy: <short description>"
git push
```

Then return the resulting Vercel URL if it is available from approved tooling or provider status. If CLI-based inspection is available, prefer official Vercel inspection commands over ad hoc probing.

#### Path B: Linked project + no git remote

Deploy directly with the CLI.

Preview:

```bash
vercel deploy [path] -y --no-wait
```

Production, only with explicit user approval:

```bash
vercel deploy [path] --prod -y --no-wait
```

After the command returns a deployment URL, use official inspection if status is needed:

```bash
vercel inspect <deployment-url>
```

Use `vercel logs <deployment-url>` if runtime diagnosis is needed after a successful build.

#### Path C: Not linked + CLI authenticated

Link intentionally, then deploy.

If multiple teams are available, present team slugs as a bulleted list and ask the user which scope to use. If there is only one personal/team scope, use it directly.

If a git remote exists, prefer repo-based linking:

```bash
vercel link --repo --scope <team-slug>
```

If there is no git remote, use standard linking:

```bash
vercel link --scope <team-slug>
```

Then choose the least disruptive deployment method:

- use **direct CLI preview deploy** when the user mainly wants a URL quickly
- use **git push** only when the user wants the repo-integrated path and explicitly approves the push

Direct CLI preview deploy example:

```bash
vercel deploy [path] -y --no-wait --scope <team-slug>
```

#### Path D: Not linked + CLI not authenticated

If interactive auth is possible:

```bash
npm install -g vercel
vercel login
```

Then continue with linking and deployment.

If interactive auth is **not** possible in the environment, use the environment-specific fallback only if it is already part of the installed skill runtime.

### 5. Prefer preview by default, production only by explicit request

Production deploys require a stronger confirmation gate because they may affect live traffic.

Use wording like:

```text
A production deployment may affect live users. I can proceed, but I want to confirm you want production rather than a preview deployment.
```

### 6. Return the deployment URL accurately

Always return the deployment URL that the workflow produced.

Important:

- Do not claim the app is healthy just because deployment started.
- If you used `--no-wait`, say that deployment has been started and provide the inspection path if needed.
- Only perform application-level verification if the user explicitly asks for testing or validation.
- Prefer `vercel inspect` and `vercel logs` over custom HTTP probing during normal handoff.

### 7. Use local parity debugging before repeated redeploys

If a remote build fails or env mismatch is suspected, sync settings locally before retrying:

```bash
vercel pull --yes
vercel build
```

Then inspect logs and only redeploy after the likely issue is understood.

See `references/vercel-build-triage.md` for the full flow.

## Examples

### Example 1: Authenticated preview deploy without pushing git history

See: [examples/preview-deploy-cli.md](examples/preview-deploy-cli.md)

Typical command:

```bash
vercel deploy . -y --no-wait
```

Expected outcome: the command returns a deployment URL that you can give to the user immediately, then inspect if requested.

### Example 2: Decide between git push and direct CLI deploy

See: [examples/git-push-vs-cli-deploy-decision.md](examples/git-push-vs-cli-deploy-decision.md)

Rule of thumb:

- user wants a quick preview link with minimal repo impact -> use direct CLI deploy
- user wants the repository-integrated workflow and approves git history changes -> use git push

### Example 3: Failed remote build, debug locally first

See: [examples/failed-build-local-parity-debug.md](examples/failed-build-local-parity-debug.md)

Typical parity sequence:

```bash
vercel pull --yes
vercel build
vercel inspect <deployment-url>
```

Expected outcome: identify env/config/build issues before another deploy.

## Best Practices

### Do

- Default to **preview deployments** unless the user explicitly asks for production.
- Use read-only checks first to discover git, auth, and local linkage state.
- Treat `.vercel/` as meaningful local metadata and review it before committing or sharing.
- Use `--scope <team-slug>` consistently after the team is chosen.
- Prefer direct CLI preview deploys when the user wants a URL quickly and does not need a git push.
- Use `vercel pull` and `vercel build` for reproducible troubleshooting.
- Keep preview and production environment expectations separate.
- Return the deployment URL even if you are not performing app-level verification.

### Do not

- Do **not** use `vercel link` as a discovery shortcut.
- Do **not** push commits without explicit user approval.
- Do **not** perform production deploys without explicit confirmation.
- Do **not** paste access tokens into chat replies, shell history examples, PR descriptions, or commit messages.
- Do **not** assume a successful deploy command means the app is healthy at runtime.
- Do **not** solve env problems by casually copying `.env*` files around or bundling secrets into artifacts.
- Do **not** assume monorepo root-directory settings are correct without checking.

### Security notes

- Prefer existing authenticated CLI sessions for interactive work.
- For automation or CI, use secret storage and environment variables rather than hard-coded tokens.
- Avoid exposing token values in command transcripts.
- If `.vercel/` is changed during linking, review the resulting local files before commit or handoff.

See also: [references/vercel-env-and-secrets-safety.md](references/vercel-env-and-secrets-safety.md)

## Troubleshooting

### Problem: `vercel` is not authenticated or auth fails

**Symptoms:** `vercel whoami` fails, `vercel login` is blocked, or deploy commands report missing credentials.

**Solution:**
- If interactive login is available, run `vercel login` and retry.
- If the environment is non-interactive, use the approved fallback flow for that environment if available.
- If the real need is repeatable automation, hand off to a token/CI workflow instead of forcing interactive deployment.

### Problem: Deployment started, but build failed remotely

**Symptoms:** `vercel deploy --no-wait` returns a URL, but `vercel inspect` shows build failure.

**Solution:**
- Run `vercel pull --yes` to sync project settings and env values relevant to the target environment.
- Run `vercel build` locally to reproduce the failure.
- Use `vercel inspect <deployment-url>` for build state and `vercel logs <deployment-url>` when runtime output matters.
- Fix the underlying build/config issue before redeploying.

Reference: [references/vercel-build-triage.md](references/vercel-build-triage.md)

### Problem: Deployment succeeded, but the app fails at runtime

**Symptoms:** Build completes, but the app errors, shows missing configuration, or behaves differently from local development.

**Solution:**
- Check whether required environment variables exist in the correct Vercel environment: preview, production, or development.
- Confirm the app is using the expected project settings.
- Use `vercel logs <deployment-url>` for runtime diagnostics.
- Do not redeploy repeatedly until env scope mismatch is ruled out.

Reference: [references/vercel-env-and-secrets-safety.md](references/vercel-env-and-secrets-safety.md)

### Problem: Wrong app or wrong subdirectory was deployed from a monorepo

**Symptoms:** The deployment succeeds, but it built the wrong package, wrong root directory, or wrong linked project.

**Solution:**
- Confirm whether the target app lives at repo root or in a subdirectory.
- Review `.vercel/repo.json` or `.vercel/project.json` and the selected project scope.
- Validate Vercel root-directory expectations before relinking or redeploying.
- If needed, relink deliberately rather than guessing.

Reference: [references/vercel-monorepo-root-directory-guide.md](references/vercel-monorepo-root-directory-guide.md)

### Problem: Network restrictions block deployment in a sandbox

**Symptoms:** Timeouts, DNS failures, connection resets, or blocked network egress during deploy.

**Solution:**
- In restricted sandboxes, request the minimum additional network access required for the deploy step.
- Do not escalate simple local discovery checks like `command -v vercel`.
- Re-run only the blocked deploy step with the approved network permission model for that environment.

## Related Skills

- `@vercel-cli-with-tokens` - use when the user needs non-interactive or CI/CD deployment automation
- `@vercel-composition-patterns` - use when deployment work becomes Vercel architecture/composition work
- `@vercel-react-best-practices` - use when the main issue is framework/app behavior rather than deployment execution
- `@vercel-react-native-skills` - use when the project requires React Native or adjacent app-specific guidance

## Additional Resources

### Local support pack

- [Vercel CLI deploy workflow](references/vercel-cli-deploy-workflow.md)
- [Env and secrets safety](references/vercel-env-and-secrets-safety.md)
- [Build triage and local parity debugging](references/vercel-build-triage.md)
- [Monorepo and root-directory guide](references/vercel-monorepo-root-directory-guide.md)
- [Preview deploy CLI example](examples/preview-deploy-cli.md)
- [Git push vs CLI deploy decision example](examples/git-push-vs-cli-deploy-decision.md)
- [Failed build local parity debug example](examples/failed-build-local-parity-debug.md)
- [Agent routing notes](agents/deploy-routing-notes.md)

### Official documentation referenced by this skill

- Vercel CLI: https://vercel.com/docs/cli
- `vercel deploy`: https://vercel.com/docs/cli/deploy
- `vercel link`: https://vercel.com/docs/cli/link
- `vercel pull`: https://vercel.com/docs/cli/pull
- `vercel build`: https://vercel.com/docs/cli/build
- `vercel inspect`: https://vercel.com/docs/cli/inspect
- `vercel logs`: https://vercel.com/docs/cli/logs
- `vercel env`: https://vercel.com/docs/cli/env
- Monorepos: https://vercel.com/docs/monorepos
- Environment Variables: https://vercel.com/docs/environment-variables
- Domains: https://vercel.com/docs/domains

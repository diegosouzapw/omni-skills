---
name: deploy-to-vercel
description: "Deploy to Vercel workflow skill. Use this skill when the user needs Deploy applications and websites to Vercel. Use when the user requests deployment actions like \"deploy my app\", \"deploy and give me the link\", \"push this live\", or \"create a preview deployment\" and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["deploy-to-vercel", "deploy", "applications", "and", "websites", "vercel", "use", "the"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "vercel"
date_added: "2026-03-31"
date_updated: "2026-03-31"
---

# Deploy to Vercel

## Overview

This public intake copy packages `skills/deploy-to-vercel` from `https://github.com/vercel-labs/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Deploy to Vercel Deploy any project to Vercel. Always deploy as preview (not production) unless the user explicitly asks for production. The goal is to get the user into the best long-term setup: their project linked to Vercel with git-push deploys. Every method below tries to move the user closer to that state.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Agent-Specific Notes, Output.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Deploy applications and websites to Vercel. Use when the user requests deployment actions like "deploy my app", "deploy and give me the link", "push this live", or "create a preview deployment".
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. .vercel/project.json — created by vercel link (single project linking). Contains projectId and orgId.
2. .vercel/repo.json — created by vercel link --repo (repo-based linking). Contains orgId, remoteName, and a projects array mapping directories to Vercel project IDs.
3. Ask the user before pushing. Never push without explicit approval:
4. Commit and push:
5. Retrieve the preview URL. If the CLI is authenticated:
6. Ask the user which team to deploy to. Present the team slugs from Step 1 as a bulleted list. If there's only one team (or just a personal account), skip this step.
7. Once a team is selected, proceed directly to linking. Tell the user what will happen but do not ask for separate confirmation:

### Imported Workflow Notes

#### Imported: Step 1: Gather Project State

Run all four checks before deciding which method to use:

```bash
# 1. Check for a git remote
git remote get-url origin 2>/dev/null

# 2. Check if locally linked to a Vercel project (either file means linked)
cat .vercel/project.json 2>/dev/null || cat .vercel/repo.json 2>/dev/null

# 3. Check if the Vercel CLI is installed and authenticated
vercel whoami 2>/dev/null

# 4. List available teams (if authenticated)
vercel teams list --format json 2>/dev/null
```

### Team selection

If the user belongs to multiple teams, present all available team slugs as a bulleted list and ask which one to deploy to. Once the user picks a team, proceed immediately to the next step — do not ask for additional confirmation.

Pass the team slug via `--scope` on all subsequent CLI commands (`vercel deploy`, `vercel link`, `vercel inspect`, etc.):

```bash
vercel deploy [path] -y --no-wait --scope <team-slug>
```

If the project is already linked (`.vercel/project.json` or `.vercel/repo.json` exists), the `orgId` in those files determines the team — no need to ask again. If there is only one team (or just a personal account), skip the prompt and use it directly.

**About the `.vercel/` directory:** A linked project has either:
- `.vercel/project.json` — created by `vercel link` (single project linking). Contains `projectId` and `orgId`.
- `.vercel/repo.json` — created by `vercel link --repo` (repo-based linking). Contains `orgId`, `remoteName`, and a `projects` array mapping directories to Vercel project IDs.

Either file means the project is linked. Check for both.

**Do NOT** use `vercel project inspect`, `vercel ls`, or `vercel link` to detect state in an unlinked directory — without a `.vercel/` config, they will interactively prompt (or with `--yes`, silently link as a side-effect). Only `vercel whoami` is safe to run anywhere.

#### Imported: Step 2: Choose a Deploy Method

### Linked (`.vercel/` exists) + has git remote → Git Push

This is the ideal state. The project is linked and has git integration.

1. **Ask the user before pushing.** Never push without explicit approval:
   ```
   This project is connected to Vercel via git. I can commit and push to
   trigger a deployment. Want me to proceed?
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "deploy: <description of changes>"
   git push
   ```
   Vercel automatically builds from the push. Non-production branches get preview deployments; the production branch (usually `main`) gets a production deployment.

3. **Retrieve the preview URL.** If the CLI is authenticated:
   ```bash
   sleep 5
   vercel ls --format json
   ```
   The JSON output has a `deployments` array. Find the latest entry — its `url` field is the preview URL.

   If the CLI is not authenticated, tell the user to check the Vercel dashboard or the commit status checks on their git provider for the preview URL.

---

### Linked (`.vercel/` exists) + no git remote → `vercel deploy`

The project is linked but there's no git repo. Deploy directly with the CLI.

```bash
vercel deploy [path] -y --no-wait
```

Use `--no-wait` so the CLI returns immediately with the deployment URL instead of blocking until the build finishes (builds can take a while). Then check on the deployment status with:

```bash
vercel inspect <deployment-url>
```

For production deploys (only if user explicitly asks):
```bash
vercel deploy [path] --prod -y --no-wait
```

---

### Not linked + CLI is authenticated → Link first, then deploy

The CLI is working but the project isn't linked yet. This is the opportunity to get the user into the best state.

1. **Ask the user which team to deploy to.** Present the team slugs from Step 1 as a bulleted list. If there's only one team (or just a personal account), skip this step.

2. **Once a team is selected, proceed directly to linking.** Tell the user what will happen but do not ask for separate confirmation:
   ```
   Linking this project to <team name> on Vercel. This will create a Vercel
   project to deploy to and enable automatic deployments on future git pushes.
   ```

3. **If a git remote exists**, use repo-based linking with the selected team scope:
   ```bash
   vercel link --repo --scope <team-slug>
   ```
   This reads the git remote URL and matches it to existing Vercel projects that deploy from that repo. It creates `.vercel/repo.json`. This is much more reliable than `vercel link` (without `--repo`), which tries to match by directory name and often fails when the local folder and Vercel project are named differently.

   **If there is no git remote**, fall back to standard linking:
   ```bash
   vercel link --scope <team-slug>
   ```
   This prompts the user to select or create a project. It creates `.vercel/project.json`.

4. **Then deploy using the best available method:**
   - If a git remote exists → commit and push (see git push method above)
   - If no git remote → `vercel deploy [path] -y --no-wait --scope <team-slug>`, then `vercel inspect <url>` to check status

---

### Not linked + CLI not authenticated → Install, auth, link, deploy

The Vercel CLI isn't set up at all.

1. **Install the CLI (if not already installed):**
   ```bash
   npm install -g vercel
   ```

2. **Authenticate:**
   ```bash
   vercel login
   ```
   The user completes auth in their browser. If running in a non-interactive environment where login is not possible, skip to the **no-auth fallback** below.

3. **Ask which team to deploy to** — present team slugs from `vercel teams list --format json` as a bulleted list. If only one team / personal account, skip. Once selected, proceed immediately.

4. **Link the project** with the selected team scope (use `--repo` if a git remote exists, plain `vercel link` otherwise):
   ```bash
   vercel link --repo --scope <team-slug>   # if git remote exists
   vercel link --scope <team-slug>          # if no git remote
   ```

5. **Deploy** using the best available method (git push if remote exists, otherwise `vercel deploy -y --no-wait --scope <team-slug>`, then `vercel inspect <url>` to check status).

---

### No-Auth Fallback — claude.ai sandbox

**When to use:** Last resort when the CLI can't be installed or authenticated in the claude.ai sandbox. This requires no authentication — it returns a **Preview URL** (live site) and a **Claim URL** (transfer to your Vercel account).

```bash
bash /mnt/skills/user/deploy-to-vercel/resources/deploy.sh [path]
```

**Arguments:**
- `path` - Directory to deploy, or a `.tgz` file (defaults to current directory)

**Examples:**
```bash
# Deploy current directory
bash /mnt/skills/user/deploy-to-vercel/resources/deploy.sh

# Deploy specific project
bash /mnt/skills/user/deploy-to-vercel/resources/deploy.sh /path/to/project

# Deploy existing tarball
bash /mnt/skills/user/deploy-to-vercel/resources/deploy.sh /path/to/project.tgz
```

The script auto-detects the framework from `package.json`, packages the project (excluding `node_modules`, `.git`, `.env`), uploads it, and waits for the build to complete.

**Tell the user:** "Your deployment is ready at [previewUrl]. Claim it at [claimUrl] to manage your deployment."

---

### No-Auth Fallback — Codex sandbox

**When to use:** In the Codex sandbox where the CLI may not be authenticated. Codex runs in a sandboxed environment by default — try the CLI first, and fall back to the deploy script if auth fails.

1. **Check whether the Vercel CLI is installed** (no escalation needed for this check):
   ```bash
   command -v vercel
   ```

2. **If `vercel` is installed**, try deploying with the CLI:
   ```bash
   vercel deploy [path] -y --no-wait
   ```

3. **If `vercel` is not installed, or the CLI fails with "No existing credentials found"**, use the fallback script:
   ```bash
   skill_dir="<path-to-skill>"

   # Deploy current directory
   bash "$skill_dir/resources/deploy-codex.sh"

   # Deploy specific project
   bash "$skill_dir/resources/deploy-codex.sh" /path/to/project

   # Deploy existing tarball
   bash "$skill_dir/resources/deploy-codex.sh" /path/to/project.tgz
   ```

The script handles framework detection, packaging, and deployment. It waits for the build to complete and returns JSON with `previewUrl` and `claimUrl`.

**Tell the user:** "Your deployment is ready at [previewUrl]. Claim it at [claimUrl] to manage your deployment."

**Escalated network access:** Only escalate the actual deploy command if sandboxing blocks the network call (`sandbox_permissions=require_escalated`). Do **not** escalate the `command -v vercel` check.

---

#### Imported: Agent-Specific Notes

### Claude Code / terminal-based agents

You have full shell access. Do NOT use the `/mnt/skills/` path. Follow the decision flow above using the CLI directly.

For the no-auth fallback, run the deploy script from the skill's installed location:
```bash
bash ~/.claude/skills/deploy-to-vercel/resources/deploy.sh [path]
```
The path may vary depending on where the user installed the skill.

### Sandboxed environments (claude.ai)

You likely cannot run `vercel login` or `git push`. Go directly to the **no-auth fallback — claude.ai sandbox**.

### Codex

Codex runs in a sandbox. Check if the CLI is available first, then fall back to the deploy script. Go to the **no-auth fallback — Codex sandbox**.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @deploy-to-vercel to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/deploy-to-vercel/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/deploy-to-vercel/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @deploy-to-vercel using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `skills/deploy-to-vercel`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Network Egress Error (claude.ai)

If deployment fails due to network restrictions on claude.ai, tell the user:

```
Deployment failed due to network restrictions. To fix this:

1. Go to https://claude.ai/settings/capabilities
2. Add *.vercel.com to the allowed domains
3. Try deploying again
```

### Escalated Network Access (Codex / sandboxed environments)

If deployment fails due to network issues (timeouts, DNS errors, connection resets) in a sandboxed environment, rerun with escalated permissions (`sandbox_permissions=require_escalated`). Do not escalate the initial CLI availability check — only escalate the actual deploy command.

Example guidance to the user:
```
The deploy needs escalated network access to deploy to Vercel. I can rerun
the command with escalated permissions — want me to proceed?
```

### CLI Auth Failure

If `vercel login` or `vercel deploy` fails with authentication errors, fall back to the no-auth deploy script (claude.ai or Codex variant, depending on the environment).

## Related Skills

- `@vercel-cli-with-tokens` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@vercel-composition-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@vercel-react-best-practices` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@vercel-react-native-skills` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Output

Always show the user the deployment URL.

- **Git push:** Use `vercel ls --format json` to find the preview URL. If the CLI isn't authenticated, tell the user to check the Vercel dashboard or commit status checks.
- **CLI deploy:** Show the URL returned by `vercel deploy --no-wait`. Use `vercel inspect <url>` to check build status and report it to the user.
- **No-auth fallback:** Show both the preview URL and the claim URL:
  ```
  Deployment successful!

  Preview URL: https://my-app-abc123.vercel.app
  Claim URL:   https://vercel.com/claim-deployment?code=...

  View your site at the Preview URL.
  To transfer this deployment to your Vercel account, visit the Claim URL.
  ```

**Do not** curl or fetch the deployed URL to verify it works. Just return the link.

---

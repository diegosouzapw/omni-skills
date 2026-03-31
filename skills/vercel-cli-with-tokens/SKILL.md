---
name: vercel-cli-with-tokens
description: "Vercel CLI with Tokens workflow skill. Use this skill when the user needs Deploy and manage projects on Vercel using token-based authentication. Use when working with Vercel CLI using access tokens rather than interactive login \u2014 e.g. \"deploy to vercel\", \"set up vercel\", \"add environment variables to vercel\" and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["vercel-cli-with-tokens", "deploy", "and", "manage", "projects", "vercel", "using", "token-based"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "vercel"
date_added: "2026-03-31"
date_updated: "2026-03-31"
---

# Vercel CLI with Tokens

## Overview

This public intake copy packages `skills/vercel-cli-with-tokens` from `https://github.com/vercel-labs/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Vercel CLI with Tokens Deploy and manage projects on Vercel using the CLI with token-based authentication, without relying on vercel login.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Deploying a Project, Managing Environment Variables, Inspecting Deployments, Managing Domains, Working Agreement.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Deploy and manage projects on Vercel using token-based authentication. Use when working with Vercel CLI using access tokens rather than interactive login — e.g. "deploy to vercel", "set up vercel", "add environment....
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

1. Before running any Vercel CLI commands, identify where the token is coming from.
2. Work through these scenarios in order: ### A) VERCELTOKEN is already set in the environment `bash printenv VERCELTOKEN If this returns a value, you're ready.
3. ### B) Token is in a .env file under VERCELTOKEN bash grep '^VERCELTOKEN=' .env 2>/dev/null If found, export it: bash export VERCELTOKEN=$(grep '^VERCELTOKEN=' .env | cut -d= -f2-) ### C) Token is in a .env file under a different name Look for any variable that looks like a Vercel token (Vercel tokens typically start with vca): bash grep -i 'vercel' .env 2>/dev/null Inspect the output to identify which variable holds the token, then export it as VERCELTOKEN: bash export VERCELTOKEN=$(grep '^<VARIABLENAME>=' .env | cut -d= -f2-) ### D) No token found — ask the user If none of the above yield a token, ask the user to provide one.
4. They can create a Vercel access token at vercel.com/account/tokens.
5. --- Important: Once VERCELTOKEN is exported as an environment variable, the Vercel CLI reads it natively — do not pass it as a --token flag.
6. Putting secrets in command-line arguments exposes them in shell history and process listings.
7. bash # Bad — token visible in shell history and process listings vercel deploy --token "vcaabc123" # Good — CLI reads VERCELTOKEN from the environment export VERCELTOKEN="vcaabc123" vercel deploy Similarly, check for the project ID and team scope.

### Imported Workflow Notes

#### Imported: Step 1: Locate the Vercel Token

Before running any Vercel CLI commands, identify where the token is coming from. Work through these scenarios in order:

### A) `VERCEL_TOKEN` is already set in the environment

```bash
printenv VERCEL_TOKEN
```

If this returns a value, you're ready. Skip to Step 2.

### B) Token is in a `.env` file under `VERCEL_TOKEN`

```bash
grep '^VERCEL_TOKEN=' .env 2>/dev/null
```

If found, export it:

```bash
export VERCEL_TOKEN=$(grep '^VERCEL_TOKEN=' .env | cut -d= -f2-)
```

### C) Token is in a `.env` file under a different name

Look for any variable that looks like a Vercel token (Vercel tokens typically start with `vca_`):

```bash
grep -i 'vercel' .env 2>/dev/null
```

Inspect the output to identify which variable holds the token, then export it as `VERCEL_TOKEN`:

```bash
export VERCEL_TOKEN=$(grep '^<VARIABLE_NAME>=' .env | cut -d= -f2-)
```

### D) No token found — ask the user

If none of the above yield a token, ask the user to provide one. They can create a Vercel access token at vercel.com/account/tokens.

---

**Important:** Once `VERCEL_TOKEN` is exported as an environment variable, the Vercel CLI reads it natively — **do not pass it as a `--token` flag**. Putting secrets in command-line arguments exposes them in shell history and process listings.

```bash
# Bad — token visible in shell history and process listings
vercel deploy --token "vca_abc123"

# Good — CLI reads VERCEL_TOKEN from the environment
export VERCEL_TOKEN="vca_abc123"
vercel deploy
```

#### Imported: Step 2: Locate the Project and Team

Similarly, check for the project ID and team scope. These let the CLI target the right project without needing `vercel link`.

```bash
# Check environment
printenv VERCEL_PROJECT_ID
printenv VERCEL_ORG_ID

# Or check .env
grep -i 'vercel' .env 2>/dev/null
```

**If you have a project URL** (e.g. `https://vercel.com/my-team/my-project`), extract the team slug:

```bash
# e.g. "my-team" from "https://vercel.com/my-team/my-project"
echo "$PROJECT_URL" | sed 's|https://vercel.com/||' | cut -d/ -f1
```

**If you have both `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` in your environment**, export them — the CLI will use these automatically and skip any `.vercel/` directory:

```bash
export VERCEL_ORG_ID="<org-id>"
export VERCEL_PROJECT_ID="<project-id>"
```

Note: `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` must be set together — setting only one causes an error.

#### Imported: CLI Setup

Ensure the Vercel CLI is installed:

```bash
npm install -g vercel
vercel --version
```

#### Imported: Deploying a Project

Always deploy as **preview** unless the user explicitly requests production. Choose a method based on what you have available.

### Quick Deploy (have project ID — no linking needed)

When `VERCEL_TOKEN` and `VERCEL_PROJECT_ID` are set in the environment, deploy directly:

```bash
vercel deploy -y --no-wait
```

With a team scope (either via `VERCEL_ORG_ID` or `--scope`):

```bash
vercel deploy --scope <team-slug> -y --no-wait
```

Production (only when explicitly requested):

```bash
vercel deploy --prod --scope <team-slug> -y --no-wait
```

Check status:

```bash
vercel inspect <deployment-url>
```

### Full Deploy Flow (no project ID — need to link)

Use this when you have a token and team but no pre-existing project ID.

#### Check project state first

```bash
# Does the project have a git remote?
git remote get-url origin 2>/dev/null

# Is it already linked to a Vercel project?
cat .vercel/project.json 2>/dev/null || cat .vercel/repo.json 2>/dev/null
```

#### Link the project

**With git remote (preferred):**

```bash
vercel link --repo --scope <team-slug> -y
```

Reads the git remote and connects to the matching Vercel project. Creates `.vercel/repo.json`. More reliable than plain `vercel link`, which matches by directory name.

**Without git remote:**

```bash
vercel link --scope <team-slug> -y
```

Creates `.vercel/project.json`.

**Link to a specific project by name:**

```bash
vercel link --project <project-name> --scope <team-slug> -y
```

If the project is already linked, check `orgId` in `.vercel/project.json` or `.vercel/repo.json` to verify it matches the intended team.

#### Deploy after linking

**A) Git Push Deploy — has git remote (preferred)**

Git pushes trigger automatic Vercel deployments.

1. **Ask the user before pushing.** Never push without explicit approval.
2. Commit and push:
   ```bash
   git add .
   git commit -m "deploy: <description of changes>"
   git push
   ```
3. Vercel builds automatically. Non-production branches get preview deployments.
4. Retrieve the deployment URL:
   ```bash
   sleep 5
   vercel ls --format json --scope <team-slug>
   ```
   Find the latest entry in the `deployments` array.

**B) CLI Deploy — no git remote**

```bash
vercel deploy --scope <team-slug> -y --no-wait
```

Check status:

```bash
vercel inspect <deployment-url>
```

### Deploying from a Remote Repository (code not cloned locally)

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-name>
   ```
2. Link to Vercel:
   ```bash
   vercel link --repo --scope <team-slug> -y
   ```
3. Deploy via git push (if you have push access) or CLI deploy.

### About `.vercel/` Directory

A linked project has either:
- `.vercel/project.json` — from `vercel link`. Contains `projectId` and `orgId`.
- `.vercel/repo.json` — from `vercel link --repo`. Contains `orgId`, `remoteName`, and a `projects` map.

Not needed when `VERCEL_ORG_ID` + `VERCEL_PROJECT_ID` are both set in the environment.

**Do NOT** run `vercel ls`, `vercel project inspect`, or `vercel link` in an unlinked directory to detect state — they will interactively prompt or silently link as a side-effect. Only `vercel whoami` is safe to run anywhere.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @vercel-cli-with-tokens to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/vercel-cli-with-tokens/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/vercel-cli-with-tokens/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @vercel-cli-with-tokens using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `skills/vercel-cli-with-tokens`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Token not found

Check the environment and any `.env` files present:

```bash
printenv | grep -i vercel
grep -i vercel .env 2>/dev/null
```

### Authentication error

If the CLI fails with `Authentication required`:
- The token may be expired or invalid.
- Verify: `vercel whoami` (uses `VERCEL_TOKEN` from environment).
- Ask the user for a fresh token.

### Wrong team

Verify the scope is correct:

```bash
vercel whoami --scope <team-slug>
```

### Build failure

Check the build logs:

```bash
vercel logs <deployment-url>
```

Common causes:
- Missing dependencies — ensure `package.json` is complete and committed.
- Missing environment variables — add with `vercel env add`.
- Framework misconfiguration — check `vercel.json`. Vercel auto-detects frameworks (Next.js, Remix, Vite, etc.) from `package.json`; override with `vercel.json` if detection is wrong.

### CLI not installed

```bash
npm install -g vercel
```

## Related Skills

- `@deploy-to-vercel` - Use when the work is better handled by that native specialization after this imported skill establishes context.
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

#### Imported: Managing Environment Variables

```bash
# Set for all environments
echo "value" | vercel env add VAR_NAME --scope <team-slug>

# Set for a specific environment (production, preview, development)
echo "value" | vercel env add VAR_NAME production --scope <team-slug>

# List environment variables
vercel env ls --scope <team-slug>

# Pull env vars to local .env file
vercel env pull --scope <team-slug>

# Remove a variable
vercel env rm VAR_NAME --scope <team-slug> -y
```

#### Imported: Inspecting Deployments

```bash
# List recent deployments
vercel ls --format json --scope <team-slug>

# Inspect a specific deployment
vercel inspect <deployment-url>

# View build logs
vercel logs <deployment-url>
```

#### Imported: Managing Domains

```bash
# List domains
vercel domains ls --scope <team-slug>

# Add a domain to the project
vercel domains add <domain> --scope <team-slug>
```

#### Imported: Working Agreement

- **Never pass `VERCEL_TOKEN` as a `--token` flag.** Export it as an environment variable and let the CLI read it natively.
- **Check the environment for tokens before asking the user.** Look in the current env and `.env` files first.
- **Default to preview deployments.** Only deploy to production when explicitly asked.
- **Ask before pushing to git.** Never push commits without the user's approval.
- **Do not read or modify `.vercel/` files directly.** The CLI manages this directory.
- **Do not curl/fetch deployed URLs to verify.** Just return the link to the user.
- **Use `--format json`** when structured output will help with follow-up steps.
- **Use `-y`** on commands that prompt for confirmation to avoid interactive blocking.

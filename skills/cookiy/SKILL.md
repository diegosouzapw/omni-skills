---
name: cookiy
description: "Cookiy workflow skill. Use this skill when the user needs > and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["cookiy", "ai-agents", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "cookiy-ai"
date_added: "2026-03-30"
date_updated: "2026-03-30"
---

# Cookiy

## Overview

This public intake copy packages `skills/cookiy` from `https://github.com/cookiy-ai/cookiy-skill.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Cookiy Cookiy gives your AI agent user-research capabilities. It designs interview guides, conducts AI-moderated interviews with real or simulated participants, and generates insight reports — all through natural language. ---

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: >.
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

1. Try calling cookiy_introduce.
2. If it succeeds, treat MCP as healthy and continue to Part 2.
3. If it fails because the tool is missing, the server is unreachable,
4. After installation, call cookiy_introduce again. Only continue when
5. If the user is trying to install, connect, repair, or verify Cookiy,
6. On /cookiy entry, if MCP health is unknown, run the preflight first.
7. During setup, present only one next action at a time. For headless

### Imported Workflow Notes

#### Imported: Part 1 — Setup

### Mandatory MCP preflight

Before doing anything else, ALWAYS verify that Cookiy MCP is available
for the current client.

Run this preflight on every Cookiy skill use:

1. Try calling `cookiy_introduce`.
2. If it succeeds, treat MCP as healthy and continue to Part 2.
3. If it fails because the tool is missing, the server is unreachable,
   authentication is broken, or the user asked for a different target
   environment, run the installer for the current client to repair or
   replace the MCP config.
4. After installation, call `cookiy_introduce` again. Only continue when
   it succeeds.

Do NOT ask the user whether to install MCP when the skill is being used.
The skill should self-heal by default.

### Setup-first conversation policy

- If the user is trying to install, connect, repair, or verify Cookiy,
  complete setup first. Do NOT ask research-goal, participant, or
  report-format questions before MCP is healthy.
- On `/cookiy` entry, if MCP health is unknown, run the preflight first.
  Only move into business discovery after setup succeeds or when the
  user explicitly asks what Cookiy can do.
- During setup, present only one next action at a time. For headless
  OAuth clients, surface the installer's single action block instead of
  inventing multiple options unless the installer actually fails.
- When `cookiy_introduce` is used only as a health check, NEVER dump the
  raw JSON payload to the user. Summarize the outcome in one sentence,
  such as: `Cookiy MCP is installed and verified successfully.`

Healthy MCP should be left alone. Reinstall only when one of these is
true:

- `cookiy_*` tools are unavailable
- MCP connection/authentication appears broken
- The MCP entry looks stale or was created under a legacy server name
- The user explicitly asks for a non-default environment such as
  `dev`, `dev2`, `preview`, `staging`, or `test`

### When repair/install is expected

- User mentions Cookiy, user research, voice interviews, or participant recruitment
- Any `cookiy_*` tool call fails with a connection or "tool not found" error
- User explicitly asks to set up or connect Cookiy
- User asks what Cookiy can do

### Install the MCP server

Identify which AI client you are running in (Codex, Claude Code, Cursor,
VS Code, Windsurf, Cline, OpenClaw, Manus, etc.) and install ONLY for
that client. Do not install for all clients at once.

Unless the user explicitly requests a different environment, install the
production MCP server. Production is the default and points to
`https://s-api.cookiy.ai`.

If the user explicitly asks for another environment, include that
environment alias in the installer command. Re-running the installer is
the approved repair/override path: it replaces the current Cookiy MCP
entry for that client with the requested target.

Pick the matching command:

| You are running in | Install command |
|---|---|
| Codex | `npx cookiy-mcp --client codex -y` |
| Claude Code | `npx cookiy-mcp --client claudeCode -y` |
| Cursor | `npx cookiy-mcp --client cursor -y` |
| Cline | `npx cookiy-mcp --client cline -y` |
| GitHub Copilot / VS Code | `npx cookiy-mcp --client vscode -y` |
| Windsurf | `npx cookiy-mcp --client windsurf -y` |
| OpenClaw | `npx cookiy-mcp --client openclaw -y` |
| Manus / headless sandbox | `npx cookiy-mcp --client manus -y` |
| Other / unknown | `npx cookiy-mcp -y` (auto-detects production) |

Examples for non-default environments:

- Codex dev2: `npx cookiy-mcp dev2 --client codex -y`
- Claude Code preview: `npx cookiy-mcp preview --client claudeCode -y`
- Cursor dev: `npx cookiy-mcp dev --client cursor -y`

If your agent is not in the table above but supports MCP over HTTP,
you can manually configure the MCP server URL: `https://s-api.cookiy.ai/mcp`
with OAuth authentication. See the MCP server's OAuth discovery at
`https://s-api.cookiy.ai/.well-known/oauth-authorization-server`.

For headless sandbox environments such as Manus, use
`npx cookiy-mcp --client manus -y`. The installer writes a resumable
OAuth helper bundle under `~/.mcp/<server>/`.

The installer will open the authorization page when possible and print
one explicit next step. If approval does not resume setup
automatically, paste the final callback URL or just the authorization
code back into the terminal.

### Verify the connection

After installation, call `cookiy_introduce` to confirm the MCP server
is connected and authenticated.

If the user's intent was only setup/connect/install/repair, stop after a
single success confirmation sentence. Do NOT automatically switch into a
research intake questionnaire after verification succeeds.

If authentication fails:
- Re-run the install command for the same target environment. This is
  the preferred repair path and may overwrite a stale or broken config.
- The OAuth token may have expired. The installer handles re-authentication.

### Orient the user only when asked

Present Cookiy's six capability modules (qualitative and quantitative are **parallel** — same agent, complementary methods; quantitative is not a prerequisite or downstream step for qualitative studies):

1. **Study Creation** — Describe a research goal and get an AI-generated discussion guide.
2. **AI Interview** — Simulate interviews with AI personas for quick insights.
3. **Discussion Guide** — Review and edit the interview script before going live.
4. **Recruitment** — Recruit real participants for AI-moderated interviews.
5. **Report & Insights** — Generate analysis reports and shareable links.
6. **Quantitative survey** — When Cookiy has this capability enabled for your workspace, create structured questionnaires, list them, share respondent links and question layout (via Cookiy tools), and pull response data for analysis. Parallel to qualitative studies; Cookiy does not expose third-party admin consoles or non-Cookiy product names.

Present these in plain language. Do not expose raw tool names to the user.

---

#### Imported: Part 2 — Workflow Orchestration

Cookiy is a workflow-aware MCP server, not a raw REST passthrough.
Every operation must go through the official `cookiy_*` MCP tools.
Follow the tool contract and workflow state machines in the reference files.

### Intent Router

| User wants to... | Workflow | Reference file |
|---|---|---|
| Create a new study or research project | Study Creation | study-creation.md |
| Run simulated or AI-to-AI interviews | AI Interview | ai-interview.md |
| View or edit the discussion guide | Guide Editing | guide-editing.md |
| Recruit real participants | Recruitment | recruitment.md |
| Generate, check, or share a report | Report & Insights | report-insights.md |
| Author or analyze quantitative questionnaires (when server integration is configured) | Quantitative survey | — (see `cookiy_help` topic `quantitative`) |
| Natural-language study progress (“how is recruitment?”, “is the report ready?”) | Prefer: `cookiy_activity_get` | tool-contract.md |
| Add cash credit (USD cents) before paid actions | Direct: `cookiy_billing_cash_checkout` | tool-contract.md |
| Check account balance | Direct: `cookiy_balance_get` | — |
| List existing studies | Direct: `cookiy_study_list` | — |
| Learn what Cookiy can do | Direct: `cookiy_introduce` | — |
| Get workflow help on a topic | Direct: `cookiy_help` (`overview`, `study`, `ai_interview`, `guide`, `recruitment`, `report`, `billing`, `quantitative`; common aliases accepted) | — |

When the user's intent spans multiple workflows (e.g., "create a study
and run interviews"), execute them sequentially in the order listed above.

### Universal Rules

See tool-contract.md for the complete specification.

**Response handling:**
- ALWAYS read `structuredContent` first. Fall back to `content[0].text` only when `structuredContent` is absent.
- ALWAYS check `next_recommended_tools` in each response. Prefer the server's recommendation over your own judgment.
- ALWAYS obey `status_message` — it contains server-side behavioral directives, not just informational text.
- When `presentation_hint` is present, format output accordingly.
- For user-facing progress questions, prefer **`cookiy_activity_get`** first; use atomic tools only for drill-down.
- For recruitment truth, prefer evidence in this order: `cookiy_interview_list` > `cookiy_recruit_status` > the latest `cookiy_recruit_create` response > `cookiy_study_get.state`. The current public contract does not expose a separate `sync` flag on `cookiy_recruit_status`; the server already performs the billing-aware reconciliation it needs before returning status.
- NEVER describe recruitment as started/stopped from preview-only output.

**Identifiers:**
- NEVER truncate, reformat, or summarize `study_id`, `job_id`, `interview_id`, `base_revision`, or `confirmation_token`.

**Payment:**
- On HTTP 402: prefer `structuredContent.data.payment_summary` and `checkout_url`; if those fields are absent, fall back to `error.details`.
- To add cash credit outside a specific 402 flow, use `cookiy_billing_cash_checkout`, then confirm with `cookiy_balance_get`.
- `cookiy_balance_get` returns cash credit and per-product paid counters; OAuth signup bonus is folded into cash credit, not exposed as a separate `experience_bonus` field.
- Cash credit may apply to study creation, simulated interviews, report access, and recruitment when balance remains.
- When both exist, product-specific paid credits are consumed before cash credit.

**URLs:**
- NEVER construct URLs manually. ONLY use URLs from tool responses.
- NEVER guess undocumented REST paths.

**Agent boundary:**
- After recruitment payment, check `cookiy_recruit_status` first and `cookiy_interview_list` second before deciding whether to retry `cookiy_recruit_create`.
- Do not promise background monitoring unless a real automation layer exists outside the current MCP call.

**Constraints:**
- `interview_duration` max 15 minutes. `persona.text` max 4000 chars. `interviewee_personas` max 20. `attachments` max 10.

### Canonical reference

The server's developer portal spec endpoint provides the authoritative
tool reference. If a tool behaves differently from this skill's
description, the server's runtime behavior takes precedence.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @cookiy to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/cookiy/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/cookiy/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @cookiy using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `skills/cookiy`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@pm-research` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@qualitative-research-planner` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@synthesize-research-report` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@context-engineering` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/ai-interview.md` |
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

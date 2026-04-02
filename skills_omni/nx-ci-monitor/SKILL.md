---
name: "nx-ci-monitor"
description: "CI Monitor Command workflow skill. Use this skill when the user needs to monitor Nx Cloud CI pipeline execution status, assess self-healing outcomes, and apply or decline bounded remediation safely. Use when the user says \\"watch CI\\", \\"monitor pipeline\\", \\"check CI status\\", \\"fix CI failures\\", or \\"self-heal CI\\". Requires an Nx Cloud-connected workspace. Do not use for local-only task execution, pre-Nx CI provider failures, or broad debugging outside Nx Cloud CI flow."
version: "0.0.1"
category: "devops"
tags:
  - "nx-ci-monitor"
  - "nx-cloud"
  - "ci"
  - "pipeline"
  - "self-healing"
  - "remote-cache"
  - "cipe"
  - "triage"
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
upstream_skill: "skills/nx-ci-monitor"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# CI Monitor Command

## Overview

Use this skill to monitor an Nx Cloud CI Pipeline Execution (CIPE), interpret self-healing results, and decide whether to:

- wait for Nx Cloud to auto-apply a fix
- apply a fix through the workflow control surface
- apply a fix locally, enhance it, then push for a new CIPE
- request an environment rerun
- stop and hand off when the failure is outside Nx Cloud-managed CI behavior

This skill is specifically for **Nx Cloud-connected CI workflows**. It is not a generic CI debugging guide and it is not the right skill for routine local task execution.

The workflow is intentionally bounded: inspect first, classify second, mutate last, and always record what happened. Prefer evidence collection before code changes, keep retries limited, and stop when the problem is clearly pre-Nx, infrastructure-driven, or outside the supported self-healing path.

This skill preserves the upstream workflow intent while making it operational for agents: monitor, decide, act, verify, and hand off safely.

## When to Use This Skill

Use this skill when:

- the workspace is connected to **Nx Cloud** and the user wants to watch an active or newly triggered CIPE
- the user asks to **monitor CI**, **check pipeline status**, **watch self-healing**, or **fix CI failures** within Nx Cloud
- a self-healing fix is available and you need to decide between **APPLY**, **APPLY_LOCALLY**, **REJECT**, or **RERUN_ENVIRONMENT_STATE**
- you need to verify whether a proposed fix is trustworthy enough to apply directly or should be enhanced locally first
- you need a structured handoff summary with branch, SHA, CIPE link, actions taken, and remaining risks

Do **not** use this skill when:

- the task is only to run Nx commands locally; use `nx-run-tasks` instead
- CI failed **before Nx started**: checkout, dependency install, secret injection, CI auth, runner boot, or workflow YAML issues
- the problem is broad platform debugging, release orchestration, incident response, or security review
- the workspace is not connected to Nx Cloud
- the user wants unbounded autonomous mutation without review checkpoints

## Operating Table

| Situation | Expected signals | Immediate action | Evidence to capture | Stop or handoff criteria |
| --- | --- | --- | --- | --- |
| First run | Unknown branch/SHA, unknown workspace state | Run preflight checks before polling | Branch, HEAD SHA, git status, Nx Cloud config presence | Stop if workspace is not Nx Cloud-connected |
| `ci_success` | CIPE succeeds | Exit successfully | Final CIPE URL, SHA, elapsed time | None |
| `fix_auto_applying` | Self-healing is applying automatically | Do not apply again; wait for new CIPE | Previous CIPE URL, current status, timestamp | Stop if no new CIPE appears within timeout |
| `fix_available` | Fix exists and may be verified or partially verified | Classify failed vs verified tasks, then choose APPLY or local enhancement path | `failedTaskIds`, `verifiedTaskIds`, verification status, fix reasoning | Stop if fix intent is unclear or unsafe |
| `fix_failed` | Self-healing could not produce a working fix | Attempt bounded local remediation only if failure is understandable | Task summaries, failing targets, repo state before edits | Hand off if issue is architectural or cannot be reproduced safely |
| `environment_issue` | Failure classified as environment/state-related | Request environment rerun; avoid local code mutation | Failure classification, CIPE URL, rerun request result | Escalate after repeated reruns with no progress |
| `no_fix` | Self-healing unavailable or non-executable | Attempt local fix only if supported by evidence | Failed tasks, logs, local reproduction results | Stop if no safe local path exists |
| `no_new_cipe` | Expected new CIPE never appears | Check for pre-Nx CI failure; optionally perform bounded workflow repair | Expected SHA, previous CIPE URL, CI provider failure stage | Hand off to CI-provider debugging if Nx never starts |
| `polling_timeout` / `cipe_timed_out` | Monitoring exceeds time budget | Exit with timeout summary | Last known CIPE state, elapsed time, actions attempted | Hand off if human follow-up is needed |
| `cipe_canceled` | CIPE canceled externally | Exit and report cancellation | CIPE URL, actor if visible, branch/SHA | Hand off if cancellation was unexpected |
| repeated `error` or no progress | Same state repeats, no new CIPE, same failure mode | Trigger circuit breaker | Iteration count, repeated state, last useful evidence | Stop after 3 no-progress iterations |

### Key Operating Knobs

| Setting | Default | Use |
| --- | --- | --- |
| `--max-cycles` | `10` | Maximum CIPE cycles before timeout |
| `--timeout` | `120` | Overall monitor duration in minutes |
| `--verbosity` | `medium` | Reporting level: minimal, medium, verbose |
| `--branch` | auto-detect | Branch to monitor |
| `--subagent-timeout` | `60` | CI watcher polling timeout in minutes |
| `--fresh` | `false` | Ignore prior session state |
| `--auto-fix-workflow` | `false` | Allow bounded remediation for pre-CIPE workflow failures |
| `--new-cipe-timeout` | `10` | Minutes to wait for a new CIPE after an action |
| `--local-verify-attempts` | `3` | Maximum local enhance/verify loops before pushing to CI |

## Workflow

### Phase 0: Respect user overrides

If the user provides explicit instructions, follow them over defaults where safe. Examples:

- "never auto-apply"
- "always ask before git push"
- "reject fixes for e2e tasks"
- "if confidence < 70, reject"
- "wait 45 min for new CIPE"

Do not follow unsafe instructions that remove all review boundaries without the user clearly accepting the risk.

### Phase 1: Preflight checks

Before polling or applying any fix, collect minimal state.

1. Detect the current branch:
   ```bash
   git branch --show-current
   ```
2. Record the current commit:
   ```bash
   git rev-parse --short HEAD
   ```
3. Check working tree status:
   ```bash
   git status --short
   ```
4. Verify Nx Cloud connection by checking `nx.json` for `nxCloudId` or `nxCloudAccessToken`.
5. Detect the package manager from the lockfile:
   - `pnpm-lock.yaml` -> `pnpm`
   - `yarn.lock` -> `yarn`
   - `package-lock.json` -> `npm`
6. Determine whether the failure is actually in the Nx execution phase.
   - If CI failed before checkout/install/Nx startup, stop and route to CI-provider debugging.
7. If the working tree already contains unrelated local changes, stop unless the user explicitly authorizes continuing.

If Nx Cloud is not configured, exit with:

```text
[ci-monitor] Nx Cloud not connected. This skill only applies to Nx Cloud-backed CI monitoring.
```

For a compact checklist and command reference, use:

- `references/nx-ci-monitor-runbook.md`
- `references/nx-ci-monitor-command-matrix.md`

### Phase 2: Initialize monitor state

Track:

```text
cycle_count = 0
start_time = now()
no_progress_count = 0
local_verify_count = 0
last_state = null
last_cipe_url = null
expected_commit_sha = null
```

Use `--fresh` when you need to ignore prior session memory.

### Phase 3: Poll current CIPE or wait for a new one

Spawn the `ci-watcher` subagent.

Fresh polling prompt shape:

```text
Monitor CI for branch '<branch>'.
Subagent timeout: <subagent-timeout> minutes.
New-CIPE timeout: <new-cipe-timeout> minutes.
Verbosity: <verbosity>.
```

Wait-mode prompt shape after an action that should trigger a new CIPE:

```text
Monitor CI for branch '<branch>'.
Subagent timeout: <subagent-timeout> minutes.
New-CIPE timeout: <new-cipe-timeout> minutes.
Verbosity: <verbosity>.

WAIT MODE: A new CIPE should spawn. Ignore old CIPE until a new one appears.
Expected commit SHA: <expected_commit_sha>
Previous CIPE URL: <last_cipe_url>
```

Wait mode matters because it prevents stale CIPE details from polluting the main context after you already acted on them.

### Phase 4: Classify the returned status

Use the returned status as the state machine entry point.

#### `ci_success`

- Report success.
- Capture final CIPE URL, branch, SHA, elapsed time, and any actions already taken.
- Exit.

#### `fix_auto_applying`

- Do **not** call apply again.
- Record `last_cipe_url`.
- Re-enter wait mode.

#### `fix_available`

Compare `failedTaskIds` and `verifiedTaskIds`.

1. `verified tasks` = failed tasks that are also verified
2. `unverified tasks` = failed tasks not present in verified set
3. `e2e tasks` = unverified tasks whose target contains `e2e`
4. `verifiable tasks` = unverified tasks that are not e2e

Decision path:

| Condition | Default action |
| --- | --- |
| All failed tasks verified | Apply via MCP |
| Only unverified e2e tasks remain | Apply via MCP with note that confidence is lower |
| Non-e2e unverified tasks remain | Run local verification flow |

#### `fix_failed`

- Review `taskOutputSummary` and any fix reasoning.
- Attempt local remediation only if the failure is concrete and bounded.
- If you cannot reproduce or understand the failure safely, stop and report.

#### `environment_issue`

- Request rerun with:
  `update_self_healing_fix({ shortLink, action: "RERUN_ENVIRONMENT_STATE" })`
- Do not mutate code unless the evidence clearly shows a repository issue rather than an environment issue.
- If the same classification repeats without progress, escalate.

#### `no_fix`

- Attempt a local fix only when there is enough evidence to form a narrow hypothesis.
- Otherwise exit with a clear handoff note.

#### `no_new_cipe`

- Treat this as a likely **pre-Nx failure**.
- Check CI provider logs for checkout, install, auth, workflow syntax, or runner provisioning problems.
- Only use `--auto-fix-workflow` for narrow, reversible repo-side issues such as lockfile refresh when justified.

#### `polling_timeout`, `cipe_timed_out`, `cipe_canceled`, `error`

- Honor timeout and circuit-breaker behavior.
- After 3 no-progress iterations, stop.

### Phase 5: Decide apply vs apply locally vs reject

#### Apply via MCP

Use when:

- all failed tasks are verified, or
- only e2e tasks remain unverified and the user accepts CI-only validation, or
- the fix is clear and the workflow explicitly supports applying it directly

Action:

```text
update_self_healing_fix({ shortLink, action: "APPLY" })
```

Then record `last_cipe_url` and wait for a new CIPE.

#### Apply locally

Use when:

- a fix exists but needs enhancement before CI should validate it
- non-e2e failed tasks require local verification
- the patch is directionally correct but incomplete

Action:

```bash
nx apply-locally <shortLink>
```

Then enhance, verify, commit, and push only after bounded checks.

#### Reject

Use when:

- the proposed fix is clearly wrong
- the patch intent is unsafe or unrelated to the failing tasks
- accepting the patch would hide the real failure mode

Action:

```text
update_self_healing_fix({ shortLink, action: "REJECT" })
```

Then fix from scratch only if the user still wants continued remediation.

### Phase 6: Local verification flow

When non-e2e unverified tasks remain, prefer verifying only the implicated targets.

1. Detect package manager command prefix:
   - `pnpm nx`
   - `yarn nx`
   - `npx nx`
2. Prefer rerunning failed targets only:
   ```bash
   <pm> nx run <taskId>
   ```
3. If base/head information is available, prefer `affected` verification over broad workspace reruns.
4. Keep verification bounded.
5. If all verifiable tasks pass, apply via MCP.
6. If any verifiable task fails:
   - use `nx apply-locally <shortLink>`
   - enhance the fix
   - rerun the failing tasks
7. Increment `local_verify_count` after each enhancement cycle.
8. If `local_verify_count >= --local-verify-attempts`:
   - get the branch into a commit-able state
   - commit and push with a note that local verification was inconclusive
   - let CI be the final judge

Use narrow commit messages. Preferred format:

```bash
git commit -m "fix(<projects>): <brief description>

Failed tasks: <taskId1>, <taskId2>
Local verification: passed|enhanced|failed-pushing-to-ci"
```

### Phase 7: New-CIPE wait and progress tracking

After actions that should produce a new CIPE, track one of:

| Action | Tracking value |
| --- | --- |
| auto-apply in CI | `last_cipe_url = current cipeUrl` |
| MCP apply | `last_cipe_url = current cipeUrl` |
| local change pushed | `expected_commit_sha = $(git rev-parse HEAD)` |
| reject + manual fix pushed | `expected_commit_sha = $(git rev-parse HEAD)` |
| environment rerun | `last_cipe_url = current cipeUrl` |

Progress rules:

- meaningful state change -> reset `no_progress_count = 0`
- unchanged state -> `no_progress_count += 1`
- new CI attempt detected -> reset `local_verify_count = 0`
- if `no_progress_count >= 3` -> stop with circuit breaker

### Phase 8: Exit and handoff

Exit when any of the following occurs:

- CI passes
- max cycles reached
- overall timeout reached
- 3 consecutive no-progress iterations
- no fix exists and no safe local path is available
- expected CIPE never appears and pre-Nx failure is more likely
- user cancels

Always provide a final summary. Use `examples/nx-ci-monitor-status-summary.md` or `examples/nx-ci-monitor-handoff-template.md` as the reporting format.

## Examples

### Example 1: Start monitoring an Nx Cloud CI run

```text
Use @nx-ci-monitor to watch the Nx Cloud CI run for this branch, report each state transition, and only apply a fix if it is fully verified or e2e-only unverified.
```

### Example 2: Safe preflight before any mutation

```bash
git branch --show-current
git rev-parse --short HEAD
git status --short
[ -f nx.json ] && grep -E 'nxCloudId|nxCloudAccessToken' nx.json
```

Expected outcome: you know the branch, current SHA, whether the tree is clean, and whether the workspace appears Nx Cloud-connected.

### Example 3: Verify only implicated tasks locally

```bash
pnpm nx run app:test
pnpm nx run ui:typecheck
```

Expected outcome: only the failed or relevant targets are rerun locally before deciding whether to apply a fix or enhance it.

### Example 4: Apply a self-healing patch locally for enhancement

```bash
nx apply-locally <shortLink>
git status --short
```

Expected outcome: the patch is applied to the working tree, after which you can inspect, enhance, and verify it before pushing.

### Example 5: Final status summary

```text
Branch: feature/add-auth
Final SHA: abc1234
Final CIPE: https://.../runs/123
Actions: APPLY_LOCALLY -> enhanced -> pushed -> new CIPE succeeded
Failed tasks: web:test
Verification: local rerun passed for web:test
Remaining risks: e2e not reproduced locally
```

## Best Practices

### Do

- verify Nx Cloud connectivity before starting the monitor loop
- inspect state before mutating code or requesting reruns
- distinguish **pre-Nx CI failures** from **Nx task failures**
- prefer evidence capture first: branch, SHA, failing task IDs, CIPE URL, task summaries, verification results
- prefer rerunning only failed or affected targets instead of broad workspace commands
- keep retries bounded with `--local-verify-attempts`, `--new-cipe-timeout`, and the circuit breaker
- record whether the action taken was `APPLY`, `APPLY_LOCALLY`, `REJECT`, or `RERUN_ENVIRONMENT_STATE`
- treat dependency or lockfile changes as higher-risk and call them out explicitly in commit messages and summaries
- stop on merge conflicts, rebase conflicts, or unclear patch intent
- produce a final summary that a reviewer can audit quickly

### Don't

- do not use this skill for CI-provider issues that happen before Nx starts
- do not auto-push if the user explicitly forbids pushing
- do not apply a patch when the proposed change does not clearly map to the failure
- do not loop forever on repeated environment or timeout states
- do not hide local verification failures; record them honestly
- do not convert an infrastructure/cache/auth problem into a speculative code fix
- do not run broad destructive cleanup commands as part of routine remediation

### Safety rails

- Never assume a fix is safe just because it exists.
- Never push hidden changes; summarize what changed before or immediately after pushing.
- If `nx apply-locally` fails, stop and inspect rather than improvising a large rewrite.
- If the repository already contains unrelated edits, ask before continuing.
- If the fix touches dependency manifests or lockfiles, note that it may mask environment drift rather than solve the root cause.

## Troubleshooting

### Problem: Workspace is not connected to Nx Cloud

**Symptoms:** `nx.json` is missing, or it does not contain `nxCloudId` or `nxCloudAccessToken`.

**Solution:** Stop. This skill is for Nx Cloud-backed CI monitoring. Ask the user to connect the workspace or switch to a different skill.

### Problem: No new CIPE appears after a push or apply action

**Symptoms:** You are waiting for a new CIPE, but `no_new_cipe` is returned after the timeout.

**Solution:** Treat this as a likely pre-Nx CI failure. Inspect CI-provider logs for checkout, install, workflow, auth, or runner issues. Only use `--auto-fix-workflow` for narrow repo-side fixes such as a lockfile refresh when there is evidence that install state is the blocker.

### Problem: Local verification disagrees with CI

**Symptoms:** The failed task passes locally but continues failing in CI, or CI fails with native/install/runtime differences not seen locally.

**Solution:** Check package manager consistency, lockfile state, install logs, native module differences, and environment-specific assumptions. Avoid over-trusting local success when CI has materially different runtime conditions.

### Problem: Repeated `environment_issue` or timeout states

**Symptoms:** Reruns keep producing environment-related failures, or the CIPE repeatedly times out without meaningful state change.

**Solution:** Use the circuit breaker. After bounded retries, escalate to platform or CI owners instead of continuing code mutations.

### Problem: Fix exists, but intent is unclear

**Symptoms:** The suggested patch changes unrelated files, reasoning is weak, or the patch does not obviously address the failed tasks.

**Solution:** Do not apply it blindly. Prefer `REJECT` or `APPLY_LOCALLY` only if you can inspect and narrow the change safely.

### Problem: Remote cache or distributed execution is causing confusion

**Symptoms:** Operators assume cache behavior is itself the code defect, or failures appear to move between agents without a clear code change.

**Solution:** Separate cache/distribution behavior from actual task failure. Capture the CIPE URL, task IDs, and evidence. If the issue looks infrastructure-related, hand off instead of forcing speculative code changes.

## Related Skills

- `@nx-run-tasks` - Use when the user needs local Nx execution or broader task debugging rather than Nx Cloud CI monitoring.
- `@ci-debugging` - Use when failures occur before Nx starts or the CI provider workflow itself is broken.
- `@git-conflict-resolution` - Use when auto-fix or local patch application is blocked by merge or rebase conflicts.
- `@dependency-updates` - Use when dependency or lockfile repair becomes the main task rather than CI monitoring.
- `@incident-triage` - Use when the issue is operationally broad, repeated, or impacts multiple pipelines beyond a single branch workflow.

## Additional Resources

- [Nx CI monitor runbook](references/nx-ci-monitor-runbook.md)
- [Nx CI monitor troubleshooting guide](references/nx-ci-monitor-troubleshooting.md)
- [Nx CI monitor command matrix](references/nx-ci-monitor-command-matrix.md)
- [Handoff template](examples/nx-ci-monitor-handoff-template.md)
- [Status summary template](examples/nx-ci-monitor-status-summary.md)

### Upstream workflow notes preserved

#### Session context behavior

Within a persistent agent session, prior monitor state may remain in context.

- Re-run normally to continue monitoring with prior context.
- Use `--fresh` to ignore prior session state.
- Restart the client session entirely if a clean slate is required.

#### Status reporting defaults

| Level | What to report |
| --- | --- |
| `minimal` | final result only |
| `medium` | state changes plus periodic progress |
| `verbose` | medium plus detailed subagent, git, and control-surface output |

#### Error handling defaults

| Error | Action |
| --- | --- |
| Git rebase or merge conflict | Report and stop |
| `nx apply-locally` failure | Report and inspect before continuing |
| MCP/control-surface error | Retry once, then report |
| Subagent spawn failure | Retry once, then stop |
| Lockfile auto-fix failure | Report and hand off to CI/install troubleshooting |

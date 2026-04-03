---
name: "nx-run-tasks"
description: "nx-run-tasks workflow skill. Use this skill when a user needs to run existing build, test, lint, serve, typecheck, e2e, or similar targets in an Nx workspace with `nx run`, `nx run-many`, or `nx affected`. Use it for requests like \\"run tests\\", \\"build this app\\", \\"lint affected projects\\", \\"serve the frontend\\", or \\"run Nx tasks in CI\\". Do not use it for code generation, creating new targets, or editing workspace configuration."
version: "0.0.1"
category: "development"
tags:
  - "nx-run-tasks"
  - "nx"
  - "monorepo"
  - "build"
  - "test"
  - "lint"
  - "serve"
  - "affected"
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
upstream_skill: "skills/nx-run-tasks"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# nx-run-tasks

## Overview

Use this skill to run existing tasks in an Nx workspace safely and predictably.

This skill is for **task execution**, not workspace authoring. It helps an operator:

- discover which targets a project actually exposes
- run a task for one project with `nx run`
- run the same task across multiple projects with `nx run-many`
- limit execution to changed scope with `nx affected`
- choose useful execution flags for CI, debugging, caching, and parallelism
- recover from common Nx problems such as missing targets, wrong affected scope, cache confusion, or stale daemon state

Start with target discovery before assuming a target name from `package.json` or `project.json`. In modern Nx workspaces, plugins may infer runnable targets that are easier to see through `nx show project <project> --json`.

Prefer workspace-local Nx invocation when needed, for example `npx nx`, `pnpm nx`, or your repository's package-manager-specific wrapper, instead of assuming a global installation.

## When to Use This Skill

Use this skill when the user wants to **run existing Nx targets** such as:

- build an app or library
- run unit tests, e2e tests, lint, typecheck, or similar tasks
- serve a local app that already has a `serve` target
- run the same task across many projects
- run tasks only for affected projects in CI or local review flows
- forward framework-specific flags through Nx to an underlying tool

Do **not** use this skill when the user needs to:

- generate code, apps, libs, or configuration scaffolding
- add or redesign Nx targets or executors
- edit `nx.json`, `project.json`, plugin setup, caching backends, or workspace architecture
- debug application logic unrelated to task execution itself

If the request shifts from “run what exists” to “create or reconfigure workspace behavior,” hand off to an Nx generation or Nx workspace configuration skill.

## Operating Table

| Situation | Recommended command shape | Why this is the right start |
| --- | --- | --- |
| Discover what a project can run | `nx show project <project> --json` | Shows resolved targets, including inferred ones |
| Run one task for one project | `nx run <project>:<target>` | Most direct and least ambiguous path |
| Run one task for several projects | `nx run-many -t <target> --projects=<p1>,<p2>` | Efficient when the task is identical across projects |
| Run several tasks across many projects | `nx run-many -t build,test,lint` | Good for broad validation sweeps |
| Run only changed scope | `nx affected -t <target> --base=<base> --head=<head>` | Preferred CI optimization when diff inputs are known |
| Run affected scope without reliable Git diff metadata | `nx affected -t <target> --files=<file1>,<file2>` | Useful fallback in constrained CI or scripted flows |
| Serve locally | `nx run <project>:serve` | Keeps local dev focused on one project |
| Investigate execution failures | Re-run with `--verbose` | Adds stack traces and richer diagnostics |
| Confirm behavior without cached reuse | Add `--skipNxCache` to one targeted rerun | Good diagnostic tool, not a default workflow |
| Recover from stale local Nx state | `nx reset` | Clears daemon/local state when the graph seems stale |

## Workflow

1. **Confirm scope.**
   Determine whether the user wants to run an existing target for one project, many projects, or only affected projects.

2. **Detect the workspace invocation style.**
   Check the repository for the package manager and existing scripts. If global `nx` is not guaranteed, use the workspace-local form the repo already uses, such as:
   - `npx nx ...`
   - `pnpm nx ...`
   - `yarn nx ...`

3. **Discover the real target names before running anything.**
   Inspect the project with:

   ```bash
   nx show project <project> --json
   ```

   Look for the `targets` section. Prefer this over manually guessing from config files, because Nx plugins may infer targets.

4. **Choose the execution mode.**
   - Use `nx run` for one project and one target.
   - Use `nx run-many` when the same target should run for several or all projects.
   - Use `nx affected` when the run should be limited to changed scope.

5. **Add only the flags needed for the current context.**
   Common choices:
   - `--configuration=<name>` for environment-specific behavior
   - `--parallel=<n>` to control concurrency
   - `--exclude=<projects>` to narrow scope
   - `--verbose` for triage
   - `--nxBail` to stop after the first failure
   - `--skipNxCache` for one-off cache diagnosis
   - `--outputStyle=<style>` when CI log readability matters

6. **Forward tool-specific arguments carefully.**
   When the underlying tool needs its own flags, pass them after `--` if required by the target/executor pattern in the workspace.

7. **For CI, make affected inputs explicit.**
   Prefer:

   ```bash
   nx affected -t <target> --base=<base> --head=<head>
   ```

   Do not rely blindly on defaults when branch topology, shallow history, or detached HEAD may differ from local development.

8. **Validate the result and escalate only if needed.**
   If the task fails, first determine whether the issue is:
   - a missing or wrong target
n- a Git diff problem affecting `nx affected`
   - a cache expectation problem
   - stale local daemon state
   - a real project/test/build failure outside Nx itself

9. **Use targeted recovery steps.**
   - Re-check available targets with `nx show project`
   - Re-run with `--verbose`
   - Try one diagnostic rerun with `--skipNxCache`
   - Run `nx reset` when local state appears stale

For a condensed execution checklist, see [references/nx-task-execution-workflow.md](references/nx-task-execution-workflow.md).

## Examples

### Example 1: Discover available targets for a project

```bash
nx show project myapp --json
```

**Expected outcome:** JSON output including a `targets` object, such as `build`, `test`, `lint`, `serve`, or workspace-specific targets.

### Example 2: Run tests for one project

```bash
nx run myapp:test
```

**Use when:** the user wants a single known task for one project.

### Example 3: Run a production build for one project

```bash
nx run myapp:build --configuration=production
```

**Use when:** the workspace defines environment-specific configurations.

### Example 4: Run lint for several named projects

```bash
nx run-many -t lint --projects=myapp,mylib
```

**Use when:** the same target should run across a selected set of projects.

### Example 5: Run multiple tasks across the workspace

```bash
nx run-many -t build,test,lint --parallel=3
```

**Use when:** you want a broad validation pass and the workspace supports those targets widely.

### Example 6: Run tests only for affected projects in CI

```bash
nx affected -t test --base=origin/main --head=HEAD
```

**Use when:** CI has enough Git history and you want deterministic changed-scope execution.

### Example 7: Run affected lint based on explicit files

```bash
nx affected -t lint --files=apps/web/src/app.tsx,libs/ui/src/button.tsx
```

**Use when:** Git metadata is unavailable or you want to drive affected calculation directly from a file list.

### Example 8: Pass flags through to the underlying test runner

```bash
nx run myapp:test -- --watch
```

**Use when:** the target supports argument forwarding and the underlying tool needs an extra runtime flag.

More copy-ready recipes are in:

- [references/nx-command-recipes.md](references/nx-command-recipes.md)
- [examples/run-single-project.md](examples/run-single-project.md)
- [examples/run-many-and-affected.md](examples/run-many-and-affected.md)
- [examples/ci-affected-snippets.md](examples/ci-affected-snippets.md)

## Best Practices

### Do

- **Discover targets first** with `nx show project <project> --json` before guessing task names.
- **Prefer `nx run` for single-project work** because it is explicit and easy to review.
- **Use `nx run-many` for repeated workspace-wide tasks** instead of scripting many individual `nx run` calls.
- **Use `nx affected` intentionally in CI** with explicit `--base` and `--head` when possible.
- **Tune `--parallel` to the machine or runner size** rather than assuming defaults fit every environment.
- **Keep cache enabled by default** for speed and consistency.
- **Use `--skipNxCache` only as a diagnostic** when verifying a suspicious result or environment-sensitive behavior.
- **Use `--verbose` during triage** so failure output is easier to interpret.
- **Use `nx reset` for stale local state** after branch switches, config changes, or graph weirdness.
- **Choose CI-friendly output settings** when logs need to be preserved and read after the run.

### Don't

- **Do not assume `serve`, `test`, or `lint` exists** for every project.
- **Do not rely only on `package.json` or `project.json` inspection** when inferred targets may exist.
- **Do not present `nx affected` as universally correct** without checking Git history and diff inputs.
- **Do not make `--skipNxCache` the default**; it increases runtime and can hide cache-related understanding.
- **Do not assume a global `nx` install** in shared or CI environments.
- **Do not use broad workspace-wide runs when the user asked for one project** unless you explicitly confirm scope.

## Troubleshooting

### Problem: `Cannot find configuration for task`, `Cannot find target`, or a target name does not exist

**Symptoms:** `nx run myapp:test` fails immediately, or the requested target seems to exist in docs but not in this workspace.

**Solution:** Run:

```bash
nx show project myapp --json
```

Inspect the exact target names and available configurations under `targets`. Do not assume every project has `build`, `test`, `lint`, or `serve`. If the user asked for a task that does not exist, confirm the closest valid target instead of inventing one.

### Problem: `nx affected` selects no projects or the wrong projects

**Symptoms:** CI reports no affected projects unexpectedly, or affected scope is much larger or smaller than expected.

**Solution:** Verify the diff inputs first. In CI, prefer explicit SHAs or refs:

```bash
nx affected -t test --base=origin/main --head=HEAD
```

If the environment has shallow history, detached HEAD behavior, or unreliable Git metadata, fetch sufficient history or switch to file-driven calculation:

```bash
nx affected -t test --files=path/to/file1,path/to/file2
```

### Problem: Expected cached results were not reused, or a task reran unexpectedly

**Symptoms:** A task runs again when you expected a cache hit, or cached behavior seems inconsistent between environments.

**Solution:** Re-run with `--verbose` to inspect more detail. Confirm whether inputs, environment variables, configuration, or file contents changed. Use one targeted rerun with `--skipNxCache` only to compare behavior, not as a permanent workaround. If the concern persists, review the workspace's cache inputs and CI environment differences.

### Problem: The workspace graph or task execution appears stale after branch or config changes

**Symptoms:** Targets seem out of date, project graph behavior looks inconsistent, or Nx acts differently after switching branches.

**Solution:** Reset local Nx state:

```bash
nx reset
```

Then retry discovery and execution. This is the first remediation step when the daemon or local cached state appears stale.

### Problem: Logs are hard to read in CI or failures are difficult to diagnose

**Symptoms:** Output is overly compact, interleaved, or missing enough detail for review.

**Solution:** Re-run with `--verbose` and choose an output style appropriate for CI if the workspace and command support it. Reduce `--parallel` temporarily when needed to make logs easier to interpret.

## Related Skills

- `@nx-generate` - Use when the user wants to create apps, libs, code, or generators instead of running existing tasks.
- `@nx-workspace` - Use when the user needs workspace configuration, target definitions, plugin setup, or architectural changes.
- `@ci-debugging` - Use when the main problem is CI environment behavior rather than Nx task selection itself.
- `@javascript-testing` - Use when the issue is test design or framework-specific debugging after the Nx command has already been identified.

See the handoff note in [agents/nx-task-router.md](agents/nx-task-router.md).

## Additional Resources

### Local support pack

| Resource | Purpose |
| --- | --- |
| [references/nx-task-execution-workflow.md](references/nx-task-execution-workflow.md) | Step-by-step decision workflow for choosing `run`, `run-many`, or `affected` |
| [references/nx-command-recipes.md](references/nx-command-recipes.md) | Quick command cookbook for common Nx task-running situations |
| [references/nx-affected-ci-guide.md](references/nx-affected-ci-guide.md) | CI-oriented guidance for explicit diff inputs and shallow-clone pitfalls |
| [references/nx-cache-and-daemon-troubleshooting.md](references/nx-cache-and-daemon-troubleshooting.md) | Troubleshooting notes for cache misses, stale state, and `nx reset` |
| [examples/run-single-project.md](examples/run-single-project.md) | Worked examples for discovering and running a single project target |
| [examples/run-many-and-affected.md](examples/run-many-and-affected.md) | Worked examples for multi-project and affected execution |
| [examples/ci-affected-snippets.md](examples/ci-affected-snippets.md) | Copy-ready CI command snippets |
| [agents/nx-task-router.md](agents/nx-task-router.md) | Routing note for handoff to adjacent skills |

### External references

- Nx task running overview: <https://nx.dev/features/run-tasks>
- `nx run` command reference: <https://nx.dev/nx-api/nx/documents/run>
- `nx run-many` command reference: <https://nx.dev/nx-api/nx/documents/run-many>
- `nx affected` guidance for CI: <https://nx.dev/ci/features/affected>
- `nx show project` reference: <https://nx.dev/nx-api/nx/documents/show>
- Passing args through Nx: <https://nx.dev/recipes/running-tasks/pass-args-to-commands>
- Nx daemon concept: <https://nx.dev/concepts/nx-daemon>
- `nx reset` reference: <https://nx.dev/nx-api/nx/documents/reset>

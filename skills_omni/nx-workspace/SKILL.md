---
name: "nx-workspace"
description: "Nx workspace management workflow skill. Use this skill when you need to inspect, configure, and optimize an Nx monorepo workspace, including project discovery, resolved configuration review, boundary design, affected analysis, caching, and CI setup. Do not use it as the primary skill for routine task execution or generator-driven code creation."
version: "0.0.1"
category: "development"
tags:
  - "nx-workspace"
  - "nx"
  - "monorepo"
  - "workspace"
  - "affected"
  - "caching"
  - "project-graph"
  - "module-boundaries"
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
upstream_skill: "skills/nx-workspace"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Nx Workspace Management

## Overview

Use this skill to understand and improve an Nx workspace at the workspace-management level.

This skill is for:

- inspecting workspace structure and project relationships
- reviewing resolved project configuration
- assessing affected scope for local work and CI
- designing or tightening project boundaries
- improving cache correctness and CI efficiency
- documenting safe next steps before handoff

This skill is **not** the main entry point for routine task execution such as `build`, `test`, or `lint` runs across projects, and it is **not** the right skill for generator-driven scaffolding. Use adjacent Nx skills for those workflows.

Prefer Nx inspection commands over guessing from file layout. In modern Nx workspaces, effective behavior may come from `project.json`, `package.json`, `nx.json`, plugin inference, and target defaults together. For diagnosis, inspect the resolved view first.

## When to Use This Skill

Use this skill when the user asks for any of the following:

- "Show me what projects exist in this Nx workspace."
- "Help me understand how project `X` is configured."
- "Why is `affected` selecting the wrong projects in CI?"
- "How should we structure apps and libs in this monorepo?"
- "How do we enforce dependency boundaries between domains?"
- "Why are Nx cache hits unreliable or missing?"
- "How should we configure Nx for CI pipelines and remote cache reuse?"
- "Help audit this workspace before we change architecture or CI behavior."

Do **not** use this skill as the primary workflow when:

- the main task is simply running Nx targets repeatedly
- the user wants to generate apps, libs, or configuration with generators
- the issue is primarily package-manager failure, non-Nx build-tool breakage, or general Git troubleshooting unrelated to Nx workspace behavior

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need to see what exists in the workspace | `nx show projects` | Fastest supported way to inspect the project inventory |
| Need to understand one project's real configuration | `nx show project <name> --json` | Shows resolved configuration instead of only raw file fragments |
| Need dependency visibility | `nx graph` | Reveals relationships that folder structure alone does not show |
| Need to know what changed in a branch | `nx show projects --affected --base=<base> --head=<head>` | Makes affected scope explicit and reproducible |
| Need to review boundary design | `references/module-boundaries-and-tags.md` | Helps translate folder conventions into enforceable rules |
| Need to improve cache behavior | `references/caching-and-target-defaults.md` | Covers inputs, outputs, `namedInputs`, and `targetDefaults` |
| CI affected results look wrong | `references/affected-and-ci-guide.md` | Focuses on Git history, ref selection, and shallow clone pitfalls |
| State appears stale or corrupted | `nx reset` | Supported recovery path for daemon, cache, and workspace metadata issues |
| Need a quick audit before making changes | `examples/workspace-audit-checklist.md` | Provides a narrow review sequence for operators |

## Workflow

1. **Clarify the workspace-management goal**
   - Identify whether the user needs inspection, architecture guidance, affected analysis, caching changes, or CI hardening.
   - If the task is mainly target execution, route to the task-running skill.
   - If the task is mainly code generation, route to the generator skill.

2. **Inspect the workspace inventory**
   - Start with project discovery instead of reading directories by hand.

   ```bash
   nx show projects
   nx show projects --type app
   nx show projects --type lib
   nx show projects --withTarget build
   ```

3. **Inspect resolved project configuration**
   - For any project under discussion, inspect the resolved configuration first.
   - Do not rely on `project.json` alone for diagnosis.

   ```bash
   nx show project my-app --json
   nx show project my-app --json | jq '.targets | keys'
   nx show project my-lib --json | jq '{root, sourceRoot, tags, targets}'
   ```

4. **Inspect graph and architecture**
   - Use the dependency graph to understand coupling and likely boundary problems.
   - Compare graph reality against intended domain boundaries.

   ```bash
   nx graph
   ```

5. **Assess affected scope explicitly**
   - For branch or CI questions, specify `base` and `head` rather than assuming defaults.
   - Use the same refs locally and in CI when validating behavior.

   ```bash
   nx show projects --affected --base=origin/main --head=HEAD
   nx affected -t lint --base=origin/main --head=HEAD
   ```

6. **Review boundary and tagging strategy**
   - Inspect whether projects have meaningful tags such as scope, type, and platform.
   - Check whether dependency rules are enforceable rather than informal.
   - Use the local boundary reference before proposing structural changes.

7. **Review cache configuration**
   - Determine whether key targets are cacheable.
   - Review `inputs`, `namedInputs`, `outputs`, and `targetDefaults` before blaming Nx for misses.
   - Separate cache-correctness issues from daemon-state issues.

8. **Review CI assumptions**
   - Confirm the CI system fetches enough Git history.
   - Confirm the refs passed to affected analysis actually exist in CI.
   - Prefer explicit base/head selection for reproducibility.

9. **Apply narrow changes and document handoff**
   - Keep changes reversible.
   - Summarize what was inspected, what was confirmed, what remains uncertain, and whether follow-on work belongs to another skill.

## Workspace Architecture Patterns

Nx workspaces often use directories such as `apps/`, `libs/`, and `tools/`, but architecture should not depend on folders alone.

Typical high-level layout:

```text
workspace/
├── apps/
├── libs/
├── tools/
├── nx.json
└── package.json
```

Common library roles:

| Type | Purpose | Example |
| --- | --- | --- |
| `feature` | Business behavior and feature orchestration | `feature-auth` |
| `ui` | Presentational or reusable UI units | `ui-buttons` |
| `data-access` | API access, storage, state integration | `data-access-users` |
| `util` | Stateless helpers and pure utilities | `util-formatting` |

Use tags and enforced dependency rules to make architecture durable. Folder structure can suggest intent; tags and boundary rules make it enforceable.

## Examples

### Example 1: Inventory the workspace

```bash
nx show projects
nx show projects --type app
nx show projects --type lib
```

**Expected outcome:** You get a reliable list of projects without assuming they are organized only by folder names.

### Example 2: Inspect one project's resolved configuration

```bash
nx show project web --json | jq '{root, sourceRoot, tags, targets}'
```

**Expected outcome:** You see the effective Nx configuration for `web`, including targets and tags, even when some behavior is inferred.

### Example 3: Check affected scope for a branch

```bash
nx show projects --affected --base=origin/main --head=HEAD
```

**Expected outcome:** You get the projects Nx considers affected for the chosen comparison range.

### Example 4: Validate target availability before handoff

```bash
nx show project api --json | jq '.targets | keys'
```

**Expected outcome:** You confirm whether a target exists before routing the user to a task-running workflow.

### Example 5: Recover from stale workspace state

```bash
nx reset
nx show projects
```

**Expected outcome:** Daemon and local Nx state are refreshed using the supported reset path, then inspection is repeated cleanly.

### Example 6: Minimal GitHub Actions pattern for affected checks

See [examples/github-actions-affected.yml](examples/github-actions-affected.yml).

**Expected outcome:** CI checks use sufficient Git history and explicit refs so affected analysis is reproducible.

## Best Practices

### Do

- Use `nx show projects` and `nx show project <name> --json` as the first inspection tools.
- Treat resolved configuration as the source of truth for diagnosis.
- Pass explicit `base` and `head` values when validating affected behavior.
- Ensure CI fetches enough Git history for affected calculations.
- Use `tags` plus module-boundary rules to enforce architecture.
- Centralize repeatable target behavior with `targetDefaults` when appropriate.
- Define cache inputs and outputs deliberately instead of relying on defaults blindly.
- Prefer `nx reset` over ad hoc deletion when workspace state appears stale.
- Keep workspace-management changes narrow and explain their expected impact.

### Don't

- Do not assume `project.json` alone explains all Nx behavior.
- Do not assume every repository uses `main` as the default branch.
- Do not treat folder structure as sufficient architecture governance.
- Do not enable caching aggressively without validating inputs and outputs.
- Do not blame affected logic before checking Git refs and fetch depth.
- Do not mix workspace-management analysis with broad task-running automation in the same handoff.

### Cache correctly, not just aggressively

Good cache behavior depends on correctness first.

Review these areas:

- whether the target is cacheable
- whether `inputs` capture the files and configuration that really change the result
- whether `outputs` include the artifacts that should be restored
- whether `namedInputs` reduce duplication and improve consistency
- whether `targetDefaults` in `nx.json` can standardize repeated target behavior
- whether remote cache is appropriate for team and CI reuse

See [references/caching-and-target-defaults.md](references/caching-and-target-defaults.md).

### Enforce boundaries, not just conventions

Use tags to model dependency policy dimensions such as:

- `scope:*` for domain ownership
- `type:*` for project role
- `platform:*` for runtime or delivery surface

Then enforce those policies using Nx-supported module-boundary linting.

See [references/module-boundaries-and-tags.md](references/module-boundaries-and-tags.md) and [examples/tag-taxonomy-examples.md](examples/tag-taxonomy-examples.md).

## Troubleshooting

### Problem: A target exists at runtime, but you cannot find it where you expected in config files

**Symptoms:** A project can run a target, but `project.json` does not appear to contain the full definition, or the workspace seems to behave differently than the raw files suggest.

**Solution:** Inspect the resolved configuration first.

```bash
nx show project <name> --json
```

Modern Nx workspaces may use inferred tasks, plugin-provided behavior, and workspace-wide defaults. Do not diagnose from `project.json` alone.

### Problem: `affected` returns too much, too little, or nothing in CI

**Symptoms:** Local and CI results differ, affected scope appears empty unexpectedly, or too many projects are selected after a small change.

**Solution:** Check all of the following before changing workspace configuration:

- the `base` and `head` refs are correct for that repository
- the CI checkout fetched enough history
- the target branch ref actually exists in the job environment
- shallow clone defaults are not hiding required commits
- detached HEAD behavior is not causing you to compare the wrong revisions

Then rerun with explicit refs.

```bash
nx show projects --affected --base=<base> --head=<head>
```

See [references/affected-and-ci-guide.md](references/affected-and-ci-guide.md).

### Problem: Cache misses happen when you expect hits

**Symptoms:** Repeated runs do not reuse cache consistently, or restored outputs are incomplete.

**Solution:** Review cache configuration, not just cache presence.

Check:

- whether the target is configured to be cacheable
- whether inputs are too broad or too narrow
- whether outputs are declared correctly
- whether environment differences between local and CI explain misses
- whether workspace defaults should move into `targetDefaults`

Use the cache reference before resetting state.

See [references/caching-and-target-defaults.md](references/caching-and-target-defaults.md).

### Problem: The workspace graph or project state appears stale

**Symptoms:** Recent file or configuration changes are not reflected, commands disagree with one another, or project discovery seems outdated.

**Solution:** Use the supported reset path first.

```bash
nx reset
```

Then rerun your inspection commands. This is safer and more supportable than deleting arbitrary cache directories by hand.

See [references/troubleshooting-playbook.md](references/troubleshooting-playbook.md).

### Problem: Libraries are coupling across domains unexpectedly

**Symptoms:** Feature libraries import across domain boundaries, architectural layering is unclear, or boundary policy exists only as tribal knowledge.

**Solution:** Review project tags and module-boundary constraints. If tags are missing or too coarse, define a clearer taxonomy and enforce it.

See [references/module-boundaries-and-tags.md](references/module-boundaries-and-tags.md).

## Related Skills

- `@nx-run-tasks` - Use when the main task is executing Nx targets rather than managing workspace structure or policy.
- `@nx-generate` - Use when the main task is creating apps, libs, or config through generators.
- CI or pipeline skills - Use when the work moves from Nx workspace design into full pipeline implementation details.
- Repository architecture skills - Use when decisions go beyond Nx-specific workspace governance into broader repo operating model design.
- Debugging skills - Use when the issue is no longer primarily about Nx workspace configuration or behavior.

## Additional Resources

Local support pack:

- [Workspace inspection guide](references/workspace-inspection-guide.md)
- [Affected and CI guide](references/affected-and-ci-guide.md)
- [Caching and target defaults](references/caching-and-target-defaults.md)
- [Module boundaries and tags](references/module-boundaries-and-tags.md)
- [Troubleshooting playbook](references/troubleshooting-playbook.md)
- [Workspace audit checklist](examples/workspace-audit-checklist.md)
- [GitHub Actions affected example](examples/github-actions-affected.yml)
- [Tag taxonomy examples](examples/tag-taxonomy-examples.md)

Primary documentation used to strengthen this skill:

- Nx docs on project exploration and `nx show`
- Nx docs on affected CI behavior
- Nx docs on caching inputs and outputs
- Nx docs on `targetDefaults`
- Nx docs on module boundaries and tags
- Nx docs on daemon behavior and `nx reset`

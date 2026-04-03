---
name: "nx-generate"
description: "Run Nx generators to scaffold apps, libraries, components, features, or workspace-specific artifacts with proper discovery, option inspection, safe execution, and post-generation verification. Use this skill when the user asks to create code with `nx generate` or a repo-local generator. Prefer local workspace generators over external plugins. Do not use this skill for ordinary build/test/lint execution or broad workspace configuration changes."
version: "0.0.1"
category: "tools"
tags:
  - "nx-generate"
  - "nx"
  - "generate"
  - "scaffold"
  - "monorepo"
  - "workspace-generators"
  - "libraries"
  - "components"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
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
upstream_skill: "skills/nx-generate"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Run Nx Generator

## Overview

Use this skill to run Nx generators safely and deliberately in an Nx workspace.

Nx generators scaffold code and update workspace files in a structured way. They can create applications, libraries, components, routes, plugins, tests, or repo-specific artifacts defined by local workspace plugins. Good generator usage starts with discovery, continues with option and side-effect inspection, and ends with formatting plus project-scoped verification.

This skill is specifically for **generation workflows**:

- discover available generators
- choose the best generator for the request
- inspect options and likely side effects
- run the generator non-interactively
- verify what changed

Prefer **local workspace generators** when available. They usually encode repository naming, tags, layout, lint/test defaults, and integration conventions better than generic external plugin generators.

## When to Use This Skill

Use this skill when the user wants Nx to create or scaffold something, for example:

- create a new app or library
- scaffold a component, hook, route, feature, or API surface
- run a workspace-specific generator from a local plugin
- apply repo conventions through an Nx generator
- translate a natural-language scaffolding request into `nx generate` options

Do **not** use this skill when the main task is:

- running existing build, test, lint, typecheck, or CI tasks only
- changing broad workspace configuration by hand
- diagnosing general runtime failures unrelated to generation
- performing upgrades or migrations where the primary task is version remediation rather than scaffolding

Route those cases to adjacent skills such as `@nx-run-tasks` or `@nx-workspace`.

## Operating Table

| Situation | Start here | Expected result | Escalate when |
| --- | --- | --- | --- |
| Need to discover what generators exist | `references/generator-discovery-guide.md` and `nx list` | Shortlist of relevant local or plugin generators | No available generator appears to fit the request |
| Need exact options for a chosen generator | Run `<package-manager> nx g <generator> --help` | Required flags, defaults, and option names are clear | Help text is ambiguous or side effects seem broad |
| Need to decide between local and external generators | `references/generator-discovery-guide.md` | Local generator preferred when it satisfies the request | Only an external generator can meet the requirement |
| Need a safe preflight before execution | `references/preflight-checklist.md` | Confirmed workspace root, target path, naming, and verification plan | Critical input is missing or the target area is unclear |
| Need to verify results after generation | `references/verification-checklist.md` | Diff reviewed, formatting applied, verification tasks completed | Generated output causes failures outside the intended scope |
| Need help recovering from command failure | `references/troubleshooting-playbook.md` | Concrete diagnosis and next safe retry step | Failure suggests broken workspace state or plugin install issues |
| Need example command shapes | `examples/common-generator-commands.md` | Correct invocation pattern for the repo package manager | The generator name or options are still unknown |
| Need to map a user request into options | `examples/request-to-options-mapping.md` | Runnable command plan with assumptions called out | User intent is too ambiguous to infer required values |

## Workflow

1. **Confirm that generation is the actual task.**
   Determine whether the user wants Nx to scaffold something, not just run tasks or edit config manually.

2. **Identify the workspace root and package-manager wrapper.**
   Prefer the invocation style already used by the repo, such as:
   - `pnpm nx ...`
   - `npx nx ...`
   - `yarn nx ...`
   - `bunx nx ...`

3. **Discover generators before guessing.**
   List available plugins and generators:
   ```bash
   pnpm nx list
   pnpm nx list @nx/react
   ```
   Check local workspace plugins before defaulting to external plugin generators.

4. **Inspect the exact generator help.**
   Use generator-specific help to capture:
   - required options
   - relevant optional options
   - default values
   - naming and path conventions
   ```bash
   pnpm nx g @nx/react:library --help
   ```

5. **Inspect likely side effects for unfamiliar generators.**
   If the generator is not already well understood, inspect its schema or source before running it. For local generators, search the repo plugin or tools directory. For installed plugins, inspect the plugin's `generators.json` and implementation files if needed.

6. **Map the request to concrete options.**
   Confirm or infer:
   - generator name
   - project or artifact name
   - directory/path
   - tags or scope metadata
   - test/build/linter choices when relevant
   - whether the user asked for a specific framework or preset

7. **Check working directory sensitivity.**
   Some generators interpret paths relative to the current working directory. Run the command from the intended workspace root or plugin-specific location.

8. **Use dry-run when risk is high or placement is uncertain.**
   For unfamiliar or broad generators, try:
   ```bash
   pnpm nx g <generator> <options> --dry-run --no-interactive
   ```
   If dry-run fails because the generator requires installs or unsupported side effects, reassess and then run the real command only if the action still matches the request.

9. **Run the generator non-interactively.**
   Always include `--no-interactive` in automated execution.
   ```bash
   pnpm nx g <generator> <options> --no-interactive
   ```

10. **Inspect the diff immediately after generation.**
    Confirm what was created or modified, including config files, tags, tsconfig changes, lint config, or project metadata.

11. **Format and verify the impacted scope.**
    Prefer project-scoped or affected verification instead of workspace-wide commands when the scope is known.
    Typical sequence:
    ```bash
    pnpm nx format --fix
    pnpm nx lint <project>
    pnpm nx test <project>
    pnpm nx build <project>
    ```

12. **Re-check for sync-generated changes.**
    Some Nx workflows may update files again during later task execution. Re-inspect the diff after verification before handoff.

13. **Summarize outcomes clearly.**
    Report:
    - generator used
    - important options
    - files/projects created or modified
    - verification performed
    - unresolved follow-ups, if any

## Best Practices

### Do

- Prefer **local workspace generators** over external plugin generators when both satisfy the request.
- Use the repo's **local Nx invocation** through its existing package manager wrapper.
- Read generator-specific `--help` before running commands.
- Inspect source or schema for unfamiliar generators that may modify config, install dependencies, or touch multiple projects.
- Keep commands narrow and explicit.
- Use `--no-interactive` for agent-driven execution.
- Use `--dry-run` when pathing or side effects are uncertain.
- Match existing repo conventions for names, directories, tags, and test/build defaults.
- Verify generated output with formatting and project-scoped tasks.
- Re-check the diff after running verification tasks in case sync generators changed additional files.

### Don't

- Do not assume the first generator name that sounds plausible is the right one.
- Do not prefer a global `nx` binary over the workspace-local version by default.
- Do not run unfamiliar generators blindly.
- Do not use workspace-wide verification when a smaller scoped check is sufficient.
- Do not ignore config changes just because the main goal was file generation.
- Do not claim no suitable generator exists until you have checked local plugins and likely external plugin families.

## Examples

### Example 1: Discover available generators

```bash
pnpm nx list
pnpm nx list @nx/react
```

Expected outcome: identify candidate generators, including any local workspace plugin generators that should be preferred.

### Example 2: Inspect a generator before running it

```bash
pnpm nx g @nx/react:library --help
```

Expected outcome: confirm required flags such as `--name`, optional path or directory flags, and framework-specific defaults.

### Example 3: Run a local workspace generator

```bash
pnpm nx g my-plugin:feature --name=checkout --directory=storefront --no-interactive
```

Expected outcome: generate a repo-conformant feature using workspace-specific conventions.

### Example 4: Dry-run a risky or unfamiliar generator

```bash
pnpm nx g @nx/js:library --name=shared-utils --directory=libs/shared --dry-run --no-interactive
```

Expected outcome: preview which files would be created or modified before applying changes.

### Example 5: Verify a newly generated project

```bash
pnpm nx format --fix
pnpm nx lint shared-utils
pnpm nx test shared-utils
pnpm nx build shared-utils
```

Expected outcome: generated code is formatted and passes relevant project-scoped checks.

See also:

- [Common generator commands](examples/common-generator-commands.md)
- [Request-to-options mapping](examples/request-to-options-mapping.md)

## Troubleshooting

### Problem: Generator not found or command not recognized

**Symptoms:** `nx generate` reports that the generator cannot be resolved, the plugin is unknown, or the command behaves differently than expected.

**Solution:**
- Run `nx list` to confirm available plugins.
- Run `nx list <plugin>` to confirm the generator name.
- Verify you are using the repo's local Nx invocation, not an unexpected global binary.
- Check whether the plugin is installed and present in the workspace.
- For local generators, inspect repo plugin directories and naming conventions.

### Problem: Files were created in the wrong location

**Symptoms:** Generated files appear under the wrong folder, nested path, or project name.

**Solution:**
- Confirm the current working directory used for execution.
- Re-read generator help for `directory`, `path`, `projectName`, or similar options.
- Review existing repo layout and a similar project before retrying.
- Use `--dry-run` first when placement logic is unclear.

### Problem: Generator help exists, but side effects are unclear

**Symptoms:** The generator may update workspace config, tags, lint settings, tsconfig, or dependencies beyond the requested artifact.

**Solution:**
- Inspect the generator schema and implementation before running it.
- Look for modifications to `project.json`, root config files, tsconfig files, lint config, or plugin installation logic.
- If the side effects are broader than the user requested, stop and confirm before proceeding.

### Problem: Nx command fails because of workspace, install, daemon, or cache issues

**Symptoms:** Commands fail unexpectedly, resolution is inconsistent, or Nx reports environment/cache-related issues.

**Solution:**
- Confirm dependencies are installed for the workspace.
- Run `nx report` to capture environment details.
- Review local install and plugin resolution issues first.
- If diagnostics point to daemon/cache state, consider `nx reset` as a troubleshooting step rather than a default action.

### Problem: Dry-run fails, but the real generator may still be valid

**Symptoms:** `--dry-run` errors out for a generator that appears otherwise legitimate.

**Solution:**
- Check whether the generator performs dependency installation or other side effects that limit dry-run support.
- Review logs and help output.
- If the generator and options are still correct, proceed carefully with a real run and immediate diff inspection.

### Problem: Generated project fails lint, test, or build

**Symptoms:** The generated artifact exists, but verification targets fail.

**Solution:**
- Inspect the diff for missing or mismatched repo conventions.
- Re-run formatting.
- Check whether later task execution triggered sync-generator updates.
- Fix small issues directly when they are clearly within scope.
- If failures indicate broader architecture, dependency-boundary, or circular-dependency problems, hand off to the relevant debugging or workspace skill.

## Related Skills

- `@nx-run-tasks` — use after generation when the main work becomes task execution, CI-style validation, or broader verification.
- `@nx-workspace` — use when the request is primarily about workspace configuration, presets, plugins, or policy changes.
- Debugging or refactoring skills — use when generated output exposes issues outside normal generator execution and requires broader remediation.

## Additional Resources

### Local support pack

- [Generator discovery guide](references/generator-discovery-guide.md)
- [Preflight checklist](references/preflight-checklist.md)
- [Verification checklist](references/verification-checklist.md)
- [Troubleshooting playbook](references/troubleshooting-playbook.md)
- [Common generator commands](examples/common-generator-commands.md)
- [Request-to-options mapping](examples/request-to-options-mapping.md)
- [Routing note](agents/router.md)

### Official references

- Nx: Generating Code
- Nx: `nx list` and CLI command reference
- Nx: Local/workspace generators
- Nx: Sync generators
- Nx: Troubleshooting install and cache issues

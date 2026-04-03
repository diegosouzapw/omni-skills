# Troubleshooting Playbook

## Generator cannot be resolved

**Symptoms:** `Cannot find generator`, unknown plugin, or command not recognized.

**Recovery:**

1. Run:
   ```bash
   pnpm nx list
   ```
2. Confirm the plugin exists.
3. Run:
   ```bash
   pnpm nx list <plugin>
   ```
4. Verify the generator name exactly.
5. Confirm you are using the workspace-local Nx invocation.

## Wrong output path

**Symptoms:** Files appear in the wrong folder or project naming is off.

**Recovery:**

1. Check the current working directory.
2. Re-read `--help` for path or directory flags.
3. Compare with a similar existing project in the repo.
4. Retry with `--dry-run --no-interactive` first.

## Unclear side effects

**Symptoms:** Generator may modify unexpected config or multiple projects.

**Recovery:**

1. Inspect generator help.
2. Inspect schema or source.
3. Look for edits to `project.json`, root config, tsconfig, lint config, or dependency installation logic.
4. If the scope is broader than requested, stop and confirm before running.

## Nx environment or cache instability

**Symptoms:** inconsistent CLI behavior, daemon/cache warnings, or environment-specific failures.

**Recovery:**

1. Confirm dependencies are installed.
2. Run:
   ```bash
   pnpm nx report
   ```
3. Review install or plugin-resolution issues.
4. If indicated, use:
   ```bash
   pnpm nx reset
   ```
   only as a troubleshooting step, not as the default first action.

## Verification failures after generation

**Symptoms:** generated project exists but lint/test/build fails.

**Recovery:**

1. Run formatting.
2. Inspect the diff for repo-convention mismatches.
3. Check whether task execution caused sync-generator updates.
4. Fix small generated issues directly.
5. Escalate when failures indicate broader dependency-boundary or architecture problems.

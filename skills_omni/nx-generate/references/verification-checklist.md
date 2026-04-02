# Verification Checklist

Use this checklist after running an Nx generator.

## Immediate checks

- [ ] Confirm the command succeeded.
- [ ] Inspect created and modified files.
- [ ] Confirm the artifact landed in the intended directory.
- [ ] Confirm project name, tags, and config updates look correct.

## Formatting

- [ ] Run repo-appropriate formatting.
- [ ] If using Nx formatting, run:
  ```bash
  pnpm nx format --fix
  ```

## Project-scoped validation

Prefer scoped validation over workspace-wide commands.

- [ ] Run lint for the changed or created project when available.
- [ ] Run test for the changed or created project when available.
- [ ] Run build for the changed or created project when available.
- [ ] Use affected/project-scoped commands when the impacted scope is known.

## Sync-generator awareness

- [ ] Re-check the diff after running tasks.
- [ ] Note any additional file changes caused by follow-up task execution.

## Handoff summary

Record:

- generator used
- final command
- files/projects created
- config changes introduced
- verification performed
- unresolved follow-ups

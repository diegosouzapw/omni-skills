# Preflight Checklist

Complete this checklist before running `nx generate`.

## Workspace and command context

- [ ] I know the workspace root.
- [ ] I am using the repo's local package-manager wrapper for Nx.
- [ ] I know whether current working directory affects placement for this generator.

## Generator selection

- [ ] I listed available generators with `nx list`.
- [ ] I checked local workspace generators before external plugins.
- [ ] I selected the exact generator name.

## Option validation

- [ ] I ran `<wrapper> nx g <generator> --help`.
- [ ] I identified required options.
- [ ] I captured important optional options relevant to the request.
- [ ] I know the target name, directory, and any tags or metadata.

## Side-effect review

- [ ] I understand whether the generator may modify config files.
- [ ] I understand whether it may affect multiple projects.
- [ ] I reviewed schema or source if the generator is unfamiliar.
- [ ] I confirmed the side effects still match the user request.

## Verification plan

- [ ] I know which project(s) will need lint/test/build verification.
- [ ] I plan to inspect the diff immediately after generation.
- [ ] I will re-check the diff after verification in case sync generators update files.

## When to stop and ask for confirmation

Pause and confirm with the user if:

- generator choice is ambiguous
- required naming or path inputs are missing
- the generator changes broader workspace config than requested
- the generated artifact could land in multiple valid locations

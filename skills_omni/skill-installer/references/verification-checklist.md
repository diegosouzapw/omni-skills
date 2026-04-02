# Verification Checklist

Run this after every install.

## Destination

- [ ] Confirm the final destination directory is inside `$CODEX_HOME/skills` unless the user explicitly requested otherwise.
- [ ] Confirm the destination directory name matches the intended installed skill name.
- [ ] Confirm no unintended sibling directories were created.

## Installed files

- [ ] Confirm the installed directory exists.
- [ ] Confirm `SKILL.md` exists.
- [ ] Confirm the install is not empty.

## Provenance

Record in the final response or notes:

- [ ] source repository
- [ ] source ref
- [ ] source path
- [ ] destination path
- [ ] install method used

## User communication

- [ ] State whether the destination already existed or was newly created.
- [ ] Mention any auth or fallback constraints encountered.
- [ ] Remind the user to restart Codex.

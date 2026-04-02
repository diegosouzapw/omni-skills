# Repo/Path Install Example

## Goal

Install a skill from a specific repository path and pinned ref.

## Example

```bash
python3 scripts/install-skill-from-github.py --repo owner/repo --ref main --path skills/my-skill
python3 scripts/verify_installed_skill.py --skill my-skill
```

## Verify before running

- repository owner/name is correct
- path points to the skill directory
- ref is correct
- destination does not already exist

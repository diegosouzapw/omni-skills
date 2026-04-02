# Private Repo Install Example

## Goal

Install a skill from a private repository without exposing credentials.

## Workflow

1. Confirm the repo is private.
2. Confirm the environment already has valid read access.
3. Do not paste token values into commands shown to the user.
4. Run the installer with the intended repo/path/ref.
5. Verify the result locally.

## Example command shape

```bash
python3 scripts/install-skill-from-github.py --repo owner/private-repo --ref main --path skills/private-skill
python3 scripts/verify_installed_skill.py --skill private-skill
```

## Notes

- Prefer least-privilege access.
- If download fails, a git-based fallback may work when git credentials are already configured.
- If auth is missing, stop and ask for a safe credential setup path rather than improvising.

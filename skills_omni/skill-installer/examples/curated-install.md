# Curated Install Example

## Goal

Install one curated skill from `openai/skills`.

## Steps

1. List available curated skills if the user did not name one.
2. Confirm the requested skill name.
3. Check whether the destination already exists.
4. Run the install.
5. Verify the installed directory.
6. Tell the user to restart Codex.

## Example commands

```bash
python3 scripts/list-skills.py
python3 scripts/install-skill-from-github.py --repo openai/skills --path skills/.curated/example-skill
python3 scripts/verify_installed_skill.py --skill example-skill
```

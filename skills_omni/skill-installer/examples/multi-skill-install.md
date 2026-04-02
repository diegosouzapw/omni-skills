# Multi-Skill Install Example

## Goal

Install multiple skills from one repository in a single run.

## Example

```bash
python3 scripts/install-skill-from-github.py --repo openai/skills --path skills/.curated/skill-one skills/.curated/skill-two
```

## Before running

- confirm each path
- check for destination collisions for each resulting skill name
- summarize expected destination names

## After running

Verify each installed skill separately.

```bash
python3 scripts/verify_installed_skill.py --skill skill-one
python3 scripts/verify_installed_skill.py --skill skill-two
```

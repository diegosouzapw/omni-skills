# openai.yaml Sync Guide

Use this guide when generating or reviewing `agents/openai.yaml`.

## Purpose

`agents/openai.yaml` is for agent-client metadata such as:

- `display_name`
- `short_description`
- `default_prompt`

It should reflect the current skill, not an earlier draft.

## Generate from actual content

After meaningful changes to a skill, review the skill and generate metadata from the current state.

Example:

```bash
scripts/generate_openai_yaml.py <path/to/skill-folder> --interface key=value
```

## Minimum recommended review

Check whether these still match the skill:

- the display name
- the short description
- the default prompt

## Common drift cases

- the skill scope changed
- the trigger boundary became narrower or broader
- examples changed but the default prompt did not
- the skill was renamed but metadata was not refreshed

## Keep optional fields minimal

Only include additional interface fields when they are explicitly provided or clearly supported by the repository workflow.

## Quick checklist

- does `display_name` match the skill identity?
- does `short_description` reflect the current purpose?
- does `default_prompt` match the actual workflow?
- is the metadata still consistent with `SKILL.md`?

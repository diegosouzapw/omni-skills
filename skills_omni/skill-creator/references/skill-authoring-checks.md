# Skill Authoring Checks

Use this checklist before merge or handoff.

## Trigger quality

- description says what the skill does
- description says when it should be used
- wording matches realistic user prompts
- wording excludes nearby but different tasks

## Structure

- `Overview` exists
- `When to Use This Skill` exists
- `Workflow` exists and is actionable
- `Examples` exist
- `Best Practices` exists
- `Troubleshooting` exists
- `Additional Resources` links to local files

## Support pack

- each referenced file exists
- scripts are tested
- placeholder files are removed
- detailed material is moved out of `SKILL.md` when appropriate

## Validation and metadata

- validator passes
- `name` matches the directory
- `agents/openai.yaml` is checked or regenerated if needed

## Handoff quality

- unresolved gaps are stated explicitly
- the next operator can see the trigger boundary
- the next operator can see the current validation state

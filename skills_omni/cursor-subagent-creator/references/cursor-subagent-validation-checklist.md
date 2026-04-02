# Cursor Subagent Validation Checklist

Use this checklist before handoff.

## File and location

- [ ] File is in `.cursor/agents/` or `~/.cursor/agents/`
- [ ] Filename is kebab-case
- [ ] File extension is `.md`

## Frontmatter

- [ ] Frontmatter exists and is valid YAML
- [ ] `name` is aligned with the intended subagent identity
- [ ] `description` states when to use the subagent
- [ ] `description` includes examples or trigger conditions
- [ ] `model` choice is justified if not `inherit`
- [ ] `readonly: true` is used for analysis/review roles where possible
- [ ] `is_background: true` is used only when clearly justified

## Prompt quality

- [ ] One clear responsibility
- [ ] Numbered execution steps
- [ ] Constraints are explicit
- [ ] Output format is structured
- [ ] Instructions are concise and testable

## Validation

- [ ] One explicit invocation test was attempted
- [ ] One natural-language delegation test was attempted
- [ ] Delegation behavior matched the intended trigger
- [ ] The subagent did not exceed intended permissions

## Handoff

- [ ] Final response includes exact path
- [ ] Final response includes invocation examples
- [ ] Final response includes any recommended refinements

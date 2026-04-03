# Docs Style Quick Reference

## Write for the reader

- Lead with what the reader is trying to do or understand.
- Prefer plain technical English over internal shorthand.
- Use active voice and direct instructions.
- Keep introductions short; earn detail with relevance.

## Choose the right structure

- **README:** overview, prerequisites, install, usage, examples, troubleshooting, support.
- **How-to:** prerequisites, task steps, expected result, verification, recovery notes.
- **Concept page:** explanation, mental model, constraints, related tasks.
- **Troubleshooting page:** symptoms, causes, diagnosis, resolution, prevention.
- **Migration guide:** what changed, who is affected, required actions, validation.

## Keep terminology stable

- Pick one term for each key concept.
- Avoid unnecessary synonyms.
- Expand unfamiliar acronyms on first mention unless the audience clearly knows them.

## Handle code and commands carefully

- Use fenced code blocks with a language label when possible.
- Match commands to real flags, paths, and config names.
- Mark placeholders clearly, for example `<project-id>`.
- Do not present destructive commands as routine safe steps.

## Make procedures usable

- State prerequisites before the steps.
- Keep steps in the order users actually perform them.
- Mention expected results after important steps.
- Include recovery or rollback hints when failure is common.

## Markdown safety

- Prefer simple GitHub Flavored Markdown/CommonMark-compatible formatting.
- Keep nested lists shallow inside numbered steps.
- Use tables only when they improve scanning.
- Avoid renderer-specific callouts unless the repo supports them clearly.

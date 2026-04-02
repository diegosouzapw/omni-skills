# Sensitivity Tuning

Use this guide when default path heuristics are too broad or too narrow.

## Goal

Tag security-relevant areas consistently enough to support ownership analysis without exposing sensitive contents.

## Default approach

The workflow can flag common auth, crypto, and secret-related paths. This is a useful starting point, not a universal truth.

## When to provide a custom CSV

Use a reviewed config when:

- the repo is a monorepo
- security-critical code lives in nonstandard folders
- generated files create false positives
- the team uses custom naming for identity, secrets, crypto, or access-control code

## CSV shape

```text
# pattern,tag,weight
**/auth/**,auth,1.0
**/crypto/**,crypto,1.0
**/*.pem,secrets,1.0
```

Start from `examples/sensitive-config.example.csv`.

## Safe output guidance

Summarize findings by:

- path
- sensitivity tag
- owner share
- bus factor
- timestamps

Avoid copying:

- secrets
- key material
- file bodies
- embedded credentials

## Validation note

Path heuristics are good for triage. If the user really needs confirmation that the repository contains secrets or sensitive artifacts, use dedicated scanning workflows outside this ownership skill.

## Do not do

- Do not claim a path is sensitive solely because a heuristic tagged it.
- Do not paste secret material into summaries, CSV exports, or LLM prompts.

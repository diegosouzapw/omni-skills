# Notebook Entry Template

Use this template for durable discoveries in `.notebook/`.

## INDEX conventions

Keep `.notebook/INDEX.md` as a lightweight directory of notes.

Recommended fields per entry:

- title
- tags
- date
- scope
- related files
- status: active or superseded

## Entry template

```md
# [Short title]

- Date: YYYY-MM-DD
- Status: active
- Tags: [area], [flow], [gotcha], [service]
- Scope: [what this note covers]
- Related files:
  - path/to/file.ext
  - path/to/other.ext

## Summary

[2-5 bullets of the durable insight]

## Evidence

- [file or symbol pointer]
- [test, config, docs, or command output reference]

## Assumptions and limits

- [what is still uncertain]

## Follow-up

- [optional next check or dependent area]
```

## Rules

- Store pointers and rationale, not copied code.
- Prefer file paths, symbols, and brief evidence notes.
- If a note becomes stale, mark it superseded and link the replacement.
- If code and note disagree, update the note after confirming current behavior.

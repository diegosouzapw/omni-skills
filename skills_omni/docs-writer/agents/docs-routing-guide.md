# Docs Routing Guide

Use this guide when the task starts as documentation work but may need a handoff.

## Stay in `docs-writer` when

- the main deliverable is user-facing documentation
- the core work is clarifying, structuring, or verifying prose docs
- you can validate the content against implementation or trusted specs

## Hand off when

### Accessibility dominates
Use `@accessibility` when the request needs semantic structure review, alt-text strategy, inclusive wording review, or accessibility-specific acceptance criteria.

### Security dominates
Use `@security-review` when the document contains production operations, secrets handling, incident procedures, or guidance that could create security risk if inaccurate.

### API reference generation dominates
Use `@api-reference` when the task is primarily generated or schema-driven reference documentation instead of authored guides.

### Release communication dominates
Use `@release-notes` when the main output is a changelog, release note, or version announcement.

### Architecture explanation dominates
Use `@architecture-docs` when the deliverable is mostly ADRs, system design rationale, or internal architecture communication.

### Implementation truth is unclear
Escalate to a subject-matter owner when code, tests, and existing docs conflict and no safe inference is possible.

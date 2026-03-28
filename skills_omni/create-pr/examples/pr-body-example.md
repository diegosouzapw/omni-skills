# Example PR Body

## Summary

This PR expands MCP config coverage for Antigravity and OpenCode, makes SQLite queue mode opt-in for A2A, and improves the five lowest-scoring skills with stronger support packs.

## Main Change Areas

- MCP local sidecar: explicit client targets and recipes
- A2A runtime and UI: simple-first queue defaults
- Skill content: richer workflow sections, examples, and reference packs

## Validation

- `npm run build`
- `npm test`
- `npm pack --dry-run`

## Review Focus

- Confirm the new MCP config shapes for Antigravity and OpenCode.
- Confirm A2A queue mode is no longer enabled implicitly for SQLite.

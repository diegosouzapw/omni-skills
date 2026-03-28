# Example Release Note Skeleton

## Summary

This release expands the public catalog, tightens hosted governance, and simplifies the default A2A runtime for local operators.

## Highlights

- Added explicit MCP config targets and recipes for Antigravity and OpenCode.
- Made shared A2A queue polling opt-in instead of implicit for SQLite persistence.
- Improved lower-scoring skills with stronger workflow sections, support packs, and worked examples.

## Validation

- `npm run build`
- `npm test`
- `npm pack --dry-run`

## Upgrade Actions

- No action required for CLI-only users.
- Enable `OMNI_SKILLS_A2A_QUEUE_ENABLED=1` only when you want multi-worker lease coordination.

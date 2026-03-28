## Summary

- what changed
- why it matters
- which bundles, runtimes, or clients are affected

## Skill Changes

- [ ] added new skill directories under `skills/`
- [ ] expected automatic `skills_omni/` derivative follow-up
- [ ] updated an existing skill support pack
- [ ] updated `data/bundles.json`
- [ ] updated runtime, CLI, or MCP behavior

List the skills touched:

- `skill-name`

## Validation

- [ ] `npm run validate`
- [ ] `npm run build`
- [ ] `npm test`
- [ ] `git diff --check`
- [ ] `npm run smoke` if runtime or packaging behavior changed

Paste notable score or catalog changes:

```text
quality avg: before -> after
best practices avg: before -> after
security avg: before -> after
```

## Private Enhancer Review

- [ ] this PR is inside the native auto-enhance scope (`skills/**` plus optional `data/bundles.json`)
- [ ] the automatic enhancer should open or update a `skills_omni/` companion PR
- [ ] this PR intentionally falls outside the native auto-enhance scope

## Reviewer Focus

- what should reviewers scrutinize most
- any open tradeoffs or follow-ups

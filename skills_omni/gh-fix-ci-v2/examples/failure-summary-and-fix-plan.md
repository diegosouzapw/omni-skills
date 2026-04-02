# Example: Failure Summary and Fix Plan

## Failure summary

- PR: #123
- PR URL: https://github.com/example/repo/pull/123
- Blocking checks:
  - `test (ubuntu, node-22)` — failed
  - `lint` — passed
  - `buildkite / integration` — external, out of scope

## GitHub Actions evidence

### Check: `test (ubuntu, node-22)`
- Workflow: `CI`
- Run URL: https://github.com/example/repo/actions/runs/999999999
- Event: `pull_request`
- Branch: `feature/fix-ci`
- SHA: `abc1234`
- Failure snippet:

```text
Error: Cannot find module 'sharp-linux-x64'
```

## Hypothesis

The failure appears environment-specific and affects only the `ubuntu + node-22` matrix leg. The dependency install step likely does not restore or build the expected platform package for that matrix combination.

## Proposed plan

1. inspect dependency and install logic for platform-specific package resolution
2. make the smallest change needed in dependency setup or CI install steps
3. verify locally if practical
4. let the PR checks rerun and confirm the failing matrix leg is resolved

## Files likely to change

- `package.json`
- `.github/workflows/ci.yml`

## Risks

- changing workflow install behavior may affect other matrix legs
- if permissions or secrets are involved, that should be reviewed separately

## Approval checkpoint

I have enough evidence to propose the plan above. I have not changed code or workflow files yet. Approve the plan if you want me to implement it.

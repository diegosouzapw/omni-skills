# TASK-09 Rollout Migration And Acceptance

Read this file before starting implementation.

## Goal

Ship the rebrand and editorial automation safely, with a clear migration path and final validation.

## Scope

- release sequencing
- legacy command compatibility validation
- README and docs smoke checks
- npm package migration verification
- private registry import verification
- dashboard visibility verification

## Deliverables

- rollout checklist
- migration notes
- acceptance report

## Acceptance

- public and private flows still operate after the rename
- both native and curated counts render from shared data
- public registry contribution flow is documented and operational
- the project presents itself consistently as `awesome-omni-skills`

## Status

Completed on 2026-03-31.

## Outcome

- added a rollout and migration status runbook at `docs/operations/AWESOME-OMNI-SKILLS-ROLLOUT.md`
- completed npm publication for `awesome-omni-skills@0.9.0` and deprecated the historical `omni-skills@0.1.5` package
- updated public user docs to show runnable migration notes and kept generated i18n mirrors aligned through the build path
- updated the private runtime, dashboard title, env examples, and repo references to the renamed public slug `diegosouzapw/awesome-omni-skills`
- added dashboard-side canonicalization for stale stored PR URLs that still referenced the old public slug

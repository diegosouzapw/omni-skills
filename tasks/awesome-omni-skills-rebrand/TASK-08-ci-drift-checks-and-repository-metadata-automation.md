# TASK-08 CI Drift Checks And Repository Metadata Automation

Read this file before starting implementation.

## Goal

Make brand and editorial drift fail in automation instead of being discovered later by manual review.

## Scope

- docs render checks
- registry lint checks
- identity consistency checks
- GitHub repository metadata automation
- optional topic and description enforcement

## Deliverables

- new CI commands for docs and registry verification
- workflow integration
- repository metadata management path

## Acceptance

- stale generated blocks fail CI
- malformed registry entries fail CI
- GitHub repo description can be kept aligned with source-controlled metadata

## Status

Completed on 2026-03-31.

## Outcome

- added local identity verification command and script
- added GitHub repository metadata print/check/apply automation from `data/project_identity.json`
- added a dedicated GitHub Actions workflow to check or sync repository header metadata
- integrated identity verification into normal CI/build paths
- documented repo metadata maintenance in contributor and runbook docs

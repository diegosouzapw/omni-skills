# TASK-05 Root Repository Sources Registry

Read this file before starting implementation.

## Goal

Create a root markdown document that lets contributors propose upstream repositories through normal GitHub PRs.

## Proposed File

- `REPOSITORY-SOURCES.md`

## Scope

- contribution instructions at the top
- machine-readable registry table in bounded markers
- schema validation rules
- generated status block for operator visibility

## Suggested Columns

- `slug`
- `repo_url`
- `branch`
- `skills_path`
- `status`
- `owner`
- `license`
- `notes`

## Acceptance

- a contributor can add a repository by editing one markdown file
- automation can parse the file without depending on free-form prose
- malformed rows can be rejected by CI

## Output

- [REPOSITORY-SOURCES.md](/home/diegosouzapw/dev/ai/omni-skills/REPOSITORY-SOURCES.md)
- [tools/scripts/repository_sources.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/repository_sources.py)
- [package.json](/home/diegosouzapw/dev/ai/omni-skills/package.json)
- [README.md](/home/diegosouzapw/dev/ai/omni-skills/README.md)
- [CONTRIBUTING.md](/home/diegosouzapw/dev/ai/omni-skills/CONTRIBUTING.md)
- [docs/README.md](/home/diegosouzapw/dev/ai/omni-skills/docs/README.md)

## Status

Completed on 2026-03-31.

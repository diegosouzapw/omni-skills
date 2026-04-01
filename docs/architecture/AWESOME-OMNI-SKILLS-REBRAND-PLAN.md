# Awesome Omni Skills Rebrand And Editorial Automation Plan

## Plan Status

Implementation is complete for tasks `01` through `09` as of **March 31, 2026**.

- GitHub, docs, generated status blocks, repository metadata sync, public repository-source intake, private runtime integration, and npm publication are complete
- the canonical public package is now `awesome-omni-skills@0.9.0`
- the historical package `omni-skills@0.1.5` remains only for deprecation messaging

For the live acceptance snapshot and migration checklist, see [Awesome Omni Skills Rollout](../operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).

## Objective

This plan defines the next project-wide evolution after the current public/private intake and enhancement flows are stable.

The goal is to:

1. rebrand the project from `omni-skills` to `awesome-omni-skills`
2. make the public positioning clearer: this is a repository of skills, a repository of curated improved skills, and a runtime surface
3. stop hand-editing project status text in multiple documents
4. create a public markdown registry that lets contributors propose upstream repositories through normal GitHub PRs
5. connect that public registry to the private external-sync system so repository intake can start from a reviewed document instead of only from the dashboard or CLI

This plan intentionally covers both repositories:

- public repo: `/home/diegosouzapw/dev/ai/omni-skills`
- private repo: `/home/diegosouzapw/dev/ai/omni-skills/omni-skills-private`

## Current State

The public repository already has the following moving parts:

- root package `awesome-omni-skills` in [package.json](/home/diegosouzapw/dev/ai/omni-skills/package.json)
- public docs centered on `README.md`, `docs/README.md`, `docs/CATALOG.md`, `docs/users/*`, `docs/contributors/*`, and many `docs/i18n/*` mirrors
- generated artifacts such as `metadata.json`, `skills_index.json`, `dist/*`, and `docs/CATALOG.md`
- ad hoc doc synchronization scripts such as:
  - [generate_index.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/generate_index.py)
  - [build_catalog.js](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/build_catalog.js)
  - [sync_repo_version.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/sync_repo_version.py)
  - [generate_i18n.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/generate_i18n.py)

The private repository already has:

- the external-source registry and sync runtime
- dashboard-based operations
- weekly sync automation
- curated PR handling

The weak spots today are mostly deeper operational follow-through:

- internal runtime contracts such as `OMNI_SKILLS_*`, `~/.omni-skills`, and internal service labels still intentionally keep the historical prefix
- historical planning docs and provenance records may mention the old package or repo name as part of migration history
- future cleanup can still reduce remaining legacy references in non-canonical operational surfaces without changing public contracts

## Guiding Principles

1. One public identity, one canonical project description.
2. One generated status manifest for counts, release number, timestamps, and surface metrics.
3. One explicit machine-readable contract for public repository submissions.
4. Public surfaces should be canonical first; backward compatibility belongs in controlled deprecation layers, not in the main docs.
5. Generated documentation should use markers and a renderer, not regex-only scattered replacements.
6. Public markdown can remain human-friendly, but automation must parse only bounded sections with stable markers.

## Scope

### In Scope

- GitHub repository rename planning
- npm package rename planning
- public documentation and repository description refresh
- generated doc status blocks for root docs
- stronger i18n regeneration based on current English source docs
- public repository source registry in markdown
- private runtime ingestion of that registry
- CI checks that prevent documentation drift

### Out Of Scope For First Wave

- renaming `skills/` or `skills_omni/`
- renaming every `OMNI_SKILLS_*` environment variable immediately
- renaming every internal storage path such as `~/.omni-skills` in the same rollout
- renaming every deferred internal `OMNI_SKILLS_*` contract in the same wave

Those items can be evaluated later, but they should not block the rebrand and doc-automation wave.

## Target End State

When this plan is complete, the project should look like this:

- GitHub repository name: `awesome-omni-skills`
- npm primary package: `awesome-omni-skills`
- primary install command in docs: `npx awesome-omni-skills`
- public CLI path is `npx awesome-omni-skills`
- root messaging makes three things explicit:
  - this is a public repository of installable skills
  - this repository also curates improved best-practice derivatives
  - this repository ships runtime surfaces around the same catalog
- top-level docs pull status values from generated data instead of hand-edited counts
- a root markdown file lists upstream repositories and contribution instructions
- the private sync system imports that markdown registry into SQLite and exposes it in the dashboard

## Proposed Architecture

### 1. Project Identity Manifest

Introduce a canonical project identity file, for example:

- `data/project_identity.json`

Suggested fields:

- `display_name`
- `short_name`
- `repo_slug`
- `npm_package`
- `primary_cli_command`
- `github_url`
- `issues_url`
- `discussions_url`
- `homepage_url`
- `tagline`
- `github_description`
- `docs_positioning_summary`

This file becomes the source of truth for:

- README hero naming
- repo description automation
- package description wording
- install examples
- i18n project name
- release notes references

### 2. Project Status Manifest

Introduce a generated status file, for example:

- `data/project_status.json`

It should be regenerated from the same build path that already creates `metadata.json`, `skills_index.json`, `dist/*`, and `docs/CATALOG.md`.

Suggested fields:

- `generated_at`
- `package_version`
- `native_skill_count`
- `curated_skill_count`
- `bundle_count`
- `install_client_count`
- `mcp_client_count`
- `runtime_surface_count`
- `validation_passed`
- `validation_warn`
- `validation_error`
- `category_count`
- `latest_release`
- `catalog_hash`

The important design constraint is this:

- root docs should read this file
- docs should stop embedding raw counts directly in multiple places
- the i18n generator should also read this file instead of freezing old numbers into translated copies

### 3. Generated Markdown Blocks

Replace ad hoc manual status editing with bounded generated blocks in key docs.

Recommended marker format:

```md
<!-- generated:project-status:start -->
... rendered content ...
<!-- generated:project-status:end -->
```

Use this for:

- [README.md](/home/diegosouzapw/dev/ai/omni-skills/README.md)
- [docs/README.md](/home/diegosouzapw/dev/ai/omni-skills/docs/README.md)
- [CONTRIBUTING.md](/home/diegosouzapw/dev/ai/omni-skills/CONTRIBUTING.md)
- selected architecture and user docs that currently duplicate counts or release references

Add a renderer script, for example:

- `tools/scripts/render_project_docs.py`

This renderer should:

- load `data/project_identity.json`
- load `data/project_status.json`
- update known generated blocks
- keep hand-written prose outside those blocks untouched
- fail fast if required markers are missing

### 4. Rebrand Strategy

The rebrand should happen in controlled waves.

#### Wave 1: External Identity

- rename public GitHub repository from `omni-skills` to `awesome-omni-skills`
- rename root npm package from `omni-skills` to `awesome-omni-skills`
- update README hero, badges, npm links, repo URLs, contribution examples, and workflow labels
- update the repository description to clearly say:
  - public skills repository
  - curated improved best-practice skills
  - install/runtime surfaces

#### Wave 2: Compatibility Layer

- preserve `omni-skills` as a legacy binary alias
- preserve legacy install examples in a migration section
- document the migration path in README and release notes
- keep the legacy npm package name reserved or publish a deprecation shim if needed

#### Wave 3: Internal Naming Cleanup

- evaluate whether workspace package scope should move from `@omni-skills/*` to `@awesome-omni-skills/*`
- evaluate whether internal server names, auth realms, and UI labels should follow the new brand
- do not mix this into Wave 1 unless the compatibility story is already implemented

### 5. Documentation Positioning Refresh

The public message in the README and docs should become sharper and less ambiguous.

Required positioning points:

1. This is a repository of reusable `SKILL.md` skills.
2. It accepts native skill intake in `skills/`.
3. It maintains improved, curated, best-practice derivatives in `skills_omni/`.
4. It exposes runtime surfaces around the same catalog: CLI, API, MCP, A2A.
5. It supports both direct contribution and repository-based upstream intake.

This message should appear consistently in:

- root README hero and first explanation section
- repository description
- npm description
- contributing guide
- docs index
- skill PR workflow

### 6. Public Repository Source Registry

Create a root markdown file, recommended name:

- `REPOSITORY-SOURCES.md`

This file should do two jobs at once:

1. explain how someone can contribute an upstream repository by GitHub PR
2. provide a machine-readable registry that the private runtime can import

Recommended structure:

- title and purpose
- short contribution guide at the top
- validation rules
- one machine-readable table inside explicit parser markers
- optional generated status section below

Suggested parser markers:

```md
<!-- registry:repositories:start -->
| slug | repo_url | branch | skills_path | status | owner | notes |
| ---- | -------- | ------ | ----------- | ------ | ----- | ----- |
| ...  | ...      | ...    | ...         | ...    | ...   | ...   |
<!-- registry:repositories:end -->
```

Suggested columns:

- `slug`
- `repo_url`
- `branch`
- `skills_path`
- `status`
- `owner`
- `license`
- `notes`

Suggested semantics:

- contributors add new rows through a normal PR
- merge into `main` is the approval gate
- private automation reads only merged rows from `main`
- rows can start as `candidate` and move to `tracked` or `disabled`

### 7. Private Sync Integration

Extend the private external-sync runtime so it can import the public registry markdown.

Recommended behavior:

- fetch `REPOSITORY-SOURCES.md` from the public `main`
- parse only the bounded machine-readable section
- validate required fields
- upsert registry rows into SQLite
- create new sources in `pending_review` or `disabled` state by default
- expose imported public-registry sources in the dashboard with provenance

Important guardrail:

- a merged row in public docs should not silently start full sync without operator visibility
- import should create a visible candidate in the dashboard, not bypass review

### 8. Generated Status For Repository Registry

The repository registry file should not be only static input. It should also surface automation status in a generated block.

Recommended second section:

```md
<!-- registry:status:start -->
... generated summary ...
<!-- registry:status:end -->
```

Useful generated data:

- last registry import time
- how many repositories are tracked
- how many are disabled
- how many are in warning state
- link to dashboard
- last successful sync time

This lets the document stay useful both for contributors and operators.

### 9. i18n Hardening

The current i18n generator hardcodes project identity and version. That is a clear drift vector.

The fix should be:

- `generate_i18n.py` reads `data/project_identity.json`
- `generate_i18n.py` reads `data/project_status.json`
- i18n generation happens only after English docs blocks are rendered
- CI fails if English docs changed but i18n snapshots were not regenerated when required by policy

Depending on how expensive the i18n flow is, the repo can choose one of two policies:

- strict: all i18n snapshots must stay aligned in the same PR
- staged: only English docs are required in ordinary PRs, and a dedicated i18n sync workflow regenerates translated snapshots on demand

Given the current drift history, a staged workflow with explicit automation is likely safer.

### 10. CI And Drift Detection

Add a documentation consistency gate to CI.

Suggested commands:

- `npm run docs:status`
- `npm run docs:render`
- `npm run docs:check`
- `npm run registry:lint`

Suggested checks:

- identity manifest and package metadata agree
- generated status blocks are up to date
- `REPOSITORY-SOURCES.md` table parses cleanly
- no stale counts remain in protected docs
- i18n generation policy is satisfied

### 11. GitHub Metadata Automation

Because repository description and topics live outside normal source files, the rebrand should include repository settings automation.

Recommended approach:

- store desired GitHub metadata in a tracked file
- add a manual or release-time workflow that applies:
  - repository name description
  - homepage
  - topics

This avoids the common problem where README and npm are updated but the GitHub project header still advertises the old brand.

## Delivery Phases

### Phase A: Inventory And Contract

- inventory all public brand references
- define compatibility contract
- decide which names change now and which stay temporarily stable

### Phase B: Rebrand Core

- update package name
- update docs messaging
- update repo metadata plan
- add compatibility aliases

### Phase C: Editorial Automation

- add identity/status manifests
- add docs renderer
- move duplicated counts into generated blocks

### Phase D: Public Repository Registry

- add `REPOSITORY-SOURCES.md`
- add parser and linting
- document contribution workflow

### Phase E: Private Runtime Integration

- import public registry markdown into SQLite
- show imported rows in dashboard
- preserve operator review gate

### Phase F: CI And Rollout

- add drift checks
- update workflows
- validate migration and backward compatibility

## Risks And Mitigations

### Risk: Breaking current installs

Mitigation:

- keep legacy `omni-skills` CLI alias during migration
- document both old and new invocation temporarily
- do not remove old command in the same release as the rename

### Risk: Repo rename breaks hardcoded links

Mitigation:

- centralize URLs in identity manifest
- add repo-link linting
- update docs and workflows in one controlled rollout

### Risk: Generated docs become too invasive

Mitigation:

- render only bounded blocks
- keep narrative prose human-authored
- avoid regenerating whole docs when only stats changed

### Risk: Public repository registry becomes free-form and unparsable

Mitigation:

- parse only a marked table
- add CI lint
- reject malformed entries before merge

### Risk: Public PRs start unreviewed sync automatically

Mitigation:

- import new rows as `pending_review` or `disabled`
- require dashboard enablement before live sync

## Acceptance Criteria

This plan is complete when all of the following are true:

1. public brand is `awesome-omni-skills` in GitHub, npm, README, and docs
2. legacy `omni-skills` invocation still works during migration
3. root docs describe the project as:
   - a skill repository
   - a curated improved skills repository
   - a runtime/catalog surface
4. counts and release references in protected docs are generated from shared data
5. `REPOSITORY-SOURCES.md` exists at the repo root and can be updated by contributors through PRs
6. the private runtime can import approved repository rows from that document
7. CI detects documentation drift and registry schema errors
8. i18n generation no longer hardcodes stale project identity or version

## Task Breakdown

The execution backlog for this plan lives under:

- [tasks/awesome-omni-skills-rebrand/TASK-01-brand-inventory-and-compatibility-contract.md](/home/diegosouzapw/dev/ai/omni-skills/tasks/awesome-omni-skills-rebrand/TASK-01-brand-inventory-and-compatibility-contract.md)
- [tasks/awesome-omni-skills-rebrand/TASK-02-repo-package-cli-and-github-rebrand.md](/home/diegosouzapw/dev/ai/omni-skills/tasks/awesome-omni-skills-rebrand/TASK-02-repo-package-cli-and-github-rebrand.md)
- [tasks/awesome-omni-skills-rebrand/TASK-03-positioning-and-documentation-refresh.md](/home/diegosouzapw/dev/ai/omni-skills/tasks/awesome-omni-skills-rebrand/TASK-03-positioning-and-documentation-refresh.md)
- [tasks/awesome-omni-skills-rebrand/TASK-04-project-identity-status-and-doc-renderer.md](/home/diegosouzapw/dev/ai/omni-skills/tasks/awesome-omni-skills-rebrand/TASK-04-project-identity-status-and-doc-renderer.md)
- [tasks/awesome-omni-skills-rebrand/TASK-05-root-repository-sources-registry.md](/home/diegosouzapw/dev/ai/omni-skills/tasks/awesome-omni-skills-rebrand/TASK-05-root-repository-sources-registry.md)
- [tasks/awesome-omni-skills-rebrand/TASK-06-private-sync-import-from-public-registry.md](/home/diegosouzapw/dev/ai/omni-skills/tasks/awesome-omni-skills-rebrand/TASK-06-private-sync-import-from-public-registry.md)
- [tasks/awesome-omni-skills-rebrand/TASK-07-i18n-and-generated-docs-hardening.md](/home/diegosouzapw/dev/ai/omni-skills/tasks/awesome-omni-skills-rebrand/TASK-07-i18n-and-generated-docs-hardening.md)
- [tasks/awesome-omni-skills-rebrand/TASK-08-ci-drift-checks-and-repository-metadata-automation.md](/home/diegosouzapw/dev/ai/omni-skills/tasks/awesome-omni-skills-rebrand/TASK-08-ci-drift-checks-and-repository-metadata-automation.md)
- [tasks/awesome-omni-skills-rebrand/TASK-09-rollout-migration-and-acceptance.md](/home/diegosouzapw/dev/ai/omni-skills/tasks/awesome-omni-skills-rebrand/TASK-09-rollout-migration-and-acceptance.md)

## Recommended Execution Order

1. TASK-01
2. TASK-02
3. TASK-03
4. TASK-04
5. TASK-05
6. TASK-06
7. TASK-07
8. TASK-08
9. TASK-09

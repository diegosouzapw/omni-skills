# Awesome Omni Skills Brand Inventory And Compatibility Contract

## Purpose

This document closes `TASK-01` of the rebrand plan.

It records:

- the public brand surfaces that were audited during the rebrand
- the migration decision for each surface
- the compatibility contract that governed the move to `awesome-omni-skills`

## Snapshot

Inventory snapshot collected on `2026-03-31` from the public repository source tree.

Current scan findings at the time `TASK-01` was closed:

- `26` user-facing source files outside `docs/i18n/*` still contain live `omni-skills` branding
- `30` runtime and workspace source files still contain live `omni-skills` branding
- `3` GitHub workflow files still contain live `omni-skills` branding
- `58` generated artifacts currently embed `omni-skills` branding and will need regeneration after the rename

Important note:

- `docs/i18n/*` are not the primary source of truth and should not be manually edited for the rebrand
- generated files in `dist/*`, `metadata.json`, and per-skill manifests should be regenerated after source changes
- curated provenance files under `skills_omni/*` include historical references to `omni-skills-private`; those are provenance records, not purely marketing strings

## Surface Inventory

| Surface | Examples | Decision | Why |
| :------ | :------- | :------- | :-- |
| GitHub repository slug and URLs | [package.json](/home/diegosouzapw/dev/ai/omni-skills/package.json), [README.md](/home/diegosouzapw/dev/ai/omni-skills/README.md), [SECURITY.md](/home/diegosouzapw/dev/ai/omni-skills/SECURITY.md), [tools/lib/catalog-client.js](/home/diegosouzapw/dev/ai/omni-skills/tools/lib/catalog-client.js) | `rename-now` | External identity must be coherent immediately. Source-controlled URLs should not keep depending on GitHub redirects. |
| Public npm package name | [package.json](/home/diegosouzapw/dev/ai/omni-skills/package.json) | `rename-now-with-legacy-package-plan` | The npm entry point is one of the main public identities. |
| Public CLI command examples | [README.md](/home/diegosouzapw/dev/ai/omni-skills/README.md), [docs/README.md](/home/diegosouzapw/dev/ai/omni-skills/docs/README.md), [docs/users/GETTING-STARTED.md](/home/diegosouzapw/dev/ai/omni-skills/docs/users/GETTING-STARTED.md), [docs/users/USAGE.md](/home/diegosouzapw/dev/ai/omni-skills/docs/users/USAGE.md), [docs/operations/RUNBOOK.md](/home/diegosouzapw/dev/ai/omni-skills/docs/operations/RUNBOOK.md) | `rename-now` | Docs should lead only with `npx awesome-omni-skills` once the renamed package is live. |
| Bin names | [package.json](/home/diegosouzapw/dev/ai/omni-skills/package.json), [tools/bin/cli.js](/home/diegosouzapw/dev/ai/omni-skills/tools/bin/cli.js), [tools/bin/install.js](/home/diegosouzapw/dev/ai/omni-skills/tools/bin/install.js), [tools/bin/ui.mjs](/home/diegosouzapw/dev/ai/omni-skills/tools/bin/ui.mjs) | `rename-now` | The public package should expose only the canonical Awesome Omni Skills commands once the publish is complete. |
| Project display name and copy | [README.md](/home/diegosouzapw/dev/ai/omni-skills/README.md), [docs/README.md](/home/diegosouzapw/dev/ai/omni-skills/docs/README.md), [CONTRIBUTING.md](/home/diegosouzapw/dev/ai/omni-skills/CONTRIBUTING.md), [docs/architecture/CODEBASE-ANALYSIS.md](/home/diegosouzapw/dev/ai/omni-skills/docs/architecture/CODEBASE-ANALYSIS.md) | `rename-now` | Top-level messaging is a direct public surface and must align with the new positioning immediately. |
| Generated README/doc metadata markers | [README.md](/home/diegosouzapw/dev/ai/omni-skills/README.md), [docs/README.md](/home/diegosouzapw/dev/ai/omni-skills/docs/README.md), [tools/scripts/sync_repo_version.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/sync_repo_version.py) | `replace-during-doc-automation` | These markers are currently version-only helpers and should be folded into the new identity/status render flow. |
| Workspace package scope | [packages/catalog-core/package.json](/home/diegosouzapw/dev/ai/omni-skills/packages/catalog-core/package.json), [packages/server-api/package.json](/home/diegosouzapw/dev/ai/omni-skills/packages/server-api/package.json), [packages/server-mcp/package.json](/home/diegosouzapw/dev/ai/omni-skills/packages/server-mcp/package.json), [packages/server-a2a/package.json](/home/diegosouzapw/dev/ai/omni-skills/packages/server-a2a/package.json) | `defer` | Internal workspace scope rename is high churn and not required for the first public rebrand wave. |
| Environment variable prefix | [packages/server-api/src/http-runtime.js](/home/diegosouzapw/dev/ai/omni-skills/packages/server-api/src/http-runtime.js), [packages/server-mcp/src/local-sidecar.js](/home/diegosouzapw/dev/ai/omni-skills/packages/server-mcp/src/local-sidecar.js), [packages/server-a2a/src/task-runtime.js](/home/diegosouzapw/dev/ai/omni-skills/packages/server-a2a/src/task-runtime.js) | `defer` | `OMNI_SKILLS_*` is already an operational contract. Renaming it now would create avoidable breakage across services and CI. |
| Local state paths | [tools/lib/cli-state.js](/home/diegosouzapw/dev/ai/omni-skills/tools/lib/cli-state.js), [packages/server-a2a/src/task-runtime.js](/home/diegosouzapw/dev/ai/omni-skills/packages/server-a2a/src/task-runtime.js), [docs/operations/RUNBOOK.md](/home/diegosouzapw/dev/ai/omni-skills/docs/operations/RUNBOOK.md) | `defer` | `~/.omni-skills` and related paths are user state locations and should not move in the same wave as the public rename. |
| Runtime server names and auth realms | [tools/bin/cli.js](/home/diegosouzapw/dev/ai/omni-skills/tools/bin/cli.js), [tools/bin/ui.mjs](/home/diegosouzapw/dev/ai/omni-skills/tools/bin/ui.mjs), [packages/server-api/src/http-runtime.js](/home/diegosouzapw/dev/ai/omni-skills/packages/server-api/src/http-runtime.js) | `defer-with-acceptance-of-legacy` | These values affect downstream configs and auth prompts. They can follow later after the primary brand migration lands safely. |
| Redis prefixes and runtime source strings | [packages/server-a2a/src/task-coordinator.js](/home/diegosouzapw/dev/ai/omni-skills/packages/server-a2a/src/task-coordinator.js), [packages/server-a2a/src/task-runtime.js](/home/diegosouzapw/dev/ai/omni-skills/packages/server-a2a/src/task-runtime.js) | `defer` | They are operational internals, not the first user-facing rename priority. |
| Release artifact names and temp directories | [.github/workflows/release.yml](/home/diegosouzapw/dev/ai/omni-skills/.github/workflows/release.yml), [.github/workflows/auto-release-skill-merges.yml](/home/diegosouzapw/dev/ai/omni-skills/.github/workflows/auto-release-skill-merges.yml) | `rename-now-with-fallback` | The package tarball and release assets are external outputs, but globs and workflow expectations must be updated atomically. |
| Generated manifests and catalog artifacts | [generate_index.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/generate_index.py), [build_catalog.js](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/build_catalog.js), `dist/*`, `metadata.json` | `regenerate-never-hand-edit` | These files should follow the new source-of-truth after code and docs are updated. |
| `docs/i18n/*` translated docs | [generate_i18n.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/generate_i18n.py) | `defer-until-generator-fixed` | The current generator hardcodes project name and version. Rebranding i18n before fixing the generator would reintroduce drift immediately. |
| Private enhancer references in public docs | [docs/contributors/SKILL-PR-WORKFLOW.md](/home/diegosouzapw/dev/ai/omni-skills/docs/contributors/SKILL-PR-WORKFLOW.md) | `rename-in-docs-when-private-repo-plan-is-ready` | Public docs should stay accurate, but public/private repo naming must be coordinated together. |
| Historical provenance in curated files | `skills_omni/*/ATTRIBUTION.md`, `skills_omni/*/OMNI_ENHANCED.json`, `skills_omni/*/SKILL.md` | `preserve-history` | Historical attribution should not be rewritten just for branding. Only future generated provenance should use the new repo identity once it exists. |

## Compatibility Contract

### Public Invocation Contract

The migration must preserve the following:

1. `npx awesome-omni-skills` becomes the primary documented command.
2. The public package should publish under `awesome-omni-skills`.
3. The old npm package name may remain only as a deprecated record, not as a primary public contract.

### Documentation Contract

The docs must follow this sequence:

1. switch the primary name in README, docs hub, and top-level user docs
2. remove temporary migration notes once the renamed npm package is live
3. stop duplicating counts and release numbers manually before or at the same time as the rebrand copy refresh

### GitHub Contract

The repository rename should assume redirects exist, but source-controlled docs and scripts must still be updated to the new canonical URLs.

That means:

- README and docs links must be rewritten
- package metadata must be rewritten
- raw-content defaults in runtime code must be rewritten
- workflows should not depend on legacy tarball names after the migration release

### Runtime Stability Contract

The following must remain stable during the first rebrand wave:

- `OMNI_SKILLS_*` environment variables
- `~/.omni-skills` state paths
- current `skills/` and `skills_omni/` directory names
- current Redis prefixes and service internals unless a dedicated migration is shipped

These are operational contracts and should not be broken by a branding-only release.

### Historical Provenance Contract

Curated output already contains provenance that points at `omni-skills-private` and related historical repo names.

Rule:

- do not rewrite old provenance just to make the brand consistent
- update generators so only future records use the new canonical repo identity

## Migration Window

Recommended migration window outcome:

1. Release `v0.9.0`:
   - public repo and package move to `awesome-omni-skills`
   - docs switch primary command to `npx awesome-omni-skills`
   - the old npm package name becomes deprecated history, not a public command alias
2. Post-release:
   - keep only controlled deprecation messaging for the old package name
   - keep private automation aligned to the canonical slug and package identity

## Execution Notes For TASK-02

The next task can safely start with these assumptions:

- `skills/` and `skills_omni/` stay unchanged in the first wave
- env vars and local state names stay unchanged in the first wave
- the public-facing rename should focus first on:
  - GitHub slug and URLs
  - package name and description
  - docs positioning
  - CLI and installer public command examples
  - release artifact names where they are externally visible

## Acceptance

`TASK-01` is considered complete when:

- every major visible brand surface has a decision
- compatibility rules for CLI, package, repo URLs, and docs are explicit
- deferred items are documented instead of being rediscovered during implementation

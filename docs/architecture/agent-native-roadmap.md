# Agent-Native Roadmap

This document defines the next architecture step for Omni Skills: evolve from a skills-only installer into a machine-readable catalog that can power API, MCP, and A2A surfaces without duplicating logic.

## Goals

- Keep the current `npx omni-skills` workflow working.
- Introduce a machine-readable source of truth for skills.
- Support future discovery, recommendation, and install planning by agents.
- Separate remote catalog concerns from local filesystem writes.
- Make the same metadata reusable across CLI, API, MCP, and A2A.

## Non-Goals

- Do not implement remote install-on-user-machine from a hosted server.
- Do not add A2A before the catalog contract is stable.
- Do not replace `SKILL.md` as the canonical authoring format.
- Do not require contributors to write manifests by hand yet.

## Target Architecture

Omni Skills should converge on one catalog core with three protocol surfaces on top:

1. `REST API`
   Read-mostly access to skills, bundles, manifests, versions, and search.

2. `MCP`
   Agent-facing discovery, recommendation, and install planning.
   Future local mode can add write-capable tools for filesystem installation.

3. `A2A`
   Agent-to-agent orchestration for higher-level workflows after the lower layers are stable.

## Core Principle

All protocols must consume the same generated manifest artifacts.

The generation pipeline is:

1. Authors maintain `skills/<name>/SKILL.md` and any references, assets, or agents.
2. Build scripts extract frontmatter and file metadata.
3. The repo emits:
   - `skills_index.json` for repo-local workflows
   - `dist/catalog.json` for service and registry use
   - `dist/manifests/<skill>.json` for per-skill machine access
4. Future API, MCP, and A2A layers read those generated artifacts instead of reparsing the repo ad hoc.

## Delivery Modes

There are two distinct operating modes and they must stay separate:

### 1. Remote Catalog Mode

Used by hosted API and remote MCP servers.

Allowed capabilities:

- search skills
- fetch manifests
- compare skills
- recommend bundles
- build install plans

Not allowed:

- write to the user's filesystem
- mutate local agent config
- infer local machine state without an explicit local component

### 2. Local Installer Mode

Used by CLI and any future local MCP sidecar.

Allowed capabilities:

- detect supported local clients
- inspect installed skills
- preview file operations
- install or remove skill directories
- edit local config after explicit confirmation

This local mode is the only place where real OS writes should happen.

## Protocol Split

### REST API

Best for:

- registry access
- web UI
- third-party integrations
- search and filtering
- versioned download endpoints

Suggested first endpoints:

- `GET /v1/skills`
- `GET /v1/skills/:id`
- `GET /v1/search`
- `GET /v1/bundles`
- `POST /v1/install/plan`
- `GET /healthz`

### MCP

Best for:

- agent tool selection
- promptable discovery workflows
- install previews
- context-rich skill retrieval

Suggested first tools:

- `search_skills`
- `get_skill`
- `compare_skills`
- `recommend_skills`
- `preview_install`

Suggested future local tools:

- `detect_clients`
- `list_installed_skills`
- `install_skills`
- `remove_skills`
- `configure_client_mcp`

### A2A

Best for:

- orchestrating multiple agents
- handing off discovery to recommendation to install planning
- exposing Omni Skills as a specialized agent

Suggested first agent capabilities:

- `discover-skills`
- `recommend-stack`
- `prepare-install-plan`

A2A should come after API and MCP read-only are stable.

## Security Model

- Hosted services must be read-only by default.
- Filesystem writes must stay local.
- All write operations should support preview or dry-run first.
- Generated artifacts should include checksums for file integrity.
- Future signed releases should be layered on top of these checksums.
- Risk metadata from `SKILL.md` must remain visible in every protocol surface.

## Phase Plan

### Phase 1: Contracts and Artifacts

- document the target architecture
- define the manifest schema
- generate machine-readable artifacts in `dist/`

### Phase 2: Catalog Service

- add a read-only HTTP API backed by generated artifacts
- expose search and manifest lookup

### Phase 3: MCP Discovery

- add a read-only MCP server backed by the same artifacts
- expose skill search, comparison, and recommendation

### Phase 4: Local Install Surface

- add a local sidecar or extend the CLI for manifest-aware install planning
- support detection, preview, and installation with explicit confirmation

### Phase 5: A2A Orchestration

- expose Omni Skills as an A2A-capable specialized agent
- orchestrate discovery and install planning on top of the catalog contract

## Immediate Repository Tasks

- create and version the skill manifest schema
- generate `dist/catalog.json`
- generate `dist/manifests/<skill>.json`
- enrich `skills_index.json` with manifest paths and install metadata
- document the contract in `docs/specs/`

## Open Questions

- Selective installation currently downloads tagged raw repository artifacts. Should future releases move to signed per-skill archives instead?
- Should private or premium catalogs reuse the same manifest format with auth layered outside the schema?
- Should the local installer eventually write tool-specific MCP config files, or stay limited to skill directory installation?

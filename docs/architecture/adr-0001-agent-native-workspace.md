# ADR-0001: Agent-Native Workspace Foundation

## Status

Accepted

## Context

Omni Skills started as an installer-first repository. That was enough to distribute `SKILL.md` content, but it was not enough to expose the catalog to agents through protocol-native surfaces.

We needed a foundation that could support:

- a read-only HTTP catalog API
- a read-only MCP server
- an A2A-facing agent surface
- future local install sidecars

The critical constraint was to avoid reparsing repo files independently in each new service.

## Decision

Adopt a workspace-oriented structure with a shared catalog core and protocol-specific packages:

- root package `omni-skills`: existing CLI installer and repo scripts
- `@omni-skills/catalog-core`: shared catalog loading, search, recommendation, comparison, bundles, and install-plan primitives
- `@omni-skills/server-api`: read-only REST API
- `@omni-skills/server-mcp`: read-only MCP server with stdio and HTTP entry points
- `@omni-skills/server-a2a`: initial A2A scaffold with Agent Card and `message/send`

The catalog core reads generated artifacts from:

- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`

## Consequences

### Positive

- API, MCP, and A2A now share one data contract.
- The root CLI remains publishable and unchanged for end users.
- New protocol surfaces can be iterated without coupling to installer internals.
- The repository now has a clean place to add future local write-capable components.

### Negative

- There is temporary duplication between Python build metadata and JavaScript runtime metadata.
- A2A support is intentionally partial for now; it is a useful scaffold, not a complete task lifecycle implementation.
- The installer now supports selective skill and bundle installation, so the catalog contract must keep commands, manifests, and docs aligned.

## Follow-Up

1. Add remote MCP authentication and rate limiting.
2. Add a local write-capable MCP sidecar.
3. Add preview and write-capable local MCP installation on top of the selective artifact flow.
4. Move from raw tagged artifact downloads to signed release artifacts or per-skill archives.
5. Upgrade the A2A scaffold from message-only responses to task-aware execution.

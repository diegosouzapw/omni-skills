# Local MCP Sidecar

This document describes the optional local-mode behavior of `@omni-skills/server-mcp`.

## Purpose

Local mode adds filesystem-aware tools on top of the existing read-only MCP catalog surface.

Use it when an agent needs to:

- detect compatible local clients
- inspect installed skills
- preview skill installation or removal
- apply local skill installation or removal
- write a local MCP config file after preview

## Transports

The MCP server now supports three explicit transports:

- `stdio`
- `stream`
- `sse`

`stream` is the current Streamable HTTP transport.
`sse` is the legacy SSE transport for older clients that still require it.

## Enable Local Mode

From the repo root:

```bash
npm run mcp:local
```

For explicit transport modes:

```bash
npm run mcp:stream:local
npm run mcp:sse:local
```

Or through the repo CLI:

```bash
npm run cli -- mcp stream --local
npm run cli -- mcp sse --local
```

Or directly from the published package:

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

Both commands enable local mode by setting `OMNI_SKILLS_MCP_MODE=local`.

## Local Tools

When local mode is enabled, the MCP server exposes these extra tools:

- `detect_clients`
- `list_installed_skills`
- `install_skills`
- `remove_skills`
- `configure_client_mcp`

`install_skills`, `remove_skills`, and `configure_client_mcp` default to dry-run behavior when `dry_run` is omitted.

## Supported Targets

The local sidecar currently knows these client roots:

- `~/.claude/skills`
- `~/.cursor/skills`
- `~/.gemini/skills`
- `~/.gemini/antigravity/skills`
- `~/.kiro/skills`
- `~/.codex/skills` or `$CODEX_HOME/skills`
- `<workspace>/.agents/skills`

It also knows these MCP config targets:

- `<workspace>/.mcp.json`
- `<workspace>/.vscode/mcp.json`
- per-client `mcp.json` files under the known client roots

## Allowlist Model

The local sidecar only writes under an explicit allowlist.

By default, the allowlist includes:

- the known client roots under the current user home
- `$CODEX_HOME` when set, otherwise `~/.codex`
- the current workspace root
- `<workspace>/.agents`
- `<workspace>/.vscode`

To allow additional custom roots, set:

```bash
export OMNI_SKILLS_LOCAL_ALLOWLIST=/absolute/path/one:/absolute/path/two
```

## Config Writing

`configure_client_mcp` writes a simple `mcpServers` JSON object.

Example stream entry:

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/mcp"
    }
  }
}
```

Example SSE entry:

```json
{
  "mcpServers": {
    "omni-skills": {
      "url": "http://127.0.0.1:3334/sse"
    }
  }
}
```

Example stdio entry:

```json
{
  "mcpServers": {
    "omni-skills": {
      "command": "/path/to/node",
      "args": ["/path/to/packages/server-mcp/src/server.js"],
      "env": {
        "OMNI_SKILLS_MCP_MODE": "local"
      }
    }
  }
}
```

## Current Scope

This is a pragmatic first local sidecar:

- it uses the repo-generated manifests and local repo artifacts
- it supports preview-before-write
- it enforces an allowlist for writes
- it supports stdio, stream, and SSE transports
- it does not yet manage task lifecycle, auth, or signed artifacts

# MCP Rollout Example

## Scope

- Server: `catalog-mcp`
- Tools: `search_skills`, `get_skill`, `preview_install`
- Transports: `stdio`, `stream`, `sse`

## Decisions

- Keep install operations in local sidecar only
- Expose search and preview tools remotely
- Ship config writers separately from protocol docs

## Rollout Notes

- Validate one strict client and one rich client before broad support claims
- Publish capability matrix with unsupported assumptions
- Keep request IDs visible in logs for transport debugging

---
name: "mcp-server-authoring"
description: "MCP server authoring workflow skill. Use this skill when a team needs to design, implement, validate, or document a Model Context Protocol server with stable tools, resources, prompts, transports, and client compatibility."
version: "0.0.1"
category: "tools"
tags:
  - "mcp"
  - "protocol"
  - "server"
  - "tools"
  - "resources"
  - "prompts"
  - "sdk"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "antigravity"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-28"
date_updated: "2026-03-28"
upstream_skill: "skills/mcp-server-authoring"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# MCP Server Authoring

## Overview

Use this skill when a team needs to author an MCP server as a product, not just expose a few ad hoc tools. It is for tool contracts, resource design, prompt surfaces, transport choices, client compatibility, and safe operational defaults.

Good output should produce a server that clients can understand, debug, and trust. The goal is to avoid fragile protocol glue, inconsistent schemas, and server behavior that only works in one client or one transport.

## When to Use This Skill

- Use when designing a new MCP server from scratch.
- Use when adding tools, resources, or prompts to an existing MCP server and you need contract discipline.
- Use when transport behavior differs between `stdio`, streamable HTTP, and SSE.
- Use when client support must span multiple IDE or CLI products with different config shapes.
- Use when a team needs an implementation packet before writing server code.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| New server | contract design | Tools, resources, prompts, and transports are scoped intentionally |
| Tool sprawl | schema discipline | Tool inputs, outputs, and failure modes are consistent |
| Client drift | compatibility | Client config, transport expectations, and auth assumptions are explicit |
| Production hardening | ops defaults | Timeouts, read-only boundaries, and logging are clear |
| SDK migration | implementation mapping | The protocol contract survives framework or runtime changes |

## Core Concepts

### MCP Surface Area Is A Product Contract

Every tool, resource, and prompt becomes part of a client-facing interface. Once clients depend on it, changes need compatibility thinking just like an API.

### Tool Design Needs Operational Boundaries

The best MCP tool is not the most powerful one. It is the one whose write scope, latency expectations, and failure behavior are easy for a client and operator to reason about.

### Client Compatibility Is Part Of Server Design

Different clients expose different config models and transport expectations. A useful MCP server treats compatibility as a first-class design concern, not as a post-hoc adapter problem.

## Workflow

1. Define the server purpose, target clients, and which behaviors must remain read-only or local-write only.
2. Design the protocol surface: tools, resources, prompts, transport support, and auth or governance needs.
3. Review schemas, error shapes, and timeouts so the server behaves predictably across clients.
4. Map the server contract onto the implementation runtime and configuration writers.
5. Close with an operator packet: supported clients, unsupported assumptions, rollout notes, and test plan.

## Examples

### Example 1: New server design review

```text
Use @mcp-server-authoring to design the first version of our MCP server, including tools, resources, prompts, transport support, and client compatibility notes.
```

**Explanation:** Use this when the protocol surface still needs design, not only code.

### Example 2: Server packet renderer

```bash
python3 skills/mcp-server-authoring/scripts/render_mcp_server_packet.py \
  "catalog-mcp" \
  "search_skills,get_skill,preview_install" \
  "stdio,stream,sse"
```

**Explanation:** Use this to produce a server design packet before implementation review.

### Example 3: Compatibility review

```text
Use @mcp-server-authoring to tell me whether this tool-heavy server should expose all tools in every client or keep a smaller compatibility surface for strict clients.
```

**Explanation:** Use this when the risk is client behavior drift rather than raw protocol correctness.

## Best Practices

- Keep tools narrowly scoped and explicit about write boundaries.
- Prefer clear input and output schemas over tool cleverness.
- Document which transports are supported and why.
- Keep client-specific config writers separate from the canonical server contract.
- Decide early which failures are user mistakes, infra issues, or unsupported capability gaps.
- Add operational notes for timeouts, auth, and audit behavior before shipping.

## Troubleshooting

### Problem: The server works in one client but not another

**Symptoms:** Tools appear in one client but fail, hang, or vanish in another.
**Solution:** Separate protocol design from config-writer assumptions. Recheck transport support, config shape, and whether the client actually supports the same tool or prompt surface.

### Problem: Tools became too broad and hard to trust

**Symptoms:** A single tool has too many side effects, long-running behavior, or hidden prerequisites.
**Solution:** Split the tool surface into smaller contracts with clearer input schema, latency, and write scope.

### Problem: Operators cannot explain why a request failed

**Symptoms:** Client users see inconsistent behavior and logs do not reveal whether the issue is auth, timeout, schema, or unsupported capability.
**Solution:** Add explicit failure classes, request IDs, and clear server-side logging for transport, capability, and validation failures.

## Related Skills

- `@architecture` — Use when the MCP server is one component in a larger platform decision.
- `@context-engineering` — Use when the main design problem is prompt or context packet shape.
- `@plugin-authoring` — Use when client-side plugin packaging matters more than the server contract itself.

## Additional Resources

- [MCP server authoring checklist](references/checklist.md)
- [Tool contract worksheet](references/tool-contract-worksheet.md)
- [Render an MCP server packet](scripts/render_mcp_server_packet.py)
- [MCP rollout example](examples/mcp-rollout-example.md)

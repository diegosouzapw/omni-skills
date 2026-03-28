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
upstream_head_repo: "diegosouzapw/omni-skills"
upstream_head_sha: "7b12c4fc4d000a3c49d1112ab86103594c94953a"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# MCP Server Authoring

## Overview

Use this skill when a team needs to author an MCP server as a protocol product, not just expose a few ad hoc tools. It is for shaping the full server contract: lifecycle behavior, tools, resources, prompts, transport choices, authorization boundaries, validation, and client compatibility.

Good output should produce a server that clients can initialize cleanly, understand predictably, debug safely, and operate across the intended environments. The goal is to avoid fragile protocol glue, inconsistent schemas, transport mismatches, and server behavior that only works in one client or one deployment mode.

## When to Use This Skill

- Use when designing a new MCP server from scratch.
- Use when adding tools, resources, or prompts to an existing MCP server and you need contract discipline.
- Use when transport behavior differs between `stdio`, Streamable HTTP, and legacy HTTP+SSE client expectations.
- Use when client support must span multiple IDE or CLI products with different config shapes, approval UX, or feature support.
- Use when a team needs an implementation packet before writing server code.
- Use when initialization, capability negotiation, auth, or cancellation behavior is unclear and must be designed before rollout.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| New server | contract design | Tools, resources, prompts, lifecycle behavior, and transports are scoped intentionally |
| Tool sprawl | schema discipline | Tool inputs, outputs, side effects, and failure modes are consistent |
| Surface confusion | product modeling | Clear rationale for tool vs resource vs prompt exposure |
| Client drift | compatibility | Client config, transport expectations, auth assumptions, and unsupported features are explicit |
| Production hardening | ops defaults | Timeouts, cancellation, consent boundaries, and logging are clear |
| SDK migration | implementation mapping | The protocol contract survives framework or runtime changes |
| Remote deployment | trust boundaries | Auth model, token audience, approval flow, and tenant boundaries are documented |

## Core Concepts

### MCP Surface Area Is A Product Contract

Every tool, resource, and prompt becomes part of a client-facing interface. Once clients depend on it, changes need compatibility thinking just like an API.

### Lifecycle Behavior Matters As Much As Features

A good server does not just expose capabilities. It initializes cleanly, negotiates protocol and capabilities predictably, handles unsupported requests explicitly, reports long-running work sensibly, and shuts down without leaving clients guessing.

### Tool Design Needs Operational Boundaries

The best MCP tool is not the most powerful one. It is the one whose write scope, latency expectations, approval needs, and failure behavior are easy for a client and operator to reason about.

### Resources And Prompts Are First-Class Surfaces

Not everything should be a tool. Stable read-oriented data often belongs in resources, while reusable interaction scaffolding may belong in prompts. Choosing the wrong surface creates avoidable client friction.

### Client Compatibility Is Part Of Server Design

Different clients expose different config models, approval UX, and transport expectations. A useful MCP server treats compatibility as a first-class design concern, not as a post-hoc adapter problem.

## Workflow

1. **Define the server mission and trust boundary**  
   Write down the server purpose, primary users, target clients, deployment mode, and whether the server is local-only, remote single-tenant, or remote multi-tenant. Mark which behaviors must remain read-only, which require explicit approval, and which should never be exposed through MCP.

2. **Map the lifecycle contract before implementation**  
   Define expected initialize behavior, supported protocol version, advertised capabilities, unsupported-feature handling, shutdown expectations, and how the server behaves when clients omit optional features. Treat initialization and capability negotiation as part of the public contract.

3. **Choose the right surface for each capability**  
   Decide whether each capability should be a tool, resource, or prompt. Prefer tools for actions, resources for stable readable data, and prompts for reusable interaction templates. Use the local matrix in [references/mcp-surface-selection-matrix.md](references/mcp-surface-selection-matrix.md).

4. **Design transport support intentionally**  
   Choose `stdio`, Streamable HTTP, or both based on target environments. If older clients still expect HTTP+SSE patterns, document that as a compatibility constraint rather than a default architecture. Capture transport caveats using [references/transport-compatibility-matrix.md](references/transport-compatibility-matrix.md).

5. **Define strict contracts for tools, resources, and prompts**  
   For tools, specify input schema, result shape, side-effect class, timeout budget, idempotency expectations, and whether annotations such as `readOnlyHint` apply. For resources, define URI conventions, templates, update behavior, and whether subscriptions matter. For prompts, define arguments and stable retrieval behavior.

6. **Document auth, consent, and approval boundaries**  
   Decide how authentication works, who validates tokens, what audience claims matter, and where user consent or client approval is required. Keep server auth policy separate from client UX assumptions. Use [references/auth-deployment-checklist.md](references/auth-deployment-checklist.md).

7. **Plan observability and failure handling**  
   Standardize request IDs, correlation fields, structured logs, timeout classes, transport errors, schema validation failures, authorization failures, and cancellation handling. Long-running work should have a progress strategy; sensitive actions should have auditable approval boundaries.

8. **Build a client compatibility matrix**  
   Before calling the design done, record target clients, supported transports, auth assumptions, tools/resources/prompts support, approval UX differences, and known caveats. Start from [references/client-compatibility-template.md](references/client-compatibility-template.md).

9. **Validate at the protocol level, not only in unit tests**  
   Run lifecycle checks, inspect capability exposure, validate schema behavior, and perform at least one smoke test per target client or transport. Use [references/validation-and-inspector-checklist.md](references/validation-and-inspector-checklist.md).

10. **Ship an operator packet**  
    Produce a concise design packet with the supported surface, unsupported assumptions, rollout notes, compatibility matrix, troubleshooting entry points, and test status. If helpful, generate a draft packet with the helper script in `scripts/render_mcp_server_packet.py` and compare it against the worked example in [examples/streamable-http-server-packet.md](examples/streamable-http-server-packet.md).

## Examples

### Example 1: New server design review

```text
Use @mcp-server-authoring to design the first version of our MCP server, including initialize behavior, capability negotiation, tools, resources, prompts, transport support, auth boundaries, and client compatibility notes.
```

**Explanation:** Use this when the protocol surface still needs design, not only code.

### Example 2: Server packet renderer

```bash
python3 skills/mcp-server-authoring/scripts/render_mcp_server_packet.py \
  "catalog-mcp" \
  "search_skills,get_skill,preview_install" \
  "stdio,streamable-http"
```

**Explanation:** Use this to produce a server design packet before implementation review.

### Example 3: Compatibility review

```text
Use @mcp-server-authoring to tell me whether this tool-heavy server should expose all tools in every client or keep a smaller compatibility surface for strict clients, and produce a client matrix with unsupported features called out.
```

**Explanation:** Use this when the risk is client behavior drift rather than raw protocol correctness.

### Example 4: Surface selection decision

```text
Use @mcp-server-authoring to decide whether our repository index should be exposed as tools, resources, or prompts. We need read-only browsing, one write action, and reusable review prompts.
```

**Explanation:** Use this when a team is overusing tools for capabilities that fit better as resources or prompts.

### Example 5: Worked design packet comparison

See [examples/tool-resource-prompt-decision-example.md](examples/tool-resource-prompt-decision-example.md) for a worked example that splits one product domain across tools, resources, and prompts.

## Best Practices

### Do

- Treat the MCP server as a versioned protocol product, not just a runtime convenience.
- Define initialization behavior, capability advertisement, and unsupported-feature handling explicitly.
- Prefer strict JSON-schema-like contracts for tool inputs and stable result shapes for outputs.
- Keep tools narrowly scoped and explicit about side effects, latency, and approval requirements.
- Mark safe read-oriented tools appropriately, including `readOnlyHint` where supported by your implementation.
- Use resources for durable readable data and prompts for reusable interaction scaffolding when that is a better fit than a tool.
- Prefer `stdio` or Streamable HTTP deliberately; document legacy SSE compatibility only when target clients require it.
- Separate the canonical server contract from client-specific config writers or launch wrappers.
- Log request IDs, correlation fields, transport mode, capability decisions, and failure classes.
- Define timeout budgets and cancellation behavior so long-running work does not look like a hang.
- Document auth model, token audience expectations, consent boundaries, and tenant assumptions.
- Maintain a client compatibility matrix as a release artifact, not a one-time design note.

### Don't

- Do not expose broad write-capable tools by default when smaller read-only or narrowly scoped actions would work.
- Do not rely on natural-language descriptions alone when schemas, result shapes, or failure classes should be machine-clear.
- Do not assume every client supports the same transports, prompts, resources, approvals, or configuration model.
- Do not treat remote authorization as a generic OAuth box-checking exercise without MCP-specific trust-boundary review.
- Do not let transport details leak into the conceptual contract more than necessary.
- Do not ignore cancellation, progress, or buffering behavior for operations that may run longer than a trivial request.
- Do not ship a server that only works in one preferred client if multi-client support is a stated goal.

## Troubleshooting

### Problem: Initialization or version negotiation fails

**Symptoms:** The client cannot connect, initialization stops early, or capabilities never appear even though the server process is reachable.
**Solution:** Verify the transport first, then inspect initialize request and response handling. Confirm protocol-version expectations, advertised capabilities, and whether the client requires a feature your server did not declare. Treat this as a lifecycle-contract problem, not just a runtime bug.

### Problem: The server works in one client but not another

**Symptoms:** Tools appear in one client but fail, hang, or vanish in another.
**Solution:** Separate protocol design from client-specific config assumptions. Recheck transport support, auth expectations, approval UX, and whether the client actually supports the same tool, resource, or prompt surface. Use the compatibility template and record unsupported features explicitly.

### Problem: Transport requests hang or stream behavior is inconsistent

**Symptoms:** Requests stall behind a proxy, streaming updates never arrive, or a remote deployment works locally but not in production.
**Solution:** Reconfirm which transport is actually in use and whether intermediaries buffer or rewrite streaming behavior. For mixed-client environments, document whether you support Streamable HTTP only or must preserve legacy HTTP+SSE compatibility. Avoid diagnosing a transport mismatch as a schema bug.

### Problem: Tools became too broad and hard to trust

**Symptoms:** A single tool has too many side effects, long-running behavior, or hidden prerequisites.
**Solution:** Split the tool surface into smaller contracts with clearer input schema, latency, approval requirements, and write scope. Re-evaluate whether some capabilities should be resources or prompts instead.

### Problem: Requests are schema-valid but still fail unpredictably

**Symptoms:** The payload validates, but the client sees malformed results, ambiguous errors, or inconsistent behavior across calls.
**Solution:** Tighten the semantic contract, not just the request schema. Standardize result shape, declare failure classes, and ensure error responses are distinguishable from successful tool output. Ambiguous success/error structure causes interoperability problems even when input validation passes.

### Problem: Auth succeeds but requests are still rejected

**Symptoms:** Tokens appear valid, yet the server rejects calls or only some operations are allowed.
**Solution:** Check audience validation, tenant scoping, policy rules, and whether sensitive actions require additional user consent or client approval. Separate authentication from authorization and from user-consent gating.

### Problem: Long-running work looks like a hang

**Symptoms:** Clients time out, users retry duplicate actions, or operators cannot tell whether work is still progressing.
**Solution:** Add progress reporting where appropriate, define timeout budgets clearly, and make cancellation safe. Log start, progress, completion, timeout, and cancellation with the same request correlation fields.

### Problem: Operators cannot explain why a request failed

**Symptoms:** Client users see inconsistent behavior and logs do not reveal whether the issue is auth, timeout, schema, transport, or unsupported capability.
**Solution:** Add explicit failure classes, request IDs, structured logs, and server-side logging for transport, capability, and validation failures. The local [references/troubleshooting-playbook.md](references/troubleshooting-playbook.md) can be used as a diagnosis path.

## Related Skills

- `@architecture` — Use when the MCP server is one component in a larger platform decision.
- `@context-engineering` — Use when the main design problem is prompt or context packet shape.
- `@plugin-authoring` — Use when client-side plugin packaging matters more than the server contract itself.

## Additional Resources

- [MCP server authoring checklist](references/checklist.md)
- [Tool contract worksheet](references/tool-contract-worksheet.md)
- [Surface selection matrix](references/mcp-surface-selection-matrix.md)
- [Transport compatibility matrix](references/transport-compatibility-matrix.md)
- [Auth deployment checklist](references/auth-deployment-checklist.md)
- [Client compatibility template](references/client-compatibility-template.md)
- [Validation and Inspector checklist](references/validation-and-inspector-checklist.md)
- [Troubleshooting playbook](references/troubleshooting-playbook.md)
- [Render an MCP server packet](scripts/render_mcp_server_packet.py)
- [MCP rollout example](examples/mcp-rollout-example.md)
- [Streamable HTTP server packet example](examples/streamable-http-server-packet.md)
- [Tool/resource/prompt decision example](examples/tool-resource-prompt-decision-example.md)

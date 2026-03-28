---
name: "omni-figma"
description: "Figma workflow skill. Use this skill when a user needs design-to-code implementation, Figma inspection, token lookup, Code Connect mapping, or Figma MCP troubleshooting."
version: "0.0.1"
category: "development"
tags:
  - "figma"
  - "design-to-code"
  - "mcp"
  - "ui-implementation"
  - "code-connect"
  - "figjam"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "antigravity"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-28"
upstream_skill: "skills/omni-figma"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Omni Figma

## Overview

Use this skill as the single router for Figma work. Treat `figma-implement-design` as the baseline source of truth for any repo-code deliverable, then expand into inspection, mapping, canvas writes, capture, or troubleshooting only when the task requires it.

Figma MCP provides structured design context, not final code. The agent must choose the right tool, adapt the output to the repo, and validate the result.

## Core Rules

- Prefer the remote Figma MCP server when available. Use the desktop server only when selection-based local access is necessary or the org requires it.
- Start from the smallest exact node or frame that answers the task. Break large screens into logical sections before asking for code.
- Be explicit about tool intent when the task is about tokens, metadata, Code Connect, or setup. Do not assume `get_design_context` is always the right call.
- Use Code Connect, variables, semantic layer names, Auto Layout, and annotations as strong signals. Without them, the model is guessing.
- Never ship raw Figma-generated web code unchanged. Translate it to the repo's components, tokens, data flow, and accessibility rules.
- If the user wants to edit an existing Figma file, prefer `use_figma`. If the user wants the first capture of a webpage or HTML into Figma, use `generate_figma_design` first, then `use_figma` for follow-up edits.

## Task Router

### 1. Implement code from a Figma design

Use this when the deliverable is code in the repo.

1. Extract `fileKey` and the exact node from the URL, or use the current desktop selection.
2. Run `get_design_context`.
3. If the payload is large or truncated, run `get_metadata`, split the work into smaller children, and refetch only the needed nodes.
4. Run `get_screenshot`.
5. If token alignment matters, run `get_variable_defs`.
6. Reuse existing repo components first. Use Code Connect mappings when available.
7. Translate the Figma output to the project's framework and conventions.
8. Validate against the screenshot before finishing.

### 2. Inspect a design, tokens, or structure

Use `get_design_context` for layout and component structure, `get_screenshot` for visual review, `get_metadata` for large trees, and `get_variable_defs` for tokens. Ask explicitly for variables if the user wants tokens, not code.

### 3. Reuse or create Code Connect mappings

Use `get_code_connect_map` to check existing mappings. If mappings are missing, use `get_code_connect_suggestions`, inspect the codebase for the best component match, then persist with `send_code_connect_mappings` or `add_code_connect_map`.

### 4. Create repo-specific design implementation rules

Use `create_design_system_rules` when the user wants reusable agent instructions for Figma-driven work. Save the result to the requested rules file and keep it consistent with this skill's required flow.

### 5. Edit or generate in Figma or FigJam

- Use `use_figma` for writes inside an existing Figma file: nodes, components, styles, variables, layout fixes, or syncing code back into canvas.
- Use `search_design_system` before creating new components; import or reuse library assets instead of cloning them manually.
- Use `generate_figma_design` only for the first capture or import of a webpage or HTML into Figma. Follow its capture and polling workflow.
- Use `generate_diagram` for simple FigJam flows, sequence diagrams, state diagrams, and gantt charts.
- Use `get_figjam` when the task is to inspect or convert an existing FigJam board.

### 6. Setup, access, or troubleshooting

If the problem is auth, missing tools, permissions, slow responses, or wrong tool behavior, go straight to `references/mcp-setup-and-troubleshooting.md`.

## Required Flow for Repo Code

Follow these steps in order whenever the task ends in application code.

1. Resolve the exact node.
2. Fetch `get_design_context`.
3. Fetch `get_screenshot`.
4. Fetch `get_metadata` only if the node is too large or ambiguous.
5. Fetch `get_variable_defs` only when token names or values matter.
6. Use assets exactly as provided by Figma. Do not replace them with icon packages or placeholders when a Figma asset source exists.
7. Reuse existing code components, tokens, and patterns before creating new abstractions.
8. Match layout, states, responsiveness, and accessibility to the design.
9. Document any intentional deviation from Figma.

## Prompting Rules

- Ask for the exact outcome: implementation, variables, metadata, mapping, capture, or canvas edit.
- Nudge the tool explicitly when the wrong kind of output would be harmful.
- Normalize `node-id=1-2` to `1:2` when a tool expects colon-separated IDs, especially in Code Connect flows.
- If the output becomes generic, reduce selection size, restate project rules, and call the more specific tool.

## References

- `references/mcp-setup-and-troubleshooting.md` for remote vs desktop setup, verification, auth, and common failures.
- `references/tool-routing-and-prompts.md` for tool-by-tool routing, prompt patterns, and capture or write workflows.
- `references/figma-best-practices-2026.md` for the official Figma guidance that improves agent output: file structure, Code Connect, variables, Auto Layout, explicit tool selection, and smaller frames.

## Examples

### Example 1: Implement a node into repo code

```text
Implement this Figma frame in the current React app and reuse the existing design-system components where possible.
```

### Example 2: Prepare an implementation packet

```bash
python3 skills/omni-figma/scripts/render_implementation_packet.py \
  "landing hero" \
  "react,tailwind,design tokens"
```

## Best Practices

- Start from the smallest node that answers the request.
- Prefer Code Connect mappings and variables over recreating components from scratch.
- Treat screenshots and metadata as validation artifacts, not optional extras.
- Document any intentional deviation from the Figma source before finishing.

## Troubleshooting

### Problem: The generated code looks generic

**Symptoms:** Output ignores the repository's components, tokens, or accessibility patterns.
**Solution:** Re-run the flow with a smaller node, fetch variables explicitly, and anchor the request to the repo conventions.

### Problem: Tool selection keeps going wrong

**Symptoms:** The agent reaches for the wrong MCP tool or asks for too much at once.
**Solution:** Route through the specific reference guide, restate the concrete intent, and split the task by node or operation.

## Additional Resources

- [MCP setup and troubleshooting](references/mcp-setup-and-troubleshooting.md)
- [Tool routing and prompts](references/tool-routing-and-prompts.md)
- [Figma best practices](references/figma-best-practices-2026.md)
- [Render an implementation packet](scripts/render_implementation_packet.py)

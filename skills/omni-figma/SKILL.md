---
name: omni-figma
description: "Figma workflow skill. Use this skill when a user needs design-to-code implementation, Figma inspection, token lookup, Code Connect mapping, or Figma MCP troubleshooting."
version: "0.0.1"
category: development
tags: [figma, design-to-code, mcp, ui-implementation, code-connect, figjam]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, antigravity]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-27"
---

# Omni Figma

## Overview

Use this skill as the single router for Figma work. Treat design context as a structured source of truth that must be translated into the repository's components, tokens, and delivery rules instead of copied verbatim.

Figma MCP gives the agent high-signal design context, but the agent still has to choose the right tool, scope the node correctly, reuse existing repo patterns, and validate the result against the visual source.

## When to Use This Skill

- Use when the deliverable is repo code derived from a Figma frame, component, or screen.
- Use when the user needs token lookup, variable inspection, or structural metadata instead of raw code.
- Use when Code Connect mappings should be created, checked, or repaired.
- Use when an existing Figma or FigJam file must be edited through the MCP toolchain.
- Use when a Figma workflow is failing because of auth, routing, permissions, or oversized selections.

## Operating Table

| Situation | Primary tool path | What good output looks like |
| :-------- | :---------------- | :-------------------------- |
| Implement code from a node | `get_design_context` → `get_screenshot` → repo adaptation | Components, tokens, layout, states, and accessibility match the design and the repo conventions |
| Inspect structure or tokens | `get_design_context` / `get_metadata` / `get_variable_defs` | Clear layout, naming, token, and state understanding without over-fetching code |
| Reuse or repair mappings | `get_code_connect_map` → suggestions → save mapping | Existing code components are linked deliberately to the right Figma nodes |
| Edit canvas content | `use_figma` or `generate_diagram` / `get_figjam` | The file changes cleanly inside Figma or FigJam with the right node scope |
| Troubleshoot setup | setup reference + smallest diagnostic call | The failure mode is isolated and the next fix is explicit |

## Core Rules

- Prefer the remote Figma MCP server when available. Use the desktop server only when selection-based local access is required or the org policy demands it.
- Start from the smallest exact node or frame that answers the task. Large pages should be split into logical children before code generation.
- Be explicit about tool intent when the task is about tokens, metadata, Code Connect, or setup. Do not default every request to `get_design_context`.
- Use Code Connect, variables, semantic layer names, Auto Layout, and annotations as strong signals. Without them, the model is guessing.
- Never ship raw Figma-generated web code unchanged. Translate it to the repo's components, tokens, data flow, and accessibility rules.
- If the user wants to edit an existing Figma file, prefer `use_figma`. If they want the first capture of a webpage or HTML into Figma, use `generate_figma_design` first, then `use_figma` for follow-up edits.

## Workflow

1. Resolve the exact node or selection and restate the expected outcome: implementation, inspection, mapping, or canvas edit.
2. Pull the smallest high-signal context first, usually `get_design_context` plus `get_screenshot`, and only expand to metadata or variables when the first pass leaves ambiguity.
3. Route through the correct sub-flow: code implementation, design inspection, Code Connect, design-system rules, or canvas editing.
4. Convert the result into repo-native output by reusing components, tokens, states, and data flow instead of mirroring raw Figma structure blindly.
5. Finish with validation: screenshot parity, token parity, mapping accuracy, and any intentional deviation called out explicitly.

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

### Example 3: Scope the handoff before coding

```text
Use @omni-figma to split this dashboard screen into implementation slices, identify the riskiest component mappings, and tell me which node to code first.
```

## Best Practices

- Start from the smallest node that answers the request and split wide screens into implementation slices before asking for code.
- Prefer Code Connect mappings and variables over recreating components from scratch.
- Treat screenshots, mapping notes, and metadata as validation artifacts, not optional extras.
- Keep the repo's component system and accessibility rules above raw Figma HTML-like output.
- State when a design ambiguity is being resolved by inference instead of by a direct Figma signal.
- Capture token names, state variants, and implementation boundaries in a reusable handoff packet when the task is larger than one component.

## Troubleshooting

### Problem: The generated code looks generic

**Symptoms:** Output ignores the repository's components, tokens, or accessibility patterns.
**Solution:** Re-run the flow with a smaller node, fetch variables explicitly, and anchor the request to the repo conventions.

### Problem: Tool selection keeps going wrong

**Symptoms:** The agent reaches for the wrong MCP tool or asks for too much at once.
**Solution:** Route through the specific reference guide, restate the concrete intent, and split the task by node or operation.

### Problem: The design context is still too broad after one pass

**Symptoms:** Large frames produce vague implementation guidance, weak mappings, or too many assumptions.
**Solution:** Use the node-splitting worksheet, break the screen into logical slices, and validate each slice with a screenshot-backed handoff before coding.

## Related Skills

- `@frontend-design` — Use when the design needs stronger UI structure, state articulation, or implementation framing before code.
- `@api-design` — Use when the screen depends on explicit contracts, mutation semantics, or pagination rules.
- `@documentation` — Use when the final implementation needs guidance, rollout notes, or operator-facing docs.

## Additional Resources

- [MCP setup and troubleshooting](references/mcp-setup-and-troubleshooting.md)
- [Tool routing and prompts](references/tool-routing-and-prompts.md)
- [Figma best practices](references/figma-best-practices-2026.md)
- [Render an implementation packet](scripts/render_implementation_packet.py)
- [Node splitting worksheet](examples/node-splitting-worksheet.md)
- [Component mapping review](examples/component-mapping-review.md)
- [Implementation handoff packet](examples/implementation-handoff-packet.md)

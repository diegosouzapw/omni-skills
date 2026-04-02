---
name: "figma-implement-design-v2"
description: "Implement Design workflow skill. Use this skill when a user needs Figma designs translated into production-ready application code with high visual fidelity, responsive behavior, semantic structure, and accessibility checks. Use it when implementing UI code from Figma files, when the user shares a Figma URL or selected node, or when the task is to build or extend components to match Figma specs in the repository's conventions. For Figma canvas edits, switch to figma-use."
version: "0.0.1"
category: "design"
tags:
  - "figma-implement-design-v2"
  - "figma"
  - "design-to-code"
  - "ui-implementation"
  - "mcp"
  - "dev-mode"
  - "accessibility"
  - "design-tokens"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/figma-implement-design-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Implement Design

## Overview

Use this skill to turn a Figma component, frame, or screen into production-ready code in the user's repository.

The goal is not to paste generated Figma code verbatim. The goal is to extract reliable design intent from Figma MCP or Dev Mode, map it into the project's components and tokens, implement it using repository conventions, and validate the result for visual parity, responsiveness, semantics, and accessibility.

This skill is for code implementation work. If the task is to edit the Figma canvas itself, route to `figma-use`.

## When to Use This Skill

Use this skill when:

- the user asks to implement a component or screen from a Figma URL
- the user provides a Figma frame, node, or selected design and wants code
- the user says things like "implement this design", "build this component", or "generate code from Figma"
- the work must match the design closely while still following project conventions
- the task requires translating Figma layout, variables, assets, and states into real app code

Do not use this skill when:

- the user wants to create, edit, move, or delete objects inside Figma itself; use `figma-use`
- the user wants a new design generated in Figma from text or code; use `figma-generate-design`
- the user wants only Code Connect mappings; use `figma-code-connect-components`
- the user wants reusable design-system rule files such as `AGENTS.md` or `CLAUDE.md`; use `figma-create-design-system-rules`

## Operating Table

| Situation | Start here | What to do |
| --- | --- | --- |
| You have a valid Figma URL or selected node and implementation should begin | `references/figma-implementation-workflow.md` | Follow the full extraction, implementation, and validation flow |
| Figma context is too large or truncated | `references/figma-implementation-workflow.md` | Decompose the frame with metadata, then fetch child nodes incrementally |
| You need to map Figma variables to project tokens | `references/token-mapping-worksheet.md` | Reuse existing tokens first and document approved deviations |
| Auto Layout is not translating cleanly | `references/layout-translation-cheatsheet.md` | Choose flex, grid, or limited absolute positioning intentionally |
| You are validating semantics or accessibility before handoff | `references/accessibility-validation-checklist.md` | Check structure, keyboard support, images, contrast, and target size |
| Assets are missing, blurry, or unclear | `references/asset-handling-guide.md` | Verify source handling, intrinsic sizing, SVG strategy, and alt behavior |
| The request is actually a different Figma task | `agents/figma-task-router.md` | Hand off to the correct Figma-adjacent skill early |

## Workflow

1. **Qualify the request**
   - Confirm the deliverable is code in the repository, not a Figma canvas edit.
   - Confirm you have either:
     - a Figma URL with `fileKey` and `node-id`, or
     - a usable `figma-desktop` selection when that MCP mode is available.
   - If MCP or Dev Mode access is unavailable and the task depends on exact design details, stop and request prerequisites instead of guessing.

2. **Identify the implementation target**
   - Parse the Figma URL when provided.
   - Example format: `https://figma.com/design/:fileKey/:fileName?node-id=42-15`
   - Extract:
     - `fileKey`: the segment after `/design/`
     - `nodeId`: the `node-id` value
   - If using `figma-desktop`, use the selected node when the tool supports selection-based context.

3. **Fetch structured design context first**
   - Run `get_design_context(...)` for the target node.
   - Use this as the primary source for:
     - layout properties and constraints
     - typography
     - colors and variables
     - component structure and variants
     - spacing, padding, and sizing
   - Treat any generated code suggestions as a reference only, not final code.

4. **Fetch a screenshot for visual truth**
   - Run `get_screenshot(...)` for the same node.
   - Keep the screenshot available throughout implementation.
   - Use it to validate visual outcome, not to replace structured context.

5. **Decompose large or ambiguous designs**
   - If the context is truncated or too broad:
     1. run `get_metadata(...)`
     2. identify major child sections or component nodes
     3. fetch `get_design_context(...)` for those child nodes separately
   - Prefer implementing section by section rather than hallucinating details from a partial response.

6. **Map design intent to project primitives**
   - Inspect the repository before creating anything new.
   - Prefer:
     - existing buttons, inputs, typography, layout shells, cards, icon wrappers
     - existing spacing, color, radius, and typography tokens
     - existing responsive and state patterns
   - Use `references/token-mapping-worksheet.md` to map Figma variables or raw values into local tokens.

7. **Translate layout deliberately**
   - Interpret Figma Auto Layout as implementation intent, not literal pixel instructions.
   - Common mappings:
     - horizontal/vertical auto layout -> flex row/column
     - repeated card or dashboard layouts -> grid
     - overlays/badges/art-directed elements -> limited absolute positioning
   - Use `references/layout-translation-cheatsheet.md` when spacing, wrapping, or alignment is unclear.

8. **Implement assets safely**
   - Use assets provided by the Figma tool flow.
   - Do not substitute unrelated icon packs or placeholders when a real asset is already provided.
   - Validate whether each image is:
     - decorative
     - informative
     - raster or SVG
   - See `references/asset-handling-guide.md` before choosing inline SVG, referenced files, or image semantics.

9. **Build production-ready code**
   - Follow repository conventions for file location, naming, styling, typing, and composition.
   - Prefer semantic HTML and real controls over div-based replicas.
   - Extend existing components instead of duplicating design-system behavior.
   - Avoid hardcoded values when the project already has a token or primitive for the same concept.

10. **Validate visual, responsive, and semantic fidelity**
   - Compare implementation to the Figma screenshot.
   - Validate:
     - spacing, alignment, sizing, and hierarchy
     - typography and state behavior
     - responsive adaptation implied by constraints or Auto Layout
     - semantic structure and keyboard behavior
     - image alt behavior and decorative handling
     - contrast and target size where relevant
   - Use `references/accessibility-validation-checklist.md`.

11. **Document deviations before handoff**
   - If the implementation intentionally differs from the comp, record why.
   - Common valid reasons:
     - accessibility compliance
     - existing design-system token constraints
     - reusable component architecture
     - responsive behavior not explicit in the comp
   - Use `examples/deviation-log-example.md` as the format.

12. **Handoff clearly**
   - Summarize what was implemented, what was mapped to existing tokens/components, and any unresolved gaps.
   - If missing prerequisites prevented exact implementation, say so explicitly instead of overstating fidelity.

## Examples

### Example 1: Implement a single component from a Figma URL

```text
Implement this component from Figma in the existing React app:
https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15
Reuse existing button and typography primitives if present, and document any deviations.
```

Expected approach:

1. Parse `fileKey` and `nodeId`
2. Run `get_design_context(...)`
3. Run `get_screenshot(...)`
4. Inspect existing button-related components in the repo
5. Map colors, spacing, and typography to local tokens
6. Implement the component variant
7. Validate visual parity and accessibility

See `examples/component-implementation-packet.md`.

### Example 2: Decompose a full screen before implementing

```text
Build this dashboard screen from Figma, but do it section by section instead of as one giant frame:
https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Dashboard?node-id=10-5
```

Expected approach:

1. Run `get_metadata(...)` on the main frame
2. Identify header, navigation, content, and card regions
3. Fetch child-node context separately
4. Implement layout shell first, then sections
5. Validate final composition against the full-screen screenshot

See `examples/full-screen-decomposition-example.md`.

### Example 3: Ask for token-aware implementation

```text
Implement this Figma card component, but map colors, spacing, and radius to our existing design tokens first. Only add a new token if reuse is impossible, and explain the reason.
```

Expected result:

- existing project tokens are preferred
- raw Figma values are not copied blindly
- deviations are documented when parity and token reuse conflict

### Example 4: Stop when prerequisites are missing

```text
Implement this design from the attached screenshot only.
```

Correct response behavior:

- explain that exact implementation requires a Figma node, MCP context, or equivalent inspectable design data
- request the Figma URL, selected node, asset exports, and token details
- do not invent exact spacing, variants, or measurements from a screenshot alone

## Best Practices

### Do

- fetch structured Figma context before coding
- use screenshots for validation, not as the only specification
- reuse existing components before creating new ones
- map Figma variables to project tokens intentionally
- interpret Auto Layout as flex/grid intent where appropriate
- favor semantic HTML and accessible controls
- document deviations caused by accessibility, token reuse, or technical constraints
- validate responsive behavior, not just desktop appearance
- keep implementation aligned with repository naming, styling, and architecture conventions

### Don't

- do not paste Figma-generated code directly into production without adaptation
- do not assume measurements or states that were not retrieved from context
- do not override semantics just to mimic a visual comp exactly
- do not replace provided assets with unrelated placeholders or icon libraries unless the user explicitly requests it
- do not hardcode colors, spacing, and typography values when the project already has suitable tokens
- do not claim exact fidelity if MCP access, assets, fonts, or variables were unavailable

### Implementation rules

- Prefer existing design-system components when a close match already exists.
- If extending an existing component, keep API shape and variant naming consistent with the project.
- Add strong typing for component props when the codebase uses TypeScript.
- Keep styles composable and local to project conventions.
- Use inline styles only when the value must truly be dynamic and cannot be expressed through existing styling patterns.

### Fidelity standard

Aim for high visual parity with the Figma design **within semantic, accessibility, and project-system constraints**.

That means:

- the shipped UI should look intentionally matched
- the structure should still be maintainable
- accessibility fixes are allowed and should be documented
- token reuse is preferred over one-off raw values unless exact values are required and approved

## Troubleshooting

### Problem: MCP or Dev Mode context is unavailable

**Symptoms:** You have only a screenshot, or tool calls cannot access the file or selected node.

**Likely cause:** Missing Figma access, MCP setup, auth, or a usable node reference.

**Verify:** Confirm whether you have a valid Figma URL, node ID, connected MCP workflow, or desktop selection.

**Solution:** Request the missing prerequisite. Ask for the exact frame URL, selected node, exported assets, and token details. Do not invent measurements or variants from visual guesses alone.

### Problem: `get_design_context` is truncated or too broad

**Symptoms:** Returned context is incomplete, cuts off, or mixes too many nested layers to implement cleanly.

**Likely cause:** The selected frame is too large or deeply nested.

**Verify:** Run `get_metadata(...)` and inspect the node hierarchy.

**Solution:** Break the frame into child sections and fetch context per child node. Implement incrementally. See `examples/full-screen-decomposition-example.md`.

### Problem: Auto Layout translated incorrectly

**Symptoms:** Spacing collapses, alignment is off, wrapping breaks, or resizing behaves unlike the design.

**Likely cause:** Auto Layout intent was copied too literally instead of translated to proper flex/grid behavior.

**Verify:** Re-check direction, gap, alignment, distribution, hug/fill behavior, min/max sizing, and wrapping implications from Figma context.

**Solution:** Rebuild the section using the appropriate layout primitive. Use `references/layout-translation-cheatsheet.md` to decide between flex, grid, or limited absolute positioning.

### Problem: Tokens do not match Figma values exactly

**Symptoms:** Colors, spacing, radius, or typography differ slightly after mapping into the project system.

**Likely cause:** Local design tokens do not have exact parity with the Figma variables or raw values.

**Verify:** Compare Figma variables and values against the project's token inventory.

**Solution:** Prefer existing project tokens when the visual result remains acceptable. If parity is not possible, document the deviation or propose a new token only when justified and allowed.

### Problem: Fonts or typography render differently

**Symptoms:** Text wraps unexpectedly, line breaks shift, or weight and spacing look wrong despite matching font-size values.

**Likely cause:** The exact font, weight, fallback stack, line height, or letter spacing is unavailable in the app environment.

**Verify:** Check the codebase font stack, loaded web fonts, and typographic tokens against Figma specs.

**Solution:** Use the nearest approved project typography primitive or font stack, then re-validate spacing and line wrapping. Record the deviation if it materially changes appearance.

### Problem: Assets render blurry, stretched, or fail to load

**Symptoms:** Images look distorted, icons are missing, or asset references do not survive the implementation path.

**Likely cause:** Wrong intrinsic sizing, broken aspect ratio handling, misuse of raster vs SVG, or altered asset source paths.

**Verify:** Check asset dimensions, aspect-ratio behavior, SVG strategy, and whether the original tool-provided asset source was preserved correctly.

**Solution:** Re-implement using the guidance in `references/asset-handling-guide.md`. Preserve aspect ratio, use the correct asset form, and ensure image semantics are correct.

### Problem: The UI matches visually but fails accessibility review

**Symptoms:** Keyboard interaction is broken, buttons are non-semantic, images lack correct alt treatment, or contrast/target size is insufficient.

**Likely cause:** The comp was implemented as a visual replica rather than a semantic interface.

**Verify:** Review semantics, focus behavior, keyboard usage, alt handling, contrast, and target sizing with `references/accessibility-validation-checklist.md`.

**Solution:** Fix the structure and interactions first, then restore visual parity as closely as possible. Document any accessibility-driven deviation from the comp.

## Related Skills

- `figma-use` — use when the task is to modify the Figma canvas itself
- `figma-generate-design` — use when the task is to create or revise designs in Figma from prompts or code
- `figma-code-connect-components` — use when the task is limited to Code Connect mappings
- `figma-create-design-system-rules` — use when the task is to author reusable rules for future Figma or implementation work

## Additional Resources

### Local support pack

- [Implementation workflow](references/figma-implementation-workflow.md)
- [Token mapping worksheet](references/token-mapping-worksheet.md)
- [Layout translation cheatsheet](references/layout-translation-cheatsheet.md)
- [Accessibility validation checklist](references/accessibility-validation-checklist.md)
- [Asset handling guide](references/asset-handling-guide.md)
- [Component implementation packet](examples/component-implementation-packet.md)
- [Full-screen decomposition example](examples/full-screen-decomposition-example.md)
- [Deviation log example](examples/deviation-log-example.md)
- [Figma task router](agents/figma-task-router.md)

### Primary external references

- Figma MCP Server documentation: <https://developers.figma.com/docs/mcp>
- Figma MCP tools: <https://developers.figma.com/docs/mcp/tools>
- Figma Dev Mode MCP help: <https://help.figma.com/hc/en-us/articles/32132100833559-Dev-Mode-MCP-Server>
- Figma Variables guide: <https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma>
- Figma Auto Layout guide: <https://help.figma.com/hc/en-us/articles/5731482952599-Guide-to-auto-layout>
- MDN image element: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img>
- MDN flexbox: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout>
- MDN grid: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout>

---
name: "figma-implement-design"
description: "Implement Design workflow skill. Use this skill when a user wants a specific Figma frame, screen, or component translated into production-ready code with high visual fidelity using a working Figma MCP workflow for design context, screenshots, metadata decomposition, and asset retrieval. Best for requests that include a Figma URL or node selection and require adaptation to the target codebase's components, tokens, accessibility, and styling conventions. Do not use for MCP setup or auth troubleshooting, general Figma exploration, or variables-only analysis; route those to the base figma skill instead."
version: "0.0.1"
category: "design"
tags:
  - "figma-implement-design"
  - "figma"
  - "mcp"
  - "design-to-code"
  - "ui-implementation"
  - "component-mapping"
  - "design-tokens"
  - "accessibility"
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
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/figma-implement-design"
upstream_author: "github.com/openai/skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Implement Design

## Overview

Use this skill to turn a specific Figma node, component, or screen into production-ready code with high visual fidelity while still honoring the target repository's component model, token system, accessibility requirements, and coding conventions.

This skill assumes a working Figma MCP connection already exists. Its job is not to debug MCP setup. Its job is to execute a disciplined design-to-code workflow:

1. resolve the target node
2. fetch structured design context
3. capture a screenshot for visual truth
4. decompose large designs when needed
5. retrieve assets
6. map design primitives to existing code components and tokens
7. implement carefully
8. validate parity, semantics, and accessibility

This curated version preserves the upstream intent while making the workflow more execution-oriented for agents. Keep provenance visible when that matters for review or handoff, but prioritize implementation quality over editorial import mechanics.

## When to Use This Skill

Use this skill when:

- the user provides a Figma URL, node ID, or active desktop selection and asks for code implementation
- the task requires matching a component, card, form, layout, or full screen closely to Figma
- the implementation must reuse existing project components instead of generating isolated demo code
- the operator needs both structured design context and a screenshot before coding
- the task includes assets, tokens, responsive behavior, or variant/state mapping
- the user expects a short implementation note describing reuse decisions, token mappings, and justified deviations

Do **not** use this skill when:

- the main problem is MCP setup, OAuth, or connection failure
- the user only wants general Figma inspection or raw file exploration
- the user only wants a variables inventory or token analysis without implementation
- the task is broad frontend architecture rather than implementing a specific design target
- the work has become primarily accessibility auditing, visual regression setup, or generic UI debugging

If MCP setup or authentication is failing, stop and route to `@figma`.

### Required inputs

Collect or confirm these before implementation:

- Figma URL with `node-id`, or a selected node when using desktop selection mode
- target repository or code area to edit
- framework and styling conventions already used by the project
- any existing component library or design system to reuse
- acceptance constraints such as responsiveness, accessibility, deadlines, or "do not introduce new dependencies"

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| User gave a Figma URL | `references/implementation-checklist.md` | Fastest path for extracting file key, node ID, and beginning the workflow |
| User is using desktop selection mode | `references/implementation-checklist.md` | Clarifies when selection-based flow is valid and when file key is unnecessary |
| Large or complex screen | `examples/page-decomposition-prompt.md` | Prevents one-shot generation and encourages metadata-first decomposition |
| Need to reuse existing components | `references/component-mapping-guide.md` | Helps map Figma components and variants to existing code primitives |
| Token mismatch or missing token | `references/token-mapping-worksheet.md` | Provides a repeatable way to choose approved tokens and record deltas |
| Final parity review before handoff | `references/parity-review-rubric.md` | Ensures visual fidelity, semantics, and accessibility are all checked |
| MCP or asset flow is failing | `references/troubleshooting-figma-implementation.md` | Gives concrete diagnosis and next actions without guessing |
| Task drifted into another specialization | `agents/handoff-router.md` | Helps hand off intentionally to the adjacent skill that fits better |

## Workflow

Follow these steps in order. Do not implement from memory or from a sparse prompt alone.

### 1. Confirm scope and prerequisites

Confirm that:

- the user wants implementation, not exploration
- a working Figma MCP connection is expected to exist
- you know the target node or can extract it from the supplied URL
- you know where the code should live in the repository

If MCP is unavailable or auth is expired, stop and route to `@figma` rather than troubleshooting deeply here.

### 2. Resolve the target node

#### Option A: Parse from a Figma URL

Expected format:

```text
https://figma.com/design/:fileKey/:fileName?node-id=1-2
```

Extract:

- `fileKey`: segment after `/design/`
- `nodeId`: value of the `node-id` query parameter

Example:

- URL: `https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15`
- fileKey: `kL9xQn2VwM8pYrTb4ZcHjF`
- nodeId: `42-15`

#### Option B: Use current desktop selection

When using the desktop MCP flow, the selected node in the open Figma desktop app may be used directly.

Use this only when:

- the user is working with the desktop app
- a node is already selected
- the MCP server supports selection-based behavior in that environment

### 3. Fetch structured design context first

Request design context for the node before writing code.

Representative call shape:

```text
get_design_context(fileKey=":fileKey", nodeId="1-2")
```

Use the result to capture:

- layout model, auto layout, constraints, sizing behavior
- typography values and text hierarchy
- colors, variables, and token-like references
- component structure, nested primitives, and variants
- spacing, radii, borders, effects, and state hints

Do not skip this step, even if the screenshot looks simple.

### 4. Capture a screenshot and keep it as visual source of truth

Request a screenshot of the same node.

Representative call shape:

```text
get_screenshot(fileKey=":fileKey", nodeId="1-2")
```

Use the screenshot throughout implementation to validate:

- spacing and alignment
- typography rhythm
- visual weight and hierarchy
- icon, image, and decoration placement
- any mismatch between generated structure and actual appearance

### 5. Decompose large or truncated designs

If the design context is too large, incomplete, or obviously truncated:

1. request metadata for the parent node
2. identify major child sections
3. fetch design context per child node
4. implement in smaller pieces
5. re-validate against the full screenshot

Representative call shape:

```text
get_metadata(fileKey=":fileKey", nodeId="1-2")
```

Use decomposition for:

- dashboards
- landing pages
- long forms
- complex cards with many nested layers
- screens with repeated patterns or multiple panels

Avoid forcing a whole-page implementation from a single oversized context dump.

### 6. Retrieve and handle assets safely

Download or consume images, icons, SVGs, and other assets exposed by the MCP workflow.

Asset rules:

- if the Figma MCP workflow returns a `localhost` asset URL, use it as provided during the active session
- do not swap in third-party icon packages when Figma-provided assets already exist, unless the user explicitly requests substitution
- do not create placeholder assets when a real asset source is available
- follow project policy for copying, storing, or inlining assets
- note that session-scoped asset URLs may not remain valid later; consume them during implementation or store them according to repository conventions

### 7. Map Figma components to existing code components

Before creating new UI code, inspect the repository for matching or near-matching primitives.

Prefer this order:

1. existing equivalent component
2. existing component extended with a new variant or prop combination
3. composition of existing primitives
4. new component only if no suitable reusable option exists

When mapping components, capture:

- Figma component name
- Figma variant or state
- matching code component
- prop mapping
- behavioral differences
- any justified gap

Use `references/component-mapping-guide.md` for the worksheet.

### 8. Translate variables and visual values into project tokens

Map design values into the target project's token system whenever possible.

Preferred token translation order:

1. exact existing semantic token
2. nearest approved token with minimal visible delta
3. temporary local constant only when no approved token exists

When no exact match exists:

- prefer consistency with the project design system
- document the delta if it affects fidelity
- avoid scattering hardcoded values unless the user approves or the repository clearly permits it

Capture mappings for:

- color
- typography
- spacing
- border radius
- shadows/effects
- sizing where the system exposes tokens

Use `references/token-mapping-worksheet.md` when the mapping is non-trivial.

### 9. Implement in project conventions, not generated demo style

Treat Figma-derived output as a design representation, not as final code style.

Translate into the repository's actual conventions:

- existing framework and file structure
- component APIs and composition patterns
- CSS strategy or styling system
- state and event handling patterns
- routing, data, and localization patterns where relevant

Common implementation rules:

- use native HTML elements first
- add ARIA only when native semantics are insufficient
- avoid inline styles unless the codebase expects them or the value is truly dynamic
- add types for public component props when the project uses TypeScript
- keep components composable and maintainable

### 10. Validate visual parity, semantics, and accessibility

Before marking the work complete, validate against both the screenshot and implementation requirements.

Check:

- layout, spacing, and alignment match the screenshot closely
- typography, sizing, and hierarchy match the design intent
- assets render correctly
- interactive states exist where expected
- responsive behavior follows the design context and constraints
- semantic HTML is appropriate
- keyboard interaction works for controls
- focus is visible
- accessible names and states are present
- contrast and other accessibility concerns are not made worse by strict visual copying

Visual fidelity does **not** override accessibility or semantics.

### 11. Deliver code plus an implementation note

Return or commit the implementation with a short note covering:

- target node implemented
- components reused or extended
- token mappings chosen
- assets consumed
- any decomposition strategy used
- justified deviations from Figma, especially for accessibility, semantics, missing tokens, or platform limitations

## Examples

### Example 1: Implement a single component from a URL

User request:

```text
Implement this button from Figma in our app and reuse the existing button if possible:
https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15
```

Expected execution:

1. extract `fileKey` and `nodeId`
2. fetch `get_design_context`
3. fetch `get_screenshot`
4. inspect the repository for an existing button
5. map Figma variant/state to the code component's props
6. map colors, spacing, and radius to project tokens
7. implement or extend the button
8. validate against screenshot and accessibility expectations
9. provide a deviation note if exact token matches do not exist

See also: `examples/component-implementation-prompt.md`

### Example 2: Implement a large dashboard by decomposition

User request:

```text
Build this dashboard screen from Figma in our existing frontend. Reuse current layout primitives and chart containers:
https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Dashboard?node-id=10-5
```

Expected execution:

1. fetch `get_metadata` for the full screen if complexity is high
2. identify major child areas such as header, sidebar, hero cards, data panels
3. fetch child-node design context for each section
4. fetch one full-screen screenshot for parity review
5. implement sections incrementally using existing components
6. reconcile token mismatches deliberately
7. validate section-by-section, then screen-wide
8. return a note listing reused components and any approved deviations

See also: `examples/page-decomposition-prompt.md`

### Example 3: Document a justified deviation

```text
Implemented the card using the existing `Card` and `Button` primitives. Mapped Figma's 14px vertical spacing to the closest approved spacing token used by this repo. Kept native button semantics and visible focus styling even though the design file did not show a focus state. Replaced a non-semantic clickable container with a real button for keyboard accessibility.
```

See also: `examples/deviation-note-example.md`

## Best Practices

### Do

- start with `get_design_context` and `get_screenshot`, not assumptions
- use metadata-first decomposition for large or truncated nodes
- keep the screenshot available while implementing
- reuse or extend existing project components before creating new ones
- map Figma values into project tokens systematically
- document gaps when token values or component behavior do not match exactly
- preserve semantic HTML and keyboard support
- use native controls first and ARIA only where needed
- validate incrementally during implementation, not only at the end
- leave a short implementation note for reviewers or the next agent

### Don't

- do not treat this skill as MCP setup or auth support
- do not implement directly from a verbal description when the node context is available
- do not copy utility-heavy generated output into a codebase without translating it to project conventions
- do not import new icon libraries just because matching assets are inconvenient to fetch
- do not hardcode a spread of visual constants when the project already has approved tokens
- do not duplicate an existing component just to match a Figma variant visually
- do not sacrifice semantics, keyboard access, focus visibility, or accessible naming for screenshot parity

### Implementation rules

#### Component organization

- place new UI code where the project expects reusable components to live
- follow the repository's naming and export conventions
- keep component APIs small and consistent with surrounding code

#### Design-system integration

- extend existing components when the design is a variant
- keep variant naming aligned with repository patterns
- treat Figma-generated code as a reference artifact, not a literal implementation target

#### Code quality

- avoid unnecessary inline styles
- extract repeated values to tokens or constants when appropriate
- add prop types or TypeScript types when the project standard expects them
- keep markup minimal and semantically correct

## Troubleshooting

### Problem: MCP server is not connected or authentication expired

**Symptoms:** MCP calls fail immediately, tools are unavailable, or the session appears unauthorized.

**Solution:** Stop implementation work. Do not try to repair setup in this skill. Ask the user to restore the Figma MCP connection and route to `@figma` for setup or auth troubleshooting.

### Problem: Missing or invalid `node-id`

**Symptoms:** The URL is present but tool calls fail, or the returned node does not match what the user expected.

**Solution:** Re-parse the URL carefully. Confirm the `node-id` query parameter and file key. If using desktop selection mode, confirm the intended node is selected in the Figma desktop app.

### Problem: `get_design_context` is truncated or too large to use safely

**Symptoms:** Returned context is incomplete, huge, or missing important nested detail.

**Solution:** Switch to decomposition. Fetch metadata for the parent node, identify child sections, then request design context for smaller child nodes individually. Use the full screenshot to preserve screen-level parity.

### Problem: Assets fail to load

**Symptoms:** Images or SVGs do not render, asset URLs look local, or later requests no longer resolve.

**Solution:** Use the returned asset source exactly as provided during the active session. If the URL is session-scoped, consume or store the asset according to project policy before the session ends. Do not substitute with third-party assets unless explicitly approved.

### Problem: Code structure seems correct but visuals still drift from Figma

**Symptoms:** The implementation is semantically sound but spacing, typography, hierarchy, or proportions look wrong.

**Solution:** Compare directly against the screenshot, then cross-check the structured design context for spacing, typography, and layout constraints. Validate section-by-section instead of trying to tune the whole screen at once.

### Problem: Project components conflict with the Figma specification

**Symptoms:** An existing component is close, but not visually exact, or its prop model does not cover the design.

**Solution:** Prefer extending the existing component when the gap is a reasonable variant or prop addition. If extension would break the component model, document the mismatch and create a narrowly scoped new component only when justified.

### Problem: Project tokens differ from Figma values

**Symptoms:** Exact colors, spacing, or radius values from the design are not available in the codebase.

**Solution:** Prefer the nearest approved token, record the difference, and document any visible delta. Use a temporary constant only when no approved option exists and the repository permits it.

### Problem: The design implies an inaccessible pattern

**Symptoms:** The screenshot suggests non-semantic clickable containers, missing focus states, poor contrast, or interactions that are hard to use via keyboard.

**Solution:** Preserve accessibility and semantic correctness even if the raw visual comp does not show it. Implement the accessible version, then document the deviation clearly in the implementation note.

## Related Skills

- `@figma` - Use when MCP setup, OAuth, connection recovery, or general Figma inspection is the real task.
- `@accessibility` - Use when the task becomes a deeper accessibility review beyond normal implementation validation.
- frontend testing or visual regression skill in this repository - Use when the implementation now needs automated screenshot comparison or regression coverage.
- design-system or token-management skill in this repository - Use when the main issue becomes token architecture, shared primitives, or broader component-system work.

## Additional Resources

### Local workflow kit

- [Implementation checklist](references/implementation-checklist.md)
- [Parity review rubric](references/parity-review-rubric.md)
- [Token mapping worksheet](references/token-mapping-worksheet.md)
- [Component mapping guide](references/component-mapping-guide.md)
- [Implementation troubleshooting guide](references/troubleshooting-figma-implementation.md)
- [Single-component implementation prompt](examples/component-implementation-prompt.md)
- [Page decomposition prompt](examples/page-decomposition-prompt.md)
- [Deviation note example](examples/deviation-note-example.md)
- [Handoff router](agents/handoff-router.md)

### External references

- [Figma MCP documentation](https://developers.figma.com/docs/mcp)
- [Figma Dev Mode MCP server guide](https://developers.figma.com/docs/mcp/dev-mode-mcp-server)
- [Figma MCP tools](https://developers.figma.com/docs/mcp/tools)
- [Figma Code Connect](https://developers.figma.com/docs/code-connect)
- [Figma variables guide](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [MDN ARIA reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [MDN HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/)

## Provenance note

This enhanced skill preserves the upstream intent of a Figma-to-code workflow packaged from community source material, but the guidance here is intentionally rewritten into clear English and reorganized for agent execution, safer routing, stronger validation, and better design-system translation.

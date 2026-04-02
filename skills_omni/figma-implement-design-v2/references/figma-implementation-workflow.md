# Figma Implementation Workflow

Use this playbook when translating a Figma node into production-ready code.

## Prerequisites

- The task deliverable is code in the repository.
- You have either:
  - a Figma URL with a `node-id`, or
  - a valid selected node through a supported Figma desktop MCP flow.
- Figma MCP or Dev Mode access is available if exact implementation is required.

If these are not true, request prerequisites rather than guessing.

## Execution order

1. Confirm this is an implementation task, not a Figma editing task.
2. Parse `fileKey` and `nodeId` when using a URL.
3. Run `get_design_context(...)` first.
4. Run `get_screenshot(...)` for visual validation.
5. If needed, run `get_metadata(...)` and decompose large nodes.
6. Inspect the repository for reusable components and tokens.
7. Map variables and raw values into project tokens.
8. Implement with project conventions.
9. Validate visually, responsively, and semantically.
10. Document deviations before handoff.

## What to extract from Figma

Capture at minimum:

- component or frame structure
- variant and state information
- Auto Layout direction, spacing, alignment, padding, and sizing behavior
- typography styles and token references
- color, radius, border, and shadow values
- assets and image/icon usage
- responsive or constraint hints

## When to decompose

Decompose the target into child nodes when:

- the context response is truncated
- the frame is a full page or complex dashboard
- the frame contains multiple independent regions
- variants or repeated structures are easier to reason about separately

Suggested sequence:

1. Run `get_metadata(...)`
2. List major child sections
3. Fetch design context for each important child node
4. Implement the shell first
5. Implement each section
6. Re-validate against the parent screenshot

## Handoff checklist

Before declaring completion, summarize:

- implemented components or screens
- reused local components
- token mappings used
- assets used
- deviations and why they were necessary
- any unresolved gaps due to missing prerequisites

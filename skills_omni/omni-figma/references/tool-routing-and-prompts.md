# Tool Routing and Prompt Patterns

## Core inspection tools

- `get_design_context`: Default tool for design-to-code work. Fetch structured context for the exact node.
- `get_screenshot`: Always pair with implementation work so visual validation has a fixed source of truth.
- `get_metadata`: Use for large or complex frames before refetching child nodes.
- `get_variable_defs`: Use when the task is about tokens, variable names, or values rather than generated code.

## Reuse and mapping tools

- `get_code_connect_map`: Check whether a component is already mapped to code.
- `get_code_connect_suggestions`: Get unmapped published components and mapping candidates.
- `send_code_connect_mappings`: Save approved mappings in bulk.
- `add_code_connect_map`: Add a direct mapping when the target component is already known.
- `search_design_system`: Find existing design system components, variables, and styles before creating anything new in Figma.
- `create_design_system_rules`: Generate reusable repo-specific instructions for Figma-driven implementation.

## Write and generation tools

- `use_figma`: Default write tool for existing Figma files. Use for node edits, layout fixes, variables, styles, components, and code-to-canvas updates.
- `generate_figma_design`: Use only for the first capture or import of a webpage or HTML into Figma.
- `generate_diagram`: Use for simple FigJam diagrams only.
- `get_figjam`: Inspect or convert an existing FigJam board.
- `whoami`: Use for auth and permission debugging.

## Prompt patterns

### Implement code from design

- "Implement this exact Figma node in the current codebase. Reuse existing components and validate against the screenshot."
- "Generate code for this Figma selection using the project's existing UI primitives, not raw Tailwind output."

### Inspect tokens or variables

- "Get the variable names and values used in this frame."
- "List the spacing, color, and typography variables used by this component."

### Understand a large screen

- "Get metadata for this screen first so we can split it into smaller implementation units."
- "Fetch the node tree, identify the main child sections, then get design context for only those children."

### Code Connect

- "Show the existing Code Connect mapping for this component."
- "Suggest Code Connect mappings for this selection, then compare them against components in this repo."
- "Map this Figma component to `src/components/ui/Button.tsx` as `Button`."

### Write or update inside Figma

- "Update this existing Figma file to reuse the design system component instead of detached layers."
- "Fix the Auto Layout, spacing, and variable usage in this selected frame."

### Capture a webpage into Figma

- "Capture this page into a new Figma file."
- "Import this local page into the existing Figma file as a new page."

## `generate_figma_design` workflow

1. Call it without `outputMode` first so the tool can return the available output choices.
2. Choose `newFile`, `existingFile`, or `clipboard`.
3. If it returns a `captureId`, poll with that `captureId` every 5 seconds, up to 10 times, until the status is `completed`.
4. After the first import succeeds, use `use_figma` for follow-up edits instead of recapturing unless the user explicitly wants a fresh import.

## Routing notes

- If the task is ambiguous between implementation and inspection, start with inspection.
- If the output is generic or the wrong modality, change the prompt so the intended tool is explicit.
- When parsing a Figma URL manually, convert `node-id=1-2` to `1:2` if the target tool expects colon-separated node IDs.
- Prefer smaller nodes and repeated calls over one huge frame.

## Source notes

- Tool selection and explicit prompting: `https://developers.figma.com/docs/figma-mcp-server/trigger-specific-tools/`
- Code Connect integration: `https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/`
- The initial implementation flow still follows Figma's official Implement Design guidance.

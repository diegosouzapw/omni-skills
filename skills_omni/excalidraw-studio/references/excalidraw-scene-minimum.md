# Minimum Excalidraw Scene Structure

Use this as a conservative, minimum known-good checklist for generated `.excalidraw` files.

## Top-level scene shape

A usable scene should include:

- `elements`: array of scene elements
- `appState`: object for scene/editor state
- `files`: object for embedded files or attachments

Minimal conceptual shape:

```json
{
  "elements": [],
  "appState": {},
  "files": {}
}
```

Do not assume this is a complete schema reference. It is a practical minimum for generation and troubleshooting.

## Preserve when editing

When patching an existing scene:

- preserve `files` unless you are certain they are unused
- preserve relevant `appState` instead of resetting it blindly
- preserve existing element IDs when unchanged
- avoid unnecessary rewrites of unrelated elements

## Element modeling rules

### Text inside shapes

Do not invent a `label` shorthand.

Instead:
- create the shape
- create a separate text element
- add the text element to the shape's `boundElements`
- set the text element's `containerId` to the shape ID

### Arrow labels

Use the same pattern:
- arrow element
- separate text element
- text bound to arrow via `containerId`

### Arrow connections

When an arrow should remain attached to elements:
- use `startBinding`
- use `endBinding`
- ensure connected elements reference relevant bindings where needed in `boundElements`

## Ordering guidance

To avoid hidden text:

1. zones/background regions first
2. shapes next
3. arrows next
4. text elements last

## Safe assumptions

These are usually safe operational assumptions for this skill:

- strict JSON is required
- `files` should exist even when empty
- text should be modeled as text elements, not inline labels on shapes
- scene edits should be conservative

## When this cheat sheet is not enough

Use official Excalidraw documentation when:

- you are coding against the Excalidraw package
- you need restore/export helper behavior
- you are dealing with embedded assets, libraries, or programmatic export
- a scene opens inconsistently across environments

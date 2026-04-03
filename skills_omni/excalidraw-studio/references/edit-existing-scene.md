# Safe Editing of Existing Excalidraw Scenes

Use this procedure when the user provides an existing `.excalidraw` file and asks for a modification.

## Goal

Make the requested change without accidentally removing valid scene content, assets, or editor state.

## Procedure

1. Inspect the current file before editing.
2. Identify the exact elements that must change.
3. Preserve unrelated elements whenever possible.
4. Preserve top-level `files`.
5. Preserve relevant `appState`.
6. Reuse existing IDs for unchanged elements.
7. Add new IDs only for new elements.
8. Revalidate the full scene after patching.
9. Open-test the result if possible.

## Preserve these first

- `files`
- existing assets and attachments
- important style choices already present in the diagram
- lane/zone structure
- stable IDs for unchanged elements
- editor state that may matter to downstream consumers

## Avoid these destructive patterns

- regenerating the entire scene when the request is small
- dropping `files` because they seem unrelated
- normalizing all colors, fonts, or roughness without user request
- replacing all IDs needlessly
- flattening grouped or structured layouts into a generic redraw

## Good editing pattern

Good:
- add one cache box and two arrows to an existing architecture diagram
- preserve current layout and color semantics
- keep scene attachments untouched

Bad:
- rebuild the whole architecture scene from scratch with different IDs and styling for a one-box edit

## If the scene is already broken

If the existing file is invalid or opens poorly:

1. keep a copy of the original
2. repair the smallest structural issue first
3. validate again
4. only then apply the requested functional edit

## Handoff note

Tell the user whether the result was:

- a conservative patch
- a partial repair plus patch
- a full regeneration, and why full regeneration was necessary

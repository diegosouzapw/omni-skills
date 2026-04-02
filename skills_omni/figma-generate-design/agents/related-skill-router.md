# Related Skill Router

Use this router when the task no longer fits full-screen generation or update from a design system.

## Stay in `figma-generate-design` when

- the deliverable is a complete screen, page, or multi-section view
- the work is primarily about assembling or updating that screen in Figma
- the result should stay linked to design-system components, variables, and styles

## Switch to `figma-use` when

- you need lower-level Figma API patterns or direct node manipulation guidance
- the work is focused on creating or editing reusable components rather than composing a page
- the task is a smaller direct editing operation rather than a screen-building workflow

## Switch to `figma-implement-design` when

- the user wants code generated from a Figma design
- the main output is implementation artifacts rather than a Figma screen

## Switch to `figma-code-connect-components` when

- the task is about Code Connect mappings
- the work is centered on component-code linkage rather than screen composition

## Handoff rule

When switching skills, preserve:

- the source of truth
- the target file or frame
- discovered component, variable, and style references
- any known QA gaps or missing library assets

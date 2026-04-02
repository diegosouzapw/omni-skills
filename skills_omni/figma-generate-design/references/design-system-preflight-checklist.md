# Design System Preflight Checklist

Use this checklist before building or updating a screen.

## 1. Confirm file and access

- Confirm the target Figma file and page.
- Confirm you can inspect existing frames on the page.
- Confirm linked libraries are available to the file.
- If expected assets are missing, check whether the issue is access, publication, or search strategy.

## 2. Confirm the source of truth

Identify which source you are matching:

- code
- running web app
- screenshots
- product specification
- existing Figma screen to update

If code exists, identify the exact files that define:

- page structure
- section order
- component usage
- default props and states

## 3. Check for existing comparable screens

Before searching broadly, inspect whether the file already contains:

- a similar page
- a similar section
- component instances using the same design system
- bound variables or styles you can reuse as authoritative references

Preferred order of discovery:

1. existing screen instances
2. existing styles and bound variables
3. design-system search across libraries

## 4. Identify expected component families

List the likely components before building:

- navigation
- buttons
- cards
- forms
- tabs or pills
- tables
- accordions
- footers

This helps you search with synonyms instead of guessing one exact name.

## 5. Identify expected token families

List the likely token or style families:

- background and surface colors
- text and border colors
- spacing scale
- radii
- heading and body text styles
- shadow or elevation styles

## 6. Decide the layout model early

Before creating nodes, decide:

- wrapper frame size
- vertical or horizontal Auto Layout where applicable
- whether layout grids are needed
- which sections should fill, hug, or remain fixed
- which children need constraints when the parent resizes

## 7. Decide create vs update mode

### New build

- create a wrapper first
- build one section per call
- validate each section before continuing

### Existing screen update

- inspect structure first
- identify the minimum changed nodes
- prefer property changes and swaps over deletion and rebuild

## 8. Preflight exit criteria

Do not start construction until you can answer these:

- What file and page am I editing?
- What screen or frame am I creating or updating?
- What are the main sections?
- What component families will I need?
- Where will variables and styles likely come from?
- Is there an existing screen I can inspect for authoritative references?
- What breakpoint or viewport am I targeting?

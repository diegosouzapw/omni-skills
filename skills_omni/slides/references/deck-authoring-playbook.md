# Deck Authoring Playbook

Use this guide when creating or substantially editing a deck with PptxGenJS.

## Goals

- preserve editable `.pptx` output
- reduce layout drift across environments
- keep authoring code maintainable
- make QA and handoff reproducible

## Authoring order

1. Confirm the deck goal: new deck, rebuild, or narrow edit.
2. Set layout first.
3. Set theme fonts and common style constants.
4. Copy `assets/pptxgenjs_helpers/` into the task workspace.
5. Organize source into modules when the deck is more than trivial.
6. Prefer native PowerPoint elements before raster assets.
7. Generate the deck.
8. Render and validate before handoff.

## Layout and theme

- Match the original aspect ratio before placing elements.
- Default to `LAYOUT_WIDE` only when no source constraint says otherwise.
- Record the selected layout near the top of the source file.
- Set theme fonts explicitly.
- Prefer broadly available Office fonts unless the task explicitly requires another font family.

## Suggested source organization

For nontrivial decks, split code into small modules:

- `theme.js` - fonts, colors, margins, common text styles
- `helpers.js` - local wrappers around bundled helper utilities
- `slides/slide-01.js` etc. - slide builders
- `index.js` - deck assembly and write step

## Native versus raster decision rule

Default to native PowerPoint objects when possible:

- text -> native text
- bullet lists -> native text with bullet options
- tables -> native tables
- simple charts -> native charts
- simple dividers/boxes/arrows -> native shapes

Use SVG or PNG when:

- the visual is brand-locked artwork
- the diagram is too complex for native shapes
- the equation or code block is better represented as generated SVG/runs
- the source asset already exists as a final graphic

## Required validation hooks for edited or generated slides

Include these checks in authoring code when practical:

- `warnIfSlideHasOverlaps(slide, pptx)`
- `warnIfSlideElementsOutOfBounds(slide, pptx)`

Resolve all unintended warnings before handoff.

## Delivery minimum

Ship:

- final `.pptx`
- source `.js`
- required assets
- any notes about nonstandard fonts or media dependencies

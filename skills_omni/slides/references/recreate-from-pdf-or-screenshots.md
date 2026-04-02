# Recreate from PDF or Screenshots

Use this guide when the source is a PDF, screenshot, or other visual reference rather than editable slide source.

## Principle

Treat PDFs and screenshots as **reference inputs**, not editable PowerPoint sources.

The goal is to rebuild the slide so the result is visually close while keeping as much of the output editable as practical.

## Rebuild sequence

1. Render or inspect the reference source first.
2. Determine the original aspect ratio.
3. Identify which elements should remain editable:
   - text
   - tables
   - simple charts
   - simple shapes
4. Identify which elements are better treated as graphics:
   - logos
   - complex diagrams
   - screenshots
   - intricate illustrations
5. Rebuild the slide in PptxGenJS.
6. Render the rebuilt slide.
7. Compare and adjust.

## Practical rules

- Keep text as native text whenever possible.
- Recreate simple charts as native charts where possible.
- Use SVG or PNG for visuals that would be expensive or brittle to rebuild natively.
- Match slide geometry before tuning pixel-level placement.
- Expect multiple render-and-adjust passes for dense slides.

## Common mistake

Do not import a PDF and assume the result is now a clean editable deck. Rebuild intentionally instead.

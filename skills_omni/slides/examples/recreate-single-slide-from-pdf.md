# Example: Recreate a Single Slide from a PDF

## Goal

Rebuild one slide from a PDF reference while preserving editability where practical.

## Prompt shape

```text
Use @slides to recreate slide 2 from this PDF as an editable PowerPoint slide. Match the original aspect ratio first, keep text editable, use native shapes where practical, and render the rebuilt slide to PNG for comparison before handoff.
```

## Expected workflow

1. Inspect the reference slide.
2. Match aspect ratio.
3. Rebuild text, shapes, and simple charts natively.
4. Place any necessary artwork as SVG or PNG.
5. Render and compare.
6. Deliver `.pptx`, source `.js`, and required assets.

# Render and QA Guide

Rendered validation is mandatory for this workflow.

Helper-based fit estimates are useful, but they do not guarantee final PowerPoint fidelity because line wrapping and sizing can change with fonts and render environments.

## Standard QA sequence

1. Generate the `.pptx`.
2. Render slides to PNG.
3. Build a montage for quick visual scanning if the deck has multiple slides.
4. Run overflow or out-of-bounds checks.
5. Run font diagnostics if typography matters.
6. Fix issues and rerun the same checks.

## Commands

```bash
python3 scripts/render_slides.py deck.pptx --output_dir rendered
python3 scripts/create_montage.py --input_dir rendered --output_file montage.png
python3 scripts/slides_test.py deck.pptx
python3 scripts/detect_font.py deck.pptx --json
```

## What to inspect visually

Check for:

- text overflow or clipped descenders
- line breaks that differ from expectations
- overlapping labels, shapes, or charts
- cropped or stretched images
- inconsistent margins across repeated slides
- font fallback or typography drift
- objects touching or crossing slide edges

## Acceptance gates

Do not hand off until:

- the deck renders successfully
- no unintentional overflow remains
- no unintentional overlaps remain
- recreated slides visually match the reference at the chosen aspect ratio
- required font dependencies are known and documented

## If rendering fails

- confirm the deck opens cleanly
- test a smaller subset of slides if practical
- simplify or temporarily remove unusual media
- normalize problematic assets before retrying
- rerun after each change to isolate the cause

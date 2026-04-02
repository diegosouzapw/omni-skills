---
name: "slides"
description: "Slides workflow skill. Use this skill when the user needs to create, recreate, edit, validate, or troubleshoot editable PowerPoint slide decks (.pptx) with PptxGenJS, bundled layout helpers, and render/QA utilities. Use it for new deck authoring, rebuilding slides from screenshots, PDFs, or reference decks, making targeted edits while preserving editable output, adding charts or diagrams, or diagnosing layout issues such as overflow, overlap, aspect-ratio drift, media compatibility, and font substitution."
version: "0.0.1"
category: "frontend"
tags:
  - "slides"
  - "pptx"
  - "powerpoint"
  - "pptxgenjs"
  - "presentation"
  - "deck"
  - "layout"
  - "rendering"
  - "fonts"
  - "qa"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/slides"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Slides

## Overview

Use this skill to produce **editable PowerPoint decks** with **PptxGenJS** and the bundled slide helper and validation workflow.

This skill is for operational slide work, not generic design commentary. It helps an agent:

- create a new `.pptx` deck from requirements
- recreate slides from screenshots, PDFs, or reference decks while keeping output editable where practical
- make targeted edits to an existing deck workflow without flattening everything into images
- validate rendering, overflow, overlaps, out-of-bounds placement, and font substitution before handoff
- package deliverables so another reviewer can rebuild or troubleshoot the deck later

Preserve the upstream intent: use the packaged helper assets and validation scripts instead of inventing a parallel workflow.

## When to Use This Skill

Use this skill when the request is specifically about **authoring or maintaining editable PowerPoint output**.

### Use it when

- You need to build a new `.pptx` deck in JavaScript with PptxGenJS.
- You need to recreate one or more slides from a PDF, screenshot, or reference deck.
- You need to modify content while preserving editable text, shapes, tables, and charts where possible.
- You need to add charts, diagrams, equations, code blocks, or branded visuals to a deck.
- You need to diagnose slide layout problems such as text overflow, overlap, out-of-bounds elements, or aspect-ratio mismatch.
- You need a reproducible workflow with source `.js`, assets, rendered review images, and clear handoff artifacts.

### Do not use it when

- The task is only visual critique or presentation strategy with no deck authoring.
- The deliverable is a flattened PDF or image set rather than an editable `.pptx`.
- The task is OCR-only extraction from scanned pages.
- The task is generic document conversion and does not require PowerPoint-native editing.
- The task is best solved by another specialization after initial slide context is understood.

## Operating Table

| Situation | Start here | Output expected |
| --- | --- | --- |
| New deck from requirements | `references/deck-authoring-playbook.md` | Theme/layout decision, modular JS source, editable `.pptx` |
| Recreate from PDF or screenshots | `references/recreate-from-pdf-or-screenshots.md` | Geometry-matched rebuilt slide(s), editable where practical |
| Dense deck or layout-sensitive edits | `references/render-and-qa.md` | Rendered PNGs, montage, overflow review, issue fixes |
| Font or media portability concerns | `references/media-and-font-compatibility.md` | Safer asset choices, dependency notes, fallback plan |
| Upstream provenance or bundled intake context | `references/omni-import-playbook.md` | Reviewable lineage and imported workflow context |

## Workflow

Follow this sequence unless the task is explicitly narrower.

1. **Classify the request**
   - Decide whether you are creating a new deck, recreating from references, or editing an existing workflow.
   - Confirm the real deliverable: editable `.pptx`, source `.js`, and any required assets.

2. **Inspect source material before authoring**
   - Review screenshots, PDFs, or the reference deck.
   - If recreating, identify slide count, aspect ratio, major font choices, repeated layouts, and which elements must remain editable.
   - Treat PDF as a visual reference, not as an editable source format.

3. **Set layout and theme early**
   - Match the original slide size before rebuilding.
   - Default to `LAYOUT_WIDE` only when the source does not imply another ratio.
   - Set theme fonts explicitly in code. Do not rely on host defaults.

4. **Prepare a task-local workspace**
   - Keep work in a local task directory.
   - Copy `assets/pptxgenjs_helpers/` into the workspace and import from there.
   - Normalize awkward source artwork before placement if needed.

5. **Author in modular JavaScript**
   - Keep theme/constants/helpers/slides separate when the deck is more than trivial.
   - Prefer native PowerPoint text, shapes, tables, and charts whenever possible.
   - Use SVG or PNG only for visuals that are not practical as native slide elements.
   - If substantially editing or generating slides, include overlap and out-of-bounds warnings in the authoring code.

6. **Generate the deck**
   - Write the `.pptx` from the JavaScript source.
   - Keep the source `.js` as a first-class deliverable.

7. **Render for QA**
   - Render the deck to per-slide PNGs with `render_slides.py`.
   - Build a montage for quick review on larger decks.
   - Compare rendered output against the reference material, especially for recreated slides.

8. **Run structural checks**
   - Use `slides_test.py` when slide edges are tight, text is dense, or multiple edits were made.
   - Check for substituted or missing fonts with `detect_font.py` when typography or line breaks matter.

9. **Fix issues and rerun validation**
   - Correct overflow, overlap, bad cropping, spacing drift, or aspect-ratio problems.
   - Re-render after each meaningful change to confirm the fix.

10. **Package handoff artifacts**
   - Deliver the final `.pptx`, authoring `.js`, and any required generated assets.
   - If nonstandard fonts or media are required, document that dependency in the handoff.
   - Do not present the deck as complete until rendered review has passed.

### Validation Commands

Examples below assume the scripts are available in the working directory. If not, call the same files relative to this skill folder.

```bash
# Render slides to PNGs for visual review
python3 scripts/render_slides.py deck.pptx --output_dir rendered

# Build a montage for quick scanning
python3 scripts/create_montage.py --input_dir rendered --output_file montage.png

# Check for content outside the slide canvas
python3 scripts/slides_test.py deck.pptx

# Detect missing or substituted fonts
python3 scripts/detect_font.py deck.pptx --json
```

## Examples

### Example 1: Start a new editable deck

```text
Use @slides to create a 16:9 editable PowerPoint deck in PptxGenJS. Set theme fonts explicitly, keep charts editable where possible, and deliver both the .pptx and source .js. Render the deck to PNGs and review for overflow before handoff.
```

**Expected outcome:** A reproducible deck workflow with source code, editable output, and render artifacts for review.

### Example 2: Recreate one slide from a PDF

```text
Use @slides to recreate slide 3 from this PDF as an editable .pptx slide. Match the original aspect ratio first, keep text editable, use native shapes where practical, and render the rebuilt slide for side-by-side comparison.
```

**Expected outcome:** A rebuilt slide that visually matches the reference while preserving editability wherever feasible.

### Example 3: Run QA on a dense deck

```bash
python3 scripts/render_slides.py deck.pptx --output_dir rendered
python3 scripts/create_montage.py --input_dir rendered --output_file montage.png
python3 scripts/slides_test.py deck.pptx
python3 scripts/detect_font.py deck.pptx --json
```

**Expected outcome:** Rendered review images plus structural and font diagnostics that can be used to fix layout issues before delivery.

### Example 4: Normalize awkward artwork before placement

```text
Use @slides to rebuild this slide, but normalize the source artwork first. If the supplied visual is HEIC, EMF, SVG, or PDF-like, convert it to a safe raster or use SVG placement where appropriate before adding it to the deck.
```

**Expected outcome:** Predictable rendering with fewer missing-image or blurry-output problems.

### Example 5: Make a surgical text edit without breaking layout

```text
Use @slides to update the headline and two bullets on slides 5-7, preserve the existing aspect ratio and style, rerender the affected slides, and report any font substitution or new overflow risk.
```

**Expected outcome:** Narrow edits with explicit QA rather than an uncontrolled deck rewrite.

## Best Practices

### Do

- Set slide layout and aspect ratio before authoring the first slide.
- Set theme fonts explicitly.
- Prefer broadly available Office fonts unless the task explicitly depends on another typeface.
- Keep text as text and simple charts as native charts whenever possible.
- Use `autoFontSize`, `calcTextBox`, and related helpers instead of relying on PptxGenJS `fit` or `autoFit`.
- Use bullet options instead of literal bullet characters.
- Use `imageSizingCrop` or `imageSizingContain` instead of built-in image sizing shortcuts when consistency matters.
- Use `latexToSvgDataUri()` for equations and `codeToRuns()` for syntax-highlighted code blocks.
- Include `warnIfSlideHasOverlaps(slide, pptx)` and `warnIfSlideElementsOutOfBounds(slide, pptx)` when generating or substantially editing slides.
- Render to PNG and review the result before handoff.
- Deliver both the `.pptx` and the source `.js` so the deck can be rebuilt later.

### Do not

- Do not use `python-pptx` as the primary deck generation path for this workflow.
- Do not assume local text measurements guarantee final PowerPoint fidelity.
- Do not switch aspect ratio midway through a rebuild unless you intentionally plan to relayout the deck.
- Do not flatten editable content into images unless there is no practical native alternative.
- Do not treat PDF as a round-trip editable source.
- Do not rely on unsupported or poorly portable media formats without documenting the risk.
- Do not ship a deck that has not been visually rendered and reviewed.

## Troubleshooting

### Problem: Rendered slides have different line breaks than expected

**Symptoms:** Text looked acceptable in code review or helper-based sizing, but rendered output wraps differently, bullets move, or headings spill into nearby elements.

**Solution:** Check for font substitution with `detect_font.py`. Confirm the intended theme font is actually available in the render environment. Reduce text box density, adjust font size or box dimensions, and rerender. Remember that helper-based sizing is only an estimate; rendered QA is the real acceptance gate.

### Problem: The rebuilt deck looks stretched, cropped, or misaligned compared with the reference

**Symptoms:** Spacing is consistently off, elements appear wider or taller than in the source material, or screenshots from the rebuilt deck do not align with the original.

**Solution:** Reconfirm the original slide aspect ratio before continuing. Match layout first, then rerender. If you already authored multiple slides with the wrong ratio, expect to relayout them instead of patching individual coordinates.

### Problem: Headless render fails or produces blank slides

**Symptoms:** `render_slides.py` fails, conversion output is incomplete, or rendered slides are blank or partially missing.

**Solution:** Verify the local render toolchain is available and the input `.pptx` opens cleanly. Remove or simplify problematic media, test with a smaller subset of slides, and rerun. If fonts or embedded assets are unusual, normalize them before trying again. See `references/render-and-qa.md` for a focused checklist.

### Problem: Images are missing, blurry, or rendered with bad transparency

**Symptoms:** Placed visuals disappear, look soft, or show unexpected backgrounds after rendering.

**Solution:** Normalize awkward source assets first. Prefer SVG for supported vector placement or PNG for stable raster placement. If the original input is HEIC, EMF, or PDF-like, generate a safe intermediate image before adding it to the slide. Confirm the asset dimensions are sufficient for the placed size.

### Problem: Overflow or overlap warnings appear after a small text edit

**Symptoms:** A seemingly minor copy change causes clipping, collisions, or elements outside the slide canvas.

**Solution:** Treat copy edits as layout edits when slides are dense. Rerun overlap and bounds checks, resize or reposition the affected boxes, and rerender the changed slides. Leave a short code comment only when an overlap is intentional.

### Problem: Reviewers cannot reproduce the result

**Symptoms:** The `.pptx` exists, but there is no clear source, asset bundle, or explanation of required fonts and generated files.

**Solution:** Package the `.pptx`, source `.js`, referenced assets, and any generated helper outputs required to rebuild. Document font and media dependencies explicitly in the handoff notes.

## Related Skills

- `@doc` - Use when the task becomes documentation-heavy and the main output is process or narrative content rather than deck authoring.
- `@chatgpt-apps` - Use when the real work becomes application behavior or product integration outside slide production.
- `@aspnet-core` - Use when slide work is only a thin layer over a larger .NET implementation task.
- `@develop-web-game` - Use only if the task drifts into interactive frontend behavior rather than presentation authoring.

## Additional Resources

### Core local references

- [Deck authoring playbook](references/deck-authoring-playbook.md)
- [Render and QA guide](references/render-and-qa.md)
- [Media and font compatibility](references/media-and-font-compatibility.md)
- [Recreate from PDF or screenshots](references/recreate-from-pdf-or-screenshots.md)
- [PptxGenJS helper reference](references/pptxgenjs-helpers.md)

### Bundled workflow assets

- `assets/pptxgenjs_helpers/`: copy into the deck workspace and import locally instead of rewriting helper logic.
- `scripts/render_slides.py`: rasterize a `.pptx` or `.pdf` to per-slide PNGs.
- `scripts/slides_test.py`: detect content that overflows the slide canvas.
- `scripts/create_montage.py`: build a contact-sheet montage of rendered slides.
- `scripts/detect_font.py`: report missing or substituted fonts as the render toolchain resolves them.
- `scripts/ensure_raster_image.py`: convert awkward image inputs into PNGs for inspection or placement.

### Imported provenance and intake support

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

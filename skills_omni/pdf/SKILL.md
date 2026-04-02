---
name: "pdf"
description: "PDF workflow skill. Use this skill when a task requires reading, creating, modifying, or reviewing PDF files where rendering, page layout, typography, tables, forms, metadata, or delivery quality matter; prefer visual validation by rendering pages and use Python PDF libraries only for the parts they handle well."
version: "0.0.1"
category: "frontend"
tags:
  - "pdf"
  - "rendering"
  - "reportlab"
  - "pdfplumber"
  - "pypdf"
  - "poppler"
  - "qpdf"
  - "review"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
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
upstream_skill: "skills/pdf"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# PDF Skill

## Overview

Use this skill for PDF work where visual fidelity matters, not just raw text extraction. Typical tasks include reviewing layout, generating a polished PDF, merging or splitting files, checking metadata or encryption, extracting text or tables with page context, and validating that the delivered file opens and renders correctly.

This skill preserves the original intent of the upstream PDF workflow while reshaping it into an operator-ready package. The core rule is simple: **render pages for visual truth, use extraction libraries for semantic checks, and validate structure before handoff**.

This skill is not the best default for every document task. If the job is plain text parsing only, OCR-heavy scanned documents, browser print CSS debugging, or compliance-only PDF/A validation, use this skill only for the PDF-specific part and route the rest deliberately.

## When to Use This Skill

Use this skill when the task involves one or more of the following:

- Reviewing a PDF where margins, page breaks, fonts, tables, clipping, or image quality matter.
- Creating a new PDF programmatically with stable layout.
- Updating, merging, splitting, rotating, or inspecting an existing PDF.
- Checking metadata, page count, outlines, forms, encryption state, or permissions.
- Extracting text or tables, but only with awareness that extraction output is not proof of visual correctness.
- Producing a before/after review packet with rendered pages and validation notes.

Do **not** use this skill as the only workflow when:

- The task is plain text extraction and page layout does not matter.
- The input is mainly scanned pages and the real need is OCR.
- The root issue is browser print styling or HTML-to-PDF CSS behavior.
- The task is security-sensitive redaction and actual content removal must be guaranteed.
- The request is specifically about PDF/A or archival conformance and requires dedicated conformance validation.

## Operating Table

| Task | Preferred tools | Verify with | Common failure mode | Fallback |
| --- | --- | --- | --- | --- |
| Visual review | Poppler rendering | Rendered PNG pages + review checklist | Extraction looks fine but layout is broken | Try `pdftocairo` rendering |
| Generate new PDF | ReportLab | Render output + `qpdf --check` | Missing fonts, clipped content, bad page breaks | Simplify layout, register fonts explicitly |
| Merge, split, rotate, reorder | pypdf | Page count, rendered spot-check, `qpdf --check` | Broken bookmarks, malformed output, unexpected page order | Rebuild smaller steps and validate after each |
| Extract text | pypdf or pdfplumber | Compare extracted output to rendered pages | Text order differs from reading order | Use pdfplumber for layout-aware inspection |
| Extract tables | pdfplumber | Compare against rendered page images | Broken cell boundaries, merged columns | Inspect page objects visually first |
| Inspect metadata or encryption | pypdf + qpdf | Validation summary and explicit notes | File opens but is encrypted or permission-limited | Stop and confirm authorization |
| Diagnose malformed PDF | qpdf | `qpdf --check` output + render test | Partial open, inconsistent viewers, parse warnings | Work from a copy and avoid silent rewrites |
| Archival or PDF/A request | This skill + dedicated validator | Conformance validation + rendered review | Assuming a normal PDF is archival-safe | Route to PDF/A validation workflow |

## Workflow

1. **Classify the request**
   - Determine whether the task is review, generation, modification, extraction, or validation.
   - Confirm whether visual fidelity matters.
   - Check whether the request really belongs to OCR, print CSS, redaction, or PDF/A compliance instead.

2. **Inspect the input safely**
   - Work on a copy when modifying user-supplied PDFs.
   - Store intermediate artifacts under `tmp/pdfs/`.
   - Keep final deliverables under `output/pdf/` when working in this repository.
   - Use `scripts/check_pdf_integrity.sh <file.pdf>` first when the file is user-supplied, suspicious, damaged, or unexpectedly complex.

3. **Render pages before trusting conclusions**
   - Render representative pages, or all pages for high-risk changes.
   - Start with `scripts/render_pdf_pages.sh <file.pdf>`.
   - Use fixed DPI for repeatable review.
   - Treat rendered output as the ground truth for layout, clipping, spacing, tables, and font behavior.

4. **Choose the right tool for the job**
   - Use **ReportLab** for creating new PDFs with controlled layout.
   - Use **pypdf** for merging, splitting, rotating, metadata inspection, forms, and general file manipulation.
   - Use **pdfplumber** when page-aware text or table extraction matters.
   - Use **qpdf** for structural validation and diagnostics.
   - Use `pdftocairo` as a rendering fallback when transparency or vector-heavy pages do not rasterize well with the default path.

5. **Run the task in small, reversible steps**
   - Generate or modify one clear artifact at a time.
   - Avoid combining unrelated edits into one pass.
   - After each meaningful update, validate structure and re-render pages.

6. **Validate output structurally and visually**
   - Run `qpdf --check` through the provided helper.
   - Review page count, encryption state, metadata, and forms if relevant.
   - Compare rendered pages against requirements using the review checklist.
   - Do not treat successful extraction as proof that the delivered PDF is correct.

7. **Package findings for handoff**
   - Record what changed, which tools were used, and what was validated.
   - Note any unresolved limitations, such as scanned pages, extraction ambiguity, or missing fonts.
   - Keep provenance visible when the upstream workflow or support pack materially informed the result.

### Dependencies

Prefer `uv` for Python package management.

```bash
uv pip install reportlab pdfplumber pypdf
```

If `uv` is unavailable:

```bash
python3 -m pip install reportlab pdfplumber pypdf
```

System tools for rendering and validation:

```bash
# macOS
brew install poppler qpdf

# Ubuntu/Debian
sudo apt-get install -y poppler-utils qpdf
```

If installation is not possible in the current environment, tell the user exactly which dependency is missing and which step cannot be completed reliably without it.

### Temp and Output Conventions

- Use `tmp/pdfs/` for intermediate files and rendered review images.
- Write final artifacts under `output/pdf/` when working in this repository.
- Keep filenames stable, descriptive, and easy to compare across revisions.
- Remove temporary artifacts when the task is complete unless the user wants a retained review packet.

## Examples

### Example 1: Render a PDF for visual review

```bash
bash scripts/render_pdf_pages.sh input.pdf
```

Expected outcome:
- PNG page renders are written under `tmp/pdfs/rendered/<pdf-name>/`.
- The operator can inspect margins, clipping, typography, image quality, and page breaks.

### Example 2: Validate structure before and after edits

```bash
bash scripts/check_pdf_integrity.sh input.pdf
```

Expected outcome:
- A concise validation summary including `qpdf --check`, page count, metadata hints, and encryption status.

### Example 3: Inspect metadata and basic PDF properties

```bash
python3 scripts/pdf_info.py input.pdf
```

Expected outcome:
- JSON output with page count, metadata, encryption flag, outline presence, and form presence.

### Example 4: Generate a PDF, then verify it correctly

```text
Create the PDF with ReportLab, save it under output/pdf/, run the integrity check, render all pages, and summarize any visible defects before delivery.
```

### Example 5: Compare extraction methods before trusting table output

```text
Extract text and tables from the same PDF with pypdf and pdfplumber, compare the outputs to rendered page images, and note where reading order or cell boundaries diverge.
```

See the local support pack for worked examples:
- [Render and review example](examples/render-and-review.md)
- [Generate with ReportLab](examples/generate-with-reportlab.md)
- [Extract text and tables](examples/extract-text-and-tables.md)
- [Inspect metadata and encryption](examples/inspect-metadata-and-encryption.md)

## Best Practices

### Do

- Render pages for any task where layout, typography, clipping, or image sharpness matter.
- Validate modified PDFs with `qpdf --check` before handoff.
- Use ReportLab for deterministic PDF generation instead of forcing a manipulation library to behave like a layout engine.
- Use pdfplumber when table structure or page geometry matters.
- Compare extraction results against rendered pages before making claims about document content.
- Work incrementally and keep intermediate copies for complex edits.
- Document encryption state, permissions, and any limits you could not safely bypass.
- Keep provenance visible when using the upstream workflow or its support files.

### Do Not

- Do not assume extracted text order matches reading order on the page.
- Do not treat a successfully opened PDF as structurally healthy.
- Do not claim redaction is safe unless the sensitive content is actually removed from the PDF structure.
- Do not pretend scanned PDFs are normal extraction failures when the real issue is missing OCR.
- Do not ship a generated PDF without a rendered review when appearance matters.
- Do not modify protected or encrypted PDFs without clear user authorization.

### Quality Expectations

- Typography, spacing, margins, and section hierarchy should look intentional and consistent.
- Tables, charts, and images should be sharp and aligned.
- Text must not be clipped, overlap, or render as missing glyphs or black boxes.
- Headers, footers, and page numbering should remain consistent across page transitions.
- Final notes should state what was checked visually and what was checked structurally.

## Troubleshooting

### Problem: Extracted text is out of order or does not match the visible layout

**Symptoms:** Paragraphs are scrambled, columns merge together, or tables flatten into unusable text.

**Solution:** Treat this as a normal PDF extraction limitation, not necessarily a tool bug. Compare against rendered page images. Retry with `pdfplumber` for layout-aware inspection, especially for tables. If visual correctness is the goal, rely on rendering rather than extracted text.

### Problem: Rendered output shows missing glyphs, black boxes, or obvious font substitution

**Symptoms:** Characters disappear, symbols render incorrectly, or the generated PDF looks different from the intended design.

**Solution:** Check whether the generation path registered and embedded the intended fonts. Regenerate with explicit ReportLab font configuration where possible, then re-render and compare again. Do not approve the file based only on successful generation logs.

### Problem: The PDF opens in some viewers but behaves inconsistently or fails validation

**Symptoms:** One viewer opens it, another reports errors, or downstream tools fail unexpectedly.

**Solution:** Run `bash scripts/check_pdf_integrity.sh <file.pdf>` and review `qpdf --check` output first. Work from a copy. Avoid repeated blind rewrites. If the file is malformed, document the condition clearly and limit changes to the minimum necessary.

### Problem: The file is encrypted or permission-restricted

**Symptoms:** Metadata inspection shows encryption, edits fail, or extraction is blocked.

**Solution:** Stop and confirm the user's authorization before attempting further modification. Record the encryption state in your notes. Use inspection and validation first; do not imply that protected content can be safely changed without permission.

### Problem: The PDF is a scanned document with little or no extractable text

**Symptoms:** Extraction returns almost nothing, random fragments, or no useful text layer.

**Solution:** Route to an OCR-capable workflow. This skill can still help with rendering and review, but pypdf and pdfplumber are not substitutes for OCR on image-only pages.

### Problem: Rendered review looks wrong for transparency or vector-heavy content

**Symptoms:** Transparent elements flatten badly, fine vector content looks degraded, or the rasterized output seems inconsistent.

**Solution:** Retry rendering with `pdftocairo` using the helper script's fallback mode or run a narrower page-range comparison. Use the alternate render only as a diagnostic comparison, then note which renderer was used for final review.

### Problem: The task drifted beyond PDF manipulation into another specialization

**Symptoms:** The real issue is print CSS, OCR, redaction assurance, or archival compliance rather than routine PDF work.

**Solution:** Hand off deliberately. Keep the PDF findings, rendered artifacts, and validation notes so the next workflow starts with evidence instead of starting over.

## Related Skills

- Use a frontend or print stylesheet skill when the real issue is HTML-to-PDF output, paged media, or print CSS.
- Use an OCR or document-ingestion skill when the PDF is primarily scanned images.
- Use a security-focused skill when the task involves trustworthy sanitization or redaction.
- Use a compliance or preservation workflow when the request is specifically about PDF/A or archival validation.

## Additional Resources

### Local references

- [Tool selection guide](references/pdf-tool-selection-guide.md)
- [PDF review checklist](references/pdf-review-checklist.md)
- [Troubleshooting playbook](references/pdf-troubleshooting-playbook.md)

### Local examples

- [Render and review](examples/render-and-review.md)
- [Generate with ReportLab](examples/generate-with-reportlab.md)
- [Extract text and tables](examples/extract-text-and-tables.md)
- [Inspect metadata and encryption](examples/inspect-metadata-and-encryption.md)

### Local scripts

- [Render PDF pages](scripts/render_pdf_pages.sh)
- [Check PDF integrity](scripts/check_pdf_integrity.sh)
- [Inspect PDF info](scripts/pdf_info.py)

### Upstream intent preserved

This enhanced version preserves the upstream skill's core guidance:
- prefer visual review by rendering pages
- use ReportLab for generation
- use pdfplumber and pypdf for extraction and manipulation
- re-render after meaningful changes
- keep the workflow auditable and suitable for handoff

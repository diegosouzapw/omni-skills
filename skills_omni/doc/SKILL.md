---
name: "doc"
description: "DOCX workflow skill. Use this skill when a task involves reading, creating, editing, or reviewing .docx files and layout fidelity matters; prefer python-docx for semantic edits, use the bundled render workflow for visual checks, and preserve provenance plus known fidelity risks before handoff."
version: "0.0.1"
category: "cli-automation"
tags:
  - "docx"
  - "word"
  - "ooxml"
  - "python-docx"
  - "libreoffice"
  - "rendering"
  - "document-review"
  - "layout-fidelity"
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
upstream_skill: "skills/doc"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# DOCX Skill

## Overview

This skill is for working with `.docx` documents when structure, formatting, or page layout matters.

Treat a DOCX file as both:

- a user-facing document that must be reviewed visually before delivery, and
- an OOXML package that can be edited safely through `python-docx` for routine structural changes.

This public intake preserves the upstream workflow intent from `skills/.curated/doc` while packaging it as an operational skill for native Omni use. The goal is not to promise perfect Microsoft Word parity in every environment. The goal is to make safe semantic edits, render the result deterministically when possible, inspect output pages, and disclose any remaining fidelity risk before handoff.

Use the bundled support pack for workflow decisions, rendering checks, package inspection, troubleshooting, and escalation.

## When to Use This Skill

Use this skill when the task includes one or more of the following:

- reading or reviewing a `.docx` file where formatting, tables, headers, footers, or pagination matter
- creating a professional DOCX from structured content using headings, lists, tables, and images
- editing an existing document while preserving styles and overall layout intent
- checking whether a generated or edited DOCX still renders acceptably after changes
- triaging a DOCX that opens inconsistently or fails in automation
- preserving provenance and workflow traceability from the imported upstream skill

Do **not** overclaim this skill for cases that depend on exact Word-only behavior or advanced Office features that may not survive automated editing/rendering cleanly, such as:

- macros or VBA workflows
- tracked-changes reconciliation as the main task
- embedded OLE objects
- SmartArt or highly application-specific drawing behavior
- unsupported advanced fields or review workflows that require Microsoft Word itself

If the deliverable is layout-sensitive, visual review is mandatory before final handoff.

## Operating Table

| Situation | Use this tool or file | Key command or entry point | Output | Common failure mode | Escalate when |
| --- | --- | --- | --- | --- | --- |
| Inspect document text and structure | `python-docx` | `python3 -m pip install python-docx` then use recipe snippets | text, paragraphs, tables, semantic edits | unexpected style drift | document depends on unsupported Word features |
| Render DOCX for visual QA | bundled renderer or LibreOffice + Poppler | `python3 scripts/render_docx.py /path/to/file.docx --output_dir /tmp/docx_pages` | PDF and/or page images | missing `soffice`, Poppler, or fonts | layout must match Word exactly |
| Validate render prerequisites | `scripts/validate_render_prereqs.py` | `python3 scripts/validate_render_prereqs.py` | dependency report | missing binaries or Python packages | environment setup is the main task |
| Inspect package internals | `scripts/inspect_docx_package.py` | `python3 scripts/inspect_docx_package.py /path/to/file.docx` | package summary, critical parts check | corrupted ZIP or missing OOXML parts | document is damaged or requires XML-level repair |
| Follow end-to-end operator workflow | `references/docx-workflow-guide.md` | open and follow checklist | repeatable assess/edit/render/review flow | operator skips visual review | task changes into another specialization |
| Recover from failures | `references/docx-troubleshooting-matrix.md` | symptom -> cause -> fix | faster diagnosis | wrong tool used for the problem | failure is primarily system administration or app-specific Word authoring |
| Communicate risk on handoff | `references/docx-known-limitations.md` | reuse disclosure language | explicit fidelity notes | confidence overstated | user needs formal Word-side validation |

## Workflow

1. **Assess the request and file type**
   - Confirm the target artifact is a `.docx` document.
   - Determine whether the task is reading, editing, creating, conversion, or corruption triage.
   - Decide whether layout fidelity is critical.

2. **Check capabilities before editing**
   - If visual QA is required, verify rendering prerequisites with `scripts/validate_render_prereqs.py`.
   - If the DOCX seems damaged or behaves oddly, inspect it first with `scripts/inspect_docx_package.py`.
   - If rendering is unavailable, state that limitation early and require user-side validation before claiming layout confidence.

3. **Choose the safest edit path**
   - Prefer `python-docx` for semantic edits such as headings, paragraphs, lists, tables, images, and section-safe content changes.
   - Reuse existing styles where possible instead of forcing local formatting everywhere.
   - Avoid direct XML surgery unless the task clearly requires it and the risk is documented.

4. **Create or modify the document**
   - Keep filenames stable and descriptive.
   - Use `tmp/docs/` for intermediate files and `output/doc/` for final artifacts when working in this repo.
   - Make small, reviewable changes rather than large opaque rewrites.

5. **Render for visual review**
   - Preferred path: DOCX -> PDF -> page images.
   - Use isolated LibreOffice profiles for headless conversion to reduce profile-lock issues.
   - Keep page outputs in a stable directory so before/after comparisons are easy.

6. **Review the rendered result**
   - Check headings, page breaks, tables, alignment, margins, header/footer behavior, and image placement.
   - Confirm charts, tables, and visuals remain legible.
   - If output differs from expectations, determine whether the issue is fonts, unsupported features, template/style drift, or conversion environment differences.

7. **Package the handoff**
   - Deliver the final DOCX and, when useful, rendered review artifacts.
   - State any remaining fidelity risks explicitly.
   - Clean temporary files unless the user asks to keep them.

### Rendering Commands

Prefer the bundled helper when available:

```bash
python3 scripts/render_docx.py /path/to/file.docx --output_dir /tmp/docx_pages
```

Direct DOCX -> PDF conversion with isolated LibreOffice profile:

```bash
PROFILE_DIR="$(mktemp -d)"
OUTDIR="/tmp/doc_render"
mkdir -p "$OUTDIR"
soffice -env:UserInstallation="file://$PROFILE_DIR" --headless --convert-to pdf --outdir "$OUTDIR" "/path/to/file.docx"
```

Convert PDF pages to PNG for review:

```bash
pdftoppm -png "$OUTDIR/file.pdf" "$OUTDIR/file"
```

If rendering tools are unavailable, fall back to structural/text review only and clearly disclose that visual fidelity was **not** verified.

### Dependencies

Prefer `uv` when available:

```bash
uv pip install python-docx pdf2image
```

If `uv` is unavailable:

```bash
python3 -m pip install python-docx pdf2image
```

System tools for rendering:

```bash
# macOS (Homebrew)
brew install libreoffice poppler

# Ubuntu/Debian
sudo apt-get install -y libreoffice poppler-utils
```

No required environment variables.

## Examples

### Example 1: Render a DOCX for visual review

```bash
python3 scripts/validate_render_prereqs.py && \
python3 scripts/render_docx.py /path/to/report.docx --output_dir /tmp/report_pages
```

**Expected output:** A dependency check plus rendered review artifacts in `/tmp/report_pages`.

### Example 2: Inspect a suspicious DOCX package

```bash
python3 scripts/inspect_docx_package.py /path/to/input.docx
```

**Expected output:** Confirmation that the file is a ZIP-based DOCX package, a list of key OOXML parts, and warnings if critical parts are missing.

### Example 3: Ask the agent to edit semantically and preserve layout review

```text
Use @doc to update the executive summary in /path/to/brief.docx, preserve existing styles, then render the result for page-by-page review and call out any fidelity risks before handoff.
```

**Expected output:** A semantically edited DOCX, rendered review artifacts when supported, and a short risk note.

### Example 4: Minimal `python-docx` creation flow

```python
from docx import Document


doc = Document()
doc.add_heading("Quarterly Update", level=1)
doc.add_paragraph("Status: on track.")
table = doc.add_table(rows=2, cols=2)
table.cell(0, 0).text = "Metric"
table.cell(0, 1).text = "Value"
table.cell(1, 0).text = "Revenue"
table.cell(1, 1).text = "$1.2M"
doc.save("quarterly-update.docx")
```

**Expected output:** A new DOCX with a heading, paragraph, and simple table. Render it before final delivery if layout matters.

See also:

- `examples/render-docx-locally.md`
- `examples/python-docx-recipes.md`

## Best Practices

### Do

- Prefer semantic edits with `python-docx` over ad hoc low-level XML changes.
- Reuse existing styles and document structure instead of hard-coding formatting everywhere.
- Perform visual review for every layout-sensitive deliverable.
- Use isolated temp/profile directories for headless conversion.
- Capture and disclose known fidelity risks, especially when fonts, advanced features, or environment differences may affect layout.
- Keep provenance visible when the upstream imported workflow influenced the result.
- Keep commands narrow and reversible.

### Don't

- Do not claim exact Microsoft Word parity from headless rendering in every environment.
- Do not skip rendered review when pagination, alignment, tables, or diagrams matter.
- Do not use direct XML edits as the default path for routine document changes.
- Do not hide missing dependencies or silently degrade from visual QA to text-only review.
- Do not execute embedded content, macros, or adjacent Office artifacts while inspecting untrusted files.
- Do not leave temporary render output behind unless the user asks to retain it.

### Quality Expectations

- Deliver a client-ready document with consistent typography, spacing, margins, and hierarchy.
- Avoid clipped or overlapping text, broken tables, unreadable characters, or default-template regressions.
- Ensure citations and references are human-readable.
- Re-render after meaningful changes until the output is acceptable.
- Use ASCII hyphens only; avoid non-breaking or stylistic Unicode dashes when consistency matters.

## Troubleshooting

### Problem: LibreOffice conversion hangs or fails

**Symptoms:** `soffice` produces no PDF, hangs indefinitely, or exits with an error.
**Solution:** Verify `soffice` is installed, confirm the output directory is writable, use an isolated profile via `-env:UserInstallation=file:///...`, and retry the direct command outside any wrapper. If the environment cannot support conversion reliably, disclose that rendering could not be completed and request local validation.

### Problem: `pdf2image` or page rendering cannot find Poppler

**Symptoms:** Errors mention missing `pdftoppm`, Poppler, or page rasterization dependencies.
**Solution:** Install Poppler (`brew install poppler` on macOS or `apt-get install poppler-utils` on Ubuntu/Debian), rerun `scripts/validate_render_prereqs.py`, and retry rendering.

### Problem: Rendered pages do not match expected Word layout

**Symptoms:** Pagination, spacing, fonts, tables, or image placement differ from what the user expects.
**Solution:** Check for missing fonts, environment differences, template/style drift, or Word-only features. Reuse existing styles, confirm assets are present, and disclose that headless rendering may differ from Microsoft Word. If exact parity is required, ask for Word-side review.

### Problem: Styles, numbering, headers, or footers changed unexpectedly

**Symptoms:** List numbering resets, header/footer content moves, or paragraph formatting changes after editing.
**Solution:** Prefer editing existing styled elements rather than rebuilding formatting manually. Inspect document structure and style usage before broad edits. If the document depends on fragile section or numbering behavior, make smaller changes and validate each render cycle.

### Problem: The DOCX opens in Word but automation fails

**Symptoms:** The file appears normal in Word, but scripts fail, conversion breaks, or editing tools reject it.
**Solution:** Run `scripts/inspect_docx_package.py` to confirm it is a valid ZIP-based package and that critical OOXML parts exist. Treat corruption or malformed package structure as a triage problem, not a routine editing task.

### Problem: Output pages are blank, missing, or incomplete

**Symptoms:** PDF conversion succeeds but page images are missing, blank, or fewer than expected.
**Solution:** Confirm the DOCX -> PDF step actually produced a valid PDF, verify the PDF basename passed to `pdftoppm`, and check page-selection or output-directory mistakes. Re-run with a clean temp directory.

### Problem: Rendering is unavailable in the current environment

**Symptoms:** Required tools cannot be installed or execution is blocked.
**Solution:** Continue with text/structure inspection only if useful, but explicitly state that layout fidelity was not verified. Ask the user to run local rendering or review the DOCX in their preferred office application before final acceptance.

## Related Skills

- Use a PDF or OCR-oriented skill when the primary task is extracting content from rendered pages rather than editing DOCX structure.
- Use a Python scripting or environment-debugging skill when the main blocker is installing LibreOffice, Poppler, or Python dependencies.
- Use a spreadsheet or presentation skill instead when the source artifact is really `.xlsx` or `.pptx`, not `.docx`.
- Hand off to a more specialized document-authoring workflow if the task depends on Word-only review features or application-specific document automation.

## Additional Resources

### Local support pack

- [DOCX workflow guide](references/docx-workflow-guide.md)
- [DOCX troubleshooting matrix](references/docx-troubleshooting-matrix.md)
- [Known limitations and fidelity risks](references/docx-known-limitations.md)
- [DOCX package structure notes](references/docx-package-structure-notes.md)
- [Local rendering cookbook](examples/render-docx-locally.md)
- [python-docx recipes](examples/python-docx-recipes.md)
- [Inspect DOCX package](scripts/inspect_docx_package.py)
- [Validate render prerequisites](scripts/validate_render_prereqs.py)

### Imported provenance support

These files preserve the upstream import context and can still be used when provenance or import lineage matters during review:

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Final checks

- Re-render and inspect every page before final delivery when layout matters.
- Fix spacing, alignment, or pagination issues and repeat the render loop.
- Confirm no leftover temp files or duplicate renders remain unless the user asked to keep them.

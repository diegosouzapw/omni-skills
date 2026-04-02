# PDF Tool Selection Guide

Use this matrix to choose the smallest reliable toolchain for the task.

| Need | Primary tool | Why | Verify with |
| --- | --- | --- | --- |
| Create a new PDF with controlled layout | ReportLab | Deterministic generation and explicit layout control | Rendered pages + `qpdf --check` |
| Merge, split, rotate, reorder pages | pypdf | Good for structural manipulation | Page count + render spot-check + `qpdf --check` |
| Extract plain text quickly | pypdf | Simple semantic extraction | Compare with rendered page |
| Extract tables or inspect page objects | pdfplumber | Better layout awareness | Compare against rendered page image |
| Render pages for review | Poppler (`pdftoppm`) | Fast, reproducible rasterization | Human visual review |
| Render difficult transparency/vector content | Poppler (`pdftocairo`) | Better fallback for some graphics cases | Compare with default render |
| Validate damaged or suspicious PDFs | qpdf | Structural checks and diagnostics | `qpdf --check` output |
| Inspect metadata, outlines, form presence | pypdf | Good Python-side inspection | `scripts/pdf_info.py` |
| PDF/A or archival work | Dedicated conformance validator | Requires specialized validation | Conformance report + rendered review |

## Selection rules

1. If appearance matters, render first or immediately after the change.
2. If structure matters, run `qpdf --check`.
3. If extracting tables, do not rely on plain text output alone.
4. If the file is encrypted, confirm authorization before modification.
5. If the file is scanned, route to OCR rather than over-tuning extraction libraries.

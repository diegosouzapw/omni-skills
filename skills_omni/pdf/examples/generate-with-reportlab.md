# Generate with ReportLab

## Goal

Create a new PDF with controlled layout, then validate and render it.

## Example flow

1. Generate the PDF with ReportLab.
2. Save it under `output/pdf/report.pdf`.
3. Run structural validation.
4. Render pages for visual review.

```bash
bash scripts/check_pdf_integrity.sh output/pdf/report.pdf
bash scripts/render_pdf_pages.sh output/pdf/report.pdf
```

## Acceptance criteria

- `qpdf --check` succeeds
- all pages render
- no clipping or missing glyphs
- page numbering and section breaks are consistent

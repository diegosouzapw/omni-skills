# Render and Review Example

## Goal

Create a reproducible visual review packet for a PDF.

## Steps

```bash
bash scripts/render_pdf_pages.sh input.pdf
```

Review the generated images under `tmp/pdfs/rendered/input/`.

## What to inspect

- clipping
- page breaks
- margins
- font rendering
- table fit
- image sharpness

## Suggested review note

```text
Rendered all pages at fixed DPI. Checked margins, page breaks, font rendering, and tables. No clipping observed on pages 1-6. Minor image softness on page 4 remains.
```

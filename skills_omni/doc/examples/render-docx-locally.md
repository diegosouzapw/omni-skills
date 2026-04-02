# Render DOCX Locally

## Preferred bundled helper

```bash
python3 scripts/validate_render_prereqs.py
python3 scripts/render_docx.py /path/to/file.docx --output_dir /tmp/docx_pages
```

## Manual path: DOCX -> PDF -> PNG

```bash
PROFILE_DIR="$(mktemp -d)"
OUTDIR="/tmp/doc_render"
mkdir -p "$OUTDIR"
soffice -env:UserInstallation="file://$PROFILE_DIR" --headless --convert-to pdf --outdir "$OUTDIR" "/path/to/file.docx"
pdftoppm -png "$OUTDIR/file.pdf" "$OUTDIR/file"
```

## Review checklist

- Open generated page images in order.
- Check heading hierarchy and page breaks.
- Check tables for clipping or overflow.
- Check margins, alignment, and image placement.
- Repeat after meaningful edits.

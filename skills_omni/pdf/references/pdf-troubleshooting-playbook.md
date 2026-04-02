# PDF Troubleshooting Playbook

## 1. Extraction output is misleading

**Likely cause:** PDF content stream order differs from human reading order.

**Check:** Render the page and compare with both pypdf and pdfplumber extraction.

**Safe response:** Report extraction limits clearly; do not present extracted order as visual truth.

## 2. Missing glyphs or substituted fonts

**Likely cause:** Font registration or embedding issue during generation.

**Check:** Re-render the PDF and compare problem pages. Confirm the generation path used the intended fonts.

**Safe response:** Regenerate with explicit font handling and re-review.

## 3. File appears broken or inconsistent across viewers

**Likely cause:** Structural issues, malformed objects, or damaged incremental updates.

**Check:** Run `qpdf --check`.

**Safe response:** Work on a copy, minimize rewrites, and document structural warnings.

## 4. Encrypted or permission-limited file

**Likely cause:** User supplied a protected PDF.

**Check:** Inspect encryption state before editing.

**Safe response:** Confirm authorization before attempting modification.

## 5. No useful extracted text

**Likely cause:** Image-only scanned PDF.

**Check:** Render a page and confirm whether text is visually embedded as pixels.

**Safe response:** Route to OCR workflow.

## 6. Rasterized review looks suspicious

**Likely cause:** Transparency or vector rendering differences.

**Check:** Retry with `pdftocairo` and compare outputs.

**Safe response:** Note renderer used in final review packet.

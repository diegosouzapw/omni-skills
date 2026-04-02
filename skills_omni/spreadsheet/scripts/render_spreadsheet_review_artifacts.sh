#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <input.xlsx> <output_dir>" >&2
  exit 1
fi

INPUT_XLSX="$1"
OUTPUT_DIR="$2"

if [ ! -f "$INPUT_XLSX" ]; then
  echo "Input file not found: $INPUT_XLSX" >&2
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

if ! command -v soffice >/dev/null 2>&1; then
  echo "LibreOffice 'soffice' is required for rendering." >&2
  exit 1
fi

soffice --headless --convert-to pdf --outdir "$OUTPUT_DIR" "$INPUT_XLSX"

PDF_PATH="$OUTPUT_DIR/$(basename "${INPUT_XLSX%.*}").pdf"

if [ -f "$PDF_PATH" ]; then
  echo "Created PDF: $PDF_PATH"
else
  echo "PDF conversion did not produce the expected file." >&2
  exit 1
fi

if command -v pdftoppm >/dev/null 2>&1; then
  pdftoppm -png "$PDF_PATH" "$OUTPUT_DIR/$(basename "${INPUT_XLSX%.*}")"
  echo "Created PNG previews in: $OUTPUT_DIR"
else
  echo "pdftoppm not found; skipping PNG preview generation."
fi

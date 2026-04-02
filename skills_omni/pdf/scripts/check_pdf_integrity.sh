#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <input.pdf>" >&2
  exit 1
fi

INPUT="$1"

if [ ! -f "$INPUT" ]; then
  echo "Input file not found: $INPUT" >&2
  exit 1
fi

echo "== PDF integrity check =="
echo "File: $INPUT"

if command -v qpdf >/dev/null 2>&1; then
  echo
  echo "-- qpdf --check --"
  qpdf --check "$INPUT"
else
  echo
  echo "qpdf not installed; structural validation skipped."
fi

echo
python3 scripts/pdf_info.py "$INPUT"

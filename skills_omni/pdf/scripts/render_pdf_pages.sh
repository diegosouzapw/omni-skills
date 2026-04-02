#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ] || [ "$#" -gt 3 ]; then
  echo "Usage: $0 <input.pdf> [dpi] [page-range]" >&2
  echo "Example: $0 input.pdf 150 1-3" >&2
  exit 1
fi

INPUT="$1"
DPI="${2:-150}"
PAGE_RANGE="${3:-}"

if [ ! -f "$INPUT" ]; then
  echo "Input file not found: $INPUT" >&2
  exit 1
fi

BASENAME="$(basename "$INPUT")"
NAME="${BASENAME%.pdf}"
OUTDIR="tmp/pdfs/rendered/$NAME"
mkdir -p "$OUTDIR"
PREFIX="$OUTDIR/page"

FIRST_ARGS=()
LAST_ARGS=()
if [ -n "$PAGE_RANGE" ]; then
  FIRST="${PAGE_RANGE%-*}"
  LAST="${PAGE_RANGE#*-}"
  if [ "$FIRST" != "$PAGE_RANGE" ] && [ -n "$FIRST" ] && [ -n "$LAST" ]; then
    FIRST_ARGS=( -f "$FIRST" )
    LAST_ARGS=( -l "$LAST" )
  fi
fi

if command -v pdftoppm >/dev/null 2>&1; then
  pdftoppm -png -r "$DPI" "${FIRST_ARGS[@]}" "${LAST_ARGS[@]}" "$INPUT" "$PREFIX"
elif command -v pdftocairo >/dev/null 2>&1; then
  pdftocairo -png -r "$DPI" "${FIRST_ARGS[@]}" "${LAST_ARGS[@]}" "$INPUT" "$PREFIX"
else
  echo "Neither pdftoppm nor pdftocairo is installed." >&2
  echo "Install Poppler tools to enable rendered review." >&2
  exit 2
fi

echo "Rendered pages written to $OUTDIR"

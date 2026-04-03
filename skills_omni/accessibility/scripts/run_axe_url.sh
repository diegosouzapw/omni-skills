#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: bash scripts/run_axe_url.sh <url>" >&2
  exit 1
fi

URL="$1"
STAMP="$(date +%Y%m%d-%H%M%S)"
OUT_DIR="a11y-artifacts"
OUT_FILE="$OUT_DIR/axe-$STAMP.json"

mkdir -p "$OUT_DIR"

echo "Running axe against: $URL"
echo "Output: $OUT_FILE"

npx --yes @axe-core/cli "$URL" --save "$OUT_FILE"

echo "Done."
echo "Reminder: an automated axe pass means no issues were detected by this configured scan; it does not prove WCAG compliance."

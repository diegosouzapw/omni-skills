#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: bash scripts/run_lighthouse_accessibility.sh <url>" >&2
  exit 1
fi

URL="$1"
STAMP="$(date +%Y%m%d-%H%M%S)"
OUT_DIR="a11y-artifacts"
OUT_FILE="$OUT_DIR/lighthouse-accessibility-$STAMP.html"

mkdir -p "$OUT_DIR"

echo "Running Lighthouse accessibility audit for: $URL"
echo "Output: $OUT_FILE"

npx --yes lighthouse "$URL" \
  --only-categories=accessibility \
  --output=html \
  --output-path="$OUT_FILE" \
  --quiet

echo "Done."
echo "Reminder: Lighthouse is a useful signal, not proof of WCAG or legal compliance."

#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-.}"

printf '== Modular monolith boundary checks ==\n'
printf 'Root: %s\n\n' "$ROOT"

printf '[1/4] Likely deep imports across libs/apps\n'
if grep -RInE "from ['\"][^'\"]+/.+['\"]" "$ROOT/libs" "$ROOT/apps" 2>/dev/null | grep -vE "index(['\"])?;?$"; then
  printf '\nWarnings above may be valid or false positives; review imports crossing module boundaries.\n\n'
else
  printf 'No likely deep imports found.\n\n'
fi

printf '[2/4] Cross-module service references\n'
if grep -RInE "\b[A-Z][A-Za-z0-9]+Service\b" "$ROOT/libs" "$ROOT/apps" 2>/dev/null | grep -vE "spec|test"; then
  printf '\nReview whether these service references cross bounded contexts directly.\n\n'
else
  printf 'No obvious service reference matches found.\n\n'
fi

printf '[3/4] Potential mutable singleton exports\n'
if grep -RInE "export (const|let|var).*=.*new " "$ROOT/libs" "$ROOT/apps" 2>/dev/null | grep -vE "spec|test"; then
  printf '\nReview exported mutable objects for hidden shared state.\n\n'
else
  printf 'No obvious exported mutable singleton patterns found.\n\n'
fi

printf '[4/4] Possible circular-dependency hints\n'
if grep -RIn "forwardRef(" "$ROOT/libs" "$ROOT/apps" 2>/dev/null; then
  printf '\nforwardRef() usage found. Confirm whether it is temporary or hiding a boundary problem.\n'
else
  printf 'No forwardRef() hints found.\n'
fi

printf '\nDone. This script is read-only and intended for fast review, not proof of correctness.\n'

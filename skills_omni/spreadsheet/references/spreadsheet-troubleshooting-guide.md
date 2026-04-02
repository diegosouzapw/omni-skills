# Spreadsheet Troubleshooting Guide

## Formula values are stale

**Likely cause:** The workbook was edited with `openpyxl`, which preserves formulas but does not evaluate them.

**Fix:** Recalculate with LibreOffice or another spreadsheet engine if refreshed cached values are needed.

## Styles disappeared on edited cells

**Likely cause:** Values were written to new cells without copying style objects.

**Fix:** Copy style-related objects explicitly from a known good source cell. Avoid assuming styles propagate automatically.

## Worksheet copy did not preserve everything

**Likely cause:** Worksheet copying has limitations and may not duplicate all workbook elements or dependencies.

**Fix:** Rebuild the missing parts deliberately and validate workbook features after copy operations.

## CSV import corrupted identifiers

**Likely cause:** Type inference converted identifiers to numeric values.

**Fix:** Read sensitive columns as strings from the start. Re-import from the original source rather than trying to reconstruct lost zeros after the fact.

## CSV rows split incorrectly

**Likely cause:** Wrong delimiter, quoting, or newline assumptions.

**Fix:** Set delimiter and quoting behavior explicitly. Use the Python `csv` module when low-level control is required.

## Date columns are inconsistent

**Likely cause:** Implicit parsing on mixed or locale-sensitive input.

**Fix:** Parse known date columns explicitly and reject or log invalid rows rather than silently coercing everything.

## Large `.xlsx` processing fails

**Likely cause:** The workbook is too large for full in-memory handling.

**Fix:** Use `openpyxl` read-only or write-only optimized modes and avoid broad style mutations.

## PDF render looks different from Excel

**Likely cause:** Font, renderer, or feature differences between LibreOffice and Excel.

**Fix:** Treat render output as a QA aid. Escalate when exact Excel fidelity is a hard requirement.

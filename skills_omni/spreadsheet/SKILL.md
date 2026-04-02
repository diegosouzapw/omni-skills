---
name: "spreadsheet"
description: "Spreadsheet workflow skill. Use this skill when a user needs to create, edit, analyze, validate, recalculate, render, or review spreadsheets (.xlsx, .csv, .tsv) with formula-aware workflows, formatting preservation, CSV/date parsing hygiene, and safe delivery practices."
version: "0.0.1"
category: "cli-automation"
tags:
  - "spreadsheet"
  - "xlsx"
  - "csv"
  - "tsv"
  - "openpyxl"
  - "pandas"
  - "libreoffice"
  - "formulas"
  - "formatting"
  - "data-review"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/spreadsheet"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Spreadsheet Skill

## Overview

This skill packages the upstream spreadsheet workflow from `skills/.curated/spreadsheet` into an execution-oriented Omni Skills format without hiding its origin.

Use it for practical spreadsheet work: creating or editing `.xlsx` files, ingesting `.csv`/`.tsv` data, preserving formulas and formatting where possible, preparing analysis outputs, and generating review artifacts before handoff.

This skill is intentionally operational, not just editorial. It helps the operator:

- choose the right tool path for workbook editing vs tabular ingestion
- preserve formulas instead of replacing them with hardcoded values
- avoid common CSV/date/type corruption issues
- render and inspect outputs when layout or cached values matter
- keep provenance, temp/output hygiene, and delivery checks visible

The local support pack extends the imported skill with execution playbooks, troubleshooting guidance, CSV/TSV ingestion notes, security review checklists, and a safe render helper.

## When to Use This Skill

Use this skill when the task is primarily about spreadsheet automation or spreadsheet-safe transformation.

Typical triggers:

- Create a new workbook with formulas, headers, number formats, and basic styling.
- Edit an existing `.xlsx` workbook while preserving formulas, references, and formatting as much as possible.
- Clean, merge, filter, summarize, or reshape tabular data from `.csv` or `.tsv` files.
- Fill blank cells, add calculated columns, or update ranges without redesigning the workbook.
- Produce review artifacts such as PDF renders for layout-sensitive workbooks.
- Validate row counts, date parsing, identifier preservation, and formula presence before delivery.
- Prepare finance-style or reporting-oriented spreadsheets where structure and formatting matter.

### Do not use this skill when

- The task is mainly database ETL, warehouse loading, or large pipeline orchestration.
- The task requires VBA or macro authoring, debugging, or execution.
- The task depends on unsupported Excel-specific features and exact Excel-native behavior cannot be approximated safely.
- The task is primarily OCR, scanned-document extraction, or image-to-table recovery.
- The task is really statistical modeling, BI publishing, or dashboard development rather than spreadsheet manipulation.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New spreadsheet request | `references/spreadsheet-workflow-playbook.md` | Gives the end-to-end execution path from intake through validation and handoff |
| CSV/TSV ingestion | `references/spreadsheet-csv-tsv-ingestion-notes.md` | Prevents silent delimiter, encoding, identifier, and date parsing mistakes |
| Formula-sensitive `.xlsx` edits | `references/examples/openpyxl/preserve_formulas_and_styles.py` | Shows a safe pattern for preserving formulas and copying styles deliberately |
| Large workbook or large flat file | `references/examples/openpyxl/stream_large_workbook.py` and `references/examples/pandas/read_csv_with_explicit_schema.py` | Demonstrates lower-memory patterns for `.xlsx` and chunked CSV processing |
| Layout-sensitive delivery | `scripts/render_spreadsheet_review_artifacts.sh` | Produces PDF and optional PNG review artifacts using LibreOffice and Poppler |
| Pre-handoff review | `references/spreadsheet-security-and-review-checklist.md` | Catches macros, hidden sheets, metadata, external links, and delivery risks |
| Troubleshooting | `references/spreadsheet-troubleshooting-guide.md` | Maps symptoms to likely causes and safe recovery steps |

## Workflow

1. **Confirm the request and file types**
   - Identify whether the task is workbook editing (`.xlsx`) or tabular ingestion (`.csv`, `.tsv`).
   - Ask what must be preserved: formulas, formatting, charts, comments, merged cells, column widths, or exact layout.
   - Check whether recalculated values or visual review artifacts are required before handoff.

2. **Inspect files safely before mutation**
   - Keep the original file unchanged.
   - Work on a copy when editing an existing workbook.
   - Flag macro-enabled files such as `.xlsm` or `.xlam` for caution; do not execute macros.
   - Validate file type by more than extension when practical, and note large-file size or unusual structure early.

3. **Choose the tool path**
   - Use `openpyxl` for `.xlsx` creation, editing, formulas, styling, worksheet updates, and workbook-aware changes.
   - Use `pandas` for tabular analysis and CSV/TSV ingestion where schema control matters.
   - For very large `.xlsx` files, prefer `openpyxl` optimized modes.
   - For very large CSV/TSV files, prefer chunked ingestion rather than full in-memory loads.

4. **Install only what is needed**
   - Prefer `uv` when available.
   - Python dependencies:

   ```bash
   uv pip install openpyxl pandas
   ```

   - If `uv` is unavailable:

   ```bash
   python3 -m pip install openpyxl pandas
   ```

   - Optional rendering dependencies, only if visual review is required:

   ```bash
   # macOS (Homebrew)
   brew install libreoffice poppler
   ```

   ```bash
   # Ubuntu/Debian
   sudo apt-get install -y libreoffice poppler-utils
   ```

   - If installation is not possible, state the missing dependency and continue with a narrower workflow.

5. **Perform the transformation carefully**
   - Preserve formulas; do not replace them with hardcoded outputs unless the user explicitly asks.
   - Preserve existing formatting when modifying a styled workbook.
   - When filling new cells in a formatted region, copy styles deliberately rather than recreating them ad hoc.
   - Use explicit CSV settings for delimiter, encoding, dtypes, NA handling, and dates when correctness matters.

6. **Recalculate and render when needed**
   - `openpyxl` preserves formulas but does **not** evaluate them.
   - If updated cached values or rendered output matter, recalculate externally using a spreadsheet engine such as LibreOffice.
   - For layout-sensitive work, render to PDF and inspect for clipping, merged-cell issues, missing fonts, style drift, and stale totals.

7. **Validate outputs before delivery**
   - Reopen the saved workbook or output file.
   - Spot-check row counts, key formulas, numeric/date formats, leading-zero identifiers, and output sheet names.
   - If rendering was used, inspect the rendered artifact rather than assuming parity.
   - Record any limitations, especially unsupported Excel features or approximate rendering behavior.

8. **Package artifacts and clean up**
   - Use `tmp/spreadsheets/` for intermediates when working in this repo.
   - Write final outputs to `output/spreadsheet/` when appropriate.
   - Keep filenames stable and descriptive.
   - Remove temporary files that are no longer needed.

### Formula and recalculation note

`openpyxl` can read and write formulas, but it does not calculate them. If a workbook depends on updated cached formula values, a separate recalculation step is required. Do not claim that formula results were recomputed unless a real calculation engine was used.

## Examples

### Example 1: Preserve formulas and copy styles in an existing workbook

```bash
python3 references/examples/openpyxl/preserve_formulas_and_styles.py input.xlsx output.xlsx --sheet Sheet1 --fill D2:D20 --source-style C2
```

Expected outcome: blank cells in `D2:D20` are filled from neighboring logic, existing formulas remain formulas, and new cells inherit the style from `C2`.

### Example 2: Read CSV with explicit schema and date parsing

```bash
python3 references/examples/pandas/read_csv_with_explicit_schema.py data.csv --delimiter ',' --encoding utf-8 --id-column account_id --date-column posted_at
```

Expected outcome: identifiers remain strings, dates are parsed explicitly, and the script prints row counts plus a preview of typed columns.

### Example 3: Stream a large workbook transformation

```bash
python3 references/examples/openpyxl/stream_large_workbook.py large_input.xlsx large_output.xlsx
```

Expected outcome: the workbook is processed using lower-memory patterns suitable for large files, without loading every cell into a fully editable in-memory workbook.

### Example 4: Produce review artifacts for a layout-sensitive workbook

```bash
bash scripts/render_spreadsheet_review_artifacts.sh input.xlsx output/spreadsheet/review
```

Expected outcome: a PDF render is created, and if `pdftoppm` is available, PNG page previews are produced for visual QA.

### Example 5: Ask the agent to use the full workflow

```text
Use @spreadsheet to update the workbook without breaking formulas or formatting. Start with the workflow playbook, inspect whether cached formula results must be refreshed, then validate row counts and render a PDF for review before handoff.
```

## Best Practices

### Do

- Keep the original workbook unchanged and work from a copy.
- Use `openpyxl` for workbook-aware `.xlsx` edits.
- Use `pandas` or Python `csv` workflows for CSV/TSV ingestion when tabular correctness matters.
- Set delimiter, encoding, dtype, NA, and date parsing explicitly when the data has identifiers or ambiguous dates.
- Preserve formulas as formulas.
- Recalculate externally when updated cached values are required.
- Copy styles intentionally for new cells in formatted workbooks.
- Validate outputs by reopening files and spot-checking key cells.
- Render review artifacts when layout, clipping, or visual fidelity matters.
- Review hidden sheets, comments, links, and metadata before distribution.
- Keep provenance visible when transforming user-supplied spreadsheets.

### Do not

- Do not claim that `openpyxl` evaluated formulas.
- Do not trust file extensions alone for safety-sensitive intake.
- Do not execute or modify macros as part of this workflow.
- Do not rely on default CSV inference when leading zeros, dates, or null semantics matter.
- Do not overwrite workbook styling casually in a preformatted file.
- Do not assume LibreOffice rendering is identical to Excel rendering.
- Do not iterate naively through very large workbooks if optimized modes or chunking are more appropriate.
- Do not strip comments, hidden tabs, or metadata silently before handoff.

### Formatting guidance

For existing formatted spreadsheets:

- Inspect the workbook before making broad edits.
- Preserve row heights, column widths, merged cells, and number formats where possible.
- Match adjacent styles for newly filled cells.
- Avoid redesigning the workbook unless asked.

For new or unstyled spreadsheets:

- Use appropriate number, currency, percentage, and date formats.
- Make headers visually distinct.
- Use spacing and borders sparingly.
- Keep totals legible and simple.
- Avoid unsupported or brittle spreadsheet features unless required.

### Formula guidance

- Use formulas for derived values rather than hardcoded results.
- Prefer clear references over magic numbers.
- Use absolute and relative references deliberately.
- Guard against `#REF!`, `#DIV/0!`, `#VALUE!`, `#N/A`, and `#NAME?` errors.
- Keep formulas readable; helper cells are often safer than deeply nested expressions.
- If text must start with `=`, prefix it with a single quote.

## Troubleshooting

### Problem: Formula cells show old values or `None`

**Symptoms:** Formula cells exist, but the displayed result is stale, blank, or inconsistent after saving with `openpyxl`.

**Solution:** `openpyxl` preserves formulas but does not calculate them. Recalculate the workbook in LibreOffice or another spreadsheet engine, then reopen the recalculated file if cached values are required. Do not treat `data_only=True` as a calculation step.

### Problem: Formatting changed unexpectedly after editing cells

**Symptoms:** Values were updated, but number formats, fills, borders, alignment, row heights, or column widths changed or disappeared.

**Solution:** Check whether the workflow rewrote cells value-only without copying style objects. Use explicit style-copy patterns for new cells and avoid broad rewrites of already formatted ranges. Re-check merged cells and worksheet-copy assumptions.

### Problem: CSV columns split incorrectly

**Symptoms:** Data lands in the wrong columns, quoted text breaks rows, or a TSV opens like a single-column file.

**Solution:** Set the delimiter explicitly and verify quote behavior and newline handling. If exact CSV semantics matter, use the Python `csv` module with explicit dialect settings. Do not assume commas or tabs automatically.

### Problem: Leading zeros disappeared or IDs became numbers

**Symptoms:** Identifiers such as account codes, ZIP codes, or invoice numbers lose leading zeros or render in scientific notation.

**Solution:** Read identifier columns as strings using explicit dtype settings. Validate a sample of sensitive columns before saving outputs.

### Problem: Dates parsed incorrectly

**Symptoms:** `03/04/2026` is interpreted with the wrong month/day ordering, or mixed date strings become inconsistent.

**Solution:** Parse dates explicitly with known conventions. Use controlled `parse_dates` and `to_datetime` handling rather than relying on inference when locale ambiguity exists.

### Problem: Large workbook processing is slow or runs out of memory

**Symptoms:** The process becomes unresponsive, consumes excessive memory, or fails on large `.xlsx` or `.csv` files.

**Solution:** Switch to `openpyxl` optimized modes for large workbooks and chunked CSV ingestion for large flat files. Avoid full-sheet iteration, unnecessary style operations, and eager whole-file loads when streaming patterns are sufficient.

### Problem: PDF render differs from what Excel shows

**Symptoms:** Page breaks, fonts, alignment, or chart/layout details differ after LibreOffice conversion.

**Solution:** Treat LibreOffice rendering as a review aid, not proof of Excel-identical fidelity. Note font availability, unsupported features, and engine differences. If exact Excel output is mandatory, tell the user local Excel-side review may still be required.

### Problem: Workbook is risky to distribute

**Symptoms:** The file contains hidden sheets, comments, external links, embedded objects, macro-enabled formats, or potentially sensitive metadata.

**Solution:** Run the delivery checklist before handoff. Flag macro-enabled files, inspect hidden content, and remove or disclose risky metadata only with user approval and explicit scope.

## Related Skills

- `@python-automation` - Use when the task expands into broader Python workflow engineering beyond spreadsheet-focused handling.
- `@data-analysis` - Use when the work becomes exploratory analysis, statistics, or modeling rather than spreadsheet transformation.
- `@document-qa` - Use when the main task becomes review, extraction, or validation of rendered artifacts and document outputs.
- `@finance-modeling` - Use when the workbook becomes a deep valuation, LBO, DCF, or three-statement modeling task.
- `@etl` - Use when the request has drifted into repeatable pipeline ingestion, warehousing, or large-scale data movement.

## Additional Resources

### Local support pack

- [Spreadsheet workflow playbook](references/spreadsheet-workflow-playbook.md)
- [Spreadsheet troubleshooting guide](references/spreadsheet-troubleshooting-guide.md)
- [Spreadsheet security and review checklist](references/spreadsheet-security-and-review-checklist.md)
- [CSV/TSV ingestion notes](references/spreadsheet-csv-tsv-ingestion-notes.md)
- [Formula/style preservation example](references/examples/openpyxl/preserve_formulas_and_styles.py)
- [Large workbook streaming example](references/examples/openpyxl/stream_large_workbook.py)
- [Explicit CSV schema example](references/examples/pandas/read_csv_with_explicit_schema.py)
- [Review artifact render helper](scripts/render_spreadsheet_review_artifacts.sh)

### Imported workflow notes preserved from upstream intent

- Use `openpyxl` for creating and editing `.xlsx` files.
- Use `pandas` for analysis and CSV/TSV workflows.
- If an internal spreadsheet recalculation or rendering tool exists in the environment, it may be used privately for recalculation and review, but do not invent or expose unsupported APIs.
- Recalculate formulas before delivery when possible.
- Render relevant sheets for visual review when tooling is available.
- Keep intermediate files in `tmp/spreadsheets/` and final artifacts in `output/spreadsheet/` when working in this repo.
- Cite spreadsheet sources in plain text or comments when the workbook functions as an analytical deliverable.

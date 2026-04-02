# Spreadsheet Workflow Playbook

This playbook turns the skill into a repeatable execution flow.

## 1. Intake

Collect the minimum facts before touching files:

- input file type: `.xlsx`, `.csv`, `.tsv`
- output format required
- whether formulas must remain formulas
- whether cached formula values must be refreshed
- whether formatting must match an existing workbook
- whether layout-sensitive review is required
- whether the file is macro-enabled or contains external links

## 2. Safe inspection

- Preserve the original file untouched.
- Work from a copy for `.xlsx` edits.
- Note file size and workbook complexity early.
- Flag `.xlsm` and `.xlam` as caution cases.

## 3. Tool selection

### Use openpyxl when

- editing workbook cells
- preserving formulas
- applying or copying formatting
- adding worksheets
- adjusting workbook structure

### Use pandas when

- ingesting CSV/TSV
- filtering, grouping, aggregating, reshaping tabular data
- controlling types and date parsing explicitly

### Use streaming patterns when

- `.xlsx` is too large for convenient in-memory editing
- CSV/TSV should be processed in chunks

## 4. Transformation rules

- Preserve formulas unless the user requests literal outputs.
- Do not claim formula recalculation unless an external engine was used.
- Treat identifiers as strings when leading zeros matter.
- Use explicit date parsing for ambiguous input.
- Preserve workbook formatting intentionally rather than by assumption.

## 5. Recalculation and rendering

If formula results or visual review matter:

1. save the workbook
2. recalculate externally if available
3. render to PDF
4. inspect the rendered output
5. note any limitations or layout differences

## 6. Validation

Before handoff, verify:

- workbook reopens cleanly
- row counts and key aggregates match expectations
- formulas are still formulas where intended
- key formats still render correctly
- review artifacts exist when promised

## 7. Handoff note template

Use a concise note such as:

- files changed
- tool path used (`openpyxl`, `pandas`, rendering tools)
- whether formulas were preserved only or also recalculated externally
- validation checks performed
- any known fidelity limits or review follow-ups

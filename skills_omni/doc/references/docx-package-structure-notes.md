# DOCX Package Structure Notes

A `.docx` file is an OOXML package stored as a ZIP archive.

## Why this matters

Automation can fail even when a document appears to open in Word. Package inspection helps distinguish:

- normal semantic-edit tasks
- malformed or damaged packages
- missing critical parts
- unsupported structures that should not be edited blindly

## Common important parts

- `[Content_Types].xml`
- `_rels/.rels`
- `word/document.xml`
- `docProps/core.xml`
- `word/styles.xml`
- `word/numbering.xml` when lists/numbering are used
- `word/header*.xml` and `word/footer*.xml` when headers/footers are present

## Operator guidance

- Prefer package inspection for triage, not invasive repair.
- Do not use unsafe archive extraction patterns on untrusted input.
- Do not jump to direct XML edits unless the task clearly requires it and the risks are documented.

# Spreadsheet Security and Review Checklist

Use this checklist before distributing transformed spreadsheet outputs.

## Intake safety

- Confirm the file type, not just the filename extension.
- Record file size and reject unexpectedly large inputs if they exceed safe limits for the environment.
- Flag macro-enabled formats such as `.xlsm` and `.xlam`.
- Do not execute macros, embedded code, or untrusted automation.

## Working-file hygiene

- Keep originals read-only or untouched.
- Use isolated temp paths such as `tmp/spreadsheets/`.
- Clean up temporary outputs after validation.
- Avoid scattering copies across unrelated directories.

## Content review

- Check for hidden sheets.
- Check for comments and notes.
- Check for external links or linked workbooks.
- Check for embedded objects or unexpected media.
- Check for personal or organizational metadata before external delivery.

## Delivery review

- Reopen the final workbook.
- Confirm key formulas, counts, and formats.
- Confirm whether formula results were recalculated externally or only preserved.
- Include caveats about rendering differences if PDF review artifacts were produced with LibreOffice.

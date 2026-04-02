# Extract Text and Tables

## Goal

Compare semantic extraction methods without confusing them for visual truth.

## Recommended process

1. Run your pypdf extraction path.
2. Run your pdfplumber extraction path.
3. Render the relevant pages.
4. Compare outputs against the rendered page images.

## What to note

- whether reading order changed
- whether columns merged incorrectly
- whether table cells were dropped or combined
- whether the extracted result is sufficient for the user's actual goal

## Rule

If the user's requirement is about appearance or page fidelity, extraction alone is not enough.

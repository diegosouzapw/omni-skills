# Known Limitations and Fidelity Risks

Use these notes to avoid overstating confidence.

## Common limitations

- Headless LibreOffice rendering is useful for review, but not guaranteed to match Microsoft Word exactly.
- `python-docx` is strong for routine structural edits, but it does not expose every advanced Word feature cleanly.
- Fonts available in one environment may be missing in another.
- Complex numbering, section behavior, headers/footers, embedded objects, SmartArt, and advanced fields can be fragile.
- Text extraction alone is not evidence of layout fidelity.

## Safe disclosure language

### When visual review was completed

> The document was edited semantically and rendered for visual review. Remaining risk is limited to environment-specific differences such as fonts or unsupported Word-only features.

### When visual review was not possible

> The document was updated structurally, but layout fidelity was not verified in this environment because rendering prerequisites were unavailable. Please review the file locally before final acceptance.

### When advanced features are present

> This document may rely on Word-specific or partially supported features. Automated edits were kept narrow, but final validation in Microsoft Word is recommended.

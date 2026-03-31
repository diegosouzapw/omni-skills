# Findings: Terse vs Expanded

## Terse upstream-style output

```text
src/components/Dialog.tsx:42 Missing clear accessible name for the dialog container.
src/components/Dialog.tsx:67 Focus is not moved into the dialog when it opens.
src/components/NavMenu.tsx:118 Mobile menu trigger is implemented as a div and is not keyboard operable.
```

## Expanded reviewer packet output

### Summary

- High: 2
- Medium: 1
- Categories: dialog, keyboard access, semantics

### Findings

#### High — Dialog focus management
- **Location:** `src/components/Dialog.tsx:67`
- **Issue:** Focus does not move into the dialog after open.
- **Impact:** Keyboard and assistive technology users may lose context or continue interacting with background content.
- **Reference:** upstream guidelines; dialog focus management expectations
- **Remediation hint:** Move focus to a meaningful element inside the dialog on open and return focus to the trigger on close.

#### High — Non-semantic menu trigger
- **Location:** `src/components/NavMenu.tsx:118`
- **Issue:** Mobile menu trigger uses a `div` instead of a `button`.
- **Impact:** Keyboard operation and accessibility semantics are unreliable.
- **Reference:** semantic HTML first
- **Remediation hint:** Replace with `button` and expose expanded state if it controls a collapsible menu.

#### Medium — Missing dialog name
- **Location:** `src/components/Dialog.tsx:42`
- **Issue:** Dialog lacks a clear accessible name.
- **Impact:** Screen reader users may not understand the purpose of the overlay.
- **Reference:** dialog labeling expectations
- **Remediation hint:** Associate the dialog with a visible title or equivalent accessible label.

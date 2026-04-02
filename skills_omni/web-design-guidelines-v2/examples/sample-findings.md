# Sample Findings

Use these as style references for terse, high-signal review output.

```text
src/components/Modal.tsx:84 [high][dialog] Focus does not move into the dialog when it opens.
src/components/Modal.tsx:113 [high][focus] Close button focus ring is removed with no visible replacement.
src/components/ProfileForm.tsx:57 [medium][forms] Email field has placeholder text but no associated label.
src/components/ProfileForm.tsx:132 [medium][status-messaging] Save success is shown visually only; no status message is announced.
src/components/Tabs.tsx:49 [medium][navigation-state] Selected tab state is not reflected in the URL, so the view cannot be shared or restored.
src/layout/Header.tsx:101 [medium][responsive] Header actions overflow horizontally under narrow widths and long localized labels.
src/theme/DarkCard.tsx:28 [low][theming] Border color becomes indistinguishable from the background in dark mode.
```

## Notes

- Keep the line specific when possible.
- Mention the affected state when it matters.
- Skip long explanations unless the remediation direction is non-obvious.
- Group by file in the final output if there are multiple findings.

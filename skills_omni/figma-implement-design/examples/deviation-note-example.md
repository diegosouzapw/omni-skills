# Example Deviation Note

```text
Implemented node `10-5` using the existing `PageShell`, `Card`, `Button`, and `StatTile` primitives.

Token mapping:
- mapped Figma background value to the nearest approved surface token
- mapped 14px internal spacing to the closest approved spacing token used across the dashboard
- reused the repository typography scale instead of introducing a one-off text size

Assets:
- used the SVGs returned by the Figma asset flow during the active session

Deviations:
- preserved visible focus styles even though the design screenshot did not show focus treatment
- replaced a clickable container pattern with a semantic button for keyboard accessibility
- kept the nearest approved radius token because no exact radius token existed in the current design system
```

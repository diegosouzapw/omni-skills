# Responsive and Zoom Test Matrix

Use this matrix for manual UI review when responsive behavior or reflow is in scope.

## Minimum test passes

| Pass | What to inspect | Common failures |
| --- | --- | --- |
| Narrow viewport | Around 320 CSS px width | horizontal scroll, clipped controls, hidden actions, overlapping cards |
| Moderate mobile width | Common phone layout | drawers covering controls, sticky bars obscuring content |
| 200% zoom | desktop browser zoom | reflow breakage, wrapped labels, clipped buttons |
| 400% zoom | key task surfaces only | impossible navigation, hidden controls, severe overlap |
| Text resize / larger UI settings | text-heavy pages and forms | text clipping, cutoff helper text, broken inline validation |

## What to check

- primary task remains completable
- no important content hidden behind fixed or sticky UI
- dialogs and drawers remain scrollable and operable
- controls remain large enough and spaced enough to operate
- focus remains visible after zoom or reflow changes
- error messages and helper text remain adjacent to their fields

## Good evidence to capture

- viewport or zoom level used
- route or component name
- screenshot description or exact visual failure
- impacted interaction: reading, tabbing, submitting, dismissing modal, opening menu
- file or component likely responsible if known

## Common problem areas

- sticky headers and cookie banners covering anchored or focused content
- fixed-height modals with clipped body text or unreachable actions
- off-canvas navigation that traps focus or leaves background scroll active
- tables or code blocks forcing horizontal scroll into unrelated content
- button groups collapsing into unreadable or overlapping controls

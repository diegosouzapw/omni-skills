# Component Review Matrix

Use native HTML first. Only fall back to ARIA widget patterns when native elements are insufficient for the product requirement.

| UI pattern | Prefer first | Review expectations | If custom is necessary |
| --- | --- | --- | --- |
| Button | `<button>` | keyboard activation, disabled state, visible focus, accessible name | Ensure Enter/Space behavior, focusability, and state exposure |
| Link | `<a href>` | real navigation target, distinguish from actions, visible focus | Avoid click-only pseudo-links |
| Text input | `<input>` / `<textarea>` | label, autocomplete, validation, helper/error text | Keep semantics and associations intact |
| Select | `<select>` | native keyboard behavior, labels, errors | Custom comboboxes need APG-aligned behavior |
| Checkbox / radio | native controls | labels, grouping, error handling, hit area | Avoid role-only reimplementations |
| Dialog | native `<dialog>` or robust accessible dialog pattern | open/close focus management, escape handling, focus return | Verify trap and initial focus behavior |
| Tabs | button-based tab pattern | selected state, tab order, panel association, arrow-key behavior | Follow APG tabs pattern if custom |
| Accordion | button + region pattern | expanded state, heading structure, keyboard access | Follow APG accordion guidance |
| Menu button | button controlling menu | open state, keyboard behavior, focus movement | Follow APG menu button guidance |
| Tooltip | native title is usually insufficient for rich help | does not hide essential info, not hover-only | Avoid putting required information only in tooltip |
| Table | `<table>` for tabular data | headers, caption/context, responsive handling | Do not use div grids for actual tabular data unless justified |

## Common anti-patterns

- `div` or `span` used as a button
- clickable card with nested interactive controls and unclear semantics
- custom select replacing native behavior without parity
- modal visually shown but not exposed as an active dialog
- tabs implemented as links or divs without state and keyboard behavior
- placeholder-only form labeling
- disabled-looking element that is still focusable and actionable without explanation

## Review rule of thumb

1. Ask whether native HTML can solve it.
2. If yes, prefer native HTML.
3. If not, compare the custom implementation to the expected APG interaction model.
4. If the component still departs from expected behavior, document the specific gap.

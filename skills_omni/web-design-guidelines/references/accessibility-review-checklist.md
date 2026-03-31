# Accessibility Review Checklist

Use this checklist for page, route, and broad component audits. It is designed to complement the upstream Vercel guideline payload, not replace it.

## 1. Scope and inventory

- Identify the exact files, routes, and components under review.
- Note key states: loading, error, success, empty, disabled, expanded, collapsed, dark theme, narrow viewport.
- List interactive controls, forms, dialogs, menus, tabs, and embedded third-party content.

## 2. Semantics and structure

- Use semantic landmarks where appropriate: `header`, `nav`, `main`, `aside`, `footer`.
- Check heading hierarchy for skipped levels or structure that does not reflect page organization.
- Confirm lists use list semantics and tables are used only for tabular data.
- Verify buttons are used for actions and links for navigation.
- Check that labels are associated with form controls.

## 3. Keyboard and focus

- All interactive controls reachable by keyboard.
- No keyboard trap.
- Visible focus indicator on every interactive control.
- Focus order matches visual and task order.
- Focus moves into dialogs and returns after close.
- Hidden or collapsed content does not receive focus unexpectedly.

## 4. Accessible names and state

- Controls have clear accessible names.
- Icons that perform actions are labeled.
- Toggle and expandable controls expose state.
- Custom widgets expose correct role, state, and properties.
- Duplicate visible labels do not create ambiguity in context.

## 5. Forms

- Every control has a visible and programmatically associated label.
- Required fields are identified clearly.
- Instructions are present before validation fails when needed.
- Errors are linked to the relevant field.
- Error summaries move focus appropriately when used.
- User input is preserved after validation failure when feasible.
- Appropriate `autocomplete` tokens are used.

## 6. Visual accessibility

- Text and controls maintain adequate contrast in current theme/state.
- Focus indicators remain visible in all themes.
- Information is not conveyed by color alone.
- Disabled and placeholder states are still understandable.
- Motion or animation does not block use and is not required to understand state.

## 7. Responsive, zoom, and reflow

- Works at narrow viewports such as ~320 CSS px.
- Works at 200% and 400% zoom where relevant.
- No clipped or overlapping content that blocks reading or operation.
- Sticky or fixed elements do not cover focused content.
- No unnecessary horizontal scrolling for normal reading tasks.

## 8. Component behavior

- Dialogs: labeling, focus management, dismissal, scroll containment.
- Menus: keyboard behavior and expected arrow-key interactions when applicable.
- Tabs: active state, keyboard support, associated panels.
- Accordions: clear trigger semantics and expanded state.
- Combobox/select-like controls: clear name, current value, keyboard operation, option announcement.

## 9. Security-adjacent UI review

- Unsafe HTML or markdown rendering surfaces flagged.
- Third-party embeds/scripts noted when they affect trust or safety.
- Client-side validation not treated as authoritative validation.
- Sensitive data collection patterns called out if surprising or excessive.

## 10. Evidence to capture per finding

- File path and line if available
- Component or UI region
- Observed behavior
- Impacted users or interaction mode
- Severity
- Reference to upstream rule and optional standard mapping

# Component Pattern Map

This quick map helps reviewers choose the right baseline before critiquing a component.

## Native-first map

- Action button -> use `<button>`
- Navigation link -> use `<a href>`
- Text entry -> use `<input>` or `<textarea>`
- Single select -> prefer native `<select>` unless product requirements justify a custom combobox
- Checkbox / radio -> use native inputs
- Disclosure -> button controlling expandable content
- Dialog -> native `<dialog>` or a robust accessible dialog pattern
- Tabs -> buttons with associated tab panels
- Data table -> semantic `<table>` when the content is tabular

## When to compare against APG patterns

Compare against APG when the component is a genuinely custom:

- dialog
- tabs
- accordion
- menu button
- combobox
- listbox
- toolbar

## Reviewer shortcut

If a custom implementation exists only for styling reasons and native HTML could satisfy the requirement, that is usually worth flagging as a design and maintainability issue as well as an accessibility risk.

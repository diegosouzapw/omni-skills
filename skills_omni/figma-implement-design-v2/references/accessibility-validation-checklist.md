# Accessibility Validation Checklist

Use this checklist before handoff.

## Semantics

- [ ] Buttons are real `<button>` elements when they trigger actions.
- [ ] Links are real `<a>` elements when they navigate.
- [ ] Headings follow a meaningful hierarchy.
- [ ] Form controls have labels or accessible names.

## Keyboard and focus

- [ ] Interactive controls are reachable by keyboard.
- [ ] Focus is visible.
- [ ] Keyboard activation works for controls.
- [ ] Disabled and selected states are conveyed correctly.

## Images and icons

- [ ] Informative images have appropriate `alt` text.
- [ ] Decorative images use empty `alt` when correct.
- [ ] Inline SVGs do not create redundant noise for assistive tech.
- [ ] Icon-only buttons have an accessible name.

## Visual accessibility

- [ ] Text contrast appears acceptable for intended usage.
- [ ] Critical controls do not rely only on color.
- [ ] Touch/click targets are large enough where relevant.

## Responsive behavior

- [ ] Layout still works at smaller widths.
- [ ] Text does not overlap or clip unexpectedly.
- [ ] Interactive elements remain usable when the layout compresses.

## Deviation logging

- [ ] Any accessibility-driven changes from the comp are documented.

# Accessibility, Input, and Localization

Use this guide for any WinUI UI change, not only for dedicated accessibility tasks.

## Default review gates

Check:

- keyboard navigation
- focus order and focus visibility
- accessible names and semantics
- contrast in light and dark themes
- text scaling and readability
- localization impact for visible strings and layout

## Practical questions

- Can the main flow be completed with keyboard only?
- Do interactive controls expose meaningful names?
- Does focus move predictably?
- Does the UI still work when text expands?
- Are strings prepared for localization rather than embedded in brittle layouts?

## Common failures

- mouse-only interaction assumptions
- icon-only controls with poor naming
- hidden focus indicators
- custom layouts that break when strings become longer

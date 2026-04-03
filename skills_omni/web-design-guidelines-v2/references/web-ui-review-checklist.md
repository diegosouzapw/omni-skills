# Web UI Review Checklist

Use this checklist for a structured UI review. Start with the highest-risk interaction and accessibility failures before moving to polish.

## 1. Scope and setup

- Confirm which files, routes, pages, or components are in scope.
- Identify key states: default, hover, focus, active, disabled, error, loading, empty, success, dark mode, narrow viewport.
- Decide whether you are reviewing a component, a full page flow, or a PR.

## 2. Semantics and structure

- Are native elements used where possible?
- Are buttons used for actions and links used for navigation?
- Are headings hierarchical and meaningful?
- Are landmarks present where appropriate?
- Are lists, tables, and form controls represented semantically?
- Is ARIA absent where native HTML already provides the right semantics?

## 3. Keyboard and focus

- Can every interactive control be reached by keyboard?
- Is tab order logical?
- Is focus always visible?
- Does focus move correctly into and out of dialogs, menus, and composite widgets?
- Are there keyboard traps?
- Are pointer-only or drag-only interactions given alternatives?

## 4. Forms and validation

- Does every input have an associated visible label?
- Are helper text and instructions available when needed?
- Are required fields communicated clearly?
- Are autocomplete tokens used where appropriate?
- Are errors explained in text, not color alone?
- Do invalid states associate controls with explanatory messages?
- Are async save or submit states announced clearly?

## 5. Components and dynamic behavior

- Do dialogs manage focus correctly?
- Do accordions, tabs, menus, and comboboxes match expected keyboard behavior?
- Are expanded, selected, and disabled states programmatically exposed where needed?
- Are live regions used sparingly and appropriately for status changes?
- Does state remain understandable when animation is reduced or removed?

## 6. Responsive and mobile behavior

- Does the layout avoid horizontal overflow at narrow widths?
- Does content still work at zoomed sizes?
- Is user zoom left enabled?
- Do fixed or sticky elements avoid collisions with safe areas and keyboards?
- Are touch interactions comfortable and conflict-free?
- Do long labels, localization, or dynamic content break the layout?

## 7. Theming and visual clarity

- Does dark mode preserve legibility and contrast?
- Do icons, borders, dividers, and focus rings remain visible in all themes?
- Are hard-coded colors bypassing theme tokens?
- Do native controls match the intended theme where `color-scheme` is relevant?

## 8. Images, content, and typography

- Do images scale responsibly?
- Are decorative vs meaningful images handled appropriately?
- Do empty, loading, and error states remain understandable?
- Are numbers, dates, punctuation, and copy formatting appropriate for the UI?
- Does long or user-generated content wrap safely?

## 9. Navigation and state

- Can important states be restored or shared when expected?
- Do browser back and forward behave predictably?
- Are tabs, filters, and collapsible sections using the right state model for the product?
- Is route-backed state distinguished from acceptable ephemeral state?

## 10. Output

For each finding, capture:

- `file:line` if known
- severity
- category
- affected interaction or state
- one-line rationale only if needed

Use the sample findings and report template for formatting consistency.

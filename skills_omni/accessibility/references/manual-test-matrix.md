# Manual Accessibility Test Matrix

## Core checks for most pages

| Area | What to verify |
| --- | --- |
| Keyboard | Every interactive control is reachable and usable without a mouse |
| Focus visible | Focus indicator is obvious on every interactive element |
| Focus order | Tabbing follows a logical order |
| Headings and landmarks | Structure supports quick navigation |
| Names and labels | Controls have meaningful names and labels |
| Forms | Instructions, errors, grouping, and submit flow are understandable |
| Zoom / reflow | Content remains usable at 200% zoom |
| Contrast | Text and UI states remain distinguishable |
| Motion | Reduced motion preference is respected where motion is substantial |
| Dynamic updates | Status messages and alerts are announced appropriately |

## Screen reader spot checks

Check at least:

- page title
- main landmarks
- heading list quality
- link and button names
- form field names, descriptions, and errors
- dialog names and boundaries
- status update announcements

## Component-specific checks

### Dialogs

- focus moves into dialog on open
- dialog has an accessible name
- background is not interactable
- escape closes when appropriate
- focus returns to opener

### Tabs

- selected state is announced
- arrow-key navigation works if implemented as APG tabs
- tabpanel association is correct

### Accordions / disclosures

- trigger is a button
- expanded state is announced
- hidden content is not focusable when collapsed

### Menus

- use a real menu pattern only when it is truly an application-style menu
- avoid calling simple site navigation a menu widget

### Forms

- required status is conveyed
- inline errors are associated
- summary behavior is predictable
- validation does not cause focus loss

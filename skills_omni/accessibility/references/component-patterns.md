# Component Accessibility Patterns

Use native patterns whenever possible.

## Dialog / modal

Preferred:

- native `dialog` where suitable
- accessible name via visible heading or label
- focus moves into dialog
- background interaction disabled
- focus returns to opener

## Tabs

Use only when the UI is actually tabs, not just buttons that switch content.

Expected:

- `tablist`, `tab`, `tabpanel`
- selected state and relationships are correct
- keyboard behavior follows APG guidance

## Accordion / disclosure

Preferred:

- `button` to toggle panel
- `aria-expanded` synchronized with visibility
- content removed from focus flow when collapsed

## Combobox

High risk. Use an existing accessible implementation if possible.

Expected:

- input or trigger naming
- active option tracking
- keyboard navigation
- announcement of expanded state and current option

## Carousel

Expected:

- pause or stop control when auto-advancing
- keyboard-operable controls
- clear labeling of current item/state
- avoid excessive motion

## Live regions

Use sparingly.

- `aria-live="polite"` for non-urgent status updates
- `role="alert"` / assertive behavior only for urgent issues
- do not flood users with repeated announcements

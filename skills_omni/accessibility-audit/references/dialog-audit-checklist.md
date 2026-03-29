# Dialog Audit Checklist

Use this checklist for dialogs, modals, drawers, and similar overlays.

## Entry and naming

- Does the overlay expose a clear accessible name?
- Is focus moved into the dialog when it opens?
- Is the initial focus target sensible for the task?

## Focus containment

- Does Tab stay within the dialog while it is open?
- Can Shift+Tab move backward correctly?
- Is focus ever lost to the browser chrome or page behind the dialog?

## Escape and dismissal

- Does Escape close the dialog when that behavior is expected?
- Is there a clear close control?
- If the dialog should not be dismissed lightly, is that behavior intentional and explained?

## Background behavior

- Is background content unreachable while the modal is active?
- Is background content visually and interactively suppressed as intended?
- Are screen readers prevented from wandering into inactive background content where appropriate?

## Return focus

- When the dialog closes, does focus return to the invoking control or a logical fallback?
- If the invoking control disappears, is the new focus target predictable?

## Dynamic behavior

- Are validation errors or save states announced?
- Does focus remain stable during async updates?
- Does reduced-motion behavior still keep the transition understandable?

# Manual Test Script

Use this lightweight script when performing a manual UI review.

## 1. Keyboard-only pass

- Start at the top of the page.
- Use Tab and Shift+Tab only.
- Confirm every interactive element is reachable.
- Activate buttons, links, disclosures, menus, and dialogs from the keyboard.
- Check that focus never disappears and never gets trapped unexpectedly.

## 2. Focus-visible pass

- Repeat key interactions and watch the focus indicator.
- Confirm focus remains visible in default theme and any alternate theme available.
- Open and close overlays to check focus placement and return.

## 3. Form pass

- Submit the form with missing or invalid fields.
- Confirm errors identify the problem and the affected field.
- Verify entered values are preserved where reasonable.
- Check autofill and password-manager friendliness when relevant.

## 4. Responsive pass

- Inspect a narrow viewport.
- Open menus, drawers, and dialogs.
- Verify no critical content or controls are hidden behind sticky UI.
- Confirm horizontal scrolling is not required for normal tasks.

## 5. Zoom/reflow pass

- Check 200% zoom on important flows.
- Check 400% zoom on the highest-risk interaction surfaces.
- Confirm content still reflows and tasks remain completable.

## 6. Optional assistive-tech spot check

- If the environment supports it, spot-check critical controls and page landmarks with a screen reader.
- Focus on names, state changes, dialog announcements, and error messaging.

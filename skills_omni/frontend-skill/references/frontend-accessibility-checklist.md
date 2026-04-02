# Frontend Accessibility Checklist

Use this checklist before merge or handoff for any page or UI produced with `frontend-skill`.

## Structure and landmarks

- Use semantic page structure.
- Ensure there is one main content region.
- Confirm headings describe the real information hierarchy.
- Avoid skipping heading levels purely for styling.
- Ensure navigation, main content, footer, and major regions are easy to identify.

## Text and contrast

- Confirm text remains readable over imagery and gradients.
- Re-check contrast for hero text, CTA text, and small UI labels.
- Do not rely on color alone for status, alerts, or selection state.

## Keyboard and focus

- Verify all controls are reachable by keyboard.
- Ensure focus order matches the visual reading order.
- Ensure focus indicators remain visible on all interactive elements.
- Confirm menus, drawers, modals, and carousels do not trap focus incorrectly.

## Images and icons

- Informative images should have useful alt text.
- Decorative images should not create assistive-technology noise.
- Decorative icons should not be announced if they add no meaning.
- If an image contains essential information, that information must also be available as text.

## Motion and interaction

- Check whether animation has a reduced-motion fallback.
- Ensure persistent or auto-advancing motion can be paused or removed when necessary.
- Avoid scroll or hover effects that make content harder to read or operate.

## Touch and targets

- Confirm tap targets are large enough to use comfortably on mobile.
- Ensure controls near screen edges or sticky headers are still easy to activate.
- Verify there is enough spacing between adjacent touch targets.

## Review prompts

- Can a keyboard-only user reach the primary CTA?
- Can a screen-reader user understand the page structure?
- Is every decorative visual actually silent when it should be?
- Would the page still work if motion were removed?
- Is the first viewport still readable when the hero image is visually busy?

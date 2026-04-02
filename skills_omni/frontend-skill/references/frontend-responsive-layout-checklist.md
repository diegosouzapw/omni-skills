# Frontend Responsive Layout Checklist

Use this when the page is visual-first, hero-led, or likely to be fragile across viewport sizes.

## First viewport

- Confirm the first screen shows the intended hierarchy immediately.
- If there is a sticky or fixed header, include its height in the viewport budget.
- Ensure the primary CTA does not fall below the fold on common mobile sizes unless intentionally deferred.
- Verify that text, CTA, and image focal point remain coherent together.

## Hero sizing

- Avoid assuming raw `100vh` is always correct on mobile.
- Prefer viewport-safe hero sizing decisions when browser chrome changes the visible area.
- Test with browser UI present and after scroll.
- Test with mobile keyboards if the hero includes inputs.

## Reflow and spacing

- Check that long headlines reflow cleanly.
- Reduce copy before shrinking type too aggressively.
- Ensure spacing remains intentional rather than merely compressed.
- Confirm columns stack in a meaningful order.

## Fixed and sticky UI

- Check for overlap between sticky headers and anchored content.
- Ensure in-page links do not hide headings beneath fixed UI.
- Verify drawers, banners, and promo bars do not consume the whole viewport unexpectedly.

## Media

- Review crop direction on mobile and tablet.
- Confirm text stays on a calm tonal area of the image.
- Use alternate crops when one image cannot serve all breakpoints.
- Reserve media space to prevent layout shift.

## App surfaces

- Confirm navigation remains discoverable at narrow widths.
- Prioritize workspace visibility over decorative framing.
- Keep filters, status, and action controls usable without crowding.
- Remove side panels or secondary context before collapsing core workspace actions.

## Quick breakpoint prompts

- What is the first thing visible on small mobile?
- Is the main action still obvious at tablet width?
- Does the page still feel composed rather than merely stacked?
- Has any visual anchor become meaningless after reflow?

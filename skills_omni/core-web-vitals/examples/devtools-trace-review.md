# DevTools trace review checklist

Use this checklist while reviewing a Performance trace.

## LCP

- Confirm the real LCP element.
- Check when its resource was discovered.
- Check whether the element was blocked by CSS, fonts, or hydration.
- Note if the LCP candidate changes by viewport.

## INP

- Identify the slow interaction.
- Look for long tasks before handler start.
- Measure handler work.
- Inspect rendering delay after JS completes.
- Check for third-party script interference.

## CLS

- Review layout-shift events.
- Identify the shifted node and likely root cause.
- Check for media, embeds, banners, or route-shell changes.
- Confirm whether the shift followed recent user input.

## Review notes

- Metric targeted:
- Main finding:
- Smallest safe fix:
- Follow-up measurement needed:

# Image, Font, and CLS Checklist

Use this checklist when LCP or CLS is poor, especially after UI redesigns.

## Images

- Identify the likely LCP image or hero element.
- Use framework-native image optimization where appropriate.
- Ensure dimensions or aspect ratio are known to avoid layout shift.
- Check responsive sizing so mobile devices do not download oversized assets.
- Use priority-related loading intentionally for the most important above-the-fold image only.

## Fonts

- Prefer framework-native font optimization when available.
- Verify fallback behavior does not cause major reflow.
- Check whether multiple weights or families are loaded unnecessarily.
- Confirm font changes did not delay text paint or shift headings.

## CLS checks

- Reserve space for images, embeds, banners, and async content.
- Avoid inserting content above existing layout after hydration unless space is reserved.
- Check conditional rendering around headers, nav, hero, and announcement bars.
- Review skeletons and placeholders for size mismatch against final content.

## Common regressions

- hero image loads without stable dimensions
- font swap changes heading height noticeably
- consent banners or promo bars push content after first paint
- client-only widgets pop in above the fold

## Review output

State:

- likely LCP element
- likely CLS sources
- whether image sizing is stable
- whether font loading is contributing to visible shift

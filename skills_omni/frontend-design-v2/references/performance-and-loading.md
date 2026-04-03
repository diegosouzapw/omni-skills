# Performance and Loading

A premium interface that loads poorly is not production-grade.

## Key Risks

- slow hero rendering
- layout shift from media or fonts
- sluggish interaction after load
- decorative assets competing with critical content

## Review Areas

### Images and media
- Reserve space with explicit dimensions or stable aspect ratios.
- Use responsive image sources when appropriate.
- Prioritize the true hero asset, not every image.
- Lazy-load below-the-fold or non-critical media.

### Fonts
- Limit unnecessary font files and variants.
- Prefer a strategy that reduces visible reflow.
- Check whether font choices cause layout instability.

### Layout stability
- Prevent injected UI from pushing content unexpectedly.
- Avoid animations that move layout during load.
- Review banners, toasts, and deferred components for shift risk.

### Interaction responsiveness
- Keep scripting overhead reasonable.
- Avoid expensive effects on user input.
- Check that interactions remain responsive on slower devices.

## Practical Handoff Checklist

- Is the largest visible hero element likely to render promptly?
- Will images or video shift layout?
- Will web fonts reflow key text noticeably?
- Are decorative assets blocking more important content?
- Do transitions remain smooth without delaying interaction?

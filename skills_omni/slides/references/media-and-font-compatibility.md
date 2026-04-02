# Media and Font Compatibility

Use conservative asset choices when portability matters.

## Fonts

Prefer fonts that are broadly available in Microsoft Office environments.

### Safer default posture

- set theme fonts explicitly
- prefer common Office-installed fonts when acceptable
- document any nonstandard font dependency in the handoff
- if fidelity depends on a nonstandard font, warn reviewers that their environment may substitute it

### Watch for

- line break changes
- text box overflow after render
- heading size drift
- substituted font names in diagnostics

## Images

### Preferred authoring inputs

- `PNG` for stable raster placement
- `SVG` when vector placement is supported and desired
- high-resolution source assets for anything that will be scaled up

### Normalize before placement when source inputs are awkward

Common problem inputs:

- `HEIC`
- `EMF`
- PDF-like embedded artwork
- odd transparency behavior

If the source is awkward, create a safe intermediate image before using it in the deck.

## Audio and video

Use caution with embedded media.

- compatibility varies by Office version and platform
- document exact media dependencies in the handoff
- do not promise identical playback everywhere
- if media is nonessential, consider providing it as a linked or separately reviewed asset rather than assuming universal embedded playback success

## Fallback rule

If fidelity and portability conflict, choose the option that keeps the deck reviewable and document the tradeoff explicitly.

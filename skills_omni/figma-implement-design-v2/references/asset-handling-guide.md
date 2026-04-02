# Asset Handling Guide

Use this guide when implementing images, icons, and SVGs from Figma-derived context.

## General rules

- Use the provided Figma-derived asset source when available.
- Do not swap in unrelated placeholders if a real asset exists.
- Verify whether the asset is decorative or informative before assigning alt text.
- Preserve aspect ratio unless the design clearly requires cropping or masking behavior.

## Raster images

Use raster assets when the design output is photographic or pixel-based.

Check:

- intrinsic dimensions
- aspect ratio behavior
- object-fit behavior if cropping is expected
- whether lazy loading is appropriate for non-critical content

## SVGs

Use SVGs when the design asset is vector-based and benefits from crisp scaling.

Decide between:

- referenced asset file
- inline SVG

Prefer inline SVG only when styling, animation, or accessibility control requires it.

## Alt text guidance

### Decorative

Use empty `alt` when the image adds no information beyond nearby text.

### Informative

Use a concise `alt` that captures the image's purpose in context.

### Icon-only controls

Do not rely on the SVG alone. Ensure the button or control has an accessible name.

## Failure recovery

If assets appear blurry, stretched, or broken:

1. compare rendered size to intrinsic size
2. check if an SVG was converted to raster unnecessarily
3. verify aspect ratio handling
4. confirm the original source path was not altered incorrectly
5. re-check whether the app requires checked-in assets rather than transient development URLs

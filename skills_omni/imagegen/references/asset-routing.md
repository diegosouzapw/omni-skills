# Asset Routing Guide

Use this guide to decide whether `imagegen` is the right skill.

## Use `imagegen` when the deliverable is a bitmap

Good fits:

- hero images
- product photos or mockups
- concept art
- textures and sprites
- composited marketing visuals
- transparent cutouts
- raster UI mockups for review

## Route away when the deliverable should be vector or code-native

Do not use `imagegen` as the main path for:

- production SVG icons
- logo-system extension
- editable vector illustrations
- HTML/CSS implementation
- canvas-based procedural visuals
- repo-native UI components

## Practical decision test

Ask:

1. Will the final artifact be consumed as a bitmap file?
2. Does the user want an image asset rather than implementation code?
3. Is fidelity to an existing vector or code system more important than generated visual variation?

If the answer to 1 and 2 is yes, `imagegen` is likely appropriate.

If the answer to 3 is yes, route to the more specific implementation or vector skill instead.

## Common handoff points

- Bitmap concept approved -> hand off to frontend or vector implementation skill.
- Mockup approved -> hand off to web or game implementation skill.
- Image packaged -> hand off to documentation/content workflow if the task becomes editorial.

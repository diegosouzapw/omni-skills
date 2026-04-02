# Imagegen Router Note

Route away from `imagegen` when the task is no longer primarily about generating or editing raster images.

## Stay in `imagegen`

- generate a new bitmap image
- edit an existing photo or illustration
- produce variants for review
- create transparent-background or composited raster assets

## Hand off when the task becomes:

- **vector production**: SVG, icon system, logo-system extension
- **frontend implementation**: HTML/CSS/canvas/UI assembly
- **game or web integration**: turning the approved image concept into a working experience
- **documentation or editorial packaging**: describing, reviewing, or publishing the asset rather than creating it

## Handoff rule

When routing away, preserve:

- the final approved image or concept
- the saved file path
- the prompt summary
- known constraints or caveats

This lets the next skill continue from an approved raster artifact instead of regenerating context.

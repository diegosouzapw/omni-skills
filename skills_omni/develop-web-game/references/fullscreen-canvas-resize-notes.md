# Fullscreen and Canvas Resize Notes

Fullscreen and resize issues often break otherwise-correct web-game automation.

## Operational rules

- Prefer one fullscreen toggle key, usually `f`, when appropriate.
- Allow `Esc` to exit fullscreen.
- After any fullscreen or resize event, recompute canvas bounds before the next input burst.
- Keep device-pixel-ratio scaling and CSS pixel size aligned.
- Normalize pointer input against the current active canvas bounds.

## What to recompute

- canvas width and height
- CSS display size
- device pixel ratio scaling
- camera transform assumptions
- pointer normalization logic

## Common symptom

Clicks or taps land in the wrong place only after fullscreen or resize.

## Usual fix

Re-read `getBoundingClientRect()`, update scaling math, and ensure both the game and automation use the same coordinate system.

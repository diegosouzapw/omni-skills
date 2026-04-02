# Deviation Log Example

Use this format when the shipped implementation intentionally differs from the Figma comp.

## Deviation 1

- Area: Primary CTA button
- Figma spec: Text contrast on brand color was below accessible threshold for normal-size text
- Implemented change: Darkened the text color and added visible focus styling
- Reason: Accessibility compliance
- Visual impact: Minimal; button remains consistent with the comp
- Follow-up: Design review may choose to update the token in both code and Figma

## Deviation 2

- Area: Card border radius
- Figma spec: `14px`
- Implemented change: Reused existing `radius-lg` token
- Reason: Project token consistency; no approved `14px` token exists
- Visual impact: Slight, acceptable difference
- Follow-up: None unless design system expands radius scale

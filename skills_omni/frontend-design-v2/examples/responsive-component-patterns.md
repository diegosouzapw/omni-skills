# Responsive Component Patterns

## Pattern 1: Analytics panel

Use container queries so the panel adapts inside a wide dashboard region or a narrow sidebar.

### Compact container
- stack title, summary, and action
- reduce secondary metadata
- move supporting actions below primary content

### Medium container
- allow two-column internal layout
- keep action row aligned with summary

### Expanded container
- introduce richer comparison layout
- restore secondary metadata and annotations

## Pattern 2: Feature card group

Avoid identical cards with fixed internals.

Instead:
- let card density vary by available width
- promote one card as the anchor
- reduce decorative assets in narrower containers
- keep headings readable before preserving illustration size

## Pattern 3: Media/text split block

At narrow widths:
- stack media and text
- shorten supporting copy
- keep CTA visible without forcing the media first

At wider widths:
- introduce asymmetry intentionally
- preserve reading order in the DOM even when the composition becomes more expressive

# Design Token Worksheet

Use this to convert approved visual decisions into implementation-ready values.

## Core Principles

- Prefer shared tokens over repeated hard-coded values.
- Keep semantic roles separate from raw values when possible.
- Capture only what is approved; do not invent a full design system for a tiny task.

## Token Categories

### Color

- `color.bg.canvas`
- `color.bg.surface`
- `color.bg.elevated`
- `color.text.primary`
- `color.text.secondary`
- `color.text.inverse`
- `color.border.default`
- `color.action.primary`
- `color.action.primaryHover`
- `color.status.success`
- `color.status.warning`
- `color.status.error`

### Typography

- `font.family.heading`
- `font.family.body`
- `font.size.xs|sm|md|lg|xl`
- `font.weight.regular|medium|semibold|bold`
- `line.height.tight|normal|relaxed`

### Spacing

- `space.1`
- `space.2`
- `space.3`
- `space.4`
- `space.6`
- `space.8`
- `space.12`

### Radius

- `radius.sm`
- `radius.md`
- `radius.lg`
- `radius.pill`

### Shadow

- `shadow.sm`
- `shadow.md`
- `shadow.lg`

### Motion

- `motion.duration.fast`
- `motion.duration.normal`
- `motion.easing.standard`
- `motion.enabled`

## Minimal Handoff Example

- colors approved and named
- typography pairing confirmed
- spacing rhythm selected
- radius style selected
- motion style selected or disabled

## Implementation Note

For web output, CSS custom properties are often the simplest durable mapping for these tokens.

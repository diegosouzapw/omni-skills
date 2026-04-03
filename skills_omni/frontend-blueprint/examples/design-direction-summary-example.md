# Design Direction Summary Example

## Project

Redesign a SaaS pricing page for a developer tools product.

## Approved Direction

- Mood: precise, premium, confident
- Visual tone: dark surfaces, restrained accent usage, generous spacing
- Key references applied:
  - Reference A: clear pricing hierarchy and billing toggle behavior
  - Reference B: stronger typography contrast and calmer card spacing
- Intentional departures:
  - use less visual noise than Reference A
  - improve contrast on secondary text and controls

## Token Candidates

- Primary brand: `#7c3aed`
- Accent: `#22c55e`
- Canvas: `#0b1020`
- Surface: `#121a2b`
- Text primary: `#f8fafc`
- Text secondary: `#94a3b8`
- Radius: medium-large
- Shadow: subtle, low blur on elevated cards
- Typography: strong heading sans, neutral body sans
- Motion: subtle hover only, disabled for reduced-motion

## Layout Notes

- 12-column marketing layout on wide screens
- stacked card layout on narrow screens
- pricing cards must still work inside narrower comparison layouts

## Approval

Approved for implementation in atomic steps:
1. token foundation
2. billing toggle and pricing cards
3. comparison table
4. FAQ and CTA
5. responsive and accessibility review

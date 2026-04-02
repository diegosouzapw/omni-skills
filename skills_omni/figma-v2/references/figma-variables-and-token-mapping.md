# Figma Variables and Token Mapping

Use this guide when Figma variables, modes, or semantic design choices need to be translated into production tokens.

## Goal

Map design intent into the repository's token and component system instead of copying raw values from Figma.

## Preferred mapping order

1. Reuse an existing semantic token in the repo.
2. Reuse an existing component prop or variant that already expresses the design intent.
3. Add a narrowly scoped new token only if there is no suitable semantic equivalent.
4. Hardcode a value only as a temporary exception, and document why.

## What to inspect from Figma

- color variables
- spacing variables
- typography variables
- radius or effect variables
- mode differences such as light and dark themes
- component variants that imply semantic states

## Mapping rules

- Prefer semantic names over literal names in implementation.
- Map one design value to one stable local token where possible.
- Avoid creating duplicate local tokens that differ only by minor numeric value.
- If a Figma variable appears purely local to one component, check whether an existing component variant already covers it.
- If the repo already has a design-system source of truth, follow that system even when Figma output is more literal.

## Example translation pattern

Instead of:
- hardcoding a color value from Figma into component styles

Prefer:
- mapping the value to an existing semantic token such as text-secondary, surface-muted, or border-subtle

Instead of:
- creating a brand-new button implementation because Figma shows a custom rectangle with text

Prefer:
- mapping the design to the existing button component and adjusting allowed variants or tokens if necessary

## When to document an exception

Document an exception when:

- visual parity requires a one-off value not represented in the token system
- the design system is missing a token or variant required for accurate implementation
- there is a temporary mismatch between Figma variables and the current repo theme model

## Handoff note template

Record:
- which Figma variables were identified
- which local tokens or variants they map to
- any unresolved mismatches
- whether a design-system follow-up is recommended

For implementation validation, see [figma-design-to-code-validation-checklist.md](figma-design-to-code-validation-checklist.md).

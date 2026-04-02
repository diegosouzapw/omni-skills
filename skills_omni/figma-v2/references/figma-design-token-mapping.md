# Figma Design Token Mapping

Use Figma variables and component structure as input to local implementation, not as a reason to hardcode raw values.

## Goal

Translate:
- Figma variables -> local design tokens
- Figma components and variants -> local reusable components
- Figma spacing and layout intent -> local layout primitives or utilities

## Recommended mapping order

1. **Find an existing component first**
   - button
   - input
   - badge
   - card
   - modal
   - typography primitive

2. **Map variables before raw values**
   - colors -> semantic color tokens
   - spacing -> spacing scale tokens
   - radii -> radius tokens
   - typography -> local text styles or font tokens
   - shadows -> elevation tokens

3. **Use raw values only when no local token exists**
   - if you must use a raw value, keep it narrow and note why
   - prefer adding a deliberate token through the repo's normal design-system workflow over scattering literal values

## Implementation guidance

### Good

- Reuse the repo's Button component and map Figma primary color variables to existing action tokens.
- Convert raw spacing observations into the closest approved spacing scale.
- Use local typography primitives even if the generated code emits direct classes or inline styles.

### Avoid

- Copying generated Tailwind classes directly into a codebase that already uses a component library.
- Hardcoding `#RRGGBB`, pixel spacing, or font sizes when matching tokens already exist.
- Duplicating a component because the Figma export looks slightly different from the local primitive.

## Validation checklist

- local component reused where appropriate
- variables mapped to local tokens
- no unnecessary literal colors or spacing values
- interaction states still match the design intent
- accessibility semantics preserved

## Suggested implementation note format

```text
Figma node: <node-id>
Mapped variables:
- color/primary -> token.color.action.primary
- spacing/medium -> token.spacing.4
- radius/small -> token.radius.sm
Reused components:
- Button
- Card
Exceptions:
- Used one temporary literal border value pending design-system review
```

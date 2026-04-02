# Example: Token-First Section Build

## Scenario

You need to build a hero section from a product brief, but you do not want to guess colors, spacing, or typography.

## Recommended approach

Before creating the section:

1. find a similar hero or banner section in the file
2. identify the heading text style
3. identify the button component and likely variant
4. inspect background and spacing token usage
5. confirm whether the section should use a layout grid

Only after that:

1. create the section container
2. apply the layout model
3. place the component instances
4. bind variables and apply styles
5. validate with a section screenshot

## Example request

```text
Build the homepage hero section in Figma, but first inspect the file for the approved heading style, primary CTA component, surface/background token, and spacing token. Then create the section with Auto Layout and keep the result linked to the design system.
```

## Expected outcome

- the section is built from discovered assets
- no arbitrary hex values are introduced
- typography and CTA styling match the design system

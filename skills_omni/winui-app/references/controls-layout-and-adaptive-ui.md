# Controls, Layout, and Adaptive UI

Use this guide when selecting controls or improving responsiveness.

## Prefer native controls

Before custom composition, check whether a built-in WinUI control already fits the request.

Examples:

- navigation shell -> `NavigationView`
- grouped actions -> `CommandBar`
- data presentation -> stock list/grid controls with appropriate virtualization
- toggles, dialogs, flyouts, and text input -> standard WinUI controls first

## Layout guidance

- Use standard XAML layout primitives clearly.
- Avoid wrapping everything in extra `Border` elements without purpose.
- Keep spacing, density, and scrolling ownership explicit.
- Treat responsiveness as shell plus page behavior, not just control shrinking.

## Adaptive review points

Check behavior at wide, medium, and narrow widths:

- navigation collapse or mode changes
- content density reduction
- spacing and padding adjustments
- scrolling ownership
- command prioritization and wrapping

## Common anti-patterns

- nested scroll owners that fight each other
- double-card layouts where parent and child both add unnecessary chrome
- fixed-width assumptions that collapse badly on smaller windows
- replacing a stock control with custom markup for no verified benefit

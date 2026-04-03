# Component Responsiveness

Use responsive behavior at two levels:

- **Viewport-level:** for major page layout changes
- **Container-level:** for reusable modules living in different parent widths

## Prefer Container Queries For

- cards
n- side panels
- dashboard tiles
- feature modules
- media/text split blocks
- toolbar and summary rows

## Why

Viewport breakpoints alone fail when a component is placed in:
- sidebars
- split panes
- nested grids
- resizable dashboards
- CMS regions with unpredictable width

## Practical Pattern

1. Give the component a query container.
2. Define compact, medium, and expanded internal layouts.
3. Let text wrap naturally before forcing hard truncation.
4. Adjust spacing, alignment, and density based on component width.

## Design Guidance

- Adapt hierarchy, not just dimensions.
- Move from multi-column to stacked layouts when the container shrinks.
- Shorten secondary metadata before hiding primary content.
- Keep critical actions visible.

## Avoid

- assuming every component is full-width
- shrinking text until the layout fits
- hiding important functionality on small screens
- using only viewport breakpoints for reusable modules

## Mobile Safety

Do not disable zoom with viewport settings. Small-screen adaptation should preserve readability and user control.

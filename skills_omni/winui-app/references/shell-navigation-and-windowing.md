# Shell, Navigation, and Windowing

Use this guide when choosing app shell structure or revising navigation, title bar, and window behavior.

## Prefer stock patterns first

Start with:

- `NavigationView` for common desktop navigation shells
- stock title bar behavior unless customization is clearly needed
- standard page/content composition before bespoke chrome

## Good defaults

- Use `NavigationView` instead of a hand-built navigation rail.
- Use `CommandBar` for grouped page/document commands instead of ad hoc button rows.
- Customize the title bar only when there is a clear design or product reason.

## Review questions

- Does navigation reflect the information architecture clearly?
- Does the title bar remain usable, draggable, and visually coherent?
- Are multi-window patterns truly needed, or is one main window enough?
- Is custom chrome replacing system behavior without a strong reason?

## Common anti-patterns

- hand-rolled navigation rails that replicate `NavigationView`
- excessive custom title-bar chrome for minor branding goals
- windowing complexity introduced before the main single-window flow is solid
- command surfaces spread across arbitrary button groups instead of a coherent command bar

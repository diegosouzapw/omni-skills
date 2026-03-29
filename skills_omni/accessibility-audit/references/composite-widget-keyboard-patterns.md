# Composite Widget Keyboard Patterns

Use this as a quick audit reference. Apply these patterns only when the UI is actually a composite widget.

| Widget type | Common keyboard expectations |
| :---------- | :--------------------------- |
| Tabs | Tab enters the tablist, arrow keys move between tabs, activation behavior is consistent, associated panel is exposed correctly |
| Menu / menu button | Trigger opens menu, arrow keys move items, Escape closes, focus returns to trigger on close |
| Accordion | Headers are keyboard reachable, Enter or Space toggles, expanded state is exposed |
| Combobox | Input and popup relationship is clear, arrow keys and selection behavior are predictable, active option is conveyed |
| Grid | Cell movement is intentional and documented, focus does not disappear, editing mode and navigation mode are distinguishable |

## Audit cautions

- Do not invent arrow-key behavior for controls that are really just buttons or links.
- Do not use roving tabindex unless the widget pattern genuinely requires it.
- Prefer native controls when the widget can be expressed natively.
- Verify spoken output and focus behavior together, not separately.

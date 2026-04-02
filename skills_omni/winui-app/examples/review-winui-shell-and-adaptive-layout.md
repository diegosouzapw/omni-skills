# Example: Review WinUI Shell and Adaptive Layout

## Scenario

The user wants a review of a WinUI app's shell, title bar, layout, and accessibility behavior.

## Review packet

Check:

- whether `NavigationView` or another stock shell would simplify the structure
- whether title bar customization is justified and still usable
- whether command surfaces should become a `CommandBar`
- whether narrow-width behavior reduces density appropriately
- whether nested scrolling creates awkward interaction
- whether focus order and keyboard navigation remain strong
- whether dark and light themes both remain coherent

## Good response shape

```text
I reviewed the shell using stock WinUI patterns as the baseline. The main issues are custom title-bar complexity, a hand-built navigation rail that could be replaced by NavigationView, and narrow-width layouts that keep too much density. I recommend simplifying shell structure first, then rechecking keyboard and theme behavior.
```

# Example: Troubleshoot Opaque XAML Compiler Failure

## Scenario

The project fails with `MSB3073` and references XAML compiler tooling, but the visible error is vague.

## Suggested flow

1. Confirm whether the app is packaged or unpackaged.
2. Create or compare against a fresh matching WinUI template.
3. Inspect the most recent XAML, resource dictionary, style, and binding changes.
4. Reduce the failing surface until the smallest reproducer is visible.
5. Reapply changes incrementally.

## Good response shape

```text
I am treating this as an opaque XAML compile failure rather than a generic build issue.
I will compare your project against a fresh matching WinUI template, isolate recent XAML/resource changes, and avoid destructive cleanup unless evidence points there.
```

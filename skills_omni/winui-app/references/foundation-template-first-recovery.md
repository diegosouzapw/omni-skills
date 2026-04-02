# Template-First Recovery

Use this guide for opaque XAML compiler failures, confusing MSBuild wrapper errors, or startup issues that may be rooted in drift from a known-good WinUI baseline.

## When to use it

- `MSB3073` gives little useful detail
- `XamlCompiler.exe` fails but the visible error is vague
- generated files point at symptoms, not causes
- recent XAML, styles, resources, or startup changes make diagnosis noisy

## Recovery method

1. Confirm the intended app model: packaged or unpackaged.
2. Create or inspect a fresh WinUI template that matches that app model.
3. Compare the failing project against the fresh baseline.
4. Isolate recent changes in this order:
   - resource dictionaries and merged dictionaries
   - custom styles and templates
   - page markup and bindings
   - startup composition and shell wiring
5. Reduce the failing surface to the smallest reproducible change.
6. Reintroduce changes incrementally until the real cause is confirmed.

## Good candidates to isolate first

- malformed XAML
- duplicate resource keys
- incorrect namespace declarations
- broken bindings that accompany template or control changes
- invalid merged dictionary paths
- startup/page navigation changes that hide the actual failing page

## Avoid as a first response

- broad deletion of caches or folders with no evidence
- random SDK/workload reinstalls
- undocumented build flags
- mixing multiple speculative fixes at once

## Goal

Return the project to a known-good baseline, then add back only the minimum change needed to reproduce and fix the problem.

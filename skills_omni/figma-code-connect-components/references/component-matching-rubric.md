# Component Matching Rubric

Use this rubric to compare a Figma component to code candidates.

## Ranking order

### 1. Same component purpose

Prefer candidates that serve the same UI purpose, not just the same name.

- Good: Figma `ProductCard` → code `ProductCard`
- Weaker: Figma `ProductCard` → code `CardShell`

### 2. Export validity

Verify that the proposed `componentName` matches the actual export or implementation name used in the file.

Check:

- named export vs default export
- exact casing
- wrapper files that re-export another symbol

### 3. Variant and prop correspondence

Compare Figma properties to code props.

Examples:

- Figma `variant=primary|secondary` ↔ code `variant?: 'primary' | 'secondary'`
- Figma `size=sm|md|lg` ↔ code `size?: 'sm' | 'md' | 'lg'`
- Figma boolean toggles ↔ code boolean props

### 4. Default state alignment

Prefer candidates whose defaults match the design system defaults.

Examples:

- default variant
- default size
- icon placement
- disabled or loading handling

### 5. Structural similarity

Inspect whether the component structure and intent match.

Examples:

- nested label + icon + badge
- avatar + metadata + action area
- input wrapper + helper text + error text

### 6. Framework or platform fit

The label should match the actual implementation platform.

Examples:

- React file for `React`
- `.vue` implementation for `Vue`
- SwiftUI view for `SwiftUI`
- Jetpack Compose implementation for `Compose`

## If no exact match exists

- inspect the 2-3 closest candidates
- explain why each is close
- state why the preferred choice is still uncertain
- ask the user to confirm before writing

## Minimum validation before proposing a mapping

- file exists
- repo-relative path is known
- export name is verified
- props and variants are plausibly aligned
- label is accurate

## One-sentence rationale template

```text
I propose `src/components/Button.tsx` exporting `Button` because its `variant` and `size` props match the Figma component properties and it appears to be the canonical React implementation.
```

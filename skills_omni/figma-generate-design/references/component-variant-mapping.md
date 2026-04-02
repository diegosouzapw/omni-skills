# Component Variant Mapping

Use this guide to choose the right component instance and configure it correctly.

## Goal

A visually similar variant is not good enough if it differs from production behavior.

Choose variants by matching:

- explicit props in source code
- default props in the component definition
- state from screenshots or runtime behavior
- content and icon usage
- enabled, disabled, selected, error, or loading states

## Recommended workflow

1. Identify the component used in code or the closest approved design-system equivalent.
2. Inspect the component set in Figma.
3. Record variant axes and exposed component properties.
4. Check source defaults before selecting a variant.
5. Create the instance.
6. Apply text or boolean properties with `setProperties()`.
7. Only use direct node edits for content not exposed through properties.

## What to inspect

For each component, capture:

- component set name
- key
- variant axes and possible values
- default variant
- exposed properties
- nested instances that expose their own properties

## Typical mapping questions

- Does the code omit a prop because the component has a default?
- Is `primary` implied even though no `variant` prop is passed?
- Is the icon optional but enabled by default?
- Is the visual state selected, hover, disabled, or loading?
- Is the size inherited from context or explicitly set?

## Update guidance

When updating existing screens:

- prefer `swapComponent()` over deleting and rebuilding
- keep the existing instance when only properties need to change
- preserve surrounding layout where possible

## QA checks

Before signoff, verify:

- the chosen variant matches source defaults
- visible text was set via the right property when available
- nested instance properties were not overlooked
- stateful controls match the intended state, not just the base style

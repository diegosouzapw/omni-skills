# Component Mapping Guide

Use this guide to translate Figma components into existing implementation primitives.

## Goal

Prefer reuse and extension over recreation. The target is not to copy the screenshot literally with fresh code. The target is to express the design through the repository's existing UI system whenever possible.

## Mapping worksheet

| Figma component | Variant / state | Existing code component | Props / slots / composition | Gap | Action |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  | reuse / extend / compose / create |

## Decision order

### 1. Reuse directly

Use an existing component unchanged when it already supports the design.

### 2. Extend with a variant or prop

Use this when the design differs in a way that fits the current component model, such as:

- size
- emphasis
- icon placement
- state treatment
- layout density

### 3. Compose from existing primitives

Use this when the design is a higher-level pattern that can be built from existing container, typography, button, badge, list, or input primitives.

### 4. Create a new component

Do this only when no reasonable reusable path exists.

## Checks before creating a new component

- Is there an existing primitive that covers 80 to 90 percent of the design?
- Would a new variant be cleaner than a duplicate component?
- Would a wrapper or composition preserve consistency better than a one-off implementation?
- Will a new component improve the system, or only satisfy one screenshot?

## Code Connect-style thinking

When a Figma component clearly corresponds to a design-system primitive, preserve the semantic meaning of that component in code:

- preserve variants as variants, not ad hoc classes
- preserve state distinctions as props or controlled behavior
- preserve slots and composition patterns where the codebase already has them

## Output note template

```text
Mapped Figma component `<FigmaName>` variant `<Variant>` to `<CodeComponent>` using props `<Props>`. Extended the existing component instead of creating a duplicate because the visual difference fit the current component API.
```

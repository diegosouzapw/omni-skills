# Theme Validation Checklist

Use this checklist before handoff or deployment for Shopify theme changes.

## Structure and architecture

- Confirm the change belongs in the theme, not in a headless or app-only surface.
- Prefer sections, blocks, snippets, and JSON templates over brittle hardcoding.
- Confirm merchant-configurable settings are exposed through schema when appropriate.

## Liquid correctness

- Validate object availability for the template context.
- Guard optional values and metafields safely.
- Reduce complex logic where possible.
- Reuse snippets with clear inputs.

## Theme tooling

- Run Theme Check if available in the workflow.
- Fix meaningful findings before handoff.
- Re-check any warnings related to schema, Liquid, or theme structure.

## Preview verification

- Confirm you are inspecting the correct theme preview.
- Verify the changed template, section, or block visually.
- Test merchant settings interactions in the theme editor if relevant.
- Verify cart/product/collection behavior for the exact affected flow.

## JSON and schema checks

- Validate JSON template syntax.
- Validate section schema shape and setting definitions.
- Confirm blocks, presets, and settings are wired correctly.

## Performance review

- Review image sizes and loading strategy.
- Minimize unnecessary third-party scripts.
- Avoid excessive Liquid loops or repeated expensive rendering.
- Check impact on key storefront paths, not just the edited component.

## Handoff notes

Record:
- files changed
- preview or theme context used
- validation steps completed
- known limitations or merchant setup assumptions

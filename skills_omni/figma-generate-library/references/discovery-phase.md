# Discovery Phase Reference

Use this reference for Phase 0. This phase is read-only.

## Goals

- understand the implementation source of truth
- understand the current Figma file state
- identify reusable local or subscribed-library assets
- produce a scope-locked v1 plan before any writes

## Codebase discovery checklist

Extract and normalize the following:
- token names, values, and categories
- theme modes such as light/dark or brand variants
- typography scales and naming
- spacing and radius scales
- shadow/effect usage if present
- component inventory and dependency order
- implementation naming conventions for components, props, and tokens

Record conflicts such as:
- duplicate token names with different values
- code naming that cannot map cleanly into current Figma naming
- multiple implementations of the same UI concept

## Figma discovery checklist

Inspect the target file for:
- page structure
- variable collections and mode count
- styles already present
- component naming and page organization
- variant usage patterns
- component property usage
- evidence of existing library governance or ad hoc construction

Look for drift such as:
- hardcoded values instead of variables
- duplicate components under slightly different names
- multiple page structures for similar component families

## Reuse check

Search local or subscribed libraries before rebuilding.

Prefer this decision order:
1. local reusable asset already in the file
2. subscribed library asset with compatible API and editable ownership
3. new local creation

## Scope-lock artifact

Before Phase 1, produce a compact artifact containing:
- collections to create
- planned modes
- styles to create
- initial components in dependency order
- naming decisions
- explicit conflicts requiring user judgment

## Stop condition

Do not write until the user approves the plan.

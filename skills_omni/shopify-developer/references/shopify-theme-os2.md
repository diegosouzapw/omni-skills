# Shopify Theme OS 2.0 Guide

Use this reference for current theme architecture decisions.

## Architecture defaults

For modern Shopify theme work, start from Online Store 2.0 concepts:

- JSON templates
- sections
- blocks
- schema-driven settings
- app blocks where relevant
- merchant-configurable content instead of hardcoded markup where possible

## Operator checklist

1. Identify the file type involved: layout, template, section, snippet, asset, or config.
2. Decide whether the change belongs in a section or block instead of a fixed template edit.
3. Verify that schema settings are valid and merchant-friendly.
4. If the request affects editor behavior, inspect section schema and block definitions first.
5. Use `render` for modular snippet composition where appropriate.
6. Validate JSON template structure before assuming runtime issues.

## Common failure modes

### Section settings do not appear

**Symptoms:** Merchant controls do not show in the theme editor.

**Likely causes:**
- invalid or misplaced schema
- incorrect setting definition
- wrong file type for the change

**Recovery:** Validate the section schema structure and confirm the setting is defined in the correct section file.

### Template appears broken after edit

**Symptoms:** Theme preview fails or content disappears after changing a JSON template.

**Likely causes:**
- malformed JSON
- missing section reference
- block or section IDs misconfigured

**Recovery:** Reduce to a minimal valid template, then add sections back incrementally.

## Performance note

Theme correctness and theme performance are linked. Avoid large loops, excessive section nesting, and unnecessary third-party scripts when implementing storefront changes.

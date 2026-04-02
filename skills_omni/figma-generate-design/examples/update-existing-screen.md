# Example: Update an Existing Screen

## Scenario

The Figma Pricing page exists already, but production now has:

- a different hero headline
- updated card spacing
- a new emphasized CTA variant
- one removed FAQ item

## Recommended approach

1. Inspect the existing Pricing frame structure.
2. Identify sections to preserve versus mutate.
3. Check whether the current CTA instance can be updated by property change or swap.
4. Inspect spacing and style usage on neighboring sections before introducing new values.
5. Apply targeted edits section by section.
6. Screenshot each changed section.
7. Validate the full frame and confirm system linkage still exists.

## Example request

```text
Use @figma-generate-design to update the existing Pricing screen in Figma to match production. Preserve existing design-system instances where possible, swap outdated variants, remove the deprecated FAQ row, and validate the final frame against the live layout.
```

## Expected outcome

- minimal destructive edits
- preserved component lineage where practical
- updated content and variant choices aligned to production
- clear QA evidence for the changed sections

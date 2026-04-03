# Medium Feature Example

## Request

"Add a status filter to the orders page so users can show only pending, shipped, or canceled orders."

## Right-sized approach

- Scope: medium
- Required artifact: brief spec
- Design: inline unless patterns are unclear
- Tasks: may stay implicit if execution remains straightforward

## Example brief spec

```md
# Feature: Orders status filter

## Summary
Add a status filter control to the orders page.

## Scope
- In scope: pending, shipped, canceled filters
- Out of scope: saved filter presets, multi-filter combinations

## Acceptance Criteria
- Users can choose All, Pending, Shipped, or Canceled.
- The order list updates to reflect the selected filter.
- Existing default behavior remains unchanged when All is selected.
```

## Inline design note

- Reuse the existing list-filter pattern used on the invoices page.
- Keep filtering server-side if the page already depends on query params.

## Verification

- Add or update targeted tests for filter behavior.
- Manually confirm the control updates the order list and preserves All as default.

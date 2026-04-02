# Example: Update Page with Additive Edit

## User request

```text
Add a "Rollback Plan" section to the API migration page in Confluence.
```

## Suggested agent flow

1. Resolve the page through search or direct ID.
2. Retrieve the current content first.
3. Preserve existing sections.
4. Insert the new section at the correct location.
5. Update the page.
6. Confirm the page title, page ID, and summary of the added content.

## Good confirmation output

```text
Updated "API Migration" (page ID 123456789) by adding a new "Rollback Plan" section without changing unrelated sections.
```

# Example: Resume Interrupted Build

## Prompt

```text
Use @figma-generate-library with @figma-use to resume design-system run ds-build-2026-001. Start with a read-only scan of pages, variables, styles, and components. Reconcile the results with the latest state ledger and tell me the smallest safe next step before making any changes.
```

## Expected focus

- state rehydration first
- no blind retries
- explicit duplicate/orphan identification
- resume from the smallest incomplete unit

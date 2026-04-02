# Example: Retrofit Existing Figma File To Code

## Prompt

```text
Use @figma-generate-library with @figma-use to reconcile the current Figma library with the implementation codebase. Start by auditing current variables, styles, pages, and components. Show me where Figma and code differ in naming, token values, and component APIs. Propose the minimum-change plan before making updates.
```

## Expected focus

- identify drift rather than rebuilding immediately
- preserve good existing structure where possible
- escalate naming conflicts to the user
- update foundations before component rewrites

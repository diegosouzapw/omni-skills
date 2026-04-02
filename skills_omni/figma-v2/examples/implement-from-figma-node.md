# Example: Implement from a Figma Node

## Prompt

```text
Use @figma-v2 for this task.

Figma link: <exact-frame-or-layer-url>
Target repo: <repo-or-app>
Target stack: <framework>

Workflow:
1. Verify the exact node from the link.
2. Fetch structured design context for that node.
3. Fetch a screenshot of the same node.
4. Identify any variables and assets needed.
5. Implement using this repo's existing components and tokens instead of copying raw generated output.
6. Summarize which Figma variables mapped to which local tokens.
7. Call out any unresolved accessibility or responsive questions.
```

## Expected result shape

- confirmed node or request for a better link
- structured design-context summary
- screenshot-backed implementation notes
- token/component mapping notes
- repo-native implementation plan or code changes
- short provenance note

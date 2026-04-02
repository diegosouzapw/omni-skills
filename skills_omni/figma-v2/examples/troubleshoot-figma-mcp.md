# Example: Troubleshoot Figma MCP

## Prompt

```text
Use @figma-v2 to troubleshoot this issue.

Problem: Figma MCP is not returning the expected design context.
Provided link: <figma-url>
Observed behavior: <error-or-mismatch>

Check, in order:
1. whether the MCP server is available in this client
2. whether approval or trust is blocking tool execution
3. whether the link points to the exact node
4. whether file access is missing
5. whether the request is too broad or rate-limited
6. whether the problem is asset-specific rather than node-specific

Do not ask for tokens in chat. End with the most likely cause and the next safe action.
```

## Expected result shape

- likely root cause
- evidence used to reach that conclusion
- safe next action
- whether the user needs to resend a link, grant access, or switch environments

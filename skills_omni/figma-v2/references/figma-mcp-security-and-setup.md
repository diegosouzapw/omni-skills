# Figma MCP Security and Setup

## Core safety rules

- Never ask the user to paste Figma access tokens into chat.
- Never copy tokens, cookies, or secret headers into PRs, issues, or review comments.
- Verify the MCP server origin before trusting remote tools.
- Use the client's configured auth and approval flow.
- Prefer least-privilege access and the narrowest share settings that still allow the work.

## Setup checklist

1. Confirm the client supports the configured Figma MCP server.
2. Confirm the server appears in the client's MCP tool list.
3. Confirm any required approval or trust flow has been completed.
4. Confirm the authenticated account can access the target Figma file.
5. Test with a narrow, exact-node request before attempting broad retrieval.

## Verification checklist

Before starting a real task, confirm:
- the MCP server is available
- tool invocation is allowed
- the account context is correct
- the target file is accessible
- the provided link points to the right node

## Safe troubleshooting guidance

### Auth works in one environment but not another

Possible causes:
- different client config
- different account context
- missing approval in the second environment
- workspace restrictions

Action:
Re-check the client's configured server and account context. Do not move secrets manually through chat as a workaround.

### Remote server trust is unclear

Action:
Stop and verify provenance of the MCP server before continuing. Use only approved server definitions and trusted environments.

### User wants to share credentials directly

Action:
Decline and ask them to configure access through the supported client setup path instead.

## Operational notes

- A valid Figma share link is not always enough; the authenticated account must also have the right access.
- Exact-node requests are safer and more reliable than broad file retrieval.
- Temporary or localhost-style asset URLs may be suitable for immediate workflow use but still need validation before being committed or reused in production code.

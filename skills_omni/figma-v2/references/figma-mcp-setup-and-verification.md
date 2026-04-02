# Figma MCP Setup and Verification

Use this guide before any Figma retrieval task.

## Goals

- confirm the Figma MCP server is available in the current client
- confirm authentication is configured through the local client or secret store
- verify tool discovery before starting work
- avoid leaking tokens or relying on unsupported environment assumptions

## Preflight checklist

1. Confirm the current client supports MCP server connections.
2. Confirm the Figma MCP server is installed or configured in that client.
3. Verify the server appears in the client's MCP server list or tool inventory.
4. Confirm required approvals or trust prompts have been accepted.
5. Confirm authentication is configured locally.
6. Verify the user can access the target Figma file with the authenticated account.
7. Verify expected Figma tools are actually exposed before starting the task.

## Secret handling rules

- Store Figma credentials in the client's approved local secret or environment mechanism.
- Never ask the user to paste a personal access token into chat.
- Never commit credentials into repository files, markdown examples, screenshots, or shell history on purpose.
- If a token appears in shared text, stop and rotate it through the user's normal credential process.

## Verification flow

### 1. Check server visibility

Verify that the Figma MCP server is visible in the active client session.

Expected result:
- the server is listed
- tool invocation is possible
- no pending trust or enablement gate blocks usage

### 2. Check tool discovery

Before doing task work, confirm that Figma-related tools are actually exposed in the environment.

Expected result:
- you can see the server-provided Figma tools
- the client recognizes the server as available
- there is no ambiguity about whether the workflow can continue

### 3. Check account and file access

Confirm the authenticated account can access the shared file or node.

Expected result:
- the user-provided link opens for that account in Figma
- file-level access and node-level targeting both look valid

### 4. Confirm exact target input

Before retrieval, make sure you have:
- the exact frame or layer URL when possible
- the file key
- the node ID if available
- the desired platform and implementation target

## Safe operating notes

- Prefer local-only configuration for MCP servers and secrets.
- Do not assume tool names are identical across clients; verify what is actually exposed.
- If a client requires restart after MCP config changes, do that before troubleshooting deeper.
- If trust approval is blocked by workspace policy, stop and ask for an approved environment.

## Common failure patterns

### Server configured but not visible

Possible causes:
- stale client session
- configuration file not loaded
- trust approval still pending
- wrong workspace or profile active

### Auth configured but retrieval fails

Possible causes:
- wrong account
- expired token or session
- file permissions do not include the authenticated account
- node link points to a file the account cannot access

### Tools visible but task still fails

Possible causes:
- wrong file key or node ID
- broad file link instead of exact node link
- oversized request or truncated response

For recovery actions, see [figma-mcp-troubleshooting.md](figma-mcp-troubleshooting.md).

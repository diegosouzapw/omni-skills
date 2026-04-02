# Figma MCP Troubleshooting

Use this guide when the normal Figma MCP workflow fails.

## Problem: MCP server not detected

**Symptoms:** Figma tools do not appear in the client.

**Actions:**
1. Confirm the client supports MCP.
2. Confirm the Figma MCP server is configured in the active profile or workspace.
3. Check whether the client requires restart after server configuration changes.
4. Verify any trust or approval prompts were accepted.
5. Re-check the tool inventory after reconnecting.

## Problem: Authentication or permission denied

**Symptoms:** Requests fail with access or permission errors.

**Actions:**
1. Confirm the authenticated account can open the target file in Figma.
2. Confirm auth is configured through the local client path, not pasted into chat.
3. Check whether the file belongs to a restricted workspace or organization.
4. Confirm the shared link points to the intended file.
5. Ask the user to re-share access or resend the correct link if needed.

## Problem: Wrong node or wrong variant

**Symptoms:** Returned context or screenshot does not match the intended UI.

**Actions:**
1. Re-check the exact frame or layer URL.
2. Extract the node ID again.
3. Ask for explicit state, variant, mode, or breakpoint.
4. Re-run against only the corrected node.

See [figma-node-selection-and-url-guide.md](figma-node-selection-and-url-guide.md).

## Problem: Response too large or truncated

**Symptoms:** The response cuts off, is incomplete, or contains too much irrelevant context.

**Actions:**
1. Stop requesting the whole file.
2. Fetch high-level structure or metadata first.
3. Identify the exact subtree you need.
4. Re-run retrieval against only that subtree or node.
5. Continue with screenshot and asset retrieval only after the scope is correct.

## Problem: Localhost or temporary asset URL returned

**Symptoms:** Asset retrieval works locally but the returned URL is not suitable for production or sharing.

**Actions:**
1. Use the asset locally only for immediate implementation if appropriate.
2. Export or store the final asset in the repository or approved asset pipeline.
3. Remove localhost references from final code, docs, and review packets.

## Problem: Generated code does not fit the repo stack

**Symptoms:** Output uses the wrong framework, style system, or component patterns.

**Actions:**
1. Treat generated code as a scaffold only.
2. Re-map it to the repo's styling system and component library.
3. Replace hardcoded values with local tokens.
4. Re-check semantics and accessibility before merge.

## Problem: Repeated retries are not helping

**Symptoms:** You are making multiple retrieval attempts with little change in outcome.

**Actions:**
1. Stop and identify whether the issue is setup, auth, node selection, or scope.
2. Narrow the request.
3. Verify the exact user goal again.
4. Document the blocking issue if the environment is not ready for Figma retrieval.

For preflight checks, see [figma-mcp-setup-and-verification.md](figma-mcp-setup-and-verification.md).

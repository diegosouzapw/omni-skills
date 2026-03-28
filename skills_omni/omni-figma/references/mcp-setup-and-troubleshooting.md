# MCP Setup and Troubleshooting

## Preferred server

- Prefer the remote Figma MCP server. Figma explicitly recommends the remote server because it exposes the broadest feature set.
- Use the desktop MCP server only when selection-based local access is required or an organization-specific workflow depends on it.

## Remote server baseline

Use a config shaped like this:

```toml
[mcp_servers.figma]
url = "https://mcp.figma.com/mcp"
bearer_token_env_var = "FIGMA_OAUTH_TOKEN"
http_headers = { "X-Figma-Region" = "us-east-1" }
```

Guidance:

- Export `FIGMA_OAUTH_TOKEN` in the same shell or IDE environment that launches the agent.
- Keep the region header aligned with the user's Figma region.
- Restart the MCP client after changing config or auth.
- Verify access with `whoami` when available.

## Desktop server baseline

The desktop server runs locally at `http://127.0.0.1:3845/mcp`.

Minimum workflow:

1. Open the Figma desktop app and update it.
2. Open a design file.
3. Switch to Dev Mode.
4. Enable the desktop MCP server in the inspect panel.
5. Add the local HTTP server to the MCP client.
6. Verify tools are visible before starting work.

Use the desktop server for selection-based prompting. The remote server is still preferred for general coverage.

## Verification checklist

- Confirm the Figma tools are loaded before doing real work.
- Run a small call first: `whoami`, `get_design_context` on a tiny node, or `get_screenshot`.
- Confirm that assets resolve and that the selected node is the exact frame or component variant requested.
- If Code Connect is expected, confirm the relevant tools are available before planning a mapping workflow.

## Common failures

### Tools are missing

- The MCP server may not be configured or restarted.
- Auth may not be loaded into the environment.
- On desktop, the local server may not be enabled in Dev Mode.

### OAuth or permission errors

- The token may be empty, expired, or quoted incorrectly.
- The Figma account may not have access to the file, team library, or plan features needed for the task.
- If permissions are unclear, use `whoami` first, then confirm file access.

### Slow responses or truncated output

- The node is too large.
- Reduce the selection to smaller sections.
- Run `get_metadata` and refetch only the needed child nodes.

### Asked for variables but got code

- The prompt was too vague.
- Use `get_variable_defs` explicitly or say "Get the variable names and values used in this frame."

### Assets are broken

- Use the asset source returned by Figma directly.
- Do not swap in a placeholder or a third-party icon package when a Figma source exists.
- On desktop, check the MCP image settings if asset behavior looks wrong.

### Code Connect is unavailable or incomplete

- The selection may not contain published components.
- The component may not be published to a team library.
- Some Code Connect capabilities require Organization or Enterprise plan access.

## Source notes

- Remote server recommendation and setup: `https://developers.figma.com/docs/figma-mcp-server`
- Desktop server details: `https://developers.figma.com/docs/figma-mcp-server/local-server-installation/`
- Permissions and capabilities should always be verified against the active Figma account and workspace.

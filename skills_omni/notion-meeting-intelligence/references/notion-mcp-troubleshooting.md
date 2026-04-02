# Notion MCP Troubleshooting

## 1. Setup or authentication is incomplete

**Symptoms:** Notion tools are unavailable, login has not been performed, or the client cannot call the server.

**Actions:**
- Confirm the MCP server was added: `codex mcp add notion --url https://mcp.notion.com/mcp`
- Confirm the operator environment has the required remote MCP support enabled.
- Run `codex mcp login notion`
- If the environment requires a restart after login, restart before retrying retrieval.

## 2. Login succeeded but content is missing

**Symptoms:** Search returns little or nothing, or expected pages cannot be fetched.

**Actions:**
- Verify the correct workspace is connected.
- Confirm the specific pages or databases are shared and accessible.
- Reconnect if permissions recently changed.
- Retry with a direct page link if available.

## 3. Search quality is poor

**Symptoms:** Too many similarly named or stale pages appear.

**Actions:**
- Narrow the query by exact project name, owner, or time period.
- Search for canonical artifacts first: charter, decision log, roadmap, review notes.
- Fetch full pages before summarizing.
- Exclude stale or low-confidence sources from the final packet.

## 4. Page update or create fails

**Symptoms:** Writes fail or the target location is ambiguous.

**Actions:**
- Confirm the destination page or database.
- Verify write permission.
- Avoid blind retries against uncertain targets.
- Fall back to a manual-paste draft when permissions are blocked.

## 5. Safe fallback

If internal context is required and access still cannot be established, stop and ask for:
- direct page links
- exported notes
- pasted source excerpts
- a user-approved summary packet

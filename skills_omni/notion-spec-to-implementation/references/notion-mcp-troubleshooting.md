# Notion MCP Troubleshooting

Use this guide when Notion tool calls fail or return incomplete results.

## 1. MCP not connected

**Symptoms:** Tool calls fail immediately or the Notion tool is unavailable.

**Verify first:**
- `codex mcp add notion --url https://mcp.notion.com/mcp`
- remote MCP support is enabled if your client requires it
- the client recognizes the MCP entry

**Fix:** Add the MCP, enable remote MCP support, and retry.

## 2. OAuth completed but access still fails

**Symptoms:** Login seemed successful, but search or fetch still fails.

**Verify first:**
- the client session was restarted after login if required
- you logged into the intended Notion account
- the workspace permits access for the integration path being used

**Fix:** Restart the client session, then retry a known search.

## 3. Search returns nothing

**Symptoms:** A page the user expects cannot be found.

**Verify first:**
- exact page title or distinctive keywords
- whether the page is actually in the reachable workspace
- whether the page was shared appropriately

**Fix:** Try narrower terms, then broader terms. Ask the user for the exact title or direct link if needed.

## 4. Search returns too many similar pages

**Symptoms:** Multiple near-duplicate titles make it unsafe to continue.

**Verify first:**
- project name
- latest approved page
- team ownership
- date context if applicable

**Fix:** Ask the user to identify the authoritative page before creating any artifacts.

## 5. Fetch works but write operations fail

**Symptoms:** Reading succeeds but page or task creation fails.

**Verify first:**
- target is the correct page or database
- required properties are present
- status/select values are valid
- relation properties use the correct IDs

**Fix:** Re-inspect the destination schema using `references/notion-schema-validation.md` and update the payload.

## 6. Relation fields fail to link

**Symptoms:** Task records are created but relation properties reject the payload.

**Verify first:**
- exact related object IDs
- relation property target
- whether the target object belongs to the expected database

**Fix:** Validate IDs and relation targets. If relations are unavailable, add explicit links in the body as a fallback.

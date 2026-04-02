# Notion Access Preflight

Use this checklist before starting research or publishing.

## 1. Confirm task scope

- What question must the final document answer?
- Is the task read-only, or does it include creating/updating a Notion page?
- Which workspace should be used?

## 2. Confirm Notion MCP availability

If Notion MCP is not yet available in the client:

```bash
codex mcp add notion --url https://mcp.notion.com/mcp
codex mcp login notion
```

If authorization succeeds but tools still do not appear, restart the client before continuing.

## 3. Confirm authorization boundary

Check:

- the correct workspace is connected
- authorization completed successfully
- the intended content is accessible to the integration
- write capability is available if publishing is required

## 4. Confirm page or database access

A page being visible to the human user does not guarantee the integration can access it.

If fetch fails:

- verify the page is actually shared with the integration
- verify you are using the correct workspace
- verify the content has not moved or been archived

## 5. Confirm read vs write path

Separate these cases:

- **Read-only research:** search, fetch, evidence capture
- **Write path:** create page, update page, append sections, publish final draft

Do not assume write capability exists just because search works.

## 6. Confirm approval expectations

If the environment uses approvals or explicit confirmations:

- ask before creating or updating pages when appropriate
- tell the user when a restart is required after login
- stop cleanly instead of pretending the write succeeded

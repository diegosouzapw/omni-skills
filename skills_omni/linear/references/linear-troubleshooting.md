# Linear Troubleshooting

## Problem: OAuth login finished, but tool calls still fail

**Symptoms:** Browser authentication succeeded, but the MCP client still returns auth or connection errors.

**Solution:** Restart the MCP client or CLI session if required, then retry a simple read operation. If failure continues, repeat the login flow and confirm the Linear MCP endpoint is the expected official one.

## Problem: The expected team or project is not visible

**Symptoms:** You can connect to Linear, but a team, project, or issue expected by the user does not appear.

**Solution:** Check workspace membership and permissions. Narrow the query to the correct team or project context. Confirm whether the object is archived or belongs to another workspace/team.

## Problem: The write fails because required values are missing

**Symptoms:** The create or update call fails, or the tool output indicates missing or invalid fields.

**Solution:** Read the current object and supporting metadata first. Confirm valid team, status, assignee, label, priority, and project values before retrying. Break large changes into smaller writes.

## Problem: Bulk work is slow or rate-limited

**Symptoms:** Repeated list calls or many updates cause slow responses or intermittent failures.

**Solution:** Reduce scope, batch the work, avoid repeated broad queries, and reuse earlier read results where possible.

## Problem: You are unsure whether to create an issue, project, cycle update, or comment

**Symptoms:** The user asks for a workflow change, but the correct Linear object type is unclear.

**Solution:** Apply these defaults:

- create an issue for a discrete work item
- create or update a project for a multi-issue initiative
- use cycle-related changes for timeboxed planning
- use a comment when the main goal is a recorded update or rationale

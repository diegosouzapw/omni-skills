# Linear Workflow Playbook

Use this playbook when operating Linear through MCP.

## Core rule set

1. Authenticate safely with the official Linear MCP flow.
2. Clarify the user's exact operating goal.
3. Confirm identifiers before mutation.
4. Read current state before write actions.
5. For bulk changes, present the intended grouping logic first.
6. Apply the smallest possible mutation set.
7. Verify results when practical.
8. Summarize outcomes, blockers, and next actions.

## Recommended sequence

### 1. Setup and connectivity

- Confirm the Linear MCP server is configured.
- Use OAuth login.
- Restart the client after browser auth if required.
- Test with a simple read operation.

### 2. Intake

Collect the minimum required context:

- team
- issue key or ID
- project
- assignee
- labels
- cycle
- due date
- success criteria

If the request is broad, restate the intended output before calling tools.

### 3. Read pass

Inspect the current state of the relevant objects.

Examples:

- issue details before updating
- existing projects before creating a new one
- current labels before creating new taxonomy
- active cycles before planning sprint work
- assignee load before rebalancing

### 4. Plan pass

Required for any non-trivial write.

Summarize:

- which objects will change
- which fields will change
- why those changes are appropriate
- which assumptions remain

### 5. Write pass

Prefer narrow operations:

- create one issue
- update a bounded issue set
- add one clear comment
- create a project only after checking existing structure

### 6. Verification

Re-read updated objects when practical to confirm the changes landed correctly.

### 7. Final summary

Include:

- reads performed
- writes performed
- exact affected objects
- unresolved blockers
- recommended follow-up

## Safe mutation checklist

Before any write, confirm:

- the team is correct
- the issue/project/cycle is correct
- the user asked for the change or the workflow clearly justifies it
- required fields are present
- labels, statuses, and assignees are valid in context
- the operation is not unexpectedly broad

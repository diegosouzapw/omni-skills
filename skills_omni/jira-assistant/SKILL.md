---
name: "jira-assistant"
description: "Jira Assistant workflow skill. Use this skill when the user needs to manage Jira issues through Atlassian MCP: search issues, inspect details, create or update tickets, add comments, transition workflow status, assign work, and handle sprint tasks after board context is identified. Use it for requests like 'create a Jira ticket', 'search Jira', 'move this issue to done', 'update my sprint', or 'show my blockers'. Do not use it for Confluence pages, Jira administration, workflow configuration, permission changes, or dashboard/report design."
version: "0.0.1"
category: "ai-agents"
tags:
  - "jira-assistant"
  - "jira"
  - "atlassian"
  - "mcp"
  - "issue-management"
  - "jql"
  - "sprints"
  - "workflow"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/jira-assistant"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Jira Assistant

## Overview

Use this skill to operate on Jira issues through Atlassian MCP in a safe, execution-first way.

It is intended for day-to-day Jira work such as:

- finding issues when the key is unknown
- creating a new task, bug, epic, or subtask
- editing issue fields
- adding comments
- assigning issues
- transitioning issues through workflow states
- checking sprint contents and moving issues when board context is known

This skill preserves the intent of the upstream Jira workflow while improving operational clarity for agents. Prefer this skill when the task is about Jira issue execution, not Jira site administration.

## When to Use This Skill

Use this skill when the user wants to:

- search for Jira issues by natural language or JQL
- inspect a specific issue by key, id, or ARI
- create a Jira issue in a known or discoverable project
- update a summary, description, assignee, labels, or other editable fields
- add a comment to an issue
- transition an issue to another workflow state
- check what is in the current sprint
- move an issue into a sprint after the correct board and sprint are identified

Do not use this skill when the user actually needs:

- Confluence page or knowledge-base work; use `@confluence-assistant`
- Jira administration such as workflow schemes, screens, permissions, field configuration, or project settings
- dashboard or reporting design
- broad release, incident, or project-planning coordination that is larger than issue execution
- bulk destructive changes unless the request is explicit, scoped, and supported

Ask clarifying questions first when requests are ambiguous, for example:

- "update my sprint" without a board, sprint, or project
- "move this to done" without an issue key
- "create a ticket" without enough information to determine project, issue type, or required fields

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| User does not know the issue key | Search flow in `references/jira-workflow-runbook.md` | Search before mutation reduces mistakes and project ambiguity |
| User needs precise filtering | `references/jql-patterns.md` | Gives repeatable JQL patterns and scoping guidance |
| User wants a new ticket | Creation flow in `references/jira-workflow-runbook.md` and `references/jira-description-template.md` | Encourages metadata lookup before create and structured descriptions |
| User wants a status change | Transition flow in `references/jira-workflow-runbook.md` | Reminds you to enumerate available transitions before applying one |
| User wants sprint work | `references/jira-sprint-operations.md` | Sprint operations require board context and may fail without it |
| A request fails with auth, field, or permission errors | `references/jira-troubleshooting-matrix.md` | Gives concrete diagnosis and recovery steps |
| You need worked examples | `examples/` | Shows safe request-to-action patterns |

## Workflow

Follow this runbook in order.

1. **Discover configuration and scope**
   - Check whether workspace guidance already provides Jira context, such as project key, cloudId, URL, or board URL.
   - If a workspace file such as `.cursor/rules/jira-config.mdc` exists, use it as a hint, not as a substitute for user intent.
   - If configuration is missing, discover accessible projects through Jira search capabilities or ask the user which project to use.
   - For sprint tasks, also identify board context before trying to inspect or move sprint issues.

2. **Clarify intent before taking action**
   - If the request is ambiguous, ask a targeted question.
   - Confirm any impactful change before executing it, especially status transitions that may trigger automation, notifications, or downstream workflow changes.
   - If the user asks for cross-project search, do not force project scoping.

3. **Identify the target issue or issues**
   - If the user already gave an issue key or id, retrieve the issue directly.
   - If the user gave an ARI, fetch by ARI.
   - If the user only described the issue, start with broad search.
   - Use natural-language search first when the user is exploring.
   - Use JQL when the task needs precision, repeatability, or exact filters.

4. **Inspect before mutating**
   - For create operations, discover valid issue types for the project.
   - Then inspect issue-type field metadata to learn required fields and allowed values.
   - For edit operations, retrieve the current issue first if the requested field change depends on current status, assignee, or custom fields.
   - For transitions, always get available transitions first. Do not assume that a requested status maps directly to a valid transition.

5. **Execute the correct action path**
   - **Search:** use natural-language search or JQL depending on precision needs.
   - **Get details:** use direct issue lookup when you have a stable identifier.
   - **Create:** create only after project, issue type, and required fields are known.
   - **Edit:** update only the fields requested or clearly implied by the user.
   - **Comment:** add a comment when the user wants narrative context rather than a field mutation.
   - **Assign:** set assignee only when the target user is clear.
   - **Transition:** map user intent to one of the available transitions, then apply it.
   - **Sprint:** identify board and sprint first, then inspect or move issues.

6. **Verify the result**
   - Confirm the returned issue key, summary, status, or sprint assignment.
   - If the tool returns a validation error, stop and diagnose instead of retrying blindly.
   - If a transition or sprint operation fails, check permissions, workflow rules, required fields, and board membership.

7. **Report a concise outcome**
   - Summarize what you changed.
   - Include issue key(s), relevant status or field updates, and any blockers.
   - If assumptions were made, state them explicitly.
   - If work is partially complete, say what remains and what information is still needed.

## Action Paths

### 1. Search for issues

Use broad search when the user says things like:

- "find my blockers"
- "show bugs in progress"
- "search Jira for auth tickets"

Use JQL when the user needs exact filtering or repeatability.

Guidance:

- Include project scoping when the request is project-specific.
- Preserve cross-project search when the user explicitly asks for it.
- If results are numerous, summarize the top matches and say that results may be paginated or partial.

Examples:

```text
search("issues in PAY project related to authentication")
search("my open bugs updated this week")
```

```jql
project = PAY AND assignee = currentUser() AND status = "In Progress"
project = PAY AND type = Bug AND priority = High AND updated >= -7d
```

### 2. Get issue details

Use direct retrieval when you already have a stable identifier.

- If you have ARI: `fetch(ari)`
- If you have issue key or id: `getJiraIssue(cloudId, issueKey)`

This is usually the right step before editing, commenting, assigning, or transitioning.

### 3. Create an issue

Before creation:

1. detect or confirm `cloudId`
2. detect or confirm `projectKey`
3. list valid issue types for that project
4. inspect issue-type metadata and required fields
5. ask for any missing required values
6. create the issue

Representative flow:

```text
getJiraProjectIssueTypesMetadata(cloudId="{CLOUD_ID}", projectKey="{PROJECT_KEY}")
getJiraIssueTypeMetaWithFields(cloudId="{CLOUD_ID}", projectKey="{PROJECT_KEY}", issueTypeId="{ISSUE_TYPE_ID}")
createJiraIssue(cloudId="{CLOUD_ID}", projectKey="{PROJECT_KEY}", issueTypeName="Task", summary="Brief summary", description="## Context\n...")
```

Notes:

- Do not assume `Task` is always valid or sufficient.
- Jira instances often have custom required fields.
- For subtasks, a valid parent issue key is required.
- Keep the summary short and the description structured.

### 4. Update an issue

Separate update types clearly:

- **edit fields** when changing summary, description, labels, due date, or custom fields
- **add comment** when adding context or progress notes
- **assign** when changing ownership
- **transition** when changing workflow state

Representative operations:

```text
editJiraIssue(cloudId, issueKey, fields)
addCommentToJiraIssue(cloudId, issueKey, comment)
```

### 5. Transition an issue safely

Always treat transitions as workflow-dependent.

Required subflow:

1. get current issue details if needed
2. list available transitions
3. map the user's desired outcome to a valid transition
4. confirm if the change is impactful or ambiguous
5. apply the transition
6. verify the resulting status

Representative flow:

```text
getTransitionsForJiraIssue(cloudId, issueKey)
transitionJiraIssue(cloudId, issueKey, transitionId)
```

Important:

- "Done" may not be directly available.
- The issue may require intermediate states.
- Validators or required fields may block a transition.

### 6. Sprint operations

Sprint work is board-aware.

Before sprint actions:

1. identify the relevant project or board
2. determine whether an active or future sprint exists
3. inspect sprint contents
4. only then move or update issues in sprint context

Use sprint operations for tasks such as:

- checking what is in the current sprint
- identifying blockers in the sprint
- moving an issue into the active sprint when valid

Do not assume an issue can be added to a sprint just because it belongs to the same project. Board filters and Jira Software permissions may still block the action.

See `references/jira-sprint-operations.md` for the detailed sequence.

## Examples

### Example 1: Create a task from a user request

```text
User: "Create a Jira task for implementing user authentication in PAY"

Agent flow:
1. Confirm or detect cloudId and projectKey = PAY.
2. Get available issue types for PAY.
3. Get required fields for the chosen issue type.
4. Ask for any missing required values.
5. Create the issue with a short summary and structured Markdown description.
6. Return the new issue key and a one-line summary of what was created.
```

See: `examples/create-issue-from-request.md`

### Example 2: Transition an issue to Done safely

```text
User: "Move PAY-456 to Done"

Agent flow:
1. Retrieve available transitions for PAY-456.
2. If "Done" is not directly available, explain the valid options.
3. Confirm the intended transition if multiple end states are possible.
4. Apply the chosen transition.
5. Report the final status.
```

See: `examples/transition-issue-safely.md`

### Example 3: Update a sprint request that lacks context

```text
User: "Update my sprint"

Agent response:
"Which Jira project or board should I use? If you know it, send the board or project key. I can then check the active sprint, list its issues, and help move or update the right ticket." 
```

See: `examples/sprint-update-flow.md`

### Example 4: Search for current work with JQL

```jql
project = PAY AND assignee = currentUser() AND status = "In Progress"
```

Expected outcome:

- return the top matching issues
- summarize issue key, summary, and status
- mention if there may be additional paginated results

## Best Practices

### Do

- Use detected configuration as a starting point, then confirm unclear scope.
- Search before mutating when issue identity is uncertain.
- Use natural-language search for discovery and JQL for precision.
- Scope JQL to a project when the request is project-specific.
- Inspect issue metadata before creating tickets.
- Use structured Markdown descriptions.
- Keep summaries brief and descriptions detailed.
- Avoid file paths in descriptions unless the user explicitly wants them.
- Enumerate transitions before attempting a status change.
- Summarize completed actions with issue keys and outcomes.

### Don't

- Do not assume every project supports the same issue types or fields.
- Do not assume every workflow has a direct transition to `Done`.
- Do not retry failing mutations repeatedly without diagnosing the error.
- Do not force project scoping for intentionally cross-project searches.
- Do not perform broad or destructive changes without explicit user confirmation.
- Do not blur comments, field edits, and transitions into a single undocumented action.

### Important notes

- **Issue key** is the user-facing identifier, for example `PAY-123`.
- **Issue id** is typically the internal numeric identifier.
- **CloudId** may appear in different formats depending on tooling and integration context.
- **Subtasks** require a valid parent issue.
- **Required fields and allowed values are instance-specific** and should be discovered, not hard-coded.

## Troubleshooting

### Problem: Unauthorized or forbidden

**Symptoms:** Jira calls fail with authorization or permission errors, or a project is visible in one context but not another.

**Solution:** Verify that you are using the correct Jira site or `cloudId`, that the current session or token is valid, and that the caller has the necessary scopes and project permissions for the attempted operation. If read works but mutation fails, the account may lack edit, transition, sprint, or assign permissions.

### Problem: Project or issue cannot be found

**Symptoms:** Search returns nothing, direct issue lookup fails, or a known project key appears invalid.

**Solution:** Confirm the site and project context first. Check whether the issue key belongs to another Jira site or project. If the request is ambiguous, ask the user to confirm the project key or share a link to the issue.

### Problem: Required field or invalid value error on create/edit

**Symptoms:** Issue creation or editing fails with validation errors about missing fields or invalid option values.

**Solution:** Re-fetch issue-type metadata and inspect required fields and allowed values before retrying. Ask the user for missing required inputs instead of guessing. This is especially common with custom fields.

### Problem: Requested transition is unavailable

**Symptoms:** The user asks to move an issue to a status, but the transition list does not contain a matching option, or the transition call fails.

**Solution:** Get available transitions for the issue and map the request to an actual transition name or id. Explain when the workflow requires an intermediate step. If the transition still fails, check validators, required fields, workflow conditions, and permissions.

### Problem: Search results are empty or too broad

**Symptoms:** Natural-language search returns irrelevant results, or JQL returns none.

**Solution:** Narrow or broaden deliberately. For broad search, add project, assignee, status, or time constraints. For JQL, check field names, quoting, status names, and whether the request should be cross-project instead of project-scoped.

### Problem: Cannot create a subtask

**Symptoms:** Subtask creation fails even though the summary and description look valid.

**Solution:** Confirm that the selected issue type is truly a subtask type, and provide a valid parent issue key in the expected context. If needed, retrieve the parent issue first and verify that the project and issue type support subtasks.

### Problem: Sprint operation fails

**Symptoms:** You cannot view sprint details, add an issue to a sprint, or the issue does not appear on the expected board.

**Solution:** Confirm board context, active sprint availability, Jira Software permissions, and whether the issue matches the board filter. An issue may exist in the project but still be excluded from the board's sprint workflow.

## Related Skills

- `@confluence-assistant` - Use for Confluence pages, documentation, and knowledge-base updates.
- Use a release, incident, or project-planning skill when the task becomes coordination-heavy rather than issue execution.
- Use a Jira admin or configuration-oriented skill, if available, when the user needs workflow, permission, screen, or field configuration changes.

## Additional Resources

### Local references

- [Jira workflow runbook](references/jira-workflow-runbook.md)
- [JQL patterns](references/jql-patterns.md)
- [Jira description template](references/jira-description-template.md)
- [Jira troubleshooting matrix](references/jira-troubleshooting-matrix.md)
- [Jira sprint operations](references/jira-sprint-operations.md)

### Worked examples

- [Create issue from request](examples/create-issue-from-request.md)
- [Transition issue safely](examples/transition-issue-safely.md)
- [Sprint update flow](examples/sprint-update-flow.md)

### Upstream provenance

This enhanced skill preserves the upstream intent from `tech-leads-club/agent-skills` while converting the public copy into a clearer English operational workflow for agents.

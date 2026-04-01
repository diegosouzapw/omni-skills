---
name: jira-assistant
description: "Jira Assistant workflow skill. Use this skill when the user needs Manage Jira issues via Atlassian MCP \u2014 search, create, update, transition status, and handle sprint tasks. Auto-detects workspace configuration. Use when user says \"create a Jira ticket\", \"update my sprint\", \"check Jira status\", \"transition this issue\", \"search Jira\", or \"move ticket to done\". Do NOT use for Confluence pages (use confluence-assistant) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["jira-assistant", "manage", "jira", "issues", "via", "atlassian", "mcp", "search"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Jira Assistant

## Overview

This public intake copy packages `packages/skills-catalog/skills/(development)/jira-assistant` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Jira Assistant You are an expert in using Atlassian MCP tools to interact with Jira.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Configuration, Default Task Template, Context, Objective, Technical Requirements, Acceptance Criteria.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Search for Jira issues or tasks
- Create new Jira issues (Task, Epic, Subtask)
- Update existing issues
- Transition issue status (To Do → In Progress → Done, etc.)
- Add comments to issues
- Manage assignees

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Natural language works better than JQL for general searches
2. Faster and more intuitive
3. Returns relevant results quickly
4. Replace {PROJECT_KEY} with the detected project key from configuration
5. If you have ARI: fetch(ari)
6. If you have issue key/id: getJiraIssue(cloudId, issueKey)
7. Task (default)

### Imported Workflow Notes

#### Imported: Workflow

### 1. Finding Issues (Always Start Here)

**Use `search` (Rovo Search) first** for general queries:

```
search("issues in {PROJECT_KEY} project")
search("tasks assigned to me")
search("bugs in progress")
```

- Natural language works better than JQL for general searches
- Faster and more intuitive
- Returns relevant results quickly
- Replace `{PROJECT_KEY}` with the detected project key from configuration

### 2. Searching with Specific Criteria

**Use `searchJiraIssuesUsingJql`** when you need precise filters:

**⚠️ ALWAYS include `project = {PROJECT_KEY}` in JQL queries**

Examples (replace `{PROJECT_KEY}` with detected project key):

```
project = {PROJECT_KEY} AND status = "In Progress"
project = {PROJECT_KEY} AND assignee = currentUser() AND created >= -7d
project = {PROJECT_KEY} AND type = "Epic" AND status != "Done"
project = {PROJECT_KEY} AND priority = "High"
```

### 3. Getting Issue Details

Depending on what you have:

- **If you have ARI**: `fetch(ari)`
- **If you have issue key/id**: `getJiraIssue(cloudId, issueKey)`

### 4. Creating Issues

**ALWAYS use the detected `projectKey` and `cloudId` from configuration**

#### Step-by-step process:

```
a. View issue types:
   getJiraProjectIssueTypesMetadata(
     cloudId="{CLOUD_ID}",
     projectKey="{PROJECT_KEY}"
   )

b. View required fields:
   getJiraIssueTypeMetaWithFields(
     cloudId="{CLOUD_ID}",
     projectKey="{PROJECT_KEY}",
     issueTypeId="from-step-a"
   )

c. Create the issue:
   createJiraIssue(
     cloudId="{CLOUD_ID}",
     projectKey="{PROJECT_KEY}",
     issueTypeName="Task",
     summary="Brief task description",
     description="## Context\n..."
   )
```

**Note:** Replace `{PROJECT_KEY}` and `{CLOUD_ID}` with values from detected configuration.

**Available issue types:**

- Task (default)
- Epic
- Subtask (requires `parent` field with parent issue key)

### 5. Updating and Transitioning Issues

#### Edit fields:

```
editJiraIssue(cloudId, issueKey, fields)
```

#### Change status:

```
1. Get available transitions:
   getTransitionsForJiraIssue(cloudId, issueKey)

2. Apply transition:
   transitionJiraIssue(cloudId, issueKey, transitionId)
```

#### Add comment:

```
addCommentToJiraIssue(cloudId, issueKey, comment)
```

#### Imported: Configuration

**Project Detection Strategy (Automatic):**

1. **Check workspace rules first**: Look for Jira configuration in `.cursor/rules/jira-config.mdc`
2. **If not found**: Use MCP search tools to discover available projects
3. **If still unclear**: Ask user to specify project key
4. **Use detected values** for all Jira operations in this conversation

### Configuration Detection Workflow

When you activate this skill:

1. Check if workspace has `.cursor/rules/jira-config.mdc` with Jira configuration
2. If found, extract and use: Project Key, Cloud ID, URL, Board URL
3. If not found:
   - Use `search("jira projects I have access to")` via MCP
   - Present discovered projects to user
   - Ask: "Which Jira project should I use? (e.g., KAN, PROJ, DEV)"
4. Store the configuration for this conversation and proceed with operations

**Note for skill users:** To configure this skill for your workspace, create `.cursor/rules/jira-config.mdc` with your project details.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @jira-assistant to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/jira-assistant/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/jira-assistant/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @jira-assistant using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Create a Task

```
User: "Create a task to implement user authentication"

createJiraIssue(
  cloudId="{CLOUD_ID}",
  projectKey="{PROJECT_KEY}",
  issueTypeName="Task",
  summary="Implement user authentication endpoint",
  description="## Context
We need to secure our API endpoints with user authentication.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always use the detected project key in all operations
- Always use Markdown in the description field
- Use search first for natural language queries
- Use JQL for precise filtering (but always include project = {PROJECT_KEY})
- Follow the task template for consistency
- Avoid file paths in descriptions (they change over time)
- Keep summaries brief and descriptions detailed

### Imported Operating Notes

#### Imported: Best Practices

### ✅ DO

- **Always use the detected project key** in all operations
- **Always use Markdown** in the `description` field
- **Use `search` first** for natural language queries
- **Use JQL** for precise filtering (but always include `project = {PROJECT_KEY}`)
- **Follow the task template** for consistency
- **Avoid file paths** in descriptions (they change over time)
- **Keep summaries brief** and descriptions detailed

### ⚠️ IMPORTANT

- **Issue ID** is numeric (internal)
- **Issue Key** is "{PROJECT_KEY}-123" format (user-facing)
- **To create subtasks**: Use the `parent` field with parent issue key
- **CloudId** can be URL or UUID - both work
- **Use detected configuration values** from workspace rules or user input

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(development)/jira-assistant`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Default Task Template

**ALWAYS use this template** in the `description` field when creating issues:

```markdown

#### Imported: Context

[Brief explanation of the problem or need]

#### Imported: Objective

[What needs to be accomplished]

#### Imported: Technical Requirements

[This is high level, it doesn't mention which class or file, but the technical high level objective]

- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

#### Imported: Acceptance Criteria

- [ ] Criteria 1
- [ ] Criteria 2
- [ ] Criteria 3

#### Imported: Technical Notes

[Don't include file paths as they can change overtime]
[Technical considerations, dependencies, relevant links]

#### Imported: Estimate

[Time estimate or story points, if applicable]
```

#### Imported: Objective

Implement JWT-based authentication for API access.

#### Imported: Technical Requirements

- [ ] Create authentication middleware
- [ ] Implement JWT token generation
- [ ] Add token validation
- [ ] Secure existing endpoints

#### Imported: Acceptance Criteria

- [ ] Users can login with credentials
- [ ] JWT tokens are generated on successful login
- [ ] Protected endpoints validate tokens
- [ ] Invalid tokens return 401

#### Imported: Technical Notes

Use bcrypt for password hashing, JWT for tokens, and implement refresh token logic.

#### Imported: Estimate

5 story points"
)
```

**Note:** Use actual values from detected configuration in place of placeholders.

### Example 2: Search and Update Issue

```
User: "Find my in-progress tasks and update the first one"

1. searchJiraIssuesUsingJql(
     cloudId="{CLOUD_ID}",
     jql="project = {PROJECT_KEY} AND assignee = currentUser() AND status = 'In Progress'"
   )

2. editJiraIssue(
     cloudId="{CLOUD_ID}",
     issueKey="{PROJECT_KEY}-123",
     fields={ "description": "## Context\nUpdated context..." }
   )
```

**Note:** Replace placeholders with detected configuration values.

### Example 3: Transition Issue Status

```
User: "Move task {PROJECT_KEY}-456 to Done"

1. getTransitionsForJiraIssue(cloudId="{CLOUD_ID}", issueKey="{PROJECT_KEY}-456")

2. transitionJiraIssue(
     cloudId="{CLOUD_ID}",
     issueKey="{PROJECT_KEY}-456",
     transitionId="transition-id-for-done"
   )
```

**Note:** Replace placeholders with detected configuration values.

### Example 4: Create Subtask

```
User: "Create a subtask for {PROJECT_KEY}-789"

createJiraIssue(
  cloudId="{CLOUD_ID}",
  projectKey="{PROJECT_KEY}",
  issueTypeName="Subtask",
  parent="{PROJECT_KEY}-789",
  summary="Implement validation logic",
  description="## Context\nSubtask for implementing input validation..."
)
```

**Note:** Replace placeholders with detected configuration values.

#### Imported: Common JQL Patterns

All queries **MUST** include `project = {PROJECT_KEY}` (use detected project key):

```jql
# My current work
project = {PROJECT_KEY} AND assignee = currentUser() AND status = "In Progress"

# Recent issues
project = {PROJECT_KEY} AND created >= -7d

# High priority bugs
project = {PROJECT_KEY} AND type = Bug AND priority = High

# Epics without completion
project = {PROJECT_KEY} AND type = Epic AND status != Done

# Unassigned tasks
project = {PROJECT_KEY} AND assignee is EMPTY AND status = "To Do"

# Issues updated this week
project = {PROJECT_KEY} AND updated >= startOfWeek()
```

**Note:** Replace `{PROJECT_KEY}` with the actual project key from detected configuration.

#### Imported: Important Notes

- **Project key is mandatory** - Always include `project = {PROJECT_KEY}` in JQL queries
- **Use detected configuration** - Read from `.cursor/rules/jira-config.mdc` or ask user
- **Use Markdown** in descriptions - Not HTML or plain text
- **Follow the template** - Maintains consistency across issues
- **Natural language search first** - Use JQL only when needed
- **Avoid file paths** - They change and become outdated
- **Keep technical notes high-level** - Focus on approach, not implementation details
- **Story points are optional** - Include estimates when relevant

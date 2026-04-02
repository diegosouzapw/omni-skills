---
name: "linear"
description: "Linear workflow skill. Use this skill when the user needs to read, triage, create, or update issues, projects, cycles, comments, labels, or team workflow state in Linear through the official MCP workflow with clear scope, read-before-write checks, and auditable handoff notes."
version: "0.0.1"
category: "cli-automation"
tags:
  - "linear"
  - "issues"
  - "projects"
  - "triage"
  - "workflow"
  - "mcp"
  - "planning"
  - "tickets"
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
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/linear"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Linear

## Overview

Use this skill for work that must be performed inside Linear: reading issue state, creating or updating issues, managing projects, planning cycles, posting comments, reviewing labels, or summarizing workflow status through the Linear MCP server.

This skill preserves the upstream Linear intent while turning it into a more operational workflow for agents. The expected pattern is:

1. connect and authenticate safely
2. confirm the workspace, team, project, or issue scope
3. read current Linear state first
4. apply the minimum required mutation
5. verify the result
6. summarize what changed, what remains unresolved, and any handoff notes

Prefer bounded, auditable operations over broad automation. Do not assume a team, project, cycle, assignee, status, or label exists until you have read and confirmed it.

## When to Use This Skill

Use this skill when:

- the user wants to inspect, create, update, or triage Linear issues
- the user needs project or cycle planning performed directly in Linear
- the user wants comments, labels, assignments, priorities, due dates, or statuses updated in Linear
- the user needs a backlog review, workload balance check, or status summary grounded in current Linear data
- the request involves documentation-gap tracking, release planning, or dependency tracking and Linear is the system of record
- the operator should use the packaged workflow and support references before making write operations or handing off

Do not use this skill as the primary workflow when:

- the task is mainly software debugging, implementation, or architecture design with no required Linear update
- the user needs strategy advice but does not want changes made in Linear
- another tool is the actual source of truth for planning or ticket management
- you cannot identify the target workspace, team, issue, or project well enough to make a safe mutation

## Operating Table

| Task | Required identifiers | Read first | Write actions | Output to user | Risk notes |
| --- | --- | --- | --- | --- | --- |
| Inspect an issue | Issue key or issue ID | Fetch issue details, comments, labels, status, assignee | None by default | Current state, blockers, suggested next actions | Do not infer status from title alone |
| Create an issue | Team, title, description, priority/status if needed | Confirm target team and existing taxonomy | Create issue | New issue reference and any follow-up fields still missing | Avoid creating duplicates; search first if ambiguous |
| Triage backlog | Team, filter scope, triage goal | List issues, statuses, labels, priorities, assignees | Update issues selectively | Summary of grouped changes and unresolved items | For bulk updates, explain grouping before execution |
| Plan a cycle | Team, candidate issues, cycle target | List cycles, candidate issues, current priorities | Assign or update cycle-related issue state as supported | What was scheduled, excluded, or needs confirmation | Confirm the correct cycle and team before moving work |
| Rebalance workload | Team, assignees, active issue scope | List users and active assigned work | Reassign selected issues if approved | Reassignment summary and rationale | Reassignment without explanation can confuse teams |
| Create or update a project | Team/workspace context, project name or project ID | List or inspect existing projects first | Create or update project fields | Project summary and linked next actions | Prefer existing projects over duplicate structures |
| Add a comment or status update | Issue/project identifier, message intent | Read current issue/project state and recent comments | Create comment | Exact note posted and why | Keep comments concise and factual |
| Documentation audit capture | Team, docs topic, labeling conventions | Search docs context if available and inspect existing doc issues | Create or update documentation issues | Gap list and created issue references | Reuse existing labels before creating new taxonomy |

## Workflow

### 1. Verify Linear MCP access

Use the official Linear MCP connection flow first.

For Codex CLI, a typical setup is:

```bash
codex mcp add linear --url https://mcp.linear.app/mcp
```

If your client requires remote MCP to be enabled, use the client's documented setting. For Codex CLI, that may involve enabling the remote MCP client feature in configuration before login.

Then authenticate:

```bash
codex mcp login linear
```

After browser-based OAuth completes, restart the MCP client or CLI session if the client requires it, then test with a simple read operation.

Environment-specific fallback only if needed:

```json
{"mcpServers":{"linear":{"command":"wsl","args":["npx","-y","mcp-remote","https://mcp.linear.app/sse","--transport","sse-only"]}}}
```

Use the WSL fallback only for Windows-specific connection problems. Do not present it as the default setup.

### 2. Clarify the objective before calling tools

Confirm what the user wants done in Linear.

Collect only the fields needed for the task, for example:

- workspace or team
- project
- issue key or issue ID
- assignee
- priority
- labels
- cycle
- due date
- expected outcome

If the request is broad, restate the operating goal before proceeding, such as:

- inspect and summarize current state
- create a bounded set of issues
- triage a backlog by priority and ownership
- update a project or cycle
- add comments or status notes

### 3. Confirm identifiers and context

Before any mutation, verify the exact objects involved.

Read first to confirm:

- the correct team exists
- the issue, project, or cycle is the intended one
- the user has access to the relevant workspace data
- statuses, labels, and assignees are valid in that context

If identifiers are ambiguous, stop and ask for clarification or do a narrowing read operation first.

### 4. Read before write

This is the default operating rule.

Use read operations to inspect:

- current issue or project state
- existing labels and statuses
- current assignments
- active cycles
- recent comments or updates
- whether a similar issue or project already exists

Do not create, reassign, relabel, or move work based only on a natural-language description when the actual Linear object has not been inspected.

### 5. Propose the plan for bulk or non-obvious changes

For any operation affecting multiple issues or changing ownership, labels, priorities, or cycle placement across a set of tickets:

- summarize the intended grouping logic
- name the affected issues or filters
- explain what will change
- note any assumptions
- get confirmation if the request is ambiguous or high-impact

Use a dry-run style summary before applying broad changes.

### 6. Execute the minimum necessary mutation

Typical write actions include:

- create an issue
- update issue fields
- create or update a project
- create a comment
- create a label only when existing taxonomy does not fit

Prefer the smallest change that satisfies the request. Avoid combining unrelated updates in one pass.

### 7. Verify the result

After writing, do a follow-up read when practical to confirm:

- the issue/project/comment now exists as expected
- the updated status, assignee, labels, or cycle are correct
- no required fields were omitted
- the change landed in the expected team or project

### 8. Summarize outcomes and handoff notes

End with a concise operational summary:

- what you read
- what you changed
- exact affected issues/projects/cycles when relevant
- anything you intentionally did not change
- blockers, permission issues, or unresolved ambiguities
- suggested next actions

## Practical Workflows

### Issue triage

1. Identify the team and triage criteria.
2. Read current issues, statuses, labels, and priorities.
3. Group findings by urgency, ownership, or blockers.
4. Explain proposed updates if many issues will change.
5. Apply the smallest approved set of status, label, priority, or assignment updates.
6. Summarize the triage result and remaining manual review items.

### Sprint or cycle planning

1. Confirm the target team and planning window.
2. Read active and upcoming cycles plus candidate issues.
3. Review priorities, estimates if available, dependencies, and assignee load.
4. Propose which issues belong in the cycle and why.
5. Apply cycle-related updates only after identifiers are confirmed.
6. Report what was scheduled, deferred, or left unresolved.

### Project creation or cleanup

1. Search for an existing project before creating a new one.
2. Read project details and related issues if a project already exists.
3. Create or update the project using the minimum needed fields.
4. If relevant, link follow-up issue work through a clear summary.
5. Report the resulting structure and any missing milestones or ownership.

### Documentation gap capture

1. Confirm the documentation topic and target team.
2. Check for existing documentation issues or labels first.
3. Create well-scoped issues for concrete gaps.
4. Use comments for rationale when the issue is not self-evident.
5. Summarize created items and suggested documentation follow-up.

### Workload balancing

1. Read current active work by assignee.
2. Identify overload or idle capacity using actual current assignments.
3. Propose the reassignment plan before changing multiple issues.
4. Apply only confirmed reassignments.
5. Summarize who was rebalanced and any remaining constraints.

## Examples

### Example 1: Inspect an issue before suggesting changes

```text
Use @linear to inspect issue ENG-142, summarize its current status, assignee, labels, recent comments, and blockers, and do not modify anything yet.
```

Expected result: a read-only summary grounded in current Linear state.

### Example 2: Create a new issue safely

```text
Use @linear to create a bug issue in the Platform team for intermittent OAuth callback failures. First confirm the team identifier and whether a similar issue already exists. If none exists, create it with a concise title, a reproducible description, and a high priority.
```

Expected result: either a duplicate warning with the existing issue reference or a newly created issue with its identifier.

### Example 3: Propose a bulk triage plan before writing

```text
Use @linear to triage the Mobile backlog for issues labeled bug and unassigned for more than 14 days. Read the current set first, then propose grouped updates for priority, labels, and assignment before making any changes.
```

Expected result: a dry-run style plan, followed by bounded updates only if the scope is clear.

### Example 4: Create a status comment

```text
Use @linear to add a concise status comment to issue API-88 explaining that the blocker is an external dependency, the next check-in is Friday, and no status field should be changed.
```

Expected result: a comment-only update with the exact note summarized back to the user.

### Example 5: Review setup and intake before operating

```text
Use @linear to prepare for a project update. Start by reviewing the workflow playbook, the troubleshooting guide, and the task intake template. Then identify which project and team details are still missing before any write operation.
```

Expected result: a short readiness checklist and the missing identifiers required for safe execution.

## Best Practices

### Do

- use OAuth-based Linear MCP authentication by default
- confirm workspace, team, project, cycle, and issue identifiers before mutation
- read current state before creating or updating anything
- search for existing issues, projects, labels, or comments before creating duplicates
- keep write operations narrow and explain bulk changes before applying them
- reuse existing labels, statuses, and project structures where possible
- use comments to record rationale for non-obvious triage, reassignment, or deferral decisions
- distinguish clearly between creating an issue, creating a project, updating fields, and leaving a comment
- verify the result after writes when the client and workflow make that practical
- summarize what changed and what still needs human review

### Don't

- do not bypass OAuth or workspace permission boundaries with unofficial credential workarounds
- do not assume a team key, status value, label, or assignee is valid without checking
- do not make broad backlog changes from a vague prompt without a read-first pass
- do not create new taxonomy when an existing label or project convention already fits
- do not move many issues between statuses, cycles, or owners without a clear explanation of the logic
- do not present unsupported MCP capabilities as guaranteed if the exact exposed tool set varies by client or server version
- do not hide permission problems, missing objects, or ambiguous identifiers in the final summary

### Linear-specific guidance

- Use cycles for timeboxed planning work, not as a substitute for long-lived project structure.
- Use projects for multi-issue initiatives that need visible tracking across work items.
- Use labels for classification and reporting, but avoid uncontrolled label sprawl.
- Use comments when the important outcome is a recorded rationale or update rather than a field change.

## Troubleshooting

### Problem: OAuth completed in the browser, but Linear tools still fail

**Symptoms:** Login appears successful in the browser, but subsequent MCP calls fail, return authorization errors, or show the server as unavailable.

**Solution:** Confirm the browser login fully completed, restart the MCP client or CLI session if required by the client, then retry a simple read operation. If the failure persists, repeat the OAuth flow and verify the client is pointed at the expected Linear MCP server.

### Problem: Expected teams, projects, or issues are missing

**Symptoms:** Linear connects, but the expected workspace content does not appear, or an issue/project lookup returns nothing.

**Solution:** Verify workspace membership, team access, and whether the object is archived or in a different team/project context. Re-run a narrower read using the correct team or project scope before assuming the object does not exist.

### Problem: A mutation fails because fields or values are invalid

**Symptoms:** Creating or updating an issue, project, or comment fails after the tool call, or the model cannot complete the write because required inputs are missing.

**Solution:** Read the current object and related metadata first. Confirm the required identifiers, status values, labels, assignees, priorities, and team context before retrying. Split complex requests into smaller writes if needed.

### Problem: Bulk operations are slow or rate-limited

**Symptoms:** Large reads or repeated updates become slow, fail intermittently, or hit API limits.

**Solution:** Narrow the filter scope, batch writes into smaller groups, avoid repeated broad list calls, and reuse the data you already fetched instead of re-querying the same state unnecessarily.

### Problem: The request drifted away from Linear operations

**Symptoms:** The work started as ticket or project management, but now the main need is documentation authoring, implementation, debugging, architecture, or release execution.

**Solution:** Finish the Linear-specific summary, record any required ticket or project context, and hand off to the more appropriate skill or workflow. Do not force non-Linear work into this skill once Linear is no longer the main system being operated.

## Related Skills

- `@doc` - use when the request becomes primarily documentation authoring after issues or documentation gaps are identified in Linear
- use a debugging or implementation skill when the next step is fixing the underlying software rather than updating Linear state
- use a release or process coordination skill when the task expands beyond Linear updates into broader delivery orchestration

## Additional Resources

- [Workflow playbook](references/linear-workflow-playbook.md)
- [Operating table](references/linear-operating-table.md)
- [Troubleshooting guide](references/linear-troubleshooting.md)
- [Task intake template](examples/linear-task-intake-template.md)
- [Bulk change plan example](examples/linear-bulk-change-plan.md)
- [Status update example](examples/linear-status-update-example.md)
- [Agent routing notes](agents/openai.yaml)

## Available Tool Families

The exact exposed Linear MCP tools may vary by client or server version, but common capabilities supported by the upstream skill and official Linear MCP guidance include:

- issue management: list, get, create, update, list statuses, list labels
- project and team inspection: list teams, get team, list projects, get project, create project, update project, list users
- collaboration and planning: list comments, create comment, list cycles
- documentation support where exposed: list documents, get document, search documentation

Use the available tool set in your current client rather than assuming every action is present.

---
name: "notion-spec-to-implementation"
description: "Spec to Implementation workflow skill. Use this skill when a user needs to turn a Notion PRD or feature spec into a traceable implementation plan, linked tasks, and progress updates without inventing missing requirements."
version: "0.0.1"
category: "development"
tags:
  - "notion-spec-to-implementation"
  - "notion"
  - "specs"
  - "implementation"
  - "planning"
  - "tasks"
  - "prd"
  - "traceability"
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
upstream_skill: "skills/notion-spec-to-implementation"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Spec to Implementation

## Overview

Use this skill to convert a Notion-based product spec, PRD, or feature page into execution artifacts that a team can implement and track:

- a structured implementation plan
- linked task records
- progress updates tied back to the original spec

Treat this as a **requirements-to-delivery traceability workflow**, not a page-copying exercise. The goal is to preserve a clear chain:

**spec -> implementation plan -> tasks -> status updates**

This skill is most useful when the source of truth already lives in Notion and the operator needs to create or update planning artifacts safely, with explicit schema checks and minimal guessing.

## When to Use This Skill

Use this skill when:

- the user wants a Notion spec or PRD turned into an implementation plan
- the user wants tasks created from a feature spec in an existing Notion workspace
- the work needs links between the original spec, the implementation plan, and task records
- progress must be tracked in Notion as the implementation advances
- the operator must preserve acceptance criteria, dependencies, assumptions, and open questions instead of improvising them

Do **not** use this skill as the main workflow when:

- the core problem is architecture design from scratch rather than implementation planning
- the spec is so incomplete or contradictory that clarification is the main task
- the request is primarily debugging, incident response, or release orchestration
- the target system is not Notion, or the user only wants a generic project plan with no workspace integration

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Notion MCP is not working yet | `references/notion-mcp-troubleshooting.md` | Fix access and session issues before planning or writing anything |
| You have a spec but do not know if it is actionable | `references/definition-of-ready-for-specs.md` | Prevents low-quality plans built from incomplete requirements |
| You need to summarize a spec safely before planning | `references/spec-clarification-checklist.md` | Extracts goals, constraints, acceptance criteria, and open questions |
| You need to create tasks in an unknown workspace schema | `references/notion-schema-validation.md` | Confirms parent type, required fields, relations, and valid options before writes |
| Work seems too large or vague to task cleanly | `references/task-sizing-and-splitting.md` | Splits work into smaller independently reviewable units |
| You need to maintain links across artifacts | `references/requirements-traceability.md` | Keeps spec, plan, tasks, and updates connected |
| You are updating status during execution | `references/status-update-cadence.md` | Keeps property updates and narrative progress notes aligned |
| You need a worked example | `examples/spec-intake-summary.md` | Shows the intake and readiness decision in a repeatable format |

## Workflow

### 0. If Notion access is not ready, stop and fix setup first

If any Notion MCP call fails because the Notion MCP is not configured or authenticated, pause execution and complete setup first:

1. Add the Notion MCP:
   - `codex mcp add notion --url https://mcp.notion.com/mcp`
2. Enable the remote MCP client if required by the client:
   - set `[features].rmcp_client = true` in `config.toml`, or run `codex --enable rmcp_client`
3. Log in with OAuth:
   - `codex mcp login notion`
4. If authentication succeeds but calls still fail, tell the user to restart the client session and retry

Do not fabricate results from memory when the workspace cannot be read.

### 1. Locate and read the source spec

1. Search first with `Notion:notion-search`
2. If multiple similarly named pages are returned, ask the user which one is authoritative
3. Fetch the selected page with `Notion:notion-fetch`
4. Extract, at minimum:
   - goal or user outcome
   - scope boundaries
   - non-goals if present
   - constraints
   - acceptance criteria
   - dependencies
   - risks
   - open questions
5. Record the source page title and ID so later artifacts can link back to it

Use `references/spec-clarification-checklist.md` to structure the summary.

### 2. Decide whether the spec is ready to plan

Before creating a plan or tasks, apply a readiness gate.

A spec is usually **ready to plan** when it has enough clarity to answer:

- what problem is being solved
- what is explicitly in scope and out of scope
- how success will be verified
- what constraints or dependencies shape the implementation

If critical information is missing, do **not** invent it. Ask focused follow-up questions instead.

Use `references/definition-of-ready-for-specs.md`.

### 3. Produce a structured implementation summary

Create a concise implementation summary from the source spec that includes:

- goals
- non-goals
- assumptions
- constraints
- acceptance criteria
- unresolved questions
- recommended implementation shape

This summary becomes the bridge between the raw spec and the execution plan.

If the user asked for direct task generation, still produce this summary first, even if only briefly.

### 4. Choose planning depth

Choose the lightest plan shape that still supports safe execution:

- **small change**: short implementation plan with clear acceptance criteria and a few tasks
- **multi-phase feature**: plan with phases, dependencies, risks, and milestone boundaries
- **migration or high-risk change**: plan with sequencing, rollback or mitigation considerations, and explicit dependency tracking

A good plan should usually include:

- linked source spec
- problem summary
- implementation approach
- phases or workstreams
- dependencies and risks
- acceptance criteria by phase where possible
- open questions and assumptions
- success definition

### 5. Find the correct destination before writing anything

Before creating plan pages or task records:

1. Determine whether the destination is:
   - a normal page tree
   - a database-backed task system
2. Search for the expected destination objects
3. Fetch the candidate page or database
4. Confirm the actual schema and parent type
5. Verify what properties are required before attempting writes

Use `references/notion-schema-validation.md` and `examples/task-database-schema-check.md`.

### 6. Create the implementation plan

Create the implementation plan only after the source spec and destination location are confirmed.

The plan should:

- link back to the source spec
- preserve assumptions and unresolved questions
- break execution into phases or outcomes
- identify dependencies and risks
- define what “done” means

If the plan is added as a page, prefer a new linked page rather than overwriting the source spec.

### 7. Decompose the plan into tasks

Break work into small independently reviewable units.

Prefer tasks that are:

- outcome-oriented
- constrained enough to be completed in about 1–2 days when practical
- linked to clear acceptance criteria
- explicit about dependencies or blockers

Avoid splitting only by vague technical area. Split by:

- outcome
- dependency boundary
- risk isolation
- reviewability
- rollout sequence

Use `references/task-sizing-and-splitting.md`.

### 8. Validate task schema before creation

Before creating task records, verify:

- the title property name and type
- required status or stage fields
- allowed select or status values
- relation properties for spec or plan linkage
- assignee, estimate, due date, or priority field types if they exist
- whether the parent expects a database item or a child page

If the schema does not match expectations, stop and adjust the payload rather than forcing a write.

### 9. Create and link tasks

When creating tasks:

- use action-oriented titles
- include enough body content for execution context
- attach acceptance criteria where the workspace supports it
- relate each task to the implementation plan and source spec when relation fields exist
- include dependency notes or blockers in the body if dedicated properties do not exist

Do not invent assignees, estimates, due dates, or priorities unless they were provided or explicitly requested.

### 10. Update progress incrementally

Track progress using small, explicit updates instead of rewriting pages wholesale.

Use two layers of progress tracking when possible:

1. **property-level updates**
   - status
   - phase
   - milestone state
   - blockers
2. **narrative updates**
   - what changed
   - what is blocked
   - decisions made
   - next actions

Use `references/status-update-cadence.md` and `examples/weekly-status-update.md`.

### 11. Preserve traceability and handoff context

Before handing off or stopping, verify that the chain remains intact:

- source spec is identified and linked
- implementation plan links back to the spec
- tasks link to the plan and spec where supported
- unresolved questions are visible
- blockers and decisions are recorded

Use `references/requirements-traceability.md` and `examples/spec-to-implementation-handoff.md`.

## Examples

### Example 1: Ask the agent to intake a Notion spec before planning

```text
Use @notion-spec-to-implementation. Find the Notion spec for “Team Permissions Refresh”, summarize goals, constraints, and acceptance criteria, decide whether it is ready to plan, then propose an implementation plan without creating tasks until the schema is verified.
```

### Example 2: Review a task database schema before writing

```text
Use @notion-spec-to-implementation. Find the task database linked to the “Checkout Reliability” project, confirm the title field, status options, required properties, and relation fields, then explain what payload shape is safe for task creation.
```

### Example 3: Create a traceable plan and tasks

```text
Use @notion-spec-to-implementation. Turn the approved Notion PRD for bulk user import into a phased implementation plan and small linked tasks. Preserve acceptance criteria, ask clarifying questions for missing dependencies, and do not invent assignees or due dates.
```

### Example 4: Produce a progress update without losing history

```text
Use @notion-spec-to-implementation. Update progress for the “API Rate Limits” implementation in Notion by syncing task status fields, appending a milestone update with blockers and decisions, and keeping links to the source spec and implementation plan intact.
```

### Example 5: Inspect support-pack files locally

```bash
python3 scripts/omni_import_print_origin.py
python3 scripts/omni_import_list_support_pack.py
```

Use these local helpers when you need to confirm source lineage or quickly inventory the packaged support material.

## Best Practices

### Do

- read the source spec before planning or task creation
- ask clarification questions when ambiguity changes implementation shape
- treat plan creation as a traceability step, not a rewrite of the spec
- inspect the actual Notion schema before creating task records
- create tasks small enough to review and complete independently when practical
- preserve acceptance criteria, constraints, dependencies, and assumptions
- update status incrementally and keep narrative updates aligned with status fields
- preserve backlinks and IDs needed for future updates and handoffs

### Don't

- do not invent missing acceptance criteria, priorities, due dates, estimates, or assignees
- do not assume all Notion workspaces use the same task database schema
- do not overwrite the source spec when a linked implementation plan is safer
- do not create tasks before confirming the target parent object and required properties
- do not continue past ambiguous search results without user disambiguation
- do not replace historical progress notes with a single rewritten summary
- do not route architecture, debugging, or release-management work through this skill when a different specialization is more appropriate

## Troubleshooting

### Problem: Notion MCP is not connected or calls fail immediately

**Symptoms:** `Notion:notion-search` or `Notion:notion-fetch` fails before returning workspace data.

**What to verify first:**
- the Notion MCP was added
- remote MCP is enabled if required by the client
- OAuth login completed successfully
- the client session was restarted after login if needed

**Solution:** Follow `references/notion-mcp-troubleshooting.md`. Complete setup, restart the session if required, then retry the read step before doing any planning.

### Problem: OAuth succeeded but the tool still cannot read Notion

**Symptoms:** Login appears complete, but subsequent Notion tool calls still fail or return no access.

**What to verify first:**
- the current session is fresh
- the account used during login is the intended workspace account
- the page or database has been shared with the integration if required by the workspace setup

**Solution:** Restart the client session and retry. If access still fails, verify workspace sharing and integration scope, then test search again with a known page title.

### Problem: Search returns multiple similarly named specs

**Symptoms:** Search finds several pages with nearly identical titles, and choosing the wrong one would produce the wrong plan.

**What to verify first:**
- exact page title
- project or team context
- most recent approved source
- whether the user can identify the canonical page

**Solution:** Stop and ask the user which page is authoritative. Do not infer the correct page from title similarity alone.

### Problem: The spec is incomplete or contradictory

**Symptoms:** The page lacks acceptance criteria, scope boundaries, ownership context, or dependency detail, or different sections conflict.

**What to verify first:**
- whether the missing information is essential to implementation shape
- whether the contradiction affects task sequencing, risk, or rollout
- whether an assumption can be recorded safely or must be clarified

**Solution:** Use `references/definition-of-ready-for-specs.md` and `references/spec-clarification-checklist.md`. Ask targeted questions before generating tasks. If needed, produce a "not ready to plan" summary instead of low-confidence execution artifacts.

### Problem: Task creation fails because the target schema does not match expectations

**Symptoms:** Create-page or create-record attempts fail due to missing required properties, invalid select values, wrong relation fields, or an incorrect parent type.

**What to verify first:**
- whether the destination is a database or page tree
- actual title property name
- required status/select values
- relation property names and expected IDs
- whether the payload is using the correct parent object

**Solution:** Re-fetch the target database or page and validate against `references/notion-schema-validation.md`. Adjust the payload to the workspace schema instead of forcing generic fields.

### Problem: Relation links to the spec or plan fail

**Symptoms:** Tasks are created, but links back to the source plan or spec are missing or invalid.

**What to verify first:**
- correct page or database IDs
- relation property type and target
- whether the workspace uses a relation field or expects inline links in content

**Solution:** Confirm the relation schema and IDs. If relation properties are unavailable, add explicit links in the page content and note the limitation.

### Problem: Status fields and narrative updates drift out of sync

**Symptoms:** A task shows one status in properties but the plan text or weekly update says something else.

**What to verify first:**
- last property update time
- last narrative update time
- milestone or phase mapping rules used by the team

**Solution:** Reconcile status using `references/status-update-cadence.md`. Update properties first, then append a narrative note that reflects the same state, blockers, and next actions.

## Related Skills

Use a different skill when the center of gravity shifts away from Notion-based implementation planning.

- `@doc` — for stronger documentation shaping, editing, or documentation-system work
- architecture or design-focused skills — when the main task is evaluating options or writing a design doc before planning
- debugging-focused skills — when implementation artifacts already exist and the main need is root-cause analysis
- release or project-operations skills — when coordination, rollout, or launch management becomes the primary task

## Additional Resources

### Local support pack

- [Spec clarification checklist](references/spec-clarification-checklist.md)
- [Requirements traceability guide](references/requirements-traceability.md)
- [Notion schema validation checklist](references/notion-schema-validation.md)
- [Definition of ready for specs](references/definition-of-ready-for-specs.md)
- [Task sizing and splitting guide](references/task-sizing-and-splitting.md)
- [Notion MCP troubleshooting](references/notion-mcp-troubleshooting.md)
- [Status update cadence](references/status-update-cadence.md)
- [Example spec intake summary](examples/spec-intake-summary.md)
- [Example task database schema check](examples/task-database-schema-check.md)
- [Example weekly status update](examples/weekly-status-update.md)
- [Example handoff packet](examples/spec-to-implementation-handoff.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### External references

These references informed the workflow guidance and terminology:

- Notion API docs on page content, databases, page creation, page updates, and search
- OpenAI prompt-engineering guidance for clarifications-first behavior
- Google engineering practices on design docs and small focused changes
- Atlassian guidance on epics/stories and definition of ready

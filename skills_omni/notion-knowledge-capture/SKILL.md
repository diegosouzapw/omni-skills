---
name: "notion-knowledge-capture"
description: "Knowledge capture workflow skill. Use this skill when a user needs to turn chats, meeting notes, decisions, or rough source material into structured, linkable Notion pages with clear metadata, provenance, and update-vs-create discipline."
version: "0.0.1"
category: "documentation"
tags:
  - "notion-knowledge-capture"
  - "notion"
  - "knowledge-management"
  - "documentation"
  - "decision-log"
  - "how-to"
  - "faq"
  - "wiki"
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
upstream_skill: "skills/notion-knowledge-capture"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Knowledge Capture

## Overview

Use this skill to convert messy source material into durable Notion knowledge artifacts.

It is appropriate when the user has a conversation, meeting summary, decision thread, troubleshooting exchange, or rough notes that should become a structured Notion page such as:

- a decision record
- a how-to or task guide
- an FAQ or reference page
- a concept or wiki entry
- a learning note or meeting capture

This skill is optimized for operational capture, not freeform writing. It emphasizes:

- choosing the right destination in Notion
- deciding whether to update an existing page or create a new one
- preserving provenance and source links
- using scannable, task-oriented structure
- avoiding duplicate pages and oversized writes
- handling MCP, permissions, schema, and rate-limit failures safely

If the environment exposes concrete Notion MCP tools, use them. If tool names differ, apply the same workflow generically: connect, search, fetch, create or update metadata, append content, then verify.

## When to Use This Skill

Use this skill when:

- the user wants chat logs, notes, or decisions captured into Notion as reusable documentation
- the task is primarily knowledge organization, not original authorship from scratch
- the result should be linkable, reviewable, and maintainable inside a team wiki or documentation workspace
- the operator needs explicit provenance, ownership, summary, tags, and related links
- the destination may already contain an authoritative page and duplication must be avoided

Do not use this skill as the primary workflow when:

- the task is mainly architecture design, implementation, or debugging rather than capture
- the user wants a polished long-form article without a Notion publishing target
- the source material is too sensitive to paste into Notion and should remain summarized only
- the destination schema, permissions, or workspace are unknown and the user is not ready to resolve them

### Content-type routing

Use this quick routing guide before creating anything:

- **Decision record**: use when the source contains a choice, rationale, alternatives, and consequences.
- **How-to / task guide**: use when the source explains repeatable steps to achieve an outcome.
- **FAQ / reference**: use when the source answers recurring questions or defines stable facts.
- **Concept / wiki entry**: use when the source explains what something is, how it fits, and related terminology.
- **Learning note / meeting capture**: use when the source is primarily observational and should preserve context, actions, and follow-ups.

For a fuller decision aid, use [references/content-type-routing-guide.md](references/content-type-routing-guide.md).

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need to decide page type | `references/content-type-routing-guide.md` | Prevents forcing the wrong structure onto the source material |
| Unsure whether to amend or create | `references/update-vs-create-checklist.md` | Reduces duplicate pages and accidental overwrite |
| Writing into a database or data source | `references/notion-schema-checklist.md` | Confirms required properties before any write |
| Need provenance and verification | `references/provenance-capture-worksheet.md` | Preserves source links, owner, confidence, and open questions |
| Final QA before handoff | `references/page-qa-checklist.md` | Ensures title, summary, structure, metadata, links, and provenance are complete |
| Need issue recovery | `references/troubleshooting-matrix.md` | Maps common failures to likely causes and next actions |
| Work drifts away from capture | `agents/handoff-router.md` | Routes to adjacent skills instead of overextending this one |

## Workflow

### 1. Confirm access and connection

Before planning the page, confirm the environment can actually reach Notion.

If Notion MCP is not yet configured in Codex CLI, set it up:

```bash
codex mcp add notion --url https://mcp.notion.com/mcp
codex mcp login notion
```

If remote MCP client support must be enabled in the local Codex configuration, follow the current Codex MCP guidance in the client you are using. Avoid guessing undocumented config keys. If login or connection changes are applied, the client may need a restart before retrying.

If the user is not authenticated or the workspace is inaccessible, stop and resolve access before proceeding.

### 2. Define the capture request

Ask for the minimum context needed to produce a durable page:

- purpose of the page
- intended audience
- whether this is a new page or an update
- expected freshness or review date
- preferred destination workspace, page, or database/data source
- whether raw source text may be stored, or only summarized

Then classify the content type using [references/content-type-routing-guide.md](references/content-type-routing-guide.md).

### 3. Choose destination and validate schema

Identify where the page belongs.

Typical destination questions:

- Is this a team wiki page, a documentation page, a decision log entry, an FAQ item, or a learning note?
- Is the target a standalone page or a page inside a database/data source?
- Which properties are required by the destination schema?

Before writing, validate the destination against [references/notion-schema-checklist.md](references/notion-schema-checklist.md).

At minimum, confirm whether the destination expects:

- title
- owner
- status
- tags
- date
- related project, team, or decision relations
- summary or short description

If multiple destinations are plausible, ask the user to choose rather than guessing.

### 4. Decide update vs create

Search for existing pages before creating anything new.

Use this rule:

- **Update** when an authoritative page already exists for the same topic and the new material is an extension, correction, or status change.
- **Create** when the topic is materially new, should stand alone, or would overload an existing page.

Before any update:

- fetch the current page properties
- read existing page content or relevant sections
- identify what should be preserved, revised, or appended

Use [references/update-vs-create-checklist.md](references/update-vs-create-checklist.md) to avoid duplicates and naive overwrite.

### 5. Extract signal from source material

Turn the raw source into reusable knowledge, not a transcript dump.

Extract:

- core summary
- decisions made
- rationale and alternatives
- action items and owners
- prerequisites and steps
- caveats, risks, or edge cases
- links to canonical references
- unresolved questions

If the source is a chat or meeting transcript, prefer summarizing and linking to the original source rather than copying large raw transcripts into Notion.

If claims are inferred from AI-generated discussion and not corroborated, label them clearly as draft, proposed, or needs verification.

### 6. Draft the page structure

Every page should begin with a short summary.

Then use a structure appropriate to the content type:

- **Decision record**: Summary, Context, Decision, Alternatives, Rationale, Impact, Sources
- **How-to**: Summary, Prerequisites, Steps, Verification, Troubleshooting, Sources
- **FAQ / reference**: Summary, Questions and Answers, Related Links, Sources
- **Concept / wiki**: Summary, Overview, Key Terms, How It Fits, Related Pages, Sources
- **Learning note / meeting capture**: Summary, Context, Key Points, Decisions, Actions, Open Questions, Sources

Keep headings scannable and concise. Prefer task-oriented wording over narrative sprawl.

### 7. Write safely to Notion

When creating a new page:

1. create the page shell with parent and required properties
2. confirm the page exists in the expected destination
3. append content in sections rather than one oversized write

When updating an existing page:

1. fetch current properties and content
2. update metadata deliberately
3. append or revise sections with minimal disruption
4. preserve useful history, prior links, and existing relations unless the user asks otherwise

For long captures, stage the write:

- write metadata first
- append section blocks in manageable chunks
- avoid tight write loops
- if a source transcript is very long, store only a concise summary plus source link

### 8. Link, classify, and surface follow-ups

Before finishing, add or verify:

- tags
n- owner
- status
- relevant relations or backlinks
- links to canonical documents, tickets, or decisions
- follow-up actions if the destination model supports them
- a brief “what changed” note when updating an existing page

### 9. Run final QA

Use [references/page-qa-checklist.md](references/page-qa-checklist.md) before handoff.

At minimum verify:

- correct title and summary
- right page type and destination
- required properties are populated
- provenance is present
- unsupported claims are marked for verification
- links and relations work
- the page is readable without opening the original conversation

## Best Practices

### Do

- search for an existing authoritative page before creating a new one
- fetch current content before updating
- keep the first paragraph a concise summary
- capture provenance inside the page, not only in the chat response
- confirm database or data-source properties before writing
- prefer sectioned, scannable content over transcript-style dumps
- preserve unresolved questions when certainty is low
- chunk long writes and retry gently after rate limiting
- use canonical external references when the captured chat is not itself authoritative

### Don't

- create duplicate pages because search was skipped
- overwrite an existing page without reading it first
- paste confidential or excessive raw transcripts into Notion by default
- present AI-inferred claims as verified facts
- assume a 404 always means the page does not exist; it may be unshared or in a different workspace
- assume successful auth implies create or update permissions
- force every request into the same page template

## Examples

### Example 1: Convert meeting notes into a decision log entry

```text
Use @notion-knowledge-capture to turn these meeting notes into a decision record in Notion. Search for an existing ADR first, preserve source links, summarize the decision, list alternatives considered, and add open questions that still need confirmation.
```

See [examples/meeting-notes-to-decision-log.md](examples/meeting-notes-to-decision-log.md).

### Example 2: Turn a troubleshooting chat into a how-to page

```text
Use @notion-knowledge-capture to convert this support chat into a how-to page. Put the summary first, extract prerequisites and exact steps, separate workaround from confirmed fix, and link the original incident thread as provenance.
```

See [examples/chat-to-how-to.md](examples/chat-to-how-to.md).

### Example 3: Synthesize raw notes into a wiki entry

```text
Use @notion-knowledge-capture to turn these raw notes into a concept page in Notion. Create a concise overview, define key terms, relate it to existing pages, and avoid copying the full raw notes unless necessary.
```

See [examples/raw-notes-to-wiki-entry.md](examples/raw-notes-to-wiki-entry.md).

### Example 4: Update an existing page instead of creating a duplicate

```text
Use @notion-knowledge-capture to update the existing onboarding page in Notion with these new decisions. Search first, fetch the current page, preserve the valid sections, add a short what-changed summary, and keep source links for the new material.
```

See [examples/update-existing-page.md](examples/update-existing-page.md).

## Troubleshooting

### Problem: Notion page or database appears not found

**Symptoms:** Search returns nothing, fetch fails, or the tool reports a 404-style not found error.

**Solution:** Confirm the correct workspace, page, or database/data-source ID. Then verify the resource is shared with the integration and that you are authenticated to the intended workspace. A resource can exist but still appear unavailable if it is not shared or belongs to another workspace.

### Problem: You can read content but cannot create or update

**Symptoms:** Search or fetch works, but create or update operations fail with permission-style errors.

**Solution:** Check whether the integration has the necessary capabilities and whether the parent page or destination database allows the operation you are trying to perform. Confirm the target location is the intended parent and that required write permissions have been granted.

### Problem: Auth succeeded earlier but MCP calls now fail

**Symptoms:** The client was previously connected, but later requests fail or prompt for login again.

**Solution:** Re-authenticate the Notion connection, confirm the active workspace, and restart the client if required by the MCP setup flow. If the failure began after config changes, re-open the current MCP setup guidance instead of assuming old config names still apply.

### Problem: Update created drift or duplicate content

**Symptoms:** The page now contains repeated sections, stale content, or conflicting summaries.

**Solution:** Re-run the update workflow: fetch the existing page, compare old and new sections, then apply a minimal patch plan. Use [references/update-vs-create-checklist.md](references/update-vs-create-checklist.md) to decide whether the change should have been an append, a revision, or a new page.

### Problem: Large capture fails or only partially writes

**Symptoms:** Long notes create partial content, request failures, or malformed page structure.

**Solution:** Create the page shell first, then append content in smaller sections. Keep raw transcripts outside the page when possible and link to them as sources. If the content is very large, split it into summary, details, and follow-up pages rather than one oversized page.

### Problem: Requests start failing after many writes

**Symptoms:** Writes slow down, fail intermittently, or return rate-limit behavior.

**Solution:** Slow down writes, avoid rapid retry loops, and resume with smaller staged appends. Prefer one deliberate page update sequence over repeated micro-writes.

### Problem: Required properties fail validation

**Symptoms:** Page creation or update fails because a property is missing, misnamed, or the wrong type.

**Solution:** Inspect the destination schema before retrying. Confirm exact property names and types using [references/notion-schema-checklist.md](references/notion-schema-checklist.md), then adjust the payload or choose the correct destination.

## Related Skills

- `@doc` - Use when the task becomes primarily documentation authoring or editorial restructuring outside a Notion capture workflow.
- `@chatgpt-apps` - Use when the work shifts toward product or app behavior documentation tied to ChatGPT app surfaces.
- `@aspnet-core` - Use when the real task is implementation or debugging in an ASP.NET Core system rather than knowledge capture.
- `@develop-web-game` - Use only if the request turns into product implementation work for a web game rather than documentation capture.

## Additional Resources

### Local references

- [Content-type routing guide](references/content-type-routing-guide.md)
- [Update vs create checklist](references/update-vs-create-checklist.md)
- [Notion schema checklist](references/notion-schema-checklist.md)
- [Provenance capture worksheet](references/provenance-capture-worksheet.md)
- [Page QA checklist](references/page-qa-checklist.md)
- [Troubleshooting matrix](references/troubleshooting-matrix.md)

### Worked examples

- [Meeting notes to decision log](examples/meeting-notes-to-decision-log.md)
- [Chat to how-to](examples/chat-to-how-to.md)
- [Raw notes to wiki entry](examples/raw-notes-to-wiki-entry.md)
- [Update existing page](examples/update-existing-page.md)

### Handoff guidance

- [Handoff router](agents/handoff-router.md)

### External references

- Notion API overview: https://developers.notion.com/reference/intro
- Create a page: https://developers.notion.com/reference/post-page
- Patch page: https://developers.notion.com/reference/patch-page
- Retrieve a page: https://developers.notion.com/reference/get-page
- Retrieve block children: https://developers.notion.com/reference/get-block-children
- Append block children: https://developers.notion.com/reference/patch-block-children
- Working with page content: https://developers.notion.com/docs/working-with-page-content
- Working with databases: https://developers.notion.com/docs/working-with-databases
- Status codes: https://developers.notion.com/reference/status-codes
- Request limits: https://developers.notion.com/reference/request-limits
- Capabilities: https://developers.notion.com/reference/capabilities
- Codex MCP guide: https://developers.openai.com/codex/mcp

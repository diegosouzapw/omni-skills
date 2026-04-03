---
name: "confluence-assistant"
description: "Confluence Assistant workflow skill. Use this skill when the user needs expert help with Confluence operations through Atlassian MCP, such as searching Confluence, reading documentation, listing spaces, creating pages, updating pages, or adding comments. Do not use it for Jira issue work, general web search, or local file authoring."
version: "0.0.1"
category: "ai-agents"
tags:
  - "confluence-assistant"
  - "confluence"
  - "atlassian"
  - "mcp"
  - "documentation"
  - "search"
  - "page-management"
  - "spaces"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
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
upstream_skill: "skills/confluence-assistant"
upstream_author: "Waldemar Neto - github.com/waldemarnt"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Confluence Assistant

## Overview

This skill helps an agent operate safely and efficiently against Confluence through Atlassian MCP workflows.

Use it for Confluence-specific tasks such as:

- finding documentation or pages
- reading and summarizing page content
- listing spaces
- creating pages in a known space
- updating an existing page without blindly overwriting content
- adding comments to a page

This skill preserves the upstream intent while making the workflow more operational for agents: identify the correct site context, resolve the right identifier type, read current state before mutating content, perform the narrow Confluence action, then confirm the result.

Do not use this skill for:

- Jira issues or Jira project workflows
- arbitrary web research outside Confluence
- local file generation as a substitute for Confluence operations

## When to Use This Skill

Use this skill when the user says or implies things like:

- "Search Confluence for our onboarding docs"
- "Find the architecture page in Confluence"
- "Create a page in the TECH space"
- "Update this existing Confluence page"
- "List available Confluence spaces"
- "Add a comment to this Confluence page"
- "Summarize the page at this Confluence URL"

Do not activate this skill when the work is primarily:

- creating or updating Jira tickets
- browsing the public web
- drafting files locally without a Confluence destination

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| User wants to find unknown content | Search workflow | Search is the fastest discovery path when page ID or ARI is not already known |
| User already provides page ID or ARI | Direct retrieval workflow | Skip search when the target is already identified |
| User wants to create a page | Space validation, then create | Prevents creating content in the wrong space or duplicating an existing page |
| User wants to update a page | Read current page first, then update | Reduces accidental overwrite risk and preserves intended content |
| User wants to add a comment | Resolve page target, verify access, then comment | Comments fail often when page identity or permissions are wrong |
| User is unclear about site or space | Ask for missing context | Never guess cloud/site, space, or page identifiers |
| Task drifts into Jira or non-Confluence work | See router note | Keeps the skill boundary clear and safe |

## Identifier Quick Reference

Use the right identifier for the right operation. Do not guess or silently convert one type into another.

| Identifier type | Typical shape | Use for | Common mistake |
| --- | --- | --- | --- |
| Site URL | `https://example.atlassian.net/` | Establishing the Confluence site context | Treating it as a page identifier |
| Cloud ID | UUID-like value | MCP and API site selection | Confusing it with a space ID or page ID |
| Page ID | Numeric or numeric-like string | Reading or updating a known page | Confusing it with a space key |
| Space ID | Numeric or numeric-like string | Space-scoped page operations | Passing a space key where a space ID is required |
| Space key | Short uppercase-like string such as `TECH` | Looking up a space | Treating it as a page ID |
| ARI | `ari:cloud:...` | Direct fetch when provided | Assuming every tool accepts ARI for every operation |

If multiple spaces or pages could match the request, ask the user to confirm before writing.

## Workflow

### 1. Normalize the request

First determine:

- the Confluence site context: site URL or cloud ID
- the operation type: search, read, list spaces, create, update, or comment
- the target object: page, space, or comment target
- whether the user already provided a page URL, page ID, space key, space ID, or ARI
- the expected outcome: summarize, create, modify, or annotate

If the site context is missing, ask explicitly:

> Which Confluence site should I use? Please provide the site URL or cloud ID.

### 2. Choose the access path

Use the narrowest reliable path:

1. If the user provides an ARI and the tool supports direct fetch, retrieve by ARI.
2. If the user provides a page ID, retrieve that page directly.
3. If the user provides only a title or description, search first.
4. If the user wants to create a page in a space, resolve the space before creating.
5. If the user wants to comment, resolve the page target before commenting.

Search is preferred for discovery, not for already-known targets.

### 3. Discovery workflow for unknown content

When the target page is not known:

1. Search Confluence using the user’s natural-language description.
2. If helpful, narrow by space or site context.
3. Inspect the top candidate pages.
4. Quote the matched title and location back to the user before mutating anything.
5. If multiple plausible matches exist, ask the user which one to use.

Do not claim a page does not exist just because search returned nothing. It may be hidden by permissions, outside the selected site, or not easily searchable from the current query.

### 4. Read workflow

For read or summarize requests:

1. Resolve the correct page.
2. Retrieve the page content.
3. Summarize only what is actually present.
4. Report the page title and identifier used.

If retrieval fails, distinguish between:

- wrong identifier
- wrong site context
- insufficient permissions
- missing or deleted content

## 5. Create workflow

Before creating a page:

1. Confirm the site context.
2. Resolve the target space using space key or space lookup.
3. If the user supplied only a space name or ambiguous shorthand, ask for confirmation.
4. Check whether a page with the same or very similar title likely already exists in that space.
5. Draft structured content in the body format required by the MCP tool.
6. Create the page.
7. Confirm the returned page title, page ID, and location if available.

Important body-format rule:

- Follow the body representation required by the MCP tool you are using.
- If the tool wrapper expects Markdown, provide Markdown there.
- Do not assume raw HTML is acceptable.
- Do not overclaim that native Confluence always uses plain Markdown internally.

## 6. Update workflow

Updates are the highest-risk operation because they can overwrite content.

Always use this pattern:

1. Resolve the page unambiguously.
2. Retrieve the current page first.
3. Identify whether the user wants:
   - a full rewrite
   - a section replacement
   - an additive insertion
   - a title-only change
4. Preserve unchanged content unless the user explicitly asked for a full replacement.
5. Prepare the updated body in the format required by the tool.
6. Submit the update.
7. Confirm what changed, including title, page ID, and any returned version/result metadata.

If the request is ambiguous, stop and ask instead of risking destructive edits.

### 7. Comment workflow

For comments:

1. Resolve the target page first.
2. Confirm the user wants a comment rather than a page edit.
3. Add the comment using the tool’s expected body representation.
4. Confirm the comment was added and report the target page.

If comments fail, check whether:

- the page is the wrong target
- the user lacks comment permission
- the content type does not support the requested comment behavior through the tool

### 8. List spaces workflow

When the user wants spaces:

1. Confirm the site context.
2. List spaces, optionally filtering by provided keys.
3. Return the relevant identifiers clearly, especially space key vs space ID.

### 9. Final confirmation

After any successful write action, report:

- operation performed
- site context used
- page title
- page ID
- space identifier used, when relevant
- URL or location, if the tool returns it
- concise summary of what changed

## Examples

### Example 1: Search, read, and summarize

```text
User: Find our onboarding documentation in Confluence and summarize it.

Agent workflow:
1. Confirm site context if missing.
2. Search for "onboarding documentation".
3. Review top matches.
4. Retrieve the selected page.
5. Summarize the page and report the page title and page ID used.
```

See also: [examples/search-read-summarize.md](examples/search-read-summarize.md)

### Example 2: Create a page in a known space

```text
User: Create a new architecture decision record in the TECH space.

Agent workflow:
1. Confirm site context.
2. Resolve the TECH space and obtain the correct space identifier.
3. Check for an existing ADR page with a similar title in that space.
4. Create the page with structured content.
5. Return the created page title and page ID.
```

See also: [examples/create-page-in-space.md](examples/create-page-in-space.md)

### Example 3: Update a page with an additive edit

```text
User: Add a "Rollback Plan" section to the API migration page.

Agent workflow:
1. Search or retrieve the target page.
2. Read the current page content first.
3. Insert the new section without removing unrelated content.
4. Update the page.
5. Confirm the modified page and summarize the change.
```

See also: [examples/update-page-additive-edit.md](examples/update-page-additive-edit.md)

### Example 4: Add a comment to a page

```text
User: Add a comment to the release checklist page asking whether the owner is still correct.

Agent workflow:
1. Resolve the page.
2. Verify the request is for a comment, not a page edit.
3. Add the comment.
4. Confirm the comment target and result.
```

See also: [examples/add-comment-to-page.md](examples/add-comment-to-page.md)

## Best Practices

### Do

- Use search first for discovery tasks when the target page is not already known.
- Go directly to page retrieval when page ID or ARI is already available.
- Ask for missing site, space, or page context instead of guessing.
- Read the current page before any update.
- Preserve unaffected content when making additive edits.
- Validate the target space before creating a page.
- Check for likely duplicate titles before creating a new page in the same space.
- Echo back which identifier you used so the user can verify the target.
- Confirm write outcomes with returned metadata.
- Keep actions narrow and reversible when possible.

### Do not

- Do not confuse page ID, space ID, and space key.
- Do not assume search failure proves a page does not exist.
- Do not overwrite a full page body when the user asked for a small edit.
- Do not assume raw HTML is supported by the wrapper you are using.
- Do not expose hidden page details when permissions are insufficient.
- Do not use this skill for Jira work or general web search.

## Security Notes

- Prefer existing authorized MCP connections over requesting raw credentials in chat.
- Follow least-privilege access patterns.
- If authentication or permission failures occur, explain the limitation without expose content the current credentials may not access.
- Distinguish, where possible, between:
  - not found
  - not visible to current credentials
  - wrong site or identifier
- Never claim access to content that was not actually retrieved.

## Troubleshooting

### Problem: Search returns no results or poor matches

**Symptoms:** Search finds nothing, returns irrelevant pages, or misses a page the user expects.
**Solution:** Verify the correct site context first. Narrow the search to a likely space if known. Ask for the page title, URL, page ID, or space key. Remember that permissions and indexing can affect search visibility.

### Problem: Page ID, space ID, and space key are being mixed up

**Symptoms:** Retrieval or create calls fail even though the user supplied an identifier.
**Solution:** Confirm the identifier type explicitly. Page IDs identify pages. Space keys are short text identifiers such as `TECH`. Space IDs are separate numeric identifiers. Re-resolve the target before retrying.

### Problem: Permission denied or content appears missing

**Symptoms:** A page cannot be read, updated, or commented on, even though the user believes it exists.
**Solution:** Report that the current credentials may not have access, or that the selected site context may be wrong. Ask the user to verify site selection and Confluence permissions. Do not leak hidden metadata from inaccessible content.

### Problem: Update risks overwriting unrelated content

**Symptoms:** The requested change is small, but the tool expects a full page body update.
**Solution:** Retrieve the current page first, preserve unaffected sections, and apply only the intended change. If you cannot safely determine the insertion scope, ask the user for confirmation before updating.

### Problem: Body rendering after update is not as expected

**Symptoms:** Formatting looks wrong after page creation or update.
**Solution:** Check whether the MCP tool expects Markdown or another specific body representation. Reformat the body to match the tool contract, avoid assuming HTML support, and retry only after confirming the intended representation.

### Problem: Comment creation fails

**Symptoms:** The agent can read the page but cannot add a comment.
**Solution:** Verify the page target, comment permissions, and whether the tool supports the intended comment type for that content. If needed, ask the user whether they want a page edit instead of a comment.

### Problem: Rate limiting or transient failures occur

**Symptoms:** Requests intermittently fail, throttle, or succeed only after retries.
**Solution:** Retry with backoff, avoid unnecessary repeated polling, and summarize partial progress to the user before attempting again.

## Related Skills

- `agents/confluence-router.md` - Use this router note when the task drifts into Jira, broad web research, or other non-Confluence workflows.

## Additional Resources

- [Confluence operations playbook](references/confluence-operations-playbook.md)
- [Confluence identifier quick reference](references/confluence-identifier-quick-reference.md)
- [Confluence troubleshooting runbook](references/confluence-troubleshooting-runbook.md)
- [Search, read, summarize example](examples/search-read-summarize.md)
- [Create page in space example](examples/create-page-in-space.md)
- [Update page with additive edit example](examples/update-page-additive-edit.md)
- [Add comment to page example](examples/add-comment-to-page.md)
- [Confluence router note](agents/confluence-router.md)

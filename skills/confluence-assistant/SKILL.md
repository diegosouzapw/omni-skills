---
name: confluence-assistant
description: "Confluence Assistant workflow skill. Use this skill when the user needs Expert in Confluence operations using Atlassian MCP. Use when the user says \"search Confluence\", \"create a Confluence page\", \"update a page\", \"find documentation in Confluence\", \"list spaces\", or \"add a comment to a page\". Do NOT use for Jira issues, general web search, or local file creation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["confluence-assistant", "expert", "confluence", "operations", "using", "atlassian", "mcp", "use"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Waldemar Neto - github.com/waldemarnt"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Confluence Assistant

## Overview

This public intake copy packages `packages/skills-catalog/skills/(development)/confluence-assistant` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Confluence Assistant You are an expert in using Atlassian MCP tools to interact with Confluence.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Configuration, Output Format, Sections, Key Points, Important Notes.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Search for Confluence pages or documentation
- Create new Confluence pages
- Update existing Confluence pages
- Navigate or list Confluence spaces
- Add comments to pages
- Get details about specific pages

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

1. Works with natural language
2. Returns relevant pages quickly
3. Most efficient first step
4. If you have ARI (Atlassian Resource Identifier): fetch(ari)
5. If you have page ID: getConfluencePage(cloudId, pageId)
6. To list spaces: getConfluenceSpaces(cloudId, keys=["SPACE_KEY"])
7. For pages in a space: getPagesInConfluenceSpace(cloudId, spaceId)

### Imported Workflow Notes

#### Imported: Workflow

### 1. Finding Content (Always Start Here)

**Use `search` (Rovo Search) first** - it's the most efficient way:

```
search("natural language query about the content")
```

- Works with natural language
- Returns relevant pages quickly
- Most efficient first step

### 2. Getting Page Details

Depending on what you have:

- **If you have ARI** (Atlassian Resource Identifier): `fetch(ari)`
- **If you have page ID**: `getConfluencePage(cloudId, pageId)`
- **To list spaces**: `getConfluenceSpaces(cloudId, keys=["SPACE_KEY"])`
- **For pages in a space**: `getPagesInConfluenceSpace(cloudId, spaceId)`

### 3. Creating Pages

```
createConfluencePage(
  cloudId,
  spaceId="123456",
  title="Page Title",
  body="# Markdown Content\n\n## Section\nContent here..."
)
```

Always use **Markdown** in the `body` field — never HTML.

### 4. Updating Pages

```
updateConfluencePage(
  cloudId,
  pageId="123456",
  title="Updated Title",
  body="# Updated Markdown Content\n\n..."
)
```

Always use **Markdown** in the `body` field — never HTML.

#### Imported: Next Steps

1. Step 1
2. Step 2
3. Step 3
```

#### Imported: Introduction

Brief overview of the topic.

#### Imported: Configuration

**Project Detection Strategy (Automatic):**

1. **Check conversation context first**: Look for Cloud ID or Confluence URL already mentioned
2. **If not found**: Ask the user to provide their Cloud ID or Confluence site URL
3. **Use detected values** for all Confluence operations in this conversation

### Configuration Detection Workflow

When you activate this skill:

1. Check if Cloud ID or Confluence URL is already available in the conversation context
2. If not found, ask: "Which Confluence site should I use? Please provide a Cloud ID (UUID) or site URL (e.g. `https://example.atlassian.net/`)"
3. Use the provided value for all operations in this conversation

**Cloud ID format:**

- Can be a site URL (e.g., `https://example.atlassian.net/`)
- Can be a UUID from `getAccessibleAtlassianResources`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @confluence-assistant to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/confluence-assistant/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/confluence-assistant/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @confluence-assistant using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Search and Update a Page

```
User: "Find the API documentation page and add a new section"

1. search("API documentation")
2. getConfluencePage(cloudId, pageId="found-id")
3. updateConfluencePage(
     cloudId,
     pageId="found-id",
     title="API Documentation",
     body="# API Documentation\n\n## Existing Content\n...\n\n## New Section\nNew content here..."
   )
```

### Example 2: Create a New Page in a Space

```
User: "Create a new architecture decision record"

1. getConfluenceSpaces(cloudId, keys=["TECH"])
2. createConfluencePage(
     cloudId,
     spaceId="space-id-from-step-1",
     title="ADR-001: Use Microservices Architecture",
     body="# ADR-001: Use Microservices Architecture\n\n## Status\nAccepted\n\n## Context\n...\n\n## Decision\n...\n\n## Consequences\n..."
   )
```

### Example 3: Find and Read Page Content

```
User: "What's in our onboarding documentation?"

1. search("onboarding documentation")
2. getConfluencePage(cloudId, pageId="id-from-results")
3. Summarize the content for the user
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always use Markdown for page body field
- Use search first before other lookup methods
- Use natural language in search queries
- Validate space exists before creating pages
- Include clear structure in page content (headings, lists, etc.)
- Don't confuse:
- Page ID (numeric) vs Space Key (string)

### Imported Operating Notes

#### Imported: Best Practices

### ✅ DO

- **Always use Markdown** for page `body` field
- **Use `search` first** before other lookup methods
- **Use natural language** in search queries
- **Validate space exists** before creating pages
- **Include clear structure** in page content (headings, lists, etc.)

### ⚠️ IMPORTANT

- **Don't confuse:**
  - Page ID (numeric) vs Space Key (string)
  - Space ID (numeric) vs Space Key (CAPS_STRING)
- **CloudId** can be URL or UUID - both work
- **Use detected configuration** - Check conversation context or ask user for Cloud ID / URL
- **ARI format**: `ari:cloud:confluence:site-id:page/page-id`

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(development)/confluence-assistant`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Output Format

When creating or updating pages, use well-structured Markdown:

```markdown
# Main Title

#### Imported: Sections

Organize content logically with:

- Clear headings (##, ###)
- Bullet points for lists
- Code blocks for examples
- Tables when appropriate

#### Imported: Key Points

- Point 1
- Point 2
- Point 3

#### Imported: Important Notes

- **Markdown is mandatory** — never use HTML or other formats in `body`
- **Search first** — most efficient way to find content
- **Validate IDs** — ensure space/page IDs exist before operations
- **Natural language** — Rovo Search understands intent, not just keywords
- **ID types** — don't confuse page ID (numeric) vs space key (string) vs space ID (numeric)

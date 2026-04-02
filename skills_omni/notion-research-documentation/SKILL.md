---
name: "notion-research-documentation"
description: "Research & Documentation workflow skill. Use this skill when the user needs research across Notion and wants it synthesized into a structured brief, comparison, or report with traceable citations, clear evidence handling, and a safe publication workflow."
version: "0.0.1"
category: "documentation"
tags:
  - "notion-research-documentation"
  - "notion"
  - "research"
  - "documentation"
  - "citations"
  - "synthesis"
  - "reports"
  - "mcp"
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
upstream_skill: "skills/notion-research-documentation"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Research & Documentation

## Overview

Use this skill to research across Notion content and turn the findings into structured documentation such as executive briefs, research summaries, option comparisons, and comprehensive reports.

This skill is most useful when the work requires more than a quick summary: you need repeatable source discovery, evidence capture, citation discipline, and a safe path to publishing or updating a Notion page.

The workflow assumes Notion access may be constrained by workspace connection, sharing, and integration capabilities. It also assumes that search results alone are not sufficient evidence: important claims should be verified against the underlying page content before they appear in the final document.

## When to Use This Skill

Use this skill when:

- You need to gather information from multiple Notion pages and synthesize it into one document.
- The user wants a cited brief, comparison, report, or decision memo rather than raw page excerpts.
- The task requires provenance, such as source URLs, page IDs, retrieved dates, direct quotes, or contradiction tracking.
- You need to publish findings back into Notion as a new page or update an existing page safely.
- The work benefits from a repeatable evidence log, review checklist, or publication pattern.

Do **not** use this skill when:

- The task is primarily workspace administration, permissions management, or integration setup beyond basic troubleshooting.
- The task is mainly numerical analysis, coding, or automation design rather than research synthesis.
- The user only wants a one-off answer from a single known page and does not need a structured deliverable.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time setup or access uncertainty | `references/notion-access-preflight.md` | Confirms MCP connection, workspace authorization, sharing, and read/write boundaries before research starts |
| Broad topic with many candidate pages | `references/source-log-template.md` | Keeps discovery separate from evidence capture and prevents untraceable synthesis |
| Need to choose output shape | `references/format-selection-guide.md` | Maps user need to the right document format and required sections |
| Writing claims or recommendations | `references/citation-and-provenance-guide.md` | Separates evidence from inference and keeps citations consistent |
| Long report or repeated updates | `references/publication-patterns.md` | Reduces risk of oversized writes, validation failures, and brittle one-shot publishing |
| Pre-handoff quality check | `references/quality-review-checklist.md` | Verifies evidence coverage, audience fit, and citation completeness |
| Failure during search, fetch, or publish | `references/troubleshooting-notion-research.md` | Gives concrete recovery actions for common Notion access and content issues |
| Handoff to another skill or specialist | `agents/handoff-router.md` | Preserves source log, draft target, and unresolved questions during task drift |

## Workflow

### 0. Preflight access and scope

Before gathering sources, verify the operational boundary:

1. Confirm the user’s goal:
   - What decision, question, or deliverable is needed?
   - Who is the audience?
   - Is the output a brief, comparison, summary, or deep report?
2. Verify Notion connectivity and access.
3. Confirm whether the task is read-only research or includes publishing/updating content.
4. If write actions may occur, be alert for approval or confirmation requirements in the current environment.

Use `references/notion-access-preflight.md` if there is any doubt about OAuth, workspace selection, sharing, or capabilities.

### 1. Connect Notion MCP if needed

If Notion MCP is not already available in the current environment, use the narrow setup path below.

```bash
codex mcp add notion --url https://mcp.notion.com/mcp
codex mcp login notion
```

After login, the client may need to be restarted before the MCP becomes usable. If that happens, stop after setup, tell the user what changed, and resume the research workflow only after reconnecting.

Do not prescribe config key variations unless they are already known to be correct in the current client environment.

### 2. Discover candidate sources

Start with search, not synthesis.

- Search for likely pages by title or topic.
- Refine queries if results are broad or ambiguous.
- If multiple plausible targets appear, ask the user to confirm scope rather than guessing.
- Treat search results as discovery only. Do **not** treat a search snippet as evidence.

Capture each promising source in a source log. Use `references/source-log-template.md`.

### 3. Fetch and verify source content

For each candidate source:

- Open the page content, not just metadata or search output.
- Read enough of the page to verify relevant claims, dates, numbers, decisions, or constraints.
- Capture source details:
  - page title
  - page URL
  - page ID if available
  - retrieved date
  - last edited date if visible
  - owner or team if relevant
  - direct quote for critical facts
- Note contradictions, stale content, or uncertainty.

If a page is long, ensure the retrieval process covers all needed content rather than a partial first page of blocks.

### 4. Build the evidence set

Before writing the final document, separate raw evidence from interpretation.

Create a lightweight evidence matrix that maps:

- key claim
- source page
- supporting quote or paraphrase
- confidence or recency note
- contradiction or gap note

Use:

- `references/source-log-template.md`
- `examples/research-evidence-matrix.md`

For important or non-obvious claims, prefer direct quotes or very close paraphrases anchored to a specific source.

### 5. Select the output format

Choose the format based on user need, not on document length alone.

- **Executive brief**: quick decisions, leadership readouts, status framing.
- **Research summary**: one topic, one question, moderate depth.
- **Decision comparison**: tradeoffs across options, criteria, and recommendations.
- **Comprehensive report**: deep review with context, evidence, risks, and open questions.

Use `references/format-selection-guide.md`.

### 6. Draft with an evidence-first structure

Outline first. Then write in this order:

1. Purpose and audience
2. Executive summary or key takeaway
3. Evidence-backed findings
4. Interpretation or synthesis
5. Recommendations or next steps
6. Risks, contradictions, and open questions
7. References

Keep these categories distinct:

- **Evidence:** what the Notion sources say
- **Inference:** what you conclude from that evidence
- **Recommendation:** what should happen next
- **Unknowns:** what remains unclear or stale

Use `references/citation-and-provenance-guide.md` while drafting.

### 7. Publish safely into Notion

For short outputs, a single create/update may be acceptable.

For longer reports, prefer a draft-first incremental pattern:

1. Create a skeleton page with title, purpose, summary, and section headings.
2. Add sections in batches.
3. Review formatting and references.
4. Append changelog or status notes on later updates.

This is safer than attempting one large write when the document is long or source-backed.

Use `references/publication-patterns.md`.

### 8. Review before handoff

Before finalizing:

- Check that every important claim is traceable to a source.
- Mark recommendations that are judgment rather than direct source statements.
- Flag stale or contradictory pages explicitly.
- Confirm the document format matches the audience.
- Confirm links and references are present.

Use `references/quality-review-checklist.md`.

### 9. Handoff clearly

When handing off to a user, reviewer, or another skill, include:

- final document location
- source log or evidence matrix location
- unresolved questions
- pages that were inaccessible or ambiguous
- whether the document is a draft or final version

If the work drifts into another specialization, use `agents/handoff-router.md`.

## Examples

### Example 1: Create a cited executive brief

```text
Research onboarding pain points across our HR Notion workspace and produce an executive brief with: top 5 issues, evidence-backed examples, contradictions between team docs, and recommended next steps. Include inline citations and a references section.
```

**Expected outcome:** A short decision-ready brief with claims tied to specific Notion pages.

### Example 2: Build a comparison report before recommending an option

```text
Compare our three internal deployment approaches documented in Notion. Use a decision-comparison format with criteria, evidence, risks, and a final recommendation. Mark any recommendation that goes beyond the source material as judgment.
```

**Expected outcome:** A structured comparison with traceable evidence and explicit separation between facts and recommendation.

### Example 3: Publish a long report incrementally

```text
Create a comprehensive report in Notion about customer escalation patterns from the support workspace. Start with a skeleton page, then add sections one by one with citations and an open-questions section.
```

**Expected outcome:** A draft-first Notion page that avoids oversized one-shot writes.

### Example 4: Use a source log before drafting

```text
Before writing anything, search the engineering workspace for incident review pages related to queue latency, fetch the relevant pages, and build a source log with title, URL, retrieved date, key claims, and direct quotes for any metrics.
```

**Expected outcome:** A reusable evidence set that can support later synthesis without losing provenance.

## Best Practices

### Do

- Verify that the integration can actually access the relevant workspace and pages before promising results.
- Search first, then fetch and read the actual page content.
- Log retrieved dates and page identifiers for important sources.
- Use direct quotes for critical facts, metrics, policy language, or contentious claims.
- Separate evidence, inference, recommendation, and unknowns.
- Ask for user confirmation when search results are ambiguous.
- Publish long reports incrementally.
- Preserve contradiction notes instead of flattening disagreement between sources.

### Do not

- Do not rely on search snippets as if they were source text.
- Do not imply universal access to all Notion content.
- Do not hide stale, conflicting, or incomplete source material.
- Do not present agent-generated recommendations as if they were explicitly stated in the source pages.
- Do not attempt a very large report as one fragile write if a skeleton-plus-sections pattern is safer.
- Do not overwrite an existing page without preserving update intent and review context.

## Troubleshooting

### Problem: Search works, but page fetch fails or returns a restricted resource

**Symptoms:** Search finds the page title, but opening or using the page as a source fails.

**Solution:** Verify that the correct workspace is connected, that the page is shared with the integration, and that the integration has the required capabilities. A page visible in the UI is not automatically accessible to the integration. See `references/notion-access-preflight.md`.

### Problem: OAuth or MCP setup does not complete cleanly

**Symptoms:** Notion tools are unavailable, login fails, or the MCP remains disconnected after setup.

**Solution:** Re-run the narrow setup flow, complete authorization, and restart the client if required. Do not continue with speculative tool calls. If the environment has approval gates, ensure the login and later write actions are properly approved.

### Problem: The report contains claims that cannot be traced back to sources

**Symptoms:** The draft sounds plausible, but key statements lack a source page, quote, or reference trail.

**Solution:** Rebuild the evidence matrix before revising the draft. For important claims, add source title, URL, retrieved date, and a direct quote or tight paraphrase. Use `references/citation-and-provenance-guide.md` and `examples/research-evidence-matrix.md`.

### Problem: Long pages appear incomplete after retrieval

**Symptoms:** Important sections seem to be missing, especially in large or deeply nested pages.

**Solution:** Treat this as a retrieval completeness problem, not as proof that the content does not exist. Re-fetch carefully and ensure the retrieval process covers the needed page content rather than only the first segment.

### Problem: Create or update fails on long reports

**Symptoms:** Validation-style errors, oversized content failures, or brittle behavior while creating a large page.

**Solution:** Switch to a skeleton-first publication pattern. Create the page with headings and summary, then append sections in smaller batches. See `references/publication-patterns.md`.

### Problem: The output is well written but wrong for the audience

**Symptoms:** The document is accurate, but too long, too technical, or not decision-oriented enough.

**Solution:** Re-check the audience, purpose, and deadline. Then switch to the correct format using `references/format-selection-guide.md` and reframe the summary and section order accordingly.

## Related Skills

- `@doc` - Use when the work shifts from source synthesis into broader documentation editing, restructuring, or style refinement.
- `@chatgpt-apps` - Use when the user wants the findings turned into an app-facing workflow or productized interaction pattern.
- API or integration troubleshooting skills - Use when the task becomes primarily about MCP, OAuth, permissions, or tool reliability rather than research synthesis.
- Project or task-planning skills - Use when the main output becomes execution tracking, task decomposition, or status management after the research phase.

When handing off, preserve:

- source log or evidence matrix
- draft page location
- unresolved questions
- access limitations encountered

## Additional Resources

- [Notion access preflight](references/notion-access-preflight.md)
- [Source log template](references/source-log-template.md)
- [Citation and provenance guide](references/citation-and-provenance-guide.md)
- [Format selection guide](references/format-selection-guide.md)
- [Publication patterns](references/publication-patterns.md)
- [Quality review checklist](references/quality-review-checklist.md)
- [Troubleshooting playbook](references/troubleshooting-notion-research.md)
- [Research evidence matrix example](examples/research-evidence-matrix.md)
- [Executive brief example](examples/executive-brief-example.md)
- [Comparison report example](examples/comparison-report-example.md)
- [Handoff router](agents/handoff-router.md)

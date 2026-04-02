---
name: "openai-docs-v2"
description: "OpenAI Docs workflow skill. Use this skill when a user needs current official OpenAI documentation with citations, help choosing the right current model or API surface, or explicit GPT-5.4 upgrade and prompt-migration guidance; prioritize OpenAI docs MCP tools, treat bundled references as helper context only, and restrict any fallback browsing to official OpenAI domains."
version: "0.0.1"
category: "ai-agents"
tags:
  - "openai-docs-v2"
  - "openai-docs"
  - "openai"
  - "documentation"
  - "models"
  - "responses-api"
  - "gpt-5.4"
  - "mcp"
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
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/openai-docs-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# OpenAI Docs

## Overview

This skill packages the upstream `skills/.system/openai-docs` workflow from `https://github.com/openai/skills.git` into a reviewable Omni Skills format without hiding its origin.

Use it to answer OpenAI product and API questions with current, official documentation and explicit citations. The default operating model is **docs-first and MCP-first**:

1. classify the request,
2. search official OpenAI docs with the OpenAI developer docs MCP tools,
3. fetch the exact relevant page or section,
4. use bundled local references only as helper context,
5. fall back to browsing only when MCP is unavailable or returns no meaningful result.

This skill is especially useful when the operator needs one of these outcomes:

- current official documentation with citations
- help choosing the right current model for a use case
- help deciding between Responses API and Chat Completions
- GPT-5.4 upgrade planning or prompt-migration guidance
- routing into more specialized OpenAI workflows such as Apps SDK, Realtime, Agents SDK, or long-running/background tasks

Preserve provenance when answering, reviewing, or handing off. The packaged support pack exists to make the workflow auditable and repeatable, not to replace live official documentation.

## When to Use This Skill

Use this skill when the user asks questions such as:

- “How do I build this with OpenAI APIs?”
- “What is the current official way to do this in OpenAI docs?”
- “Which OpenAI model should I use for this use case?”
- “Should I use Responses API or Chat Completions?”
- “How do I upgrade to GPT-5.4?”
- “Do I need to change my prompts for GPT-5.4?”
- “Where are the official docs for Realtime, Apps SDK, tools, or conversation state?”

Also use this skill when:

- the answer must cite official OpenAI docs
- bundled references may help, but must not override current live docs
- provenance should stay visible in a review packet, answer, or PR
- the operator needs a safe fallback path when MCP tools are unavailable

Do **not** use this skill as the final implementation skill when the task has already shifted into deep coding, architecture, or product-specific build work. In those cases, use this skill to ground the answer in current docs first, then hand off deliberately.

## Operating Table

| Situation | Start here | What to do |
| --- | --- | --- |
| General OpenAI docs question | MCP search | Search official docs, fetch the exact page/section, answer with doc title + URL |
| Model recommendation request | `platform.openai.com/docs/models` + `references/latest-model.md` | Verify current model guidance in official docs first, then use local reference only for helper context |
| API choice request | `references/responses-vs-chat-completions.md` | Start from official Responses vs Chat guidance and state the recommended API with rationale |
| GPT-5.4 upgrade request | `references/upgrading-to-gpt-5p4.md` | Verify each recommendation against live docs, then provide migration actions and compatibility notes |
| GPT-5.4 prompt migration | `references/gpt-5p4-prompting-guide.md` | Use official docs first, then summarize prompt changes, tradeoffs, and any open uncertainties |
| Tool-using or agentic workflow question | `references/tools-guide.md` | Check official tools and conversation-state docs, then hand off if implementation depth is needed |
| Stateful conversation question | `references/conversation-state.md` | Cite official conversation-state docs and clarify whether state handling is required |
| Long-running job question | `references/background-mode.md` | Ground answer in official background-mode docs and note when background execution is appropriate |
| ChatGPT app question | `references/apps-sdk.md` | Route to Apps SDK docs and hand off to a specialized app-building skill if needed |
| Low-latency voice or multimodal question | `references/realtime-api.md` | Use official Realtime docs and hand off if implementation becomes deep |
| MCP unavailable or install fails | Troubleshooting section | Attempt safe local recovery first, then ask the user only if necessary |
| MCP search returns weak results | Refine query + fetch exact section | Narrow by product, API, or feature; avoid broad browsing |
| Local reference conflicts with live docs | Official docs win | Cite the live docs, mention the discrepancy, and avoid repeating stale guidance |

## Workflow

1. **Classify the request before loading files.**
   Determine whether the user needs:
   - general docs lookup
   - model selection
   - API selection
   - GPT-5.4 upgrade guidance
   - GPT-5.4 prompt migration
   - tools / state / background / apps / realtime routing

2. **Start with official OpenAI docs via MCP.**
   Prefer:
   - `mcp__openaiDeveloperDocs__search_openai_docs`
   - `mcp__openaiDeveloperDocs__fetch_openai_doc`
   - `mcp__openaiDeveloperDocs__list_openai_docs` only when discovery is necessary

3. **Use precise search terms.**
   Include the product surface and feature, for example:
   - `responses vs chat completions`
   - `conversation state`
   - `background mode`
   - `models overview`
   - `realtime api`
   - `apps sdk`

4. **Fetch the exact page or section that answers the question.**
   Prefer the specific section or anchor over a high-level landing page when possible.

5. **Load only the relevant local helper reference.**
   Use bundled files for context, not authority. This is most useful for:
   - `references/latest-model.md`
   - `references/upgrading-to-gpt-5p4.md`
   - `references/gpt-5p4-prompting-guide.md`
   - the routing references added in this support pack

6. **Verify volatile topics against live docs.**
   Always re-check live official docs before answering about:
   - latest or recommended models
   - API surface choice
   - upgrade instructions
   - prompt migration guidance
   - feature availability or behavior

7. **Resolve the answer shape based on intent.**
   Use one of these output patterns:

   - **General docs lookup:** concise answer, doc title, URL, and any caveat
   - **Model recommendation:** recommended model, why, tradeoffs, fallback option, cited source
   - **API choice:** preferred API, when it fits, when an exception may apply, cited source
   - **GPT-5.4 upgrade:** target model, migration actions, prompt changes if needed, compatibility caveats, cited source
   - **Routing request:** best official doc entrypoint, why it matches, and whether to hand off to another skill

8. **State discrepancies explicitly.**
   If bundled local guidance differs from current official docs, say so plainly and follow the live official docs.

9. **Apply the fallback boundary only when justified.**
   If MCP is unavailable or returns no meaningful results, restrict fallback browsing to official OpenAI domains such as:
   - `developers.openai.com`
   - `platform.openai.com`
   - other clearly official OpenAI documentation properties already allowed by policy

10. **Answer with provenance.**
    For every substantive answer, include the relevant document title and URL. If the docs do not answer the user’s exact question, say that directly instead of speculating.

### Imported Workflow Notes

The upstream intent is preserved:

1. Clarify whether the request is general docs lookup, model selection, GPT-5.4 upgrade, or GPT-5.4 prompt upgrade.
2. Load `references/latest-model.md` for model-selection requests.
3. Load `references/upgrading-to-gpt-5p4.md` for explicit GPT-5.4 upgrade requests.
4. Load `references/gpt-5p4-prompting-guide.md` when prompt updates or heavy workflow changes may be required.
5. Search docs precisely.
6. Fetch the best page and exact section.
7. For GPT-5.4 upgrade reviews, make the result explicit per usage site: target model, reasoning recommendation, phase assessment when relevant, prompt blocks, and compatibility status.
8. Answer concisely with citations, using local references only as helper context.

## Examples

### Example 1: General docs lookup with citation

```text
Use @openai-docs-v2 to answer: “How should I build a new OpenAI integration that may need tools and conversation state?” Start with official docs via MCP, prefer the recommended API for new work, and cite the exact docs you used.
```

**Expected output shape:**
- short recommendation
- cited official doc title + URL
- note about whether Responses API is the better default for this case

### Example 2: Current model recommendation

```text
Use @openai-docs-v2 to recommend the best current OpenAI model for a customer-support assistant. Verify against current official model docs first, then give the recommended model, tradeoffs, fallback option, and citations.
```

See also: [`examples/model-selection-review.md`](examples/model-selection-review.md)

### Example 3: GPT-5.4 upgrade review

```text
Use @openai-docs-v2 to review our GPT-5.4 migration plan. Check official docs first, then summarize target model, required prompt changes, compatibility risks, and source links.
```

### Example 4: Safe MCP install recovery

```bash
python3 skills/openai-docs-v2/scripts/omni_import_print_origin.py
python3 skills/openai-docs-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** Use these existing local helpers to confirm provenance and inspect the support pack before troubleshooting or review.

### Example 5: Concise citation format

See: [`examples/docs-citation-template.md`](examples/docs-citation-template.md)

## Best Practices

### Do

- Treat current official OpenAI docs as the source of truth.
- Use MCP doc tools before any fallback browsing for OpenAI-related questions.
- Fetch the exact relevant page or section, not just a broad landing page.
- Include the document title and URL in every substantive answer.
- Use bundled references as helper context only.
- Call out when local reference material appears stale relative to live docs.
- Prefer the Responses API guidance from official docs for new builds unless the docs support a specific exception.
- Route app, realtime, agent orchestration, or deep implementation tasks into a more specialized skill after grounding the answer in docs.
- Keep secret values out of examples and responses.
- Remind users to handle API keys server-side and follow official key-safety guidance.

### Don’t

- Don’t present bundled references as authoritative for volatile topics.
- Don’t rely on non-official sources when official OpenAI docs are available.
- Don’t guess when the docs are silent or ambiguous.
- Don’t answer from memory if the question depends on current model, API, or feature behavior.
- Don’t recommend exposing API keys in browser or mobile clients.
- Don’t force a handoff too early; first provide the relevant official docs and rationale.

### Security Boundary

This is a documentation workflow skill, but it may still produce implementation-oriented guidance. Keep it safe:

- redact secrets in all examples
- avoid client-side API key exposure
- prefer server-side secret handling
- cite official OpenAI API key safety guidance when secret handling is relevant

See: [`references/api-key-safety.md`](references/api-key-safety.md)

## Troubleshooting

### Problem: MCP server is missing or install fails

**Symptoms:** MCP doc tools are unavailable, fail to resolve, or return installation-related errors.

**Solution:**
1. Attempt the documented install command yourself:
   `codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp`
2. If it fails because of permissions or sandboxing, retry with escalation if your environment supports it and include a one-sentence justification.
3. If that still fails, ask the user to run the same command.
4. Ask the user to restart the client.
5. Re-test search and fetch before falling back to browsing.

### Problem: MCP search returns broad, irrelevant, or weak results

**Symptoms:** Search returns general landing pages, unrelated products, or too many results to answer precisely.

**Solution:** Narrow the query by product and feature, then fetch the exact section. Examples:
- `responses vs chat completions`
- `conversation state`
- `background mode`
- `realtime api`
- `apps sdk`
- `models overview`

If needed, search twice: once for the product family and once for the exact feature.

### Problem: The fetched page does not answer the exact question

**Symptoms:** The page is relevant but still too high-level, or the exact behavior the user asked about is not covered.

**Solution:**
1. Fetch adjacent pages in the same doc family.
2. Check whether the feature lives under a guide, models page, or product-specific reference.
3. If the docs still do not answer the need, say so explicitly and avoid speculation.

### Problem: Local reference guidance conflicts with current docs

**Symptoms:** `references/latest-model.md`, `references/upgrading-to-gpt-5p4.md`, or another bundled file appears to disagree with current official docs.

**Solution:** Official live docs win. Cite the current docs, note that the bundled reference appears stale or narrower, and do not repeat the outdated guidance as if it were current.

### Problem: The user asks for Chat Completions, but the use case sounds stateful, tool-using, or multimodal

**Symptoms:** The request names one API, but the actual requirements imply another API surface may fit better.

**Solution:** Use official API-choice docs first. Explain the likely better default, why it fits the stated use case, and whether there is still a valid reason to keep the requested API.

### Problem: Fallback browsing returns non-official results

**Symptoms:** Search results point to blog posts, community writeups, mirrors, or unofficial summaries.

**Solution:** Stop and restrict browsing to official OpenAI domains only. If no official source answers the question, say that directly instead of citing unofficial material.

### Problem: The task has drifted into implementation depth

**Symptoms:** The docs are clear, but the user now needs extensive coding, SDK integration, architecture, or product-specific build work.

**Solution:** Provide the official doc entrypoint, summarize the relevant guidance, then hand off to the best matching specialized skill.

## Related Skills

- `@chatgpt-apps` - Use when the request moves from docs lookup into building a ChatGPT app with the Apps SDK.
- `@doc` - Use when the task becomes documentation authoring or doc-structure work rather than OpenAI docs retrieval.
- `@aspnet-core` - Use when the OpenAI docs answer is established and the remaining work is framework-specific implementation in ASP.NET Core.
- `@develop-web-game` - Use only if the OpenAI docs lookup is complete and the remaining task is game-specific implementation.

## Additional Resources

### Task-oriented support matrix

| User intent | Official starting point | Local helper file | Expected output |
| --- | --- | --- | --- |
| General API/product docs lookup | `https://developers.openai.com/` | `references/omni-import-checklist.md` | concise answer with doc title + URL |
| Model selection | `https://platform.openai.com/docs/models` | `references/latest-model.md` | recommended model, why, tradeoffs, fallback |
| API choice | `https://platform.openai.com/docs/guides/responses-vs-chat-completions` | `references/responses-vs-chat-completions.md` | preferred API and rationale |
| Conversation state | `https://platform.openai.com/docs/guides/conversation-state` | `references/conversation-state.md` | state guidance and citation |
| Built-in tools | `https://platform.openai.com/docs/guides/tools` | `references/tools-guide.md` | tool-use guidance and handoff note |
| Background / long-running work | `https://platform.openai.com/docs/guides/background` | `references/background-mode.md` | when to use background mode |
| ChatGPT apps | `https://developers.openai.com/apps-sdk/` | `references/apps-sdk.md` | correct docs entrypoint and routing |
| Realtime / low-latency multimodal | `https://platform.openai.com/docs/guides/realtime` | `references/realtime-api.md` | correct docs entrypoint and routing |
| GPT-5.4 upgrade | current official docs + migration pages | `references/upgrading-to-gpt-5p4.md` | target model, migration actions, caveats |
| Prompt migration | current official docs + prompting guidance | `references/gpt-5p4-prompting-guide.md` | prompt changes, risks, and citations |
| API key safety | official safety guidance | `references/api-key-safety.md` | safe secret-handling reminder |

### Packaged local resources

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Responses vs Chat Completions routing note](references/responses-vs-chat-completions.md)
- [Conversation state routing note](references/conversation-state.md)
- [Tools guide routing note](references/tools-guide.md)
- [Background mode routing note](references/background-mode.md)
- [Apps SDK routing note](references/apps-sdk.md)
- [Realtime API routing note](references/realtime-api.md)
- [API key safety note](references/api-key-safety.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Docs citation template](examples/docs-citation-template.md)
- [Model selection review example](examples/model-selection-review.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

Read only what you need:

- `references/latest-model.md` -> model-selection and “best/latest/current model” questions; verify every recommendation against current official docs before answering.
- `references/upgrading-to-gpt-5p4.md` -> explicit GPT-5.4 upgrade and upgrade-planning requests; verify the checklist and compatibility guidance against current official docs before answering.
- `references/gpt-5p4-prompting-guide.md` -> prompt rewrites and prompt-behavior upgrades for GPT-5.4; verify prompting guidance against current official docs before answering.

### Imported MCP Notes

If MCP tools fail or no OpenAI docs resources are available:

1. Run the install command yourself: `codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp`
2. If it fails due to permissions or sandboxing, retry with escalation when available and provide a brief justification.
3. Only if that fails, ask the user to run the install command.
4. Ask the user to restart the client.
5. Re-run doc search and fetch after restart.

### Official sources to prefer

- `https://developers.openai.com/`
- `https://platform.openai.com/docs/overview`
- `https://platform.openai.com/docs/models`
- `https://platform.openai.com/docs/guides/responses-vs-chat-completions`
- `https://platform.openai.com/docs/guides/conversation-state`
- `https://platform.openai.com/docs/guides/tools`
- `https://platform.openai.com/docs/guides/background`
- `https://developers.openai.com/apps-sdk/`
- `https://platform.openai.com/docs/guides/realtime`

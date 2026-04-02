---
name: "openai-docs"
description: "OpenAI Docs workflow skill. Use this skill when a user needs current, official OpenAI documentation with citations, help selecting the right OpenAI model for a use case, guidance on Responses API versus Chat Completions, Agents or tools documentation, MCP-backed doc lookup, or explicit GPT-5.4 upgrade and prompt-upgrade help; prefer the OpenAI docs MCP tools first, treat bundled references as helper context only, and restrict fallback browsing to official OpenAI documentation domains."
version: "0.0.1"
category: "ai-agents"
tags:
  - "openai-docs"
  - "openai"
  - "developer-docs"
  - "responses-api"
  - "agents"
  - "mcp"
  - "model-selection"
  - "prompt-upgrade"
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
upstream_skill: "skills/openai-docs"
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

This skill packages the upstream `skills/.curated/openai-docs` workflow from `https://github.com/openai/skills.git` into the Omni Skills format while preserving its original intent: answer OpenAI product and API questions using current official documentation, not memory or stale summaries.

Use this skill as a docs-first evidence workflow:

- classify the request
- search official OpenAI docs through the OpenAI docs MCP tools first
- fetch the exact page or section needed
- answer with citations
- use bundled local references only as helper context
- fall back to browsing only official OpenAI documentation domains if MCP is unavailable or unhelpful
- hand off cleanly if the task turns into implementation, debugging, or broader architecture work

This skill is especially appropriate when the operator must preserve provenance, keep answers aligned to current OpenAI guidance, and produce a compact evidence packet for review or handoff.

## When to Use This Skill

Use this skill when the request is primarily about finding, verifying, or summarizing official OpenAI guidance.

Typical triggers:

- The user asks how to build with an OpenAI API, SDK, tool, or product and needs current official documentation with citations.
- The user asks which OpenAI model to choose for a task and wants the recommendation grounded in current model and pricing docs.
- The user asks whether to use Responses API or Chat Completions for a new or existing integration.
- The user asks how to build an agent, use built-in tools, or understand agent-related OpenAI docs.
- The user asks for GPT-5.4 upgrade or prompt-upgrade guidance and wants current official references.
- The operator needs an auditable doc-lookup workflow with provenance before code changes or broader design work.

Do not use this skill as the final authority when the task has already shifted to:

- app-specific implementation
- debugging user code
- non-OpenAI vendor comparisons
- speculative feature design not documented by OpenAI
- broad architecture decisions that require more than doc retrieval and citation

In those cases, use this skill first to gather evidence, then hand off.

## Operating Table

| Request type or situation | Primary action | Supporting local file | Expected output |
| --- | --- | --- | --- |
| General OpenAI docs lookup | Search MCP, fetch exact section, cite source | `references/openai-official-source-map.md` | Concise answer with official doc citation |
| Model selection | Verify against current models and pricing docs before recommending | `references/openai-model-selection-source-map.md` | Recommendation with criteria: quality, latency, modality, tool use, context, cost |
| New agentic application | Prefer modern docs flow, usually Responses API plus Agents/Tools guidance | `references/responses-vs-chat-completions.md`, `references/openai-agents-tools-map.md` | Greenfield recommendation with citations |
| Existing Chat Completions integration | Distinguish migration-safe guidance from greenfield guidance | `references/responses-vs-chat-completions.md` | "Keep vs migrate" framing with citations |
| GPT-5.4 upgrade | Load upgrade helper notes, then verify live docs before advising | `references/upgrading-to-gpt-5p4.md`, `references/openai-prompt-upgrade-notes.md` | Explicit upgrade checklist and risks |
| Prompt-upgrade request | Use prompt guide as helper context, but anchor answer in official prompt docs | `references/gpt-5p4-prompting-guide.md`, `references/openai-prompt-upgrade-notes.md` | Prompt rewrite guidance with citations |
| MCP unavailable | Attempt install or recovery, retry search/fetch, then use official-domain fallback only if needed | `references/openai-mcp-setup-and-recovery.md` | Recovery steps and bounded fallback |
| Error codes or throttling question | Route to official error and rate-limit docs | `references/openai-errors-rate-limits.md` | Troubleshooting answer with exact doc citations |
| Handoff needed | Preserve evidence packet and route to a better implementation skill | `agents/openai.yaml` | Compact handoff summary with sources consulted |

## Workflow

1. **Classify the request.**
   Determine whether the task is one of these: general docs lookup, model selection, Responses API vs Chat Completions, Agents/Tools guidance, GPT-5.4 upgrade, prompt upgrade, MCP setup, or error/rate-limit troubleshooting.

2. **Load only the minimum helper context that changes the answer.**
   Use local references selectively.
   - Model choice: `references/openai-model-selection-source-map.md`
   - API choice or migration: `references/responses-vs-chat-completions.md`
   - Agents and tools: `references/openai-agents-tools-map.md`
   - MCP setup or failure recovery: `references/openai-mcp-setup-and-recovery.md`
   - Errors and rate limits: `references/openai-errors-rate-limits.md`
   - Prompt-upgrade work: `references/openai-prompt-upgrade-notes.md`
   - GPT-5.4-specific imported helper notes when explicitly requested: `references/upgrading-to-gpt-5p4.md`, `references/gpt-5p4-prompting-guide.md`

3. **Use OpenAI docs MCP tools first.**
   Preferred order:
   - `mcp__openaiDeveloperDocs__search_openai_docs` for targeted discovery
   - `mcp__openaiDeveloperDocs__fetch_openai_doc` for exact page or section retrieval
   - `mcp__openaiDeveloperDocs__list_openai_docs` only when you need to browse without a good query

4. **Fetch the exact evidence, not just a page title.**
   Retrieve the most relevant page and, when possible, the exact anchor or subsection that supports the answer.

5. **Verify authority and freshness.**
   Treat current official OpenAI documentation as authoritative. If a local helper note differs from the live docs, prefer the live docs and explicitly note the discrepancy when it matters.

6. **Answer with citations and bounded claims.**
   Every substantive answer should cite the exact OpenAI doc page used. If local references influenced the workflow, describe them as helper context, not primary authority.

7. **Apply request-specific output rules.**
   - **Model selection:** state the criteria used: quality, latency, modality, tool use, context window, and cost if relevant.
   - **Responses vs Chat Completions:** clearly separate greenfield guidance from migration-safe guidance.
   - **GPT-5.4 upgrade:** make the per-usage-site output explicit: target model, reasoning recommendation if documented, prompt changes, compatibility notes, and unresolved gaps.
   - **Prompt upgrades:** show what changed in the prompt and why, and tie the reasoning to current official prompt guidance when possible.

8. **Fallback only within official OpenAI domains.**
   If MCP is unavailable or returns no meaningful results after recovery attempts, restrict fallback browsing to official OpenAI docs domains such as:
   - `developers.openai.com`
   - `platform.openai.com`
   Use `openai.com` only when needed for primary pricing information.

9. **Stop instead of guessing.**
   If the docs do not answer the question, say that directly. Do not infer unsupported behavior, undocumented compatibility, hidden limits, or future roadmap.

10. **Prepare handoff when needed.**
    If the task shifts into implementation, debugging, or system design, provide a compact evidence packet:
    - request type
    - official pages consulted
    - key conclusions
    - unresolved questions
    - any doc conflicts or drift observed

### Imported Upstream Notes Preserved

The original upstream skill emphasized these points, which remain in force here:

- prioritize the OpenAI docs MCP workflow over general web search
- load local reference files only when they materially change the answer
- keep GPT-5.4 upgrade reviews explicit per usage site
- preserve provenance instead of hiding the source workflow

## Examples

### Example 1: General docs lookup

```text
Use @openai-docs to answer: How do I build a tool-using OpenAI agent? Search the OpenAI docs MCP first, fetch the exact Agents and Tools sections, and reply with citations only from official OpenAI docs.
```

**Expected shape:** A concise answer that cites the relevant Agents and Tools pages, summarizes the recommended path, and avoids undocumented claims.

### Example 2: Model-selection request

```text
Use @openai-docs to answer: What is the best OpenAI model for a cost-sensitive multimodal support assistant? Verify current model and pricing docs first, then recommend one option and one fallback with tradeoffs.
```

**Expected shape:** A recommendation grounded in the live models and pricing docs, with explicit selection criteria and citations.

See also: [examples/model-selection-request.md](examples/model-selection-request.md)

### Example 3: API migration or greenfield choice

```text
Use @openai-docs to answer: We currently use Chat Completions. Should a new feature use Responses API instead? Distinguish migration-safe advice from greenfield guidance and cite official docs.
```

**Expected shape:** A split answer that explains what OpenAI currently recommends for new builds and what to consider before migrating an existing integration.

See also: [examples/api-migration-request.md](examples/api-migration-request.md)

### Example 4: MCP recovery before fallback

```text
Use @openai-docs to answer an OpenAI docs question, but first recover the OpenAI docs MCP setup if it is missing. Retry search after recovery and only fall back to official OpenAI domains if MCP still does not produce useful results.
```

**Expected shape:** Recovery actions, retried MCP search, then official-domain-only fallback if still needed.

See also: [examples/mcp-fallback-request.md](examples/mcp-fallback-request.md)

### Example 5: Inspect upstream origin and support pack

```bash
python3 skills/openai-docs/scripts/omni_import_print_origin.py
python3 skills/openai-docs/scripts/omni_import_list_support_pack.py
```

**Expected shape:** A quick provenance and support-pack inventory that helps reviewers confirm lineage before merge or handoff.

## Best Practices

### Do

- Use the OpenAI docs MCP tools first for OpenAI-related questions.
- Fetch the exact section that supports the answer, not just a top-level page.
- Cite every substantive claim to an official OpenAI page.
- Treat local references as helper context only.
- Verify model recommendations against current models and pricing pages before answering.
- Prefer current OpenAI guidance for new builds, especially where the docs distinguish between modern and legacy-compatible paths.
- Call out conflicts between sources instead of silently reconciling them.
- Preserve uncertainty when the docs are incomplete.
- Keep handoff packets short, factual, and source-backed.

### Do Not

- Do not answer from memory when live docs are available.
- Do not present bundled helper notes as canonical if live docs differ.
- Do not browse unofficial domains for OpenAI documentation questions.
- Do not recommend a migration or upgrade path without verifying current official guidance.
- Do not claim undocumented model behavior, compatibility, or pricing.
- Do not force a model recommendation when the user has not given enough constraints.
- Do not continue using this skill as the sole tool once the task has become implementation-heavy.

## Troubleshooting

### Problem: The MCP server is not installed or not responding

**Symptoms:** OpenAI docs MCP tools are unavailable, fail immediately, or return no server connection.

**Solution:** Follow `references/openai-mcp-setup-and-recovery.md`. Attempt the documented install or recovery flow yourself first. If the command fails because of sandbox or permission boundaries, retry with escalation and a brief justification. Ask the user to run the install command only after your own constrained retry path fails.

### Problem: MCP search returns empty or low-value results

**Symptoms:** Searches return nothing relevant, broad irrelevant pages, or stale-looking results for a specific product area.

**Solution:** Tighten the query using product names, endpoint names, or feature terms. Try a second targeted query, then fetch the best matching page directly if known. If MCP still fails after a reasonable retry, fall back to official OpenAI domains only and cite the exact pages used.

### Problem: A known doc page or section cannot be fetched

**Symptoms:** You know the page exists, but fetch fails, an anchor is gone, or the path appears to have changed.

**Solution:** Use docs search to relocate the page or section by title and topic, then update the citation. Record moved pages or broken anchors in the handoff or review notes instead of silently ignoring the drift.

### Problem: Local helper notes conflict with current official docs

**Symptoms:** A bundled file such as `references/latest-model.md` or `references/upgrading-to-gpt-5p4.md` appears inconsistent with current OpenAI documentation.

**Solution:** Prefer the live official docs. State that the local file was helper context and that current docs took precedence. If the discrepancy matters for review or merge, record it explicitly in the evidence packet.

### Problem: Two official OpenAI pages appear inconsistent

**Symptoms:** Different official pages appear to give different recommendations, terminology, or examples.

**Solution:** Cite both pages. Prefer the page that is more specific to the user's task or appears more current in structure and scope. If you still cannot resolve the conflict confidently, state the uncertainty instead of normalizing it away.

### Problem: The user asks for implementation, not documentation

**Symptoms:** The conversation moves from "what do the docs say" to writing code, fixing bugs, or designing application-specific architecture.

**Solution:** Finish the docs pass, summarize the relevant sources, and hand off to a more appropriate implementation or architecture skill. Keep the evidence packet so the next skill does not have to rediscover the documentation basis.

## Related Skills

Use this skill first to gather authoritative OpenAI documentation and citations, then route onward if the work continues.

- `@chatgpt-apps` - When the question turns into building a ChatGPT app or integrating app-specific UI and tool flows.
- `@doc` - When the next step is producing or restructuring documentation rather than finding source evidence.
- `@aspnet-core` - When OpenAI guidance has been gathered and the next step is implementation inside an ASP.NET Core application.
- `@develop-web-game` - Only if the OpenAI docs lookup is complete and the actual task becomes game-specific implementation work.

## Additional Resources

### Official live docs

- [OpenAI developer documentation home](https://developers.openai.com/)
- [OpenAI API docs](https://platform.openai.com/docs)
- [Models overview](https://platform.openai.com/docs/models)
- [Responses vs Chat Completions](https://platform.openai.com/docs/guides/responses-vs-chat-completions)
- [Agents guide](https://platform.openai.com/docs/guides/agents)
- [Built-in tools guide](https://platform.openai.com/docs/guides/tools)
- [MCP guide](https://platform.openai.com/docs/guides/mcp)
- [Prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Rate limits guide](https://platform.openai.com/docs/guides/rate-limits)
- [Error codes guide](https://platform.openai.com/docs/guides/error-codes)
- [Quickstart](https://platform.openai.com/docs/quickstart)
- [Pricing](https://openai.com/api/pricing/)

### Local helper references

- [Official source map](references/openai-official-source-map.md)
- [Model selection source map](references/openai-model-selection-source-map.md)
- [Responses vs Chat Completions helper notes](references/responses-vs-chat-completions.md)
- [Agents and Tools routing map](references/openai-agents-tools-map.md)
- [MCP setup and recovery checklist](references/openai-mcp-setup-and-recovery.md)
- [Errors and rate limits helper notes](references/openai-errors-rate-limits.md)
- [Prompt-upgrade helper notes](references/openai-prompt-upgrade-notes.md)
- [Imported GPT-5.4 upgrade notes](references/upgrading-to-gpt-5p4.md)
- [Imported GPT-5.4 prompting notes](references/gpt-5p4-prompting-guide.md)
- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)

### Local examples and support files

- [Model-selection worked example](examples/model-selection-request.md)
- [API migration worked example](examples/api-migration-request.md)
- [MCP fallback worked example](examples/mcp-fallback-request.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)
- [Agent routing metadata](agents/openai.yaml)

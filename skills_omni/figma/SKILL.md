---
name: "figma"
description: "Figma MCP workflow skill. Use this skill when a task involves Figma URLs, file keys, or node IDs and you need to use the Figma MCP server to fetch design context, screenshots, variables, or assets, inspect component structure, or prepare implementation-ready design context. Use it for Figma MCP setup, authentication, scoping, and troubleshooting. Do not use it as the default skill for final pixel-perfect UI implementation from Figma; hand off to figma-implement-design after design context is gathered."
version: "0.0.1"
category: "design"
tags:
  - "figma"
  - "mcp"
  - "design"
  - "design-to-code"
  - "ui"
  - "screenshots"
  - "assets"
  - "node-id"
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
upstream_skill: "skills/figma"
upstream_author: "github.com/openai/skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Figma MCP

## Overview

Use this skill to work with the Figma MCP workflow safely and efficiently.

This skill is for:

- connecting a supported client to the Figma MCP server
- confirming authentication and file access
- extracting design context from a specific Figma file, frame, component, or node
- fetching screenshots, variables, and assets only after the target is clearly scoped
- preparing implementation-ready context for downstream coding skills
- troubleshooting MCP setup, authorization, node targeting, and large-response issues

This skill is intentionally **MCP-first**, not implementation-first. Start by identifying the exact Figma target, then retrieve structured context, then screenshots/assets, and only then move into implementation work.

Treat any generated code or implementation hints as **draft output**, not production-ready code. Final implementation should be adapted to the target repository's components, tokens, accessibility rules, state patterns, and framework conventions.

If the user primarily wants the final UI implemented from a Figma design, gather the design context here and then hand off to `@figma-implement-design`.

## When to Use This Skill

Use this skill when:

- the user provides a Figma URL, file key, frame link, or node ID
- you need to set up or verify a Figma MCP connection in a supported client
- you need to inspect a design's structure before writing code
- you need screenshots, variables, or assets from a specific frame or component
- you need to compare variants or inspect exact component usage in Figma
- you need a design-context packet for another implementation or review skill
- a previous Figma request failed because of auth, file access, bad node links, or oversized responses

Do **not** use this skill when:

- the task is pure pixel-perfect code implementation from a known Figma target and no MCP setup/exploration is needed; use `@figma-implement-design`
- the user wants general design critique, product strategy, or UX feedback without using Figma MCP
- the request is too ambiguous to identify a target frame, component, or file and the user cannot provide one
- the work has already moved into framework-specific coding, accessibility remediation, or test creation after the Figma context is complete

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time setup | `references/figma-mcp-setup-matrix.md` | Verifies client support, auth flow, and safe connection expectations |
| User gave a Figma link but scope is unclear | `references/figma-node-linking-and-scoping.md` | Helps extract file and node targeting before tool calls |
| Normal MCP workflow | `references/figma-mcp-workflow.md` | Follows the safest fetch order: target -> structure -> screenshot -> assets -> handoff |
| Tool output is too large, generic, or wrong | `references/figma-mcp-troubleshooting.md` | Provides narrowing and recovery steps |
| Need ready-to-use prompt patterns | `examples/figma-mcp-prompt-recipes.md` | Gives constrained prompts for common Figma tasks |
| Need implementation handoff | `examples/figma-mcp-review-handoff.md` | Preserves provenance, exact nodes used, and unresolved questions |
| Need phase-based routing | `agents/figma-router.md` | Routes to implementation, accessibility, frontend, or testing work |

## Workflow

1. **Confirm the target**
   - Ask for the exact Figma URL, file key, frame link, or node ID.
   - If the request is ambiguous, ask which frame, variant, or component is in scope.
   - Do not start with whole-file extraction unless the file is very small and the user explicitly wants that.

2. **Verify MCP readiness**
   - Confirm the operator is using a supported client and that Figma MCP is configured.
   - Confirm the user is signed in to Figma and can access the file in the browser or app.
   - If MCP calls fail immediately, troubleshoot connection/auth before asking for more design details.

3. **Start with structure, not code**
   - Fetch design metadata or structured context for the exact node or a narrowly scoped parent frame.
   - Identify component hierarchy, variants, text, layout patterns, variables, and reusable assets.
   - If the response is too large, narrow further to the exact node or inspect only metadata first.

4. **Fetch a screenshot for visual validation**
   - Request a screenshot of the exact target node, frame, or variant.
   - Use the screenshot to confirm that the selected node matches the user's intended UI.
   - If the screenshot is wrong, stop and correct the node selection before continuing.

5. **Fetch assets only when needed**
   - Retrieve only the images, SVGs, or exportable assets required for the current task.
   - If Figma provides the asset, use that source rather than substituting placeholder content or adding unrelated icon packs.
   - Validate each fetched asset against the screenshot and node selection.

6. **Prepare implementation-ready context**
   - Summarize hierarchy, spacing, typography, colors, states, variants, and asset dependencies.
   - Map design details into the target repo's design system and component vocabulary where possible.
   - Note ambiguities explicitly instead of guessing.

7. **Hand off or continue deliberately**
   - If the next phase is coding, hand off to `@figma-implement-design` or a frontend skill.
   - If the next phase is review, provide a provenance-rich brief with links, node IDs, screenshots, and unresolved questions.
   - If blocked, use the troubleshooting guide before widening scope.

## Examples

### Example 1: Verify setup before design retrieval

```text
Use @figma to verify that Figma MCP is configured correctly. Confirm the client is connected, that I am signed in to Figma, and that we can read this file link before fetching any design data: <figma-url>
```

**Expected outcome:** A short readiness check covering connection status, auth state, and file access, plus the next safe action.

### Example 2: Explore structure only

```text
Use @figma on this exact frame link: <figma-frame-url>. First fetch only the structure and design context for this node. Do not generate code yet. Summarize hierarchy, variants, text styles, spacing, variables, and reusable components.
```

**Expected outcome:** A scoped design-context summary without implementation output.

### Example 3: Get a screenshot for validation

```text
Use @figma with this node link: <figma-node-url>. Fetch a screenshot of the exact node and confirm whether it matches a mobile settings screen variant before proceeding.
```

**Expected outcome:** A screenshot-oriented validation step that catches wrong-node or wrong-variant issues early.

### Example 4: Build an implementation brief

```text
Use @figma on this component link: <figma-node-url>. Fetch design context first, then screenshot, then any required assets. Produce an implementation brief for handoff, including components to reuse, tokens to map, and unresolved ambiguities.
```

**Expected outcome:** A structured handoff packet suitable for `@figma-implement-design` or a frontend implementation skill.

## Best Practices

### Do

- ask for the exact Figma frame, component, or node whenever possible
- confirm the user can access the file before assuming the server is broken
- start with structure or metadata before requesting screenshots, assets, or code
- narrow requests to the smallest useful node scope
- validate screenshots and assets against the intended variant
- preserve provenance: record the file link, node IDs, and what was fetched
- translate design details into the target repository's existing components, tokens, and patterns
- state uncertainty clearly when a design is ambiguous or incomplete
- treat generated code as draft guidance, not final production output

### Don't

- do not request the entire file by default
- do not assume the first matching frame is the correct one
- do not continue if the screenshot obviously shows the wrong variant or screen
- do not add new icon packages or placeholders when source assets are already available from Figma
- do not hardcode secrets, tokens, or credentials into prompts or files
- do not present MCP-generated code as authoritative without repo-specific adaptation and review

### Implementation Notes

- Figma MCP output often resembles a design-oriented implementation sketch, sometimes in patterns like React plus utility classes. Adapt that output to the actual project stack.
- Reuse existing components such as buttons, inputs, typography wrappers, layout primitives, and icon containers instead of duplicating them.
- Replace generic styling output with the repo's tokens, variables, or design-system primitives where available.
- Respect existing routing, state management, API, localization, and accessibility conventions.
- Use screenshots and structured design context together; either one alone is often insufficient.

### Asset Handling

- If the MCP workflow returns an image or SVG source for the requested node, prefer that source over substitutions.
- Confirm that the returned asset belongs to the intended node or variant.
- If an asset is missing, check whether the selected layer is text, vector, nested inside another component, or not directly exportable before assuming MCP failure.

### Provenance and Handoff

Before handoff or review, capture:

- exact Figma file URL used
- exact frame or node URLs used
- any node IDs or variants referenced
- whether structure, screenshot, and assets were fetched
- unresolved ambiguities or missing states
- the recommended next skill or implementation phase

## Troubleshooting

### Problem: MCP is configured but the server does not respond correctly

**Symptoms:** Tool calls fail immediately, the client cannot connect, or Figma MCP appears unavailable.

**Solution:** Verify the client is supported, confirm the MCP entry is configured correctly, confirm the user is signed in to Figma, and restart the relevant client or Figma-side integration if needed. Re-run with a simple verification request before attempting full retrieval. See `references/figma-mcp-setup-matrix.md` and `references/figma-mcp-troubleshooting.md`.

### Problem: MCP connects, but the requested file cannot be read

**Symptoms:** The user appears authenticated, but the requested file or node cannot be accessed.

**Solution:** Check whether the user can open the file directly in Figma, whether they are signed into the correct account or workspace, and whether the shared link points to a file they can read. Distinguish file permission failures from general MCP failures.

### Problem: The wrong frame, component, or variant was fetched

**Symptoms:** The screenshot or structure does not match the user's intended UI, or the returned data is close but not correct.

**Solution:** Ask for the exact frame or layer link. Re-run the workflow on the specific node URL rather than the broader file. Use screenshot validation before requesting assets or implementation details.

### Problem: The response is too large, partial, or generic

**Symptoms:** Returned context is truncated, vague, or overloaded with irrelevant content.

**Solution:** Narrow the request to an exact node or smaller frame. Fetch metadata or structure first, then ask focused follow-up questions about only spacing, variables, hierarchy, or assets. Avoid broad whole-file translation requests.

### Problem: Assets are missing, wrong, or low fidelity

**Symptoms:** The returned asset does not match the screenshot, appears incomplete, or is missing entirely.

**Solution:** Re-check the selected node, confirm you are targeting the exportable asset layer, and compare the result to the screenshot. If needed, inspect the surrounding structure to identify whether the asset is nested, vector-based, or part of another component.

### Problem: The work has moved beyond context gathering

**Symptoms:** You already have design context, screenshots, and assets, and the remaining work is implementation, accessibility review, or testing.

**Solution:** Stop using this skill as the primary driver. Hand off to `@figma-implement-design`, an accessibility skill, or a frontend/testing skill as appropriate. Keep the Figma provenance packet with the handoff.

## Related Skills

- `@figma-implement-design` - Use after MCP context gathering when the main task becomes production UI implementation.
- `@accessibility` - Use after visual structure is known and accessibility review or remediation is needed.
- frontend or framework-specific implementation skills - Use when the work turns into React, Next.js, Vue, CSS, or component integration.
- design-system or token-mapping skills - Use when the main challenge is mapping Figma styles to a repo's design system.
- testing or QA skills - Use after implementation when visual verification, regression checks, or interaction testing is needed.

## Additional Resources

Use the local support pack as the default operational kit for this skill:

- [Figma MCP setup matrix](references/figma-mcp-setup-matrix.md)
- [Figma MCP workflow](references/figma-mcp-workflow.md)
- [Figma node linking and scoping](references/figma-node-linking-and-scoping.md)
- [Figma MCP troubleshooting](references/figma-mcp-troubleshooting.md)
- [Figma MCP prompt recipes](examples/figma-mcp-prompt-recipes.md)
- [Figma MCP review handoff template](examples/figma-mcp-review-handoff.md)
- [Figma phase router](agents/figma-router.md)

### External References

- Figma Dev Mode MCP Server guide
- Figma developer API overview
- Figma file nodes and images endpoint documentation
- OpenAI MCP server and tool-use guidance

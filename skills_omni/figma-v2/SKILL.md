---
name: "figma-v2"
description: "Figma MCP workflow skill. Use this skill when a task involves Figma URLs, node IDs, design-to-code implementation, or Figma MCP setup and troubleshooting, and you need to fetch scoped design context, screenshots, variables, and assets from Figma before adapting the result into production-ready code."
version: "0.0.1"
category: "design"
tags:
  - "figma-v2"
  - "figma"
  - "mcp"
  - "design-to-code"
  - "ui-implementation"
  - "design-systems"
  - "tokens"
  - "screenshots"
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
upstream_skill: "skills/figma-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Figma MCP

## Overview

Use this skill to work from Figma through an MCP-backed workflow: identify the exact file and node, fetch structured design context, capture a screenshot for visual verification, retrieve only the assets you actually need, and then translate the result into repository-native production code.

This skill preserves the original upstream intent while making the workflow more execution-ready for agents. It is an operational guide for using Figma MCP safely and predictably, with exact-node targeting, setup guidance, troubleshooting, and design-system-aware implementation rules.

Treat Figma output as source intent, not final code. The goal is to implement the design faithfully using the target repository's components, tokens, accessibility patterns, state conventions, and styling architecture.

For setup, security, and verification details, start with [references/figma-mcp-setup-and-verification.md](references/figma-mcp-setup-and-verification.md).

## When to Use This Skill

Use this skill when:

- A user gives you a Figma file URL, frame URL, or layer URL and wants implementation help.
- The request includes a Figma node ID or asks you to inspect a specific frame, component, or variant.
- You need screenshots, variables, component details, or design context from Figma before writing code.
- You need to translate Figma design output into production code that matches an existing design system or frontend stack.
- You need to troubleshoot Figma MCP setup, tool availability, permissions, malformed links, missing assets, or oversized responses.
- The task requires reviewable provenance showing which Figma inputs were used before code is merged or handed off.

Do not use this skill when:

- The task is generic UX ideation or open-ended design brainstorming with no concrete Figma target.
- The request is a repo-wide frontend refactor unrelated to a specific Figma node or design artifact.
- You already captured the relevant Figma context and the remaining work is purely framework-specific implementation or testing.
- The user cannot provide a valid Figma link, node, screenshot target, or access path and the task does not require Figma-backed retrieval.

Before starting, clarify:

- the exact frame or layer URL
- target platform and framework
- whether the user wants inspection, implementation, review, or troubleshooting
- whether an existing design system or component library must be reused

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time MCP setup or trust check | `references/figma-mcp-setup-and-verification.md` | Verifies local setup, auth handling, tool discovery, and expected connectivity before work starts |
| User provides only a broad file link | `references/figma-node-selection-and-url-guide.md` | Helps you request or derive the exact frame/layer link so you do not implement the wrong node |
| Normal design-to-code task | `references/figma-mcp-workflow.md` | Gives the recommended sequence: exact node -> design context -> screenshot -> assets/variables -> implementation -> validation |
| Token or theming-sensitive implementation | `references/figma-variables-and-token-mapping.md` | Prevents raw value copy/paste and encourages semantic token mapping |
| Tool errors, wrong node, permissions, truncation, or asset failures | `references/figma-mcp-troubleshooting.md` | Provides recovery actions instead of blind retries |
| Frontend handoff after design capture | `agents/figma-to-frontend-router.md` | Routes to downstream implementation and review skills once Figma context is established |

## Workflow

1. **Confirm scope and desired outcome**
   - Identify whether the user wants node inspection, screenshot parity, asset retrieval, variable extraction, implementation guidance, or troubleshooting.
   - Confirm the target repository, framework, styling method, and any design-system constraints.

2. **Verify the exact Figma target**
   - Prefer an exact frame or layer URL over a file-level URL.
   - Extract or verify the file key and node ID from the shared Figma link.
   - If the link is broad, ambiguous, or appears to target the wrong variant, ask for the exact frame/layer link before proceeding.

3. **Verify MCP availability before doing work**
   - Confirm the Figma MCP server is available in the current client.
   - Verify that expected tools are actually exposed in this environment.
   - Make sure required tool approvals are granted.
   - Never ask the user to paste access tokens into chat. Use the client's configured auth path instead.

4. **Fetch structured design context first**
   - Request structured context for the exact node or narrow set of nodes.
   - If the response is too large, fetch high-level metadata or node structure first, then re-fetch only the relevant subtree.
   - Avoid repeated whole-file retrieval when a node-scoped fetch will do.

5. **Fetch a screenshot for validation**
   - Capture a screenshot of the exact node or variant you intend to implement.
   - Use the screenshot to validate hierarchy, spacing, visual states, and variant selection before writing code.

6. **Inspect variables and retrieve only needed assets**
   - Identify variables, modes, and reusable component semantics before hardcoding values.
   - Pull image or SVG assets only after the target node is confirmed.
   - If the MCP flow returns a localhost or environment-local asset URL, treat it as temporary and do not ship that URL in production code or review artifacts.

7. **Translate into repo-native implementation**
   - Use the Figma output as design reference, not as final architecture.
   - Reuse existing components, tokens, typography primitives, layout utilities, and interaction patterns from the target codebase.
   - Map Figma variables to local design tokens instead of hardcoding raw values when equivalents exist.
   - Respect existing accessibility, responsive behavior, routing, state, and data-fetch patterns.

8. **Validate before handoff or merge**
   - Check visual parity against the screenshot.
   - Verify semantics, keyboard behavior, focus states, contrast, and responsive behavior.
   - Record which Figma node(s), screenshot(s), variables, and assets informed the implementation.

9. **Escalate deliberately when the task shifts**
   - If the work becomes framework-specific, accessibility-heavy, or design-system-governance-heavy, hand off with the captured Figma evidence instead of restarting from scratch.

## Examples

### Example 1: Implement from an exact Figma node

```text
Use @figma-v2 for this Figma task. Verify the exact frame URL and node ID first, fetch structured design context for that node, then fetch a screenshot of the same node. After that, identify any variables and assets needed, and adapt the implementation into this repository's existing component library and tokens instead of copying raw generated output.
```

See: [examples/figma-mcp-prompt-recipes.md](examples/figma-mcp-prompt-recipes.md)

### Example 2: Troubleshoot unavailable tools or denied access

```text
Use @figma-v2 to troubleshoot this Figma MCP issue. Check whether the MCP server is available in the client, whether tool approval is blocked, whether the shared link includes the correct file and node, and whether the user has permission to the file. Do not ask for tokens in chat.
```

See: [references/figma-mcp-troubleshooting.md](references/figma-mcp-troubleshooting.md)

### Example 3: Review an implementation against Figma

```text
Review this implementation against its Figma source using @figma-v2. Confirm the exact node, capture a screenshot, compare layout and visual hierarchy, verify token and component reuse, and report any accessibility or responsive-behavior mismatches before merge.
```

See: [examples/figma-parity-review-template.md](examples/figma-parity-review-template.md)

### Example 4: Prepare a handoff packet for downstream implementation

```text
Use @figma-v2 to collect the exact node URL, screenshot reference, variables or token notes, required assets, implementation assumptions, and any unresolved gaps, then package that context for the frontend implementation skill.
```

See: [examples/figma-handoff-packet.md](examples/figma-handoff-packet.md)

## Best Practices

### Do

- Start from the exact frame or layer link whenever possible.
- Verify MCP tool availability before starting the retrieval workflow.
- Fetch structured design context before screenshot, code generation, or asset download.
- Fetch a screenshot of the same node you are implementing.
- Narrow scope to exact node IDs or subtrees if responses are large or truncated.
- Treat generated code as reference material and adapt it into the local stack.
- Reuse existing components for buttons, inputs, typography, layout primitives, and icons where appropriate.
- Map Figma variables to local design tokens and document the mapping in implementation notes.
- Validate visual parity, interaction states, responsiveness, and accessibility before marking the task complete.
- Keep a short provenance note listing the file, node, screenshot, variables, and any assets used.

### Don't

- Do not implement from a vague file link when the exact target frame or variant is unclear.
- Do not paste or request Figma access tokens in chat, issues, PRs, screenshots, or review comments.
- Do not retry whole-file fetches repeatedly when the issue is scope, truncation, or rate limiting.
- Do not ship raw generated React or Tailwind output without adapting it to project conventions.
- Do not hardcode colors, spacing, typography, or radii from Figma if matching local tokens already exist.
- Do not add new icon packages or placeholders when the correct asset is already available from the Figma payload.
- Do not ship localhost or temporary asset URLs in production code, docs, or final review artifacts.
- Do not claim completion based on visual similarity alone; verify semantics and behavior too.

### Implementation rules

1. **Exact node first**
   - The shared link should point to the intended frame, component, or variant.
   - If it does not, stop and get the right link.

2. **Structured context first, screenshot second, assets and code after**
   - Fetch structured context for the node.
   - Fetch a screenshot of that same node.
   - Inspect variables and retrieve only required assets.
   - Only then start implementation.

3. **Design system over raw export**
   - Figma is the source of design intent.
   - The repository is the source of implementation conventions.
   - When the two conflict, preserve visual intent while using local primitives where possible.

4. **Asset handling must stay narrow and local-safe**
   - Download only the assets required for the current task.
   - Verify whether any returned asset URLs are temporary, localhost-based, or environment-bound before depending on them in production code.

5. **Validation must cover behavior, not just appearance**
   - Check state changes, hover, focus, pressed behavior, responsive adaptation, and semantic structure.

For deeper guidance, use:
- [references/figma-mcp-workflow.md](references/figma-mcp-workflow.md)
- [references/figma-variables-and-token-mapping.md](references/figma-variables-and-token-mapping.md)
- [references/figma-design-to-code-validation-checklist.md](references/figma-design-to-code-validation-checklist.md)

## Troubleshooting

### Problem: The MCP server is not available in the client

**Symptoms:** The expected Figma MCP tools do not appear, or tool calls cannot start.
**Solution:** Confirm the MCP server is configured in the current client, verify the server origin is the expected one, and check whether the client requires explicit enablement or trust approval. Restart the client or reconnect the server if needed, then re-test in the same workspace and account context. See [references/figma-mcp-setup-and-verification.md](references/figma-mcp-setup-and-verification.md).

### Problem: Tool approval is denied or blocked

**Symptoms:** The client shows approval-required, denied, or blocked tool execution even though the server appears configured.
**Solution:** Approve the server or tool through the client's MCP trust flow if appropriate. If policy or workspace restrictions block approval, stop and ask for an approved environment rather than attempting workarounds.

### Problem: The wrong frame, layer, or variant was fetched

**Symptoms:** The returned structure or screenshot does not match the intended UI, or the result reflects a sibling frame or the wrong component variant.
**Solution:** Re-check the shared URL and extract the exact node ID. Ask for a precise frame or layer link if the user provided only a file link. Use [references/figma-node-selection-and-url-guide.md](references/figma-node-selection-and-url-guide.md).

### Problem: Permission denied, file not found, or node not found

**Symptoms:** Requests fail with 403, 404, or similar errors; a file exists in Figma but cannot be retrieved through the MCP workflow.
**Solution:** Distinguish among three causes: missing file access, incorrect file key, or incorrect node ID. Confirm the share settings and that the link actually targets the intended file and node. Ask the user to grant access or resend the correct link instead of retrying blindly.

### Problem: The response is too large or appears truncated

**Symptoms:** Design context is incomplete, cut off, or too large to use reliably.
**Solution:** Stop requesting the whole file. Fetch metadata or high-level structure first, identify the exact subtree you need, and re-run the request against only that narrower scope. See [references/figma-mcp-workflow.md](references/figma-mcp-workflow.md).

### Problem: Requests are rate-limited or unstable

**Symptoms:** Calls fail intermittently, slow down, or return rate-limit-related errors after repeated attempts.
**Solution:** Reduce request breadth, avoid repeated whole-file fetches, and retry with backoff rather than hammering the server. Consolidate to one exact-node context fetch and one screenshot fetch where possible.

### Problem: Images or SVG assets are missing, broken, or localhost-only

**Symptoms:** The design context is available, but rendered images, fills, or exported assets are absent or unusable.
**Solution:** Diagnose asset retrieval separately from node retrieval. Confirm the node is correct, then check whether the asset is image-backed, exported separately, or provided through a temporary URL. If the workflow returns a local or environment-bound asset URL, use it only for local implementation as appropriate, then store the final asset in the repo or approved asset pipeline instead of shipping the localhost reference.

### Problem: The generated code looks visually close but is wrong for the repository

**Symptoms:** The output resembles the design but duplicates existing components, hardcodes values, or violates local accessibility or responsive conventions.
**Solution:** Re-implement using local primitives and token mappings. Use [references/figma-variables-and-token-mapping.md](references/figma-variables-and-token-mapping.md) and [references/figma-design-to-code-validation-checklist.md](references/figma-design-to-code-validation-checklist.md), then document which Figma variables were mapped to which local tokens.

## Related Skills

- `@frontend` - Use after Figma context is captured and the task becomes framework- or app-specific implementation.
- `@design-system` - Use when token governance, component reuse, or system-level design mapping becomes the primary task.
- `@accessibility` - Use when accessibility review or remediation becomes the dominant concern after visual implementation.
- `@react` - Use when the task is primarily React implementation after the Figma inputs have been scoped and validated.
- `@testing` - Use when visual, interaction, or regression testing becomes the next step after implementation.
- `@doc` - Use when you need to produce handoff notes, review packets, or implementation documentation.

## Additional Resources

### Core references

- [Figma MCP setup and verification](references/figma-mcp-setup-and-verification.md)
- [Figma MCP workflow](references/figma-mcp-workflow.md)
- [Figma node selection and URL guide](references/figma-node-selection-and-url-guide.md)
- [Figma variables and token mapping](references/figma-variables-and-token-mapping.md)
- [Figma design-to-code validation checklist](references/figma-design-to-code-validation-checklist.md)
- [Figma MCP troubleshooting](references/figma-mcp-troubleshooting.md)

### Worked examples

- [Figma MCP prompt recipes](examples/figma-mcp-prompt-recipes.md)
- [Figma handoff packet](examples/figma-handoff-packet.md)
- [Figma parity review template](examples/figma-parity-review-template.md)

### Handoff guidance

- [Figma to frontend router](agents/figma-to-frontend-router.md)

### Provenance note

This skill preserves the original upstream Figma MCP intent while curating it into an execution-oriented Omni Skills workflow. Keep provenance visible when the task requires auditability, but prioritize exact-node targeting, safe setup, structured retrieval, validation, and downstream handoff over generic import-review steps.

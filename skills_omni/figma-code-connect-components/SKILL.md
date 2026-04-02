---
name: "figma-code-connect-components"
description: "Code Connect Components workflow skill. Use this skill when a user needs to connect published Figma components to code components using Figma Code Connect mapping tools, review candidate matches safely, and create only user-approved mappings."
version: "0.0.1"
category: "development"
tags:
  - "figma-code-connect-components"
  - "figma"
  - "code-connect"
  - "component-mapping"
  - "design-to-code"
  - "mcp"
  - "react"
  - "ui-components"
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
upstream_skill: "skills/figma-code-connect-components"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Code Connect Components

## Overview

Use this skill to connect published Figma library components to their corresponding code components through Figma Code Connect.

This workflow is for mapping and approval, not for editing the Figma canvas or implementing missing code. It helps the operator:

- identify unmapped published Figma components
- inspect component properties and variants
- search the codebase for the best implementation match
- present candidate mappings to the user
- create mappings only after explicit user approval

This skill preserves the original imported intent while turning it into a safer, tool-aligned operating procedure.

## When to Use This Skill

Use this skill when the user asks to:

- "code connect" a component or component set
- connect a Figma component to an existing code component
- map design system components from Figma to a repository
- link Figma library components to React, Vue, Web Components, SwiftUI, Android, Flutter, or similar implementations
- review which Figma components are unmapped and propose code matches before writing mappings

Do **not** use this skill when the task is primarily to:

- edit the Figma canvas or change nodes in the design file
- generate a new design or screen from a prompt or code
- implement missing components in the application code
- refactor the codebase unrelated to Code Connect mapping

Use adjacent skills instead when scope shifts:

- For canvas writes or Plugin API edits: [figma-use](../figma-use/SKILL.md)
- For generating or updating designs: [figma-generate-design](../figma-generate-design/SKILL.md)
- For implementing product code from Figma: [figma-implement-design](../figma-implement-design/SKILL.md)

## Prerequisites

Before any mapping call, verify the blockers in [references/prerequisites-checklist.md](references/prerequisites-checklist.md).

Minimum requirements:

- Figma Code Connect is available to the user
- the target Figma component or component set is published to a team library
- the operator has MCP connectivity to Figma
- one valid scope source exists:
  - a Figma desktop selection through the MCP server, or
  - a Figma URL containing a `node-id`
- the codebase is available for inspection
- the operator can verify the target source file path and exported component name before writing mappings

Hard blockers:

- unpublished component or component set
- missing `node-id` when using a URL
- no desktop selection when relying on desktop MCP behavior
- insufficient Figma permissions
- Code Connect not available for the user's plan or workspace

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time execution | `references/prerequisites-checklist.md` | Prevents wasted tool calls when plan, library, permission, or selection prerequisites are missing |
| URL provided by user | `references/node-id-normalization.md` | Ensures correct `fileKey` extraction and `node-id` hyphen-to-colon normalization |
| Matching code components | `references/component-matching-rubric.md` | Gives a repeatable ranking method instead of guessing from filenames alone |
| Presenting mappings for approval | `examples/mapping-proposal-template.md` | Standardizes user-facing proposals and explicit approval gates |
| Partial acceptance or batch write | `examples/multi-component-batch-example.md` | Shows how to send only the approved subset |
| Failure triage | `references/troubleshooting-matrix.md` | Maps common symptoms and error strings to resolution steps |
| Scope drift or handoff | `agents/handoff-router.md` | Routes canvas-edit, implementation, or broader design work to the right skill |

## Workflow

Follow these steps in order.

### 1. Confirm activation boundary and prerequisites

Before calling any tool:

1. Confirm the user wants design-to-code mapping, not Figma editing or code implementation.
2. Verify Code Connect prerequisites.
3. Determine whether execution will use:
   - the current Figma desktop selection, or
   - a Figma URL with `fileKey` and `node-id`
4. If any blocker is present, stop and explain the missing prerequisite.

### 2. Resolve the target selection

#### Option A: Desktop selection path

If the MCP server is connected to the Figma desktop app and the user did not provide a URL:

- use the current Figma selection
- do not invent `fileKey` values
- ensure a node is actually selected in the desktop app before proceeding

#### Option B: URL path

If the user provided a Figma URL:

1. Extract the `fileKey` from the `/design/:fileKey/...` portion.
2. Extract `node-id` from the query string.
3. Convert the URL form from hyphens to the tool form with colons.

Example:

- URL: `...?node-id=42-15`
- Tool parameter: `nodeId="42:15"`

See [references/node-id-normalization.md](references/node-id-normalization.md) and [examples/url-parsing-examples.md](examples/url-parsing-examples.md).

### 3. Call `get_code_connect_suggestions` first

Use `get_code_connect_suggestions` before doing any mapping write.

Expected behavior:

- fetches component information from the Figma scenegraph
- identifies published components in the current selection
- filters out components already connected to code
- returns unmapped component names, node IDs, properties, and thumbnails

Stop conditions:

- If the response says **"No published components found in this selection"**, stop and tell the user the selected component may need to be published to a library first.
- If the response says **"All component instances in this selection are already connected to code via Code Connect"**, stop and report that there is nothing new to map.

### 4. Search the codebase for candidate matches

For each unmapped component:

1. Search likely component directories.
2. Inspect the best 2-3 candidates when no exact path is obvious.
3. Compare:
   - component name similarity
   - exported symbol name
   - framework or platform fit
   - prop interface and variant correspondence
   - default values and behavior
   - structural purpose, not just file naming
4. Verify the source file is repo-relative and exists.
5. Verify `componentName` matches the actual export used for the mapping.

Use the ranking guidance in [references/component-matching-rubric.md](references/component-matching-rubric.md).

### 5. Present proposed mappings and require approval

Never write mappings blindly.

Present each proposed mapping with:

- Figma component name
- Figma node ID
- proposed source file path
- proposed component/export name
- framework label
- one-sentence rationale for why it is the best match
- any ambiguity or close alternatives

Use [examples/mapping-proposal-template.md](examples/mapping-proposal-template.md).

Allowed user outcomes:

- approve all
- approve only specific mappings
- reject all
- provide corrected paths or exports

If the user does not approve a mapping, do not send it.

### 6. Validate the approved subset before writing

Before `send_code_connect_mappings`, check each approved mapping:

- `nodeId` is the exact Figma node in colon form
- `source` is relative to project root
- source file exists
- `componentName` matches the export or implementation name being mapped
- `label` matches the framework or platform accurately
- the mapping still reflects the user's approved selection

Use [references/framework-labels.md](references/framework-labels.md) for label guidance.

### 7. Call `send_code_connect_mappings` for only the approved mappings

Batch only the mappings the user explicitly accepted.

Example shape:

```text
send_code_connect_mappings(
  fileKey="kL9xQn2VwM8pYrTb4ZcHjF",
  nodeId="42:15",
  mappings=[
    { nodeId: "42:15", componentName: "Button", source: "src/components/Button.tsx", label: "React" }
  ]
)
```

If some mappings are ambiguous or rejected, leave them out of the batch.

### 8. Summarize the result

After the write attempt, provide a compact summary:

- successfully connected mappings
- mappings skipped by user choice
- mappings blocked by missing code match or validation issue
- any tool-reported errors that require follow-up

## Best Practices

### Do

- Start with `get_code_connect_suggestions` before searching or writing.
- Treat plan availability, publishing status, permissions, and selection scope as blockers.
- Compare Figma variants and properties to code props, defaults, and behavior.
- Verify exact export names before proposing `componentName` values.
- Show the user the file path, export name, and rationale before any write call.
- Batch only the mappings the user approved.
- Surface ambiguity explicitly when two candidates are close.
- Keep source paths relative to the repository root.

### Don't

- Don't create mappings from name similarity alone.
- Don't assume a Figma URL is valid if `node-id` is missing.
- Don't guess framework labels.
- Don't send every discovered candidate in one batch without review.
- Don't turn this skill into a code-generation or Figma-editing workflow.
- Don't claim a component is a match without checking its exported symbol and prop shape.

### Matching rubric

Use this priority order when ranking candidates:

1. exact or near-exact component purpose
2. valid exported symbol name for the proposed `componentName`
3. variant/property correspondence with the Figma component
4. framework or platform match
5. matching default states and implementation behavior
6. file naming and directory conventions

If multiple candidates are close, present both and ask the user to choose.

## Examples

### Example 1: Single React component from URL

User request:

```text
Connect this Figma button to code: https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15
```

Operator flow:

1. Extract `fileKey="kL9xQn2VwM8pYrTb4ZcHjF"`
2. Convert `node-id=42-15` to `nodeId="42:15"`
3. Call `get_code_connect_suggestions`
4. Inspect returned Button properties such as `variant` and `size`
5. Search the codebase and verify `src/components/Button.tsx` exports `Button`
6. Present the proposal for approval
7. After user approval, send only that mapping with label `React`

### Example 2: Partial approval in a multi-component selection

See the worked example in [examples/multi-component-batch-example.md](examples/multi-component-batch-example.md).

Key behavior:

- propose all credible matches
- let the user approve only some
- send only the approved subset
- summarize both connected and skipped components

### Example 3: URL parsing and normalization

See [examples/url-parsing-examples.md](examples/url-parsing-examples.md).

This is the safe pattern when a user provides a Figma link and the operator must normalize `node-id` correctly before calling tools.

### Example 4: User-facing proposal template

Use [examples/mapping-proposal-template.md](examples/mapping-proposal-template.md) to present candidate mappings consistently.

## Troubleshooting

### Problem: No published components found in this selection

**Symptoms:** `get_code_connect_suggestions` returns "No published components found in this selection".

**Cause:** The selected node contains no published library components, or the component has not been published to a team library.

**Solution:** Ask the user to confirm the target is a published component or component set, then retry with the same selection or URL after publishing.

### Problem: Everything is already connected

**Symptoms:** The tool returns "All component instances in this selection are already connected to code via Code Connect".

**Cause:** There are no unmapped components in the selection.

**Solution:** Inform the user that nothing new needs mapping. If they expected changes, verify they selected the intended node or component set.

### Problem: URL parsing fails or mapping uses the wrong node

**Symptoms:** The tool rejects the target, returns no expected components, or the node appears wrong.

**Cause:** `node-id` was missing, malformed, or not converted from hyphen form to colon form.

**Solution:** Re-parse the URL, confirm `fileKey`, and convert `node-id=1-2` to `nodeId="1:2"`. See [references/node-id-normalization.md](references/node-id-normalization.md).

### Problem: Desktop MCP path does not find the expected component

**Symptoms:** The tool behaves as if no node is selected or uses the wrong scope.

**Cause:** The Figma desktop app is not open, the MCP session is not connected, or the wrong node is selected.

**Solution:** Ask the user to open Figma desktop, select the intended node, and retry. If available, switch to a URL-based flow for explicit targeting.

### Problem: Source file exists but mapping still fails

**Symptoms:** `send_code_connect_mappings` fails with an asset-not-found style error or the mapping does not resolve.

**Cause:** The proposed `componentName` does not match the file's actual export, or the path is not correct relative to the repository root.

**Solution:** Re-open the source file, confirm the export form, and verify the repo-relative path. Then resend only the corrected mapping.

### Problem: Component is already mapped

**Symptoms:** Error such as `CODE_CONNECT_MAPPING_ALREADY_EXISTS` or a message that the component is already mapped.

**Cause:** A mapping already exists for that published component.

**Solution:** Inform the user the component is already connected. Do not retry the same mapping blindly.

### Problem: Insufficient permissions

**Symptoms:** Error such as `CODE_CONNECT_INSUFFICIENT_PERMISSIONS`.

**Cause:** The user lacks edit access to the relevant Figma file or library.

**Solution:** Stop and ask the user to obtain the necessary permissions before retrying.

### Problem: Several code candidates look plausible

**Symptoms:** Multiple files appear to match by name, but behavior or props differ.

**Cause:** The repository has related components for different contexts, such as `Button`, `IconButton`, and `LinkButton`.

**Solution:** Present the 2 closest candidates, explain the differences, and ask the user to choose rather than guessing.

See the fuller matrix in [references/troubleshooting-matrix.md](references/troubleshooting-matrix.md).

## Related Skills

- [figma-use](../figma-use/SKILL.md) - Use when the task requires editing Figma canvas content.
- [figma-generate-design](../figma-generate-design/SKILL.md) - Use when the task is creating or updating a design, not mapping it.
- [figma-implement-design](../figma-implement-design/SKILL.md) - Use when the task is implementing code from design.

## Additional Resources

### Local support pack

- [Prerequisites checklist](references/prerequisites-checklist.md)
- [Node ID normalization note](references/node-id-normalization.md)
- [Component matching rubric](references/component-matching-rubric.md)
- [Framework labels reference](references/framework-labels.md)
- [Troubleshooting matrix](references/troubleshooting-matrix.md)
- [Mapping proposal template](examples/mapping-proposal-template.md)
- [URL parsing examples](examples/url-parsing-examples.md)
- [Multi-component batch example](examples/multi-component-batch-example.md)
- [Handoff router](agents/handoff-router.md)

### Official references

- [Figma Code Connect documentation](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)
- [Figma MCP Server: tools and prompts](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/)
- [Figma MCP overview](https://developers.figma.com/docs/mcp/)
- [Dev Mode MCP Server guide](https://help.figma.com/hc/en-us/articles/32132100833559-Dev-Mode-MCP-Server-Guide)
- [Create and publish libraries](https://help.figma.com/hc/en-us/articles/360025508373-Create-and-publish-libraries)

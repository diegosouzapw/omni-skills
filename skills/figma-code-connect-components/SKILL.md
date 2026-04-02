---
name: figma-code-connect-components
description: "Code Connect Components workflow skill. Use this skill when the user needs Connects Figma design components to code components using Code Connect mapping tools. Use when user says \"code connect\", \"connect this component to code\", \"map this component\", \"link component to code\", \"create code connect mapping\", or wants to establish mappings between Figma designs and code implementations. For canvas writes via use_figma, use figma-use and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["figma-code-connect-components", "connects", "figma", "design", "components", "using", "connect", "mapping"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "openai"
date_added: "2026-04-02"
date_updated: "2026-04-02"
---

# Code Connect Components

## Overview

This public intake copy packages `skills/.curated/figma-code-connect-components` from `https://github.com/openai/skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Code Connect Components

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Skill Boundaries, Prerequisites, Common Issues and Solutions, Understanding Code Connect.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Connects Figma design components to code components using Code Connect mapping tools. Use when user says "code connect", "connect this component to code", "map this component", "link component to code", "create code....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Fetches component info from the Figma scenegraph
2. Identifies published components in the selection
3. Checks existing Code Connect mappings and filters out already-connected components
4. Returns component names, properties, and thumbnail images for each unmapped component
5. URL format uses hyphens: node-id=1-2
6. Tool expects colons: nodeId=1:2
7. URL format: https://figma.com/design/:fileKey/:fileName?node-id=1-2

### Imported Workflow Notes

#### Imported: Required Workflow

**Follow these steps in order. Do not skip steps.**

### Step 1: Get Code Connect Suggestions

Call `get_code_connect_suggestions` to identify all unmapped components in a single operation. This tool automatically:

- Fetches component info from the Figma scenegraph
- Identifies published components in the selection
- Checks existing Code Connect mappings and filters out already-connected components
- Returns component names, properties, and thumbnail images for each unmapped component

#### Option A: Using `figma-desktop` MCP (no URL provided)

If the `figma-desktop` MCP server is connected and the user has NOT provided a Figma URL, immediately call `get_code_connect_suggestions`. No URL parsing is needed — the desktop MCP server automatically uses the currently selected node from the open Figma file.

**Note:** The user must have the Figma desktop app open with a node selected. `fileKey` is not passed as a parameter — the server uses the currently open file.

#### Option B: When a Figma URL is provided

Parse the URL to extract `fileKey` and `nodeId`, then call `get_code_connect_suggestions`.

**IMPORTANT:** When extracting the node ID from a Figma URL, convert the format:

- URL format uses hyphens: `node-id=1-2`
- Tool expects colons: `nodeId=1:2`

**Parse the Figma URL:**

- URL format: `https://figma.com/design/:fileKey/:fileName?node-id=1-2`
- Extract file key: `:fileKey` (segment after `/design/`)
- Extract node ID: `1-2` from URL, then convert to `1:2` for the tool

```
get_code_connect_suggestions(fileKey=":fileKey", nodeId="1:2")
```

**Handle the response:**

- If the tool returns **"No published components found in this selection"** → inform the user and stop. The components may need to be published to a team library first.
- If the tool returns **"All component instances in this selection are already connected to code via Code Connect"** → inform the user that everything is already mapped.
- Otherwise, the response contains a list of unmapped components, each with:
  - Component name
  - Node ID
  - Component properties (JSON with prop names and values)
  - A thumbnail image of the component (for visual inspection)

### Step 2: Scan Codebase for Matching Components

For each unmapped component returned by `get_code_connect_suggestions`, search the codebase for a matching code component.

**What to look for:**

- Component names that match or are similar to the Figma component name
- Component structure that aligns with the Figma hierarchy
- Props that correspond to Figma properties (variants, text, styles)
- Files in typical component directories (`src/components/`, `components/`, `ui/`, etc.)

**Search strategy:**

1. Search for component files with matching names
2. Read candidate files to check structure and props
3. Compare the code component's props with the Figma component properties returned in Step 1
4. Detect the programming language (TypeScript, JavaScript) and framework (React, Vue, etc.)
5. Identify the best match based on structural similarity, weighing:
   - Prop names and their correspondence to Figma properties
   - Default values that match Figma defaults
   - CSS classes or style objects
   - Descriptive comments that clarify intent
6. If multiple candidates are equally good, pick the one with the closest prop-interface match and document your reasoning in a 1-2 sentence comment before your tool call

**Example search patterns:**

- If Figma component is "PrimaryButton", search for `Button.tsx`, `PrimaryButton.tsx`, `Button.jsx`
- Check common component paths: `src/components/`, `app/components/`, `lib/ui/`
- Look for variant props like `variant`, `size`, `color` that match Figma variants

### Step 3: Present Matches to User

Present your findings and let the user choose which mappings to create. The user can accept all, some, or none of the suggested mappings.

**Present matches in this format:**

```
The following components match the design:
- [ComponentName](path/to/component): DesignComponentName at nodeId [nodeId](figmaUrl?node-id=X-Y)
- [AnotherComponent](path/to/another): AnotherDesign at nodeId [nodeId2](figmaUrl?node-id=X-Y)

Would you like to connect these components? You can accept all, select specific ones, or skip.
```

**If no exact match is found for a component:**

- Show the 2 closest candidates
- Explain the differences
- Ask the user to confirm which component to use or provide the correct path

**If the user declines all mappings**, inform them and stop. No further tool calls are needed.

### Step 4: Create Code Connect Mappings

Once the user confirms their selections, call `send_code_connect_mappings` with only the accepted mappings. This tool handles batch creation of all mappings in a single call.

**Example:**

```
send_code_connect_mappings(
  fileKey=":fileKey",
  nodeId="1:2",
  mappings=[
    { nodeId: "1:2", componentName: "Button", source: "src/components/Button.tsx", label: "React" },
    { nodeId: "1:5", componentName: "Card", source: "src/components/Card.tsx", label: "React" }
  ]
)
```

**Key parameters for each mapping:**

- `nodeId`: The Figma node ID (with colon format: `1:2`)
- `componentName`: Name of the component to connect (e.g., "Button", "Card")
- `source`: Path to the code component file (relative to project root)
- `label`: The framework or language label for this Code Connect mapping. Valid values include:
  - Web: 'React', 'Web Components', 'Vue', 'Svelte', 'Storybook', 'Javascript'
  - iOS: 'Swift UIKit', 'Objective-C UIKit', 'SwiftUI'
  - Android: 'Compose', 'Java', 'Kotlin', 'Android XML Layout'
  - Cross-platform: 'Flutter'
  - Docs: 'Markdown'

**After the call:**

- On success: the tool confirms the mappings were created
- On error: the tool reports which specific mappings failed and why (e.g., "Component is already mapped to code", "Published component not found", "Insufficient permissions")

**Provide a summary** after processing:

```
Code Connect Summary:
- Successfully connected: 3
  - Button (1:2) → src/components/Button.tsx
  - Card (1:5) → src/components/Card.tsx
  - Input (1:8) → src/components/Input.tsx
- Could not connect: 1
  - CustomWidget (1:10) - No matching component found in codebase
```

#### Imported: Overview

This skill helps you connect Figma design components to their corresponding code implementations using Figma's Code Connect feature. It analyzes the Figma design structure, searches your codebase for matching components, and establishes mappings that maintain design-code consistency.

#### Imported: Skill Boundaries

- Use this skill for `get_code_connect_suggestions` + `send_code_connect_mappings` workflows.
- If the task requires writing to the Figma canvas with Plugin API scripts, switch to [figma-use](../figma-use/SKILL.md).
- If the task is building or updating a full-page screen in Figma from code or a description, switch to [figma-generate-design](../figma-generate-design/SKILL.md).
- If the task is implementing product code from Figma, switch to [figma-implement-design](../figma-implement-design/SKILL.md).

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @figma-code-connect-components to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/figma-code-connect-components/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/figma-code-connect-components/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @figma-code-connect-components using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Connecting a Button Component

User says: "Connect this Figma button to my code: https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15"

**Actions:**

1. Parse URL: fileKey=`kL9xQn2VwM8pYrTb4ZcHjF`, nodeId=`42-15` → convert to `42:15`
2. Run `get_code_connect_suggestions(fileKey="kL9xQn2VwM8pYrTb4ZcHjF", nodeId="42:15")`
3. Response shows: Button component (unmapped) with `variant` (primary/secondary) and `size` (sm/md/lg) properties, plus a thumbnail image
4. Search codebase for Button components: Find `src/components/Button.tsx`
5. Read `Button.tsx` and confirm it has `variant` and `size` props
6. Present to user:
   ```
   I found a match:
   - [Button](src/components/Button.tsx): Button at nodeId [42:15](https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15)

   Would you like to connect this component?
   ```

7. User confirms: "Yes"
8. Detect that it's a TypeScript React component
9. Run `send_code_connect_mappings(fileKey="kL9xQn2VwM8pYrTb4ZcHjF", nodeId="42:15", mappings=[{ nodeId: "42:15", componentName: "Button", source: "src/components/Button.tsx", label: "React" }])`

**Result:** Figma button component is now connected to the code Button component.

### Example 2: Multiple Components with Partial Selection

User says: "Connect components in this frame: https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Components?node-id=10-50"

**Actions:**

1. Parse URL: fileKey=`pR8mNv5KqXzGwY2JtCfL4D`, nodeId=`10-50` → convert to `10:50`
2. Run `get_code_connect_suggestions(fileKey="pR8mNv5KqXzGwY2JtCfL4D", nodeId="10:50")`
3. Response shows 3 unmapped components: ProductCard, Badge, and CustomWidget
4. Search codebase:
   - ProductCard: Found `src/components/ProductCard.tsx` (props match)
   - Badge: Found `src/components/Badge.tsx` (props match)
   - CustomWidget: No matching component found
5. Present to user:
   ```
   The following components match the design:
   - [ProductCard](src/components/ProductCard.tsx): ProductCard at nodeId [10:51](https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Components?node-id=10-51)
   - [Badge](src/components/Badge.tsx): Badge at nodeId [10:52](https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Components?node-id=10-52)

   I couldn't find a match for CustomWidget (10:53).

   Would you like to connect these components? You can accept all, select specific ones, or skip.
   ```

6. User: "Just connect ProductCard, skip Badge for now"
7. Run `send_code_connect_mappings(fileKey="pR8mNv5KqXzGwY2JtCfL4D", nodeId="10:50", mappings=[{ nodeId: "10:51", componentName: "ProductCard", source: "src/components/ProductCard.tsx", label: "React" }])`

**Result:** Only ProductCard is connected, per the user's selection.

### Example 3: Component Needs Creation

User says: "Connect this icon: https://figma.com/design/8yJDMeWDyBz71EnMOSuUiw/Icons?node-id=5-20"

**Actions:**

1. Parse URL: fileKey=`8yJDMeWDyBz71EnMOSuUiw`, nodeId=`5-20` → convert to `5:20`
2. Run `get_code_connect_suggestions(fileKey="8yJDMeWDyBz71EnMOSuUiw", nodeId="5:20")`
3. Response shows: CheckIcon component (unmapped) with color and size properties
4. Search codebase for CheckIcon: No matches found
5. Search for generic Icon components: Find `src/icons/` directory with other icons
6. Report to user: "I couldn't find a CheckIcon component, but I found an icons directory at src/icons/. Would you like to:
   - Create a new CheckIcon.tsx component first, then connect it
   - Connect to a different existing icon
   - Provide the path to the CheckIcon if it exists elsewhere"
7. User provides path: "src/icons/CheckIcon.tsx"
8. Detect language and framework from the file
9. Run `send_code_connect_mappings(fileKey="8yJDMeWDyBz71EnMOSuUiw", nodeId="5:20", mappings=[{ nodeId: "5:20", componentName: "CheckIcon", source: "src/icons/CheckIcon.tsx", label: "React" }])`

**Result:** CheckIcon component is successfully connected to the Figma design.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Props align (variant types, size options, etc.)
- Component hierarchy matches (nested elements)
- The component serves the same purpose
- What you found
- Why it's a good match
- What the mapping will do
- How props will be connected

### Imported Operating Notes

#### Imported: Best Practices

### Proactive Component Discovery

Don't just ask the user for the file path — actively search their codebase to find matching components. This provides a better experience and catches potential mapping opportunities.

### Accurate Structure Matching

When comparing Figma components to code components, look beyond just names. Check that:

- Props align (variant types, size options, etc.)
- Component hierarchy matches (nested elements)
- The component serves the same purpose

### Clear Communication

When offering to create a mapping, clearly explain:

- What you found
- Why it's a good match
- What the mapping will do
- How props will be connected

### Handle Ambiguity

If multiple components could match, present options rather than guessing. Let the user make the final decision about which component to connect.

### Graceful Degradation

If you can't find an exact match, provide helpful next steps:

- Show close candidates
- Suggest component creation
- Ask for user guidance

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `skills/.curated/figma-code-connect-components`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@aspnet-core` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@chatgpt-apps` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@develop-web-game` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@doc` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/mapping-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/normalize_node_id.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/figma-small.svg` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Additional Resources

For more information about Code Connect:

- [Code Connect Documentation](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)
- [Figma MCP Server Tools and Prompts](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/)

#### Imported: Prerequisites

- Figma MCP server must be connected and accessible
- User must provide a Figma URL with node ID: `https://figma.com/design/:fileKey/:fileName?node-id=1-2`
  - **IMPORTANT:** The Figma URL must include the `node-id` parameter. Code Connect mapping will fail without it.
- **OR** when using `figma-desktop` MCP: User can select a node directly in the Figma desktop app (no URL required)
- **IMPORTANT:** The Figma component must be published to a team library. Code Connect only works with published components or component sets.
- **IMPORTANT:** Code Connect is only available on Organization and Enterprise plans.
- Access to the project codebase for component scanning

#### Imported: Common Issues and Solutions

### Issue: "No published components found in this selection"

**Cause:** The Figma component is not published to a team library. Code Connect only works with published components.
**Solution:** The user needs to publish the component to a team library in Figma:

1. In Figma, select the component or component set
2. Right-click and choose "Publish to library" or use the Team Library publish modal
3. Publish the component
4. Once published, retry the Code Connect mapping with the same node ID

### Issue: "Code Connect is only available on Organization and Enterprise plans"

**Cause:** The user's Figma plan does not include Code Connect access.
**Solution:** The user needs to upgrade to an Organization or Enterprise plan, or contact their administrator.

### Issue: No matching component found in codebase

**Cause:** The codebase search did not find a component with a matching name or structure.
**Solution:** Ask the user if the component exists under a different name or in a different location. They may need to create the component first, or it might be located in an unexpected directory.

### Issue: "Published component not found" (CODE_CONNECT_ASSET_NOT_FOUND)

**Cause:** The source file path is incorrect, the component doesn't exist at that location, or the componentName doesn't match the actual export.
**Solution:** Verify the source path is correct and relative to the project root. Check that the component is properly exported from the file with the exact componentName specified.

### Issue: "Component is already mapped to code" (CODE_CONNECT_MAPPING_ALREADY_EXISTS)

**Cause:** A Code Connect mapping already exists for this component.
**Solution:** The component is already connected. If the user wants to update the mapping, they may need to remove the existing one first in Figma.

### Issue: "Insufficient permissions to create mapping" (CODE_CONNECT_INSUFFICIENT_PERMISSIONS)

**Cause:** The user does not have edit permissions on the Figma file or library.
**Solution:** The user needs edit access to the file containing the component. Contact the file owner or team admin.

### Issue: Code Connect mapping fails with URL errors

**Cause:** The Figma URL format is incorrect or missing the `node-id` parameter.
**Solution:** Verify the URL follows the required format: `https://figma.com/design/:fileKey/:fileName?node-id=1-2`. The `node-id` parameter is required. Also ensure you convert `1-2` to `1:2` when calling tools.

### Issue: Multiple similar components found

**Cause:** The codebase contains multiple components that could match the Figma component.
**Solution:** Present all candidates to the user with their file paths and let them choose which one to connect. Different components might be used in different contexts (e.g., `Button.tsx` vs `LinkButton.tsx`).

#### Imported: Understanding Code Connect

Code Connect establishes a bidirectional link between design and code:

**For designers:** See which code component implements a Figma component
**For developers:** Navigate from Figma designs directly to the code that implements them
**For teams:** Maintain a single source of truth for component mappings

The mapping you create helps keep design and code in sync by making these connections explicit and discoverable.

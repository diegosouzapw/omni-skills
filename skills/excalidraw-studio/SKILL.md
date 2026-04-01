---
name: excalidraw-studio
description: "Excalidraw Studio workflow skill. Use this skill when the user needs Generate Excalidraw diagrams from natural language descriptions. Outputs .excalidraw JSON files openable in Excalidraw. Use when asked to \"create a diagram\", \"make a flowchart\", \"visualize a process\", \"draw a system architecture\", \"create a mind map\", \"generate an Excalidraw file\", \"draw an ER diagram\", \"create a sequence diagram\", or \"make a class diagram\". Supports flowcharts, relationship diagrams, mind maps, architecture, DFD, swimlane, class, sequence, and ER diagrams. Can use icon libraries (AWS, GCP, etc.) when set up. Do NOT use for code architecture analysis (use the architecture skills), Mermaid diagram rendering (use mermaid-studio), or non-visual documentation (use docs-writer) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["excalidraw-studio", "generate", "excalidraw", "diagrams", "natural", "language", "descriptions", "outputs"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Felipe Rodrigues - github.com/felipfr"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Excalidraw Studio

## Overview

This public intake copy packages `packages/skills-catalog/skills/(tooling)/excalidraw-studio` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Excalidraw Studio Generate Excalidraw-format diagrams from natural language descriptions. Outputs .excalidraw JSON files that can be opened directly in Excalidraw (web, VS Code extension, or Obsidian plugin).

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Templates, Icon Libraries, Validation Checklist, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Generate Excalidraw diagrams from natural language descriptions. Outputs .excalidraw JSON files openable in Excalidraw. Use when asked to "create a diagram", "make a flowchart", "visualize a process", "draw a system....
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

1. Diagram type — Use the decision matrix below
2. Key elements — Entities, steps, concepts, actors
3. Relationships — Flow direction, connections, hierarchy
4. Complexity — Number of elements (target: under 20 for clarity)
5. User Intent - Diagram Type - Keywords
6. Process flow, steps - Flowchart - "workflow", "process", "steps"
7. Connections, dependencies - Relationship - "relationship", "connections", "dependencies"

### Imported Workflow Notes

#### Imported: Workflow

```
UNDERSTAND → CHOOSE TYPE → EXTRACT → GENERATE → SAVE
```

### Step 1: Understand the Request

Analyze the user's description to determine:

1. **Diagram type** — Use the decision matrix below
2. **Key elements** — Entities, steps, concepts, actors
3. **Relationships** — Flow direction, connections, hierarchy
4. **Complexity** — Number of elements (target: under 20 for clarity)

### Step 2: Choose the Diagram Type and Visual Mode

**Diagram type:**

| User Intent                | Diagram Type         | Keywords                                      |
| -------------------------- | -------------------- | --------------------------------------------- |
| Process flow, steps        | **Flowchart**        | "workflow", "process", "steps"                |
| Connections, dependencies  | **Relationship**     | "relationship", "connections", "dependencies" |
| Concept hierarchy          | **Mind Map**         | "mind map", "concepts", "breakdown"           |
| System design              | **Architecture**     | "architecture", "system", "components"        |
| Data movement              | **Data Flow (DFD)**  | "data flow", "data processing"                |
| Cross-functional processes | **Swimlane**         | "business process", "swimlane", "actors"      |
| Object-oriented design     | **Class Diagram**    | "class", "inheritance", "OOP"                 |
| Interaction sequences      | **Sequence Diagram** | "sequence", "interaction", "messages"         |
| Database design            | **ER Diagram**       | "database", "entity", "data model"            |

**Visual mode** — decide upfront and apply consistently to all elements:

| Mode       | `roughness` | `fontFamily` | When to use                                          |
| ---------- | ----------- | ------------ | ---------------------------------------------------- |
| **Sketch** | `1`         | `5`          | Default — informal, approachable, Excalidraw-native  |
| **Clean**  | `0`         | `2`          | Executive presentations, formal specs                |
| **Mixed**  | zones: `0`, shapes: `1` | `5` | Architecture diagrams (structural zones + sketchy shapes) |

### Step 3: Extract Structured Information

Extract the key components based on diagram type. For each type, identify:

- **Nodes/entities** — What are the boxes/shapes?
- **Connections** — What connects to what, and with what label?
- **Hierarchy** — What contains what, what comes before what?
- **Decision points** — Where does the flow branch?

For detailed extraction guidelines per diagram type, read `references/element-types.md`.

### Step 4: Generate the Excalidraw JSON

**CRITICAL: Read `references/excalidraw-schema.md` before generating your first diagram.** It contains the correct element format, text container model, and binding system.

Key rules for generation:

1. **Text inside shapes** — Use `boundElements` on the shape and a separate text element with `containerId`. Never use a `label` shorthand:

   ```json
   [
     {
       "id": "step-1",
       "type": "rectangle",
       "x": 100, "y": 100, "width": 200, "height": 80,
       "boundElements": [{ "type": "text", "id": "text-step-1" }]
     },
     {
       "id": "text-step-1",
       "type": "text",
       "x": 130, "y": 128, "width": 140, "height": 24,
       "text": "My Step", "originalText": "My Step",
       "fontSize": 20, "fontFamily": 5,
       "textAlign": "center", "verticalAlign": "middle",
       "containerId": "step-1", "lineHeight": 1.25, "roundness": null
     }
   ]
   ```

2. **Arrow labels** — Also use `boundElements` + separate text element with `containerId`. Never use a `label` shorthand on arrows:

   ```json
   [
     {
       "id": "arrow-1",
       "type": "arrow",
       "x": 100, "y": 150,
       "points": [[0, 0], [200, 0]],
       "boundElements": [{ "type": "text", "id": "text-arrow-1" }]
     },
     {
       "id": "text-arrow-1",
       "type": "text",
       "x": 160, "y": 132, "width": 80, "height": 18,
       "text": "sends data", "originalText": "sends data",
       "fontSize": 14, "fontFamily": 5,
       "textAlign": "center", "verticalAlign": "middle",
       "containerId": "arrow-1", "lineHeight": 1.25, "roundness": null
     }
   ]
   ```

3. **Arrow bindings** — Use `startBinding`/`endBinding` (not `start`/`end`). Connected shapes must list the arrow in their `boundElements`:

   ```json
   {
     "id": "shape-1",
     "boundElements": [
       { "type": "text", "id": "text-shape-1" },
       { "type": "arrow", "id": "arrow-1" }
     ]
   }
   ```
   ```json
   {
     "id": "arrow-1",
     "type": "arrow",
     "startBinding": { "elementId": "shape-1", "focus": 0, "gap": 1 },
     "endBinding": { "elementId": "shape-2", "focus": 0, "gap": 1 }
   }
   ```

4. **Element order for z-index** — Always declare shapes first, arrows second, text elements last. This guarantees text renders on top and is never obscured by arrows or other shapes.

5. **Positioning** — Use grid-aligned coordinates (multiples of 20px when `gridSize: 20`). Leave 200-300px horizontal gap, 100-150px vertical gap between elements.

6. **Unique IDs** — Every element must have a unique `id`. Use descriptive IDs like `"step-1"`, `"decision-valid"`, `"arrow-1-to-2"`, `"text-step-1"`.

7. **Colors** — Use a consistent palette:

   | Role | Color | Hex |
   |------|-------|-----|
   | Primary entities | Light blue | `#a5d8ff` |
   | Process steps | Light green | `#b2f2bb` |
   | Important/Central | Yellow | `#ffd43b` |
   | Warnings/Errors | Light red | `#ffc9c9` |
   | Secondary | Cyan | `#96f2d7` |
   | Default stroke | Dark | `#1e1e1e` |

### Step 5: Save and Present

1. Save as `<descriptive-name>.excalidraw`
2. Provide a summary:

   ```
   Created: user-workflow.excalidraw
   Type: Flowchart
   Elements: 7 shapes, 6 arrows, 1 title
   Total: 14 elements

   To view:
   1. Visit https://excalidraw.com → Open → drag and drop the file
   2. Or use the Excalidraw VS Code extension
   3. Or open in Obsidian with the Excalidraw plugin
   ```

#### Imported: Templates

Pre-built templates are available in `assets/` for quick starting points. Use these when the diagram type matches — they provide correct structure and styling:

| Template         | File                                                   |
| ---------------- | ------------------------------------------------------ |
| Flowchart        | `assets/flowchart-template.json`                    |
| Relationship     | `assets/relationship-template.json`                 |
| Mind Map         | `assets/mindmap-template.json`                      |
| Data Flow (DFD)  | `assets/data-flow-diagram-template.json`            |
| Swimlane         | `assets/business-flow-swimlane-template.json`       |
| Class Diagram    | `assets/class-diagram-template.json`                |
| Sequence Diagram | `assets/sequence-diagram-template.json`             |
| ER Diagram       | `assets/er-diagram-template.json`                   |

Read a template when creating that diagram type for the first time. Use its structure as a base, then modify elements to match the user's request.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @excalidraw-studio to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/excalidraw-studio/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/excalidraw-studio/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @excalidraw-studio using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Diagram Type - Recommended - Maximum
- Flowchart steps - 3-10 - 15
- Relationship entities - 3-8 - 12
- Mind map branches - 4-6 - 8
- Sub-topics per branch - 2-4 - 6
- Flow direction: Left-to-right for processes, top-to-bottom for hierarchies
- Spacing: 200-300px horizontal, 100-150px vertical between elements

### Imported Operating Notes

#### Imported: Best Practices

### Element Count

| Diagram Type          | Recommended | Maximum |
| --------------------- | ----------- | ------- |
| Flowchart steps       | 3-10        | 15      |
| Relationship entities | 3-8         | 12      |
| Mind map branches     | 4-6         | 8       |
| Sub-topics per branch | 2-4         | 6       |

If the user's request exceeds maximum, suggest breaking into multiple diagrams:

> "Your request includes 15 components. For clarity, I recommend: (1) High-level architecture diagram with 6 main components, (2) Detailed sub-diagrams for each subsystem. Want me to start with the high-level view?"

### Layout

- **Flow direction**: Left-to-right for processes, top-to-bottom for hierarchies
- **Spacing**: 200-300px horizontal, 100-150px vertical between elements
- **Grid alignment**: Position on multiples of 20px for clean alignment
- **Margins**: Minimum 50px from canvas edge
- **Text sizing**: 28-36px titles, 18-22px labels, 14-16px annotations
- **Font**: Use `fontFamily: 5` (Excalifont) for hand-drawn consistency. Fallback to `1` (Virgil) if 5 is not supported.
- **Background zones**: For architecture diagrams, add semi-transparent dashed zone rectangles (`opacity: 35`, `strokeStyle: "dashed"`, `roughness: 0`) as the first elements in the array to create visual grouping regions. See `references/excalidraw-schema.md` → Background Zones.
- **Element order**: zones first → shapes → arrows → text elements (ensures correct z-index and text always renders on top)

### Common Mistakes to Avoid

- ❌ Using `label: { text: "..." }` shorthand on shapes or arrows — not supported by the Excalidraw parser
- ❌ Putting `text` directly on shape elements without `containerId`
- ❌ Using `start`/`end` for arrow bindings — use `startBinding`/`endBinding` with `elementId`/`focus`/`gap`
- ❌ Forgetting to add arrows to their connected shapes' `boundElements` arrays
- ❌ Omitting `originalText`, `lineHeight`, `autoResize`, or `backgroundColor: "transparent"` from text elements inside containers
- ❌ Omitting required base properties (`angle`, `strokeStyle`, `opacity`, `groupIds`, `frameId`, `index`, `isDeleted`, `seed`, `version`, `versionNonce`, `updated`, `link`, `locked`) — elements will not render
- ❌ Missing `"files": {}` at the top level of the JSON
- ❌ Using `roundness: { "type": 3 }` on ellipses — ellipses must use `roundness: null`
- ❌ Missing `lastCommittedPoint`, `startArrowhead`, `endArrowhead` on arrows
- ❌ Declaring text elements before arrows — text renders underneath and gets obscured
- ❌ Floating arrows without bindings (won't move with shapes)
- ❌ Overlapping elements (increase spacing)
- ❌ Inconsistent color usage (define palette upfront)
- ❌ Too many elements on one diagram (break into sub-diagrams)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(tooling)/excalidraw-studio`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue                         | Solution                                                                                      |
| ----------------------------- | --------------------------------------------------------------------------------------------- |
| Text not showing in shapes    | Use `boundElements` + separate text element with `containerId`, `originalText`, `lineHeight`  |
| Text hidden behind arrows     | Move text elements to end of `elements` array (after all arrows)                             |
| Arrows don't move with shapes | Use `startBinding`/`endBinding` with `elementId`, `focus: 0`, `gap: 1`                       |
| Shape not moving with arrows  | Add the arrow to the shape's `boundElements` array                                            |
| Elements overlap              | Increase spacing between coordinates                                                          |
| Text doesn't fit              | Increase shape width or reduce font size                                                      |
| Too many elements             | Break into multiple diagrams                                                                  |
| Colors look inconsistent      | Define color palette upfront, apply consistently                                              |

## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/element-types.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/.gitignore` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/business-flow-swimlane-template.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Icon Libraries

For professional architecture diagrams with service icons (AWS, GCP, Azure, etc.), icon libraries can be set up. Read `references/icon-libraries.md` when:

- User requests an AWS/cloud architecture diagram
- User mentions wanting specific service icons
- You need to check if icon libraries are available

#### Imported: Validation Checklist

Before delivering the diagram, verify:

- [ ] All elements have unique IDs
- [ ] Every element has ALL required base properties: `angle`, `strokeStyle`, `opacity`, `groupIds`, `frameId`, `index`, `isDeleted`, `link`, `locked`, `seed`, `version`, `versionNonce`, `updated`
- [ ] `index` values are assigned in order (`"a0"`, `"a1"`, …) with text elements getting higher values than shapes/arrows
- [ ] Top-level JSON includes `"files": {}`
- [ ] Shapes with text use `boundElements` + separate text element with `containerId`
- [ ] Text elements inside containers have `containerId`, `originalText`, `lineHeight: 1.25`, `autoResize: true`, `roundness: null`, `backgroundColor: "transparent"`
- [ ] Arrows use `startBinding`/`endBinding` (with `elementId`, `focus`, `gap`) when connecting shapes, plus `lastCommittedPoint: null`, `startArrowhead: null`, `endArrowhead: "arrow"`
- [ ] Connected shapes list the arrow in their `boundElements` arrays
- [ ] Element order: shapes → arrows → text elements (text always on top)
- [ ] Ellipses use `roundness: null` (not `{ "type": 3 }`)
- [ ] Coordinates prevent overlapping (check spacing)
- [ ] Text is readable (font size 16+)
- [ ] Colors follow consistent scheme
- [ ] File is valid JSON
- [ ] Element count is reasonable (<20 for clarity)

#### Imported: Limitations

- Complex curves are simplified to straight/basic curved lines
- Hand-drawn roughness is set to default (1)
- No embedded images in auto-generation (use icon libraries for service icons)
- Maximum recommended: 20 elements per diagram for clarity
- No automatic collision detection — use spacing guidelines

---
name: "excalidraw-studio"
description: "Excalidraw Studio workflow skill. Use this skill when a user needs a valid `.excalidraw` scene generated or revised from natural language, structured requirements, or an existing Excalidraw file. It supports flowcharts, relationship diagrams, mind maps, architecture diagrams, DFDs, swimlanes, class diagrams, sequence diagrams, and ER diagrams, and delivers scene JSON that can be opened in Excalidraw web, editor integrations, or downstream export workflows. Do not use it for Mermaid source generation, architecture analysis itself, or non-visual prose documentation."
version: "0.0.1"
category: "documentation"
tags:
  - "excalidraw-studio"
  - "excalidraw"
  - "diagram-generation"
  - "flowchart"
  - "architecture-diagram"
  - "sequence-diagram"
  - "class-diagram"
  - "er-diagram"
  - "mind-map"
  - "scene-json"
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
upstream_skill: "skills/excalidraw-studio"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Excalidraw Studio

## Overview

Use this skill to generate or safely edit Excalidraw scene files from user intent.

Its primary output is a valid `.excalidraw` JSON scene that opens in Excalidraw and preserves the structure Excalidraw expects: top-level scene data, element arrays, relevant `appState`, and `files` when attachments or embedded assets are involved.

This skill is best when the user wants a visual diagram artifact, not just a textual description. It is optimized for turning natural-language requests into Excalidraw-ready scenes, validating them conservatively, and handing off a file plus a short operator summary.

This curated version preserves the original skill intent and upstream provenance while shifting the operational center of gravity toward reliable scene generation, safe editing of existing scenes, and open-in-app validation.

## When to Use This Skill

Use this skill when you need to:

- create a new `.excalidraw` diagram from a natural-language request
- convert structured notes, entities, steps, actors, or relationships into a visual diagram
- revise an existing `.excalidraw` file without dropping important scene state
- prepare a diagram for Excalidraw web import, editor loading, or downstream export
- produce any of these diagram families:
  - flowchart
  - relationship diagram
  - mind map
  - architecture diagram
  - data flow diagram
  - swimlane diagram
  - class diagram
  - sequence diagram
  - ER diagram
- generate a primary source artifact in Excalidraw format, optionally with a secondary PNG or SVG preview if tooling is available

Do **not** use this skill when:

- the user wants Mermaid source or Mermaid rendering instead of Excalidraw
- the real task is architecture analysis, codebase reverse-engineering, or system decomposition before drawing
- the user wants prose documentation instead of a visual artifact
- the user needs polished raster illustration or general graphic design work rather than a diagram scene
- the request depends on unsupported icons, libraries, or attachments that are not actually available in the local workflow

## Operating Table

| Situation | Start here | Validate with | Deliverable |
| --- | --- | --- | --- |
| Create a new diagram from a prompt | `references/diagram-decision-matrix.md` | `references/json-validation-and-open-test.md` | New `.excalidraw` scene plus summary |
| Edit an existing scene safely | `references/edit-existing-scene.md` | `references/json-validation-and-open-test.md` | Patched `.excalidraw` preserving usable scene state |
| Confirm minimum scene structure | `references/excalidraw-scene-minimum.md` | `scripts/validate_excalidraw_json.py` | Strict JSON plus conservative scene-shape check |
| Troubleshoot import/open failures | `references/json-validation-and-open-test.md` | Excalidraw open/import test | Known-good or narrowed failure report |
| Choose diagram type from ambiguous user intent | `references/diagram-decision-matrix.md` | Workflow step 1 and step 2 below | Chosen archetype and assumptions |
| Use cloud/service icons or assets | `references/icon-libraries.md` | Manual open test and asset-presence check | Diagram using only actually available libraries/assets |
| Generate previews programmatically | `references/export-and-embed-notes.md` | Open test plus optional export flow | `.excalidraw` source, optionally SVG/PNG preview |
| Compare against known-good examples | `examples/minimal-valid-scenes/` | Diff against minimal examples and validator | Regression check or troubleshooting baseline |

## Workflow

1. **Understand the request**
   - Determine the target diagram type.
   - Extract entities, actors, lanes, decisions, hierarchy, or message flow.
   - Identify whether the user wants a new scene or an edit to an existing file.
   - Ask clarifying questions if key relationships, direction, or grouping are ambiguous.

2. **Choose the diagram archetype and visual mode**
   - Use `references/diagram-decision-matrix.md`.
   - Pick one primary archetype instead of mixing several diagram families unless the user explicitly wants a hybrid.
   - Choose a consistent visual mode:
     - sketch: Excalidraw-native default
     - clean: reduced roughness for more formal diagrams
     - mixed: structured zones with sketch-style working elements

3. **Extract a structured model before drawing**
   - For flow-oriented diagrams: steps, decisions, branches, start/end nodes.
   - For relationship diagrams: entities and labeled edges.
   - For sequence diagrams: participants, ordered messages, returns, notes.
   - For class diagrams: classes, fields, methods, inheritance, associations.
   - For ER diagrams: entities, keys, attributes, cardinality.
   - For swimlanes: lanes, responsibilities, cross-lane handoffs.

4. **Plan the layout before emitting JSON**
   - Keep the first pass readable rather than dense.
   - Target fewer than 20 major elements for a single diagram when possible.
   - Use left-to-right for process flow, top-to-bottom for hierarchies, and clear lane or zone separation for architecture and swimlanes.
   - Split large requests into multiple diagrams instead of forcing an unreadable canvas.

5. **Generate the Excalidraw scene JSON**
   - Produce a top-level scene object with `elements`, `appState`, and `files`.
   - Follow the minimum known-good structure in `references/excalidraw-scene-minimum.md`.
   - Use separate text elements bound to containers instead of inventing shorthand labels.
   - Use `startBinding` and `endBinding` for arrows when elements should stay attached.
   - Preserve consistent color, spacing, and z-order.

6. **If editing an existing scene, patch conservatively**
   - Preserve existing `files` unless you are certain they are unused.
   - Preserve relevant `appState` unless there is a clear reason to change it.
   - Avoid destructive rewrites of unrelated elements.
   - Prefer additive changes over full scene regeneration when the user asked for a revision.

7. **Validate before handoff**
   - Confirm the file is strict JSON.
   - Confirm top-level keys are present.
   - Run `python3 scripts/validate_excalidraw_json.py path/to/file.excalidraw` for a conservative structural check.
   - If a coding runtime is available and the Excalidraw package is in use, restore/normalize scene data with official helpers before export or delivery.
   - Open-test in Excalidraw web or another supported Excalidraw-capable environment when possible.

8. **Deliver the artifact cleanly**
   - Save as a descriptive filename such as `order-fulfillment-swimlane.excalidraw`.
   - Include:
     - diagram type
     - key assumptions
     - whether this was new or edited
     - any limitations, especially around icons or embedded assets
     - how to open or validate the file

## Diagram Type Selection

Use this quick map first, then consult the reference matrix for edge cases.

| User intent | Recommended diagram |
| --- | --- |
| Steps, approvals, decisions, workflow | Flowchart |
| Concepts branching from a theme | Mind map |
| Components and connections | Relationship or architecture diagram |
| Systems, boundaries, environments | Architecture diagram |
| Data movement between processes/stores | DFD |
| Multi-role business process | Swimlane |
| Objects, fields, methods, inheritance | Class diagram |
| Ordered interactions over time | Sequence diagram |
| Entities, attributes, keys, relationships | ER diagram |

## Generation Rules

### Scene-level rules

- Always emit strict JSON.
- Always include top-level `elements`, `appState`, and `files`.
- Treat `files` as required scene context even when empty.
- Use UTF-8 plain JSON with no comments or trailing commas.
- Keep `.excalidraw` source as the primary artifact.

### Element-level rules

- Every element must have a unique `id`.
- Use stable, descriptive IDs where practical.
- Prefer grid-aligned coordinates.
- Keep text as separate elements bound to their container.
- Put text elements after shapes and arrows so text is not hidden.
- Use arrow bindings when arrows should move with connected shapes.
- Keep labels concise enough to fit their containers.

### Text and binding rules

Do this:

- use `boundElements` for container ↔ text relationships
- use `containerId` on text elements inside shapes or attached to arrows
- use `startBinding` and `endBinding` for connected arrows

Do not do this:

- invent `label` shorthand on shapes or arrows
- place raw display text directly on non-text shape elements
- replace bound arrows with floating lines when the semantics are actual connections

### Editing rules

- Preserve existing scene attachments and embedded assets.
- Do not drop `files` just because the current edit does not touch them.
- Do not reset styling globally unless requested.
- If a scene is badly broken, keep a copy and repair incrementally rather than overwriting blindly.

## Examples

### Example 1: Create a new flowchart from a brief

```text
Create an Excalidraw flowchart for password reset: user submits email, system sends token, user opens link, system validates token, user sets new password, success confirmation.
```

Expected deliverable:

- a `.excalidraw` file
- flowchart classification
- short summary of assumptions and how to open it

### Example 2: Choose the right diagram family before drawing

```text
Visualize an e-commerce platform with web app, API, auth service, payment provider, warehouse system, and analytics pipeline.
```

Recommended handling:

- likely architecture diagram first
- possibly split into high-level architecture plus separate sequence or DFD if the user also wants runtime interactions

### Example 3: Validate a generated scene file

```bash
python3 scripts/validate_excalidraw_json.py examples/minimal-valid-scenes/flowchart.excalidraw
```

Expected result:

- successful JSON parse
- confirmation that top-level scene keys exist
- no critical warnings for a minimal scene

### Example 4: Edit an existing scene safely

```text
Update this existing Excalidraw architecture diagram by adding a Redis cache between the API and the database, but keep the current layout and styles.
```

Recommended handling:

- inspect existing scene structure first
- preserve `appState` and `files`
- add only the new shape, text, and arrows needed
- revalidate and open-test after patching

## Best Practices

### Do

- choose the diagram family before generating elements
- extract a structured model before writing scene JSON
- keep diagrams readable and split complex requests into multiple files
- preserve `files` and relevant `appState` when editing existing scenes
- validate with strict JSON parsing before blaming Excalidraw import behavior
- compare against known-good minimal examples when troubleshooting
- use official Excalidraw restoration/export helpers when coding against the Excalidraw package
- deliver the `.excalidraw` source even if you also provide a preview image

### Do not

- treat hand-written JSON as automatically valid just because it looks plausible
- promise cloud icons or image assets that are not actually available
- collapse a very large system into one unreadable diagram when multiple diagrams would be clearer
- overwrite an existing scene wholesale when a targeted patch will do
- confuse diagram generation with architecture reasoning itself

### Layout guidance

| Diagram type | Recommended | Maximum before splitting |
| --- | ---: | ---: |
| Flowchart steps | 3-10 | 15 |
| Relationship entities | 3-8 | 12 |
| Mind map branches | 4-6 | 8 |
| Sub-topics per branch | 2-4 | 6 |

Additional guidance:

- flow direction: left-to-right for processes, top-to-bottom for hierarchies
- spacing: roughly 200-300px horizontal and 100-150px vertical between primary elements
- margins: leave at least 50px from canvas edges
- text sizes: titles 28-36px, primary labels 18-22px, annotations 14-16px
- use consistent colors by semantic role, not random per-element styling

### Programmatic validation and export notes

If a runtime environment is available:

- use official Excalidraw utilities to restore scene data before downstream export
- keep exported SVG or PNG as a secondary review artifact, not the source of truth
- load libraries and assets only from known local or trusted sources already present in the workflow

## Troubleshooting

### Problem: Import rejects the file or the parser fails

**Symptoms:** Excalidraw refuses to open the file, or a local parser reports invalid JSON.

**Solution:**
- validate strict JSON first
- remove comments, trailing commas, and non-JSON wrappers
- confirm the file is plain `.excalidraw` JSON
- run `scripts/validate_excalidraw_json.py`
- check `references/json-validation-and-open-test.md`

### Problem: The file opens blank or only part of the scene appears

**Symptoms:** Import succeeds but the canvas is empty, incomplete, or missing expected elements.

**Solution:**
- confirm top-level `elements`, `appState`, and `files` exist
- compare against `references/excalidraw-scene-minimum.md`
- confirm required element relationships such as text containers and arrow bindings are present
- if a runtime is available, restore/normalize scene data with official utilities and retry

### Problem: Text is missing, misplaced, or hidden behind connectors

**Symptoms:** Labels do not appear inside shapes, arrow labels are absent, or text sits behind arrows.

**Solution:**
- use separate text elements rather than shorthand labels
- ensure text elements have the right `containerId`
- ensure containers list bound text in `boundElements`
- place text elements after shapes and arrows in the `elements` array

### Problem: Arrows do not stay attached to shapes

**Symptoms:** Moving a shape in Excalidraw leaves arrows behind or breaks the intended connection.

**Solution:**
- use `startBinding` and `endBinding`
- ensure connected shapes list the arrow in `boundElements` when needed
- avoid floating arrows when the intended behavior is attachment

### Problem: Embedded images or icon-based assets do not appear

**Symptoms:** The scene opens, but icons, images, or attachments are missing.

**Solution:**
- verify the referenced assets were actually bundled, not merely named
- preserve the top-level `files` object when editing
- review `references/icon-libraries.md`
- if assets are unavailable, replace them with text labels or simple shapes rather than claiming full fidelity

### Problem: The layout is technically valid but unreadable

**Symptoms:** Everything opens, but the diagram is cluttered, overlapping, or too dense to review.

**Solution:**
- reduce element count
- split the request into multiple diagrams
- increase spacing and introduce zones or lanes
- regenerate with a clear element budget and a single primary viewpoint

### Problem: Editing an existing scene caused style or state loss

**Symptoms:** The file still opens, but attachments, styles, or editor state were lost after modification.

**Solution:**
- revert to the prior file if available
- reapply the edit conservatively using `references/edit-existing-scene.md`
- preserve prior `files` and relevant `appState`
- prefer targeted patches over full regeneration

## Related Skills

- `@mermaid-studio` - use when the user explicitly wants Mermaid source or text-native diagrams
- architecture-focused skills - use when the real task is system analysis, decomposition, or code architecture review before drawing
- `@docs-writer` - use when the output should be prose documentation rather than a diagram artifact
- accessibility or visual-review skills - use after diagram generation if the user needs accessibility or presentation-focused review

## Additional Resources

### Local references

- [Minimum Excalidraw scene structure](references/excalidraw-scene-minimum.md)
- [JSON validation and open-test checklist](references/json-validation-and-open-test.md)
- [Safe editing of existing scenes](references/edit-existing-scene.md)
- [Export and embed notes](references/export-and-embed-notes.md)
- [Diagram decision matrix](references/diagram-decision-matrix.md)
- [Icon libraries notes](references/icon-libraries.md)

### Local examples

- [Minimal flowchart scene](examples/minimal-valid-scenes/flowchart.excalidraw)
- [Minimal sequence scene](examples/minimal-valid-scenes/sequence.excalidraw)
- [Minimal class diagram scene](examples/minimal-valid-scenes/class-diagram.excalidraw)
- [Minimal ER diagram scene](examples/minimal-valid-scenes/er-diagram.excalidraw)
- [Minimal mind map scene](examples/minimal-valid-scenes/mind-map.excalidraw)

### Local scripts

- [Conservative JSON and scene-shape validator](scripts/validate_excalidraw_json.py)

### Upstream and official references

- Excalidraw documentation: `https://docs.excalidraw.com/`
- Excalidraw scene `initialData` reference: `https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/initialdata`
- Excalidraw utilities reference: `https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/utils`
- Excalidraw repository: `https://github.com/excalidraw/excalidraw`

## Delivery Checklist

Before handoff, confirm:

- [ ] diagram type matches user intent
- [ ] file is strict JSON
- [ ] top-level `elements`, `appState`, and `files` exist
- [ ] IDs are unique
- [ ] text is modeled with text elements and container bindings
- [ ] connected arrows use binding fields where appropriate
- [ ] element order keeps text visible
- [ ] layout is readable at normal zoom
- [ ] existing `files` and relevant `appState` were preserved when editing
- [ ] the final response includes assumptions and open instructions

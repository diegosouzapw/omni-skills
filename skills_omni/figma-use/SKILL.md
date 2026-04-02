---
name: "figma-use"
description: "use_figma prerequisite skill for Figma Plugin API workflows. Load this skill before every usefigma call. Use it for any write operation or any read that requires JavaScript execution inside the Figma file context, including node creation or mutation, variables and tokens, components and variants, auto-layout changes, text updates, and programmatic file inspection."
version: "0.0.1"
category: "frontend"
tags:
  - "figma-use"
  - "figma"
  - "plugin-api"
  - "mandatory"
  - "prerequisite"
  - "design-systems"
  - "variables"
  - "components"
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
upstream_skill: "skills/figma-use"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# use_figma — Figma Plugin API Skill

## Overview

This skill is the mandatory prerequisite for `usefigma` tool usage.

Load this skill **before every `usefigma` call**. Do not call `usefigma` directly without first loading this skill. The wrapper runtime has important execution rules that differ from many standalone Figma plugin examples, and skipping those rules causes common, hard-to-debug failures.

Use this skill when the task requires JavaScript execution in the Figma file context, especially for:

- creating, editing, moving, or deleting nodes
- creating or binding variables and tokens
- creating components, variants, and instances
- modifying auto-layout, fills, strokes, effects, or styles
- updating text nodes or text styles
- inspecting pages, nodes, or file structure programmatically

If the task is to build or update a full page, screen, or multi-section layout from code, also load the related screen-building skill mentioned in your local environment. This skill covers the Plugin API execution rules; the screen-building skill covers higher-level composition workflow.

This curated copy preserves the upstream intent while presenting it in a tighter operational format for agents.

## When to Use This Skill

Use this trigger matrix before any `usefigma` call.

| Request type | Use this skill? | Also load another skill? | Why |
| --- | --- | --- | --- |
| Create, edit, delete, or restructure Figma nodes | Yes, always | Maybe | These are file-context writes and must follow runtime rules |
| Create variables, collections, modes, or bindings | Yes, always | Maybe | Variable work is stateful and benefits from inspect-first validation |
| Create or edit text nodes | Yes, always | Maybe | Text changes require explicit font loading and async care |
| Create components or variants | Yes, always | Maybe | Component work depends on sequencing, IDs, and validation |
| Read file structure using JavaScript traversal | Yes, always | No | This is a unique read that still requires Plugin API execution |
| Take a simple screenshot or inspect already-available metadata only | Usually no | No | If no `usefigma` execution is needed, this prerequisite is unnecessary |
| Build an entire screen or page from design-system assets | Yes | Yes, load the screen-building/design-generation skill too | This skill handles API safety; the other skill handles assembly workflow |
| General Figma advice with no file-context execution | No | No | No Plugin API call is needed |

### Use this skill when

- the user asks for a Figma write operation
- the user asks for a read that must run inside the file via JavaScript
- you need reliable IDs returned for later steps
- you must validate changes incrementally with metadata or screenshots
- the task involves variables, text, components, or auto-layout

### Do not use this skill by itself when

- the task is purely conceptual and no Figma file execution is needed
- you only need a screenshot or other already-available non-Plugin-API output
- the request should be routed to a higher-level Figma composition workflow in addition to this one

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Any first `usefigma` call | `references/page-and-async-rules.md` | Prevents wrong-page, page-reset, and unawaited-async failures |
| Any text creation or update | `references/text-and-font-rules.md` | Text mutations fail unless fonts are loaded correctly |
| Variables or token work | `references/variables-scope-cheatsheet.md` | Helps avoid bad scope, mode, and binding assumptions |
| Editor mismatch or unsupported API confusion | `references/editor-and-manifest-boundaries.md` | Clarifies design-vs-FigJam and runtime boundaries |
| Multi-step write workflow | `examples/return-schema-examples.md` | Provides structured return shapes for handoff and validation |
| Page discovery or page switching | `examples/page-inspection-and-switching.js.md` | Gives safe patterns for enumerating and switching pages |
| Text mutation workflow | `examples/text-create-update.js.md` | Demonstrates correct font loading and return output |
| Variable creation and binding | `examples/variables-create-bind-validate.js.md` | Demonstrates inspect → create → bind → validate |
| Task routing | `agents/related-skill-router.md` | Helps decide whether to also load adjacent Figma skills |

## Workflow

Follow this sequence for every non-trivial `usefigma` task.

1. **Decide whether `usefigma` is actually required.**
   If the task can be solved without file-context JavaScript execution, do not use the tool.
2. **Inspect before writing.**
   Read the current file state first: pages, top-level structure, existing components, variable collections, naming conventions, and relevant node IDs.
3. **Select the correct page explicitly.**
   If the target is not on the default first page, find the page and call `await figma.setCurrentPageAsync(page)` before reading or mutating nodes on that page.
4. **Prepare prerequisites.**
   Load fonts before text edits. Discover existing collections and modes before creating variables. Confirm editor/runtime boundaries before using node-specific APIs.
5. **Do one class of mutation per call.**
   Prefer separate calls for variables, components, text updates, layout composition, and cleanup.
6. **Return structured output.**
   Every mutating script must return created and mutated IDs in a structured object.
7. **Validate immediately.**
   Use metadata for structure and screenshots for visual verification after each meaningful step.
8. **Repair only the broken part.**
   If validation shows a problem, write a narrow fix script instead of recreating everything.
9. **Repeat until complete.**
   Continue inspect → mutate → validate in small steps.

### Standard mutation checklist

Before submitting a `usefigma` script, verify:

- the code uses `return` for output
- the code is not wrapped in an async IIFE
- all async APIs are awaited
- the correct page is selected explicitly if needed
- fonts are loaded before text mutation
- fills and strokes are cloned and reassigned, not mutated in place
- new top-level nodes are positioned intentionally, not dropped blindly at `(0,0)`
- every created or mutated node ID is returned
- the next validation step is already planned

### Validation map

| After this step | Validate with metadata | Validate with screenshot |
| --- | --- | --- |
| Page or file inspection | Pages, IDs, hierarchy, node counts | Usually not needed |
| Variable creation | Collection names, mode names, variable counts, scopes | Optional |
| Variable binding | Bound properties and target node IDs | Tokens resolve visually as expected |
| Component or variant creation | Variant names, properties, child structure | Variants visible and arranged clearly |
| Text updates | Node IDs, text properties, hierarchy | Clipping, overflow, spacing, font appearance |
| Layout composition | Parent-child structure, instance relationships, sizing properties | Overlap, clipping, spacing, alignment |

## Output Rules

### `return` is the output channel

The agent only receives the value you `return`.

- `console.log()` is not a reliable handoff channel
- `figma.notify()` is not implemented in this runtime
- thrown errors are captured automatically
- follow-up calls depend on returned IDs and summary fields

### Required return shape for writes

Every script that creates or mutates nodes should return something like:

```js
return {
  createdNodeIds: [],
  mutatedNodeIds: [],
  removedNodeIds: [],
  summary: "updated button variants",
  warnings: []
};
```

Use the smallest truthful payload that preserves auditability and supports the next step.

## Examples

### Example 1: Inspect pages before a write

```js
const pages = figma.root.children.map((p) => ({
  id: p.id,
  name: p.name,
  childCount: p.children.length
}));

return { pages };
```

**Expected outcome:** A structured list of pages you can use to choose the target page explicitly.

### Example 2: Switch to a specific page safely

```js
const page = figma.root.children.find((p) => p.name === "Design System");
if (!page) throw new Error("Page not found: Design System");

await figma.setCurrentPageAsync(page);

return {
  currentPageId: figma.currentPage.id,
  currentPageName: figma.currentPage.name
};
```

**Expected outcome:** The correct page is loaded before any traversal or mutation.

### Example 3: Create text with font loading

```js
await figma.loadFontAsync({ family: "Inter", style: "Regular" });

const text = figma.createText();
text.characters = "Hello";
figma.currentPage.appendChild(text);
text.x = 100;
text.y = 100;

return {
  createdNodeIds: [text.id],
  mutatedNodeIds: [],
  summary: "created greeting text"
};
```

**Expected outcome:** A text node is created without font-loading errors, and its ID is available for follow-up edits.

### Example 4: Discover variable collections before creating new ones

```js
const collections = await figma.variables.getLocalVariableCollectionsAsync();

return {
  collections: collections.map((c) => ({
    id: c.id,
    name: c.name,
    modeNames: c.modes.map((m) => m.name),
    variableCount: c.variableIds.length
  }))
};
```

**Expected outcome:** You learn the existing naming and mode conventions before adding more variables.

## Best Practices

### Do

- load this skill before every `usefigma` call
- inspect existing file conventions before creating new objects
- switch pages explicitly with `await figma.setCurrentPageAsync(page)` when needed
- load fonts before any text change
- keep scripts narrow and reversible
- return all affected node IDs for auditability and cleanup
- validate each mutation batch before proceeding
- separate component creation from larger layout composition when possible
- set variable scopes explicitly rather than relying on broad defaults
- capture returned values from APIs that produce new objects, such as paint-binding helpers

### Don't

- call `usefigma` without this prerequisite skill
- assume `figma.currentPage` still points to the prior page from a previous call
- mutate text without `await figma.loadFontAsync(...)`
- leave Promises unawaited
- use `figma.notify()` for output
- rely on `console.log()` as the handoff mechanism
- mutate fills or strokes in place without reassignment
- set `FILL` sizing before appending a child to the correct auto-layout parent
- create file-wide changes in one oversized script
- invent new variable conventions before inspecting the existing file

## Troubleshooting

### Problem: Node not found, wrong page content, or page appears empty

**Symptoms:** A known node ID cannot be found, traversal returns little or no content, or the script seems to operate on the wrong page.

**Solution:** The runtime may start each call on the first page. Re-discover the target page and call `await figma.setCurrentPageAsync(page)` before traversal or mutation. Then re-run a narrow inspection script to confirm page identity and node IDs.

### Problem: Text mutation throws or silently fails

**Symptoms:** Setting `characters`, `fontName`, or other text properties errors, or the text node does not update as expected.

**Solution:** Load every required font first with `await figma.loadFontAsync({ family, style })`. If text ranges use multiple fonts, inspect first and load every font involved before mutation.

### Problem: Script returns before changes are stable

**Symptoms:** Some changes are missing, inconsistent, or appear to happen after the returned result.

**Solution:** Check for unawaited async calls such as `loadFontAsync`, `setCurrentPageAsync`, or import operations. Await every Promise before returning.

### Problem: API or node type seems unavailable

**Symptoms:** A method, node type, or workflow from generic Figma examples does not work in the current context.

**Solution:** Check editor/runtime boundaries. Some APIs and node types differ between design files and FigJam, and some standalone plugin examples do not map directly to this wrapper runtime. Use `references/editor-and-manifest-boundaries.md` before changing approach.

### Problem: Variable exists but is not available where expected

**Symptoms:** A variable was created successfully, but it does not appear in the intended property picker or cannot be bound cleanly.

**Solution:** Inspect the collection, mode, and `variable.scopes`. Do not rely on broad defaults. Re-check that the variable was created in the expected collection and mode, then validate the binding target.

### Problem: Auto-layout sizing throws or is ignored

**Symptoms:** `FILL` or `HUG` sizing errors occur, or the sizing mode does not take effect.

**Solution:** Ensure the child has already been appended to the correct parent before setting layout sizing. Re-check whether the parent is actually an auto-layout frame and whether a prior `resize()` call reset sizing to fixed.

### Problem: The script failed and you want to retry immediately

**Symptoms:** A write script errors and the instinct is to rerun a modified version right away without inspection.

**Solution:** Stop and read the error first. This runtime is intended to be treated as atomic for failed scripts in the packaged workflow. Fix the exact issue, then retry with a narrow script. If the error is unclear, inspect metadata or screenshots before another write.

## Related Skills

- Load the higher-level Figma screen-building or design-generation skill as well when the task is full-screen or multi-section composition.
- Use adjacent Figma inspection or review skills when the task is analysis-only and does not require Plugin API writes.
- Use the router note in `agents/related-skill-router.md` when task scope expands beyond safe incremental Plugin API execution.

## Additional Resources

### Local support pack

- [Page and async rules](references/page-and-async-rules.md)
- [Text and font rules](references/text-and-font-rules.md)
- [Variables scope cheatsheet](references/variables-scope-cheatsheet.md)
- [Editor and manifest boundaries](references/editor-and-manifest-boundaries.md)
- [Return schema examples](examples/return-schema-examples.md)
- [Page inspection and switching examples](examples/page-inspection-and-switching.js.md)
- [Text create/update example](examples/text-create-update.js.md)
- [Variables create/bind/validate example](examples/variables-create-bind-validate.js.md)
- [Related skill router](agents/related-skill-router.md)

### Upstream and API references

Use the packaged references already present in this skill for deeper coverage, especially:

- `references/gotchas.md`
- `references/common-patterns.md`
- `references/plugin-api-patterns.md`
- `references/api-reference.md`
- `references/validation-and-recovery.md`
- `references/component-patterns.md`
- `references/variable-patterns.md`
- `references/text-style-patterns.md`
- `references/effect-style-patterns.md`
- `references/plugin-api-standalone.index.md`
- `references/plugin-api-standalone.d.ts`

Prefer loading only the specific reference files that materially affect the current task.

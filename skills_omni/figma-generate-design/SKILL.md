---
name: "figma-generate-design"
description: "Build or update full Figma screens from code, screenshots, or product descriptions using published design-system components, variables, and styles. Use this skill alongside figma-use when the deliverable is a complete page, view, or multi-section layout that should stay linked to the design system instead of being recreated with detached primitives."
version: "0.0.1"
category: "design"
tags:
  - "figma-generate-design"
  - "figma"
  - "design-system"
  - "screen-build"
  - "ui"
  - "tokens"
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
upstream_skill: "skills/figma-generate-design"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Build / Update Screens from Design System

## Overview

Use this skill to create or update a full screen in Figma from code, screenshots, or a product description while preserving design-system linkage.

The default goal is **not** to redraw the UI with local rectangles, ad hoc colors, and manual text styling. The goal is to assemble the screen from:

- published or existing **component instances**
- design-system **variables** for colors, spacing, radii, and sizing where available
- shared **text and effect styles**
- robust **Auto Layout, constraints, and layout grids** so the screen behaves predictably when edited

This skill is the preferred workflow when the user wants to:

- “write this page to Figma”
- “create in Figma from code”
- “push this screen to Figma”
- “build a landing page in Figma”
- “update the Figma screen to match the app”
- “translate this product page or dashboard view into Figma”

**Mandatory companion skill:** load `figma-use` before any `use_figma` work. That skill contains baseline execution rules and lower-level API patterns that still apply here.

## When to Use This Skill

Use this skill when:

- the deliverable is a **complete screen, page, or multi-section view** in Figma
- the result should remain **linked to a design system** through components, variables, and styles
- the source is application code, a running web app, screenshots, or a structured product description
- the job is to **build or update** a composed screen, not invent a new component library
- the screen should be assembled incrementally and validated section by section

Typical triggers:

- “Create this page in Figma from the codebase.”
- “Update the Figma screen to match production.”
- “Build this dashboard view in Figma using the design system.”
- “Turn this landing page into a Figma screen.”
- “Push this app screen to Figma.”

Do **not** use this skill when:

- the user wants to author **new reusable components or variants** from scratch
- the task is to generate **implementation code from a Figma design**
- the user wants a one-off visual mockup detached from the system
- the work is mainly about Code Connect mappings rather than screen assembly

## Prerequisites

Before starting, confirm:

- Figma MCP or equivalent Figma tooling is connected
- you have access to the target file and any linked team libraries
- the user provided one of the following:
  - a Figma file URL or file key
  - enough project context to locate the target file
- you have one of the following as source input:
  - relevant UI code
  - a runnable web app
  - screenshots
  - a clear screen description

Also confirm whether the screen should be:

- created as a **new frame**
- updated **in place**
- built for a specific **viewport or breakpoint**

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First build in an unfamiliar file | `references/design-system-preflight-checklist.md` | Confirms file access, library availability, naming patterns, and existing screen references before you create anything |
| Need variables or styles | `references/design-token-usage.md` | Reinforces token-first behavior and fallback rules |
| Multi-section responsive layout | `references/responsive-layout-patterns.md` | Helps you choose Auto Layout, fill/hug behavior, constraints, and grids correctly |
| Variant selection feels ambiguous | `references/component-variant-mapping.md` | Maps code props and defaults to the correct component instance state |
| Search returns nothing | `references/library-asset-troubleshooting.md` | Distinguishes missing assets from missing library access or publication |
| Ready for completion or handoff | `references/screen-qa-handoff-checklist.md` | Prevents visual-only signoff on detached or incomplete screens |
| Need worked examples | `examples/build-screen-from-code.md` / `examples/update-existing-screen.md` | Shows the workflow end to end |
| Task drifts to another specialization | `agents/related-skill-router.md` | Routes to the right related skill without losing context |

## Workflow

Follow these steps in order. Prefer small, reversible edits and validate after each major change.

### 1. Load context and identify the target screen

- Load `figma-use` first.
- Confirm the target file, page, and whether you are creating a new screen or updating an existing one.
- If building from code, read the relevant source files to understand:
  - page structure
  - sections
  - component usage
  - likely states and defaults
- Break the screen into major sections, for example:
  - header
  - hero
  - content rail
  - pricing grid
  - form section
  - footer

### 2. Run a design-system preflight before constructing anything

Before placing the first section, identify the likely sources for:

- **components**
- **variables**
- **styles**
- **existing comparable screens**

Use the checklist in [references/design-system-preflight-checklist.md](references/design-system-preflight-checklist.md).

Hard rule: do not assume an asset is absent until you have checked both:

- existing screens or instances in the file
- linked or published library assets discoverable through design-system search

### 3. Discover components first, preferably from existing screens

Preferred order:

1. inspect existing screens in the target file
2. inspect existing instances that already use the same system
3. only then fall back to broad design-system search

If the file already contains screens built with the same library, inspect those instances directly to get an authoritative component map.

Example pattern:

```js
const frame = figma.currentPage.findOne(n => n.name === "Existing Screen");
const uniqueSets = new Map();
frame.findAll(n => n.type === "INSTANCE").forEach(inst => {
  const mc = inst.mainComponent;
  const cs = mc?.parent?.type === "COMPONENT_SET" ? mc.parent : null;
  const key = cs ? cs.key : mc?.key;
  const name = cs ? cs.name : mc?.name;
  if (key && !uniqueSets.has(key)) {
    uniqueSets.set(key, { name, key, isSet: !!cs, sampleVariant: mc.name });
  }
});
return [...uniqueSets.values()];
```

When using design-system search, search broadly with synonyms such as:

- `button`, `cta`, `action`
- `card`, `panel`, `tile`
- `nav`, `tabs`, `pill`, `chip`
- `accordion`, `faq`
- `input`, `field`, `select`, `dropdown`
- `header`, `footer`, `hero`

Also inspect component properties. You need the exposed text, boolean, instance swap, and variant properties before overriding content or state.

### 4. Discover variables and styles before using local values

You usually need:

- color variables
- spacing or sizing variables
- radius variables
- text styles
- effect styles

Use [references/design-token-usage.md](references/design-token-usage.md) for the expected order of operations.

Important distinction:

- `figma.variables.getLocalVariableCollectionsAsync()` only reveals **local file variables**
- design-system search with variable discovery may reveal **published library variables** that are not local yet

If local variables appear empty, do **not** conclude that no variables exist.

For the most authoritative results, inspect bound variables and applied styles from existing screens.

Example pattern for styles in an existing frame:

```js
const frame = figma.currentPage.findOne(n => n.name === "Existing Screen");
const styles = { text: new Map(), effect: new Map() };
frame.findAll(() => true).forEach(node => {
  if ('textStyleId' in node && node.textStyleId) {
    const s = figma.getStyleById(node.textStyleId);
    if (s) styles.text.set(s.id, { name: s.name, id: s.id, key: s.key });
  }
  if ('effectStyleId' in node && node.effectStyleId) {
    const s = figma.getStyleById(node.effectStyleId);
    if (s) styles.effect.set(s.id, { name: s.name, id: s.id, key: s.key });
  }
});
return {
  textStyles: [...styles.text.values()],
  effectStyles: [...styles.effect.values()]
};
```

### 5. Set the layout model before populating sections

Before appending children, decide the layout approach for the wrapper and each section.

Use:

- **Auto Layout** for most section containers and nested content stacks
- **layout grids** for grid-based pages, landing pages, and multi-column marketing layouts
- **constraints** where child behavior should remain stable as a parent resizes
- **fill / hug / fixed** sizing deliberately, not by trial and error

Do this before adding many nodes. It is much easier to append content into a correct parent model than to repair a loosely built frame later.

See [references/responsive-layout-patterns.md](references/responsive-layout-patterns.md).

### 6. Create the page wrapper first

Do not build sections as loose top-level nodes and reparent them later across separate calls. Instead, create the wrapper first and then append each section directly into it.

Example:

```js
let maxX = 0;
for (const child of figma.currentPage.children) {
  maxX = Math.max(maxX, child.x + child.width);
}

const wrapper = figma.createFrame();
wrapper.name = "Homepage";
wrapper.layoutMode = "VERTICAL";
wrapper.primaryAxisAlignItems = "CENTER";
wrapper.counterAxisAlignItems = "CENTER";
wrapper.resize(1440, 100);
wrapper.layoutSizingHorizontal = "FIXED";
wrapper.layoutSizingVertical = "HUG";
wrapper.x = maxX + 200;
wrapper.y = 0;

return { success: true, wrapperId: wrapper.id };
```

If the source layout suggests a grid, set a layout grid on the wrapper or appropriate child sections before continuing.

### 7. Build one section per call

This is the core operating rule.

For each section:

1. get the wrapper by ID
2. import the needed components by key
3. import variables and styles by key where needed
4. create the section container with the correct layout model
5. append component instances
6. apply properties, tokens, and styles
7. append the finished section to the wrapper
8. return created or mutated node IDs

Example:

```js
const createdNodeIds = [];
const wrapper = await figma.getNodeByIdAsync("WRAPPER_ID_FROM_STEP_6");

const buttonSet = await figma.importComponentSetByKeyAsync("BUTTON_SET_KEY");
const primaryButton = buttonSet.children.find(c =>
  c.type === "COMPONENT" && c.name.includes("variant=primary")
) || buttonSet.defaultVariant;

const bgColorVar = await figma.variables.importVariableByKeyAsync("BG_COLOR_VAR_KEY");
const spacingVar = await figma.variables.importVariableByKeyAsync("SPACING_VAR_KEY");

const section = figma.createFrame();
section.name = "Header";
section.layoutMode = "HORIZONTAL";
section.setBoundVariable("paddingLeft", spacingVar);
section.setBoundVariable("paddingRight", spacingVar);

const bgPaint = figma.variables.setBoundVariableForPaint(
  { type: 'SOLID', color: { r: 0, g: 0, b: 0 } },
  'color',
  bgColorVar
);
section.fills = [bgPaint];

const btnInstance = primaryButton.createInstance();
section.appendChild(btnInstance);
wrapper.appendChild(section);
section.layoutSizingHorizontal = "FILL";

createdNodeIds.push(btnInstance.id, section.id);
return { success: true, createdNodeIds };
```

### 8. Prefer instance properties and swaps over manual edits

When a component exposes properties, use them.

- use `setProperties()` for text and boolean changes
- use the correct variant rather than editing an instance until it merely looks close
- use `swapComponent()` when updating existing screens to a newer or different approved component

For nested instances, inspect which nested nodes expose their own properties.

Example:

```js
const nestedHeading = cardInstance.findOne(n => n.type === "INSTANCE" && n.name === "Text Heading");
if (nestedHeading) {
  nestedHeading.setProperties({ "Text#2104:5": "Actual heading from source code" });
}
```

Only fall back to direct text editing when the text is not controlled by component properties.

Use [references/component-variant-mapping.md](references/component-variant-mapping.md) to map code props and defaults to component variants safely.

### 9. Validate after every section, then validate the whole screen

After each section:

- capture a screenshot of the section
- verify text is not clipped
- verify content does not overlap
- verify placeholder content is gone
- verify the intended variant is actually used
- verify styles and variables are applied, not replaced with local approximations

After the full composition:

- capture the entire screen
- compare against code, screenshots, or the running app
- check spacing, alignment, typography, color use, and section order
- confirm instances still point to the design system

Use [references/screen-qa-handoff-checklist.md](references/screen-qa-handoff-checklist.md).

### 10. Updating an existing screen

When updating rather than building from scratch:

1. inspect the existing screen structure
2. identify which sections can stay and which need change
3. prefer targeted updates over rebuilding
4. swap components or change properties before deleting nodes
5. keep node IDs and screen structure stable when practical
6. validate each changed section before moving on

Example:

```js
const existingButton = await figma.getNodeByIdAsync("EXISTING_BUTTON_INSTANCE_ID");
if (existingButton && existingButton.type === "INSTANCE") {
  const buttonSet = await figma.importComponentSetByKeyAsync("BUTTON_SET_KEY");
  const newVariant = buttonSet.children.find(c =>
    c.name.includes("variant=primary") && c.name.includes("size=lg")
  ) || buttonSet.defaultVariant;
  existingButton.swapComponent(newVariant);
}
return { success: true, mutatedNodeIds: [existingButton.id] };
```

### 11. Optional parallel workflow for web apps

If the source is a runnable **web app**, you can use a parallel workflow:

1. build the screen with this design-system-first workflow
2. capture a pixel reference from the running web app with `generate_figma_design`
3. use that capture as a visual accuracy reference
4. keep the design-system-backed build as the real deliverable
5. delete the temporary pixel-reference output once the linked screen is correct

Use this only when a browser-rendered source exists. For native apps or ordinary Figma updates, use the standard workflow without the parallel capture.

## Examples

### Example 1: Build a new screen from code

```text
Use @figma-generate-design with @figma-use to build the Settings page in Figma from the React source. Reuse existing design-system components, variables, and styles. Build one section at a time and validate each section with screenshots before moving on.
```

Expected outcome:

- a new Settings screen frame in Figma
- section containers built with Auto Layout
- buttons, inputs, and cards imported as instances
- spacing, color, and radius values bound to tokens where available

See: [examples/build-screen-from-code.md](examples/build-screen-from-code.md)

### Example 2: Update an existing screen to match production

```text
Use @figma-generate-design to update the existing Pricing page in Figma so it matches the live app. Preserve existing instances where possible, swap outdated variants, and revalidate the final frame against the current layout.
```

Expected outcome:

- targeted updates to an existing screen
- variant and property changes instead of unnecessary rebuilds
- final screenshots that match the current app structure and styling

See: [examples/update-existing-screen.md](examples/update-existing-screen.md)

### Example 3: Start token-first on a new section

```text
Build the hero section in Figma from the product spec, but first identify the button component, heading style, background token, spacing token, and any existing comparable section in the file before creating new nodes.
```

Expected outcome:

- the section starts from discovered assets, not guessed values
- the resulting frame is linked to components, styles, and variables

See: [examples/token-first-section-build.md](examples/token-first-section-build.md)

## Best Practices

### Do

- discover components, variables, and styles before creating local values
- inspect existing screens first when the file already uses the same system
- use Auto Layout and layout grids intentionally before filling in content
- use component instances instead of redrawing standard UI pieces
- bind variables for colors, spacing, and radii whenever those tokens exist
- apply text and effect styles instead of local formatting
- check code defaults before selecting a component variant
- update existing screens with swaps and property changes where possible
- validate both visual fidelity **and** design-system linkage before completion
- troubleshoot font and text-style issues before making spacing fixes that hide the root cause

### Don't

- assume missing local variables means the design system has no variables
- recreate a component with detached primitives because search was incomplete
- approve a screen just because it looks visually close in a zoomed-out screenshot
- leave placeholder text inside component instances
- use hardcoded hex values or arbitrary pixel spacing when a published token exists
- rebuild large sections unnecessarily when a targeted mutation would preserve lineage
- debug overlap or clipping only by nudging positions; fix the underlying layout model instead

## Troubleshooting

### Problem: Search returns nothing for components, variables, or styles

**Symptoms:** Design-system search looks empty, local variable APIs show no results, or expected assets do not appear in the target file.

**Solution:** Check whether the library is published, enabled, and accessible in the current file. Inspect existing screens for imported instances, styles, or bound variables before concluding the asset is missing. Use [references/library-asset-troubleshooting.md](references/library-asset-troubleshooting.md).

### Problem: The screen looks close, but it is detached from the design system

**Symptoms:** Colors, spacing, or text appear visually acceptable, but the nodes use local values, local styles, or detached primitives instead of design-system assets.

**Solution:** Replace local values with bound variables and shared styles. Swap manually built controls for real component instances. Re-run QA using [references/screen-qa-handoff-checklist.md](references/screen-qa-handoff-checklist.md) before signoff.

### Problem: Wrong variant was chosen because code defaults were missed

**Symptoms:** The UI is almost correct, but buttons, cards, or toggles use the wrong state, size, or emphasis compared with production.

**Solution:** Inspect the source component defaults, not just explicitly passed props. Then map those defaults to the Figma variant or component properties using [references/component-variant-mapping.md](references/component-variant-mapping.md).

### Problem: Layout overlaps, clips, or resizes unexpectedly

**Symptoms:** Text is cut off, children overlap, cards collapse, or resizing the parent produces broken alignment.

**Solution:** Recheck the parent layout model before nudging positions. Inspect Auto Layout direction, gaps, padding, fill/hug settings, min sizes, and constraints. For multi-column layouts, verify whether a layout grid should be present. Use [references/responsive-layout-patterns.md](references/responsive-layout-patterns.md).

### Problem: Typography looks wrong and spacing keeps drifting

**Symptoms:** Text wraps differently from the source, line lengths feel off, or content clips even though the structure appears correct.

**Solution:** Verify that the correct fonts are available and that the proper text styles are applied before changing layout spacing. Missing or substituted fonts can cause false layout problems.

### Problem: Updating an existing screen keeps breaking lineage

**Symptoms:** Existing components are deleted and recreated unnecessarily, instance links are lost, or reviewers cannot tell what changed.

**Solution:** Prefer targeted edits: inspect nodes, mutate properties, swap components, and preserve structure where practical. Capture before/after screenshots for changed sections, then run the final QA checklist.

## Related Skills

- [figma-use](../figma-use/SKILL.md) — required companion skill for lower-level Figma execution rules and API patterns
- [figma-implement-design](../figma-implement-design/SKILL.md) — use when the task is to generate implementation code from Figma
- [figma-code-connect-components](../figma-code-connect-components/SKILL.md) — use when the work is about Code Connect mappings and component-code linkage

See also: [agents/related-skill-router.md](agents/related-skill-router.md)

## Additional Resources

### Local references

- [Design system preflight checklist](references/design-system-preflight-checklist.md)
- [Design token usage](references/design-token-usage.md)
- [Responsive layout patterns](references/responsive-layout-patterns.md)
- [Component variant mapping](references/component-variant-mapping.md)
- [Library asset troubleshooting](references/library-asset-troubleshooting.md)
- [Screen QA and handoff checklist](references/screen-qa-handoff-checklist.md)

### Local examples

- [Build screen from code](examples/build-screen-from-code.md)
- [Update existing screen](examples/update-existing-screen.md)
- [Token-first section build](examples/token-first-section-build.md)

### External companion references

Load these from [figma-use](../figma-use/SKILL.md) as needed for lower-level API usage:

- `component-patterns.md`
- `variable-patterns.md`
- `text-style-patterns.md`
- `effect-style-patterns.md`
- `gotchas.md`

## Error Recovery

If a Figma operation fails:

1. stop and read the error carefully
2. do not immediately retry the same script unchanged
3. inspect current state with metadata or screenshots if needed
4. correct the script based on the failure mode
5. retry only the affected step

Because this workflow is incremental, failures should stay scoped to a single section or mutation. Preserve successful prior steps and continue from the smallest safe recovery point.

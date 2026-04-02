---
name: "figma-generate-library"
description: "Design System Builder — Figma MCP workflow skill. Use this skill when a user needs to build or update a professional-grade design system in Figma from a codebase, including variables/tokens, component libraries, theming, foundations documentation, and code-to-Figma reconciliation. This skill defines what to build and in what order; load it together with figma-use for the Plugin API execution details."
version: "0.0.1"
category: "design"
tags:
  - "figma-generate-library"
  - "figma"
  - "design-system"
  - "tokens"
  - "variables"
  - "components"
  - "theming"
  - "dev-mode"
  - "code-connect"
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
upstream_skill: "skills/figma-generate-library"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Design System Builder — Figma MCP Skill

## Overview

Use this skill to plan and execute a **variables-first, component-second** design-system build in Figma that stays aligned with an implementation codebase.

This skill is about **workflow orchestration and design-system decisions**:
- what to inspect first
- what to create next
- what must be approved before writes continue
- how to keep tokens, components, naming, and documentation aligned with code
- how to recover safely when a long Figma build is interrupted

This skill does **not** replace `figma-use`. Load `figma-use` alongside this skill for the exact Plugin API calling mechanics and tool syntax. In short:
- **`figma-generate-library`** = what to build, in what order, and with what quality gates
- **`figma-use`** = how to execute the Figma Plugin API calls correctly

Treat this as a multi-phase workflow. A serious library build is never a single call.

## When to Use This Skill

Use this skill when the user needs to:
- build a new Figma design system from an existing codebase
- update an existing Figma library to match current code tokens or components
- create Figma variables, collections, and theme modes from code tokens
- document foundations such as color, typography, spacing, radius, and elevation
- build reusable component libraries with variants and component properties
- reconcile differences between code, Figma, and subscribed libraries
- prepare a library for cleaner developer handoff through Dev Mode
- optionally add Code Connect after the component API is stable

Do **not** use this skill as the primary skill when the task is mainly:
- a one-off screen or mockup with no reusable system work
- low-level `use_figma` syntax or Plugin API debugging only
- frontend implementation of components in code
- a pure accessibility audit with no library-building work
- generic product or brand design not tied to a Figma system build

## Required Companion Skill

Load **`figma-use`** for every mutating Figma action.

This skill assumes the companion skill will enforce Plugin API details such as:
- returning IDs from writes
- resetting page context each call
- loading fonts before text writes
- handling color channels correctly
- avoiding unsupported runtime patterns

If `figma-use` is not loaded, stop before performing writes.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New build from code | `references/discovery-phase.md` | Forces a read-only discovery pass before any writes |
| Token and theme setup | `references/token-creation.md` | Establishes collections, modes, aliasing, scopes, and code syntax |
| Component creation | `references/component-creation.md` | Keeps component APIs scalable and avoids variant explosion |
| Foundations/docs pages | `references/documentation-creation.md` | Creates a navigable file structure before library expansion |
| Naming decisions | `references/naming-conventions.md` | Preserves determinism and code alignment |
| Resume after interruption | `references/error-recovery.md` | Rehydrates state safely before retrying |
| Optional code/design linking | `references/code-connect-setup.md` | Positions Dev Mode and Code Connect work after component stability |

## Workflow

Follow this phase order strictly. Do not skip ahead.

| Phase | Objective | Required reads | Writes allowed? | Exit criteria | User checkpoint |
| --- | --- | --- | --- | --- | --- |
| 0. Discovery | Audit code, Figma, and reusable assets | `references/discovery-phase.md`, `references/naming-conventions.md` | No | Scope, naming, and conflict map approved | Plan approval before creation |
| 1. Foundations | Create variables, modes, styles, and token semantics | `references/token-creation.md` | Yes | Agreed tokens exist with scopes and code syntax | Foundations approval |
| 2. File structure | Build cover, foundations, and component-page skeleton | `references/documentation-creation.md` | Yes | Pages and docs are navigable | File-structure approval |
| 3. Components | Build components one at a time in dependency order | `references/component-creation.md`, `references/naming-conventions.md` | Yes | Each component validated and approved before next | Per-component approval |
| 4. Integration and QA | Audit accessibility, naming, bindings, and handoff | `references/code-connect-setup.md`, `references/error-recovery.md` | Yes, narrowly | QA report clean or exceptions documented | Final sign-off |

### 1. Phase 0 — Discovery

**No writes in this phase.**

1. Analyze the codebase to extract:
   - token names and values
   - token layers: primitive vs semantic vs component-specific
   - component list and dependency order
   - naming conventions used in code
   - theme structure such as light/dark or brand modes
2. Inspect the target Figma file for:
   - existing pages
   - variable collections and modes
   - styles
   - components and variant patterns
   - current naming conventions
3. Search subscribed or existing libraries before rebuilding.
4. Compare code and Figma. If they disagree, do not silently choose one.
5. Propose a **v1 scope lock** containing:
   - token collections and modes to create
   - style types to create
   - pages to create
   - initial component list in build order
   - explicit conflicts requiring user choice
6. Stop and ask for approval before any creation.

### 2. Phase 1 — Foundations

Create foundations before components.

1. Create variable collections and modes.
2. Create primitive variables for raw values.
3. Create semantic variables as aliases to primitives where applicable.
4. Set variable scopes explicitly. Do not leave broad defaults unless justified.
5. Set code syntax on variables using code-aligned names.
6. Create text and effect styles if they are part of the agreed scope.
7. Validate counts, names, modes, and alias relationships.
8. Present a summary and wait for approval.

### 3. Phase 2 — File Structure

1. Create the file/page skeleton.
2. Add foundations pages and simple documentation blocks.
3. Ensure the file is navigable before adding many components.
4. Capture a screenshot or equivalent review artifact.
5. Wait for approval before component work.

Recommended default structure:
- Cover
- Getting Started
- Foundations
- ---
- Components
- ---
- Utilities

### 4. Phase 3 — Components

Build components **one at a time** in dependency order.

For each component:
1. Create or confirm the destination page.
2. Build the base component with auto layout and variable bindings.
3. Create only the necessary variant axes.
4. Prefer component properties over encoding everything as variants.
5. Add usage notes or lightweight page documentation.
6. Validate structure and visual output.
7. Show the user the result and wait for approval.
8. Only then proceed to the next component.

Recommended order:
- atoms first: icon, button, badge, checkbox, radio, toggle
- then form and navigation pieces
- then composed patterns such as card, input groups, or banners

### 5. Phase 4 — Integration and QA

1. Audit naming consistency.
2. Audit unresolved hardcoded values.
3. Audit variable binding correctness across modes.
4. Audit accessibility basics such as contrast, focus visibility, and usable targets.
5. Validate Dev Mode readability and code syntax naming.
6. Optionally add Code Connect only if component names and APIs are stable.
7. Capture final screenshots and a QA summary.
8. Request final sign-off.

## Execution Constraints

These are non-optional operating rules for reliable Figma builds.

| Constraint | Rule |
| --- | --- |
| Call sequencing | Never parallelize mutating `use_figma` calls |
| Page context | Reset current page at the start of each call |
| Return values | Return all created or mutated IDs every time |
| Fonts | Load required fonts before any text write |
| Notifications | Do not use `figma.notify()` in this workflow |
| Persistence | Use shared plugin data for scene-node markers; do not assume unsupported persistence APIs |
| Resumability | Depend on a state ledger plus read-only rehydration, not chat memory |
| Cleanup | Delete only by explicit IDs or explicit shared-plugin-data markers |

### Preflight checklist before any mutating call

Before each write, confirm all of the following:
- the current phase is approved
- the target page is known and set
- required fonts are known and loadable
- the next idempotent key is chosen
- the state ledger has been refreshed
- prior-step IDs needed by this step are available
- this write is the smallest useful reversible unit

## State Management and Resumability

Long design-system builds require explicit state tracking.

### State rules

- Do not rely on chat context as the source of truth.
- Track every created entity by logical key and returned ID.
- Tag created **scene nodes** immediately with shared plugin data.
- Rehydrate state with a read-only inventory pass before resuming interrupted work.

### Supported idempotency patterns

| Entity type | Idempotency key | Existence check |
| --- | --- | --- |
| Scene nodes | `setSharedPluginData('dsb', 'key', value)` or a deterministic unique name | `getSharedPluginData('dsb', 'key')` or targeted lookup by name |
| Variables | Name within collection | Query local variables and match collection + name |
| Styles | Name | Query local styles by exact name |

### Scene-node tagging example

```javascript
node.setSharedPluginData('dsb', 'run_id', RUN_ID)
node.setSharedPluginData('dsb', 'phase', 'phase3')
node.setSharedPluginData('dsb', 'key', 'component/button')
```

### Example state ledger

```json
{
  "runId": "ds-build-2026-001",
  "phase": "phase3",
  "step": "component-button",
  "entities": {
    "collections": { "primitives": "id:...", "color": "id:..." },
    "variables": { "color/bg/primary": "id:...", "spacing/sm": "id:..." },
    "pages": { "Cover": "id:...", "Button": "id:..." },
    "components": { "Button": "id:..." }
  },
  "pendingValidations": ["Button:screenshot"],
  "completedSteps": ["phase0", "phase1", "phase2"]
}
```

### Persistence guidance

If your environment supports local temporary files, persist the ledger there and re-read it every turn. If disk persistence is unavailable, emit the full ledger into the work artifact or handoff text so the next session can resume safely.

### Resume protocol

When resuming after interruption:
1. do a read-only scan of pages, variables, styles, and components
2. reconcile scan results with the latest state ledger
3. identify the last approved checkpoint
4. validate whether the next step was partially completed
5. resume from the smallest safe incomplete unit

Never retry blindly.

## User Checkpoints

Human approval is required at these points.

| After | Required artifacts | Ask |
| --- | --- | --- |
| Discovery and scope lock | Token plan, component list, gap/conflict list | "Here is the proposed v1 scope. Approve before I create anything?" |
| Foundations | Collection/mode summary, style list, token counts | "Foundations are ready. Review before file structure?" |
| File structure | Page list and screenshot | "Pages are ready. Review before components?" |
| Each component | Screenshot and structure summary | "Here is the component. Approve before I continue to the next one?" |
| Code vs Figma conflict | Both conflicting representations | "Code says X and Figma says Y. Which should win?" |
| Final QA | Per-page screenshots and QA report | "The library is complete. Sign off?" |

If the user rejects a checkpoint, fix the issue before proceeding.

## Token Architecture

Prefer a token system that stays portable to code and future export formats.

### Default layering

1. **Primitive tokens**
   - raw values such as base colors, spacing values, radius values
   - usually one mode only
2. **Semantic tokens**
   - meaningful usage names such as `color/bg/primary`
   - should alias primitives whenever possible
   - mode-aware for themes such as Light and Dark
3. **Component tokens**
   - optional
   - use only when scale or specialization justifies them
   - avoid creating a component-token layer too early

### Rules

- Preserve code token names where they already exist.
- Do not invent Figma-only names unless the user approves a divergence.
- Prefer aliases over copied raw values.
- Store web syntax as actual CSS variable usage, for example `var(--color-bg-primary)`.
- Keep names structured enough that they could map cleanly to design-token exchange formats later.

### Recommended starting pattern

| Complexity | Recommended pattern |
| --- | --- |
| Under 50 tokens | Single collection with Light/Dark modes may be acceptable |
| 50–200 tokens | Primitives + semantic color + spacing + typography collections |
| 200+ tokens | Multiple semantic collections with carefully justified modes |

### Example

```text
Collection: Primitives
  blue/500 = #3B82F6
  gray/900 = #111827

Collection: Color
  Modes: Light, Dark
  color/bg/primary -> Light: alias Primitives/white
  color/bg/primary -> Dark: alias Primitives/gray/900
  color/text/primary -> Light: alias Primitives/gray/900
  color/text/primary -> Dark: alias Primitives/white
```

## Component Library Rules

Build scalable component APIs, not just visually matching screenshots.

### Prefer component properties over variant explosion

Use:
- **TEXT** properties for labels and editable copy
- **BOOLEAN** properties for optional icons, helper text, badges, etc.
- **INSTANCE_SWAP** for icons or slot-like nested pieces

Do not create a separate variant for every icon.

### Variant complexity rule

If a variant matrix becomes hard to scan or exceeds the agreed complexity budget, split by concern. For example:
- `Button`
- `Icon Button`
- `Split Button`

Do not force all behaviors into one component set.

### Reuse decision order

Use this priority order:
1. local existing component already in the target file
2. subscribed library asset that is editable and API-compatible
3. new component creation

### Rebuild vs wrap

- **Reuse** when the existing component's property API, naming, and token model fit the target system.
- **Rebuild** when the API contract or token model is incompatible.
- **Wrap** when visual reuse is valuable but the public API must differ from the source component.

Do not detach remote components immediately just to force reuse.

## Best Practices

### Do

- Do inspect the codebase and current Figma file before creating anything.
- Do lock scope and get approval before Phase 1 writes.
- Do create variables before components.
- Do bind fills, strokes, spacing, radius, and text styles to agreed tokens where supported.
- Do set variable scopes explicitly.
- Do keep names deterministic and aligned with code.
- Do validate after every meaningful creation step.
- Do keep `use_figma` calls sequential and small.
- Do return IDs and persist a state ledger.
- Do treat Code Connect as optional and later-phase.

### Don't

- Don't attempt the whole system in one call.
- Don't create components before foundations are stable.
- Don't duplicate semantic values as raw literals when aliasing is possible.
- Don't leave variables at broad default scopes without review.
- Don't build huge variant matrices when component properties would scale better.
- Don't rename code tokens silently.
- Don't perform broad cleanup by name prefix.
- Don't continue after a rejected checkpoint.
- Don't guess IDs from memory.
- Don't assume Dev Mode quality if code syntax was never set.

## Examples

### Example 1: Build a new system from code

```text
Use @figma-generate-library with @figma-use. Start with a read-only discovery pass of the codebase and target Figma file, propose token collections and an initial component list, and do not create anything until I approve the plan.
```

Expected outcome:
- scope-locked token plan
- component build order
- conflict list requiring user decisions

### Example 2: Add dark mode to an existing library

```text
Use @figma-generate-library with @figma-use to add dark mode to the current Figma library. First inspect existing variables, collections, and bindings. Propose the minimum safe mode expansion, then create or update semantic color variables before touching components.
```

Expected outcome:
- mode strategy
- updated semantic token mapping
- list of components requiring validation after rebinding

### Example 3: Resume an interrupted build

```text
Use @figma-generate-library with @figma-use to resume run ds-build-2026-001. Start with a read-only scan of pages, variables, styles, and components, reconcile that with the latest state ledger, and tell me the smallest safe next step before making changes.
```

Expected outcome:
- reconstructed state map
- last approved checkpoint
- safe next action

### Example 4: Validate one component before scaling up

```text
Use @figma-generate-library with @figma-use to create only the Button component after foundations are approved. Use component properties where possible, validate bindings and screenshots, and stop for approval before building any other component.
```

Expected outcome:
- one completed component page
- validated variants and properties
- user checkpoint before proceeding

## Troubleshooting

### Problem: Text write failed because the font was not loaded

**Symptoms:** Text nodes fail to update, text creation errors appear, or writes succeed except for text content/styling.

**Likely causes:**
- required font family/style was not loaded first
- font name in the script does not match the file's actual font metadata

**Solution:**
1. identify the exact font family and style needed
2. load the font before any text mutation
3. retry only the smallest failed text step
4. revalidate the affected page

**Prevention:** Always determine required fonts during discovery and include font loading in every text-writing script.

### Problem: Variable exists but will not bind or apply as expected

**Symptoms:** A variable is present, but fills, strokes, spacing, or text properties do not bind correctly.

**Likely causes:**
- wrong variable scope
- unsupported property binding target
- using the wrong collection or wrong mode assumptions
- semantic token created with copied values instead of alias structure expected by the workflow

**Solution:**
1. inspect the variable's collection, mode setup, and scope
2. confirm the target property supports the intended binding
3. verify the component/property is using the agreed token layer
4. fix the variable or binding narrowly, then revalidate

**Prevention:** Set scopes explicitly during Phase 1 and test representative bindings before mass component creation.

### Problem: Dark mode values do not switch correctly

**Symptoms:** Components remain visually identical across modes, some properties switch while others remain hardcoded, or only part of the theme changes.

**Likely causes:**
- semantic variables were not mode-aware
- components still contain hardcoded values
- a primitive was bound directly where a semantic variable should have been used

**Solution:**
1. inspect the semantic collection and mode values
2. identify hardcoded visual properties on affected components
3. replace direct primitive bindings with semantic bindings where appropriate
4. retest with screenshots in each mode

**Prevention:** Use semantic aliases for themeable properties and run a binding audit before final QA.

### Problem: Remote or subscribed library component cannot be safely reused

**Symptoms:** The component is visually close, but you cannot edit it safely, or its API does not match the target system.

**Likely causes:**
- remote ownership or locking constraints
- incompatible variant/property model
- incompatible token bindings or naming conventions

**Solution:**
1. decide whether the asset should be reused, wrapped, or rebuilt
2. if visual reuse helps but API compatibility is poor, build a wrapper component
3. if ownership blocks safe editing, rebuild locally
4. document the choice at the checkpoint

**Prevention:** Search libraries during discovery and evaluate API compatibility before planning reuse.

### Problem: Duplicate components, pages, or variables appeared after retrying

**Symptoms:** Multiple similarly named objects exist after a failed or repeated step.

**Likely causes:**
- missing idempotency check
- state ledger not refreshed before retry
- retry started from memory instead of a read-only inventory pass

**Solution:**
1. stop mutating
2. rehydrate state from the file contents and latest ledger
3. identify the exact duplicate IDs
4. clean up only explicit duplicates created by the interrupted run
5. rerun the smallest incomplete unit

**Prevention:** Query by deterministic key and returned ID before every create.

### Problem: Dev Mode naming does not match code expectations

**Symptoms:** Developers cannot map Figma variables/components to implementation names, or code syntax appears inconsistent.

**Likely causes:**
- token names diverged from code without approval
- code syntax metadata was skipped or formatted inconsistently
- component names/properties drifted from implementation terminology

**Solution:**
1. compare code names against Figma names directly
2. fix agreed naming mismatches before handoff
3. ensure web syntax uses `var(--token-name)` where appropriate
4. capture a final Dev Mode review artifact

**Prevention:** Preserve code naming during discovery and audit Dev Mode readiness in Phase 4.

### Problem: Accessibility QA found poor contrast or weak focus states

**Symptoms:** Text or controls fail contrast expectations, interactive states are hard to distinguish, or controls are too small to use comfortably.

**Likely causes:**
- semantic color system does not account for accessible state usage
- focus indicators are missing or hardcoded inconsistently
- components use visual values outside the token system

**Solution:**
1. identify which semantic tokens control the failing states
2. adjust tokens or component bindings narrowly
3. recheck contrast and visible focus treatment
4. document any remaining tradeoffs for approval

**Prevention:** Audit accessibility before final sign-off and avoid bypassing semantic tokens for state styling.

## Related Skills

- `@figma-use` — mandatory companion for Plugin API execution details
- documentation or design-doc skills — for longer written system documentation after the library structure is stable
- frontend implementation skills — when the work shifts from Figma system building into code implementation
- accessibility review skills — when the task becomes primarily an accessibility audit rather than a Figma build workflow

## Additional Resources

Read these local resources on demand. They are part of the execution kit, not decorative attachments.

### References

- [Discovery phase checklist](references/discovery-phase.md)
- [Token creation guidance](references/token-creation.md)
- [Component creation guidance](references/component-creation.md)
- [Documentation and page-structure guidance](references/documentation-creation.md)
- [Optional Code Connect and Dev Mode guidance](references/code-connect-setup.md)
- [Naming conventions](references/naming-conventions.md)
- [Error recovery and resume guide](references/error-recovery.md)

### Examples

- [Greenfield design system from codebase](examples/greenfield-design-system-from-codebase.md)
- [Retrofit existing Figma file to code](examples/retrofit-existing-figma-to-code.md)
- [Add dark mode to an existing library](examples/add-dark-mode-to-existing-library.md)
- [Resume interrupted build](examples/resume-interrupted-build.md)

### Scripts

Embed or adapt these helpers inside `use_figma` calls as appropriate:
- [inspectFileStructure.js](scripts/inspectFileStructure.js)
- [createVariableCollection.js](scripts/createVariableCollection.js)
- [createSemanticTokens.js](scripts/createSemanticTokens.js)
- [createComponentWithVariants.js](scripts/createComponentWithVariants.js)
- [bindVariablesToComponent.js](scripts/bindVariablesToComponent.js)
- [validateCreation.js](scripts/validateCreation.js)
- [cleanupOrphans.js](scripts/cleanupOrphans.js)
- [rehydrateState.js](scripts/rehydrateState.js)

### Agent routing

- [OpenAI agent invocation metadata](agents/openai.yaml)

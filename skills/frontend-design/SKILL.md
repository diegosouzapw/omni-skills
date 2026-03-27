---
name: frontend-design
description: "Frontend design workflow skill. Use this skill when a user needs UI structure, states, and interaction patterns before implementation."
version: "0.0.1"
category: frontend
tags: [frontend, ui, ux, layout, interaction, accessibility]
complexity: intermediate
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-27"
---

# Frontend Design

## Overview

Use this skill when the user needs a UI direction, page structure, state map, or interaction model before coding. It is for shaping how a screen behaves, not only how it looks.

This skill should produce interfaces that feel intentional, with clear hierarchy, responsive behavior, and explicit loading, empty, error, and success states.

## When to Use This Skill

- Use when shaping a new screen, flow, or component family.
- Use when improving a weak or generic layout before implementation.
- Use when the user needs state coverage and interaction logic, not only visual polish.

## Core Concepts

### Structure Before Surface

Decide layout regions, information hierarchy, and user flow before choosing details like card styling or animation.

### States Are Part of the Design

A design is incomplete if it only covers the happy path. Loading, empty, error, and partial-success states must be explicit.

## Operating Table

| Phase | Deliverable | Checks |
| --- | --- | --- |
| Goal framing | One-sentence user outcome plus primary and secondary actions | The primary action is unambiguous and tied to a reader goal |
| Screen structure | Region map, hierarchy, and decision points | Every region earns its space and supports the goal |
| State coverage | Loading, empty, error, validation, and success behavior | No silent failure state is left undefined |
| Handoff packet | Components, responsive rules, and interaction notes | Another engineer can build the screen without guessing |

## Workflow

1. Define the user goal, the primary action, and the two or three signals the user must notice first.
2. Map the screen into regions, hierarchy layers, and decision points before choosing surface styling.
3. Run a state-coverage rubric for loading, empty, error, validation, partial-success, and completed states.
4. Lock responsive behavior explicitly: what stacks, what collapses, what stays sticky, and what remains callable on small screens.
5. End with a handoff packet that names components, interaction rules, motion limits, and implementation notes.

## Examples

### Example 1: New Product Screen

```text
Design a project dashboard screen for an AI tooling product with strong hierarchy and clear empty states.
```

**Explanation:** The answer should define layout, actions, and state coverage rather than only visual style.

### Example 2: Existing Flow Cleanup

```text
Improve the install flow UI so it guides skill discovery, preview, and confirmation more clearly.
```

**Explanation:** The answer should tighten steps and transitions, not merely restyle buttons.

### Example 3: Handoff Packet

```bash
python3 skills/frontend-design/scripts/render_ui_packet.py \
  "Install flow" \
  "discovery,preview,confirmation,errors,mobile stack"
```

**Explanation:** Use the packet generator when the output needs a reusable brief, a component worksheet, and a state rubric in one pass.

## Best Practices

- ✅ **Do:** Define primary and secondary actions explicitly.
- ✅ **Do:** Include non-happy-path states in the design output.
- ✅ **Do:** Name the component boundaries and the state handoff an engineer will need to implement.
- ✅ **Do:** Keep the visual direction consistent with the existing system when one exists.
- ✅ **Do:** Use a checklist, a rubric, or a worksheet when the screen has multiple risk areas.
- ❌ **Don't:** Ship layouts that only work at one viewport size.
- ❌ **Don't:** Treat frontend design as color selection without information hierarchy.

## Troubleshooting

### Problem: The UI feels generic

**Symptoms:** The layout could belong to any product.  
**Solution:** Strengthen hierarchy, vary structure intentionally, and make the primary user action visually dominant.

### Problem: The design looks fine but is hard to implement

**Symptoms:** The handoff lacks component boundaries or state definitions.  
**Solution:** Rewrite the output as regions, components, states, and responsive rules.

### Problem: Mobile behavior is still guesswork

**Symptoms:** Desktop interactions are clear, but small-screen stacking and sticky actions remain vague.
**Solution:** Add a responsive worksheet that states what collapses, what stays pinned, and which actions must remain visible at narrow widths.

## Related Skills

- `@omni-figma` — Use when the design source of truth is in Figma.
- `@api-design` — Use when the UI depends on explicit contract and mutation behavior.
- `@documentation` — Use when the new flow needs usage guidance or release notes.

## Additional Resources

- [Frontend design checklist](references/checklist.md)
- [Render a UI packet](scripts/render_ui_packet.py)
- [Dashboard brief template](examples/dashboard-brief-template.md)
- [State coverage rubric](examples/state-coverage-rubric.md)
- [Component handoff worksheet](examples/component-handoff-worksheet.md)

```bash
python3 skills/frontend-design/scripts/render_ui_packet.py \
  "Install flow" \
  "discovery,preview,confirmation,errors"
```

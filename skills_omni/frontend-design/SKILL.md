---
name: "frontend-design"
description: "Frontend design workflow skill. Use this skill when a user needs UI structure, states, and interaction patterns before implementation."
version: "0.0.1"
category: "frontend"
tags:
  - "frontend"
  - "ui"
  - "ux"
  - "layout"
  - "interaction"
  - "accessibility"
  - "omni-enhanced"
complexity: "intermediate"
risk: "safe"
tools:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "antigravity"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-28"
upstream_skill: "skills/frontend-design"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
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

## Step-by-Step Guide

### 1. Define the User Goal

Name the primary action, the secondary actions, and the critical information the user must notice first.

### 2. Map the Screen Structure

Break the UI into regions: navigation, main content, support information, and decision points.

### 3. Cover Interaction States

Specify what happens when data is loading, missing, invalid, or updated.

### 4. Make Responsiveness Explicit

Describe what collapses, what stacks, what stays pinned, and which actions remain prominent on smaller screens.

### 5. Hand Off to Implementation

End with a component map or build-ready spec the implementation layer can follow.

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

## Best Practices

- ✅ **Do:** Define primary and secondary actions explicitly.
- ✅ **Do:** Include non-happy-path states in the design output.
- ✅ **Do:** Keep the visual direction consistent with the existing system when one exists.
- ❌ **Don't:** Ship layouts that only work at one viewport size.
- ❌ **Don't:** Treat frontend design as color selection without information hierarchy.

## Troubleshooting

### Problem: The UI feels generic

**Symptoms:** The layout could belong to any product.  
**Solution:** Strengthen hierarchy, vary structure intentionally, and make the primary user action visually dominant.

### Problem: The design looks fine but is hard to implement

**Symptoms:** The handoff lacks component boundaries or state definitions.  
**Solution:** Rewrite the output as regions, components, states, and responsive rules.

## Related Skills

- `@omni-figma` — Use when the design source of truth is in Figma.
- `@api-design` — Use when the UI depends on explicit contract and mutation behavior.
- `@documentation` — Use when the new flow needs usage guidance or release notes.

## Additional Resources

- [Frontend design checklist](references/checklist.md)
- [Render a UI packet](scripts/render_ui_packet.py)

```bash
python3 skills/frontend-design/scripts/render_ui_packet.py \
  "Install flow" \
  "discovery,preview,confirmation,errors"
```

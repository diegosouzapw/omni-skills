---
name: "architecture"
description: "Architecture workflow skill. Use this skill when a user needs system boundaries, tradeoffs, or a staged implementation plan."
version: "0.0.1"
category: "development"
tags:
  - "architecture"
  - "system-design"
  - "planning"
  - "refactor"
  - "adr"
  - "omni-enhanced"
complexity: "advanced"
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
upstream_skill: "skills/architecture"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Architecture

## Overview

Use this skill when the user needs a defensible technical structure before or during implementation. It is for defining boundaries, responsibilities, contracts, sequencing, and tradeoffs in a way that can survive contact with a real codebase.

This skill should bias toward practical architecture, not abstract diagrams. Good output should make implementation easier, testing clearer, and failure modes more visible.

## When to Use This Skill

- Use when designing a new subsystem, protocol surface, or package boundary.
- Use when decomposing a refactor into safe phases.
- Use when the user needs an ADR-style recommendation with tradeoffs.

## Core Concepts

### Boundaries Matter More Than Boxes

The primary job is deciding what owns what, where data enters and leaves, and which rules are shared versus local.

### Sequence Is Part of the Design

The architecture is incomplete if it ignores migration order, compatibility windows, and how the change is rolled out safely.

## Workflow

| Phase | Output | Why it matters |
|:------|:-------|:---------------|
| Goal and constraints | Design boundary | Keeps the architecture honest |
| Responsibilities | Clear ownership | Reduces hidden coupling |
| Contracts | Stable interfaces | Makes implementation testable |
| Sequence | Safe migration plan | Preserves rollback paths |
| Tradeoffs | ADR-ready rationale | Makes the decision defensible |

1. Define the goal and constraints in one crisp boundary statement.
2. Assign core responsibilities and ownership.
3. Specify the canonical contracts and data flow.
4. Sequence the rollout into safe intermediate states.
5. Record tradeoffs, failure modes, and the recommended path.

### 1. Define the Goal and Constraints

State the user-facing outcome, performance or operational constraints, compatibility requirements, and what must stay stable.

### 2. Identify Core Responsibilities

List the main responsibilities and assign ownership. Avoid designs where one layer secretly knows too much about another.

### 3. Specify Contracts

Define the main APIs, data shapes, events, or filesystem contracts. Call out which contract is canonical.

### 4. Sequence the Work

Break the architecture into phases with safe intermediate states. Prefer phases that preserve rollback and testability.

### 5. Record Tradeoffs

Name what the chosen design optimizes for and what it intentionally gives up.

## Examples

### Example 1: Runtime Split

```text
Design a shared core plus separate API, MCP, and A2A surfaces for the same skill catalog.
```

**Explanation:** The answer should identify canonical artifacts, shared logic, and protocol-specific adapters.

### Example 2: Refactor Plan

```text
Create a phased architecture plan to move from a scaffolded A2A server to a real task runtime.
```

**Explanation:** The answer should include state ownership, transport behavior, and rollout order.

## Best Practices

- ✅ **Do:** Make ownership and contracts explicit.
- ✅ **Do:** Design phases that can be shipped incrementally.
- ✅ **Do:** Name the failure modes and operational risks.
- ❌ **Don't:** Produce architecture that depends on unspoken behavior.
- ❌ **Don't:** Hide coupling behind generic words like "service" or "manager".

## Troubleshooting

### Problem: The design feels clean but hard to ship

**Symptoms:** The target architecture is clear, but there is no safe migration path.  
**Solution:** Add intermediate phases, adapters, and compatibility layers until the rollout is executable.

### Problem: Too many modules are sharing knowledge

**Symptoms:** Changes in one package force edits everywhere.  
**Solution:** Tighten the canonical contract and move cross-cutting logic into a deliberately shared core.

## Related Skills

- `@brainstorming` — Use before architecture when the direction is still unclear.
- `@api-design` — Use when the architecture depends on external or internal HTTP contracts.
- `@database-design` — Use when persistence design is a core architectural boundary.

## Additional Resources

- [Architecture checklist](references/checklist.md)
- [Tradeoff matrix worksheet](references/tradeoff-matrix.md)
- [Worked rollout-plan example](examples/rollout-plan-example.md)
- [Render an ADR starter](scripts/render_decision_record.py)

```bash
python3 skills/architecture/scripts/render_decision_record.py \
  "Task runtime persistence" \
  "Adopt a pluggable executor and store" \
  "durability,resume,retries"
```

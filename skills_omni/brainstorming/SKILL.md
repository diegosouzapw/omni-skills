---
name: "brainstorming"
description: "Brainstorming workflow skill. Use this skill when a user is exploring a problem and needs options, tradeoffs, and a recommendation."
version: "0.0.1"
category: "product"
tags:
  - "ideation"
  - "planning"
  - "options"
  - "discovery"
  - "decision-making"
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
upstream_skill: "skills/brainstorming"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Brainstorming

## Overview

Use this skill when the user has a direction but not a decision. It is for turning vague goals, competing ideas, or overloaded option sets into a short list of viable paths with clear tradeoffs and a recommended next move.

This skill is not for stalling execution. It should quickly move from exploration to selection criteria, then to a concrete proposal the user or agent can act on.

## When to Use This Skill

- Use when the user says they have "some ideas" but wants help structuring them.
- Use when multiple approaches are possible and the tradeoffs matter.
- Use when the next step should be a recommendation, shortlist, or decision memo rather than code.

## Core Concepts

### Problem Framing First

Do not brainstorm in the abstract. Start by naming the goal, constraints, success criteria, time horizon, and what is explicitly out of scope.

### Diverge Then Converge

Generate a few distinct approaches, not ten shallow variants of the same idea. After that, collapse to the best one or two options with explicit reasoning.

## Step-by-Step Guide

### 1. Clarify the Decision

Summarize the real question in one sentence. Separate "what are we trying to achieve?" from "what options do we have?".

### 2. Name Constraints

List the limits that should shape the answer: time, maintenance cost, risk tolerance, existing stack, user expectations, and team skill level.

### 3. Generate Distinct Options

Produce 3-5 materially different approaches. Each option should have a clear label, a one-line summary, and an explanation of when it wins.

### 4. Compare Tradeoffs

Evaluate each option on complexity, speed, flexibility, cost of change, and operational risk. Call out hidden assumptions.

### 5. Recommend the Next Move

End with a recommendation, not just a menu. If uncertainty remains high, recommend the smallest experiment that would reduce it.

## Examples

### Example 1: Product Direction

```text
Brainstorm three ways to add skill discovery to the CLI without making the interface noisy.
```

**Explanation:** This should produce distinct UX directions, not cosmetic variants of the same command.

### Example 2: Architecture Tradeoff

```text
Help me compare a local-only installer sidecar versus a hosted install planner plus local executor.
```

**Explanation:** This should surface control-plane versus execution-plane tradeoffs and recommend one.

## Best Practices

- ✅ **Do:** Keep the option set small and meaningfully different.
- ✅ **Do:** Finish with a recommendation and rationale.
- ✅ **Do:** Convert uncertainty into experiments when a final choice is premature.
- ❌ **Don't:** List generic ideas without constraints or evaluation criteria.
- ❌ **Don't:** Hide weak assumptions behind neutral wording.

## Troubleshooting

### Problem: The ideas feel repetitive

**Symptoms:** Every option sounds like a minor variant of the same solution.  
**Solution:** Reframe the axes. Vary control model, hosting model, UX entrypoint, or data contract instead of surface details.

### Problem: The output is too vague to act on

**Symptoms:** The brainstorm reads like inspiration, not a decision aid.  
**Solution:** Add explicit decision criteria and force a recommendation with next steps.

## Related Skills

- `@architecture` — Use when the brainstorm needs to turn into a structural plan.
- `@find-skills` — Use when the right answer may already exist in the published catalog.
- `@documentation` — Use when the chosen direction must be explained clearly to others.

## Additional Resources

- [Brainstorming checklist](references/checklist.md)
- [Render an idea matrix](scripts/render_idea_matrix.py)

```bash
python3 skills/brainstorming/scripts/render_idea_matrix.py \
  "Expand the AI engineer bundle" \
  "catalog depth,score quality,shipping speed"
```

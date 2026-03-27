---
name: brainstorming
description: "Brainstorming workflow skill. Use this skill when a user is exploring a problem and needs options, tradeoffs, and a recommendation."
version: "0.0.1"
category: product
tags: [ideation, planning, options, discovery, decision-making]
complexity: intermediate
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-27"
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

## Operating Table

| Phase | Deliverable | Checks |
| --- | --- | --- |
| Frame | One-sentence decision and explicit scope | The brainstorm solves the real question |
| Constraint capture | Limits, success criteria, and risk tolerance | Weak assumptions are visible |
| Option design | 3-5 materially different paths | Options are not cosmetic variants |
| Recommendation | Ranked options plus next experiment | The output leads to action |

## Workflow

1. Clarify the decision in one sentence and separate the goal from the candidate solutions.
2. Capture constraints, success criteria, time horizon, ownership, maintenance appetite, and explicit non-goals.
3. Generate 3-5 genuinely different options, each with a label, a summary, and the condition under which it wins.
4. Compare the options in a decision matrix that covers complexity, speed, flexibility, risk, and reversibility.
5. End with a recommendation and the smallest experiment or next step that would validate it.

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

### Example 3: Decision Matrix Packet

```bash
python3 skills/brainstorming/scripts/render_idea_matrix.py \
  "Expand the AI engineer bundle" \
  "catalog depth,score quality,shipping speed,maintenance cost"
```

**Explanation:** Use the matrix generator when the brainstorm needs a worksheet, a decision matrix, and an experiment brief rather than freeform ideation.

## Best Practices

- ✅ **Do:** Keep the option set small and meaningfully different.
- ✅ **Do:** Finish with a recommendation and rationale.
- ✅ **Do:** Convert uncertainty into experiments when a final choice is premature.
- ✅ **Do:** Use a decision matrix or worksheet when tradeoffs are easy to blur together.
- ❌ **Don't:** List generic ideas without constraints or evaluation criteria.
- ❌ **Don't:** Hide weak assumptions behind neutral wording.

## Troubleshooting

### Problem: The ideas feel repetitive

**Symptoms:** Every option sounds like a minor variant of the same solution.  
**Solution:** Reframe the axes. Vary control model, hosting model, UX entrypoint, or data contract instead of surface details.

### Problem: The output is too vague to act on

**Symptoms:** The brainstorm reads like inspiration, not a decision aid.  
**Solution:** Add explicit decision criteria and force a recommendation with next steps.

### Problem: The recommendation ignores the real constraint

**Symptoms:** The final suggestion sounds strong, but it breaks budget, timeline, or staffing limits named earlier.
**Solution:** Revisit the constraint worksheet and score the options again before recommending one path.

## Related Skills

- `@architecture` — Use when the brainstorm needs to turn into a structural plan.
- `@find-skills` — Use when the right answer may already exist in the published catalog.
- `@documentation` — Use when the chosen direction must be explained clearly to others.

## Additional Resources

- [Brainstorming checklist](references/checklist.md)
- [Render an idea matrix](scripts/render_idea_matrix.py)
- [Decision matrix template](examples/decision-matrix.md)
- [Experiment brief template](examples/experiment-brief-template.md)
- [Constraint capture worksheet](examples/constraint-capture-worksheet.md)

```bash
python3 skills/brainstorming/scripts/render_idea_matrix.py \
  "Expand the AI engineer bundle" \
  "catalog depth,score quality,shipping speed"
```

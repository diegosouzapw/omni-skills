---
name: "eval-design"
description: "Evaluation design workflow skill. Use this skill when a user needs LLM eval plans, regression suites, scoring rubrics, or acceptance criteria before model or prompt changes ship."
version: "0.0.1"
category: "ai-agents"
tags:
  - "evals"
  - "evaluation"
  - "regression"
  - "rubric"
  - "benchmark"
  - "llm"
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
date_added: "2026-03-28"
date_updated: "2026-03-28"
upstream_skill: "skills/eval-design"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Eval Design

## Overview

Use this skill when a user needs a repeatable evaluation strategy for prompts, agents, RAG systems, or model changes. It is for task framing, dataset boundaries, rubrics, regression coverage, review policy, and release gates.

The goal is to make model changes measurable. Good output should turn vague quality claims into a concrete pass or fail decision that can survive iteration.

## When to Use This Skill

- Use when a team is changing prompts, retrieval logic, tool use, or model versions and needs regression coverage.
- Use when evaluation data exists, but nobody trusts the rubric or acceptance threshold.
- Use when the system has multiple failure modes and the team needs them grouped into a stable test matrix.
- Use when release decisions depend on answer quality, citation quality, or refusal behavior.
- Use when a benchmark exists but does not yet map cleanly to product risk.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Prompt change | regression surface | Core tasks and known failure modes are tested before rollout |
| Model swap | acceptance criteria | Pass/fail thresholds and human-review cases are explicit |
| Agent workflow change | task decomposition | Tool use, planning, and recovery paths each have coverage |
| RAG tuning | evidence quality | Citation, grounding, and unsupported-claim handling are measurable |
| Noisy benchmark | rubric clarity | The dataset and scoring rules match real product risk |

## Core Concepts

### Eval Scope Must Match Real Risk

Do not build a benchmark that looks impressive but ignores the failure modes users actually care about. Start from production risk and map tasks backward into the eval set.

### Rubrics Should Make Review Faster

A rubric is useful when two reviewers can apply it consistently and produce similar outcomes. If scoring depends on memory or intuition alone, the eval is not ready.

## Workflow

1. Define the change under test, the target behavior, and the failure modes that should block release.
2. Split evaluation cases into task families such as happy path, edge case, refusal, recovery, and escalation behavior.
3. Build the scoring contract: rubric axes, reviewer instructions, thresholds, and what requires manual review.
4. Define the regression pack, sample size, and comparison method so the result can be repeated across future changes.
5. Close with a release decision packet that names pass criteria, review exceptions, and the next gaps in coverage.

## Examples

### Example 1: Prompt change gate

```text
Use @eval-design to build a regression suite and scoring rubric for a prompt rewrite before we roll it out to production.
```

**Explanation:** Use this when a prompt or agent behavior changed and a release gate is needed.

### Example 2: Eval plan packet

```bash
python3 skills/eval-design/scripts/render_eval_plan.py \
  "support-agent-v2" \
  "accuracy,citations,refusals" \
  "release gate,manual review"
```

**Explanation:** Use this to generate a starting packet for evaluator planning.

### Example 3: Model swap review

```text
Use @eval-design to compare the current model and a candidate model, then tell me what should count as pass, manual review, or fail.
```

**Explanation:** Use this when the risk is not just quality drift but release confidence.

## Best Practices

- Tie eval families directly to user-facing or operator-facing failure modes.
- Separate automatic thresholds from manual-review criteria.
- Keep rubrics short enough that reviewers can apply them consistently.
- Preserve representative hard cases instead of only scaling easy examples.
- Record what the eval does not cover so the release decision is honest.
- Reuse the same regression pack whenever possible so improvements and regressions are comparable.

## Troubleshooting

### Problem: The eval score is high, but real quality is still disputed

**Symptoms:** The benchmark passes, yet stakeholders can point to obvious weak spots not represented in the set.
**Solution:** Re-scope the dataset around real product failures and expand the task families before trusting the score.

### Problem: Reviewers disagree too often

**Symptoms:** Human evaluation results drift because the rubric is vague or reviewers are interpreting axes differently.
**Solution:** Tighten the rubric language, add worked examples, and separate binary checks from subjective judgments.

### Problem: The eval exists, but release decisions are still ad hoc

**Symptoms:** The team runs tests, but nobody knows what score should block rollout or which cases require manual sign-off.
**Solution:** Define explicit thresholds, review exceptions, and release ownership inside the eval packet before the next change ships.

## Related Skills

- `@prompt-engineer` — Use when the prompt itself needs redesign before the eval contract is finalized.
- `@llm-patterns` — Use when multi-step tool or agent behavior must be decomposed into testable patterns.
- `@rag-engineer` — Use when retrieval quality, grounding, and citations are the dominant evaluation surface.

## Additional Resources

- [Eval design checklist](references/checklist.md)
- [Rubric template](references/rubric-template.md)
- [Dataset boundary worksheet](references/dataset-boundary-worksheet.md)
- [Render an eval plan](scripts/render_eval_plan.py)
- [Regression matrix example](examples/regression-matrix.md)

---
name: "prompt-engineer"
description: "Prompt engineering workflow skill. Use this skill when a user needs clearer task instructions, examples, decomposition, or evaluation for LLM behavior."
version: "0.0.1"
category: "ai-agents"
tags:
  - "prompting"
  - "llm"
  - "instructions"
  - "examples"
  - "evaluation"
  - "reasoning"
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
date_added: "2026-03-27"
date_updated: "2026-03-28"
upstream_skill: "skills/prompt-engineer"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Prompt Engineer

## Overview

Use this skill when the user needs better model behavior through clearer instructions instead of more guesswork. It is for prompt structure, examples, delimiters, decomposition, evaluation prompts, and safer response contracts.

This skill should optimize for reproducibility, not prompt theater. Good output should make task intent, required format, and failure handling explicit enough that another engineer can reuse the prompt reliably.

## When to Use This Skill

- Use when an LLM task is too vague, inconsistent, or fragile.
- Use when the user needs example-driven prompting, structured outputs, or clearer instructions.
- Use when a workflow needs a prompt plus an evaluation loop, not just a single request.

## Core Concepts

### Clarity Beats Cleverness

Short, direct instructions with explicit structure usually outperform ornate prompt language. State the task, context, constraints, and required output plainly.

### Examples Teach the Model the Shape

If output format, tone, or refusal behavior matters, show it. One or two representative examples are often more useful than another paragraph of description.

## Step-by-Step Guide

### 1. Define the Task Contract

State the job to be done, the allowed inputs, the desired output shape, and the failure or refusal conditions.

### 2. Add Structure and Boundaries

Use headings, XML-like tags, numbered instructions, or explicit sections so the model can separate inputs, instructions, and examples cleanly.

### 3. Add Representative Examples

Provide few-shot examples only when they teach a pattern the model is likely to miss, such as schema shape, tone, or citation style.

### 4. Separate Generation From Evaluation

If quality matters, define a second pass that checks whether the answer met the contract rather than trying to cram every concern into one prompt.

### 5. Document the Failure Modes

Call out what to do when information is missing, ambiguous, unsafe, or outside scope.

## Examples

### Example 1: Structured output prompt

```text
Rewrite this agent prompt so it always returns a JSON object with summary, risks, and next_actions.
```

**Explanation:** The answer should tighten instructions, delimiters, and output constraints.

### Example 2: Prompt packet

```bash
python3 skills/prompt-engineer/scripts/render_prompt_packet.py \
  "review a release plan" \
  "json output,examples,refusal rules"
```

**Explanation:** Use the packet when the user needs a prompt template plus evaluation structure.

## Best Practices

- ✅ **Do:** state the task, constraints, and output format explicitly.
- ✅ **Do:** add examples when they teach a real pattern, not just more words.
- ✅ **Do:** separate generation and evaluation when reliability matters.
- ❌ **Don't:** rely on vague style directions to enforce structure.
- ❌ **Don't:** overload one prompt with conflicting goals and hidden priorities.

## Troubleshooting

### Problem: The model ignores the desired structure

**Symptoms:** Outputs drift from the schema, ordering, or style you asked for.  
**Solution:** Tighten the contract, add one good example, and move non-essential instructions out of the critical path.

### Problem: The prompt works for one example but not another

**Symptoms:** Small input changes cause big output instability.  
**Solution:** Re-check whether the prompt has hidden assumptions, missing refusal rules, or too few representative examples.

## Related Skills

- `@rag-engineer` — Use when prompt quality depends on retrieval evidence and citation behavior.
- `@llm-patterns` — Use when the system also needs tool use, retries, fallback logic, or orchestration.
- `@find-skills` — Use when the user may already need a published AI-focused skill rather than a new prompt from scratch.

## Additional Resources

- [Prompt engineering checklist](references/checklist.md)
- [Render a prompt packet](scripts/render_prompt_packet.py)

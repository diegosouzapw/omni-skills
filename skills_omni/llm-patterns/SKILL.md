---
name: "llm-patterns"
description: "LLM application workflow skill. Use this skill when a user needs robust patterns for tool use, structured outputs, fallback paths, or agent behavior."
version: "0.0.1"
category: "ai-agents"
tags:
  - "llm"
  - "agents"
  - "tool-use"
  - "structured-output"
  - "reliability"
  - "orchestration"
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
upstream_skill: "skills/llm-patterns"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# LLM Patterns

## Overview

Use this skill when the user needs robust application patterns around LLM behavior instead of a single prompt tweak. It is for tool use, structured outputs, retries, timeouts, fallback paths, human confirmation boundaries, and system-level reliability.

This skill should bias toward explicit state machines and observable behavior. Good output should make model actions, tool boundaries, and failure handling legible to engineers and operators.

## When to Use This Skill

- Use when the workflow depends on tools, external APIs, or long-running agent behavior.
- Use when the user needs structured outputs, retries, guardrails, or escalation paths.
- Use when an AI feature needs application-level reliability instead of only prompt-level tuning.

## Core Concepts

### The LLM Is a Component, Not the Whole System

Treat model output as one part of a larger runtime that also includes tool selection, validation, retries, rate limits, and auditability.

### Reliability Comes From Contracts

Explicit schemas, timeouts, confirmation boundaries, and fallback behavior usually improve reliability more than making the prompt longer.

## Step-by-Step Guide

### 1. Choose the Interaction Pattern

Decide whether the task is best served by direct answer generation, structured extraction, tool calling, retrieval plus synthesis, or a multi-step agent workflow.

### 2. Define Boundaries and State

State what the model may decide on its own, what requires confirmation, what tools are available, and how task state persists across retries or restarts.

### 3. Add Validation and Fallback

Define schema validation, output checks, timeout behavior, and what the system should do when a tool, retrieval step, or model call fails.

### 4. Make Observability First-Class

Log tool usage, surface task states, capture artifacts, and define which events operators need to debug failures or recover interrupted work.

### 5. Evaluate the Whole Workflow

Test the system across happy path, partial failure, stale context, slow tools, and malformed outputs.

## Examples

### Example 1: Tool-using agent design

```text
Design a reliable AI workflow that searches a catalog, prepares an install plan, asks for confirmation on writes, and persists task state across restarts.
```

**Explanation:** The answer should focus on state transitions, confirmation boundaries, and fallback behavior.

### Example 2: Pattern review packet

```bash
python3 skills/llm-patterns/scripts/render_pattern_review.py \
  "skill installer agent" \
  "tool safety,task durability,structured output"
```

**Explanation:** Use the packet when the user needs a structured review of an LLM system pattern.

## Best Practices

- ✅ **Do:** validate tool inputs and structured outputs before trusting them.
- ✅ **Do:** add explicit confirmation for sensitive or destructive operations.
- ✅ **Do:** separate generation, execution, and recovery logic cleanly.
- ❌ **Don't:** let hidden retries or silent fallbacks mask system failures.
- ❌ **Don't:** treat a prompt change as a substitute for runtime contracts.

## Troubleshooting

### Problem: The agent behaves inconsistently

**Symptoms:** Similar tasks produce different tool choices, output structures, or recovery paths.  
**Solution:** Tighten the runtime contract, reduce ambiguity in tool selection, and validate state transitions explicitly.

### Problem: Failures are hard to debug

**Symptoms:** Operators cannot tell whether the issue was retrieval, prompting, tool execution, or persistence.  
**Solution:** Split the workflow into observable steps with artifacts, logs, and explicit failure states.

## Related Skills

- `@prompt-engineer` — Use when the main problem is instruction clarity or examples.
- `@rag-engineer` — Use when grounded retrieval is a core part of the system design.
- `@security-auditor` — Use when tool boundaries, permissions, or data exfiltration risk need review.

## Additional Resources

- [LLM patterns checklist](references/checklist.md)
- [Render a pattern review packet](scripts/render_pattern_review.py)

---
name: "documentation"
description: "Documentation workflow skill. Use this skill when a user needs accurate onboarding, operational guidance, or release-ready explanations."
version: "0.0.1"
category: "documentation"
tags:
  - "docs"
  - "readme"
  - "onboarding"
  - "guides"
  - "runbooks"
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
upstream_skill: "skills/documentation"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Documentation

## Overview

Use this skill when the deliverable is understanding. It should turn implementation reality into documentation that is accurate, scannable, and actionable for contributors, operators, or end users.

This skill is not just for polishing wording. It should fix gaps between what the system does, what the docs claim, and how people actually need to use it.

## When to Use This Skill

- Use when a feature exists but the current docs are misleading, stale, or incomplete.
- Use when the user needs a README, guide, spec update, or operational playbook.
- Use when a change affects setup, workflows, defaults, or troubleshooting.

## Core Concepts

### Truth Over Marketing

Document what the system actually does today. Distinguish implemented behavior from roadmap intent.

### Organize by Reader Goal

Separate quick start, deep reference, contributor guidance, and operational procedures so readers can land where they need.

## Step-by-Step Guide

### 1. Identify the Audience

Decide whether the reader is a new user, contributor, operator, or integrator.

### 2. Capture the Current Behavior

Check the real commands, outputs, defaults, and caveats before writing.

### 3. Choose the Right Document Type

README for entry, guide for workflows, spec for contracts, runbook for operations, changelog for released deltas.

### 4. Optimize for Scanability

Use short sections, commands, tables, and concrete examples. Keep caveats explicit and close to the relevant step.

### 5. Verify Against the System

Where possible, validate commands and adjust wording until docs match behavior.

## Examples

### Example 1: Runtime Docs

```text
Update the documentation so it reflects the current API, MCP, A2A, and archive workflow.
```

**Explanation:** The answer should align README, docs hub, specs, and runbook with the real implementation.

### Example 2: Contributor Guidance

```text
Write a guide for adding a new skill and passing validation on the first try.
```

**Explanation:** The output should focus on contributor success and repository conventions.

## Best Practices

- ✅ **Do:** Say what is implemented, what is optional, and what is still pending.
- ✅ **Do:** Use commands and paths readers can execute directly.
- ✅ **Do:** Keep related docs aligned, not contradictory.
- ❌ **Don't:** Describe future behavior as if it were live today.
- ❌ **Don't:** bury critical caveats far from the commands they affect.

## Troubleshooting

### Problem: The docs look polished but users still get lost

**Symptoms:** Readers ask basic setup questions after following the guide.  
**Solution:** Reorganize by reader tasks and add concrete checkpoints, not more prose.

### Problem: README and deep docs disagree

**Symptoms:** Different pages describe different defaults or capabilities.  
**Solution:** Re-check the system behavior and rewrite the highest-level docs first, then cascade changes downward.

## Related Skills

- `@changelog` — Use when the change needs release notes rather than a full guide.
- `@create-pr` — Use when the docs change must be packaged cleanly for review.
- `@find-skills` — Use when docs should point users toward the right published skill or bundle.

## Additional Resources

- [Documentation checklist](references/checklist.md)
- [Render a doc outline](scripts/render_doc_outline.py)

```bash
python3 skills/documentation/scripts/render_doc_outline.py \
  "Publishing and release flow" \
  "users,contributors,operators"
```

---
name: "debugging"
description: "Debugging workflow skill. Use this skill when a user needs disciplined reproduction, isolation, and fix verification instead of guesswork."
version: "0.0.1"
category: "development"
tags:
  - "debugging"
  - "reproduction"
  - "diagnosis"
  - "regression"
  - "testing"
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
upstream_skill: "skills/debugging"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Debugging

## Overview

Use this skill when the user has a bug, failure, regression, or inconsistent behavior and needs a rigorous path from symptom to verified fix. It should force reproduction, narrowing, and proof instead of intuition-driven patching.

This skill is especially useful when several plausible explanations exist and the expensive part is proving which one is real.

## When to Use This Skill

- Use when a bug is intermittent, environment-specific, or recently introduced.
- Use when the user wants root cause, not only a workaround.
- Use when a fix must include verification and regression protection.

## Core Concepts

### Reproduction Before Remedy

If the issue cannot be reproduced or observed, the task is still in discovery. Capture the failing condition first.

### One Variable at a Time

Change one assumption, one input, or one boundary at a time so the evidence stays interpretable.

## Workflow

| Phase | Output | Why it matters |
|:------|:-------|:---------------|
| Capture symptom | Repro case and expected behavior | Keeps the bug concrete |
| Narrow domain | Boundary under suspicion | Prevents random patching |
| Form hypotheses | Testable explanations | Preserves disciplined reasoning |
| Run checks | Evidence log | Separates signal from noise |
| Verify fix | Regression protection | Proves the bug is closed |

1. Capture the symptom and smallest repro.
2. Narrow the fault domain before editing code.
3. Form competing hypotheses with fast falsification paths.
4. Run targeted checks and keep an evidence log.
5. Verify the fix and add regression protection.

### 1. Capture the Symptom Precisely

Record the exact failure, expected behavior, environment, and frequency. Save the smallest reproducible case available.

### 2. Narrow the Fault Domain

Decide whether the issue is likely in inputs, state transitions, integration points, timing, configuration, or output formatting.

### 3. Form Competing Hypotheses

Write two or three plausible explanations. Prefer hypotheses that can be falsified quickly.

### 4. Run Targeted Checks

Inspect logs, add minimal instrumentation, or run focused tests to invalidate the weaker explanations.

### 5. Verify the Fix

After changing code, reproduce the original failing case again and add the smallest regression test that proves the bug stays closed.

## Examples

### Example 1: Runtime Failure

```text
Help me debug why the API works locally but returns 401 in the hosted environment.
```

**Explanation:** The answer should split config, auth middleware, and deployment differences into testable hypotheses.

### Example 2: Regressed Workflow

```text
Debug why bundle installs now warn about missing skills after the latest catalog changes.
```

**Explanation:** The answer should inspect generated artifacts, not only the installer.

## Best Practices

- ✅ **Do:** Preserve the original symptom until you understand it.
- ✅ **Do:** Keep a short evidence log of what each check proved or disproved.
- ✅ **Do:** End with verification and a regression test when possible.
- ❌ **Don't:** Stack multiple speculative fixes into one change.
- ❌ **Don't:** Declare root cause from correlation alone.

## Troubleshooting

### Problem: The bug disappears when inspected

**Symptoms:** Logging or retries change the behavior.  
**Solution:** Suspect timing, race conditions, or environment setup. Reduce instrumentation and compare execution order.

### Problem: Too many plausible causes

**Symptoms:** Several layers could explain the issue.  
**Solution:** Split the system at boundaries and prove which side first diverges from expected behavior.

## Related Skills

- `@architecture` — Use when the bug is revealing a structural boundary problem.
- `@documentation` — Use when the fix requires runbook or troubleshooting updates.
- `@create-pr` — Use when the debugging work needs a clean reviewer-facing explanation.

## Additional Resources

- [Debugging checklist](references/checklist.md)
- [Hypothesis matrix](references/hypothesis-matrix.md)
- [Worked debug session log](examples/debug-session-log.md)
- [Render a debug packet](scripts/render_debug_packet.py)

```bash
python3 skills/debugging/scripts/render_debug_packet.py \
  "A2A task resumes incorrectly after restart" \
  "runtime,store,executor"
```

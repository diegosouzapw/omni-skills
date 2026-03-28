---
name: "create-pr"
description: "Pull-request workflow skill. Use this skill when a user needs a clean review narrative, risk framing, and reviewer guidance."
version: "0.0.1"
category: "communication"
tags:
  - "pr"
  - "review"
  - "collaboration"
  - "summary"
  - "handoff"
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
upstream_skill: "skills/create-pr"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Create PR

## Overview

Use this skill when the work is done and the next problem is reviewer comprehension. It should turn a set of changes into a pull request summary with scope, rationale, risk areas, testing, and the smallest useful review map.

This skill is about communication discipline. A good PR body reduces reviewer confusion, not just restates commit messages.

## When to Use This Skill

- Use when preparing a pull request description or review handoff.
- Use when a multi-area change needs a concise explanation and testing summary.
- Use when the user wants to frame risk, rollout notes, or open questions for reviewers.

## Core Concepts

### Reviewers Need Context Compression

The PR should explain why the change exists, what the main moving parts are, and where the reviewer should focus.

### Risk Must Be Named Explicitly

Do not bury behavior changes, compatibility impact, or weak assumptions inside the summary.

## Workflow

| Phase | Output | Why it matters |
|:------|:-------|:---------------|
| Define boundary | Scope statement | Prevents review drift |
| Summarize areas | Review map | Helps reviewers orient quickly |
| Add validation | Test and smoke evidence | Anchors trust |
| Call out risk | Hotspots and open questions | Surfaces what matters most |
| Finish with asks | Reviewer guidance | Speeds up useful review |

1. Define the exact boundary of the PR.
2. Summarize the main change areas in reviewer language.
3. Add validation and rollout evidence.
4. Call out risks, weak assumptions, and hotspots.
5. Finish with a reviewer checklist or explicit asks.

### 1. Define the Change Boundary

Explain what this PR does and, just as importantly, what it does not do.

### 2. Summarize the Main Change Areas

Group the diff into 2-5 reviewer-relevant areas instead of listing files mechanically.

### 3. Add Validation and Risk

Include test commands, smoke checks, manual verification, and any residual risk.

### 4. Point Reviewers to Hotspots

Call out the files or behaviors that deserve extra scrutiny.

### 5. Close with Reviewer Asks

Tell the reviewer what kind of feedback is most valuable now: contract review, regression risk, rollout safety, or docs accuracy.

## Examples

### Example 1: Runtime Expansion

```text
Write a PR summary for adding task lifecycle support to the A2A server plus new catalog skills.
```

**Explanation:** The output should separate protocol/runtime changes from catalog/content additions.

### Example 2: Refactor Handoff

```text
Prepare a reviewer guide for a refactor that moved shared logic into a core package.
```

**Explanation:** The answer should highlight where semantics changed versus where code only moved.

## Best Practices

- ✅ **Do:** Organize the PR around reviewer understanding.
- ✅ **Do:** Include validation commands and any manual checks performed.
- ✅ **Do:** Name unresolved risks or follow-up work openly.
- ❌ **Don't:** dump a file-by-file inventory with no grouping.
- ❌ **Don't:** imply a change is safer than the evidence supports.

## Troubleshooting

### Problem: The PR summary feels too long

**Symptoms:** Reviewers have to read a small essay before understanding the change.  
**Solution:** Collapse repeated detail and keep only scope, major areas, tests, and risk.

### Problem: Reviewers miss the important part

**Symptoms:** Comments focus on trivia while risky behavior changes get skipped.  
**Solution:** Add an explicit review focus section and call out the risky surface directly.

## Related Skills

- `@changelog` — Use when the same work also needs release notes.
- `@documentation` — Use when the PR changes public docs or runbooks.
- `@debugging` — Use when the PR is fixing a bug and the root cause should be explained clearly.

## Additional Resources

- [PR handoff checklist](references/checklist.md)
- [Reviewer focus template](references/reviewer-focus-template.md)
- [Worked PR body example](examples/pr-body-example.md)
- [Render a PR packet](scripts/render_pr_packet.py)

```bash
python3 skills/create-pr/scripts/render_pr_packet.py \
  "Add devops skills and improve bundle coverage" \
  "catalog,bundles,metadata"
```

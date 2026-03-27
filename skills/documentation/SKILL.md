---
name: documentation
description: "Documentation workflow skill. Use this skill when a user needs accurate onboarding, operational guidance, or release-ready explanations."
version: "0.0.1"
category: documentation
tags: [docs, readme, onboarding, guides, runbooks]
complexity: intermediate
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-27"
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

## Operating Table

| Phase | Deliverable | Checks |
| --- | --- | --- |
| Reader mapping | Audience, problem, and success checkpoint | The doc answers a clear reader question |
| Reality capture | Verified commands, defaults, and caveats | The docs match live behavior |
| Document shaping | README, guide, spec, runbook, or changelog | The document type fits the need |
| Verification pass | Tested commands and explicit caveats | Operators and contributors can follow without guessing |

## Workflow

1. Identify the reader: new user, contributor, operator, or integrator, and state the task they are trying to finish.
2. Capture the current behavior from commands, defaults, generated artifacts, and real caveats before writing.
3. Choose the right document type and move irrelevant detail out of the path of the main reader journey.
4. Build a doc packet with quick start, deep reference, troubleshooting, and cross-links only where each audience needs them.
5. Verify the doc against the system and end with concrete next steps, not just polished prose.

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

### Example 3: Outline Packet

```bash
python3 skills/documentation/scripts/render_doc_outline.py \
  "Publishing and release flow" \
  "users,contributors,operators"
```

**Explanation:** Use the outline packet when you need a quickstart template, a reader map, and a runbook delta worksheet before editing multiple docs.

## Best Practices

- ✅ **Do:** Say what is implemented, what is optional, and what is still pending.
- ✅ **Do:** Use commands and paths readers can execute directly.
- ✅ **Do:** Keep related docs aligned, not contradictory.
- ✅ **Do:** Map each section to a reader goal instead of stacking every fact into one page.
- ❌ **Don't:** Describe future behavior as if it were live today.
- ❌ **Don't:** bury critical caveats far from the commands they affect.

## Troubleshooting

### Problem: The docs look polished but users still get lost

**Symptoms:** Readers ask basic setup questions after following the guide.  
**Solution:** Reorganize by reader tasks and add concrete checkpoints, not more prose.

### Problem: README and deep docs disagree

**Symptoms:** Different pages describe different defaults or capabilities.  
**Solution:** Re-check the system behavior and rewrite the highest-level docs first, then cascade changes downward.

### Problem: The doc is long but still misses the default path

**Symptoms:** Readers can explain the architecture but still cannot complete setup or operations.
**Solution:** Add a reader map and a worksheet that forces defaults, paths, ports, and expected outputs into the first practical section.

## Related Skills

- `@changelog` — Use when the change needs release notes rather than a full guide.
- `@create-pr` — Use when the docs change must be packaged cleanly for review.
- `@find-skills` — Use when docs should point users toward the right published skill or bundle.

## Additional Resources

- [Documentation checklist](references/checklist.md)
- [Render a doc outline](scripts/render_doc_outline.py)
- [Reader map template](examples/reader-map-template.md)
- [Runbook delta worksheet](examples/runbook-delta-worksheet.md)
- [Quickstart outline packet](examples/quickstart-outline-packet.md)

```bash
python3 skills/documentation/scripts/render_doc_outline.py \
  "Publishing and release flow" \
  "users,contributors,operators"
```

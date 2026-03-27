---
name: changelog
description: "Release-notes workflow skill. Use this skill when a user needs changelog entries, upgrade notes, or a concise release narrative."
version: "0.0.1"
category: documentation
tags: [changelog, release-notes, upgrades, summary, maintenance]
complexity: intermediate
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---

# Changelog

## Overview

Use this skill when the user needs to communicate what changed and why it matters. It should compress implementation details into accurate release notes, upgrade notes, and risk callouts for real readers.

The output should prioritize user-visible impact, compatibility changes, and operational consequences over internal patch inventory.

## When to Use This Skill

- Use when preparing a release summary or milestone update.
- Use when a large change needs a short but accurate narrative.
- Use when the user needs upgrade notes, migration warnings, or breaking-change callouts.

## Core Concepts

### Changes Need Audience Framing

Different readers care about different things. Operators need rollout notes, contributors need behavior changes, and end users need commands and impact.

### Highlight Risk, Not Noise

The best changelog is selective. Include what changed, why it matters, and what the reader must do next.

## Step-by-Step Guide

### 1. Group by Outcome

Cluster changes by user-facing area such as runtime, catalog, security, docs, or workflows.

### 2. Separate Additions from Risks

Explicitly call out new capabilities, behavior changes, compatibility risks, and follow-up actions.

### 3. Keep It Release-Ready

Write in a format that could ship in a release note, tag description, or upgrade guide without major rewriting.

### 4. Link to Validation

Mention tests, smoke checks, or rollout evidence when it helps build confidence.

## Examples

### Example 1: Feature Release

```text
Write release notes for a version that adds A2A task lifecycle, streaming, and new published skills.
```

**Explanation:** The answer should focus on runtime impact, new commands, and catalog changes.

### Example 2: Maintenance Summary

```text
Summarize the last refactor into a concise changelog for maintainers.
```

**Explanation:** The output should balance signal and brevity.

## Best Practices

- ✅ **Do:** Group by impact area, not by file list.
- ✅ **Do:** Call out breaking or risky behavior explicitly.
- ✅ **Do:** Include validation when it materially lowers adoption risk.
- ❌ **Don't:** turn the changelog into a raw diff summary.
- ❌ **Don't:** omit operational consequences just because the code change was small.

## Troubleshooting

### Problem: The summary is too technical

**Symptoms:** It reads like implementation notes, not release notes.  
**Solution:** Rewrite around user-visible outcomes and required actions.

### Problem: The summary is too vague

**Symptoms:** Readers cannot tell what changed or whether they should care.  
**Solution:** Add concrete commands, behaviors, and compatibility notes.

## Related Skills

- `@documentation` — Use when the change also needs permanent docs updates.
- `@create-pr` — Use when the release narrative must be reflected in the PR body.
- `@find-skills` — Use when new catalog additions should be highlighted for discovery.

## Additional Resources

- [Release note checklist](references/checklist.md)
- [Render release notes scaffolding](scripts/render_release_notes.py)

```bash
python3 skills/changelog/scripts/render_release_notes.py \
  "0.0.2" \
  "Expanded skills, stronger MCP config generation, durable A2A runtime"
```

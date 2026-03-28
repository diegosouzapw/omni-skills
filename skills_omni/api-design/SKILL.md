---
name: "api-design"
description: "API design workflow skill. Use this skill when a user needs a clear HTTP or service contract before implementation."
version: "0.0.1"
category: "backend"
tags:
  - "api"
  - "backend"
  - "contracts"
  - "http"
  - "json"
  - "errors"
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
upstream_skill: "skills/api-design"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# API Design

## Overview

Use this skill when the user needs to define or refine an API contract. It should clarify resources, methods, parameters, errors, pagination, compatibility, and operational semantics before the implementation locks in bad assumptions.

This skill is for interface quality, not framework boilerplate. Good output should make the API easier to document, test, and evolve.

## When to Use This Skill

- Use when creating a new public or internal HTTP surface.
- Use when existing endpoints are inconsistent or under-specified.
- Use when a workflow needs clear request, response, and error semantics.

## Core Concepts

### Contract First

The route name is the least important part. Focus first on resources, responsibilities, and stable response shapes.

### Errors Are Product Behavior

Error codes, validation messages, and retry expectations are part of the API design, not afterthoughts.

## Step-by-Step Guide

### 1. Name the Resource Model

Define the main resources, identifiers, and whether the surface is document-oriented, action-oriented, or event-driven.

### 2. Specify Reads and Writes

For each operation, define method, path, inputs, outputs, and idempotency expectations.

### 3. Model Failure Modes

Describe validation failures, auth failures, missing resources, conflicts, rate limits, and server errors.

### 4. Add Compatibility Rules

State what fields are stable, what may evolve, and how clients should tolerate additions.

### 5. Produce Build-Ready Examples

End with example requests and responses that future docs and tests can reuse.

## Examples

### Example 1: Discovery API

```text
Design a read-only API for listing skills, searching, comparing, and downloading per-skill archives.
```

**Explanation:** The result should define filters, response envelopes, and download semantics clearly.

### Example 2: Task Lifecycle Surface

```text
Design an API for long-running agent tasks with get, cancel, and streaming updates.
```

**Explanation:** The result should make task states and polling behavior explicit.

## Best Practices

- ✅ **Do:** Keep envelopes and error shapes consistent across endpoints.
- ✅ **Do:** Prefer explicit pagination, filtering, and sorting semantics.
- ✅ **Do:** Separate transport details from resource meaning.
- ❌ **Don't:** Hide breaking changes behind the same field names.
- ❌ **Don't:** mix one-off actions and stable resources without clear boundaries.

## Troubleshooting

### Problem: The API feels easy to build but hard to consume

**Symptoms:** Clients must guess defaults, infer errors, or parse inconsistent envelopes.  
**Solution:** Normalize the contract and make every edge condition explicit.

### Problem: Too many custom endpoints are accumulating

**Symptoms:** The surface is turning into action sprawl.  
**Solution:** Re-check the resource model and collapse related operations under stable nouns and query parameters.

## Related Skills

- `@architecture` — Use when the API shape depends on ownership and boundary decisions.
- `@database-design` — Use when persistence constraints are shaping the contract.
- `@documentation` — Use when the contract needs formal docs or migration notes.

## Additional Resources

- [API design checklist](references/checklist.md)
- [Render an API brief packet](scripts/render_brief.py)

```bash
python3 skills/api-design/scripts/render_brief.py \
  "Skill discovery API" \
  "Search, compare, and download per-skill artifacts" \
  "cursor,codex-cli"
```

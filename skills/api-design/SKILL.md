---
name: api-design
description: "API design workflow skill. Use this skill when a user needs a clear HTTP or service contract before implementation."
version: "0.0.1"
category: backend
tags: [api, backend, contracts, http, json, errors]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-27"
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

## Operating Table

| Phase | Deliverable | Checks |
| --- | --- | --- |
| Resource modeling | Stable nouns, identifiers, and ownership boundaries | The surface is not action sprawl |
| Contract drafting | Methods, paths, request fields, and response envelopes | Reads and writes are predictable |
| Failure design | Validation, auth, conflict, limit, and retry semantics | Error behavior is explicit |
| Compatibility pass | Versioning, additive change rules, and examples | The contract can evolve safely |

## Workflow

1. Name the resource model, the identifiers, and whether the API is resource-driven, action-driven, or event-shaped.
2. Specify reads and writes with method, path, request fields, response envelope, idempotency, and pagination semantics.
3. Model failure modes explicitly: validation, auth, missing resources, conflicts, rate limits, and retryable server failures.
4. Define compatibility rules: stable fields, additive changes, deprecation handling, and client tolerance expectations.
5. End with a build-ready packet that includes request examples, response examples, an error rubric, and migration notes.

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

### Example 3: Contract Packet

```bash
python3 skills/api-design/scripts/render_brief.py \
  "Skill discovery API" \
  "Search, compare, and download per-skill artifacts" \
  "cursor,codex-cli"
```

**Explanation:** Use the brief generator when you need a contract worksheet, an error rubric, and request-response examples that docs and tests can share.

## Best Practices

- ✅ **Do:** Keep envelopes and error shapes consistent across endpoints.
- ✅ **Do:** Prefer explicit pagination, filtering, and sorting semantics.
- ✅ **Do:** Separate transport details from resource meaning.
- ✅ **Do:** Include a compatibility worksheet so additive changes stay intentional.
- ❌ **Don't:** Hide breaking changes behind the same field names.
- ❌ **Don't:** mix one-off actions and stable resources without clear boundaries.

## Troubleshooting

### Problem: The API feels easy to build but hard to consume

**Symptoms:** Clients must guess defaults, infer errors, or parse inconsistent envelopes.  
**Solution:** Normalize the contract and make every edge condition explicit.

### Problem: Too many custom endpoints are accumulating

**Symptoms:** The surface is turning into action sprawl.  
**Solution:** Re-check the resource model and collapse related operations under stable nouns and query parameters.

### Problem: Idempotency and pagination are still vague

**Symptoms:** Writes have unclear retry semantics or large collections have ad hoc paging behavior.
**Solution:** Add an explicit mutation worksheet that states idempotency keys, retry expectations, sort order, cursors, and backfill rules.

## Related Skills

- `@architecture` — Use when the API shape depends on ownership and boundary decisions.
- `@database-design` — Use when persistence constraints are shaping the contract.
- `@documentation` — Use when the contract needs formal docs or migration notes.

## Additional Resources

- [API design checklist](references/checklist.md)
- [Render an API brief packet](scripts/render_brief.py)
- [Request envelope template](examples/request-envelope-template.json)
- [Error contract rubric](examples/error-contract-rubric.md)
- [Mutation review worksheet](examples/mutation-review-worksheet.md)

```bash
python3 skills/api-design/scripts/render_brief.py \
  "Skill discovery API" \
  "Search, compare, and download per-skill artifacts" \
  "cursor,codex-cli"
```

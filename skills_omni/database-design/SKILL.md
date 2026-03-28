---
name: "database-design"
description: "Database design workflow skill. Use this skill when a user needs durable schema, indexing, and migration design before implementation."
version: "0.0.1"
category: "backend"
tags:
  - "database"
  - "schema"
  - "migrations"
  - "indexing"
  - "persistence"
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
upstream_skill: "skills/database-design"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Database Design

## Overview

Use this skill when the user needs to shape persistent data, not just serialize objects. It should define entities, keys, relationships, constraints, indexes, access paths, and migration concerns in a way that matches the application's real workload.

This skill should optimize for correctness and maintainability first, then performance with explicit evidence.

## When to Use This Skill

- Use when introducing a new persistent model or storage boundary.
- Use when a schema needs to support new queries, retention rules, or lifecycle states.
- Use when migrations and backward compatibility are part of the design risk.

## Core Concepts

### Access Patterns Drive Schema

Start from reads, writes, and lifecycle behavior. A good schema fits the queries and mutations the system actually performs.

### Migrations Are Part of the Design

Any proposal that ignores data migration, backfill, or rollback is incomplete.

## Workflow

| Phase | Output | Why it matters |
|:------|:-------|:---------------|
| Entities and lifecycle | Stable record model | Prevents vague schemas |
| Relationships | Constraints and ownership | Protects invariants |
| Access paths | Query and index plan | Keeps performance evidence-based |
| Migration | Rollout and rollback path | Makes changes shippable |
| Operational fit | Volume and retention review | Avoids surprises in production |

1. Define entities, lifecycle, and uniqueness.
2. Map relationships, constraints, and deletion rules.
3. Design access paths and justify indexes.
4. Plan migrations, backfills, and rollback.
5. Validate operational fit against volume and retention assumptions.

### 1. Define Entities and Lifecycle

List the core entities, their states, and what makes each record unique.

### 2. Map Relationships and Constraints

Specify ownership, cardinality, nullability, uniqueness, and deletion behavior.

### 3. Design Access Paths

Name the important query patterns and add indexes only when they support a real path.

### 4. Plan the Migration

Describe how existing data, writes, and rollbacks will behave during rollout.

### 5. Validate Operational Fit

Call out volume assumptions, hot paths, retention, and consistency expectations.

## Examples

### Example 1: Task Runtime Storage

```text
Design a storage model for long-running agent tasks, status transitions, artifacts, and push notification configs.
```

**Explanation:** The answer should cover lifecycle states, relation boundaries, and retrieval patterns.

### Example 2: Catalog Persistence

```text
Model a catalog that stores skills, bundles, archives, checksums, and release metadata.
```

**Explanation:** The answer should align schema design with search, install planning, and artifact delivery.

## Best Practices

- ✅ **Do:** Tie schema choices to concrete read and write patterns.
- ✅ **Do:** Be explicit about unique keys, foreign keys, and deletion semantics.
- ✅ **Do:** Plan migrations and backfills up front.
- ❌ **Don't:** Add indexes without a query path that justifies them.
- ❌ **Don't:** rely on application code to enforce invariants the database could guarantee.

## Troubleshooting

### Problem: The model is normalized but slow in practice

**Symptoms:** Simple reads require too many joins or follow-up queries.  
**Solution:** Re-check access paths and denormalize deliberately where the workload justifies it.

### Problem: The schema change is hard to roll out

**Symptoms:** Existing writes or readers would break during migration.  
**Solution:** Add compatibility columns, staged writes, or backfill phases until rollout becomes reversible.

## Related Skills

- `@architecture` — Use when the data model is changing service boundaries.
- `@api-design` — Use when storage decisions influence public contract semantics.
- `@debugging` — Use when the issue is a data correctness or migration regression.

## Additional Resources

- [Database design checklist](references/checklist.md)
- [Migration playbook](references/migration-playbook.md)
- [Worked schema review example](examples/schema-review-example.md)
- [Render a schema review starter](scripts/render_schema_review.py)

```bash
python3 skills/database-design/scripts/render_schema_review.py \
  "task_store" \
  "states,artifacts,notifications,leases"
```

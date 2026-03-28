---
name: "data-contracts"
description: "Data contracts workflow skill. Use this skill when a team needs to define, review, or enforce contracts across producers, pipelines, warehouses, analytics layers, and consumer-facing metrics."
version: "0.0.1"
category: "data-ai"
tags:
  - "data-contracts"
  - "analytics"
  - "schemas"
  - "pipelines"
  - "warehouse"
  - "metrics"
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
date_added: "2026-03-28"
date_updated: "2026-03-28"
upstream_skill: "skills/data-contracts"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Data Contracts

## Overview

Use this skill when data interfaces need to be treated like product interfaces. It is for producer-consumer agreements, schema evolution, freshness expectations, lineage, ownership, and the contract between raw events, transformation layers, and downstream analytics or ML consumers.

Good output should reduce silent data breakage. The goal is to make schema and metric changes explicit before dashboards, models, or downstream teams discover them the hard way.

## When to Use This Skill

- Use when event schemas or warehouse tables keep changing without consumer coordination.
- Use when analytics, data engineering, and application teams disagree about ownership or freshness rules.
- Use when downstream consumers need stable contracts for metrics, datasets, or feature inputs.
- Use when a new data product needs explicit SLA, lineage, and schema-change policy.
- Use when a team needs a review packet before changing critical events or tables.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Event schema change | consumer safety | Versioning, compatibility, and downstream impact are explicit |
| Warehouse refactor | lineage | Source, transformation, and owner boundaries are visible |
| Metric drift | semantic contract | Definitions and freshness expectations are documented clearly |
| Feature pipeline | reliability | Training and serving inputs have stable expectations |
| New data product | accountability | SLA, owner, schema, and breakage policy are published |

## Core Concepts

### Data Is A Shared Interface

Schemas, events, tables, and metrics are dependency surfaces. Treating them as internal implementation detail leads to fragile dashboards, broken models, and unplanned pipeline work.

### Compatibility Is Not Only About Types

Freshness, ownership, semantics, null behavior, and backfill policy are part of the contract too. A schema that “still parses” can still break a consumer badly.

### Contracts Need Named Owners

If no owner is named for producers, transformations, and consumers, breakage gets discovered socially instead of operationally.

## Workflow

1. Define the producer, transformation layers, and consumers for the dataset, metric, or event.
2. Capture the contract: schema, semantic rules, freshness, owner, compatibility window, and failure expectations.
3. Review change impact across dashboards, analytics models, serving paths, and ML consumers.
4. Write the rollout packet: versioning, migration guidance, deprecation timing, backfill or replay requirements, and verification steps.
5. Close with a contract decision: safe to ship, stage behind versioning, or block until consumers are ready.

## Examples

### Example 1: Event contract review

```text
Use @data-contracts to review this analytics event schema change and tell me how to version it without breaking downstream dashboards or feature pipelines.
```

**Explanation:** Use this when producer-consumer boundaries are the main risk.

### Example 2: Contract packet renderer

```bash
python3 skills/data-contracts/scripts/render_data_contract_packet.py \
  "checkout events" \
  "producer,warehouse,analytics,feature store" \
  "schema,freshness,ownership,compatibility"
```

**Explanation:** Use this when you need a structured contract packet before a change review.

### Example 3: Metric governance review

```text
Use @data-contracts to define the contract for our revenue metric so analytics, finance, and ML all consume the same semantics.
```

**Explanation:** Use this when semantic drift is more dangerous than raw schema drift.

## Best Practices

- Treat schema, freshness, and ownership as one contract.
- Version breaking changes intentionally instead of relying on social coordination.
- Publish metric semantics alongside physical schema changes.
- Make backfill and replay expectations explicit before rollout.
- Keep consumer impact visible, especially for dashboards, alerts, and ML features.
- Prefer one authoritative contract document over scattered tribal knowledge.

## Troubleshooting

### Problem: The schema looks compatible, but downstream users still break

**Symptoms:** Consumers parse the data, but dashboards drift, models degrade, or analysts distrust the metric.
**Solution:** Review semantic changes, freshness shifts, null behavior, and backfill expectations. Compatibility is wider than column type matching.

### Problem: No one knows who owns the breakage

**Symptoms:** A pipeline fails or a metric changes, and teams argue over whether it is a producer, data platform, or analytics issue.
**Solution:** Publish explicit contract ownership with upstream and downstream escalation paths.

### Problem: Metrics keep changing meaning quietly

**Symptoms:** Business and engineering use the same metric name but disagree on filters, windows, or definitions.
**Solution:** Treat metric meaning as part of the data contract and version the definition when the semantics change.

## Related Skills

- `@database-design` — Use when the core issue is relational modeling or storage shape.
- `@analytics-instrumentation` — Use when event instrumentation quality is the main problem after this category grows deeper.
- `@model-serving` — Use when the contract change affects online inference or feature-serving behavior.

## Additional Resources

- [Data contracts checklist](references/checklist.md)
- [Schema change worksheet](references/schema-change-worksheet.md)
- [Render a data contract packet](scripts/render_data_contract_packet.py)
- [Contract review example](examples/contract-review-example.md)

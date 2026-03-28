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
upstream_head_repo: "diegosouzapw/omni-skills"
upstream_head_sha: "7b12c4fc4d000a3c49d1112ab86103594c94953a"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Data Contracts

## Overview

Use this skill when data interfaces need to be treated like product interfaces. It is for producer-consumer agreements, schema evolution, freshness expectations, lineage, ownership, and the contract between raw events, transformation layers, and downstream analytics or ML consumers.

Good output should reduce silent data breakage. The goal is to make schema and metric changes explicit before dashboards, models, pipelines, or downstream teams discover them the hard way.

A strong data contract is more than a schema snapshot. It usually includes:

- structural rules: fields, types, nullability, allowed values, keys, grain
- semantic rules: meaning of fields or metrics, business exclusions, windows, units
- quality rules: completeness, uniqueness, referential assumptions, anomaly thresholds
- operational rules: freshness, latency, backfill behavior, incident expectations
- governance rules: owner, steward, escalation path, privacy/classification notes
- lifecycle rules: compatibility mode, deprecation policy, migration window, rollback plan

## When to Use This Skill

- Use when event schemas or warehouse tables keep changing without consumer coordination.
- Use when analytics, data engineering, and application teams disagree about ownership, freshness, or change policy.
- Use when downstream consumers need stable contracts for metrics, datasets, feature inputs, or published tables.
- Use when a new data product needs explicit SLA, lineage, and schema-change policy.
- Use when a team needs a review packet before changing critical events, tables, dimensions, or metrics.
- Use when schema changes appear technically safe but may still create semantic drift or hidden downstream breakage.

## Operating Table

| Situation | Primary focus | Required checks | What good output looks like |
| :-------- | :------------ | :-------------- | :-------------------------- |
| Event schema change | consumer safety | compatibility mode, lineage, migration window, replay/backfill plan | Versioning, deprecation, and downstream impact are explicit |
| Warehouse refactor | lineage and enforcement | upstream source mapping, dbt/model rules, engine enforcement behavior | Source, transformation, owner, and platform caveats are visible |
| Metric drift | semantic contract | metric grain, filters, windows, exclusions, freshness, owner signoff | Definitions and freshness expectations are documented clearly |
| Feature pipeline | reliability | training-serving parity, null/default behavior, quality thresholds | Training and serving inputs have stable expectations |
| New data product | accountability | owner, consumers, SLA, quality rules, privacy/classification notes | SLA, owner, schema, and breakage policy are published |
| Unknown consumer risk | change safety | lineage evidence, usage logs, catalog review, stakeholder check | Breaking changes are paused until impact uncertainty is reduced |

## Core Concepts

### Data Is A Shared Interface

Schemas, events, tables, and metrics are dependency surfaces. Treating them as internal implementation detail leads to fragile dashboards, broken models, and unplanned pipeline work.

### Compatibility Is Not Only About Types

Freshness, ownership, semantics, null behavior, default values, and backfill policy are part of the contract too. A schema that still parses can still break a consumer badly.

### Contracts Should Be Executable

Prefer machine-readable or enforceable artifacts where possible: schema definitions, warehouse/model contracts, test suites, assertions, or validation checks. A prose document alone is useful, but it is weaker than a contract that can be checked in CI, build pipelines, or runtime monitoring.

### Lineage Is Part Of Safe Change Management

A contract review is incomplete if the team cannot identify likely downstream consumers. Missing lineage is uncertainty, not proof of safety.

### Contracts Need Named Owners

If no owner is named for producers, transformations, and consumers, breakage gets discovered socially instead of operationally.

## Workflow

1. **Identify the contract surface**  
   Define what is changing: event, table, view, metric, feature input, or published dataset. Record producer, transformation layers, storage/query platform, and known consumers.

2. **Choose the enforcement mechanism**  
   Decide how the contract will be made executable or checkable. Examples: JSON Schema, schema registry rules, dbt model contracts, warehouse constraints, data tests, assertions, or a documented manual review gate when automation is not yet available.

3. **Capture the current contract**  
   Write or update the contract artifact with schema, grain, semantic definitions, freshness expectations, ownership, escalation path, data quality rules, privacy/classification notes, and lifecycle policy. Use [references/data-contract-template.md](references/data-contract-template.md) or [references/metric-contract-template.md](references/metric-contract-template.md) when helpful.

4. **Classify the proposed change**  
   Determine whether the change is additive, behavior-changing, or breaking. Review field additions, removals, renames, nullability changes, enum/value changes, metric-definition changes, and default/backfill behavior. Use [references/schema-evolution-checklist.md](references/schema-evolution-checklist.md).

5. **Run impact analysis**  
   Enumerate known and suspected downstream consumers, dashboards, ML features, alerts, exports, and reverse ETL dependencies. Attach lineage or catalog evidence where available. If consumers are unknown, treat that as a risk that blocks unsafe changes. Use [references/impact-analysis-worksheet.md](references/impact-analysis-worksheet.md).

6. **Define rollout and rollback**  
   Specify versioning strategy, migration window, deprecation timing, dual-write or dual-read period if needed, replay/backfill requirements, and rollback conditions. State what will be monitored after release.

7. **Map contract clauses to validation points**  
   For each meaningful rule, identify at least one enforcement point: CI validation, warehouse build/test, runtime assertion, observability check, or manual review checkpoint. Do not leave critical expectations unenforced if a narrow automated check is feasible.

8. **Prepare the review packet**  
   Summarize current state, proposed change, compatibility decision, impact analysis, migration plan, rollback path, owners, and signoff status. See [examples/contract-change-review-packet.md](examples/contract-change-review-packet.md).

9. **Make the decision**  
   Close with one of these outcomes: safe to ship, ship behind versioning, ship after consumer migration, or block pending missing evidence.

## Examples

### Example 1: Event contract review

```text
Use @data-contracts to review this analytics event schema change and tell me whether it is additive, behavior-changing, or breaking. Include downstream risks, rollout guidance, and what evidence is still missing.
```

**Explanation:** Use this when producer-consumer boundaries are the main risk.

### Example 2: Contract packet renderer

```bash
python3 scripts/render_data_contract_packet.py \
  --name "checkout events" \
  --surface "event stream" \
  --owners "product telemetry,data platform" \
  --consumers "warehouse,finance dashboard,feature store" \
  --checks "schema,freshness,ownership,compatibility"
```

**Explanation:** Use this when you need a structured contract packet before a change review.

### Example 3: Metric governance review

```text
Use @data-contracts to define the contract for our revenue metric so analytics, finance, and ML all consume the same semantics. Include grain, exclusions, freshness, owner, and what changes would require versioning.
```

**Explanation:** Use this when semantic drift is more dangerous than raw schema drift.

### Example 4: JSON Schema contract starter

See [examples/json-schema-event-contract.json](examples/json-schema-event-contract.json) for a machine-readable event contract starter.

### Example 5: dbt model contract starter

See [examples/dbt-model-contract-example.yml](examples/dbt-model-contract-example.yml) for an analytical model contract with tests and explicit constraints.

## Best Practices

### Do

- Treat schema, semantics, quality, freshness, and ownership as one contract surface.
- Prefer executable contracts or validations over prose-only agreements.
- Classify changes explicitly as additive, behavior-changing, or breaking.
- Require a migration window and rollback path for breaking or consumer-visible changes.
- Keep lineage and consumer impact visible, especially for dashboards, alerts, reverse ETL, and ML features.
- Verify enforcement behavior in the actual platform before rollout; warehouse and lakehouse systems do not enforce evolution the same way.
- Version metric definitions when business meaning changes, even if the physical schema does not.
- Record owner, steward, and escalation path so incidents do not become responsibility disputes.
- Treat incomplete lineage as unresolved risk, not confirmation that no one depends on the data.
- Keep one authoritative contract artifact and link supporting checks to it.

### Don't

- Do not treat a type-compatible change as automatically safe.
- Do not rename or repurpose fields silently.
- Do not rely on CI-only validation as proof that production readers will behave the same way.
- Do not approve breaking changes without consumer communication, migration guidance, and a rollback path.
- Do not declare compliance or regulatory sufficiency just because a contract includes privacy/classification fields.
- Do not assume hidden consumers do not exist when lineage coverage is weak.

## Troubleshooting

### Problem: The schema looks compatible, but downstream users still break

**Symptoms:** Consumers parse the data, but dashboards drift, models degrade, or analysts distrust the metric.  
**Likely causes:** Semantic meaning changed, null/default behavior shifted, freshness regressed, or backfill behavior differed from prior assumptions.  
**Solution:** Review semantic clauses, freshness expectations, null handling, and backfill/replay policy. Compare old and new examples side by side and update the contract if the change is behavior-changing or breaking.

### Problem: Breaking change passes review but a downstream reader still fails

**Symptoms:** The change looked acceptable on paper, but a consumer errors on deserialize, query compilation, enum handling, or missing field assumptions.  
**Likely causes:** Hidden reader compatibility rules, field rename disguised as remove+add, enum/value change, consumer code relying on ordering/defaults, or incomplete migration coverage.  
**Solution:** Re-run the review with [references/schema-evolution-checklist.md](references/schema-evolution-checklist.md), inspect the exact reader assumptions, and restore compatibility through versioning, dual-write, or rollback.

### Problem: Validation passes in development but fails in production

**Symptoms:** Local or CI checks succeed, but warehouse jobs, table writes, or runtime assertions fail after deployment.  
**Likely causes:** Platform-specific enforcement differences, environment drift, stricter production constraints, or schema evolution rules that differ from the design assumption.  
**Solution:** Verify the enforcement point in the actual production platform, compare dev and prod settings, and narrow the rollout until platform semantics are confirmed.

### Problem: No one knows who owns the breakage

**Symptoms:** A pipeline fails or a metric changes, and teams argue over whether it is a producer, data platform, or analytics issue.  
**Likely causes:** No explicit owner, no steward, no escalation path, or contract artifacts spread across multiple systems.  
**Solution:** Publish explicit producer, steward, and escalation ownership in the contract packet and update the authoritative contract record.

### Problem: Metrics keep changing meaning quietly

**Symptoms:** Business and engineering use the same metric name but disagree on filters, windows, exclusions, or grain.  
**Likely causes:** Metric semantics are documented informally, not versioned, or not tied to release review.  
**Solution:** Use [references/metric-contract-template.md](references/metric-contract-template.md), version semantic changes intentionally, and require owner signoff when business meaning changes.

### Problem: A change seems safe, but unknown consumers might exist

**Symptoms:** Catalog lineage is incomplete, usage is poorly documented, and teams cannot prove whether a field, table, or metric is consumed elsewhere.  
**Likely causes:** Incomplete observability, unmanaged extracts, ad hoc analyst queries, or stale catalog metadata.  
**Solution:** Pause breaking changes, gather lineage and usage evidence, notify likely stakeholders, and downgrade the decision to additive-only or versioned rollout until uncertainty is reduced.

## Related Skills

- `@database-design` — Use when the core issue is relational modeling or storage shape.
- `@analytics-instrumentation` — Use when event instrumentation quality is the main problem after this category grows deeper.
- `@model-serving` — Use when the contract change affects online inference or feature-serving behavior.

## Additional Resources

- [Canonical data contract template](references/data-contract-template.md)
- [Schema evolution checklist](references/schema-evolution-checklist.md)
- [Impact analysis worksheet](references/impact-analysis-worksheet.md)
- [Metric contract template](references/metric-contract-template.md)
- [Troubleshooting playbook](references/troubleshooting-playbook.md)
- [Render a data contract packet](scripts/render_data_contract_packet.py)
- [Contract review packet example](examples/contract-change-review-packet.md)
- [JSON Schema event contract example](examples/json-schema-event-contract.json)
- [dbt model contract example](examples/dbt-model-contract-example.yml)

---
name: "observability-review"
description: "Observability workflow skill. Use this skill when a user needs logs, metrics, traces, alerts, or SLO review before shipping or debugging a service."
version: "0.0.1"
category: "devops"
tags:
  - "observability"
  - "alerts"
  - "slos"
  - "metrics"
  - "traces"
  - "logging"
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
upstream_skill: "skills/observability-review"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Observability Review

## Overview

Use this skill when a user needs a service-level observability review instead of a loose list of dashboards and alerts. It is for designing or reviewing metrics, logs, traces, SLOs, alert routes, and operator runbooks as one operational surface.

Good output should reduce blind spots, not just add more telemetry. The goal is to make failure detection, investigation, and escalation faster and easier to reason about.

## When to Use This Skill

- Use when a team is adding monitoring to a new service or queue consumer.
- Use when alerts are noisy, missing ownership, or not tied to user-visible impact.
- Use when a rollout needs SLOs, dashboards, or runbook coverage before release.
- Use when logs, metrics, and traces exist but do not line up into a usable debug path.
- Use when an incident review shows that the service had telemetry but still took too long to diagnose.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| New service launch | baseline telemetry | Golden signals, ownership, and first dashboards are defined before traffic ramps up |
| Alert fatigue | signal quality | Alerts map to user impact, page only the right owners, and suppress duplicate noise |
| Debug path gaps | traceability | A user symptom can be followed through logs, metrics, traces, and IDs |
| SLO review | reliability contract | Error budget, measurement window, and burn alerts are explicit |
| Incident follow-up | runbook quality | On-call instructions exist for the top failure paths and escalation points |

## Core Concepts

### Telemetry Should Explain User Impact

More telemetry is not automatically better. Start from user-visible symptoms, then decide which service signals make those symptoms explainable within minutes.

### Alerts Need an Operator Contract

An alert without owner, severity, and first-response action is just noise. The response path must be clear before the alert is considered useful.

## Workflow

1. Frame the service boundary: user path, dependencies, traffic shape, ownership, and the failure modes that matter most.
2. Design the telemetry model across metrics, logs, traces, and correlation identifiers so the debug path is coherent instead of fragmented.
3. Define SLOs, alert thresholds, and escalation rules that connect directly to customer impact and operator action.
4. Review dashboards and runbooks for completeness, making sure the first 15 minutes of investigation are covered explicitly.
5. Close with a release-readiness packet that lists gaps, follow-up work, and what must exist before the service is considered observable.

## Examples

### Example 1: Alert design review

```text
Use @observability-review to review our API alerts and tell me which ones should page, which should ticket, and which are just noisy duplicates.
```

**Explanation:** Use this when a team already has telemetry but needs a better escalation contract.

### Example 2: Service observability packet

```bash
python3 skills/observability-review/scripts/render_observability_packet.py \
  "payments-api" \
  "latency,error-rate,queue depth" \
  "slo,burn alerts,trace coverage"
```

**Explanation:** Use this when you want a structured packet before reviewing dashboards or alert rules.

### Example 3: Release gate framing

```text
Before this service rollout, use @observability-review to tell me what logs, metrics, traces, SLOs, and runbooks are missing.
```

**Explanation:** Use this when observability is part of release readiness rather than reactive debugging.

## Best Practices

- Prefer a small number of meaningful service-level indicators over a dashboard full of low-signal charts.
- Tie every page-worthy alert to a runbook step, an owner, and a measurable user-impact threshold.
- Keep log fields and trace attributes consistent enough to pivot between signals quickly.
- Use burn-rate or budget-based alerting when SLOs exist, not just static thresholds.
- Review observability as part of rollout readiness, not only after an incident.
- Document what is intentionally not monitored yet so blind spots are explicit.

## Troubleshooting

### Problem: There are lots of dashboards but investigation is still slow

**Symptoms:** Engineers can see charts, but cannot move from a user symptom to the failing component quickly.
**Solution:** Rebuild the debug path around correlation identifiers, service boundaries, and the minimum dashboards needed for the first 15 minutes of triage.

### Problem: Alerts fire constantly but nobody trusts them

**Symptoms:** Teams mute or ignore pages because thresholds are too sensitive or duplicate rules trigger together.
**Solution:** Collapse duplicate alerts, map severity to impact, and require a documented response action before keeping an alert active.

### Problem: The SLO exists on paper but not in operations

**Symptoms:** Error-budget numbers exist, but there are no burn alerts, no review cadence, or no release decisions tied to them.
**Solution:** Add burn-rate thresholds, owners, and release gates that explicitly reference the SLO and the remaining budget.

## Related Skills

- `@incident-response` — Use when the observability gaps are being reviewed in the context of a real outage.
- `@kubernetes` — Use when probes, rollout health, and cluster behavior need to match the telemetry contract.
- `@docker-expert` — Use when runtime behavior or container boundaries are shaping the telemetry design.

## Additional Resources

- [Observability checklist](references/checklist.md)
- [Alert review rubric](references/alert-review-rubric.md)
- [SLO worksheet](references/slo-worksheet.md)
- [Render an observability packet](scripts/render_observability_packet.py)
- [Observability readout example](examples/observability-readout.md)

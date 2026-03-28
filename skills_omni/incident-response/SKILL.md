---
name: "incident-response"
description: "Incident response workflow skill. Use this skill when a user needs outage triage, mitigation sequencing, stakeholder communication, or post-incident follow-up."
version: "0.0.1"
category: "testing-security"
tags:
  - "incident"
  - "outage"
  - "rollback"
  - "mitigation"
  - "escalation"
  - "postmortem"
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
upstream_skill: "skills/incident-response"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Incident Response

## Overview

Use this skill when the user needs a structured incident workflow instead of ad hoc troubleshooting under pressure. It is for triage, severity framing, mitigation options, communication, escalation, and clean handoff into post-incident review.

The goal is to reduce time-to-understanding and time-to-stabilization. Good output should make the incident easier to run, not just easier to describe afterward.

## When to Use This Skill

- Use when a production incident or severe degradation is already happening.
- Use when a rollback, feature flag, traffic shift, or dependency failover is being debated under time pressure.
- Use when responders need a clean incident channel structure, timeline, or stakeholder update cadence.
- Use when a team needs a first-pass severity recommendation and incident commander checklist.
- Use when a completed incident now needs a tight recovery summary and follow-up list.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| New outage | framing and control | Scope, severity, owner, and next 15-minute actions are explicit |
| Ongoing degradation | mitigation path | Response options are ranked by time-to-stabilize and blast radius |
| Stakeholder pressure | comms clarity | Internal and external updates are short, factual, and timed |
| Multi-team incident | coordination | Ownership, dependencies, and decision points are visible |
| Post-incident follow-up | recovery quality | Timeline, contributing factors, and durable actions are captured cleanly |

## Core Concepts

### Stabilization Comes Before Perfect Understanding

During an incident, the first job is to reduce user harm safely. Deep diagnosis matters, but only after immediate mitigation options are understood.

### Incident Communication Is Part of the Response

If the right people do not know the scope, severity, owner, or mitigation path, the response degrades. Good communication is an operational control, not extra ceremony.

## Workflow

1. Frame the incident scope: user impact, blast radius, start time, suspected systems, and current owner.
2. Assign or confirm the operational roles: incident commander, primary investigator, comms owner, and escalation contacts.
3. List mitigation options in time order, including rollback, traffic reduction, dependency isolation, feature disablement, or failover.
4. Produce a clean comms rhythm for responders and stakeholders, with explicit update intervals and decision points.
5. Close with a recovery packet that captures timeline, root-cause hypotheses, unresolved risks, and follow-up actions for the post-incident review.

## Examples

### Example 1: Live incident framing

```text
Use @incident-response to help me run this outage: checkout failures started 12 minutes ago, error rate is climbing, and we are debating rollback versus feature-flag disablement.
```

**Explanation:** Use this when you need immediate structure for a real response.

### Example 2: Incident packet

```bash
python3 skills/incident-response/scripts/render_incident_packet.py \
  "checkout degradation" \
  "sev-1" \
  "rollback,feature flag,traffic shift"
```

**Explanation:** Use this to create a consistent response packet before or during triage.

### Example 3: Post-incident summary

```text
Use @incident-response to turn this responder timeline into an executive summary, operator handoff, and follow-up list.
```

**Explanation:** Use this after mitigation when clarity and follow-through matter.

## Best Practices

- Establish the operational owner and update cadence immediately.
- Prefer reversible mitigation actions when time-to-stabilize is similar.
- Separate facts, hypotheses, and pending checks in every update.
- Keep stakeholder updates short and tied to user impact, mitigation state, and next checkpoint.
- Preserve a timeline while the incident is running so the postmortem is not reconstructed from memory.
- End the incident only after customer impact, residual risk, and follow-up ownership are explicit.

## Troubleshooting

### Problem: Responders are working, but nobody is steering

**Symptoms:** Many people are debugging, but no one is setting priorities, update cadence, or decision checkpoints.
**Solution:** Assign a clear incident commander immediately and reframe the channel around scope, severity, mitigation options, and the next update time.

### Problem: Mitigation options are unclear or too risky

**Symptoms:** Teams are debating rollback, feature flags, or traffic shifts without a shared view of blast radius or recovery time.
**Solution:** Rank each mitigation by time-to-stabilize, reversibility, and operational risk, then choose the smallest safe action that reduces user harm fastest.

### Problem: The incident is technically stable, but the handoff is weak

**Symptoms:** Systems recovered, yet there is no usable timeline, no committed follow-up, or no shared understanding of residual risk.
**Solution:** Produce a recovery packet with timeline, decisions, open hypotheses, and named owners before declaring the incident closed.

## Related Skills

- `@observability-review` — Use when telemetry coverage or alert quality is the main reason triage is slow.
- `@security-auditor` — Use when the incident may involve credential, data exposure, or access-control concerns.
- `@documentation` — Use when the post-incident output needs to become runbook or operator documentation.

## Additional Resources

- [Incident response checklist](references/checklist.md)
- [Escalation matrix template](references/escalation-matrix.md)
- [Postmortem outline](references/postmortem-outline.md)
- [Render an incident packet](scripts/render_incident_packet.py)
- [Incident timeline example](examples/incident-timeline-example.md)

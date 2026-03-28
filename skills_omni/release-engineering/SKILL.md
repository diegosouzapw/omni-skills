---
name: "release-engineering"
description: "Release engineering workflow skill. Use this skill when a user needs a safer release plan, promotion policy, rollback path, or deploy gate before shipping."
version: "0.0.1"
category: "devops"
tags:
  - "release"
  - "deployment"
  - "rollback"
  - "promotion"
  - "change-management"
  - "verification"
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
upstream_skill: "skills/release-engineering"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Release Engineering

## Overview

Use this skill when a team is preparing to ship and needs a release process that is operationally trustworthy, not just a deploy command. It is for promotion sequencing, release gates, rollback readiness, verifier ownership, communication, and post-release follow-through.

Good output should reduce release risk before production pressure appears. The goal is to make the release path explainable, reversible, and auditable.

## When to Use This Skill

- Use when a change is large enough that the deploy plan needs explicit phases and owners.
- Use when the team has rollout tooling but no clear release gate or rollback contract.
- Use when a release has cross-service dependencies, migrations, or customer communication concerns.
- Use when incidents have shown that deployment verification is too informal.
- Use when a maintainer needs a release packet that can be reused for future shipments.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Routine deploy | release gates | Promotion checks, release owner, and rollback triggers are explicit |
| High-risk launch | phased rollout | Stages, hold points, and blast-radius controls are documented |
| Multi-service cutover | dependency coordination | Ordering, readiness checks, and contingency ownership are clear |
| Migration release | rollback integrity | Irreversible steps are called out and mitigations exist before start |
| Post-release review | learning loop | Follow-up checks and release notes capture what should change next time |

## Core Concepts

### A Release Is More Than a Deploy

Shipping safely depends on who verifies what, when the rollout pauses, and what happens if the signal is bad. Treat the release as an operational workflow with explicit decision points.

### Rollback Must Be Designed Before the First Step

A release plan that only mentions rollback after the fact is incomplete. The rollback trigger, scope, data implications, and owner should exist before promotion begins.

## Workflow

1. Frame the release scope: services affected, dependencies, irreversible changes, expected user impact, and required stakeholders.
2. Define the release path: preflight checks, staged promotion, hold points, and the evidence required to continue.
3. Build the verification contract across technical signals, business signals, and operator observations during and after rollout.
4. Write the rollback and communication plan, including what stops the rollout and who makes the call.
5. Close with a release packet that contains ownership, timing, risks, follow-up checks, and unresolved gaps.

## Examples

### Example 1: Release-readiness review

```text
Use @release-engineering to turn this deployment plan into a phased release with explicit gates, verifiers, and rollback triggers.
```

**Explanation:** Use this when a deploy exists but the release decision process is still vague.

### Example 2: Release packet renderer

```bash
python3 skills/release-engineering/scripts/render_release_packet.py \
  "payments-cutover" \
  "db-migration,queue-drain,api-rollout" \
  "preflight,canary,regional rollout,post-check"
```

**Explanation:** Use this when you want a structured starting packet before the release meeting.

### Example 3: Rollback-first release design

```text
Use @release-engineering to tell me which parts of this rollout are reversible, which are not, and where the release should pause for verification.
```

**Explanation:** Use this when migrations, feature flags, or cross-service changes make the rollback story non-trivial.

## Best Practices

- Make promotion gates observable and evidence-based instead of relying on intuition alone.
- Tie every release step to a named owner, not a team in the abstract.
- Separate preflight checks from rollout verification and post-release confidence checks.
- Call out irreversible changes explicitly and decide whether they happen before, during, or after user traffic moves.
- Prefer a small set of meaningful go or no-go signals over a long checklist with no decision authority.
- Keep the release packet reusable so the team improves the process instead of rebuilding it from scratch each time.

## Troubleshooting

### Problem: The deploy is automated, but the release still feels risky

**Symptoms:** The pipeline finishes, yet operators are unsure whether traffic should move or whether the change is safe to leave live.
**Solution:** Add explicit hold points, verifier ownership, and a small set of go or no-go signals that must be reviewed before each promotion step.

### Problem: Rollback exists in theory, but not in practice

**Symptoms:** Teams say they can roll back, but the path is unclear once data changes or dependent services have already shifted.
**Solution:** Document rollback triggers, prerequisites, and irreversible edges before the release starts, then separate reversible and non-reversible steps in the packet.

### Problem: The release completes, but nobody knows if it really succeeded

**Symptoms:** Technical deploy success is recorded, but there is no shared view of business impact, error rates, or required follow-up checks.
**Solution:** Add a post-release verification window with named owners, customer-impact checks, and explicit criteria for closing the release.

## Related Skills

- `@observability-review` — Use when the release gates depend on better telemetry and alert quality.
- `@incident-response` — Use when the release is being planned after an outage or a risky mitigation.
- `@terraform` — Use when infrastructure changes and release orchestration need to stay aligned.

## Additional Resources

- [Release engineering checklist](references/checklist.md)
- [Rollback decision matrix](references/rollback-decision-matrix.md)
- [Promotion policy template](references/promotion-policy-template.md)
- [Render a release packet](scripts/render_release_packet.py)
- [Release readiness packet example](examples/release-readiness-packet.md)

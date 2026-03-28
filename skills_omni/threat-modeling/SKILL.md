---
name: "threat-modeling"
description: "Threat modeling workflow skill. Use this skill when a user needs trust boundaries, attacker goals, abuse cases, or mitigation priorities before implementation or release."
version: "0.0.1"
category: "security"
tags:
  - "security"
  - "threat-modeling"
  - "abuse-cases"
  - "trust-boundaries"
  - "mitigations"
  - "risk"
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
upstream_skill: "skills/threat-modeling"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Threat Modeling

## Overview

Use this skill when a team needs to understand attacker goals, trust boundaries, entry points, and mitigation priorities before shipping. It is for abuse-case analysis, boundary mapping, residual risk framing, and mitigation sequencing.

Good output should reduce unknown risk, not just produce a diagram. The goal is to make threats concrete enough that engineering and security teams can decide what must change now and what can wait.

## When to Use This Skill

- Use when designing a new service, workflow, or feature with sensitive data or external exposure.
- Use when security review exists, but the team has not mapped attacker paths or trust boundaries clearly.
- Use when a release introduces a new integration, auth path, file upload, or privileged action.
- Use when an incident or security finding shows the architecture was missing a key abuse case.
- Use when the team needs a mitigation order instead of a generic list of concerns.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| New external surface | attacker entry points | External interfaces, identity assumptions, and trust boundaries are explicit |
| Sensitive workflow | abuse resistance | High-value actions and data flows have misuse cases and mitigations |
| Architecture review | boundary integrity | Data stores, queues, secrets, and privileged services are mapped clearly |
| Incident follow-up | missed threat path | The previously unmodeled path is added with mitigation ownership |
| Release gate | mitigation priorities | Must-fix, should-fix, and accepted risks are separated cleanly |

## Core Concepts

### Threat Models Need Concrete Adversaries

If the attacker is only described as "a bad actor," the review stays abstract. Name realistic actor types, access assumptions, and goals so the abuse path becomes testable.

### Mitigations Should Follow the Real Attack Path

List mitigations in the order they break the attack chain. That makes tradeoffs and residual risk easier to explain than a flat backlog of controls.

## Workflow

1. Define the system boundary, assets, trust assumptions, identity flows, and the privileged operations that matter most.
2. Enumerate realistic attacker types, goals, and entry points, then map the highest-value abuse paths through the system.
3. Identify where the architecture depends on trust that is not enforced explicitly, such as unchecked internal calls, weak role boundaries, or unsafe defaults.
4. Build the mitigation plan by separating must-fix blockers, short-term hardening, and residual risk that is intentionally accepted.
5. Close with a threat-model packet that names ownership, test ideas, unresolved questions, and release implications.

## Examples

### Example 1: Design-time threat model

```text
Use @threat-modeling to review this file-upload feature and tell me the attacker goals, trust boundaries, and mitigations we should treat as release blockers.
```

**Explanation:** Use this before implementation is locked in and the mitigation order still matters.

### Example 2: Threat model packet renderer

```bash
python3 skills/threat-modeling/scripts/render_threat_packet.py \
  "admin-workflow" \
  "session hijack,privilege escalation,unsafe internal call" \
  "identity,logging,approval gates"
```

**Explanation:** Use this when you want a structured packet before a security review meeting.

### Example 3: Incident-driven threat review

```text
Use @threat-modeling to convert this auth incident into a threat model update with missed assumptions, new abuse cases, and mitigation priorities.
```

**Explanation:** Use this when a real finding should permanently change the model.

## Best Practices

- Model attacker goals and capabilities explicitly instead of discussing threats in generic terms.
- Keep trust boundaries concrete enough that engineers can point to where enforcement begins and ends.
- Separate blocker mitigations from backlog hardening so release decisions are honest.
- Tie every high-severity threat to an owner and a validation approach.
- Document accepted residual risk instead of pretending unresolved issues do not exist.
- Revisit the model when architecture or identity assumptions change materially.

## Troubleshooting

### Problem: The model lists risks, but the mitigations still feel vague

**Symptoms:** The review names issues like "auth risk" or "data leakage," but nobody can say which step in the attack path to break first.
**Solution:** Rebuild the threat path from attacker entry point to target asset, then prioritize controls that stop or narrow the path earliest.

### Problem: The team disagrees on what is inside the trust boundary

**Symptoms:** Some people assume internal traffic is trusted while others treat internal calls as hostile or conditional.
**Solution:** Make trust assumptions explicit and map where identity, authorization, and integrity checks are actually enforced.

### Problem: Security review keeps reopening the same class of issue

**Symptoms:** Similar findings recur because the prior model was not updated or was too high-level to guide future work.
**Solution:** Turn the incident or finding into a concrete threat-model update with new abuse cases, mitigations, and review triggers.

## Related Skills

- `@security-auditor` — Use when you need a broader review across code, configuration, and operational controls.
- `@incident-response` — Use when the model is being updated after a real exploit or outage.
- `@auth-flows` — Use when the highest-risk area is identity, authorization, or session design across UI and APIs.

## Additional Resources

- [Threat modeling checklist](references/checklist.md)
- [Abuse case matrix](references/abuse-case-matrix.md)
- [Trust boundary worksheet](references/trust-boundary-worksheet.md)
- [Render a threat packet](scripts/render_threat_packet.py)
- [Threat-model brief example](examples/threat-model-brief.md)

---
name: security-auditor
description: "Security audit workflow skill. Use this skill when a user needs a focused review of concrete security risks instead of a generic review."
version: "0.0.1"
category: testing-security
tags: [security, audit, review, threat-modeling, hardening]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-26"
date_updated: "2026-03-27"
---

# Security Auditor

## Overview

Use this skill when the user needs a targeted security audit of code, configuration, dependencies, build pipelines, or operational workflows. The goal is to identify concrete exposure, explain impact clearly, and prioritize the shortest path to risk reduction.

This skill is for actionable security review, not generic cautionary language. Output should separate confirmed issues, plausible risks, and hardening opportunities.

## When to Use This Skill

- Use when a feature introduces auth, permissions, file handling, network access, or secrets handling.
- Use when a pull request needs a security-focused pass beyond normal code review.
- Use when a hosted API, MCP server, CLI installer, or automation pipeline is being exposed to users.

## Core Concepts

### Attack Surface First

Start by naming the trust boundaries, inputs, outputs, storage locations, and privileged actions. Security review is easier when the exposure map is explicit.

### Severity Needs Context

Do not rank issues by intuition alone. Consider exploitability, required access, blast radius, recoverability, and whether the weakness is reachable in the real workflow.

## Operating Table

| Phase | Deliverable | Checks |
| --- | --- | --- |
| Surface map | Inputs, trust boundaries, secrets, and privileged actions | Every attacker-controlled edge is named |
| Review pass | Findings grouped by auth, filesystem, network, supply chain, and automation | The risky classes are concrete, not generic |
| Severity pass | Exploitability, blast radius, and recoverability notes | Ranking can be defended and repeated |
| Remediation plan | Ordered fix list plus evidence gaps | The owner knows what to fix first |

## Workflow

1. Map entry points: user-controlled inputs, webhooks, archive handling, filesystem writes, secrets, and config-driven behavior.
2. Review the high-risk classes first: auth, authorization, command execution, file writes, dependency trust, and artifact distribution.
3. Separate output into confirmed findings, plausible risks that need evidence, and hardening recommendations.
4. Assign severity with a short rubric that covers exploitability, blast radius, recoverability, and operational urgency.
5. End with a remediation packet that lists the fix order, missing tests, and the smallest validating follow-up.

## Examples

### Example 1: Hosted Runtime Review

```text
Audit this API and MCP deployment flow for auth, rate limiting, webhook, and artifact-download risks.
```

**Explanation:** The answer should focus on reachable exposure, not broad OWASP lists.

### Example 2: Pull Request Audit

```text
Review this patch like a security auditor and call out real vulnerabilities, risky assumptions, and missing tests.
```

**Explanation:** The answer should distinguish exploit paths from style issues.

### Example 3: Audit Planning Packet

```bash
python3 skills/security-auditor/scripts/render_audit_plan.py \
  "Hosted MCP server" \
  "auth,rate-limit,webhooks,artifact downloads,supply chain"
```

**Explanation:** Use the audit plan when you need a review worksheet, severity rubric, and remediation packet before reading code in depth.

## Best Practices

- ✅ **Do:** Tie every finding to an explicit attack path or misuse case.
- ✅ **Do:** Prefer the smallest defensible fix over a vague rewrite request.
- ✅ **Do:** Note what evidence would close uncertainty when a risk is plausible but not yet proven.
- ✅ **Do:** Use a severity rubric and a worksheet so the ranking is reproducible.
- ❌ **Don't:** Inflate severity without explaining exploitability.
- ❌ **Don't:** mix speculative hardening ideas into the same bucket as confirmed vulnerabilities.

## Troubleshooting

### Problem: Everything looks risky

**Symptoms:** The audit produces a long list with no prioritization.  
**Solution:** Re-center on reachable entry points, trust boundaries, and what an attacker can actually influence.

### Problem: The review is too generic

**Symptoms:** The output sounds like a checklist copied from a standard guide.  
**Solution:** Anchor every finding in the specific code, config, or workflow being reviewed.

### Problem: The recommended fix is too large to ship

**Symptoms:** The mitigation suggests a broad rewrite instead of a tractable reduction in risk.
**Solution:** Split the response into immediate remediation, short follow-up validation, and medium-term hardening so the smallest safe fix is visible.

## Related Skills

- `@vulnerability-scanner` — Use when the user needs a structured scanning pass before or alongside manual review.
- `@debugging` — Use when suspicious behavior must be reproduced before severity can be assessed.
- `@documentation` — Use when remediation requires updated runbooks, security notes, or operator guidance.

## Additional Resources

- [Security audit checklist](references/checklist.md)
- [Render an audit plan](scripts/render_audit_plan.py)
- [Threat-model worksheet](examples/threat-model-worksheet.md)
- [Finding severity rubric](examples/finding-severity-rubric.md)
- [Release pipeline audit packet](examples/release-pipeline-audit-packet.md)

```bash
python3 skills/security-auditor/scripts/render_audit_plan.py \
  "Hosted MCP server" \
  "auth,rate-limit,webhooks,artifact downloads"
```

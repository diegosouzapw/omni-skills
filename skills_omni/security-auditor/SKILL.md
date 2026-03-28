---
name: "security-auditor"
description: "Security audit workflow skill. Use this skill when a user needs a focused review of concrete security risks instead of a generic review."
version: "0.0.1"
category: "testing-security"
tags:
  - "security"
  - "audit"
  - "review"
  - "threat-modeling"
  - "hardening"
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
upstream_skill: "skills/security-auditor"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
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

## Step-by-Step Guide

### 1. Map the Entry Points

List user-controlled inputs, network boundaries, filesystem writes, webhook receivers, dependency resolution paths, and any place configuration changes behavior.

### 2. Review High-Risk Classes

Check for auth bypass, broken authorization, unsafe file writes, command execution, archive extraction, weak webhook validation, secrets exposure, and dependency trust issues.

### 3. Separate Findings by Certainty

Label each item as:

- confirmed vulnerability
- likely weakness that needs follow-up evidence
- hardening recommendation

### 4. Explain Impact and Fix Path

For every confirmed finding, state:

- what can go wrong
- what access is required
- how serious the result is
- what code or config change would reduce the risk

### 5. End With a Prioritized Remediation Plan

Put urgent fixes first, then medium-term hardening, then optional improvements.

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

## Best Practices

- ✅ **Do:** Tie every finding to an explicit attack path or misuse case.
- ✅ **Do:** Prefer the smallest defensible fix over a vague rewrite request.
- ✅ **Do:** Note what evidence would close uncertainty when a risk is plausible but not yet proven.
- ❌ **Don't:** Inflate severity without explaining exploitability.
- ❌ **Don't:** mix speculative hardening ideas into the same bucket as confirmed vulnerabilities.

## Troubleshooting

### Problem: Everything looks risky

**Symptoms:** The audit produces a long list with no prioritization.  
**Solution:** Re-center on reachable entry points, trust boundaries, and what an attacker can actually influence.

### Problem: The review is too generic

**Symptoms:** The output sounds like a checklist copied from a standard guide.  
**Solution:** Anchor every finding in the specific code, config, or workflow being reviewed.

## Related Skills

- `@vulnerability-scanner` — Use when the user needs a structured scanning pass before or alongside manual review.
- `@debugging` — Use when suspicious behavior must be reproduced before severity can be assessed.
- `@documentation` — Use when remediation requires updated runbooks, security notes, or operator guidance.

## Additional Resources

- [Security audit checklist](references/checklist.md)
- [Render an audit plan](scripts/render_audit_plan.py)

```bash
python3 skills/security-auditor/scripts/render_audit_plan.py \
  "Hosted MCP server" \
  "auth,rate-limit,webhooks,artifact downloads"
```

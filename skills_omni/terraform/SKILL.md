---
name: "terraform"
description: "Terraform workflow skill. Use this skill when a user needs infrastructure as code structure, modules, state strategy, or plan/apply review."
version: "0.0.1"
category: "devops"
tags:
  - "terraform"
  - "modules"
  - "state"
  - "infrastructure"
  - "plan"
  - "apply"
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
date_added: "2026-03-27"
date_updated: "2026-03-28"
upstream_skill: "skills/terraform"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Terraform

## Overview

Use this skill when the user needs deliberate Terraform structure instead of a pile of root-module files. It is for module boundaries, state strategy, variable design, secrets handling, plan review, and CI-ready infrastructure workflows.

This skill should optimize for predictable change, not just passing `terraform apply` once. Good output makes state ownership, module boundaries, and rollout risks explicit.

## When to Use This Skill

- Use when creating or reorganizing Terraform modules and root configurations.
- Use when plan output, provider auth, or state boundaries are hard to reason about.
- Use when the user needs safer infrastructure review, testing, or policy-ready structure.

## Core Concepts

### Module Boundaries Should Match Ownership

Modules are about reuse and stable responsibility, not arbitrary file splitting. Keep resource ownership obvious and inputs minimal.

### State Is an Operational Boundary

State sharing, remote outputs, and credentials strategy are deployment choices, not afterthoughts. Design them before recommending repository layout.

## Step-by-Step Guide

### 1. Define the Root Module Goal

State the environment, account or project scope, providers involved, and which team owns the resulting state.

### 2. Separate Root Logic From Reusable Modules

Place reusable building blocks under `modules/` and keep environment orchestration in the root. Do not mix environment wiring and generic module implementation casually.

### 3. Design Inputs, Outputs, and Secrets Handling

Minimize variables, document defaults, and avoid hardcoding secrets. Choose remote outputs or provider data sources deliberately rather than sharing whole state files blindly.

### 4. Make Change Review Explicit

Explain what a safe `plan` should show, what destructive changes to flag, and where policy or validation should run in CI.

### 5. Close With Testing and Rollout Advice

Provide the commands, environment assumptions, and validation checkpoints required before apply.

## Examples

### Example 1: Module cleanup

```text
Refactor this Terraform layout into clearer root modules and reusable modules without sharing whole state files.
```

**Explanation:** The answer should focus on ownership, module inputs, and safer state boundaries.

### Example 2: Plan review packet

```bash
python3 skills/terraform/scripts/render_module_review.py \
  "aws-platform" \
  "networking,compute,artifacts" \
  "module boundaries,state,secrets,ci"
```

**Explanation:** Use the packet when the request needs structured Terraform review.

## Best Practices

- ✅ **Do:** keep reusable modules separate from environment-specific root modules.
- ✅ **Do:** design state, outputs, and credentials as first-class operational concerns.
- ✅ **Do:** validate plans and tests in CI before recommending apply.
- ❌ **Don't:** share full state files between stacks when narrower interfaces will do.
- ❌ **Don't:** bury secrets in variables, defaults, or committed files.

## Troubleshooting

### Problem: Terraform structure feels reusable but hard to operate

**Symptoms:** Teams cannot tell which stack owns which resources or state.  
**Solution:** Re-split the configuration around ownership and remote boundaries, then simplify the module interfaces.

### Problem: Plan output is noisy or risky

**Symptoms:** Destructive changes appear unexpectedly or every plan includes unrelated drift.  
**Solution:** Re-check provider auth, state isolation, data sources, and whether modules are controlling too much in one place.

## Related Skills

- `@kubernetes` — Use when Terraform is provisioning the cluster surface that workloads depend on.
- `@docker-expert` — Use when infrastructure changes also alter image build or registry workflows.
- `@security-auditor` — Use when credentials, remote state, or CI policy boundaries need security review.

## Additional Resources

- [Terraform checklist](references/checklist.md)
- [Render a Terraform review packet](scripts/render_module_review.py)

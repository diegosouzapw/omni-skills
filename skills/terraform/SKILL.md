---
name: terraform
description: "Terraform workflow skill. Use this skill when a user needs infrastructure as code structure, modules, state strategy, or plan/apply review."
version: "0.0.1"
category: devops
tags: [terraform, modules, state, infrastructure, plan, apply]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-27"
date_updated: "2026-03-27"
---

# Terraform

## Overview

Use this skill when the user needs deliberate Terraform structure instead of a pile of root-module files. It is for module boundaries, state strategy, variable design, secrets handling, plan review, and CI-ready infrastructure workflows.

This skill should optimize for predictable change, not just passing `terraform apply` once. Good output makes state ownership, module boundaries, rollout risks, and operator checkpoints explicit.

## When to Use This Skill

- Use when creating or reorganizing Terraform modules and root configurations.
- Use when plan output, provider auth, or state boundaries are hard to reason about.
- Use when the user needs safer infrastructure review, testing, or policy-ready structure.
- Use when an environment split, workspace strategy, or remote state boundary is being debated.
- Use when a Terraform repository needs more reusable contracts and less copy-paste root logic.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Module cleanup | ownership and interfaces | Root modules and reusable modules are clearly separated and inputs stay narrow |
| New environment rollout | state and promotion flow | Environment boundaries, backend choices, and validation checkpoints are explicit |
| Plan review | destructive risk and drift | High-risk changes, import needs, and rollout order are visible before apply |
| CI hardening | validation and policy gates | Formatting, validate, plan, and review gates are repeatable and minimal |
| Secret or backend uncertainty | operational boundaries | Credential flow and state access are documented instead of assumed |

## Core Concepts

### Module Boundaries Should Match Ownership

Modules are about reuse and stable responsibility, not arbitrary file splitting. Keep resource ownership obvious and inputs minimal.

### State Is an Operational Boundary

State sharing, remote outputs, and credentials strategy are deployment choices, not afterthoughts. Design them before recommending repository layout.

## Workflow

1. Define the root module goal: environment, account or project scope, provider set, ownership, and deployment boundary.
2. Split reusable module logic from root orchestration and make each module contract explicit before reorganizing files.
3. Design variables, outputs, secrets flow, and backend boundaries so the plan surface matches how teams actually operate the stack.
4. Review the expected `terraform plan` shape, drift risks, destructive changes, and CI or policy gates before recommending apply.
5. Close with rollout advice that covers commands, checkpoints, rollback constraints, and what must be true before production apply.

## Examples

### Example 1: Module cleanup

```text
Refactor this Terraform layout into clearer root modules and reusable modules without sharing whole state files.
```

### Example 2: Plan review packet

```bash
python3 skills/terraform/scripts/render_module_review.py \
  "aws-platform" \
  "networking,compute,artifacts" \
  "module boundaries,state,secrets,ci"
```

### Example 3: Safer rollout framing

```text
Use @terraform to review this root module, state backend, and CI plan gate. Tell me what should block apply and what can wait for follow-up.
```

## Best Practices

- Keep reusable modules separate from environment-specific root modules.
- Design state, outputs, and credentials as first-class operational concerns.
- Keep module interfaces narrow and avoid leaking whole provider or backend assumptions through every variable.
- Validate plans and tests in CI before recommending apply.
- Prefer stable contracts between stacks over direct full-state coupling.
- End with rollout sequencing, not just a folder layout suggestion.

## Troubleshooting

### Problem: Terraform structure feels reusable but hard to operate

**Symptoms:** Teams cannot tell which stack owns which resources or state.
**Solution:** Re-split the configuration around ownership and remote boundaries, then simplify the module interfaces.

### Problem: Plan output is noisy or risky

**Symptoms:** Destructive changes appear unexpectedly or every plan includes unrelated drift.
**Solution:** Re-check provider auth, state isolation, data sources, and whether modules are controlling too much in one place.

### Problem: Backend and promotion strategy are still implicit

**Symptoms:** The layout looks cleaner, but nobody can explain how state moves between environments or who can apply where.
**Solution:** Add a state-boundary worksheet and rollout rubric that make backend ownership, environment promotion, and approval gates explicit.

## Related Skills

- `@kubernetes` — Use when Terraform is provisioning the cluster surface that workloads depend on.
- `@docker-expert` — Use when infrastructure changes also alter image build or registry workflows.
- `@security-auditor` — Use when credentials, remote state, or CI policy boundaries need security review.

## Additional Resources

- [Terraform checklist](references/checklist.md)
- [Render a Terraform review packet](scripts/render_module_review.py)
- [State boundary worksheet](examples/state-boundary-worksheet.md)
- [Module contract template](examples/module-contract-template.md)
- [Plan review rubric](examples/plan-review-rubric.md)

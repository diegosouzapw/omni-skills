---
name: "kubernetes"
description: "Kubernetes workflow skill. Use this skill when a user needs workload manifests, rollout strategy, service exposure, or cluster operations guidance."
version: "0.0.1"
category: "devops"
tags:
  - "kubernetes"
  - "k8s"
  - "manifests"
  - "deployments"
  - "services"
  - "rollouts"
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
upstream_skill: "skills/kubernetes"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Kubernetes

## Overview

Use this skill when the user needs declarative deployment guidance for Kubernetes workloads. It is for manifests, rollouts, probes, configuration boundaries, workload decomposition, and day-two concerns like debugging and rollback.

This skill should favor small, explicit manifests over magical abstraction layers. Good output should make ownership, selectors, failure modes, and rollout behavior obvious.

## When to Use This Skill

- Use when creating or reviewing manifests for Deployments, Jobs, Services, Ingress, or related objects.
- Use when the user needs readiness, liveness, scaling, configuration, or rollout behavior clarified.
- Use when a deployment works in theory but fails under cluster realities such as probe timing, labels, or config drift.

## Core Concepts

### Labels and Selectors Are the Wiring

Many Kubernetes failures are really ownership failures. Stable, semantic labels and selectors matter as much as the pod spec.

### Keep Manifests Minimal and Observable

Small manifests are easier to review, diff, and roll back. Add only the configuration needed for the stated workload, then document what validates success.

## Step-by-Step Guide

### 1. Define the Workload Boundary

State the container image, entrypoint, ports, config sources, secret sources, and persistence expectations before writing manifests.

### 2. Build the Resource Set

Choose the minimum set of resources required. For a typical app this means Deployment, Service, ConfigMap or Secret references, and optional Ingress or HorizontalPodAutoscaler only if the workload actually needs them.

### 3. Make Health and Rollout Behavior Explicit

Add readiness, liveness, startup probes, resource requests, and rollout settings only after the app behavior is understood. Probe values should reflect the app, not copy-pasted defaults.

### 4. Validate Ownership and Discovery

Check labels, selectors, service names, ports, namespaces, and DNS assumptions. Call out which objects must be applied together and which can roll independently.

### 5. Finish With an Operator Path

Provide the validation commands, what "healthy" looks like, and the first commands to run when the workload fails.

## Examples

### Example 1: Service rollout review

```text
Review these Kubernetes manifests for a Node API and make the rollout, probe, and configuration strategy safer.
```

**Explanation:** The answer should inspect selectors, probe realism, config boundaries, and deployment safety.

### Example 2: Manifest review packet

```bash
python3 skills/kubernetes/scripts/render_manifest_review.py \
  "catalog-api" \
  "deployment,service,configmap" \
  "rollout safety,probe tuning,labels"
```

**Explanation:** Use the packet when the request needs a structured manifest review.

## Best Practices

- ✅ **Do:** Use current stable API versions and keep manifests in YAML for readability.
- ✅ **Do:** Use semantic labels consistently across workloads and Services.
- ✅ **Do:** Keep manifests minimal and grouped by related objects.
- ❌ **Don't:** treat probe values as universal defaults.
- ❌ **Don't:** hide selectors, ports, or namespace assumptions inside implied conventions.

## Troubleshooting

### Problem: Pods start but traffic never reaches them

**Symptoms:** Pods are Ready or Running, but the Service has no endpoints or traffic fails.  
**Solution:** Re-check labels, selectors, target ports, namespace, and whether the readiness probe is blocking endpoints.

### Problem: The rollout keeps flapping

**Symptoms:** Pods restart, fail readiness, or never stabilize after deploy.  
**Solution:** Inspect probe timing, startup path, resource requests, and config dependencies before changing autoscaling or replica counts.

## Related Skills

- `@docker-expert` — Use when the container image or entrypoint contract is the real source of the issue.
- `@terraform` — Use when cluster objects are managed as infrastructure code.
- `@security-auditor` — Use when admission, secrets, or exposed Services need security review.

## Additional Resources

- [Kubernetes checklist](references/checklist.md)
- [Render a manifest review packet](scripts/render_manifest_review.py)

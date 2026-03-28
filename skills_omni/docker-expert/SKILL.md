---
name: "docker-expert"
description: "Docker workflow skill. Use this skill when a user needs Dockerfiles, image build strategy, runtime hardening, or container debugging guidance."
version: "0.0.1"
category: "devops"
tags:
  - "docker"
  - "containers"
  - "images"
  - "dockerfile"
  - "buildkit"
  - "compose"
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
upstream_skill: "skills/docker-expert"
upstream_author: "Omni Skills Team"
upstream_source: "omni-team"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "baseline-sync"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Docker Expert

## Overview

Use this skill when the user needs production-minded Docker guidance rather than a quick Dockerfile guess. It is for image structure, build performance, runtime safety, dependency layering, container debugging, and handoff-ready examples.

This skill should prefer boring reliability over clever image tricks. Good output makes images smaller, faster to rebuild, easier to inspect, and safer to ship.

## When to Use This Skill

- Use when creating or refactoring a `Dockerfile`, `compose.yaml`, or containerized local workflow.
- Use when a build is slow, non-reproducible, or shipping too much runtime baggage.
- Use when the user needs runtime hardening, non-root execution, or better image hygiene.

## Core Concepts

### Build Context Is Part of the Contract

Poor build context and layer ordering can dominate build time and leak files that never belonged in the image. Reduce the context, isolate dependency layers, and keep the rebuild path explicit.

### Runtime Images Should Be Smaller Than Build Images

Compilers, caches, and test tooling belong in build stages unless runtime behavior actually requires them. Multi-stage builds are usually the safest default.

## Step-by-Step Guide

### 1. Define the Runtime Target

Name the actual workload: API, worker, CLI, cron, or static asset server. Then state the expected process model, ports, filesystem writes, and environment variables.

### 2. Design the Build Stages

Separate dependency restore, source copy, build output, and runtime packaging. Reorder layers so infrequently changed inputs land earlier and high-churn app files land later.

### 3. Reduce the Attack Surface

Prefer minimal base images that still support the runtime. Drop compilers and package managers from the final stage where possible, run as a non-root user, and avoid baking secrets into layers.

### 4. Make Local and CI Behavior Match

Document the exact build command, target, and arguments the team should use. If a workflow depends on BuildKit cache mounts, health checks, or platform flags, say so explicitly.

### 5. Validate the Container Contract

End with build and run commands, expected filesystem writes, health-check behavior, and the shortest debugging sequence for startup failures.

## Examples

### Example 1: Multi-stage web app image

```text
Refactor this Node image into a multi-stage Dockerfile that installs dependencies once, builds once, and ships a small runtime image.
```

**Explanation:** The answer should focus on layer order, runtime size, and safer defaults.

### Example 2: Build review packet

```bash
python3 skills/docker-expert/scripts/render_container_plan.py \
  "catalog-api" \
  "node runtime with read-only HTTP server" \
  "small image,reproducible build,non-root user"
```

**Explanation:** Use the starter packet when the user needs a structured Docker review or migration plan.

## Best Practices

- ✅ **Do:** Prefer multi-stage builds for compiled apps or heavy dependency trees.
- ✅ **Do:** Copy manifest files before source files so dependency layers cache cleanly.
- ✅ **Do:** Run containers as non-root when the workload permits it.
- ❌ **Don't:** ship build tools, caches, or test dependencies in the runtime image without a reason.
- ❌ **Don't:** let `COPY . .` pull in secrets, local caches, or unrelated project files.

## Troubleshooting

### Problem: Rebuilds are too slow

**Symptoms:** Small code changes trigger large dependency reinstall steps.  
**Solution:** Reorder the Dockerfile so package manifests and lockfiles are copied before application source, and keep the build context tight.

### Problem: The image works locally but fails in deployment

**Symptoms:** The process crashes under non-root execution, read-only filesystems, or different environment variables.  
**Solution:** State the runtime contract explicitly, then test the same command, user, port, and writable paths outside local Compose shortcuts.

## Related Skills

- `@kubernetes` — Use when the container contract must fit probes, rollouts, and cluster deployment.
- `@terraform` — Use when the container is part of a broader infrastructure rollout.
- `@vulnerability-scanner` — Use when the image or archive workflow needs security verification before release.

## Additional Resources

- [Docker checklist](references/checklist.md)
- [Render a container plan](scripts/render_container_plan.py)

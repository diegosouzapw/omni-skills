# Kubernetes Checklist

Use this checklist when designing or reviewing Kubernetes deployment changes.

## Configuration Discipline

- Prefer YAML manifests for human review and keep each object minimal.
- Use the latest stable API version supported by the cluster.
- Group related objects together so rollout intent is visible in review.

## Ownership and Discovery

- Use semantic labels and a consistent common label set.
- Make selectors explicit and verify they match the intended pods.
- Document which resources must exist before traffic can flow.

## Runtime Safety

- Tune readiness, liveness, and startup probes to the actual application lifecycle.
- Add resource requests and limits deliberately, not mechanically.
- Keep config and secrets separated from application code where possible.

## Validation

- State the `kubectl` commands that prove the rollout is healthy.
- Define the first debug checks for failing pods, failed Services, or broken ingress routing.
- Call out rollback expectations before recommending risky manifest changes.

## Official Sources Used

- Kubernetes configuration good practices: https://kubernetes.io/blog/2025/11/25/configuration-good-practices/

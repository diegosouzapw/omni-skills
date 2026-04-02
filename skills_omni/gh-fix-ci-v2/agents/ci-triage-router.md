# CI Triage Router

Use this note when PR-check triage reveals the primary problem belongs to a more specialized workflow.

## Route to workflow authoring/debugging when

- triggers, filters, conditions, or matrix definitions are the main issue
- the next step is redesigning `.github/workflows/*.yml`
- the PR-check problem is really a workflow-logic problem

## Route to test or application debugging when

- CI correctly exposes a real application failure
- the next step is reproducing and fixing failing tests, builds, or runtime behavior in code

## Route to Docker or image-build debugging when

- the failure is inside container build steps, image publishing, or registry auth

## Route to Kubernetes/deployment debugging when

- the check failure comes from deployment validation, cluster access, manifests, or rollout checks

## Route to security or dependency triage when

- the check is a security scan, license policy, secret scan, or dependency governance failure

## Route to broader planning when

- the user wants a larger implementation plan spanning multiple systems beyond the immediate CI failure

## Handoff rule

When routing, preserve:

- PR URL
- failing check name
- run URL
- concise evidence snippet
- what has already been ruled out
- whether user approval has been granted for implementation

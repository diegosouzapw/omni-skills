# Service Selection Comparison Example

## Scenario

A small team needs an event-driven platform with bursty traffic, minimal ops overhead, and some long-running background jobs.

## Comparison shape

| Option | Strengths | Weaknesses | Best fit |
| --- | --- | --- | --- |
| Lambda | low ops, strong event integration, elastic for bursty traffic | execution model constraints, long-running jobs may not fit cleanly | short-lived event handlers |
| ECS on Fargate | container flexibility with lower ops than cluster management | always more platform surface than Lambda | mixed workloads needing containers |
| EKS | maximum Kubernetes flexibility and ecosystem alignment | highest operational complexity | teams already standardized on Kubernetes |

## Example recommendation

Start with a Lambda-first design for short-lived event handling and use ECS on Fargate for long-running workers if those jobs do not fit Lambda constraints. Avoid EKS unless Kubernetes is already a strategic platform requirement.

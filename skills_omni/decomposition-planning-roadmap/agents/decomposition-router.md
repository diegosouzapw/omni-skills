# Decomposition Planning Router

Use this note to route requests to the right skill before applying the roadmap workflow.

## Use `decomposition-planning-roadmap` when

- the user wants extraction order, phases, milestones, or sequencing
- candidate seams already exist or can be evaluated from available evidence
- the main need is prioritization and migration planning

## Route away when

### Route to `@domain-analysis` if
- domains or bounded contexts are still unclear
- the team needs event storming, subdomain discovery, or business capability mapping

### Route to `@component-identification-sizing` if
- the component inventory is missing
- the user does not yet know what major modules or candidates exist

### Route to dependency analysis if
- runtime, code, or data coupling is not mapped enough to compare candidates

### Route to service-boundary design if
- the user needs API contracts, ownership model, data model split, or internal service design

### Route to observability readiness if
- rollout safety depends on tracing, alerts, dashboards, or telemetry maturity

## Safe fallback guidance

If prerequisites are weak, say so clearly. Recommend a preparatory phase or a different skill instead of inventing a confident extraction order.

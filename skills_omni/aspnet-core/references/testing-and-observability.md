# Testing and Observability

Use this reference when behavior changes need validation beyond compilation.

## Testing layers

### Unit tests

Use for isolated business logic and framework-independent components.

### Integration tests

Use for:

- endpoint behavior
- middleware behavior
- auth and routing behavior
- configuration-dependent request handling

For ASP.NET Core applications, prefer integration testing patterns based on `WebApplicationFactory` and `TestServer` when appropriate.

### Browser or end-to-end tests

Use when UI behavior, navigation, forms, or JavaScript integration must be validated.

## Observability review

Check:

- structured logging quality
- whether important request paths and failures are logged clearly
- health checks for liveness/readiness where relevant
- trace and metric implications for changed request paths or background work

## Health checks

Review whether the app distinguishes:

- simple liveness
- dependency-aware readiness

Do not expose sensitive dependency details unnecessarily in public health responses.

## Handoff rule

If runtime behavior changed and no meaningful validation was performed, handoff is incomplete.
